---
normalized_id: shared-lecture-notes-krusell-p-lecture-notes-for-macroeconomics-i-princeton-2004-196s-gk
exam_code: SHARED
material_scope: krusell p. lecture notes for macroeconomics i (princeton, 2004)(196s)_gk_.pdf
material_group: shared
document_type: lecture-notes
source_repo_path: resources/source-material/shared/Krusell P. Lecture notes for Macroeconomics I (Princeton, 2004)(196s)_GK_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-lecture-notes-krusell-p-lecture-notes-for-macroeconomics-i-princeton-2004-196s-gk

Lecture notes for Macroeconomics I, 2004



                   Per Krusell




Please do NOT distribute without permission!
        Comments and suggestions are welcome.




                         1
2
Chapter 1

Introduction

These lecture notes cover a one-semester course. The overriding goal of the course is
to begin provide methodological tools for advanced research in macroeconomics. The
emphasis is on theory, although data guides the theoretical explorations. We build en-
tirely on models with microfoundations, i.e., models where behavior is derived from basic
assumptions on consumers’ preferences, production technologies, information, and so on.
Behavior is always assumed to be rational: given the restrictions imposed by the primi-
tives, all actors in the economic models are assumed to maximize their objectives.
    Macroeconomic studies emphasize decisions with a time dimension, such as various
forms of investments. Moreover, it is often useful to assume that the time horizon is
infinite. This makes dynamic optimization a necessary part of the tools we need to
cover, and the first significant fraction of the course goes through, in turn, sequential
maximization and dynamic programming. We assume throughout that time is discrete,
since it leads to simpler and more intuitive mathematics.
    The baseline macroeconomic model we use is based on the assumption of perfect com-
petition. Current research often departs from this assumption in various ways, but it is
important to understand the baseline in order to fully understand the extensions. There-
fore, we also spend significant time on the concepts of dynamic competitive equilibrium,
both expressed in the sequence form and recursively (using dynamic programming). In
this context, the welfare properties of our dynamic equilibria are studied.
    Infinite-horizon models can employ different assumptions about the time horizon of
each economic actor. We study two extreme cases: (i) all consumers (really, dynasties) live
forever - the infinitely-lived agent model - and (ii) consumers have finite and deterministic
lifetimes but there are consumers of different generations living at any point in time -
the overlapping-generations model. These two cases share many features but also have
important differences. Most of the course material is built on infinitely-lived agents, but
we also study the overlapping-generations model in some depth.
    Finally, many macroeconomic issues involve uncertainty. Therefore, we spend some
time on how to introduce it into our models, both mathematically and in terms of eco-
nomic concepts.
    The second part of the course notes goes over some important macroeconomic topics.
These involve growth and business cycle analysis, asset pricing, fiscal policy, monetary
economics, unemployment, and inequality. Here, few new tools are introduced; we instead
simply apply the tools from the first part of the course.


                                             3
4
Chapter 2

Motivation: Solow’s growth model

Most modern dynamic models of macroeconomics build on the framework described in
Solow’s (1956) paper.1 To motivate what is to follow, we start with a brief description of
the Solow model. This model was set up to study a closed economy, and we will assume
that there is a constant population.


2.1      The model
The model consists of some simple equations:
                                     Ct + It = Yt = F (Kt, L)                                   (2.1)


                                      It = Kt+1 − (1 − δ) Kt                                    (2.2)

                                         It = sF (Kt , L) .                                     (2.3)
    The equalities in (2.1) are accounting identities, saying that total resources are either
consumed or invested, and that total resources are given by the output of a production
function with capital and labor as inputs. We take labor input to be constant at this point,
whereas the other variables are allowed to vary over time. The accounting identity can also
be interpreted in terms of technology: this is a one-good, or one-sector, economy, where
the only good can be used both for consumption and as capital (investment). Equation
(2.2) describes capital accumulation: the output good, in the form of investment, is
used to accumulate the capital input, and capital depreciates geometrically: a constant
fraction δ ∈ [0, 1] disintegrates every period.
    Equation (2.3) is a behavioral equation. Unlike in the rest of the course, behavior
here is assumed directly: a constant fraction s ∈ [0, 1] of output is saved, independently
of what the level of output is.
    These equations together form a complete dynamic system - an equation system defin-
ing how its variables evolve over time - for some given F . That is, we know, in principle,
what {Kt+1 }∞                        ∞
              t=0 and {Yt , Ct , It }t=0 will be, given any initial capital value K0 .
    In order to analyze the dynamics, we now make some assumptions.
   1
    No attempt is made here to properly assign credit to the inventors of each model. For example, the
Solow model could also be called the Swan model, although usually it is not.

                                                  5
- F (0, L) = 0.
             δ
- FK (0, L) > .
             s
-   lim sFK (K, L) + (1 − δ) < 1.
    k→∞

- F is strictly concave in K and strictly increasing in K.

    An example of a function satisfying these assumptions, and that will be used repeat-
edly in the course, is F (K, L) = AK α L1−α with 0 < α < 1. This production function
is called Cobb-Douglas function. Here A is a productivity parameter, and α and 1 − α
denote the capital and labor share, respectively. Why they are called shares will be the
subject of the discussion later on.
    The law of motion equation for capital may be rewritten as:

                              Kt+1 = (1 − δ) Kt + sF (Kt , L) .

Mapping Kt into Kt+1 graphically, this can be pictured as in Figure 2.1.


                      kt+1




                       k∗




                                                  k∗                kt


                        Figure 2.1: Convergence in the Solow model

    The intersection of the 45o line with the savings function determines the stationary
point. It can be verified that the system exhibits “global convergence” to the unique
strictly positive steady state, K ∗ , that satisfies:

                   K ∗ = (1 − δ) K ∗ + sF (K ∗ , L) , or
                  δK ∗ = sF (K ∗ , L) (there is a unique positive solution).

    Given this information, we have

Theorem 2.1 ∃K ∗ > 0 : ∀K0 > 0, Kt → K ∗ .

                                              6
      Proof outline.

 (1) Find a K ∗ candidate; show it is unique.

 (2) If K0 > K ∗ , show that K ∗ < Kt+1 < Kt ∀t ≥ 0 (using Kt+1 − Kt = sF (Kt , L) −
     δKt ). If K0 < K ∗ , show that K ∗ > Kt+1 > Kt ∀t > 0.

 (3) We have concluded that Kt is a monotonic sequence, and that it is also bounded.
     Now use a math theorem: a monotone bounded sequence has a limit.


    The proof of this theorem establishes not only global convergence but also that conver-
gence is monotonic. The result is rather special in that it holds only under quite restrictive
circumstances (for example, a one-sector model is a key part of the restriction).


2.2        Applications
2.2.1        Growth
The Solow growth model is an important part of many more complicated models setups
in modern macroeconomic analysis. Its first and main use is that of understanding
why output grows in the long run and what forms that growth takes. We will spend
considerable time with that topic later. This involves discussing what features of the
production technology are important for long-run growth and analyzing the endogenous
determination of productivity in a technological sense.
    Consider, for example, a simple Cobb-Douglas case. In that case, α - the capital share
- determines the shape of the law of motion function for capital accumulation. If α is
close to one the law of motion is close to being linear in capital; if it is close to zero (but
not exactly zero), the law of motion is quite nonlinear in capital. In terms of Figure 2.1,
an α close to zero will make the steady state lower, and the convergence to the steady
state will be quite rapid: from a given initial capital stock, few periods are necessary to
get close to the steady state. If, on the other hand, α is close to one, the steady state is
far to the right in the figure, and convergence will be slow.
    When the production function is linear in capital - when α equals one - we have no
positive steady state.2 Suppose that sA+1−δ exceeds one. Then over time output would
keep growing, and it would grow at precisely rate sA + 1 − δ. Output and consumption
would grow at that rate too. The “Ak” production technology is the simplest tech-
nology allowing “endogenous growth”, i.e. the growth rate in the model is nontrivially
determined, at least in the sense that different types of behavior correspond to different
growth rates. Savings rates that are very low will even make the economy shrink - if
sA + 1 − δ goes below one. Keeping in mind that savings rates are probably influenced
by government policy, such as taxation, this means that there would be a choice, both
by individuals and government, of whether or not to grow.
    The “Ak” model of growth emphasizes physical capital accumulation as the driving
force of prosperity. It is not the only way to think about growth, however. For example,
  2
      This statement is true unless sA + 1 − δ happens to equal 1.

                                                    7
                     k
                         t+1




                                            k∗1             k∗2     kt


                  Figure 2.2: Random productivity in the Solow model


one could model A more carefully and be specific about how productivity is enhanced
over time via explicit decisions to accumulate R&D capital or human capital - learning.
We will return to these different alternatives later.
    In the context of understanding the growth of output, Solow also developed the
methodology of “growth accounting”, which is a way of breaking down the total growth of
an economy into components: input growth and technology growth. We will discuss this
later too; growth accounting remains a central tool for analyzing output and productivity
growth over time and also for understanding differences between different economies in
the cross-section.

2.2.2     Business Cycles
Many modern studies of business cycles also rely fundamentally on the Solow model.
This includes real as well as monetary models. How can Solow’s framework turn into a
business cycle setup? Assume that the production technology will exhibit a stochastic
component affecting the productivity of factors. For example, assume it is of the form

                                     F = At F̂ (Kt , L) ,

where At is stochastic, for instance taking on two values: AH , AL . Retaining the assump-
tion that savings rates are constant, we have what is depicted in Figure 2.2.
    It is clear from studying this graph that as productivity realizations are high or low,
output and total savings fluctuate. Will there be convergence to a steady state? In the
sense of constancy of capital and other variables, steady states will clearly not be feasible
here. However, another aspect of the convergence in deterministic model is inherited
here: over time, initial conditions (the initial capital stock) lose influence and eventually
- “after an infinite number of time periods” - the stochastic process for the endogenous

                                              8
variables will settle down and become stationary. Stationarity here is a statistical term,
one that we will not develop in great detail in this course, although we will define it and
use it for much simpler stochastic processes in the context of asset pricing. One element
of stationarity in this case is that there will be a smallest compact set of capital stocks
such that, once the capital stock is in this set, it never leaves the set: the “ergodic set”.
In the figure, this set is determined by the two intersections with the 45o line.

2.2.3     Other topics
In other macroeconomic topics, such as monetary economics, labor, fiscal policy, and
asset pricing, the Solow model is also commonly used. Then, other aspects need to be
added to the framework, but Solow’s one-sector approach is still very useful for talking
about the macroeconomic aggregates.


2.3      Where next?
The model presented has the problem of relying on an exogenously determined savings
rate. We saw that the savings rate, in particular, did not depend on the level of capital
or output, nor on the productivity level. As stated in the introduction, this course
aims to develop microfoundations. We would therefore like the savings behavior to be
an outcome rather than an input into the model. To this end, the following chapters
will introduce decision-making consumers into our economy. We will first cover decision
making with a finite time horizon and then decision making when the time horizon is
infinite. The decision problems will be phrased generally as well as applied to the Solow
growth environment and other environments that will be of interest later.




                                             9
10
Chapter 3

Dynamic optimization

There are two common approaches to modelling real-life individuals: (i) they live a finite
number of periods and (ii) they live forever. The latter is the most common approach,
but the former requires less mathematical sophistication in the decision problem. We will
start with finite-life models and then consider infinite horizons.
    We will also study two alternative ways of solving dynamic optimization problems:
using sequential methods and using recursive methods. Sequential methods involve maxi-
mizing over sequences. Recursive methods - also labelled dynamic programming methods
- involve functional equations. We begin with sequential methods and then move to re-
cursive methods.


3.1      Sequential methods
3.1.1     A finite horizon
Consider a consumer having to decide on a consumption stream for T periods. Con-
sumer’s preference ordering of the consumption streams can be represented with the
utility function

                                         U (c0 , c1 , ..., cT ) .
    A standard assumption is that this function exhibits “additive separability”, with
stationary discounting weights:

                                                           T
                                                           X
                               U (c0 , c1 , ..., cT ) =             β t u (ct ) .
                                                           t=0


    Notice that the per-period (or instantaneous) utility index u (·) does not depend on
time. Nevertheless, if instead we had ut (·) the utility function U (c0 , c1 , ..., cT ) would still
be additively separable.
    The powers of β are the discounting weights. They are called stationary because the
ratio between the weights of any two different dates t = i and t = j > i only depends on
the number of periods elapsed between i and j, and not on the values of i or j.

                                                   11
    The standard assumption is 0 < β < 1, which corresponds to the observations that hu-
man beings seem to deem consumption at an early time more valuable than consumption
further off in the future.
    We now state the dynamic optimization problem associated with the neoclassical
growth model in finite time.

                            P
                            T
              max                 β t u (ct )
           {ct ,kt+1 }T
                      t=0   t=0
                    s.t. ct + kt+1 ≤ f (kt ) ≡ F (kt , N ) + (1 − δ) kt , ∀t = 0, ..., T
                         ct ≥ 0, ∀t = 0, ..., T
                         kt+1 ≥ 0, ∀t = 0, ..., T
                         k0 > 0 given.
    This is a consumption-savings decision problem. It is, in this case, a “planning prob-
lem”: there is no market where the individual might obtain an interest income from his
savings, but rather savings yield production following the transformation rule f (kt ).
    The assumptions we will make on the production technology are the same as before.
With respect to u, we will assume that it is strictly increasing. What’s the implication
of this? Notice that our resource constraint ct + kt+1 ≤ f (kt ) allows for throwing goods
away, since strict inequality is allowed. But the assumption that u is strictly increasing
will imply that goods will not actually be thrown away, because they are valuable. We
know in advance that the resource constraint will need to bind at our solution to this
problem.
    The solution method we will employ is straight out of standard optimization theory for
finite-dimensional problems. In particular, we will make ample use of the Kuhn-Tucker
theorem. The Kuhn-Tucker conditions:

  (i) are necessary for an optimum, provided a constraint qualification is met (we do not
      worry about it here);

 (ii) are sufficient if the objective function is concave in the choice vector and the con-
      straint set is convex.

    We now characterize the solution further. It is useful to assume the following:
lim u0 (c) = ∞. This implies that ct = 0 at any t cannot be optimal, so we can ig-
c→0
nore the non-negativity constraint on consumption: we know in advance that it will not
bind in our solution to this problem.
    We write down the Lagrangian function:
                            T
                            X
                      L=            β t [u (ct ) − λt [ct + kt+1 − f (kt )] + µt kt+1 ] ,
                             t=0

where we introduced the Lagrange/Kuhn-Tucker multipliers β t λt and β t µt for our con-
straints. This is formulation A of our problem.
    The next step involves taking derivatives with respect to the decision variables ct and
kt+1 and stating the complete Kuhn-Tucker conditions. Before proceeding, however, let
us take a look at an alternative formulation (formulation B) for this problem:

                                                       12
                                  T
                                  X
                             L=          β t [u [f (kt ) − kt+1 ] + µt kt+1 ] .
                                   t=0

     Notice that we have made use of our knowledge of the fact that the resource constraint
will be binding in our solution to get rid of the multiplier β t λt . The two formulations
are equivalent under the stated assumption on u. However, eliminating the multiplier
β t λt might simplify the algebra. The multiplier may sometimes prove an efficient way of
condensing information at the time of actually working out the solution.
     We now solve the problem using formulation A. The first-order conditions are:
               ∂L
                   : β t [u0 (ct ) − λt ] = 0, t = 0, ..., T
               ∂ct
              ∂L
                   : −β t λt + β t µt + β t+1 λt+1 f 0 (kt+1 ) = 0, t = 0, ..., T − 1.
             ∂kt+1
For period T ,
                               ∂L
                                     : −β T λT + β T µT = 0.
                              ∂kT +1
   The first-order condition under formulation B are:
          ∂L
                : −β t u0 (ct ) + β t µt + β t+1 u0 (ct+1 ) f 0 (kt+1 ) = 0, t = 0, ..., T − 1
         ∂kt+1
          ∂L
                : −β T u0 (cT ) + β T µT = 0.
         ∂kT +1
Finally, the Kuhn-Tucker conditions also include

                                      µt kt+1 = 0, t = 0, ..., T

                                          λt ≥ 0, t = 0, ..., T
                                         kt+1 ≥ 0, t = 0, ..., T
                                         µt ≥ 0, t = 0, ..., T.
These conditions (the first of which is usually referred to as the complementary slackness
condition) are the same for formulations A and B. To see this, we use u0 (ct ) to replace
λt in the derivative ∂k∂L
                        t+1
                            in formulation A.
                         0
    Now noting that u (c) > 0 ∀c, we conclude that µT > 0 in particular. This comes
from the derivative of the Lagrangian with respect to kT +1 :

                                     −β T u0 (cT ) + β T µT = 0.

But then this implies that kT +1 = 0: the consumer leaves no capital for after the last
period, since he receives no utility from that capital and would rather use it for consump-
tion during his lifetime. Of course, this is a trivial result, but its derivation is useful and
will have an infinite-horizon counterpart that is less trivial.
    The summary statement of the first-order conditions is then the “Euler equation”:
             u0 [f (kt ) − kt+1 ] = βu0 [f (kt+1 ) − kt+2 ] f 0 (kt+1 ) , t = 0, ..., T − 1
                                        k0 given, kT +1 = 0,

                                                    13
where the capital sequence is what we need to solve for. The Euler equation is sometimes
referred to as a “variational” condition (as part of “calculus of variation”): given to
boundary conditions kt and kt+2 , it represents the idea of varying the intermediate value
kt+1 so as to achieve the best outcome. Combining these variational conditions, we
notice that there are a total of T + 2 equations and T + 2 unknowns - the unknowns
are a sequence of capital stocks with an initial and a terminal condition. This is called
a difference equation in the capital sequence. It is a second-order difference equation
because there are two lags of capital in the equation. Since the number of unknowns is
equal to the number of equations, the difference equation system will typically have a
solution, and under appropriate assumptions on primitives, there will be only one such
solution. We will now briefly look at the conditions under which there is only one solution
to the first-order conditions or, alternatively, under which the first-order conditions are
sufficient.
    What we need to assume is that u is concave. Then, using formulation A, we know
            PT
that U =       u (ct ) is concave in the vector {ct }, since the sum of concave functions is
           t=0
concave. Moreover, the constraint set is convex in {ct , kt+1 }, provided that we assume
concavity of f (this can easily be checked using the definitions of a convex set and a
concave function). So, concavity of the functions u and f makes the overall objective
concave and the choice set convex, and thus the first-order conditions are sufficient.
Alternatively, using formulation B, since u(f (kt ) − kt+1 ) is concave in (kt , kt+1 ), which
follows from the fact that u is concave and increasing and that f is concave, the objective
is concave in {kt+1 }. The constraint set in formulation B is clearly convex, since all it
requires is kt+1 ≥ 0 for all t.
    Finally, a unique solution (to the problem as such as well as to the first-order con-
ditions) is obtained if the objective is strictly concave, which we have if u is strictly
concave.
    To interpret the key equation for optimization, the Euler equation, it is useful to break
it down in three components:

                 u0 (ct )       =         βu0 (ct+1 )          ·          f 0 (kt+1 ) .
                 | {z }                   | {z }                          | {z }
          Utility lost if you           Utility increase                Return on the
         invest “one” more              next period per             invested unit: by how
         unit, i.e. marginal        unit of increase in ct+1       many units next period’s
           cost of saving                                              c can increase

   Thus, because of the concavity of u, equalizing the marginal cost of saving to the
marginal benefit of saving is a condition for an optimum.
   How do the primitives affect savings behavior? We can identify three component
determinants of saving: the concavity of utility, the discounting, and the return to saving.
Their effects are described in turn.

  (i) Consumption “smoothing”: if the utility function is strictly concave, the individual
      prefers a smooth consumption stream.
      Example: Suppose that technology is linear, i.e. f (k) = Rk, and that Rβ = 1.

                                                 14
     Then

         βf 0 (kt+1 ) = βR = 1 ⇒ u0 (ct ) = u0 (ct+1 )             ⇒             c = ct+1 .
                                                         z         }|           { t
                                                         if u is strictly concave

 (ii) Impatience: via β, we see that a low β (a low discount factor, or a high discount
      rate β1 − 1) will tend to be associated with low ct+1 ’s and high ct ’s.

(iii) The return to savings: f 0 (kt+1 ) clearly also affects behavior, but its effect on con-
      sumption cannot be signed unless we make more specific assumptions. Moreover,
      kt+1 is endogenous, so when f 0 nontrivially depends on it, we cannot vary the return
      independently. The case when f 0 is a constant, such as in the Ak growth model, is
      more convenient. We will return to it below.

   To gain some more detailed understanding of the determinants of savings, let us study
some examples.

Example 3.1 Logarithmic utility. Let the utility index be

                                       u (c) = log c,

and the production technology be represented by the function

                                        f (k) = Rk.

Notice that this amounts to a linear function with exogenous marginal return R on in-
vestment.
    The Euler equation becomes:

                              u0 (ct ) = βu0 (ct+1 ) f 0 (kt+1 )
                                                     | {z }
                                                             R
                                  1    βR
                                     =      ,
                                  ct   ct+1
and so
                                       ct+1 = βRct .                                      (3.1)
   The optimal path has consumption growing at the rate βR, and it is constant between
any two periods. From the resource constraint (recall that it binds):

                                       c0 + k1 = Rk0
                                       c1 + k2 = Rk1
                                              ..
                                               .
                                     cT + kT +1 = RkT
                                         kT +1 = 0.

With repeated substitutions, we obtain the “consolidated” or “intertemporal” budget con-
straint:
                               1      1            1
                         c0 + c1 + 2 c2 + ... + T cT = Rk0 .
                              R      R            R

                                             15
    The left-hand side is the present value of the consumption stream, and the right hand
side is the present value of income. Using the optimal consumption growth rule ct+1 =
βRct ,
                       1           1                  1
                  c0 + βRc0 + 2 β 2 R2 c0 + ... + T β T RT c0 = Rk0
                       R          R     £            R       ¤
                                     c0 1 + β + β + ... + β T = Rk0 .
                                                   2


This implies
                                               Rk0
                                  c0 =                        .
                                      1 + β + β 2 + ... + β T
    We are now able to study the effects of changes in the marginal return on savings, R,
on the consumer’s behavior. An increase in R will cause a rise in consumption in all
periods. Crucial to this result is the chosen form for the utility function. Logarithmic
utility has the property that income and substitution effects, when they go in opposite
directions, exactly offset each other. Changes in R have two components: a change in
relative prices (of consumption in different periods) and a change in present-value income:
Rk0 . With logarithmic utility, a relative price change between two goods will make the
consumption of the favored good go up whereas the consumption of other good will remain
at the same level. The unfavored good will not be consumed in a lower amount since there
is a positive income effect of the other good being cheaper, and that effect will be spread
over both goods. Thus, the period 0 good will be unfavored in our example (since all other
goods have lower price relative to good 0 if R goes up), and its consumption level will
not decrease. The consumption of good 0 will in fact increase because total present-value
income is multiplicative in R.
    Next assume that the sequence of interest rates is not constant, but that instead we
have {Rt }Tt=0 with Rt different at each t. The consolidated budget constraint now reads:
                      1        1            1                    1
               c0 +      c1 +       c2 +          c3 + ... +          cT = k0 R0 .
                      R1      R1 R2      R1 R2 R3            R1 ...RT
   Plugging in the optimal path ct+1 = βRt+1 ct , analogous to (3.1), one obtains
                             £                       ¤
                           c0 1 + β + β 2 + ... + β T = k0 R0 ,
from which
                                                  k0 R0
                                 c0 =
                                         1 + β + β 2 + ... + β T
                                               k0 R0 R1 β
                                 c1   =
                                         1 + β + β 2 + ... + β T
                                        ..
                                         .
                                              k0 R0 ...Rt β t
                                 ct   =                          .
                                         1 + β + β 2 + ... + β T
Now note the following comparative statics:
                       Rt ↑ ⇒ c0 , c1 , ..., ct−1 are unaffected
                            ⇒ savings at 0, ..., t − 1 are unaffected.
   In the logarithmic utility case, if the return between t and t + 1 changes, consumption
and savings remain unaltered until t − 1!

                                                16
Example 3.2 A slightly more general utility function. Let us introduce the most
commonly used additively separable utility function in macroeconomics: the CES (con-
stant elasticity of substitution) function:

                                                        c1−σ − 1
                                              u (c) =            .
                                                          1−σ

This function has as special cases:

     σ=0      linear utility,
     σ>0      strictly concave utility,
     σ=1      logarithmic utility,
     σ=∞      not possible, but this is usually referred to as Leontief utility function.

Let us define the intertemporal elasticity of substitution (IES):
                                                             c     
                                                              t+k
                                                         d
                                                             ct
                                                           ct+k
                                                            ct
                                          IES ≡           dRt,t+k
                                                                        .
                                                          Rt,t+k


We will show that all the special cases of the CES function have constant intertemporal
elasticity of substitution equal to σ1 . We begin with the Euler equation:

                                    u0 (ct ) = βu0 (ct+1 ) Rt+1 .

Replacing repeatedly, we have

                          u0 (ct ) = β k u0 (ct+k ) Rt+1 Rt+2 ...Rt+k
                                                    |      {z       }
                                                       ≡ Rt,t+k
                           u0 (c) = c−σ ⇒ c−σ
                                           t   = β k c−σt+k Rt,t+k
                            ct+k    ¡ ¢1            1
                                  = β k σ (Rt,t+k ) σ .
                             ct

This means that our elasticity measure becomes
                                    c         
                                         t+k
                                d
                                         ct
                                   ct+k
                                    ct
                                                         d log ct+k
                                                                ct              1
                                 dRt,t+k
                                                   =                        =     .
                                                        d log Rt,t+k            σ
                                  Rt,t+k


    When σ = 1, expenditure shares do not change: this is the logarithmic case. When
σ > 1, an increase in Rt,t+k would lead ct to go up and savings to go down: the income
effect, leading to smoothing across all goods, is larger than substitution effect. Finally,
when σ < 1, the substitution effect is stronger: savings go up whenever Rt,t+k goes up.
When σ = 0, the elasticity is infinite and savings respond discontinuously to Rt,t+k .

                                                        17
3.1.2    Infinite horizon
Why should macroeconomists study the case of an infinite time horizon? There are at
least two reasons:

  1. Altruism: People do not live forever, but they may care about their offspring. Let
     u (ct ) denote the utility flow to generation t. We can then interpret β t as the weight
     an individual attaches to the utility enjoyed by his descendants t generations down
                                                  P
                                                  ∞
     the family tree. His total joy is given by      β t u (ct ). A β < 1 thus implies that the
                                                       t=0
     individual cares more about himself than about his descendants.
     If generations were overlapping the utility function would look similar:
                                    ∞
                                    X
                                          β t [u (cyt ) + δu (cot )] .
                                              |         {z         }
                                    t=0
                                            utility flow to generation t



     The existence of bequests indicates that there is altruism. However, bequests can
     also be of an entirely selfish, precautionary nature: when the life-time is unknown, as
     it is in practice, bequests would then be accidental and simply reflect the remaining
     buffer the individual kept for the possible remainder of his life. An argument for
     why bequests may not be entirely accidental is that annuity markets are not used
     very much. Annuity markets allow you to effectively insure against living “too
     long”, and would thus make bequests disappear: all your wealth would be put into
     annuities and disappear upon death.
     It is important to point out that the time horizon for an individual only becomes
     truly infinite if the altruism takes the form of caring about the utility of the descen-
     dants. If, instead, utility is derived from the act of giving itself, without reference
     to how the gift influences others’ welfare, the individual’s problem again becomes
     finite. Thus, if I live for one period and care about how much I give, my utility
     function might be u(c) + v(b), where v measures how much I enjoy giving bequests,
     b. Although b subsequently shows up in another agent’s budget and influences his
     choices and welfare, those effects are irrelevant for the decision of the present agent,
     and we have a simple static framework. This model is usually referred to as the
     “warm glow” model (the giver feels a warm glow from giving).
     For a variation, think of an individual (or a dynasty) that, if still alive, each period
     dies with probability π. Its expected lifetime utility from a consumption stream
     {ct }∞
          t=0 is then given by
                                         ∞
                                         X
                                            β t π t u (ct ) .
                                            t=0

     This framework - the “perpetual-youth” model, or, perhaps better, the “sudden-
     death” model - is sometimes used in applied contexts. Analytically, it looks like the
     infinite-life model, only with the difference that the discount factor is βπ. These
     models are thus the same on the individual level. On the aggregate level, they

                                                  18
      are not, since the sudden-death model carries with it the assumption that a de-
      ceased dynasty is replaced with a new one: it is, formally speaking, an overlapping-
      generations model (see more on this below), and as such it is different in certain
      key respects.
      Finally, one can also study explicit games between players of different generations.
      We may assume that parents care about their children, that sons care about their
      parents as well, and that each of their activities is in part motivated by this altru-
      ism, leading to intergenerational gifts as well as bequests. Since such models lead
      us into game theory rather quickly, and therefore typically to more complicated
      characterizations, we will assume that altruism is unidirectional.

   2. Simplicity: Many macroeconomic models with a long time horizon tend to show
      very similar results to infinite-horizon models if the horizon is long enough. Infinite-
      horizon models are stationary in nature - the remaining time horizon does not
      change as we move forward in time - and their characterization can therefore often
      be obtained more easily than when the time horizon changes over time.
      The similarity in results between long- and infinite-horizon setups is is not present
      in all models in economics. For example, in the dynamic game theory the Folk
      Theorem means that the extension from a long (but finite) to an infinite horizon
      introduces a qualitative change in the model results. The typical example of this
      “discontinuity at infinity” is the prisoner’s dilemma repeated a finite number of
      times, leading to a unique, non-cooperative outcome, versus the same game repeated
      an infinite number of times, leading to a large set of equilibria.

     Models with an infinite time horizon demand more advanced mathematical tools.
Consumers in our models are now choosing infinite sequences. These are no longer ele-
ments of Euclidean space <n , which was used for our finite-horizon case. A basic question
is when solutions to a given problem exist. Suppose we are seeking to maximize a function
U (x), x ∈ S. If U (·) is a continuous function, then we can invoke Weierstrass’s theorem
provided that the set S meets the appropriate conditions: S needs to be nonempty and
compact. For S ⊂ <n , compactness simply means closedness and boundedness. In the
case of finite horizon, recall that x was a consumption vector of the form (c1 , ..., cT ) from
a subset S of <T . In these cases, it was usually easy to check compactness. But now
we have to deal with larger spaces; we are dealing with infinite-dimensional sequences
{kt }∞
     t=0 . Several issues arise. How do we define continuity in this setup? What is an
open set? What does compactness mean? We will not answer these questions here, but
we will bring up some specific examples of situations when maximization problems are
ill-defined, that is, when they have no solution.


Examples where utility may be unbounded
Continuity of the objective requires boundedness. When will U be bounded? If two
consumption streams yield “infinite” utility, it is not clear how to compare them. The
device chosen to represent preference rankings over consumption streams is thus failing.
But is it possible to get unbounded utility? How can we avoid this pitfall?

                                              19
    Utility may become unbounded for many reasons. Although these reasons interact,
let us consider each one independently.

Preference requirements
   Consider a plan specifying equal amounts of consumption goods for each period,
throughout eternity:
                                 {ct }∞        ∞
                                      t=0 = {c}t=0 .

    Then the value of this consumption stream according to the chosen time-separable
utility function representation is computed by:
                                    ∞
                                    X                     ∞
                                                          X
                              U=          β t u (ct ) =         β t u (c) .
                                    t=0                   t=0

    What is a necessary condition for U to take on a finiteP  value in this case? The answer
is β < 1: under this parameter specification, the series ∞          t
                                                               t=0 β u (c) is convergent, and
has a finite limit. If u (·) has the CES parametric form, then the answer to the question
of convergence will involve not only β, but also σ.
    Alternatively, consider a constantly increasing consumption stream:
                                            ©          t ª∞
                                  {ct }∞
                                       t=0 = c0 (1 + γ) t=0 .
             P                 P∞ t ¡              t¢
    Is U = ∞        t
               t=0 β u (ct ) =   t=0 β u c0 (1 + γ)   bounded? Notice that the argument in
the instantaneous utility index u (·) is increasing without bound, while for β < 1 β t is
decreasing to 0. This seems to hint that the key to having a convergent series this time
lies in the form of u (·) and in how it “processes” the increase in the value of its argument.
In the case of CES utility representation, the relationship between β, σ, and γ is thus
the key to boundedness. In particular, boundedness requires β (1 + γ)1−σ < 1.
    Two other issues are involved in the question of boundedness of utility. One is tech-
nological, and the other may be called institutional.

Technological considerations
    Technological restrictions are obviously necessary in some cases, as illustrated indi-
rectly above. Let the technological constraints facing the consumer be represented by the
budget constraint:

                                     ct + kt+1 = Rkt
                                            kt ≥ 0.

This constraint needs to hold for all time periods t (this is just the “Ak” case already
mentioned). This implies that consumption can grow by (at most) a rate of R. A given
rate R may thus be so high that it leads to unbounded utility, as shown above.

Institutional framework
   Some things simply cannot happen in an organized society. One of these is so dear to
analysts modelling infinite-horizon economies that it has a name of its own. It expresses
the fact that if an individual announces that he plans to borrow and never pay back, then

                                                 20
he will not be able to find a lender. The requirement that “no Ponzi games are allowed”
therefore represents this institutional assumption, and it sometimes needs to be added
formally to the budget constraints of a consumer.
   To see why this condition is necessary, consider a candidate solution to consumer’s
maximization problem {c∗t }∞                ∗
                             t=0 , and let ct ≤ c̄ ∀t; i.e., the consumption is bounded for
every t. Suppose we endow a consumer with a given initial amount of net assets, a0 .
These represent (real) claims against other agents. The constraint set is assumed to be
                                  ct + at+1 = Rat , ∀t ≥ 0.
   Here at < 0 represents borrowing by the agent. Absent no-Ponzi-game condition, the
agent could improve on {c∗t }∞
                             t=0 as follows:

  1. Put c̃0 = c∗0 + 1, thus making ã1 = a∗1 − 1.
  2. For every t ≥ 1 leave c̃t = c∗t by setting ãt+1 = a∗t+1 − Rt .
    With strictly monotone utility function, the agent will be strictly better off under
this alternative consumption allocation, and it also satisfies budget constraint period-
by-period. Because this sort of improvement is possible for any candidate solution, the
maximum of the lifetime utility will not exist.
    However, observe that there is something wrong with the suggested improvement,
as the agent’s debt is growing without bound at rate R, and it is never repaid. This
situation when the agent never repays his debt (or, equivalently, postpones repayment
indefinitely) is ruled out by imposing the no-Ponzi-game (nPg) condition, by explicitly
adding the restriction that:
                                            at
                                         lim t ≥ 0.
                                        t→∞ R
Intuitively, this means that in present-value terms, the agent cannot engage in borrowing
and lending so that his “terminal asset holdings” are negative, since this means that he
would borrow and not pay back.
    Can we use the nPg condition to simplify, or “consolidate”, the sequence of budget
constraints? By repeatedly replacing T times, we obtain
                                  T
                                  X          1    aT +1
                                        ct     t
                                                 + T ≤ a0 R.
                                  t=0
                                             R     R
   By the nPg condition, we then have
                 Ã T                !
                   X 1        aT +1                        1
                                                               T
                                                               X     ³a      ´
                                                                        T +1
             lim       ct t + T       =                  lim  + limct
            T →∞
                   t=0
                         R     R                 T →∞
                                                       t=0
                                                           Rt T →∞ RT
                                                 X∞
                                                        1       ³a     ´
                                                                  T +1
                                               ≡     ct t + lim     T
                                                                         ,
                                                 t=0
                                                        R  T →∞   R
and since the inequality is valid for every T , and we assume nPg condition to hold,
                                        ∞
                                        X          1
                                              ct      ≤ a0 R.
                                        t=0
                                                   Rt
This is the consolidated budget constraint. In practice, we will often use a version of nPg
with equality.

                                                    21
Example 3.3 We will now consider a simple example that will illustrate the use of nPg
condition in infinite-horizon optimization. Let the period utility of the agent u (c) = log c,
and suppose that there is one asset in the economy that pays a (net) interest rate of r.
Assume also that the agent lives forever. Then, his optimization problem is:
                                          P
                                          ∞
                            max∞                β t log ct
                         {ct ,at+1 }t=0   t=0
                                  s.t. ct + at+1 = at (1 + r) , ∀t ≥ 0
                                       a0 given
                                       nPg condition.

   To solve this problem, replace the period budget constraints with a consolidated one as
we have done before. The consolidated budget constraint reads
                              X∞     µ      ¶t
                                        1
                                  ct           = a0 (1 + r) .
                              t=0
                                       1+r

With this simplification the first-order conditions are
                                          µ      ¶t
                                  t1         1
                                β     =λ            , ∀t ≥ 0,
                                   ct       1+r
where λ is the Lagrange multiplier associated with the consolidated budget constraint.
From the first-order conditions it follows that

                                   ct = [β (1 + r)]t c0 , ∀t ≥ 1.

Substituting this expression into the consolidated budget constraint, we obtain
                         ∞
                         X                          1
                               β t (1 + r)t              c0 = a0 (1 + r)
                         t=0
                                                (1 + r)t
                                                     X∞
                                                  c0     β t = a0 (1 + r) .
                                                     t=0

From here, c0 = a0 (1 − β) (1 + r), and consumption in the periods t ≥ 1 can be recovered
from ct = [β (1 + r)]t c0 .

Sufficient conditions
Maximization of utility under an infinite horizon will mostly involve the same mathemat-
ical techniques as in the finite-horizon case. In particular, we will make use of (Kuhn-
Tucker) first-order conditions: barring corner constraints, we will choose a path such that
the marginal effect of any choice variable on utility is zero. In particular, consider the
sequences that the consumer chooses for his consumption and accumulation of capital.
The first-order conditions will then lead to an Euler equation, which is defined for any
path for capital beginning with an initial value k0 . In the case of finite time horizon it
did not make sense for the agent to invest in the final period T , since no utility would be
enjoyed from consuming goods at time T + 1 when the economy is inactive. This final

                                                     22
zero capital condition was key to determining the optimal path of capital: it provided us
with a terminal condition for a difference equation system. In the case of infinite time
horizon there is no such final T : the economy will continue forever. Therefore, the dif-
ference equation that characterizes the first-order condition may have an infinite number
of solutions. We will need some other way of pinning down the consumer’s choice, and
it turns out that the missing condition is analogous to the requirement that the capital
stock be zero at T + 1, for else the consumer could increase his utility.
    The missing condition, which we will now discuss in detail, is called the transversality
condition. It is, typically, a necessary condition for an optimum, and it expresses the
following simple idea: it cannot be optimal for the consumer to choose a capital sequence
such that, in present-value utility terms, the shadow value of kt remains positive as t
goes to infinity. This could not be optimal because it would represent saving too much:
a reduction in saving would still be feasible and would increase utility.
    We will not prove the necessity of the transversality condition here. We will, however,
provide a sufficiency condition. Suppose that we have a convex maximization problem
(utility is concave and the constraint set convex) and a sequence {kt+1 }∞t=1 satisfying the
Kuhn-Tucker first-order conditions for a given k0 . Is {kt+1 }∞
                                                              t=1 a maximum?     We did not
formally prove a similar proposition in the finite-horizon case (we merely referred to math
texts), but we will here, and the proof can also be used for finite-horizon setups.
    Sequences satisfying the Euler equations that do not maximize the programming
problem come up quite often. We would like to have a systematic way of distinguishing
between maxima and other critical points (in <∞ ) that are not the solution we are looking
for. Fortunately, the transversality condition helps us here: if a sequence {kt+1 }∞     t=1
satisfies both the Euler equations and the transversality condition, then it maximizes the
objective function. Formally, we have the following:
Proposition 3.4 Consider the programming problem
                                    P
                                    ∞
                             max∞     β t F (kt , kt+1 )
                                    {kt+1 }t=0   t=0
                                         s.t. kt+1 ≥ 0 ∀t.
(An example
     © ∗ ª∞is F (x,∗ y)  = u [f (x) − y].)
                       ∞
   If kt+1 t=0
               , {µ t t=0 satisfy
                     }
       ∗
  (i) kt+1 ≥ 0 ∀t
                        ¡           ¢      ¡ ∗          ¢
 (ii) Euler Equation: F2 kt∗ , kt+1
                                ∗
                                      + βF1 kt+1    ∗
                                                 , kt+2   + µ∗t = 0 ∀t
                    ∗
(iii) µ∗t ≥ 0, µ∗t kt+1 ≥ 0 ∀t
                ¡          ¢ ∗
                        ∗
(iv) lim β t F1 kt∗ , kt+1  kt = 0
      t→∞
                                                                                  © ∗ ª∞
and F (x, y) is concave in (x, y) and increasing in its first argument, then       kt+1 t=0
maximizes the objective.
   Proof. Consider any alternative feasible sequence k ≡ {kt+1 }∞
                                                                t=0 . Feasibility is tan-
tamount to kt+1 ≥ 0 ∀t. We want to show that for any such sequence,
                              T
                              X        £ ¡           ¢                 ¤
                       lim          β t F kt∗ , kt+1
                                                 ∗
                                                       − F (kt , kt+1 ) ≥ 0.
                       T →∞
                              t=0


                                                   23
Define
                                       T
                                       X         £ ¡           ¢                 ¤
                         AT (k) ≡                          ∗
                                              β t F kt∗ , kt+1   − F (kt , kt+1 ) .
                                        t=0

We will to show that, as T goes to infinity, AT (k) is bounded below by zero.
  By concavity of F ,
                      T
                      X        £ ¡            ¢ ∗             ¡           ¢¡ ∗         ¢¤
          AT (k) ≥          β t F1 kt∗ , kt+1
                                          ∗                           ∗
                                               (kt − kt ) + F2 kt∗ , kt+1   kt+1 − kt+1 .
                      t=0

Now notice that for each t, kt+1 shows up twice in the summation. Hence we can rearrange
the expression to read
                        T −1
                        X           ©¡ ∗         ¢£ ¡           ¢      ¡ ∗          ¢¤ª
         AT (k) ≥              βt     kt+1 − kt+1 F2 kt∗ , kt+1
                                                            ∗
                                                                  + βF1 kt+1    ∗
                                                                             , kt+2     +
                        t=0
                                                             ¡            ¢¡             ¢
                        +F1 (k0∗ , k1∗ ) (k0∗ − k0 ) + β T F2 kT∗ , kT∗ +1 kT∗ +1 − kT +1 .

   Some information contained in the first-order conditions will now be useful:
                         ¡          ¢       ¡ ∗         ¢
                      F2 kt∗ , kt+1
                                ∗
                                      + βF1 kt+1    ∗
                                                 , kt+2   = −µ∗t ,

together with k0∗ − k0 = 0 (k0 can only take on one feasible value), allows us to derive
                        T −1
                        X             ¡            ¢         ¡            ¢¡             ¢
            AT (k) ≥           β t µ∗t kt+1 − kt+1
                                               ∗
                                                     + β T F2 kT∗ , kT∗ +1 kT∗ +1 − kT +1 .
                        t=0

     Next, we use the complementary slackness conditions and the implication of the Kuhn-
Tucker conditions that
                                         µ∗t kt+1 ≥ 0
                      ¡          ¢                     ¡            ¢      ¡               ¢
to conclude that µ∗t kt+1 − kt+1
                             ∗
                                   ≥ 0. In addition, F2 kT∗ , kT∗ +1 = −βF1 kT∗ +1 , kT∗ +2 −
µ∗T +1 , so we obtain
               T
               X            ¡            ¢      £   ¡               ¢        ¤¡             ¢
    AT (k) ≥         β t µ∗t kt+1 − kt+1
                                     ∗
                                           + β T βF1 kT∗ +1 , kT∗ +2 + µ∗T +1 kT +1 − kT∗ +1 .
               t=0
                           ¡               ¢
Since we know that µ∗t+1 kt+1 − kt+1    ∗
                                             ≥ 0, the value of the summation will not increase
if we suppress nonnegative terms:
                         ¡                ¢¡            ¢             ¡              ¢
       AT (k) ≥ β T +1 F1 kT∗ +1 , kT∗ +2 kT +1 − kT∗ +1 ≥ −β T +1 F1 kT∗ +1 , kT∗ +2 kT∗ +1 .

In the finite horizon case, kT∗ +1 would have been the level of capital left out for the day
after the (perfectly foreseen) end of the world; a requirement for an optimum in that
case is clearly kT∗ +1 = 0. In present-value utility terms, one might alternatively require
kT∗ +1 β T λ∗T = 0, where β t λ∗t is the present-value utility evaluation of an additional unit of
resources in period t.
     As T goes to infinity, the right-hand side of the last inequality goes to zero by the
transversality condition. That is, we have shown that the utility implied by the candidate
path must be higher than that implied by the alternative.

                                                       24
    The transversality condition can be given this interpretation: F1 (kt , kt+1 ) is the
marginal addition of utils in period t from increasing capital in that period, so the
transversality condition simply says that the value (discounted into present-value utils)
of each additional unit of capital at infinity times the actual amount of capital has to
be zero. If this requirement were not met (we are now, incidentally, making a heuristic
argument for necessity), it would pay for the consumer to modify such a capital path and
increase consumption for an overall increase in utility without violating feasibility.1
    The no-Ponzi-game and the transversality conditions play very similar roles in dy-
namic optimization in a purely mechanical sense (at least if the nPg condition is inter-
preted with equality). In fact, they can typically be shown to be the same condition, if
one also assumes that the first-order condition is satisfied. However, the two conditions
are conceptually very different. The nPg condition is a restriction on the choices of the
agent. In contrast, the transversality condition is a prescription how to behave optimally,
given a choice set.


3.2         Dynamic Programming
The models we are concerned with consist of a more or less involved dynamic optimization
problem and a resulting optimal consumption plan ©that solves
                                                            ª∞      it. Our approach up to
                                                         ∗
now has been to look for a sequence of real numbers kt+1 t=0 that generates an optimal
consumption plan. In principle, this involved searching for a solution to an infinite
sequence of equations - a difference equation (the Euler equation). The search for a
sequence is sometimes impractical, and not always intuitive. An alternative approach is
often available, however, one which is useful conceptually as well as for computation (both
analytical and, especially, numerical computation). It is called dynamic programming.
We will now go over the basics of this approach. The focus will be on concepts, as opposed
to on the mathematical aspects or on the formal proofs.
    Key to dynamic programming is to think of dynamic decisions as being made not once
and for all but recursively: time period by time period. The savings between t and t + 1
are thus decided on at t, and not at 0. We will call a problem stationary whenever the
structure of the choice problem that a decision maker faces is identical at every point in
time. As an illustration, in the examples that we have seen so far, we posited a consumer
placed at the beginning of time choosing his infinite future consumption stream   © ∗ given
                                                                                       ª∞
an initial capital stock k0 . As a result, out came a sequence of real numbers kt+1      t=0
indicating the level of capital that the agent will choose to hold in each period. But
once he has chosen a capital path, suppose that we let the consumer abide it for, say, T
periods. At t = T he will find then himself with the kT∗ decided on initially. If at that
moment we told the consumer to forget about his initial plan and asked him to decide
on his consumption stream again, from then onwards, using as new initial level of capital
k0 = kT∗ , what sequence of capital would he choose? If the problem is stationary then for
any two periods t 6= s,
                                   kt = ks ⇒ kt+j = ks+j
for all j > 0. That is, he would not change his mind if he could decide all over again.
  1
      This necessity argument clearly requires utility to be strictly increasing in capital.

                                                      25
    This means that, if a problem is stationary, we can think of a function that, for every
period t, assigns to each possible initial level of capital kt an optimal level for next period’s
capital kt+1 (and therefore an optimal level of current period consumption): kt+1 = g (kt ).
Stationarity means that the function g (·) has no other argument than current capital.
In particular, the function does not vary with time. We will refer to g (·) as the decision
rule.
    We have defined stationarity above in terms of decisions - in terms of properties of
the solution to a dynamic problem. What types of dynamic problems are stationary?
Intuitively, a dynamic problem is stationary if one can capture all relevant information
for the decision maker in a way that does not involve time. In our neoclassical growth
framework, with a finite horizon, time is important, and the problem is not stationary:
it matters how many periods are left - the decision problem changes character as time
passes. With an infinite time horizon, however, the remaining horizon is the same at
each point in time. The only changing feature of the consumer’s problem in the infinite-
horizon neoclassical growth economy is his initial capital stock; hence, his decisions will
not depend on anything but this capital stock. Whatever is the relevant information for
a consumer solving a dynamic problem, we will refer to it as his state variable. So the
state variable for the planner in the one-sector neoclassical growth context is the current
capital stock.
    The heuristic information above can be expressed more formally as follows. The
simple mathematical idea that maxx,y f (x, y) = maxy {maxx f (x, y)} (if each of the max
operators is well-defined) allows us to maximize “in steps”: first over x, given y, and then
the remainder (where we can think of x as a function of y) over y. If we do this over time,
the idea would be to maximize over {ks+1 }∞                                   ∞
                                                s=t first by choice of {ks+1 }s=t+1 , conditional
on kt+1 , and then to choose kt+1 . That is, we would choose savings at t, and later the
rest. Let us denote by V (kt ) the value of the optimal program from period t for an initial
condition kt :
                                           ∞
                                           X
                      V (kt ) ≡ max∞              β s−t F (ks , ks+1 ), s.t. ks+1 ∈ Γ(ks )∀s ≥ t,
                              {ks+1 }s=t
                                           s=t

where Γ(kt ) represents the feasible choice set for kt+1 given kt 2 . That is, V is an indirect
utility function, with kt representing the parameter governing the choices and resulting
utility. Then using the maximization-by-steps idea, we can write
                                                           ∞
                                                           X
V (kt ) =        max {F (kt , kt+1 )+         max                 β s−t F (ks , ks+1 ) (s.t. ks+1 ∈ Γ(ks )∀s ≥ t+1)},
               kt+1 ∈Γ(kt )                {ks+1 }∞
                                                  s=t+1
                                                          s=t+1

which in turn can be rewritten as
                                                  ∞
                                                  X
  max {F (kt , kt+1 )+β           max
                                    ∞
                                              {           β s−(t+1) F (ks , ks+1 ) (s.t. ks+1 ∈ Γ(ks )∀s ≥ t+1)}}.
kt+1 ∈Γ(kt )                   {ks+1 }s=t+1
                                                  s=t+1

But by definition of V this equals
                                       max {F (kt , kt+1 ) + βV (kt+1 )}.
                                    kt+1 ∈Γ(kt )

   2
      The one-sector growth model example would mean that F (x, y) = u(f (x) − y) and that Γ(x) =
[0, f (x)] (the latter restricting consumption to be non-negative and capital to be non-negative).

                                                              26
So we have:
                           V (kt ) =     max {F (kt , kt+1 ) + βV (kt+1 )}.
                                       kt+1 ∈Γ(kt )

     This is the dynamic programming formulation. The derivation was completed for a
given value of kt on the left-hand side of the equation. On the right-hand side, however,
we need to know V evaluated at any value for kt+1 in order to be able to perform the
maximization. If, in other words, we find a V that, using k to denote current capital and
k 0 next period’s capital, satisfies

                                V (k) = max
                                        0
                                            {F (k, k 0 ) + βV (k 0 )}                    (3.2)
                                            k ∈Γ(k)


for any value of k, then all the maximizations on the right-hand side are well-defined. This
equation is called the Bellman equation, and it is a functional equation: the unknown is a
function. We use the function g alluded to above to denote the arg max in the functional
equation:
                            g(k) = arg max
                                       0
                                            {F (k, k 0 ) + βV (k 0 )},
                                              k ∈Γ(k)

or the decision rule for k 0 : k 0 = g(k). This notation presumes that a maximum exists and
is unique; otherwise, g would not be a well-defined function.
    This is “close” to a formal derivation of the equivalence between the sequential formu-
lation of the dynamic optimization and its recursive, Bellman formulation. What remains
to be done mathematically is to make sure that all the operations above are well-defined.
Mathematically, one would want to establish:

      • If a function represents the value of solving the sequential problem (for any initial
        condition), then this function solves the dynamic programming equation (DPE).

      • If a function solves the DPE, then it gives the value of the optimal program in the
        sequential formulation.

      • If a sequence solves the sequential program, it can be expressed as a decision rule
        that solves the maximization problem associated with the DPE.

      • If we have a decision rule for a DPE, it generates sequences that solve the sequential
        problem.

These four facts can be proved, under appropriate assumptions.3 We omit discussion of
details here.
     One issue is useful to touch on before proceeding to the practical implementation
of dynamic programming: since the maximization that needs to be done in the DPE
is finite-dimensional, ordinary Kuhn-Tucker methods can be used, without reference to
extra conditions, such as the transversality condition. How come we do not need a
transversality condition here? The answer is subtle and mathematical in nature. In the
statements and proofs of equivalence between the sequential and the recursive methods,
it is necessary to impose conditions on the function V : not any function is allowed.
Uniqueness of solutions to the DPE, for example, only follows by restricting V to lie in a
  3
      See Stokey and Lucas (1989).

                                                        27
restricted space of functions. This or other, related, restrictions play the role of ensuring
that the transversality condition is met.
    We will make use of some important results regarding dynamic programming. They
are summarized in the following:

Facts

Suppose that F is continuously differentiable in its two arguments, that it is strictly
increasing in its first argument (and decreasing in the second), strictly concave, and
bounded. Suppose that Γ is a nonempty, compact-valued, monotone, and continuous
correspondence with a convex graph. Finally, suppose that β ∈ (0, 1). Then

  1. There exists a function V (·) that solves the Bellman equation. This solution is
     unique.

  2. It is possible to find V by the following iterative process:

        i. Pick any initial V0 function, for example V0 (k) = 0 ∀k.
        ii. Find Vn+1 , for any value of k, by evaluating the right-hand side of (3.2) using
            Vn .

      The outcome of this process is a sequence of functions {Vj }∞
                                                                  j=0 which converges to
      V.

  3. V is strictly concave.

  4. V is strictly increasing.

  5. V is differentiable.

  6. Optimal behavior can be characterized by a function g, with k 0 = g(k), that is
     increasing so long as F2 is increasing in k.

     The proof of the existence and uniqueness part follow by showing that the functional
equation’s right-hand side is a contraction mapping, and using the contraction mapping
theorem. The algorithm for finding V also uses the contraction property. The assump-
tions needed for these characterizations do not rely on properties of F other than its
continuity and boundedness. That is, these results are quite general.
     In order to prove that V is increasing, it is necessary to assume that F is increasing
and that Γ is monotone. In order to show that V is (strictly) concave it is necessary to
assume that F is (strictly) concave and that Γ has a convex graph. Both these results use
the iterative algorithm. They essentially require showing that, if the initial guess on V ,
V0 , satisfies the required property (such as being increasing), then so is any subsequent
Vn . These proofs are straightforward.
     Differentiability of V requires F to be continuously differentiable and concave, and
the proof is somewhat more involved. Finally, optimal policy is a function when F is
strictly concave and Γ is convex-valued; under these assumptions, it is also easy to show,

                                             28
using the first-order condition in the maximization, that g is increasing. This condition
reads
                                   −F2 (k, k 0 ) = βV 0 (k 0 ).
The left-hand side of this equality is clearly increasing in k 0 , since F is strictly concave,
and the right-hand side is strictly decreasing in k 0 , since V is strictly concave under the
stated assumptions. Furthermore, since the right-hand side is independent of k but the
left-hand side is decreasing in k, the optimal choice of k 0 is increasing in k.
    The proofs of all these results can be found in Stokey and Lucas with Prescott (1989).

Connection with finite-horizon problems

Consider the finite-horizon problem
                                            P
                                            T
                                     max           β t u (ct )
                                    {ct }T
                                         t=0 t=0
                                    s.t. kt+1 + ct = F (kt ) .
Although we discussed how to solve this problem in the previous sections, dynamic pro-
gramming offers us a new solution method. Let Vn (k) denote the present value utility
derived from having a current capital stock of k and behaving optimally, if there are n
periods left until the end of the world. Then we can solve the problem recursively, or by
backward induction, as follows. If there are no periods left, that is, if we are at t = T ,
then the present value of utility next period will be 0 no matter how much capital is
chosen to be saved: V0 (k) = 0 ∀k. Then once he reaches t = T the consumer will face
the following problem:
                           V1 (k) = max
                                     0
                                        {u [f (k) − k 0 ] + βV0 (k 0 )} .
                                      k

Since V0 (k 0 ) = 0, this reduces to V1 (k) = max
                                               0
                                                  {u [f (k) − k 0 ]}. The solution is clearly k 0 =
                                                   k
0 (note that this is consistent with the result kT +1 = 0 that showed up in finite horizon
problems when the formulation was sequential). As a result, the update is V1 (k) =
u [f (k)] . We can iterate in the same fashion T times, all the way to VT +1 , by successively
plugging in the updates Vn . This will yield the solution to our problem.
    In this solution of the finite-horizon problem, we have obtained an interpretation of
the iterative solution method for the infinite-horizon problem: the iterative solution is
like solving a finite-horizon problem backwards, for an increasing time horizon. The
statement that the limit function converges says that the value function of the infinite-
horizon problem is the limit of the time-zero value functions of the finite-horizon problems,
as the horizon increases to infinity. This also means that the behavior at time zero in
a finite-horizon problem becomes increasingly similar to infinite-horizon behavior as the
horizon increases.
    Finally, notice that we used dynamic programming to describe how to solve a non-
stationary problem. This may be confusing, as we stated early on that dynamic pro-
gramming builds on stationarity. However, if time is viewed as a state variable, as we
actually did view it now, the problem can be viewed as stationary. That is, if we increase
the state variable from not just including k, but t as well (or the number of periods left),
then dynamic programming can again be used.

                                                    29
Example 3.5 Solving a parametric dynamic programming problem. In this
example we will illustrate how to solve dynamic programming problem by finding a corre-
sponding value function. Consider the following functional equation:
                              V (k) = max0 {log c + βV (k 0 )}
                                             c, k
                                             s.t. c = Ak α − k 0 .
The budget constraint is written as an equality constraint because we know that prefer-
ences represented by the logarithmic utility function exhibit strict monotonicity - goods
are always valuable, so they will not be thrown away by an optimizing decision maker.
The production technology is represented by a Cobb-Douglass function, and there is full
depreciation of the capital stock in every period:
                                      F (k, 1) + (1 − δ)k.
                                      | {z } | {z }
                                       Akα 11−α          0

A more compact expression can be derived by substitutions into the Bellman equation:
                         V (k) = max
                                  0
                                     {log [Ak α − k 0 ] + βV (k 0 )} .
                                     k ≥0

    We will solve the problem by iterating on the value function. The procedure will
be similar to that of solving a T -problem backwards. We begin with an initial ”guess”
V0 (k) = 0, that is, a function that is zero-valued everywhere.
                       V1 (k) = max
                                 0
                                    {log [Ak α − k 0 ] + βV0 (k 0 )}
                                      k ≥0
                                = max
                                   0
                                      {log [Ak α − k 0 ] + β · 0}
                                      k ≥0
                                      max
                                       0
                                          {log [Ak α − k 0 ]} .
                                      k ≥0

This is maximized by taking k 0 = 0. Then
                                  V1 (k) = log A + α log k.
   Going to the next step in the iteration,
                  V2 (k) = max
                            0
                               {log [Ak α − k 0 ] + βV1 (k 0 )}
                              k ≥0
                          = max
                             0
                                {log [Ak α − k 0 ] + β [log A + α log k 0 ]} .
                              k ≥0

The first-order condition now reads
                                 1       βα   0  αβAk α
                                        = 0 ⇒k =        .
                             Ak α − k 0   k      1 + αβ
We can interpret the resulting expression for k 0 as the rule that determines how much it
would be optimal to save if we were at period T −1 in the finite horizon model. Substitution
implies
                      ·                ¸     ·                       ¸
                           α   αβAk α                        αβAk α
      V2 (k) = log Ak −                  + β log A + α log
                               1 + αβ                        1 + αβ
                                         µ             ¶
                  ¡          ¢                   αβA                           αβA
              = α + α2 β log k + log A −                  + β log A + αβ log        .
                                                1 + αβ                       1 + αβ

                                                    30
    We could now use V2 (k) again in the algorithm to obtain a V3 (k), and so on. We
know by the characterizations above that this procedure would make the sequence of value
functions converge to some V ∗ (k). However, there is a more direct approach, using a
pattern that appeared already in our iteration.
    Let                    µ              ¶
                                   αβA                          αβA
                    a ≡ log A −             + β log A + αβ log
                                  1 + αβ                       1 + αβ
and
                                            ¡        ¢
                                         b ≡ α + α2 β .
Then V2 (k) = a + b log k. Recall that V1 (k) = log A + α log k, i.e., in the second step what
we did was plug in a function V1 (k) = a1 + b1 log k, and out came a function V2 (k) =
a2 + b2 log k. This clearly suggests that if we continue using our iterative procedure, the
outcomes V3 (k) , V4 (k) , ..., Vn (k) , will be of the form Vn (k) = an + bn log k for all n.
Therefore, we may already guess that the function to which this sequence is converging
has to be of the form:
                                      V (k) = a + b log k.
So let us guess that the value function solving the Bellman has this form, and determine
the corresponding parameters a, b :

             V (k) = a + b log k = max
                                    0
                                       {log (Ak α − k 0 ) + β (a + b log k 0 )} ∀k.
                                      k ≥0


Our task is to find the values of a and b such that this equality holds for all possible values
of k. If we obtain these values, the functional equation will be solved.
    The first-order condition reads:

                                1            βb           βb
                                         =       ⇒ k0 =        Ak α .
                            Ak α − k 0       k 0        1 + βb

                      βb
We can interpret           as a savings rate. Therefore, in this setup the optimal policy
                    1 + βb
will be to save a constant fraction out of each period’s income.
    Define
                                    LHS ≡ a + b log k
and
                     RHS ≡ max
                            0
                               {log (Ak α − k 0 ) + β (a + b log k 0 )} .
                               k ≥0

   Plugging the expression for k 0 into the RHS, we obtain:
                µ                     ¶              µ             ¶
                    α      βb       α                    βb      α
  RHS = log Ak −                Ak + aβ + bβ log              Ak
                         1 + βb                        1 + βb
                ·µ            ¶        ¸             µ             ¶
                         βb          α                   βb      α
         = log 1 −              Ak + aβ + bβ log              Ak
                       1 + βb                          1 + βb
                                  µ        ¶               µ        ¶
                                        1                      βb
         = (1 + bβ) log A + log              + aβ + bβ log            + (α + αβb) log k.
                                    1 + bβ                   1 + βb

                                                 31
Setting LHS=RHS, we produce
                                     µ                    ¶                   µ            ¶
           
                                                 1                                  βb
            a = (1 + bβ) log A + log                          + aβ + bβ log
                                               1 + bβ                              1 + βb
             
             
             
                 b = α + αβb,

which amounts to two equations in two unknowns. The solutions will be
                                                     α
                                             b=
                                                  1 − αβ

and, using this finding,
                   1
             a=       [(1 + bβ) log A + bβ log (bβ) − (1 + bβ) log (1 + bβ)] ,
                  1−β

so that
                    1      1
            a=                 [log A + (1 − αβ) log (1 − αβ) + αβ log (αβ)] .
                  1 − β 1 − αβ
   Going back to the savings decision rule, we have:

                                                 bβ
                                    k0 =              Ak α
                                               1 + bβ
                                    k0       = αβAk α .

If we let y denote income, that is, y ≡ Ak α , then k 0 = αβy. This means that the optimal
solution to the path for consumption and capital is to save a constant fraction αβ of
income.
    This setting, we have now shown, provides a microeconomic justification to a constant
savings rate, like the one assumed by Solow. It is a very special setup however, one that
is quite restrictive in terms of functional forms. Solow’s assumption cannot be shown to
hold generally.
    We can visualize the dynamic behavior of capital as is shown in Figure 3.1.


Example 3.6 A more complex example. We will now look at a slightly different
growth model and try to put it in recursive terms. Our new problem is:
                                              P
                                              ∞
                                  max
                                   ∞
                                                    β t u (ct )
                                  {ct }t=0    t=0
                                  s.t.        ct + it = F (kt )

and subject to the assumption is that capital depreciates fully in two periods, and does
not depreciate at all before that. Then the law of motion for capital, given a sequence of
investment {it }∞
                t=0 is given by:
                                     kt = it−1 + it−2 .
Then k = i−1 + i−2 : there are two initial conditions i−1 and i−2 .

                                                  32
                    g(k)




                                                                         k


               Figure 3.1: The decision rule in our parameterized model

   The recursive formulation for this problem is:

                           V (i−1 , i−2 ) = max {u(c) + V (i, i−1 )}
                                                c, i
                                     s.t.      c = f (i−1 + i−2 ) − i.

Notice that there are two state variables in this problem. That is unavoidable here; there
is no way of summarizing what one needs to know at a point in time with only one
variable. For example, the total capital stock in the current period is not informative
enough, because in order to know the capital stock next period we need to know how much
of the current stock will disappear between this period and the next. Both i−1 and i−2
are natural state variables: they are predetermined, they affect outcomes and utility, and
neither is redundant: the information they contain cannot be summarized in a simpler
way.


3.3     The functional Euler equation
In the sequentially formulated maximization problem, the Euler equation turned out to
be a crucial part of characterizing the solution. With the recursive strategy, an Euler
equation can be derived as well. Consider again

                            V (k) = max
                                    0
                                        {F (k, k 0 ) + βV (k 0 )} .
                                     k ∈Γ(k)

As already pointed out, under suitable assumptions, this problem will result in a function
k 0 = g(k) that we call decision rule, or policy function. By definition, then, we have

                              V (k) = F (k, g(k)) + βV [g (k)] .                     (3.3)

                                                  33
Moreover, g(k) satisfies the first-order condition

                                   F2 (k, k 0 ) + βV 0 (k 0 ) = 0,

assuming an interior solution. Evaluating at the optimum, i.e., at k 0 = g(k), we have

                                F2 (k, g(k)) + βV 0 (g(k)) = 0.

    This equation governs the intertemporal tradeoff. One problem in our characterization
is that V 0 (·) is not known: in the recursive strategy, it is part of what we are searching for.
However, although it is not possible in general to write V (·) in terms of primitives, one
can find its derivative. Using the equation (3.3) above, one can differentiate both sides
with respect to k, since the equation holds for all k and, again under some assumptions
stated earlier, is differentiable. We obtain

                  V 0 (k) = F1 [k, g(k)] + g 0 (k) {F2 [k, g(k)] + βV 0 [g(k)]}.
                                           |                 {z               }
                                            indirect effect through optimal choice of k0


From the first-order condition, this reduces to

                                     V 0 (k) = F1 [k, g(k)] ,

which again holds for all values of k. The indirect effect thus disappears: this is an
application of a general result known as the envelope theorem.
   Updating, we know that V 0 [g(k)] = F1 [g(k), g (g (k))] also has to hold. The first
order condition can now be rewritten as follows:

                         F2 [k, g(k)] + βF1 [g(k), g (g(k))] = 0 ∀k.                       (3.4)

This is the Euler equation stated as a functional equation: it does not contain the un-
knowns kt , kt+1 , and kt+2 . Recall our previous Euler equation formulation

                           F2 [kt , kt+1 ] + βF1 [kt+1 , kt+2 ] = 0, ∀t,

where the unknown was the sequence {kt }∞   t=1 . Now instead, the unknown is the function
g. That is, under the recursive formulation, the Euler Equation turned into a functional
equation.
    The previous discussion suggests that a third way of searching for a solution to the
dynamic problem is to consider the functional Euler equation, and solve it for the function
g. We have previously seen that we can (i) look for sequences solving a nonlinear difference
equation plus a transversality condition; or (ii) we can solve a Bellman (functional)
equation for a value function.
    The functional Euler equation approach is, in some sense, somewhere in between the
two previous approaches. It is based on an equation expressing an intertemporal tradeoff,
but it applies more structure than our previous Euler equation. There, a transversality
condition needed to be invoked in order to find a solution. Here, we can see that the
recursive approach provides some extra structure: it tells us that the optimal sequence
of capital stocks needs to be connected using a stationary function.

                                                 34
    One problem is that the functional Euler equation does not in general have a unique
solution for g. It might, for example, have two solutions. This multiplicity is less severe,
however, than the multiplicity in a second-order difference equation without a transver-
sality condition: there, there are infinitely many solutions.
    The functional Euler equation approach is often used in practice in solving dynamic
problems numerically. We will return to this equation below.

Example 3.7 In this example we will apply functional Euler equation described above
to the model given in Example 3.5. First, we need to translate the model into “V-F
language”. With full depreciation and strictly monotone utility function, the function
F (·, ·) has the form
                             F (k, k 0 ) = u (f (k) − g(k)) .
Then, the respective derivatives are:

                            F1 (k, k 0 ) = u0 (f (k) − k 0 ) f 0 (k)
                                F2 (k, k 0 ) = −u0 (f (k) − k 0 ) .

In the particular parametric example, (3.4) becomes:

                            1         βαA (g(k))α−1
                                  −                     = 0, ∀k.
                       Ak α − g(k) A (g(k))α − g (g(k))

This is a functional equation in g (k). Guess that g (k) = sAk α , i.e. the savings are a
constant fraction of output. Substituting this guess into functional Euler equation delivers:

                              1             αβA (sAk α )α−1
                                      =                            .
                         (1 − s) Ak α   A (sAk α )α − sA (sAk α )α

As can be seen, k cancels out, and the remaining equation can be solved for s. Collecting
terms and factoring out s, we get
                                         s = αβ.
This is exactly the answer that we got in Example 3.5.


3.4      References
Stokey, Nancy L., and Robert E. Lucas, “Recursive Methods in Economic Dynamics”,
Harvard University Press, 1989.




                                                 35
36
Chapter 4

Steady states and dynamics under
optimal growth

We will now study, in more detail, the model where there is only one type of good, that
is, only one production sector: the one-sector optimal growth model. This means that
we will revisit the Solow model under the assumption that savings are chosen optimally.
Will, as in Solow’s model, output and all other variables converge to a steady state?
It turns out that the one-sector optimal growth model does produce global convergence
under fairly general conditions, which can be proven analytically. If the number of sectors
increases, however, global convergence may not occur. However, in practical applications,
where the parameters describing different sectors are chosen so as to match data, it has
proven difficult to find examples where global convergence does not apply.
    We thus consider preferences of the type
                                         ∞
                                         X
                                                β t u (ct )
                                          t=0

and production given by
                                     ct + kt+1 = f (kt ),
where
                              f (kt ) = F (kt , N ) + (1 − δ) kt
for some choice of N and δ (which are exogenous in the setup we are looking at). Under
standard assumptions (namely strict concavity, β < 1, and conditions ensuring interior
solutions), we obtain the Euler equation:

                               u0 (ct ) = βu0 (ct+1 ) f 0 (kt+1 ) .

   A steady state is a “constant solution”:

                                        kt = k ∗ ∀t
                                        ct = c∗ ∀t.

This constant sequence {ct }∞       ∗ ∞
                            t=0 = {c }t=0 will have to satisfy:

                                 u0 (c∗ ) = βu0 (c∗ ) f 0 (k ∗ ) .

                                                37
Here u0 (c∗ ) > 0 is assumed, so this reduces to

                                               βf 0 (k ∗ ) = 1.

This is the key condition for a steady state in the one-sector growth model. It requires
that the gross marginal productivity of capital equal the gross discount rate (1/β).
    Suppose k0 = k ∗ . We first have to ask whether kt = k ∗ ∀t - a solution to the
steady-state equation - will solve the maximization problem. The answer is clearly yes,
provided that both the first order and the transversality conditions are met. The first
order conditions are met by construction, with consumption defined by

                                             c∗ = f (k ∗ ) − k ∗ .

The transversality condition requires

                                       lim β t F1 [kt , kt+1 ] kt = 0.
                                       t→∞

Evaluated at the proposed sequence, this condition becomes

                                       lim β t F1 [k ∗ , k ∗ ] k ∗ = 0,
                                       t→∞

and since F1 [k ∗ , k ∗ ] k ∗ is a finite number, with β < 1, the limit clearly is zero and the
condition is met. Therefore we can conclude that the stationary solution kt = k ∗ ∀t
does maximize the objective function. If f is strictly concave, then kt = k ∗ is the unique
strictly positive solution for k0 = k ∗ . It remains to verify that there is indeed one solution.
We will get back to this in a moment.
    Graphically, concavity of f (k) implies that βf 0 (k) will be a positive, decreasing func-
tion of k, and it will intersect the horizontal line going through 1 only once as can be
seen in Figure 4.1.


                                  ′
                             β f (k)




                   1




                                                                           k
                             k*


                       Figure 4.1: The determination of steady state


                                                      38
4.1         Global convergence
In order to derive precise results for global convergence, we now make the following
assumptions on the primitives:

  (i) u and f are strictly increasing, strictly concave, and continuously differentiable.

 (ii) f (0) = 0, lim f 0 (k) = ∞, and lim f 0 (k) ≡ b < 1.1
                    k→0                    k→∞

 (iii) limu0 (c) = ∞.
         c→0

 (iv) β ∈ (0, 1) .

       We have the following problem:

                             V (k) = 0 max {u [f (k) − k 0 ] + βV (k 0 )} ,
                                      k ∈[0,f (k)]


leading to k 0 = g(k) satisfying the first-order condition

                                       u0 [f (k) − k 0 ] = βV 0 (k 0 ).

Notice that we are assuming an interior solution. This assumption is valid since assump-
tions (ii) and (iii) guarantee interiority.
    In order to prove global convergence to a unique steady state, we will first state (and
re-derive) some properties of the policy function g and of steady states. We will then use
these properties to rule out anything but global convergence.

Properties of g(k):

  (i) g(k) is single-valued for all k.
         This follows from strict concavity of u and V (recall the theorem we stated previ-
         ously) by the Theorem of the Maximum under convexity.

 (ii) g(k) is strictly increasing.
         We argued this informally in the previous section. The formal argument is as
         follows.
         Proof. Consider the first-order condition:

                                           u0 [f (k) − k 0 ] = βV 0 (k 0 ).

         V 0 (·) is decreasing, since V (·) is strictly concave due to the assumptions on u and
         f . Define

                                       LHS (k, k 0 ) = u0 [f (k) − k 0 ]
                                        RHS (k 0 ) = βV 0 (k 0 ).
   1
       It is not necessary for the following arguments to assume that lim f 0 (k) = ∞. They would work
                                                                          k→0
even if the limit were strictly greater than 1.

                                                     39
     Leth k̃ > k. i Then f (k̃) − k 0 > f (k) − k 0 . Strict concavity of u implies that
     u0 f (k̃) − k 0 < u0 [f (k) − k 0 ]. Hence we have that

                             k̃ > k ⇒ LHS(k̃, k 0 ) < LHS (k, k 0 ) .

     As a consequence, the RHS (k 0 ) must decrease to satisfy the first order condition.
     Since V 0 (·) is decreasing, this will happen only if k 0 increases. This shows that
     k̃ > k ⇒ g(k̃) > g(k).
     The above result can also be viewed as an application of the implicit function
     theorem. Define
                         H(k, k 0 ) ≡ u0 [f (k) − k 0 ] − βV 0 (k 0 ) = 0.
     Then
                                        ∂H(k, k 0 )
                               0
                            ∂k             ∂k
                                   = −
                            ∂k          ∂H(k, k 0 )
                                          ∂k 0
                                          u00 [f (k) − k 0 ] f 0 (k)
                                   = − 00
                                       −u [f (k) − k 0 ] − βV 00 (k 0 )
                                                (−)        (+)
                                        z       }|     { z }| {
                                        u00 [f (k) − k 0 ] f 0 (k)
                                   = 00                              > 0,
                                     u [f (k) − k 0 ] + βV 00 (k 0 )
                                     |      {z      } | {z }
                                             (−)            (−)


     where the sign follows from the fact that since u and V are strictly concave and f
     is strictly increasing, both the numerator and the denominator of this expression
     have negative signs. This derivation is heuristic since we have assumed here that
     V is twice continuously differentiable. It turns out that there is a theorem telling
     us that (under some side conditions that we will not state here) V will indeed be
     twice continuously differentiable, given that u and f are both twice differentiable,
     but it is beyond the scope of the present analysis to discuss this theorem in greater
     detail.
     The economic intuition behind g being increasing is simple. There is an underlying
     presumption of normal goods behind our assumptions: strict concavity and addi-
     tivity of the different consumption goods (over time) amounts to assuming that
     the different goods are normal goods. Specifically, consumption in the future is a
     normal good. Therefore, a larger initial wealth commands larger savings.

(iii) g(k) is continuous.
     This property, just as Property 1, follows from the Theorem of the Maximum under
     convexity.

(iv) g(0) = 0.
     This follows from the fact that f (k) − k 0 ≥ 0 and f (0) = 0.

                                              40
 (v) There exists k̄ s.t. g(k) ≤ k̄ for all k < k̄. Moreover, k̄ exceeds (f 0 )−1 (1/β).
      The first part follows from feasibility: because consumption cannot be negative,
      k 0 cannot exceed f (k). Our assumptions on f then guarantee that f (k) < k for
      high enough values of k: the slope of f approaches a number less than 1 as k
      goes to infinity. So g(k) < k follows. The characterization of k̄ follows from
      noting (i) that k̄ must be above the value that maximizes f (k) − k, since f (k) is
      above k for very small values of k and f is strictly concave and (ii) that therefore
      k̄ > (f 0 )−1 (1) > (f 0 )−1 (1/β).

     We saw before that a necessary and sufficient condition for a steady state is that
βf 0 (k ∗ ) = 1. Now let us consider different possibilities for the decision rule. Figure 4.2
shows three decision rules which are all increasing and continuous.

                                                                            o
                                                                     45

                                                                          Line 1




                                                                       Line 2




                                                                        Line 3




                            Line 1 k*               Line 1 k*   Line 1 k*
                                        Line 2 k*


                      Figure 4.2: Different decision rule candidates

    All candidate decision rules start at the origin, as required by the assumption that
f (0) = 0 and that investment is nonnegative. They all stay in the bounded set [0, k̄].
Line 1 has three different solutions to the steady-state condition k 0 = k, line 2 has only
one steady state and line 3 has no positive steady state. We do not graph decision rules
with more than three steady states.
    Now, we need to investigate further the number of steady states that our model will
allow. Let us now have a look at Figure 4.2. As we derived earlier, a single steady state
must obtain, due to strict concavity of u. This rules out line 1 in Figure 4.2, and it also
rules out any decision rule with more than one positive crossing of the 45o line.
    Line 3, with no positive steady state, can be ruled out by noting that the steady state
requirement βf 0 (k ∗ ) = 1, together with Property 5 mean that there will be a strictly
positive steady state in the interval (0, k̄). Therefore, the only possibility is line 2.
    We can see that line 2 is above the 45o line to the left of k ∗ , and below to the right.
This implies that the model dynamics exhibit global convergence.

                                                    41
    The convergence will not occur in finite time. For it to occur in that manner, the
decision rule would have to be flat at the steady state point. This, however, cannot be
since we have established that g(k) is strictly increasing (Property 2).


4.2      Dynamics: the speed of convergence
What can we say about the time it takes to reach the steady state? The speed of global
convergence will depend on the shape of g(k), as Figure 4.3 shows.



                                       Line 2




                      Line 1




                                       45o




                                                                  ∗
                                                                 k

                        Figure 4.3: Different speeds of convergence

    Capital will approach the steady state level more rapidly (i.e., in “a smaller number
of steps”) along trajectory number 2, where it will have a faster speed of convergence.
There is no simple way to summarize, in a quantitative way, the speed of convergence for
a general decision rule. However, for a limited class of decision rules - the linear (or affine)
rules - it can be measured simply by looking at the slope. This is an important case, for
it can be used locally to approximate the speed of convergence around the steady state
k∗.
    The argument for this is simple: the accumulation path will spend infinite time arbi-
trarily close to the steady state, and in a very small region a continuous function can be
arbitrarily well approximated by a linear function, using the first-order Taylor expansion
of the function. That is, for any capital accumulation path, we will be able to approxi-
mate the speed of convergence arbitrarily well as time passes. If the starting point is far
from the steady state, we will make mistakes that might be large initially, but these mis-
takes will become smaller and smaller and eventually become unimportant. Moreover, if
one uses parameter values that are, in some sense, realistic, it turns out that the resulting
decision rule will be quite close to a linear one.
    In this section, we will state a general theorem with properties for dynamic systems
of a general size. To be more precise, we will be much more general than the one-sector

                                                42
growth model. With the methods we describe here it is actually possible to obtain the
key information about local dynamics for any dynamic system. The global convergence
theorem, in contrast, applies only for the one-sector growth model.
   The first-order Taylor series expansion of the decision rule gives

                                          k 0 = g(k) ≈ g(k ∗ ) + g 0 (k ∗ ) (k − k ∗ )
                                                       | {z }
                                                                k∗
                               0      ∗
                             k
                             | −
                               {z k}          = g (k ) (k − k ∗ ) .
                                                   0   ∗
                                                       | {z }
                          Next period’s gap                Current gap


This shows that we may interpret g 0 (k ∗ ) as a measure of the rate of convergence (or
rather, its inverse). If g 0 (k ∗ ) is very close to zero, convergence is fast and the gap decreases
significantly each period.

4.2.1      Linearization for a general dynamic system
The task is now to find g 0 (k ∗ ) by linearization. We will use the Euler equation and
linearize it. This will lead to a difference equation in kt . One of the solutions to this
difference equation will be the one we are looking for. Two natural questions arise: 1)
How many convergent solutions are there around k ∗ ? 2) For the convergent solutions,
is it valid to analyze a linear difference equation as a proxy for their convergence speed
properties? The first of these questions is the key to the general characterization of
dynamics. The second question is a mathematical one and related to the approximation
precision.
    Both questions are addressed by the following theorem, which applies to a general
dynamic system (i.e. not only those coming from economic models):

Theorem 4.1 Let xt ∈ <n . Given xt+1 = h(xt ) with a stationary point x̄ : x̄ = h(x̄). If

   1. h is continuously differentiable with Jacobian H(x̄) around x̄.

   2. I − H(x̄) is non-singular.

then there is a set of initial conditions x0 , of dimension equal to the number of eigenvalues
of H(x̄) that are less than 1 in absolute value, for which xt → x̄.

   We will describe how to use this theorem with a few examples.

Example 4.2 (n = 1) There is only one eigenvalue: λ = h0 (x̄)

   1. |λ| ≥ 1 ⇒ no initial condition leads to xt converging to x̄.
      In this case, only for x0 = x̄ will the system stay in x̄.

   2. |λ| < 1 ⇒ xt → x̄ for any value of x0 .

Example 4.3 (n = 2) There are two eigenvalues λ1 and λ2 .

   1. |λ1 | , |λ2 | ≥ 1            ⇒ No initial condition x0 leads to convergence.

                                                           43
  2. |λ1 | < 1, |λ2 | ≥ 1 ⇒ Dimension of x0 ’s leading to convergence is 1. This is called
     ”saddle path stability”.

  3. |λ1 | , |λ2 | < 1       ⇒ Dimension of x0 ’s leading to convergence is 2. xt → x̄ for
     any value of x0 .

    The examples describe how a general dynamic system behaves. It does not yet,
however, quite settle the issue of convergence. In particular, the set of initial conditions
leading to convergence must be given an economic meaning. Is any initial condition
possible in a given economic model? Typically no: for example, the initial capital stock
in an economy may be given, and thus we have to restrict the set of initial conditions to
those respecting the initial capital stock.
    We will show below that an economic model has dynamics that can be reduced to a
vector difference equation of the form of the one described in the above theorem. In this
description, the vector will have a subset of true state variables (e.g. capital) while the
remainder of the vector consists of various control, or other, variables that are there in
order that the system can be put into first-order form.
    More formally, let the number of eigenvalues less than 1 in absolute value be denoted
by m. This is the dimension of the set of initial x0 ’s leading to x̄. We may interpret m as
the degrees of freedom. Let the number of economic restrictions on initial conditions be
denoted by m̂. These are the restrictions emanating from physical (and perhaps other)
conditions in our economic model. Notice that an interpretation of this is that we have
m̂ equations and m unknowns. Then the issue of convergence boils down to the following
cases.

  1. m = m̂ ⇒ there is a unique convergent solution to the difference equation system.

  2. m < m̂ ⇒ No convergent solution obtains.

  3. m > m̂ ⇒ There is “indeterminacy”, i.e. many solutions (how many? dim =
     m̂ − m).

4.2.2     Solving for the speed of convergence
We now describe in detail how the linearization procedure works. The example comes
from the one-sector growth model, but the general outline is the same for all economic
models.

  1. Derive the Euler equation: F (kt , kt+1 , kt+2 ) = 0

                         u0 [f (kt ) − kt+1 ] − βu0 [f (kt+1 ) − kt+2 ] f 0 (kt+1 ) = 0.

     Clearly, k ∗ is a steady state ⇔ F (k ∗ , k ∗ , k ∗ ) = 0.

  2. Linearize the Euler equation: Define k̂t = kt − k ∗ and using first-order Taylor ap-
     proximation derive a0 , a1 , and a2 such that

                                       a2 k̂t+2 + a1 k̂t+1 + a0 k̂t = 0.

                                                   44
3. Write the Euler equation as a first-order system: A difference equation of any order
   can be
        µ written
                ¶ as a first order difference equation by using vector notation: Define
          k̂t+1
   xt =           and then
            k̂t
                                        xt+1 = Hxt .

4. Find the solution to the first-order system: Find the unknowns in

                                      xt = c1 λt1 v1 + c2 λt2 v2 ,                  (4.1)

  where c1 and c2 are constants to be determined, λ1 and λ2 are (distinct) eigenvalues
  of H, and v1 and v2 are eigenvectors associated with these eigenvalues.
5. Determine the constants: Use the information about state variables and initial con-
   ditions to find c1 and c2 . In this case, x consists of one state variable and one
   lagged state variable, the latter used only for the reformulation of the dynamic
   system. Therefore, we have one initial condition for the system, given by k0 ; this
   amounts to one restriction on the two constants. The set of initial conditions for
   x0 in our economic model has therefore been reduced to one dimension. Finally, we
   are looking for convergent solutions. If one of the two eigenvalues is greater than
   one in absolute value, this means that we need to set the corresponding constant
   to zero. Consequently, since not only k0 but also k1 are now determined (i.e., both
   elements of x0 ), and our system is fully determined: all future values of k (or x)
   can be obtained.
  If both eigenvalues are larger than one, the dynamics will not have convergence to
  the steady state: only if the system starts at the steady state will it remain there.
  If both eigenvalues are less than one, we have no way of pinning down the remain-
  ing constant, and the set of converging paths will remain of one dimension. Such
  indeterminacy - effectively an infinite number of solutions to the system - will not
  occur in our social planning problem, because (under strict concavity) it is guaran-
  teed that the set of solutions is a singleton. However, in equilibrium systems that
  are not derived from a planning problem (perhaps because the equilibrium is not
  Pareto optimal, as we shall see below), it is possible to end up with indeterminacy.
  The typical outcome in our one-sector growth model is 0 < λ1 < 1 and λ2 > 1,
  which implies m = 1 (saddle path stability). Then the convergent solution has
  c2 = 0. In other words, the economics of our model dictate that the number of
  restrictions we have on the initial conditions is one, namely the (given) initial level
  of capital, k0 , i.e. m̂ = 1. Therefore, m = m̂, so there is a unique convergent path
  for each k0 (close to k ∗ ).
  Then c1 is determined by setting c2 = 0 (so that the path is convergent) and solving
  equation (4.1) for the value of c1 such that if t = 0, then kt is equal to the given
  level of initial capital, k0 .

We now implement these steps in detail for a one-sector optimal growth model.
First, we need to solve for H. Let us go back to

                u0 [f (kt ) − kt+1 ] − βu0 [f (kt+1 ) − kt+2 ] f 0 (kt+1 ) = 0.

                                              45
In order to linearize it, we take derivatives of this expression with respect to kt , kt+1 and
kt+2 , and evaluate them at k ∗ . We obtain
                                     h                                                          i
                                                                         2
          βu00 (c∗ )f 0 (k ∗ )k̂t+2 − u00 (c∗ ) + βu00 (c∗ ) [f 0 (k ∗ )] + βu0 (c∗ )f 00 (k ∗ ) k̂t+1 +

                                         +u00 (c∗ )f 0 (k ∗ )k̂t = 0.
Using the steady-state fact that βf 0 (k ∗ ) = 1, we simplify this expression to
                h                                                i
                                                  0 ∗ −1 00 ∗
   u (c )k̂t+2 − u (c ) + β u (c ) + u (c ) [f (k )] f (k ) k̂t+1 + β −1 u00 (c∗ )k̂t = 0.
    00 ∗          00 ∗      −1 00 ∗         0 ∗



Dividing through by u00 (c∗ ), we arrive at
                             ·                               ¸
                                   1    u0 (c∗ ) f 00 (k ∗ )   1
                   k̂t+2 − 1 + + 00 ∗ 0 ∗ k̂t+1 + k̂t = 0.
                                   β u (c ) f (k )             β
Then                                 µ            ¶        µ            ¶
                                          k̂t+2                k̂t+1
                                                      =H
                                          k̂t+1                  k̂t
with                                                                           
                                   1   u0 (c∗ ) f 00 (k ∗ )                   1
                              1 +   +                                      − 
                                   β u00 (c∗ ) f 0 (k ∗ )                     β 
                           H=
                                                                               .
                                        1                                    0
    This is a second-order difference equation. Notice that the second row of H delivers
k̂t+1 = k̂t+1 , so the vector representation of the system is correct. Now we need to look
for the eigenvalues of H, from the characteristic polynomial given by

                                             |H − λI| = 0.

    As an interlude before solving for the eigenvalues, let us now motivate the general
solution to the linear system above with an explicit derivation from basic principles.
Using spectral decomposition, we can decompose H as follows:
                                                           
                                                  λ1     0
                          H = V ΛV −1 ⇒ Λ =                ,
                                                  0      λ2

where λ1 and λ2 are eigenvalues of H and V is a matrix of eigenvectors of H. Recall that

                                              xt+1 = Hxt .

A change of variables will help us get the solution to this system. First premultiply both
sides by V−1 :

                                   V −1 xt+1 = V −1 Hxt
                                             = V −1 V ΛV −1 xt
                                             = ΛV −1 xt .

                                                      46
Let zt ≡ V −1 xt and zt+1 ≡ V −1 xt+1 . Then, since Λ is a diagonal matrix

                                      zt+1     =    Λzt
                                        zt     =    Λt z0
                                       z1t     =    c1 λt1 = z10 λt1
                                       z2t     =    z20 λt2 .

   We can go back to xt by premultiplying zt by V :

                            xt = V z t
                                    µ        ¶
                                         z1t
                               = V
                                         z2t
                                        µ        ¶         µ     ¶
                                      t     V11          t   V12
                               = c1 λ1             + c2 λ2
                                            V21              V22
                                 µ           ¶
                                     k̂t+1
                               =               .
                                       k̂t

The solution, therefore must be of the form

                                                 c1 λt1 + b
                                           k̂t = b        c2 λt2 ,

where b
      c1 and b
             c2 are to be determined from initial conditions and values of λ1 and λ2 .
   Let us now go back to our example. To find the eigenvalues in our specific setting,
we use |H − λI| = 0 to obtain
                           ¯                            ¯
                           ¯    1    u 0 00
                                        f            1  ¯
                           ¯ 1+ +           − λ    −    ¯
                           ¯    β u00 f 0            β ¯¯
                           ¯
                           ¯                            ¯=0
                           ¯                            ¯
                           ¯        1              −λ ¯
                                       ·        ¸
                                  2   1 u0 f 00   1
                             ⇒ λ − 1 + + 00 0 λ + = 0,                                    (4.2)
                                      β u f       β
where u0 , u00 , f 0 , f 00 denote the corresponding derivatives evaluated at k ∗ . Let
                                              ·                 ¸
                                           2       1    u0 f 00     1
                                 F (λ) ≡ λ − 1 + + 00 0 λ + .
                                                   β u f            β

This is a continuous function of λ, and
                                              1
                                      F (0) =   >0
                                              β
                                                u0 f 00
                                      F (1) = − 00 0 < 0.
                                                u f
Therefore, the mean value theorem implies that ∃λ1 ∈ (0, 1) : F (λ1 ) = 0. That is, one of
the eigenvalues is positive and smaller than one. Since lim F (λ) = +∞ > 0, the other
                                                                       λ→∞
eigenvalue (λ2 ) must also be positive and larger than 1.

                                                    47
   We see that a convergent solution to the system requires c2 = 0. The remaining
constant, c1 , will be determined from

                                              c1 λt1
                                        k̂t = b
                                        k̂0 ≡ k0 − k ∗
                                              c1 = k0 − k ∗ .
                                            ⇒ b

The solution, therefore, is
                                       kt = k ∗ + λt1 (k0 − k ∗ ) .
    Recall that
                                   kt+1 − k ∗ = g 0 (k ∗ ) (kt − k ∗ ) .
Analogously, in the linearized system,

                                      kt+1 − k ∗ = λ1 (kt − k ∗ ) .

It can thus be seen that the eigenvalue λ1 has a particular meaning: it measures the
(inverse of the) rate of convergence to the steady state.
    As a different illustration, suppose we were looking at the larger system

                                kt = c1 λt1 + c2 λt2 + c3 λt3 + c4 λt4 ,
                                     k0 given.

That is, some economic model with a single state variable leads to a third-order difference
equation. If only one eigenvalue λ1 has |λ1 | < 1, then there is a unique convergent path
leading to the steady state. This means that c2 , c3 , c4 , will need to be equal to zero
(choosing the subscript 1 to denote the eigenvalue smaller than 1 in absolute value is
arbitrary, of course).
    In contrast, if there were, for example, two eigenvalues λ1 , λ2 with |λ1 | , |λ2 | < 1,
then we would have m = 2 (two “degrees of freedom”). But there is only one economic
restriction, namely k0 given. That is, m̂ = 1 < m. Then there would be many convergent
paths satisfying the sole economic restriction on initial conditions and the system would
be indeterminate.

4.2.3      Alternative solution to the speed of convergence
There is another way to solve for the speed of convergence. It is related to the argument
that we have local convergence around k ∗ if the slope of the g(k) schedule satisfies g 0 (k ∗ ) ∈
(−1, 1).
   The starting point is the functional Euler equation:

                     u0 [f (k) − g(k)] = βu0 [f (g(k)) − g(g(k))]f 0 (g(k)), ∀k.

Differentiating with respect to k yields

u00 [f (k) − g(k)][f 0 (k) − g 0 (k)] = βu00 [f (g(k)) − g(g(k))][f 0 (g(k))g 0 (k) − g 0 (g(k))g 0 (k)] ×
                                        ×f 0 (g(k)) + βu0 [f (g(k)) − g(g(k))]f 00 (g(k))g 0 (k), ∀k.

                                                   48
Evaluating at the steady state and noting that g(k ∗ ) = k ∗ , we get

 u00 (c∗ )[f 0 (k ∗ ) + g 0 (k ∗ )] = βu00 (c∗ )[f 0 (k ∗ )g 0 (k ∗ ) − (g 0 (k ∗ ))2 ]f 0 (k ∗ ) + βu0 (c∗ )f 00 (k ∗ )g 0 (k ∗ ).

   This equation is a quadratic equation in g 0 (k ∗ ). Reshuffling the terms and noting that
βf (k ∗ ) = 1, we are lead back to equation (4.2) from before with the difference that we
   0

have now g 0 (k ∗ ) instead of λ. Using the same assumptions on u(·) and f (·), we can easily
prove that for one of the solutions g10 (k ∗ ) ∈ (−1, 1). The final step is the construction of
g(k) using a linear approximation around k ∗ .




                                                                49
50
Chapter 5

Competitive Equilibrium in
Dynamic Models

It is now time to leave pure maximization setups where there is a planner making all
decisions and move on to market economies. What economic arrangement, or what al-
location mechanism, will be used in the model economy to talk about decentralized, or
at least less centralized, behavior? Of course, different physical environments may call
for different arrangements. Although many argue that the modern market economy is
not well described by well-functioning markets due to the presence of various frictions
(incomplete information, externalities, market power, and so on), it still seems a good
idea to build the frictionless economy first, and use it as a benchmark from which exten-
sions can be systematically built and evaluated. For a frictionless economy, competitive
equilibrium analysis therefore seems suitable.
    One issue is what the population structure will be. We will first look at the infinite-
horizon (dynastic) setup. The generalization to models with overlapping generations
of consumers will come later on. Moreover, we will, whenever we use the competitive
equilibrium paradigm, assume that there is a “representative consumer”. That is to say
we think of it that there are a large (truly infinite, perhaps) number of consumers in the
economy who are all identical. Prices of commodities will then have to adjust so that
markets clear; this will typically mean (under appropriate strict concavity assumptions)
that prices will make all these consumers make the same decisions: prices will have to
adjust so that consumers do not interact. For example, the dynamic model without
production gives a trivial allocation outcome: the consumer consumes the endowment
of every product. The competitive mechanism ensures that this outcome is achieved by
prices being set so that the consumer, when viewing prices as beyond his control, chooses
to consume no more and no less than his endowments.
    For a brief introduction, imagine that the production factors (capital and labor) were
owned by many individual households, and that the technology to transform those factors
into consumption goods was operated by firms. Then households’ decisions would consist
of the amount of factors to provide to firms, and the amount of consumption goods to
purchase from them, while firms would have to choose their production volume and factor
demand.
    The device by which sellers and buyers (of factors and of consumption goods) are
driven together is the market, which clearly brings with it the associated concept of

                                            51
prices. By equilibrium we mean a situation such that for some given prices, individual
households’ and firms’ decisions show an aggregate consistency, i.e. the amount of factors
that suppliers are willing to supply equals the amount that producers are willing to take,
and the same for consumption goods - we say that markets clear. The word “competi-
tive” indicates that we are looking at the perfect competition paradigm, as opposed to
economies in which firms might have some sort of “market power”.
    Somewhat more formally, a competitive equilibrium is a vector of prices and quantities
that satisfy certain properties related to the aggregate consistency of individual decisions
mentioned above. These properties are:

  1. Households choose quantities so as to maximize the level of utility attained given
     their “wealth” (factor ownership evaluated at the given prices). When making
     decisions, households take prices as given parameters. The maximum monetary
     value of goods that households are able to purchase given their wealth is called the
     budget constraint.

  2. The quantity choice is “feasible”. By this we mean that the aggregate amount of
     commodities that individual decision makers have chosen to demand can be pro-
     duced with the available technology using the amount of factors that suppliers are
     willing to supply. Notice that this supply is in turn determined by the remunera-
     tion to factors, i.e. their price. Therefore this second condition is nothing but the
     requirement that markets clear.

  3. Firms chose the production volume that maximizes their profits at the given prices.

    For dynamic economic setups, we need to specify how trade takes place over time:
are the economic agents using assets (and, if so, what kinds of assets)? Often, it will
be possible to think of several different economic arrangements for the same physical
environment that all give rise to the same final allocations. It will be illustrative to
consider, for example, both the case when firms rent their inputs from consumers every
period, and thus do not need an intertemporal perspective (and hence assets) to fulfill
their profit maximization objective, and the case when they buy and own the long-lived
capital they use in production, and hence need to consider the relative values of profits
in different periods.
    Also, in dynamic competitive equilibrium models, as in the maximization sections
above, mathematically there are two alternative procedures: equilibria can be defined
and analyzed in terms of (infinite) sequences, or they can be expressed recursively, us-
ing functions. We will look at both, starting with the former. For each approach, we
will consider different specific arrangements, and we will proceed using examples: we
will typically consider an example without production (“endowment economy”) and the
neoclassical growth model. Later applied chapters will feature many examples of other
setups.


5.1     Sequential competitive equilibrium
The central question is the one of determining the set of commodities that are traded.
The most straightforward extension of standard competitive analysis to dynamic models

                                            52
is perhaps the conceptually most abstract one: simply let goods be dated (so that, for
example, in a one-good per date context, there is an infinite sequence of commodities:
consumption at t = 0, consumption at t = 1, etc.) and, like in a static model, let the trade
in all these commodities take place once and for all. We will call this setup the date-0 (or
Arrow-Debreu-McKenzie) arrangement. In this arrangement, there is no need for assets.
If, for example, a consumer needs to consume both in periods 0 and in future periods,
the consumer would buy (rights to) future consumption goods at the beginning of time,
perhaps in exchange for current labor services, or promises of future labor services. Any
activity in the future would then be a mechanical carrying out of all the promises made
at time zero.
     An alternative setup is one with assets: we will refer to this case as one with sequential
trade. In such a case, assets are used by one or more agents, and assets are traded every
period. In such a case, there are nontrivial decisions made in every future period, unlike
in the model with date-0 trade.
     We will now, in turn, consider a series of example economies and, for each one, define
equilibrium in a detailed way.


5.1.1     An endowment economy with date-0 trade
Let the economy have only one consumer with infinite life. There is no production, but
the consumer is endowed with ωt ∈ < units of the single consumption good at each date t.
Notice that the absence of a production technology implies that the consumer is unable
to move consumption goods across time; he must consume all his endowment in each
period, or dispose of any balance. An economy without a production technology is called
an exchange economy, since the only economic activity (besides consumption) that agents
can undertake is trading. Let the consumer’s utility from any given consumption path
{ct }∞
     t=0 be given by
                                      X∞
                                          β t u (ct ) .
                                         t=0


    The allocation problem in this economy is trivial. But imagine that we deceived the
consumer into making him believe that he could actually engage in transactions to buy
and sell consumption goods. Then, since in truth there is no other agent who could act
as his counterpart, market clearing would require that prices are such that the consumer
is willing to have exactly ωt at every t.
    We can see that this requires a specific price for consumption goods at each different
point in time, i.e. the commodities here are consumption goods at different dates, and
each commodity has its own price pt . We can normalize (p0 = 1) so that the prices will
be relative to t = 0 consumption goods: a consumption good at t will cost pt units of
consumption goods at t = 0.
    Given these prices, the value of the consumer’s endowment is given by

                                           ∞
                                           X
                                                 p t ωt .
                                           t=0


                                               53
The value of his expenditures is
                                                          ∞
                                                          X
                                                                p t ct
                                                          t=0

and the budget constraint requires that
                                                 ∞
                                                 X                ∞
                                                                  X
                                                        pt ct ≤          pt ωt .
                                                  t=0             t=0

   Notice that this assumes that trading in all commodities takes place at the same time:
purchases and sales of consumption goods for every period are carried out at t = 0. This
market structure is called an Arrow-Debreu-McKenzie, or date-0, market, as opposed to
a sequential market structure, in which trading for each period’s consumption good is
undertaken in the corresponding period. Therefore in this example, we have the following:

Definition 5.1 A competitive equilibrium is a vector of prices (pt )∞
                                                                    t=0 and a vector
of quantities (c∗t )∞
                    t=0 such that:
                           ½∞           ¾
        ∗ ∞
                             P t
   1. (ct )t=0 = arg max        β u(ct )
                  (ct )∞
                       t=0       t=0

                       P
                       ∞                P
                                        ∞
                s.t.         p t ct ≤         pt ωt
                       t=0              t=0
                       ct ≥ 0 ∀t.

  2. c∗t = ωt ∀t (market clearing constraint).

    Notice, as mentioned earlier, that in this trivial case market clearing (condition 2) re-
quires that the agent consumes exactly his endowment in each period, and this determines
equilibrium prices.
    Quantities are trivially determined here but prices are not. To find the price sequence
that supports the quantities as a competitive equilibrium, simply use the first-order con-
ditions from the consumer’s problem. These are

                                                  β t u0 (ωt ) = λpt ∀t,

where we have used the fact that equilibrium consumption ct equals ωt , and where λ de-
notes the Lagrange multiplier for the budget constraint. The multiplier can be eliminated
to solve for any relative price, such as
                                                   pt    1 u0 (ωt )
                                                       =              .
                                                  pt+1   β u0 (ωt+1 )
This equation states that the relative price of today’s consumption in terms of tomorrow’s
consumption - the definition of the (gross) real interest rate - has to equal the marginal
rate of substitution between these two goods, which in this case is inversely proportional
to the discount rate and to the ratio of period marginal utilities. This price is expressed in
terms of primitives and with it we have a complete solution for the competitive equilibrium
for this economy (remember our normalization: p0 = 1).

                                                             54
5.1.2     The same endowment economy with sequential trade
Let us look at the same exchange economy, but with a sequential markets structure. We
allow 1-period loans, which carry an interest rate of
                                               Rt ≡ 1 + rt
                                              |{z}      |{z}
                                            gross rate          net rate

on a loan between periods t − 1 and t. Let at denote the net asset position of the agent
at time t, i.e. the net amount saved (lent) from last period.
    Now we are allowing the agent to transfer wealth from one period to the next by
lending 1-period loans to other agents. However, this is just a fiction as before, in the
sense that since there is only one agent in the economy, there cannot actually be any
loans outstanding (since lending requires both a lender and a borrower). Therefore the
asset market will only clear if a∗t = 0 ∀t, i.e. if the planned net asset holding is zero for
every period.
    With the new market structure, the agent faces not a single, but a sequence of budget
constraints. His budget constraint in period t is given by:
                                        ct + at+1 =           at Rt∗ + ωt ,
                                        | {z }                | {z }
                                        uses of funds     sources of funds

where Rt∗ denotes the equilibrium interest rate that the agent takes as given.      With this
in hand, we have the following:
                                                                                   © ∗ ª∞
Definition 5.2 A competitive equilibrium is a set of sequences {c∗t }∞
                                                                     t=0 ,          at+1 t=0 ,
  ∗ ∞
{Rt }t=0 such that:
                             ½∞         ¾
      © ∗ ∗ ª∞                P t
  1. ct , at+1 t=0 = arg max    β u(ct )
                      {ct , at+1 }∞
                                  t=0     t=0

                s.t. ct + at+1 = at Rt∗ + ωt ∀t
                     ct ≥ 0 ∀t; a0 = 0
                              µ∞        ¶−1
                                Q
                     lim at+1      Rt+1     = 0 (no-Ponzi-game condition).
                     t→∞           t=0

  2. Feasibility constraint: a∗t = 0 ∀t (asset market clearing).
  3. c∗t = ωt ∀t (goods market clearing).
   Notice that the third condition necessarily follows from the first and second ones, by
Walras’s law: if n − 1 markets clear in each period, then the nth one will clear as well.
   To determine quantities is as trivial here (with the same result) as in the date-0 world.
Prices, i.e. interest rates, are again available from the first-order condition for saving, the
consumer’s Euler equation, evaluated at c∗t = ωt :
                                         u0 (ωt ) = βu0 (ωt+1 )Rt+1
                                                                ∗
                                                                    ,
so that
                                            1 u0 (ωt )
                                              ∗
                                             Rt+1 =      .
                                            β u0 (ωt+1 )
Not surprisingly, this expression coincides with the real interest rate in the date-0 econ-
omy.

                                                         55
5.1.3      The neoclassical growth model with date-0 trade
Next we will look at an application of the definition of competitive equilibrium to the
neoclassical growth model. We will first look at the definition of competitive equilibrium
with a date-0 market structure, and then at the sequential markets structure.
   The assumptions in our version of the neoclassical growth model are as follows:

   1. The consumer is endowed with 1 unit of “time” each period, which he can allocate
      between labor and leisure.

   2. The utility derived from the consumption and leisure stream {ct , 1 − nt }∞
                                                                                t=0 is given
      by
                                                        ∞
                                                        X
                                                ∞
                               U ({ct , 1 − nt }t=0 ) =   β t u (ct ) .
                                                         t=0

      That is, we assume for the moment that leisure is not valued; equivalently, labor
      supply bears no utility cost. We also assume that u (·) is strictly increasing and
      strictly concave.

   3. The consumer owns the capital, which he rents to firms in exchange for rt units of
      the consumption good at t per unit of capital rented. Capital depreciates at rate δ
      each period.

   4. The consumer rents his labor services at t to the firm for a unit rental (or wage)
      rate of wt .

   5. The production function of the consumption/investment good is F (K, n); F is
      strictly increasing in each argument, concave, and homogeneous of degree 1.

   The following are the prices involved in this market structure:

- Price of consumption good at every t: pt
      pt : intertemporal relative prices; if p0 = 1, then pt is the price of consumption goods
      at t relative to (in terms of) consumption goods at t = 0.

- Price of capital services at t: pt rt
      rt : rental rate; price of capital services at t relative to (in terms of) consumption
      goods at t.

- Price of labor: pt wt
      wt : wage rate; price of labor at t relative to (in terms of) consumption goods at t.

Definition 5.3 A competitive equilibrium is a set of sequences:

 Prices: {p∗t }∞       ∗ ∞        ∗ ∞
               t=0 , {rt }t=0 , {wt }t=0


                        © ∗ ª∞
 Quantities: {c∗t }∞                  ∗ ∞
                   t=0 , Kt+1 t=0 , {nt }t=0 such that




                                             56
                © ∗ ª∞
  1. {c∗t }∞                  ∗ ∞
           t=0 , Kt+1 t=0 , {nt }t=0 solve the consumer’s problem:
                                          ½∞              ¾
     © ∗      ∗
                      ª∞                    P
      ct , Kt+1  , n∗t t=0 = arg max           β t u (ct )
                           {ct , Kt+1 , nt }∞
                                            t=0     t=0

                                P
                                ∞                           P
                                                            ∞
                         s.t.         p∗t [ct + Kt+1 ] =          p∗t [rt∗ Kt + (1 − δ) Kt + nt wt∗ ]
                                t=0                         t=0
                                ct ≥ 0 ∀t, k0 given.
     At every period t, capital is quoted in the same price as the consumption good. As
     for labor, recall that we have assumed that it has no utility cost. Therefore wt > 0
     will imply that the consumer supplies all his time endowment to the labor market:
     wt > 0 ⇒ n∗t = 1 ∀t.

  2. {Kt∗ }∞       ∗ ∞
           t=0 , {nt }t=0 solve the firms’ problem:

                   ∀t : (Kt∗ , 1) = arg max {p∗t F (Kt , nt ) − p∗t rt∗ Kt − p∗t wt∗ nt }
                                          Kt , nt


     The firm’s decision problem involves just a one-period choice - it is not of a dynam-
     ical nature (for example, we could imagine that firms live for just one period). All
     of the model’s dynamics come from the consumer’s capital accumulation problem.
     This condition may equivalently be expressed as follows: ∀t : (rt∗ , wt∗ ) satisfy:

                                                  rt∗ = FK (Kt∗ , 1)                                    (5.1)

                                                  wt∗ = Fn (Kt∗ , 1) .

     Notice that this shows that if the production function F (K, n) is increasing in n,
     then n∗t = 1 follows.

  3. Feasibility (market clearing):

                                c∗t + Kt+1
                                       ∗
                                           = F (Kt∗ , 1) + (1 − δ) Kt∗ .

     This is known as the one-sector neoclassical growth model, since only one type of
     goods is produced, that can be used either for consumption in the current period or as
     capital in the following. There is also a vast literature on multi-sector neoclassical
     growth models, in which each type of physical good is produced with a different
     production technology, and capital accumulation is specific to each technology.

   Let us now characterize the equilibrium. We first study the consumer’s problem by
deriving his intertemporal first-order conditions. Differentiating with respect to ct , we
obtain
                                   ct : β t u0 (c∗t ) = p∗t λ∗ ,
where λ∗ is the Lagrange multiplier corresponding to the budget constraint. Since the
market structure that we have assumed consists of date-0 markets, there is only one
budget and hence a unique multiplier.

                                                       57
   Consumption at t + 1 obeys
                                               ¡     ¢
                                ct+1 : β t+1 u0 c∗t+1 = p∗t+1 λ∗ .

Combining the two we arrive at

                                        p∗t    1 u0 (c∗t )
                                             =     ¡       ¢.                           (5.2)
                                       p∗t+1   β u0 c∗t+1
                                p∗                                    u0 (c∗ )
We can, as before, interpret p∗t as the real interest rate, and β1 u0 c∗t as the marginal
                               t+1                                   ( t+1 )
rate of substitution of consumption goods between t and t + 1.
   Differentiating with respect to capital, one sees that
                                                   £ ∗            ¤
                           Kt+1 : λ∗ p∗t = λ∗ p∗t+1 rt+1 + (1 − δ) .

Therefore,
                                        p∗t     ∗
                                             = rt+1 + 1 − δ.
                                       p∗t+1
Using condition (5.1), we also find that
                                     p∗t         ¡ ∗    ¢
                                     ∗
                                         = FK Kt+1   , 1 + 1 − δ.                        (5.3)
                                    pt+1
                        ¡ ∗         ¢
    The expression FK Kt+1       , 1 + (1 − δ) is the marginal return on capital: the marginal
rate of technical substitution (transformation) between ct and ct+1 . Combining expres-
sions (5.2) and (5.3), we see that
                                                 £ ¡ ∗      ¢       ¤
                         u0 (c∗t ) = βu0 (c∗t+1 ) FK Kt+1 ,1 + 1 − δ .                   (5.4)

   Notice now that (5.4) is nothing but the Euler Equation from the planner’s problem.
Therefore a competitive equilibrium allocation satisfies the optimality conditions for the
centralized economy: the competitive equilibrium is optimal. You may recognize this as
the First Welfare Theorem. We have assumed that there is a single consumer, so in this
case Pareto-optimality just means utility maximization. In addition, as we will see later,
with the appropriate assumptions on F (K, n) (namely, non-increasing returns to scale),
an optimum can be supported as a competitive equilibrium, which is the result of the
Second Welfare Theorem.

5.1.4     The neoclassical growth model with sequential trade
The following are the prices involved in this market structure:

- Price of capital services at t: Rt
      Rt : rental rate; price of capital services at t relative to (in terms of) consumption
      goods at t.
      Just for the sake of variety, we will now assume that Rt is the return on capital net
      of the depreciation costs. That is, with the notation used before, Rt ≡ rt + 1 − δ.

                                                58
- Price of labor: wt
       wt : wage rate; price of labor at t relative to (in terms of) consumption goods at t.
                                                                        © ∗ ∗ ∗          ∗
                                                                                                  ª∞
Definition 5.4 A competitive equilibrium is a sequence                   Rt , wt , ct , Kt+1 , n∗t t=0
such that:
       © ∗    ∗
                       ª∞
  1.    ct , Kt+1 , n∗t t=0 solves the consumer’s problem:
                                           ½∞           ¾
       © ∗    ∗
                       ª
                      ∗ ∞
                                             P t
        ct , Kt+1 , nt t=0 = arg max           β u(ct )
                            {ct , Kt+1 , nt }∞
                                             t=0   t=0

                                s.t. ct + Kt+1 = Kt Rt∗ + nt wt∗
                                        k0 given and a no-Ponzi-game condition.
    (Note that accumulating Kt+1 is analogous to lending at t.)
    © ∗        ª∞
  2. Kt+1 , n∗t t=0 solves the firms’ problem:

                ∀t : (Kt∗ , 1) = arg max {F (Kt , nt ) − Rt∗ Kt + (1 − δ) Kt − wt∗ nt } .
                                   Kt , nt


  3. Market clearing (feasibility):

                             ∀t : c∗t + Kt+1
                                         ∗
                                             = F (Kt∗ , 1) + (1 − δ) Kt∗ .

   The way that the rental rate has been presented now can be interpreted as saying
that the firm manages the capital stock, funded by loans provided by the consumers.
However, the capital accumulation decisions are still in the hands of the consumer (this
might also be modeled in a different way, as we shall see later).
   Let us solve for the equilibrium elements. As before, we start with the consumer’s
problem:
                                  ct : β t u0 (c∗t ) = β t λ∗t .
With the current market structure, the consumer faces a sequence of budget constraints,
and hence a sequence of Lagrange multipliers {λ∗t }∞t=0 . We also have
                                           ¡     ¢
                            ct+1 : β t+1 u0 c∗t+1 = β t+1 λ∗t+1 .

Then
                                              λ∗t     u0 (c∗t )
                                                   =   ¡        ¢.                              (5.5)
                                             λ∗t+1   u0 c∗t+1
Differentiation with respect to capital yields

                                  Kt+1 : β t λ∗t = β t+1 Rt+1
                                                          ∗
                                                              λ∗t+1 ,

so that
                                               λ∗t      ∗
                                                    = βRt+1 .                                   (5.6)
                                              λ∗t+1

                                                     59
Combining expressions (5.5) and (5.6), we obtain

                                       u0 (c∗t )   ∗
                                         ¡ ∗ ¢ = βRt+1 .                                  (5.7)
                                       0
                                      u ct+1

From Condition 2 of the definition of competitive equilibrium,

                                   Rt∗ = Fk (Kt∗ , 1) + 1 − δ.                            (5.8)

Therefore, combining (5.7) and (5.8) we obtain:
                                       ¡     ¢
                        u0 (c∗t ) = βu0 c∗t+1 [Fk (Kt∗ , 1) + 1 − δ] .

This, again, is identical to the planner’s Euler equation. It shows that the sequential
market equilibrium is the same as the Arrow-Debreu-McKenzie date-0 equilibrium and
both are Pareto-optimal.


5.2      Recursive competitive equilibrium
Recursive competitive equilibrium uses the recursive concept of treating all maximization
problems as split into decisions concerning today versus the entire future. As such, this
concept thus has no room for the idea of date-0 trading: it requires sequential trading.
    Instead of having sequences (or vectors), a recursive competitive equilibrium is a set
of functions - quantities, utility levels, and prices, as functions of the “state”: the relevant
initial condition. As in dynamic programming, these functions allow us to say what will
happen in the economy for every specific consumer, given an arbitrary choice of the initial
state.
    As above, we will state the definitions and then discuss their ramifications in the
context of a series of examples, beginning with a treatment of the neoclassical growth
model.

5.2.1     The neoclassical growth model
Let us assume again that the time endowment is equal to 1, and that leisure is not valued.
Recall the central planner’s problem that we analyzed before:

                               V (K) = max
                                        0
                                           {u(c) + βV (K 0 )}
                                        c, K ≥0
                                           0
                               s.t. c + K = F (K, 1) + (1 − δ) K.

    In the decentralized recursive economy, the individual’s budget constraint will no
longer be expressed in terms of physical units, but in terms of sources and uses of funds at
the going market prices. In the sequential formulation of the decentralized problem, these
take the form of sequences of factor remunerations: {Rt , wt }∞   t=0 , with the equilibrium
levels given by

                                 Rt∗ = FK (Kt∗ , 1) + 1 − δ
                                 wt∗ = Fn (Kt∗ , 1) .

                                                  60
Notice that both are a function of the (aggregate) level of capital (with aggregate labor
supply normalized to 1). In dynamic programming terminology, what we have is a law
of motion for factor remunerations as a function of the aggregate level of capital in the
economy. If K̄ denotes the (current) aggregate capital stock, then

                                          R = R(K̄)
                                          w = w(K̄).

Therefore, the budget constraint in the decentralized dynamic programming problem
reads
                             c + K 0 = R(K̄)K + w(K̄).                       (5.9)
   The previous point implies that when making decisions, two variables are key to the
agent: his own level of capital, K, and the aggregate level of capital, K̄, which will de-
termine his income. So the correct “syntax” for writing down the dynamic programming
problem is:               ¡      ¢        ©           ¡ 0 0 ¢ª
                        V K, K̄ = max  0
                                            u(c) + βV  K , K̄    ,                 (5.10)
                                        c, K ≥0

where the state variables for the consumer are K and K̄).
    We already have the objective function that needs to be maximized and one of the
restrictions, namely the budget constraint. Only K̄ 0 is left to be specified. The economic
interpretation of this is that we must determine the agent’s perceived law of motion of
aggregate capital. We assume that he will perceive this law of motion as a function of the
aggregate level of capital. Furthermore, his perception will be rational - it will correctly
correspond to the actual law of motion:

                                           K̄ 0 = G(K̄),                              (5.11)

where G is a result of the economy’s, that is, the representative agent’s equilibrium capital
accumulation decisions.
   Putting (5.9), (5.10) and (5.11) together, we write down the consumer’s complete
dynamic problem in the decentralized economy:
                            ¡    ¢           ©            ¡ 0 0 ¢ª
                          V K, K̄ = max  0
                                               u(c) + βV   K , K̄                      (5.12)
                                         c, K ≥0


                               s.t. c + K 0 = R(K̄)K + w(K̄)
                                           K̄ 0 = G(K̄).
(5.12) is the recursive competitive equilibrium functional equation. The solution will
yield a policy function for the individual’s law of motion for capital:
                                         ©                               ¡           ¢ª
       K 0 = g(K, K̄) =      arg max       u[R(K̄)K + w(K̄) − K̄ 0 ] + βV K 0 , K̄ 0
                        K 0 ∈[0,R(K̄)K+w(K̄)]


                                        s.t. K̄ 0 = G(K̄).
   We can now address the object of our study:

Definition 5.5 A recursive competitive equilibrium is a set of functions:

                                                   61
 Quantities: G(K̄), g(K, K̄)
                          ¡      ¢
 Lifetime utility level: V K, K̄

 Prices: R(K̄), w(K̄) such that
        ¡     ¢
  1. V K, K̄ solves (5.12) and g(K, K̄) is the associated policy function.

  2. Prices are competitively determined:

                                     R(K̄) = FK (K̄, 1) + 1 − δ
                                     w(K̄) = Fn (K̄, 1).

     In the recursive formulation, prices are stationary functions, rather than sequences.

  3. Consistency is satisfied:
                                        G(K̄) = g(K̄, K̄) ∀K̄.

    The third condition is the distinctive feature of the recursive formulation of competi-
tive equilibrium. The requirement is that, whenever the individual consumer is endowed
with a level of capital equal to the aggregate level (for example, only one single agent in
the economy owns all the capital, or there is a measure one of agents), his own individual
behavior will exactly mimic the aggregate behavior. The term consistency points out the
fact that the aggregate law of motion perceived by the agent must be consistent with the
actual behavior of individuals. Consistency in the recursive framework corresponds to
the idea in the sequential framework that consumers’ chosen sequences of, say, capital,
have to satisfy their first-order conditions given prices that are determined from firms’
first-order conditions evaluated using the same sequences of capital.
    None of the three conditions defining a recursive competitive equilibrium mentions
market clearing. Will markets clear? That is, will the following equality hold?

                              c̄ + K̄ 0 = F (K̄, 1) + (1 − δ) K̄,

where c̄ denotes aggregate consumption. To answer this question, we may make use of
the Euler Theorem. If the production technology exhibits constant returns to scale (that
is, if the production function is homogeneous of degree 1), then that theorem delivers:

                         F (K̄, 1) + (1 − δ) K̄ = R(K̄)K̄ + w(K̄).

In economic terms, there are zero profits: the product gets exhausted in factor payment.
This equation, together with the consumer’s budget constraint evaluated in equilibrium
(K = K̄) implies market clearing.
    Completely solving for a recursive competitive equilibrium involves more work than
solving for a sequential equilibrium, since it involves solving for the functions V and g,
which specify “off-equilibrium” behavior: what the agent would do if he were different
from the representative agent. This calculation is important in the sense that in order to
justify the equilibrium behavior we need to see that the postulated, chosen path, is not
worse than any other path. V (K, K̄) precisely allows you to evaluate the future conse-
quences for these behavioral alternatives, thought of as one-period deviations. Implicitly

                                              62
this is done with the sequential approach also, although in that approach one typically
simply derives the first-order (Euler) equation and imposes K = K̄ there. Knowing that
the F.O.C. is sufficient, one does not need to look explicitly at alternatives.
     The known parametric cases of recursive competitive equilibria that can be solved fully
include the following ones: (i) logarithmic utility (additive logarithms of consumption
and leisure, if leisure is valued), Cobb-Douglas production, and 100% depreciation; (ii)
isoelastic utility and linear production; and (iii) quadratic utility and linear production.
It is also possible to show that, when utility is isoelastic (and no matter what form the
production function takes), one obtains decision rules of the form g(K, K̄) = λ(K̄)K +
µ(K̄), where the two functions λ and µ satisfy a pair of functional equations whose
solution depends on the technology and on the preference parameters. That is, the
individual decision rules are linear in K, the agent’s own holdings of capital.
     More in the spirit of solving for sequential equilibria, one can solve for recursive
competitive equilibrium less than fully by ignoring V and g and only solve for G, using
the competitive equilibrium version of the functional Euler equation. It is straightforward
to show, using the envelope theorem as above in the section on dynamic programming,
that this functional equation reads
   ¡                             ¢         ¡
u0 R(K̄)K + w(K̄) − g(K, K̄) = βu0 R(G(K̄))g(K, K̄) + w(G(K̄))−
                                                            ¢
                                        −g(g(K, K̄), G(K̄)) (F1 (G(K), 1) + 1 − δ) ∀K, K̄.

Using the Euler Theorem and consistency (K = K̄) we now see that this functional
equation becomes
       ¡                            ¢     ¡
    u0 F (K̄, 1) + (1 − δ)K̄ − G(K̄) = βu0 F (G(K̄), 1) + (1 − δ)G(K̄)−
                                                 ¢¡                     ¢
                                       −G(G(K̄)) F1 (G(K̄), 1) + 1 − δ ∀K̄,

which corresponds exactly to the functional Euler equation in the planning problem. We
have thus shown that the recursive competitive equilibrium produces optimal behavior.

5.2.2     The endowment economy with one agent
Let the endowment process be stationary: ωt = ω, ∀t . The agent is allowed to save in
the form of loans (or assets). His net asset position at the beginning of the period is given
by a. Asset positions need to cancel out in the aggregate: a = 0, since for every lender
there must be a borrower. The definition of a recursive equilibrium is now as follows.

Definition 5.6 A recursive competitive equilibrium is a set of functions V (a), g(a),
R such that

  1. V (a) solves the consumer’s functional equation:

                                   V (a) = max0 {u(c) + βV (a0 )}
                                              c≥0, a
                                       0
                              s.t. c + a   = aR + ω.

  2. Consistency:
                                            g(0) = 0.

                                             63
    The consistency condition in this case takes the form of requiring that the agent that
has a null initial asset position keep this null balance. Clearly, since there is a unique
agent then asset market clearing requires a = 0. This condition will determine R as the
return on assets needed to sustain this equilibrium. Notice also that R is not really a
function - it is a constant, since the aggregate net asset position is zero.
    Using the functional Euler equation, which of course can be derived here as well, it is
straightforward to see that R has to satisfy
                                                    1
                                            R=        ,
                                                    β
since the u0 terms cancel. This value induces agents to save zero, if they start with
zero assets. Obviously, the result is the same as derived using the sequential equilibrium
definition.

5.2.3     An endowment economy with two agents
Assume that the economy is composed of two agents who live forever. Agent i derives
                                              ∞
utility from a given consumption stream {cit }t=0 as given in the following formula:
                                          ∞
                               ¡© i ª∞ ¢ X        ¡ ¢
                          Ui     ct t=0 =   βit ui cit , i = 1, 2.
                                            t=0

Endowments are stationary:
                                     ωti = ω i ∀t, i = 1, 2.
Total resource use in this economy must obey:

                                    c1t + c2t = ω 1 + ω 2 ∀t.

Clearing of the asset market requires that:

                                     at ≡ a1t + a2t = 0 ∀t.

    Notice this implies a1t = −a2t ; that is, at any point in time it suffices to know the
asset position of one of the agents to know the asset position of the other one as well.
Denote A1 ≡ a1 . This is the relevant aggregate state variable in this economy (the time
subscript is dropped to adjust to dynamic programming notation). Claiming that it is
a state variable amounts to saying that the distribution of asset holdings will matter
for prices. This claim is true except in special cases (as we shall see below), because
whenever marginal propensities to save out of wealth are not the same across the two
agents (either because they have different utility functions or because their common utility
function makes the propensity depend on the wealth level), different prices are required
to make total savings be zero, as equilibrium requires.
    Finally, let q denote the current price of a one-period bond: q = Rt,1t+1 . Also, in what
follows, subscript denotes the type of agent. We are now ready to state the following:

Definition 5.7 A recursive competitive equilibrium of the two-agent economy is a
set of functions:

                                               64
 Quantities: g1 (a1 , A1 ) , g2 (a2 , A1 ) , G (A1 )
 Lifetime utility levels: V1 (a1 , A1 ) , V2 (a2 , A1 )
 Prices: q (A1 ) such that

  1. Vi (ai , A1 ) is the solution to consumer i’s problem:
                                              © ¡ i¢              0     0
                                                                           ª
                        Vi (ai , A1 ) = max
                                         i  0
                                               u i c  + β i Vi (a i , A 1 )
                                                 c ≥0, ai
                          i
                 s.t. c       + a0i q (A1 )   = a i + ωi .
                                        A01   = G (A1 ) → perceived law of motion for A1 .

      The solution to this functional equation delivers the policy function gi (ai , A1 ).
  2. Consistency:

                                           G (A1 ) = g1 (A1 , A1 ) ∀A1
                                          −G (A1 ) = g2 (−A1 , A1 ) ∀A1 .

   The second condition implies asset market clearing:

                      g1 (A1 , A1 ) + g2 (−A1 , A1 ) = G (A1 ) − G (A1 ) = 0.

Also note that q is the variable that will adjust for consistency to hold.
    For this economy, it is not easy to find analytical solutions, except for special para-
metric assumptions. We will turn to those now. We will, in particular, consider the
following question: under what conditions will q be constant (that is, independent of the
wealth distribution characterized by A1 )?
    The answer is, as one can show, that it will be constant if the following two conditions
hold:

  (i) β1 = β2
 (ii) u1 = u2 , and these utility indices belong to the Gorman class:

                                                    u(c) = V [f (c)] ,

      where
                                                     f (c) = a + bc
                                                   
                                                   
                                                     quadratic
                                                   
                                                      exponential
                                              V is
                                                   
                                                               c1−σ − 1
                                                    CRRA:               .
                                                                  1−σ
     This proposition is also valid for models with production, and can be extended to
uncertainty and to the case of valued leisure. The underlying intuition is that q will be
independent of the distribution of wealth if consumers’ utility functions induce constant
marginal propensities to save, and these propensities are identical across consumers. And
it is a well-known result in microeconomics that these utility functions deliver just that.

                                                            65
5.2.4       Neoclassical production again, with capital accumulation
            by firms
Unlike in the previous examples (recall the discussion of competitive equilibrium with
the sequential and recursive formulations), we will now assume that firms are the ones
that make capital accumulation decisions in this economy. The (single) consumer owns
stock in the firms. In addition, instead of labor, we will have “land” as the second factor
of production. Land will be owned by the firm.
    The functions involved in this model are the dynamic programs of both the consumer
and the firm:

    K̄ 0 = G(K̄)       aggregate law of motion for capital.
                                                                    ¡          1
                                                                                           ¢
    q(K̄)              current price of next period’s consumption       return on stocks
                                                                                               .
      ¡      ¢
    Vc a, K̄           consumer’s indirect utility as function of K̄ and his wealth a.
           ¡      ¢                                  ¡     ¢
    a0 = gc a, K̄      policy rule associated with Vc a, K̄ .
      ¡      ¢
    Vf K, K̄           market value (in consumption goods), of a firm with K units
                       of initial capital, when the aggregate stock of capital is K̄.
            ¡     ¢                              ¡     ¢
    K 0 = gf K, K̄ policy rule associated with Vf a, K̄ .

   The dynamic programs of the different agents are as follows:

  1. The consumer:             ¡     ¢      ©          ¡          ¢ª
                             Vc a, K̄ = max0 u(c) + βVc a0 , K̄ 0                                  (5.13)
                                         c≥0, a
                                                 ¡ ¢
                                      s.t. c + q K̄ a0 = a
                                                  ¡ ¢
                                          K̄ 0 = G K̄ .
     The solution to this dynamic program produces the policy rule
                                             ¡     ¢
                                      a0 = gc a, K̄ .

  2. The firm:
            ¡    ¢      ©                               ¡ ¢ ¡             ¢ª
         Vf K, K̄ = max
                      0
                          F (K, 1) + (1 − δ) K − K 0 + q K̄ Vf K 0 , K̄ 0                          (5.14)
                         K
                                                     ¡ ¢
                                        s.t. K̄ 0 = G K̄ .
     The solution to this dynamic program produces the policy rule
                                             ¡     ¢
                                     K 0 = gf K, K̄ .

   We are now ready for the equilibrium definition.

                                             66
Definition 5.8 A recursive competitive equilibrium is a set of functions
                 ¡     ¢     ¡     ¢    ¡ ¢
 Quantities: gc a, K̄ , gf K, K̄ , G K̄
                                    ¡     ¢    ¡      ¢
 Lifetime utility levels, values: Vc a, K̄ , Vf K, K̄
           ¡ ¢
 Prices: q K̄ such that
         ¡     ¢          ¡    ¢
  1. Vc a, K̄ and gc a, K̄ are the value and policy functions, respectively, solving
      (5.13).
         ¡      ¢          ¡     ¢
  2. Vf K, K̄ and gf K, K̄ are the value and policy functions, respectively, solving
      (5.14).
                           ¡     ¢     ¡ ¢
  3. Consistency 1: gf K̄, K̄ = G K̄ for all K̄.
                          £ ¡        ¢    ¤      £ ¡ ¢  ¡ ¢¤
  4. Consistency 2: gc Vf K̄, K̄ , K̄ = Vf G K̄ , G K̄ ∀K̄.
   The consistency conditions can be understood as follows. The last condition requires
that the consumer ends up owning 100% of the firm next period whenever he started up
owning 100% of it. Notice that if the consumer starts the period owning the whole firm,
then the value of a (his wealth) is equal to the market value of the firm, given by Vf (·).
That is,                                     ¡    ¢
                                     a = Vf K, K̄ .                                 (5.15)
   The value of the firm next period is given by
                                       Vf (K 0 , K̄ 0 ).
To assess this value, we need K 0 and K̄ 0 . But these come from the respective laws of
motion:                                        £                 ¤
                          Vf (K 0 , K̄ 0 ) = Vf gf (K, K̄), G(K̄) .
Now, requiring that the consumer owns 100% of the firm in the next period amounts to
requiring that his desired asset accumulation, a0 , coincide with the value of the firm next
period:                                £                   ¤
                                a0 = Vf gf (K, K̄), G(K̄) .
But a0 follows the policy rule gc (a, K̄). A substitution then yields
                                            £                 ¤
                            gc (a, K̄) = Vf gf (K, K̄), G(K̄) .                      (5.16)
Using (5.15) to replace a in (5.16), we obtain
                         £ ¡        ¢   ¤      £             ¤
                      gc Vf K, K̄ , K̄ = Vf gf (K, K̄), G(K̄) .                      (5.17)
The consistency condition
                        £ is then
                               ¤ imposed
                                    £ ¤ with K = K̄ in (5.17) (and using the “Con-
sistency 1” condition gf K̄, K̄ = G K̄ ), yielding
                          £ ¡       ¢    ¤      £          ¤
                        gc Vf K̄, K̄ , K̄ = Vf G(K̄), G(K̄) .
   To show that the allocation resulting from this definition of equilibrium coincides
with the allocation we have seen earlier (e.g., the planning allocation), one would have to
derive functional Euler equations for both the consumer and the firm and simplify them.
We leave it as an exercise to verify that the outcome is indeed the optimal one.

                                             67
68
Chapter 6

Uncertainty

Our program of study will comprise the following three topics:

  1. Examples of common stochastic processes in macroeconomics

  2. Maximization under uncertainty

  3. Competitive equilibrium under uncertainty

The first one is closely related to time series analysis. The second and the third one are
a generalization of the tools we have already introduced to the case where the decision
makers face uncertainty.
   Before proceeding with this chapter, it may be advisable to review the basic notation
and terminology associated with stochastic processes presented in the appendix.


6.1         Examples of common stochastic processes in macroe-
            conomics
The two main types of modelling techniques that macroeconomists make use of are:

      • Markov chains

      • Linear stochastic difference equations


6.1.1       Markov chains
Definition 6.1 Let xt ∈ X, where X = x1 , x2 , ..., xn is a finite set of values. A sta-
tionary Markov chain is a stochastic process {xt }∞  t=0 defined by X, a transition matrix
 P , and an initial probability distribution π0 for x0 (the first element in the stochastic
n×n                                           1×n
process).

      The elements of P represent the following probabilities:
                      n×n


                                 Pij = Pr[xt+1 = xj |xt = xi ].

                                              69
Notice that these probabilities are independent of time. We also have that the probability
two periods ahead is given by
                                                       n
                                                       X
                          Pr[xt+2 = xj |xt = xi ] =          Pik Pkj
                                                       k=1
                                                         2
                                                   ≡ [P ]i,j ,

where [P 2 ]i,j denotes the (i, j)th entry of the matrix P 2 .
  Given π0 , π1 is the probability distribution of x1 as of time t = 0 and it is given by

                                        π1 = π0 P.

Analogously,

                                       π2 = π0 P 2
                                        ..    .
                                         . = ..
                                       πt = π0 P t

and also
                                       πt+1 = πt P.

Definition 6.2 A stationary (or invariant) distribution for P is a probability vector
π such that
                                   π = πP.

   A stationary distribution then satisfies

                                        πI = πP,

where I is identity matrix and

                                      π − πP = 0
                                     π[I − P ] = 0.

That is, π is an eigenvector of P , associated with the eigenvalue λ = 1.

Example 6.3

            µ       ¶                        µ         ¶
              .7 .3      ¡      ¢    ¡      ¢ .7 .3
  (i) P =              ⇒ π1 π2 = π1 π2                     You should verify that
          ¡   .6 .4
                 ¢                              .6  .4
      π = 23 31 .
          µ          ¶
            0.1 0.9           ¡     ¢
 (ii) P =               ⇒ π = 12 12 .
            0.9 0.1
          µ        ¶
            1 0             ¡     ¢
(iii) P =             ⇒ π = 1 0 . The first state is said to be “absorbing”.
            .1 .9

                                              70
           µ      ¶
             1 0                ¡          ¢
(iv) P =             ⇒ π = a 1 − a , a ∈ [0, 1] . In this last case, there is a
             0 1
     continuum of invariant distributions.

    The question now is whether πt converges, in some sense, to a number π∞ as t → ∞,
which would mean that π∞ = π∞ P and if so, whether π∞ depends on the initial condition
π0 . If the answers to these two questions are “Yes” and “No”, respectively, then the
stochastic process is said to be “asymptotically stationary”, with a unique invariant
distribution. Fortunately, we can borrow the following result for sufficient conditions for
asymptotic stationarity:

Theorem 6.4 P has a unique invariant distribution (and is asymptotically stationary)
if Pij > 0 ∀i, ∀j.

6.1.2    Linear stochastic difference equations
Let xt ∈ <n , wt ∈ <m ,
                                   xt+1 = A xt + C wt+1 .
                                            n×n          n×n

We normally assume
                          Et [wt+1 ] = Et [wt+1 |wt , wt−1 , ... ] = 0
                          £    0
                                   ¤
                      Et wt+1 wt+1   = I.

Example 6.5 (AR(1) process) Let
                                     yt+1 = ρyt + εt+1 + b
and assume
                                           Et [εt+1 ] = 0
                                              £    ¤
                                          Et ε2t+1 = σ 2
                                    Et [εt+k εt+k+1 ] = 0.
    Even if y0 is known, the {yt }∞
                                  t=0 process will not be stationary in general. However,
the process may become stationary as t → ∞. By repeated substitution, we get
                                                        b ¡        ¢
                                E0 [yt ] = ρt y0 +          1 − ρt
                                                       1−ρ
                                                            b
                               |ρ| < 1 ⇒ lim E0 [yt ] =         .
                                           t→∞           1−ρ
Then, the process will be stationary if |ρ| < 1. Similarly, the autocovariance function is
given by
                                                                         1 − ρt−k
              γ (t, k) ≡ E0 [(yt − E [yt ]) (yt−k − E [yt−k ])] = σ 2 ρk
                                                                          1 − ρ2
                                                        σ2 k
                              |ρ| < 1 ⇒ lim γ (t, k) =      ρ .
                                      t→∞            1 − ρ2
The process is asymptotically weakly stationary if |ρ| < 1.

                                                  71
    We can also regard x0 (or y0 , in the case
                                            £ of an AR(1) process)
                                                                ¤     as drawn from a dis-
tribution with mean µ0 and covariance E (x0 − µ0 ) (x0 − µ0 )0 ≡ Γ0 . Then the following
are sufficient conditions for {xt }∞
                                   t=0 to be weakly stationary process:

  (i) µ0 is the eigenvector associated to the eigenvalue λ1 = 1 of A:

                                             µ00 = µ00 A.

 (ii) All other eigenvalues of A are smaller than 1 in absolute value:

                                     |λi | < 1 i = 2, ..., n.

   To see this, notice that condition (i) implies that

                            xt+1 − µ0 = A (xt − µ0 ) + Cwt+1 .

Then,                         £                      ¤
                Γ0 = Γ (0) ≡ E (xt − µ0 ) (xt − µ0 )0 = AΓ (0) A0 + CC 0
and                            £                        ¤
                      Γ (k) ≡ E (xt+k − µ0 ) (xt − µ0 )0 = Ak Γ (0) .
This is the matrix version of the autocovariance function γ (t, k) presented above. Notice
that we drop t as a variable in this function.
                                                         εt
Example 6.6 Let xt = yt ∈ <, A = ρ, C = σ 2 , and wt =      - we are accommodating the
                                                         σ
AR(1) process seen before to this notation. We can do the following change of variables:
                                    µ    ¶
                                      yt
                            ybt =
                                       1
                                    µ       ¶       µ ¶
                                      ρ b            σ
                         ybt+1 =              ybt +     wt+1 .
                                      0 1            0
                                    | {z }
                                         b
                                         A

Then, using the previous results and ignoring the constant, we get

                               Γ (0) = ρ2 Γ (0) + σ 2
                                                  σ2
                                     ⇒ Γ (0) =         .
                                                1 − ρ2

6.2     Maximization under uncertainty
We will approach this topic by illustrating with examples. Let us begin with a simple
2-period model, where an agent faces a decision problem in which he needs to make the
following choices:
  1. Consume and save in period 0.

  2. Consume and work in period 1.

                                              72
  The uncertainty arises in the income of period 1 through the stochasticity of the wage.
We will assume that there are n possible states of the world in period 1, i.e.

                                                 ω 2 ∈ {ω1 , ..., ωn } ,

where πi ≡ Pr [ω 2 = ωi ], for i = 1, ..., n.
   The consumer’s utility function has the von Neumann-Morgenstern type, i.e. he is an
expected utility maximizer. Leisure in the second period is valued:
                                n
                                X
                       U=              πi u (c0 , c1i , ni ) ≡ E [u (c0 , c1i , ni )] .
                                 i=1

Specifically, the utility function is assumed to have the form
                                                         n
                                                         X
                             U = u (c0 ) + β                   πi [u (c1i ) + v (ni )] ,
                                                         i=1

where v 0 (ni ) < 0.

Market structure: incomplete markets
We will assume that there is a “risk free” asset denoted by a, and priced q, such that
every unit of a purchased in period 0 pays 1 unit in period 1, whatever the state of the
world. The consumer faces the following budget restriction in the first period:

                                                       c0 + aq = I.

At each realization of the random state of the world, his budget is given by

                                     c1i = a + wi ni              i = 1, ..., n.

The consumer’s problem is therefore
                                                                n
                                                                X
                              max                u (c0 ) + β          πi [u (c1i ) + v (ni )]
                       c0 , a, {c1i , n1i }n
                                           i=1
                                                                i=1


                                 s.t. c0 + aq = I
                                      c1i = a + wi ni , i = 1, ..., n.
   The first-order conditions are
                                                                      n
                                                                      X
                                                   0
                                       c0 : u (c0 ) = λ =                    λi R,
                                                                       i=1

where R ≡ 1q ,
                                            c1i : βπi u0 (c1i ) = λi
                                       n1i : −βπi v 0 (n1i ) = λi wi
                                         ⇒ −u0 (c1i ) wi = v 0 (n1i )

                                                           73
                                                 n
                                                 X
                               u0 (c0 ) = β            πi u0 (c1i ) R
                                                 i=1
                                        ≡ βE [u0 (c1i ) R] .

    The interpretation of the last expression is both straightforward and intuitive: on the
margin, the consumer’s marginal utility from consumption at period 0 is equated to the
discounted expected marginal utility from consuming R units in period 1.
                                                                        1−σ
Example 6.7 Let u(c) belong to the CES class; that is u(c) = c 1−σ−1 . This is a common
assumption in the literature. Recall that σ is the coefficient of relative risk aversion
(the higher σ, the less variability in consumption across states the consumer is willing
to suffer) and its inverse is the elasticity of intertemporal substitution (the higher σ, the
less willing the consumer is to experience the fluctuations of consumption over time). In
particular, let σ = 1, then u(c) = log(c). Assume also that v(n) = log(1 − n). Replacing
in the first-order conditions, these assumptions yield

                                      c1i = wi (1 − ni )

and using the budget constraint at i, we get
                                                 a + wi
                                       c1i =            .
                                                   2
Therefore,
                                           Xn
                                    q               2
                                        =β     πi        .
                                 I − aq    i=1
                                                  a + wi
   From this equation we get a unique solution, even if not explicit, for the amount of
savings given the price q. Finally, notice that we do not have complete insurance in this
model (why?).

Market structure: complete markets
We will now modify the market structure in the previous example. Instead of a risk free
asset yielding the same payout in each state, we will allow for “Arrow securities” (state-
contingent claims): n assets are traded in period 0, and each unit of asset i purchased
pays off 1 unit if the realized state is i, and 0 otherwise. The new budget constraint in
period 0 is
                                            Xn
                                      c0 +     qi ai = I.
                                           i=1

In the second period, if the realized state is i then the consumer’s budget constraint is:

                                      c1i = ai + ni wi .

   Notice that a risk free asset can be constructed by purchasing one unit of each ai .
Assume that the total price paid for such a portfolio is the same as before, i.e.
                                               n
                                               X
                                         q=            qi .
                                                 i=1


                                               74
    The question is whether the consumer will be better or worse off with this market
structure than before. Intuitively, we can see that the structure of wealth transfer across
periods that was available before (namely, the risk free asset) is also available now at
the same cost. Therefore, the agent could not be worse off. Moreover, the market
structure now allows the wealth transfer across periods to be state-specific: not only can
the consumer reallocate his income between periods 0 and 1, but also move his wealth
across states of the world. Conceptually, this added ability to move income across states
will lead to a welfare improvement if the wi ’s are nontrivially random, and if preferences
show risk aversion (i.e. if the utility index u (·) is strictly concave).
    Solving for ai in the period-1 budget constraints and replacing in the period-0 con-
straint, we get
                                     Xn               Xn
                               c0 +      qi c1i = I +     qi wi ni .
                                   i=1                 i=1

We can interpret this expression in the following way: qi is the price, in terms of c0 , of
consumption goods in period 1 if the realized state is i; qi wi is the remuneration to labor
if the realized state is i, measured in term of c0 (remember that budget consolidation only
makes sense if all expenditures and income are measured in the same unit of account (in
this case it is a monetary unit), where the price of c0 has been normalized to 1, and qi is
the resulting level of relative prices).
    Notice that we have thus reduced the n + 1 constraints to 1, whereas in the previous
problem we could only eliminate one and reduce them to n. This budget consolidation
is a consequence of the free reallocation of wealth across states.
    The first-order conditions are

                                      c0 : u0 (c0 ) = λ

                                  c1i : βπi u0 (c1i ) = qi λ
                                n1i : βπi v 0 (ni ) = −qi wi λ
                                 ⇒ −u0 (c1i ) wi = v 0 (n1i )
                                          βπi 0
                             u0 (c0 ) =       u (c1i ) , i = 1, ...n.
                                           qi
    The first condition (intra-state consumption-leisure choice) is the same as with in-
complete markets. The second condition reflects the added flexibility in allocation of
consumption: the agent now not only makes consumption-saving decision in period 0,
but also chooses consumption pattern across states of the world.
    Under this equilibrium allocation the marginal rates of substitution between consump-
tion in period 0 and consumption in period 1, for any realization of the state of the world,
is given by
                                    M RS (c0 , c1i ) = qi ,
and the marginal rates of substitution across states are
                                                           qi
                                   M RS (c1i , c1j ) =        .
                                                           qj

                                                75
Example 6.8 Using the utility function from the previous example, the first-order con-
ditions (together with consolidated budget constraint) can be rewritten as
                                                  Ã        n
                                                                          !
                                          1                X
                                  c0 =               I+          qi w i
                                       1 + 2β              i=1

                                                         πi
                                             c1i = βc0
                                                         qi
                                                         c1i
                                            ni = 1 −         .
                                                         wi
    The second condition says that consumption in each period is proportional to con-
sumption in c0 . This proportionality is a function of the cost of insurance: the higher qi
in relation to πi , the lower the wealth transfer into state i.


6.2.1     Stochastic neoclassical growth model
Notation
We introduce uncertainty into the neoclassical growth model through a stochastic shock
affecting factor productivity. A very usual assumption is that of a neutral shock, affecting
total factor productivity (TFP). Under certain assumptions (for example, Cobb-Douglas
y = AK α n1−α production technology), a productivity shock is always neutral, even if it
is modelled as affecting a specific component (capital K, labor n, technology A).
    Specifically, a neoclassical (constant returns to scale) aggregate production function
subject to a TFP shock has the form

                                       Ft (kt , 1) = zt f (kt ) ,

where z is a stochastic process, and the realizations zt are drawn from a set Z: zt ∈ Z,
∀t. Let Z t denote a t-times Cartesian product of Z. We will assume throughout that
Z is a countable set (a generalization of this assumption only requires to generalize the
summations into integration - however this brings in additional technical complexities
which are beyond the scope of this course).
   Let z t denote a history of realizations: a t-component vector keeping track of the
previous values taken by the zj for all periods j from 0 to t:

                                      z t = (zt , zt−1 , ..., z0 ) .

Notice that z 0 = z0 , and we can write z t = (zt , z t−1 ).
    Let π (z t ) denote the probability of occurrence of the event (zt , zt−1 , ..., z0 ). Under
this notation, a first order Markov process has
                                 £¡          ¢¯ ¤
                             π     zt+1 , z t ¯z t = π [(zt+1 , zt ) |zt ]

(care must be taken of the objects to which probability is assigned).

                                                   76
Sequential formulation
The planning problem in sequential form in this economy requires to maximize the func-
tion                                                "∞             #
                   X∞ X                              X
                                 ¡   ¢ £  ¡   ¢¤
                            β t π z t u ct z t ≡ E      β t u [ct ] .
                        t=0 z t ∈Z t                                       t=0

Notice that as t increases, the dimension of the space of events Z t increases. The choice
variables in this problem are the consumption and investment amounts at each date and
for each possible realization of the sequence of shocks as of that date. The consumer has
to choose a stochastic process for ct and another one for kt+1 :
                                         ¡ ¢
                                       ct z t ∀z t , ∀t
                                            ¡ ¢
                                       kt+1 z t ∀z t , ∀t.
Notice that now there is only one kind of asset (kt+1 ) available at each date.
   Let (t, z t ) denote a realization of the sequence of shocks z t as of date t. The bud-
get constraint in this problem requires that the consumer chooses a consumption and
investment amount that is feasible at each (t, z t ):
                     ¡ ¢         ¡ ¢        £ ¡      ¢¤            ¡    ¢
                   ct z t + kt+1 z t ≤ zt f kt z t−1 + (1 − δ) kt z t−1 .
You may observe that this restriction is consistent with the fact that the agent’s infor-
mation at the moment of choosing is z t .
    Assuming that the utility index u (·) is strictly increasing, we may as well write the
restriction in terms of equality. Then the consumer solves
                                                     ∞ X
                                                     X                   ¡ ¢ £ ¡ ¢¤
                                t
                                  max t ∞                           β t π z t u ct z t              (6.1)
                           {ct (z ), kt+1 (z )}t=0
                                                     t=0 z t ∈Z t

            s.t. ct (z t ) + kt+1 (z t ) = zt f [kt (z t−1 )] + (1 − δ) kt (z t−1 ) , ∀ (t, z t )
                 k0 given.
Substituting the expression for ct (z t ) from budget constraint, the first-order condition
with respect to kt+1 (z t ) is
                 ¡ ¢ £ ¡ ¢¤           X         ¡         ¢ £     ¡          ¢¤
             −π z t u0 ct z t +              βπ zt+1 , z t u0 ct+1 zt+1 , z t ×
                                           z t+1 ∈Z t+1
                                       £   £    ¡ ¢¤        ¤
                                 × zt+1 f 0 kt+1 z t + 1 − δ = 0.
                                                     π (zt+1 , z t )
Alternatively, if we denote π [(zt+1 , z t ) |z t ] ≡ π(zt ) , then we can write
                  £ ¡ ¢¤       X              £¡         ¢¯ ¤ £      ¡      ¢¤
               u0 c t z t =            βπ zt+1 , z t ¯z t u0 ct+1 zt+1 , z t ×
                                 z t+1 ∈Z t+1
                                    £        £     ¡ ¢¤       ¤
                                   × zt+1 f 0 kt+1 z t + 1 − δ ,                                    (6.2)
                                       £ £       ¡        ¢¤    ¤
                                  ≡ Ezt u0 ct+1 zt+1 , z t Rt+1 ,
where Rt+1 ≡ zt+1 f 0 [kt+1 (z t )] + 1 − δ is the marginal return on capital realized for each
zt+1 .
    (6.2) is a nonlinear, stochastic difference equation. In general, we will not be able to
solve it analytically, so numerical methods or linearization techniques will be necessary.

                                                           77
Recursive formulation
The planner’s problem in recursive version is
                     (                                                                       )
                                                             X
      V (k, z) = max
                  0
                     u [zf (k) − k 0 + (1 − δ) k] + β                 π (z 0 |z ) V (k 0 , z 0 ) ,   (6.3)
                   k
                                                             z 0 ∈Z

where we have used a first order Markov assumption on the process {zt }∞
                                                                       t=0 . The solution
to this problem involves the policy rule

                                        k 0 = g (k, z) .

If we additionally assume that Z is not only countable but finite, i.e.

                                     Z = {z1 , ..., zn } ,

then the problem can also be written as
                          (                                             n
                                                                                         )
                                                                        X
              Vi (k) = max
                        0
                           u [zi f (k) − k 0 + (1 − δ) k] + β                 πij Vj (k 0 ) ,
                         k
                                                                        j=1

where πij denotes the probability of moving from state i into state j, i.e.

                                πij ≡ π [zt+1 = zj |zt = zi ] .

Stationary stochastic process for (k,z)
Let us suppose that we have g(k, z) (we will show later how to obtain it by linearization).
What we are interested is what will happen in the long run. We are looking for what
is called stationary process for (k, z), i.e. probability distribution over values of (k, z),
which is preserved at t + 1 if applied at time t. It is analogous to the stationary (or
invariant) distribution of a Markov process.

Example 6.9 Let us have a look at a simplified stochastic version, where the shock vari-
able z takes on only two values:
                                   z ∈ {zl , zh } .
An example of this kind of process is graphically represented in Figure 6.1.
    Following the set-up, we get two sets of possible values of capital, which are of signifi-
cance for stationary stochastic distribution of (k, z). The first one is the transient set,
which denotes a set of values of capital, which cannot occur in the long run. It is depicted
in Figure 6.1. The probability of leaving the transient set is equal to the probability of
capital reaching a value higher or equal to A, which is possible only with a high shock.
This probability is non-zero and the capital will therefore get beyond A at least once in
the long run. Thereafter, the capital will be in the ergodic set, which is a set, that
the capital will never leave once it is there. Clearly, the interval between A and B is an
ergodic set since there is no value of capital from this interval and a shock which would
cause the capital to take a value outside of this interval in the next period. Also, there is
a transient set to the right of B.

                                              78
                      k’
                                                                                  o
                                                                             45




                                                                        high shock
                                                                        capital line




                                                                        low shock
                                                                        capital line




                                                                                        k
                           transient set   A     ergodic set        B   transient set


             Figure 6.1: An example of (k,z) stochastic process when z ∈ {zl , zh }

    Let P (k, z) denote the joint density, which is preserved over time. As the stochastic
process has only two possible states, it can be represented by the density function P (k, z) =
(Ph (k), Pl (k)). From the above discussion, it is clear to see that the density will be non-
zero only for those values of capital that are in the ergodic set. The following are the
required properties of P (k, z):
       R
  1.       (Ph (k) + Pl (k))dk = 1.
     R
  2. R Ph (k)dk = πh
       Pl (k)dk = πl ,

     where πl and πh are invariant probabilities of the low and high states.
                               R
  3. P rob [k ≤ k̄, z = zh ] = k≤k̄ Ph (k)dk =
        hR                   i      hR                i
     = k:gh (k)≤k̄ Ph (k)dk πhh + k:gl (k)≤k̄ Pl (k)dk πlh ,
                                 R
       P rob [k ≤ k̄, z = zl ] = k≤k̄ Pl (k)dk =
          hR                   i      hR                i
       = k:gh (k)≤k̄ Ph (k)dk πhl + k:gl (k)≤k̄ Pl (k)dk πll .


Solving the model: linearization of the Euler equation
Both the recursive and the sequential formulation lead to the Stochastic Euler Equation

                           u0 (ct ) = βEzt [u0 (ct+1 ) [zt+1 f 0 (kt+1 ) + 1 − δ]] .        (6.4)

   Our strategy to solve this equation will be to use a linear approximation of it around
the deterministic steady state. We will guess a linear policy function, and replace the
choice variables with it. Finally, we will solve for the coefficients of this linear guess.

                                                       79
   We rewrite (6.4) in terms of capital and using dynamic programming notation, we get

             u0 [zf (k) + (1 − δ) k − k 0 ] = βEz [u0 [z 0 f (k 0 ) + (1 − δ) k 0 − k 00 ] ×

                                       × [z 0 f 0 (k 0 ) + 1 − δ]] .                           (6.5)
   Denote

             LHS ≡ u0 [zf (k) + (1 − δ) k − k 0 ]
             RHS ≡ βEz [u0 [z 0 f (k 0 ) + (1 − δ) k 0 − k 00 ] [z 0 f 0 (k 0 ) + 1 − δ]] .

    Let k be the steady state associated with the realization {zt }∞t=0 that has zt = z for
all but a finite number of periods t. That is, z is the long run value of z.

Example 6.10 Suppose that {zt }∞
                               t=0 follows an AR(1) process

                                  zt+1 = ρzt + (1 − ρ) z + εt+1 ,

where |ρ| < 1. If E [εt ] = 0, E [ε2t ] = σ 2 < ∞, and E [εt εt+j ] = 0 ∀j ≥ 1, then by the
Law of Large Numbers we get that

                                             plim zt = z.

   Having the long run value of zt , the associated steady state level of capital k is solved
from the usual deterministic Euler equation:
                                               £              ¤
                           u0 (c) = βu0 (c) zf (k) + 1 − δ
                               1
                           ⇒        = zf (k) + 1 − δ
                               β
                                            µ −1            ¶
                                         −1   β − (1 − δ)
                           ⇒ k = f
                                                    z
                            ⇒ c = zf (k) − δk.

   Let
                                            b
                                            k ≡ k−k
                                            zb ≡ z − z

denote the variables expressed as deviations from their steady state values. Using this
notation we write down a first order Taylor expansion of (6.5) around the long run values
as

                                            k + cL b
                    LHS ≈ LLHS ≡ aL zb + bL b      k 0 + dL
                                      h                       i
                    RHS ≈ LRHS ≡ Ez aR zb0 + bR bk 0 + cR b
                                                          k 00 + dR ,

where the coefficients aL , aR , bL , etc. are the derivatives of the expressions LHS and
RHS with respect to the corresponding variables, evaluated at the steady state (for
example, aL = u00 (c)f (k)). In addition, LLHS = LRHS needs to hold for zb = zb0 = b  k=
b0  b00
k = k = 0 (the steady state), and therefore dL = dR .

                                                   80
    Next, we introduce our linear policy function guess in terms of deviations with respect
to the steady state as
                                      b
                                      k 0 = gk b
                                               k + gz zb.
The coefficients gk , gz are unknown. Substituting this guess into the linearized stochastic
Euler equation, we get

              LLHS = aL zb + bL b
                                k + cL g k b
                                           k + cL gz zb + dL
                       h                                                   i
                             0         b                     b0          0
              LRHS = Ez aR zb + bR gk k + bR gz zb + cR gk k + cR gz zb + dR
                       h
                   = Ez aR zb0 + bR gk b
                                       k + bR gz zb + cR gk2 b
                                                             k + cR gk gz zb+
                            +cR gz zb0 ] + dR
                                 z 0 ] + bR gk b
                        = aR Ez [b             k + bR gz zb + cR gk2 b
                                                                     k + cR gk gz zb +
                                        0
                          +cR gz Ez [b z ] + dR

and our equation is
                                        LLHS = LRHS.                                        (6.6)
Notice that dL , dR will simplify away. Using the assumed form of the stochastic process
{zt }∞
     t=0 , we can replace Ez [b   z 0 ] by ρb
                                            z.
    The system (6.6) needs to hold for all values of b       k and zb. Given the values of the
coefficients ai , bi , ci (for i = L, R), the task is to find the values of gk , gz that solve the
system. Rearranging, (6.6) can be written as

                                              z0] B + b
                                    zbA + Ez [b       kC = 0,

where

                              A = aL + cL gz − bR gz − cR gk gz
                              B = −aR − cR gz
                              C = bL + cL gk − bR gk − cR gk2 .

   As C is a second order polynomial in gk , the solution will involve two roots. We know
that the value smaller than one in absolute value will be the stable solution to the system.

Example 6.11 Let {zt }∞
                      t=0 follow an AR(1) process, as in the previous example:

                                 zt+1 = ρzt + (1 − ρ) z + εt+1 .

Then,

                                 zb0 ≡ z 0 − z
                                     = ρz + (1 − ρ) z + ε0 − z
                                     = ρ (z − z) + ε0 .

It follows that
                                               z 0 ] = ρb
                                           Ez [b        z,

                                                 81
and
                      z + bR gk b
           LRHS = aR ρb         k + bR gz zb + cR gk2 b
                                                      k + cR gk gz zb + cR gz ρb
                                                                               z + dR
   We can rearrange (6.6) to
                                        zbA + b
                                              kB = 0,
where
                    A = aL + cL gz − aR ρ − bR gz − cR gk gz − cR gz ρ
                    B = bL + cL gk − bR gk − cR gk2 .
The solution to (6.6) requires
                                          A = 0
                                          B = 0.
Therefore, the procedure is to solve first for gk from B (picking the value less than one)
and then use this value to solve for gz from A.

Simulation and impulse response
Once we have solved for the coefficients gk , gz , we can simulate the model by drawing
           zt }Tt=0 from the assumed distribution, and an arbitrary b
values of {b                                                        k0 . This will yield a
stochastic path for capital from the policy rule
                                     b
                                     kt+1 = gk b
                                               kt + gz zbt .
   We may also be interested in observing the effect on the capital accumulation path in
an economy if there is a one-time productivity shock zb, which is the essence of impulse
response. The usual procedure for this analysis is to set b     k0 = 0 (that is, we begin
from the steady state capital stock associated with the long run value z) and zb0 to some
arbitrary number. The values of zbt for t > 0 are then derived by eliminating the stochastic
component in the {bzt }Tt=0 process.
   For example, let {zt }∞t=0 be an AR(1) process as in the previous examples, then:

                                       zbt+1 = ρb
                                                zt + εt .
Let zb0 = ∆, and set εt = 0 for all t. Using the policy function, we obtain the following
path for capital:
                     b
                     k0 = 0
                     b
                     k1 = gz ∆
                     b
                     k2 = gk gz ∆ + gz ρ∆ = (gk gz + gz ρ) ∆
                          ¡                       ¢
                     b
                     k3 = g 2 gz + gk gz ρ + gz ρ2 ∆
                                 k
                      ..    .
                       . = ..
                           ¡                                    ¢
                     b
                     kt = gkt−1 + gkt−2 ρ + ... + gk ρt−2 + ρt−1 gz ∆
and
                             |gk | < 1 & |ρ| < 1 ⇒ lim b
                                                       kt = 0.
                                                       t→∞
The capital stock converges back to its steady state value if |gk | < 1 and |ρ| < 1.

                                               82
                  k




                                                                               t
                            5           10           15         20        25




Figure 6.2: An example of an impulse response plot, using gz = 0.8, gk = 0.9, ρ = −0.75

References and comments on the linear-quadratic setup
You can find most of the material we have discussed on the neoclassical growth model
in King, Plosser and Rebelo (1988). Hansen and Sargent (1988) discuss the model in a
linear-quadratic environment, which assumes that the production technology is linear in
z and k, and u is quadratic:

                                y(z, k) = ay z + by k
                                   u(c) = −au (c − cu )2 + bu .

    This set-up leads to a linear Euler equation, and therefore the linear policy function
guess is exact. In addition, the linear-quadratic model has a property called “certainty
equivalence”, which means that gk and gz do not depend on second or higher order
moments of the shock ε and it is possible to solve the problem, at all t, by replacing zt+k
with Et [zt+k ] and thus transform it into a deterministic problem.
    This approach provides an alternative to linearizing the stochastic Euler equation. We
can solve the problem by replacing the return function with a quadratic approximation,
and the (technological) constraint by a linear function. Then we solve the resulting
linear-quadratic problem
                           ∞
                           X
                                  β t u [F (kt ) + (1 − δ) kt − kt+1 ].
                                      |              {z             }
                            t=0
                                              Return function

The approximation of the return function can be done by taking a second order Tay-
lor series expansion around the steady state. This will yield the same results as the
linearization.
    Finally, the following shortfalls of the linear-quadratic setup must be kept in mind:

                                                83
- The quadratic return function leads to satiation: there will be a consumption level with
     zero marginal utility.
- Non-negativity constraints may cause problems. In practice, the method requires such
     constraints not to bind. Otherwise, the Euler equation will involve Lagrange mul-
     tipliers, for a significant increase in the complexity of the solution.
- A linear production function implies a constant-marginal-product technology, which
      may not be consistent with economic intuition.

Recursive formulation issue
There is one more issue to discuss in this section and it involves the choice of state variable
in recursive formulation. Let us consider the following problem of the consumer:
                                       ∞ X
                                       X
                               max
                                t ∞
                                                β t π(z t )u(ct (z t ))
                                     {ct (z )}t=0
                                                    t=0 z t ∈Z t

  s.t. z t = (zl , z t−1 ) : ct (z t ) + qh,t (z t )ah,t+1 (z t ) + ql,t (z t )al,t+1 (z t ) = ωt (z t ) + al,t (z t−1 )
       z t = (zh , z t−1 ) : ct (z t ) + qh,t (z t )ah,t+1 (z t ) + ql,t (z t )al,t+1 (z t ) = ωt (z t ) + ah,t (z t−1 ),
       both constraints ∀t, ∀z t and no-Ponzi-game condition,
where zt follows a first order Markov process and even more specifically, we only have
two states, i.e. zt ∈ {zh , zl }. As can be seen, we have two budget constraints, depending
on the state at time t.
    Let us now consider the recursive formulation of the above-given problem. To simplify
matters, suppose that
                                           zt = zl : ωt (z t ) = ωl
                                           zt = zh : ωt (z t ) = ωh .
   What are our state variables going to be? Clearly, zt has to be one of our state
variables. The other will be wealth w (differentiate from the endowment ω), which we
can define as a sum of the endowment and the income from asset holdings:
                                   zt = zl : wt (z t ) = ωl + al,t (z t−1 )
                                   zt = zh : wt (z t ) = ωh + ah,t (z t−1 ).
The recursive formulation is now
                                         V (w, zi ) ≡ Vi (w) =
                                                                                           
                       
                                                                                              
                                                                                               
                                   0       0                        0                     0 
            = max       u(w − q   a
                                ih h − q  a
                                        il l ) + β  π   V
                                                       ih h (ω   +  a  ) + π   V  (ω   +  a )   ,
              a0l ,a0h 
                                                            | h {z h}       il l
                                                                                   | l {z }l  
                                                                  0     wh              0     wl

where the policy rules are now
                                            a0h = gih (w)
                                            a0l = gil (w), i = l, h.
   Could we use a as a state variable instead of w? Yes, we could, but that would actually
imply two state variables - ah and al . Since the state variable is to be a variable which
expresses the relevant information as succinctly as possible, it is w that we should use.

                                                             84
6.3      Competitive equilibrium under uncertainty

The welfare properties of competitive equilibrium are affected by the introduction of un-
certainty through the market structure. The relevant distinction is whether such structure
involves complete or incomplete markets. Intuitively, a complete markets structure allows
trading in each single commodity. Recall our previous discussion of the neoclassical
growth model under uncertainty where commodities are defined as consumption goods
indexed by time and state of the world. For example, if z1t and z2t denote two different
realizations of the random sequence {zj }tj=0 , then a unit of the physical good c consumed
in period t if the state of the world is z1t (denoted by ct (z1t )) is a commodity different
from ct (z2t ). A complete markets structure will allow contracts between parties to specify
the delivery of physical good c in different amounts at (t, z1t ) than at (t, z2t ), and for a
different price.
    In an incomplete markets structure, such a contract might be impossible to enforce
and the parties might be unable to sign a “legal” contract that makes the delivery amount
contingent on the realization of the random shock. A usual incomplete markets structure
is one where agents may only agree to the delivery of goods on a date basis, regardless
of the shock. In short, a contract specifying ct (z1t ) 6= ct (z2t ) is not enforceable in such an
economy.
    You may notice that the structure of markets is an assumption of an institutional
nature and nothing should prevent, in theory, the market structure to be complete. How-
ever, markets are incomplete in the real world and this seems to play a key role in the
economy (for example in the distribution of wealth, in the business cycle, perhaps even
in the equity premium puzzle that we will discuss in due time).
    Before embarking on the study of the subject, it is worth mentioning that the structure
of markets need not be explicit. For example, the accumulation of capital may supply
the role of transferring wealth across states of the world (not just across time). But
allowing for the transfer of wealth across states is one of the functions specific to markets;
therefore, if these are incomplete then capital accumulation can (to some extent) perform
this missing function. An extreme example is the deterministic model, in which there is
only one state of the world and only transfers of wealth across time are relevant. The
possibility of accumulating capital is enough to ensure that markets are complete and
allowing agents also to engage in trade of dated commodities is redundant. Another
example shows up in real business cycle models, which we shall analyze later on in
this course. A usual result in the real business cycle literature (consistent with actual
economic data) is that agents choose to accumulate more capital whenever there is a
“good” realization of the productivity shock. An intuitive interpretation is that savings
play the role of a “buffer” used to smooth out the consumption path, which is a function
that markets could perform.
    Hence, you may correctly suspect that whenever we talk about market completeness
or incompleteness, we are in fact referring not to the actual, explicit contracts that agents
are allowed to sign, but to the degree to which they are able to transfer wealth across
states of the world. This ability will depend on the institutional framework assumed for
the economy.

                                               85
6.3.1       The neoclassical growth model with complete markets
We will begin by analyzing the neoclassical growth model in an uncertain environment.
We assume that, given a stochastic process {zt }∞
                                                t=0 , there is a market for each consumption
               t
commodity ct (z ), as well as for capital and labor services at each date and state of the
world. There are two alternative setups: Arrow-Debreu date-0 trading and sequential
trading.

Arrow-Debreu date-0 trading
The Arrow-Debreu date-0 competitive equilibrium is

                              {ct (z t ), kt+1 (z t ), lt (z t ), pt (z t ), rt (z t ), wt (z t )}∞
                                                                                                  t=0


such that

  1. Consumer’s problem is to find {ct (z t ), kt+1 (z t ), lt (z t )}∞
                                                                      t=0 which solve

                                                               ∞ X
                                                               X
                                       max                                    β t π(z t )u(ct (z t ), 1 − lt (z t ))
                        {ct (z t ),kt+1 (z t ),lt (z t )}∞
                                                         t=0
                                                               t=0 z t ∈Z t

               ∞ X
               X                                     ∞ X
                                ¡ t¢ £ ¡ t¢   ¡ t ¢¤ X     ¡ ¢ £¡ ¡ t ¢      ¢
        s.t.                  pt z ct z + kt+1 z ≤       pt z t  rt z + 1 − δ ×
               t=0 z t ∈Z t                                                       t=0 z t ∈Z t
                                                   ¡     ¢    ¡ ¢ ¡ ¢¤
                                               × kt z t−1 + wt z t lt z t .

  2. First-order conditions from firm’s problem are

                                             rt (z t ) = zt Fk (kt (z t−1 ), lt (z t ))
                                             wt (z t ) = zt Fl (kt (z t−1 ), lt (z t )).



  3. Market clearing is

                ct (z t ) + kt+1 (z t ) = (1 − δ)kt (z t−1 ) + z t F (kt (z t−1 ), lt (z t )), ∀t, ∀z t .

You should be able to show that the Euler equation in this problem is identical to the
Euler equation in the planner’s problem.
   In this context, it is of interest to mention the so-called no-arbitrage condition, which
can be derived from the above-given setup. First, we step inside the budget constraint
and retrieve those terms which relate to kt+1 (z t ):

   • From the LHS: ...pt (z t )kt+1 (z t )...
                                 P                      t                 t                    t
   • From the RHS: ...               zt+1 pt+1 (zt+1 , z ) [rt+1 (zt+1 , z ) + (1 − δ)] kt+1 (z )...


                                                                   86
The no-arbitrage condition is the equality of these two expressions and it says that in
equilibrium, the price of a unit of capital must equal the sum of future values of a unit
of capital summed across all possible states. Formally, it is
                        "                                                               #
                                     X                   £                            ¤
             kt+1 (z t ) pt (z t ) −   pt+1 (zt+1 , z t ) rt+1 (zt+1 , z t ) + (1 − δ) = 0.
                              zt+1

What would happen if the no-arbitrage condition did not hold? Assuming kt+1 (z t ) ≥ 0,
the term in the brackets would have to be non-zero. If this term were greater then zero,
we could make infinite “profit” by setting kt+1 (z t ) = −∞. Similarly, if the term were
less than zero, setting kt+1 (z t ) = ∞ would do the job. As neither of these can happen in
equilibrium, the term in the brackets must equal zero, which means that the no-arbitrage
condition must hold in equilibrium.

Sequential trade
In order to allow wealth transfers across dates, agents must be able to borrow and lend.
It suffices to have one-period assets, even with an infinite time horizon. We will assume
the existence of these one-period assets, and, for simplicity, that Z is a finite set with n
possible shock values, as is illustrated in Figure 6.3.




                                                     zt+1 = z1  Z

                                                     zt+1 = z2  Z

                                                     zt+1 = z3  Z

                       t                                .
                                                        .
                                                        .

                                                     zt+1 = zn  Z




         Figure 6.3: The shock z can take n possible values, which belong to Z

    Assume that there are q assets, with asset j paying off rij consumption units in t + 1
if the realized state is zi . The following matrix shows the payoff of each asset for every
realization of zt+1 :
                                    a1 a2 · · · aq 
                               z1      r11 r12 · · · r1q
                               z2  r21 r22 · · · r2q 
                                   
                                                           
                               z3     r
                                    31 32 r    · · · r    
                                                        3q  ≡ R.
                                ..  ..      .. . .     . 
                                 .  .        .     . .. 
                               zn     rn1 rn2 · · · rnq

                                            87
Then the portfolio a = (a1 , a2 , ..., aq ) pays p (in terms of consumption goods at t + 1),
where
                                         p = R · a ,
                                       |{z} |{z} |{z}
                                       n×1      n×q   q×1

                           P
                           q
and each component pi =          rij aj is the amount of consumption goods obtained in state
                           j=1
i from holding portfolio a.
    What restrictions must we impose on R so that any arbitrary payoff combination
p ∈ <n can be generated (by the appropriate portfolio choice)? Based on matrix algebra,
the answer is that we must have
  1. q ≥ n.
  2. rank(R) = n.
If R satisfies condition number (2) (which presupposes the validity of the first one), then
the market structure is complete. The whole space <n is spanned by R and we say that
there is spanning .
    It is useful to mention Arrow securities which were mentioned before. Arrow security
i pays off 1 unit if the realized state is i, and 0 otherwise. If there are q < n different
Arrow securities, then the payoff matrix is
                                           a    a2 · · · aq
                                          1                 
                                    z1     1    0 ··· 0
                                    z2   0    1 ··· 0     
                                    z3    0    0 ··· 0 
                                     ..  ..   .. . .    .. 
                                                              .
                                      .  .      .      .  . 
                                                            
                                    zq  0      0 ··· 1 
                                      ..   .    .. . .    . 
                                       .  ..     .     . .. 
                                    zn     0    0 ··· 0

6.3.2     General equilibrium under uncertainty: the case of two
          agent types in a two-period setting
First, we compare the outcome of the neoclassical growth model with uncertainty and
one representative agent with the two different market structures:
   • Only (sequential) trade in capital is allowed. There is no spanning in this setup as
     there is only one asset for n states.
   • Spanning (either with Arrow-Debreu date-0, or sequential trading).
    Will equilibria look different with these structures? The answer is no, and the reason
is that there is a single agent. Clearly, every loan needs a borrower and a lender, which
means that the total borrowing and lending in such an economy will be zero. This
translates into the fact that different asset structures do not yield different equilibria.
    Let us turn to the case where the economy is populated by more than one agent to
analyze the validity of such a result. We will compare the equilibrium allocation of this
economy under the market structures (1) and (2) mentioned above.

                                                88
Assumptions
  • Random shock: We assume there are n states of the world corresponding to n
    different values of the shock to technology to be described as

                                     z ∈ {z1 , z2 , ..., zn }

                                      πj = Pr [z = zj ] .
    Let z denote the expected value of z:
                                              n
                                              X
                                        z=           πj z j .
                                              j=1



  • Tastes: Agents derive utility from consumption only (not from leisure). Preferences
    satisfy the axioms of expected utility and are represented by the utility index u ().
    Specifically, we assume that
                                           n
                                           X
                                  ¡ ¢
                           Ui = ui ci0 + β   πj ui (cij )           i = 1, 2.
                                             j=1


    where u1 (x) = x, and u2 (x) is strictly concave (u02 > 0, u002 < 0). We also assume
    that lim u02 (x) = ∞. In this fashion, agents’ preferences exhibit different attitudes
         x→0
    towards risk: Agent 1 is risk neutral and Agent 2 is risk averse.

  • Endowments: Each agent is endowed with ω0 consumption goods in period 0, and
    with one unit of labor in period 1 (which will be supplied inelastically since leisure
    is not valued).

  • Technology: Consumption goods are produced in period 1 with a constant-returns-
    to-scale technology represented by the Cobb Douglass production function
                                                     ³ n ´1−α
                                                 α
                                     yj = zj K                  .
                                                      2
    where K, n denote the aggregate supply of capital and labor services in period 1,
    respectively. We know that n = 2, so

                                         yj = zj K α .

    Therefore, the remunerations to factors in period 1, if state j is realized, are given
    by

                                    rj = zj αK α−1
                                             (1 − α) α
                                    w j = zj        K .
                                                2

                                            89
Structure 1 - one asset
Capital is the only asset that is traded in this setup. With K denoting the aggregate
capital stock, ai denotes the capital stock held by agent i, and therefore the asset market
clearing requires that
                                        a1 + a2 = K.
The budget constraints for each agent is given by

                                  ci0 + ai = ω0
                                        cij = ai rj + wj .

   To solve this problem, we proceed to maximize each consumer’s utility subject to his
budget constraint.

Agent 1:

   The maximized utility function and the constraints are linear in this case. We therefore
use the arbitrage condition to express optimality:
                                "         n
                                                 #
                                         X
                                 −1 + β     πj rj ai = 0.
                                             j=1


For ai not to be infinite (which would violate the market clearing condition), that part
of the arbitrage condition which is in brackets must equal zero. Replacing for rj , we get
then                                      n
                                         X
                                  1=β       πj αzj K α−1                             (6.7)
                                         j=1
                                                         n
                                                         X
                                                   α−1
                                ⇒ 1 = αβK                      πj zj .
                                                         j=1

Therefore, the optimal choice of K from Agent 1’s preferences is given by
                                                          1
                                    K ∗ = (zαβ) 1−α .

   Notice that only the average value of the random shock matters for Agent 1, consis-
tently with this agent being risk neutral.

Agent 2:

   The Euler equation for Agent 2 is
                                             n
                                             X           ¡            ¢
                        u02 (ω0 − a2 ) = β         πj u02 a2 rj∗ + wj∗ rj∗ .          (6.8)
                                             j=1

Given K ∗ from Agent 1’s problem, we have the values of rj∗ and wj∗ for each realization
j. Therefore, Agent 2’s Euler equation (6.8) is one equation in one unknown a2 . Since

                                               90
lim u02 (x) = ∞, there exists a unique solution. Let a∗2 be the solution to (6.8). Then the
x→0
values of the remaining choice variables are

                                          a∗1 = K ∗ − a∗2
                                          ci0 = ω0 − a∗i .

More importantly, Agent 2 will face a stochastic consumption prospect for period 1, which
is
                                     c2j = a∗2 rj∗ + wj∗ ,
where rj∗ and wj∗ are stochastic. This implies that Agent 1 has not provided full insurance
to Agent 2.

Structure 2 - Arrow securities
It is allowed to trade in n different Arrow securities in this setup. In this case, these
securities are (contingent) claims on the total remuneration to capital (you could think of
them as rights to collect future dividends in a company, according to the realized state of
the world). Notice that this implies spanning (i.e. markets are complete). Let aj denote
the Arrow security paying off one unit if the realized state is zj and zero otherwise. Let
qj denote the price of aj .
    In this economy, agents save by accumulating contingent claims (they save by buying
future dividends in a company). Total savings are thus given by
                                           n
                                           X
                                    S≡           qj (a1j + a2j ) .
                                           j=1


Investment is the accumulation of physical capital, K. Then clearing of the savings-
investment market requires that:
                                    n
                                    X
                                          qj (a1j + a2j ) = K.                        (6.9)
                                    j=1


    Constant returns to scale imply that the total remuneration to capital services in
state j will be given by rj K (by Euler Theorem). Therefore, the contingent claims that
get activated when this state is realized must exactly match this amount (each unit of
“dividends” that the company will pay out must have an owner, but the total claims can
not exceed the actual amount of dividends to be paid out).
    In other words, clearing of (all of) the Arrow security markets requires that

                              a1j + a2j = Krj          j = 1, ..., n.               (6.10)

If we multiply both sides of (6.10) by qj , for each j, and then sum up over j’s, we get
                             n
                             X                              n
                                                            X
                                    qj (a1j + a2j ) = K            qj r j .
                              j=1                            j=1


                                                  91
But, using (6.9) to replace total savings by total investment,
                                               n
                                               X
                                    K=K              qj rj .
                                               j=1

Therefore the equilibrium condition is that
                                      n
                                      X
                                             qj rj = 1.                             (6.11)
                                       j=1

    The equation (6.11) canP be interpreted as a no-arbitrage condition, in the following
way. The left hand side nj=1 qj rj is the total price (in terms of foregone consumption
units) of the marginal unit of a portfolio yielding the same (expected) marginal return
as physical capital investment. And the right hand side is the price (also in consumption
units) of a marginal unitPof capital investment.
                             n
    First, suppose that      j=1 qj rj > 1. An agent could in principle make unbounded
profits by selling an infinite amount of units of such a portfolio, and using the proceeds
from this sale to finance an unbounded physical capital investment. In fact, since no
agent would be willing to be on the buy side of such a deal, no trade would actually
occur. But there would be an infinite supply of such a portfolio, and an infinite demand
of physical capital units. In other words, asset markets  Pwould not be in equilibrium.
A similar reasoning would lead to the conclusion that nj=1 qj rj < 1 could not be an
equilibrium either.
    With the equilibrium conditions at hand, we are able to solve the model. With this
market structure, the budget constraint of each Agent i is
                                            n
                                            X
                                        i
                                       c0 +   qj aij = ω0
                                        j=1

                                      cij = aj + wj .
Using the first order conditions of Agent 1’s problem, the equilibrium prices are
                                        qj = βπj .
You should also check that
                                                       1
                                    K ∗ = (zαβ) 1−α ,
as in the previous problem. Therefore, Agent 1 is as well off with the current market
structure as in the previous setup.
    Agent 2’s problem yields the Euler equation
                                  ¡ ¢                    ¡ ¢
                               u02 c20 = λ = qj−1 βπj u02 c2j .
Replacing for the equilibrium prices derived from Agent 1’s problem, this simplifies to
                               ¡ ¢       ¡ ¢
                            u02 c20 = u02 c2j    j = 1, ..., n.
Therefore, with the new market structure, Agent 2 is able to obtain full insurance from
Agent 1. From the First Welfare Theorem (which requires completeness of markets)
we know that the allocation prevailing under market Structure 2 is a Pareto optimal
allocation. It is your task to determine whether the allocation resulting from Structure 1
was Pareto optimal as well or not.

                                              92
6.3.3      General equilibrium under uncertainty: multiple-period
           model with two agent types
How does the case of infinite number of periods differ from the two-period case? In
general, the conclusions are the same and the only difference is the additional complexity
added through extending the problem. We shortly summarize both structures. As before,
Agent 1 is risk neutral and Agent 2 is risk averse.

Structure 1 - one asset
Agent 1:

   Agent 1’s problem is
                                              ∞
                                            X X
                                      max                  β t π(z t )ct (z t )
                                            z t ∈Z t t=0

                    s.t. c1,t (z t ) + a1,t+1 (z t ) = rt (z t )a1,t (z t−1 ) + wt (z t ).
Firm’s problem yields (using Cobb-Douglas production function)

                              rt (z t ) = zt αktα−1 (z t−1 ) + (1 − δ)
                                             µ         ¶
                                    t          1−α
                              wt (z ) = zt               ktα (z t−1 ).
                                                  2
Market clearing condition is

                                a1,t+1 (z t ) + a2,t+1 (z t ) = kt+1 (z t ).

   First-order condition w.r.t. a1,t+1 (z t ) gives us
                                             X π(zt+1 , z t )
                                1 = β                                rt+1 (zt+1 , z t )
                                             zt+1
                                                        π(z t )
                            ⇒ 1 = βEzt+1 |zt (rt+1 ).

Using the formula for rt+1 from firm’s first-order conditions, we get
                            X               ¡                         ¢
                  1 = β        π(zt+1 |z t ) zt+1 αkt+1
                                                    α−1 t
                                                        (z ) + (1 − δ) =
                               zt+1
                                             X
                            α−1 t
                       = αβkt+1 (z )                π(zt+1 |z t )zt+1 +β(1 − δ)
                                             zt+1
                                             |             {z           }
                                                     E(zt+1 |z t )

                                                    ·                       ¸ α−1
                                                                               1

                                             t1/β − 1 + δ
                                ⇒ kt+1 (z ) =                                       .        (6.12)
                                              αE(zt+1 |z t )


Agent 2:


                                                        93
   Agent 2’s utility function is u(c2,t (z t )) and his first-order conditions yield
                                         £                                             ¤
            u0 (c2,t (z t )) = βEzt+1 |zt u0 (c2,t+1 (z t+1 ))(1 − δ + αzt+1 kt+1
                                                                              α−1 t
                                                                                  (z )) .
Using the above-given Euler equation and (6.12) together with Agent 2’s budget con-
straint, we can solve for c2,t (z t ) and a2,t+1 (z t ). Subsequently, using the market clearing
condition gives us the solution for c1,t (z t ).
    The conclusion is the same as in the two-period case: Agent 2 does not insure fully
and his consumption across states will vary.

Structure 2 - Arrow securities
Agent 1:

   The problem is very similar to the one in Structure 1, except for the budget constraint,
which is now                 n
                             X
                    1 t
                   ct (z ) +     qj (z t )a1j,t+1 (z t ) = a1i,t (z t−1 ) + wt (z t ).
                                    j=1

As we have more than one asset, the no-arbitrage condition has to hold. It can expressed
as                           n
                            X
                                 qj (z t )aj,t+1 (z t ) = kt+1 (z t )
                                      j=1
                                             £                       ¤
                             aj,t+1 (z t ) = 1 − δ + rt+1 (zj , z t ) kt+1 (z t )
                                         X n
                                                      £                        ¤
                              ⇒1=            qj (z t ) 1 − δ + rt+1 (zj , z t ) .
                                          j=1

Solving the first-order condition of Agent 1 w.r.t. a1j,t+1 (z t ) yields

                                            t    π(zj , z t )
                                   qj,t (z ) = β       t
                                                              = βπ(zj |z t ),                            (6.13)
                                                  π(z )
which is the formula for prices of the Arrow securities.

Agent 2:

   The first-order condition w.r.t. a2j,t+1 (z t ) yields
                0 = −β t π(z t )qj,t (z t )u0 (c2t (z t )) + β t+1 π(zj , z t )u0 (c2t+1 (zj , z t )).
Substituting (6.13) gives us
                                   π(zj , z t ) 0 2 t
               0 = −β t π(z t )β         t
                                               u (ct (z )) + β t+1 π(zj , z t )u0 (c2t+1 (zj , z t ))
                                    π(z )
                                     ⇒ u0 (c2t (z t )) = u0 (c2t+1 (zj , z t ))
                                          ⇒ c2t (z t ) = c2t+1 (zj , z t ).
   This result follows from the assumption that u0 (.) > 0 and u00 (.) < 0, and yields
the same conclusion as in the two-period case, i.e. Agent 2 insures completely and his
consumption does not vary across states.

                                                         94
6.3.4      Recursive formulation
The setup is the same as before: Agent 1 is risk neutral and Agent 2 is risk averse. We de-
note the agent type by superscript and the state of the world by subscript. The stochastic
process is a first order Markov process. Using the recursive formulation knowledge from
before, we use wealth (denoted by ω to differentiate it from wage, which is denoted by w)
as the state variable. More concretely, there are three state variables: individual wealth
(ω), the average wealth of risk neutral agents (ω 1 ), and the average wealth of risk averse
agents (ω 2 ). The risk averse consumer’s problem is then
                                                         X                                  X
             Vi1 (ω, ω 1 , ω 2 ) = max
                                   1 n
                                       {u1 (ω −                 qij (ω 1 , ω 2 )a1j ) + β       πij Vj1 [a1j +
                                     {aj }j=1
                                                           j                                j


                           1                                        2
  + wj (Gi (ω 1 , ω 2 )), Dij (ω 1 , ω 2 ) + wj (Gi (ω 1 , ω 2 )), Dij (ω 1 , ω 2 ) + wj (Gi (ω 1 , ω 2 ))]}, (6.14)

where
                                                a1j = d1ij (ω, ω 1 , ω 2 )
                               1
                              Dij (ω 1 , ω 2 ) = d1ij (ω 1 , ω 1 , ω 2 ), ∀ i, j, ω 1 , ω 2
                               2
                              Dij (ω 1 , ω 2 ) = d2ij (ω 2 , ω 1 , ω 2 ), ∀ i, j, ω 1 , ω 2
                                 X
                                                        1                  2
             Gi (ω 1 , ω 2 ) =        qij (ω 1 , ω 2 )(Dij (ω 1 , ω 2 ) + Dij (ω 1 , ω 2 )), ∀ i, ω 1 , ω 2 .
                                 j

   From the firm’s problem, we get the first-order conditions specifying the wage and
the interest rate as

                                         wj (k) = zj Fl (k, 1), ∀ j, k
                                         rj (k) = zj Fk (k, 1), ∀ j, k.

Also, the market clearing requires that

                     2
                     X
                            l
                           Dij (ω 1 , ω 2 ) = (1 − δ + rj (Gi (ω 1 , ω 2 )))Gi (ω 1 , ω 2 ).
                     l=1


The same holds for Agent 2, when we change the superscript in (6.14) from 1 to 2.
     The formulation is very similar to our previous formulation of recursive competitive
equilibrium, with some new unfamiliar notation showing up. Clearly, d1ij is the law of
motion for the asset holdings in state i of an asset paying off one unit of consumption
good in future state j. The aggregate law of motion for the asset holdings is denoted by
   1                                      2
Dij  for the risk neutral agents and Dij    for the risk averse agents. The average capital is
denoted by Gi .
                                                               l
     The following are the unknown functions: Vil (.), dlij , Dij (.), qij (.), Gi (.), wj (.), rj (.). It
is left as an exercise to identify the elements from the recursive formulation with elements
from the sequential formulation.

                                                           95
6.4     Appendix: basic concepts in stochastic processes
We will introduce the basic elements with which uncertain events are modelled. The
main mathematical notion underlying the concept of uncertainty is that of a probability
space.

Definition 6.12 A probability space is a mathematical object consisting of three ele-
ments: 1) a set Ω of possible outcomes ω; 2) a collection F of subsets of Ω that constitute
the “events” to which probability is assigned (a σ-algebra); and 3) a set function P that
assigns probability values to those events. A probability space is denoted by

                                        (Ω, F, P ) .

Definition 6.13 A σ-algebra (F) is a special kind of family of subsets of a space Ω that
satisfy three properties: 1) Ω ∈ F , 2) F is closed under complementation: E ∈ F ⇒
E c ∈ F, 3) F is closed under countable union: if {Ei }∞
                                                       i=1 is a sequence of sets such that
                    ∞
Ei ∈ F ∀i, then (∪i=1 Ei ) ∈ F.

Definition 6.14 A random variable is a function whose domain is the set of events Ω
and whose image is the real numbers (or a subset thereof ):

                                        x : Ω → <.

   For any real number α, define the set

                                  Eα = {ω : x (ω) < α} .

Definition 6.15 A function x is said to be measurable with respect to the σ-algebra F
(or F-measurable) if the following property is satisfied:

                                    ∀α ∈ < : Eα ∈ F .

    Conceptually, if x is F-measurable then we can assign probability to the event x < α
for any real number α. [We may equivalently have used >, ≤ or ≥ for the definition of
measurability, but that is beyond the scope of this course. You only need to know that
if x is F-measurable, then we can sensibly talk about the probability of x taking values
in virtually any subset of the real line you can think of (the Borel sets).]
    Now define a sequence of σ-algebras as

                               {Ft }∞
                                    t=1 : F1 ⊆ F2 ⊆ ... ⊆ F .

Conceptually, each σ-algebra Ft “refines” Ft−1 , in the sense that distinguishes (in a
probabilistic sense) between “more” events than the previous one.
   Finally, let a sequence of random variables xt be Ft -measurable for each t, which
models a stochastic process. Consider an ω ∈ Ω, and choose an α ∈ <. Then for each t,
the set Eαt ≡ {ω : xt (ω) < α} will be a set included in the collection (the σ-algebra) Ft .
Since Ft ⊆ F for all t, Eαt also belongs to F. Hence, we can assign probability to Eαt
using the set function P and P [Eαt ] is well defined.

                                            96
Example 6.16 Consider the probability space (Ω, F, P ), where

   • Ω = [0, 1] .

   • F = B (the Borel sets restricted to [0, 1]).

   • P = λ - the length of an interval: λ ([a, b]) = b − a.

   Consider the following collections of sets:
                            (½·            ¶¾2t −2 · t      ¸)
                                  j j+1              2 −1
                      At =           ,             ,      ,1   .
                                  2t   2t      j=0     2t

For every t, let Ft be the minimum σ-algebra containing At . Denote by σ (At ) the col-
lection of all possible unions of the sets in At (notice that Ω ∈ σ (At )). Then Ft =
{ ∅, At , σ (At )} (you should check that this is a σ-algebra).
    For example,                     ©           £    ¢ £      ¤ª
                               A1 = [0, 1] , ∅, 0, 12 , 21 , 1
                                       ©           £    ¢ £       ¤ª
                             ⇒ F1 = [0, 1] , ∅, 0, 12 , 21 , 1
                                  ©£     ¢ £     ¢ £      ¢ £       ¤ª
                            A2 = 0, 41 , 14 , 12 , 12 , 34 , 43 , 1
                        ©£    ¢ £      ¢ £     ¢ £     ¤ £       ¤ £     ¢ £      ¢ª
           ⇒ σ (A2 ) = 0, 21 , 0, 34 , 14 , 34 , 14 , 1 , 21 , 1 , 0, 41 ∪ 12 , 34 ∪
          ©£      ¢ £     ¤ £    ¢ £       ¤ £     ¢ £      ¤ £        ¢ £   ¤       ª
       ∪ 0, 14 ∪ 12 , 1 , 0, 14 ∪ 34 , 1 , 0, 12 ∪ 43 , 1 , 41 , 21 ∪ 34 , 1 , [0, 1] .
    Now consider the experiment of repeated fair coin flips: ct ∈ {0, 1}. The infinite
sequence {ct }∞
              t=0 is a stochastic process that can be modeled with the probability space and
associated sequence of σ-algebras that we have defined above. Each sequence {ct }∞  t=0 is an
“outcome”, represented by a number ω ∈ Ω.
    For every t let yt = {cj }tj=1 (this will be a t-dimensional vector of zeros and ones),
and to each possible configuration of yt (there are 2t possible ones), associate a distinct
interval in At . For example, for t = 1 and t = 2, let
                                                    £     ¢
                                       I1 [(0)] = 0, 21
                                                    £     ¤
                                       I1 [(1)] = 12 , 1
                                                    £     ¢
                                    I2 [(0, 0)] = 0, 14
                                                    £     ¢
                                    I2 [(0, 1)] = 41 , 12
                                                    £     ¢
                                    I2 [(1, 0)] = 21 , 34
                                                    £     ¤
                                    I2 [(1, 0)] = 43 , 1 .

    For t = 3, we will have a three-coordinate vector, and we will have the following
restrictions on I3 :
                                                £       ¢
                               I3 [(0, 0, ·)] ⊂ 0, 14
                                                £       ¢
                               I3 [(0, 1, ·)] ⊂ 14 , 12
                                                £       ¢
                               I3 [(1, 0, ·)] ⊂ 12 , 34
                                                £       ¤
                               I3 [(1, 1, ·)] ⊂ 34 , 1

                                             97
and so on for the following t.
    Then a number ω ∈ Ω implies a sequence of intervals {It }∞     t=0 that represents, for every
t, the “partial” outcome realized that far.
    Finally, the stochastic process will be modeled by a function xt that, for each t and
for each ω ∈ Ω, associates a real number; such that£ xt is      ¤ Ft -measurable. For example,
          0           00                    0         00    1
take ω = .7 and ω = .8, then I1 [y1 ] = I1 [y1 ] = 2 , 1 - that is, the first element of
the respective sequences c0t , c00t is a 1 (say “Heads”). It holds that we must have x1 (ω 0 ) =
x1 (ω 00 ) ≡ b.
    We are now ready to answer the following question: What is the probability that the
first toss in the experiment is “Heads”? Or, in our model, what is the probability that
x1 (ω) = b? To answer this question, we look at measure of the set of ω that will produce
the value x1 (ω) = b:
                                                         £  ¤
                           E = {ω : x1 (ω) = b} = 12 , 1 ( ∈ F1 )
                                £       ¤                      ¡£     ¤¢     ¡£    ¤¢
The probability of the event 12 , 1 is calculated using P 21 , 1 = λ 21 , 1 = 21 . That
is, the probability that the event {ct }∞                                                       1
                                           t=1 to be drawn produces a Head as its first toss is 2 .


Definition 6.17 Let B ∈ F. Then the joint probability of the events
(xt+1 , ..., xt+n ) ∈ B is given by

                  Pt+1, ..., t+n (B) = P [ω ∈ Ω : [xt+1 (ω) , ..., xt+n (ω)] ∈ B] .

Definition 6.18 A stochastic process is stationary if Pt+1, ..., t+n (B) is independent of
t, ∀t, ∀n, ∀B.

    Conceptually, if a stochastic process is stationary, then the joint probability distribu-
tion for any (xt+1 , ..., xt+n ) is independent of time.
    Given an observed realization of the sequence {xj }∞        j=1 in the last s periods
(xt−s , ..., xt ) = (at−s , ..., at ), the conditional probability of the event
(xt+1 , ..., xt+n ) ∈ B is denoted by

                            Pt+1, ..., t+n [B |xt−s = at−s , ..., xt = at ] .

Definition 6.19 A first order Markov Process is a stochastic process with the property
that
           Pt+1, ..., t+n [B |xt−s = at−s , ..., xt = at ] = Pt+1, ..., t+n [B |xt = at ] .

Definition 6.20 A stochastic process is weakly stationary (or covariance stationary) if
the first two moments of the joint distribution of (xt+1 , ..., xt+n ) are independent of time.

    A usual assumption in macroeconomics is that the exogenous randomness affecting
the economy can be modelled as a (weakly) stationary stochastic process. The task then
is to look for stochastic processes for the endogenous variables (capital, output, etc.)
that are stationary. This stochastic stationarity is the analogue to the steady state in
deterministic models.

                                                   98
Example 6.21 Suppose that productivity is subject to a two-state shock

                                        y = zF (k)
                                        z ∈ {zL , zH } .

Imagine for example that the zt ’s are iid, with Pr [zt = zH ] = 21 = Pr [zt = zL ] ∀t. The
policy function will now be a function of both the initial capital stock K and the realization
of the shock z, i.e. g (k, z) ∈ {g (k, zL ) , g (k, zH )} ∀K. We need to find the functions
g (k, ·). Notice that they will determine a stochastic process for capital,i.e. the trajectory
of capital in this economy will be subject to a random shock. The Figure 6.4 shows an
example of such a trajectory.


                   k’
                                                                         o
                                                                    45




                                                               high shock
                                                               capital line




                                                               low shock
                                                               capital line




                                                                              k
                                    A      ergodic set     B


Figure 6.4: Stochastic levels of capital. The interval (A, B) is the ergodic set: once the
level of capital enters this set, it will not leave it again. The capital stock will follow a
stationary stochastic process within the limits of the ergodic set.




                                                 99
100
Chapter 7

Overlapping-generations model

7.1     Welfare in models with multiple agents
We are interested in analyzing the neoclassical growth model in an environment with mul-
tiple agents. Our objective will be to study the efficiency properties of competitive equi-
librium under such setups. Will the introduction of several, possibly non-homogeneous,
agents substantially modify the welfare properties of equilibria?
    Heterogeneity among agents can be modelled by assuming agents with different pref-
erences, or by endowing them with varying amounts of initial wealth. Another way of
thinking of a non-homogeneous population is by using the “overlapping-generations” ap-
proach, as opposed to the “dynastic” approach we have been dealing with so far. The
dynastic model has all its agents “born” in period t = 0, thereafter to live during all the
periods modelled (possibly infinite time). On the contrary, the overlapping-generations
scheme assumes that new agents are born into the economy each period, and these indi-
viduals’ life spans are shorter than the economy’s time horizon.
    The overlapping-generations approach seems more realistic, and raises issues that the
dynastic model does not address, such as why agents would “die” leaving non-consumed
savings behind. In fact, a vast literature on the inter-generational game has been devel-
oped, trying to explain the motives for bequests, and studying the impact of this game
on the dynamic properties of the economy.

7.1.1    Definitions and notation
In what follows, we will introduce some general definitions. By assuming that there is a
finite set H of consumers (and, abusing notation slightly, let H be an index set, such that
H ≡ card(H)), we can index individuals by a subscript h = 1, ..., H. So H agents are
born each period t, and they all die in the end of period t + 1. Therefore, in each period
t the young generation born at t lives together with the “old” people born at t − 1.
    Let cht (t + i) denote consumption at date t + i of agent h born at t (usually we say
“of generation t”), and we have the following:

Definition 7.1 A consumption allocation is a sequence
                      n¡                   ¢    o∞  ¡        ¢
                   c = cht (t), cht (t + 1) h∈H    ∪ ch−1 (0) h∈H .
                                                  t=0


                                           101
   A consumption allocation defines consumption of agents of all generations from t = 0
onwards, including
               P consumption
                      £ h       of the
                                   ¤ initial old, in the economy.
                              h
   Let c(t) ≡ h∈H ct (t) + ct−1 (t) denote total consumption at period t, composed of
the amount cht (t) consumed by the young agents born at t, and the consumption cht−1 (t)
enjoyed by the old agents born at t − 1. Then we have the following:

Definition 7.2 A consumption allocation is feasible if

                                      c(t) ≤ Y (t) ∀t.

Example 7.3 (Storage economy) Assume there is “intertemporal production” mod-
elled as a storage technology whereby investing one unit at t yields γ units at t + 1. In
this case, the application of the previous definition reads: a consumption allocation is
feasible in this economy if there exists a sequence {K(t)}∞
                                                          t=0 such that

                           c(t) + K(t + 1) ≤ Y (t) + K(t)γ ∀t,

where Y (t) is an endowment process.

Example 7.4 (Neoclassical growth model) Let L(t) be total labor supply at t, and
the neoclassical function Y (t) represent production technology:

                                   Y (t) = F [K(t), L(t)] .

Capital is accumulated according to the following law of motion:

                              K(t + 1) = (1 − δ) K(t) + I(t).

Then in this case (regardless of whether this is a dynastic or an overlapping generations
setup), we have that a consumption allocation is feasible if there exists a sequence {I(t)}∞
                                                                                           t=0
such that
                             c(t) + I(t) ≤ F [K(t), L(t)] ∀t.

    The definitions introduced so far are of physical nature: they refer only to the material
possibility to attain a given consumption allocation. We may also want to open judgement
on the desirability of a given allocation. Economists have some notions to accommodate
this need, and to that end we introduce the following definition:

Definition 7.5 A feasible consumption allocation c is efficient if there is no alternative
feasible allocation b
                    c such that
                                b
                                c(t) ≥ c(t) ∀t, and
                                   b
                                   c(t) > c(t) for some t.

    An allocation is thus deemed efficient if resources are not wasted; that is, if there
is no way of increasing the total amount consumed in some period without decreasing
consumption in the remaining periods.
    The previous definition, then, provides a tool for judging the “desirability” of an
allocation according to the aggregate consumption pattern. The following two defini-
tions allow an extension of economists’ ability to assess this desirability to the actual
distribution of goods among agents.

                                             102
Definition 7.6 A feasible consumption allocation cA is Pareto superior to cB (or cA
“Pareto dominates” cB ) if
  1. No agent strictly prefers the consumption path specified by cB to that specified by
     cA :
                                   cA %h,t cB ∀h ∈ H, ∀t.
  2. At least one agent strictly prefers the allocation cA to cB :
                                     ∃j ∈ H, bt : cA Âj,bt cB .
   Notice that this general notation allows each agent’s preferences to be defined on other
agents’ consumption, as well as on his own. However, in the overlapping-generations
model that we will study the agents will be assumed to obtain utility (or disutility) only
from their own consumption.
                       ©            Then, condition
                                            ª         for Pareto© domination
                                                                           ª may be further
specified. Define cht = cht (t), cht (t + 1) if t ≥ 0 and cht = cht (t + 1) otherwise. Pareto
domination condition reads:
   1. No agent strictly prefers his/her consumption path implied by cB to that implied
      by cA :
                                    cA ht %h,t cB ht ∀h ∈ H, ∀t.
   2. At least one agent strictly prefers the allocation cA to cB :
                                     ∃j ∈ H, bt : cA bj Âj,bt cB bj .
                                                     t        t

     Whenever cB is implemented, the existence of cA implies that a welfare improvement
is feasible by modifying the allocation. Notice that a welfare improvement in this context
means that it is possible to provide at least one agent (and potentially many of them) with
a consumption pattern that he will find preferable to the status quo, while the remaining
agents will find the new allocation at least as good as the previously prevailing one.
     Building on the previous definition, we can introduce one of economists’ most usual
notions of the most desirable allocation that can be achieved in an economy:
Definition 7.7 A consumption allocation c is Pareto optimal if:
  1. It is feasible.
  2. There is no other feasible allocation b
                                           c 6= c that Pareto dominates c.
    Even though we accommodated the notation to suit the overlapping-generations
framework, the previous definitions are also applicable to the dynastic setup. In what
follows we will restrict our attention to the overlapping-generations model to study the
efficiency and optimality properties of competitive equilibria. You may suspect that the
fact that agents’ life spans are shorter than the economy’s horizon might lead to a differ-
ent level of capital accumulation than if agents lived forever. In fact, a quite general result
is that economies in which generations overlap lead to an overaccumulation of capital.
This is a form of (dynamic) inefficiency, since an overaccumulation of capital implies that
the same consumption pattern could have been achieved with less capital investment –
hence more goods could have been “freed-up” to be consumed.
    In what follows, we will extend the concept of competitive equilibrium to the overlap-
ping generations setup. We will start by considering endowment economies, then extend
the analysis to production economies, and finally to the neoclassical growth model.

                                              103
7.1.2      Endowment economy
We continue to assume that agents of every generation are indexed by the index set H.
Let ωth (t + i) denote the endowment of goods at t + i of agent h born at t. Then the total
endowment process is given by
                                        X
                                Y (t) =    ωth (t) + ωt−1
                                                      h
                                                          (t).
                                               h∈H

    We will assume throughout that preferences are strongly monotone which means that
all inequality constraints on consumption will bind.

Sequential markets
We assume that contracts between agents specifying one-period loans are enforceable,
and we let R(t) denote the gross interest rate for loans granted at period t and maturing
at t + 1. Then each agent h born at t ≥ 0 must solve
                                           max uht (c1 , c2 )                                     (7.1)
                                             c1 , c2

                                   s.t. c1 + l ≤ ωth (t),
                                        c2 ≤ ωth (t + 1) + lR(t),
and generation −1 trivially solves
                                                 £         ¤
                                         max uh−1 ch−1 (0)                                        (7.2)
                                         ch
                                          −1 (0)


                                       s.t. ch−1 (0) ≤ ω−1
                                                        h
                                                           (0).
   Unlike the dynastic case, there is no need for a no-Ponzi game restriction. In the
dynastic model, agents could keep on building debt forever, unless prevented to do so.
But now, they must repay their loans before dying, which happens in finite time1 .
Definition 7.8 A competitive equilibrium with sequential markets is a consump-
tion allocation c and a sequence R ≡ {R(t)}∞     t=0 such that
      ¡                   ¢
   1. cht (t), cht (t + 1) solve generation t’s agent h (7.1) problem, and ch−1 (0) solves (7.2)
      problem.
   2. Market clearing is satisfied. (Effectively, we need only to require the credit market
      to be cleared, and Walras’ law will do the rest due to feasibility of c):
                                   X
                                      lth = 0, ∀t = 0, . . . , +∞.
                                       h∈H

    In the initial setup of the model the agents were assumed to live for two periods.
Because of this, no intergenerational loan can be ever paid back (either a borrower, or a
lender is simply not there next period). Therefore, there is no intergenerational borrowing
in the endowment economy.
   1
     Notice that in fact both the no-Ponzi-game and this “pay-before-you-die” restrictions are of an
institutional nature, and they play a key role in the existence of an inter-temporal market – the credit
market.

                                                       104
Arrow-Debreu date-0 markets
In this setup we assume that all future generations get together at date t = −1 in a
futures market and arrange delivery of consumption goods for the periods when they will
live2 .
    The futures market to be held at t = −1 will produce a price sequence {p(t)}∞t=0 of
future consumption goods. Then each consumer (knowing in advance the date when he
will be reborn to enjoy consumption) solves

                                           max uht (c1 , c2 ) .                                     (7.3)
                                            c1 , c2


                    s.t. p(t)c1 + p(t + 1)c2 ≤ p(t)ωth (t) + p(t + 1)ωth (t + 1)
whenever his next life will take place at t ≥ 0, and the ones to be born at t = −1 will
solve
                                        max uh0 (c)                               (7.4)
                                                      c
                                                        h
                                      s.t. p(0)c ≤ p(0)ω−1 (0).

Definition 7.9 A competitive equilibrium with Arrow-Debreu date-0 markets
is a consumption allocation c and a sequence p ≡ {p(t)}∞
                                                       t=0 such that
      ¡                   ¢
   1. cht (t), cht (t + 1) solve generation t’s agent h (7.3) problem, and ch−1 (0) solves (7.4)
      problem.

   2. Resource feasibility is satisfied (markets clear).

Claim 7.10 The definitions of equilibrium with sequential markets and with Arrow-
Debreu date-0 trading are equivalent. Moreover, if (c, p) is an Arrow-Debreu date-1
trading equilibrium, then (c, R) is a sequential markets equilibrium where

                                                             p(t)
                                           R(t) =                   .                               (7.5)
                                                           p(t + 1)

       Proof. Recall the sequential markets budget constraint of an agent born at t:

                                            c1 + l = ωth (t),

                                       c2 = ωth (t + 1) + lR(t),
where we use the strong monotonicity of preferences to replace the inequalities by equal-
ities. Solving for l and replacing we obtain:

                                          c2             ω h (t + 1)
                                  c1 +        = ωth (t) + t          .
                                         R(t)               R(t)
   2
    You may assume that they all sign their trading contracts at t = −1, thereafter to die immediately
and be reborn in their respective periods – the institutional framework in this economy allows enforcement
of contracts signed in previous lives.

                                                          105
         Next recall the Arrow-Debreu date-0 trading budget constraint of the same agent:

                              p(t)c1 + p(t + 1)c2 = p(t)ωth (t) + p(t + 1)ωth (t + 1).

         Dividing through by p(t), we get
                                        p(t + 1)                p(t + 1) h
                                 c1 +            c2 = ωth (t) +         ωt (t + 1).
                                          p(t)                    p(t)
    As can be seen, with the interest rate given by (7.5) the two budget sets are identical.
Hence comes the equivalence of the equilibrium allocations.
    An identical argument shows that if (c, R) is a sequential markets equilibrium, then
(c, p) is an Arrow-Debreu date-0 trading equilibrium, where prices p(t) are determined
by normalizing p(0) = p0 (usual normalization is p0 = 1) and deriving the remaining ones
recursively from
                                                 p(t)
                                     p(t + 1) =       .
                                                 R(t)
Remark 7.11 The equivalence of the two equilibrium definitions requires that the amount
of loans that can be drawn, l, be unrestricted (that is, that agents face no borrowing
constraints other than the ability to repay their debts). The reason is that we can switch
from
                                       c1 + l = ωth (t)
                                  c2 = ωth (t + 1) + lR(t)
to
                                                  c2             ω h (t + 1)
                                          c1 +        = ωth (t) + t                                (7.6)
                                                 R(t)               R(t)
only in the absence of any such restrictions.
   Suppose instead that we had the added requirement that l ≥ b for some number b such
           ω h (t+1)
that b > − tR(t) . In this case, (7.11) and (7.6) would not be identical any more3 .

Application: Endowment economy with one agent per generation
We will assume that H = 1 (therefore agents are now in fact indexed only by their birth
dates), and that for every generation t ≥ 0 preferences are represented by the following
utility function:
                               ut (cy , co ) = log cy + log co .
Similarly, the preferences of generation t = −1 are represented by utility function

                                                    u−1 (c) = log c.

The endowment processes are given by:

                                                       ωt (t) = ωy ,
                                                  ωt (t + 1) = ωo .
     3            ω h (t+1)
         If b = − tR(t) , then this is just the “pay-before-you-die” restriction - implemented in fact by
                                                      ω h (t+1)
non-negativity of consumption. Also, if b < − tR(t) , then l ≥ b would never bind, for the same reason.

                                                           106
for all t. Trading is sequential, and there are no borrowing constraints other than solvency.
    Agent t ≥ 0 now solves
                                      max log cy + log co
                                         cy , co

s.t.
                                              co          ωo
                                      cy +        = ωy +      .
                                             R(t)        R(t)
We can substitute for co to transform the agent’s problem into:
                                       ·µ                ¶      ¸
                                                ωo
                      max log cy + log ωy +          − cy R(t) .
                        cy                     R(t)
Taking first-order conditions yields:
                                 1              R(t)
                                    −µ                 ¶      = 0,
                                 cy            ωo
                                         ωy +      − cy R(t)
                                              R(t)
                                                   ωo
                                        cy = ωy +      − cy .
                                                  R(t)
Then, from first-order condition and budget constraint we get:
                                         µ           ¶
                                       1          ωo
                                cy =       ωy +          ,
                                       2        R(t)
                                       1
                                co =     (ωy R(t) + ωo ) .
                                       2
   Market clearing and strong monotonicity of preferences require that the initial old
consume exactly their endowment:

                                              c−1 (0) = ωo .

Therefore, using the feasibility constraint for period t = 0, that reads:

                                     c0 (0) + c−1 (0) = ωy + ωo ,

follows:
                                               c0 (0) = ωy 4 .
   Repeating the market clearing argument for the remaining t (since c0 (0) = ωy will
imply c0 (1) = ωo ), we obtain the following equilibrium allocation, ∀t:

                                                ct (t) = ωy ,
                                          ct (t + 1) = ωo .

Given this allocation, we solve for the prices R(t) that support it. You may check that
these are
                                               ωo
                                       R(t) =     .
                                               ωy
   4
    Notice that the same result follows from clearing of the loans market at t = 0: l0 = 0. This, together
with c0 (0) + l0 = ωy , implies the same period 0 allocation.

                                                    107
This constant sequence supports the equilibrium where agents do not trade: they just
consume their initial endowments.
   Let us now use specific numbers to analyze a quantitative example. Let

                                          ωy = 3,
                                          ωo = 1.
                                                 1
This implies the gross interest rate of R(t) = . The net interest rate is negative:
                                                 3
                    2
r(t) ≡ R(t) − 1 = − .
                    3
    The natural question, hence, is whether the outcome R(t) = 31 is a) efficient; and b)
optimal:

  a) Efficiency: Total consumption under the proposed allocation is c(t) = 4, which is
     equal to the total endowment. It is not possible to increase consumption in any
     period because there is no waste of resources. Therefore, the allocation is efficient.

  b) Optimality: To check whether the allocation is optimal, consider the following
     alternative allocation:

                                             bc−1 (0) = 2,
                                                b
                                                ct (t) = 2,
                                          b
                                          ct (t + 1) = 2.

     That is, the allocation bc is obtained from a chain of intergenerational good transfers
     that consists of the young in every period giving a unit of their endowment to the
     old in that period. Notice that for all generations t ≥ 0, this is just a modification
     of the timing in their consumption, since total goods consumed throughout their
     lifetime remain at 4. For the initial old, this is an increase from 1 to 2 units of
     consumption when old. It is clear, then, that the initial old strictly prefer b   c to c.
     We need to check what the remaining generations think about the change. It is
     clear that since utility is concave (the log function is concave), this even split of the
     same total amount will yield a higher utility value. In fact,

           ut (b
               ct ) = log 2 + log 2 = 2 · log 2 = log 4 > log 3 + log 1 = log 3 = ut (ct ) .

     Therefore, b
                c Pareto dominates c, which means that c can not be Pareto optimal.

   Suppose instead that the endowment process is reversed in the following way:

                                          ωy = 1,
                                          ωo = 3.

There is the same total endowment in the economy each period, but the relative assign-
ments of young and old are reversed. From the formula that we have derived above, this
implies
                                       R(t) = 3.

                                              108
     The “no trade” equilibrium where each agent consumes his own endowment each
period is efficient again, since no goods are wasted.
     Is it Pareto optimal? This seems a difficult issue to address, since we need to compare
the prevailing allocation with all other possible allocations. We already know that an allo-
cation having (2, 2) will be preferred to (1, 3) given the log utility assumption. However,
is it possible to start a sequence of intergenerational transfers achieving consumption of
(cy , co ) from some t (≥ 0) onwards, while keeping the constraints that all generations
receive at least log 3 units of utility throughout their lifetime, some generation is strictly
better off, and the initial old consume at least 3 units? (If any of these constraints is vi-
olated, the allocation thus obtained will not Pareto dominate the “no trade” allocation.)
It is left to you to check that the answer to this question is “No”.
     Notice that in analyzing Pareto optimality, we have restricted our attention to sta-
tionary allocations. Let us introduce a more formal definition of this term.

Definition 7.12 (Stationary allocation) A feasible allocation c is called stationary
if ∀t :

                                            ct (t) = cy ,
                                      ct (t + 1) = co .

    With this definition at hand, we can pose the question of whether there is any station-
ary allocation that Pareto dominates (2, 2). Figure 7.1 shows the resource constraint of
the economy, plotted together with the utility level curve corresponding to the allocation
(2, 2):

                     6
                   Co


                     5



                     4



                     3



                     2



                     1



                     0
                      0       1        2        3           4    5    Cy   6



                     Figure 7.1: Pareto optimality of (2, 2) allocation

   The shaded area is the feasible set, its frontier given by the line cy + co = 4. It is clear
from the tangency at (2, 2) that it is not possible to find an alternative allocation that
Pareto dominates this one. However, what happens if we widen our admissible range

                                             109
of allocations and think about non-stationary ones? Could there be a non-stationary
allocation dominating (2, 2)?
    In order to implement such a non-stationary allocation, a chain of inter-generational
transfers would require a transfer from young to old at some arbitrary point in time t.
These agents giving away endowment units in their youth would have to be compen-
sated when old. The question is how many units of goods would be required for this
compensation.
                         6
                        Co


                         5



                         4



                         3
                   ε3
                        ε2

                         2



                         1



                         0
                          0    1    ε1 2        3          4   5    Cy   6
                                   ε2


         Figure 7.2: Impossibility of Pareto improvement over (2, 2) allocation

    Figure 7.2 illustrates that, given an initial transfer ε1 from young to old at t, the
transfer ε2 required to compensate generation t must be larger than ε1 , given the concave
utility assumption. This in turn will command a still larger ε3 , and so on. Is the sequence
{εt }∞
     t=0 thus formed feasible?
    An intuitive answer can be seen in the chart: no such transfer scheme is feasible in the
long run with stationary endowment process. Therefore, for this type of preferences the
stationary allocation (2, 2) is the Pareto optimal allocation. Any proposed non-stationary
allocation that Pareto dominates (2, 2) becomes unfeasible at some point in time.
    Somewhat more formally, let us try to use the First Welfare Theorem to prove Pareto
optimality. Notice that our model satisfies the following two key assumptions:

  1. Preferences exhibit local non-satiation (since u is strictly increasing).

  2. The market value of all goods is finite (we will come back to this).

Proof (Pareto optimality of competitive equilibrium). Let an economy’s pop-
ulation be indexed by a countable set I (possibly infinite), and consider a competitive
equilibrium allocation x that assigns xi to each agent i (xi might be multi-dimensional).
    If x is not Pareto optimal, then there exists xb that Pareto dominates x, that is, a
feasible allocation that satisfies:

                                     ∀i ∈ I : x
                                              bi ºi xi ,

                                            110
                                               ∃j ∈ I : x
                                                        bj Âj xj .
Then we can use local non-satiation to show that

                                                 pb
                                                  xi ≥ pxi ,
                                                 pb
                                                  xj > pxj

must hold.
  Summing up over all agents, we get
                               X         X
                                   pb
                                    xi >   pxi ,
                                          i∈I                 i∈I
                                             X                 X
                                         p           x
                                                     bi > p           xi .
                                               i∈I              i∈I

The last inequality violates the market clearing condition, since the market value of
goods (with local non-satiation) must be equal to the market value of endowments in an
equilibrium. You may observe that this proof is in fact an application of the separating
hyperplane theorem.
   This proof is quite general. In the specific case of overlapping generations, we have
the following two peculiarities:

   1. p and x are infinite-dimensional vectors.

   2. There is an infinity of consumers.
                         P               P
Therefore, the series          pb
                                xi and         pxi might take infinite value, in which case the last
                         i∈I             i∈I
comparison in the proof might not hold. We need to specify further conditions to en-
sure that the first welfare theorem will hold, even with the “correct” assumptions on
preferences.
   To this effect, let us assume that the following conditions are met by the economy:

   1. Regularity conditions on utility and endowments.

   2. Restrictions on the curvature of the utility function – that has to be “somewhat”
      curved, but not too much. An example of curvature measure is (one over) the
      elasticity of intertemporal substitution:

                                                          f 00 (x)x 5
                                                      −            .
                                                           f 0 (x)

   3. Other technical details that you may find in Balasko and Shell (1980), but that are
      beyond the scope of this course.

Then we have the following:
   5
    This ratio is also called the coefficient of relative risk aversion whenever the environment involves
uncertainty. In the expected utility framework the same ratio measures two aspects of preferences:
intertemporal comparison, and degree of aversion to stochastic variability of consumption.

                                                       111
Theorem 7.13 (Balasko and Shell, Journal of Economic Theory, 1980) A com-
petitive equilibrium in an endowment economy populated by overlapping generations of
agents is Pareto optimal if and only if

                                       X∞
                                            1
                                                = ∞,
                                       t=0
                                           p(t)

where p(t) denote Arrow-Debreu prices for goods delivered at time t.

    Recall our example. The allocation (2, 2) implied R(t) = 1, and from the equivalence
of sequential and Arrow-Debreu date-0 trading equilibria, we have that

                                                   p(t)
                                      p(t + 1) =        ,
                                                   R(t)

which implies
                                 X∞         X∞
                                      1          1
                                          =          = ∞.
                                 t=0
                                     p(t)   t=1
                                                p(0)

In the case of (3, 1), we have
                                      p(t) = 3t · p(0).

Then
                   X∞         X∞               ∞
                        1         3−t     1 X −t          1
                            =          =          3 =          < ∞.
                   t=0
                       p(t)   t=0
                                  p(0)   p(0) t=0     2 · p(0)

And finally for (1, 3),
                                 X∞         X∞
                                      1          3t
                                          =          = ∞.
                                 t=0
                                     p(t)   t=0
                                                p(0)

    Therefore, by applying the theorem we conclude that (2, 2) and (1, 3) are Pareto
optimal allocations, whereas (3, 1) can be improved upon, which is the same conclusion
we had reached before.
    So, what if the economy in question can be represented as (3, 1) type of situation?
How can a Pareto improvement be implemented? Should the government step in, and if
so, how?
    A possible answer to this question is a “pay-as-you-go” type of social security system
that is used in many economies worldwide. But a distinct drawback of such a solution is
the forced nature of payments, when social security becomes “social coercion”. Is there
any way to implement Pareto superior allocation with the help of the market?
    One of the solutions would be to endow the initial old with (intrinsically useless) pieces
of paper called “money”. Intuitively, if the initial old can make the young in period t = 0
believe that at time t = 1 the next young will be willing to trade valuable goods for
these pieces of paper, a Pareto improvement can be achieved relying solely on the market
forces. We will examine this issue in the following section in greater detail.

                                             112
7.1.3    Economies with intertemporal assets
In the previous section, we have looked at overlapping-generations economies in which
only consumption goods are traded. A young agent selling part of his endowment to an
old one obviously needs something which serves the purpose of a storage of value, so that
the proceeds from the sale performed at time t can be used to purchase goods at t + 1.
A unit of account is therefore implicit in the framework of the previous section, which
is obvious from the moment that such thing as “prices” are mentioned. However, notice
that such units of account are not money, they exist only for convenience of quoting
relative prices for goods in different periods.
    We will now introduce intertemporal assets into the economy. We will consider in
turn fiat money and real assets.

Economies with fiat money
In this section we introduce “fiat” money to the economy. To this end, any paper with
a number printed on it will fulfill the need of value storage, provided that everybody
agrees on which are the valid papers, and no forgery occurs. We have assumed away
these details: agents are honest.
    As before, consider an overlapping-generations economy with agents who live for two
periods, one agent per generation. An endowment process is given by:

                            (ωt (t), ωt (t + 1)) = (ωy , ωo ) , ∀t.

The preferences will once again be assumed to be logarithmic:

                              ut (cy , co ) = log cy + log co , ∀t.

In contrast to the previous setup, let the initial old be endowed with M units of fiat
currency. A natural question to address is whether money can have value in this economy.
    A bit of notation: let pmt denote a value of a unit of money at time t in terms of
                                               1
consumption goods at time t. Also let pt ≡         be “price level” at time t, that is, the
                                              pmt
price of a unit of consumption goods at time t in terms of money. Notice the difference
between pt in this model and Arrow-Debreu date-0 prices denoted p(t).
    Assume for the moment that pt < ∞. Then, the maximization problem of generation
t agent is:

                                    max          log cy + log co                      (7.7)
                                  cy ,co ,Mt+1

                                               Mt+1
                                   s.t. cy +        = ωy ,
                                                pt
                                                    Mt+1
                                          co = ωo +      ,
                                                    pt+1
                                          Mt+1 ≥ 0.
And the agent of generation −1 trivially solves:

                                       max log c−1 (0)
                                       c−1 (0)


                                                 113
                                                          Mt+1
                                s.t. c−1 (0) = ωo +            .
                                                           p0
    The meaning of the last constraint in (7.7) is that agents cannot issue money, or,
alternatively, to sell it short. Combining the constraints from (7.7), the consolidated
budget constraint of an agent born at period t is:
                                            co            ωo
                                  cy +      pt   = ωy +    pt ,
                                          pt+1            pt+1

                                          ωy − cy ≥ 0.

   The budget set under these constraints is presented in Figure 7.3. As can be seen,
                              pt
the real return on money is pt+1  ≡ 1+π1t+1 . Here πt+1 denotes inflation rate. From first-
order Taylor approximation it follows that net return on one dollar invested in money is
≃ −πt+1 (for small values of πt+1 ).

                   Co




                                          pt
                                         p t+1



                  ωo




                                                  ωy                Cy



                 Figure 7.3: Budget set in the economy with fiat money

   Momentarily ignore ωy − cy ≥ 0. Then the solution to (7.7) is:
                                     µ             ¶
                                   1          pt+1
                           cy =       ωy + ωo        ,
                                   2           pt
                                     µ             ¶
                                   1          pt+1     pt
                           co =       ωy + ωo             .
                                   2           pt    pt+1

   Having found cy , we can recover the real demand for money of the young at t:

                           Mt+1            1    1 pt+1
                                = ωy − cy = ωy − ωo    .
                            pt             2    2   pt
   Imposing market clearing condition on the money market,

                                     Mt+1 = M ∀ t,

                                                 114
we can recover the law of motion for prices in this economy:

                           M             1    1 pt+1
                              = ωy − cy = ωy − ωo    ⇒
                           pt            2    2   pt

                                               ωy 2M
                                   pt+1 = pt      −    .
                                               ωo   ωo
   Consider the following three cases:
       ωy
   •      > 1;
       ωo
       ωy
   •      = 1;
       ωo
       ωy
   •      < 1.
       ωo
    Solution to this first-order difference equation is presented graphically on the Figure
7.4.

                                               p t+1




                                               0                    p   pt

                                                           ω y >1
                                                           ωo

                                                − 2M
                                                  ω    o
                                    ω y <1
                                    ωo



                           Figure 7.4: Dynamics of price level

    As can be seen, the only case consistent with positive and finite values of pt is the
first one, when ωy > ωo .
    The following solutions can be identified:

  1. If ωy > ωo we can observe the following: there exists a solution pt = p̄ > 0 . So,
     money can have real value!

       (a) Money can “overcome suboptimality” when ωy > ωo and consumption level is
           constant (cy = co = ωy +ω2
                                      o           pt
                                        ), since pt+1 = 1 implies that M RS = 1, and the
           resulting allocation is Pareto optimal by Balasko-Shell criterion.

                                             115
      (b) There is no equilibrium with p0 < p̄, which means that one unit of money at
          t = 0 has value at most p̄1 .
       (c) If p0 > p̄, there is an equilibrium, which is the solution to

                                                  ωy      2M
                                         pt+1 =      pt −     ,
                                                  ωo       ωo
           with p0 given. In this equilibrium, pt → ∞ (pmt → 0), and pt+1    pt
                                                                                increases
                              ωy
           monotonically to ωo . This is an equilibrium with hyperinflation. Money loses
           value in the limit.
      (d) pm0 = 0 (“pt = ∞”) is also an equilibrium.

     So, there is a continuum of equilibria. The fact that money has value may be seen
     as a “rational bubble”: what people are willing to “pay” for money today depends
     on what they expect others will “pay” for it tomorrow. The role of money here is
     to mitigate the suboptimality present in the economy. It is the suboptimality that
     gives money positive value.
     If we add borrowing and lending opportunity, we get from arbitrage condition and
     loans market clearing:
                                        pt
                                  Rt =      , lt = 0, ∀t.
                                       pt+1
     So, real interest rate is non-positive, and (real) money holdings are still present.

  2. If ωy ≤ ωo there is no equilibrium with pt < ∞. (However, autarky, pt = ∞, is still
     an equilibrium.)

Economies with real assets
In this subsection we will consider the assets that are real claims, rather than fiat money.
That is, they will be actual rights to receive goods in the following periods. Two different
kinds of assets are of interest:

- A tree that produces a given fruit yield (dividend) each period.

- Capital, that can be used to produce goods with a given technology.

A tree economy
We assume that the economy is populated by one agent per generation, and that each
agent lives for two periods. Preferences are represented by a logarithmic utility function
as in previous examples:          ¡        ¢
                               ut cty , cto = log cty + log cto .
   Agents are endowed with (ωy , ωo ) consumption units (fruits) when young and old,
respectively, and there is also a tree that produces a fruit yield of d units each period.
Therefore total resources in the economy each period are given by:

                                    Y (t) = ωy + ωo + d.

                                            116
    Ownership of a given share in the tree gives the right to collect such share out of the
yearly fruit produce. Trading of property rights on the tree is enforceable, so any agent
that finds himself owning any part of the tree when old will be able to sell it to the young
in exchange for consumption goods. The initial old owns 100% of the tree.
    Let at+1 denote the share of the tree purchased by the young generation at t, and pt
denotes the price of the tree at t. It is clear that asset market clearing requires at+1 = 1
for all t. Generation t consumer solves:

                                          max
                                          t t
                                              log cty + log cto
                                          cy , c o


                                 s.t. pt at+1 + cty = ωy ,
                                      cto = ωo + at+1 (pt+1 + d).
Notice that the returns on savings are given by
                                                     pt+1 + d
                                                              .
                                                        pt
       The first order conditions yield
                                              µ                      ¶
                                        1                    pt
                                  cty =              ωy +          ωo ,
                                          2               pt+1 + d
which implies that generation t’s savings satisfy:
                                        µ                  ¶
                                      1            pt
                            pt at+1 =     ωy −           ωo .
                                      2         pt+1 + d
Imposing the market clearing condition and rearranging we get the law of motion for
prices:
                                           ωo
                                pt+1 = ωy      − d.
                                        pt
                                            −2
   This is a first order (non-linear) difference equation in pt . Figure 7.5 shows that it
has two fixed points, a stable negative one and an unstable positive one.
   What is the equilibrium {pt }∞t=1 sequence? It must be a constant sequence since any
deviation from the positive fixed point leads directly into the negative one or creates a
“bubble” that eventually collapses due to infeasibility. So, pt = p∗ ∀t, where p∗ is the
positive solution to
                                              ωo
                                    p ∗ = ωy      − d.6
                                           p∗
                                               −2
     Is this competitive equilibrium Pareto optimal? We can answer this question by
checking whether the Balasko-Shell criterion is satisfied. First notice that if we multiply
 1
p(t)
      by p(t−1)p(t−2)...p(1)p(0)
         p(t−1)p(t−2)...p(1)p(0)
                                 we can write:
                                                             t−1
                          1     p(t − 1)p(t − 2)...p(1)p(0) Y
                              =                            ≡     Rs, s+1 ,
                         p(t)     p(t)p(t − 1)...p(1)p(0)    s=0

   6
    Notice that for the case d = 0 we are back in fiat money economy, and the constant positive value
                               1   ωy − ωo
of money is once again pmt = =             for M = 1.
                               p̄     2

                                                        117
                                                        p
                                                            t+1




                                                             p*
                                                              +

                             p*                     0
                              −

                                                                  ωy     p
                                                                             t
                                                                  2




                        Figure 7.5: Fixed points for price of the tree

where p(0) ≡ 1, and Rs, s+1 denotes the interest rate between periods s and s + 1:
                                                     p(s)
                                       Rs, s+1 ≡            .
                                                   p(s + 1)
   But we already know that the return on savings is given by:
                                            pt+1 + d
                                                     .
                                               pt
Therefore, the interest rate for each period, using equilibrium prices, is
                                                    p∗ + d
                                        Rs, s+1 =          .
                                                      p∗
                 1
Replacing for        , we get that:
                p(t)
                                  X∞              X∞ µ      ¶t
                                       1                  d
                                           = p(0)      1+ ∗ .
                                  t=0
                                      p(t)        t=0
                                                         p

   The limit of this series is infinity for any d ≥ 0. The Balasko-Shell criterion is met;
hence, the competitive equilibrium allocation supported by these prices is Pareto optimal.
   Finally, notice that the optimality of the result was proven regardless of the actual
endowment process; therefore, it generalizes for any such process.
   Now consider two cases of economies with production: a simple model with CRS
technology that uses only capital, and a more complicated neoclassical growth model.

Storage economy
We will assume the simplest form of production, namely constant marginal returns on
capital. Such a technology, represented by a linear function of capital, is what we have

                                              118
called “storage” technology whenever no labor inputs are needed in the production pro-
cess. Let the yield obtained from storing one unit be equal to one. That is, keeping
goods for future consumption involves no physical depreciation, nor does it increase the
physical worth of the stored goods.
    Let the marginal rates of substitution between consumption when old and when young
be captured by a logarithmic function, as before, and assume that the endowment process
is (ωy , ωo ) = (3, 1). Generation t’s problem is therefore:
                                    max
                                    t t
                                        log cty + log cto
                                    cy , c o

                                    s.t. st + cty = ωy ,
                                         cto = st + ωo .
The first order conditions yield
                                                   µ             ¶
                                         1                  ωo
                                   cty =               ωy +          .
                                               2            Rt
   The return on storage is one, Rt = 1. So, using the values assumed for the endowment
process, this collapses to
                                               cty = 2,
                                               cto = 2,
                                               st = 1.
    Notice that the allocation corresponds to what we have found to be the Pareto optimal
allocation before: (2, 2) is consumed by every agent. In the previous case where no real
intertemporal assets existed in the economy, such an allocation was achieved by a chain
of intergenerational transfers (enforced, if you like, by the exchange in each period of
those pieces of paper dubbed fiat money). Now, however, agent buries his “potato” when
young, and consumes it when old.
    Is the current allocation Pareto optimal? The answer is clearly no, since, to achieve
the consumption pattern (2, 2), the potato must always be buried on the ground. The
people who are born at t = 0 set aside one unit of their endowment to consume when
old, and thereafter all their descendance mimic this behavior, for a resulting allocation
                                   c = (1) ∪ {(2, 2)}∞
                                                     t=0 .

    However, the following improvement could be implemented. Suppose that instead of
storing one, the first generation (t = 0) consumed its three units when young. In the
following period the new young would give them their own spare unit, instead of storing
it, thereafter to continue this chain of intergenerational transfers through infinity and
beyond. The resulting allocation would be:
                              c = (1) ∪ (3, 2) ∪ {(2, 2)}∞
                              b                          t=1 ,

a Pareto improvement on c.
   In fact, b
            c is not only a Pareto improvement on c, but simply the same allocation c plus
one additional consumption unit enjoyed by generation 0. Since the total endowment of
goods is the same, this must mean that one unit was being wasted under allocation c.
   This problem is called “overaccumulation of capital”. The equilibrium outcome is
(dynamically) inefficient.

                                                   119
Neoclassical growth model
The production technology is now modelled by a neoclassical production function. Capital
is owned by the old, who put it to production and then sell it to the young each period.
Agents have a labor endowment of ωy when young and ωo when old. Assuming that
leisure is not valued, generation t’s utility maximization problem is:
                                                 ¡ t t¢
                                       max
                                        t  t
                                             u t  cy , co
                                      cy , c o


                                s.t. cty + st = ωy wt ,
                                     co = st rt+1 + ωo wt+1 .
    If the utility function is strictly quasiconcave, the savings correspondence that solves
this problem is single-valued:
                                  st = h [wt , rt+1 , wt+1 ] .
The asset market clearing condition is:
                                          st = Kt+1 .
    We require the young at t to save enough to purchase next period’s capital stock, which
is measured in terms of consumption goods (the price of capital in terms of consumption
goods is 1).
    The firm operates production technology that is represented by the function F (K, n).
Market clearing condition for labor is
                                       nt = ωy + ωo .
    From the firm’s first order conditions of maximization, we have that factor remuner-
ations are determined by
                                rt = F1 (Kt , ωy + ωo ) ,
                                wt = F2 (Kt , ωy + ωo ) .
  If we assume that the technology exhibits constant returns to scale, we may write
                                               µ ¶
                                                K
                                F (K, n) = nf         ,
                                                 n
       ¡ ¢      ¡    ¢
where f Kn ≡ F Kn , 1 . Replacing in the expressions for factor prices,
                              µ         ¶
                            0     Kt
                   rt = f                 ,
                                ωy + ωo
                             µ         ¶                µ         ¶
                                  Kt          Kt      0     Kt
                  wt = f                 −          f               .
                               ωy + ωo      ωy + ωo       ωy + ωo
   Let kt ≡ ωyK+ω
                t
                  o
                    denote the capital/labor ratio. If we normalize ωy + ωo = 1, we have
that Kt = kt . Then
                                 rt = f 0 (kt ),
                                 wt = f (kt ) − kt f 0 (kt ).

                                                 120
Substituting in the savings function, and imposing asset market equilibrium,

                  kt+1 = h [f (kt ) − kt f 0 (kt ), f 0 (kt ), f (kt+1 ) − kt+1 f 0 (kt+1 )] .

    We have obtained a first order difference equation. Recall that the dynastic model
lead to a second order equation instead. However, proving convergence to a steady state
is usually more difficult in the overlapping generations setup. Recall that the steady state
condition with the dynastic scheme was of the form

                                                 βf 0 (k ∗ ) = 1.

In this case, steady state requires that

                     k ∗ = h [f (k ∗ ) − k ∗ f 0 (k ∗ ), f 0 (k ∗ ), f (k ∗ ) − k ∗ f 0 (k ∗ )] .

7.1.4       Dynamic efficiency in models with multiple agents
We have analyzed the welfare properties of consumption allocations arising from a mul-
tiple agent environment under the form of a population consisting of overlapping genera-
tions of individuals. The purpose of this section is to generalize the study of the dynamic
efficiency of an economy to a wider range of modelling assumptions. In particular, we
will present a theorem valid for any form of one-sector growth model.
    We assume that the technology is represented by a neoclassical production function
that satisfies the following properties:

- f (0) = 0,

- f 0 (·) > 0,

- f 00 (·) < 0,

- f ∈ C 2 (C 2 denotes the space of twice continuously differentiable functions),

- lim f 0 (x) = ∞,
  x→0

- lim f 0 (x) = 0.
  x→∞


   Notice that since we define f (x) ≡ F (x, 1) + (1 − δ)x, the last assumption is not
consistent with the case of δ < 1. This assumption is implicit in what follows. Then we
can show the following:

Theorem 7.14 A steady state k ∗ is efficient if and only if R∗ ≡ f 0 (k ∗ ) ≥ 1.

    Intuitively, the steady state consumption is c∗ = f (k ∗ ) − k ∗ . Figure 7.6 shows the
                                                                        ∗  ∗
attainable levels of steady
                         ¡ G state
                                 ¢ capital stock and consumption (k , c ), given the as-
                               G
sumptions on f . The k , c locus corresponds to the “golden rule” level of steady
state capital and consumption, that maximize cG .
    Proof.

                                                        121
                   c*

                       G
                   c

                           f (k *) > 1
                                                                           f (k *) < 1




                                                                                         f (k*) − k *

                                         Efficient               Inefficient




                                                     k
                                                         G
                                                                                                        k*


                             Figure 7.6: Efficiency of the steady state

(i) R∗ < 1: k ∗ is inefficient.
    Assume that k ∗ is such that f 0 (k ∗ ) < 1. Let c∗ denote the corresponding level of
    steady state consumption, let c0 = c∗ . Now consider a change in the consumption
    path, whereby k1 is set to k1 = k ∗ − ε instead of k1 = k ∗ . Notice this implies an
    increase in c0 . Let kt = k1 ∀t ≥ 1. We have that

                             c1 − c∗ = f (k1 ) − k1 − f (k ∗ ) + k ∗
                                     ≡ f (k ∗ − ε) − (k ∗ − ε) − f (k ∗ ) + k ∗ .

    Notice that strict concavity of f implies that

                        f (k ∗ ) < f (k ∗ − ε) + [k ∗ − (k ∗ − ε)] f 0 (k ∗ − ε)
           ¡            ¢
    for ε ∈ 0, k ∗ − k G , and we have that f 0 (k ∗ − ε) < 1. Therefore,

                                           f (k ∗ ) < f (k ∗ − ε) + k ∗ − (k ∗ − ε) .

    This implies that
                                                             c1 − c∗ > 0,
    which shows that a permanent increase in consumption is feasible.

(ii) R∗ ≥ 1: k ∗ is efficient.
    Suppose not, then we could decrease the capital stock at some point in time and
    achieve a permanent increase in consumption (or at least increase consumption at
    some date without decreasing consumption in the future). Let the initial situation
    be a steady state level of capital k0 = k ∗ such that f 0 (k ∗ ) ≥ 1. Let the initial c0
    be the corresponding steady state consumption: c0 = c∗ = f (k ∗ ) − k ∗ . Since we
    suppose that k ∗ is inefficient, consider a decrease of capital accumulation at time 0:

                                                              122
     k1 = k ∗ − ε1 , thereby increasing c0 . We need to maintain the previous consumption
     profile c∗ for all t ≥ 1: ct ≥ c∗ . This requires that

                              c1 = f (k1 ) − k2 ≥ f (k ∗ ) − k ∗ = c∗ ,

                                      k2 ≤ f (k1 ) − f (k ∗ ) + k ∗ ,
                                      k2 − k ∗ ≤ f (k1 ) − f (k ∗ ).
                                      | {z }
                                         ε2

     Concavity of f implies that

                                f (k1 ) − f (k ∗ ) < f 0 (k ∗ )[k1 − k ∗ ].
                                                               | {z }
                                                                   −ε1

     Notice that ε2 ≡ k2 − k ∗ < 0. Therefore, since f 0 (k ∗ ) ≥ 1 by assumption, we have
     that
                                        |ε2 | > |ε1 | .

     The size of the decrease in capital accumulation is increasing. By induction, {εt }∞
                                                                                        t=0
     is a decreasing sequence (of negative terms). Since it is bounded below by −k ∗ , we
     know from real analysis that it must have a limit point ε∞ ∈ [−k ∗ , 0). Consequently,
     the consumption sequence converges as well:

                                c∞ = f (k ∗ − ε∞ ) − (k ∗ − ε∞ ) .

     It is straightforward to show, using concavity of f , that

                                                 c ∞ < c∗ .

     Then the initial increase in consumption is not feasible if the restriction is to main-
     tain at least c∗ as the consumption level for all the remaining periods of time.


    We now generalize the theorem, dropping the assumption that the economy is in
steady state.

Theorem 7.15 (Dynamic efficiency with possibly non-stationary allocations) Let
both {kt }∞                                            0       ∞
          t=0 and the associated sequence {Rt (kt ) ≡ ft (kt )}t=0 be uniformly bounded above
and below away from zero. Let 0 < a ≤ −ft00 (kt ) ≤ M < ∞ ∀t, ∀kt . Then {kt }∞         t=0 is
efficient if and only if              " t           #
                                   X∞   Y
                                           Rs (ks ) = ∞.
                                  t=0    s=1

   Recall that                   " t                  #
                               ∞
                               X  Y                        ∞
                                                           X 1
                                              Rs (ks ) =           .
                                t=0     s=1
                                                              p
                                                           t=0 t

The Balasko-Shell criterion discussed when studying overlapping generations is then a
special case of the theorem just presented.

                                                123
7.2     Welfare theorems in dynastic and OG models
From our discussion so far, we can draw the following summary conclusions on the ap-
plicability of the first and second welfare theorems to the dynamic economy model.

   First Welfare Theorem

  1. Overlapping generations: Competitive equilibrium is not always Pareto optimal.
     Sometimes it is not even efficient.

  2. Dynastic model : Only local non-satiation of preferences and standard assumption
     β < 1 are required for competitive equilibrium to be Pareto optimal.

   Second Welfare Theorem

  1. Overlapping generations: In general, there is no applicability of the Second Welfare
     Theorem.

  2. Dynastic model : Only convexity assumptions are required for any Pareto optimal
     allocation to be implementable as a competitive equilibrium.

    Therefore with the adequate assumptions on preferences and on the production tech-
nology, the dynastic model yields an equivalence between competitive equilibrium and
Pareto optimal allocations. Of course, the restrictions placed on the economy for the
Second Welfare Theorem to apply are much stronger than those required for the First
one to hold. Local non-satiation is almost not an assumption in economics, but virtually
the defining characteristic of our object of study (recall that phrase talking about scarce
resources, etcetera).
    In what follows, we will study the Second Welfare Theorem in the dynastic model.
To that effect, we first study a 1-agent economy, and after that a 2-agents one.


7.2.1     The second welfare theorem in a 1-agent economy
We assume that the consumer’s preferences over infinite consumption sequences and
leisure are represented by a utility function with the following form:
                                                      ∞
                                                      X
                               U [{ct , lt }∞
                                            t=0 ] =         β t u (ct ) ,
                                                      t=0


where 0 < β < 1 and the utility index u (·) is strictly increasing and strictly concave. For
simplicity, leisure is not valued.
   This is a one-sector economy in which the relative price of capital in terms of con-
sumption good is 1. Production technology is represented by a concave, homogeneous of
degree one function of the capital and labor inputs:

                                     Y (t) = F (Kt , nt ) .

                                              124
   Then the central planner’s problem is:
                                                              (∞              )
                                                               X
                           V (K0 ) =         max                    β t u (ct )
                                       {ct , Kt+1 , nt }∞
                                                        t=0
                                                              t=0

                              s.t. ct + Kt+1 = F (Kt , nt ) , ∀t.
     The solutions to this  © problem      are
                                            ª∞ the Pareto optimal allocations. Then suppose
we have an allocation c∗t , Kt+1   ∗
                                       , nt t=0 solving this planner’s problem and we want to
support it as a competitive equilibrium. Then we need to show that there exist sequences
{p∗t }∞       ∗ ∞        ∗ ∞
      t=0 , {Rt }t=0 , {wt }t=0 such that:
        ©               ª∞
  (i) c∗t , Kt+1∗
                   , nt t=0 maximizes consumer’s utility subject to the budget constraint
        determined by {p∗t , Rt∗ , wt∗ }∞t=0 .

 (ii) {Kt∗ , nt }∞
                 t=0 maximize firm’s profits.
                                     ©          ª∞
(iii) Markets clear (the allocation c∗t , Kt+1∗
                                                 t=0
                                                     is resource-feasible).

Remark 7.16 Even though nt can be treated as a parameter for the consumer’s problem,
this is not the case for the firms. These actually choose their amount of labor input each
period. Therefore, we must make the sequence nt part of the competitive equilibrium, and
require that the wage level for each t support this as firms’ equilibrium labor demand.

    A straightforward way of showing that the sequences {p∗t }∞        ∗ ∞        ∗ ∞
                                                               t=0 , {Rt }t=0 , {wt }t=0 exist
is directly by finding their value. Notice that from concavity of F (·, ·) ,

                                    Rt∗ = F1 (Kt∗ , nt ) ,
                                    wt∗ = F2 (Kt∗ , nt )

will ensure that firms maximize profits (or if you like, that the labor and capital services
markets clear each period). In addition, homogeneity of degree 1 implies that these
factor payments completely exhaust production, so that the consumer ends up receiving
the whole product obtained from his factor supply.
    Then the values of p∗t remain to be derived. Recall the first order conditions in the
planner’s problem:

                                        β t u0 (c∗t ) = λ∗t ,
                                           ¡ ∗               ¢
                                 λ∗t = F1 Kt+1       , nt+1 λ∗t+1 ,

which lead to the centralized Euler equation
                                                       ¡ ∗         ¢
                             u0 (c∗t ) = βu0 (c∗t+1 )F1 Kt+1 , nt+1 .

    Now, since λ∗t is the marginal value of relaxing the planner’s problem resource con-
straint at time t, it seems natural that prices in a competitive equilibrium must reflect
this marginal value as well. That is, p∗t = λ∗t seems to reflect the marginal value of the
scarce resources at t. Replacing in the planner’s Euler equation, we get that
                                     ¡ ∗         ¢  p∗
                                   F1 Kt+1 , nt+1 = ∗ t .
                                                   pt+1

                                                  125
   Replacing by Rt∗ , this reduces to

                                                      p∗t
                                             Rt∗ =         .                             (7.8)
                                                     p∗t+1

    It is straightforward to check that (7.8) is the market Euler equation that obtains from
the consumer’s first order conditions in the decentralized problem (you should check this).
Therefore these prices seem to lead to identical consumption and capital choices in both
versions of the model. We need to check, however, that the desired consumption and
capital paths induced by these prices are feasible: that is, that these are market clearing
prices. To that effect, recall the planner’s resource constraint (which binds due to local
non-satiation):                                ¡ ∗         ¢
                                      ∗
                               c∗t + Kt+1 = F Kt+1   , nt+1 , ∀t.
   The equality remains unaltered if we premultiply both sides by p∗t :
                          £           ¤        ¡ ∗         ¢
                       p∗t c∗t + Kt+1
                                  ∗
                                        = p∗t F Kt+1 , nt+1 , ∀t.

   And summing up over t, we get:
                        ∞
                        X                        ∞
                                  £           ¤ X       ¡ ∗         ¢
                               p∗t c∗t + Kt+1
                                          ∗
                                               =   p∗t F Kt+1 , nt+1 .
                         t=0                         t=0

   Finally, homogeneity of degree 1 of F (·, ·) and the way we have constructed Rt∗ and
wt∗ imply that
                        ∞
                        X                        ∞
                                  £           ¤ X
                               p∗t c∗t + Kt+1
                                          ∗
                                               =   p∗t [Rt∗ Kt∗ + wt∗ nt ] .
                        t=0                          t=0

© ∗ Therefore
          ª∞ the budget constraint in the market economy         is satisfied if the sequence
 ct , Kt+1 t=0 is chosen when the prevailing prices are {pt , wt , Rt∗ }∞
       ∗                                                   ∗    ∗
                                                                        t=0 .
                                                       © ∗                           ª∞
                                                               ∗
    Next we need to check whether the conditions for ct , Kt+1 , nt , p∗t , wt∗ , Rt∗ t=0 to be
a competitive equilibrium are satisfied or not:

  (i) Utility maximization subject to budget constraint: We have seen that the budget
      constraint is met. To check whether this is in fact a utility maximizing consumption-
      capital path, we should take first order conditions. But it is straightforward that
      these conditions
                     © ∗lead
                           ª∞to the Euler equation (7.8) which is met by the planner’s
      optimal path Kt+1     t=0
                                .

 (ii) Firms’ maximization: By construction of the factor services prices, and concavity of
      the production function, we have that {Kt∗ , nt }∞
                                                       t=0 are the firms’ profit maximizing
      levels of factor inputs.

(iii) Market clearing: We have discussed before that the input markets clear. And
      we have seen that if the consumer’s decentralized budget constraint is met, this
      implies that the planner’s problem resource constraint is met for the corresponding
      consumption and capital sequences. Therefore the proposed allocation is resource-
      feasible.

                                                 126
    Recall we mentioned convexity as a necessary assumption for the Second Welfare
Theorem to hold.
    Convexity of preferences entered our proof in that the first order conditions were
deemed sufficient to identify a utility maximizing consumption bundle.
    Convexity of the consumption possibilities set took the form of a homogeneous of
degree one, jointly concave function F . Concavity was used to establish the levels of
factor remunerations Rt∗ , wt∗ that support Kt∗ and nt as the equilibrium factor demand
by taking first order conditions on F . And homogeneity of degree one ensured that with
Rt∗ and wt∗ thus determined, the total product would get exhausted in factor payment -
an application of the Euler Theorem.

7.2.2     The second welfare theorem in a 2-agent economy
We now assume an economy with the same production technology and inhabited by
two agents. Each agent has preferences on infinite-dimensional consumption vectors
represented by the function
                                                  ∞
                                                  X
                            Ui [(cit )∞
                                      t=0 ] =           βit ui (cit )   i = 1, 2,
                                                  t=0

where βi ∈ (0, 1), and ui (·) is strictly increasing, concave, for both i = 1, 2.
  For some arbitrary weights µ1 , µ2 , we define the following welfare function:
                  W [(c1t )∞           ∞                    ∞                    ∞
                           t=0 , (c2t )t=0 ] = µ1 U1 [(c1t )t=0 ] + µ2 U2 [(c2t )t=0 ] .

Then the following welfare maximization problem can be defined:
                                   (     ∞                   ∞
                                                                           )
                                        X                    X
                                             t                  t
             V (K0 ) =     max ∞ µ1        β1 u1 (c1t ) + µ2   β2 u2 (c2t )
                         {c1t , c2t , Kt+1 }t=0
                                                    t=0                       t=0

                            s.t. c1t + c2t + Kt+1 ≤ F (Kt , nt ) , ∀t,
where nt = n1t + n2t denotes the aggregate labor endowment, which is fully utilized for
production since leisure is not valued.
     If we restrict µ1 and µ2 to be nonnegative and to add up to 1 (then W is a convex
combination of the Ui ’s), we have the Negishi characterization: by varying the vector
(µ1 , µ2 ), all the Pareto optimal allocations in this economy can be obtained from the
solution of the problem V (K0 ).
     That is, for every pair (µ1 , µ2 ) such that µ1 , µ2 ≥ 0, µ1 + µ2 = 1, we
                                                                            ¡ ∗obtain a Pareto
                                                                                         ¢∞
                                                                                  ∗    ∗
optimal allocation by solving V (K0 ). Now, given any such allocation c1t , c2t , Kt+1     t=0
                                                                                               ,
is it possible to decentralize the problem V (K0 ) so as to obtain that allocation as a
competitive equilibrium outcome? Will the price sequences necessary to support this as
a competitive equilibrium exist?
     In order to analyze this problem, we proceed as before. We look for the values of
{p∗t , Rt∗ , wt∗ }∞
                  t=0 and we guess them using the same procedure:

                                          p∗t = λ∗t ,
                                          Rt∗ = F1 (Kt∗ , nt ) ,
                                          wt∗ = F2 (Kt∗ , nt ) .

                                                        127
The planner’s problem first order conditions yield
                             µ1 β1t u01 (c1t ) = λt ,
                             µ2 β2t u02 (c2t ) = λt ,
                                          λt = λt+1 F1 (Kt+1 , nt+1 ) .
   Does the solution to these centralized first order conditions also solve the consumers’
decentralized problem? The answer is yes, and we can verify it by using pt = λt to
replace in the previous expression for consumer 1 (identical procedure would be valid for
consumer 2):
                                          µ1 β1t u01 (c1t ) = pt ,
                                    µ1 β1t+1 u01 (c1t+1 ) = pt+1 .
   So, dividing, we obtain
                                                                   pt
                                   u01 (c1t ) = β1 u01 (c1t+1 )        .
                                                                  pt+1
   This is the decentralized Euler equation (notice that the multiplier µ1 cancels out).
   Next we turn to the budget constraint. We have the aggregate expenditure-income
equation:
                     X∞                           ∞
                                                  X
                         pt [c1t + c2t + Kt+1 ] =   pt [Rt Kt + wt nt ] .
                      t=0                               t=0

    By homogeneity of degree 1 of F (·, ·), the factor remunerations defined above im-
ply that if the central planner’s resource constraint is satisfied for a {c1t , c2t , Kt+1 }∞
                                                                                            t=0
sequence, then this aggregate budget constraint will also be satisfied for that chosen
consumption-capital accumulation path.
    However, satisfaction of the aggregate budget constraint is not all. We have an addi-
tional dilemma: how to split it into two different individual budget constraints. Clearly,
we need to split the property of the initial capital between the two agents:
                                          k10 + k20 = K0 .
   Does k10 contain enough information to solve the dilemma? First notice that from
the central planner’s first order condition
                                     λt = λt+1 F1 (Kt+1 , nt+1 )
we can use the pricing guesses Rt = F1 (Kt , nt ), pt = λt , and replace to get
                                           pt = pt+1 Rt+1 .
   Therefore, we can simplify in the aggregate budget constraint
                                     pt Kt+1 = pt+1 Rt+1 Kt+1
for all t. Then we can rewrite
                      ∞
                      X                                                ∞
                                                                       X
                            pt [c1t + c2t ] = p0 R0 (k10 + k20 ) +           pt wt nt .
                      t=0                                              t=0


                                                  128
   And the individual budgets (where the labor endowment is assigned to each individual)
read:
                              ∞
                              X                                ∞
                                                               X
                                    pt c1t = p0 R0 k10 +             pt wt n1t ,           (7.9)
                              t=0                              t=0
                              ∞
                              X                                ∞
                                                               X
                                    pt c2t = p0 R0 k20 +             pt wt n2t .          (7.10)
                              t=0                              t=0

   Notice that none of them include the capital sequence directly, only indirectly via wt .
Recall the central planner’s optimal consumption sequence for Agent 1 {c∗1t }∞
                                                                             t=0 (the one
we wish to implement), and the price guesses: {wt∗ = F2 (Kt∗ , nt )}∞
                                                                    t=0 and {p∗     ∗ ∞
                                                                              t = λt }t=0 .
Inserting these into (7.9), we have:
                             ∞
                             X                                 ∞
                                                               X
                                    p∗t c∗1t = p∗0 R0∗ k10 +         p∗t wt∗ n1t .
                              t=0                              t=0
                         P
    The left hand side ∞        ∗ ∗
                           t=0 pt c1t is the present market value of planned consumption
path for Agent 1. The right hand
                              P∞ side     is composed of his financial wealth p∗0 R0∗ k10 and his
“human wealth” endowment t=0 p∗t wt∗ n1t . The variable k10 is the adjustment factor that
we can manipulate to induce the consumer into the consumption-capital accumulation
path that we want to implement.
    Therefore, k10 contains enough information: there is a one to one relation between the
weight µ and the initial capital level (equivalently, the financial wealth) of each consumer.
The Pareto optimal allocation characterized by that weight can be implemented with the
price guesses defined above, and the appropriate wealth distribution determined by k10 .
This is the Second Welfare theorem.




                                                   129
130
Chapter 8

Growth

Growth is a vast literature in macroeconomics, which seeks to explain some facts in the
long-term behavior of economies. The current chapter is an introduction to this subject,
and will be divided in three sections. In the first section, we set forth the motivation
for the theory: the empirical regularity which it seeks to explain. The second section
is about exogenous growth models, i.e. models in which an exogenous change in the
production technology results in income growth as a theoretical result. Finally, the third
section introduces technological change as a decision variable, and hence the growth rate
becomes endogenously determined.


8.1     Facts in long-run macroeconomic data
8.1.1    Kaldor’s stylized facts
The first five “facts” refer to the long-run behavior of economic variables in an economy,
whereas the sixth one involves an inter-country comparison.

  1) The growth rate of output gy is constant over time.

  2) The capital-labor ratio K
                             L
                               grows at a constant rate.

  3) The capital-income ratio Ky is constant.

  4) Capital and labor shares of income are constant.

  5) Real rates of return are constant.

  6) Growth rates persistently vary across countries.


8.1.2    Other facts
Besides these classical facts, there are also other empirical regularities which growth
theory must account for. These are:

  1) YL is very dispersed across countries.

                                              131
  2) The distribution of YL does not seem to spread out (although the variance has
     increased somewhat).

  3) Countries with low incomes in 1960 did not show on average higher subsequent
     growth (this phenomenon is sometimes referred to as “no absolute (β) conver-
     gence”).

  4) There is “conditional convergence”: Within groups classified by 1960 human capital
     measures (such as schooling), 1960 savings rates, and other indicators, a higher
     initial income y0 (in 1960) was positively correlated with a lower growth rate gy .
     This is studied by performing the “growth regression”:
                    1960−1990
                   gy, i      = α + β log y0i + γ log edu0i + εi ,   i = 1, ..., n.

      Then controlling for the initial level of education, the growth rate was negatively
      correlated with initial income for the period 1960-1990: βb < 0. Whereas if the
      regression is performed without controlling for the level of education, the result for
      the period is βb = 0, i.e. no absolute convergence, as mentioned above.

  5) Foreign trade volume seems to correlate positively with growth.

  6) Demographic growth (fertility) is negatively correlated with income.

  7) Growth in factor inputs (capital, labor) does not suffice in explaining output growth.
     The idea of an “explanation” of growth is due to Solow, who envisaged the method
     of “growth accounting”. Based on a neoclassical production function

                                          y = zF (K, L) ,

      the variable z captures the idea of technological change. If goods production is per-
      formed using a constant-returns-to-scale technology, operated under perfect com-
      petition, then (by an application of the Euler Theorem) it is possible to estimate
      how much out of total production growth is due to each production factor, and
      how much to the technological factor z. The empirical studies have shown that the
      contribution of z (the Solow residual) to output growth is very significant.

  8) Workers tend to migrate into high-income countries.


8.2      Exogenous growth
In this section we will study the basic framework to model output growth by introducing
an exogenous change in the production technology that takes place over time. Mathe-
matically, this is just a simple modification of the standard neoclassical growth model
that we have seen before.
    Two basic questions arise, one on the technique itself, and one on its reach. First, we
may ask how complicated it will be to analyze the model. The answer is quite reassuring:
it will be just a relatively easy transformation of material we have seen before. The
second question is what is the power of this model: what types of technological change
can be studied with these tools?

                                             132
    We will separate the issue of growth into two components. One is a technological
component: is growth feasible with the assumed production technology? The second one
is the decision making aspect involved: will a central planner choose a growing path?
Which types of utility function allow for what we will call a “balanced growth path”?
    This section is split into three subsections. The first and second ones address the
technological and decision making issues, respectively. In the third one, we will study a
transformation to the exogenous growth model that will help us in the analysis.

8.2.1    The technology of exogenous growth
Feasibility of growth
Given the assumptions regarding the production technology on the one hand, and re-
garding the source of technological progress on the other, we want to analyze whether
the standard neoclassical growth model is really consistent with sustained output growth.
From the point of view of the production side: is sustainable output growth feasible? You
probably guess the answer, but let us go into it in detail.
    The standard case is that of labor augmenting technological change (à la Solow). The
resource constraint in the economy is:
                        ct + it = Ft (Kt , nt )   = F (Kt , γ t nt ),
                                          |{z}              |{z}
                                         hours          efficiency units

where F represents a constant returns to scale production technology and γ > 1. The
capital accumulation law is
                               Kt+1 = (1 − δ) Kt + it .
Given the constant returns to scale assumption on F , sustained growth is then possible.
Let us analyze this setup in detail.
   Our object of study is what is called balanced growth: all economic variables grow at
constant rates (that could vary from one variable to another). In this case, this would
imply that for all t, the value of each variable in the model is given by:
                                       
                       yt = y0 gyt     
                                       
                                 t     
                                       
                       ct = c0 gc       balanced growth path -
                                     t
                       Kt = K0 gK        all variables grow at constant
                                t      
                                       
                       it = i0 gi      
                                        (but possibly different) rates.
                                   t   
                       nt = n0 gn .
This is the analogue of a steady state, in a model with growth.
    Our task is to find the growth rate for each variable in a balanced growth path, and
check whether such a path is consistent. We begin by guessing one of the growth rates,
as follows. From the capital accumulation law
                                 Kt+1 = (1 − δ) Kt + it .
If both it and Kt are to grow at a constant rate, it must be the case that they both
grow at the same rate, i.e. gK = gi . By the same type of reasoning, from the resource
constraint
                        ct + it = Ft (Kt , nt ) = F (Kt , γ t nt ) ≡ yt

                                            133
we must have that gy = gc = gi .
   Next, using the fact that F represents a constant-returns-to-scale technology (and
hence it is homogenous of degree one), we have that
                                                     µ           ¶
                                     t        t          Kt
                            F (Kt , γ nt ) = γ nt F            ,1
                                                        γ t nt
                                               µ            ¶
                                     Yt           Kt
                                 ⇒ t =F                 ,1 .
                                    γ nt         γ t nt
Since we have postulated that Kt and yt grow at a constant rate, we must have that
                                       Kt
                                             = constant.
                                      γ t nt
In addition, since the time endowment is bounded, actual hours can not growth beyond
a certain upper limit (usually normalized to 1); hence gn = 1 must hold.
    This results in gK = γ, and all other variables also grow at rate γ. Hence, it is possible
to obtain constant growth for all variables: a balanced growth path is technologically
feasible.

The nature of technological change
From the analysis in the previous section, it seems natural to ask whether the assumption
that the technological change is labor augmenting is relevant or not. First, what other
kinds of technological change can we think of? Let us write the economy’s resource
constraint, with all the possible types of technological progress that the literature talks
about:                                            ¡ t             ¢
                              ct + γi−t it = γzt F γK Kt , γnt nt
and we have:

- γi−t : Investment-specific technological change. You could think of this as the relative
     price of capital goods showing a long term decreasing trend, vis-à-vis consumption
     goods. In fact this has been measured in the data, and in the case of the US this
     factor accounts for 60% of growth (for details see Greenwood et al. (1997)).

- γzt : Neutral (or Hicks-neutral) technological change.
   t
- γK : Capital augmenting technological change.

- γnt : Labor augmenting technological change.

    The question is which ones of these γ’s (or which combinations of them) can be larger
than one on a balanced growth path. We can immediately see that if F is homogeneous
of degree one (if production technology exhibits constant returns to scale) then the γz is
redundant, since in that case we can rewrite:
                          ¡ t            ¢   £                           ¤
                     γzt F γK Kt , γnt nt = F (γz γK )t Kt , (γz γn )t nt .

   As for the admissible values of the other γ’s, we have the following result.

                                             134
Theorem 8.1 For a balanced growth path to hold, none of the shift factors γ (except γn )
can be larger than 1, unless F is a Cobb-Douglass function.

    Proof. In one of the directions, the proof requires an argument involving partial
differential equations which we shall not develop here. However, we will show that if F
is a Cobb-Douglass function then any of the γ can be larger than 1, without invalidating
a balanced growth path as a solution.
    If F is a Cobb-Douglass function, the resource constraint reads:
                                           ¡ t    ¢α ¡ t ¢1−α
                             ct + γi−t it = γK Kt     γ n nt  .                         (8.1)

Notice that we can re-define:                    α
                                                1−α
                                          γ
                                          bn ≡ γK γn
to rewrite the production function:
                           ¡ t     ¢α ¡ t ¢1−α      ¡ t ¢1−α
                            γK K t     γn n t  = Ktα γ
                                                     bn nt   .                          (8.2)

We will use this formulation later.
  Now consider the capital accumulation equation:

                                    Kt+1 = (1 − δ) Kt + it .

Dividing through by γit , we get

                                   Kt+1             Kt  it
                                    t+1 γi = (1 − δ) t + t .
                                   γi               γi  γi

We can define
                                      e t ≡ Kt , eit ≡ it .
                                      K
                                            γit        γit
               e t in (8.1) we obtain:
and, replacing K
                                            ³              ´α ¡            ¢1−α
                                                 t t e
                             ct + eit =         γK γi Kt          γnt nt
                            e t+1 γi = (1 − δ) K
                            K                  e t + eit .

    The model has been transformed into an equivalent system in which K    e t+1 , instead of
Kt+1 is the object of choice (more on this below). Notice that since F is Cobb-Douglass,
γ’s multiplying Ke t can in fact be written as labor-augmenting technological drift factors
(see (8.2)). Performing the transformation, the rate of efficiency labor growth is:
                                                 α     α
                                          γn γK1−α γi1−α ,

and we have a labor augmenting technological change which, as we have seen earlier,
supports balanced growth path.

                                                 135
8.2.2     Choosing growth
The next issue to address is whether an individual who inhabits an economy in which there
is some sort of exogenous technological progress, and in which the production technology
is such that sustained growth is feasible, will choose a growing output path or not.
    Initially, Solow overlooked this issue by assuming that capital accumulation rule was
determined by the policy rule
                                           it = syt ,
where the savings rate s ∈ [0, 1] was constant and exogenous. It is clear that such a rule
can be consistent with a balanced growth path. Then the underlying premise is that the
consumers’ preferences are such that they choose a growing path for output.
    However, this is too relevant an issue to be overlooked. What is the generality of
this result? Specifically, what are the conditions on preferences for constant growth to
obtain? Clearly, the answer is that not all types of preferences will work. We will restrict
our attention to the usual time-separable preference relations. Hence the problem faced
by a central planner will be of the form:
                                            (∞                    )
                                              X
                                  max ∞           β t u (ct , nt )                     (8.3)
                            {it , ct , Kt+1 , nt }t=0
                                                         t=0


                                                      ¡            ¢
                               s.t.        ct + it = F Kt , γ t nt
                                           Kt+1 = it + (1 − δ) Kt
                                           K0 given.

   For this type of preference relations, we have the following result:

Theorem 8.2 Balanced growth is possible as a solution to the central planner’s problem
(8.4) if and only if
                                     c1−σ v (1 − n) − 1
                         u (c, n) =                     ,
                                            1−σ
where time endowment is normalized to one as usual and v(·) is a function with leisure
as an argument.

   Proving the theorem is rather endeavored in one of the two directions of the double
implication, because the proof involves partial differential equations. Also notice we say
that balanced growth is a possible solution. The reason is that initial conditions also
have an impact on the resulting output growth. The initial state has to be such that
the resulting model dynamics (that may initially involve non-constant growth) eventually
lead the system to a balanced growth path (constant growth). Not any arbitrary initial
conditions will satisfy this.

Comments:

  1. v (1 − n) = constant fits the theorem assumptions; hence, non-valued leisure is
     consistent with balanced growth path.

                                                        136
  2. What happens if we introduce a “slight” modifications to u (c, n), and use a func-
     tional form like
                                          (c − c)1−σ − 1
                              u (c, n) =                 ?
                                              1−σ
     c can be interpreted as a minimum subsistence consumption level. When c gets
     large with respect to c, risk aversion decreases. Then for a low level of consumption
     c, this utility function representation of preferences will not be consistent with a
     balanced growth path; but, as c increases, the dynamics will tend towards balanced
     growth. This could be an explanation to observed growth behavior in the early
     stages of development of poor countries.

8.2.3    Transforming the model
Let us now describe the steps of solving a model for a balanced growth path.
  1) Assume that preferences are represented by the utility function
                                      c1−σ v (1 − n) − 1
                                                         .
                                             1−σ
  2) Take first order conditions of the central planner’s problem (8.4) described above
     using this preference representation.
  3) Next assume that there is balanced growth, and show that the implied system of
     equations can be satisfied.
  4) After solving for the growth rates transform the model into a stationary one.
   We will perform these steps for the case of labor-augmenting technology under con-
stant returns to scale. The original problem is
                                                  (∞                    )
                                                   X c1−σ v (1 − n) − 1
                                   max                 βt                       (8.4)
                        {it , ct , Kt+1 , nt }∞
                                              t=0
                                                   t=0
                                                            1−σ

                                                   µ        ¶
                                             t      Kt
                           s.t.   ct + it = γ nt F        ,1
                                                   γ t nt
                                  Kt+1 = it + (1 − δ) Kt
                                  K0 given.
   We know that the balanced growth solution to this Growth Model (8.5) has all vari-
ables growing at rate γ, except for labor. We define transformed variables by dividing
each original variable by its growth rate:
                                              ct
                                        b
                                        ct = t
                                              γ
                                        bit = it
                                              γt
                                       Kb t = Kt ,
                                              γt

                                          137
and thus obtain the transformed model:
                                             (∞                                 )
                                              X b    c 1−σ t(1−σ)
                                                          γ       v (1 − n) − 1
                               max ∞              βt
                   {it , bct , Kt+1 , nt }t=0 t=0
                    b          b                               1−σ

                                                                       Ã     !
                                          ³        ´               Kbtγ t
                                s.t.       ct + bit γ t = γ t nt F
                                           b                               ,1
                                                                    γ t nt
                                                       h                   i
                                          b t+1 γ t+1 = bit + (1 − δ) K
                                          K                             bt γt
                                          K0 given.

    Notice that we can write
      ∞
      X                                            ∞
                                                   X                               ∞
                 c1−σ γ t(1−σ) v (1 − n) − 1
                tb
                                                             1−σ
                                                             b
                                                             c     v (1 − n) − 1 X bt 1 − γ −t(1−σ)
            β                                  =         βbt                    +     β             ,
      t=0
                           1−σ                     t=0
                                                                     1−σ          t=0
                                                                                         1−σ

where βb = βγ (1−σ) . Then we can cancel out γ’s to get:
                                      (∞                             ∞
                                                                                          )
                                       X b     c1−σ
                                                    v (1 − n) − 1   X       1 − γ −t(1−σ)
                        max ∞              βbt                    +     βbt                             (8.5)
            {it , bct , Kt+1 , nt }t=0 t=0
             b          b                             1 − σ         t=0
                                                                               1−σ

                                                                   Ã        !
                                                                       bt
                                                                       K
                                       s.t.    ct + bit = nt F
                                               b                          ,1
                                                                       nt
                                               b t+1 γ = bit + (1 − δ) K
                                               K                       bt
                                               K0 given.

   Now we are back to the standard neoclassical growth model that we have been dealing
with before. The only differences are that there is a γ factor in the capital accumulation
equation, and the discount factor is modified.
   We need to check the conditions for this problem to be well defined. This requires
that βγ 1−σ < 1. Recall that γ > 1, and the usual assumption is 0 < β < 1. Then:

   1. If σ > 1, γ 1−σ < 1 so βγ 1−σ < 1 holds.

   2. If σ = 1 then βγ 1−σ = β < 1 holds.

   3. If 0 < σ < 1, then for some parameter values of γ and β, we may run into an
      ill-defined problem.

   Next we address the issue of the system behavior. If leisure is not valued and the
production technology                µ      ¶
                                       K               K
                           f (k) ≡ F     , 1 + (1 − δ)
                                       L               L

                                                         138
satisfies the Inada conditions (f (0) = 0, f 0 (·) > 0, f 00 (·) < 0, lim f 0 (·) = 0, lim f 0 (·) = ∞)
                                                                      k→∞             k→0
then global convergence to steady state obtains for the transformed model (8.6):

                                lim b    c, lim bit = bi, lim b
                                    ct = b                    kt = b
                                                                   k.
                                t→∞          t→∞          t→∞

    This is equivalent to saying that the original variables ct , it , and kt grow at rate γ
asymptotically.
    Therefore with the stated assumptions on preferences and on technology, the model
converges to a balanced growth path, in which all variables grow at rate γ. This rate
is exogenously determined; it is a parameter in the model. That is the reason why it is
called “exogenous” growth model.


8.3       Endogenous growth
The exogenous growth framework analyzed before has a serious shortfall: growth is not
truly a result in such model - it is an assumption. However, we have reasons (data) to
suspect that growth must be a rather more complex phenomenon than this long term
productivity shift γ, that we have treated as somehow intrinsic to economic activity.
In particular, rates of output growth have been very different across countries for long
periods; trying to explain this fact as merely the result of different γ’s is not a very
insightful approach. We would prefer our model to produce γ as a result. Therefore, we
look for endogenous growth models.
    But what if the countries that show smaller growth rates are still in transition, and
transition is slow? Could this be a plausible explanation of the persistent difference in
growth? At least locally, the rate of convergence can be found from

                                log y 0 − log y = λ (log y − log y) ,

where λ is the eigenvalue smaller than one in absolute value found when linearizing the
dynamics of the growth model (around the steady state). Recall it was the root to
a second degree polynomial. The closer λ is to 1 (in absolute value), the slower the
convergence. Notice that this equation can be rewritten to yield the growth regression:

                      log y 0 − log y = − (1 − λ) log y + (1 − λ) log y + α,

where − (1 − λ) is the β parameter in the growth regressions, log y shows up as log y0 ;
(1 − λ) is the γ, and log y is the residual z; finally α (usually called γ0 ) is the intercept
that shows up whenever a technological change drift is added.
    In calibrations with “reasonable” utility and production functions, λ tends to become
small in absolute value - hence not large enough to explain the difference in growth rates
of e.g. Korea and Chad. In general, the less curvature the return function shows, the
faster the convergence. The extreme special cases are:

   1. u linear ⇒ λ = 0 - immediate convergence.

   2. f linear ⇒ λ = 1 - no convergence.

                                                 139
   The more curvature in u, the less willing consumers are to see their consumption
pattern vary over time - and growth is a (persistent) variation. On the other hand, the
more curvature in f , the higher the marginal return on capital when the accumulated
stock is small; hence the more willing consumers are to put up with variation in their
consumption stream, since the reward is higher.


8.3.1      The AK model
Let us recall the usual assumptions on the production technology in the neoclassical
growth model: F was constant returns to scale, and also the “per capita” production
function f satisfied: f (0) = 0, f 0 (·) > 0, f 00 (·) < 0, lim f 0 (·) = ∞, and lim f 0 (·) = 0, with
                                                            x→0                 x→∞
the global dynamics as depicted in Figure 8.1 (with a “regular” utility function).



                       kt+1




                        k∗




                                                       k∗                  kt


                                    Figure 8.1: Global dynamics

   Long run growth is not feasible. Notice that whenever the capital stock k exceeds
the level k ∗ , then next period’s capital will decrease: k 0 < k. In order to allow long run
growth, we need the introduce at least some change to the production function: We must
dispose of the assumption that lim f 0 (·) = 0 . What we basically want is that f does not
                                     x→∞
cross the 45o line. Then lim f 0 (·) > 0 seems necessary for continuous growth to obtain.
                              x→∞
   If we have that lim f 0 (·) = 1 (that is, the production function is asymptotically
                       x→∞
parallel to the 45o line), then exponential growth is not feasible - only arithmetic growth
is. This means that we must have lim f 0 (·) > 1 for a growth rate to be sustainable over
                                    x→∞
time.
    The simplest way of achieving this is to assume the production technology to be
represented by a function of the form:

                                            f (k) = Ak

                                                 140
with A > 1. More generally, for any depreciation rate δ, we have that the return on
capital is

                          (1 − δ) k + f (k) = (1 − δ) k + Ak
                                            = (1 − δ + A) k
                                               e
                                            ≡ Ak,

so the requirement in fact is A > δ for exponential growth to be feasible (when δ < 1).
    The next question is whether the consumer will choose growth, and if so, how fast. We
will answer this question assuming a CES utility function (needed for balanced growth),
with non-valued leisure. The planner’s problem then is:
                                                    ½∞           1−σ ¾
                                                     P        t ct
                             U=       max                 β
                                  {ct , kt+1 }∞
                                              t=0   t=0       1−σ
                             s.t. ct + kt+1 = Akt ,

where σ > 0. The Euler Equation is

                                      c−σ
                                       t  = βc−σ
                                              t+1 A.


Now we have that the growth rate of consumption must satisfy:

                                      ct+1        1
                                           = (βA) σ .
                                       ct

    The growth rate of consumption is a function of all the parameters in the utility
function and the production function. Notice that this implies that the growth rate is
constant as from t = 0. There are no transitional dynamics in this model; the economy
is in the balanced growth path from the start. There will be long-run growth provided
that
                                                1
                                        (βA) σ > 1.                                 (8.6)

   This does not quite settle the problem, though: an issue remains to be addressed. If
the parameter values satisfy the condition for growth, is utility still bounded? We must
evaluate the optimal path using the utility function:

                                ∞
                                  " ·       ¸ #t 1−σ
                                X         1 1−σ  c0
                           U=      β (βA) σ          .
                              t=0
                                                1−σ

So the sufficient condition for boundedness is:
                                     ·       ¸
                                           1 1−σ
                                    β (βα) σ     < 1.                               (8.7)


   The two conditions (8.6) and (8.7) must simultaneously hold for us to obtain a bal-
anced growth path.

                                              141
Remark 8.3 (Distortionary taxes and growth) Notice that the competitive alloca-
tion in this problem equals the central planner’s (why?). Now suppose that the government
levies a distortionary tax on (per capita) capital income and uses the proceeds to finance
a lump-sum transfer. Then the consumer’s decentralized problem has the following budget
constraint:
                               ct + kt+1 = (1 − τk ) Rt kt + τt ,
while the government’s budget constraint requires that

                                           τk Rt kt = τt .

    This problem is a little more endeavored to solve due to the presence of the lump-sum
transfers τt . Notwithstanding, you should know that τk (the distortionary tax on capital
income) will affect the long run growth rate.

Remark 8.4 (Explanatory power) Let us now consider how realistic the assumptions
and the results of the model are:

∗ Assumptions The AK production function could be interpreted as a special case of
     the Cobb-Douglass function with α = 1 - then labor is not productive. However,
     this contradicts actual data, that shows that labor is a hugely significant component
     of factor input. Clearly, in practice labor is important. But this is not captured by
     the assumed production technology.
     We could imagine a model where labor becomes unproductive; e.g. assume that

                                    Ft (Kt , nt ) = AKtαt n1−α
                                                           t
                                                               t
                                                                 .

     Then if lim αt = 1, we have asymptotic linearity in capital. But this is unrealistic.
              t→∞

∗ Results The growth has become a function of underlying parameters in the economy,
    affecting preferences and production. Could the dispersion in cross-country growth
    rates be explained by differences in these parameters? Country i’s Euler Equation
    (with a distortionary tax on capital income) would be:
                                µ          ¶
                                    ct+1            £     ¡       ¢¤ 1
                                                   = βi Ai 1 − τki σi .
                                     ct        i


     But the problem with the AK model is that, if parameters are calibrated to mimic the
     data’s dispersion in growth rates, the simulation results in too much divergence in
     output level. The dispersion in 1960-1990 growth rates would result in a difference
     in output levels wider than the actual.

Remark 8.5 (Transitional dynamics) The AK model implies no transitional dynam-
ics. However, we tend to see transitional dynamics in the data (recall the conditional
convergence result in growth regressions).

                                                    142
8.3.2    Romer’s externality model
The intellectual precedent to this model is Arrow (1962). The basic idea is that there
are externalities to capital accumulation, so that individual savers do not realize the
full return on their investment. Each individual firm operates the following production
function:                       ¡        ¢               ρ
                              F K, L, K = AK α L1−α K ,
where K is the capital operated by the firm, and K is the aggregate capital stock in the
economy. We assume that ρ = 1 − α so that in fact a central planner faces an AK-model
decision problem. Notice that if we assumed that α + ρ > 1, then balanced growth path
would not be possible.
   The competitive equilibrium will involve a wage rate equal to:
                                                        1−α
                              wt = (1 − α) AKtα Lt−α K t      .

Let us assume that leisure is not valued and normalize the labor endowment Lt to one
in every t. Assume that there is a measure one of representative firms, so that the
equilibrium wage must satisfy
                                   wt = (1 − α) AK t .
    Notice that in this model, wage increases whenever there is growth, and the wage as
a fraction of total output is substantial. The rental rate, meanwhile, is given by:

                                        Rt = αA.

   The consumer’s decentralized Euler Equation will be (assuming CES utility function
and δ = 1):
                                   ct+1            1
                                        = (βRt+1 ) σ .
                                    ct
Substituting for the rental rate, we can see that the rate of change in consumption is
given by:
                                                   1
                                     gcCE = (βαA) σ .
It is clear that since a planner faces an AK model his chosen growth rate should be:
                                                   1
                                     gcCP = (βA) σ .

Then gcCP > gcCE : the competitive equilibrium implements a lower than optimal growth
rate, which is consistent with the presence of externalities to capital accumulation.

Remark 8.6 (Pros and cons of this model) The following advantages and disadvan-
tages of this model can be highlighted:

 + The model overcomes the “labor is irrelevant” shortfall of the AK model.
 − There is little evidence in support of a significant externality to capital accumulation.
   Notice that if we agreed for example that α = 1/3, then the externality effect would
   be immense.
 − The model leads to a large divergence in output levels, just as the AK model.

                                           143
8.3.3     Lucas’ human capital accumulation model
In the Lucas’ model, plain labor in the production function is replaced by human capital.
This can be accumulated, so the technology does not run into decreasing marginal returns.
For example, in the Cobb-Douglass case, we have:

                                 F (K, H) = AK α H 1−α .

There are two distinct capital accumulation equations:
                                       ¡       ¢
                              Ht+1 = 1 − δ H Ht + ItH
                                       ¡       ¢
                              Kt+1 = 1 − δ K Kt + ItK ,

and the resource constraint in the economy is:

                               ct + ItH + ItK = AKtα Ht1−α .

    Notice that, in fact, there are two assets: H and K. But there is no uncertainty;
hence one is redundant. The return on both assets must be equal.
    Unlike the previous model, in the current setup a competitive equilibrium does im-
plement the central planner’s solution (why can we say so?). Assuming a CES utility
function and a general production function F (·, ·), the first order conditions in the cen-
tral planner’s problem are:

                       ct : β t c−σ
                                 t  = λt
                                       £                         ¤
                     Kt+1 : λt = λt+1 1 − δ K + FK (Kt+1 , Ht+1 )
                                       £                         ¤
                     Ht+1 : λt = λt+1 1 − δ H + FH (Kt+1 , Ht+1 ) ,

which leads us to two equivalent instances of the Euler Equation:
                               µ ·             µ           ¶¸¶ 1
                      ct+1                       K t+1         σ
                           =    β 1 − δ K + FK         , 1                             (8.8)
                       ct                        Ht+1
                               µ ·             µ          ¶¸¶ 1
                      ct+1                       K t+1         σ
                             =  β 1 − δ H + FH         , 1       .                     (8.9)
                       ct                        Ht+1

   Notice that if the ratio Kt+1
                            Ht+1
                                 remains constant over time, this delivers balanced growth.
Let us denote xt ≡ KHt
                      t
                        . Then we have

                       1 − δ K + FK (xt , 1) = 1 − δ H + FH (xt , 1) .               (8.10)

But then the equilibrium in the asset market requires that xt = x be constant for all t
(assuming a single solution to (8.10)); and x will depend only on δ H , δ K , and parameters
of the production function F .

Example 8.7 Assume that δ H = δ K , and F (K, H) = AK α H 1−α . Then since RHS of
(8.8) must equal RHS of (8.9) we get:

                                  αAxα−1 = (1 − α) Axα

                                            144
                                           α    Kt
                                   ⇒x=        =    .
                                          1−α   Ht
   From t = 1 onwards, Kt = xHt . Then

                             AKtα Ht1−α = A (xHt )α Ht1−α
                                          e t
                                        = AH
                                          b t,
                                        = AK
      e ≡ Axα , and A
where A             b ≡ Ax1−α . In any case, this reduces to an AK model.

Remark 8.8 (Pros and cons of this approach) We can highlight the following ad-
vantages and disadvantages of this model:

+ Labor is treated seriously, and not resorting to “tricks” like externalities.
− The law of motion of human capital is too mechanistic:
                                       ¡      ¢
                              Ht+1 = 1 − δ H Ht + ItH .

     Arguably, knowledge might be bounded above at some point. This issue could be
     counter-argued by saying that Ht should be interpreted as general formation (such
     as on-the-job training, etcetera), and not narrowly as schooling.
− This model implies divergence of output levels; it is an AK model in essence.

8.3.4    Romer’s qualitative technological change
The model
Based on the Cobb-Douglas production function F (K, L) = AK α L1−α , this model seeks
to make A endogenous. One possible way of modelling this would be simply to make
firms choose the inputs knowing that this will affect A. However, if A is increasing in K
and L, this would lead to increasing returns, since for any λ > 1

                        A (λK, λL) (λK)α (λL)1−α > λAK α L1−α .

    An alternative approach would have A being the result of an external effect of firm’s
decisions. But the problem with this approach is that we want A to be somebody’s choice;
hence, an externality will not work.
    One way out of this dilemma is to drop the assumption of perfect competition in
the economy. In the model to be presented, A will represent “variety” in production
inputs. The larger A, the wider the range of available production (intermediate) goods.
Specifically, let capital and consumption goods in this economy be produced according
to the function                           Z At
                                        β
                                  yt = Lt      x1−β
                                                t   (i) di,
                                           0
where i is the type of intermediate goods, and xt (i) is the amount of good i used in
production at date t. Therefore, there is a measure At of different intermediate goods.
You may notice that the production function exhibits constant returns to scale.

                                           145
   The intermediate goods xt (i) are produced with capital goods using a linear technol-
ogy:                              Z       At
                                               ηxt (i) di = Kt ,
                                      0
i.e., η units of capital are required to produce 1 unit of intermediate good of type i, for
all i.
     The law of motion and resource constraint in this economy are the usual:
                                   Kt+1 = (1 − δ) Kt + It
                                   ct + It = yt .
    We will assume that an amount L1t of labor is supplied to the final goods production
sector at time t. In addition, we temporarily assume that At grows at rate γ (since growth
in At is actually endogenous):
                                       At+1 = γAt .
    Given this growth in A, is long run output growth feasible? The key issue to an-
swer this question is to determine the allocation of capital among the different types of
intermediate goods. Notice that this decision is of a static nature: the choice at t has
no (dynamic) consequences on the future periods’ state. So the production maximizing
problem is to:                         n R               o
                                            A
                                max Lβ1t 0 t x1−β
                                               t   (i) di
                                xt (i)
                                       R At
                                s.t. 0 ηxt (i) di = Kt .
   Since the objective function is concave, the optimal choice has xt (i) = xt for all i. This
outcome can be interpreted as a preference for “variety” - as much variety as possible is
chosen.
   Substituting the optimal solution in the constraint:
                                    Z At
                                         ηxt di = Kt
                                      0
                                               At xt η = Kt .                          (8.11)

Maximized production is:
                                                      Z At
                                   yt = L         β
                                                             x1−β
                                                              t   di
                                                         0
                                          = Lβ At x1−β
                                                   t   .                               (8.12)

Using (8.11) in (8.12),
                                                         µ         ¶1−β
                                                             Kt
                                 yt =          Lβ1t At
                                                             ηAt
                                        Lβ1t β 1−β
                                     = 1−β At Kt .
                                       η

    Clearly Aβt grows if At grows at rate γ. If we conjecture that Kt also grows at rate
γ, then the production function is linear in the growing terms. Therefore, the answer to

                                                  146
our question is “yes”: a balanced growth path is feasible; with Kt , yt and At growing at
rate γ.
   The next issue is how to determine γ, since we are dealing with an endogenous growth
model. We will make the following assumption on the motion equation for At :

                                    At+1 = At + L2t δAt ,

where L2t denotes labor effort in research and development, and L2t δ is the number of
new “blueprints” that are developed at time t, as a consequence of this R&D. This motion
equation resembles a learning by doing effect.

Exercise 8.9 Let the consumer have the standard CES preferences
                                              ∞
                                              X     c1−σ − 1
                                   U (c) =        βt t       .
                                              t=0
                                                      1−σ

Assume that leisure is not valued, and total time endowment is normalized to 1. Then
the amount of labor effort allocated to the production and to the R&D sectors must satisfy
the constraint:
                                       L1t + L2t = 1.
Solve the planning problem to obtain γ.

The decentralized problem
We will work with the decentralized problem. We assume that there is perfect competition
in the final output industry. Then a firm in that industry solves at time t:
                       ½ Z At                         Z At                 ¾
                          β       1−β
                 max L1t        xt (i) di − wt L1t −       qt (i) xt (i) di .
               xt (i), L1t    0                              0

Notice that the firm’s problem is a static one - wt and qt (i) are taken as given. Equilibrium
in the final goods market then requires that these are:
                                                  Z At
                                  wt =    βLβ−1
                                            1t           x1−β
                                                          t   (i) di
                                                     0
                              qt (i) = (1 − β) Lβ1t x−β
                                                     t (i) .                           (8.13)

    As for the intermediate goods industry, instead of perfect, we will assume that there
is monopolistic competition. There is only one firm per type i (a patent holder). Each
patent holder takes the demand function for its product as given. Notice that (8.13) is
just the inverse of this demand function. All other relevant prices are also taken as given
- in particular, the rental rate Rt paid for the capital that is rented to consumers. Then
the owner of patent i solves:
                                           ©                        ª
                            π (i) = max  i
                                             qt (i) xt (i) − Rt Kti
                                         Kt

                                      s.t. x (i) η = Kti ,                             (8.14)

                                               147
or equivalently, using (8.13) and (8.14),
                                  (                      µ         ¶1−β              )
                                                             Kti
                      π (i) = max         (1 − β) Lβ1t                    − Rt Kti       .
                                i
                               Kt                            η
The first order conditions for this problem are:
                                                 ¡ ¢−β
                              (1 − β)2 Lβ1t η β−1 Kti  = Rt .
    Observe that π (i) > 0 is admissible: the firm owns a patent, and obtains a rent from
it. However, this patent is not cost free. It is produced by “R&D firms”, who sell them
to intermediate goods producers. Let pPt denote the price of a patent at time t. Then
ideas producers solve:
                                    ©                       ª
                              max pPt (At+1 − At ) − wt L2t
                             At+1 , L2t

                                    s.t. At+1 = At + L2t δAt .
    We will assume that there is free entry in the ideas industry. Hence, there must be zero
profits from engaging in research and development. Notice that there is an externality
(sometimes called “standing on the shoulders of giants”). The reason is that the decision
involving the change in A, At+1 − At , affects production at t + j via the term δAt+j in the
equation of motion for At+j . But this effect is not realized by the firm who chooses the
change in A. This is the second reason why the planner’s and the decentralized problems
will have different solutions (the first one was the monopoly power of patent holders).
    The zero profit condition in the ideas industry requires that the price pPt be determined
from the first order condition
                                         pPt δAt = wt ,
where wt is the same as in the market for final goods.
   Once this is solved, if pC
                            t denotes the date-0 price of consumption (final) goods at t,
then we must have                          ∞
                                          X
                                  P C
                                 pt pt =       πs (i) pC
                                                       s.
                                                s=t+1

   As a result, nobody makes profits in equilibrium. The inventors of patents appropri-
ate the extraordinary rents that intermediate goods producers are going to obtain from
purchasing the rights on the invention.

Balanced growth path
Next we solve for a (symmetric) balanced growth path. We assume that all variables
grow at (the same, and) constant rates:
                                           Kt+1    =     γKt
                                           At+1    =     γAt
                                           ct+1    =     γct
                                            L1t    =     L1
                                            L2t    =     L2
                                           wt+1    =     γwt .

                                                  148
    With respect to the intermediate goods xt (i), we already know that an equal amount
of each type of them is produced each period: xt (i) = xt . In addition, we have that this
amount must satisfy:
                                      At ηxt = Kt .
Since both At and Kt (are assumed to) grow at rate γ, then xt must remain constant for
this equation to hold for every t. Hence,
                                                   Kt
                                     xt = x =           .
                                                   At η
   Then the remaining variables in the model must remain constant as well:

                                         Rt    =     R
                                      πt (i)   =     π
                                         pPt   =     pP
                                      qt (i)   =     q.

   It is up to you to solve this problem:

Exercise 8.10 Given the assumptions on consumer’s preferences as in exercise 8.9, write
down a system of n equations and n unknowns determining γ, L1 , L2 , etc. After that,
compare the growth rate in decentralized economy with the planner’s growth rate γ which
you have already found. Which one is higher?


8.4     Concluding Remarks
8.4.1    Dealing with convergence
One of the key elements of testing the explanatory power of both the exogenous and the
endogenous growth models is their implications regarding convergence of growth rates
across different countries. Recall the sixth of the Kaldor’s stylized facts: growth rates
are persistently different across countries. The models discussed above imply:

                   Exogenous growth            vs.          Endogenous growth

                        AK α L1−α                                AK
                                                       leads to divergence in
              does not lead to divergence.
                                                       relative income levels.

    Is it possible to produce divergence (or at least slow convergence) in the exogenous
growth framework through appropriate calibration? Using α = 1/3, the exogenous growth
model leads to too fast convergence. A “brilliant” solution is to set α = 2/3. The closer
to 1 α is set, the closer is the exogenous growth model to the AK model.
    However, we are not so free to play around with α. This parameter can be measured
from the data:
                                          KFK     KR
                                     α=        =      .
                                            y      y

                                            149
   A possible solution to this problem is to introduce a “mystery capital”, so that the
production function looks like:

                                  y = AK α Lβ S 1−α−β .

Or, alternatively introduce “human capital” as the third production factor, besides phys-
ical capital and labor:
                                 y = AK α Lβ H 1−α−β .


8.4.2    Dealing with returns on investment
We will explore the argument developed by Lucas to study the implications of the growth
model for cross-country differences in rates of return on investment. This will allow us
to study how actual data can be used to test implications of theoretical models.
    There is a significant assumption made by Lucas: suppose that it was possible to ex-
port US production technology (or “know how”) to other countries. Then the production
function, both domestically and abroad, would be

                                     y = AK α L1−α

with a different level of K and L in each country, but the same A, α, and capital depre-
ciation level δ. Then imagine a less developed country whose annual (per capita) output
is a seventh of the US output:
                                        yLDC    1
                                              = .                                 (8.15)
                                         yU S   7
  Using per capita variables (LU S = LLDC = 1), the marginal return on capital invest-
ment in the US is calculated as:

                                  RU S = αAKUα−1
                                              S − δ,


where the parameters α and δ take values of 1/3 and .1, respectively.
    The net rate of return on capital in the US can be estimated to be 6.5% per annum,
so the net rate is:
                                       RU S = 0.065.
Manipulating the Cobb-Douglas expression a little,

                                          AKUαS    yU S
                             αAKUα−1
                                  S = α         =α      .
                                           KU S    KU S

What is the return on capital in the less developed country?
                                            yLDC
                                 RLDC = α        − δ.
                                            KLDC

   We have that                                   µ          ¶α
                              yU S   AKUαS            KU S
                          7=       =   α
                                           =                      .                (8.16)
                             yLDC    AKLDC            KLDC

                                          150
So, from (8.15) and (8.16),
                                        yLDC            7−1 · yU S
                                                  =         1
                                        KLDC        7 − α · KU S
                                                      1−α    yU S
                                                  = 7 α ·         ,
                                                            KU S
and, using α = 1/3,
                                           yLDC        yU S
                                                = 72 ·      .
                                           KLDC        KU S
      We know from the data that
                                                   1 yU S
                                          .065 =    ·     − .1
                                                   3 KU S
                                                 yU S
                                             ⇒        = .495.
                                                 KU S
Therefore,
                                   yLDC            yU S
                                             = 49 ·     = 49 · .495
                                   KLDC            KU S
                                             = 24.255,
    which implies that the (net) rate of return on capital in the less developed country
should be:
                                        1
                               RLDC = · 24.255 − .1 = 7.985.
                                        3
    This is saying that if the US production techniques could be exactly replicated in less
developed countries, the net return on investment would be 798.5%. This result is striking
since if this is the case, then capital should be massively moving out of the US and into
less developed countries. Of course, this riddle might disappear if we let ALDC < AU S 1 .

Exercise 8.11 Assume that rates of return on capital are in fact the same in the US
and in LDC. Assume also that αU S = αLDC , δU S = δLDC , but AU S 6= ALDC . Under
these assumptions, what would be the difference in capital and total factor productivity
(A) between the US and LDC given that yyLDC
                                         US
                                             = 7?


8.5         References
Arrow K., “The economic implications of learning by doing,” Review of Economic Stud-
ies, 29(1962), 155-173.

Greenwood, Jeremy, Zvi Hercowitz and Per Krusell, “Long-Run Effects of Investment-
Specific Technological Change,” American Economic Review, 87(1997), 342-362.

Lucas, Robert E. Jr., “Why doesn’t capital flow from rich countries to poor countries?”
American Economic Review, 80(1990), (Volume 2, Papers and Proceedings of the Hun-
dred and Second Annual Meeting of the American Economic Association), 92-96.
  1
      The calculation also assumes away the differences in riskiness of investment, transaction costs, etc.

                                                      151
152
Chapter 9

Asset Pricing

The objective of this chapter is to introduce the asset pricing formula developed by
Lucas (1978). We will study the pricing of assets that is consistent with the neoclassical
growth model. More generally, this is the pricing methodology that is implied by the
“microfoundations” approach to macroeconomics.
   In the first section we go over basic Lucas’ model. He works out his formula using an
endowment economy inhabited by one agent. The reason for doing so is that in such an
environment the allocation problem is trivial; therefore, only the prices that support a
no-trade general equilibrium need to be solved for.
   In the second section, we study the application of the Lucas pricing formula by Mehra
and Prescott (1985). The authors utilized the tools developed by Lucas (1978) to de-
termine the asset prices that would prevail in an economy whose endowment process
mimicked the consumption pattern of the United States economy during the last century.
They then compared the theoretical results with real data. Their findings were striking
and are referred to as the “equity premium puzzle”.


9.1      Lucas’ Asset Pricing Formula
9.1.1     The Model
The representative agent in Lucas’ economy solves:
                                     (                     )
                                       X X ¡ ¢ ¡ ¡ ¢¢
                            max
                            t ∞    t
                                            π z t u ct z t
                             {ct (z )}t=0 , ∀z
                                                 t   zt
                             XX            ¡ ¢ ¡ ¢ X X ¡ t¢ ¡ t¢
                     s.t.                pt z t ct z t = pt z ωt z
                              t      t                     t   t
                              ¡ t ¢z ¡ t¢      t
                                                    z
                            ct z = ωt z   ∀t, z (market clearing).

The last condition is the feasibility condition. Notice that it implies that the allocation
problem is trivial, and only the prices pt (z t ) supporting this allocation as a (competitive)
equilibrium must be found. (Note: Lucas’ paper uses continuous probability.)
   The asset pricing problem in Lucas’ economy can be split into two parts:

   1. Find an expression for pt (z t ) in terms of the primitives.

                                                     153
   2. Apply the resulting formula pt (z t ) to price arbitrary assets.

9.1.2     Solving for prices of state-contingent claims
First order conditions from the consumer’s problem are:
                         ¡ ¢        ¡ ¢ ¡ ¡ ¢¢          ¡ ¢
                      ct z t : β t π z t u0 ct z t = λpt z t , ∀t, z t ,
where ct (z t ) = ωt (z t ) will need to hold, and λ will be endogenous. We can get rid of this
shadow value of income by normalizing p0 = 1:
                                        c0 : u0 (ω0 ) = λp0 ≡ λ.
Then
                                ¡ ¢         ¡ ¢ u0 [ωt (z t )]
                             pt z t = β t π z t                .                        (9.1)
                                                   u0 (ω0 )
   The Lucas Pricing Formula (9.1) shows that pt (z t ) is the price of a claim on con-
sumption goods at t that yields 1 unit if the realized state is z t , and 0 units otherwise.
   We can distinguish three separate components in the price of this claim:
   1. Time: pt (z t ) is decreasing in t (since β < 1).
   2. Likelihood : pt (z t ) is increasing in the probability of occurrence of z t .
   3. Marginal rate of substitution: pt (z t ) is increasing in the marginal rate of substitu-
      tion between goods at (t, z t ) and t = 0 (don’t forget that pt (z t ) is in fact a relative
      price).
   For the case of a concave utility index u (·) (which represents risk averse behavior),
the third effect will be high if the endowment of goods is low at (t, z t ) relative to t = 0.

9.1.3     Pricing assets
Any asset is in essence nothing but a sum of contingent claims. Therefore, pricing an
asset consists of summing up the prices of these rights to collect goods. You may already
(correctly) suspect that the key is to properly identify the claims to which the asset
entitles its owner. This involves specifying the time and state of nature in which these
rights get activated, and the quantities of the respective contingent claims.
    Consider a problem of pricing a one-period discount bond at (t, z t ). A one-period
discount bond is an asset that pays one unit at t + 1 for every possible realization z t+1
such that z t+1 = (zt+1 , z t ) for zt+1 ∈ Z. The date-0 price of such an asset is given by
                                  ¡ ¢     X       ¡          ¢
                             q0rf z t =       pt+1 zt+1 , z t · |{z}
                                                                 1 .
                                              |
                                           zt+1 ∈Z
                                                    {z       }
                                                                       quantity
                                                     price of claim

The date-t price is computed by
                                    ¡ t¢   q0rf (z t )
                             qtrf    z   =
                                            pt (z t )
                                              P
                                                    pt+1 (zt+1 , z t ) · 1
                                                zt+1 ∈Z
                                           =                                 .
                                                           pt (z t )

                                                     154
Using (9.1) to replace pt (z t ) and pt+1 (zt+1 , z t ):

                                               P                          u0 (ωt+1 (zt+1 , z t ))
                                      β t+1             π (zt+1 , z t )          u0 (ω0 )
                          ¡ ¢                 zt+1 ∈Z
                      qtrf z t =
                                                                u0 (ωt ( z t ))
                                                    β t π (z t )    u0 (ω0 )
                                         X        π (zt+1 , z ) u0 (ωt+1 (zt+1 , z t ))
                                                              t
                                 = β                                                     .
                                       zt+1 ∈Z
                                                     π (z t )            u0 (ωt ( z t ))

    Notice that three components identified before now have the following characteristics:

   1. Time: Only one period discounting must be considered between t and t + 1.

                   π (zt+1 , z t )
   2. Likelihood :                 is the conditional probability of the state zt+1 occurring at
                      π (z t )
      t + 1, given that z t is the history of realizations up to t.

   3. Marginal rate of substitution: The relevant rate is now between goods at (t, z t ) and
      (t + 1, z t+1 ) for each possible z t+1 of the form (zt+1 , z t ) with zt+1 ∈ Z.

    For more intuition, you could also think that qtrf (z t ) is the price that would result if
the economy, instead of starting at t = 0, was “rescheduled” to begin at date t (with the
stochastic process {zt }∞                            t
                          t=0 assumed to start at z ).
    Next we price a stock that pays out dividends according to the process dt (z t ) (a tree
yielding dt (z t ) units of fruit at date-state (t, z t )). The date-t price of this portfolio of
contingent claims is given by

                                        P
                                        ∞ P
                                                   ps (z s ) ds (z s )
                           ¡ ¢         s=t+1 z s
                     qttree z t =
                                                   pt (z t )
                                       ∞ X
                                       X           π (z s ) u0 (ωs (z s ))
                                  =                 β s−t                  d (z s )
                                                         t ) u0 (ω (z t )) s
                                    s=t+1 z s
                                                   π (z             t
                                       " ∞                             #
                                         X            u 0
                                                          (ω  s )
                                  = Et        β s−t 0               d .
                                                                t )) s
                                                                                                    (9.2)
                                        s=t+1
                                                   u  (ω   t (z

    Notice that the price includes the three components enumerated above, multiplied by
the quantity of goods to which the asset entitles in each date-state. This quantity is the
dividend process dt (z t ).
    We can also write the price of the tree in a recursive way. In the deterministic case,
this would mean that
                                          pt+1 + dt+1
                                     pt =             ,
                                              Rt+1
where Rt+1 is the (gross) interest rate between periods t and t + 1. This is recursive
because the formula for pt involves pt+1 .

                                                        155
    The uncertainty analogue to this expression is
        ¡ ¢         X     π (zt+1 , z t ) u0 (ωt+1 (zt+1 , z t )) ¡     ¡          ¢        ¡           ¢¢
  qttree z t =            β       t             0       t
                                                                    dt+1 zt+1 , z t + qt+1
                                                                                       tree
                                                                                             zt+1 , z t
                zt+1 ∈Z
                             π (z )           u (ωt (z ))
                      · 0                             ¸
                        u (ωt+1 ) ¡            tree
                                                    ¢
              = βEt                 dt+1 + qt+1 .                                                       (9.3)
                         u0 (ωt )
                                                                                        tree
    You can check that (9.3) corresponds to (9.2) by iteratively substituting for qt+1       (z 0 , z t )
and applying the law of iterated expectations. More importantly, notice that the price
includes the usual three components. What about quantities? This expression can be
interpreted as the price of a one-period tree that entitles to the dividend dt+1 (z 0 , z t ), plus
the amount of consumption goods at (t + 1, (zt+1 , z t )) needed to purchase the one-period
tree again next period.
    If you think about how this price fits into the endowment economy, then the amount
 tree
qt+1  (zt+1 , z t ) will have to be such that at date-state (t + 1, (z 0 , z t )) the consumer is
marginally indifferent between purchasing the tree again, or using the proceeds to buy
consumption goods.
    More generally, let us define a random variable mt+1 called the stochastic discount
factor or pricing kernel. Then, any random payoff Xt+1 can be priced by

                                         pt = Et [mt+1 Xt+1 ] .                                        (9.4)

This model is very general, and encompasses most of the asset pricing models. They
differ in the particular functional form of mt+1 . For example, in Lucas’ economy
                                             u0 (ωt+1 (zt+1 , z t ))
                                    mt+1 ≡ β                         .
                                                 u0 (ωt (z t ))
You can check that the prices of a one-period discount bond and a stock satisfy (9.4)
with mt+1 defined above. What is Xt+1 there?


9.2       The Equity Premium Puzzle
The equity premium is the name of an empirical regularity observed in the United States
asset markets during the last century. It consists of the difference between the returns
on stocks and on government bonds. Investors who had always maintained a portfolio
of shares with the same composition as Standard and Poor’s SP500 index would have
obtained, if patient enough, a return around 6% higher than those investing all their
money in government bonds. Since shares are riskier than bonds, this fact should be
explainable by the “representative agent’s” dislike for risk. In the usual CES utility
function, the degree of risk aversion (but notice that also the inter-temporal elasticity of
substitution!) is captured by the σ parameter.
    Mehra and Prescott’s exercise was intended to confront the theory with the observa-
tions. They computed statistics of the realization of (de-trended) aggregate consumption
in the United States, and used those statistics to generate an endowment process in their
model economy. That is, their endowment economy mimics the United States economy
for a single agent.

                                                   156
    Using parameters consistent with microeconomic behavior (drawn from microeco-
nomics, labor, other literature, and “introspection”), they calibrated their model to sim-
ulate the response of a representative agent to the assumed endowment process. Their
results were striking in that the model predicts an equity premium that is significantly
lower than the actual one observed in the United States. This incompatibility could be
interpreted as evidence against the neoclassical growth model (and related traditions)
in general, or as a signal that some of the assumptions used by Mehra and Prescott
(profusely utilized in the literature) need to be revised. It is a “puzzle” that the ac-
tual behavior differs so much from the predicted behavior, because we believe that the
microfoundations tradition is essentially correct and should provide accurate predictions.


9.2.1     The Model
The economy is modelled as in the Lucas (1978) paper. It is an endowment economy,
inhabited by a representative agent, and there are complete markets. The endowment
process is characterized by two parameters that were picked so that the implied statistics
matched aggregate US consumption data between 1889 and 1978.

Preferences
Preferences are modelled by the utility function
                                         "∞              #
                                          X
                                U = E0        β t u (ct ) ,
                                             t=0

where the utility index u is of the CES type:
                                               c1−σ − 1
                                     u (c) =            .
                                                 1−σ
   Preferences involve two parameters, β and σ, the values of which need to be calibrated
(and play an essential role in the “puzzle”). β measures the time impatience of agents.
What does σ measure? In a deterministic environment, σ −1 is the coefficient of intertem-
poral substitution. But in the uncertainty case, σ is also the coefficient of relative risk
aversion (CRRA):
                                     u00 (c)c    −σc−1−σ c
                         CRRA ≡ − 0           =−           = σ.
                                      u (c)        c−σ
    Therefore, the same parameter measures two (distinct) effects: the willingness to
substitute consumption over time, and also across states of nature. The higher σ, the
less variability the agent wants his consumption pattern to show, whatever the source of
this variability: deterministic growth, or stochastic deviation.

Endowment Process
Let yt denote income (in equilibrium, consumption) at time t. Let that yt evolve according
to
                                      yt+1 = xt+1 yt ,

                                             157
where xt+1 is a random variable that can take n values, xt+1 ∈ {λ1 , ..., λn }. The stochastic
process for xt+1 is modelled by a first-order Markov chain, where:
                                  φij ≡ Pr [xt+1 = λj |xt = λi ] .


Asset Prices
Applying the Lucas’ pricing formula to the tree that yields dt = yt at time t, we have
that                                 " ∞                      #
                                       X         u 0
                                                     (ys  )
                            pet = Et        β s−t 0         ds .
                                      s=t+1
                                                 u   (y t )
    We will solve for these prices using a recursive formulation. First, observe that, due to
the first-order Markov assumption on xt , the likelihood of changing states is invariant over
time; therefore, we can drop the time subscript and write pe as a function of the state.
Second, all information about the state of the economy at a given time can be summarized
by the level of the endowment process, yt , and the last realization of the shock, xt . So
we guess that prices will end up being a function of those two variables only. The reason
why yt is informative is that, since in equilibrium consumption is equal to endowment,
yt will provide the level of marginal utility against which future consumption streams
will be compared when setting prices. xt conveys information on the current state of the
Markov process (only xt is relevant, and not lagged values of xt , because of the first-order
assumptions). Then, the recursive formulation of the price of equity is:
                                          " ∞
                                            X          µ ¶σ ¯¯           #
                                                   s−t  yt     ¯
                        pe (xt , yt ) = E        β         y s ¯ xt , y t .
                                           s=t+1
                                                        ys     ¯

(Notice that the time subscript has been dropped from the expectation operator due to
the Markov first-order assumption.)
   Let us approach the solution recursively. For each state xi , i = 1, ..., n, this price (at
any date t) is given by:
                              Xn      µ     ¶σ
                    e                    y     £                 ¤
                   pi (y) = β     φij            yλj + pej (yλj )  ∀y, ∀i,
                              j=1
                                        yλj

where pej (yλj ) will be the price of equity next period if the realized state is j when
consumption (endowment) growth will be xt+1 = λj .
   We guess a linear solution to this functional equation:
                                           pei (y) = pei y.
This yields a system of equations, with the unknowns being the coefficients pei :
                                         n
                                         X                £            ¤
                            pei    = β         φij (λj )−σ λj + pej λj
                                         j=1
                                         Xn
                                                           £       ¤
                                   = β         φij (λj )1−σ 1 + pej .
                                         j=1


                                                 158
This equation relating pei to the (weighted) summation of the pej needs to hold for all i,
so we have a linear system of n equations and n unknowns.
   Similarly, the price of a risk-free asset paying off one unit in every state is given by
                                                        n
                                                        X
                                       prf
                                        i (y) = β              φij λ−σ
                                                                    j · 1.
                                                         j=1

Notice that the level of the endowment y does not enter this formula, whereas it did enter
the formula for equity prices.

Returns on Assets
Given the prices, we can compute the returns that an investor would receive by purchasing
them. This will be a random variable induced by the randomness in prices and (in the
case of equity) by the variability of the endowment process also. The (net) return realized
at state j by an investor who purchased equity in state i is given by:
                                           ¡       ¢
                                     e
                                            1 + pej λj
                                    ri j =             − 1.
                                               pei
   To understand where this formula comes from, just multiply through by y :
             ¡       ¢
              1 + pej λj y     λj y + pej λj y − pei y   dt+1, j + pt+1, j − pt, i
                  e
                           −1=            e
                                                       ≡
                 pi y                  pi y                        pt, i

The amount dt+1 + pt+1 is the payoff from the tree next period (if the state is j). By
subtracting the investment size pt, i , the numerator yields the net result received by the
investor. Dividing by the invested amount gives the (net) rate of return.
   The conditional expected return is
                                                      n
                                               £ e¤ X
                                       rie = Ei rij =        e
                                                        φij rij ,
                                                               j=1

and the unconditional expected return is
                                                 n
                                                 X                n
                                                                  X          n
                                                                             X
                              e
                          r       = E [rie ] =         πi rie =         πi              e
                                                                                   φij rij .
                                                 i=1              i=1        j=1

    re is not a random variable. It is an expectation taken with respect to the invariant
(long run) distribution πi of the Markov process. Recall that this is the probability vector
that satisfies:                              
                                           π1
                                             
                                   Π =  ...  = Φ0 Π.
                                           πn
    In the model, pet is the price of equity, that is, of the “market portfolio”. It is the price
of contingent claims on the whole product of the economy at t. It should be interpreted
as the value of the portfolio of claims on all possible productive investments. The closest

                                                        159
measure that we have of such a portfolio is the stock market, where shares of companies
involved in almost all productive activities are traded. Therefore, re will be compared to
actual, long run return on equity taken from the US data.
   The equity premium will be given by re minus the long run return on government
bonds (proxy for risk-free assets). In the model, (net) return on the risk-free assets is
given by:
                                              1
                                      rirf = rf − 1.
                                             pi
This is a random variable. The long run return is:
                                                     n
                                                     X
                                        r   rf
                                                 =         πi rirf .
                                                     i=1

   The US data shows the following value of the equity premium:

                                         re − rrf ≈ 6%,

where re is the average return on the S&P500 from 1889 to 1978, and rrf is the average
yield on government bonds throughout that period.

9.2.2     Calibration
Mehra and Prescott calibrate the Markov process assuming that there are two states:
n = 2. The values of possible endowment growth rates are:

                                       λ1 = 1 + µ + δ
                                       λ2 = 1 + µ − δ,

where µ is the average growth rate ct+1ct−ct . Its value was chosen to be µ = .018, to match
that of aggregate consumption growth in the US in the period under study. δ is the
variation in the growth rate.
    The transition matrix was assumed symmetric, so that the probability of changing
state are the same at each state:
                                     µ                    ¶
                                             φ      1−φ
                                 Φ=                         .
                                          1−φ         φ

   Then δ and φ are picked so as to match:

   • the standard deviation of ct+1ct−ct , equal to .036

   • the first-order serial correlation of ct+1ct−ct , equal to -.14.

The resulting parameter values are: δ = .036, and φ = .43
    The remaining parameters are β and σ, which represent preferences. A priori, by
introspection economists believe that β must lie in the interval (0, 1). With respect to σ,
Mehra and Prescott cite several different studies and opinions on its likely values. Most
micro literature suggests that σ must be approximately equal to 1 (this is the logarithmic

                                                     160
utility case). However, some economists also believe that it could take values as high as
2 or even 4. Certainly, there seems to be consensus that σ has to be lower than 10.
    Then instead of picking values for β and σ, Mehra and Prescott plotted the level of
equity premium that the model would predict for different, reasonable combinations of
values. Figure 9.1 shows approximately what they have obtained (it is a reproduction of
Figure 4 of the original paper).

                            2
                re−rrf, %




                            1




                            0
                             0    1                2       3            4
                                              rf
                                             r ,%

            Figure 9.1: Set of admissible equity premia and risk-free returns

    The model can only produce the equity premium observed in actual data at the
expense of a very high risk-free interest rate, or highly unreasonable parameter values
(such as β > 1; how do you feel about your own β?). When compared to actual data,
the risk premium is too low in the model, and the risk-free rate too high. In fact, these
are two puzzles.


9.3     Suggested Solutions to the Puzzle
There is one “solution” that consists of solving for parameter values that will yield the
same equity premium and risk free rate as the data. You may realize that by fixing one of
the preference parameters, the other can be solved for these values. An example is σ ≈ 15,
and β ≈ 1.08. Are these values reasonable? What can you say from introspection? Is
the total sum of instantaneous utility values bounded for these parameters?
   We will briefly discuss other solutions that have been proposed in the literature:

  1. Epstein - Zin preferences. One of the issues that seem to be crucial in the puzzle is
     that the CES utility function rigidly links the time structure of preferences and the
     aversion for risk. Both are measured by (functions of) the same parameter σ. In
     some sense, this is consistent with the way the risk is modelled in expected utility
     framework: remember that uncertainty is just the expansion of the decision making

                                           161
       scenario to a multiplicity of “states of nature”. Total utility is just the expected
       value of optimal decision making in each of these states. You may notice there is no
       difference between “time” and “states of nature”. “Time” is just another subindex
       to identify states of the world.
       However, people seem to regard time and uncertainty as essentially different phe-
       nomena. It is natural then to seek a representation of preferences that can treat
       these two components of reality separately. This has been addressed by Epstein
       and Zin (1990), who axiomatically worked on non-expected utility and came up
       with the following (non-expected) utility function representation for a preference
       relation that considers time and states of nature as more than just two indices of
       the state of the world:
                                         ·                                    ¸ 1
                                                       ¡     £       ¤¢ 1−ρ    1−ρ
                                  Ut =       c1−ρ
                                              t   +β             1−σ
                                                           Et Ut+1     1−σ           ,

       where ρ measures inter-temporal elasticity of substitution, and σ captures risk aver-
       sion1 . Notice that if ρ = σ, then this formula reduces to
                                                        £ 1−ρ ¤
                                     Ut1−ρ = c1−ρ
                                              t   + βEt Ut+1    .

       If there is no uncertainty, then the expectation operator is redundant, and we are
       back to the CES function.
       This proposed solution is able to account for the risk-free rate puzzle. However, to
       match the equity premium it still requires an unreasonably high σ.

   2. Habit Persistence. Suppose that each instant’s utility value depends not only on
      current, but also on past consumption amounts (people might be reluctant to see
      their consumption fall from one period to the other):
                                        "∞                      #
                                          X
                                 U = Et       β t u (ct , ct−1 ) .
                                                   t=0

       For example,                            "∞                          #
                                                X       (c t − λct−1 ) 1−σ
                                    U = Et           βt                      .
                                                 t=0
                                                              1 − σ

       This preference representation can solve the risk-free rate puzzle with reasonable
       parameter values. A related version of this type of utility function is that where
       utility depends on external effects (people might be happy if others around them
       enjoy high levels of consumption... or quite the opposite!). A possible utility index
       showing those characteristics could be:

                                                             c1−σ
                                       u (ct , ct , ct−1 ) = t cγt cλt−1 .
                                                            1−σ
   1
    Note that it is incorrect to speak about risk aversion in the dynamic context: it measures attitude of
the agent to static gambles. Similarly, elasticity of intertemporal substitution is not well-defined under
uncertainty.

                                                   162
   In this example, a high value of γ can produce an equity premium value close to
   that in the data, with a reasonable, low σ. The cλt−1 component in preferences can
   be used to solve the risk-free puzzle. However, in spite of its ability to solve both
   puzzles with reasonable parameter values, this preference representation has the
   shortfall that it generates too variable non-stationary returns: rirf is too variable
   compared to actual data, even though rrf may be accurately explained.

3. Peso Problem. Suppose everybody believed that with some small probability there
   could be a huge disaster (a nuclear war, say). This would be accounted for in prices
   (and hence, returns). Such a factor might explain the equity premium.

4. Incomplete Markets. A key assumption in the Mehra and Prescott model is that
   there is a representative agent whose consumption equals aggregate consumption.
   This can be generalized to a numerous population if we assume that all individuals
   are perfectly insured - the maximum variability their consumption can show is
   aggregate variability. However, it is not true that every person’s consumption has
   exactly the same variability as aggregate consumption. Individuals’ productivity
   could also be subject shocks by itself (for instance, becoming handicapped after an
   accident).
   Such a mismatch would imply that trying to explain the puzzles by a model based
   on a representative agent could not be successful. If markets are incomplete, equity
   holding decisions are taken by individuals who suffer “idiosyncratic” stochastic
   shocks that may differ from one another, and due to the incompleteness, consumers
   are not able to insure themselves against this idiosyncratic risk. Return differentials
   between risky and risk-free assets then must lure into equity individuals whose
   consumption variability is larger than the aggregate.

5. Transaction Costs. Some authors have tried to explain the high risk premium as the
   consequence of high transaction costs to buy shares. However, this needs unrealistic
   cost levels to match the data.

6. Production. Mehra and Prescott’s model is an endowment economy. Could the
   introduction of production into the model affect its results? The answer is no: it is
   consumption that we are interested in; it does not really matter how consumption
   is provided for. This approach is not really relevant.

7. Leverage. In Mehra and Prescott’s model, equity is the price of the “tree” that yields
   the whole economy’s production. However, actual equity does not exactly give its
   owner rights to the whole product of a company. Other parties have rights over a
   company’s economic surplus, that come before shareholders. Creditors’ claims have
   priority in case of bankruptcy.
   Therefore, actual share dividends are more risky than consumption. There are
   “legal” risks involved in investing in shares, that are not reflected in Mehra and
   Prescott’s formulation. Financial profession tends to believe in this explanation
   more than economists.

                                         163
9.4     References
Epstein, Larry and Stanley Zin, “First-order risk aversion and the equity premium puz-
zle,” Journal of Monetary Economics, 26(1990), 387-407.

Kocherlakota, Narayana, “The Equity Premium: It’s Still a Puzzle,” Journal of Eco-
nomic Literature, 34(1996), 42-71.

Lucas, Robert E. Jr., “Asset Prices in an Exchange Economy,” Econometrica, 46(1978),
1429-45.

Mehra, Rajnish and Edward C. Prescott, “The Equity Premium: A Puzzle,” Journal of
Monetary Economics, 15(1985), 145-61.




                                         164
Chapter 10

Economic policy

In this chapter we will study the effects of financing a given stream of government con-
sumption. We will focus on fiscal policy, and in particular on the aspects related to
funding an arbitrary sequence of government expenditure.
    The government’s expenditure plan will be treated as a given, and the analysis will
focus on financing such a plan under a general equilibrium framework. Given a sequence
{gt }∞
     t=0 of government expenditures, what can our microfoundations approach to macroe-
conomics tell us about the best way to provide funding for it?
    In particular, we will examine the following two questions:

  1. Q: If it is “technologically” possible to implement lump-sum taxation, does the
     timing of these taxes matter? If so, how?
     A: The Ricardian equivalence tells us that timing of lump-sum taxes does not mat-
     ter. This holds unconditionally in the dynastic model, but in the overlapping-
     generations setup it depends on preferences.

  2. Q: If lump-sum taxes are not enforceable, what kinds of distortionary taxes are the
     best? What can we say about timing of taxation in this case?
     A: The answer to this issue is much less straightforward than the previous one.
     The most widely mentioned distortionary taxes in the literature are levied on factor
     remunerations. We will analyze the case of proportional taxes on labor income (τt ),
     and on capital income (θt ).
     A sequence of proportional taxes {τt , θt }∞t=0 has to be chosen so as to optimize
     some measure of welfare (i.e., to pick the best allocation for some given ranking of
     outcomes). But, besides the issue of how to properly assess welfare, an important
     issue arising is that of the “time-consistency” of a proposed taxing sequence (the
     literature on this topic, as so many others, was originated by Prescott).
     Usually, models predict that the best distortionary taxing policy is to fully tax
     initial capital. Intuitively, since capital that has been invested is a “sunk” cost
     and cannot escape the taxing, this is the least distortionary tax, provided that the
     government could credibly commit to implement this tax only once. However, in
     the usual stationary model, at t = 1 the government’s problem is identical to that
     at t = 0 (only the initial capital and maybe the history of shocks will differ). Hence,
     whatever was optimal at t = 0 will again be optimal at t = 1. So a promise on the

                                           165
     part of the government fully tax capital at t = 0 only and never again could not be
     rationally believed - we say that it would not be time-consistent.


10.1      Ricardian equivalence
We will analyze the welfare effects of timing in lump-sum taxation by adding the presence
of a government to our usual macro model. This presence takes the form of a given
expenditure sequence {gt }∞
                          t=0 and an ability to levy taxes on the consumer’s income. We
begin with the dynastic model, and then analyze the overlapping-generations setup.
   In both cases, what we are interested in is finding the sequence of debt {Bt }∞
                                                                                 t=0 (one-
period loans from the private sector to the government) and lump-sum taxes {τt }∞ t=0 such
that the following budget constraint is satisfied at every t:
                                      gt + Bt−1 = qt Bt + τt , ∀t.                               (10.1)
   Equation (10.1) requires that sources and uses of funds be equalized in every period.
Funds are used to finance expenditures gt , and to repay Bt−1 (bonds issued at t − 1 that
must be redeemed at t). Sources are lump-sum tax collection τt and new government
borrowing Bt . qt is the price of these bonds - the amount of “money” (in this case,
notice that the numeraire is gt , which will turn out to be consumption goods) that the
government gets for each unit of bonds Bt issued. This price is just the inverse of the
(gross) return on these bonds. We will assume that the initial bond position is null:
B−1 = 0.

10.1.1     Dynastic model
Preferences will be assumed strongly monotone so that consumers will exhaust their
budget constraints at every period. Consumption goods are provided by an exogenous,
deterministic endowment process. The problem will be formulated sequentially; since
there is one state of the world for each t, just one asset per period is enough for complete
markets to obtain. In addition to government bonds, agents will be allowed to hold
positions in one-period loans; i.e., they will be able to borrow or lend for one period at
each t.
   We write down the consumer’s sequential budget constraint in the dynastic economy:
                            ct + qt Bt + lt = ωt + Bt−1 + lt−1 Rt − τt ,
where lt denotes the net borrowing/lending position at the end of period t; ωt is the
exogenously given endowment of consumption goods at t.
    We assume that a no-Ponzi-game condition holds. Then, using equivalence of sequen-
tial and date-0 formulations, we may consolidate the budget constraint to
                   ∞
                   X                ∞
                                    X               ∞
                                                    X               ∞
                                                                    X
                          pt ct =         pt ωt −         pt τt +         (pt+1 − pt qt ) Bt .
                    t=0             t=0             t=0             t=0

pt is date-0 price of a unit of consumption good at t. We can normalize p0 = 1, and we
also have that
                                        pt
                                            ≡ Rt+1 .
                                       pt+1

                                                      166
   In equilibrium, government and private debt must yield the same rate of return, or
otherwise asset markets would not clear:
                                            1
                                      qt =      .
                                           Rt+1
This implies that
                                                pt+1 − pt qt = 0.
There is only one state of the world (this is a deterministic model), but there are two
assets. So, one of them must be redundant.
   Replacing in the consumer’s budget constraint, we obtain
                                      ∞
                                      X                ∞
                                                       X                ∞
                                                                        X
                                            pt ct =          p t ωt +          pt τt .
                                      t=0              t=0              t=0

The government’s consolidated budget reads
                                              ∞
                                              X                ∞
                                                               X
                                                    pt gt =          pt τt .
                                              t=0              t=0

But then if we substituted this in the consumer’s budget constraint, we would realize
that in fact what is relevant for the decision making agent is not the taxing stream, but
the expenditure stream {gt }∞t=0 :
                                      ∞
                                      X                ∞
                                                       X                ∞
                                                                        X
                                            p t ct =         p t ωt +          pt gt .    (10.2)
                                      t=0              t=0              t=0

   Equation (10.2) is the “Ricardian Equivalence”: the timing of taxes is not relevant.
For a more formal statement of this equivalence, we first need to define the competitive
equilibrium in this economy:
Definition 10.1 A competitive equilibrium is a sequence {pt , ct , (gt ) , Bt , qt , rt , τt }∞
                                                                                              t=0
such that:
  1. Consumers’ utility is maximized, subject to their budget constraint.
  2. The government’s budget constraint is satisfied.
  3. Markets clear. In the case of an endowment economy, this condition requires that
     ct + gt = ωt . In the case of a production economy, it requires that ct + Kt+1 + gt =
     F (Kt , nt )1 .
 (4. Firms maximize profits - in the case of a production economy.)
   Notice that in naming the sequence {pt , ct , (gt ) , Bt , qt , rt , τt }∞
                                                                            t=0 , we have written
the government’s expenditure stream gt in parentheses. The reason is that in fact this is
given, and as such is not a decision variable that should be part of the equilibrium. It
could be treated as a parameter in the problem (for example, in an endowment economy
the endowment could be redefined as net of government expenditures).
   Notwithstanding the way government expenditures are presented in the definition,
equipped with a competitive equilibrium we are now ready to state the following:
  1
      F (Kt , nt ) is assumed to incorporate depreciation of capital.

                                                         167
Theorem 10.2 (Ricardian equivalence in a dynastic            n      model) Let theo sequence
                                                                                                ∞
{pt , ct , gt , Bt , qt , rt , τt } ∞                                        bt , qt , rt , τbt
                                      be an equilibrium. Then pt , ct , gt , B                    is also
                               t=0
                                                                                              t=0
an equilibrium if
                                                  ∞
                                                  X                ∞
                                                                   X
                                                        pt τbt =         pt τt
                                                  t=0              t=0
                     n        o∞
and the sequence         bt
                         B           is picked to satisfy the government’s budget constraint:
                              t=0

                                    bt qt − B
                                    B       bt−1 + τbt = Bt qt − Bt−1 + τt .

   Proof. The proof of this theorem is immediate from equation (10.2). The new tax-
borrowing mix chosen by the government does not alter the actual budget constraint faced
by the consumer. And since his maximization problem remains completely unaltered, the
optimizing choices remain the same.


10.1.2       Overlapping generations
The overlapping-generations setup seems more suitable to highlight the inter-generational
transfer aspects that may be involved when government picks a tax-borrowing mix to
finance expenditures. Changes in timing will alter the budget constraints faced by con-
sumers if different generations are involved in the change. The actual effect of this on
present and future generations’ well-being will depend on the extent to which the current
generation values the welfare of its offspring.
    Hence, a limited version of the Ricardian equivalence result holds in this case. In
order to analyze it, we will have to make use of a competitive equilibrium. In this case,
it will take the form of a sequence

                     {ct (t), ct (t + 1), gt , lt , Bt , τt (t), τt (t + 1), rt , qt }∞
                                                                                      t=0 ,


such that the conditions for it to be an equilibrium are satisfied. Then we can state the
following:

Theorem 10.3 (Ricardian equivalence in an overlapping-generations model) Let
                                                                                  ∞
the sequence
      n       {ct (t), ct (t + 1), gt , lt , Bt , τt (t), τt (t + 1),  o∞rt , qt }t=0 be an equilibrium. Then
                                    bt , τbt (t), τbt (t + 1), rt , qt
so is ct (t), ct (t + 1), gt , lt , B                                       , where
                                                                                 t=0

                                               τt0 (t + 1)            τt (t + 1)
                                   τt0 (t) +               = τt (t) +            , ∀t
                                                    rt+1                  rt+1

and
            qt Bt0 − Bt−1
                      0
                          + τt0 (t) + τt−1
                                       0
                                           (t) = qt Bt − Bt−1 + τt (t) + τt−1 (t) = gt , ∀t.

   Proof. You may notice that the theorem states the equivalence for the case where the
present value of taxation is not changed for any generation. The argument, therefore, will

                                                            168
                    c (t+1), ω (t+1)
                      t          t




                 ωt(t+1) −
                 τ (t+1)
                  t



                  c∗t (t+1)
                                                                          Slope −rt+1

                 ωt(t+1) −
                 τt′(t+1)

                                                    ∗
                                 ωt(t) − τt(t)     ct (t)    ω (t) − τ ′(t)             c (t), ω (t)
                                                              t       t                  t      t



 Figure 10.1: Generation t’s budget constraint under different tax-borrowing schemes

be of the same nature as the dynastic case. First recall that the consumer’s sequential
budget constraints are

                                       ct (t) + qt Bt + lt = ωt (t) − τt (t)
                              ct (t + 1) = Bt + rt+1 lt + ωt (t + 1) − τt (t + 1).

    Substituting the suggested alternative tax-borrowing scheme, it is easy to see that
each generation’s budget set remains unaltered. Then so are the agents’ choices. Figure
10.1 illustrates that the change in taxes implies no alteration to the actual budget con-
straint. The point c∗ will be chosen, regardless of whether the taxes are (τt (t), τt (t + 1))
or (τt0 (t), τt0 (t + 1)). The slope of the budget line is −rt+1 .
    Next, let us suppose that the old at t care about the utility enjoyed by the young at
t. And let government collect a given amount of taxes, choosing between taxing young
at 0 or old at 0 (we could equally well take any generations t and t + 1). Will the choice
of taxation have an impact in total welfare?
    We assumed that the utility of the old at 0 is a function of the utility of their offspring:

                                          u−1 [c−1 (0), u0 (c0 (0), c0 (1))] .

Government’s budget constraint requires that:

                                                 τ−1 (0) + τ0 (0) = g0 .

The private budgets for generations −1 and 0 are:

                                         c−1 (0) = ω−1 (0) − τ−1 (0) − b−1
                                     l0 + c0 (0) = ω0 (0) − τ0 (0) + b−1
                                          c0 (1) = r1 l0 + ω0 (1),

                                                            169
where b−1 ≥ 0 is a bequest that the old leave to their descendants, and r1 is the return
on savings between periods t = 0 and t = 1.
   The old at t = 0 solve:

            max u−1 [ω−1 (0) − τ−1 (0) − b−1 , u0 (ω0 (0) − τ0 (0) + b−1 , ω0 (1))]
              b−1

                                                     s.t. b−1 ≥ 0.

(We have used the fact that lt = 0 must prevail in equilibrium in an endowment economy.)

                          c0(0), ω0(0)




                      ∗
                     c0(0)

                      b
                          −1

                    ω0(0) −
                     τ0(0)                                                           u−1




                                                                                     c−1(0), ω−1(0)
                                           c∗−1(0)          ω−1(0) − τ−1(0) ω−1(0)
                                                      b−1



                                   Figure 10.2: Inter-generational trade-off

    Figure 10.2 shows the trade-off faced by the government. The slope of the straight
line is −1, reflecting that every unit of extra consumption given to the young must be
subtracted from the old. The point c∗−1 (0) is the optimizing choice of the old; it implies
a certain bequest b−1 ≥ 0. The government can only induce a consumption choice with
b−1 ≥ 0; therefore, all points to the right of ω−1 (0) are not feasible. If the government
chooses any taxation between τ−1 (0) = 0 and τ−1 (0) = ω−1 (0) − c∗−1 (0), then in fact
nothing changes and the old “correct” the “bad” choice of the government through the
appropriate choice of b−1 . However, if the government chooses a taxation mix to the left
of c∗−1 (0), then the solution to the bequest level becomes corner.
    Summarizing, changes in taxation timing will yield changes in the consumption allo-
cation (and, as a result, in welfare) whenever bequest constraints bind. Otherwise, they
will not.


10.2      Optimal distortionary taxes
Next we address the second issue raised in the introduction of this chapter - the issue
of optimal distortionary taxation. We will use the standard neoclassical growth model
in its dynastic version, and with endogenous labor supply (valued leisure). We will

                                                             170
take as given a (constant) sequence of government expenditure {gt }∞
                                                                   t=0 , with gt = g, ∀t.
Lump-sum taxation will not be available, and the government will levy taxes on factor
remunerations: capital and/or labor income. The government will choose the optimal
mix so as to maximize the representative agent’s utility.

10.2.1        Taxation smoothing
A question we would like to answer in this section is what a time pattern of optimal taxes
on labor would look like. We will start with a standard infinite-horizon maximization
problem for consumer:
                                                           ∞
                                                           X
                                           max                   β t u (ct , 1 − lt )
                                      {ct ,lt ,bt+1 }∞
                                                     t=0
                                                           t=0
                                 s.t. ct + qt bt+1 = wt lt (1 − τt ) + bt , ∀t,
where bt is government bond holdings at time t, qt is the price of a one-period discount
bond at time t, ct and lt are consumption and labor effort at time t respectively, and τt
is the tax on labor income. To simplify the problem, let us assume that production uses
only labor, and production function is linear in labor:
                                                      F (l) = l.
Then, in a competitive equilibrium the wage rate will be wt = 1, ∀t. Assuming that
{gt }∞
     t=0 is a sequence of public spending, government budget constraint is

                                         qt bt+1 + τt lt = gt + bt , ∀t.                                   (10.3)
Notice that we have built into government’s budget constraint two equilibrium assump-
tions: first, the equilibrium wage rate wt = 1, and second, the market clearing condition
for bond market (what households are willing to lend is what government is willing to
borrow at the going interest rate).
    Suppose that private sector’s problem has “sufficient strict concavity” so that the
solution to the private sector problem can be characterized by first-order conditions. The
first-order conditions of the private sector are:
                          uc (lt − gt , 1 − lt ) (1 − τt ) = u1−l (lt − gt , 1 − lt )                      (10.4)
                          qt uc (lt − gt , 1 − lt ) = βuc (lt+1 − gt+1 , 1 − lt+1 ) ,                      (10.5)
where equation (10.4) represents consumption-leisure tradeoff, and equation (10.5) repre-
sents consumption-savings tradeoff. Notice that both equations incorporate consumption
goods market clearing condition: ct + gt = F (lt ) ≡ lt .
    Now, we can combine (10.3), (10.4), and (10.5) into one expression that does not
involve τt or qt at all2 :
                                                                 "                              −gt+1 ,1−lt+1 ) #
                                                                      gt + bt − βbt+1 uc (lut+1
                                                                                             c (lt −gt ,1−lt )
  η (lt , bt , gt , lt+1 , bt+1 , gt+1 ) ≡ uc (lt − gt , 1 − lt ) 1 −                                             −
                                                                                      lt
                                         −u1−l (lt − gt , 1 − lt ) = 0.
   2
    This was obtained by factoring τt from (10.3), substituting for qt from (10.5), and plugging the result
into (10.4) (check).

                                                            171
η (lt , bt , gt , lt+1 , bt+1 , gt+1 ) is a quite complicated and generally nonlinear function. The
advantage of this formulation is that the government’s problem can now be written as:
                                                P∞ t
                                       max ∞       t=0 β u (ct , 1 − lt )
                             {ct ,lt ,bt+1 }t=0
                                         s.t. η (lt , bt , gt , lt+1 , bt+1 , gt+1 ) = 0, ∀t                      (10.6)
                                              b0 given.

      Two issues are relevant to note regarding problem (10.6):
      • Will the first-order conditions to the government problem be sufficient? In general
        no, even under the usual concavity assumptions for utility function. The reason is
        that η (·) is highly non-linear, which can potentially lead to multiple solutions and
        local maxima.

      • The Laffer curve argument seems to be relevant here: given a government’s choice
        of labor supply lt there can be several ways to implement it (i.e. several τt that will
        result in the same labor supply decision, but different levels of consumption)3 .
   Let us ignore these issues for the moment, and suppose that first-order conditions to
(10.6) characterize the solution to government problem. Consider two cases:
   1. Quasilinear utility function. Suppose that period utility is given by

                                                  u (c, 1 − l) = c + v (1 − l) .

        Then, from (10.5) we know that in equilibrium qt = β, ∀t. We can now guess that
        a constant sequence of tax rates {τt }∞             ∞
                                                 t=0 = {τ̄ }t=0 satisfies first-order conditions.
        Indeed, given that τt = τ̄ , from (10.4) we can infer that lt = ¯l, ∀t. Then, we can use
        (10.4) and government’s present value budget constraint
                                                  ∞
                                                  X                     ∞
                                                                        X
                                                         t
                                                        β gt + b0 =           β t ¯lτ̄
                                                  t=0                   t=0
                                                                         1 ¯
                                                                   =        lτ̄
                                                                        1−β

        to solve for τ̄ and ¯l. This is a tax smoothing result: regardless of the pattern
        of government spending {gt }∞ t=0 , government should borrow and lend to preserve
        constant tax rate over time.

   2. General utility function. With a general u (c, 1 − l) distortion smoothing need not
      follow. Moreover, in many cases we will get time inconsistency of government plan.
                                                                     dη(·)
      To see why this will be the case, suppose that dl                t+1
                                                                           6= 0. Now consider the first-order
      conditions to government problem with respect to lt . For t > 0 the first-order condi-
      tions will include three terms: (1) direct utility effect u1−l (ct , 1 − lt ); (2) constraint
      at t dldt η (lt , gt , bt , lt+1 , gt+1 , bt+1 ); and (3) constraint at t−1 dldt η (lt−1 , gt−1 , bt−1 , lt , gt , bt ).
      In contrast, the first-order condition for t = 0 will include only the first two ele-
      ments. Therefore, the government policy at period 0 will generally differ from the
  3
      This issue can be at least partially mitigated by formulating problem in terms of bt and τt .

                                                             172
      policy at t > 0, even if the public expenditures are constant over time. In other
      words, suppose that the solution to the government problem is some {lt , bt+1 }∞
                                                                                     t=0 .
      Now suppose that at period, say, t = 100 the government is allowed to re-optimize.
      Would it adhere to the plan chosen earlier? The answer is no. The reason is that
      by allowing the government to re-optimize we make period t = 100 the beginning
      of time, and the first-order condition to the government problem will be different
      from the one that yielded the original policy sequence.
      As a result, this problem cannot be formulated in dynamic programming language,
      since dynamic programming by construction assumes that the problem is time-
      consistent, i.e. the agent is unwilling to change their choices at a later date.
      Another perspective on time-inconsistency of the government problem is the issue
      of commitment. The solution to problem (10.6) is only valid if the government
      can commit to the plan described by such solution. Otherwise, given the rational
      expectations assumption, the consumers will foresee government’s desire to devi-
      ate, and will change their actions accordingly. The problem then changes into an
      infinitely repeated game between the consumers and the government, and becomes
      substantially more complicated.

10.2.2       Optimal taxation mix
Now we will change assumptions on the production function of the economy to include
capital, and allow government to levy taxes on both capital and labor. The question we
will be interested in is what the optimal taxation scheme would be, i.e. at what rates
capital and labor will be taxed.
    This is a high-dimensional problem. The decision making agent chooses a consumption-
leisure-capital accumulation path given the tax rates. So the government, when choosing
taxation, has to take into account how these rates affect consumer’s choices at different
points in time.
    We will assume that the individual’s preferences over consumption and labor streams
are represented by a time separable utility function with a discount factor β ∈ (0, 1).
This function is strictly increasing in ct , strictly decreasing in nt , and concave. A central
planner seeking an optimal allocation in a deterministic economy would thus solve:
                                              (∞                    )
                                                X
                                                      t
                                   max ∞             β u (ct , nt )
                              {ct , Kt+1 , nt }t=0
                                                      t=0
                      s.t. ct + g + Kt+1 = F (Kt , nt ) + (1 − δ) Kt , ∀t.

   We want to study the outcome from distortionary taxes, so we need to decentralize
the problem. Let τt denote the proportional tax on labor income, and θt that on capital
income. Then we have the following:

Definition 10.4 A competitive equilibrium is a sequence

                             {ct , Kt+1 , nt , pt , rt , wt , θt , τt }∞
                                                                       t=0

such that:

                                                     173
  1. The consumption-leisure-capital accumulation path {ct , Kt+1 , nt }∞
                                                                        t=0 maximizes con-
     sumers’ utility subject to the budget constraint
                       ∞
                       X                             ∞
                                                     X        £                        ¤
                             pt (ct + Kt+1 ) =              pt (1 − τt ) wt nt + RtK Kt ,
                       t=0                            t=0

      where RtK = 1 + (1 − θt ) (rt − δ) denotes the gross return on capital after taxes.
      Notice that depreciated capital is not taxed. You can think that if rt is the revenue
      from lending capital to producers, then δ is the cost that the owner of capital faces
      due to depreciation. The tax is only levied on the net income from capital.
  2. Firms maximize profits:
                                                        n ³ ´                 o
                      {Kt , nt }∞
                                t=0 =    arg max F K̃t , ñt − wt ñt − rt K̃t .
                                                    ∞
                                         {K̃t ,ñt }t=0

  3. The government’s budget constraint is satisfied:
                               ∞
                               X              ∞
                                              X
                                     pt g =         pt [τt wt nt + θt (rt − δ) Kt ] .
                               t=0            t=0


  4. Markets clear:
                             ct + g + Kt+1 = F (Kt , nt ) + (1 − δ) Kt , ∀t.

    We will first focus on studying this problem in the steady state, i.e. when θt = θ,
τt = τ , ct = c, nt = n, and Kt = K for all t. Consider the consumer’s problem. The first
order conditions are:

                            ct : β t uc (ct , nt ) = λpt
                                          K
                          Kt+1 : pt = Rt+1     pt+1
                                      t
                            nt : −β un (ct , nt ) = (1 − τt ) wt λpt .

Rearranging,
                                                                  K
                             uc (ct , nt ) = βuc (ct+1 , nt+1 ) Rt+1
                             un (ct , nt ) = − (1 − τt ) wt uc (ct , nt ) .

   Given steady state assumption, we have RtK = RK , and it must satisfy

                                                βRK = 1

and
                                     RK = 1 + (1 − θ) (r − δ) ,
where r is the steady state factor payment. Assuming that production technology exhibits
constant returns to scale, r = F1 (K, n) is consistent with equilibrium and with market
clearing. In addition, under this assumption F1 is a function of Kn . Therefore,
                                              · µ ¶        ¸
                               K                    K
                             R = 1 + (1 − θ) f1         −δ ,
                                                    n

                                                      174
and we can solve for Kn (notice that this ratio will depend on the tax policy θ). To solve
for labor, we will use the first order conditions with respect to that decision variable, and
those involve the corresponding tax rate τ .
    Next we turn to the government. Its decision problem amounts to choosing the
sequence
                                   π = {πt }∞               ∞
                                            t=0 ≡ {θt , τt }t=0

in order to maximize the consumer’s welfare, while satisfying the government’s budget
constraint. The solution to the individuals’ problem showed that the tax choice will
induce an optimal behavior on the part of the consumer as a function of that choice.
Therefore, we may define for every tax sequence π an allocation rule

                                   x (π) = {ct , Kt , nt }∞
                                                          t=0

that comes from the consumer’s response to the tax sequence π.
   The taxing policy also determines the sequence of prices:

                                   w (π) = {pt , rt , wt }∞
                                                          t=0 .

These are the prices supporting x (π) as a competitive equilibrium.
    Then for any π, there is a competitive equilibrium which from this point onwards we
will denote by

                           x(π) = {ct (π) , Kt (π) , nt (π)}∞ t=0
                                                             ∞
                           w (π) = {pt (π) , rt (π) , wt (π)}t=0 .

With these elements, we can introduce a useful tools to study this problem:

Definition 10.5 (Ramsey equilibrium) A Ramsey equilibrium is a tax policy π
(that the government chooses optimally so as to be in budgetary equilibrium), an allocation
rule x(π), and a price rule w(π) such that:

  (i) π maximizes:
                                       ∞
                                       X
                                             β t u (ct (π) , nt (π))
                                       t=0

      subject to the government’s budget constraint and with allocations and prices given
      by x(π) and w(π).

 (ii) For every alternative policy π 0 , x(π 0 ) and w(π 0 ) constitute a competitive equilibrium
      given policy π 0 .

(iii) θ0 = θ0 .
      This is an important restriction. The initial level of tax on capital income must be
      exogenously given. Otherwise, if the government could choose θ0 arbitrarily high,
      and τt = θt = 0 ∀t ≥ 1, taxing initial capital would be like a lump-sum tax, since
      initial capital is essentially a “sunk” investment, which cannot be modified.

   There are two approaches to this problem.

                                                175
  (I) The government directly solves
                                                                      (∞                     )
                                                                       X
                                                max                           β t u (ct , nt )
                                     {ct , nt , Kt+1 , θt , τt }∞
                                                                t=0
                                                                        t=0
                                
                         s.t.     β t uc (ct , nt ) = λpt
                                 β t un (ct , nt ) = −λpt (1 − τt ) wt
                                
                                 pt = Rt+1K
                                                pt+1 = [1 + (1 − θt+1 ) (rt+1 − δ)] pt+1              (10.7)
                                
                                 rt = FK (Kt , nt )
                                  wt = Fn (Kt , nt )
                                    ct + g + Kt+1 = F (Kt , nt ) + (1 − δ) Kt                         (10.8)
                                    X∞         ∞
                                               X
                                        pt g =   pt [τt wt nt + θt (rt − δ) Kt ] ,                    (10.9)
                                    t=0            t=0

      where (10.7) are the first order conditions which, together with the market clearing
      conditions (10.8), define a competitive equilibrium; and (10.9) is the government’s
      own budget constraint.
 (II) Instead of the previous huge system, we could solve the problem in a smarter way
      by having government solve:
                                            (∞                   )
                                             X
                                    max ∞        β t u (ct , nt )
                                          {ct , Kt+1 , nt }t=0
                                                                  t=0
                  s.t.      ct + g + Kt+1 = F (Kt , nt ) + (1 − δ) Kt , ∀t
                            P∞
                                β t [uc (ct , nt ) ct + un (ct , nt ) nt ] = uc (c0 , n0 ) R0K K0 ,
                            t=0
                        £     ¤
      where R0K = 1 + 1 − θ0 [FK (K0 , n0 ) − δ]. We will call the second constraint in
      this formulation the “implementability” constraint.
    The claim is that solving the problem (II) is equivalent to solving (I). Then the two
constraints in (II) must contain the same information as the huge system of constraints
in (I).
    In addition, notice that in the system (II), the government’s decision variables are not
the tax sequence π anymore, but directly the consumption-capital accumulation-labor
supply path {ct , Kt+1 , nt }∞
                             t=0 . Thus, for the two problems to be equivalent, it must be
the case that by choosing these three paths subject to the two constraints in (II), we
must be indirectly choosing all other variables, in particular taxes.
    This means that any sequence {ct , Kt+1 , nt }∞t=0 satisfying the two constraints in (II)
has to be a part of a competitive equilibrium vector. We will now show that this is true.
Define prices using the usual guesses:
                                             rt = FK (Kt , nt )
                                             wt = Fn (Kt , nt )
                                             p0 = 1
                                                      uc (ct , nt )
                                             pt = β t               .
                                                      uc (c0 , n0 )

                                                           176
Let the taxes on labor income be determined by the equation
                                                            un (ct , nt )
                              (1 − τt ) Fn (Kt , nt ) = −                 ,
                                                            uc (ct , nt )
and the taxes on capital income by

        uc (ct , nt ) = βuc (ct+1 , nt+1 ) [1 + (1 − θt+1 ) (FK (Kt+1 , nt+1 ) − δ)] .   (10.10)

   So, are the conditions for a competitive equilibrium met?
   • Market clearing: Yes, since {ct , Kt+1 , nt }∞
                                                  t=0 was assumed to satisfy the two restric-
     tions in (II), and one of those was precisely market clearing.

   • Consumers’ and firms’ first order conditions: Yes, they are satisfied. This follows
     from our guesses for prices and taxes (check).

   • Individuals’ budget constraint: If we use the second restriction in (II) and substitute
     prices and taxes back in, then this restriction will become exactly an individual’s
     budget constraint (check).

   • Government’s budget constraint: If individual’s budget constraints are met, and
     markets clear, then we must have that the government’s constraint is also met.
     This argument is similar to a Walras’ law type of reasoning.
    It looks like we have immensely simplified system (I) into system (II). However, this
is not for free. Two drawbacks from the alternative approach to the problem must be
highlighted:

  1. The constraint set looks “weirder” than in our usual maximization problem. In
     particular, the equation in the second constraint might have a very arbitrary shape.
     The requirements for sufficiency of the first order conditions, therefore, will not
     necessarily be met. Points solving problem (II) will have to be cross-checked to
     make sure that they maximize the objective function.

  2. Do you think that it is possible to apply dynamic programming techniques to solve
     (II)? Is it possible to write this as a recursive problem? Unfortunately, the answer
     is no. It is not possible to formulate (II) recursively.

    Notice that second drawback that we have mentioned goes beyond the mathematical
aspects involved. What does the impossibility of formulating (II) recursively tell us about
the economic nature of the problem we are dealing with? The answer is that the problem
is not stationary, because any solution to it cannot be time-consistent. If we rename any
t > 0 as t = 0, and act as if the economy was starting at that point, then the government
would be willing to revise the decisions taken originally for that t, in particular, the
decision regarding taxing capital income.
    This implies that any solution to (II) is a non-credible promise on the part of the
government, since it will be willing to modify its original plan at every point in time. The
way we overcome this drawback is that we assume that there is some sort of commitment
device (enforceable laws, for example), which is assumed. Commitment to a plan is not

                                                 177
endogenous in this setup. However insightful it may be, this approach has this as its
main weakness.
   Notwithstanding this, we will solve system (II). Define

                W (ct , nt , λ) = u (ct , nt ) + λ [uc (ct , nt ) ct + un (ct , nt ) nt ] .

Then we can re-state the problem as
                             (∞                                            )
                               X
                                    t                                 K
                   max ∞          β W (ct , nt , λ) − λuc (c0 , n0 ) R0 K0
                {ct , nt , Kt+1 }t=0 , λ
                                           t=0



                        s.t. ct + gt + Kt+1 = F (Kt , nt ) + (1 − δ) Kt , ∀t.

   The term uc (c0 , n0 ) in the objective function is endogenous, where as R0K K0 is ex-
ogenous. λ is the Lagrange multiplier of the “implementability” constraint in (II).
   Taking first order conditions, we should keep in mind that we do not know whether
they are sufficient or not, but unfortunately we have no choice but to disregard this
problem for the moment. We have

                  ct : β t Wc (ct , nt , λ) = µt , t ≥ 1
                       Wc (c0 , n0 , λ) − λucc (c0 , n0 ) R0K K0 = µ0
                  nt : β t Wn (ct , nt , λ) = −µt Fn (Kt , nt ) , t ≥ 1
                       Wn (c0 , n0 , λ) − λucn (c0 , n0 ) = −µ0 Fn (K0 , n0 )
                Kt+1 : µt = [Fk (Kt+1 , nt+1 ) + 1 − δ] µt+1 , ∀t.

Observe that for t = 0 the first order conditions are different (which reflects the time
inconsistency of the choice). Rearranging,

                                      Wn (ct , nt , λ)
                                  −                    = Fn (Kt , nt ) , t ≥ 1
                                      Wc (ct , nt , λ)

       Wc (ct , nt , λ) = βWc (ct+1 , nt+1 , λ) [Fk (Kt+1 , nt+1 ) + 1 − δ] , t ≥ 1.          (10.11)
   Suppose that the ratio
                                                 Wc (ct , nt , λ)
                                                  uc (ct , nt )
is constant over time. Then, equation (10.11) can be rewritten as:

          uc (ct , nt ) = uc (ct+1 , nt+1 ) β [Fk (Kt+1 , nt+1 ) + 1 − δ] , t ≥ 1.            (10.12)

    This is the “usual” Euler equation - the one a social planner would choose in an
economy without taxes. Compare this expression with equation (10.10). Clearly, (10.10)
and (10.12) jointly imply that θt = 0 for t ≥ 2.
    What is the intuition for this result? One of the general principles of taxation states
that the taxes should be levied on the goods that are less elastically supplied. Clearly,
from the perspective of t = 0 capital in the distant future is supplied very elastically,
since it is relatively easy for consumers to gradually reduce capital stock. In contrast,

                                                      178
labor supply cannot be as easily adjusted, since it yields income each period, and such
an adjustment would immediately hurt utility. So, to finance a given stream of public
expenditures it is preferable to tax labor income and leave capital income untaxed.
   The previous argument relies on the hypothesis that the ratio Wucc(c(ctt, ,nntt, )λ) remains
constant over time. When will this be valid? There are two answers:

   1. Clearly this ratio will not change in the steady state.

   2. Some functional forms for the utility representation will also yield such a stationary
      result. Examples of such functions are:

                                                  c1−σ
                                      u(c, n) =        + v(n)
                                                  1−σ
      or
                                        c1−σ
                                  u(c, n) =   (1 − n)γ(1−σ) .
                                        1−σ
      (The total labor endowment is normalized to 1.)


10.3       References
Atkeson, Andrew, V.V. Chari and Patrick J. Kehoe, “Taxing capital income: a bad idea,”
Federal Reserve Bank of Minneapolis Quarterly Review, 23(1999), 3-17.

Barro, Robert J., “Are government bonds net wealth?” Journal of Political Economy,
82(1974), 1095-1117.




                                              179
180
Chapter 11

Business Cycles

The purpose of this chapter is to introduce the study of business cycles. By business cycles
we mean fluctuations of output around its long term growth trend. In this sense, this
chapter complements growth theory to provide a thorough explanation of the behavior of
economic aggregates: first, output grows secularly; second, it fluctuates around its long
term trend. We have already analyzed the former phenomenon. The latter is our topic
now.
    We will first overview the empirical facts that constitute our object of study, and the
history of the attempts at explaining these facts. After that, we will study the theory
that has developed. We could separate the evolution of this theory in three phases: (i)
Pre-Real Business Cycles; (ii) Real Business Cycles; (iii) Current trends.


11.1      Introduction
There are two basic questions that gave birth to this area of macroeconomics:

  1. Why are there cycles?

  2. How do they work?

    Before the real business cycle revolution, Keynesianism approached the understanding
of the business cycle by postulating that investors were driven by “animal spirits”. These
non-rational feelings of investors propelled them to frantically invest or gloomily refrain
from doing so, according to the prevailing mood. This notion has not completely disap-
peared from economics, however elaborate the explanations of investor behavior have now
come to be. The current version of “animal spirits” does not refer to the moods of those
who make investment decisions, but of those who make consumption decision: it is the
fashionable indicator of consumer confidence. Apparently, people go to mall whenever
they wake up feeling confident.
    The Keynesians and their intellectual heirs did not base their approach to the business
cycles on micro-foundations of macroeconomic behavior. Quite on the contrary, they
study the effects of the above-mentioned moods on aggregate variables such as output
and employment. Since acting on moods is an irrational way to make decisions, the
economy looses potential value due to this lack of rationality; hence the government is

                                            181
called upon to correct this behavior. Therefore, the role of the government is one of the
main topics of interest for these traditions in macroeconomics.
    However, Lucas’ critique (Lucas (1976)) of the aggregative approach to macroeco-
nomics and more importantly Lucas (1977) generated the real business cycle revolution.
The pioneering works in this tradition were Kydland and Prescott (1982), and Long
and Plosser (1983). Besides its relevance and ability to explain the business cycle, this
approach has had a very significant methodological impact on the practice of macroeco-
nomics.
    According to this view, the reason for cycles in the economy is that there are tech-
nology shocks that affect the productivity of factors. The source of the shock is real,
and the propagation mechanism is real as well: it is a consequence of the intertemporal
substitution of labor that optimizing decision makers choose whenever confronted with
such a technology shock.
    The critique to this approach is that the definition of a technology shock is somewhat
blurred. What is exactly such a shock? Notwithstanding this weakness, the real business
cycle tradition has data against which to contrast its hypotheses. Technology shocks can
be measured through the de-trended Solow residual from actual data.
    Finally, the reason why this tradition has focused on the “real” explanation of business
cycles is rather accidental. When Prescott undertook the research program laid down by
Lucas (1977) paper, the initial schedule was to start with a real source of the cycle (the
technology shock) and the real propagation mechanism (the inter-temporal substitution),
thereafter to increase the complexity of the model and allow for monetary mechanisms.
However, on seeing that the real approach was providing a seemingly thorough explana-
tion of the phenomenon, the course of the research program deviated towards increasing
the complexity and richness of the real setup (such as introducing heterogeneity in agents,
incomplete markets, etc.).
    Of course, the real business cycle tradition is not the only one claiming the ability
to provide an explanation of short run fluctuations of output around its growth trend.
Among the main current contestants, the most relevant are:

  (i) New Keynesian models. Opposed to the real approach, these take a monetary
      approach: The source of the cycles are monetary fluctuations, and the main prop-
      agation mechanism is also monetary: price “stickiness”.

 (ii) Sunspot theories. These are micro foundations models in which agents have full
      rationality, but are faced with models that have multiple equilibria. This allows for
      self-fulfilling, rational expectations that may cause fluctuations of output, even in
      spite of the absence of an underlying change in the production or utility fundamen-
      tals in the economy. This can be interpreted as a coordination problem, in which
      agents fail to achieve the “best” equilibrium out of the available ones. Notice that
      to some extent, the “animal spirits” (or consumer confidence) concept can be ac-
      commodated to explain why agents simultaneously believe that a given equilibrium
      will be realized, and act accordingly.

    Before embarking on our topic of study, let us make a final comment on the current
state of the art, in particular of the real approach. Most of the research has modeled
typical, complete markets, usually operating under perfect competition. This rules out

                                            182
the possibility of the structure of markets itself playing a role in the business cycle. No-
tice that in the case of the New Keynesians, this is quite the opposite: it is the structure
of a single market (the money market) which generates and propagates the fluctuations.
Without taking this rather extreme view, the real approach could be enriched by allowing
the structure of markets to have its share of the cycle phenomenon. The new literature
is exploring this by introducing in the behavior of decision makers the need to “search”.
Information on prices and employment opportunities are not immediately available, as
in the typical decentralized version of the planner’s problem as we have studied it. Intro-
ducing the possibility of informational frictions in markets can account for the existence
of unemployment, and give a role to money in the business cycle.


11.2      Facts before theory
In this section we are interested in presenting the main “facts” that business cycle theory
seeks to explain. We take a rather epistemological definition of the word: By “Facts” we
mean not exactly data, but rather what the economics profession regards as the acceptable
indicators to be drawn from that data, and what the meaning is. The history of business
cycles research has a very significant “dialectic” dimension: What are the “facts” to be
explained? How should these be presented? What is the correct methodology to transform
raw data into acceptable “facts”? All these questions are more than just methodological:
they also reveal the different underlying visions of the economic phenomenon that are
sustained by different schools in the profession. In the (extremely) brief overview of the
history of “facts” that follows, this underlying debate can be seen to take the form of a
methodological discussion.

11.2.1     Early Facts
The first intellectual precedent in the study of short run fluctuations in output was Burns
and Mitchell (1946). Their purpose was to obtain stylized facts, à la Kaldor’s growth
facts. Their main findings were:

− Output in different sectors of the economy have positive covariance.

− Both investment and consumption of durable goods exhibit high variability.

− Company profits are very pro-cyclical and variable.

− Prices are pro-cyclical as well. (This is not true for the post-war years, but it was for
    the sample analyzed by Burns and Mitchell.)

− The amount of outstanding money balances and the velocity of circulation are pro-
    cyclical.

− Short term interest rates are pro-cyclical.

− Long term interest rates are counter-cyclical.

− Business cycles are “all alike” across countries and across time.

                                            183
   Burns and Mitchell’s work was harshly criticized by Koopmans (1947). This critique
was rather of a statistical, methodological nature. The main weaknesses highlighted in
Burns and Mitchell’s research were that:

- The work was not carefully done, and was hard to replicate.

- There was no solid underlying statistical theory. Relevant issues were not addressed
    altogether, such as the statistical significance of the assertions.

    Koopmans’ counter-argument discredited Burns and Mitchell’s approach to the extent
that no literature developed to improve and further their view. Instead of this, the leading
study of business cycles was undertaken in Yale’s Cowles commission, which consisted
of studying huge econometric models of macroeconomic variations. This was called the
“macroeconometrics” approach. The main authors in this tradition were Klein (Nobel
prize due to this research) and Goldberg.
    However, little has been left behind by this methodology, which ended up consisting of
building up large scale macroeconomic models, making them bigger and bigger variable-
wise until the regressions explained something. Finally, Lucas’ critique (Lucas (1976)),
that found widespread agreement through the economic profession, put an end to this
research program.
    As a result, research found itself needy of new stylized facts to explain since regressions
were no longer regarded as a valid phenomenological source. The task to provide for
credible (maybe just properly presented!) stylized facts, and then a suitable theoretical
framework to explain them, was undertaken by Kydland and Prescott.


11.2.2      Kydland and Prescott (1982): How to convert raw data
            into facts
Kydland and Prescott’s work is the founding stone of the current consensus on what
“facts” are. These authors went back to the Burns and Mitchell tradition of stylized
facts. Unlike their predecessors they succeeded because they were able to provide a solid
methodological foundation for their approach.
    In the first place, since the phenomenon to be studied is the short-run fluctuations
of output around its long-term growth, these fluctuations need to be pinned down with
precision. Raw data need to be rid of the secular growth component before the cycle can
be identified. This is done by filtering the data, using the method developed by Hodrick
and Prescott (the so-called “HP filter”).
    The HP filter works in the following way. Given a time series yt , the purpose is to find
out the trend component y t , and with this to calculate the value of the residual yt − y t .
This residual will be the data from which “facts” will be drawn.
    The HP filter procedure to de-trend data is to solve the following minimization prob-
lem:                           ½T                 ¾
                                 P              2
                          min       (yt − y t )
                         {y t }T
                               t=1   t=1
                                 TP−1 £¡          ¢ ¡            ¢¤2
                         s.t.          y t+1 − y t − y t − y t−1     ≤ K.
                                t=2


                                                184
   In practice, K is set equal to 0, and this leads to the following Lagrangian:
         T −1 n
         X                           £¡              ¢ ¡            ¢¤2 o
    L=            (yt − y t )2 − µ        y t+1 − y t − y t − y t−1       + (yT − ȳT )2 + (y1 − ȳ1 )2 .
         t=2


    Hodrick and Prescott chose µ = 1600 to de-trend quarterly data, and µ = 400 for
annual data. Once the problem is solved, the object of study is the resulting {yt − y t }Tt=1
sequence. With this in hand, “facts” in business cycles research are a series of relevant
statistics computed from de-trended data.


11.2.3     Kydland and Prescott’s facts
  1. Volatilities
      Given a variable x, we define its percentage standard deviation as:

                                                         (V ar(x))1/2
                                                  σx ≡                ,
                                                              µx

      where µx denotes the mean value of x.
      Then we have the following findings:

      - σc < σy ,
          where c ≡ consumption and y ≡ output.
          What’s behind this fact? Why is consumption less volatile than output? This
          can be interpreted as evidence for consumption smoothing behavior by agents.
      - σco > σy ,
          where co ≡ consumer durables.
      - σi ≈ 3 · σy ,
          where i ≡ investment.
      - σT B > σy ,
          where T B ≡ trade balance.
      - σN ≈ σy ,
          where N ≡ total hours worked.
      - σE ≈ σy ,
          where E ≡ employment.
      - σN/week < σy ,
          where N/week ≡ hours per week.
      - σK ¿ σy ,
          where K ≡ capital stock.
          In short-term periods, the stock of capital exhibits little variation.

                                                        185
     - σw < σy/N ,
         where w ≡ real wage = marginal product of labor and y/N ≡ output per
         worked hour, i.e. labor productivity.
         The implication of this finding is that real wages are “sticky” - there is some
         smoothing of real wage fluctuations.

  2. Correlations
           ³y      ´
     - ρ        , y > 0.
           N
     - ρ (w, y) ≈ 0.
          Recall that y / N is the average product of labor, and w is the marginal prod-
          uct.
     - ρ (K, y) ≈ 0.
     - ρ (P, y) < 0 (in post-war period),
          where P ≡ price level.

  3. Persistence
        £             ¡            ¢¤
     - ρ (yt − y t ) , yt−1 − y t−1 ≈ 0.9 (from quarterly data).

  4. Leads and Lags
     This addresses questions such as whether consumption leads output or invest-
     ment leads output. No strong patterns were found on this regard by Kydland
     and Prescott.

  5. The Business Cycle
     Finally, to top off the paradigm debate that underlies the methodological discussion,
     we must mention that the word “cycles” was not used in Kydland and Prescott
     (1982). What the authors sought to study were volatilities and correlations in
     economic variables, not “cycles”. Nevertheless, the NBER has a cycle-measuring
     methodology that assigns beginning and ending dates to business cycles.


11.3       Theory after facts
11.3.1     Basic methodology: Introduction to calibration
Once a definition of “facts” is at hand, a theory to account for them can be developed.
The research on this was initiated by Kydland and Prescott (1982) and Long and Plosser
(1983). The framework is the stochastic neoclassical growth model. And, remember: this
project is quantitative. Everything is in numbers. The success of a real business cycle
model is measured by its ability to numerically replicate the “facts”.

                                            186
    The basic model is the central planner’s problem to optimize the use of resources
according to a time-additive preference relation that admits a utility function represen-
tation. For example, if production is affected by a shock on total factor productivity that
follows an AR(1) process, the problem is:
                                                      (        "∞                    #)
                                                                X
                                  max                     E0          β t u (ct , lt )
                          {ct , nt , lt , Kt+1 }∞
                                                t=0
                                                                t=0


                                   s.t. ct + xt = zt F (Kt , nt )
                                        Kt+1 = (1 − δ) Kt + xt
                                        lt + nt = 1
                                        zt+1 = ρzt + εt+1 .
   The central methodological issue is how to pick the parameters in the utility and
production functions. In this sense, the work of Kydland and Prescott has also a dialectic
dimension. The authors are advocates of the technique known as “calibration”. This is
more than merely how to pick values for parameters to solve a numerical problem. It is
a way of contrasting models against data as opposed to traditional econometrics.
   Calibration, sometimes also called “back-of-the-envelope calculations”, requires that
values for parameters be picked from sources independent of the phenomenon under study.
The discipline advocated by Kydland and Prescott bans “curve fitting” practices. For
example, admissible sources of parameter values are:

- Household data on consumption, hours worked, and other microeconomic evidence,
    for individual preference parameters.

- Long run trend data for the factor shares in production (namely α in the Cobb-
    Douglass case).


11.3.2     Measurement: Solow growth accounting
The hypothesis of Kydland and Prescott (1982) and Long and Plosser (1983) is that the
source of the observed volatilities and correlations in de-trended variables is a “technology
shock”. This is an aggregate stochastic shock that affects production, for example through
total factor productivity as laid down above. There might be other types of stochastic
shocks, however, such as changes in individuals’ preferences, or government-related shocks
like wars. Nevertheless, we will abide by the technology shock in what follows:

                                         GDPt ≡ yt = Ft (·) ,

where F is some function of production factors.
   In order to measure zt , we will take inspiration from the growth accounting technique
developed by Solow. In his framework, there are two inputs, capital and labor, and a
total productivity shock. Hence the previous expression takes the form:

                               yt = Ft (Kt , nt ) = zt F (Kt , nt ) .

                                                          187
    The issue that we have to address is what z is or more precisely, what the counterpart
in the data to the theoretical variable zt+1
                                         zt
                                             − 1 (the “Solow residual”) is. To this effect,
we will assume that time is continuous, and differentiate the production function1 :

                     dyt = F (Kt , nt ) dzt + zt FK (Kt , nt ) dKt + zt Fn (Kt , nt ) dnt .

   We multiply and divide through by each component on the right hand side, so as to
have percentage changes:
                                      dzt                       dKt                       dnt
                dyt = zt F (Kt , nt )     + zt FK (Kt , nt ) Kt     + zt Fn (Kt , nt ) nt     .
                      |     {z     } zt                         Kt                        nt
                             yt

Next we divide both side by total output yt :
                       dyt   dzt zt FK (Kt , nt ) Kt dKt zt Fn (Kt , nt ) nt dnt
                           =     +                      +                        .                 (11.1)
                       yt     zt         yt          Kt          yt          nt
   With this at hand, the next task is to find the data counterparts of the fractions
zt FK (Kt , nt )Kt
       yt
             and zt Fn (Kytt , nt )nt involved in (11.1). To do this, we need to introduce two
additional assumptions:

       - Assumption 1: The production technology exhibits constant returns to scale.

       - Assumption 2: Markets operate under perfect competition.

       Assumption 1 allows for an application of the Euler Theorem:

                             FK (Kt , nt ) Kt + Fn (Kt , nt ) nt = F (Kt , nt ) .

Hence each of the fractions zt FK (Kytt , nt )Kt and zt Fn (Kytt , nt )nt are just shares of output at-
tributed to capital and labor respectively.
    Assumption 2 provides the data counterpart for the derivatives FK and Fn . Perfect
competition implies that

                                           Rt = zt FK (Kt , nt )
                                           wt = zt Fn (Kt , nt ) .

These factor remunerations can be measured from data. Replacing in expression (11.1),
                          dyt   dzt           Rt Kt dKt                      wt nt dnt
                              =     +                                +                 .           (11.2)
                          yt    zt              y    K                         yt nt
                                              | {zt } t                      | {z }
                                         capital’s share in income       labor’s share in income

    Even though we have pinned down our empirical unknowns, measuring these is still
a difficult task. Some payments are not easily classified as labor or capital income; the
treatment of government and foreign trade is unclear from this expression. For further
discussion on this, see Cooley (1995).
   1
    We abuse the notation here a little bit. We use the time notation of a discrete process with the
notation of a differential, which requires continuity (which we assume).

                                                       188
    Notwithstanding the methodological difficulties, everything in expression (11.2) can
be directly found in the data, except for the Solow residual dzt /zt , which must be solved
for. This can be easily done using the following equation, which follows from (11.2) and
where αt denotes the share of capital in income at date t:
                              dzt   dyt      dKt             dnt
                                  =     − αt     − (1 − αt )     .
                              zt    yt       Kt              nt

Also, let us fix αt = α. A sensible value for the US (derived from data) is α ≈ .3.
   Let Z ≡ dzt /zt . Then given the sequence {Zt }1990
                                                     t=1950 , we could fit a process to this
data, such as AR(1):
                                    Zt+1 = ρZt + εt+1 ,
where the data show that ρe ≈ .95.


Some critiques of this approach
  1. z may not be technology, but just poor measurement (Jorgenson-Griliches argu-
     ment).

  2. z exhibits a high variation - then what are these shocks? It should be possible
     to identify them. Furthermore, what is the meaning of a “negative” technological
     shock? Can technology somehow worsen from one period to the other?

  3. The story of stochastic productivity shocks may be acceptable on an industry, or
     firm level. But the notion of aggregate technological shocks seems more dubious.
     An aggregation argument of individual, independent shocks cannot work either,
     since by the law of large numbers this should lead to no variation at all. Some kind
     of aggregate component is needed (correlation of individual shocks is tantamount
     to an aggregate effect).

Comments on measurement
Could the variation in z be just the product of measurement errors? It is clearly true
that the variables from which the facts are observed are subject to these types of errors.
In particular, the following are some of the sources of inaccuracy in measurement of some
of the following variables:

  (i) Total output (y):

     - Quality improvements (especially in services and in government).
     - Output that is not measured:
             • Learning
             • Human capital accumulation
             • Research and development.

 (ii) Physical capital (K):

                                              189
     - Scrapping is not observed.
         In the national accounts, K is measured indirectly. Data on investment is
         available; hence this is used to update the registered level of capital using the
         accumulation equation:
                                        K 0 = (1 − δ) K + i.
     - Utilization rates are not known.

(iii) Labor input into production (n):

     - There is little information on the phenomenon known as “labor hoarding”: per-
        sonnel that is kept at their posts doing unproductive tasks.

11.3.3     Real business cycle models: brief cookbook procedure
The purpose of this section is to lay down the basic steps of the real business cycle re-
search methodology. Using an example we will illustrate one of the most crucial steps:
the calibration.

Steps to follow in real business cycle research:

  1. Specify a model, including functional forms and parameters.

  2. Pick parameters through calibration.

  3. Solve the model numerically.
     Most often, this will be done using linearization methods. Recall that in order to
     do this, given an AR(1) process for the stochastic shock:

                                            z 0 = ρz + ε,

     the policy rule guesses were linear in the state variables (K, z):

                                     K 0 = aK + bK K + cK z
                                      n = an + bn K + cn z.

     The task is to solve for the parameters aK , an , bK , bn , cK , cn .

  4. Simulate the model and analyze the outcome.
     A random number generator is used to simulate a realization of the stochastic
     shock. This gives rise to a time series in each of the variables. These series are
     the researcher’s “data set”. Sample moments of the variables (in general, second
     moments) are computed and compared to actual data.

   In what follows, we will illustrate the calibration of a real business cycle model using
an example. We will assume that the stochastic shock to total factor productivity follows
an AR(1) process; the statistics ρe and σ  e2 need to be computed from the de-trended
(HP-filtered) data.

                                             190
   We will assume that preferences are represented by the utility function:
                                         ¡ 1−θ θ ¢1−σ
                                          c l         −1
                              u (c, l) =                 .
                                              1−σ
    The economy is populated by a number of identical households. Each household
derives utility from the consumption of goods and leisure of its representative member.
The size of household’s population grows at rate η. The centralized formulation of the
utility maximization problem is:
                                  (∞                             )
                                    X
                             max∞       β t (1 + η)t u (ct , lt ) .               (11.3)
                             {ct , lt }t=0
                                             t=0

   The central planner faces an aggregate resource constraint:

                             Ct + Xt = A (1 + γ)t(1−α) Ktα Nt1−α ,

where Ct (consumption), Xt (investment), Kt (capital), Nt (labor) denote aggregate
variables. Production technology is subject to a labor-augmenting (deterministic) change
process with growth rate γ.
   Let Pt denote the population size at t (that grows at rate η), and divide the resource
constraint by this population size:
                                                    µ ¶α µ ¶1−α
                     Ct Xt                   t(1−α)  Kt     Nt
                        +      = A (1 + γ)
                     Pt    Pt                        Pt     Pt
                      ct + xt = A (1 + γ)t(1−α) ktα n1−α
                                                     t   ,                         (11.4)

where small-size letters denote per-capita variables. In addition, individuals’ time en-
dowment is limited, so:
                                      lt + nt = 1.                                 (11.5)
The accumulation equation for capital is the usual:

                                      Kt+1 = (1 − δ) Kt + Xt .

Dividing through by population at t, to obtain per capita terms:
                                        Kt+1              Kt Xt
                        (1 + η)                 = (1 − δ)     +
                                     Pt (1 + η)           Pt     Pt
                                   (1 + η) kt+1 = (1 − δ) kt + xt .                (11.6)

    Equations (11.3) - (11.6) constitute our problem. In order to solve them, we first
transform the growth model into a stationary one. Using our previous knowledge that in
this framework all variables grow at rate γ, we define the de-trended variables:
                                 ct             xt      e       kt
                      e
                      ct =           t, x
                                        et =        t , kt =          .
                              (1 + γ)        (1 + γ)         (1 + γ)t
   We specify σ = 1 in the utility function, which leads to logarithmic utility function.
Notice that
                            log c = log ec + log (1 + γ)−t ,

                                                   191
but the term log (1 + γ)−t does not depend on choice variables, and hence it is irrelevant
for choosing a utility maximizing consumption-leisure sequence. We ignore this term,
and thus the transformed problem is:
                                    ½∞              ·                       ¸¾
                                     P t          t            θ
                      max                β (1 + η) log e
                                                       ct +          log lt
               {ct , lt , kt+1 }∞
                                t=0  t=0                     1−θ
               s.t. e   ct + (1 + γ) (1 + η) e kt+1 = Aektα (1 − lt )1−α + (1 − δ) e
                                                                                   kt .

  We need to pick values for the parameters involved. We begin with the ones that are
immediately available:

- α = .4 (capital share of output - constant)2

- γ = .02 (average long run growth rate)

- η = .01 (average long run population growth rate)

- A is a scaling factor. It is irrelevant.

- δ can be found in the following way. In the steady state of the transformed model (i.e.
      on the balanced growth path), we have that
                                             e
                                             kt+1 = e
                                                    kt = e
                                                         k∗.

      Recall the capital accumulation equation:

                                (1 + γ) (1 + η) e
                                                k ∗ = (1 − δ) e
                                                              k∗ + x
                                                                   e∗ .

      Dividing both sides by e
                             k ∗ yields:
                                                              e∗
                                                              x
                                  (1 + γ) (1 + η) = 1 − δ +
                                                              e
                                                              k∗
                                                              X∗
                                                     = 1 − δ + ∗.
                                                              K

                                                                           X∗
      In this equation, γ, η, and the ratio of investment to capital stock, ∗ , are known.
                                                                           K
      From the data,
                                           XUS
                                                 = .076.
                                           KUS
      Hence δ can be solved for: δ = .0458.

   Next we look at the parameters in the utility function: β and θ. For these we need to
take first order conditions of the problem. Assuming a balanced growth path (e ct = e
                                                                                    ct+1 )
                                                          e
we differentiate with respect to next period’s capital kt+1 :
                                    h                             i
                          1 + γ = β αAe ktα−1 (1 − lt )1−α + 1 − δ .
  2
    Before we had α = .3. Here we use a different value. The value of α is usually estimated to be
around 1/3.

                                               192
We can observe that
                                                       yet Yt
                               αAe
                                 ktα−1 (1 − lt )1−α = α = α ,
                                                       e
                                                       kt  Kt
      Yt
where Kt
         is available from actual data (annual output data):

                                        YtU S
                                              ≈ .3012.
                                        KtU S

With this, β can be solved for. The result is β = .94912.
   The parameter θ is more controversial. We need the remaining first order conditions,
which are:
                               1
                        e
                        ct :       = λt
                               e
                               ct
                                  θ 1
                        lt   :          = λt (1 − α) Ae
                                                      ktα (1 − lt )−α .
                               1 − θ lt

Then the Euler equation determining labor supply is:

                                   θ 1 − lt           yet
                                            = (1 − α)
                                 1 − θ lt             ect
                                                       Yt
                                            = (1 − α) .
                                                      Ct

   Let us first look at CYtt . We have that

                                         Yt   Yt K t
                                            =
                                         Ct   Kt C t

and
                                     Xt + Ct = Yt
                                        Xt    Ct    Yt
                                     ⇒     +      =
                                        Kt Kt       Kt
                                        Ct    Yt    Xt
                                     ⇒     =      −    .
                                        Kt    Kt Kt
                             Yt      Xt
Since we know the values of K t
                                and K  t
                                         from actual data we can find CYtt .
   The next issue is what a reasonable estimate of lt is. In this case, we must use
knowledge from microeconomic studies. We can see that out of the total 24 hours daily
endowment, 8 hours are used for sleeping, 8 for work, and the remaining 8 for leisure.
Then we can use lt ≈ 2/3. Using this, we can solve for θ, which yields θ = .61612.
   The methodology used is controversial from a microeconomic point of view, due to
the response to wage changes that it implies. In the decentralized problem, the first order
condition for leisure is:
                                     θ      1      1
                                                = w   et
                                  1 − θ 1 − nt     e
                                                   ct
                                                      θ
                                  ⇒ (1 − nt ) wt =       ct .
                                                     1−θ

                                              193
    We want to examine the change in labor supply nt arising from a change in the wage
wt . There are several ways to measure this elasticity, but let us use:
                                            ¯
                                  d log nt ¯¯
                                                       ≡ ξ.
                                 d log wt ¯ct constant

This is called the “λ-constant” labor supply elasticity. From the first order conditions,
we have
                                             θ ct
                                 nt = 1 −
                                           1 − θ wt
                                          µ              ¶
                                                  θ ct
                             log nt = log 1 −
                                                1 − θ wt
                                           θ ct
                                         1 − θ wt
                               ⇒ξ =
                                             θ ct
                                      1−
                                           1 − θ wt
                                      1 − nt
                                    =        .
                                        nt

So inserting the value of nt = 1/3 used above yields ξ = 2.
    But this result is wildly contradicted by data. Labor economists have found that this
elasticity is approximately zero - hours worked are very little sensitive to wage changes.
This is a serious drawback for the calibration used: parameter values are not consistent
with microeconomic data.

11.3.4     Real business cycle in action: A model example
The purpose of this section is to briefly give an example of an actual model. This
is a model developed by Hansen (1985) and Rogerson (1988) to introduce equilibrium
unemployment, the lack of which is a shortfall in the usual real business cycle models.
    Hansen and Rogerson model an economy which is populated by many (a measure one
of) agents and which contains some sort of fixed cost to working. As a consequence, the
employment decision is a discrete variable: nt can only take the values n or 0. Hence,
leisure can only be either 1 − n(≡ l) or 1.
    The main problem with this assumption is that a competitive equilibrium may not
exist. In order to overcome this difficulty, the authors introduce an employment lottery,
whereby individuals become employed in a full-time job with probability 1−µ, and unem-
ployed otherwise. This plays the role of “convexifying” the decision making environment
and leads to the applicability of the usual existence and welfare theorems.
    The central planner maximizes the following function:
                                       θ                        θ
                E[(1 − µ) (log ce +       log l) + µ(log cu +       log 1)],
                                      1−θ                     1 − θ |{z}
                                                                      0

where the expectation is taken across agents - hence it is in fact a weighted sum of
utilities. The outcome from solving the maximization problem will be a point in the

                                             194
Pareto frontier of the economy (recall the Negishi characterization). The term in the
brackets is an individual agent’s expected utility for a given period. ce is the consumption
level that the planner assigns to working individuals, and cu to the unemployed.
    The resource constraint that the planner faces is:

                        (1 − µ) ce + µcu + i = zK α [(1 − µ) n]1−α ,

where the law of large numbers was used to assert that µ is the fraction of the population
that will be unemployed in a given period. The choice variables for the planner are the
consumption levels ce and cu , the probability of unemployment µ, and the aggregate
investment i.
   Ignoring the law of motion for capital, take i as given and solve the resulting “sub-
optimization” problem to find ce , cu and µ. The first order conditions are:
                                        1−µ
                                 ce :         = λ (1 − µ)
                                          ce
                                        µ
                                 cu   :    = λµ
                                        cu

                                 ⇒      ce = cu .

    This is a complete markets result: complete risk sharing. The conclusion is that in this
model, the employed individuals are the unlucky ones. We can use the result ce = cu = c
to reformulate the problem for µ:
                                  ½                             ¾
                                                     θ
                            max log c + (1 − µ)           log l
                              µ                    1−θ
                            s.t. c + i = zK α [(1 − µ) n]1−α .

    Then (1 − µ) can be viewed as total hours worked (n is just a normalization). So the
result is that we have modified preferences, that evolved from being logarithmic in leisure
to being actually linear in leisure (notice that since l < 1, an increase in µ leads to an
increase in utility). As a result of this linearity, labor supply will be very elastic in the
aggregate, in spite of being totally inelastic at the individual level.


11.4       Sunspot models of the business cycle
The main advocates of these models are Farmer and Azariadis. The main characteristics
of their approach are:
- There are no fundamental (or intrinsic) shocks.

- There is a competitive equilibrium. Aggregate variables (c, y ) will fluctuate randomly.

Q: Could this happen in an environment where the equilibrium is Pareto optimal?

A: No (assuming strict risk aversion). If consumption fluctuates but could be constant,
    this cannot be an optimal result.
      These models show either or both:

                                            195
     - Distortions
     - Externalities

    In real-business-cycles-like macroeconomic models, it is possible to prove that sunspot
equilibria exist whenever the equilibrium is indeterminate. Recall the second-order dif-
ference equations arising from the linearization of the neoclassical growth model. If the
two roots were |λ1 | < 1, |λ2 | > 1, then we were able to rule out an exploding path.
However, if both λ1 and λ2 resulted in values smaller than 1 in absolute value, we ran
into “indeterminacy” - several convergent paths were equally admissible as a solution.
    Then sunspot equilibria are the result of a randomization among the convergent paths.
The procedure in this research area is to build real-business-cycles-like models and play
with the parameters until a situation with |λ1 | < 1 and |λ2 | < 1 is reached. This is not
an easy task, and demands a high level of distortions and externalities from the model.


11.5      References
Burns, Arthur F., and Wesley C. Mitchell, “Measuring Business Cycles,” National Bu-
reau of Economic Research, 1946.

Cooley, Thomas F., “Frontiers of Business Cycles Research”, Princeton University Press,
1995, Chapter 1.

Hansen, Gary D., “Indivisible Labor and the Business Cycle,” Journal of Monetary Eco-
nomics, 16(1985), 309-27.

Koopmans, Tjalling C., “Measurement Without Theory,” Review of Economics and
Statistics, 3(1947), 161-172.

Kydland, Finn E. and Edward C. Prescott, “Time to Build and Aggregate Fluctuations,”
Econometrica, 50(1982), 1345-1370.

Long, John B. and Charles I. Plosser, “Real Business Cycles,” Journal of Political Econ-
omy, 91(1983), 39-69.

Lucas, Robert E., Jr., “Econometric Policy Evaluation: A Critique,” Journal of Mone-
tary Economics, 1(1976), 19-46.

Lucas, Robert E., Jr., “Understanding Business Cycles,” Journal of Monetary Economics,
5(1977), 7-29.

Prescott, Edward C., “Theory ahead of business cycles measurement”, textitMinneapolis
Federal Reserve Quarterly Report, 1986.

Rogerson, Richard, “Indivisible labor, lotteries and equilibrium,” Journal of Monetary
Economics, 21(1988), 3-16.


                                           196



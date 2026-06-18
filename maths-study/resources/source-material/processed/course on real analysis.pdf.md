---
normalized_id: shared-pdf-reference-course-on-real-analysis
exam_code: SHARED
material_scope: course on real analysis.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/course on real analysis.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-course-on-real-analysis

                            Real Analysis
                                  Course Notes


Contents
    1     Measure, integration and differentiation on R . . . . . . . . .        1
          1.1     Real numbers, topology, logic . . . . . . . . . . . . . .      2
          1.2     Lebesgue measurable sets and functions . . . . . . . .         4
          1.3     Integration . . . . . . . . . . . . . . . . . . . . . . . .    9
    2     Differentiation and Integration . . . . . . . . . . . . . . . . .     15
    3     The Classical Banach Spaces . . . . . . . . . . . . . . . . . .       28
    4     Baire Category . . . . . . . . . . . . . . . . . . . . . . . . . .    33
    5     Topology . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    40
    6     Banach Spaces . . . . . . . . . . . . . . . . . . . . . . . . . .     54
    7     Hilbert space . . . . . . . . . . . . . . . . . . . . . . . . . . .   67
    8     General Measure Theory . . . . . . . . . . . . . . . . . . . . .      79


1       Measure, integration and differentiation on R
Motivation. Suppose f : [0, π] → R is a reasonable function. We define
the Fourier coefficients of f by
                                 Z
                               2 π
                          an =     f (x) sin(nx) dx.
                               π 0

Here the factor of 2/π is chosen so that
                        Z
                      2 π
                            sin(nx) sin(mx) dx = δnm .
                      π 0

We observe that if
                                       ∞
                                       X
                             f (x) =       bn sin(nx),
                                       1

then at least formally an = bn (this is true, for example, for a finite sum).
   This representation of f (x) as a superposition of sines is very useful for
applications. For example, f (x) can be thought of as a sound wave, where
an measures the strength of the frequency n.




                                           1
    Now what coefficients an can occur? The orthogonality relation implies
that                         Z                  X∞
                           2 π           2
                                  |f (x)| dx =     |an |2 .
                           π 0                  −∞
                                                                   P
This makes it natural to ask if, conversely, for any an such that |an |2 < ∞,
there exists a function
                  P f with these Fourier coefficients. The natural function
to try is f (x) = an sin(nx).
    But why should this P sum      even exist? The functionsPsin(nx) are only
bounded by one, and        |an |2 < ∞ is much weaker than        |an | < ∞.
    One of the original motivations for the theory of Lebesgue measure and
integration was to refine the notion of function so that this sum really
does exist. The resulting function f (x) however need to be Riemann inte-
grable! To get a reasonable theory that includes such Fourier series, Cantor,
Dedekind, Fourier, Lebesgue, etc. were led inexorably to a re-examination
of the foundations of real analysis and of mathematics itself. The theory
that emerged will be the subject of this course.
    Here are a few additional points about this example.
    First, we could try to define the required space of functions — called
L2 [0, π] — toR simply be the metric completion of, say C[0, π] with respect
to d(f, g) = |f − g|2 . The reals are defined from the rationals in a similar
fashion. But the question would still remain, can the limiting objects be
thought of as functions?                       P
    Second, the set of point E ⊂ R where         an sin(nx) actually converges is
liable to be a very complicated set — not closed or open, or even a countable
union or intersection of sets of this form. Thus to even begin, we must have
a good understanding of subsets of R.
    Finally, even if the limiting function f (x) exists, it will generally not be
Riemann integrable. Thus we must broaden our theory of integration to
deal with such functions. It turns out this is related to the second point
— we must find a good notion for the       R length or measure m(E) of a fairly
general subset E ⊂ R, since m(E) = χE .

1.1   Real numbers, topology, logic
The real numbers. Conway: Construction of the real numbers [Con,
p.25].
   Dedekind: just as a prime is characterized by the ideal of things it di-
vides, so a number is characterized by the things less than it.
   Brouwer and Euclid: the continuum is not a union of points!


                                       2
      Hilbert: the axiomatic approach to the reals. Formalism versus intu-
itionism.
Other completions of Q: e.g. Q2 , Q10 . (In the latter case the completion
is a ring but not a field! If 5n accumulates on x and 2n accumulates on y,
then |x|10 = |y|10 = 1 but xy = 0. One can make the solution canonical by
asking that x = (0, 1) and y = (1, 0) in Z10 ∼    = Z2 × Z5 ; then y = x + 1 =
. . . 4106619977392256259918212890625.)
      Basic topological property of the reals (not shared by the other comple-
tions: connectedness).
      The irrationals in [0, 1] are isomorphic to NN by

                    (a1 , a2 , . . .) 7→ 1/(a1 + 1/(a2 + · · · )).

(Here N = {1, 2, 3, . . .}.)
Proof. draw the Farey tree.
Cardinality. Russell’s paradox: if E = {X : X 6∈ X}, then is E ∈ E?
Make this into a proof that |P(X)| > |X|. Corollary: R is uncountable,
since 2N is isomorphic to the Cantor set.
    Helpful tool: Schröder-Bernstein.
    Question: How many rational numbers are there? How many algebraic
numbers? Are most numbers transcendental?
    Answer: in terms of counting, yes.
    Answer: in terms of measure: the probability that x ∈ [0, 1] is equal to
a given algebraic number a ∈ A is zero. Thus the probability that x ∈ A is
zero.
    Paradox: why doesn’t the same argument show x 6= y for every y ∈ [0, 1]?
Equivalent, what is wrong with the following equation:
                                        !
                                   [        X
               1 = m([0, 1]) = m     {x} =     m({x}) = 0?
                                       x

If uncountable additivity is suspect, what about countable additivity?
The Borel hierarchy. Induction, over the natural numbers and over an
ordinal. Example: any C ⊂ P(X) generates a unique smallest algebra. (Use
induction over N). Similar, generates a unique σ-algebra. (Use induction
over Ω, whose existence comes from well-ordering of the reals.)
    Ex: hfn i continuous =⇒ the set of points where fn (x) is bounded is an
Fσ . E.g.
                                  Xn
                         fn (x) =     | sin(πk!x)|1/n
                                     k=1


                                           3
is bounded iff x ∈ Q.
    A condensation point of E ⊂ R is a point x ∈ R such that every neigh-
borhood of x meets E in an uncountable set. In other words, its the set of
points where E is ‘locally uncountable’.

Theorem 1.1 Any uncountable set contains an uncountable collection of
condensation points.

    The same holds true in any complete, separable metric space. Thus only
countably many Y ’s can be embedded disjointly in R2 , and only countably
many Möbius bands in R3 .
    Any closed uncountable set F has the order of the continuum. In fact
it contains a copy of the Cantor set. (Proof: pick two condensation points,
and then two disjoint closed intervals around them. Within each interval,
pick two disjoint subintervals containing condensation points, and continue.
By insuring that the lengths of the intervals tend to zero we get a Cantor
set.)
How many open sets? Theorem. The set of all open subsets of R is of
the same cardinality as R itself. Indeed, the same is true of the set of all
Borel sets.

1.2   Lebesgue measurable sets and functions
On R we will construct a σ-algebra M containing the Borel sets, and a
measure m : M → [0, ∞], such that m(a, b) = b − a, m is translation-
invariant, and m is countably additive.                     P
    Definition: Sthe outer measure m∗ (E) is the infimum of     ℓ(Ii ) over all
coverings E ⊂ Ii by countable unions of intervals.                    S
P Basic    fact: subadditivity. For any collection of sets Ai , m∗ ( Ai ) ≤
   m∗ (Ai ).
    Basic fact: m∗ [a, b] = b − a.

  S Clearly the outer measure is at most b − a. But if [a, b] is covered
Proof.
by Ik , by compactness we can assume the union is finite, and then
                       Z          Z X          X
               b − a = χ[ a, b] ≤       χI k =    |Ik |.

   Definition: E ⊂ R is measurable if

                                      e ∩ A) = m∗ (A)
                     m∗ (E ∩ A) + m∗ (E


                                      4
for all sets A ⊂ R. Because of subadditivity, only one direction needs to be
checked.
    For example, if E ⊂ [0, 1] then m∗ (E) + m∗ ([0, 1] − E) = 1.

Theorem 1.2 E = [a, ∞) is measurable.
                            S
Proof. From a good cover Ii for A we must construct good covers for
E ∩ A and E  e ∩ A. This is easy because E cuts each interval Ii into two
subintervals whose lengths add to that of Ii .

Theorem 1.3 The measurable sets form an algebra.

Proof. Closure under complements is by definition. Now suppose E and
F are measurable, and we want to show E ∩ F is. By the definition of
measurability, E cuts A into two sets whose measures add up. Now F
cuts E ∩ A into two sets whose measures add up, and similarly for the
complements. Thus E and F cut A into 4 sets whose measures add up to
the outer measure of A. Assembling 3 of these to form A ∩ (E ∪ F ) and the
remaining one to form A ∩ E^∪ F , we see E ∪ F is measurable.

Theorem 1.4 If Ei are Sdisjoint and measurable, i = 1, 2, . . . , N , then
P
  m∗ (Ei ∩ A) = m∗ (A ∩ Ei ).

Proof. By induction, the case N = 1 being the definition of measurability.



Theorem 1.5 The measurable sets form a σ-algebra.
                                                                    S
Proof. Suppose Ei is a sequence of measurable sets; we want to show Ei
is measurable. Since we already have an algebra, we can assume the Ei are
disjoint. By the preceding lemma, we have for any finite N ,
                N
                X                              N
                                               \
                      m∗ (Ei ∩ A) + m∗ (A ∩         fi ) = m∗ (A).
                                                    E
                  1                             1

The second term is only smaller for an infinite intersection, so letting N → ∞
we get
               X∞                            ∞
                                             \
                      ∗              ∗
                    m (Ei ∩ A) + m (A ∩          fi ) ≤ m∗ (A).
                                                 E
                  1                             1
                                          S
Now the first term dominates m∗ (A ∩          Ei ) so we are done.

                                      5
Corollary 1.6 All Borel sets are measurable.

Definition. m(E) = m∗ (E) if E is measurable.
                                                       S      P
Theorem 1.7 If Ei are disjoint measurable sets, then m( Ei ) = m(Ei ).
Proof: follows from the Theorem above, setting A = R and passing to the
limit.

Continuity
  T                                    T and E1 ⊃ E2 ⊃ E3 . . ., then
            of measure. If m(E1 ) is finite
m( Ei ) = lim m(Ei ). Proof. let F = Ei and write E1 = F ∪ (E1 −
E2 ) ∪ (E2 − E3 ) ∪ . . ..
    Littlewood’s first principle. Let E ⊂ R be measurable. Then E is
approximated from the outside (inside) by open (closed) sets, and to within
a set of measure zero by a Gδ (Fσ ).
    If the measure of E is finite, then there is a finite union of intervals J
such that m(E△J) < ǫ.
Proof. First
           S suppose S   m(E) is finite.
                                      P Then there are open intervals such
that E ⊂ Ii and m( Ii − E) ≥ ( m(Ii )) − m(E) < ǫ. This shows E
is approximate from the outside by an open set, and from the inside by a
closed set. Also if we take J to be the union of a large finite subset of {Ii },
then what’s left over hasSsmall measure,
                                       S so we get m(E△J) small. (The
difference is covered by ( Ii − J) ∪ ( Ii − E).)                                   Why not use this
                                                                                   Theorem to define
    Corollary: Every Borel set B can be expressed as B = G − N = F ∪ N ′ ,         the σ-algebra of
                                                                                   measurable sets?
where G is a Gδ , F is an Fσ , and N, N ′ are sets of measure zero. Thus
measure theory ‘short circuits’ the Borel hierarchy. Note that the notion of
zero measure is elementary (compared to the notion of measurable).
    Corollary: If E has positive measure then there exists an interval I such
that m(E ∩ I)/m(I) ≈ 1. Proof. Take a very efficient cover of E by
finitely many intervals J. Then the ratio m(J)/m(E) ≈ 1, and on the other
hand m(J)/m(E) is bounded below by the sup of the density of E in each
subinterval.
Nonmeasurable sets. Let G = R/Z and let H = Q/Z ⊂ G be a normal
subgroup. Then there exists  S a set of coset representatives P ⊂ G for G/H.
Since m(G) = 1 and G = H h + P , the measure of P cannot be defined.
Thus H is nonmeasurable.                                                           Let B be a basis for
                                                                                   R over Q.     Is B
    Assume the Continuum Hypothesis. Then we can well-order [0, 1] such            measurable?

that each initial segment is countable. Set R = {(x, y) : x < y} in this
ordering. Then horizontal slices (fixing y) have measure zero, while all
vertical slices (fixing x have measure one).

                                       6
Measurable functions. A function f : R → R is measurable if f −1 (U ) is
measurable whenever U is an open set.                         P
    First examples: continuous functions, step functions ( N    1 ai χIi , Ii dis-
                                       PN
joint intervals) and simple functions ( 1 ai χEi , Ei disjoint measurable sets)
are all measurable. Note that simple functions are exactly the measurable
functions taking only finitely many values.
    In general, if f : A → B is any map, the map f −1 : P(B) → P(A) is
a σ-algebra homomorphism; indeed it preserves unions over any index set.
Thus f is measurable is the same as: (a) f −1 (x, ∞) is measurable for all
x ∈ R; or (b) f −1 (B) is measurable for any Borel set B.
Warning. It is not true that f −1 (M ) is measurable whenever M is mea-
surable! Thus measurable functions are not closed under composition.
    More generally, for a topological space X we say f : R → X is mea-
surable if the preimages of open sets are measurable. Example: if f, g are
measurable functions, then h = (f, g) : R → R2 is measurable. Indeed, for
any open set U × V ⊂ R2 , the preimage h−1 (U × V ) = f −1 (U ) ∩ g−1 (V ) is
measurable. Since every open set in R2 is a union of a countable number of
open rectangles, h is measurable.
    Similarly, if h : R2 → R is continuous, then h(f, g) is measurable when-
ever f and g are. This shows the measurable functions form an algebra:
f g and f + g are measurable if f and g are.
    Moreover, the measurable functions are closed under limits. Indeed, if
f = lim fn then

           f −1 (a, ∞) = {x : ∃k ∃N ∀n ≥ N fn (x) > a + 1/k}
                         [[ \
                       =          fn−1 (a + 1/k, ∞).
                             k   N n≥N

Similarly for lim sup, lim inf etc.
   If f = g a.e. and f is measurable then so is g.

Theorem 1.8 (Littlewood’s second principle) If f is measurable on [a, b]
then f is the limit in measure of continuous functions: there exists contin-
uous fn such that for all ǫ > 0, m{|f − fn | > ǫ} → 0.
                                      T
Proof. Let EM = {|f | > M }; then EM = ∅, so after truncating f on a set
of small measure we obtain f1 bounded by M . Cutting [−M, M ] into finitely
many disjoint intervals of length ǫ, and collecting together the values, we see
f1 is a uniform limit of simple functions. Any simple function is built from
indicator functions χE of measurable sets. By Littlewood’s first principle,

                                         7
χE is approximated in measure by χJ , where J is a finite union of intervals.
Finally χJ is a limit in measure of continuous functions.


Theorem 1.9 (Lusin’s Theorem; Littlewood’s 2nd principle) Given
a measurable function f on [0, 1], one can find a continuous function g :
[0, 1] → R such that g = f outside a set of small measure.

Theorem 1.10 (Egoroff; Littlewood’s 3rd principle) Let f (x) = lim fn (x)
for each x ∈ [0, 1], where fn , f are measurable. Then fn → f uniformly out-
side a set of small measure.

    Example: Recall the ‘tent functions’ fn supported
                                                R     on [0, 1/n] with a
triangular graph of height n. We have fn → 0 but fn = 0; these fn do not
converge uniformly everywhere.
Proof of the Theorem. For any k > 0, consider the sets

             EN = {x : |fn (x) − f (x)| > 1/k for some n > N }.
                        T
Since fn → f , we have EN = ∅. Since EN ⊂ [0, 1], we have m(EN ) → 0.
Thus there is an N (k) such that m(EN (k) ) is as small as we like, say less than
               S
2−k ǫ. Let A = k EN (k) . Then for x outside A, we have sup |fn (x)−f (x)| ≤
1/k for all n > N (k), and therefore sup |fn (x) − f (x)| → 0. In other words,
fn → f uniformly outside the set A; and m(A) ≤ ǫ.

Finitely-additive measures on N. The natural numbers admit a finitely-
additive measure defined on all subsets, and vanishing on finite sets. (Such
a measure is cannot be countably additive.) This construction gives a ‘pos-
itive’ use of the Axiom of Choice, to construct a measure rather than to
construct a non-measurable set.
    Filter: F ⊂ P(X) such that sets in F are ‘big’:

      (1) ∅ 6∈ F,
      (2) A ∈ F, B ⊂ A =⇒ B ∈ F; and
      (3) A, B ∈ F =⇒ A ∩ B ∈ F.

    Example: the cofinite filter (if X is infinite).
    Example: the ‘principal’ ultrafilter Fx of all sets with x ∈ F . This is an
ultrafilter: if X = A ⊔ B then A or B is in F.

Theorem 1.11 Any filter is contained in an ultrafilter.


                                       8
Proof. Using Zorn’s lemma, take a maximal filter F containing the given
one. Suppose neither A nor X − A is in F. Adjoining to F all sets of the
form F ∩ A, we obtain a larger filter F ′ , a contradiction. (To check ∅ 6∈ F ′ :
if A ∩ F = ∅ then X − A is a superset of F , so X − A was in F.)
Ideals and filters. In the ring R = (Z/2)X , ideals I 6= R and filters are in
                    e ∈ F}. The ideal consists of ‘small’ sets, those whose
bijection: I = {A : A
complements are big.
    (By (2), A ∈ I =⇒ AB ∈ I. By (3), A, B ∈ I =⇒ A ∪ B ∈ I =⇒
(A ∪ B)(A△B) = A + B ∈ I.)
    Lemma: if F is an ultrafilter and A ∪ B = F ∈ F then A or B is in F.
Proof. We prove the contrapositive. If neither A nor B is in F, then their
                    e B
complements satisfy A, e ∈ F. Since F is a filter,

                             e∩B
                             A   ^
                               e=A ∪B ∈F

and thus A ∪ B 6∈ F.
   Corollary: Ultrafilters correspond to prime ideals.
   By Zorn’s Lemma, every ideal is contained in a maximal ideal; this gives
another construction of ultrafilters.
Measures. Let F be an ultrafilter. Then we get a finitely-additive measure
on all subsets of X by setting m(F ) = 1 or 0 according to F ∈ F or not.
Conversely, any 0/1-valued finitely additive measure on P(X) determines a
filter.
Measures supported at infinity. The most interesting case is to take the
cofinite filter, and extend it in some way to an ultrafilter. Then we obtain a
finitely-additive measure on P(X) such that points have zero measure but
m(X) = 1. When X = N such a measure cannot be countably additive.

1.3   Integration
We will write f = lim fn if f (x) = lim fn (x) for all x ∈ R. Because lim fn
is measurable whenever each fn is, the measurable functions turn out to
work well to represent points in the metric spaces obtained by completing
the integrable,
          R     compactly
                      R    supported continuous or smooth functions (those
                          p
satisfying |f | < ∞, |f | < ∞, etc.
    Our next goal is to extend the theory of integration to measurable func-
tions.
    A simple function φ is a measurable function taking
                                                      PN only finite many
values. It has a canonical representation as φ =        1 ai χEi where the ai



                                       9
enumerate the nonzero values of φ and Ei = {φ = ai } are disjoint sets. The
simple functions form a vector space.
Simple integration. For a simple function supported on a set of finite
measure, we define
                   Z    Z X           X
                     φ=      ai χEi =    ai m(Ei ).
               R     R
We also defineR E φ = φχE .
  Example: χQ = 0.

Theorem 1.12 Integration is linear on the vector space of simple functions.
                    R         R                   R          R     R
Proof. Clearly aφ = a φ. We must prove φ +            Pψ =     φ +    ψ.
    First note that   R for any
                             P representation of φ as   bi χFi with the sets Fi
disjoint, we have φ = bi m(Fi ). Indeed,
    Z X                Z X                  X     X             X
           bi χ F i =        aj χSb =a Fi =   aj      m(Fi ) =     bi m(Fi ).
                               i    j
                                                bi =aj

Now take the finite
              P collection of sets
                              P Fi on which φ and ψ are both constant,
and write φ = ai χFi and ψ = bi χFi . Then
               Z         X                    Z   Z
                  φ+ψ =     (ai + bi )m(Fi ) = φ + ψ.




The Lebesgue integral. Now let E be a set of finite measure, let f : E →
R be a function and assume |f | ≤ M . We define the Lebesgue integral by
                       Z          Z           Z
                         f = inf      ψ = sup    φ,
                         E         ψ≥f   E    f ≥φ E

assuming sup and inf agree. (Here φ and ψ are required to be simple func-
tions.)

Theorem 1.13 The two definitions of the integral of f above agree iff f is
a measurable function.




                                         10
                                              R       R
Proof. Suppose f is measurable. Since ψ ≥ φ, we just need to show
the simple functions φ and ψ can be chosen such that their integrals are
arbitrarily close. To this end, cut the interval [−M, M ] into N pieces
[ai , ai+1 ) of length less
                        P than ǫ. Let EP    i be the set on which f (x) lies in
[a  , a
R i i+1    ). Then  φ =     a χ
                             i Ei and ψ =     ai+1 χEi satisfying φ ≤ f ≤ ψ and
  (ψ − φ) ≤ ǫm(E), so we are done.
      Conversely, if the supRand inf agree, then we can choose simple functions
φn ≤ f ≤ ψn such that (ψn − φn ) → 0. Let φ = sup φn and ψ = inf ψn .
Then φ and ψ are measurable, and φ ≤ f ≤ ψ.
      We claim φ = ψ a.e. (and thus f is measurable). Otherwise, there is a
set of positive measure A and an ǫ R> 0 such that ψ − ψ > ǫ on A. But then
ǫχA ≤ ψn − φn for all n, and thus ψn − φn ≥ ǫm(A) > 0.


Theorem 1.14 Let f be a bounded function on an interval [a, b], and sup-
pose f is Riemann integrable. Then f is also Lebesgue integrable, and the
two integrals agree.

Proof. If f is Riemann integrable then there are step functions φn ≤ f ≤
           R
ψn with (ψn − φn ) → 0. Since step functions are special cases of simple
functions, we see f is Lebesgue integrable.
     It is now easy to check that the integral of bounded functions over sets
of finite measure satisfies expected properties:
     The integral isR linear.
                           R
     If f ≤ g then Rf ≤ g.    R                                        R
     In particular | f | ≤ |f |, and if A ≤ f ≤ B then Am(E) ≤ E f ≤
Bm(E).                   R       R      R
   R For disjointR sets,R A∪B f = A f + B f . The most interesting assertion
is (f + g) = f + g. If ψ1 ≥ f and ψ2 ≥ gR then ψ1 + ψ      R 2 ≥ fR + g, so by
the infimum definition of the integral we get (f + g) ≤ f + g. To get
the reverse inequality, use the supremum definition.

Theorem 1.15 (Bounded convergence) Let fn → f (pointwise) Theo-
rem (Bounded convergence) LetR fn → f R(pointwise) on a set of finite measure
E, where |fn |, |f | ≤ M . Then E fn → E f .

Proof. We will use Littlewood’s 3rd Principle. Ignoring a set A of small
measure, the convergence is uniform. Then
      Z               Z
             fn − f ≤        |fn − f | ≤ m(E − A) sup |fn − f | → 0.
         E−A              E−A                        E−A


                                      11
                       R          R
On the other hand, | A fn | and | A f | are both less than M m(A), so ig-
noring A makes only a small change in the integrals and therefore we have
convergence.
Banach limits. If we mimic the definition of the Lebesgue integral using a
finitely-additive, non-atomic measure on N (i.e. a non-principal ultrafilter),
then we obtain a linear map
                                L : ℓ∞ (N) → R
with L(an ) ≥ 0 if (an ) ≥ 0, and with L(an ) = lim an if the limit exists.
                                                              R                R
The general Lebesgue integral. For f ≥ 0 we define f = sup0≤g≤f g,
where g ranges over bounded functions supported R          on Rsets of finite mea-
sure. Clearly this is the same as saying f = lim = fM , where fM =
min(f, M )|[−M, M ].                  R                     R
     For general f , we require that
                                  R      |fR | < ∞R before f is defined. Then
writing f = f+ − f− , we define f = f+ − f− .
                                R               R     R
Linearity. Let us check that (f + g) = f + g. First suppose f, g ≥ 0.
ThenR from 0 ≤R f1 ≤ Rf and 0 ≤ g1 ≤ g we get 0 ≤ f1 + g1 ≤ f + g,
so (f + g) ≥ f + g. On the other hand, given 0 ≤ h ≤ f + g we
R write Rh = fR1 + g1 with f1 = min(f, h); then f1 ≤ f and g1 ≤ g so
can
   f + g ≤ f + g. This completes the proof for positive functions.
     For the general
                 R case, R noteR that if f = g − h with g, h ≥ 0 integrable
functions, then f = g − h. Indeed, we have g ≥ f+ and h ≥ f− , so
their differences are positive, and indeed (g − f+ ) = (h − f− ). Thus by
linearity for positive functions, we get
    Z              Z                   Z
       g−h =         (f+ + g − f+ ) − (f− + h − f− )
                   Z        Z      Z                   Z           Z
               =        f+ − f− +              (g − f+ ) − (h − f− ) = f.

    Now to prove linearity, just note that if f = g + h, then f = (g+ +
h+ ) − (g− + h− ) expresses f as a sum of two positive integrable functions.
                                                                       R
Integrating
R     R     each one and using linearity for positive functions we get f =
  g + h.
Integrals and R limits.R In general from fn → f we can deduce no relation-
ship between f and fn . The basic example    R of the tent functions can be
made positive or negative; we can even get fn to oscillate in an arbitrary
way, while fn → 0 a.e. (This ‘a.e.’ often signals ‘pointwise convergence’.)
Positive functions. The situation is better if f, fn ≥ 0, and fn → f .
There are two main results:

                                       12
                   R             R
     Fatou’s Lemma: f ≤ lim inf fn .               R       R
     Monotone Convergence: if f1 ≤ f2 ≤ . . ., then f = lim fn .

Proofs: For Fatou’s lemma, let
                             R g be a bounded
                                       R      function with bounded
support such that g ≤ f and ( f ) − ǫ ≤ g. Then gn = min(g, fn ) → g
and gn ≤ fn , so
                Z        Z         Z           Z
                   f − ǫ ≤ g = lim gn ≤ lim inf fn .

Here we have used the Bounded Convergence Theorem to interchange inte-
grals and limits.
    Letting ǫ → 0 gives the result.                              R
    For Rmonotone Rconvergence: R Since f ≥ fn for all n, we have f ≥
lim sup fn , while f ≤ lim inf fn by Fatou’s Lemma.


Theorem 1.16 (Modulus of integrability) Let f ≥ 0R be integrable. Then
for any ǫ > 0 there is a δ > 0 such that m(E) < δ =⇒ E f < ǫ.
                                        Rt
Corollary 1.17 The function F (t) =       −∞ f (x) dx is uniformly continuous
on R.

Proof of the Theorem.R  Let fM = min(M, f ). Then fM → f monotonely
                                                               R
as M → ∞, and thus (f − fM ) → 0. Choose M largeR  enough
                                                       R  that   (f −
fM ) < ǫ/2. Then for m(E) < δ = ǫ/(2M ), we have E f ≤ E (f − fM ) +
M m(E) ≤ ǫ.
                                                                   R
Dominated
      R      convergence.
             R                Let fn → f , with |fn |, |f | ≤ g and g < ∞.
Then fn → f .
                                              R
Proof. Given ǫ > 0 there is a δ > 0 Rsuch that A g < ǫ whenever m(A) < δ.
We can also choose M such that E g < ǫ outside [−M, M ]. Then by
Littlewood’s 3rd principle, there is a set A ⊂ [−M, M ] with m(A) < δ
outside of which fn → f uniformly. Thus
                    Z                Z             Z !
            lim sup    fn − f ≤ 2                  g+       g   ≤ 4ǫ.
                                       R−[−M,M ]        A
                       R       R
Since ǫ was arbitrary, fn → f .
Derivatives. Even if f ′ (x) exists everywhere, the behavior of f ′ (x) can be
very wild – e.g. not integrable. For example, if f (x) is any function smooth

                                     13
away from x = 0, and |f (x)| ≤ |x|2 , then f is differentiable at 0; but we
                                                       2
can make f ′ (x) wild, e.g. look at f (x) = x2 sin(e1/x x). In particular, f ′ (x)
need not be integrable.
   Here is an easy theorem illustrating the preceding results.

Theorem 1.18 SupposeR f (x) is differentiable on R, vanishes outside [0, 1]
                         t
and |f ′ (x)| ≤ M . Then 0 f ′ (x) dx = f (t).

Proof. Since f is differentiable it is continuous, and fn (x) = n(f (x+1/n)−
f (x)) → f ′ (x) pointwise. By theRmean-value                        ′
                                           R ′ theorem, |fn (x)| = |f (y)| ≤ M
for some y ∈ [x, x + 1/n]. Thus fn → f . But
                    Z t                    Z t+1/n
                           fn (x) dx = n             f (t) dt → f (t)
                       0                    t

by continuity of f .

Convergence in measure. All the theorems about pointwise convergence
also hold for convergence in measure. This can be proved using the following
useful fact.

Theorem 1.19 If fn → f in measure, then there is a subsequence such that
fn → f pointwise a.e.

   As a warm-up to this fact, we prove the easy part of the Borel-Cantelli
lemma.
                  P
Lemma 1.20 If        m(En ) < ∞, then lim sup En , the set of points x that
belong to En for infinitely many n has measure zero.

   Remark: χlim sup En = lim sup χEn .
Proof. For any N > 0, we have
                                   ∞
                                   [       ∞
                                           X
                m(lim sup En ) ≤ m( En ) ≤   m(En ) → 0
                                           N            N

as N → ∞.




                                            14
Proof of the Theorem. For each k > 0 there is an n(k) such that
Ek = {|f − fn(k) | > 2−k } Psatisfies m(Ek ) < 2−k . We claim fn(k) (x) → f (x)
a.e. as k → ∞. Indeed,         m(Ek ) < ∞, so almost every x belongs to but
finitely many Ek . And fixing x, for all k large enough that x 6∈ Ek we
|f (x) − fn(k) | ≤ 2−k → 0.
     Sample application. Suppose
                             R        Rg is integrable, |fn | ≤ g for all n and
fn → f in measure. Then fn → f .
                                            R
Proof.R    Let A be any limit point of fn , possibly ±∞. We will show
A = f.                                 R
     Pass to a subsequence such that fn → A. Pass to a further  R subsequence
                                                                         R
so fnR → f pointwise. By the pointwise theorem we get fRn → f , so
RA = fR. Since A was any limit point of the original sequence fn , we have
   fn → f .


2    Differentiation and Integration
Functions that are differentiable everywhere. Even if f ′ (x) exists
everywhere, it does not have to be continuous. For example, if |f (x)| ≤ x2 ,
then no matter how badly f ′ (x) oscillates near x = 0, we have f ′ (0) = 0.
   As an application of interchange of integrals, we can ask: if f ′ (x) exists
everywhere, then can we assert
                          Z b
                                f ′ (x) = f (b) − f (a)?
                            a
                                      Rb
The answer is no in general, since a |f ′ (x)| might be infinite. However, we
can approach the problem by defining gn (x) = n(f (x + 1/n) − f (x)). Then
clearly gn (x) → f ′ (x) pointwise, and by continuity of f it is easy to see
                          Z b
                                gn (x) → f (b) − f (a).
                            a

So it is simply a question of interchanging integration and limits. For ex-
ample, if f is Lipschitz, then gn is bounded, so by the bounded convergence
theorem, f is the integral of f ′ . More generally, the same conclusion holds
if we can find a locally integrable function h such that

                          |f (x + t) − f (x)| ≤ th(x).

for |t| ≤ 1.


                                        15
A nowhere differentiable
               P              function.P
   Let f (x) = ∞ 1 an sin(b n x), where     an converges quickly but bn an →
∞ rapidly. For concreteness, we take an = 10−n , bn = 106n .
   Then for any n, we can choose t ≈ 1/bn such that ∆an sin(bn x) ≍ an .
For k < n, we have
           X                    X
              ∆ak sin(bk x) ≤      ak bk /bn ≍ an−1 bn−1 /bn ≪ an ,
and for k > n we have
                          ∆ak sin(bk x) ≤ ak ≪ an
Thus ∆f /∆x ≍ an /t ≍ an bn → ∞, so f ′ (x) does not exists.
Riemann’s ‘example’. Riemann thought that the function
                              X
                      f (x) =    exp(2πin2 x)/n2
was nowhere differentiable. This is almost true, however it turns out that
f ′ (x) actually does exists at certain rational points.
Monotone functions. We say f : [a, b] → R is increasing if x ≤ y =⇒
f (x) ≤ f (y). If f or −f is increasing then f is monotone.P
      Example: write Q = {q1 , q2 , . . .} and set f (x) =         −i
                                                            qi <x 2 . Then
f : R → R is monotone increasing, and f has a dense set of points of
discontinuity.
Theorem 2.1 A monotone function f : [a, b] → R is differentiable almost
everywhere.
     Thus the oscillations of the preceding example are necessary to produce
nowhere differentiability.
     Gleason has remarked that this property of monotone functions helped
lead him to his proof of Hilbert’s 5th problem (which topological groups are
Lie groups?).
     The proof of the Theorem will use the Vitali covering lemma.
Vitali coverings. Here is use an important covering argument based on
the ‘greedy algorithm’.
     Let K be a compact subset of a metric space (X, d). A collection of balls
B forms a Vitali covering of K if for every x ∈ K and r > 0 there is a B ∈ B
with x ∈ B ⊂ B(x, r).
     We can be rather loose about the boundary of B: it is only necessary
that B(y, s) ⊂ B ⊂ B(y, s) for some open ball B(y, s). In the case of the
real numbers, this means B can be any interval except a degenerate one
[a, a].

                                     16
Theorem 2.2 For any Vitali covering BS of K, there is a sequence of dis-
joint balls hB(yi , ri )i in B such that K ⊂ B(yi , 3ri ). In fact for any N > 0
we have
                               [N               ∞
                                                [
                          K⊂      B(yi , ri ) ∪   B(yi , 3ri ).
                             1              N +1


Proof. Since K is compact, we can assume B is a countable set of balls
whose diameters tend to zero. (For each n, extract from  S K a finite subcover
Bn by balls of diameter < 1/n, and replace B with ∞         1 Bn — it is still a
cover in the sense of Vitali.)
    To construct the disjoint balls, we use the greedy algorithm. Let B(y1 , r1 )
be the largest ball in B, and define B(yn+1 , rn+1 ) inductively as one of
the largest balls among those in B disjoint from the ones already chosen,
B(y1 , r1 ), . . . , B(yn ,S
                           rn ).
    We claim K ⊂ B(yi , 3ri ). Indeed, if x ∈ K then x belongs to some
ball B(y, r) ∈ B. If B(y, r) belongs to the sequence of chosen balls B(yi , ri ),
then we are done — x is covered.
    Otherwise, consider the first i for which ri < r. Since B(y, r) was not
chosen at the ith stage in the inductive definition, it must meet one of the
earlier balls — say B(yj , rj ), with j < i. But then we have rj ≥ r, and since
they meet, B(yj , 3rj ) contains B(y, r). In particular, it contains x.
                                                   S
    Now suppose we have N > 0 and x ∈ K − N          1 B(yi , ri ). Then since the
union of the first N balls is closed, there is a ball B(y, r) ∈ B disjoint from
the first N balls and containing x. Once again, by the nature of the greedy
algorithm B(y, r) must meet B(yi , ri ) for some i with ri ≥ r; but this time
     S choice of B(y, r) we can insure that i > N . Since ri ≥ r we have
by our
x∈ ∞   N +1 B(yi , 3ri ).



Theorem 2.3 (Vitali covering lemma) For any Vitali covering B of a
set E ⊂ R of finite measure, and ǫ S> 0, there is a finite collection of disjoint
balls B1 , . . . , Bn in B with m(E△ n1 Bi ) < ǫ.

Proof. Since m(E) is finite, we can find a compact K and an open U
such that K ⊂ E ⊂ U and m(K), m(E) and m(U ) all differ by at most ǫ.
Remove from B any balls that are not contained in U ; then B is still a Vitali
covering of E, and hence of K.
    Now extract a sequence of disjoint balls hBi = B(yi , riS
                                                            )i from BPby the
greedy algorithm. Then by Vitali’s Lemma, we have m( Bi ) =             2ri ≤


                                       17
                                                       P∞                       Sn
m(U ) < ∞, soSwe can choose n > 0 such that              n+1 ri < ǫ. Then K −    1 Bi
is covered by ∞
              n+1 B(yi , 3ri ), and therefore
                                n
                                [              ∞
                                               X
                        m(K −         Bi ) ≤         6ri < 6ǫ.
                                  1            n+1
                                         S                        S
We also have m(E −K) < ǫ, so m(E − Sn1 Bi ) < 7ǫ. Finally m( n1 Bi −E) ≤
m(U − E) < ǫ, so we conclude m(E△ n1 Bi ) < 8ǫ.
    Proof of monotone differentiability. We will assume f : [a, b] → R is
monotone increasing. For any set A ⊂ R let [A] be the smallest interval
containing it, so m[A] = sup A − inf A.
    Fix rational numbers 0 ≤ u < v and consider the set E ⊂ [a, b] of those
x for which there are arbitrarily small t such that m[f (x + t), f (x)] ≤ ut
and also arbitrarily small t such that m[f (x − t), f (x)] ≥ vt. This means the
derivative of f measured from above x wants to lie below u, but from the
right is wants to lie above v, and we have u < v so f is not differentiable at
x.
    The set of all points where f is not differentiable is a countable union
of sets of the same basic form as E, so we will be content to show E has
measure zero. Also the points of discontinuity of f are countable, so we can
assume f is continuous on E.
    The idea of the proof is to show that m(f (E)) = um(E) = vm(E) and
thus m(E) = 0.
    More precisely, there is a Vitali covering B of E by intervals of the form
B = [x, x + t] with m[f (B)]/m(B) S    < u. From these extract a finite disjoint
cover B1 , . . . Bn with m(E△ n1 Bi ) < ǫ. Then we have
                   X                  X
                       m[f (Bi )] ≤ u   m(Bi ) ≤ u(m(E) + ǫ).
                        Sn
    Now let A = E ∩ 1 int(Bi ). There is a Vitali covering of A by intervals
C = [x − t, x] expanded under f by a factor of at least v, and with C ⊂ Bi
for some
     P i. We can extract a finite union of disjoint balls C1 , . . . Cm such
that     m(Ci ) > m(A) − ǫ > m(E) − 2ǫ. Then we find
                   X                  X
                       m[f (Ci )] ≥ v   m(Ci ) ≥ v(m(E) − 2ǫ).
But each Ci is a subset of some Bj , so we have
                                      m
                                      X
              v(m(E) − 2ǫ) ≤              m[f (Ci )]
                                      1
                                      n
                                      X
                              ≤           m[f (Bj )] ≤ u(m(E) + ǫ).
                                      1


                                          18
Letting ǫ → 0 we find vm(E) ≤ um(E) and thus m(E) = 0.

Theorem 2.4 (Integral of the derivative) If f : [a, b] → R is mono-
          Rb
tone, then a f ′ (x) dx ≤ f (b) − f (a).

Proof. Define fn (x) = n(fR(x + 1/n) − f (x)) ≥ 0. Then
                                                     R    fn (x) → f ′ (x), so
                              ′
by Fatou’s lemma we have f ≤ lim inf inf fn . But fn is, for n large, the
difference between the averages of f over two disjoint intervals, so it is less
than or equal to the maximum variation f (b) − f (a).


         1




       0.8




       0.6




       0.4




       0.2




                     0.2          0.4          0.6          0.8          1




               Figure 1. Cantor’s function: the devil’s staircase.


Singular functions. A monotone function is singular if f ′ (x) = 0 a.e.
An example is the Cantor function or ‘devil’s staircase’,
                              X
       f (0.a1 a2 a3 . . .) =   {2−i : ai ≤ 1 and aj 6= 1, 1 ≤ j < i.}

where x = 0.a1 a2 a3 . . . in base 3.
   This monotone function has the amazing property that it is continuous,
and it climbs from 0 to 1, but f ′ (x) = 0 a.e. On the other hand, f ′ (x)
does not exist (or equals infinity) for x in the Cantor set (in fact f stretches


                                        19
intervals of length 3−n to length 2−n , and so even for a monotone function
f ′ (x) can fail to exist on an uncountable set (necessarily of measure zero).
      There is a more sophisticated example, due to Whitney, of a function
f (x, y) on the plane whose derivatives exist everywhere, but which is not
constant on its critical set. This function describes the topography of a hill
with a (fractal) road running from top to bottom passing only along the
level or flat parts of the hillside.
Bounded variation. We note that if f = g − h where g and h are both
monotone, then f ′ (x) also exists a.e. So it is desirable to characterize the
full vector space of functions spanned by the monotone functions.
    A function f : [a, b] → R has bounded variation if

                         n
                         X
                   sup       |f (ai ) − f (ai−1 )| = kf kBV < ∞.
                         1

Here the sup is over all finite dissections of [a, b] into subintervals, a = a0 <
a1 < . . . an = b. This supremum is called the total variation of f over [a, b].

Theorem 2.5 A function f is of bounded variation iff f (x) = g(x) − h(x)
where g and h are monotone increasing.

Proof. Clearly kf kBV = f (b) − f (a) if f is monotone increasing, and thus
f has bounded variation if it is a difference of monotone functions.
   For the converse, define
                                  n
                                  X
                  f+ (x) = sup            max(0, f (ai ) − f (ai−1 )),
                                      1

over all partitions a = a0 < . . . < an = x, and similarly
                                 n
                                 X
                 f− (x) = sup             max(0, −f (ai ) + f (ai−1 )).
                                  1

Clearly f+ and f− are monotone increasing, and they are bounded since the
total variation of f is bounded.
    We claim f (x) = f (a) + f+ (x) − f+ (x). To see this, note that if we refine
our dissection of [a, b], then both f+ and f− increase. Thus for any ǫ > 0, we
can find a dissection for which both sums are within ǫ of their supremums.




                                              20
But for a common partition, it is clear that
                 n
                 X
           sup       max(0, f (ai ) − f (ai−1 )) − max(0, −f (ai ) + f (ai−1 ))
                 1
                     n
                     X
           = sup         f (ai ) − f (ai−1 ) = f (x) − f (a).
                     1

Thus f (x) = f (a) + f+ (x) − f− (x).


Corollary 2.6 Any function of bounded variation is differentiable a.e.

Theorem 2.7 (Lebesgue Density) Let E ⊂ R be a measurable set. Then
for almost every x ∈ R,
                                        (
                       m(E ∩ B(x, r))    1 if x ∈ E,
                   lim                =
                  r→0   m(B(x, r))       0 otherwise.


RDerivative
  x
               of the integral. This theorem says that if we let F (x) =
                                           ′                      ′
  −∞ f (t) dt, where f (t) = χE (t), then F (x) exists a.e. and F (x) = f (x)
a.e. We will eventually prove that this is the case for all integrable f .
   Proof of Lebesgue density. We consider the case E ⊂ [0, 1]. Let En be
the set of x ∈ E such that lim inf m(E ∩ B(x, r))/2r < 1 − 1/n. Using the
Vitali lemma,
         S     we can find a finite set of disjoint intervals I1 , . . . IN such that
m(En △ Ii ) < ǫ and the density of E in Ii is less than 1 − 1/n. Then
                                     [      X m(E ∩ Ii )
        m(En ) − ǫ ≤ m(E ∩           Ii ) =                m(Ii )
                                                   m(Ii )
                                     X
                         ≤ (1 − 1/n)      m(Ii ) ≤ (1 − 1/n)(m(En ) + ǫ).

Since ǫ was arbitrary, we get m(En ) ≤ (1 − 1/n)m(En ) and therefore
m(En )=0.                                                            S
    Thus the limit in the Theorem exists and equals 1 for all x ∈ E − En ,
so we have demonstrated half of the Theorem. For the other half, replace E
with [0, 1] − E.




                                            21
   The Lebesgue density theorem has many basic applications in ergodic
theory. Here is an example.

Theorem 2.8 Let θ ∈ R − Q be an irrational number, and define f : S 1 →
S 1 by f (x) = x+θ mod 1. Then f is ergodic: if E ⊂ S 1 has positive measure,
and f (E) ⊂ E, then m(E) = 1.

Proof. Let δr (x) = m(E ∩ B(x, r))/m(B(x, r)). Since E has positive
measure, there is an x0 ∈ E such that for any ǫ > 0 there is an r > 0 with
δr (x0 ) > 1 − ǫ. By invariance of E, δr is constant along the orbits of f . But
each orbit is dense, so we have δr (x) > 1 − ǫ along the dense set hf n (x)i.
Since δr (x) is continuous, it is bounded below by 1 − ǫ everywhere. Thus
limr→0 δr (x) = 1 = χE (x) a.e., and thus m(E) = 1.
     Corollary. Any measurable function h : S 1 → R, invariant under the
irrational rotational f , is constant a.e.
Proof. For any partition of R into disjoint intervals Ii of length ǫ, we have
m(f −1 (Ii )) = 1 for exactly one i. As ǫ → 0, this distinguished interval
shrinks down to the constant value assumed by f .
Absolute continuity. A function F : [a, b] → R is absolutely continu-
ous if for any ǫ > 0, there is aPδ > 0 such that forP       any finite set of non-
overlapping intervals (ai , bi ), if n1 |ai − bi | < ǫ then n1 |f (ai ) − f (bi )| < δ.

Theorem 2.9 An absolutely continuous function is continuous and of bounded
variation.

Proof. Continuity is clear. As for bounded variation, choose ǫ and δ as
above; then over any interval of length δ, the total variation of f is at most
ǫ, so over [a, b] we have variation about ǫ(b − a)/δ.


Theorem 2.10 Let F : [a, b] → [c, d] be an absolutely continuous homeo-
morphism. Then m(A) = 0 implies m(F (A)) = 0.

Proof. Given ǫ > 0, choose δ as guaranteed by absolute  P           continuity, and
cover A by disjoint open intervals Ii = (ai , bi ) with ∞  1   |b i − ai | < δ. Since
f is a homeomorphism, we have
                    [           X                   X
      m(f (A)) ≤ m( f (Ii )) ≤      m(f (Ii )) =       |f (bi ) − f (ai )| < ǫ.

Thus m(f (A)) = 0.


                                          22
Theorem 2.11 The derivative D(F ) = f (x) = F ′ (x) establishes a bijective
correspondence:
         D : {absolutely continuous F : [a, b] → R, F (a) = 0} ↔
               {integrable f : [a, b] → R} .
                                         Rx
The inverse is given by I(f ) = F (x) = a f (t) dt.
                                              Rx
Lemma 2.12 If f is integrable then F (x) = a f is absolutely continuous.

Proof. R This follows from the fact that for any ǫ > 0 there is a δ > 0 such
that A |f | < ǫ whenever m(A) < δ.
    Lemma. If f is absolutely continuous, then it is of bounded variation,
so f ′ (x) is integrable.
Proof. The bounded variation is clear; then f = f+ − f− , both monotone
increasing, and we have
   Z            Z
        |f | ≤ f+′ + f−′ ≤ f+ (b) − f+ (a) + f− (b) − f− (a) = kf kBV < ∞.
          ′


    Now we show the derivative of an integral gives the expected result. We
have already proved this for the indicator function of a measurable set; the
following argument gives a different proof.              Rx
    Lemma. If f : [a, b] → R is integrable, and F (x) = a f (t) dt = 0 for all
x, then f = 0. (This shows injectivity of the map I.)
Proof. Consider the collection of all sets over which the integral of f is
zero. By assumption this contains all intervals in [a, b], and it is closed
under countable unions and complements. Thus it contains all closed sets
in [a, b]. But if f 6= 0, then either
                                 R    {f > 0} or {f < 0} contains a closed set
F of positive measure. Then F f 6= 0, contradiction. Thus f = 0.
Theorem 2.13 If f is bounded, then F = I(f ) is Lipschitz and satisfies
F ′ (x) = f (x) a.e.

Proof. Suppose
            Rc      |f | ≤ M ; then clearly |F (x + t) − F (x)| ≤ M t. We
will show a F ′ (x) − f (x) dx = 0 for all c. To this end, just note that
F ′ (x) = lim Fn (x) = n(F (x + 1/n) − F (x)) satisfies |Fn | ≤ M , so it is a
pointwise limit of bounded functions. Thus
     Z c                  Z c                    Z b+1/n      Z a+1/n !
          ′
         F (x) dx = lim       Fn (x) dx = lim n          F−           F
     a                     a                            c      a
                                      Z c
                  = F (c) − F (a) =         f (x) dx,
                                       a


                                      23
by continuity of F .


Theorem 2.14 Even if f is unbounded, but integrable, we have D(I(f )) =
f.

Proof. By linearity, it is enough to prove this assertion for positive f . Let
fn = min(n, f ) → f , an increasing sequence, and let Fn = I(fn ). Then
F = I(f − fn ) + Fn and since I(f − fn ) is a monotone increasing function,
we have
                           F ′ (x) ≥ Fn′ (x) = fn (x)
a.e. (using the result D(I(fn )) = fn for bounded fn ). Therefore
                Z c             Z c
                      ′
                    F (x) dx ≥      fn (x) dx = Fn (c) → F (c).
                 a                   a

On the other hand,
                       Z c
                             F ′ (x) dx ≤ F (c) − F (a) = F (c)
                        a

by our general results on integration of increasing functions. Thus equality
holds, and we have shown
                          Z c
                              F ′ (x) − f (x) dx = 0
                                a

for all c. Thus F ′ (x) = f (x) a.e.
    Now we turn to the converse inequality: to show I(D(F )) = F for all
absolutely continuous F . This direction is a little easier.
    Lemma. If F is absolutely continuous and F ′ (x) = 0 a.e. then F is
constant.
Proof. (This verifies injectivity of D.) Pick any c ∈ [a, b]. Using the Vitali
lemma, cover [a, c] with a finite number of intervals I1 , . . . , In such that
|∆F/∆t| < ǫ over these intervals, and what’s left over has total measure
at most ǫ. Then by absolutely continuity, the total variation of F over the
complementary intervals is at most δ. Thus
                                     X
             |F (c) − F (a)| ≤ δ + ǫ     m(Ii ) ≤ δ + ǫ(b − a),

and this can be made arbitrarily small so F (c) = F (a).



                                          24
Theorem 2.15 I(D(F )) = F .

Proof. Let f = F ′ (x), and let G = I(f ); then we’ve seen that G is
absolutely continuous, and G′ (x) = f (x) = F ′ (x) a.e., so (G − F )′ (x) = 0
a.e. implies G − F is a constant. By our normalization, G(a) = F (a) = 0,
so F = G = I(D(F )).

   Summary: letting M =monotone functions, we have
                                              Z
                 BV = M − M ⊃ AC ⇐⇒ f = f ′ .

We will eventually see the differentiation form of this setup:

      {signed µ} = {µ − ν : µ, ν ≥ 0} ⊃ {µ = f (x) dx} ⇐⇒ L1 (R).

Convexity. A function f : R → R is convex if for all x, y ∈ R and t ≥ 0 we
have
                f (tx + (1 − t)y) ≤ tf (x) + (1 − t)f (y).
In other words, the graph of the function f lies below every one of its chords.

Theorem 2.16 The right and left derivatives of a convex function exist for
all x, and agree outside a countable set.

Proof. The secant lines move monotonely.

    We have yet to use the Monotone Convergence Theorem. When can we
assert that the approximations to the derivative, ft (x) = (f (x + t) − f (x))/t,
converge to f ′ (x) monotonely as t decreases to zero?
    Answer: when f is a convex function!

Theorem 2.17 A function f is convex iff f is absolutely continuous and
f ′ (x) is increasing.

Proof. Suppose f is convex. Then the slope of the secant line ft (x) =
(f (x + t) − f (x))/t is an increasing function of t and of x. It follows that
ft (x) is uniformly bounded on any compact interval [c, d] in the domain of
f . Thus f is Lipschitz, which implies it is absolutely continuously. Finally
f ′ (x) is increasing since it is a limit of increasing functions.



                                       25
    For the converse, just note that when f is absolutely continuous, the
secant slope                        Z
                                   1 x+t ′
                          ft (x) =      f (s) dx
                                   t x
is just the average of f ′ . But the average of an increasing function is itself
increasing, so the secants of the graph of f have increasing slope, which
implies f is convex.


Corollary 2.18 If f (x) is convex, then f ′′ (x) exists a.e. and f ′′ (x) ≥ 0.

Theorem 2.19 (Jensen’s inequality) If f : R → R is a convex function,
and X : [0, 1] → R is integrable, then
                    Z      Z         Z 1
                  f      X ≤ f (X) =       f (X(t)) dt.
                                              0

Proof. First note that equality holds if f is a linear function. Also, both
sides of the equation are linear functions of f (under pointwise addition).
So it is enough to prove
                   R     the result after modifying f by a linear function. To
this end, let m = X be the mean of X, take a linear supporting function
g(x) = ax + b with g(m)
                     R    = f (m) andR g(x) ≤ f (x) otherwise; and replace f
with f − g. Then f ( X) = 0 but f (X) ≥ 0.

Probabilistic interpretation. If f is convex, then E(f (X)) ≥ f (E(X))
for any random variable X. Jensen’s theorem is this statement where the
distribution of the random variable is dictated by the function X : [0, 1] → R.
It includes δ-masses as a special case, since these are obtained when X is
a simple function.
    The definition of convexity says the result holds for random variables
assuming just two values x or y, with probabilities t and (1 − t) respectively.
A bettor’s dilemma. You are about to gamble with $100 at a fair game.
A generous patron has offered to square your holdings. Do you ask for this
boost before you start playing, to increase your stakes, or after you have
gambled, to increase your payoff?
    Answer: let X denote your payoff. Fairness means E(X) = 100. Since x2
is convex, E(X 2 ) ≥ (E(X))2 , so squaring your payoff is better on average.
Arithmetic/Geometric
√                           Mean. As is well-known, for a, b > 0, we have
  ab ≤ (a + b)/2, because:
                          √    √                      √
                     0 ≤ ( a − b)2 /2 = (a + b)/2 − ab.

                                      26
More generally, considering a random variable that assumes values a1 , . . . an
with equal likelihood, the concavity of the logarithm implies
                             X 
                             1            1X
                        log        ai ≥         log ai
                             n            n

and thus                     Y 1/n   1X
                               ai    ≤    ai .
                                       n
Mnemonic: To remember the direction of this inequality, note that if
ai ≥ 0 but a1 = 0, then the geometric mean is zero but the arithmetic mean
is not.
Appendix: Measure on [a, b]. There is a correspondence between mono-
tone functions f : [a, b] → R and positive, finite measures µ on [a, b], namely:

                                f (x) = µ[a, x).

(This function is always continuous on one side: we have f (xn ) → f (x) if
xn ↑ x.)
    Now we will later see that µ = µa + µs , where µa and µs are absolutely
continuous and singular with respect to Lebesgue measure. (That    R  is, µs
vanishes outside a set of Lebesgue measure zero, while µa (E) = E g for
some positive integrable g.) Also [a, b] may contain countably many ‘atoms’
for µ, i.e. points with µ(p) > 0 (delta masses).
    Then we have the following dictionary:

           Functions                         Measures
           f is monotone increasing          µ is a positive measure
           f ′ exists a.e.                   f ′ = g = dµa /dx a.e.
           f is singular                     µ = µs
           f is absolutely continuous        µ = µa
           f is discontinuous at p           p is an atom for µ
           countably many discontinuities    countably many atoms

    Finally one can also consider signed measures; these correspond to func-
tions of bounded variation, and the canonical representation of f as a
difference of monotone functions corresponds to the Hahn decomposition,
µ = µ+ − µ− , µ+ and µ− mutually singular positive measures.


                                        27
3    The Classical Banach Spaces
A normed linear space is a vector space V over R or C, equipped with a
norm kvk ≥ 0 defined for every vector, such that:
    kvk = 0 =⇒ v = 0;
    kαvk = |α| · kvk; and
    kv + wk ≤ kvk + kwk. A norm is the marriage of metric and linear
structures. It determines a distance by d(v, w) = kv − wk.
    A Banach space is a complete normed linear space.
The unit ball. It is frequently useful to think of a norm in terms of its
closed unit ball, B = {v : kvk ≤ 1}. Then we can recover the norm by
kvk = inf{α > 0 : v ∈ αB}. The conditions above insure:
    B contains no line through the origin;
    B is symmetric; and
    B is convex. Conversely, when checking the sub-additivity of a norm, it
suffices to show B is convex.

Theorem   P 3.1 (Verifying completeness) A normed P linear space is com-
plete iff   kai k < ∞ =⇒ there is an a ∈ V such that N1 ai → a.


Proof. If ai is a Cauchy sequence in V we can pass to a subsequence such
that d(ai , ai+1 ) < 2i . Then a1 + (a2 − a1 ) + (a3 − a2 ) + . . . is absolutely
summable, so it sums to some s ∈ V , and ai → s. The converse is obvious.


Example: C(X). Let X be any compact Hausdorff space, and let C(X)
be the vector spaceP of continuous functions f : X → R. Define kf k =
supX |f |. PThen     kfi k < ∞ implies the sum converges uniformly, and
therefore    fi (x) = f (x) exists and is continuous; thus C(X) is a Banach
space.
Example: ℓp(I). For any index set I, and 1 ≤ p ≤ ∞, we let ℓp (I) denote
the space of sequences a = hai : i ∈ Ii with
                                                        !1/p
                                        X
                          kakp =               |ai |p          ,
                                           I
                         kak∞ = sup |ai |.
                                       I

The outer exponent is put in to give homogeneity of degree one.


                                       28
    Thus ℓp (2) gives a norm on R2 , with the unit ball defined by xp + y p ≤ 1.
Note that as p increases from 1 to ∞, these balls are all convex, and they
move steadily from a diamond through a circle to a square. In R3 they move
from an octahedron through a sphere to a cube.
    The ‘usual’ ℓp spaces refer to ℓp (N). We also have c = c(N) = C(N ∪ ∞),
the space of convergent sequences with the sup norm, and c0 ⊂ c, the space
of sequences converging to zero.
The Lp spaces. For any measurable subset E ⊂ R, and 1 ≤ p ≤ ∞,
we
R define  Lp (E) as the set of measurable functions f : E → R such that
       p
 E |f | < ∞; and set
                                Z          1/p
                                          p
                     kf kp =          |f |       ,
                                  E
                   kf k∞ = inf{M ≥ 0 : |f | ≤ M a.e}.
Actually for the norm of f to vanish, it is only necessary for f to vanish a.e.,
so the elements of Lp are technically equivalence classes of functions defined
up to agreement a.e.
Indicator functions. If m(A) is finite, then kχA kp = (m(A))1/p → 1 as
p → ∞.
    The scale of spaces. If m(E) < ∞ then L∞ (E) ⊂ Lp (E) ⊂ L1 (E), i.e.
the Lp spaces shrink as p rises.
    If m(E) = ∞ then there is no comparison.

Theorem 3.2 For 1 ≤ p ≤ ∞, the space Lp (E) with the norm above is a
Banach space.

Theorem 3.3 (Minkowski’s inequality) kf + gkp ≤ kf kp + kgkp . For
1 < p < ∞, equality holds iff f and g lie on a line in Lp .

Proof. As mentioned above, it suffices to verify convexity of the unit ball;
that is, assuming kf k = kgk = 1, we need only verify
                             ktf + (1 − t)gk ≤ 1
for 0 < t < 1. In fact by convexity of the function xp , p > 1, we have
         Z                    Z
           |tf + (1 − t)g| ≤ t|f |p + (1 − t)|g|p ≤ t + (1 − t) = 1.
                          p


This proves B is convex. For 1 < p, the strict convexity of xp gives strict
convexity of B, furnishing strict inequality unless f and g lie on a line.


                                      29
                                                               P
Completeness.P      It remains to show Lp is complete. Suppose
                                                        R p     Pkfi kp < ∞.
Let F (x) = |fi (x)|. Then by monotone convergence, F ≤ ( ∞                 p
                                                                  1 kfi kp ) ,
so F (x) P                                 p
          is finite a.e. and it lies in L . Therefore the same P is true for
f (x) =     fi (x), since |f (x)| ≤ F (x); and we have kf kp ≤    kfi kp . By
virtue of the last inequality we also have
                              n
                              X             ∞
                                            X
                       kf −       fi kp ≤         kfi kp → 0,
                              1             n+1

and thus every absolutely summable sequence is summable, and Lp is com-
plete.



Theorem 3.4 (Cauchy-Schwarz-Bunyakovskii inequality) If f and g
are in L2 , then f g is in L1 and
                                   Z
                           hf, gi = f g ≤ kf k2 kgk2 .


Proof. We can assume f, g ≥ 0. For any t > 0 we have

          kf + tgk2 ≤ (kf k + tkgk)2 ≤ kf k2 + 2tkf kkgk + O(t2 ),

while at the same time

          kf + tgk2 = kf k2 + 2thf, gi + t2 kgk2 ≥ kf k2 + 2thf, gi;

comparing terms of size O(t), we find kf kkgk ≥ hf, gi.

    This inner product hf, gi is a symmetric, definite bilinear form making
L2 into a Hilbert space. It is an infinite-dimensional analogue of the inner
product in Rn . For example, if E and F are disjoint measurable sets, then
L2 (E) and L2 (F ) are orthogonal subspaces inside L2 (R).
Hölder’s inequality. Let’s try to mimic this argument for f ∈ Lp and
g ∈ Lq , with 1/p + 1/q = 1. Then f p/q ∈ Lq , and using the binomial
expansion for (a + b)q we have:

           kf p/q + tgkqq ≤ kf p/q kqq + qtkf p/q kq−1         2
                                                   q kgkq + O(t )
                          = kf kpp + qtkf kp kgkq + O(t2 )



                                       30
since (q − 1)/q = 1/p. On the other hand for f, g ≥ 0 we have (by convexity
of xp ),
                          Z                Z
            p/q      q          p/q
         kf     + tgkq =    |f      + tg| ≥ (f p/q )q + qt(f p/q )q−1 g
                                         q

                                     Z
                              p
                       ≥ kf kp + qt f g.

Putting these inequalities together gives the theorem.

Young’s inequality. One can also prove Hölder’s inequality using the fact
that ab ≤ ap /p + bq /q; this is on the homework.
    (Proof of Young’s inequality. Draw the curve y = xp−1 , which is the
same as the curve x = y q−1 . Then the area inside the rectangle [0, a] × [0, b]
is bounded above by the sum of ap /p, the area between the graph and [0, a],
and bq /q, the area between the graph and [0, b].)

Theorem 3.5 If f : [a, b] → R is absolutely continuous, and f ′ ∈ Lp [a, b],
then f is Hölder continuous of exponent 1 − 1/p.

  If p = 1 we get no information. If p = ∞ we get Lipschitz continuity.
Proof. We have
                      Z y
    |f (x) − f (y)| =     1 · f ′ (t) dt ≤ kχ[x,y] kq kf ′ kp ≤ kf ′ kp |x − y|1/q .
                          x




Theorem 3.6 (Density of simple functions) For any p and E, simple
functions are dense in Lp (E). For p 6= ∞, step, continuous and smooth
functions are dense in Lp (R).

Proof. First we treat f ∈ L∞ . Then f is bounded, so it is a limit of simple
functions in the usual way (cut the range into finitely many small intervals
and round f down so it takes values in the endpoints of these intervals).
   Now for f ∈ Lp , p 6= ∞, we can truncate f in the domain and range to
obtain bounded functions with compact support, fM → f . Since f −fM → 0
pointwise and |f − fM |p ≤ |f |p , dominated convergence shows kf − fM kp →
0. Finally we can find step, continuous or smooth
                                                R       functions gn → FM
pointwise, and bounded in the same way. Then |gn −FM |p → 0 by bounded
convergence, so such functions are dense.


                                          31
Note! The step, continuous and smooth functions are not dense in L∞ !
Lp as a completion. Given say V = C0∞ (R) with the L2 -norm, it is
exceedingly natural to form the metric completion V of V and obtain a
Banach space. But what are the elements of this space? The virtue of
measurable functions is that they do suffice to represent all elements of V .
    It is this completeness that makes measurable functions as important as
real numbers.
Duality. Given a Banach space X, we let X ∗ denote the dual space of
bounded linear functionals φ : X → R, with the norm

                                            |φ(x)|
                             kφk =       sup       ·
                                     x∈X−{0} kxk

There is a natural map X → X ∗∗ . If X = X ∗∗ then X is reflexive.

Theorem 3.7 (Riesz-Fischer) Let 1/p + 1/q = 1, with 1 < p, q < ∞.
Then Lp [a, b]∗ = Lq [a, b] and vice-versa; in particular, Lp is reflexive.

Proof. Suppose p 6= ∞. Let φ : Lp [a, b] → R be a bounded linear functional,
with |φ(f )| ≤ M kf k. Define

                                G(x) = φ(χ[a,x] ).
                                                              P
Then for any collection of disjoint intervals (ai , bi ) with    |ai − bi | < δ, we
have
       X                          X                        X              
           |G(ai ) − G(bi )| =        |φ(χ(ai ,bi ) )| = φ     ±χ(ai ,bi )
                                     X                1/p
                             ≤ M          |ai − bi |        ≤ M δ1/p ,

since φ(f ) ≤ M kf kp . Thus G(x) is absolutely continuous, and thus there is
an integrable function g(x) = G′ (x) ∈ L1 [a, b] such that
                                 Z               Z
                                      ′
                         φ(χI ) = G (x) dx = χI g
                                     I

for any interval I ⊂ [a, b]. (For p = ∞, the indicator functions χ[a,x] do not
depend continuously on x, so this step fails!)
    Next we check that φ(f ) = hf, gi for all f ∈ L∞ [a, b]. Indeed, if |f | ≤ A
there are step functions fn → f with fn → f pointwise and |fn | ≤ A.
Then fn → f in Lp , so by continuity φ(fn ) → φ(f ). On the other hand,

                                         32
                    R
|fn g| ≤ A|g|, and |g| < ∞, so by the dominated convergence theorem we
have hfn , gi → hf, gi. Since φ(fn ) = hfn , gi, we have φ(f ) = hf, gi.
     Now let gn be the truncation of g to a function with |gn | ≤ n, and choose
the sign of gn and gnα below so the products below are positive. Then:
             Z
                gnq = hgnq−1 , gi = φ(gnq−1 ) ≤ M kgnq−1 kp
                          Z                 1/p        Z           1/p
                                    (q−1)p                        q
                   = M          |gn |               =M        |gn |          ,

since pq = p + q. Thus for every n we have
                       Z
                          |gn |q ≤ M 1/(1−1/p) = M q .

Taking the limit as n → ∞ and applying Fatou’s lemma or monotone con-
vergence, we have kgkq ≤ M .
   Thus by Hölder’s inequality, hf, gi defines a continuous linear functional
on Lp [a, b]. Since φ(f ) = hf, gi on the dense set of bounded functions, we
conclude that equality holds everywhere.
   Finally, Hölder’s inequality shows
                               hf, gi ≤ kf kp kgkq ,
with equality for f = gq/p , so the dual norm on Lp [a, b]∗ agrees with the Lq
norm, kgkq .

    On the other hand, (L1 )∗ = L∞ but (L∞ )∗ 6= L1 .
    The first assertion follows by a modification of the proof above. For an
indication of the second, recall the analogous fact that we used an ultrafilter
to construct a bounded linear function L : ℓ∞ → R, extending the usual
function L(an ) = lim an on c ⊂ ℓ∞ . On the other hand, for any b ∈ ℓ1 we
can find a ∈ c such that L(a) = 1 but ha, bi is as small as we like (slide the
support of a off towards infinity.) Thus L is a linear functional that is not
represented by any element of ℓ1 .
    A similar construction can be carried out extending the point evaluations
from C[a, b] to L∞ [a, b].


4    Baire Category
Theorem 4.1 Let X be a complete
                              T   metric space, and let Ui be a sequence
of dense open sets in X. Then Ui is dense. In particular the intersection
is nonempty (so long as X is nonempty).

                                        33
Proof. We will define a nested sequence of closed balls B0 ⊃ B1 ⊃ . . . by
induction. Let B0 be arbitrary. Since Un is dense, it meets the interior of Bn ;
choose Bn+1 to be any ball contained in Bn ∩Un , with diam Bn+1 ≤ 1/(n+1).
   Then (if X 6= ∅), the centers of the balls Bn form a CauchyT sequence, so
they converge to a limit xT∈ X. By construction, x ∈ B0 ∩ Ui . Since B0
was arbitrary, this shows Ui is dense.

Category. A subset E of a topological space is nowhere dense if the
interior of E is empty. A space is of first category if it is a countable union
of nowhere dense sets; otherwise it is of second category.
    For example, Q is of first category, but Z is not (since every point of Z
is open).
    In a complete metric space, a countable union of nowhere dense sets is
said to be meager; the complement of such a set is residual. A property is
generic if it holds outside a meager set.
Reformulations of Baire’s theorem. Let X be a nonempty complete
metric space, or locally compact space topological space.
      X is of second category.
      A countable
              S intersection of dense Gδ ’s in X is again a dense Gδ .
      If X = Fi then int Fi 6= ∅ for some i.

Measure and category. The sets of measure zero and the meager sets
in R both form σ-ideals (in the ring of all subsets of R). That is, they are
closed under taking subsets and countable unions.

Theorem 4.2 (Uniform boundedness) Let F be a collection of contin-
uous functions on a (nonempty) complete metric space X, such that for each
x the functions are bounded — i.e. supF f (x) ≤ Mx . Then there is a open
set U 6= ∅ on which the functions are uniformly bounded: supU f (x) ≤ M
for all f ∈ F.
                                                                    S
Proof. Let Fn = {x : f (x) ≤ n ∀f ∈ F}. Then Fn is closed and           Fn = X,
so some FM has nonempty interior U .

Diophantine approximation. A real number x is Diophantine of expo-
nent α if there is a C > 0 such that
                                      p   C
                                 x−     > α
                                      q  q
for all rational numbers p/q.

                                      34
Theorem 4.3 If x is algebraic of degree d > 1, then it is Diophantine of
exponent d.

Proof. Let f (t) = a0 td + . . . ad be an irreducible polynomial with integral
coefficients satisfied by x. Then |f (p/q)| ≥ 1/q d . Since |f ′ | is bounded, say
by M , near x, we find

                     q −d ≤ |f (x) − f (p/q)| ≤ M |x − p/q|

and thus |x − p/q| ≥ 1/(M q d ).

    Roth has proved the deep theorem that any algebraic number is Dio-
phantine of exponent 2 + ǫ.
    A number is Diophantine of exponent 2 iff the coefficients in its continued
fraction expansion are bounded. For quadratic numbers, these coefficients
are pre-periodic.
Liouville numbers. We say x is Liouville if x is irrational but for any
n > 0 there exists a rational number with |x − p/q| < q −n . Such a number
is not Diophantine for P
                       any exponent, so it must be transcendental.
    For example, x =      1/10n! is an explicit and easy example of a tran-
scendental number.

Theorem 4.4 (Measure vs. Category) A random x ∈ [0, 1] is Diophan-
tine of exponent 2 + ǫ for all ǫ > 0. However a generic x ∈ [0, 1] is Liouville.

Proof. For the first part, fix ǫ > 0, and let

                 Eq = {x ∈ [0, 1] : ∃p, |x − p/q| < 1/q 2+ǫ }.

Since
P      there are only q choices for p, we find m(Eq ) = O(1/q 1+ǫ ), and thus
   m(Eq ) < ∞. Thus m(lim sup Eq ) = 0 (by easy Borel-Cantelli). But this
means that for almost every x ∈ [0, 1], only finitely rationals approximate x
to within 1/q 2+ǫ . Thus x is Diophantine of exponent 2+ǫ. Taking a sequence
ǫn → 0 we conclude that almost every x is Diophantine of exponent 2 + ǫ
for all ǫ > 0.
    For the second part, just note that

                 En = {x ∈ [0, 1] : ∃p, q, |x − p/q| < 1/q n }
                                             T
contains the rationals and is open. Thus En = L is the set of Liouville
numbers, and by construction it is a dense Gδ .


                                       35
Sets with no category.

Lemma 4.5 The set of closed subsets of R has the same cardinality as R
itself.

Lemma 4.6 A closed subset of R with no isolated points contains a Cantor
set.

Lemma 4.7 Every uncountable closed set E in R contains a Cantor set.

Proof. Consider the subset F of x ∈ E such that F ∩B(x, r) is uncountable
It is easy to see that F is a nonempty, closed set, without isolated points,
using the fact that countable unions preserve countable sets. Thus F con-
tains a Cantor set.



Corollary 4.8 Every uncountable closed set satisfies |F | = |R|.

Corollary 4.9 Every set of positive measure contains a Cantor set.

Proof. It contains a compact set of positive measure, which is necessarily
uncountable.

   By similar arguments, it is not hard to show:

Theorem 4.10 Every dense Gδ X ⊂ [a, b] contains a Cantor set.

Theorem 4.11 There exists a set X ⊂ R such that X and X ′ both meet
every uncountable closed set.

Proof. Use transfinite induction, choosing an isomorphism between R and
the smallest ordinal c with |c| = |R|.

   Such an X is called a Bernstein set.

Corollary 4.12 If X is a Bernstein set, then for any interval [a, b], neither
               e ∩ [a, b] has first category.
X ∩ [a, b] nor X

Proof. If X ∩ [a, b] has first category, then the complement of X contains a
Cantor set K, contradicting the fact that X meets K. The same reasoning
           e
applies to X.


                                     36
    Thus X is an analogue, in the theory of category, of a non-measurable
set. (One can think of a set X that meets some open set in a set of second
category, as a set of positive measure).
Games and category. (Oxtoby, §6.) Let X ⊂ [0, 1] be a set. Players A
                                                              T A1 ⊃ B1 ⊃
and B play the following game: they alternately chooseTintervals
A2 ⊃ B2 · · · in [0, 1], then form the intersection Y = Ai = Bi . Player
A wins if Y meets X, otherwise player B wins.

Theorem 4.13 There is a winning strategy for B iff X has first category.

Proof. If X has first category     S then it is contained in a countable union
of nowhere dense closed sets, T      Fn . Player B simply chooses Bn so it is
disjoint from Fn , and then Bn is disjoint from X.
     Conversely, suppose B has a winning strategy. Then using this strategy,
we can find a set of disjoint ‘first moves’ B1i that are dense in [0, 1]. To
see this, let B1 (A) be B’s move if A1 = A. Let J1 , J2 , . . . be a list of the
intervals with rational endpoints in [0, 1]. Inductively define B11 = B(J1 )
and B1i+1 = B(Jk ) for the first k S  such that Jk is disjoint from B11 , . . . , B1i .
Then every Jk meets some B1 so B1i is dense.
                                 i

     Similarly, we can find disjoint second moves that are dense in B1i for each
i. Putting all these together, we obtain moves B2i , each contained in some
B1i , that are also dense in [0, 1].                                         S
     Continuing in this way,Twe obtain a sequence Bki such that Uk = i Bki
is dense in [0, 1]. Let Z = Uk . Any point x ∈ Z is contained in a unique
nested sequence B1i1 ⊃ B2i2 ⊃ · · · obtained using B’s winning strategy. Thus
x 6∈ X. This shows X is disjoint from the dense Gδ Z, and thus X has first
category.

    By the same reasoning we have:

Theorem 4.14 Player A has a winning strategy iff there is an interval A1
such that I ∩ A1 has second category.

Corollary 4.15 There exists a set X such that neither A nor B has a
winning strategy!

    One might try to take X equal to a non-measurable set P ⊂ [0, 1) ∼
                                                                     =
S 1 = R/Z constructed so that Q + P = S 1 . By the Baire category theorem,
P does not have first category, but it also does not have second category,
since P ∩ P + 1/2 = ∅.

                                          37
    However it might be the case that P ∩ I is small (even empty!) for some
interval I. To remedy this, one considers instead a Bernstein set, i.e. a set
X such that both X and its complement X ′ meet every uncountable closed
subset of S 1 . Then, as we have seen above, X ∩ [a, b] has neither first nor
second category.
Poincaré recurrence. Let X be a finite measure space, and let T : X → X
be a measure-preserving automorphism. Then for any set A of positive
measure, there exists an n > 0 such that m(A ∩ T n (A)) > 0.
Proof. Let E = T (A) ∪ T 2 (A) ∪ . . . be the strict forward orbits of the
elements of A. Then, if A is disjoint from its forward orbit, we find A and E
are disjoint sets and T (A∪E) = E. Thus m(A∪E) = m(E) = m(E)+m(A),
so m(A) = 0.

Recurrence and category. Now suppose X is also a compact metric
space, T : X → X is a measure-preserving homeomorphism, and every
nonempty open set has positive measure. We say x ∈ X is recurrent if x is
an accumulation point of the sequence T n (x), n > 0.

Theorem 4.16 The set of recurrent points is residual and of full measure.

Proof. If x is not a recurrent point, then there is a positive distance from
x to the closure of its forward orbit. That is, for some r > 0 we have

                  x ∈ Er = {y : d(y, T n (y)) ≥ r, ∀n > 0}.

   Note that Er is closed, and hence compact. We claim m(Er ) = 0. If
not, there is a ball such that A = B(x, r/2) ∩ Er has positive measure. But
then A is disjoint from its forward orbit, contrary to Poincaré recurrence.
   Thus Er is a closed set of measure zero, andS hence nowhere dense. Since
the non-recurrent points are exactly the set i E1/i , we see the recurrent
points are residual and of full measure.

The space of homeomorphisms. Let X be a compact metric space.
Let us make the space C(X, X) of all continuous maps f : X → X into
a complete metric space by d(f, g) = sup d(f (x), g(x)). What can we say
about the subset H(X) of homeomorphisms?
    It is easy to see H([0, 1]) is already neither open nor closed. However it
does consist exactly of the bijective maps in C(X, X). Now surjectivity is
a closed condition, and hence a Gδ -condition. What about injectivity? If f


                                     38
is not injective, then there are two points at definite distance, x and y, that
are identified. Thus the non-injective maps are a union of closed sets,
                [
                   {f : ∃x, y ∈ X, d(x, y) ≥ 1/n, f (x) = f (y)}.
               n

(The closedness uses compactness of X). Putting these observations to-
gether we have:

Theorem 4.17 For any compact metric space X, the homeomorphisms
H(X) are a Gδ subset of the complete metric space C(X, X).

The property of Baire. A topological space has the property of Baire if it
satisfies the conclusion of the category theorem: namely if any intersection
of dense Gδ ’s is still dense.

Theorem 4.18 If X is complete and Y ⊂ X is a Gδ , then Y has the
property of Baire.

Proof. Apply the Baire category theorem to Y , in which Y is a dense Gδ .


   (Actually one can re-metrize Y so Y itself is a complete metric space.)
Transitive maps of the square. Oxtoby and Ulam proved that a generic
measure-preserving automorphism of any manifold is ergodic. We will prove
a weaker result that illustrates the method.

Theorem 4.19 There exists a homeomorphism of [0, 1] × [0, 1] with a dense
orbit.

    Let X = [0, 1] × [0, 1]. Since H(X) has the property of Baire, it would
suffice to show that a generic homeomorphism has a dense orbit. But this
is not true! Once there is a disk such that f (D) ⊂ D, any orbit that enters
D can never escape. And in fact any homeomorphism can be perturbed
slightly so that f n (D) ⊂ D for some disk D. The category method has
failed!
Measure-preserving maps. What Oxtoby and Ulam proved is that the
problem can be solved by making it harder.

Theorem 4.20 A generic measure preserving homeomorphism of the square
has a dense orbit.

                                      39
Proof. Let M (X) ⊂ H(X) be the measure-preserving homeomorphisms.
It also has the property of Baire, because it is a closed subset of H(X).
    Consider two balls, B1 and B2 , and let U (B1 , B2 ) ⊂ M (X) be the set of
f : X → X such that f n (B1 ) meets B2 , for some n > 0. Clearly U (B1 , B2 )
is open; we will show it is dense.
    To this end, fix r > 0, and consider any f ∈ M (X). Choose a chain
of points x0 , . . . , xn with x0 ∈ B1 , xn ∈ B2 , and d(xi , xi+1 ) < r. Since a
generic point is recurrent, we can also assume each xi is recurrent. Then we
can also find high iterates yi = T ni (xi ) such that d(xi , yi ) < r.
    Now choose a short path Pi (of length less than 2r) from yi to xi+1 ,
avoiding all other of the points we have considered; including T n (xi ) for
0 ≤ n ≤ ni . Construct a measure-preserving map within distanceSr of the
identity, such that g(yi ) = xi+1 . This map g is supported close to Pi .
    Then g ◦ f , under iteration, moves x0 to yn0 −1 , then to g(f (yn0 −1 )) =
g(yn0 ) = x1 , and then x1 to x2 ), etc.; so that ultimately xn is in the forward
orbit of x0 , and hence f moves B1 into B2 .
    Using a countable base for X, we can now conclude that a generic f ∈
M (X) has the property that for any two nonempty open sets U, V ⊂ X,
there exists an n > 0 such that f n (U ) ∩ V 6= ∅.
    We claim any such f has a dense orbit. Indeed, consider for any open
ball B the set U (B) of x such that f n (x) ∈ B for some n > 0. The set U (B)
is open, and it is dense by our assumption on f . Intersecting these U (B)
over a countable base for X, we find a generic x ∈ X has a dense orbit.

Open problem. Does a generic C 1 diffeomorphism of a surface have a
dense orbit? It is known that a sufficiently smooth diffeomorphism does not
(KAM theory).
   For more discussion, see [Ox, §18] and [Me, Thm. 4.3].


5    Topology
Topological spaces. The collection of open sets T satisfies: X, ∅ ∈ T ;
and finite intersections and arbitrary unions of open sets are open. Metric
spaces give particular examples.
Compactness. A space is compact if every open cover has a finite sub-
cover. Equivalent, any collection of closed sets with the finite intersection
property has a nonempty intersection.

Theorem 5.1 . A subset K ⊂ Rn is compact iff K is closed and bounded.


                                       40
Theorem 5.2 A metric space (X, d) is compact iff every sequence has a
convergent subsequence.

   The first result does not hold in general metric spaces: for example,
the unit ball in ℓ∞ (N) is closed and bounded but not compact. Similarly,
the sequence of functions fn (x) = xn is bounded in C[0, 1], but has no
convergent subsequence.
   The second, we will also see, does not hold in general topological spaces.
Nevertheless both results can be modified so they hold in a general setting.
Total boundedness. A metric space is totally bounded if for any r > 0,
there exists a covering of X by a finite number of r-balls. In Rn , bound-
edness and total boundedness are equivalent; but the latter notion is much
stronger in infinite-dimensional spaces, and gives the correct generalization
of Theorem 5.1.

Theorem 5.3 A metric space (X, d) is compact iff X is complete and to-
tally bounded.

Arzela-Ascoli. Here is application of compactness to function spaces.
    Let C(X) be the Banach space of continuous functions on a compact
metric space (X, d). When does a set of functions F ⊂ C(X) have compact
closure? That is, when can we assure that every sequence fn ∈ F has a
convergent subsequence (whose limit may or may not lie in F)?
    Recall that C(X) is complete, and that a metric space is compact iff it
is complete and totally bounded. The latter property means that for any
r > 0 there is a finite covering of X by r-balls.
    The set F is equicontinuous if all the functions satisfy the same modulus
of continuity: that is, if there is a function m(s) → 0 as s → 0 such that
d(x, y) < s implies |f (x) − f (y)| < m(s) for all f ∈ F. Of course F is
bounded iff there is an M such that |f (x)| ≤ M for all f ∈ F.

Theorem 5.4 F ⊂ C(X) has compact closure iff F is bounded and equicon-
tinuous.

Proof. First suppose F is compact. Then clearly F is bounded. Now take
any ǫ > 0, and cover F by a finite collection of balls B(fi , ǫ/3). Since X is
compact, each fi is uniformly continuous, so there is a δ such that

                d(x, y) < δ =⇒ ∀i, |fi (x) − fi (y)| < ǫ/3.



                                     41
Then for any f ∈ F, we can find fi with d(f, fi ) < ǫ/3, and conclude that
|f (x) − f (y)| < ǫ when d(x, y) < δ. Thus F is equicontinuous.
     Now suppose F is bounded by M , and equicontinuous. To show F is
compact, we need only show F is totally bounded. To this end, fix r > 0, and
by equicontinuity choose δ > 0 such that d(x, y) < δ =⇒ |f (x) − f (y)| < r.
By compactness of X, we can find a finite set E ⊂ X such that B(E, δ) = X.
Similarly we can pick a finite set F ⊂ [−M, M ] that comes within r of every
point.
     For each map g : E → F , let

                      B(g) = {f ∈ F : sup |g − f | < r}.
                                                  E

Since there are only finitely many maps g, and every f is close to some g,
these sets give a finite cover F. Finally if f1 , f2 ∈ B(g), then for any x ∈ X,
there is an e ∈ E within δ of x. We then have

                 |f1 (x) − f2 (x)| ≤ 2r + |f1 (e) − f2 (e)| ≤ 4r,

so diam B(g) ≤ 4r. It follows that F is totally bounded, and thus F is
compact.

    Example: Normal families. Let F be the set of all analytic functions on
an open set Ω ⊂ C with |f (z)| ≤ M . Then F is compact in the topology of
uniform convergence on compact sets.
    Note: The functions fn (z) = z n do not converge uniformly on the whole
disk, so the restriction to compacta is necessary.
Proof. By Cauchy’s theorem, if d(z, ∂Ω) > r, then
                                  Z
                             1                  f (ζ) dζ    2πrM     M
              |f ′ (z)| =                               2
                                                          ≤      2
                                                                   =   ·
                            2πi       S 1 (p,r) (ζ − z)      2πr     r

Thus we can pass to a subsequence converging uniformly on the compact
set Kr = {z ∈ Ω : d(z, ∂Ω) ≥ r}. Diagonalizing, we get a subsequence
converging uniformly on compact sets. Analyticity is preserved in the limit,
so F is a normal family.

Metrizability, Topology and Separation. Our next goal is to formu-
late purely topological versions of the best properties of metric spaces. This
properties will help us recognize when a topological space (X, T ) is metriz-
able, i.e. when there is a metric d that determines the topology T .


                                             42
    Given any collection C of subsets of X, there is always a weakest topology
T containing that collection. We say C generates T .
    A base B for a topology is a collection of open sets such that for each
x ∈ U ∈ T , there is a B ∈ B with x ∈ B ⊂ U . Then U is the union of
all the B it contains, so B generates T . Indeed T is just the union of the
empty set and all unions of subsets of B.
    If B is given, it is a base for some topology iff for any x ∈ B1 , B2 there
is a B3 with x ∈ B3 ⊂ B1 ∩ B2 .
    A sub-base B for a topology T is a collection of open sets such that for
any x ∈ U ∈ T , we have x ∈ B1 ∩ · · · Bn ⊂ U for some B1 , . . . , Bn ∈ B. Any
sub-base also generates T . Conversely, any collection of set B covering X
forms a sub-base for the topology T it generates.
    Example: In Rn , the open half-spaces H = φ−1 (a, ∞) for linear functions
φ : Rn → R form a sub-base for the topology. (By intersecting them we can
make small cubes).
    A base at x is a collection of open sets Bx , all containing x, such that for
any open U with x ∈ U , there is a B ∈ Bx with x ∈ B ⊂ U .
    Example: in any metric space, the balls B(x, 1/n) form a base at x.
Countability axioms. A topological space X is:

   • first countable if every point has a countable base;

   • second countable if there is a countable (sub-)base for the whole space;
     and

   • separable if there is a countable dense set S ⊂ X.

Clearly a second countable space is separable: just choice one point from
each open set.
    Examples. Clearly any metric space is first countable.
    A Euclidean spaces Rn are first and second countable, and separable.
    The space ℓ∞ (N) is not separable or second countable. The uncountable
collection of balls B(χA , 1/2), as A ranges over all subsets of N, are disjoint.
On the other hand, ℓp (N) is separable for 1 ≤ p < ∞.

Theorem 5.5 Any separable metric space is second countable.

Proof. Let (xi ) be a countable dense set of let B = {B(xi , 1/n)}. Then if
x ∈ U , we have x ∈ B(x, r) ⊂ U , and hence x ∈ B(xi , 1/n) ⊂ U as soon as
d(xi , x) < 1/n and 2/n < r.



                                       43
Theorem 5.6 The number of open (or closed) sets in a separable metric
space (like Rn ) is at most |R|.

Proof. |T | ≤ |P(B)| ≤ |P(N)| = |R|.

Corollary 5.7 There are more subsets of R than there are closed subsets.

      Question. Does first countable and separable imply second countable?
No!
      Example. The half-open interval topology. Let

                             B = {[a, b) : a < b};

this is a base for a topology T on R. In this topology, xn → y iff xn
approaches y from above. Thus every strictly increasing sequence diverges.
    This space is first countable and separable. (The rationals are dense.)
But it is not second countable! If a ∈ B ⊂ [a, b), then a must be the
minimum of B. Thus for any base B, the map B 7→ inf B sends B onto R,
and therefore |B| ≥ |R|.
    Cor: (R, T ) is not metrizable.
    This space is sometimes denoted Rℓ ; for an extended discussion, see
Munkres, Topology.
The Lindelöf condition. A topological space is said to be Lindelöf if
every open cover has a countable subcover. A second countable space is
Lindelöf. The space Rℓ above is also Lindelöf, but not second countable. It
is interesting to note that the Sorgenfrey (carefree?) plane, Rℓ × Rℓ is not
Lindelöf (cf. Munkres, Topology, p. 193).
Separation axioms Ti. (T for Tychonoff). Let us say disjoint subsets E,
F of a topological space X can be separated if they lie in disjoint open sets.
The separation axioms (or properties) are:

        T1 (Tychonoff): Points are closed.
        T2 (Hausdorff): Pairs of points x, y are separated.
        T3 (regular): Points are separated from closed sets, and points
        are closed.
        T4 (normal): Pairs of closed sets are separated, and points are
        closed.




                                      44
    Example: any metric space is normal. Given two closed sets A and B,
they are separated by the open sets U = {x : d(x, A) < d(x, B)} and
V = {x : d(x, B) < d(x, A)}.
Zariski topology. Let k be a field. A natural example of a topology that
is not Hausdorff is the Zariski topology on kn . In this topology, a set is F
closed if it is defined by system of polynomial equations: F is the zero set
of a collection of polynomials fα ∈ k[x1 , . . . xn ].
    A base for the topology consists of complements of hypersurfaces, Uf =
kn − Z(f ). Note that Uf ∩ Ug = Uf g , so we indeed have a base.
    By the Noetherian property, the ideal (fα ) is finitely generated, so only
a finite number of polynomials are actually necessary to define F . Geomet-
rically, this means any decreasing sequence of closed sets, F1 ⊃ F2 ⊃ F3 . . .,
eventually stabilizes. In particular, R2 is compact .
    On R, the Zariski topology is the cofinite topology. On Rn , any two
nonempty open sets meet; i.e. Rn cannot be covered by a finite number of
hypersurfaces. Thus the Zariski topology is T1 but not T2 .
The spectrum of a ring. Given a ring A, one also defines the Zariski
topology on the set Spec A of all prime ideals p ⊂ A, by taking the closed
sets to have the form V (a) = {p : p ⊃ a}, where a ranges over all ideals in
A. A point p ∈ Spec A is closed iff p is a maximal ideal.
    Thus Spec A is usually not even Hausdorff. In fact, for any ring A, the
‘generic point’ p coming from the ideal (0) is dense; its closure is the whole
space.

Theorem 5.8 A compact Hausdorff space X is normal.

Proof. We first show X is regular. Let p be a point outside a closed set
F . Then for each x ∈ F there are disjoint openSnsets x ∈ Ux Tand p ∈ Vx .
Passing to a finite subcover of F , we have F ⊂ 1 Ui and p ∈ n1 Vi .
    Now to prove normality, suppose E and F are disjoint closed sets. Then
for each x ∈ E, there is are disjoint openSsets with x ∈ T
                                                         Ux and F ⊂ Vx .
Passing to a finite subcover, we have E ⊂ n1 Ui and F ⊂ n1 Vi .


Theorem 5.9 (Urysohn’s Lemma) Let A, B be disjoint closed subsets of
a normal space X. Then there exists a continuous function f : X → [0, 1]
such that f (A) = 0 and f (B) = 1.

Proof. Let U0 = A and let U1 = X. The closed set A is a subset of the
         e By normality, there exists an open set U1/2 with A ⊂ U1/2 ⊂
open set B.

                                      45
        e Iterating this construction, we obtain a family of open sets Ur
U1/2 ⊂ B.
indexed by the dyadic rationals in [0, 1] such that Ur ⊂ Ur ⊂ UsSwhenever
                             : x ∈ Ur }. Then {x : f (x) < s} = r<s Ur is
r < s. Now let f (x) = inf{r T
open, and {x : f (x) ≤ s} = r>s Ur is closed, so f is continuous.


Corollary 5.10 In a normal space, there are sufficiently many functions
f : X → R to generate the topology on X.

Proof. We must show that every closed set A is the intersection of level
sets of functions. But for any p 6∈ A we can find a function with f (A) = 0,
f (p) = 1, and so we are done.


Theorem 5.11 (Tietze Extension) If X is normal and A ⊂ X is closed,
then every continuous function f : A → R extends to a continuous function
on X.

  Actually Tietze generalizes Urysohn, since the obvious function f : A ⊔
B → {0, 1} is continuous and A ⊔ B is closed.
Approximating sets by submanifolds. For any compact set X ⊂ Rn ,
and r > 0, there exists a smooth compact submanifold lying within B(X, r)
and separating X from ∞.
Proof. Smooth the function given by Tietze and apply Sard’s theorem.
    Cor. Any compact set in R2 can be surrounded by a finite number of
smooth loops. Any Cantor set in R3 can be surrounded by smooth closed
surfaces; but their genus may tend to infinity! (Antoine’s necklace).
Weak topology. Given a collection of functions F on a set X, we can
consider the weakest topology which makes all f ∈ F continuous. A base
for this topology is given by the sets of the form

                f1−1 (α1 , β1 ) ∩ f2−1 (α2 , β2 ) ∩ . . . fn−1 (αn , βn ),

where fi ∈ F. We have xn → x iff f (xn ) → f (x) for all f ∈ F.
    The weak topology on a Banach space X is the weakest topology making
all φ ∈ X ∗ continuous. For example, fn → f weakly in L1 iff
                              Z         Z
                                fn g → f g




                                           46
for all g ∈ L∞ . This topology is weaker than norm convergence; e.g. the
functions fn (x) = sin(nx) converge weakly to zero in L1 [0, 1], but they do
not convergence at all in the norm topology.
Products.
       Q      Given any collection of topological spaces {Xα }, the product
X =       Xα can be endowed with the Tychonoff topology, defined by the
sub-basic sets B(U, α) = {x ∈ X : xα ∈ U } where U ⊂ Xα is open.
    This is the weakest topology such that all the projections fα : X → Xα
are continuous.
    Example: For any set A, RA is the set of all functions f : A → R,
and fn → f in the Tychonoff topology iff fn (a) → f (a) for all a ∈ A.
So the Tychonoff topology is sometimes called the topology of pointwise
convergence.
    Example: In X = (Z/2)A ∼  = P(A), we have An → A iff (x ∈ A iff x ∈ An
for all n ≫ 0).
                                                                   Q
Theorem 5.12 If Xi is metrizable for i = 1, 2, 3, . . ., then so is ∞1 Xi .

Proof. Replacing the metric di by P
                                  min(di , 1), we can assume
                                                          Q each Xi has
                                     −i
diameter at most 1. Then d(x, y) = 2 d(xi , yi ) metrizes Xi .

   For example, RN is metrizable.
Theorem 5.13 (Urysohn metrization theorem) A second countable topo-
logical space X is metrizable iff X is normal.

Proof. Clearly a metric space is normal. For the converse, let (Bi ) be a
countable base for X. For each pair with Bi ⊂ Bj , construct a continuous
function fij : X → [0, 1] with fij = 0 on Bi and fij = 1 outside Bj . Let F
be the collection of all such functions, and consider the natural continuous
map f : X → [0, 1]F , sending x to (fij (x)). Since F is countable, f (X) is
metrizable; we need only show that the inverse map f (X) → X is defined
and continuous.
    To see the map f (X) → X is defined, we must show f is injective. But
given any points x 6= y, we can find open sets with x ∈ Bi ⊂ Bj and y
outside Bj ; then fij separates x from y.
    To see f (X) → X is continuous, we just need to show that the weakest
topology T ′ making all the functions fij continuous is the original topology
T on X. But if x ∈ U ∈ T , then there are basis elements with x ∈ Bi ⊂
Bj ⊂ U . Then V = fij−1 [0, 1/2) is in T ′ , and we have x ∈ Bi ⊂ V ⊂ Bj ⊂ U .
Since this holds for every x ∈ U , we conclude that U ∈ T ′ and thus T = T ′ .



                                     47
Regularity v. Normality. Tychonoff observed that Urysohn’s metriza-
tion theorem also applies to regular spaces, since we have:

Theorem 5.14 A regular space with a countable base is normal.

Proof. Let A, B be disjoint closed sets in such a space. Then A is covered
by a countable collection of open sets Ui whose closures are disjoint from
B. There is a similar cover Vi of B by open sets whose closures are disjoint
from A. Now set USi′ = Ui − (V 1 ∪S· · · V i ), set Vi′ = Vi − (U 1 ∪ · · · U i ), and
observe that U = Ui′ and V = Vi′ are disjoint open sets containing A
and B.

A non-metrizable product. Example: (Z/2)R ∼          = P(R) is not metrizable
because it is not first countable.
    A base at the set R consists of the open sets U (F ), defined for each finite
set F ⊂ R as
                          U (F ) = {A ⊂ R : F ⊂ A}.
    Let F be the set of finite subset A ⊂ R. Then F meets every U (F )
so R ∈ F . But there is no sequence An ∈ S  F such that An → R! Indeed,
if An ∈ F is given then we can pick x 6∈ An , and An never enters the
neighborhood U ({x}) of R.
    We will later see that that P(R) is compact. But it has sequences with
no convergent subsequences! To see this, let An be the set of real numbers
x = 0.x1 x2 x3 . . . such that xn = 1. Given any subsequence nk , we can
find an x such that xnk alternates between 1 and 2 as n → ∞. Suppose
Ank → B. If x ∈ B then x ∈ Ank for all k ≫ 0, and if x 6∈ B then x 6∈ Ank
for all k ≫ 0. Either way we have a contradiction.
Nets. A directed system A is a partially ordered set so any two α, β ∈ A
are dominated by some γ ∈ A: γ ≥ α and γ ≥ β.
    A net xα is a map x : A → X from a directed system into a topological
space X.
    Example: N is a directed system, and a sequence xn is a net.
Convergence. We say xα → x ∈ X iff for any neighborhood U of x there
is an α such that xβ ∈ U for all β > α.

Theorem 5.15 In any topological space, x ∈ E iff there is a net xα ∈ E
converging to x.




                                         48
Proof. Let α = α(U ) range over the directed set of neighborhoods of x in
X, and for each U let xα be an element of U ∩ E. Then xα → x.
   Conversely, if xα ∈ E converges to x, then every neighborhood of x meets
E, so x ∈ E.

Subnets. If B is also a directed system, a map f : B → A is cofinal if for
any α0 ∈ A there is a β0 ∈ B such that f (β) ≥ α0 whenever β ≥ β0 . Then
yβ = xf (β) is a subnet of xα .
    Example: A function f : N → N is cofinal iff f (n) → ∞. So subsequences
are special cases of subnets.

Theorem 5.16 X is compact iff every net has a convergent subnet.

Proof. Let F be a collection of closed sets with the finite intersection
property, and let α be the directed system of finite subsets of F, and let xα
be a point lying in their common intersection. Then the T  limit point y of a
convergent subset of xα will lie in every element of F, so F =  6 ∅.
   Conversely, let xα be a net in a compact space X. For every α let

                             Fα = {xβ : β ≥ α}.

Since the index set is directed, any finite set of indices has an upper bound,
andTthus the Fα have the finite intersection property. Therefore there is a y
in Fα .
    Now let B be a base at Y ordered by inclusion, and let C = A × B with
the product ordering. (This means (a, b) < (a′ , b′ ) iff a < a′ and b < b′ .)
Then the projection A × B → A is cofinal.
    For every pair γ = (α, β(U )) there is an element yγ = xf (γ) ∈ U ∩ Fα .
Then yγ is a subnet converging to y.

                                                   Q
Theorem 5.17 (Tychonoff ) A product X =                N Xn of compact sets is
compact. (Here N is an arbitrary index set).

Proof. By the Axiom of Choice we may assume the index set is an ordinal
N = {0, 1, 2, . . .}. Given a net xα ∈ X, we will produce a convergent subnet
yα , by transfinite induction over N . In the process we will define nets xn for
each n ∈ N , with xn a subnet of xi for i < n, and with each coordinate xn (i)
converging for i < n. We will have fij : Ai → Aj denote the re-indexing
function for i ≥ j.


                                      49
     Let y 0 = x. Passing to a subnet, we obtain a net x0α indexed by α ∈ A0
and with x0α (0) converging in X0 .
     Given n ∈ N +1, let Bn = ⊔i<n Ai , and let y n (α) = xiα for α ∈ Ai . Order
An by α ≤ β if α and β belong to Ai and Aj with i ≤ j, and if fji (β) ≥ α.
Finally to make y n a subnet of xi , let gnj (α) = fij (α) if α ∈ Ai , i ≥ j, and
specify gnj (α) ∈ Aj arbitrarily if α ∈ Ai for i < j.
     (Check that this is a subnet: given α0 ∈ Ai , if β ≥ α0 , then β ∈ Aj for
some j ≥ i, and by definition of the ordering on Bn we have fji (β) ≥ α0 , so
gni (β) ≥ α0 .)
     Since y n is a subnet of xi , the net yαn (i) converges for all indices i < n.
Let (xn , An ) be a subnet of (y n , Bn ) that converges in position n.
     By induction we obtain, for the ordinal N + 1, a subnet yα = yαN +1 that
converges in all coordinates. This means yα converges in X.

Axiom of Choice. The use of the Axiom of Choice in the preceding
proof cannot be dispensed with, in the strong sense that Tychonoff’s the-
orem implies the Axiom of Choice. Note that this is stronger than the
commonly-heard statement ‘you need the Axiom of Choice to construct a
non-measurable set’.
Partitions of unity.

Theorem 5.18 Let X be a compact Hausdorff space, and let U be an open
                          a finite subcover Ui and functions 0 ≤ fi (x) ≤ 1
cover of X. Then there is P
supported on Ui such that n1 fi (x) = 1.

Proof. For each x ∈ X there is an open set U ∈ U and a continuous
function f ≥ 0 supported in U , such that f (x) = 1. By compactness there
                     P functions such that the open sets {x : fi (x) > 0} cover
is a finite set of such
X. Then g(x) =          fi (x) > 0 at every point; replacing fi (x) by fi (x)/g(x)
gives the desired result.

Lebesgue number. Corollary. Given an open covering U of a compact
metric space X, there is an r > 0 such that for every x ∈ X, there is a
U ∈ U with B(x, r) ⊂ U . The number r is called the Lebesgue number of U.
Proof. Construct a partition of unity subordinate to U1 , . . . , Un ∈ U; then
for every x there is an i such that fi (x) ≥ 1/n, and by uniform continuity
of the functions fi there is an r > 0 such that fi (x) > 0 on B(x, r); then
B(x, r) ⊂ {fi > 0} ⊂ Ui ∈ U.



                                        50
Local constructions.
Theorem 5.19 Any compact manifold X admits a metric.

                                      P φ : Ui →
Proof. Take a finite collection of charts              Rn , a partition of unity
fi subordinate to Ui , and let g(v) =  fi |Dφi (v)|2 .

Maximal ideals in C(X).
Theorem 5.20 Let X be a compact Hausdorff space; then the maximal
ideals in the algebra C(X) correspond to the point evaluations.

Proof. Let I ⊂ C(X) be a (proper) ideal. Suppose for all x ∈ C(X), I is
not contained in the maximal ideal Mx of functions vanishing at x. Then
we can find for each x a function f ∈ I not vanishing on a neighborhood of
x. By compactness, we obtain g = f12 + · · · + fn2 vanishing nowhere. Then
(1/g)g ∈ I so I = C(X), contradiction. So I is contained an some Mx .

Spectrum. Given an algebra A over R, let
               σ(f ) = {λ ∈ R : λ + f has no inverse in A}.
Then for A = C(X), we have σ(f ) = f (X), and thus we can reconstruct
kf k∞ from the algebraic structure on A.
    Also for A = C(X) we can let Y be the set of multiplicative linear
functionals, and embed Y into RA by sending φ to the sequence (φ(f ) :
f ∈ A). Then in fact φ(f ) ∈ [−kf k, kf k], so Y is compact, and Y is
homeomorphic to X.
Local compactness. A topological space X is locally compact if the
open sets U such that U is compact form a base for the topology.
    For example, Rn is locally compact.
Alexandroff compactification. Let X be a locally compact Hausdorff
space, and let X ∗ = X ∪ {∞}, and define a neighborhood base at infinity
by taking the complements X ∗ − K of all compact sets K ⊂ X.

Theorem 5.21 X ∗ is a compact Hausdorff space, and the inclusion of X
into X ∗ is a homeomorphism.

Proof. Compact: if you cover X ∗ , once you’ve covered the point at infinity,
only a compact set is left. Hausdorff: because of local compactness, every
x ∈ X is contained in a U such that U is compact, and hence V = X ∗ − U
is a disjoint neighborhood of infinity.


                                      51
    This space is called the one-point compactification of X.
    Examples: N∗ ; S n = (Rn )∗ .
Proper maps. A useful counterpart to local compactness is the notion of
a proper map. A map f : X → Y is proper if f −1 (K) is compact whenever
K is compact. Intuitively, if xα leaves compact sets in X, then f (xα ) leaves
compact sets in f (X). Thus xα → ∞ implies f (xα ) → ∞, and so f extends
to a continuous map from X ∗ to Y ∗ . This shows:

Theorem 5.22 A continuous bijection between locally compact Hausdorff
spaces is a homeomorphism iff it is proper.

   Example: There is a bijective continuous map f : R → S 1 ∪ [1, ∞) ⊂ C.
The Stone-Čech compactification.

Theorem 5.23 Let X be a normal space. Then there is a unique compact
Hausdorff space β(X) such that:
  1. X is dense in β(X);

  2. Every bounded continuous f : X → R extends to a continuous function
     on β(X);

  3. If X is compactified by another Hausdorff space Y , in the sense that
     the inclusion X ⊂ Y is dense, then β(X) is bigger than Y : there is a
     continuous map φ : β(X) → Y .

Proof. Let F be the family of all continuous f : X → [0, 1], let Z be the
compact product [0, 1]F , and let β(X) ⊂ Z be the closure of X under the
embedding x 7→ (xf ) where xf = f (x). The first two properties are now
evident.
    Finally let Y be another compactification of X, and let G be the family of
all continuous maps g : Y → [0, 1]. Then there is an embedding Y ⊂ [0, 1]G ,
and the inclusion G ⊂ F gives a natural projection map [0, 1]F → [0, 1]G .
This projection sends β(X) into Y .

    Example: X = β(N). In this space, a sequence xn ∈ N converges iff it
is eventually constant. Thus X is compact but the sequence xn = n has
no convergent subsequence! (However it does have convergent subnets; for
such a net, f (nα ) converges for every f ∈ ℓ∞ (N)!)
Stone-Čech and dual spaces. Another way to look at β(N) is that each
n ∈ N provides a map n : ℓ∞ (N) → R by a 7→ an , and that β(N) is the closure

                                     52
of these maps. Note that the maps in the closure are bounded, linear
functionals . A typical example is provided by the ultrafilter limit we
constructed before. In general the closure consists of those finitely-additive
measures on N such that µ(N) = 1 and µ(E) = 0 or 1 for all E ⊂ N.

Theorem 5.24 (Stone-Weierstrass) Let X be a compact Hausdorff space,
and let A ⊂ C(X) be a subalgebra that contains the constants and separates
points. Then A is dense in C(X).

    Examples: in C[0, 1], the functions of bounded variation, or Lipschitz,
or C k , or Hölder continuous, or polynomials, or those that are real-analytic,
all form subalgebras that separate points and contain the constant.
    Lemma. The closure of A is a lattice.
Proof. We must show that f, g ∈ A =⇒ f ∨ g ∈ A, where (f ∨ g)(x) =
max(f (x), g(x)). Note that f ∨ g is the average of f + g and |f − g|.   √ So
it suffices to show f ∈ A =⇒
p                              √     |f | ∈PA. Now if ǫ < f < 1, then f =
   1 − (1 − f ) ∈ A, because 1 − x =         an xn can be expanded in a power
series convergent in B(0, 1), and hence uniformly convergent in B(0, 1 − ǫ).
Then                                       p
                               |f | = lim f 2 + ǫ,
                                    ǫ→0
so |f | is in A, and hence f ∨ g is in A.

    Proof of Stone-Weierstrass. As above we replace A by its closure; then
A is an algebra as well as a lattice.
    Given g ∈ C(X), let F = {f ∈ A : f ≥ g}. To show g ∈ A, it suffices
to show for each x that g(x) = inf F f (x). Indeed, if that is the case, then
for any ǫ > 0 and x ∈ X, there is a neighborhood U of x and an f ∈ F
such that g ≤ f ≤ g + ǫ on U . Taking a finite sub-cover, we obtain a finite
number of functions such that g ≤ f1 ∧ · · · ∧ fn ≤ g + ǫ on all of X. Since
A is a lattice, we are done.
    It remains to construct, for ǫ > 0 and x ∈ X, and function f ∈ A such
that f ≥ g and g(x) ≤ f (x) ≤ g(x) + ǫ. By replacing g with ag + b, we may
assume g(x) = 0 and sup |g| ≤ 1.
    Pick a neighborhood U of x on which |g| < ǫ. Since A separates points,
for each y 6∈ U there is a function h ∈ A with h(x) = 0, h(y) = 2. Taking
a finite subcover of X − U by balls on which h > 1, we obtain a function
f = h21 + · · · + h2n + ǫ with f (x) = ǫ = g(x) + ǫ, with f ≥ ǫ > g on U , and
with f ≥ 1 > g on X − U . Then f ∈ F, and so g(x) = inf F f (x) as desired.



                                       53
Paracompactness. For local constructions like making a metric, what’s
needed is not so much compactness (finiteness of coverings) as paracom-
pactness (local finiteness). This says that any open covering has a locally
finite refinement. Using this property one can show, for example, that any
paracompact manifold admits a metric.
    All metric spaces are paracompact (a hard theorem). However there
exists a manifold which is not paracompact, namely the long line. It is ob-
tained from the first uncountable ordinal Ω by inserting an interval between
any two adjacent points, and introducing the order topology.
    This space X has the amazing property that every sequence has a
convergent subsequence. Indeed, since a sequence is countable, it is
bounded above by some countable ordinal α, and (by induction) the segment
[0, α] is homeomorphic to [0, 1], hence compact.
     On the other hand, X is not compact, since the open covering by all
intervals of the form [0, α) has no finite subcover. Thus X is not metrizable.
Therefore X is not paracompact.


6    Banach Spaces
The theory of Banach spaces is a combination of infinite-dimensional linear
algebra and general topology. The main themes are duality, convexity and
completeness.
    The first two themes lead into the Hahn-Banach theorem, separation the-
orems for convex sets, weak topologies, Alaoglu’s theorem, and the Krein-
Milman theorem on extreme points. The third theme leads to the ‘3 prin-
ciples of functional analysis’, namely the open mapping theorem, the closed
graph theorem and the uniform boundedness principle. These three results
all rest on the Baire category theorem and hence make crucial use of com-
pleteness.
Continuous linear maps. Let φ : X → Y be a linear map between
Banach spaces. The norm of φ, denoted kφk, is defined as the least M such
that
                           kφ(x)k ≤ M kxk
for all x ∈ X. Note: if Y = R we use the usual absolute value on R as a
norm.
    A linear map is bounded if its norm is finite.

Theorem 6.1 A linear map is bounded iff it is continuous.


                                     54
Proof. Clearly boundedness implies (Lipschitz) continuity. Conversely, if
φ is continuous, then φ−1 B(0, 1) contains B(0, r) for some r > 0 and then
kφk ≤ 1/r.


Theorem 6.2 (Hahn-Banach) Let φ : S → R be a linear map defined on
a subspace S ⊂ X in a Banach space such that |φ(x)| ≤ M kxk for all x ∈ S.
Then φ can be extended to a linear map on all of X with the same inequality
holding.

Proof. Using Zorn’s lemma, we just need to show that any maximal such
extension of φ is defined on all of X. So it suffices to consider the case S 6= X
and show that φ can be extended to the span of S and y where y ∈ X − S.
   We may assume M = 1. The extension will be determined by its value
φ(y) = z, and the extension will continue to be bounded by M = 1 so long
as we can insure that z is chosen so for all s ∈ S we have:

                 −ky + sk ≤ φ(y + s) = z + φ(s) ≤ ky + sk.

To show such a z exists amounts to showing that for any s, s′ ∈ S we have

                    −φ(s) − ky + sk ≤ −φ(s′ ) + ky + s′ k,

so that there is a number z between the sup and inf. Now this inequality is
equivalent to:
                     φ(s′ ) − φ(s) ≤ ky + sk + ky + s′ k,
and this one is in fact true, since

             φ(s′ − s) ≤ ks′ + y − y − sk ≤ ks + yk + ks′ + yk.



Linear functionals on L∞[0, 1]. We can now show more rigorously that
L1 [0, 1] is not reflexive: namely take point evaluation on C[0, 1], and extend
it by Hahn-Banach to a linear functional φ on L∞ [0, 1]. It is clear then
φ|C[0, 1] is not given by an element in L1 [0, 1].
Embedding into X ∗∗.
Theorem 6.3 For any x ∈ X there is a φ ∈ X ∗ such that kφk = 1 and
φ(x) = kxk.

Proof. Define φ first on the line through x, then extend it by Hahn-Banach.

                                       55
Corollary 6.4 The embedding of X into X ∗∗ is isometric.

Lp examples. Let f ∈ Lp (R) with kf kp = 1 and 1 < p < ∞, there
is a unique φ of norm 1 in the dual space such that φ(f ) = 1: namely
φ = sign(f )|f |p/q , which satisfies
                                    Z   Z
                           φ(f ) = f φ = |f |p = 1.

This reflects the ‘smoothness’ of the unit ball in Lp : there is a unique sup-
porting hyperplane at each point.
   For L1 things are different: for example, if supp f = [0, 1] there is a huge
space of φ ∈ L∞ such that kφk∞ = 1 and φ(f ) = 1.
Non-example: L∞. Now let f (x) = x in LR∞ [0, 1], and suppose φ ∈
                                                 a
L1 [0, 1] has norm 1. Choose a < 1 such that t = 0 |φ| > 0. Then we have:
                   Z a            Z 1
         φ(f ) ≤         x|φ| +         |φ| ≤ at + (1 − t) = 1 − (1 − a)t < 1.
                    0              a

Thus φ(f ) can never be 1! This reflects of course the fact that X = L1 [0, 1]
is a proper subset of its double dual X ∗∗ = L∞ [0, 1]∗ .
More non-reflexive spaces. For the little ℓp spaces we have the following,
rather rich non-reflexive example:

                         c∗0 = ℓ1 , (ℓ1 )∗ = ℓ∞ , (ℓ∞ )∗ = m(Z).

It turns out the last space can be identified with the space of finitely-additive
measures on Z.
Weak closure. The Hahn-Banach theorem implies:

Theorem 6.5 Let S ⊂ X be a linear subspace of a Banach space. Then S
is weakly closed iff S is norm-closed.

Proof. Any weakly closed space is norm closed. Conversely, if S is norm
closed, for any y 6∈ S we can find a linear functional φ : X → R that vanishes
on S and sends y to 1, so y is not in the weak closure of S.




                                              56
    (More generally, as we will see later, any norm-closed convex set is weakly
closed.)
The weak* topology. We say φα → φ in the weak* topology on X ∗ if
φα (x) → φ(x) for every x ∈ X.
Example: weak closures of continuous functions. The space C[0, 1]
is dense in L∞ [0, 1] in the weak* topology. Indeed, if g ∈ L∞ then there
are continuous fn → g pointwise a.e. with kfn k∞ ≤ kgk∞ . Now for any
h ∈ L1 [0, 1] the dominated convergence theorem implies
                                Z       Z
                      hh, fn i = hfn → hg = hh, gi.

     On the other hand, C[0, 1] is already closed in the weak topology, since
it is norm closed.

Theorem 6.6 (Alaoglu) The unit ball B ∗ ⊂ X ∗ is compact in the weak*
topology.

Proof. Let B be the unit ball in X. Then there is a tautological embedding
of B ∗ into [−1, 1]B . Since linearity and boundedness are preserved under
pointwise limits, the image is closed. By Tychonoff, it is compact!

Metrizability. Theorem. If X is separable, then the unit ball B in X ∗ is
a compact metrizable space in the weak* topology.
    Proof. Let xn be a dense sequence in X; then the balls

                       B = {φ : |φ(xn ) − p/q| < 1/r}

form a countable base. By Urysohn’s metrization theorem, B is metrizable.
Example: the space of measures. Naturally C[0, 1] is separable. Thus
P [0, 1], the space of probability measures with the weak* topology, is a
compact metric space. It can be thought of as a sort of infinite-dimensional
simplex; indeed the measures supported on ≤ n points form an (n + 1)-
simplex.
Banach limits.

Theorem 6.7 There is a linear map Lim : ℓ∞ (N) → R such that

      Lim(an ) ≥ 0 if an ≥ 0
      Lim(1) = 1, and
      Lim(an+1 ) = Lim(an ).

                                      57
   Note that | Lim(an )| ≤ kan k and that Lim extends the usual limit on c
and agrees with the Césaro limit when that exists.
                           P
Proof. Let φN (a) = N −1 N    1 an and let Lim be the limit point of a con-
vergent subnet. Note that φN (an+1 ) − φN (an ) = O(1/N ).


Stone-Čech compactification of N. The unit ball B in ℓ∞ (N)∗ , while
compact, is not metrizable! Indeed, the integers embed via φn (a) = zn , but
hφn i has no convergent subsequence! (If φnk is a subsequence, then we can
choose a ∈ ℓ∞ such that ank = (−1)k ; then φnk (a) does not converge, so
φnk does not converge in the weak* topology.
The Banach-Tarski paradox . Using the same construction on Z or Zn ,
we get finitely-additive measures by applying Lim to indicator functions.
Because of these measures, you cannot cut Z into a finite number of sets,
move them by translation and re-assemble them to form 2 copies of Z.
    However, this type of re-construction is possible for a free group G on 2
generators!
    Suppose µ is a finitely-additive invariant probability measure on G. Let
Wa , Wa′ , Wb and Wb′ denote the partition of G − {e} into reduced words
beginning with a, a′ , b and b′ . Then a′ Wa contains Wa , Wb , Wb′ and {e}.
Since translation by a′ preserves measures, we conclude that the extra sets
Wb , Wb′ and {e} have measure zero. By the same token, all the W ’s have
measure zero, which contradicts the assumption that µ(G) = 1.
Cutting up the sun. Note that G = a′ Wa ∪ Wa′ , and similar for Wb
and Wb′ . Thus we can cut G into 5 pieces, discard one of them (e), and
re-assemble the other two into two copies of G.
    Now embed G into SO(3) by taking two random rotations. Then G
acts on S 2 . Let E ⊂ S 2 be a transversal, consisting of one point from each
G-orbit, so S 2 = G · E. Now cut S 2 into pieces of the form Ei = Wi · E,
i = 1, . . . , 4. (There will be some S 2 left over.) Applying the left action of G
to these pieces — that is, applying rotations — we can re-arrange W1 and
W2 to form G, and so re-arrange E1 and E2 to form S 2 . Do the same thing
with E3 and E4 , and we can make a second sphere!
Three basic principles of functional analysis. Let A : X → Y be a
linear map between Banach spaces X and Y . Then we have:

   1. The open mapping theorem. If A is continuous and onto, then it is
      open; that is, Ax = y has a solution with kxk ≤ Ckyk.



                                        58
     Corollaries: If A is continuous and bijective, then it is an isomorphism.
     If X is complete with respect to two norms, and kxk1 ≤ Ckxk2 , then
     a reverse inequality holds.

  2. The closed graph theorem. If the graph of A is closed — meaning
     xn → x, Axn → y implies Ax = y — then A is continuous.

  3. The uniform boundedness principle. Let F ⊂ X ∗ satisfy that for each
     x ∈ X, |f (x)| ≤ Mx kxk for all f ∈ F. Then there is an M such that
     kf k ≤ M for all f ∈ F.
     The same result holds if we replace X ∗ with B(X, Y ).

   These principles should be compared to the following results that hold
when X and Y are compact.

  1. If f : X → Y is bijective and continuous, then f is a homeomorphism.

  2. If f : X → Y has a closed graph, then f is continuous.
     (Note that f (x) = 1/x for x 6= 0, f (0) = 0, gives a map f : R → R
     with a closed graph that is not continuous.)

  3. Let F ⊂ C(X) satisfy |f (x)| ≤ Mx for all f ∈ F and x ∈ X. Then
     there is a nonempty open set U ⊂ X and a constant M > 0 such that
     |f |U | ≤ M for all x ∈ U .

Open mapping theorem: proof. Let D = B(0, 1) be the open unit ball
about the origin in X. We must show B = A(D) contains S      a neighborhood
of the origin in Y . By surjectivity of A, we have Y = nB, and thus by the
Baire category theorem, nB has nonempty interior for some n; and thus B
has non-empty interior U .
    Since B is convex and symmetric, we have (U − U )/2 ⊂ B and so B
contains a neighborhood of the origin, say B(0, r).
    We now proceed to solve the equation Ax = y. Set M = 1/r. Then there
is an x1 with kx1 k ≤ M kyk and kAx1 − yk as small as we like; say less than
kyk/2. Solving for the difference, we obtain an x2 with kx2 k ≤ M/2kyk and
kA(x1 +x2 )−yk ≤ kyk/4. Proceeding by induction we obtain a geometrically
                                                                        P
convergent sequence, and by continuity of A we have Ax = y where x = xi
satisfies kxk ≤ 2M . Thus A(D) contains a ball of radius at least 1/(2r)
about the origin.




                                     59
Open-mapping theorem: application.                The open mapping theorem
implies:

Corollary 6.8 If X is complete in two norms, and kxk1 ≤ Ckxk2 , then
there is a C ′ such that kxk2 ≤ C ′ kxk1 .

   Here is a nice application due to Grothendieck.

Theorem 6.9 Let S ⊂ L2 [0, 1] be a closed subspace such that every f ∈ S
is continuous. Then S is finite-dimensional.

Proof. We have kf k∞ ≥ kf k2 , so S is complete in both the L2 and the L∞
norms. Thus there is an M > 0 such that M kf k2 ≥ kf k∞ .
   Now let f1 , . . . , fn be an orthonormal set. Then for any p ∈ [0, 1], we
have                       X                 X
                         k    fi (p)fi k2 = (  |fi (p)|2 )1/2 ,
and thus
               X                    X               X
             M(  |fi (p)|2 )1/2 ≥ k   fi (p)fi k∞ ≥   fi (p)2 ,
                P
which implies       fi (p)2 ≤ M 2 . Integrating from 0 to 1 gives n ≤ M 2 .

Closed graph theorem: proof. Let |x| = kxk + kAxk. Now if |xn | is
Cauchy, then xn → x in X and Axn → y in Y ; since the graph of A is
closed, we have Ax = y and thus |xn − x| → 0. Thus X is complete in the
| · | norm, so by the open mapping theorem we have |x| ≤ M kxk for some
M ; thus kAk ≤ M and A is continuous.

Uniform boundedness theorem: proof. Let FM = {x : |f (x)| ≤
M ∀f ∈ F}. By Baire category, some FM contains a ball B(p, r). Then
for kxk ≤ r we have |f (x)| = |f (p + x) − f (p)| ≤ M + Mp and thus kf k is
uniformly bounded by (M + Mp )/r.

Example. Let φn ∈ X ∗ have the property that ψ(x) = lim φn (x) exists for
every x ∈ X. Then kφn k ≤ M and hence ψ ∈ X ∗ .
    Corollary. You cannot construct an unbounded linear functional by tak-
ing a pointwise limit of bounded ones.
    Remark: if a net satisfies xα → y, is kxα k necessarily bounded? No! Let
α range over all finite subsets of N, directed by inclusion, and let xα be the
minimum of α. Then xα → 0 but sup xα = ∞.

                                        60
Theorem 6.10 (Toeplitz) Let T : H → H be a symmetric linear operator
on Hilbert space, meaning (T x, y) = (x, T y). Then T is continuous.

Proof. Suppose xn → x and T xn → z. Then for all y ∈ H, we have
          (y, z) = lim(y, T xn ) = lim(T y, xn ) = (T y, x) = (y, T x).
Thus (y, T x − z) = 0 for all y ∈ H. Taking y = T x − z, we find T x = z.
Thus T has a closed graph, and hence T is continuous.
                                                              R
    Note: a typical symmetric operator is given by (T f )(x) = K(x, y)f (y) dy,
where the kernel K(x, y) is symmetric.
Convexity. A subset K ⊂ X is convex if x, y ∈ K =⇒ tx + (1 − t)y ∈ K
for all t ∈ (0, 1).
Support.
Theorem 6.11 Let K ⊂ X be an open convex set not containing the origin.
Then there is a φ ∈ X ∗ such that φ(K) > 0.

Proof. Geometrically, we need to find a closed, codimension-one hyperplane
H = Ker φ ⊂ X disjoint from K. Consider all subspaces disjoint from K
and let H be a maximal one (which exists by Zorn’s lemma). If H does
not have codimension one, then we can consider a subspace S ⊃ H of two
dimensions higher and all extensions H ′ = H + Rvθ of H to S, θ ∈ S 1 .
   Now consider the set A ⊂ S 1 of θ such that H + R+ vθ meets K. Then
A is open, connected, and A ∩ A + π = ∅; else K would meet H. It follows
that A is an open interval of length at most π. Taking an endpoint of A, we
obtain an extension of H to H ′ , a contradiction.
   Thus H has codimension one. Since K is open, H is also disjoint from
K, and hence H = H. Thus H is the kernel of the desired linear functional.


Separation.
Theorem 6.12 Let K, L ⊂ X be disjoint convex sets, with K open. Then
there is a φ ∈ X ∗ separating K from L; i.e. φ(K) and φ(L) are disjoint.

Proof. Let M = K −L; this set is open, convex, and it does not contain the
origin because K and L are disjoint. Thus by the support theorem, there is
a linear functional with φ(M ) ≥ 0. Then for all k ∈ K and ℓ ∈ L, we have
φ(k − ℓ) = φ(k) − φ(ℓ) ≥ 0. It follows that inf φ(K) ≥ sup φ(L). Since φ(K)
is open, these sets are disjoint.


                                       61
Weak closure. Recall that K ⊂ X is weakly closed if whenever a net
xα ∈ K satisfies φ(xα ) → φ(x) for all φ ∈ X ∗ , we have x ∈ K. The weak
closure of a set is generally larger than the strong (or norm) closure. For
example, the sequence fn (x) = sin(nx) in L1 [0, 1] is closed in the norm
topology (it is discrete), but its weak closure adds f0 = 0.
    Another good image to keep in mind is that K is weakly closed if for
any x 6∈ K, there is a continuous linear map Φ : X → Rn such that Φ(K)
is disjoint from Φ(x). This is just because a base for the weak topology
consists of finite intersections of sets of the form φ−1 (α, β).

Theorem 6.13 A convex set K ⊂ X is weakly closed iff K is strongly
(norm) closed.

Proof. A weakly closed set is automatically strongly closed. Now suppose
K is strongly closed, and x 6∈ K. Then there is an open ball B containing
x and disjoint from K. By the separation theorem, there is a φ ∈ X ∗ such
that φ(x) > φ(K), and thus x is not in the weak closure of K. Thus K is
weakly closed.
Linear combinations. By the preceding result, we see that the weak
closure of a set E ⊂ X is contained in hull(E), the smallest norm-closed
convex set containing E. Now hull(E) can be described as the closure of
finite convex combinations of points in E. So as an exampleP we have:
    Proposition. For any ǫ > 0 there exist constants an ≥ 0,  an = 1, such
that
                            XN
                                an sin(nx) < ǫ.
                             1             1
   Problem. Prove this directly!
   (Solution. Just take an = 1/N for P   n = 1, . . . , N , and note that for
orthgonal functions en the function f = an en satisfies
                                        X
               kf k21 ≤ kf 22 k1k22 = O(  |an |2 ) = O(1/N ).

Intuitively, f (x) behaves like a random walk with N steps.
LCTVS. A topological vector space X is a vector space with a topology
such that addition and scalar multiplication are continuous. By translation
invariance, to specify the topology on X it suffices to give a basis at the
origin.
    A very useful construction comes from continuity of addition: for any
open neighborhood U of the origin, there is a neighborhood V such that
V + V ⊂ U.

                                     62
    Usually we assume X is Hausdorff (T2 ). This is equivalent to assuming
points are closed (T1 ). Indeed, if points are closed and x 6= y, then we can
find a balanced open neighborhood U of the origin such that y +U is disjoint
from X. We can then find a balanced open V such that V + V ⊂ U , and
then x + V is disjoint from y + V .
Warning: Royden at times implicitly assumes X is Hausdorff. For example,
if X is not Hausdorff, then an extreme point is not a supporting set, contrary
to the implicit assumption in the proof of the Krein-Milman theorem.
    Let X be a Banach space. Then the weak topology on X and the weak*
topology on X ∗ are Hausdorff and locally convex. All the results like the
Hahn-Banach theory, the separation theorem, etc. hold for locally convex
topologies as well as the norm topology and weak topology.
Extreme points. Let K be convex. A point x ∈ K is an extreme point if
there is no open interval in K containing X. More generally, a supporting
set S ⊂ K is a closed, convex set with the property that, whenever an open
interval I ⊂ K meets S, then I ⊂ S. One should imagine a face of ∂K or a
subset thereof.
    Example: Let K be a convex compact set. Then the set of points where
φ ∈ X ∗ assumes its maximum on K ⊂ X is a supporting set. In particular,
any compact convex set has nontrivial supporting sets.

Theorem 6.14 (Krein-Milman) Let K be a compact convex set in a lo-
cally convex (Hausdorff ) topological vector space X. Then K is the closed
convex hull of its extreme points.

    Remark. The existence of any extreme points is already a nontrivial
assertion.
Proof. We will show any supporting set contains an extreme point. Indeed,
consider any minimal nonempty supporting set S ⊂ K; these exist by Zorn’s
lemma, using compactness to guarantee that the intersection of a nested
family of nonempty supporting sets is nonempty. Now if S contains two
distinct points x and y, we can find a φ ∈ X ∗ (continuous in the given
topology) such that φ(x) 6= φ(y). Then the set of points in S where φ
assumes its maximum is nonempty (by compactness) and again a supporting
set, contrary to minimality.
    Now let L ⊂ K be the closed convex hull of the extreme points. If there
is a point x ∈ K − L, then we can separate x from L by a linear functional,
say φ(x) > φ(L). But then the set of points where φ assumes its maximum
is a supporting set, and therefore it contains an extreme point, contrary to
the assumption that φ does not assume its maximum on L.

                                     63
   Therefore L = K.

    Prime example: The unit ball in X ∗ , in the weak* topology.
    What are the extreme points of the unit ball B in L2 [0, 1]? Every point
in ∂B is extreme! Because if kf k2 = 1 then for ǫ and g 6= 0, we have
                    kf ± ǫgk22 = kf k2 ± 2ǫhf, gi + ǫ2 kg|2
and this is > kf k2 = 1 if the sign is chosen properly.
    What about the unit ball in L∞ [0, 1]? Here the extreme points are
functions with |f | = 1 a.e. Picture the finite-dimensional case — a cube.
    What about in L1 [0, 1]? Here there are no extreme points! For example,
if f = 1, then f (x) + a sin(2πx) has norm one for all small a, so f is not
extreme. Similarly, for any f 6= 0 we can find a set A of positive measure
on which f > a > 0 (or 0 > a > f ), and then a function g of mean zero
supported on A such that kf ± gk = kf k.
    This fact is compatible with Krein-Milman only because L1 [0, 1] is not a
dual space. In fact the preceding remark proves that for any Banach space
X, the dual X ∗ is not isomorphic to L1 [0, 1].
    For X = C[0, 1], the dual X ∗ consists of signed measures of total mass
one, and the extreme points are ±δx .
Stone-Weierstrass revisited. Let X be a compact Hausdorff space, and
let A ⊂ C(X) be an algebra of real-valued functions containing the constants
and separating points. Then A is dense in C(X).
Proof (de Brange). Let A⊥ ⊂ M (X) be the set of measures that annihi-
late A. By the Hahn-Banach theorem, to show A is dense it suffices to show
that A⊥ is trivial.
    Let K be the intersection of A⊥ with the unit ball. Then K is a closed,
compact, convex set in the weak* topology. Thus K is the closed convex
hull of its extreme points.
    Suppose µ ∈ K is a nonzero extreme point. We will deduce a contradic-
tion.
    First, let E ⊂ X be the support of µ (the smallest closed set whose
complement has measure zero). Suppose E is not a single point. Choose a
function f ∈ A such that f |E is not constant, and |f | < 1. Consider the
two measures
                      σ = (1 + f )µ/2, τ = (1 − f )µ/2.
Since A is an algebra, both σ and τ are in A⊥ , and of course we have
σ + τ = µ. Moreover, since 1 ± f > 0, we have
                            kµ| = kσk + kτ | = 1.

                                      64
Thus µ is a convex combination:
                                        σ          τ
                             µ = kσk       + kτ k      .
                                       kσk        kτ k

Since µ is an extreme point, it follows that µ = σ = τ . Therefore f is
constant a.e. on E, a contradiction.
    It follows that µ is a delta-mass supported on a single point. But the µ
is not in A⊥ , since it pairs nontrivially with the constant function in A.

   Haar measure. As a further application of convexity, we now develop
the Kakutani fixed-point theorem and use it to prove the existence of Haar
measure on a compact group. Our treatment follows Rudin, Functional
Analysis, Chapter 5.

Theorem 6.15 (Milman) Let K ⊂ X be a compact subset of a Banach
space and suppose H = hull(K) is compact. Then the extreme points of H
are contained in K.

Proof. Suppose x is an extreme point of H that does not lie in K, and let
r = d(x, K). Then by compactness we can cover K by a finite collection of
balls B(xi , r), i = 1, . . . , n. Let Hi be the closed convex hull of K ∩ B(xi , r).
Since the ball is compact,
                     S            we have Hi ⊂ B(x
                                                 P i , r).
    Now H = hull( n1 Hi ), and thus x =             ti hi is a convex combination of
points hi ∈ Hi ⊂ H. But x is an extreme point, so x = hi for some i. This
implies x ∈ B(xi , r), contradicting the fact that d(x, K) = 2r.


Theorem 6.16 (Kakutani) Let K ⊂ X be a nonempty compact convex
subset of a Banach space, and let G be a group of isometries of X leaving
K invariant. Then there exists an x ∈ K fixed by all g ∈ G.

Proof. Let L ⊂ K be a minimal, nonempty, compact convex G-invariant
set; such a set exists by the Axiom of Choice. If L consists of a single point,
we are done. Otherwise there are points x 6= y in L. Let z = (x+y)/2. Then
by minimality of L, we have L = hull(G · z). Let z ′ be an extreme point of
L. By Milman’s theorem, z ′ is a limit of points in G · z. By compactness of
K, we can choose gn ∈ G such that gn z → z ′ , gn x → x′ and gn y → y ′ . But
then z ′ = (x′ + y ′ )/2, so z ′ is not an extreme point.




                                         65
Theorem 6.17 Let G be a compact Hausdorff group. Then there is a unique
left-invariant Borel probability measure µ on G, and µ is also right invariant.

Proof. Let G be a compact topological group, and let X = C(G). For
each g, h ∈ G, the shift operators Lg (f ) = f (g−1 x) and Rh (f ) = f (xh) are
isometries, and they commute. The only fixed-points for G are the constant
functions.
   Now fix f ∈ C(G). Then f , and all its translates, are equicontinuous,
and thus
                         L(f ) = hull(G · f ) ⊂ C(G)
is compact. Similarly, the closed convex hull of the right translates, R(f ) =
hull(f · G), is also compact. By Kakutani’s fixed-point theorem, each of
these convex sets contains at least one constant function, l(f ) and r(f ).
    The constant l(f ) can be approximated by averages of the form
                                     X
                            T (f ) =    αi Lai (f ),

and similarly for r(f ). But the right and left averages commute, and leave
the constants invariant, so l(f ) = r(f ). Thus there is a unique constant
function, M (f ), contained in both L(f ) and R(f ).
   To show M (f ) corresponds to Haar measure, we must show M (1) = 1,
M (f ) ≥ 0 when f ≥ 0, and M is linear. The first two assertions are
immediate. To show M (f + h) = M (f ) + M (h), choose a left-averaging
operator T such that M (f ) ≈ T (f ). Then T (h) ∈ L(h), so M (T (h)) =
M (h). Thus there is a second left-averaging operator S such that S(T (h)) ≈
M (h). But then S(T (f + h)) ≈ M (f ) + M (h) ∈ L(f + h), so M (f + h) =
M (f ) + M (h).

    Examples of compact groups: Finite groups, products such as (Z/2)N ,
inverse limits such as Zp = lim (Z/pn ); Lie groups such as SO(n, R) and
                              ←−
SU(n, C); p-adic Lie groups such as SLn (Zp ).
    Here is a description of Haar measure on G = SO(n, R). Consider the
Lie algebra g = so(n, R); it is the space of trace-zero matrices satisfying
At = −A. There is a natural inner product on this space, given by hA, Bi =
tr(AB). This inner product is invariant under the adjoint action of G, so it
gives rise to an invariant quadratic form on every tangent space Tg G. In the
case of SO(n), this metric is negative definite. Thus its negative determines
a bi-invariant metric on SO(n, R), and hence an invariant measure.
    This measure can be described as follows: to choose a random frame in
R , one first pick a point at random on S n−1 , then a point at random on the
  n



                                      66
orthogonal S n−2 , etc., using the rotation-invariant probability measures on
each sphere. There is a unique choice for the final point on S 0 that makes
the frame positively oriented.
    Unimodularity. More generally, any locally compact group G carries
right and left invariant measures, unique up to scale, but they need not
agree. When they do, the group is unimodular. For example, the group
SL2 (R) is unimodular, but its upper-triangular subgroup AN is not.


7    Hilbert space
Of great importance in analysis are the Hilbert spaces, such as L2 (Rn ).
   Abstractly, a Hilbert space is a Banach space H equipped with a sym-
metric bilinear form (x, y) such that (x, x) = kxk2 . Examples:
                    P
     Rn , (x, y) = P   xi yi .
     ℓ2 (N), (x, y) = Rxi yi .
     L2 (Rn ), (f, g) = f (x)g(x) dx.

Theorem 7.1 (Bunyiakowsky-Cauchy-Schwarz) |(x, y)| ≤ kxk · kyk.

Proof. For all t we have 0 ≤ (x + ty, x + ty) = (x, x) + t2 (y, y) + 2t(x, y), so
the discriminant of this quadratic polynomial must be non-positive. Thus
0 ≥ b2 − 4ac ≥ 4(x, y)2 − 4(x, x)(y, y).

     An orthonormal set is a collection of unit vectors xi in H, i ∈ I, with
(xi , xj ) = δij . The index set I can be finite, countable or even larger.
     Given an orthonormal set, we define the ‘Fourier coefficients’ of x ∈ H
by ai = (x, xi ).        P
     Lemma (Bessel).        |ai |2 ≤ kxk2 .
Proof. For any finite sum we have
              X               X                      X          X
     0 ≤ (x −     ai xi , x −   ai xi ) = (x, x) − 2   |ai |2 +   |ai |2 .



    A basis for H is a maximal orthonormal set (xi ). By Zorn’s Lemma,   √
every Hilbert space has a basis. The elements of a basis are at distance 2
from one another. Thus if H is separable, it has a countable
                                                          P basis.
    Given a basis, we can use Bessel’s inequality to show    ai xi converges
                 2
for any (ai ) ∈ ℓ (I). Moreover, the norm of the sum in H coincides with


                                       67
    norm in ℓ2 (I). Finally, if x ∈ H has Fourier coefficients ai , then y =
the P
x − ai xi has Fourier coefficients zero, i.e. it is orthogonal to all xi . Since
the (xi ) are a maximal orthonormal set, y = 0. This shows:

Theorem 7.2 For any orthogonal basis, and any x ∈ H, we have x =
P
  ai xi in H.

Theorem 7.3 For any basis (xi , i ∈ I) of a Hilbert space H, there is a
natural isomorphism between H and the Hilbert space ℓ2 (I).

   Examples: On S 1 = R/Z, we can take 1, cos(2πnx) and sin(2πnx) as an
orthonormal basis. Completeness follows from Stone-Weierstrass.
   On [−1, 1] we can apply Gram-Schmidt to the polynomials to obtain
an orthonormal basis of Legendre polynomials pn (x). of degree n. Again
Stone-Weierstrass yields completeness.
Complex Hilbert spaces. Over the field C, the natural form for a Hilbert
space is a Banach space H with a Hermitian form hx, yi such that hx, xi =
kxk2 . In this case, (x, y) = Rehx, yi makes H into a Hilbert space over R.
Examples:
               P
      hx, yi = R xi y i on Cn or ℓ2 (N) ⊗ C.
      hf, gi = f g on L2 (Rn ).


The Hardy space. In L2 (S 1 ) ⊗ C, a natural orthonormal basis is given by
fn (z) = z n /2π. The span of fn , n ≥ 0 is a closed subspace H 2 (S 1 ) known
as the Hardy space of the circle. Every f ∈ H 2 (S 1 ) is the boundary value of
a holomorphic function on S 1 .
                                                                 P
Fourier series. For a function f (z) in L2 (S 1 ), we have f = an z n (norm
convergent in L2 ) where
                                    Z
                                 1                dz
                         an =           f (z)z −n ·
                                2πi S 1            z

Note the analogy with Laurent series.
    Passing to the coordinate x where z = exp(ix), we can think of L2 (S 1 )
as the subspace of L2 (R) consisting of functions that are periodic under
x 7→ x + 2π. Since z n = cos(nx) + i sin(nx), the Fourier series now becomes
a sum of sines and cosines.




                                      68
    If we restrict to odd functions — where f (−x) = −f (x) — then only
sine terms appear, and we can identify this subspace with L2 [0, π]. Thus a
function on [0, π] has a natural Fourier series:
                                                               ∞
                                                               X
                                           f (x) =                   an sin(nx).
                                                               n=1
        Rπ   2
Since   0 sin (x) dx = π/2 (its average value is 1/2), we have
                                                      Z π
                                        2
                                   an =                         f (x) sin(nx) dx.
                                        π                  0

   Example: if the graph of f is a triangle with vertex (p, x), then

                                                               2h sin(np)
                                                an =                       ·
                                                               n2 p(π − p)

               1                                                            1

                                                                          0.8
             0.5
                                                                          0.6

               0                                                          0.4

                                                                          0.2
         -0.5
                                                                            0

                   0   0.5   1   1.5       2         2.5        3               0   0.5   1   1.5   2   2.5   3
                                  1


                                 0.8


                                 0.6


                                 0.4


                                 0.2


                                   0
                                       0       0.5         1        1.5         2   2.5   3



 Figure 2. Solutions to the wave equation (undamped and damped) and the
                               heat equation.


The wave equation and the heat equation. A typical problem in PDE
is to solve the wave equation with given initial data f (x) = u(x, 0) on [0, π].
This equation, which governs the motion u(x, t) of a vibrating string, is
given by
                                  utt = uxx


                                                                 69
(where the subscripts denote differentiation). If we think of u(x, t) as the
motion of a string with fixed end points, it is natural to impose the boundary
conditions u(0, t) = u(π, t) = 0. We will also assume ut (x, 0) = 0, i.e. the
string is intially stationary.
    Since the wave equation is linear, it suffices to solve it for the Fourier
basis functions f (x) = sin(nx). And for these we have simply

                          u(x, t) = cos(nt) sin(nx).

This solution can be discovered by separation of variables; the key is that
f (x)g(t) solves the wave equation if f and g are eigenfunctions with the
same eigenvalues.
    These basic solutions are ‘standing waves’ corresponding to the bass note
and then the higher harmonics of the string.
    The solution to the wave equation for ‘general’ f (x) is then given by:
                                  ∞
                                  X
                      u(x, t) =         an cos(nt) sin(nx).
                                  n=1

Note that u(x, t + 2π) = u(x, t), i.e. the string has a natural frequency.
   The heat equation
                                   ut = uxx
governs the evolution of temperature with respect to time. In the case at
hand the boundary conditions mean that the ends of the interval are kept
at a constant temperature of zero. Now the basic solutions are given by
                                               2
                           u(x, t) = e−n t sin(nx).

and thus
                                    ∞
                                    X              2
                        u(x, t) =         an e−n t sin(nx).
                                    n=1
Note that the Fourier coefficients are severely damped for any positive time;
u(x, t) is in fact a real-analytic function of x for t > 0.
   An actual plucked guitar string does not have a periodic motion but a
motion that smooths and decays with time. It obeys a combination of the
heat and wave equations:

                              utt + 2δut = uxx .

Here the basic solutions are given by

                         u(x, t) = exp(αn t) sin(nx)

                                          70
where α2n + 2δαn + n2 = 0. So long as 0 ≤ δ ≤ 1 we get
                                      p
                          αn = −δ ± i n2 − δ2

and thus the solution with ut (x, 0) = 0 has the form

                  u(x, t) = exp(−δt) cos(ωn t + σn ) sin(nx),
             √
where ωn = n2 − δ2 and tan(σn ) = −δ/ωn . Note that the frequencies are
now slowed and out of harmony — their ratios are no longer rational — and
that u(t, x) is damped but not smoothed out over time!
Discrete Fourier series. Similarly, given an ∈ ℓ2 (Z), there is a function
f ∈ L2 (S 1 ) such that     Z
                            an =        f (x)e−inx dx.
                                   S1

In other words, an is a ‘continuous superposition’ of the sequences bxn = einx .
    Note that while z n /2π is a basis for L2 (S 1 ), the sequences bxn are not
even in ℓ2 (Z).
Convergence of Fourier series. One of the main concerns of analysts for
150 years has been the following problem: givenP    a function f (x) on S 1 , in
what sense is f represented by its Fourier
                                        P series      an exp(inx)?
   It is traditional to write SN (f ) = N      a
                                            −N n (f ) exp(inx).  The simplest
answer to the question is the one we have just seen: so long as f ∈ L2 (S 1 ),
we have                     Z
                               |f − SN (f )|2 → 0

as N → ∞.
    The question of pointwise convergence is equally natural: how can we
extract the value f (x) from the numbers an ? Of course, if f is discontinuous
this might not make sense, but we might at least hope that when f (x) is
continuous we have SN (f ) → f pointwise, or maybe even uniformly. In this
direction we have:

Theorem 7.4 If f (x) is C 2 , then an = O(1/n2 ) and thus SN (f ) converges
to f uniformly.

   In fact we have:

Theorem 7.5 (Dirichlet) If f (x) is C 1 , then SN (f ) converges uniformly
to f .


                                        71
      Dirichlet’s proof . . . left open the question as to whether the Fourier
      series of every Riemann integrable, or at least every continuous,
      function converged. At the end of his paper Dirichlet made it
      clear he thought that the answer was yes (and that he would soon
      be able to prove it). During the next 40 years Riemann, Weier-
      strass and Dedekind all expressed their belief that the answer was
      positive. —Körner, Fourier Analysis, §18.

   In fact this is false!

Theorem 7.6 (DuBois-Reymond) There exists an f ∈ C(S 1 ) such that
supN |SN (f )(0)| = ∞.

Use of functional analysis. To see this, suppose to the contrary that the
sup above is finite for all continuous f . That is, suppose the values of the
linear functionals f 7→ SN (f )(0) are bounded by Mf . Then, by the uniform
boundedness principle, they are uniformly bounded:

                            sup |SN (f )(0)| ≤ M kf k∞ .
                             N

There is nothing special about the point zero, so in fact we have:

                              kSN (f )k∞ ≤ M kf k∞

where M is independent of N .
    Now let us further note that every L∞ function is the limit in measure of a
uniformly bounded sequence of continuous functions. (Put differently, C(S 1 )
is dense in L∞ (S 1 in the weak* topology.) Since each Fourier coefficient
varies continuously under such weak* limits, we have kSN (f )k∞ ≤ M kf k∞
for all f ∈ L∞ (S 1 ).                   PN
    Next we note that SN (f )(0) =          −N an (f ) is simply the sum of the
Fourier coefficients of f ,
                                    Z
                                  1
                       an (f ) =        f (x) exp(−inx) dx.
                                 2π S 1
                                            R
Thus we can write SN (f )(0) = (1/2π) f DN , where DN is the Dirichlet
kernel
                                      X N
                             DN (x) =      exp(−inx).
                                       −N



                                        72
Then we have shown that
                                 Z
                                     DN f ≤ M kf k∞

for all f ∈ L∞ . But this implies kDN k1 ≤ M .
    We now show that in fact, kDN k1 → ∞ as N → ∞. Setting q =
exp(inx), we have
           N
           X                  1 − q 2N +1   q N +1/2 − q −N −1/2   sin((N + 1/2)x)
DN (x) =        q −n = q −N               =      1/2     −1/2
                                                                 =                 ·
                                1−q             q −q                   sin(x/2)
           −N

Clearly all the action occurs near x = 0; indeed, we have |DN (x)| =
O(1/|x|) on [−π, π]. But near x = 0, there are periodic intervals on which
|Rsin((N + 1/2)x)| > 1/2. On these intervals, |1/ sin(x/2)| ≈ 2/|x|. Since
   dx/|x| diverges, we have kDN k1 → ∞. In fact, the L1 -norm behaves like
 R1
  1/N dx/x ≍ log(N ).

   After this phenomenon was discovered, a common sentiment was that it
was only a matter of time before a continuous function would be discovered
whose Fourier series diverged everywhere. Thus it was even more remarkable
when L. Carleson proved:

Theorem 7.7 For any f ∈ L2 (S 1 ), the Fourier series of f converges to f
pointwise almost everywhere.

   The proof is very difficult.
The Fejér kernel. However in the interim Fejér, at the age of 19, proved
a very simple result that allows one to reconstruct the values of f from its
Fourier series for any continuous function.

Theorem 7.8 For any f ∈ C(S 1 ), we have

                                     S0 (f ) + · · · + SN −1 (f )
                       f (x) = lim
                                                  N
uniformly on the circle.

   This expression is a special case of Césaro summation, where one re-
places the sequence of partial sums by their averages. This procedure can



                                          73
                                                           1.75

                    12
                                                           1.5
                    10

                                                           1.25
                    8

                                                             1
                    6


                     4                                     0.75


                     2                                     0.5



   -3   -2    -1           1     2      3                  0.25

                    -2

                                            -3   -2   -1          1      2     3




                   Figure 3. The Dirichlet and Fejér kernels.


                                                                  P∞
be iterated. In the case at hand, it amounts to computing             −∞ an as the
limit of the sums
                                N
                             1 X
                                    (N − |i|)an .
                            N
                                 i=−N

Approximate identities. To explain Fejér’s result, it is useful to first
understand the idea of convolution and approximate identities.
   Writing S 1 as an additive group, for f, g ∈ L1 (S 1 ) we let
                                      Z
                  (f ∗ g)(x) = (1/2π)    f (x)g(y − x) dx.
                                            S1

Note that f ∗ g = g ∗ f . It is easy to show that (f ∗ g)(x) is a continuous
function of x; thus convolution is a smoothing operator.            R
    We say fn is an approximation to the identity if fn ≥ 0, (1/2π) fn = 1
for all n and fn → 0 uniformly on compact sets outside x = 0.

Theorem 7.9 If fn is an approximation to the identity, and g ∈ C(S 1 ),
then f ∗ g → g uniformly on S 1 .

Proof. Think of fn ∗ g are a sum of the translates g(x − y) weighted by
fn (y). The translates with y small are uniformly close to g because g is
continuous. The translates with y large make a small contribution because
their total weight is small. Thus fn ∗ g is uniformly close to g.



                                        74
   If we let
                              S0 (f ) + · · · + SN −1 (f )
                      TN (f ) =                            ,
                                           N
then TN (f ) = f ∗ FN where the Fejér kernel is given by

                         FN = (D0 + · · · DN −1 )/N.
           R                 R
Of course FN = 1 since Dn = 1. But in addition, FN is positive and
concentrated near 0, i.e. it is an approximation to the identity. Indeed, we
have:
                                      sin2 (N x/2)
                            FN (x) =               ·
                                      N sin2 (x/2)
To see the positivity more directly, note for example that

(2N + 1)F2N +1 = z −2N + 2z −2N +1 + · · · + (2N + 1) + · · · 2z 2N −1 + z 2N
                   = (z −N + · · · z N )2 = DN
                                             2
                                               ,

where z = exp(ix).
Fourier transform. One of the great ideas in analysis is the Fourier
transform on L2 (R). We define it on f ∈ L2 (R) by
                                 Z
                         b
                         f (ξ) =    f (x)e−ixξ dx.
                                     R

This integral at least makes sense when f is smooth and compactly sup-
ported.
    We claim (fb, fb) is a constant multiple of (f, f ). Indeed, on any in-
terval [−πM, πM ] large enough √to contain the support  P of f , we have an
orthonormal                  inx/M
         √ basis gi = e            / 2πM ; writing f =     ai gi we find ai =
fb(n/M )/ 2πM , and thus
                    X                                   Z
                                    1 Xb              1
          (f, f ) =     |ai |2 =         f (n/M ) →       |fb|2
                                 2πM                 2π

as n → ∞. Thus f extends to all of L2 as an isometry.
Fourier transform and differential equations. The Fourier transform
reverse small-scale and large scale features of Rf . It turns differentiation
d/dxi into multiplication by xi . Thus fb(0) = f ; if f is smooth then fb
decays rapidly at infinity; etc.
    Since differentiation is turned into multiplication, it becomes easy to
solve PDEs. For example, to solve ∆u = f , you just pass to the transform

                                         75
                        P 2
side and divide fb by      xi . There is no difficultly near infinity for the result
to be in L2 ; this reflects
                          R that fact that ∆ is aR smoothing operator. There is
difficulty near 0: both f and the moments f xi should vanish for u to be
in L2 .
Spherical harmonics. We can also look from L2 (S 1 ) in another direction
— towards L2 (S n−1 ), where the domain remains compact but its symmetry
group becomes larger G = SO(n). How do Fourier series generalize to the
higher-dimensional spheres?
    The case of a sphere is especially convenient because we can regard S n−1
as the unit ball |x| = 1 in Rn . Let Pd denote the space of homogeneous
polynomials of degree d on Rn . We have
                                                
                                        d+n−1
                            dim Pd =               ·
                                          n−1
                     P
The Laplacian ∆ = d2 /dx2i maps Pd to Pd−2 ; its kernel Hd is the space of
harmonic polynomials of degree d. The key property of the Laplace operator
is that it is SO(n)-invariant.

Theorem 7.10 We have L2 (S n−1 ) = ⊕∞
                                    d=0 Hd .

   Generally a function f ∈ Hd or its restriction to S n−1 is called a spherical
harmonic. It can be shown that f , considered as a function the sphere, is
actually an eigenfunction of the spherical Laplacian.
   One can also study issues of pointwise convergence in this setting, for
example one has:

Theorem 7.11 If f ∈ C 2 (S n−1 ) then its Fourier series converges uni-
formly.

    To begin the proof that the spherical harmonics forms a ‘basis’ for
L2 (S n−1 ), we first show there is no relation between them.

Proposition 7.12 The restriction map from Rn to S n−1 is injective on
⊕Hd .

Proof. A harmonic polynomial which vanishes on the sphere is everywhere
zero, by the maximum principle.




                                        76
Raising operator.
               P 2 Of course this n−1 result fails for general polynomails,
because r 2 =     xi is constant on S    . To take this into account, we
introduce the raising operator

                                 L : Pd → Pd+2

defined by L(f ) = r 2 f . Here are some of its key properties and their conse-
quences.

  1. If f is harmonic, then ∆L(f ) = 2(n + d)f . This is because

                     ∆(r 2 f ) = (∆r 2 )f + (∇r 2 ) · (∇f ) + r 2 ∆f

  2. More generally, we have ∆L(f ) = 2(n + d)f + L∆f , i.e. [∆, L] =
     2(n + d). From this we find inductively:

                             ∆Lk+1 = Ck Lk + Lk+1 ∆,

      where Ck 6= 0. This shows:

                                ∆(r 2k+2 Hd ) = r 2k Hd

      (and of course the map is an isomorphism because both sides have the
      same dimension).

  3. We can now prove by induction:

                        Pd = Hd ⊕ r 2 Hd−2 ⊕ r 4 Hd−4 ⊕ · · ·

      Indeed, once this is known for Pd we simply consider ∆ : Pd+2 → Pd .
      This map has kernel Hd+2 and maps r 2 Hd bijectively to Hd , etc.

  4. As a Corollary we immediately see that ⊕Hd |S n−1 is the same space
     of functions as ⊕Pd |S n−1 , since r = 1 on S n−1 . In particular, ⊕Hd is
     dense in L2 (S n−1 ).

  5. It remains to check that Hd and He are orthogonal for d 6= e. One
     way is to consider the spherical Laplacian and note that these are
     eigenspaces with different eigenvalues. Another way is to consider the
     character of SO(2) acting on Hd .

  6. The combination of these observations proves the spherical harmonics
     form a basis for L2 (S n−1 ).

                                       77
Low-dimensional examples. For example, when n = 2 we have dim H0 =
1 and dim Hd = 2 for d > 0. A basis is given by Re z d and Im z d .
    For n = 3 we have dim hd = 2d + 1 = 1, 3, 5, . . .. It is traditional to form
a complex basis Ymd for Hd where −d ≤ m ≤ d, and
                       Ymd (x, y, z) = (x ± iy)|m| Pdm (z).
Here Pdm (z) is a Legendre polynomial.
The hydrogen atom. The simplest model for the hydrogen atom in quan-
tum mechanics has as states of pure energy the functions f on R3 which
satisfy
                             ∆f + r −1 f = Ef.
It turns out a basis for such functions has the form of products of radial
functions with spherical harmonics. The energy is proportional to 1/N 2
where N is the principal quantum number. For a given N , the harmonics
with 0 ≤ d < N − 1 all arise, each with multiplicity 2d + 1, so there are
N 2 independent states altogether. The states with d = 0, 1, 2, 3, . . . are
traditionally labelled s, p, d, f , g, h.
Irreducibility. Is there a finer Fourier series that is still natural with
respect to rotations? The answer is no:
Theorem 7.13 The action of SO(n) on Hd is irreducible.

Proof. There are many proofs of irreducibility; here is a rather intuitive,
analytic one.
    Suppose the action of SO(n) on Hd splits nontrivially as A⊕ B. Then we
can find in each subrepresentation a function such that f (N ) = 1, where N
is the ‘north pole’ stabilized by SO(n − 1); and by averaging over SO(n − 1),
we can assume f is constant on each sphere S n−2 ⊂ S n−1 centered at N .
In particular, if we consider a ball B ⊂ S n−1 centered at N and of radius
ǫ > 0, we can find a nonzero f ∈ Hd with f |∂B = 0 and max f |B = 1.
    Considere the cone U = [0, 2]B ⊂ Rn . Then f is a harmonic function
which vanishes on all of the boundary of B except the cap 2B. By homo-
geneity, max f |2B = 2d . In addition, there is an x ∈ B where f (x) = 1. By
the mean value property of harmonic functions, f (x) is the average of the
values f (y) over the points y where a random path initiated at x first exists
U . But the probability that the path exits through the cap 2B is p(ǫ) → 0
as ǫ → 0. Thus
                             1 = f (x) ≤ 2d p(ǫ) → 0,
a contradiction.


                                       78
    (Note: this argument gives a priori control over the diameter of a closed
‘nodal set’ for an eigenfunction of the Laplacian on S n−1 in terms of its
eigenvalue.)
Spherical Laplacian. Here is a useful computation for understanding
spherical harmonics intrinsically.
   To compute the Laplacian of f |S n−1 , we use the formula:

                            ∆s (f ) = ∇ · πs (∇f ),

where
                         πs (∇f ) = ∇f − (b
                                          r · ∇f )b
                                                  r
is the projection of ∇f to a vector field tangent to the sphere. Using the
fact that ∇ · rb = n − 1, this gives:

                ∆s (f ) = ∆(f ) − (n − 1)(df /dr) − d2 f /dr 2 .

Now suppose f is a spherical harmonic of degree ℓ. Then ∆(f ) = 0, df /dr =
ℓf , and d2 f /dr 2 = ℓ(ℓ − 1)f , which yields:

Theorem 7.14 If f ∈ Hℓ (Rn ) then f |S n−1 is an eigenfunction of the spher-
ical Laplacian, satisfying

                          ∆s (f ) = −ℓ(ℓ + n − 2)f.


8    General Measure Theory
Measures. A measure (X, B, m) consists of a map m : B → [0,P    ∞] defined
on S
   a σ-algebra of subsets of X, such that m(∅) = 0 and such that m(Bi ) =
m( Bi ) for countable unions of disjoint Bi ∈ B.
Countable/Co-countable measure. An example is the measure defined
on any uncountable set X by taking B to be the σ-algebra generated by
singletons and m(B) = 0 or ∞ depending on whether B is countable or
X − B is countable.
Hausdorff measure. This is defined on the Borel subsets of Rn by
                                    X
                mδ (E) = lim inf        diam(Ei )δ ,
                               r→0 E=
                                 S
                                        Ei

where diam(Ei ) ≤ r. Appropriately scaled, mn is equal to the usual volume
measure on Rn .

                                      79
Dimension; the Cantor set. The Hausdorff dimension of E ⊂ Rn is the
infimum of those δ such that mδ (E) = 0.
    For example, the usual Cantor set E can be covered by 2n intervals of
length 1/3n , so its dimension is at most log 2/ log 3. On the other hand,
there is an obvious measure on E such that m(A) ≤ C(diam E)log 2/ log 3 and
from this it is easy to prove the dimension is equal to log 2/ log 3.
Linear maps and dimension. Clearly Hausdorff measure satisfies mδ (αE) =
αδ m(E). So for the Cantor set E built on disjoint subintervals of lengths
a, b a + b < 1 in [0, 1], one has aδ + bδ = 1 if 0 < mδ (E) < ∞.
    This makes it easy to guess the dimension of self-similar fractals. The
self-affine case is much harder; cf. the M curve, of dimension 1 + 2log 2/ log 3 .
Signed measures. To make the space of all measure into a linear space,
we must allow measures to assume negative values.
   A finite signed measure m on a σ-algebra B is a map m : B → [−M, M ],
such that for any sequence of disjoint Bi we have
                          X               [
                              m(Bi ) = m( Bi ).

Note that the sum above converges absolutely, since the sum of its positive
terms individually is bounded above by M , and similar for the negative
terms.
     A general signed measure is allowed to assume at most one of the values
                                                                         S
±∞, and the sum above is required to converge absolutely when m( Bi )
is finite.
     A measure is a signed measure assuming no negative values.
     For simplicity we will restrict attention to finite signed measures.
Positive sets. Given a signed measure m, a set P is positive if m(A) ≥ 0
for all A ⊂ P .

Theorem 8.1 If m(A) > 0 then there is a positive set P ⊂ A with m(P ) ≥
m(A).

Proof. Let λ(A) = inf{m(B) : B ⊂ A} ≥ −M . Pick a set of nonpositive
measure, B1 ⊂ A, with m(B1 ) < λ(A) + 1. By induction construct a set
of nonpositive measureP Bn+1 ⊂ An = A − (B1 ∪ . . . ∪ Bn ) with m(Bn+1 ) <
λ(An ) − 1/n. Then T    |m(Bi )| < ∞, so m(Bi ) → 0 and thus λ(Ai ) → 0.
    Letting P = An , we have P ⊂ An so λ(P ) ≥ lim λ(An ) = 0. Thus P
is a positive set, and m(P ) ≥ m(A) since m(Bi ) ≤ 0 for each i.



                                      80
The Hahn Decomposition.
Theorem 8.2 Given a finite signed measure m on X, there is a partition
of X into a pair A, B of disjoint sets, one positive and one negative.

Proof. Let p = sup m(P ) over all positive sets P ⊂ X. We claim p is
achieved for some positive set A.SIndeed, we can choose positive sets Ai
with m(Ai ) → p and just let A = Ai .
   Now let B = X − A. Then B contains a set of positive measure, then it
contains a positive set P of positive measure; then m(A ∪ P ) > m(A) = p,
contrary to the definition of p. Thus B is negative.

Jordan decomposition.
Theorem 8.3 Let m be a signed measure on X. Then m can be uniquely
expressed as m = p − n, where p and n are mutually singular (positive)
measures.
    Here mutually singular means p and n are supported on disjoint sets.
Proof. Let p = m|A and n = −m|B, where A∪B is the Hahn decomposition
of X (unique up to null sets). This shows p and n of the required form exist.
    Now assuming only that m = p−n, where p and n are mutually singular,
we can assert that p(A) = sup{m(B) : B ⊂ A}, and thus p is unique.
Similarly n is unique.

Absolute continuity. Given a pair of measures µ and λ, we say µ ≪ λ,
or µ is absolutely continuous with respect to
                                           R λ, if λ(E) = 0 =⇒ µ(E) = 0.
    For example, X = [0, 1] and µ(E) = E f (x) dx for f ∈ L1 [0, 1], then
µ ≪ λ if λ is Lebesgue measure on [0, 1]. In fact the converse holds.
The Radon-Nikodym theorem.
Theorem 8.4 If µ ≪ λ then there is an f ≥ 0 such that
                                Z
                        µ(E) =      f (x) dλ.
                                      E

Proof. If f has the form above, then the Hahn decomposition of µ is
{f < 0} ∪ {f > 0}. Similarly the Hahn decomposition of µ − αλ is {f <
α} ∪ {f > α}.
    So for each rational number α, let Pα be the positive set for the Hahn
decomposition of µ − αλ. Then the Pα are R nested (up to null sets). Define
f (x) = sup{α : x ∈ Pα }, and set ν(A) = A f dλ.

                                     81
   Now notice that for α < β, for any A contained in

                          {α ≤ f ≤ β} = Pα − Pβ ,

we have ν(A) and µ(A) both contained in [α, β]λ(A). Chopping [0, ∞] into
intervals of length 1/n, and pulling these intervals back to a decomposition
Ei of a set E, we find
                    R that µ(E) is sandwiched between the upper and lower
approximations to E f dλ. Therefore equality holds.

Derivatives. The function f defined above is commonly written f =
dµ/dλ, so we have
                                dµ
                           µ=      dλ.
                                dλ
Absolutely continuous/singular decomposition. Given a pair of mea-
sures µ, ν on (X, B), we can naturally decompose ν = νa + νs with νa ≪ µ
and νs ⊥ µ.
    To do this, just let π = µ + ν, and write dµ = f dπ, ν = g dπ (using
Radon-Nikodym derivatives). Then we have ν = g/f dµ on the set where
f > 0, and ν ⊥ µ on the set where f = 0. These two restrictions give the
desired decomposition of ν.
Baire measures. We now pass to the consideration of measures µ on
a compact Hausdorff space X compatible with the topology. The natural
domain of such a measure is not the Borel sets but the Baire sets K, the
smallest σ-algebra such that all f ∈ C(X) are measurable.
   A Baire measure is a measure m on (X, K).
   What’s the distinction? In R, all closed sets are G′δ s, so their preimages
under functions are also Gδ . Thus K is generated by the closed Gδ ’s in X,
rather than all closed sets.
   In a compact metric space, the Borel and Baire sets coincide.
Regular contents. It is useful to have a characterization of those functions
λ : F → X defined on the closed (hence compact) sets F in X such that λ
extends to a Baire measure. Here it is:

Theorem 8.5 Let λ(K) ≥ 0 be defined for all compact Gδ sets K ⊂ X and
satisfy:

     (i) λ(K1 ) ≤ λ(K2 ) if K1 ⊂ K2 ;
     (ii) λ(K1 ∪ K2 ) = λ(K1 ) + λ(K2 ) if K1 and K2 are disjoint; and
     λ(K) = inf λ(U ) over all open sets U ⊃ K.


                                     82
Then there is a unique Baire measure µ such that µ(K) = λ(K) for all
compact K.

   Such a λ is called a regular content on X.
Sketch of the proof. Given λ, we can define a set-function (inner measure)
by
                         µ∗ (E) = sup λ(K),
                                      K⊂E

define a set A to be measurable if µ∗ (A ∩ E) + µ∗ ((X − A) ∩ E) = µ∗ (E)) for
all E, show that the measurable sets contain the Baire sets and that µ = µ∗
is a Baire measure extending λ.
Positive functionals.

Theorem 8.6 Let φ : C(X) → R be a linear map such that f ≥ 0 =⇒
φ(f ) ≥ 0. Then there is a unique Baire measure µ on X such that
                                      Z
                              φ(f ) =   f dµ.
                                       X


Proof. Let us say f ∈ C(X) is admissible for a compact Gδ set K if f ≥ 0
and f ≥ 1 on K. Define λ(K) as inf φ(f ) over all admissible f .
    We claim λ is a regular content. (i) is clear; as for (ii), λ(K1 ∪ K2 ) ≤
λ(K1 ) + λ(K2 ) is obvious. For the reverse inequality, use normality of X to
get g1 + g2 = 1, g1 g2 = 0, 0 ≤ gi ≤ 1 with gi = 1 on Ki . Then given f for
K1 ∪ K2 we get competitors fi = gi f for Ki with φ(f1 ) + φ(f2 ) ≤ φ(f ), so
λ(K1 ∪ K2 ) ≤ λ(K1 ∪ K2 ).
    Finally for (iii): choose f admissible for K with φ(f ) ≤ λ(K)+ǫ. Let U =
{f > 1−ǫ}. Then f /(1−ǫ) is admissible for U , so λ(U ) ≤ (λ(K)+ǫ)/(1−ǫ),
and therefore λ(K) = inf λ(U ).
    Thus λ extends to a Baire measure µ. To show that integration against µ
reproduces φ, first note that for any K there exist admissible fn decreasing
to χK pointwise, with fn eventually vanishing  R on any compact set L disjoint
from K (since K is a Gδ ), and for which fn and φ(fn ) both converge to
µ(K) = λ(K).
R Thus we can approximate χK by a continuous function f with φ(f ) ≈
  f . Now approximate g from above by sums of indicator functions of com-
pact sets, and approximateR these from above by admissible functions f ;
then weR get φ(g) ≤ φ(f ) ≈ g dµ. Doing the same from below we find that
φ(g) = g dµ.



                                     83
Theorem 8.7 (Riesz) Let X be a compact Hausdorff space. Then the dual
of C(X) is the space of Baire measures on X, with µ = |µ|(X).

Proof. One shows a linear functional can be decomposed into a positive
and negative part, each of which is represented by a measure.

   Corollary. The space of measures on a compact Hausdorff space is com-
pact in the weak* topology.
Functions of bounded variation and signed measures on [a, b]. We
can now address afresh the theory of differentiation of f : [a, b] → R. To
each signed measure µ we can associate the function f (x) = µ[a, x]. This
function is continuous from above and of bounded variation. Conversely, to
each such f one can attach a measure df . The weak topology is the one
where fn → f iff fn (x) → f (x) for each x such that f is continuous at x.
     Now signed measure correspond to functions in BV; absolutely continu-
ous measures, to absolutely continuous functions; f ′ (x) is dµa /dλ; disconti-
nuities correspond to atoms; singular measure correspond to f with f ′ = 0
a.e.
Compactness. As an alternative proof of compactness: consider a se-
quence of monotone increasing functions f : [a, b] → [0, 1] with f (b) = 1.
(I.e. a sequence of probability measures.) Passing to a subsequence, we can
get fn (x) to converge for all rational x ∈ [a, b]. Then there is a monotone
limit g, which can be arranged to be right-continuous, such that fn → g
away from its discontinuities.
Integration. Given a function f of bounded variation and g ∈ C ∞ [a, b],
we can define
                  Z b                 Z b
              I=      g(x) df (x) = −     f (x)g′ (x) dx.
                       a                     a

Now breaking [a, b] up into intervals [ai , ai+1 ] we get the approximation:
                    X
         I = −          f (ai )(g(ai+1 ) − g(ai ))
                    X
            = +        (f (ai+1 ) − f (ai ))g(ai ) = O(kf kBV kgk∞ ).

Thus integration against df gives a bounded linear functional on a dense
subset of C[a, b], so it extends uniquely to a measure.
    This idea is the beginnings of the theory of distributions.
    Sample application: Let f : X → X be a homeomorphism. Then there
exists a probability measure µ on X such that µ(A) = µ(f (A)).

                                      84
Proof. Take any probability measure — such as a point mass δ; average it
over the first n iterates of f ; and take a weak* limit.

Haar measure. If G is a compact Hausdorff topological group, for each
open neighborhood U of the origin we define λU (K) = [K : U ]/[G : U ]
where [E : U ] is the minimal number of left translates gU needed to cover
E. Then as U shrinks towards the identity, we can extract some (Banach)
limit of λU , which turns out to be a content λ. In this way we obtain a
left-invariant measure on G.


References
[Con] J. H. Conway. On Numbers and Games. Academic Press, 1976.

[Me] R. Mañé. Ergodic Theory and Differentiable Dynamics. Springer-
     Verlag, 1987.

[Ox] J. C. Oxtoby. Measure and Category. Springer-Verlag, 1980.




                                   85



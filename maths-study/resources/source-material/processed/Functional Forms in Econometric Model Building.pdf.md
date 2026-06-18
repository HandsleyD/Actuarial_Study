---
normalized_id: shared-pdf-reference-functional-forms-in-econometric-model-building
exam_code: SHARED
material_scope: functional forms in econometric model building.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Functional Forms in Econometric Model Building.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-functional-forms-in-econometric-model-building

Chapter 26


FUNCTIONAL FORMS IN ECONOMETRIC
MODEL BUILDING*
LAWRENCE J. LAU
Stanford     University




Contents

1.   Introduction                                                                           1516
2.   Criteria for the selection of functional forms                                         1520
     2.1.     Theoretical consistency                                                       1520
     2.2.     Domain of applicability                                                       1527
     2.3.     Flexibility                                                                   1539
     2.4.     Computational facility                                                        1545
     2.5.     Factual conformity                                                            1546
3.   Compatibility          of the criteria for the selection of functional forms           1547
      3.1.    Incompatibility of a global domain of applicability and flexibility           1548
      3.2.     Incompatibility of computational facility and factual conformity             1551
      3.3.     Incompatibility of a global domain of applicability, flexibility and
              computational facility                                                        1552
4. Concluding remarks                                                                       1558
Appendix 1                                                                                  1559
References                                                                                  1564




   *The author wishes to thank Kemreth Arrow, Erwin Diewert, Zvi Griliches, Dale Jorgenson and
members of the Econometrics Seminar at the Department of Economics, Stanford U&ersity, for
helnful comments and discussions. Financial sunnort for this research under srant SOC77-11105 from
the* National Science Foundation is gratefully &cnowledged. Responsibility for errors remains with
the author.

Handbook of Econometrics, Volume III, Edited by 2. Griliches and M.D. Intriligator
0 Elsevier Science Publishers BV, 1986
1516                                                                                    L. J. Lml




1.     Introduction

Econometrics      is concerned with the estimation of relationships     among observable
(and sometimes even unobservable)         variables. Any relationship    to be estimated is
almost always assumed to be stochastic.             However, the relationship      is often
specified in such a way that it can be decomposed             into a deterministic    and a
stochastic part. The deterministic      part is often represented   as a known algebraic
function     of observable   variables and unknown     parameters.    A typical economic
relationship    to be estimated may take the form:




 where y is the observed value of the dependent variable, X is the observed value
 of the vector of independent        variables, cu is a finite vector of unknown constant
parameters       and E is a stochastic         disturbance      term. The deterministic      part,
f( X, a), is supposed to be a known function. The functional                 form problem that
we consider is the ex ante choice of the algebraic form of the function f( X; CX)
prior to the actual estimation. We ask: What considerations                  are relevant in the
selection    of one algebraic functional          form over another, using only a priori
information      not specific to the particular data set?
   This problem        of ex ante choice of functional            forms is to be carefully dis-
tinguished     from that of ex post choice, that is, the selection of one functional
form from among several that have been estimated from the same actual data set
on the bases of the estimated results and/or                post-sample    predictive tests. The
ex post choice problem belongs properly to the realm of specification analysis and
hypothesis testing, including the testing of nonnested hypotheses.
   We do not consider here the choice of functional                    forms in quanta1 choice
analysis as the topic has been brilliantly          covered by McFadden         (1984) elsewhere
in this Handbook.        In our discussion of functional         forms, we draw our examples
largely from the empirical analyses of production              and consumer demand because
the restrictions    implied by the respective theories on functional            forms are richer.
But the principles that we use are applicable more generally.
   Historically,    the first algebraic functional       forms were chosen because of their
ease of estimation.       Almost always a functional         form chosen is linear in parame-
ters, after a transformation        of the dependent         variable if necessary. Thus, one
specializes from
Ch. 26: Functional Forms in Econometric Model Building                           1517

to

     Y=      Cfi(x)ai9




where g(a) is a known monotonic transformation of a single variable. Moreover,
it is often desirable to be able to identify the effect of each independent variable
on the dependent variable separately. Thus, one specializes further to:




or

     g(Y)=          CfiCxiJai7
                         I




 so that (Y~can be interpreted as the effect of a change in Xi (or more precisely
fi( Xi)). Finally, for ease of computation and interpretation and for aesthetic
reasons, the fi( )‘s are often chosen to be the same f( ), resulting in:

     Y   =   C.f(            xi)ai7                                            (1.1)

or

     f?(Y)=         Cf(4Jai*                                                   (1.2)

An example of eq. (1.1) is the widely used linear functional form in which
f( Xi) = Xi. An example of eq. (1.2) is the double-logarithmic functional form in
which g(y) = In y and f( Xi) = In Xi. It has the constant-elasticity property with
the advantage that the parameters are independent of the units of measurement.
    In addition, functional forms of the type in eqs. (1.1) and (1.2) may be
interpreted as first-order approximations to any arbitrary function in a neighbor-
hood of some X= X,, and that is one reason why they have such wide currency.
    However, linear functions, while they may approximate whatever underlying
 function reasonably well for small changes in the independent variables, fre-
1518                                                                          L. J. L.uu


quently do not work very well for many others purposes. For example, as a
production function, it implies perfect substitution among the different inputs
and cons&~ marginal products. It cannot represent the phenomenon of di-
minishing marginal returns. Moreover, the perfect substitution property of the
linear production function has the unacceptable implication that almost always
only a single input will be employed and an ever so slight change in the relative
prices of inputs will cause a complete shift from one input to another.
   Another linear-in-parameters    functional form that was used is that of the
Leontief or fixed-coefficients production function in its derived demand functions
representation:

       Xi=ffiY,            i=l   ,..., m,


where Xi is the quantity of the ith input, i =l,. . . , m and Y is the quantity of
output. However, this production function implies zero substitution among the
different inputs. No matter what the relative prices of inputs may be, the relative
proportions   of the inputs remain the same. This is obviously not a good
functional form to use if one is interested in the study of substitution possibilities
among inputs.
   The first widely used production function that allows substitution is the
Cobb-Douglas (1928) production function, which may be regarded as a special
case of eq. (1.2):

       lnY=a,+CailnXi,                Cai=l.                                     0.3)
                       i               i



However, it should be noted that the Cobb-Douglas production function was
discovered not from a priori reasoning but through a process of induction from
the empirical data. Cobb and Douglas observed that labor’s share of national
income had been approximately constant over time and independent of the
relative prices of capital and labor. They deduced, under the assumptions of
constant returns to scale, perfect competition in the output and input markets,
and profit maximization by the firms in the economy that the production function
must take the form:

       y = AjpL(1-a)        3                                                    0.4
where K and L are the quantities of capital and labor respectively. Fq. (1.4)
reduces to the form of eq. (1.3) by taking natural logarithms of both sides. The
Cobb-Douglas production function became the principal work horse of empirical
analyses of production until the early 1960s and is still widely used today.
Ch. 26: Functional   Forms in Econometric Model Building                        1519

   The next advance in functional forms for production functions came when
Arrow, Chenery, Minhas and Solow (1961) introduced the Constant-Elasticity-
of-Substitution (C.E.S.) production function:

      Y=y[(14)KP+GLP]“P,                                                      0 -5)

where y, 6 and p are parameters. This function is not itself linear in parameters.
However, it gives rise to average productivity relations which are linear in
parameters after a monotonic transformation:




                                                                              03

where p, r, and w are the prices of output, capital and labor respectively and (Y,p
and u are parameters. The C.E.S. production function was discovered, again
through a process of induction, when the estimated u from eq. (1.6) turned out to
be different from one as one would have expected if the production function were
actually of the Cobb-Douglas form.
   Unfortunately, although the C.E.S. production function is more general than
the Cobb-Douglas      production function (which is itself a limiting case of the
C.E.S. production function), and is perfectly adequate in the two-input case, its
generalizations to the three or more-input case impose unreasonably severe
restrictions on the substitution possibilities. [See, for example, Uzawa (1962) and
McFadden (1963)]. In the meantime, interest in gross output technologies dis-
tinguishing such additional inputs as energy and raw materials continued to grow.
Almost simultaneously advances in the computing technology lifted any con-
straint on the number of parameters that could reasonably be estimated. This led
to the growth of the so-called “flexible” functional forms, including the gener-
alized Leontief functional form introduced by Diewert (1971) and the tran-
scendental logarithmic functional form introduced by Christensen, Jorgenson and
Lau (1973). These functional forms share the common characteristics of linearity-
in-parameters and the ability of providing second-order approximations to any
arbitrary function. In essence they allow, in addition to the usual linear terms, as
in eqs. (1.1) and (1.2), quadratic and interaction terms in the independent
variables.
   Here we study the problem of the ex ante choice of functional form when the
true functional form is unknown. (Obviously, if the true functional form is
known, we should use it.) We shall approach this problem by considering the
relevant criteria for the selection of functional forms.
1520                                                                                              L. J. ZAU

2.      Criteria for the selection of functional forms

What are some of the criteria that can be used to guide the ex ante selection of an
algebraic functional form for a particular economic relationship? Neither eco-
nomic theory nor available empirical knowledge provide, in general, a sufficiently
complete specification of the economic functional relationship so as to determine
its precise algebraic form. Consequently the econometrician has wide latitude in
deciding which one of many possible algebraic functional forms to use in building
an econometric model. Through practice over the years, however, a set of criteria
has evolved and developed. These criteria can be broadly classified into five
categories:
   (1) Theoretical consistency;
   (2) Domain of applicability;
   (3) Flexibility;
   (4) Computational facility; and
   (5) Factual conformity.
We shall discuss each of these criteria in turn.



2. I.     Theoretical      consistency

Theoretical consistency means that the algebraic functional form chosen must be
capable of possessing all of the theoretical properties required of that particular
economic relationship for an appropriate choice of parameters. For example, a
cost function of a cost-minimizing firm must be homogeneous of degree one,
nondecreasing and concave in the prices of inputs, and nondecreasing in the
quantity of output. Thus, any algebraic functional form selected to represent a
cost function must be capable of possessing these properties for an appropriate
choice of the parameters at least in a neighborhood of the prices of inputs and
quantity of output of interest. For another example, a complete system of demand
functions of a utility-maximizing consumer must be summable,’ homogeneous of
degree zero in the prices of commodities and income or total expenditure and
have a Jacobian matrix which gives rise to a negative semidefinite and symmetric
Slutsky substitution matrix. Thus, any algebraic functional form selected to
represent a complete system of consumer demand functions must be capable of
possessing these properties for an appropriate choice of the parameters at least in
a neighborhood of the prices of commodities and income of interest.
   Obviously, not all functional forms can meet these theoretical requirements, not
even in a small neighborhood of the values of the independent variables of

   ‘Summability    means    that the sum of expenditures   on all commodities   must be equal to income   or
total expenditure.
Ch. 26: Functional   Forms in Econometric        Model Building                   1521

interest. However, a sufficiently large number of functional forms will satisfy the
test of theoretical consistency, at least locally, that other criteria must be used to
select one from among them. Moreover, many functional forms, while they may
satisfy the theoretical consistency requirement, are in fact readily seen to be
rather poor choices. For example, the cost function


      c(P>y)=y
                        [
                             c”iPi
                             i=l         I   3




where pi is the price of the ith input and Y is the quantity of output and (Y~> 0,
i=l >*.., m, satisfies all the theoretical requirements of a cost function. It is
homogeneous of degree one, nondecreasing and concave in the prices of inputs
and nondecreasing in the quantity of output. However, it is not regarded as a
good functional form in general because it allows no substitution among the
inputs. The cost-minimizing demand functions corresponding to this cost function
are given by Hotelling (1932)-Shephard (1953) Lemma as:




         = aiY,             i=l    ,...,m.


Thus all inputs are employed in fixed proportions. While zero substitution or
equivalently fixed proportions may be true for certain industries and processes, it
is not an assumption that should be imposed a priori. Rather, the data should be
allowed to indicate whether there is substitution among the inputs, which brings
up the question of “flexibility” of a functional form to be considered below.
   Yet sometimes considerations of theoretical consistency alone, even locally, can
rule out many functional forms otherwise considered acceptable. This is demon-
strated by way of the following two examples, one taken from the empirical
analysis of producer behavior and one from consumer behavior.
   First, we consider the system of derived demand functions of a cost-minimiz-
ing, price and output-taking firm with the constant-elasticity property:


     ln Xi = ai + e &ln                pj + &ln      Y,       i=1,2   ,*.-, m   (2.1)
                      j-l



where Xi is the quantity demanded of the ith input, pj is the price of the jth
input, and Y is the quantity of output. The elasticities of demand with respect to
1522                                                                                                               L. J. Lau

own and cross prices and the quantity of output are all constants:

       3         =pij,              i, j=l   ,**-, m,
             3

       z         =&,                i=l,...,m.


Functional forms with constant elasticities as parameters are often selected over
other functional forms with a similar degree of ease of estimation because the
values of the parameters are then independent of the units of measurement of the
variables. It can be readily verified that in the absence of further restrictions on
the values of the parameters /Iij’s and &r’s, such a system of derived input
demand functions is flexible, that is, it is capable of attaining any given value of
X (necessarily positive), h’X’/ap and aX/aY at any specified positive values of
p=I_i and Y=Y through a suitable choice of the parameters &,‘s and /Iiv’s.
   However, if it were required, in addition, that the system of derived demand
functions in eq. (2.1) be consistent with cost-minimizing behavior on the part of
the producer, at least in a neighborhood of the prices of input and the quantity of
output, then certain restrictions must be satisfied by the parameters pij’s and
piv’s. Specifically, the function:


       C(p,Y)=         2       exp clli+ 5         (/3ij+6ij)lnp,+&lnY                           ,
                                                                                                                       (2.2)
                       i=l           i       j=l                                             1


                             l,i=j
       where 6,, =
                             0, otherwise

must have all the properties of a cost function and its partial derivatives with
respect to pi:


                                    (Bki+ aki)exP           ak + 5          (bkj + skj> In Pj + &dn                Y
                                                        i            j=l




                                                                                                     i=l ,...,m,       (2.3)

must be identically equal to the original system of derived demand functions in
eq. (2.1):


       Xi=exp        ai + 5 /?ijlnpj+P,ylnY                      9         i’=l   ,.-., m.                             (2.4)
                 i            j=l                            i
Ch. 26: Funciional Forms in Econometric Model Building                                                           1523

A cost function is homogeneous of degree one in the prices of inputs and the
first-order partial derivative of a cost function with respect to the price of an
input is therefore homogeneous of degree zero, implying:

       f    Pij=OB                    i=l     >..‘,   m.                                                        (2.5)
      j=l

A cost function is also concave in the prices of inputs, which implies:




                          &, exp (Y~
                                   + 5 fiijln pi + &ln Y
                                i    j-l                 i
                     =                                                            10,       i=l 3.*-, m.
                                                       Pi

We conclude that fiii I; 0. Moreover, since the value of a second-order cross-par-
tial derivative is independent of the order of differentiation wherever it exists,

                                                                          if j,    i, j=l   >*.*,m,


which implies:

      ax,=a.
      aPj api J’
                                              i # j,        i, j=l,...,    m.                                   (2.6)

   Applying eq. (2.6) to eq. (2.4) yields:


      Pi,exP             ai +    5    PikIn Pk + Pivln            y
                                k-l




                PjieXP LyI +             i      &lnPk + bplny
            =                           k=l
                                                                                   i # j,    i, j=l   ,...,m.   (2.7)
                                                 Pi
There are three possible cases. First, pij = fiji = 0, in which case each of the two
inputs has a zero cross elasticity with respect to the price of the other input.
Second, pij > 0 and fiji > 0 (they cannot have opposite signs because of the
positivity of the exponential function and the nonnegativity of prices), in which
case the relative expenditures on the two inputs are constants independent of the
prices of inputs and quantity of output, implying the following restrictions on the
1524                                                                                                              L. J. Luu

parameters:


       Plk- Pjk = O?                     k # i, j;      k=l,...,m;
       p,;+1-pji=o;
       Pi,-(Pjj+l)=o;                                                                                                 (2.8)
       PiY-PjY='Y


              a, -   Pjiea/       =    0.2
       P,,e




We note that for this case, (pli + 1) > 0 and ( pjj + 1) > 0, implying           that the
own-price elasticities of the i th and j th inputs must be greater than minus unity
(or less than unity in absolute value)-a        significant restriction. We further note
that if & # 0 for some k, k # i, j, Pjk z 0 for the same k. But if Pik # 0 and
Pjk f 0 by eq. (2.7), Pki f 0 and piXi/p,X,        = Pki/&, a constant, and hence the
relative expenditures    of all three inputs, i, j and k, are constants. Moreover, the
proportionality    of expenditures    implies that pii + 1 - Pki = 0 for all k such that
Pik # 0, k # i. Hence all &‘s, k # i, must have the same sign-positive,            in this
case. All Pki’s, k # i, must have the same positive sign and magnitude.              And
PiY= bjY=PkY'
   By considering          all the i’s it can be shown that the inputs are separable                              into n,
n I m, mutually           exclusive and jointly exhaustive groups such that

   (1) Cross-price elasticities                   are zero between            any two commodities         belonging       to
       different groups;
   (2) Relative expenditures                      are constant       within    each group.

   Such a system              of derived          demand     functions        corresponds     to a cost function          of
the form:



       c(P,y)=                5       c,(P’,Y),                                                                      (2.9)
                         ;=1




where pJ is the vector of prices of the jth                           group of inputs        and each C,( ) has the
form:




  *This restriction      results       from setting   the prices of all inputs    and the quantity   of output   to unities.
Ch. 26: Functional     Form      in Econometric        Model Building                                     1525

where

     A,.>O;                aii > 0, i;            Caji=l;                fi,>O,         j=l,...,   n.


   Third, pij < 0 and pij < 0, in which case the relative expenditures on the two
inputs are again constants independent of the prices of inputs and quantity of
output, implying the same restrictions on the parameters as those in eq. (2.8).
However, as derived earlier, all &‘s that are nonzero must have the same
sign-negative, in this case. But then cy= i& cannot be zero as required by zero
degree homogeneity. We conclude that a cost function of the form in eq. (2.9) is
the only possibility, with rather restrictive implications.
   From this example we can see that the requirement of theoretical consistency,
even locally, may impose very strong restrictions on an otherwise quite flexible
functional form.
   Second, we consider the complete system of demand functions of a utility-max-
imizing, budget-constrained consumer with the constant-elasticity property: 3


     In Xi = ai + F pijln pj + piMln M,                                 i=l,2     ,.-., m;              (2.10)
                           j-l


 where Xi is the quantity demanded of the i th commodity, pj is the price of the
jth commodity, and M is income (or equivalently total expenditure). The
 elasticities of demand with respect to own and cross prices and to income are all
 constants:


      z=flij, J
                                   i, j-1      ,...,    m,


      ggj         =   &,             i=l    ,...,m.




This is also known as the double-logarithmic system of consumer demand
functions. It can be readily verified that in the absence of further restrictions on
the values of the parameters pii’s and &,‘s, such a system of consumer demand
functions is flexible, that is, it is capable of attaining any given value of X
(necessarily positive), aX’/h’p and aX/aM at any specified positive values of
p = p and M = &? through a suitable choice of the parameters pij’s and PiM’s.
   However, if it were required, in addition, that the system of consumer demand
functions in eq. (2.10) be consistent with utility-maximizing behavior on the part
of the consumer, at least in a neighborhood of the prices of commodities and

  3Such a system was employed by Schultz (1938), Wold with Jureen (1953) and Stone (1953).
1526                                                                                                                                                   L. J. Lau

income, it is necessary                                 that the system                     of consumer                demand         functions        satisfies
summability,  that is:


         ipixj=
        i-l
             2 exp(a,+
                    C
                                  i=l                              j=l
                                                                             (Pijf6,j)lnP,+Bi~lnM)




                         =M                                                                                                                             (2.11)

identically.  It will be shown that (local) summability  alone, through                                                                           eq. (2.11),
imposes strong restrictions on the parameters pi,‘s and pjM’s.
   By dividing both sides by M, eq. (2.11) can be transformed    into:

          m



        i=l
                exp
                       l     0~~+ 2
                                        j=l
                                                    ( pij + aij)ln              pj + ( PiM - 1)ln M
                                                                                                                       I
                                                                                                                           =l.                          (2.12)



Differentiating               eq. (2.12) with respect to In pk twice, we obtain:

          m                                              I               m                                                                  \
        iFl(Pik+Sik)2exP{ai+                                            C     (P;j+Gij)ln~,+(~i,-l)lnM}=o~
                                                                    j=l

                                                                                                                                 k=l,...,       m.      (2.13)

But


        (Pik + 6ik)2
                   2 ‘2                                       i, k =l,...,           m,
and

        exp      ai+          f         (Pij+6ij)lnpj+(pi,-l)lnM                                                 ‘O,              i=l       >-.*, m.
                             j-l                                                                             I




Thus,      in order for the left-hand                                       side of eq. (2.13) to be zero, one must have:

        (Pi/c   +     6ik)        =     OY
                                                             i, k =l,...,           m.

Differentiating               eq. (2.12) with respect to In M twice, we obtain:


         5      (&M-1)2exp                               a,+        f        (/?i,+Sij)lnpj+(&,-l)lnM                                                   (2.14)
        i-l                                                        j=l


which by a similar                        argument                  implies

        ( PiM-l) = ‘3                                   i=l        ,...> m.
Ch. 26: Functional   Forms m Econometric        Model Building                                           1527

We conclude that (local) summability alone implies                      that the system    of consumer
demand functions must take the form:


       lnXj=cri-lnp,+lnMi,                       i=l   ,...,   m;      fJ e”l=1,                   (i.15)
                                                                       i=l


which is no longer flexible.4 For this system, the own-price elasticity is minus
unity, the cross-price elasticities are zeroes, and the income elasticity is unity for
the demand function of each and every commodity.
   We conclude     that theoretical    consistency,    even if applied only locally, can
indeed impose strong restrictions       on the admissible range of the values of the
parameters   of an algebraic functional         form. It is essential in any empirical
application   to verify that the algebraic         functional  form remains reasonably
flexible even under all the restrictions imposed by the theory. We shall return to
the concept of “flexibility”    in Section 2.3 below.



2.2.    Domain of applicability

The domain of applicability    of an algebraic functional form can refer to a number
of different concepts. The most common usage of the domain of applicability
refers to the set of values of the independent     variables over which the algebraic
functional   form satisfies all the requirements     for theoretical   consistency.  For
example, for an algebraic functional form for a unit cost function C( p; a), where
(Yis a vector of parameters, the domain of applicability    of the algebraic functional
form, for given (Y, consists of the set


       {PIP~O;        c(p;+o;            v ct    p; a) 2 0; v2C( p; a) negative         semidefinite}.


For an algebraic functional    form               for a complete       system of consumer demand
functions, X( p, M; a), the. domain               of applicability,    for given (Y,consists of the set


       {P,   WP,      M20;       X(pdwd20;

       X(Xp,     AM; a) = X(p,        M; a); and

       the corresponding        Slutsky substitution           matrix being symmetric

       and negative     semidefinite}.


  4This result is well known. The proof here follows Jorgenson and Lau (1977) which contains a more
general result.
1528                                                                                            L. J. Lau

We shall refer to this concept of the domain of applicability                    as the extrapolative
domain since it is defined on the space of the independent variables with respect to
a given value of the vector of parameters                (Y.
   It would be ideal if the extrapolative                domain of applicability        consists of all
nonnegative         (or positive) prices in the case of a unit cost function                   or of all
nonnegative        (or positive) prices and incomes in the case of a complete system of
consumer        demand       functions     for any value of the vector of parameters                    (Y.
Unfortunately         this is in general not the case.
   The first question           that needs to be examined              is thus: for any algebraic
functional      form f(X; cy), what is the set of (Y such that f( X, a) is theoretically
consistent     for the whole of the applicable domain? For an algebraic functional
form for a unit cost function, the applicable domain is normally taken to be the
set of all nonnegative           (positive) prices of inputs.5 For an algebraic functional
form for a complete              system of consumer           demand     functions,    the applicable
domain is normally            taken to be the set of all nonnegative             (positive) prices of
commodities         and incomes.6 If, for given (Y, the algebraic functional form f( X, CY)
is theoretically      consistent over the whole of the applicable domain, it is said to be
globally theoretically         consistent     or globally valid. For many functional              forms,
however, it may turn out that there is no such (Y, such that f( X; CY)is globally
valid, or that the set of such admissible a’s may be quite small relative to the set
of possible a’s. Only in very rare circumstances                   does the set of admissible         (Y’S
coincide with the set of possible (Y’s.
   We have already encountered                two examples in Section 2.1 in which the set of
admissible      values of the parameters           that satisfy the requirements         of theoretical
consistency       is a significantly     reduced subset of the set of possible values of the
parameters.       For the system of constant-elasticity            cos&minimizing       input demand
functions,     the number of independent              parameters     is reduced from m(inputs)X
(m + 2)(la,;        mpij’s and l&)           parameters     to at most 2m parameters             by the
requirements         of local theoretical consistency.         It may be verified, however, that
under the stated restrictions            on its parameters,      the cost function in eq. (2.9) as
well as the system of constant-elasticity                input demand functions           that may be
derived from it, are globally valid. Similarly, for the complete system of constant-
elasticity consumer demand functions, the number of independent                          parameters is
reduced     from m (commodities)x(m                  + 2) (la,;    m&;‘s and l&)             to (m - 1)
parameters       by the requirements        of local summability.      It may be verified, however,
that under the stated restrictions on its parameters (own-price elasticities of - 1;
cross-price elasticities of 0 and income elasticities of l), the complete system of
constant-elasticity       consumer demand functions is globally valid.

  51t is possible, and sometimes advisable, to take the applicable domain to be a compact convex
subset of the set of all nonnegative prices.
  61t is possible, and sometimes advisable, to take the applicable domain to be a compact convex
subset of the set of all nonnegative prices and incomes.
Ch. 26: Functional       Forms in Econometric         Model Building                                    1529

   These two examples share an interesting property - for given a, if the algebraic
functional    form is locally valid, it is globally valid. This property, however, does
not always hold. We shall consider two examples of unit cost functions-                the
generalized     Leontief unit cost function introduced       by Diewert (1971) and the
transcendental      logarithmic    unit cost function      introduced    by Christensen,
Jorgenson and Lau (1973).
   The generalized      Leontief unit cost function      for a single-output, two-input
technology     takes the form:

        c( p1, pz)       = ‘yop1+         qP:"P:'"+ U2P2*                                            (2.16)


Local      theoretical       consistency            requires   that    in a neighborhood   of some    price
(Pi? PZ)?

        c(F,,P,)lo;
        VC(F1, P,) 2 0;                                                                              (2.17)

        v2C(PI,p2)negative semidefinite.

We note that a change in the units of measurement       of the inputs leaves the values
of the cost function and the expenditures     unchanged. Without loss of generality,
the price per unit of any input can be set equal to unity at any specified set of
positive prices by a suitable change in the units of measurement.       The parameters
of the cost function,    of course, must be appropriately      resealed. We therefore
assume that the appropriate    resealing of the parameters have been done and take
(pi, p2) to be (1,l). By direct computation:

        C(l,l)    = (Ya+ (Yi+ (Y2,


        vC(l,J)      =
                          I“o+h
                            -
                            a2
                               1 +   $a,

                                     a1
                                            )


                                                a1

        V2C(Ll)=
                            i-
                                 ds, _(y .
                                 4          -1  4

                                                4l
It is clear that by choosing (Y~ to be positive and sufficiently large all three
conditions  in eq. (2.17) can be strictly satisfied at (l,l). We conclude that for local
theoretical  consistency (pi positive and sufficiently large is sufficient. (Actually (Y~
nonnegative    is necessary.)
1530                                                                                                               L. J. Llu

   We shall now show that (pi positive and sufficiently large alone is not sufficient
for global theoretical consistency. Global theoretical consistency requires that

       cc Pl,     P2)       = ‘yop1+           qPy2Py2        + qP2         2 0;                                     (2.18)



                                                                 1    20;                                            (2.19)




                                                                                          1
                                                                        -l/2       -l/2
                                                                  iP1            P2
                                                                                              negative   semidefinite;
                                                                  -1       l/2   -3,‘2    ’
                                                                        4P1    P2

                                                                                                                    (2.20)

for all pl, p2 2 0.
   First, note that as long as (pi 2 0, negative semidefiniteness       of the Hessian
matrix     of the unit cost function    always holds. Second, if a0 < 0, then for
sufficiently large p1 and sufficiently small p2, vC( pl, p2) will fail to be nonnega-
tive. We conclude that for global monotonicity,     a0 2 0 and similarly a2 2 0. If (Ye,
(pi and a2 are all nonnegative,    eq. (2.18) will be nonnegative  for all nonnegative
prices. We conclude that the restrictions

       (Ye2 0;               cW,>O;               (Y22 0,                                                           (2.21)

are necessary and sufficient for global theoretical consistency     of the generalized
Leontief unit cost function.
   The transcendental  logarithmic unit cost function for a single-output,   two-input
technology        takes the form:

       lnC(     ply    p2)       = a0 +        allnpl + Cl-     alb         p2


                                    +    +ln      pf - &iln      piln p2

                                     P
                                   + +ln          pi.                                                               (2.22)


Local theoretical                consistency       at (1,l)    requires       that:

       C(l,l)         = eao 2 0,


       vC(1,l)          =
                             I   eao(l
                                   - q)1ea”(y1          20,                                                          (2.23)




                                                                                              1
                                                                %(l-%)-Pll
                                                                                                negative    semidefinite,
                                                                -(l-+1+&1                      ’
Ch. 26: Functional Forms in Econometric Model Building                                                 1531

eao is always greater than zero. 12 (pi 2 0 is necessary and sufficient for vC(l,l)
to be nonnegative. (~r((~r- l)+ j3i1 I 0 is necessary and sufficient for v2C(1, 1) to
be negative semidefinite. The set of necessary and sufficient restrictions on the
parameters for local theoretical consistency at (1,l) is therefore:
     12cyr20;                  “r(ol,-l)+&rIo.                                                    (2.24)

   We shall now show that the conditions in eq. (2.24) are not sufficient for global
theoretical consistency. Global theoretical consistency requires that


      ChJ,~        P2)   =   exp( (~a+ cy,ln pr + (1 - cY)lnp2 + +ln              p: - Prrln prln pZ

                                 P
                               +*lnpi                   20                                        (2.25)
                                                    i

      vC(P,,P,)'=C
                                   1
                                   a1   +   Pllln       p1

                                                        PI
                                                             -    &11n   P2




       a2c    c
                                   x    (~-,)-&&P~+P~&P~
                                                                  P2           I-,.               (2.26)


      -=-(~l+Plllnpl-Pllln                                       ~~)((~~-1+Plllnpl-Plllnp2)
       aPf          P:
                    +Plllo,                                                                       (2.27)

for all pl, p2 > 0.’
   Equation (2.27) is necessary and sufficient for the negative semidefiniteness of
v2C( pl, p2) because C( pl, p2) is homogeneous of degree one. First, note that
eq. (2.25) is always satisfied because of the positivity of the exponential function.
Second, because the range of In p1 (and In p2) for positive prices is from minus
infinity to infinity, no matter what the sign of &i may be, as long as it is nonzero,
one can make In p1 arbitrarily large (positive) or small (negative) by choosing p1
to be arbitrarily large or small, and thus causing the nonnegativity of vC( pl, p2)
to fail. Thus, for global monotonicity, &r = 0. If 12 (pi 2 0 and &i = 0, eq. (2.27)
reduces to:

      “&t-l)             1o
                               ,
              P:

which will always be satisfied. We conclude that the restrictions:

     l>a,20;                   t%i = 0,                                                           (2.28)

  ‘The logarithmic function is not defined at 0.
1532                                                                                      L. J. Lou

are necessary and sufficient for global theoretical consistency of the transcenden-
tal logarithmic    unit cost function.
   We shall show later that under the necessary and sufficient restrictions                    for
global theoretical     consistency on their parameters both the generalized Leontief
unit cost function and the transcendental        logarithmic unit cost function lose their
flexibility.
   Having established      that functional forms such as the generalized Leontief unit
cost function     and the transcendental       logarithmic     unit cost function       can be
globally valid only under relatively stringent restrictions           on the parameters,      but
that they can be locally valid under relatively less stringent restrictions            we turn
our attention to a second question, namely, characterizing            the domain of theoreti-
cal consistency    for a functional form when it fails to be global.
   As our first example, we consider again the generalized                  Leontief unit cost
function.    We note that (pi 2 0 is a necessary           condition     for local theoretical
consistency.    Given ai 2 0, eq. (2.20) is identically      satisfied. The set of prices of
inputs over which the generalized          Leontief unit cost function         is theoretically
consistent must satisfy:

       C(P,,         P2) = OP,    + qP:‘“P:‘”        + (y2P2 2 0.                          (2.29)

       vc(     P1,    p2) =      ao
                                  +t”p;,$yf;;0.
                              [ a2 + hP1        P2      1 2                                (2.30)


If eq. (2.30) holds, eq. (2.29) must hold because

       c( PI, P2) = m            PI, P2).P.

We conclude   that the domain of theoretical consistency                consists   of the set of
prices which satisfy eq. (2.30). Eq. (2.30) can be rewritten           as:


                                                                                           (2.31)


Eq. (2.31) thus defines the domain of theoretical consistency    of the generalized
Leontief unit cost function. If (1,l) were required to be in this domain then the
additional restrictions of:


                                                                                           (2.32)


must also be satisfied.
Ch. 26: Functional   Forms in Econometric   Model Building                                       1533

   Next we consider the transcendental logarithmic unit cost function. We note
that 12 (pi 2 0 and al(al -l)+ &i I 0 are necessary conditions for theoretical
consistency if (1,l) were required to be in the domain. If &i # 0, we have seen
that the translog unit cost function cannot be globally theoretically consistent. We
consider the cases of pii > 0 and pi1 < 0 separately. If PI1 > 0, it can be shown
that the domain of theoretical consistency is given by:




                                                                                               (2.33)

where + 2 (1- a)a 2 pii > 0. If pi1 < 0, it can be shown that the domain of
theoretical consistency is given by:




   Our analysis shows that both the generalized Leontief and the translog unit
cost functions cannot be globally theoretically consistent for all choices of
parameters. However, even when global theoretical consistency fails, there is still
a set of prices of inputs over which theoretical consistency holds and this set may
well be large enough for all practical purposes. The question which arises here is
that given neither functional form is guaranteed to be globally theoretically
consistent, is there any objective criterion for choosing one over the other?
   One approach that may provide a basis for comparison is the following: We
can imagine each functional form to be attempting to mimic the values of C, VC
and v2C at some arbitrarily chosen set of prices of inputs, say, without loss of
generality, (1,l). Once the values of C, VC and v2C are given, the unknown
parameters of each functional form is determined. We can now investigate,
holding C, VC and v2C constant, the domain of theoretical consistency of each
functional form. If the domain of theoretical consistency of one functional form
always contains the domain of theoretical consistency of the other, no matter
what the values of C, VC and v2C are, we say that the first functional form
dominates the second functional form in terms of extrapolative domain of
applicability. In general, however, there may not be dominance and one func-
tional form may have a larger domain of theoretical consistency for some values
of C, vC and v2C and a smaller domain for other values.
   We shall apply this approach to a comparison of the generalized Leontief and
transcendental logarithmic unit cost functions in the single-output, two-input
case.

  ‘See Lau and Schaible (1984) for a derivation.    See also Caves and Christensen   (1980).
1534                                                                                            L. J. Lau

   We choose (1,l) to be the point                 of interpolation.   We let

       C&l)       =1,9



                                   1
                                                                                                 (2.35)
       vC(l,l)      =        k2
                         [ l-k,    ’

and

       v2C(l,l)      = [ ;ql           _k;3]7


where 1 r k, 2 0 and k, 2 0. Eq. (2.35) with k, and k, ranging through all of
their admissible values represents all the theoretically   consistent values that can
possibly be attained by a unit cost function, its gradient and its Hessian matrix at
(I, I).
    We need to establish the rules that relate the values of the parameters     to the
values of C, vC, and v2C at (1,l). We shall refer to such rules as the rules of
interpolation. For the generalized Leontief unit cost function, the rules of interpo-
lation are:

       c(1,1)=1=cw,+a,+a2,



       vc(lJ)=           [I:;2]=        [ ;;:;I,




which imply:

       a,=4k3,

       a,=k,-2k3,                                                                                (2.36)

       a2 = (1-     k,)-2k,.

It can be verified        that (Ye+ (pi + a2 is indeed         equal to unity.   Thus, the generalized

 9C(1, 1) may be set equal to any positive constant by an appropriate resealing of all the parameters.
We choose C(l, 1) = 1 for the sake of convenience.
Ch. 26: Funciional Forms in Econometric Model Building                                   1535

Leontief unit cost function may be rewritten in terms of k, and k, as:

       C(~1, ~2) = (k, -%)p,                       +4k3p:‘2p:‘2+ (l- k, -2k,)p,.      (2.37)

     For the translog unit cost function, the rules of interpolation           are:

       C(l,l)      =l=    e”o*




which imply:

       ao=o,
       q=kz,                                                                          (2.38)
       &I=-k3+k2(l-k2).

Thus, the translog unit cost function may be rewritten as:

       lnC(p,,p,)=k,lnp,+(l-k,)lnp,
                               +     [k,(l+)-k31            (hp       >2
                                                                  1
                                               2
                               -     [k&-k,)-k,bv4w,
                               +     [k,(l-kd-k31 (lnp2)2                             (2.39)
                                               2

  We can now compare the domains of theoretical consistency of the two
functional forms holding k, and k, constant. For the generalized Leontief unit
cost function, the domain of theoretical consistency is defined by eq. (2.31) as:




       I I[]
                   a1
         ao T             Pl
                               l/2
                                        2 0,
         a1                    l/2
         y         a2     P2




                                                l/2
or



                                               Ii 1
        k, - 2k,                     2k3
                                                                                      (2.40)
             2k3
                         (l-         k,)-2k,         ;;I2   “’
1536                                                                                            L‘.J.Lau

If k, - 2k, 2 0 and (1 - k,)-2k,      2 0, then the domain of theoretical consistency
is the whole of the nonnegative    orthant of R*. If k, -2k, 2 0 and (l- k,)-2k,
 -c 0, then the domain of theoretical consistency is given by:



                                    1.
       EL,       (1-    k,)-2k,       *
                                                                                                  (2.41)
       P2 -             2k,

If k, - 2k, -c 0 and (1 - k,)-2k,          2 0, then the domain         of theoretical     consistency
is given by:


                                                                                                  (2.42)


Finally if k, -2k,   < 0 and (1-           k2) = 2k, < 0, then         the domain        of theoretical
consistency is given by:


       ( k2y;k3)2k~2
                  [(l-$-y*.                                                                       (2.43)


   For the translog unit cost function, the domain of theoretical consistency   is
defined by eqs. (2.33) and (2.34). If pii = - k, + k,(l-    k2) = 0, the domain of
theoretical consistency is the whole of the positive orthant of R* (and may be
uniquely extended to the whole of the nonnegative    orthant of R*). If &i = - k,
 + k,(l - k2) > 0, then the domain of theoretical consistency is given by:


       exp((f+\/i-[k,(l-k,)-k,]                -k,)/[k,(l-k,)-k,])>E


              >-exp((f-/$--[k,(l-k,)-k,]                -k,)/[k,(l-k,)-k3]).                      (2.44)


If pii = - k, + k,(l - k2) < 0, then the domain             of theoretical     consistency      is given
by:


       exp{-k,/[k,(l-k2)-k,]}                ~~~exp{(l-k2)/[k,(l-k2)-k;]}.

                                                                                                  (2.45)

   With these formulas we can compare the domains of theoretical consistency for
different values of k, and k, such that 12 k, 2 0 and k, 2 0. First, suppose
k, = 0, then k, -2k, 2 0 and (1- k,)-2k,       2 0 and the domain of theoretical
consistency   for the generalized Leontief unit cost function is the whole of the
Ch. 26: Functional Forms in Econometric Model Building                            1537

nonnegative orthant of R2. k, = 0 i mplies that pi1 = k,(l-    k2) 2 0. Thus, the
domain of theoretical consistency for the translog unit cost function is given by:


     exP( (3 + \la-                   - k,),'k,(l         - k,))   2 E




which is clearly smaller than the whole of the nonnegative orthant of R*. We note
that the maximum and minimum values of k,(l - k,) over the interval [0, l] is +
and 0 respectively. Given k, = 0, if k,(l-    k,) = 0, pII = 0, which implies that
the domain of theoretical consistency is the whole of the nonnegative orthant of
R2. If k,(l - k2) = $, pII = a, and the domain of theoretical consistency reduces
to a single ray through the origin defined by pi = p2. If k,(l-  k2) = $, (k2 = )),
the domain of theoretical consistency is given by:


     e312=4.48kfi21.
                       P2


Overall, we can say that the domain of theoretical consistency of the translog unit
cost function is not satisfactory for k, = 0.
  Next suppose k, = k,(l - k,) (which implies that k, I a), then either

     k,-2k,=k,-2k2+2k;
                 = k2(2k2    - 1) < 0,

or

      (1-   k,)-2k,    = (1-    k,)-2k,(l-          k2)
                       = (1-    k,)(l-2k,)          < 0,

or




If k, = 4, k, = a, and the domain of theoretical consistency of the generalized
Leontief unit cost function remains the whole of the nonnegative orthant of R2.
However, if either of the first two cases is true (they cannot both be true), then the
domain of theoretical consistency for the generalized Leontief unit cost function
will be smaller than the whole of the nonnegative orthant of R2. k, = k,(l - k2)
implies that pii = 0. Thus the domain of theoretical consistency for the translog
unit cost function is the whole of the positive orthant of R2. We conclude that
1538                                                                           L. .J. Lau

neither functional   form dominates the other. The cases of k, = 0 and k, = k,(l -
k2) correspond     approximately    to the Leontief and Cobb-Douglas       production
functions respectively.
   How do the two functional      forms compare at some intermediate      values of k,
and k,? Observe that the value of the elasticity of substitution at (1,l) is given by:

                  C(LW,,(L1)
       a(lJ)   = C,(l,l)C*(l,l)      ’

               = b’
                  [k,(l-          &)I.
If we let k, = ), (l- k2) = $, then a(l,l) = a is achieved at k, = i. At these
values of k, and k,, the domain of theoretical consistency        of the generalized
Leontief unit cost function is still the whole of the nonnegative  orthant of R*. At
these values of k, and k,, pII = -i + 6 = & > 0. The domain of theoretical
consistency  of the translog unit cost function is given by:


       56,233 2 e    2 0.0012,


We see that although it is short of the whole of the nonnegative  orthant of R*, for
all practical purposes, the domain is large enough. Similarly ~(1, 1) = 3 is achieved
at k, = &. At these values of k, and k,, the domain of theoretical consistency of
the generalized   Leontief unit cost function is given by:



       (221&b-o,
          4     P2

or p2 cannot be more than 6: times greater       than pl. The domain    of theoretical
consistency of the translog unit cost function    is given by:


       e6 = 403.4 2 2     2 0.000006.


We see that ignoring extremely small relative prices, the domain of theoretical
consistency   of the translog unit cost function is much larger than that of the
generalized   Leontief unit cost function.
   The comparison      of the domains of theoretical consistency   of different func-
tional forms for given values of k, and k, is a worthwhile enterprise and should
be systematically    extended to other functional   forms and to the three or more-
input cases. The lack of space does not permit an exhaustive analysis here. It
suffices to note that the extrapolative    domain of applicability    does not often
provide a clearcut criterion for the choice of functional    forms in the absence of
Ch. 26: Functional    Forms in Econometric Model Building                                    1539

a priori information. Of course, if it is known a priori whether the elasticity of
substitution is likely to be closer to zero or one a more appropriate choice can be
made.
   However, it is useful to consider a functional form f( X, a) as in turn a
function g( X, k) = f( X, a(k)) where a(k) represents the rules of interpolation.
If one can prespecify the set of X’s of interest, over which theoretical consistency
must hold, one can then ask the question: What is the set of k’s such that a given
functional form f( X, a(k)) = g( X, k) will have a domain of theoretical con-
sistency (in X) that contains the prespecified set of X’s. We can call this set of
k’s the “interpolative domain’ of the functional form. It characterizes the type of
underlying behavior of the data for which a given functional form may be
expected to perform satisfactorily.



2.3.    Flexibility

Flexibility means the ability of the algebraic functional form to approximate
arbitrary but theoretically consistent behavior through an appropriate choice of
the parameters. The concept of flexibility, first introduced by Diewert (1973,
1974), is best illustrated with examples. First, we consider the cost function:


       c(P,y)=y
                         [
                             FaiPi
                             i=l1
                                      7     ai > 0,         i=l   ,-.*> m.


The derived demand functions are given by Hotelling (1932)-Shephard                       (1953)
Lemma as:


       xj=g(p,Y)=.iY,                     i=l   ,***, m.
               1

The inputs are always employed in fixed proportions, whatever the values of (Y
may be. Moreover, own and cross-price elasticities of all inputs are always zero!
Thus, although the cost function satisfies the criterion of theoretical consistency,
it cannot be considered “flexible” because it is incapable of approximating any
theoretically consistent cost function satisfactorily through an appropriate choice
of the parameters. to If we are interested in estimating the price elasticities of the
derived demand for say labor or energy, we would not employ the linear cost
function as an algebraic functional form because the price elasticities of demands
that can be derived from such a cost function are by a priori assumption always
zeroes.

  “There   is of course, the question of what satisfactory approximation means, which is addressed
below.       ’
1540                                                                                             L. J. Luu

   The degree of flexibility required of an algebraic functional      form depends on
the purpose at hand. In the empirical analysis of producer behavior, flexibility is
generally taken to mean that the algebraic functional        form used, be it a produc-
tion function, a profit function, or a cost function, must be capable of generating
output supply and input demand functions whose own and cross-price elasticities
can assume arbitrary        values subject only to the requirements       of theoretical
consistency    at any arbitrarily given set of prices through an appropriate   choice of
the parameters.     We can give a working definition of “flexibility”   for an algebraic
functional   form for a unit cost function as follows:

DeJinition
An algebraic functional form for a unit cost function C( p; a) is said to be flexible
if at any given set of nonnegative (positive) prices of inputs the parameters of the
cost function,   (Y, can be chosen so that the derived unit-output     input demand
functions   and their own and cross-price     elasticities are capable of assuming
arbitrary  values at the given set of prices of inputs subject only to the require-
ments of theoretical consistency.”


   More formally, let C( p; a) be an algebraic functional  form for a unit cost
function where (Yis a vector of unknown parameters.
                                                ---   Then flexibility implies and
is implied by the existence of a solution a( 3; C, X, S) to the following set of
equations:


       c( p,; a) = c,

       vc( j; a) = x,                                                                             (2.46)

       v2c( p; a) = 9,

for every nonnegative     (positive) value of p, c and x and negative semidefinite
value of p2 such that c= px and gj = 0. In other words, for every vector of
prices of inputs p, it is possible to choose the vector of parameters (Yso that at the
given p, the values of the unit cost-- function, its gradient and its Hessian matrix
are equal to prespecified values of C, X and 3 respectively.
   An example of a flexible algebraic functional      form for a unit cost function is
the generalized  Leontief cost function. The generalized Leontief unit cost function

   “This    definition of flexibility is sometimes referred to as “ second-order”   flexibility because it
implies that the gradient and the Hessian matrix of the unit cost function with respect to the prices of
inputs are capable of assuming arbitrary nonnegative and negative semidetinite values respectively.
   “Ne g ative semidefiniteness     of S follows from homogeneity of degree one and concavity of the unit
cost function in the prices of inputs.
Ch. 26: Functional Forms in Econometric                     Model Building                                                     1541

is given by:

         ‘(PI             = C CPijP!‘2Pj’2t                                                                                 (2.47)
                             i j


where without loss of generality pij = /3,,,Vi, j. The elements                                           of the gradient      and
Hessian matrix of the generalized Leontief unit cost function                                             are given by:

           l3C
         -&-,        =    p;;     +   12 jzic p.‘J.pYpy,
                                                    ’
                                                                          i=l       >..-, m;                                (2.48)
                 I

           a2c
         ~                      = ~pijp,~~~zp,-l/z.                 i # j,         i, j=l      3.e.3 m;
         aPidPj

          a?
         -=-a,~,Bijp,~3/2p:/2,                                        i=l,...,           m.                                 (2.50)
          ad

   In order to demonstrate      the flexibility of the generalized   Leontief unit cost
function,   we need to show that given the left-hand sides of eqs. (2.47) through
(2.50) and F, one can always find a set of parameters           p that will solve these
equations    exactly. First, observe that eq. (2.47) can always be solved by an
appropriate    scaling of the parameters provided that


         E+ = p;;+ 1 c p,.p:1/2p;/2                             2    0,            i=l      ,...,m.
                 I                    2 j+;i    ” ’


Second, eq. (2.48) can always                              be solved         by an appropriate            choice   of the p;;‘s,
pi, 2 0, whatever the value of


         + C,/3iJp;1/2pj/2,                           i = 1,. . _, m.
           J+’

Third,          eq. (2.49) can always be solved by setting


      pij=                                                  i # j,        i, j=l         ,..., m.
                         p!/2p!/2           apiapj)
                           1 J

Finally,         because              of homogeneity        of degree zero of aC/ap,,

         a2c
         apfPi=                  -     C    *PjY
                 I                    i+i    aPiaPi
1542                                                                               L. J. Lau

so   that




                                                  i = 1,. . . , m,


which satisfies   eq. (2.50) identically.       We note that

        C &jp;3/2p)/220,             i=l,...,        m,
       j+i

in order for the Hessian matrix to be negative semidefinite. We conclude that the
generalized   Leontief unit cost function is flexible.
   Another example of a flexible algebraic functional form for a unit cost function
is the transcendental  logarithmic cost function. The translog unit cost function is
given by:


       InC(p)=C,+Cailnpi+~CCB,,lnP,lnPj,                                            (2.51)
                         i               ’       J


where ci~, =l; cjpij = 0,Vi and without loss of generality fiij = /3ji,Vi,.j. The
elements of the gradient and Hessian matrix of the translog unit cost function are
given by:

        ac
        -=-- c ahc
        ap, pi alnpi'

                                                            m;                      (2.52)


                                                              i # j,
                                                                                    (2.53)
                                                              i, j=l    ,a.., m,


                                                                i=l    ,.**, m.     (2.54)


   In order to demonstrate    the flexibility of the translog unit cost function, we
need to show that given the left-hand sides of eqs. (2.51) through (2.54) and p,
one always find a set of parameters      C,, (Y and p that will solve these equations
exactly. First, we observe that eq. (2.51) can always be satisfied by an appropriate
Ch. 26: Functional    Forms in Econometric         Model Building                                     1543

choice     of C,. Eq. (2.52) can be rewritten                 as

         Pi ac
                 = ffi + C/3ijlnpj,                  i=l,...,m,
         C aPi            j

which      can    always        be   solved    by an appropriate   choice of the ai’s, (Y~2 0,
i=l     P-.-Y m and c,cz, = 1, subject          to &p,, = O,Vj. Eqs. (2.53) and (2.54) combined
may be written        as:

                                                                     0     ...         0
                                                                     p2

                                                                     0
                                                                           ***         0

                                                                                       P,   1
or




                                                                   L
                                                                                            0

                                                     v2Qp)
                                                                                            0
                                                                                            0
                  0         0        --*      pm                    Pl
                                                                    0
                                                                    0     0
                                                                          P2
                                                                          0      ...        Pf?l
             -   ww’ -   diag[ w 1,                                                                (2.55)

where wi= alnC/alnp,,          i=l,..., m, and diag[w] is a diagonal matrix with wi’s
on the diagonal. Every term on the right-hand side of eq. (2.55) is either known or
specified. Thus, /3 can be chosen, subject to cipij = O,Vj, to satisfy any negative
semidefinite    matrix specified for v2C( p). We conclude that the translog unit cost
function is flexible.
   Similarly,    we can give a working definition    of “flexibility” for an algebraic
functional    form for a complete system of consumer demand functions as follows:
Dejinition

An algebraic      functional   form for a complete      system of consumer        demand
functions    F( p, M, a), is said to be flexible if at any given set of nonnegative
(positive) prices of commodities       and income or total expenditure   the parameters,
(Y, of the complete system of consumer demand functions can be chosen so that
the consumer       demand    functions    and their own and cross-price      and income
elasticities  are capable of assuming arbitrary values at the given set of prices of
commodities      and income subject only to the requirements         of theoretical  con-
sistency.

      More formally, let F*( p*, M*; a) be a vector-valued    algebraic functional form
for    a complete    system of consumers   demand     functions    expressed in natural
1544                                                                                      L. J. Lou

logarithmic        form, that is:

       I;I*( p*, M*; a) = In X,,                   i=l   ,..., m;
       p:=Inp,,                                    i=l,...,m;
       M*=lnM.

Then flexibility          implies and is implied by the existence of a solution   a( p*, a*;   F*,
aF*‘/ap*,          aF*/aM*)       to the following set of equations:

       F*( j*,      a*;     a) = F*,


                                                                                           (2.56)




for every positive value of j*, a* and F* and symmetric negative semidefinite
value of the corresponding     Slutsky substitution   matrix which depends on p*, M*,
aF*‘/ap*    and JF*/aM*.
    We note that an equivalent definition may be phrased in terms of the natural
derivatives of the demand functions with respect to the prices of commodities       and
income rather than the logarithmic derivatives or elasticities.
    An example of a flexible algebraic functional        form for a complete system of
consumer    demand    functions    is the transcendental    logarithmic demand system
introduced   by Christensen,    Jorgenson and Lau (1975). The transcendental      loga-
rithmic demand system is given by:

                     (Y,+ ~/3,j(lnpj-lnM)
       p,x,=               .i
                                                                i=l   ,-.., m,             (2.57)
         M          -l+       x/?j,(lnpj-lnM)            ’


where pij = pji, i, j = 1,. . . , m and xi&, = /3’M, j = 1,. . . , m. It may be verified
that this complete system of demand functions          can attain at any prespecified
positive values of p = _is and M = a and given positive value of X and negative
semidefinite  value of the Slutsky substitution  matrix S such that S’p = 0, where a
typical element of S is given by:

               aXi                aXi
       sij=    F      +    XjzI            i,j=l   7.*., m,


through a suitable choice of the parameters pij’s and &,‘s.
   Flexibility  of a functional form is desirable because it allows the data the
opportunity    to provide information   about critical parameters.  An inflexible
Ch. 26: Functional   Forms in Econometric   Model Building                       1545

functional form often prescribes the value, or at least the range of values, of the
critical parameters. In general, the degree of flexibility required depends on the
application. For most applications involving producer or consumer behavior,
the flexibility required is that the own and cross-price derivatives (or equivalently
the elasticities) of demand for inputs or commodities be free to attain any set of
theoretically consistent values. For other applications, the desired degree of
flexibility may be greater or less. Sometimes a knowledge of the sign and/or
magnitude of a third-order derivative may be necessary. For example, in the
analysis of behavior under uncertainty, the third derivative of the utility function
of the decision maker plays a critical role in the comparative statics. In the
empirical analysis of such situations, the algebraic functional form should be
chosen so that it is “third-order” flexible, that is, it permits the data to inform
about the sign and/or magnitude of the third derivative of the utility function (or
equivalently, the second-order derivative of the demand function). In other words,
we need to know not only the elasticity of demand, but also the rate of change of
the elasticity of demand.


2.4.   Computational facility

The computational facility of a functional form implies one or more of the
following properties.
   (1) Its unknown parameters are easy to estimate from the data. Usually what
this means is that the functional form is, after a known transformation if
necessary, linear-in-parameters, and if there are restrictions on the parameters
they are linear restrictions. This is called the “Linearity-in-Parameters”  property.
   (2) The functional form and any functions of interest derived from it are
represented in explicit closed form. For example, it is often not enough that the
production function is linear in parameters. The input demand functions deriva-
ble from it should be representable in explicit closed form and preferably be
linear in parameters as well. This property makes it easy to manipulate and
calculate the values of different quantities of economic interest and their deriva-
tives with respect to the independent variables. This is called the property of
“Explicit Representability”.
   Explicit representability of a complete system of demand functions for inputs
or commodities cannot in general be guaranteed if one begins with an arbitrary
production function or utility function. In fact, the only known production
functions that give rise to a system of explicitly representable input demand
functions are those that are homothetic after a translation of the origin if
necessary. Similarly, the only known utility functions that give rise to a complete
system of explicitly representable consumer demand functions are those that are
homothetic after a translation of the origin if necessary. By contrast, if one beings
by specifying a profit or cost function or an indirect utility function, explicit
1546                                                                                      I.. J. Lau

representability  is guaranteed. Given a profit or cost function, the system of input
demand functions      are, by Hotelling-Shephard   Lemma, the gradient of the profit
or cost function with respect to the vector of prices of inputs. Given an indirect
utility function, the complete system of consumer demand functions are given by
Roy’s (1943) Identity:


              -F(PAo
       xi =   &/l                    i =l,...,m,
              aM(Pdw           ’

where V( p, M) is the indirect utility function.
   (3) If the functional        form pertains       to a complete       system, say, of either
cost-minimizing       input demand      functions     or consumer      demand     functions,    the
different functions      in the same system should have the same algebraic form but
different parameters.      This is called the property of “Uniformity”.
   Uniformity     of a functional form is desirable not only for aesthetic reasons but
also because it simplifies considerably        the statistical estimation and other related
computations.      In essence the same procedure and computer programming                   can be
applied to all of the different functions            in the same complete system if their
algebraic forms are the same.
   (4) The number of parameters in the functional               form should be the minimum
possible number required to achieve a given desired degree of flexibility. In many
instances    the number       of observations     is quite small and conservation            of the
degrees of freedom is an important               consideration.      In addition,    the cost of
computation      for a given problem increases approximately            at the rate of n2 where
n is the number        of parameters    to be estimated. This is called the property of
“ Parsimony”.
   We may add that both the generalized                Leontief and the translog unit cost
functions    give rise to a system of cost-minimizing            input demand functions that
satisfies all four of the properties here.


2.5.    Factual   conformity

Factual   conformity   implies consistency     of the functional  form with known
empirical facts. Fortunately  or unfortunately    (depending on one’s point of view),
there are few known, generally accepted and consistently confirmed facts. Perhaps
the only generally accepted and consistently       confirmed known empirical fact is
Engel’s Law, which says that the demand for food, or primary commodities            in
general, has an income elasticity of less than unity.13 While this fact may seem
innocuous   enough, it rules out the use of any homothetic direct or indirect utility

13Sce Houthakker (1957), (1965).
Ch. 26: Functional Forms in Econometric Model Building                                            1541

function as the basis for an empirical study of consumer demand because
homotheticity implies that the income elasticity of demand of every commodity is
unity.
   Less established but still widely accepted empirical facts include:
   (1) the six-tenth factor rule between capital cost and output capacity for certain
chemical and petrochemical processing industries;
   (2) the elasticities of substitution between all pairs of input in the three or
more-input case are not all identical;
   (3) the proportionality of the quantity of raw material input to the quantity of
output (for example, iron ore and steel);
   (4) not all Engel curves are linear in income.
   Each of these facts has implications on the choice of functional forms. For
example, the six-tenth factor rule is inconsistent with the use of functional forms
for production functions that are homothetic (unless all other inputs also satisfy
the six-tenth factor rule, which is generally not the case). The lack of identity
among the elasticities of substitution between all pairs of inputs suggests that the
Constant-Elasticity-of-Substitution    (and hence the Cobb-Douglas)       production
function is not an appropriate algebraic functional form. The proportionality of
raw material input to output suggests that the production function must have one
of the two following forms:

      Y=Min(
          f(X), E-,
where X is the vector of all other inputs,           f(X) is a function of X and M is the
quantity of raw material input; or
      Y= f(X)M.
   The fact that not all Engel curves (of different commodities) are linear suggests
that the use of the Gorman (1953) condition for the analysis of aggregate
consumer demand can be justified only as an approximation.14
   In the choice of algebraic functional forms, one should avoid, insofar as
possible, the selection of one which has implications that are at variance with
established facts.

3.   Compatibility of the criteria for the selection of functional forms

A natural question that arises is: Are there algebraic functional forms that satisfy
all five categories of criteria that we have laid down in Section 2? In other words,
does there exist an algebraic functional form that is globally theoretically con-

   “‘The Gorman     condition   on the utility function justifies the existence of aggregate   demand
functions as functions    of aggregate income and is widely applied in empirical analyses.     See for
example Blackorby,   Boyce and Russell (1978).
1548                                                                            L. J. Lau

sistent (for all theoretically consistent data), flexible, linear-in-parameters, ex-
plicitly representable, uniform (if there are more than one function in the system),
parsimonious in the number of parameters and conforms to known facts?
Obviously, the answer depends on the specific application. In Section 3.1, we give
an example of the incompatibility of a global extrapolative domain of applicabil-
ity and flexibility. In Section 3.2, we give an example of the incompatibility of
computational     facility and factual conformity. In Section 3.3, we prove an
impossibility theorem which says that there does not exist an algebraic functional
form for a unit cost function which has a global extrapolative domain of
applicability and satisfies the criteria of flexibility and computational facility.
   Thus, in general, one should not expect to find an algebraic functional form
that satisfies all five categories of criteria. For specific applications, especially in
situations in which the relevant theory imposes little or no restriction, it may be
possible that such an algebraic functional form can be found.


3.1.   Incompatibility of a global domain of applicability and flexibility

Consider the generalized Leontief unit cost function for a single-output,          two-
input technology:

       C(PlT PA = “oPl+     fflP:“P:“+     (y2P2,


 which, as shown in Section 2.2, is theoretically consistent over the whole nonnega-
 tive orthant of prices of inputs if and only if a0 2 0; (pi 2 0 and a2 2 0. We shall
 show that under these parametric restrictions, the unit cost function is not
flexible, that is, the parameters cannot be chosen such that it can attain arbitrary
 but theoretically consistent values of C, VC and v2C at an arbitrary set of prices
 of inputs.
    Without loss of generality let the set of prices be (1, l), and let the arbitrarily
 chosen values of C, VC and v2C at (1,l) be

       C(1,l)   = k, 2 0,


                                                                                   (3.1)




where the restrictions on vC(l,l)       and v2C(l,l) reflect homogeneity of degree
one, monotonicity and concavity of the unit cost function in the prices of inputs.
Flexibility requires that for arbitrarily given k,, k,, k, 2 0, with k, - k, 2 0, the
Ch. 26: Functional Forms in Econometric Model Building                              1549

parameters          cwa,(pi, 0~~2 0 can be found   such that




      $(l,l)=a,++Y,=k,,                                                            (3.2)
              1



      $(l,l) =- $01~
                  = - k,.
          1


The reader can verify that satisfaction of eq. (3.2) is equivalent to the satisfaction
of eq. (3.1). It is easy to see that CY~can always be chosen to be 4k, and hence
2 0. However,

     a0   +       ia1 = a,, +2k,    = k,,

cannot   hold with (~a 2 0 if 2k, 2 k,. Thus, flexibility      fails if the generalized
Leontief unit cost function is required to be theoretically     consistent globally. We
note that 2k, 2 k, implies that



      -- Pl _=-
            ax,                    aW/aP:     k,     1
         4 aP1                p1 ac/aP,     ‘CT,


Thus, the generalized     Leontief unit cost function, if it were to be required to be
valid for all nonnegative      prices of inputs, cannot approximate   a technology with
an elasticity of input demand of greater than i!
   This examples shows that a global extrapolative      domain of applicability   may be
incompatible    with flexibility.
   The first related question is: Given the rules of interpolation      embodied in eq.
(3.2), what is the domain of values of k,, k, and k, that will allow the
generalized   Leontief unit cost function to be globally theoretically consistent? We
note from eq. (3.2) that the parameters may be obtained by interpolation          as:

     q,=k,-2k,rO,

      q = 4k, 2 0,
      cw,=k,-k,-2k,20,

which must all be nonnegative.        Moreover, by monotonicity,    k, - k, 2 0. The
inequalities   are, however, all homogeneous   of degree one, we may thus arbitrarily
normalize    k, to unity. The domain of k,, k,, k,‘s can then be represented by the
1550                                                                                  L. J. Lam


following       set of inequalities:
       k;-2k;>O,
       1-k;-2k;zO,
       1-k;lO,
       k,“>O;         k:zO.
These inequalities     can be illustrated     graphically   in Figure 1. The interpolative
domain    of the generalized       Leontief unit cost function,       if it were required to
globally theoretically   consistent, consists only of the shaded area. The shaded area
falls far short of the constraint        for theoretical consistency,      that is, 1 - k; 2 0,
k; L 0 and k: 2 0. It is clear that if the generalized Leontief unit cost function
were to be required to be globally theoretically          consistent, it can be flexible only
for those values of kz and k; in the shaded area.
    The elasticity of substitution    at (1,l) may be computed as:

              CC,,       k,           k,
       ’= -C,C, = g (k, - k2)
              k;        1
         =-
              k;   (l-k;)’

The minimum     value of u over the admissible domain of k* ‘s is of course zero.
The maximum     value can be shown to occur at kz = $ and kc = a, that is, u = 1.
Thus, the generalized     Leontief unit cost function,   if it were to be globally
theoretically consistent,  cannot attain an elasticity of substitution greater than
unity.
   The own and cross-price elasticities of the input demand functions are given
by:
       Pj 8Xi
       --=_-           Pj       a2C
                                           i, j=1,2.
       xi aPj          ci    api ap, 7
At (l,l),       they are given by:
       ahx,
       -=-
                       -k;
        JlnP,           k;      ’

       ah x1   k:
       alnp, = G’

       ah x2              k:
       PC
       dInPI           (l-k;)         ’

        alnx,            -kz
       ---=
       alnP2           (1-k;)         ’
Ch. 26: Functional   Forms in Econometric Model Building                           1551




                                              Figure 1




Referring to Figure 1, the maximum absolute value of 8 In X,/a In pj within the
admissible region is 4, the minimum absolute value is 0.
   It should be noted that the incompatibility of a global extrapolative domain of
applicability and flexibility is a common problem and not limited to the gener-
alized Leontief unit cost function. It is also true of the translog unit cost function.
If the translog unit cost function were required to be globally theoretically
consistent, the only value of elasticity of substitution it can take at (1,1) is unity!
   The purpose of Section 3.1 is to show that the two criteria of domain of
applicability and flexibility are often incompatible. In Section 3.3 we shall show
that the two criteria are neuer compatible for any functional form for a unit cost
function that is linear in parameters and parsimonious.


3.2.   Incompatibility of computational facility and factual conformity

In Section 2.5 we pointed out the known fact that some commodities, notably
food, have income elasticities less than unity. Thus, any algebraic functional form
for a complete system of consumer demand functions that has the property of
unitary income elasticity for every commodity must be at variance with the facts
and should not be used. This rules out all complete systems of consumer demand
1552                                                                                            L. J. Lm

functions     derived from a homothetic         functional     form for a direct or indirect
utility function.
    Unfortunately,    all known theoretically        consistent    (flexible or not) complete
system of consumer        demand functions of three or more commodities               that are
linear in parameters,15 after a known transformation             of the dependent variables if
necessary, have the property of unitary income elasticities for all commodities.16
Thus, in the choice of a functional           form for a complete system of consumer
demand functions, the linearity-in-parameters           property has to be abandoned.
    It is conjectured  that linearity-in-parameters       implies unitary income elasticities
for all theoretically   consistent complete systems of consumer demand functions of
three or more commodities.        Such a theorem remains to be proved.



3.3. Incompatibility of a global domain of applicability, frexibility and
computational facility

We now proceed to prove a general impossibility                 theorem which says that a
linear-in-parameters        and parsimonious      functional form for a unit cost function
cannot be simultaneously          (1) globally theoretically  consistent and (2) flexible for
all theoretically    consistent data. Thus, it is futile to look for a linear-in-parameters
functional     form for a unit cost function that will satisfy all of our criteria. In
Section 3.1 we already demonstrated              that a global domain of applicability          is
incompatible      with flexibility as far as the generalized Leontief unit cost function
is concerned.     Here we show that this incompatibility       is true of all linear-in-param-
eters and parsimonious         unit cost functions.
   Our presentation        is simplified by considering      the normalized       cost function
defined as C*( p2/p1) = C(1, p2/p1) instead of the cost function C(p,, p2). The
two functions       are of course equivalent.       The properties    of the normalized      cost
function are as follows:



                                                                                                   (3.3)



                                                                                                   (3.4)



                                                                                                   (3.5)


   “Linearity   in parameters  as used here requires that the restrictions on the parameters, if any, are
linear also. Thus, the Linear Expenditure System introduced by Stone (1954) is not a linear-in-parame-
ters functional   form.
   ‘“See, for example, Jorgenson and Lau (1977) and (1979) and Lau (1977).
Ch. 26: Functional       Forms in Econometric Model Building                                                   1553

were q = p2/p1.               We note that eqs. (3.3) and (3.4) together imply that C*(q) > 0.

Lemma 1

Let a normalized unit cost function have the linear-in-parameters                           and parsimoni-
ous form:

      c(q)=fo(q)~o+fl(q)~l+f*(q)~2~17                                                                        (3.6)

where the fi(q)‘s are a set of linearly independent twice continuously differentia-
ble functions of q. In addition, suppose that the functional form is flexible, that
is, for every 4 > 0 and every k 2 0, there exists a set of parameters (Y,,,CX~
                                                                             and (Y*
such that:



      i=O

          2




      -       2 fi”(ij)a,         =k,.
              i=o


Let this system of equations be written as:

        W(ij)a= k.                                                                                           (3.7)

where

                         fobd- qfO(4) f1(4)- qflw                        f2(d- qf2w
      WI) =                      f;(q)                 f:(q)                   f;(q)            .

                     [          fo”(q)                f;‘(q)                  f?(q)         I

Then W(ij) is nonsingular for all 4.
Proof

By hypothesis, for all 4 > 0, and for all k 2 0, there is a solution (Ysatisfying

        W(ij)ci=         k.

   “This   functional          form is parsimonious   because   it has   the minimum   number       of independent
parameters   required         for flexibility.
1554                                                                                      L. J. Luu

By Gale’s (1960) Theorem of the Alternative              this implies   that there must not be a
solution y to the equations

        qzY           = 0,        k’y=l,        4>0;      kz0.

Suppose        W(q)    is singular    for some 4, then there exists j f 0 such that

        w( q)‘j = 0.

Since J # 0 there exists k 2 0 such that k’jj Z 0. If k’y < 0, we consider j* = - j,
so that k’j* > 0. By defining k* = k/k’j*,     k*‘j* =l. Then W(q)‘j* = 0, k*‘j*
= 1, k* L 0 which, by Gale’s Theorem of the Alternative,      implies that

        W(4)”     = k*, k* 2 0,

does not have a solution contradicting     the hypothesis of flexibility.            We conclude
that flexibility implies nonsingularity of W( 4) for all q > 0.                           Q.E.D.

   We note that if the functions fo(q), fi(q) and f2(q) are linearly dependent,
then W(q) is always singular. It is clear that the functional  form in eq. (3.6) is
parsimonious     in the number of parameters    since the number of independent
unknown     parameters  is equal to the number of components  of k that need to be
matched.

Lemma      2

Let A be a real              square   matrix.   Let x be a nonnegative      vector   of the same
dimension. Then

       Ax20             for all        x 2 0,

if and only if A is nonnegative.

Proof

Sufficiency is straightforward.    Necessity is proved by contradiction.    Suppose there
exist A, not nonnegative,      such that Ax 2 0 for all x L 0. Let Alj -c 0, then let x
be a vector with unity as the jth element and zero otherwise. The ith element of
Ax will therefore      be negative, contradicting     the hypothesis    that Ax 2 0. We
conclude that A must be nonnegative.                                               Q.E.D.

Lemma      3

Let A be a real, nonnegative,    nonsingular square matrix of finite dimension. The
A -’ is nonnegative  if and only if A = DP where D is a positive diagonal matrix
and P is a permutation    matrix.
Ch. 26: Functional   Forms in Econometric Model Building                                                   1555

  A proof is contained in Appendix l.l*
  With these three lemmas, we can now proceed to state and prove the main
impossibility theorem.
Theorem

Let a class of normalized unit cost functions have the linear-in-parameters                               and
parsimonious form:


        WI; 4 =fo(cr)~o+f1(4)“1+f*(q)a21
where the fi(q)‘s are a set of linearly independent twice continuously differenti-
able functions of 4. In addition, suppose that the functional form is flexible, that
is, for every 4 > 0 and every k 2 0, there exists a set of parameters CQ, (pi and CQ
such that:


        2 (L(~)-#i’(4))ai=ko,
      i=O




or equivalently

      W(ij)a= k.

Then C(q; a) cannot be globally theoretically                        consistent (for all nonnegative
prices) for all such a’s.
Proof

The proof is by contradiction.             Global theoretical consistency of C(q; a) implies:

        IV+2         0,      vq20.

By hypothesis, for every q > 0 and k 2 0, there exists

        W(+x=        k.

  “1 am grateful     to Kenneth   Arrow   for correcting   an error in the original   formulation   of Lemma   3.
1556                                                                                               LJ.L.UU

By Lemma        1, W( 4) is nonsingular           and hence

        (Y= W(q)-%.

Suppose       the theorem       is false, then there exists W(q) such that:

        W(q)cu=W(q)W(q)-‘k>O,Vq>O,q>Oand                                   k20.

By Lemma        2, W(q)W(fj)-l            must be nonnegative.       Let


        4qd       = ~bdw~)-l~
which is nonnegative.            Then

        f+Yq) = A(% 4)WY).                                                                            (3.8)

By the symmetry              of q and 4,

        67)     = 4%          4Mq)?

and hence

        @%I) = 4W7)4%                   4)JG),

which implies         that




Thus,    both    A(q, 4) and its inverse          are nonnegative.    By Lemma       3,




where D(q, ij) is a positive diagonal matrix and                     P is a permutation           matrix.”
Substituting eq. (3.9) into eq. (3.8), we obtain:


        fed = NcL~)P~(~).

PW( 4) is a nonsingular               matrix   independent    of q, so that each element         of the ith


   19A permutation     matrix is a square matrix which can be put into the form of an identity   matrix by a
suitable reordering    of the rows (or columns) if necessary.
Ch. 26: Functional Forms in Econometric Model Building                                       1557

row of W(q) is equal to a constant (possibly zero) times Dji(q), a function of q.
This contradicts the linear independence of the functions fo(q), fi(q), and f2( q).
                                                                                         Q.E.D.

   The implication of this theorem is that there can be no linear-in-parameters
and parsimonious functional form for a normalized unit cost function which can
fit arbitrary but theoretically consistent values of a normalized unit cost function
and its first and second derivatives at any preassigned value of the normalized
price and be itself theoretically consistent for all nonnegative normalized prices.
One has to be prepared to give up one or more of the desirable properties of an
algebraic functional form.
    Since one is not likely to give up theoretical consistency or flexibility, or even
computational facility, the logical area for a compromise lies in the domain of
applicability. For example, one can be satisfied with an extrapolative domain of a
functional form for a unit cost function that excludes, say, unreasonably high
values of the elasticity of substitution.
   The fact is that requiring the extrapolative domain of a functional form to be
global when the data on which the parameters of the functional form are
estimated are local does not make too much sense from a practical point of view.
In the first place, even assuming that the same functional form and the same
parameters hold outside the neighborhood containing the observed data, the
confidence band for the estimated function will become so wide for values of
independent variables far away from the neighborhood containing the observed
data that it will not be very useful at all. Second, values of the parameters and
even the functional form itself may be different for values of independent
variables far away from the neighborhood containing the observed data.20 Unfor-
tunately there is no way of knowing a priori. One can only wait until these
faraway values are actually experienced and observed. Third, reality is always
finite and it is difficult to conceive of any application in which an independent
variable, for example, a price or a quantity of an input, becomes arbitrarily large.
    For these reasons, it may be just as well that a global extrapolative domain
cannot be achieved in general. One should settle for a well-prespecified compact
domain of applicability that reflects the actual and potential ranges of data
experiences.
    The theorem can be generalized in several dimensions: (1) the number of
independent variables can be increased; (2) the number of parameters can be
increased (but maintained finite); (3) the functional form can be linear-in-parame-
ters after a monotonic transformation.

   2oAs an example, consider classical Newtonian mechanics and relativistic mechanics. The latter
reduces to the former at low velocities. However, an extrapolation   of Newtonian     mechanics to
high-velocity situations would be wrong!
1558                                                                                           L. J. Lau

4.     Concluding remarks

The most important           conclusion that can be drawn from our analysis here is that
in general it is not possible to satisfy all five categories of criteria simultaneously.
Some trade-offs         have to be made. It is however not recommended                         that one
compromises        on local theoretical consistency - any algebraic functional form must
be capable       of satisfying      the theoretical    consistency     restrictions     at least in a
neighborhood        of the values of the independent         variables of interest. It is also not
recommended,         except as a last resort, to give up computational                facility, as the
burden of and probability           of failure in the estimation of nonlinear-in-parameters
models is at least one order of magnitude higher than linear-in-parameters                        models
and in many instances the statistical theory is less well developed. It is also not
advisable to sacrifice flexibility-inflexibility         restricts the sensitivity of the param-
eter estimates to the data and limits a priori what the data are allowed to tell the
econometrician.        Unless there is strong a priori information           on the true functional
form, flexibility should be maintained            as much as possible.
    This leaves the domain of applicability             as the only area where compromises
may be made. As argued in Section 3.3, most practical                          applications      can be
accommodated          even if the functional form is not globally theoretically              consistent
so long as it is theoretically        consistent within a sufficiently large but nevertheless
compact subset of the space of independent               variables. For example, any extrapo-
lative domain of theoretical consistency which allows the relative price of inputs
to vary by factor of one million is plenty large enough. Moreover, by making a
compromise        on the extrapolative        domain of applicability        one can also simulta-
neously reduce the domain over which the functional                      form has to be flexible.
Further, one can also make compromises                with regard to the interpolative           domain
of the functional       form, that is, to limit the set of possible values of the derivatives
of the function that the functional form has to fit. For example, one may specify
that a functional          form for a unit cost function            C( p; a(k)) be theoretically
consistent for all prices in a compact subset of positive prices and for all values of
k in a compact subset of possible values of its first and second derivatives. This
last possibility     holds the most promise.
    With regard to specific applications,            one can say that as far as the empirical
analysis   of production         is concerned,     the surest way to obtain a theoretically
consistent     representation      of the technology is to make use of one of the dual
concepts such as the profit function, the cost function or the revenue function.
There, as we have learned, one has to be prepared to make compromises                               with
regard to the domain of applicability.              The impossibility      theorem in Section 3.3
applies not only to unit cost functions but to other similar concepts such as profit
and revenue functions as well.
    As far as the empirical analysis of consumer demand is concerned,                         the surest
 way to obtain a theoretically          consistent and flexible complete system of demand
Ch. 26: Functional Forms in Econometric Model Building                                                1559

functions is to specify a theoretically consistent and flexible nonhomothetic
indirect utility function and derive the system of consumer demand functions by
Roy’s Identity. As long as the indirect utility function is theoretically consistent
and flexible, the resulting complete system of consumer demand functions will
also be theoretically consistent, flexible, and explicitly representable. Unfor-
tunately, linearity-in-parameters of the indirect utility function does not guaran-
tee linearity-in-parameters    of the complete systems of consumer demand func-
tions. In fact, the only known linear-in-parameters complete system of consumer
demand functions of three or more commodities are derivable from homothetic
utility functions with the undesirable implication that the income elasticities of
demands of all commodities are unities, an implication that has been repeatedly
contradicted by facts. Thus, one has to give up on the linearity-in-parameters
property in the choice of a functional form for a complete system of consumer
demand functions.
    Once linearity-in-parameters is given up, it is not clear what the next best thing
may be. However, here one may be guided by parsimony of parameters (and
restrictions on parameters). The estimation of nonlinear parameters subject to
nonlinear constraints is a considerably more difficult undertaking and the degree
of nonlinearity should be kept at a minimum. A device that frequently works is to
start with a linear-in-parameters complete system and translate its origin so that
the resulting translated system no longer has the property of unitary income
elasticities for all commodities.




Appendix 1


Lemma 3

Let A be a real, nonnegative, nonsingular square matrix of finite dimension. Then
A - ’ is nonnegative if and only if A = DP where D is a positive diagonal matrix
and P is a permutation matrix.*l

Proof

Sufficiency follows from the fact that the inverse of a permutation matrix is its
transpose, which is also a permutation matrix. The proof of necessity is by
induction on the order of the matrix n. First, we verify the necessity of the lemma


   “A permutation     matrix is a square matrix which can be put into the form of an identity   matrix by a
suitable reordering   of the rows (or columns) if necessary.
1560                                                                                      L. J. Luu

for n = 2. The elements          of A and     A-l,   both    nonnegative,     must   satisfy     the
following equations:

       AllA,’ + A,,A,’ =l,                                                                     (A.1)

       A,,A,’   + A,,&’        = 07                                                            (A-2)

       &A,1     + A,&          = 0>                                                            (A.3)

       &A,r+       A,,A,‘=l,                                                                   (A.4)

where A 2 0; A -’ r 0. First suppose A,, # 0. Then by eq. (A.2) Ar;l= 0 which in
turn implies that Al;’ # 0 and ATzl # 0 (otherwise A -’ is singular).      A,’ # 0
implies by eq. (A.3) that A,, = 0, A221 # 0 implies by eq. (A.2) that A,, = 0. Thus
A is a diagonal matrix and nonsingularity    implies that A is a positive diagonal
matrix. Next suppose A,, = 0, then A,, # 0 and A,, # 0 (otherwise A is singular)
and by eq. (A.l) At;’ # 0. A;rl # 0 implies by eq. (A.3) A,, = 0. Thus, A can be
expressed as




the product of a positive diagonal matrix and a permutation      matrix.
   Now suppose the lemma is true for all real, nonnegative       nonsingular  square
matrices for all orders up to n, we shall show that it is true for order (n + 1). Let
the matrices A and its inverse A - ’ be partitioned conformably     as




where A,, and B,,          are scalars.   The elements      of A and    A-’   must   satisfy      the
following equations:

       A,,&,    + ~Jnr    = 1,                                                                 (A.5)
       &brn     + ar,$n   = 0,                                                                 (A.61
       a,,r&    + A,&,, = 0,                                                                   (A-7)
       anlbln + A,B,, = I,,.                                                                   64.8)

First, suppose A,, # 0, then by eq. (A.6) b,, = 0 which implies that B,, f 0 and
B, is nonsingular  (otherwise A-’ is singular). B,, Z 0 implies by eq. (A.7) u,r = 0.
B,, is nonsingular   implies by eq. (A.6) a,, = 0. By eq. (A.@ B, = Ai ‘. By eq.
Ch. 26: Functional     Forms in Econometric   Model Building                                    1561

(A.5) B,, = A<l.            Thus the matrices     A and A-’ have the following       forms:



      A=       l-1, A-'= [“e’
            [“d’            A;1].
But A,, and Ai1             are both nonnegative,      implying,   by the lemma   that

     A, = D,P,.

We conclude          that




the product of a positive diagonal matrix and a permutation                  matrix.
   Next suppose A,, = 0, then uln # 0 and a,, # 0 (otherwise                A is singular),   which
in turn imply:
   (1) by eq. (A.5),

      qnbnl = 1.

   (2) by eq. (A.%

      alnB,, = 0.


   (3) by eq. (A.7)

      B,, = 0 and A,b,,, = 0.

   We note, first of all, that eq. (A.8) implies that anlbln must be a diagonal
matrix. A typical element of anlbln is a,l,ib,,,j.      In order for this to be identically
zero for i # j, all i, j, it is necessary and sufficient that a,, and b,, be nonzero in
only one element which is common to both a,, and b,,. Let this element be the
kth element of a,, (and b,,). Moreover, since anlbln is then a diagonal matrix
with the k th element on the diagonal nonzero,            I,, - anlbln is also a diagonal
matrix. However, it must have a rank equal to A,B, and hence less than or equal
to n - 1. We conclude that the nonzero diagonal element of anlbln must be equal
to unity. The product        A,B, is then equal to an identity matrix with the kth
element on the diagonal replaced by a zero. The ranks of A, and B, must be
equal to (n - 1). If either of them were less than (n - l), then the matrix A (or
A _ ‘) would be singular.
1562                                                                                     L. J. Lau

  Second,      we note that because

       A,,&,, = 0,

whenever an element of b,, is nonzero, the corresponding column of A, must be
zero. The rank condition  on A, implies that there can only be one such zero
column. Hence b,,, can only have one nonzero element, say, the Ith. Similarly,
because

       al,,4   = 0,

a,, can have only one nonzero element.                Moreover, because alnbnl = 1, the same
element in a,, and b,, must be nonzero.               Thus, the matrix A has the form:

               0       O.--O       a,,,,      O***O
               0


               0
       A=
               anl,k
               0


               0

where     the Ith column   of A, is a column          of zeros. Similarly,   A-’   has the form:

                        0 . . .0     b ln,k    0 . . .0



                                                          9




where the Ith row of B, is a row of zeros.
   Moreover, the product of the k th row of A, and B, must be identically zero by
eq. (A.@. This means that the k th row of A, must be proportional       to a,, (with
the constant  of proportionality   being possibly zero). But the Zth element of the
kth row of A, is zero, whereas the Ith element of a,, is nonzero. We conclude
that the k th row of A,, is identically zero. Similarly, the product of A, and the
k th column    of B, must also be identically      zero. This means, by a similar
Ch. 26: Functional Forms in Econometric Model Building                                                    1563

argument, that the k th column of B, is identically zero. Thus, the matrices A and
A-’  have the following forms.




      A=          ’            A:-,,,-,                        Ai-1        n-l
                                 ()           o...      0       . ..o
                                                                                                        64.9)
                  a n1.k
                  0


             I_
                  0            A:-,,,-,                 o      A,*-k,,-,



                          0           O-.*0            bln,k   O...O
                          0                            0


                          0           B;r_l    k-l     ’       Br*-l,n-k


      A-l=                b fZ1.l O..:O                0       O...O
                          0                            0
                                                       0
                                      Bn*-l,k-l        o       %+-,,n-k



                          0                            0

where AT; and B; are conformable                               partitions        of A and A -’ respectively.
Further, by direct multiplication,

                                               0
                               &-I             :       0
      A,B,, =             0      ...           0     . ..O
                                  0            :     In-k
                      I

Let AZ be the matrix formed by deleting the k th row and Ith column of A, and
B,* be the matrix formed by deleting the Ith row and kth column of B,, it can be
shown that the resulting product of the two square matrices A,* and B,* is:

      A*B*=
        n n           I n _ 19
1564                                                                                                     L. J. L.uu

so   that   B*n = A*-’
                    n . But A,* is of order                n - 1. Thus, applying        the lemma,

       A; = Dn-lPn-,,

where D,,_1 is a positive diagonal matrix and                          P,_,    is a permutation          matrix.
Substituting this result into eq. (A.9) we obtain:

               al”,/

                              41
                                                                 0


                                           D kpl,k-1
       A=
                                                             a nl,k
                                                                       D kk


                                                                                         D n-1.77-1

              -0       o...           1     ...              0
               0                      0
               0       Pi%,,-l        :    Pi+-1 , n-l
                                      b
                                                                                                          (A.lO)
               1       0e.e           0     ...              0
               0                      0
                :      p,*_k,,-l      ’    pi+-k   / n-l




where the Dir’s are the elements of the positive diagonal matrix D,_, and P,T’s
are conformable  partitions of the permutation  matrix P,*_ 1. It can be verified that
the second matrix of the product in eq. (A.lO) is a permutation    matrix.      Q.E.D.



References

Arrow, K. J., H. B. Chenery, B. S. Minhas and R. M. Solow (1961) “Capital-Labor                  Substitution    and
   Economic Efficiency”,           Review of Economics and Statistics, 43, 225-250.
Barten, A. P. (1967) “Evidence              on the Slutsky Conditions       for Demand   Equations”,     Review’ of
   Economics and Statistics, 49, 77-84.
Barten, A. P. (1977) “The Systems of Consumer Demand Functions Approach: A Review”, in: M. D.
   Intriligator,     ed., Frontiers of Quantitative Economics. IIIA, Amsterdam:      North-Holland,     23-58.
Berndt,      E. R., M. N. Darrough            and W. E. Diewert (1977) “Flexible        Functional     Forms and
   Expenditure        Distributions:    An Application    to Canadian Consumer Demand Functions”,           Interna-
   tional Economic Review, 18, 651-676.
Blackorby,       C., R. Boyce and R. R. Russell (1978) “Estimation         of Demand Systems Generated by the
   Gorman Polar Form: A Generalization               of the S-branch Utility Tree”, Econometricu, 46, 345-364.
Ch. 26: Functional Forms in Econometric Model Building                                                               1565

Caves, D. W. and L. R. Christensen                (1980) “Global      Properties   of Flexible Functional       Forms”,
   American Economic Review, IO, 422-432.
Christensen,      L. R., D. W. Jorgenson and L. J. Lau (1973) “Transcendental                Logarithmic     Production
    Frontiers”,     Review of Economics and Statistics, 55, 28-45.
Christensen,       L. R., D. W. Jorgenson         and L. J. Lau (1975) “Transendental            Logarithmic      Utility
   Functions”,       American Economic Review, 65, 361-383.
Cobb, C. W. and P. C. Douglas (1928) “A Theory of Production”.                      American Economic Review, 18,
    139-165.
Deaton, A. and J. S. Muellbauer (1980a) “An Almost Ideal Demand System”, American Economic
    Review, 70, 312-326.
Deaton, A. and J. S. Muellbauer (1980b) Economics and Consumer Behavior. Cambridge:                          Cambridge
   University Press.
Diewert, W. E. (1971) “An Application              of the Shephard Duality Theorem, A Generalized               Leontief
   Production      Function”,    Journal of Political Economy, 79, 481-507.
Diewert, W. E. (1973) “Functional             Forms for Profit and Transformation            Functions”,     Journal of
    Economic Theory, 6, 284-316.
Diewert, W. E. (1974) “Functional           Forms for Revenue and Factor Requirement            Functions”,     Intema-
   tional Economic Review, 15, 119-130.
Fuss, M. A., D. L. McFadden and Y. Mundlak (1978) “Functional                     Forms in Production Theory”, in:
   M. A. Fuss and D. L. McFadden,               eds., Production Economics: A Dual Approach to Theory and
   Applications. Amsterdam:         North-Holland,     1, 219-268.
Gale, D., (1960) The Theory of Linear Economic Models. New York: McGraw-Hill.
Gorman, W. M. (1953) “Community                Preference Fields”, Econometrica, 21, 63-80.
Gorman,       W. M. (1981) “Some Engel Curves”, in: A. S. Deaton, ed., Essays in the Theory and
   Measurement         of Consumer Behavior: In Honor of Sir Richard Stone. New York: Cambridge
   University Press, 7-29.
Griliches, Z. and V. Ringstad (1971) Economies of Scale and the Form of the Production Function.
   Amsterdam:        North-Holland.
Hanoch, G. (1971) ‘I CRESH Production Functions”,                Econometrica, 39, 695-712.
Heady, E. 0. and J. L. Dillon (1961) Agricultural Production Functions. Ames: Iowa State University
   Press.
Hotelling,      H. S. (1932) “Edgeworth’s        Taxation Paradox and the Nature of Demand and Supply
   Functions”,      Journal of Political Economy, 40, 517-616.
Houthakker,       H. S. (1957) “An International        Comparison     of Household Expenditure        Patterns, Com-
   memorating       the Centenary of Engel’s Law”, Econometrica, 25, 532-551.
Houthakker,       H. S. (1960) “Additive Preferences”,       Econometrica, 28, 244-257.
Houthakker,       H. S. (1965) “New Evidence on Demand Elasticities”,              Econometrica, 33, 277-288.
Jorgenson,      D. W. and L. J. Lau (1977) “Statistical Tests of the Theory of Consumer Behavior”, in: H.
  Albach, E. Helmstadter          and R. Hemm, eds., Quantitative Wirtschaftforschung. Tlibingen: J. C. B.
   Mohr, 384-394.
Jorgenson,       D. W. and L. J. Lau (1979) “The Integrability                 of Consumer     Demand       Functions”,
   European Economic Review, 12, 115-147.
Jorgenson,      D. W., L. J. Lau and T. M. Stoker (1980) “Welfare Comparison Under Exact Aggregation”,
  American Economic Review, 70, 268-272.
Jorgenson,      D. W., L. J. Lau and T. M. Stoker (1982) “The Transcendental                  Logarithmic     Model of
  Aggregate Consumer Behavior”, in: R. L. Basmann and G. F. Rhodes, eds., Advances in Economet-
  rics. Greenwhich:       JAI Press, Vol. 1.
Klein, L. R. and H. Rubin (1947-1948)             “A Constant-Utility     Index of the Cost of Living”, Review of
   Economic Studies, 15, 84-87.
Lau, L. J. (1977) “Complete          Systems of Consumer Demand Functions Through Duality”, in: M. D.
  Intriligator,    ed., Frontiers of Quantitative Economics. IIIA, Amsterdam:           North-Holland,      59-86.
Lau. L. J. (1978) “ADDhXtiODS             of Profit Functions”.     in: M. A. Fuss and D. L. McFadden.               eds.,
  ,Production Economi& A Dual Approach to Theory and Applications. Amsterdam:                       North-Holland,       1,
  133-216.
Lau, L. J. (1982) “A Note on the Fundamental             Theorem of Exact Aggregation”,         Economics Letters, 9,
  119-126.
1566                                                                                                            L. J. Luu

Lau, L. J., W. L. Lin and P. A. Yotopoulos (1978) “The Linear Logarithmic                    Expenditure      System: An
   Application     to Consumption-Leisure       Choice”, Econometrica, 46, 843-868.
Lau, L. J. and S. Schaible (1984) “A Note on the Domain of Monotonicity                          and Concavity of the
  Transcendental        Logarithmic    Unit Cost Function”,       Department     of Economics, Stanford: Stanford
   University,    mimeographed.
Lau, L. J. and B. A. Van Zummeren (1980) “The Choice of Functional Forms when Prior Information
   is Diffused”.     Paper presented      at the Fourth World of Congress of the Econometric                       Society,
  Aix-en-Provence,       France, August 28-September          2, 1980.
McFadden,       D. L. (1963) “Further       Results on C.E.S. Production           Functions”,      Review of Economic
   Studies, 30, 73-83.
McFadden.       D. L. (1964) “Existence Conditions for Theil-Type Preferences”, Department                    of Econom-
   ics, Berkeley: University of California, mimeographed.              __
McFadden,       D. L. (1978) “Cost, Revenue, and Profit Functions”, in: M. A. Fuss and D. L. McFadden,
   eds., Production Economics: A Dual Approach to Theoty and Applications. Amsterdam:                         North-Hol-
   land, 1, 3-109.
McFadden,       D. L. (1984) “Econometric        Analysis of Qualitative Response Models”, in: Z. Griliches
   and M. D. Intriliaator.       eds.. Handbook of Econometrics. Amsterdam:            North-Holland,        Vol. 2.
Muellbauer,      J. S. (i975) “Aggregation,       Income Distribution,       and Consumer        Demand”,       Review of
   Economic Studies, 42, 525-543.
Muellbauer.     J. S. (1976) “Communitv        Preferences and the Renresentative          Consumer”,       Econometrica,
   44979-999.          .     ’
Nerlove, M. (1963) “Returns to Scale in Electricity Supply”, in: C. F. Christ, et al., eds., Measurement
   in Economics: Studies in Mathematical Economics and Econometrics in Memory of Yehuda Grunfeld.
   Stanford:    Stanford University Press, Vol. I.
Pollak, R. A. and T. J. Wales (1978) “Estimation                of Complete Demand Systems from Household
   Budget Data: The Linear and Quadratic               Expenditure    Systems”, American Economic Reuiew, 68,
   348-359.
Pollak, R. A. and T. J. Wales (1980) “Comparison             of the Quadratic Expenditure System and Translog
   Demand       Systems with Alternative        Specifications    of Demographic         Effects”,     Economefrica, 48,
    595-612.
Roy, R. (1943) De I’utihte. Paris: Hermann.
Schultz, H. (1938) The Theoty and Measurement of Demand. Chicago: University of Chicago Press.
Shephard, R. W. (1953) Cost and Production Functions. Princeton: Princeton University Press.
Shephard,      R. W. (1970) Theory of Cost and Production Functions. Princeton:                    Princeton University
  Press.
Stone, J. R. N. (1953) The Measurement of Consumer’s Expenditure and Behuvior in the United
  Kingdom, 1820- 1938. Cambridge:            Cambridge University Press Vol. 1.
Stone, J. R. N. (1954) “Linear Expenditure             Systems and Demand Analysis: An Application                   to the
  Pattern of British Demand”,          Economic Journal, 64, 511-527.
Theil, H. (1967) Economics and Information Theory. Amsterdam:                  North-Holland.
Uzawa. H. (1962) “Production             Functions    with Constant      Elasticities of Substitution”.         Review of
  Economic Studies, 29, 291-299.
Wold, H. with L. Jureen (1953) Demand Analysis. New York: Wiley.



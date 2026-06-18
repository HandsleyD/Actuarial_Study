---
normalized_id: shared-pdf-reference-models-of-aggregate-economic-relationships-that-account-for-heterogeneity
exam_code: SHARED
material_scope: models of aggregate economic relationships that account for heterogeneity.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Models of Aggregate Economic Relationships that Account for Heterogeneity.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-models-of-aggregate-economic-relationships-that-account-for-heterogeneity

Models of Aggregate Economic Relationships that
           Account for Heterogeneity
                   Richard Blundell and Thomas Stokery
                                  December 2003


                                       Abstract
         In this paper we assess the importance of individual heterogeneity for
      understanding the relationships between economic aggregates. We highlight
      three aspects: (i) heterogeneity in individual tastes, (ii) heterogeneity in
      market participation and (iii) heterogeneity in (uninsurable) risks faced
      by individuals. The central question addressed is whether one can track,
      predict or explain variation in economic aggregates in a way that captures
      the separate in uences of behavioral responses and heterogeneity across
      individuals. Recent solutions to aggregation problems in certain speci c
      application areas are presented. The aim is to address the concerns faced
      by empirical researchers regarding questions of aggregation.


      Key words: Aggregation, Consumer Behavior, Household Behavior, Mi-
      creconometrics.
      JEL: C5, C43, D1, E21, J2.


1. Introduction

     Aggregation problems are more than a cloying annoyance in the empirical
study of economic phenomena. Aggregation problems exist at virtually every
    Institute for Fiscal Studies and Department of Economics, University College London,
Gower Street, London, WC1E 6BT.
  y
    Sloan School of Management, Massachusetts Institute of Technology, 50 Memorial Drive,
Cambridge, MA 02138 USA.
level, from the initial questions of model speci cation to the subsequent questions
of how to usefully summarize and apply results. Because of their broad reach,
aggregation problems are commonly kept closeted within the practice of empirical
work, along with other problems for which there are no simple answers.
      Of course, one can decry the need for any kind of thought about aggregation
problems at all. One can take the view that economics is mainly about the
behavior of individuals or of individual markets, and assert a methodological tenet
that only analysis of such individuals or individual markets makes any real sense.
Such a view eliminates the applicability of the theory of economic behavior to
some of the most important economic questions, namely those that concern the
relationships that exist among economic aggregates. Economic policy is often most
concerned with aggregate consumption and savings, aggregate demand, total tax
revenues, aggregate wages, unemployment (aggregate labor nonparticipation), and
so forth. To bring economic behavior to bear on such aggregate statistics requires
a treatment of aggregation problems, or how one bridges from those behaving
individuals to the aggregates of policy interest. That is, we take from the outset
the inherent desirability of studying relationships among economic aggregates,
and bringing individual economic behavior to bear on those relationships. After
stating such a goal, however, we immediately meet several vexing issues as to how
to even start to think about linking `individual' and `aggregate.'
      At one extreme are the almost philosophical issues of where, or at what level,
to apply the strictures of economic theory. Are we to assume that regularities
associated with rationality apply to entire economies, to `reasonably homogeneous'
groups of households, rms or other types of economic agents, or to Hicks' Mr.
Brown or Mr. Jones,1 as well as any of our own relatives or neighbors. To
assert that there is a `correct' individual level at which to apply a mathematical
  1
      Hick's, Revision of Demand Theory, p. 55.


                                                  2
model that is in line with rational behavior is to take a stand on those issues; a
stand which could only be properly validated by experimentation or much more
extensive empirical research than has been performed to date. Such questions are
the rst encountered in the speci cation of any kind of econometric model, and
the most fundamental form of `aggregation problem' concerns what is the relevant
foundation for econometric modeling; what is a meaningful `individual agent,' for
which one can study `consistent economic behavior' ?
   At the other extreme are questions pertaining to what an appropriate `aggre-
gate' is. One typically considers sums or averages as reported in national income
accounts as the relevant aggregates of individual values. However, with large pop-
ulations, one could consider any number of other kinds of aggregates, or statistics
from the population. When individual models are best speci ed with logarithms
of observed variables, one might consider geometric means instead of standard
sums or arithmetic averages. In this spirit, one can combine the two extremes of
issues and discuss the most convenient aggregates as they arise from the model
that applies to individuals, or vice versa, namely what level and type of individual
model is most suited to a particular kind of aggregate variable of interest.
   For the purposes of this paper, a key point is that once these two grand
issues are settled, aggregation problems become purely practical. That is, once
the `individual level' which one aggregates from is speci ed, and the relevant
\aggregate value" that one aggregates to is speci ed; then all that is left are the
practical problems of how to specify a model that usefully bridges the gap. In
this paper, we discuss recent work on aggregation in the context of solving such
practical modeling problems.
   The key issues concern individual heterogeneity, or di erences in behavior
across individuals in the population, which can be quite extensive. For instance,
in a recent survey Browning, Hansen and Heckman (1998) show the potential im-


                                         3
portance for aggregation of (i) heterogeneity in individual tastes, (ii) heterogeneity
in market participation and (iii) heterogeneity in (uninsurable) risks faced by in-
dividuals. Moreover, there is a generic tension between the degree of individual
heterogeneity accounted for and the ease with which one can draw implications
for economic aggregates. It is true that if a model of behavior for individuals
is speci ed, and the distribution of heterogeneous characteristics and/or risks is
speci ed, then one can always form and simulate aggregates. However, the key
question is whether one can track, predict or explain variation in economic aggre-
gates in a way that captures the separate in uences of behavioral responses and
heterogeneity across individuals.
   Our survey covers recent solutions to aggregation problems in very speci c
application areas. For at least a small number of areas (hopefully, representative
ones), we show how aggregation issues are met and resolved. Our approach is
purely practical in the sense above, and as such, we hope to address many of
the concerns faced by empirical researchers regarding questions of aggregation. In
each of our application areas, we take a \micro-econometric" view of the individual
model; namely an econometric model (obeying restrictions of economic theory) is
applicable to individuals or households. Heterogeneity can arise with regard to
observed characteristics of individual households, unobserved stochastic elements
or nonlinearities in the reactions of di erent individuals to economic in uences.
We take the relevant \aggregates" to be either totalled or per-capita (averaged)
values of the individual variables of interest, coinciding with aggregates as typi-
cally reported for regions or whole economies. Whether such aggregates are easy
to model or not, they are the most interpretable, and the most useful types of
aggregates for policy analysis or other interpretations of empirical results.
   This summarizes our stance on the grand issues; our survey is about the nitty-
gritty of bridging between these notions of micro and macro. As such, we are


                                          4
concerned with models that strike a balance between realism ( exibility), ad-
herence to restrictions from economic theory and connections between individual
behavior and aggregate statistics. As discussed below, we consider several set-
tings where individual models are intrinsically nonlinear, and for those we must
make speci c assumptions on the distributions of heterogeneous characteristics
and risks. Our intention is to develop results that can be used to explore the
impact of heterogeneity in empirical applications, and to do that we assume rea-
sonable (and hopefully plausible) parametrizations of both individual behavior
and distributions of heterogeneity.
   Our coverage presents several econometric models that capture individual be-
havior and relationships among economic aggregates in a consistent fashion. The
most natural application setting is to situations with data information available
at both individual and aggregate levels; namely extensive individual data (one or
more cross section surveys or panel data) and aggregate time series data. Since the
models bridge individual and aggregate levels, the results are also applicable to
situations where data at one level is used for estimation, but inferences are needed
at the other level. For example, consider how consumer demand models can be
applied. The most extensive data setting is where there are repeated cross section
(or panel) surveys of household purchases and budgets, as well as time series data
on aggregate purchases and aggregate budgets. But there are other possibilities.
That is, suppose one had data on aggregate purchases and prices as well as some
statistics on the distribution of total budgets or income (such as the variance,
entropy, distribution by age class, etc.); then one could use this information to
study the degree of heterogeneity in individual demands (income e ects) with a
model that treats aggregation consistently. On the other hand, with individual
survey data one could estimate the income structure of individual demands, and
then see how this individual structure is re ected in the observed relationship


                                         5
between aggregate demand and aggregate total expenditures. In summary, for
each application area, we present a model with empirically plausible equations for
individuals, and consistent equations for the relevant economic aggregates. These
models can address empirical issues at the individual level, the aggregate level, or
both.
   We begin with our coverage of consumer demand models in Section 2, the
area which has seen the most extensive development of solutions to aggregation
problems. The di cult issues in consumer demand include clear evidence of non-
linearity in income e ects (e.g. Engel's Law for food), pervasive evidence of vari-
ations in demand with observable characteristics of households, and substantive
evidence of unobserved heterogeneity in demand responses. We discuss each of
these problems in turn, and use the discussion to cover traditional results as well
as `aggregation factors' as a method of empirical studying aggregation bias. We
cover recent empirical demand models, and present aggregation factors computed
from data on British households. That is, we cover the standard issues faced by
aggregating over heterogeneous households in a static decision making format,
and illustrate with application to empirical demand models in current use.
   In Section 3 we discuss overall consumption/saving models. Here we begin
with the simple case of quadratic preferences, and then generalize to more recent
empirical models that permit precautionary saving. We address issues of how
dynamic processes are modeled relative to aggregation, and what features of the
stochastic properties of income and consumption translate from the individual
level to aggregate consumption. Standard models of consumption growth are
nonlinear by nature, and we present an analysis based on log-consumption, with
aggregate equations developed from normally distributed heterogeneous elements.
Again, we illustrate the size of the aggregate e ects using British data. That is, we
address many of the issues faced with aggregation in a dynamic decision making


                                         6
setting, with nonlinearity intrinsic to the decision process.
   Section 4 covers recent work on heterogeneity arising from constraints and se-
lection, which induce a di erent form of nonlinearity in the process of aggregation
over individuals. We begin with a discussion of the impacts of individual par-
ticipation decisions on the variations in aggregate wages. This involves tracking
the impacts of selection on the composition of the working population, the im-
pacts of weighting individual wage rates by hours in the construction of aggregate
wages, and the impact of observed wage heterogeneity. We show how accounting
for these features gives a substantively di erent picture of the wage situation in
Britain than that suggested by observed aggregate wage patterns.
   We close our discussion of constraints and selection by revisiting aggregate
consumption, considering the possibility of some consumers being liquidity con-
strained. Using a stylized model, we show how the presence of liquidity constraints
can alter the responsiveness of aggregate consumption growth to many traditional
variables of interest. In particular, when part of the population is liquidity con-
strained, the impact of anticipated interest rates on aggregate consumption growth
is dampened, and the impact of transitory income shocks on aggregate consump-
tion growth is increased. In sum, Section 4 covers two situations of aggregation
with constraints; one situation where the population over which aggregation is
performed is endogenously determined, and another situation where the popula-
tion is comprised of regimes that di er in terms of their reactions to basic economic
variables.
   Section 5 concludes with some general observations on the status of work on
aggregation in economics.
   This paper touches on many of the main ideas that arise in addressing ag-
gregation problems, but it is by no means a comprehensive survey of all relevant
topics or recent approaches to such problems. For instance, we limit our remarks


                                         7
on the basic nature of aggregation problems, or how it is senseless to ascribe be-
havioral interpretations to estimated relationships among aggregate data without
a detailed treatment of the links between micro and macro. It is by now well
known that convenient constructs such as a representative agent have, in fact,
no general justi cation. While `single agent' macroeconomic modeling continues
in practice (or even with two or three representative agents), we will not further
belabor the lack of foundation or consistency of such approaches to modeling. See
the surveys by Stoker (1993) and Browning, Hansen and Heckman (1998) for some
background on these basic problems.
   We will also limit our attention to aggregation over individuals, and not discuss
the voluminous literature on aggregation over commodities. This latter literature
concerns the construction of aggregate `goods' from primary commodities, as well
as the consistency of multistage budgeting and other simpli cations of choice
processes. While very important for empirical work, the issues of commodity
aggregation apply within decision processes of individuals and, as such, would
take us too far a eld of our main themes. See the survey by Blundell (1988)
as well as the book Blackorby, Primont and Russell (1978) for background on
commodity aggregation and multistage budgeting.
   Among alternative approaches to aggregation over individuals, we do not cover
the statistical approach of Hildenbrand and his associates in any great detail.
This work takes the population distributions of demands, incomes, etc., as the
relevant primitive concepts, and studies what kinds of regularities emerge between
aggregate statistics from those distributions. This work has the immediate appeal
of being based on relatively few restrictive assumptions, and has the promise of
discovering empirical regularities upon which aggregate modeling might be based.
However, this work explicitly avoids any speci cation of behavior of individual
agents, and therefore eliminates the possibility of understanding how rational


                                         8
individual responses could get re ected in aggregate statistics. Moreover, because
of the mass of detail in economic populations, this work also omits accounting
for heterogeneity either from observable individual (demographic) characteristics,
or from behavioral processes such as selection. As such, it is quite di erent in
spirit and orientation than our main themes. Interested readers should study
Hildenbrand (1994) and the more recent Hildenbrand (1998) for references to this
approach.
   Finally, we do not cover in great detail work that is associated with time series
aggregation. That work studies how the time series properties of aggregate sta-
tistics relate to the time series processes of associated data series for individuals,
such as stationarity, co-integration, etc. To permit this focus, this work relies on
strictly linear models for individual agents, which again, turn the discussion away
from heterogeneity in individual reactions and other behavior. We do make refer-
ence to time series properties of income processes as relevant to our discussion of
individual and aggregate consumption, but do not focus on time series properties
in any general way. Interested readers can pursue Granger (1980, 1987, 1990) and
the recent book by Forni and Lippi (1997) for more comprehensive treatment of
this literature.
   Our coverage focuses on the practical problems encountered in the analysis of
demand, consumption and wages, which we feel may be a more useful basis than
to just discuss aggregation `in general.' The coverage includes recent models as
they have been applied to observed data on individuals, and works from there to
discuss aggregate implications. As such, many of our points are model-speci c,
but our goal has been to present su ciently representative problems as to be
useful to the consideration of aggregation problems in other areas, as well as draw
meaningful conclusions for the interpretation of empirical results from aggregate
data in the areas that we cover.


                                          9
2. Heterogeneity, Consumer Demand and Aggregation Fac-
   tors

        This section concerns the analysis of aggregation in consumer demand. The
situation we have in mind involves budget allocation to several categories of com-
modities. We consider static models of demand that can be interpreted as the nal
stage in an intertemporal two-stage budgeting framework. At the rst stage total
consumption expenditure is chosen according to a dynamic forward looking plan.
This total expenditure is then allocated optimally across commodities. Provided
that intertemporal preferences are additive this accords with a fairly general in-
tertemporal model of expected utility maximization (see Deaton and Muellbauer
(1980), for example).2 Indeed, even if consumers are liquidity constrained and are
forced to consume no more than their income in each period, conditioning on total
expenditure will still provide the optimal allocation of within period demands. If
a proportion of the population is liquidity constrained this will have bearing on
aggregate consumption growth equations, a topic we develop further later in this
paper.
       For within-period demands, total expenditure is taken as given but not nec-
essarily exogenous. We are concerned with the issues raised by the presence of
observable individual attributes together with unobservable heterogeneity in the
determination of individual demands. The individual demands, or the parame-
ters determining those demands, represent the stable behavioral component of the
models, to which restrictions of economic theory are applicable. The relevant ag-
gregates here are totals of commodity expenditure and overall expenditure across
all households in the economy.
   2
    If intertemporal utility is non-time separable because some goods are durable, static demand
equations can still be derived conditional upon those goods, as a function of the expenditure on
the remaining (non-durable) goods and service.



                                              10
    The aggregation problem in this simple framework is summarized as: under
what conditions will a stable relationship between aggregate demands, aggregate
income (expenditure) and market prices result and when can the parameters of
the individual level model be recovered from these aggregate relationships? The
existence of a stable aggregate relationship is associated with using the individual
demand structure to address questions of aggregate prediction and policy analy-
sis. Recovery of the parameters is associated with estimation and the study of
economic restrictions on individual demand behavior with aggregate demand data.
    Our framework requires accounting for individuals, goods, and time periods.
In each period t, individual i chooses demands qijt for j = 1; ::; J goods, where
i = 1; :::; nt . Prices pjt are assumed to be constant across individuals at any point
in time, with pt = (p1t ; :::; pJt ). Individuals are described by a vector of observable
household composition and demographic characteristics zit and also unobservable
(to the econometrician) heterogeneity variables "it and ujit : The general form for
individual demands is written


                          qijt = gjt (pt ;mit ; zit ; "it ) + ujit                        (2.1)
                                                                  P
re ecting heterogeneity in total expenditure mit (                 j pjt qijt ), observable at-

tributes zit ; unobservable attributes intrinsic to demands "it and additive varia-
tions ujit . Speci c empirical models involve the speci cation of these elements, as
well as the formula for gjt , up to a set of parameters (suppressed in the notation).
    The aggregates of foremost interest are economy-wide average demand and
total expenditures:          P                                P
                               i qijt                         i mit
                                        ; j = 1; :::; J and                              (2.2)
                               nt                             nt
We assume that the population of the economy is su ciently large to ignore




                                                11
sampling error, and represent these averages as the associated population means

                           Et (qijt ); j = 1; :::; J and Et (mit ):                   (2.3)

Our general framework will require various other aggregates, such as statistics on
the distribution of consumer characteristics zit , and for all aggregates we assume
that sampling error can be ignored.

2.1. Aggregation of Consumer Demand Relationships
2.1.1. Various Approaches: Income Heterogeneity Alone

       We begin by considering the aggregation problem over consumers with homo-
geneous demands, who di er only in their total expenditure, or income for short.3
Since consumer demand functions are identical, omit the features zit ; "it ; ujit from
(2.1) and form aggregate demand as
                                          Z
                           Et (qijt ) =       gjt (pt ;mit )dFt (mit ):               (2.4)

where Ft (mit ) is the cross-section distribution of income, which is also indexed by
t to allow the income distribution to change with time and relative prices. At the
simplest level, approaches to aggregation compare (2.4) to a relationship between
the aggregates themselves
                                                     R
                            Et (qijt ) = Gjt (pt ;       mi dFt (mit ))
                                                                                      (2.5)
                                 = Gjt (pt ; Et (mit ))
      The exact aggregation approach is based on restrictions on individual prefer-
ences gijt that allow the relationship Gjt to be derived in a particularly simple
way, and that knowledge of Gjt is su cient to identify (the parameters of) the
  3
    It is common parlance in the demand literature to refer to `total budget expenditure' in
short form as `income,' as we do here. In later sections on consumption, we return to using
'income' more correctly , as current consumption expenditures plus savings.

                                                12
individual demand model. Here aggregate demands Et (qijt ) vary with t through
the dependence on relative prices pt ; the mean of the expenditure distribution
Et (mit ) and a limited number of additional statistics on the distribution of mit :
These additional statistics can represented through aggregation factors de ned in
terms of the cross-section distribution of mit :4 This is the primary approach used
in empirical demand analysis, where the aggregation factors are measured from
cross-section data and included directly in the aggregate relationship. The omis-
sion of aggregation factors typically causes a misspeci cation of the aggregate
relationship. However, when included, the well-speci ed aggregate relationship
permits the full recovery of individual demand (parameters).
       In contrast, the distributional approach considers restrictions on the income
distribution dFt (mit ); rather than on individual demands gijt , that allow the ag-
gregate demand Et (qijt ) to be written in terms of Et (mit ) and other parameters of
dFt (mit ), such as the variance or higher-order moments of mit . Here, recovery of
individual demand from aggregate demand is possible with su cient variation in
the income distribution dFt (mit ) over t.5 While conceptually di erent from exact
aggregation, the two approaches should not be thought of as distinct alternatives
in empirical modeling. For instance, over certain periods of time there may be
some simplifying regularities in the distribution of total expenditures, and a com-
bination of restrictions on gijt and restrictions on dFt (mit ) will be fruitful for the
speci cation of an empirical model.6
       Two other approaches to the aggregation problem are also worthy of mention
and both will feature more in later sections. The full insurance or risk sharing
   4
      These include entropy measures as we discuss below, and will later include statistics of the
joint distribution of total expenditure and observable attributes.
    5
      Technically, what is necessary for recoverability is completeness of the class of income dis-
tributions; see Stoker (1984).
    6
      Hildenbrand (1983) uses distribution restrictions in a di erent way; namely to study how
the shape of the income distribution is related to the slope of aggregate demand.


                                                13
approach to aggregation is a speci c kind of distributional condition where the
theory of complete insurance markets provides for stability in the relative dis-
tribution of total expenditure even in the presence of idiosyncratic time series
variation in incomes. In particular, with complete insurance markets, there is a
mechanism at work so that changes over time in individual total expenditure mit
are independent of idiosyncratic variations in income and simply follow changes
in the mean, or mit        mit 1 _ Et (mit )    Et 1 (mit 1 ).7 This method is developed
more formally in our discussion of aggregation in consumption growth models
below, but it does require there be su cient formal or informal insurance for all
contingencies. Finally, the micro-simulation approach predicts Et (qijt ) by imple-
menting (2.1) directly on micro-data and explicitly adding over agents. Clearly
this approach requires no restrictions on individual demands to facilitate aggre-
gation, but also does not permit a parsimonious relationship between aggregates
to be derived.

2.1.2. Exact Aggregation and Distributional Characteristics

        In the absence of distributional restrictions on dFt (mit ); the recovery of indi-
vidual level parameters from aggregate data requires certain linearity restrictions
on individual preferences. In the extreme case where the aggregate model simply
relates average demands Et (qijt ) to the vector of relative prices pt and average
expenditure Et (mit ), the early work of Gorman (1953) showed that preferences
were required to be quasi-homothetic; with individual demand linear in mit .
       If one is willing to permit the aggregate relationship to depend on a limited
set of distributional characteristics of mit then this can be relaxed. However, a
certain linearity is still required. For example, when individual demands are of
   7
     This situation is analyzed in the context of aggregate consumption in Rubinstein (1974);
c.f. Browning, Hansen and Heckman (1998) for detailed discussion. The speci c condition on
individual incomes is related to the mean scaling condition of Lewbel (1990).


                                               14
the form
                  qijt = a0j (pt ) + b0j (pt )h0 (mit ) + ::: + bM j (pt )hM (mit )         (2.6)

then aggregate demands are simply

       Et (qijt ) = a0j (pt ) + b0j (pt )Et [h0 (mit )] + ::: + bjM (pt )Et [hM (mit )] :   (2.7)

Aggregate demand depends only on the expenditure distribution dFt (mit ) through
the values of the statistics Et [h1 (mit )] ; :::; Et [hM (mit )] : Provided there is su -
cient independent time-series movement in those factors, the coe cients a0j (pt );
b0j (pt ), .. , bM j (pt ), and hence individual demands, can be fully recovered from
aggregate data.
      Lau (1977, 1982) originally proposed the exact aggregation framework, and
demonstrated that demands of the form (2.6) were not only su cient but also
necessary for exact aggregation, or aggregation without distributional restrictions
(c.f. Stoker (1993) and Jorgenson, Lau and Stoker (1982)). Muellbauer (1975)
studied a related problem, and established results for the special case of (2.6)
with only two income terms.8 They both showed several implications of applying
integrability restrictions to (2.6): for instance, if demands are zero at zero total
expenditure, then a0j (pt ) = 0; from the budget constraint one can always set
h0 (mit ) = mit ; and through homogeneity one can assert the forms of remaining
income terms, which include the entropy form h1 (mit ) = mit ln mit and the power
form h1 (mit ) = mit . This theory provides the background requirements for speci c
exact aggregation demand models, such as those we discuss below.9
  8
     Muellbauer (1975) studied the conditions under which aggregate budget shares would de-
pend only on a single representative income value, which turned out to be analogous to the
exact aggregation problem with only two expenditure terms.
   9
     See also Lewbel (1989, 1991, 1993) and Stoker (1984a,1984b).




                                                 15
2.1.3. Budget Share Models and Rank Restrictions

     The tradition in empirical demand models is to focus on relative allocations,
and estimate equations for budget shares. The exact aggregation form (2.6) is
applied to budget shares for this purpose. In particular, if we apply a0j (pt ) = 0
and h0 (mit ) = mit to (2.6), budget shares wijt = pjt qijt =mit take on a similar
linear form. We have
                     pjt qijt
           wijt =             = b0j (pt ) + b1j (pt )h1 (mit ) + ::: + bjM (pt )hM (mit )     (2.8)
                      mit
where b0j (pt ); :::; bjM (pt ) and h1 (mit ); :::; hM (mit ) are rede ned in the obvious way.
If we de ne individual expenditure weights as               it = mit =Et (mit ) then aggregate

budget shares are simply
    Et (pjt qijt )
                         Et ( it wijt )                                                       (2.9)
     Et (mit )
                     = b0 (pt ) + b1 (pt )Et ( it h1 (mit )) + ::: + bM (pt )Et ( it hM (mit ))

To identify the budget share coe cients b1j (pt ); :::; bjM (pt ) with aggregate data,
one needs su cient variation in the distributional terms Et ( it h1 (mit )); ... ,
Et ( it hM (mit )) over time t.
   The budget share form (2.8) accommodates exact aggregation through the
separation of income and price terms in its additive form. When integrability re-
strictions are applied to (2.8), the range of possible model speci cations is strongly
reduced. In particular, Gorman (1981) showed that homogeneity and symmetry
restrictions imply that the rank of the J x (M + 1) matrix formed by the J rows
[b0 (pt ); b1 (pt ); ::: ; bM (pt )] can be no greater than 3. Lau (1977), Lewbel (1991)
and others have characterized the full range of possible forms of these income
functions.




                                                 16
2.1.4. Aggregation Factors

The aggregate budget shares of (2.9) depend on statistics of the distribution of
expenditure (Et ( it hj (mit )); j = 1; :::; M ). In order to understand these terms,
Blundell, Pashardes and Weber (1993) proposed comparing (2.9) to the individ-
ual model (2.8) evaluated at mean income Et (mit ), through the introduction of
aggregation factors. In particular, (2.9) is easily rewritten as

   Et (pjt qijt )
                  = Et ( it wijt )                                                      (2.10)
    Et (mit )
                  = b0 (pt ) + b1 (pt ) 1t h1 (Et (mit )) + :: + bM (pt ) M t hM (Et (mit ))



where by construction
                                    Et ( it hk (mit ))
                             kt =                      ; k = 1; :::; M                 (2.11)
                                     hk (Et (mit ))
refer to aggregation factors. These factors give a compact representation of the
distributional in uences that cause the aggregate model, and the elasticities de-
rived from it, to di er from the individual model.

2.1.5. Aggregation in Some Rank Two and Rank Three Models

       Many popular empirical demand speci cations are of rank two with budget
share equations of the form10

                              wijt = b0j (pt ) + b1j (pt )h1 (mit )                    (2.12)

Preferences can be speci ed that give rise to either the log-form h1 (mit ) = ln mit
and the power form h1 (mit ) = mit . Typically the former is adopted and this
produces Engel curves that are the same as those that underlie the Almost Ideal
 10
      This is Muellbauer's (1974) PIGL form.


                                               17
model and the Translog model (without characteristics). In this case aggregate
shares have the form
                 Et (pjt qijt )
                                = Et ( it wijt ) = b0 (pt ) + b1 (pt ) 1t ln Et (mit )   (2.13)
                  Et (mit )
where the relevant aggregation factor is the following entropy measure for the mit
distribution:11
                                 Et ( it ln mit )     Et (mit ln mit )
                          1t =                    =                        :             (2.14)
                                  ln Et (mit )      Et (mit ) ln Et (mit )
where we have recalled that            it = mit =Et (mit ).   Here the aggregation factor as-
sesses the impact of taking the mean of log expenditure (as opposed to the log of
mean expenditure), and weighting by expenditure values.
       Aggregation bias also can be cast in terms of omitting an adjusted entropy
measure. To see this, rewrite the aggregate model in the omitted variable form
                Et (pjt qijt )
                               = Et ( it wijt ) = b0 (pt ) + b1 (pt ) ln Et (mit ) + t   (2.15)
                 Et (mit )
where      t is simply related to the entropy measure by


                            t = b1 (pt )[Et ( it ln mit )     ln E(mit )]:               (2.16)

Investigating the time series variation of t allows empirical assessment of the bias.
       The deviation of    1t from unity describes the degree of bias in recovering (indi-

vidual) price and income elasticities from aggregate data alone. The more modest
goal of a stable relationship between aggregate budget shares and aggregate to-
tal expenditure is possible under various distributional restrictions. For instance,
suppose that the total expenditure distribution obeys

                    Et (mit ln mit ) ' c1 Et (mit ) + c2 Et (mit ) ln Et (mit )          (2.17)
  11
    It is worthwhile to note that with the power form, estimation of with aggregate data would
be complicated, because the aggregation factor would depend in a complicated way on .


                                                 18
Here aggregate budget shares take the form
                    Et (pjt qijt )
                                   = b0 (pt ) + b1 (pt ) (c1 + c2 ln Et (mit )) :        (2.18)
                     Et (mit )
In this case, a relationship of the form
                          Et (pjt qijt ) e
                                        = b0 (pt ) + eb1 (pt ) ln Et (mit )              (2.19)
                           Et (mit )
would describe aggregate data well.
       Some of the integrability properties from individual demands can impart re-
strictions on the aggregate relationship in this case as well. Following Lewbel
(1991), if individual demands

                                wijt = b0j (pt ) + b1j (pt ) ln mit                      (2.20)

satisfy symmetry, additivity and homogeneity then so will

                            wijt = b0j (pt ) + b1j (pt )( + ln mit ):                    (2.21)

The analogy of (2.18) and (2.21) makes clear that if c2 = 1, then the aggregate
model will satisfy symmetry, additivity and homogeneity. As such, some partial
integrability restrictions may be applicable at the aggregate level.12
       As we discuss in section 2.2 below, rank 2 models of the form (2.12) fail
on empirical grounds for two reasons. Foremost is the omission of individual
consumer characteristics, or observable heterogeneity. But also, evidence points to
the need for more extensive income e ects, such as with rank 3 exact aggregation
speci cations. In particular, rank 3 budget share systems that include terms in
(ln mit )2 (as well as individual characteristics) seem to do a good job of tting
  12
    It is tempting to consider the case of c1 = 0, c2 = 1, which would imply that the aggregation
factor 1t = 1 (and no aggregation bias). However, that case appears impossible, although we
do not provide a proof. For instance, if mit were lognormally distributed, c1 = 0, c2 = 1, would
only occur if ln mit had zero variance.

                                                19
the data, such as the QUAIDS system of Banks, Blundell and Lewbel (1997). In
such cases, corresponding to the quadratic term (ln mit )2 ; there is an additional
aggregation factor

                          Et it (ln mit )2     Et mit (ln mit )2
                     2t =                  =                           :                   (2.22)
                           (ln Et (mit ))2   Et (mit ) (ln Et (mit ))2

As before, if in addition to (2.17), the moment in the numerator can be approxi-
mated by aggregate total expenditure as



  Et mit (ln mit )2 ' d1 Et (mit ) + d2 Et (mit ) ln Et (mit ) + d3 Et (mit ) ln(Et (mit ))2 :
                                                                                           (2.23)
then a stable aggregate quadratic relationship of the form
 Et (pjt qijt )
                = Et ( it wijt ) = b0 (pt ) + b1 (pt ) 1t ln Et (mit ) + b1 (pt ) 2t ln(Et (mit ))2
  Et (mit )
                                                                                             (2.24)
applies. Analogous conditions arise for either partial or full adherence to inte-
grability conditions, the latter with fully identi ed (individual) price and income
elasticities.

2.1.6. Demographic Composition and Observable Attributes

     Realistic demand models need to accommodate for di erences in needs across
consumers (households) beyond those associated with total expenditure budgets.
As such, we now expand our discussion to include the vector of observable char-
acteristics zit as part of the modeling. Since zit varies across consumers, for exact
aggregation, zit must be incorporated in a similar fashion to total expenditure
mit . The budget share form (2.8) is extended generally to

         wijt = b0j (pt ) + b1j (pt )h1 (mit ; zit ) + ::: + bjM (pt )hM (mit ; zit )      (2.25)

                                                 20
Restrictions from integrability theory must apply for each value of the character-
istics zit . For instance, Gorman's rank theory implies that the share model can
be rewritten with two terms that depend on mit , but there is no immediate limit
on the number of h terms that depend only on characteristics zit .
   Budget share models that incorporated consumer characteristics in this fashion
were rst introduced by Jorgenson, Lau and Stoker (1980, 1982). Aggregation
factors can be de ned as before to aid comparison of individual and aggregate
models; here such factors involve interaction terms. The simplest factors arise for
terms that depend only on characteristics, as in hj (mit ; zit ) = zit , namely

                             z    Et ( it zit )     Et (mit zit )
                             jt =               =                                      (2.26)
                                   Et (zit )      Et (mit ) Et (zit )
For example, suppose zit = 1 for elderly households, and zit = 0 for all other house-
              z
holds, then   jt is the ratio of the percentage of expenditure accounted for by elderly

households Et (mit zit ) =E (mit ) to the percentage of elderly households Et (zit ).
More complicated factors terms arise with expenditure-characteristic e ects; for
example, if hj (mit ; zit ) = zit ln mit then the relevant aggregation factor is

                 z      Et ( it zit ln mit )         Et (mit zit ln mit )
                 jt =                          =                                       (2.27)
                        Et (zit ) ln Et (mit )   Et (mit ) Et (zit ) ln Et (mit )
It is also clear that the discussion of conditions for a stable aggregate representa-
tion (2.13) - (2.17) easily extends to this case. If hj (mit ; zit ) = zit ln mit is a term
in (2.25), then a condition (analogous to (2.17)) which permits simpli cation of
the aggregate relationship is


      Et (zit mit ln mit ) ' c1 E(zit )Et (mit ) + c2 E(zit )Et (mit ) ln Et (mit );   (2.28)

where c1 = 0; c2 = 1 implies that the aggregation factor (2.27) is one.
   Finally, we note that there are some subtleties relative to the way in which
attributes can enter budget share equations. In particular, an additive separation

                                               21
of income and characteristics is consistent with economic optimization only when
income is in log-form. That is, a share model of the form


                             wijt = fj (pt ; zit ) + gj (pt ;mit )               (2.29)

will, in general, only be consistent with optimization theory only if gj is loglinear in
mit (see Blundell, Browning and Crawford (1998)). For empirical implementation,
a richer characteristics-income structure with interactions between income and
characteristics is often needed. A simple but useful generalization is available by
shifting income as in


                      wijt = fj (pt ; zit ) + gj (pt ; ln mit   '(zit )):        (2.30)

where '(zit ) has a natural \base expenditure" or \pole" interpretation. This
extends neatly to quadratic logarithmic models such as the QUAIDS model that
we discuss in the empirical section below.

2.2. Empirical Regularities and the Speci cation of Aggregate Demand
     Models

    This section reviews some basic features of the data on expenditures and
incomes that are relevant for the discussion of aggregation of consumer demand
relationships, illustrating some of the likely implications of aggregation bias. We
use repeated cross-sections of household-level data from the British Family Expen-
diture Survey (FES) over the period 1978 to 1996. The FES is a random sample
of around 7,000 households per year. The commodity groups are non-durable ex-
penditures grouped into: alcohol, tobacco, food-in, food-out, electricity, gas, adult
clothing, children's clothing and footwear, household services, personal goods and
services, leisure goods, entertainment, leisure services, fares, motoring and gaso-
line. More precise de nitions and descriptive statistics are available on request.

                                              22
2.2.1. What do Individual Demands Look Like?

        Demand behavior at the individual household level is nonlinear. It is cer-
tainly not realistic to assume linearity of expenditures in terms of the total budget
and relative prices. Early applications of exact aggregation demand systems had
budget shares in semi-log form (with or without attributes), namely the popu-
lar Translog models of Jorgenson, Lau and Stoker (1980, 1982) and Almost Ideal
models of Deaton and Muellbauer (1980a,b) respectively. But more recent empiri-
cal studies have shown the need for further nonlinear terms in certain expenditure
share equations.13 In particular, evidence suggests that quadratic logarithmic
income terms are required (see, for example, Atkinson et. al. (1989), Bierens
and Pott-Buter (1987), Hausman, Newey and Powell (1995), H•ardle and Jerison
(1988), Lewbel (1991) and Blundell, Pashardes and Weber (1993)).14
       A manageable model at the individual level that seems to provide su cient
 exibility is the QUAIDS model of (Banks, Blundell and Lewbel (1997)). In the
QUAIDS model expenditure shares have the form

                   0                                          (ln mit      ln a(pt ))2
  wijt =     j +   j ln pt +   j (ln mit   ln a(pt )) +   j                            + uijt (2.31)
                                                                        c(pt )
  13
      It is worthwhile noting that the applications of the translog model to welfare measurement
rely on the semi-log form (to solve for the expenditure function), and would have to be extended
to accomodate more extensive income structure. See Jorgenson and Slesnick (1984) and Stoker
(1986b), among others.
   14
      The work of Hildenbrand and associates has studied the dimensionality of individual de-
mands without focusing on which speci c income terms are useful. It is clear that the dimen-
sionality of demand systems such as we have covered is given by the number of income/attribute
terms. This structure was originally studied by Diewert (1977) and Stoker (1984b), in the con-
text of understanding how integrability restrictions might be partially re ected in aggregate
data.
   Using nonparametric methods H•ardle, Hildenbrand and Jerison (1991) study aggregate in-
come e ects, and conclude that the `law of demand' likely holds for British data. Hildenbrand
and Kneip (1997) obtain similar ndings on income structure by directly examining the di-
mensionality of vectors of individual demands. See Hildenbrand (1994) for an overview of this
work, as well as Hildenbrand (1998) for an examination of variations in the British expenditure
distribution within a similar framework.

                                               23
with the following nonlinear price aggregators
                                                0                     0
                                ln a(pt ) =      ln pt + 12 ln pt lnpt ;
                                               0
                                ln c(pt ) =      ln pt ;
                                   0                         0                       0
and where        = ( 1 ; :::;   N) ;    = ( 1 ; :::;     N) ;        = ( 1 ; :::;   N)   and
                                                 0       0
                                                                 1
                                                         1
                                                B     C
                                              = @ ... A :
                                                         0
                                                         N

       The familiar (Linear) Almost Ideal Demand System (AIDS) simply sets                          i = 0

across all expenditure shares. The denominator c(pt ) in the quadratic term of the
share equation (2.31) is required to maintain the integrability of the expenditure
share system. The system is conditionally linear in price aggregators, therefore
estimation using the iterated moment estimator developed in Blundell and Robin
(1997) is straightforward.15 Banks, Blundell and Lewbel (1997) establish the
importance of the quadratic logarithmic expenditure terms for many commodities.
Moreover, in their study there was no evidence of the rejection of homogeneity or
symmetry.
       In the empirical analysis at the individual level it is found to be important to
include certain demographic and taste-shifter variables. These terms which re ect
observable individual heterogeneity become of central importance in the analysis
of aggregate behavior. For example, the ;                        and      terms in (2.31) are all found
to vary signi cantly with family size, family composition, labor market status,
occupation and education.
  15
     Given the potential for correlation between the error terms in each share equation uit and the
log total budget variable ln mit ; it is easy to augment the QUAIDS speci cation (2.31) with the
error vit from a reduced form for ln xit : The error uijt is written as the orthogonal decomposition
uijt = j vit + "ijt for goods j = 1; :::; N and E("ijt jxit ; ln pt ) = 0 is assumed for all i; j and t. In
Banks, Blundell and Lewbel (1997) the estimated reduced form equation for ln m is presented.
In addition to a linear trend, seasonal dummies and relative prices, income and income squared
are used as additional instruments, which are found to be strongly signi cant.

                                                    24
2.2.2. The Implications for Aggregate Behavior

    From the discussion of aggregation factors above we know that the stability
and interpretation of the aggregate relationships will depend on the empirical
counterpart to the aggregation factor 1t
                                  P
                                      (bit ln mit )=nt
                            b1t = i P                  :                      (2.32)
                                    ln( i mit =nt )
                                                           P
where we recall that the weights have the form bit = mit =( i mit =nt ): Quadratic
terms in ln mit will require the analysis of the empirical counterpart to the term
(2.22). Interactions of the    and    terms with composition and other individual
characteristics implies the examination of the empirical counterpart of terms like
(2.27). Since these composition variables typically de ne discrete subgroups of the
population, this suggests that we should also study the behavior of the aggregation
factors among di erent groups of individuals.
   Figure 2.1 presents the estimated     1t and   2t terms relating to the ln mit and

(ln mit )2 expressions in the QUAIDS demand model. It is immediately clear that
these display systematic time series variation, increasing over the rst period of
our sample and falling towards the end. Figure 2.2 gives the same picture but for
households with children. These show less in the way of systematic movement,
a characteristic not shared when we look at occupation (or education). Aggrega-
tion factors splitting between white collar and blue collar heads of households is
presented in Figure 2.3. This displays a strong rise over time with little fall back
in the recent years, so that taking account of aggregation makes a real di erence
here.
   Finally we assess the ability of approximations (2.17) and (2.23) to represent
the aggregate movements in the total expenditure data. Using the same time
series of FES data we followed Lewbel (1991) and implemented each of these ap-
proximations as a regression. With demographic interaction terms, the aggregate

                                          25
model will only simplify if these conditions also apply to each demographic sub-
group. In each case the unrestricted regression R2 , even after scaling (2.17) and
(2.23) by E(mit ), was in excess of .997. This gives support to the idea that the ag-
gregate demand relationship is stable. However, the coe cient restrictions on the
cj and dj terms were strongly rejected suggesting that the aggregate relationship
would not correctly identify the income and price elasticities.


3. Aggregation and Dynamic Behavior

        The main issue faced in our coverage of aggregation and consumer demand in
the last section was how to account for individual di erences. From the large role
played by linearity in aggregation16 , it is clear that \di erences" include nonlinear-
ities, such as di erences in income e ects across individuals, as well as di erences
in observable characteristics, which are typically not accounted for in a pure ag-
gregate analysis. We discussed several solutions that involve modeling restrictions
and direct incorporation of distributional information into the equations between
economic aggregates.
       We now turn to issues involved in the modeling dynamic behavior and eco-
nomic time series. This does not involve inherently di erent issues, but rather a
richer set of concerns than those posed above. To the extent that there are individ-
ual di erences, the same types of exact aggregation structures as discussed above
will emerge. Failing to account for aggregation gives rise to the same kinds of
problems for interpreting aggregate relationships estimated with dynamic models
as with static models.17 However, the set of concerns is richer because the types
of structure encountered in economic time series can either complicate or simplify
  16
     Either in the construction of aggregates or in models based on exact aggregation principles.
  17
     See Stoker(1986c, 1993) and Lewbel (1996) and others for examples of clear problems in
infering individual reactions from time series results in the presence of individual heterogeneity.



                                                26
some aggregation problems.
   A simple example serves to place some of this in perspective. Suppose that
income for individual i at time t is given as

                                      yit = Yt + yit                               (3.1)

where Yt is a common factor in individual incomes, which can be a stationary or
integrated time series process - the important feature is that it is common to all.
The term yit is idiosyncratic, assumed distributed independently with mean 0 and
stable variance across individuals in any time period. Average income is
                               P               P
                                  i yit          yit
                                        = Yt +                                     (3.2)
                                 nt             nt
and, as before, with a large population we can use the approximation

                                      Et (yit ) = Yt                               (3.3)
                        P
since the variance of       yit =nt is the variance of yit scaled by 1=nt . This is true
regardless of whether yit is perfectly, imperfectly, or not correlated with yit 1 .
   Now, suppose that the problem of interest requires accounting for the in u-
ences of current income. The previous section dealt with the problems of the rich
(high yit ) displaying di erent reactions than the poor (low yit ), with the result
that the distribution of rich versus poor needed to be accounted for, in addition
to aggregate income Yt . Exact aggregation models are designed to bring a small
set of income distribution statistics into the analysis.
   If the problem of interest involves dynamic optimization, then the stream
of income facing an individual is crucial to their behavior, and the relationship
between yit and yit 1 (and likely yit 2 , yit 3 , etc.) becomes central to modeling
that behavior. Thus, the set of \characteristics" relevant to behavior at time t
is expanded from yit to (yit ; yit 1 ; :::). Aggregates will typically re ect the joint

                                           27
distribution of all current and lagged income values in addition to the mean time
series process Et (yit ) = Yt , and, as noted above, the autocorrelation structure
of yit is not re ected at all in the autocorrelation structure of Yt . The modeling
concerns, as well as the need for modeling restrictions, multiply.
       Much work has been done to examine time series dependence issues in isolation;
by assuming that the relevant individual models are su ciently linear to focus
attention on the aggregate time series process Yt alone.18 We take a di erent tack
in our coverage here, focusing on a speci c practical problem, namely modeling
individual and aggregate consumption behavior. There is a great deal of evidence
to suggest that the simplest linear consumption models are not consistent with
data on individual consumption behavior. As such, we will also be concerned with
intrinsic nonlinearities as well the dynamic decision making process.

3.1. Aggregation and the Consumption Growth Relationship

        We assume that the population is a set of heterogeneous agents. Each con-
sumer is assumed to maximize expected utility subject to an asset accumulation
constraint and a common riskless interest rate. For the present discussion we as-
sume separability between consumption and labor supply but allow demographic
characteristics to a ect optimal consumption choices. We also assume time sep-
arability of preferences. However, we allow unobserved heterogeneity in growth
rates and allow idiosyncratic and aggregate wealth risk. As such, we assume that
agents rationally use information but allow for the possibility of measurement er-
ror. We leave the issue of aggregation with liquidity constraints to our discussion
of aggregation with endogenous regimes and selection in section 4.2.
       We begin this section with a discussion of aggregation with quadratic prefer-
  18
    See Granger (1980, 1987, 1990) and Forni and Lippi (1997) for coverage of and references
to this literature.



                                            28
ences and also assume a linear income process. This enables us to focus on the
di erent treatment of aggregate and idiosyncratic income shocks, including the
role of full insurance and of incomplete information. We then move onto con-
sider more realistic preferences that allow precautionary saving. In this case each
consumer is endowed with CRRA preferences and we use the popular log-linear
approximation to the consumption growth rule. This serves to illustrate the main
issues we wish to discuss: the individual model, the approximate aggregate model,
and then development that links them, including coverage of aggregation biases.

3.1.1. Idiosyncratic Income Variation and Aggregate Shocks

       To set the scene for our discussion we rst turn to the case of aggregation
when individual within period utilities are quadratic in current real consumption.
This is the certainty-equivalent formulation in which there is no precautionary
saving. Within period utilities are described by

                                 Uit (cit ) = ( it         cit )2                      (3.4)

for cit <   it where   it is allowed to vary, in a know way, with individual charac-

teristics. Maximizing the expected sum of discounted utilities, with the discount
rate equal the real interest rate, results the optimal plan for the consumer (see
Hall (1978))
                                       cit =        it +   it                          (3.5)

where, de ning      i;t 1 as the information set for individual i in period t         1; the
                                     19
consumption innovation       it obeys


                                     E[ it j   i;t 1 ] = 0:                            (3.6)
  19
    The orthogonality conditions (3.6) is often used to de ne a generalized method of moments
estimator at the individual parameters.



                                               29
In what follows we will denote this conditional expectation as E t 1 ( )    E[ j    i;t 1 ]

to distinguish it from the population average in period t (which is denoted by
Et ( ) ):
    When the only uncertainty arises from real income, the consumption innova-
tion   it can be directly related to the stochastic process for income. We begin by

spelling out the income process in a meaningful way: express income yit as the
sum of transitory and permanent components

                                       yit = yitP + yitT                            (3.7)

and assume that the permanent component follows a random walk

                                    yitP = yitP 1 +       P
                                                          it                        (3.8)

and that the transitory component is serially independent.
    Next we decompose these two components into a common aggregate e ect and
an idiosyncratic e ect
                                        P
                                        it =    t + "it                             (3.9)

                                       yitT = ut + vit                             (3.10)

where       t is the common aggregate permanent shock, "it is the corresponding per-

manent shock at the individual level, ut is the aggregate transitory shock and vit
is the idiosyncratic transitory shock. The stochastic process for individual income
then takes the form
                               yit =   t + "it +     ut +           vit :          (3.11)

Assuming the idiosyncratic e ects are distributed independently across individu-
als, the aggregate income process has the form

                                    Et (yit ) =     t+         ut                  (3.12)

where, again, Et to denotes expectation (associated with averaging) across the
population of agents at time t:

                                               30
3.1.2. Uninsurable Income Shocks

       Suppose the idiosyncratic (and aggregate) shocks are not insurable, then the
optimal consumption innovation                       it for the individual adjusts fully to permanent

income shocks while only adjusting to the annuity value of the transitory shocks.
To be more precise20 , suppose also that real interest rates are constant and equal
the discount rate. Under quadratic preferences (3.4), the rst di erence of con-
sumption growth can be written
                                                                     r
                    t    cit =      t(        it +    t + "it ) +       ( ut +                   vit ):   (3.13)
                                                                    1+r
where L is the horizon and                t = 1          (1 + r) (L t+1) . Note that for a small real
interest rate r and large L                   t + 1,     t    ! 1 and the transitory shocks become
irrelevant for consumption growth, so that

                                               cit =         it +   t + "it                               (3.14)

and individual consumption growth satis es

                               E t 1 ( cit ) = E( cit j              i;t 1 ) =          it :              (3.15)

                               0
      If we de ne       it =       zit ; then aggregate consumption has the form

                                               0                           r
                               Et cit =              Et (zit ) +    t+                    ut              (3.16)
                                                                          1+r
and the aggregate data can be described exactly by a representative agent model
with quadratic preferences and characteristics Et (zit ) facing a permanent/transitory
income process. Note that the orthogonality conditions
                           r                                         r
          Et 1      t+                   ut        =E        t+                  ut j    i;t 1     =0     (3.17)
                          1+r                                       1+r
 20
      See Deaton and Paxson (1996).


                                                             31
continue to hold at the aggregate level. For small r and for time invariant char-
acteristics zit , this becomes
                                           Et (cit ) =   t                             (3.18)
                                                                        21
where      t is the aggregate permanent shock to income in (3.9).            Aggregate data
may involve some measurement error such that

                                     ct = Et (cit ) + et                               (3.19)

in which case aggregate data analog of (3.18) has the form

                                        ct =     t+      et                            (3.20)

and the time series properties ct will depend on the assumed time series properties
of the measurement error process et :

3.1.3. Fully Insurable Income Shocks

        If idiosyncratic shocks are fully insurable, either through informal processes
or through the nancial market, and characteristics zit are time invariant, then
individual consumption growth just depends on aggregate shocks
                                                  r
                                   cit =    t+                 ut :                    (3.21)
                                                 1+r
Consequently
                                       cit =     Et (cit ) :                           (3.22)

so that consumption growth at both the individual and aggregate level are equal-
ized.
  21
    We will discuss the extension to aggregate shocks to real interest rates in the CRRA model
below.




                                               32
3.1.4. Incomplete Information

    It is interesting to note that if idiosyncratic shocks are not completely insur-
able and consumers cannot separately distinguish between the idiosyncratic and
aggregate shocks, then even in this simple speci cation the aggregate model will
not satisfy the orthogonality conditions for the representative agent formulation.
This is the model developed by Pischke (1995). In this case the individual views
the income process (3.11) as an MA(1)

                                   yit =     it        it 1                         (3.23)

where the    parameter is a function of the relative variances of the shocks.
   Changes in consumption are simply

                                    cit = (1           ) it

Note that it is still the case that E( cit j      i;t 1 ) = 0. However, note also that

                                                        yit
                                  cit = (1        )                                 (3.24)
                                                      1    L
where L is the lag operator. Replacing            yit by (3.11) and averaging over con-
sumers we nd

                      Et cit     Et 1 (cit 1 ) = (1            )( t +   ut )        (3.25)

which clearly does not imply a random walk condition for aggregate consumption.

3.2. The Aggregate Consumption Growth Relationship with Precau-
    tionary Saving

    To allow for precautionary saving we assume that the population is a set of
heterogeneous agents, each with CRRA preferences
                                              2       3
                                                  1 1
                                                c
                            Uit (cit ) = e it 4 it 1 5                              (3.26)
                                                1


                                             33
where      it re   ects individual heterogeneity in marginal utility and where the pa-
rameter       is the intertemporal elasticity of substitution, re ecting the willingness
to trade o today's consumption for future consumption.
      To relate the consumption growth model to the stochastic process for income,
we adopt a multiplicative permanent-transitory speci cation and write the rst
di erence of log income as

                                  ln yit =   t + "it +   ut +    vit :                     (3.27)

The permanent and transitory error components in the income process follow the
same aggregate and idiosyncratic decomposition as in (3.11). An additive earnings
growth speci cation is closely in accord with the typical panel data models of
income or earnings22 , and neatly complements the stochastic form for consumption
growth in this CRRA speci cation for preferences.
      In deriving the consumption growth relationship at the individual level we
retain the assumption that rt is small, for simplicity (although the interest rate
could vary and be di erent from the discount rate). Also, since rt enters linearly
and is assumed equal across consumers at a point in time, we initially assume
that it is not subject to unanticipated shocks. This will be relaxed below in our
discussion of bias in the estimation of aggregate consumption growth - real interest
rate relationships.
      In general consumption growth will depend on the conditional variances of the
uninsurable components of permanent shocks to income. In particular, assuming
CRRA preferences (3.26) and log income process (3.27) we write the consumption
growth model using the log-linear approximation23

                    ln cit = rt + 0 zit + k1 itt 1 + k2 At
                                                        t 1
                                                            + fi +       1 "it +   2 t     (3.28)
 22
      See MaCurdy (1982).
 23
      See Blundell and Stoker (1999) for a precise derivation and discussion of this approximation.

                                                 34
               t 1
where          it is the conditional variance of idiosyncratic risk "it (the conditioning
                                            t 1
is on t          1 information i;t 1 ) and At   is the conditional variance of aggregate
risk. The individual characteristics zit represent the impact of observed hetero-
                                                                                                  24
geneity in         it and observed heterogeneity in individual subjective discount rates.

Consequently, zit will include levels and changes in characteristics. To highlight
the importance of individual di erences in subjective discount rates we have also
included an unobservable individual e ect fi .
          This model possesses all the characteristics of empirical stochastic Euler equa-
tion models, apart from the issues that arise with liquidity constraints, which we
develop later. We further assume

                                   E("it j   i;t 1 )   = E t 1 ("it ) = 0                    (3.29)
                                   E( t j    i;t 1 )   = E t 1( t) = 0                       (3.30)

In contrast to the quadratic preference case the growth equation (3.28) is nonlinear
in consumption, and it includes conditional variance terms which capture the
importance of precautionary saving.
          The consistent aggregate of individual model (3.28) is given by

 Et ( ln cit ) = rt + Et (zit ) + k1 Et ( itt 1 ) + k2 At
                                                       t 1
                                                           + 2 t + Et (fi ) + Et ("it )) (3.31)

where Et ( ln cit ) refers to the population mean of the cross-section distribution
of         ln cit in period t; and so on, with the t subscript referring to a mean across
the population of agents.
          Provided Et (ln cit 1 ) = Et 1 (ln cit 1 ), equation (3.31) gives a model of changes
over time in Et (ln cit ), which is a convenient aggregate from the point of view of
the individual model (3.28). However, Et (ln cit ) is not the aggregate typically
observed nor is it of most immediate policy interest. Namely, of most interest is
     24
          See, for example, the detailed speci cation in Banks, Blundell and Brugiavini (1998).

                                                       35
per-capita consumption Et (cit ) or total consumption nt Et (cit ). Relating (3.28)
to these aggregates involves dealing with the `log' nonlinearity, as we alluded to
earlier. We can formally write out the individual model evaluated at per-capita
values as
                                                             t 1
                          ln Et (cit ) = rt + Et (zit ) + k2 At  + !t :            (3.32)

where !t is a `catch-all' term containing the features that induce aggregation bias.
It will not in general satisfy the orthogonality condition E t 1 (!t ) = 0:
   The aggregate formulation (3.32) assumes that aggregate consumption growth
                                          t 1
models include the terms Et (zit ) and k2 At  . Where the parameter of interest is
con ned to the intertemporal elasticity           or where the issue is to access the im-
portance of excess sensitivity to know changes in income, these terms are typically
also omitted.
   To examine the implications of this discussion for the aggregate consumption
growth relationship, there are a number of aggregation issues to look at and we
consider them sequentially. We begin with a model in which there is full insurance.
This is the case where aggregation bias can be relatively unimportant since there
is pooling of idiosyncratic risk across individuals.
   Full insurance and complete markets have been shown to accord very poorly
with real behavior and consequently we go on to consider the further biases that
result from omitting terms that re ect the importance of idiosyncratic risk. We
review the relevant empirical evidence on full insurance in Section 3.3. Throughout
this discussion we assume that agents have the same information set, namely
 i;t 1 =    t 1 for all i; t.


3.2.1. Case I: Full Insurance

    Here we envision a situation where insurance markets are su ciently complete
to remove idiosyncratic risk terms in individual income and consumption streams,

                                             36
                     t 1
namely "it = 0;      it     = 0 for all i; t. Under these assumptions, the individual
model (3.28) becomes

                                                   t 1
                            ln cit = rt + zit + k2 At  +               2 t + fi                     (3.33)

with E t 1 ( t ) = 0. The individual-consistent model (3.31), that applies to the
log-geometric means of the consumption data, is written as
                                                              0   t 1
             Et (ln cit )    Et (ln cit 1 ) = rt + Et (zit ) + k2 At  +                  2 t        (3.34)

where we have assumed the individual e ect average to zero Et (fi ) = 0: Apart
from the term in the mean of observed covariates Et (zit ) ; there is no factor that
gives rise to aggregation bias.
   As noted above, the relevant aggregate is per-capita consumption, namely
Et (cit ). Per-capita consumption is given by
                          h                    0
                                                                          i
                                                         t 1
           Et (cit ) = Et exp ln cit 1 + rt + zit + k2 At + 2 t + fi                                (3.35)
                                                 h           0
                                                                        i
                                     t 1
                     = exp rt + k2 At    + 2 t Et cit 1 exp    zit + fi

with the impact of log-linearity arising in the nal term, a t weighted average with
lagged consumption cit 1 as weights. Now, of interest is the log- rst di erence in
aggregate consumption, namely
                                                              Et (cit )
                                ln Et (cit ) = ln
                                                            Et 1 (cit 1 )
This results in
                                          t 1
                  ln Et (cit ) = rt +h k2 At  +               2 t i
                                                       0
                                    Et cit   1 exp         zit +fi            Et (cit 1 )           (3.36)
                             + ln            Et (cit   1)
                                                                      + ln   Et 1 (cit 1 )


so that we have the terms depending only on time, a lagged consumption weighted
average, and the di erence in average cit 1 at time t versus time t                            1.

                                                  37
       To go further, we need some assumptions regarding the heterogeneity in the
population, and here we assume various features are log-normally distributed.
Notice rst that if zit and fi are normal, that is not su cient to say ln cit is normal.
We need (as a su cient condition) that ln cit 1 is normal at time t to make such
a claim. This would seem to require normality at t                                               1 of, in particular, ln cit 2 ,
and so forth, into the distant past. Since we cover selection in a later section, we
assume:

         The distribution of (cit 1 ; fi ) is the same in period t                                                 1 and t:           (3.37)

That is, the population could grow or shrink, but the (relative) distribution of
cit 1 and fi is unchanged. Under that assumption, we can drop the last term in
(3.36)
                                                    Et (cit 1 )
                                            ln                                  = 0:                                                  (3.38)
                                                   Et 1 (cit 1 )
In general there is no easy way to incorporate the model structure of cit 1 into
the cit formulation. Therefore, we further assume25
     0            1    00          1 2 2              0                                                                    31
         ln cit 1            c 1t        c 1 ;t       zc 1 ;t                                                fc     1 ;t
     @ zit0
                  A ~N @@   0
                                zt
                                   A ; 4 0
                                            zc 1 ;t
                                                    0
                                                         zz;t
                                                                                                             0
                                                                                                                   f z;t
                                                                                                                           5A :       (3.39)
                                                                                                             2
         fi                  ft          f c 1 ;t     f z;t                                                  f;t

This assumption says that

                    0
        ln cit 1 + zit + fi                                                                                                           (3.40)
                             0          2          0                   2                 0                                        0
         ~N     c   1t   +       zt ;   c 1 ;t +       zz;t    +       f;t + 2                   zc   1 ;t   + 2 f c 1 ;t + 2         f z;t


and
                                                                                2
                                         ln cit 1 ~ N              c   1t   ;   c 1 ;t       :                                        (3.41)
  25
    It is not clear how to avoid this assumption because of the role of fi ; namely fi is in the
cit 1 equation, it also is in the cit 2 equation, etc.



                                                              38
       We can now solve for an explicit solution to (3.36): apply (3.38) to nd the
growth in aggregate average consumption
                                                                                              0
                                                                                                        !
                                           t 1                             Et cit 1 exp zit + fi
ln Et (cit )    ln Et 1 (cit 1 ) = rt + k2 At  +         2 t + ln
                                                                                   Et (cit 1 )

We will assume, for simplicity of argument, that the covariance of fi with zit is
constant over time and can therefore be subsumed into the intercept. Applying
(3.40) and (3.41) and rearranging
                                               t 1                          0
                        ln Et (cit ) = rt + k2 At  +          2 t+              zt
                                                                                                    (3.42)
                                        0                0
                                 + 21       zz;t    +2       zc   1 ;t   + 2 f c 1 ;t
This expresses growth in per-capita consumption as a function of the mean of z,
the ordinary variance terms, but also the covariances between z, f and lagged
consumption cit 1 . Note that in this model with no idiosyncratic risk, in the
absence of the individual covariates zit and in the absence of individual xed e ects
in the consumption growth fi ; there would be no factors leading to aggregation
bias.

3.2.2. Unanticipated Real Interest Rate Shocks

        Aggregation bias in estimating the interest e ect                   and the risk e ect k2 with
aggregate data will depend on the correlation between the omitted aggregation
terms and the instrumental variables used in estimation. It is important, at
this stage, to allow for unanticipated shocks to rt :26 These would be included
in     t   and would induce a correlation between rt and                        t    in estimation (at the
aggregate or individual level). Typically lagged interest rates, lagged consumption
and lagged income are used as instruments. This gives plenty of degrees of freedom
  26
    It should be pointed out that we are simplifying things considerably here by assuming a
single aggregate real interest rate rt : In many micro level studies rt is allowed to vary across
consumers, re ecting di erent marginal tax rates for example, see Zeldes (1989).

                                                   39
                                                      t 1                         0
for overidenti cation tests. However, if the terms k2 At  and                         zt , as well as the
                                  0                0
variance and covariance terms         zz;t   +2        zc   1 ;t   + 2 f c 1 ;t are excluded from the
aggregate equation, then it seems certain that the usual orthogonality conditions
would fail. In particular, it would seem likely that lagged consumption and                           zt ;

and possibly the variance terms, would be correlated.
   On a more positive note, if it can be assumed that uninsurable aggregate risk
 t 1
 At is constant, then to estimate            on aggregate data a single instrument can
be used. Lagged rt would seem to have the attractive property of possibly being
less correlated with the omitted aggregation terms. This will be examined further
in the empirical analysis below. Even if this were to be the case, it is unlikely
that tests for excess sensitivity on aggregate data, which essentially consider the
validity of lagged income and consumption as overidentifying variables in the
instrument set, would be valid.

3.2.3. Case II: Uninsurable Idiosyncratic Risk

    Suppose now that we acknowledge the possibility that some individual risks
                                                                    t 1
are uninsurable. This reintroduces terms "it and                    it  in consumption growth at
the individual model, so that (3.28) is given by

                                      t 1      t 1
               ln cit = rt + zit + k1 It  + k2 At  +                   1 "it +   2 t + fi         (3.43)

where we have assume that in each period each individual draws idiosyncratic risk
                                                                    t 1     t 1
from a common conditional distribution, so that                     it  =   It for all i.

   The mechanics for aggregation within this formulation are similar to the pre-
vious case. We need to consider exactly what makes sense about the cross corre-
lations between ln cit 1 , "it : The optimization conditions imply

                           E t 1 ("it ) = E ("it j      i;t 1 ) = 0




                                              40
and we also assume that "it has mean zero across the population of agents

                                              Et ("it ) = 0:

As before, we will adopt a stability assumption (3.37) as well as the following
extension of assumption (3.39)
    0           1    00         1 2                2                         0                                                     31
       ln cit 1            c 1t                    c 1 ;t                    zc       1 ;t           fc    1 ;t       "c    1 ;t
    B 0 zit     C    BB 0 zt C 6                  0                      0                        0               0
                                                                                                                                   7C
    B           C ~N BB         C;6                     zc        1 ;t               zz;t                 f z;t             "z;t 7C
    @ fi        A    @@ 0       A 4                fc      1 ;t              f z;t
                                                                                                     2
                                                                                                     f            0                5A :
       "it               0                                                                                            2
                                                   "c   1 ;t                 "z;t                0                    ";t

Together with (3.38), the growth in aggregate average consumption is given by

                                   t 1      t 1                                              0             1
            ln Et (cit ) = rt + k1 It  + k2 At  +                        2 t+                    zt +        ( t)                    (3.44)
                                                                                                           2
where                                 0                                          0
                                t =           + 21 ";t
                                           zz;t
                                                   2
                                                        + 2 zc 1 ;t
                               +2 f c 1 ;t + 2 1 "c 1 ;t + 2 1 "z;t
and where we have subsumed all constant variance and covariance terms into the
intercept in   zt :

   Even ignoring the covariance terms, in contrast to the full insurance model
                      2
there is a term       ";t in   t that re    ects the changing cross-section variance in con-
sumption growth. There is strong evidence on the importance of omitting the
cross-section variance of consumption growth in the work of Attanasio and Weber
(1993). This is further explored in the empirical evidence presented below. It
is also important to distinguish this cross-section variance from the idiosyncratic
            t 1
risk term   It which re        ects the size of the predictable component of idiosyncratic
risk based on t       1 information. Evidence on the importance of idiosyncratic risk
terms is brie y reviewed below.




                                                      41
3.3. Empirical Evidence on Aggregating the Consumption Growth Re-
     lationship

    There are two related aspects of empirical research that we wish to consider
in this analysis of aggregation in consumption growth models. The rst concerns
the evidence on perfect or full insurance. How good an approximation would such
an assumption be? To do this we need to examine whether there is evidence of
risk pooling across di erent individuals and di erent groups in the economy. For
example, does an unexpected change in pension rights, speci c to one cohort or
generation, get smoothed by transfers across generations? Are idiosyncratic health
risks to income fully insured? Even though we may be able to cite individual cases
where this perfect insurance paradigm clearly fails, is it nonetheless a reasonable
approximation when studying the long time series of aggregate consumption?
   The second source of empirical evidence relates to the direct examination of the
omitted factors in the aggregate model (3.44). From the point of view of estimating
the intertemporal elasticity parameter ; how important are these factors? How
well do they correlate with typically chosen instruments and how likely are they
to contaminate tests of excess sensitivity on aggregate data?

3.3.1. Evidence on Full Insurance and Risk Pooling Across Consumers

    Clearly if the full insurance paradigm is a good approximation to reality then
aggregation is considerably simpli ed and aggregate relationships satisfying the
standard optimality conditions will hold under quite wide conditions on individ-
ual preferences. There is a reasonably large and expanding empirical literature
on the validity of the full insurance or complete markets paradigm. This work
is very ably reviewed in Attanasio (1998) and Browning, Hansen and Heckman
(1998). Here we present evidence directly related to our discussion of consumption
growth above. Two rather e ective ways of analyzing failures of the full insurance


                                        42
paradigm t neatly into our discussion above.
   The rst of these approaches to evaluating the full insurance hypothesis is to
look directly for evidence that unexpected changes in resources across di erent
groups in the economy leads to di erences in consumption patterns. In terms of
the individual consumption growth model (3.28) above, idiosyncratic shocks to
income - especially the permanent shocks "it and    t - are not insured. This is not

a trivial empirical exercise. First such shocks have to be identi ed and measured.
Second there has to be a convincing argument that they would not be correlated
with unobservable variables entering marginal utility, or observables such as labor
supply (in a nonseparable framework).
   Building on the earlier work by Cochrane (1991), Mace (1991), Altonji, Hayashi
and Kotliko (1992) and Townsend (1994), the Attanasio and Davis (1996) study
presents rigorous and convincing evidence against the full insurance hypothesis
using this approach. Low frequency changes in wages across di erent education
and date of birth cohorts are shown to be correlated positively with systematic
di erences in consumption growth.
   The second approach is to assume risk averse preferences and to model the
evolution of idiosyncratic risk terms. In terms of the model (3.28), this approach
examines the relevance of individual risk terms (e.g. k1 itt 1 ) once aggregate risk
    t 1
(k2 At  ) has been allowed for. This is addressed by looking across groups where
the conditional variance of wealth shocks is likely to di er over time and to see
whether this is re ected in di erences in consumption growth. Following earlier
work by Dynan (1993), Blundell and Stoker (1995), Caballero (1990), and Skinner
(1988), the study by Banks, Blundell and Brugiavini (1997) present evidence that
di erential variances of income shocks across date of birth cohorts do induce
important di erences in consumption growth paths.




                                        43
3.3.2. Aggregation Factors and Consumption Growth

       Here we consider the time series properties of the omitted factors in the ag-
gregate consumption growth relationship (3.44). In particular, we plot the overall
bias term        ln Et (cit )      Et (ln cit ) using the time series of British household
survey data used to study the empirical importance of aggregation bias in the
discussion of consumer demand relationships in section 2. Figure 3.1 presents this
term. It shows a systematic increase towards the end of the time period.
      There are two issues in examining the importance of such terms. First, would
this lead to a bias in the estimated parameters of interest? Typically, interest at
the aggregate level is con ned to the elasticity of intertemporal substitution :
Figure 3.2 plots the time series path of the real interest series for Britain over the
same period as that for the aggregation bias term in Figure 3.1. The correlation
coe cient between these two series is highly signi cant indicating an important
aggregation bias in the estimated intertemporal substitution parameter from ag-
gregate consumer data in this log-linear consumption growth speci cation. The
second issue relates to whether the omission of this aggregation bias term results
in spurious inference concerning the presence of excess sensitivity. Or, more gen-
erally, spurious inference regarding failures in the orthogonality conditions derived
form rational forward looking behavior. For the consumption data, used in the
construction of the bias term in Figure 3.1, we computed the correlation of this
omitted regressor with two typically used instrumental variables in consumption
growth equations - lagged real interest rates and lagged aggregate consumption.
The estimated correlation coe cient between these series and the omitted bias
term was found to be strongly signi cant.27 Together these results suggest ag-
gregation is likely to lead to serious bias in estimated intertemporal substitution
parameters and also to exaggerate the presence of excess sensitivity in consump-
 27
      Detailed regression results available on request.


                                                 44
tion growth regressions on aggregate data.


4. Aggregation and Selection

        To this point we have discussed the issues involved with aggregation over in-
dividual heterogeneity in static demand models, and covered issues of nonlinearity
and timing in dynamic consumption models. The various kinds of heterogeneity
and nonlinearity we have faced were intrinsic to the individual decision processes
governing the variables of primary interest. We now consider a further sort of
nonlinearity, that arises from selection due to a related decision process. Here,
the aggregation issues concern endogeneity of the relevant population over which
aggregation is taking place.
       Many relationships in economics involve self-selection. Participation and wages,
and liquidity constraints and consumption, are two prime examples, which we ad-
dress below. Moreover, it is common to specify models that are linear in the log-
arithm of wage or consumption, and so consideration of these examples naturally
builds on the work of the previous section. In each of these situations, aggre-
gation problems have three basic features; nonlinearity of the individual model,
the degree of heterogeneity across individuals, and the importance of self-selection
into one or more speci c subgroup of the population. In the case of wages, we
also need to consider the use of weighted averages as aggregates, corresponding
to total wages, or (hours weighted) average wages. It is natural to anticipate that
selection will play an important role in aggregation because the extent of selection,
certainly for the two cases referred to above, is likely to show large variation over
time.28
  28
    With regard to wages, the participation rate (or unemployment rate) varies considerably
over time. With regard to consumption, it is natural to expect the prevalence of liquidity
constraints to vary with the relative amount of poverty, which varies with the business cycle.



                                             45
4.1. Aggregate Wages and Participation

        The growth in aggregate average real wages (hourly earnings) are a central
indicator for macroeconomic policy and for the measurement of economic well-
being. However, earnings are observed only for those in employment, and the
choice to work as well as the number of hours worked are naturally a ected by
real wages. Therefore, the (self-selected) population of participants, and the dis-
tribution of hours worked, are key components to an understanding of aggregate
wages. If these change systematically, say over the business cycle or over time,
then they can induce important aggregation biases in observed aggregate wages.
We now turn to a simple model of wages that permits us to highlight these e ects.
We also illustrate the size of these e ects for the time series of aggregate wages
in the UK, a country where there has been large and systematic changes in the
composition of the workforce and in their hours of work. A more extensive version
of this model and the application is given in Blundell, Reed and Stoker (2002).

4.1.1. Basic Wage Framework

        We begin with a model of individual wages in the style of Roy (1951), where
wages are based on human capital or skill levels, and any two workers with the
same human capital level are paid the same wage. In particular, we begin with
a framework consistent with the proportionality hypothesis of Heckman and Sed-
lacek (1990), where there is no comparative advantage, no sectoral di erences
in wages for workers with the same human capital level,29 and that the price or
return to human capital is not a function of human capital endowments.
       We begin by assuming a one sector model where each worker i possesses a
  29
    Heckman and Sedlacek (1985) provide an important generalization of this framework to
multiple sectors. We plan on examining a multisectoral model in future versions of this model,
which would involve selection into occupation type as well as participation. See also Heckman
and Honore (1993).


                                             46
human capital (skill) level of Hi . Human capital is nondi erentiated, in that it
commands a single price rt in each time period t. The wage paid to worker i at
time t is
                                               wti = rt Hi                                   (4.1)

Human capital Hi is assumed log-normally distributed, with mean

                                            E (ln Hi ) =     js


                   2
and variance           , where     js is a level that varies with cohort j to which i belongs

and education level s of worker i. In other words, the log wage equation has the
additive form
                                        ln wit = ln rt + js + it                             (4.2)
                          2
where     it is N (0;         ).30 In this simple model growth in returns is constant across
all individuals.
       To model participation, we assume that reservation wages wit are lognormal

                                       ln wit =   ln bit +   js + it                         (4.3)

                              2
where      it   is N 0;           and where bit is an exogenous income (welfare bene t)
level that varies with individual characteristics and time. Participation occurs if
wit      wit , or with

                               ln rt     ln bit + js    js + it        it   0                (4.4)

We represent the participation decision by the indicator Ii = 1 [wit               wit ] :
       For examining hours, we will make one of two assumptions in our empirical
work. One is to assume that the distribution of hours is xed. The other is to
  30
     Clearly, there is an indeterminacy in the scaling of rt and Ht . Therefore, to study rt , we
will normalize rt for some year t = 0 (say to r0 = 1). We could equivalently set one of the 's
to zero.


                                                   47
assume that desired hours hit are chosen by utility maximization, where reservation
wages are de ned as hit (w ) = h0 and h0 is the minimum number of hours available
for full-time work. We assume hit (w) is normal for each w, and approximate
desired hours by

               hit = h0 + (ln wit          ln wit )                                               (4.5)


                      = h0 + (ln rt        ln bit + js              js + it   it )


   This is our base level speci cation that maintains the proportionality hypoth-
esis. It is simple to extend this model to allow di erentiated human capital, or
di erential cohort e ects due to di erent labor market experience, which permits
a wide range of education/cohort/time e ects to be included (c.f. Blundell, Reed
and Stoker (2002)).
   Because our examples involve log-linear equations with selection, we summa-
rize the basic framework in the following way
                                            0
                           ln wit =   0+        xit + it ;
                                            0
                           Iit = 1    0+        zit +   it > 0      ;                             (4.6)
                                                        0
                           hit = h0 +            0+         zit +   it


Here, xit denotes education, demographic (cohort, etc.) and time e ects, zit includes
out-of-work bene t variables, and Iit = 1 denotes participation. It is clear that the
                                                                                          0
scale of   is not identi ed separately from the participation index                  0+       zit + it ,
however we retain      to distinguish between the xed hours case                     = 0 and the
variable hours case    6= 0.
   The aggregate of interest is hourly earnings, where aggregation occurs over all



                                           48
participating workers, namely
                                       P
                                            i2(I=1) eit
                                                               X
                              wt = P                      =                 it wit             (4.7)
                                            i2(I=1) hit       i2(I=1)


where i 2 (I = 1) denotes a labor market participant, eit is the earnings of
individual i in period t, and          it are the hours weights

                                                    hit
                                            it = P            :
                                                  i2(I=1) hit

      Our formulations of aggregate relationships are based on results available on
aggregation of nonlinear relationships over normal (and lognormal) distributions,
which are summarized in the Appendix.

4.1.2. Micro Regressions

       The participation process has implications for the regression relationships
that can be estimated with data on individuals. While such relationships are
quite familiar from the literature on selection bias, we review them here for later
comparison with the aggregate formulations. The individual regressions are prop-
erly structure by the normality assumptions included in the basic framework, here
summarized as

Micro Assumption:             For each i; t, ( ; v) is a joint normal random variable:
        namely
                                                                        2
                                                          0
                                              N                ;                   2
                                                          0

      For the micro regressions, we apply the formulae in the Appendix conditional
on the micro variables xit and zit .31 The standard micro participation regression,
or the proportion of participants given xit and zit is
                                       0                                      0
 31
      In particular, we set U =   0+       xit + it and V =        0              zit   it :



                                                    49
                                                                                   0
                                                                      0+               zit
                               E [Ijxit ; zit ] =                              2
                                                                                             :

The standard micro regression for participants is
                                                                                                               0
                                                                  0                                  0+            zit
            E [ln wit jIit = 1; xit ; zit ] =       0+                xit +                                2
                                                                                                                                  :

re ecting the typical selection term. For purposes of interpretation, we can also
derive
                                                                      0                1 2
             ln E [wit jIit = 1; xit ; zit ] =          0+                xit +            + ln
                                                                                       2                                     it
where                                  2 h                                                       i3
                                                1                          0
                                                            0+                 zit +
                                      =4            h                                       i        5:
                                                        1                          0
                                 it                             ( 0+                   zit )
This expression given the impact of selection on the mean wage for each individual.

4.1.3. Aggregate Equations

    To derive the implications of the micro model for aggregate level data, we
need to aggregate over the population (over all xit and zit values), or to apply the
formula of the Appendix without conditioning on xit and zit . For this, we make
the further assumption

Distributional Restriction: Given t, the indexes determining log wages and
     participation are joint normally distributed: namely
                     0                                      0                                    0                       0        0
               0+        xit                 0+                 E (xit )                              xx                          xz
                      0           N                         0                            ;       0                       0
               0+        zit                  0+                E (zit )                              xz                          zz


   This assumption permits us to derive the aggregate participation rate as
                                  "        0
                                                      #
                                       +     E (z   )
                       E [I] =      p0 0         it
                                                        ;
                                                    2
                                          zz +


                                                    50
which is in the same form as the micro participation equation with zit replaced
                                                                  p 0
by E (zit ) and the spread parameter replaced by the larger value             2,
                                                                      zz +

that re ects the in uence of heterogeneity in the predictors in the selection criteria.32
The same phenomenon occurs for log wages, as the Appendix formulae show that
                                                         "       0
                                                                            #
                            0                                 +    E (z   )
  E [ln wit jIit = 1] = 0 + E (xit jI = 1) + p 0           p0 0        it
                                                      2                   2
                                                 zz +           zz +

which matches the micro equation except for the change in spread parameter from
     p 0
  to                  2 , where we have made use of
          zz +
                                                      "               #
         h 0               i    0
                                             0                0
                                                           + E (zit )
                                                 xz
       E     xit jIit = 1 = E (x) + p 0                 p0 0            :
                                                    2               2
                                               zz +          zz +

These formulae would su ce for analysis if the average of log wages for all par-
ticipating individuals was the object of interest.33 This is not the case, since
aggregate data consider the growth in the aggregate wage wt , which is an average
of the level of wages, averaged with hours weights.
       If there were no variation in hours (i.e. if hours weights are equal across
individuals), the appropriate macroeconomic equation for wt would be
                                                      0
                                                                        h 0                   i       a
                                                 0+       E(xit )+ 21          xx       + 2
                    E [wit jIit = 1] = e                                                                  a
                                                                                                              t
                                            2                   0                   0                         3
                                                           0+       E(zit )+             xz   +
                                                                     p 0
                               a            6                                           + 2                   7
                                           =6                                                                 7
                                                                              zz
                     with          a        4                                                                 5
                                                                              0
                                       t                             p0 +0        E(zit )
                                                                              zz        + 2

which can be written in log form as
                                            0              1h 0                                   2
                                                                                                      i           a
           ln E [wit jIit = 1] =       0+       E (xit ) +                        xx      +               + ln    a
                                                           2                                                          t
  32
     This formula for aggregating probit models over normal populations was originally derived
by McFadden and Reid (1975).
  33
     This formula, for aggregating standard truncated normal models over normal populations,
was originally derived by McCurdy (1987).

                                                          51
In this situation, there are two aggregation factors that need to be accounted
                                                                                                                                                     0
for in examining the evolution of the aggregate. The rst 12                                                                                                   xx           +   2
                                                                                                                                                                                       de-
scribes the variance of heterogeneity (observable and unobservable). The second
                    a       a
term ln                 =       t
                                    accounts for composition changes of the (self selected) sam-
ple of participants, and depends on the covariance between individual wages and
participation decisions.
   Accounting for the distribution of hours adds a further adjustment term. Since
                                                                                                   0
                                          hit = h0 +                                 0+                zit +         it


we can apply the results of the Appendix to give
                                                            0
                                                                                h 0                        i
                                                   0+           E(xit )+ 21               xx     + 2                                                     0
       E [hit wit jIit = 1] = e                                                                         :fh0 +                      0+                       E (zit )
                                                        0
                                                                                                       p 0                                                                 a
                                                                                                                                            2 a
                                               +                 xz     +                      +                         zz    +                         tg                a
                                                                                                                                                                                   t

with                                               "                                                                                    #
                                                                        0                              0
                                    a                       0+              E (zit ) +                         xz        +
                                        ;t =                                p 0                                                             :
                                                                                                       +        2
                                                                                           zz

We also have
                                                                                      0
                                                                                                                p 0                                              a
                    E [hit jIit = 1] = h0 +                                                                                                          2
                                                                      0+                  E (z) +                              zz           +                    t


with                                                               "                                                #
                                                                                           0
                                                   a                            0+             E (zit )
                                                   t =
                                                                       ( 0                     +       2 )1=2
                                                                                  zz

Therefore, we can conclude that
                                                                                           h 0                       i         a                     a
                    E [hit wit jIit = 1]        0
                                              + E(xit )+ 12                                        xx          + 2
                                         =e 0                                                                                  a
                                                                                                                                   ev
                                                                                                                                                         a
                     E [hit jIit = 1]                                                                                                       t                      t

where we have de ned the hours adjustment term
                                               0                                 0
                                                                                                                               p 0                                             a
       a                h0 +                                                                                                                                           2
                                     0+            E (zit ) +                             xz       +                 +                          zz           +                     ev ;t
        a
           ev
                                                                            0
                                                                                                           p 0                                                                             :
                                                                                                                                                2            a
                t                        h0 +               0+                  E (zit ) +                                zz        +                        t


                                                                                52
                                            a       a
and the participation term                      =       t
                                                            is the same as in the case with no hours
variation.
     These derivations are summarized as follows. Log aggregate wages can be
written as the mean of log individual wages plus three aggregation factors as
               E [hit wit jIit = 1]       0          1h 0         2
                                                                    i
            ln                      = 0 + E (xit ) +       xx  +            (4.8)
                E [hit jIit = 1]                     2
                                                                 a                   a
                                                                     ev
                                                    + ln         a
                                                                              + ln   a
                                                                                             :
                                                                          t              t
                                                                                                 0
The three aggregation factors are interpreted as follows. The rst 12                                 xx        +   2


describes the variance of returns (observable and unobservable). The second
      a
ln        ev
               = a t measures the adjustment for composition changes in hours and de-
pends on the size of the covariance between wages and hours. The nal term
      a            a
ln             =       t
                           highlights the importance of composition changes within the selected
sample of workers from which measured wages are recorded.
     Our framework can obviously be relaxed in many ways. We can allow all vari-
ance terms to be time varying, as well as many of the basic behavioral parameters.
If the normality assumption on the overall log wage and participation index is not
accurate for the whole population, the population can be segmented, with sep-
arate aggregate equations developed for each segment. These variations, among
others, are discussed in Blundell, Reed and Stoker (2002).

4.1.4. Discussion

      The formulation (4.8) of the log aggregate wage ln wt captures four important
sources of variation. First, aggregate wages increase if the distribution of log
wages shifts to the right, which is a the typical \well-being" interpretation of
                                                                                                          0
aggregate wage movements. This source is re ected by the mean                                    0 +          E (xit )
of log wages. Second, because individual wages are given in log form, aggregate
wages will increase with increased spread of the log wage distribution, as re ected

                                                            53
                                       0
by the heterogeneity term 12                xx   +    2
                                                          . Third, aggregate wages will increase
if the hours of higher wage individuals increase relative to lower wage individuals,
                                                                    a
which is captured by the hours adjustment term ln                       ev
                                                                             = a t . Fourth, aggregate
wages will increase if the bene t threshold increases, causing more lower wage
individuals to decide not to participate. This is re ected in the participation term
      a       a
ln        =       t
                      . The model (4.8) permits estimation of these separate e ects.
     It is also relevant to note that there are many possible ways of posing the
question of how aggregate wages re ect individual wage movements. Given the
basic framework, a natural comparison concerns whether aggregate wage move-
ments accurately re ect movements in the skill price rt , or the price of human
capital. For example, if aggregate production in the economy has total human
         P
capital ( i Hi ) as an input, then the appropriate price for that input is rt . In log
terms, this comparison is summarized as

                                           ln rt versus ln wt :

Another type of comparison arises from the tradition of measuring \returns" from
coe cients in log wage equations, or comparing log aggregate wage to the mean
log wage of the population, namely

                                     E (ln wit ) versus ln wt :

This approach is adopted in the work of Solon, Barsky and Parker (1994), and
we adopt that approach in our results given below. Note that if the log mean
of skill level Hi is constant over time in our basic framework, then this is the
same as the log skill price comparison above. However, we have made su cient
assumptions to support many other kinds of relevant comparisons, such as overall
mean wage E (wit ) versus wt , or the (unweighted) mean wage E (wit jI = 1) versus
wt . Di erent contexts may dictate di erent types of aggregate comparisons.

                                                     54
4.1.5. Empirical Analysis of British Wages

       The di erent sources of aggregate wage variation bear directly on the issue of
whether aggregate wages are procyclical or not. In particular, the participation
e ect works counter to a normal cyclical variation of aggregate wages { decreases
in participation can lead to aggregate wage increases when there is essentially no
change in individual wage levels or distribution. We now turn to an analysis of
British wages that shows these features.
       The Data
          The microeconomic data used for this study are taken from the UK Fam-
ily Expenditure Survey (FES) for the years 1978 to 1994. The FES is a repeated
continuous cross-sectional survey of households which provides consistently de-
 ned micro data on wages, hours of work, employment status and education for
each year since 1978.34 Our sample consists of all men aged between 18 and 59
(inclusive).35 For the purposes of modeling, the participating group consists of
employees; the non-participating group includes individuals categorized as search-
ing for work as well as the unoccupied. The hours measure for employees in FES
is de ned as usual weekly hours including usual overtime hours. The weekly earn-
ings measure includes usual overtime pay. We divide nominal weekly earnings by
weekly hours to construct an hourly wage measure, which is de ated by the quar-
terly UK retail price index to obtain real hourly wages. The measure of education
used in our study is the age at which the individual left full-time education. We
model educational attainment by a dummy variable for whether the individual
left school at age 16 or lower, or 17 and above.36 We model cohort e ects on wage
  34
     Prior to 1978 the FES contains no information on educational attainment.
  35
     We exclude individuals classi ed as self-employed. This could introduce some composition
bias, given that a signi cant number of workers moved into self employment in the 1980's.
However, given that we have no data on hours and relatively poor data on earnings for this
group, there is little alternative but to exclude them.
  36
     An alternative to our method for constructing the education dummy would use those who


                                             55
levels by a set of cohort dummies; four 10-year date-of-birth cohorts (b.1925-34,
b.1935-44, b.1945-54, b.1955-64) and a nal dummy for b.1965-76. Our measure
of out-of-work income (income at zero-hours) is constructed for each individual as
described in Blundell, Reed and Stoker (2002).
    In addition to the microeconomic variables discussed above, some of our par-
ticipation and wage regressions use an annual measure of the aggregate unem-
ployment rate to capture the e ects of the business cycle. This measure is an
ILO-consistent de nition of the percentage of men and women of working age
who are actively seeking work taken from the UK government's o cial labor force
statistics. A linear trend is then removed. To counter the problem that the unem-
ployment rate may be an endogenous component of the wage equation, we replace
the unemployment variable with a high order polynomial trend in later speci ca-
tions. After making the sample selections described above, our sample contains
40, 988 observations. The number of employees in the data is 33,658, or 82.1% of
the total sample.
    Real Wages and Participation
         Figure 4.1 shows the overall male labor participation rate in Britain from
1978 to 1994. Clearly there has been a large fall in the participation rate of men.
Figure 4.2 presents the participation rate by education group and the fall in par-
ticipation can be seen to be much more pronounced among the older and less
skilled, with a doubling of the nonparticipation rate. This period also included
two deep recessions in which there have been large uctuations in male partic-
ipation. There have also been well documented changes in real bene t income
over time and across di erent groups of individuals. Although it is unlikely that
left education at the statutory minimum age as the base group. This method is equivalent to
ours from 1973 onwards in the UK; before this date the minimum school leaving age was a year
lower, at 15. Nonetheless, it is hoped that interactions between date-of-birth cohort e ects and
the education dummy will help capture any e ects of the change in minimum leaving age on the
relative returns to education enjoyed by the 17+ group.


                                              56
variation in real value of bene t income relative to real earnings can explain all
of this variation in participation rates, we view the changes in real bene ts as an
important \instrumental variable" for controlling for endogenous selection in real
wages.
       Figures 4.3 and 4.4 show the corresponding log average wages over the same
time period. These show a trend increase over the period even for the lower
educated group. The question of interest is how representative these aggregate
wage patterns are of the level of individual average wages, especially in view of
the dramatic changes in participation over the period. Blundell, Reed and Stoker
(2002) present a more detailed breakdown by cohort, region and education group.
       Aggregation Results
           The Blundell, Reed and Stoker (2002) study considers a number of pos-
sible speci cations for our individual level wage equations which relate to the
various speci cations. In the simplest of our speci cations the full proportionality
hypothesis is imposed on the non-di erentiated human capital model. In particu-
lar, real wages depend additively on the time invariant exogenous human capital
level and variables that capture the changes in skill price over time. Skill price
movements are modelled as quadratic in trend and linear in the level of detrended
unemployment.37 This speci cation was strongly rejected by the data. The pre-
ferred model had full interactions of cohort, trend, region, and education. These
additional variables could re ect many di erences in minimum educational stan-
dards across cohorts such as the systematic raising of the minimum school leaving
age over the postwar period in the UK. Here the prices of di erent (education
level) skills are allowed to evolve in di erent ways, by including an interaction
between high education and the trend terms. These coe cients are marginally
  37
    Unemployment is also replaced by cube, quartic and quintic terms in trend as a robustness
check.



                                             57
signi cant and show an increasing trend among groups with a higher levels of
human capital. The impact of adjusting for participation is important.38
       To analyze these results we move to a graphical analysis. Because our micro
log wage and participation model is based on qualitative predictors (aside from
zero-hours income), we compute the aggregate correction factors by constructing
the individual components for each cell de ned by the dummy variables. As such,
we are assuming that log wages and log zero-hours income are (unconditionally)
normally distributed within each cell; this assumption is fully tested in Blundell,
Reed and Stoker (2002) and found to be not much at odds with the data.
       The importance of these results for the evolution of aggregate wages is pre-
sented in Figure 4.5 which displays the log aggregate wage, the log aggregate
wage minus the estimated selection correction terms, and the log aggregate wage
with full corrections. This procedure is repeated for the lower education group
in Figure 4.6. Several features of this gure are noteworthy. For instance, even
the direction of movement of the uncorrected log aggregate wage does not always
mirror that of the mean micro log wage. Whilst there is a reasonably close corre-
spondence between the trend of the two lines in the 1984-88 period, we see that
in the 1990-1993 period measured log aggregate wages are increasing, while the
mean micro log wage and the corrected aggregate pro le is decreasing - precisely
the period where there is a big decline in participation. The same patterns are ev-
ident when we examine wages by education group. Here there is a atter upward
progression of measured log aggregate wages, but a similar close correspondence
  38
    The normality assumption on the unobservables may be called into question. Given our
exclusion assumption on the continuous zero income variable, semiparametric estimation can
proceed in a fairly straightforward manner. To estimate the slope parameters Blundell, Reed
and Stoker (1998) follow the suggestion of Robinson (1988) which is developed in Powell (1994).
These techniques are explored in a useful application to labour supply by Newey, Powell
and Walker (1990). The estimated wage soe cients are found to be hardly a ected by this
generalization.



                                              58
between the corrected log aggregate wage and the mean micro log wage, including
the 1990-1993 decline. What is remarkable here is that whereas the aggregate data
show reasonable growth in real wages this is virtually absent from the corrected
picture. But we are left with a stronger cyclical pro le of wages.
       To analyze the reliability of these results we also compare the corrected aggre-
gate results with the selectivity-adjusted micro model predictions. We view the
correspondence between the corrected log aggregate micro wage, and the mean
micro log wage, as striking validation of the framework. This model speci cation,
that provides a good and parsimonious speci cation of the evolution of log real
wages, also seems to work well in terms of the speci cation of aggregation factors.
       To see the changes in trend growth in wages which are revealed by our model
correction more clearly, it is useful to plot the return lines from a common point
at the start of the time series. This is done in Figure 4.7, which takes the data
from Figure 4.5 and rebases it to zero for 1984. The downward shift in the trend
and the increased cyclical component in wage growth shown in the selectivity-
adjusted micromodel and the aggregate wage gure minus the corrections can
easily be seen. 39

4.2. Consumption Growth and Liquidity Constraints

        We now turn to a discussion of modelling the aggregate impacts of liquid-
ity constraints on consumption. This section enlarges our previous discussion
of consumption to include aggregation over di erent regimes, regimes that arise
  39
    To get an idea of the precision of these results, Blundell, Reed and Stoker (1999) present
bootstrap 95% con dence bands for the corrected log wage estimates for both education groups.
These plots show that the micro model prediction and the corrections to the log aggregate wage
are both quite tightly estimated. In all cases the micro model prediction and the corrections
to the aggregate wage plot are signi cantly di erent from the raw aggregate wage measure and
not signi cantly di erent from each other. This gives us con dence that we have identi ed
compositional biases in the measured real wage with a reasonable degree of precision.



                                             59
because of constraints that a ect some consumers but not others. When individ-
uals in di erent regimes behave di erently, aggregates will necessarily vary with
the regime structure of the population. In the case of liquidity constraints on
consumption, one important issue is the reaction of consumption growth to cur-
rent income, which is likely to be much larger for constrained consumers than for
unconstrained consumers. We now examine some issues of this type.

4.2.1. Evidence for Liquidity Constraints

    The evidence for liquidity constraints is relatively limited. Indeed, most stud-
ies of consumption smoothing at the individual level nd it di cult to reject the
model once adequate care is taken in allowing for demographic and labor market
interactions, see Attanasio and Weber (1995) and Blundell, Browning and Meghir
(1994), for example. Much of the excess sensitivity found in aggregate studies
can be attributed to aggregation bias as documented in section 3 of this paper
(see also Gali (1990), Attanasio and Weber (1993), Goodfriend(1992) and Pischke
(1995)). However, there is some evidence that does point to the possibility that
a fraction of consumers could be liquidity constrained at particular points in the
life-cycle and business cycle. At the micro level some evidence can be found in the
studies by Eberly (1989), Hayashi (1987), Zeldes (1989), Jappelli (1990), Japelli
and Pagano (1994), Meghir and Weber (1996) and Alessie, Devereaux and Weber
(1997).
   The most obvious group for which such constraints are likely to be binding is
not necessarily poor households as, given a reasonably stable and low expected
stream of income, there may be little reason to borrow. It is more likely to be the
young, who are human capital rich but nancial wealth poor - college students or
perhaps poor parents of able children. Such individuals may like to borrow against
their future expected higher earned incomes (since experience gradient is typically


                                        60
found to be much higher for those with more human capital) but cannot. The
consequence of this would be to have a proportion of consumers whose current
consumption growth plans will be in uenced by current constraints. They will
clearly react more than otherwise might be expected to current income and wealth
shocks. This proportion will depend on the valuation of collateral assets and
will therefore be sensitive to business cycle uctuations. Aggregate consumption
growth will be a time varying mixture of these two regimes of behavior.

4.2.2. Basic Framework for Consumption and Liquidity Constraints

        We start with the basic consumption model discussed earlier, with permanent
and transitory shocks to income. The change in current income for consumer i at
time t is
                                ln yit =   t + "it +      ut +         vit

where      t + "it is the permanent component and              ut +          vit is the transitory com-
ponent. Suppose the consumer is unconstrained in period t                         1 when making the
consumption growth plan. In this case expected consumption growth is of the
form
                                                               0
                               E t 1 ( ln cit ) = rt +             xit :                          (4.9)

where, as before, rt represents an interest e ect from substitution, xit captures
individual-speci c factors such as demographic composition.40
       In our earlier discussion of consumption growth we developed a prototypi-
cal model that related actual consumption growth to the stochastic process for
income. Assuming uncertainty is over income alone41 this is given by

                                                   0
                                ln cit = rt +          xit +   t + "it                          (4.10)
  40
    The variables rt and xit are replaced by expected values if not known in period t 1:
  41
    For the discussion of aggregation we again assume rt is not subject to unanticipated shocks,
as before this will be relaxed in our discussion of estimation bias in aggregate relationships.

                                              61
where E t 1 ("it ) = E t 1 ( t ) = 0:42 This simpli ed consumption growth formulation
has two components; an optimal plan (4.9) based on the Euler equation and a
stochastic term which relates the innovations in consumption to the permanent
shocks in income. Liquidity constraints can invalidate both the plan and the
relation between consumption and income innovations.
       Liquidity constraints a ect the ability of consumers to nance their desired
consumption growth path. To model liquidity constraints we follow an approach
similar to that in Zeldes (1989). The incidence of liquidity constraints depends
on the degree of consumption growth the consumer is trying to nance and the
existing stock of assets. In this framework the consumer could face binding liq-
uidity constraints for its global life-cycle optimal consumption level but still not
face binding constraints in its optimal consumption growth plan from period t                     1
to t: In terms of the Euler condition in the log linear model (4.9), liquidity con-
straints only enter the growth plan if they are binding in planning period t                     1:
In this case the optimal plan will always be to increase consumption growth so
as to \jump" back up to the optimal path. If this plan is further frustrated by
a binding constraint in period t; consumption will simply grow by the change in
the amount of resources available.
       Consequently, for consumers who were constrained in period t 1 when making
the plan, the consumption growth model (4.9) needs to be adapted by the inclusion
of an additional term mit re ecting this planned jump in consumption growth
                                                          0
                             E t 1 ( ln cit ) = rt +          xit + mit :                   (4.11)

A simple interpretation of mit is the premium of the risk free lending rate that
consumer i faces when constrained (see Browning and Lusardi (1996), for a dis-
  42
     This is a stylized approximation for a at least two reasons (see Blundell and Stoker (1999)
for a detailed discussion). First, the income innovations ( t + "it ) will be scaled by the ratio of
income to wealth in period t 1. Second, risk terms will enter the determination of consumption
growth.

                                                62
cussion). Provided no unexpected constraints arise in period t then, apart from
this adjustment to the path, the consumer will wish to smooth transitory uctua-
tions in income and fully consume the permanent innovations. Under our stylized
model assumptions we have
                                                        0
                                 ln cit = rt +              xit + mit +   t + "it :                    (4.12)

where E t 1 ( t + "it ) = 0 and mit               0: In general the mit term will relate directly
to the shadow value of this constraint (see Zeldes (1989)).
      Both (4.10) and (4.12) re ect behavior of unconstrained consumers at time
t, depending upon whether they were constrained in t                                1 or not. If, as below,
we de ne the indicator Iit 1 = 1 [i is constrained in period t                            1], then (4.10) and
(4.12) are combined as
                                                   0
                            ln cit = rt +              xit + Iit 1 mit +        t + "it                (4.13)

In this formulation, with growth in income of                      ln yit , consumer i needs to nance
a growth rate of
          0                                                               0
  rt +        xit + Iit 1 mit +    t + "it         ln yit = rt +              xit + Iit 1 mit     ut     vit

for consumption at time t to be on growth plan.
      To model liquidity constraints in period t, suppose that consumer i faces a
borrowing constraint that is associated with a maximum rate of increase of con-
sumption of
                                                  + ait + it

where ait is (say) accumulated nancial assets.43 Therefore, consumer i is able to
maintain the consumption growth plan if
                            0
                     rt +       xit + Iit 1 mit             ut     vit          + ait + it             (4.14)
 43
    The term + ait + it is assumed to be known to consumer i when making the planned
consumption growth.

                                                        63
Consumer i is therefore liquidity constrained in period t, or cannot maintain the
consumption growth plan if
                       0
                rt +       xit + Iit 1 mit        ut      vit >   + ait + it     (4.15)

and otherwise, consumer i is not constrained and the plan with mit = 0 is main-
tained. We indicate this liquidity constraint with
              h       0
                                                                            i
       Iit = 1 rt + xit + Iit 1 mit       ut     vit >            + ait + it :   (4.16)

Under the constraint (4.15), we assume that consumption growth is as large as
possible, namely
                              ln cit =       ln yit +   + ait + it :             (4.17)

In terms of permanent and transitory terms of income growth, (4.17) may be
rewritten
                   ln cit =     t+       ut +    + ait + "it +    vit + it :     (4.18)

   Clearly, unconstrained consumers react to anticipated interest rate changes and
permanent income changes, whereas constrained consumers will also react to total
income growth. The reaction of aggregate consumption to interest rate changes
and current income growth will clearly depend on the percentage of consumers who
are constrained relative to those who are not. As mentioned above consumers who
are constrained in period t 1 but unconstrained in t will have larger consumption
growth than the basic plan (4.9) as re ected by the mit term. Consequently, we
have a switching regimes model in which consumption growth follows (4.13) if
Iit = 0 and (4.18) otherwise.
   Various approaches have been applied to account for the jump term mit in
studies of micro level data. First, if information on liquidity constraints were
available so that unconstrained individuals could be excluded from the sample,
estimation could take place on the unconstrained group. This is essentially the

                                                64
approach adopted by Zeldes (1989). Although this yields information on the para-
meters of unconstrained optimal growth plan and allows this model to be tested on
a set of unconstrained individuals, it does not tell us the mechanism by which con-
straints occur. An alternative is to parameterize the term mit in the constrained
regime and estimate a switching model. This is approach followed in Jappelli,
Pischke and Souleles (1998) and Garcia, Lasardi and Ng (1997). The approach
taken in the former paper is to specify mit in terms of asset and income variables.
They also use direct questionnaire information on the presence of constraints to
identify the switching index. To identify some of the preference parameters, one
may substitute mit across other choices by consumers that also depend on mit .
For example, Alessie, Melenberg and Weber (1989) use leisure, Alessie, Devereux
and Weber (1997) use durable stocks. Finally, it may be that the shadow value
cancels out across nancial assets (if the borrowing limit refers to their sum but
not to each of the assets individually) and Attanasio and Weber (1998) use this
to study money demand in Italy.
   We explore the aggregate implications of this switching model by making as-
sumptions on the distribution of the mit term across the population. Our analysis
could easily incorporate a further parameterization of mit in terms of observed
variables. This extension is straightforward and left to the interested reader.

4.2.3. Aggregate Formulations

The switching model introduced above is intrinsically nonlinear, and so we need
to specify the distribution of all heterogeneous elements in the population in order
to develop an interpretable aggregate formulation. For this, we again appeal to




                                        65
multivariate normal assumptions. In particular, we assume that in period t
0                   1    00               1 2 2            0                                                 31
  ln cit 1                     c 1t               c 1 ;t   Xc 1 ;t   ac 1 ;t 0           0           0
B 0 xit + Iit 1 mit C    BB 0 xt + mt C 6 Xc 1 ;t                    0
                                                                             0           0           0       7C
B                   C    BB               C 6              X;t       Xa;t                                    7C
B ait               C    BB at            C 6 ac ;t                  2
                                                                             0           0           0       7C
B                   C ~N BB               C;6         1    Xa;t      a;t                                     7C
B "it               C    BB 0             C 6 0          0         0           2
                                                                                         0           0       7C
B                   C    BB               C 6                                  "                             7C
@ vit               A    @@ 0             A 4 0          0         0         0               2
                                                                                                     0       5A
                                                                                                 v
                             0                                                                           2
   it                                           0        0         0         0           0

Clearly, the idiosyncratic shocks "it ;     vit ; it are assumed to be independent nor-
mal variables across the population, each with mean 0, and we assume that they
are uncorrelated with any of the observable variables in the model.
   Two further simpli cations require comment. First, as in Section 3, we assume
lagged consumption is lognormally distributed, instead of a variety of primitive
assumptions on the determinants of lagged consumption. However, in the present
context of liquidity constraints, this assumption is unlikely to hold exactly, and
must be viewed as an approximation. The reason for this is that the distribution
of lagged consumption will typically involve both unconstrained and constrained
consumption values, and would most consistently be viewed as a mixture dis-
tribution as with our model of current consumption. To capture this requires
a considerably more dynamic model; with consumption at time t depending on
the unconstrained-constrained composition for time t, but also the composition
at time t        1, t   2, ..., etc. Second, we have assumed that the combination of
demographic growth terms and the \jump" required to return to the optimal path
            0
(namely         xit + Iit 1 mit ) has a normal distribution in each time period. We have
single out the mean        mt = Et (Iit 1 mit ) in the notation, but left the variation of
                                                      0
the combination together, as in         X;t = V art       xit + Iit 1 mit . It would clearly
be better to have a full model of the shadow value mit , although it is not clear
that an explicit solution can be found. In any case, we view these assumptions
as approximations, to facilitate the analysis of aggregate relationships. These

                                             66
abstractions from the dynamic elements permit us to focus on the current com-
positional structure, which is our current focus (and, in our view, likely the most
important).
      With the above assumption, we apply the formulae in the Appendix to derive
the means of consumption for constrained consumers and for unconstrained con-
sumers, and the percentage of liquidity constrained consumers. We summarize
the results as follows44 The mean of consumption for unconstrained consumers is

                                                                                           0
                E (cit jIit = 0) = exp( c 1 t + rt + t +                                       xt +       mt
                                     1 2                                                                  2
                                   +          + 2 Xc 1 ;t +                                    X;t +                 0t
                                     2 c 1 ;t                                                             "


where
                                       0
                          rt       t       xt   mt   + ut + +            at    Xc 1;t      X;t +    ac 1 ;t +        Xa;t
                                                p                             2 2 + 2 + 2
                                                      X;t   2       Xa;t +      a;t  v
             0t =                                                                                                              :
                                                                0
                                                prt     t           xt    mt + ut + +
                                                                           2 2 + 2 + 2
                                                                                      at
                                                      X;t   2       Xa;t +    a;t   v


The factor       0t is 1 if there is 0 correlation between planned consumption growth

levels and nancing (borrowing) needs. The mean of consumption for liquidity
constrained consumers is

       E (cit jIit = 1) = exp( c 1 t + t + ut + + at
                            1
                          + ( c2 1 ;t + 2 ac 1 ;t + 2 a;t
                                                      2
                                                          + "2 +                                          2
                                                                                                              v +
                                                                                                                      2
                                                                                                                          ))           1t
                            2
where
                               0                                                                              2 2     2            2
                    rt + t +       xt + mt      u           at +         Xc 1;t +
                                                pt                                  Xa;t
                                                                           2 2 + 2 + 2
                                                                                                ac 1 ;t         at        v

                                                      X;t   2       Xa;t +   a;t  v
         1t =                                                                                                                           :
                                                            0
                                                prt + t +           xt + mt   ut    at
                                                                           2 2 + 2 + 2
                                                      X;t   2       Xa;t +   a;t  v


 44
      This derivation is available from the authors.


                                                                67
The factor         1t   is 1 if there is 0 correlation between the constrained consump-
tion growth levels and nancing (borrowing) needs. Finally, the percentage of
consumers who are liquidity constrained is
                     2                                                                                      3
                                   0

                     4  rt + t +     xt + mt     ut                                                       at 5
             Pt =       q                                                                                        :
                                             2                                          2             2
                            X;t   2 Xa;t + 2 a;t +                                          v +


   Combining these results, we have that aggregate consumption in period t is

                    E (cit ) = E (cit jIit = 0) (1                 Pt ) + E (cit jIit = 1) Pt

                                     0                        1      2                                                 2
= exp     c   1t   + rt +     t+         xt +      mt +              c 1 ;t + 2         Xc     1 ;t   +     X;t +      "             0t (1       Pt )
                                                              2
                                                         1        2
+ exp     c   1t   +    t+    ut +       +        at +            c 1 ;t + 2       ac   1 ;t    + 2 a;t
                                                                                                    2
                                                                                                        +             2
                                                                                                                      " +
                                                                                                                                2
                                                                                                                                    v +
                                                                                                                                             2
                                                                                                                                                        1t Pt
                                                         2
Notice that E (cit 1 ) = exp             c   1t   + 12 c2 1 ;t and exp                     1 2
                                                                                        t+ 2 "              factor out of each
term, so we conclude that
                              1 2
  ln E (cit ) =          t+                                                                                                               (4.19)
                              2 "

                                                   0                     1
                        + ln exp         rt +           xt +      mt +     2        Xc         1 ;t   +    X;t             0t       (1    Pt ) +
                                                                         2

                                                              1
                        exp     ut +         +         at +     2      ac   1 ;t   + 2 a;t
                                                                                       2
                                                                                           +                2
                                                                                                                v +
                                                                                                                      2
                                                                                                                                     1t   Pt
                                                              2
   This expression of aggregate growth is fairly easy to interpret. First, aggregate
                                                      1 2
consumption growth starts with                    t + 2 " , which is the logarithm of the mean of

the permanent shocks in income. The (anticipated) interest rate and demographic
variables a ect only the unconstrained consumers, which will typically make their
impact on aggregate consumption growth smaller. For instance, for changes in rt ,
we have

                                                             68
                                                @ [ ln E (cit )]
                                                                 =                            (1             t)
                                                     @rt
instead of the unconstrained e ect                                  or the constrained e ect 0, and for changes
in the common transitory income shock                                               ut , we have
                                                      @ [ ln E (cit )]
                                                                       =                             t
                                                          @ ut
instead of the constrained e ect 1 or the unconstrained e ect 0. The factor                                                                                   t is

given as
                                             1
       exp       ut +      +            at + 2        2     ac      1 ;t   + 2 a;t
                                                                               2
                                                                                   +                     2
                                                                                                             v +
                                                                                                                           2
                                                                                                                                        1t   Pt + (D0t          D1t )
 t =                           0                       1
           exp      rt +            xt +          mt + 2       2 Xc 1 ;t + X;t        0t (1     Pt ) +
                                                                 1                 2 2      2        2
                      exp               ut +         +      at + 2
                                                                    2    ac 1 ;t +   a;t +    v +                                                        1t   Pt

where
                                            0                   1
                  exp      rt +                 xt +       mt + 2               2       Xc    1 ;t   +        X;t
                                                 0
                                   rt       t        xt    mt +       ut + +             at          Xc 1;t           X;t +     ac 1 ;t +       Xa;t
                                                           p                               2 2 + 2 + 2
                                                                   X;t      2       Xa;t +   a;t  v
       D0t =                                q
                                                               2                             2 2 +                2             2
                                                     X;t                 Xa;t +                a;t                    v +


and
                                                      1
             exp        ut +            +        at + 2         2          ac    1 ;t   + 2 a;t
                                                                                            2
                                                                                                +                     2
                                                                                                                          v +
                                                                                                                                    2
                                        0                                                                                                2 2     2       2
                        rt + t +            xt + mt        u                    at +    Xc 1;t +
                                                           pt                                   2 2 + 2 +
                                                                                                             Xa;t
                                                                                                                           2
                                                                                                                            ac 1 ;t        at        v

                                                                   X;t      2       Xa;t +        a;t  v
  D1t =                                     q
                                                               2                             2 2 +                2             2
                                                     X;t                 Xa;t +                a;t                    v +


where      ( ) is the normal density. While these are daunting expressions, their
interpretation is straightforward. The terms D0t , D1t arise from di erentiating
the weights        0t (1    Pt ),               1t Pt , and if we ignore those e                                          ects, then

                                                  E (cit jIit = 1) Pt
                        t =
                                   E (cit jIit = 0) (1 Pt ) + E (cit jIit = 1) Pt

                                                                           69
Further, if the mean consumption of constrained consumers is approximately equal
to the mean consumption for unconstrained consumers, then

                                       t = Pt


In any case, in all likelihood, we have 0 <     t < 1, giving the natural dampening

of the interest e ect, as well as an aggregate impact of transitory income shocks
due to liquidity constrained consumers.
   Thus, we have an interesting and intuitive result on how aggregate relation-
ships involve dampened reactions to various shocks. On the transition from con-
strained to unconstrained, we have not modelled the requisite shadow value mit ,
but shown how the mean      mt   = Et (Iit 1 mit ) enters the aggregate formulation
(as well as the variance). The    mt term is likely to be cyclical in character, as

recessions could involve more liquidity constrained consumers, larger adjustments
back to optimal growth paths, or both. Because of systematic cyclical variation,
exclusion of such terms could lead to invalidation of standard instruments used in
estimation.


5. Summary and Conclusion

    In this paper, we have covered recent work on aggregation problems in a
style that we hope is useful to empirical economists. We have studied three basic
issues faced in the development of relationships among aggregates that connect
to models of individual behavior. These issues are captured under the heading
of individual heterogeneity: heterogeneity in tastes and reactions, heterogeneity
in market participation, and heterogeneity in uninsurable risks faced by individu-
als. Relationships among aggregate statistics cannot be meaningfully interpreted
without taking account of individual heterogeneity.



                                        70
   We have covered several recent advances in econometric modeling that at-
tempt to address these issues. First, we have detailed the main approach for in-
corporating distributional information into aggregate relationships, namely exact
aggregation models, in the context of how that approach has been applied to the
analysis of consumer demands. Second, we have shown how one can incorporate
basic nonlinearity, insurance and dynamic elements, in our coverage of aggregate
consumption based on CRRA preferences. Third, we have shown how to account
for compositional heterogeneity, in our coverage of labor participation and wages,
and of liquidity constraints in consumption analysis. The latter two approaches
required explicit assumptions on the distribution of individual heterogeneity, and
we have based our solutions on normal and lognormal assumptions on individual
heterogeneity. While these distributional restrictions are speci c, they do permit
explicit formulations of the aggregate relationships of interest to be derived, and
those formulations capture both location and spread (mean and variance) of the
underlying elements of individual heterogeneity. We view our solutions in these
cases as representative and clear, and good starting points for empirical modeling
in the respective areas.
   Whether one dates the beginning of the study of aggregation problems from
the 1940's, 1930's or perhaps earlier, one can at best describe progress toward
solutions as slow. Aggregation problems are among the most di cult problems
faced in either the theoretical or empirical study of economics. Heterogeneity
across individuals that is relevant for economic behavior is extremely extensive,
and its impact is not obviously simpli ed or lessened by the existence of economic
interaction via markets or other institutions. The conditions under which one can
ignore a great deal of the evident individual heterogeneity are so severe as to make
them patently unrealistic. There is no quick, easy or obvious x to dealing with
aggregation problems in general.


                                        71
   Yet we see this situation as changing recently, and o er the solutions discussed
in this paper as evidence of that change. The sources of this change are two-fold,
and it is worth pointing them out as well as pointing out how both are necessary.
   The rst source is the increasing availability of data on individuals observed
over sequential time periods. To address questions of what kinds of individual het-
erogeneity are truly important for aggregate relationships in a convincing way, one
must assess what kinds of heterogeneity are relevant to behavior at the individual
level, and assess how variable are the distributions of the relevant heterogeneity
over time. To the extent that this heterogeneity re ects di erences in unexpected
shocks to individual agents, the mechanisms that are available to individuals to
insure against such shocks will have a strong bearing on the form of the aggregate
relationship. In dynamic models we have highlighted the importance of assump-
tions on risk pooling and the availability of insurance in circumventing aggregation
bias. However, these assumptions are strong and are often used without evidence
on individual behavior over time.
   While we have advanced the idea of using aggregation factors (derived from
time series of individual data) to summarize the impacts of aggregation, the spe-
ci c method one uses is less important than the ability to actually study economic
relationships at both the individual and aggregate level simultaneously. And even
though modeling assumptions will always be necessary to develop explicit formula-
tions of aggregate relationships, testing those assumptions is extremely important,
and is not possible without extensive individual data over sequential time periods.
The prospects for meaningful advances continues to brighten, as the data situa-
tion with regard to individual behavior and aggregate economic relationships can
only be expected to continue to improve.
   The second source of the recent rapid strides in studying aggregation problems
is the improvement in computing power. Realistic accommodation of individual


                                        72
heterogeneity typically requires extensive behavioral models, let alone combina-
tions of individual models with aggregate relationships. Within the last twenty
years (or the professional lives of both authors), there has been dramatic changes
in the ability to implement realistic models, or models that have been shown to be
necessary in understanding impacts of individual heterogeneity and aggregation
issues.
   Aggregation problems remain among the most vexing in all of applied eco-
nomics. And while they have not become less di cult in the past decade, it has
become possible to study aggregation problems in a meaningful way. As such,
there are many reasons to be optimistic about the prospects for steady progress
on aggregation problems in the future. The practice of ignoring or closeting ag-
gregation problems as \just too hard" is no longer appropriate.
   Acknowledgements: Helpful discussions with Martin Browning, Arthur Lew-
bel, Howard Reed, Zoe Smith and Guglielmo Weber are gratefully acknowledged.
Financial support from the ESRC Centre for the Micro-Economic Analysis of
Fiscal Policy at IFS is gratefully acknowledged. The usual disclaimer applies.


A. Appendix: Normal and Lognormal Aggregation Formu-
   lae

We make use of the following results for aggregation over normal and lognormal
populations, with and without truncation (such as due to selection.
    Suppose that (U; V) are jointly normal random variables: namely
                                                2
                      U               U         U     UV
                              N             ;         2      :
                      V               V         UV    V

Suppose also that
                          ln W = U and I = 1 [V < 0] :



                                       73
so that W is lognormally distributed, and I indicates selection of a particular
population group.
   We make use of the following formulations throughout the exposition. First
are the standard formulations underlying probit and normal truncation models:

                                                          V
                                  E [I] =                                                                            (A.1)
                                                      V

                                      E [UI]                          UV               V
                    E [UjI = 1] =            =        U                                                              (A.2)
                                       E [I]                          V                V

where    is the inverse Mill's ratio
                                                  []
                                        []=                                                                          (A.3)
                                                  []
   For aggregation over lognormal populations, we have the familiar expression
of a lognormal mean
                                                          1   2
                                  E [W] = e U + 2 U                                                                  (A.4)

When the population is selected, the mean of the lognormal is
                                               h        i
                                                                          V       UV
                                              1   2                           V
                                            U+2                       h           i
                      E [WjI = 1] = e             U                                    :                             (A.5)
                                                                              V
                                                                              V


Finally, for weighted aggregation as considered in the section on wages, we require
the following truncated mean
                                                                                           h                    i
                                                                                                   V       UV
                        1   2                                     V               UV                   V
 E [VWjI = 1] = e U + 2 U       V +    UV     V                                                h           i        : (A.6)
                                                                       V                               V
                                                                                                       V



See Blundell, Reed and Stoker (1998) for these results as well as references to the
literature.




                                            74
References
 [1] Aigner, D. J. and Goldfeld, S. M. (1974), \Estimation and Prediction from
     Aggregate Data When Aggregates are Measured More Accurately that Their
     Components," Econometrica, 42: 113-34.

 [2] Alessie, R. Devereux, M. and Weber, G. (1997), \Intertemporal consump-
     tion, durables and liquidity constraints: a cohort analysis", European Eco-
     nomic Review, 41: 37-60.

 [3] Allenby, G M. and Rossi, P E. (1991), \There is No Aggregation Bias: Why
     Macro Logit Models Work," Journal of Economic and Business Statistics,
     9, 1-14.

 [4] Atkinson, A.B., J. Gomulka, and N. H. Stern (1990),\Spending on Alco-
     hol: Evidence from the Family Expenditure Survey 1970-1983", Economic
     Journal, 100, 808-827.

 [5] Aiyagari, S.R. (1994), "Uninsured Idiosyncratic Risk and Aggregate Sav-
     ings", Quarterly Journal of Economics, 104(2), 219-240.

 [6] Aiyagari, S.R. (1994), "Co-existence of a Representative Agent Type Equi-
     librium with a Non representative Agent Type Equilibrium", Journal of
     Economic Theory, 57(1), 230-36.

 [7] Attanasio, O.P. (1999), "Consumption", in John B. Taylor and Michael
     Woodford, (eds.)., Handbook of Macroeconomics. (Amsterdam:North
     Holland).

 [8] Attanasio, O.P. and M. Browning (1995), "Consumption Over the Life cycle
     and Over the Business Cycle", American Economic Review, 85(5), 1118-
     1137.

 [9] Attanasio, O.P. and S.J. David (1996), "Relative Wage Movements and the
     Distribution of Consumption", Journal of Political Economy, 104, 1227-
     1262.

[10] Attanasio, O.P. and P.K. Goldberg (1997), "On the Relevance of Borrowing
     Restrictions. Evidence from Car Loans in the US", in progress.


                                      75
[11] Attanasio, O.P. and G. Weber (1993a), "Is Consumption Growth Consistent
     with Intertemporal Optimization? Evidence from the Consumer Expendi-
     ture Survey", Journal of Political Economy, 103(6), 1121-1157.

[12] Attanasio, O.P. and G. Weber (1993b), "Consumption Growth, the Interest
     Rate and Aggregation", Review of Economic Studies, 60, 631-49.

[13] Anderson, S P.; de Palma, A and Thisse, J-F (1989), \Demand for Di eren-
     tiated Products, Discrete Choice Models and the Characteristics Approach,"
     Review of Economic Studies, 56, 21-36.

[14] Barker, Terence S. and Pesaran, M. Hashem (1990), Disaggregation in
     Econometric Modeling, London, Routledge.

[15] Barnett, William A. (1979), \Theoretical Foundations of the Rotterdam
     Model," Review of Economic Studies, 46, 109-130.

[16] Banks, J. Blundell, R.W. and Lewbel, A. (1997), \Quadratic Engel Curves,
     Indirect Tax Reform and Welfare Measurement", Review of Economics and
     Statistics, LXXIX, 4, 527-539.

[17] Banks, J., Blundell, R. and A. Brugiavini (1999), \Risk Pooling, Precau-
     tionary Saving and Consumption Growth", IFS Discussion Paper, W99-19,
     August.

[18] Bean, C.R. (1986), \The Estimation of 'Surprise' models and the 'Surprise'
     consumption Function", Review of Economic Studies, 53, 497-516.

[19] Beaudry, Paul and David Green (1996), \Cohort Patterns in Canadian Earn-
     ings and the Skill-Based Technical Change Hypothesis," Working Paper,
     Department of Economics, University of British Columbia.

[20] Berndt, E R.; Darrough, M N. and Diewert W. E (1977), \Flexible Func-
     tional Forms and Expenditure Distributions: An Application to Canadian
     Consumer Demand Functions," International Economic Review, 18, 651-
     675.

[21] Becker, G S. (1962), \Irrational Behavior and Economic Theory," Journal
     of Political Economy, 70, 1-13.


                                     76
[22] Bewley, T. (1977),"The Permanent Income Hypothesis: a Theoretical For-
     mulation", Journal of Economic Theory, 16, 252-92.

[23] Bierens, H.J. and Pott-Buter H.A. (1990) \Speci cation of household Engel
     curves by nonparametric regression", Econometric Reviews, 9, 123-184.

[24] Blackorby, C; Boyce, R and Russell, R R. (1978), \Estimation of Demand
     Systems Generated by the Gorman Polar Form: A Generalization of the
     S-Branch Utility Tree," Econometrica, 46, 345-364.

[25] Blackorby, C; Primont, D and Russell, R R. (1978), Duality, Separability
     and Functional Structure: Theory and Economic Applications, Amsterdam,
     North Holland.

[26] Blinder, Alan S. (1975), \Distribution E ects and the Aggregate Consump-
     tion Function," Journal of Political Economy, 83, 447-75.

[27] Bils, M J. (1985), \Real Wages Over the Business Cycle: Evidence from
     Panel Data," Journal of Political Economy, 93, 666-689.

[28] Blundell, R. W., (1988), \Consumer Behaviour: Theory and Empirical Ev-
     idence", Economic Journal, 98, 16-65.

[29] Blundell, R. W., Browning, M. and I. Crawford (1998), \Nonparametric
     Engel Curves and Revealed Preference", UCL Economics Discussion Paper,
     98-17, July.

[30] Blundell, R.W., Ham, J. and Meghir, C. (1987), \Unemployment and Fe-
     male Labour Supply", Economic Journal, 97,44-64.

[31] Blundell, R. and T. MaCurdy (1999), \Labor supply: A Survey", in Hand-
     book of Labor Economics vol III(a), ed. By O. Ashenfelter and D. Card
     (North Holland:Amsterdam).

[32] Blundell, R. W., Pashardes, P. and Weber, G. (1993), \What do we learn
     about consumer demand patterns from micro-data?", American Economic
     Review, June.

[33] Blundell, R.W and I. Preston (1998), \Income Uncertainty and Consump-
     tion Inequality", Quarterly Journal of Economics, May.

                                     77
[34] Blundell, R.W., H. Reed and T. Stoker (2002) \Interpreting Movements in
     Aggregate Wages: The Role of Labor Market articipation" IFS Working
     Paper, revised November, forthcoming American Economic Review.

[35] Blundell, R. and J-M Robin (1999) \Estimation in Large and Dissaggregated
     Demand Systems: An Estimator for Conditionally Linear Systems", Journal
     of Applied Econometrics, Vol.14, No.3, May-June, 209-232.

[36] Blundell, R. and J-M Robin (2000), \Latent Separability: Grouping Goods
     without weak Separability", Econometrica, Vol.68, No.1, 53-84.

[37] Blundell, R.W. and T. Stoker (1999) \Consumption and the Timing of In-
     come Risk", European Economic Review, 43(3), March, 475-507.

[38] Browning, Martin (1992), \Children and Household Economic Behavior,"
     Journal of Economic Literature, 30, 1434-1475.

[39] Browning, Martin (1993), \Estimating Micro Parameters from Macro Data
     Alone: Some Pessimistic Evidence," Research in Economics, 47, 253-268.

[40] Browning, M.J. and Meghir, C. (1991), \The e ects of male and female
     labour supply on commodity demands", Econometrica, 59, 925-951.

[41] Browning, M. and A. Lusardi (1996), "Household Saving: Micro Theories
     and Micro Facts", Journal of Economic Literature, 34(4), 1797-1855.

[42] Browning, M., Hansen, L.P. and Heckman J.J. (1998)\Micro Data and Gen-
     eral Equilibrium", forthcoming Handbook of Macroeconomics.

[43] Buse, Adolph (1992). \Aggregation, Distribution and Dynamics in the Lin-
     ear and Quadratic Expenditure Systems," Review of Economics and Statis-
     tics, 74, 45-53.

[44] Caballero, R.J. (1990), "Consumption Puzzles and Precautionary Savings,"
     Journal of Monetary Economics, 25, January, 113-36.

[45] Caballero, R J. and Engel, E M.R.A. (1991), \Dynamic (S,s) Economies,"
     Econometrica, 59, 1659-1686.

[46] Caballero, R J. and Engel, E M.R.A. (1992), \Microeconomic Adjustment
     Hazards and Aggregate Demands," MIT Department of Economics.

                                     78
[47] Cameron, A. C (1990), \Aggregation in Discrete Choice Models: An Illus-
     tration of Nonlinear Aggregation," in T.S. Barker and M.H. Pesaran, eds.,
     Disaggregation in Econometric Modeling, London, Routledge.

[48] Caplin, A S. and Nalebu , B (1991), \Aggregation and Imperfect Compe-
     tition: On the Existence of Equilibrium," Econometrica, 59, 1-24.

[49] Caplin, A S. and Spulber, D (1987), \Menu Costs and the Neutrality of
     Money," Quarterly Journal of Economics, 102, 703-726.

[50] Chiappori, P-A (1988), \Rational Household Labor Supply," Econometrica,
     56, 63-90.

[51] Chetty, V.K. and Heckman, J J. (1986), \A Dynamic Model of Aggregate
     Output Supply, Factor Demand and Entry and Exit for a Competitive In-
     dustry with Heterogeneous Plants," Journal of Econometrics, 33, 237-262.

[52] Cochrane, J.H. (1991), "A Simple Test of Consumption Insurance", Journal
     of Political Economy , 99, 957-976.

[53] Cogan, J.F. (1981), "Fixed Costs and Labor Supply", Econometrica, 49,
     945-964.

[54] Cowing, T G. and McFadden, D L. (1984), Microeconomic Modeling and
     Policy Analysis, New York, Academic Press.

[55] Deaton, A S. (1985), \Panel Data from Time Series of Cross Sections,"
     Journal of Econometrics, 30. 109-126.

[56] Deaton, A.S.(1991), \Savings and Liquidity Constraints", Econometrica, 59,
     1221-48.

[57] Deaton, A.S.(1993), Understanding Consumption, Oxford University Press,
     Oxford.

[58] Deaton, A S. and Muellbauer, J (1980a), \An Almost Ideal Demand Sys-
     tem," American Economic Review, 70, 312-326.

[59] Deaton, A S. and Muellbauer, J (1980b), Economics and Consumer Behav-
     ior, Cambridge, Cambridge University Press.

                                     79
[60] Debreu, G (1974), \Excess Demand Functions," Journal of Mathematical
     Economics, 1, 15-23.
[61] Dickens, R. (1996),\The Evolution of Individual Male earnings in Great
     Britain, 1975-1994", CEP Discussion Paper No. 306, November.
[62] Diewert, W. E (1977), \Generalized Slutsky Conditions for Aggregate De-
     mand Functions, Journal of Economic Theory, 15, 353-362.
[63] Dumas, B (1989), \Two-Person Dynamic Equilibrium in the Capital Mar-
     ket," The Review of Financial Studies, 2, 159-188.
[64] Dynan, K.E. (1993), "How prudent are Consumers?", Journal of Political
     Economy, 101, 1104-1113.
[65] Epstein, L.G. and S.E. Zin (1989), "Substitution, Risk Aversion and the
     Temporal Behaviour of Consumption and Asset Returns: A Theoretical
     Framework", Econometrica, 57(4), 937-969.
[66] Epstein, L.G. and S.E. Zin (1991), "Substitution Risk Aversion and the
     Temporal Behaviour of Consumption and Asset Returns: An Empirical
     Analysis", Journal of Political Economy, 99(2), 263-286.
[67] Fair, R C. and Dominguez, K M. (1991), \E ects of the Changing U.S. Age
     Distribution on Macroeconomic Equations," American Economic Review,
     81, 1276-1294.
[68] Feenberg, D R. and Rosen, H S. (1983), \Alternative Tax Treatment of
     the Family: Simulation Methodology and Results," Chapter 1 of M.S. Feld-
     stein, ed., Behavioral Simulation Methods in Tax Policy Analysis, Chicago,
     University of Chicago Press.
[69] Freixas, X and Mas-Colell, A (1987), \Engel Curves Leading to the Weak
     Axiom in the Aggregate," Econometrica, 55, 515-532.
[70] Forni, Mario and Marco Lippi (1997), Aggregation and the Microfoundations
     of Dynamic Macroeconomics, Oxford, Clarendon Press.
[71] Grandmont, J-M (1992), \Transformations of the Commodity Space: Be-
     havioral Heterogeneity and the Aggregation Problem," Journal of Economic
     Theory, 57, 1-35.

                                     80
[72] Granger, C W.F. (1980), \Long-Memory Relationships and the Aggregation
     of Dynamic Models," Journal of Econometrics, 14, 227-38.

[73] Granger, C W.F. (1987), \Implications of Aggregation with Common Fac-
     tors," Econometric Theory, 3, 208-222.

[74] Granger, C W.F.(1990), \Aggregation of Time Series Variables: A Survey,"
     in Barker, Terence S. and Pesaran, M. Hashem, eds., Disaggregation in
     Econometric Modeling, London, Routledge.

[75] Grandmont, J.M. (1992), \Transformation of the Commodity Space, Behav-
     ioral Heterogeneity, and the Aggregation Problem", Journal of Economic
     Theory, 57, 1-35.

[76] Goodfriend, M. (1992), "Information Aggregation Bias", American Eco-
     nomic Review, 82, 508-519.

[77] Gorman, W M. (Terence) (1953), \Community Preference Fields," Econo-
     metrica, 21, 63-80.

[78] Gorman, W M. (Terence) (1981), \Some Engel Curves," in Deaton, An-
     gus S., ed. Essays in the Theory and Measurement of Consumer Behavior,
     Cambridge, Cambridge University Press.

[79] Gosling, A., S. Machin and C. Meghir (1996), \The Changing Distribution
     of Male Wages in the UK, 1966-92" IFS Working Paper No. W94/13.

[80] Grunfeld, Y and Griliches, Z. (1960), \Is Aggregation Necessarily Bad?"
     Review of Economics and Statistics, 42, 1-13.

[81] Hall, R E. (1978), \Stochastic Implications of the Life Cycle-Permanent
     Income Hypothesis: Theory and Evidence," Journal of Political Economy,
     86, 971-987.

[82] Hall, R.E. (1988), "Intertemporal Substitution in Consumption", Journal
     of Political Economy, 96(2), 339-357.

[83] Hansen, G D. (1985), \Indivisible Labor and the Business Cycle," Journal
     of Monetary Economics, 16, 309-27.


                                    81
[84] Hansen, L P and Singleton, K J. (1983) \Stochastic Consumption, Risk
     Aversion and the Temporal Behavior of Asset Returns," Journal of Political
     Economy, 91, 249-65.
[85] Hansen, L.P. and K.J. Singleton (1982), "Generalized Instrumental Vari-
     ables Estimation of Nonlinear Rational Expectations Models", Economet-
     rica 50(5), 1269-1286.
[86] Hardle, W; Hildenbrand, W and Jerison, M (1991), \Empirical Evidence for
     the Law of Demand," Econometrica, 59, 1525-1550.
[87] Hausman, J. A., W. K. Newey, H. Ichimura, and J. L. Powell (1991), \Identi-
      cation and Estimation of Polynomial Errors in Variables Models", Journal
     of Econometrics, 50, 273-296.
[88] Hayashi, F. (1985), "The E ects of Liquidity Constraints on Consumption:
     A Cross Section Analysis", Quarterly Journal of Economics, 100, 183-206.
[89] Hayashi, F, (1987), "Tests for Liquidity Constraints: A Critical Survey",
     in Truman Bewley (ed.) Advances in Econometrics, Fifth World Congress,
     Vol.2 (Cambridge : Cambridge University Press).
[90] Hayashi, F., J. Altonji and L. Kotliko (1996), "Risk-Sharing between and
     within Families", Econometrica, 64, 261-294.
[91] Heaton, J and Lucas, D (1996), \Evaluating the E ects of Incomplete Mar-
     kets on Risk Sharing and Asset Pricing," Journal of Polictical Economy,
     104, 443-87.
[92] Heckman, J.J. (1979), 'Sample Selection Bias as a Speci cation Error',
     Econometrica, 47, 153-161.
[93] Heckman, J.J. (1990), 'Varieties of Selection Bias', American Economic Re-
     view, 80(2), 313-318.
[94] Heckman , J.J. and Sedlacek, G. (1990), \Self-Selection and the Distribution
     of Hourly Wages", Journal of Labor Economics, 8, S329-S363.
[95] Heckman, J. J. and Chetty, V.K. (1986), \A Dynamic Model of Aggregate
     Output, Factor Demand and Entry and Exit for a Competitive Industry
     with Heterogeneous Plants," Journal of Econometrics, 33, 237-262.

                                      82
 [96] Heckman, J J. and Sedlacek, G (1985), \Heterogeneity, Aggregation and
      Market Wage Functions: An Empirical Model of Self-Selection in the Labor
      Market," Journal of Political Economy, 93, 1077-1125.

 [97] Heckman, J J. and Walker, J R. (1989), \Forecasting Aggregate Period-
      Speci c Birth Rates: The Time Series Properties of a Microdynamic Neo-
      classical Model of Fertility," Journal of the American Statistical Association,
      84, 958-965.

 [98] Heckman, J J. and Walker, J R. (1990), \The Relationship Between Wages
      and Income and the Timing and Spacing of Births: Evidence from Swedish
      Longitudinal Data," Econometrica, 58, 1411-1442.

 [99] Heineke, J M. and Shefrin, H M. (1990), \Aggregation and Identi cation in
      Consumer Demand Systems," Journal of Econometrics, 44, 377-390.

[100] Hildenbrand, W (1981), \Short Run Production Functions Based on Micro-
      data," Econometrica, 49, 1095-1126.

[101] Hildenbrand, W (1983), \On the Law of Demand," Econometrica, 51, 997-
      1019.

[102] Hildenbrand, W (1992), \Market Demand, Theory and Empirical Evi-
      dence," Discussion Paper A-359, Universitat Bonn.

[103] Hildenbrand, W. (1994), Market Demand: Theory and Empirical Ev-
      idence, Princeton: Princeton University Press.

[104] Hildenbrand, W. (1998),\How Relevant are Speci cations of behavioural
      relations on the micro-level for modelling the time path of population ag-
      gregates?", European Economic Review, 42, 437-458.

[105] Houthakker, H S. (1955), \The Pareto Distribution and the Cobb-Douglas
      Production Function in Activity Analysis," REStud;23, 27-31.

[106] Jappelli, T (1990), "Who is Credit Constrained in the US Economy", Quar-
      terly Journal of Economics, 104, 219-234.

[107] Jappelli, T. and M. Pagano (1994), "Saving, Growth and Liquidity Con-
      straints", Quarterly Journal of Economics, 109, 83-110.

                                         83
[108] Jappelli, T., J-S. Pischke and N. Souleles (1998), "Testing for Liquidity
      Constraints using Complementary Data Sources", Review of Economics and
      Statistics.

[109] Johansen, L (1972), Production Functions, Amsterdam, North Holland.

[110] Joint Committee on Taxation (1992), Discussion of Revenue Estimation
      and Process, JCS 14-92, August 13, 1992, U.S. Government Printing O ce,
      Washington, D.C.

[111] Jorgenson, D W.; Lau, L J. and Stoker, T M. (1980), \Welfare Comparisons
      and Exact Aggregation," American Economic Review, 70, 268-272.

[112] Jorgenson, D W.; Lau, L J. and Stoker, T M. (1982), \The Transcendental
      Logarithmic Model of Aggregate Consumer Behavior," in Basmann, Robert
      L. and Rhodes, George, eds., Advances in Econometrics, Vol. 1, Green-
      wich, JAI Press, 97-238.

[113] Jorgenson, D W. and Slesnick, D T. (1984), \Aggregate Consumer Behavior
      and the Measurement of Inequality," Review of Economic Studies, 51, 369-
      392.

[114] Jorgenson, D W.; Slesnick, D T. and Stoker, T M. (1988), \Two Stage Bud-
      geting and Exact Aggregation," Journal of Business and Economic Statis-
      tics, 6, 313-325.

[115] Jorgenson, D W. and Stoker, T M. (1986), \Nonlinear Three Stage Least
      Squares Pooling of Cross Section and Average Time Series Data," in Mo-
      roney, John R., ed., Advances in Statistical Analysis and Statistical
      Computing, Vol. 1, Greenwich, JAI Press, 87-116.

[116] Katz, L F. and K M. Murphy (1992), \Changes in Relative Wages, 1963-
      1987: Supply and Demand Factors," Quarterly Journal of Economics, 35-78.

[117] Kelejian, H J. (1980), \Aggregation and Disaggregation of Nonlinear Equa-
      tions," in Jan Kmenta and James B. Ramsey, eds., Evaluation of Econo-
      metric Models, New York, Academic Press.

[118] Kirman, A P. (1992), \Whom or What Does the Representative Individual
      Represent," Journal of Economic Perspectives, 6, 117-136.

                                      84
[119] Krussell, P. and A.A. Smith (1998), "Income and Wealth Heterogeneity in
      the Macroeconomy", Journal of Political Economy, October 1998.

[120] Lam, P-S (1992), \Permanent Income, Liquidity, and Adjustments of Au-
      tomobile Stocks: Evidence from Panel Data," Quarterly Journal of Eco-
      nomics, 106, 203-230.

[121] Lau, L J. (1977), \Existence Conditions for Aggregate Demand Functions,"
      Institute for Mathematical Studies in the Social Sciences, Stanford Univer-
      sity, Technical Report No. 248.

[122] Lau, L J. (1982), \A Note on the Fundamental Theorem of Exact Aggrega-
      tion," Economic Letters, 9. 119-126.

[123] Lee, L-F and R H. Porter (1984), "Switching Regression Models with Im-
      perfect Sample Separation: with an application to Cartel Stability", Econo-
      metrica, 52, 391-418.

[124] Lee, K.; Pesaran, M. Hashem and Pierse, Richard G. (1990), \Testing for
      Aggregation Bias in Linear Models," Economic Journal, 100, 137-150.

[125] Leser, C E.V. (1963), \Forms of Engel Functions," Econometrica, 31, 694-
      703.

[126] Lewbel, A (1989a), \A Demand System Rank Theorem," Econometrica, 57,
      701-706.

[127] Lewbel, A (1989b), \Exact Aggregation and a Representative Consumer,"
      Quarterly Journal of Economics, 104, 622-33.

[128] Lewbel, A (1990), \Income Distribution Movements and Aggregate Money
      Illusions," Journal of Econometrics, 43, 35-42.

[129] Lewbel, A (1991), \The Rank of Demand Systems: Theory and Nonpara-
      metric Estimation," Econometrica, 59, 711-730.

[130] Lewbel, A (1992), \Aggregation with Log-Linear Models", Review of Eco-
      nomic Studies, 59, 635-642.

[131] Lewbel, A (1993), \Distributional Movements, Macroeconomic Regularities
      and the Representative Consumer," Research in Economics, 47, 189-199.

                                       85
[132] Lewbel, A (1994), \Aggregation and Simple Dynamics," American Eco-
      nomic Review, 84, 905-918.

[133] Lippi, M (1988), \On the Dynamic Shape of Aggregated Error Correction
      Models," Journal of Economic Dynamics and Control, 12, 561-585.

[134] Lusardi, A (1996), "Permanent Income, Current Income and consumption:
      Evidence from Two Panel Data Sets", Journal of Business and Economic
      Statistics, 14, 81-89.

[135] MaCurdy, T.F. (1982), "The Use of Time Series Processes to Model the
      Error Structure of Earnings in a Longitudinal Data Analysis," Journal of
      Econometrics, 18, January, 83-114.

[136] MaCurdy, T E. (1987), \A Framework for Relating Microeconomic and
      Macroeconomic Evidence on Intertemporal Substitution," in Bewley, Tru-
      man F., ed., Advances in Econometrics, Fifth World Congress, Vol.
      II, 149-176.

[137] Mankiw, N. Gregory and David N. Weil (1989), \The Baby Boom, the Baby
      Bust, and the Housing Market," Regional Science and Urban Economics, 19,
      235-258.

[138] Marshak, J (1939), \Personal and Collective Budget Functions," Review of
      Economic Statistics, 21, 161-170.

[139] Meghir, C, and E Whitehouse (1996), `The Evolution of Wages in the UK:
      Evidence from Micro Data', Journal of Labor Economics, 14(1), 1-25.

[140] Meghir, C. and G. Weber (1996), "Intertemporal Nonseparability or Bor-
      rowing Restrictions? A Disaggregate Analysis using a US Consumption
      Panel", Econometrica, 64(5), 1151-1181.

[141] Modigliani, F (1970), \The Life Cycle Hypothesis of Saving and Intercountry
      Di erences in the Saving Ratio," in W. Eltis, M. Scott and I. Wolfe, eds.
      In ation, Growth and Trade, Oxford, Clarendon Press.

[142] Mo tt, R (1991), \Identi cation and Estimation of Dynamic Models with
      a Time Series of Repeated Cross Sections," Draft, Brown University.


                                       86
[143] Muellbauer, J (1975), \Aggregation, Income Distribution and Consumer
      Demand," Review of Economic Studies, 42, 525-543.

[144] Muellbauer, John (1976), \Community Preferences and the Representative
      Consumer," Econometrica, 44, 979-1000.

[145] Muellbauer, J (1981), \Linear Aggregation in Neoclassical Labor Supply,"
      Review of Economic Studies, 48, 21-36.

[146] Newey, W.K., Powell, J.L. and Walker, J.R. (1990), 'Semiparametric Esti-
      mation of Selection Models: Some Empirical Results', American Economic
      Review, 80(2), 324-328.

[147] Pesaran, M. H; Pierce, R G. and Kumar, M.S. (1989), \Econometric Analy-
      sis of Aggregation in the Context of Linear Prediction Models," Economet-
      rica, 57, 861-888.

[148] Pischke, J-S (1995), "Individual Income, Incomplete Information and Ag-
      gregate Consumption", Econometrica, 63, 805-840.

[149] Pollak, R A. (1985), \A Transactions Cost Approach to Families and House-
      holds," Journal of Economic Literature, 23, 581-608.

[150] Powell, J L. and Stoker, T M. (1985), \Estimation of Complete Aggregation
      Structures," Journal of Econometrics, 30, 317-344.

[151] Powell, J.L. (1994), Estimation of Semi-Parametric Models, in Engle and
      McFadden (eds) Handbook of Econometics, Vol 4, Elsevier, Amsterdam,
      1994.

[152] Prescott, E C. (1986), \Theory Ahead of Business Cycle Measurement,"
      Quarterly Review, Federal Reserve Bank of Minneapolis, 10, 9-22.

[153] Robinson, P. (1988), \Root-N Consistent Semiparametric Regression",
      Econometrica, 56, 931-954.

[154] Rubinstein, M, (1974), \An Aggregation Theorem for Securities Markets,"
      Journal of Financial Economics, 1, 224-244.




                                      87
[155] Runkle, D E. (1991), "Liquidity Constraints and the permanent Income
      Hypothesis: Evidence from Panel Data", Journal of Monetary Economics
      27, 73-98.

[156] Roy, A.D. (1951),\Some Thoughts on the Distribution of Earnings", Oxford
      Economic Papers, 3, 135-146.

[157] Samuelson, P A. (1956), \Social Indi erence Curves," Quarterly Journal of
      Economics, 73, 1-22.

[158] Sato, K (1975), Production Functions and Aggregation, Amsterdam,
      North Holland.

[159] Scheinkman, J.A. and L. Weiss (1986), "Borrowing Constraints and Aggre-
      gate Economic Activity", Econometrica, 54(1), 23-45.

[160] Schafer, W and Sonnenschein, H (1982), \Market Demand and Excess De-
      mand Functions," in Arrow, K.J. and M.D. Intriligator, eds, Handbook of
      Mathematical Ecoonomics, Vol. II, New York, North Holland.

[161] Skinner, J. (1988), "Risky Income. Life Cycle consumption and Precaution-
      ary Savings", Journal of Monetary Economics, 22, 237-255.

[162] Solon, G., Barksy, R. and J. Parker (1994), "Measuring the Cyclicality of
      Real Wages: How Important is composition Bias?", Quarterly Journal of
      Economics, 109(1), 1-26.

[163] Sonnenschein, H (1972), \Market Excess Demand Functions," Economet-
      rica, 40, 549-563.

[164] Stoker, T M. (1978), \The Pooling of Cross Section and Average Time Series
      Data," draft, Harvard University.

[165] Stoker, T M. (1982), \The Use of Cross Section Data to Characterize Macro
      Functions," Journal of the American Statistical Association, 77, 369-380.

[166] Stoker, T M. (1984a), \Completeness, Distribution Restrictions and the
      Form of Aggregate Functions," Econometrica, 52, 887-907.

[167] Stoker, T M. (1984b), \Exact Aggregation and Generalized Slutsky Condi-
      tions," Journal of Economic Theory, 33, 368-377.

                                      88
[168] Stoker, T M. (1985), \Aggregation, Structural Change and Cross Section
      Estimation," Journal of the American Statistical Association, 80, 720-729.

[169] Stoker, T M. (1986a), \Aggregation, E ciency and Cross Section Regres-
      sion," Econometrica, 54, 177-188.

[170] Stoker, T M. (1986b), \The Distributional Welfare Impacts of Rising Prices
      in the United States," American Economic Review, 76, 335-349.

[171] Stoker, T M. (1986c), \Simple Tests of Distributional E ects on Macroeco-
      nomic Equations," Journal of Political Economy, 94, 763-795.

[172] Stoker, T M. (1986d), \Consistent Estimation of Scaled Coe cients,"
      Econometrica, 54, 1461-1482.

[173] Stoker, T M. (1992), Lectures on Semiparametric Econometrics, CORE Lec-
      ture Series, Louvain-la-Neuve, CORE Foundation.Stoker,

[174] Stoker, T M. (1993), \Empirical Approaches to the Problem of Aggregation
      over Invividuals", Journal of Economic Literature, XXXI, 1827-1874.

[175] Theil, H (1954), Linear Aggregation of Economic Relations, Amsterdam,
      North Holland.

[176] Theil, H (1975), Theory and Measurement of Consumer Demand, Vol.1,
      Amsterdam, North Holland.

[177] Townsend, R.M. (1994), "Risk and Insurance in Village India", Economet-
      rica, 62, 539-592.

[178] Van Daal, J and Merkies, A H.Q.M. (1984), Aggregation in Economic Re-
      search, Dordrecht, D. Reidel.

[179] Weber, G. (1993), "Earnings Related Borrowing Restrictions: Empirical
      Evidence from a Pseudo panel for the UK", Annales d'Economie et de Sta-
      tistique, 29, 157-173.

[180] de Wol , P (1941), \Income Elasticity of Demand, A Micro-Economic and
      a Macro-Economic Interpretation," Economic Journal, 51, 140-145.



                                      89
[181] Working, H (1943), \Statistical Laws of Family Expenditure," Journal of
      the American Statistical Association, 38, 43-56.

[182] Zeldes, S.P. (1989), "Consumption and Liquidity Constraints: An Empirical
      Investigation", Journal of Political Economy, 97(2), 305-46.

[183] Zeldes, S.P. (1989b), "Optimal consumption with Stochastic Income", Quar-
      terly Journal of Economics, 104, 275-298.

[184] Zellner, A (1969), \On the Aggregation Problem, a New Approach to a
      Troublesome Problem," in Estimation and Risk Programming, Essays
      in Honor of Gerhard Tintner, Berlin, Springer.




                                      90



---
normalized_id: shared-pdf-reference-ferguson-b-s-lim-g-c-dynamic-economic-models-in-discrete-time-routledge-2003-isbn-0415288991-o-174s-gl
exam_code: SHARED
material_scope: ferguson b.s., lim g.c. dynamic economic models in discrete time (routledge, 2003)(isbn 0415288991)(o)(174s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Ferguson B.S., Lim G.C. Dynamic economic models in discrete time (Routledge, 2003)(ISBN 0415288991)(O)(174s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ferguson-b-s-lim-g-c-dynamic-economic-models-in-discrete-time-routledge-2003-isbn-0415288991-o-174s-gl

Dynamic Economic Models in
Discrete Time




Economic behaviour is inherently dynamic. While things change continuously
over time, much of economic analysis is based on discrete time, such as a month,
a quarter, or a year, reﬂecting the periodic nature of data collecting and decision-
making.
   This book introduces and develops the techniques of discrete time modelling
starting with ﬁrst-order difference equation models and building up to systems of
difference equations, covering the following topics along the way:

•   nonlinear difference equation models
•   random walks and chaotic processes
•   optimization in discrete time models

This easy-to-follow book will primarily be of interest to upper-level students
carrying out economic modelling. The nature of the book – bridging a gap
between dynamic economic models and empirical analysis – will mean that it will
also appeal to all academics with an interest in econometrics and mathematical
economics.

Brian S. Ferguson is Associate Professor of Economics at the University of
Guelph, Canada.

G. C. Lim is Associate Professor of Economics at Melbourne University, Australia.
Dynamic Economic
Models in Discrete Time
Theory and empirical applications



Brian S. Ferguson and G.C. Lim
First published 2003
by Routledge
11 New Fetter Lane, London EC4P 4EE
Simultaneously published in the USA and Canada
by Routledge
29 West 35th Street, New York, NY 10001
Routledge is an imprint of the Taylor & Francis Group
This edition published in the Taylor & Francis e-Library, 2005.
“To purchase your own copy of this or any of Taylor & Francis or Routledge’s
collection of thousands of eBooks please go to www.eBookstore.tandf.co.uk.”
© 2003 Brian S. Ferguson and G.C. Lim
All rights reserved. No part of this book may be reprinted or reproduced or
utilised in any form or by any electronic, mechanical, or other means, now
known or hereafter invented, including photocopying and recording, or in
any information storage or retrieval system, without permission in writing
from the publishers.
British Library Cataloguing in Publication Data
A catalogue record for this book is available from the British Library
Library of Congress Cataloging in Publication Data
Ferguson, Brian S.
     Dynamic economic models in discrete time: theory and empirical applications / Brian S.
  Ferguson and G.C. Lim.
        p.cm.
     Includes bibliographical references and index.
      1. Econometric models. 2. Statics and dynamics (Social sciences) 3. Discrete-time
  systems. I. Lim, G. C. (Guay C.) II. Title.

  HB141.F468 2003
  330 .01 183–dc21                                                           2003041386

ISBN 0-203-98776-4 Master e-book ISBN



ISBN 0–415–28899–1 (Print Edition)
Contents




1   Introduction                                         1

2   First-order difference equations                     5
    Introduction 5
    Solution functions 7
    Phase diagrams 15
    Examples of FODE models 20

3   Second-order difference equations                   31
    Introduction 31
    Characteristic roots 32
    Examples of SODE models 45

4   Higher-order and systems of difference equations   53
    Higher-order difference equations 53
    Systems of difference equations 56
    Examples of systems of difference equations 64

5   Intertemporal optimization                         76
    Introduction 76
    Dynamic programming 78
    Lagrange Multiplier approach 93
    Examples 101

6   Nonlinear difference equations                     107
    Introduction 107
    Linearizing nonlinear difference equations 110
    A basic neoclassical growth model 115
    Chaos in economics 119
vi   Contents
7    Empirical analysis of economic dynamics   124
     Introduction 124
     Basic empirical dynamic models 124
     Time series analysis 131
     Examples of empirical analysis 148
     Conclusion 153

     Notes                                     155
     Bibliography                              160
     Index                                     165
1       Introduction




Economic behaviour is inherently dynamic at both the micro and the macro levels.
Things change over time. Economic agents (be they consumers or ﬁrms) take time
to respond to changes in prices, incomes and circumstances in general, so it takes
time for the effects of those changes to work their way fully through the system.
It can take a long time for the economy to reach its new equilibrium position after
a shock and, indeed, given that the economy is subject to a continuous series of
random shocks, it may never actually settle down into a new equilibrium. It is quite
possible for every observation of an economic variable (be it of a micro variable
like price, or a macro variable like the gross domestic product (GDP)) to represent
transitional rather than equilibrium points.
   However, economic theory focusses on equilibrium relations. This is logical,
since equilibrium relations are generally determined by solving the optimiza-
tion problem which drives the economic behaviour. The dynamic behaviour that
we actually observe in markets ultimately derives from the efforts of individual
economic agents to move towards a new optimum.
   The need to consider transition dynamics is not ignored in courses which focus
on theory, but time constraints often result in dynamic analysis being relegated
to a minor place in the curriculum. It is not unusual for a bit of dynamics to be
covered in a lecture or two, with the aim being to provide a brief cookbook on
how to do the speciﬁc bits of analysis that will be relevant to that particular course.
Of necessity, this provides a very incomplete introduction to dynamic economic
analysis.
   Our aim in this book is to ﬁll some of that gap, at least with regard to discrete
time analysis. This book is an introduction to discrete time economic dynamics,
and so does not go into the mathematics or econometrics at a high technical level.
Our aim is to give an introduction to the use of difference equation models in
economic analysis.
   A difference equation is a mathematical relation between the value of a variable y
in period t, which we write as yt and its value in one or more past periods, which
we write as yt−i where the value of i indicates how far into the past we are looking.
When i = 1, we have yt−1 , and the relation yt = f (yt−1 ) is what is known as a ﬁrst-
order difference equation (FODE). If we were working with yt = f (yt−1 , yt−2 ),
we would have a second-order difference equation (SODE).
2   Introduction
   Strictly speaking, yt = f (yt−1 ) is an autonomous FODE, since time appears
only in the subscript on the y term. When we have something like yt = f (yt−1 , t)
where time appears explicitly as an argument in its own right in the f (·) func-
tion, we refer to the difference equation as non-autonomous. Virtually all of the
difference equations found in economic applications are autonomous.
   In general, in dynamic economic models, we are working with equations of the
form yt = f (yt−1 ) + g(xt , t), where xt stands for any exogenous variable which
might affect the value of y in period t. Written this way, we can regard the f (yt−1 )
term as summarizing the intrinsic dynamics of y and the g(xt , t) term as summa-
rizing the way the exogenous variables, including a deterministic trend, affect y.1
   While we will go into all of this in more detail in later chapters, we should say an
introductory word here about deterministic trends. We said above that economic
variables change over time. They do so for a number of reasons.
   One obvious reason for y to change is that x has changed. In comparative statics
analysis, this is the only reason for y to change. In comparative statics analysis,
then, we are basically looking at an expression of the form: yt = g(xt ). The y
variable will change as the x variable changes, but we generally do not tell a story
about why x changes over time – we leave that for a model in which x is the
dependent variable.
   Sometimes we extend the comparative statics model by adding a deterministic
trend (we will explain the terminology ‘deterministic’ later, when we talk about
other types of trends) giving us: yt = g(xt , t). Here y can change even if x does not,
because the presence of t as an explanatory variable (as distinct from its presence
as a subscript) means that the simple passage of time is sufﬁcient to cause the
value of y to change. The most common explanation for the presence of this type
of trend is that it represents something like technological change. For example,
in a production function, technological change often enters as a variable which
allows us to get more output out of unchanged levels of the inputs.
   Despite the long-term popularity of models like this, it can be surprisingly
difﬁcult to think of a convincing reason for including a deterministic trend, either
in theoretical or empirical dynamic models: strictly speaking, the presence of
a deterministic trend often suggests that this process would continue to operate
even if the world were to come to an end. The destruction of all capital and labour
would disrupt the production process, of course, but there would still be an upward
tendency in output.
   Most often, a deterministic trend is taken as representing all of the factors which
affect the value of y but which, usually for lack of data, we are unable to model.
Sometimes it is the best we can do, but increasingly it is being seen as a last resort.
   Modern dynamic economic analysis places greater weight than did the earlier
literature on the fact that economic variables are not black box processes. They
derive their values from other economic variables as a result of the decisions
made by economic agents – consumers and producers. Dynamics arise from the
same source – as we noted above, it takes time for people to react to changing
circumstances.
   This is where we get structures of the form: yt = f (yt−1 ) + g(xt , t) or even
of the form: yt = f (yt−1 ) + g(xt , xt−1 , t). In this kind of equation, the g(·) term
                                                                     Introduction    3
summarizes how y responds to changes in the exogenous variables while the f (·)
tells us about the time path y follows in the process of responding. Putting it over-
simply, the g(·) term tells us where y is heading, and the f (·) term tells us about
the path it follows as it heads there.
   The range of types of time paths that a y variable can follow is remarkably wide.
We will talk about this in more detail later, but the most obvious possibilities are
a monotonic, or smooth approach path and a cyclical approach path (assuming
it approaches at all – as we shall see, this is a testable hypothesis). As the f (·)
term becomes more complicated, the range of types of paths that y could follow
becomes much broader. It does not take a very complicated functional form for
the f (·) term to yield chaotic behaviour.
   The key message of dynamic economic modelling is that understanding the
nature of the transition path is essential to understanding where y is going to
wind up. If our true relation is yt = f (yt−1 ) + g(xt ), and in our empirical analysis
we assume that yt = g(xt ), there is a pretty good chance that we will wind up with
a biased estimate of the form of the g(xt ) function, giving us an erroneous picture
of the true relation between y and x.
   Difference equations arise quite naturally in economic models: the familiar
multiplier derived from the Keynesian Cross macro model (which we shall consider
in some detail later) is frequently described in terms of lagged responses to shocks.
For example, a ‘shock’ increase in government spending today increases income
today. However, while consumers will respond to the higher income, they do
so with a lag – perhaps it takes a bit of time to decide what to spend the extra
income on – so consumption does not increase until tomorrow. That increase in
consumption results in a further increase in income which, after a lag, causes a
further increase in consumption and so on until the multiplier effect of the initial
increase in government spending has worked itself out.
   While introductory macro textbooks tend to focus on comparative statics – differ-
ences between the pre- and post-shock equilibria – they generally make some men-
tion of the length of time it might take for a real world multiplier process to work
itself out. In more advanced macro courses, business cycles are often introduced in
the form of lagged adjustments in IS–LM models. If both the goods and the money
markets involve lagged responses to changes in exogenous variables, the economy
can cycle around a new equilibrium point for quite some time before ﬁnally set-
tling down. If we are doing empirical analysis of an IS–LM model, we have to take
account of the possibility that a very large proportion of our observations might lie
on neither the IS nor the LM curve, even though the equilibrium relations deﬁned
by those curves ultimately control the behaviour of the macro system over time.
   Similarly, microeconomics analysis often includes dynamic adjustment
processes. The Walrasian price adjustment process is generally described in terms
of a time process of adjustment to market disequilibrium. When the market is in
a state of excess demand, price rises until the market clears, and when the market
is initially in a state of excess supply, price falls by whatever amount is needed
to clear markets. In short, if we want to estimate the function which describes
the optimal relation among the economic variables, we need to distinguish the
adjustment dynamics from the underlying equilibrium relationship.
4   Introduction
   Much of the observed difference in behaviour between different markets can be
explained in terms of the speed of their dynamic adjustment processes. Financial
markets, for example, respond almost instantaneously to shocks. By deﬁnition, as
soon as a shock hits (a bit of good news about a company’s prospects, for example)
the demand and supply curves for the relevant asset shift, causing the market equi-
librium price to jump. Because ﬁnancial markets adjust very quickly to changes
in equilibrium values, the actual market price moves very rapidly towards the new
equilibrium price. This rapid adjustment to shocks increases market volatility, at
least by some measures, and creates the impression of market instability. In fact,
rapid ﬂuctuations in stock prices can be an evidence of rapid convergence to an
equilibrium, albeit a moving one. But, even in this ﬁnancial markets example,
despite the rapid rate of market adjustments, if the market is subject to many,
rapid shocks, a signiﬁcant proportion of our observations are likely to reﬂect the
dynamics of adjustments rather than the equilibrium relationship.
   Labour markets, on the other hand, adjust slowly. The onset of a recession,
shifting the labour demand curve back to the left, drives the equilibrium wage
down. Because labour markets are slow to clear, the actual wage converges to
the new equilibrium only after a long lag, meaning that the market spends a long
time in a state of excess supply, and unemployment persists. In this case, a large
proportion of our empirical observations are clearly points of disequilibrium.
   Empirical economic dynamics has historically tended to focus on macro
relations, for the simple reason that it was only for macro variables that we have had
extensive time series data. However, at the micro level, the increased availability
of panel data sets (which provide cross-sectional micro-information for economic
agents over a period of years) have simulated more research into the dynamics of
microeconomic behaviour.
   This book develops the theory of discrete time dynamics, starting with the
FODE then the SODE models, and then building up to higher order and systems
of difference equations. It also includes a chapter on nonlinear difference equation
models, and a brief introduction to the literature on the question of whether certain
markets are better characterized as random walks or as chaotic processes.
   This book also introduces techniques of optimization in discrete time models and
discusses how they underpin dynamic testable equations of economic behaviour.
It also includes an introduction to dynamic econometric modelling which includes
a discussion of the more recent developments in time series econometrics; par-
ticularly, unit roots, cointegration and error correction forms. The focus here is
on the interpretation, in terms of economic theory, of the results from empirical
econometric modelling.
   In summary, this book aims to introduce an Economics student to discrete time
economic modelling – its theory and its empirical analysis – and to how dynamic
optimizing acts as a bridge between the equilibrium modelling of economic
behaviour and the applied econometric analysis of the adjustment process.
2      First-order difference equations




Introduction
The simplest type of difference equation is a linear, ﬁrst-order equation, of the
general form:

    Yt = αYt−1 + g                                                             (2.1)

In an equation like this one, the time subscript, ‘t’, should be thought of not as
representing calendar time, but rather elapsed time – the amount of time which
has passed since the dynamic process, which we are studying, began. As written,
when the term g is non-zero, Equation (2.1) is called a non-homogeneous equation;
when g is equal to zero, Equation (2.1) is called a homogeneous equation. Further-
more, since α is a constant, Equation (2.1) is also an example of a linear, constant
coefﬁcient ﬁrst-order difference equation (FODE). Most economic applications of
FODE involve constant coefﬁcient models, although this is not a requirement.
   According to this equation, the value which the variable Y takes on in period
t is equal to a constant g plus a term which depends on the value which Y took
on in the period t − 1. In economic applications, the g term represents all those
variables which affect the current value of Y , other than Y ’s own lagged value.
   Another way of looking at Equation (2.1) is to rewrite it in change form, that is,
Yt = Yt −Yt−1 form. This involves what is known as a linear reparametrization of
Equation (2.1), which boils down to rearranging the terms in Equation (2.1) without
altering its meaning. In the case of Equation (2.1), we simply subtract Yt−1 from
both sides of Equation (2.1) and, for convenience of interpretation, rearrange it as:

    Yt = (α − 1)Yt−1 + g                                                      (2.2)

   Equation (2.2) (which contains exactly the same information as in
Equation (2.1), simply presented differently) tells us that the amount by which
the value of Y changes from period t − 1 to period t depends on its value in period
t − 1, and on the value of g.
   For the difference equation structure to be useful in theoretical and econometric
applications, we have to go beyond simply saying that it tells us how current and
past values of Y are related. We have to extract precise information about the nature
6   First-order difference equations
of that relation. This information is referred to as the dynamic structure, or, more
loosely, the dynamics of the relation.
   To get an idea of how this is done, consider a simpler, homogeneous version of
Equation (2.1):

    Yt = αYt−1                                                                   (2.3)

Remember that we said that the relation between Yt and Yt−1 had to be a genuine
causal relation, meaning that there must be a continuing link between current and
past values of Y over time. Given this, we can also write Yt−1 = αYt−2 and
Yt−2 = αYt−3 and so on back in time. Since each of these expressions must hold,
by deﬁnition, then by successive backward substitution we obtain:

    Yt = αYt−1 = α 2 Yt−2 = · · · = α t Yt−t = α t Y0                            (2.4)

where Yt−t is obviously Y0 , which we refer to as the initial value of Y and which
we assume is constant.
   Since we derived Equation (2.4) from the sequence of equations beginning with
Equation (2.3), it contains no new information, it just presents our prior information
in a slightly different form. The reason this form is useful is because of the way
the time element, t, appears in Equation (2.4). Instead of an equation relating Yt
to Yt−1 , we have an equation showing how the value of Yt depends on the value
of t itself. An expression like this, which gives the value of Yt as a function of the
value of t, not of Yt−1 , is generally referred to as a solution function for our FODE.
The solution function throws light on the role of the α term in the evolution of Yt .

•   0 < α < 1: suppose α is a constant, positive fraction. Then as time passes
    and t, the time index, gets steadily bigger, the term α t gets steadily smaller,
    going to zero as t approaches inﬁnity. Whatever our initial Y0 value then,
    so long as Y0 is not equal to zero, after enough time has elapsed, and t has
    become big enough, Equation (2.4) tells us that Yt converges on zero.
•   α > 1: suppose that α is a constant, positive number larger than 1. In this
    case, as time passes and t gets steadily bigger, α t also gets steadily bigger
    and, from Equation (2.4), no matter how small our initial value Y0 is, again so
    long as it is not actually equal to zero,1 as t goes to inﬁnity, Yt goes eventually
    to inﬁnity.

   Even more interesting behaviour comes out of the case where α is negative, but
we shall set that case aside for a moment, and state a general result. Whenever
the behaviour over time of a variable Y can be characterized by a ﬁrst-order linear
homogeneous difference equation such as Equation (2.3), we can, by substitution,
ﬁnd an expression like (2.4), in which the value of Y is shown as a function of the
time index, t.
                                                First-order difference equations    7
Solution functions

Homogeneous equations
For the majority of the examples we deal with, an equation like (2.3) has a solution
function of the general form:
    Yt = Aλt                                                                    (2.5)
where λ is referred to as the root of the difference equation, and A is a constant
whose value is to be determined from the information given in the problem. Since
the time subscript is arbitrary, this general expression will apply in each period, so
that, for example Yt−1 = Aλt−1 . This means that we can use the solution function
(2.5) to rewrite Equation (2.3) as:
    Aλt − αAλt−1 = Aλt−1 (λ − α) = 0                                            (2.6)
which yields:
    (λ − α) = 0                                                                 (2.7)
known as the characteristic equation of our original FODE (2.3). From
Equation (2.7) we see that λ = α and substituting this back into Equation (2.5)
gives the solution of the FODE as:
    Yt = Aα t                                                                   (2.8)
To see that (2.8) is indeed a solution, note that, since the form of the equation
which determines the value of Y in each time period is assumed to be unchanged
over time (all that changes is the particular value which t happens to take on) we
can also write Yt−1 = Aα t−1 giving Yt = αYt−1 , which is just the homogeneous
FODE that we started from, in Equation (2.3).
   Next, we need to solve for the undetermined constant A. We do not actually
have enough information in the problem as stated to do this: we need to bring in
an additional bit of information. The additional information most commonly used
is what is referred to as an initial condition, which is simply a statement that at
time t = 0, Yt takes on the speciﬁc, known value Y0 . The initial condition does
not actually have to refer to t = 0, all we actually need is to know the value of Y
at one speciﬁc value of t, but t = 0 is the most commonly used value.
   Assume, then, that we know that at time t = 0, Y takes on the speciﬁc value Y0 .
Since Equation (2.8) determines the value of Yt for each value of t, we have, from
Equation (2.8) Y0 = A, since α 0 = 1. Then since we know the speciﬁc numerical
value represented by Y0 , we can use that knowledge to determine Yt for t = 0.
Plugging Y0 into Equation (2.8) in place of A gives the complete expression for
the solution to the difference Equation (2.3):
    Yt = Y0 α t                                                                 (2.9)
which is, happily, precisely the same as the solution we established in
Equation (2.4), established through backwards substitution.
8   First-order difference equations
   In establishing that a difference equation of the form Yt = αYt−1 has a solution of
the form Yt = Aλt where λ turns out to equal α and A to equal Y0 , we may appear to
have been reinventing the wheel, since we had already established the solution Yt =
Y0 α t as the function giving the value of Y at any time t. There is a purpose to the
formal derivation, though, since the solutions to more complicated equations will
be extensions of the basic form Yt = Aλt , and establishing that starting from this
form yields the solution we had already found from direct substitution should give
us conﬁdence about the applicability of this approach to more complicated cases.

Dynamic properties
Before turning to those more complicated cases, however, let us return to the
material discussed above and explore the dynamic path of Yt . In the general homo-
geneous equation Yt = Aλt , where λ is what we refer to as the root (or characteristic
root) of the difference equation, the behaviour of Y over time depends crucially
on the value of λ. In what follows we will assume that A is not equal to zero, since
if A is equal to zero, then Yt will always equal zero, regardless of the value of t.
   We turn now to the role of the characteristic root, λ:

•   when λ is a positive fraction, and when the value of A is not itself equal to zero,
    then as time passes the value of Yt will converge on zero; see Figure 2.1(a);
•   when λ is a positive number greater than 1, as time passes, Yt will tend
    to inﬁnity, plus or minus as A is positive or negative; see Figure 2.1(b).
    Figure 2.1(a) and (b) shows that the sign of Yt depends on the sign of A and
    we refer to the time path of Y as monotonic, since it converges on, or diverges
    from, zero in a smooth manner;
•   when λ equals 1, then Yt = A for all values of t regardless of the value of A,
    see Figure 2.1(c). This is the case of a unit root, which used to be regarded
    as a rather pathological borderline case, but which has recently, as a result of
    developments in unit root econometrics, become very important in empirical
    applications of dynamic modelling. We shall discuss this case in detail in a
    later chapter;
•   when λ is a negative fraction, for example, if λ = −0.5, then λ2 = 0.25,
    λ3 = −0.125, λ4 = 0.0625, with the absolute value of λt tending to zero as
    time passes, but with the sign of λt alternating between positive and negative.
    In general, when λ is negative, we get behaviour that we refer to as being char-
    acterized by alternations. Figure 2.1(d) shows the case for a positive value of
    A; Y does converge on zero as time passes, but does not do so monotonically.
    Instead it jumps from above zero to below it to above it again and so on, at
    each jump getting closer to zero;
•   when λ is a negative number less than −1, the path of Y alternates and diverges
    from zero. Consider the case where λ = −2. Then λ2 = 4, λ3 = −8, λ4 = 16
    and so on, with the absolute value of λt increasing steadily as time passes but
    with alternating signs. In the case shown in Figure 2.1(e) below, with A greater
    than zero, Y diverges from zero as time passes, again jumping from above to
    below and back, this time getting further from zero with each jump.
                                                     First-order difference equations   9


     (a)    Yt                             (b)   Yt
           A



                                                 A
                                       t                                        t
                                                 A



           A


     (c)    Yt                             (d) Yt
                                              A

           A

                                       t                                        t

           A




     (e)    Yt




           A
                                       t




    Figure 2.1 Time paths for different values of the characteristic root, λ.



   It is tempting to think that alternating behaviour like that shown in Figure 2.1(d)
and (e) gives us a mathematical representation of the business cycle, since alterna-
tions look very much like cyclical behaviour. While the business cycle does involve
income, for example, rising above and then falling below its equilibrium value, this
will generally be a gradual process, with income spending several periods above
and then several periods below its equilibrium value. Alternating behaviour, of the
sort generated when λ is negative, requires the value of Y to jump from above to
below equilibrium from one period to the next, and then one period later to jump
back above again, with an abruptness which is generally not a characteristic of
10   First-order difference equations
the business cycle. In fact, as it turns out, very few economic models legitimately
yield negative roots and alternating behaviour,2 and they tend to be very simpliﬁed
models. In general, in economic applications, the most likely explanation for a
negative root is that it is a mathematical artefact.
   In most cases, especially in empirical applications of dynamic models, if we
ﬁnd a negative root our best strategy is to go back and reconsider the structure
of the model. There are difference equation models which yield genuine cyclical
behaviour, but those require difference equations of order higher than the ﬁrst. We
shall see examples of these equations later.

Non-homogeneous equations
Next, consider the non-homogeneous equation:

     Yt = αYt−1 + g                                                               (2.10)

where g is ﬁrst treated as a constant, and later generalized to cases where it is
non-constant. Solving this equation is a two-step procedure.
   The ﬁrst thing we do is solve for what is known as the particular solution to
Equation (2.10). Following that, we will ﬁnd the solution to the homogeneous
part of Equation (2.10), and then we will simply add the two parts together to
give the general solution to Equation (2.10). In economic applications, the partic-
ular solution is simply what we refer to as the equilibrium of the (one equation)
system (2.10).
   In dynamic analysis an equilibrium of a difference equation is deﬁned as having
the property that, if the system is actually at that point there is no tendency for it to
move away from it, regardless of the value of t. If Yt is at its equilibrium value, it
will stay at that value. Note that this says nothing about what happens to the value
of Y if it is not equal to the equilibrium value, and in particular tells us nothing
about whether Y will tend to converge on, or diverge from its equilibrium value
as time passes. The behaviour of the actual value of Y over time, when Y is not
initially at its equilibrium value, depends on the stability of the equilibrium. If the
actual value of Y tends to converge on the equilibrium value as time passes, we
say that the equilibrium is stable, while if the actual value of Y tends to diverge
from the equilibrium value as time passes, we say the equilibrium is unstable.3 In
our discussion of the dynamic behaviour of homogeneous equations, zero was the
equilibrium of all of the cases.
   In general, the mathematical form of the equilibrium, or particular, solution
to a difference equation will be determined by the mathematical form of the ‘g’
term on the right-hand side of Equation (2.10). When g is a constant, the partic-
ular solution will, in general, also be a constant. When g is a function of other,
exogenous variables (meaning whose values are determined outside the system
we are presently analysing) the particular solution will also be a function of those
variables. We will see later a case in which g is itself a function of time, making
the particular solution to Equation (2.10) a function of time.
                                              First-order difference equations    11
g is a known constant
First, though, consider the case where g is a known constant. We noted above
that, in dynamic economic applications, when we talk about an equilibrium
value we mean a value which the system will tend to stay at, should it be reached.4
If the system stays at that value as time passes, clearly the value of Y will not
change over time, meaning that at equilibrium, Yt = Yt−1 = Y ∗ for all values
of t, where Y ∗ denotes the equilibrium value of Y . From Equation (2.10) above
we derive the equilibrium value Y ∗ as:
            g
    Y∗ =                                                                      (2.11)
           1−α
which turns out to be a constant whose value depends on, but is not equal to, the
value of g. Note that when g equals 0, Y ∗ also equals 0, which supports our claim
that, in the examples of homogeneous equations which was looked at above, zero
was the equilibrium value of Y in each of the cases.
   Digressing a little here, sometimes it will happen that this method fails because
(1 − α) = 0 or α = 1. In this case, the usual procedure5 is to try as the form of
Y ∗ a function which is of the same form as g but multiplied by t. In this case, that
means trying a constant, say G, multiplied by t. Since the form we are trying for
our particular solution, Gt, depends on t, we will denote the particular solution
of Y by Yt∗ . Then, since we are trying as a solution form Yt∗ = Gt (and hence
  ∗ = G(t − 1)), we substitute this form into Equation (2.10), and rearrange as:
Yt−1
    Gt (1 − α) + αG = g                                                       (2.12)
Because α = 1, this becomes G = g, giving, as our solution form:
    Yt∗ = gt                                                                  (2.13)
In general, in the theoretical sections that follow, we shall be dealing with cases
where α is not equal to 1, but it is worth noting that the next step after ﬁnding
that the natural ﬁrst functional form which was being tried as a possible particular
solution form has failed is generally to try the same, general form multiplied by t.
   Returning to the case where α is not equal to 1, we have found as our particular,
or equilibrium, solution, Y ∗ = g/(1 − α). Note that we have omitted the time
subscript from Y ∗ to emphasize that, in this case, where g is a constant and α is
not equal to 1, the equilibrium value of Y does not change over time. The next thing
we need to do is ﬁnd the solution to the homogeneous part of Equation (2.10).
   The homogeneous part of a difference equation like (2.10) is simply the
homogeneous difference equation which is left when we drop the ‘g’ term, namely
Yt = αYt−1 . We have already solved a form identical to this, in our discussion of
homogeneous difference equations, so we can write:
    Yth = Aλt = Aα t                                                          (2.14)
where we have written the ‘h’ superscript on Yt to indicate that it is the solution
to the homogeneous part of a non-homogeneous difference equation. Note that
12   First-order difference equations
we have not replaced A by a speciﬁc value in Equation (2.14): when we are
solving a non-homogeneous difference equation, that is the ﬁnal step in the
process.
   Before reaching that step, we need to combine the particular solution with the
solution to the homogeneous part to give us the form of the general solution to the
difference equation:
     Yt = Yth + Yt∗                                                                (2.15)
   Note that we have added a ‘t’ subscript to the equilibrium term, to allow for
the possibility that the equilibrium value depends on time. Obviously a con-
stant equilibrium value is a special case of a time-dependent one. In the case
of Equation (2.10), combining solutions gives:
                                    
                                  g
     Yt = Yth + Y ∗ = Aα t +                                               (2.16)
                                1−α
   As our ﬁnal step, we solve for the undetermined constant A, again using one
initial condition, which tells us that at t = 0, Yt is equal to a precise, known
numerical value Y0 . Substituting t = 0 into Equation (2.16), noting that α 0 = 1,
and rearranging gives:
                      
                    g
     A = Y0 −                                                                (2.17)
                  1−α
   We get an insight into what this expression for A means if we note that we can
also write it as A = Y0 − Y ∗ . Since Y0 is the actual initial value of Y , and Y ∗ is its
(constant) equilibrium value, this tells us that A is just the initial deviation of the
actual from the equilibrium value of Y , or the amount of the initial disequilibrium.
This also tells us why we have to leave solving for A to one of the last steps in
the process – we can not ﬁnd the initial disequilibrium until we have both the
expression for the equilibrium and the initial value of Y . Hence, substituting for
A in Equation (2.16), yields the general solution of our difference equation as:
                                   
                                g
     Yt = (Y0 − Y ∗ )α t +                                                        (2.18)
                             1−α

Role of the adjustment coefﬁcient
We can use the general solution to our difference equation to clarify the role of the
α term. Rewriting Equation (2.18) as:
     Yt = (Y0 − Y ∗ )α t + Y ∗                                                     (2.19)
consider the case where t = 1, that is, where one period has elapsed since our
initial period. In that case, using Equation (2.19), we obtain an expression for α as:
          Y1 − Y ∗
     α=                                                                            (2.20)
          Y0 − Y ∗
                                              First-order difference equations     13
where (Y1 − Y ∗ ) is the amount of the initial gap (Y0 − Y ∗ ) which remains to
be closed after one period, so that α is the proportion of the original gap which
remains to be closed. Alternatively, we could rearrange Equation (2.20) as:
                Y0 − Y1
    (1 − α) =                                                                  (2.21)
                Y0 − Y ∗
so that (1−α) shows the proportion of the original gap which has been closed after
one period. Thus, if α = 0.6, then after the ﬁrst period of the dynamic adjustment
process has passed, 40% of the original gap has been closed while 60% of the
original gap remains to be closed.
   In general, writing Equation (2.19) at time t − 1, and comparing it to
Equation (2.19 ) at time t shows that α can also be written as:
           Yt − Y ∗
    α=                                                                         (2.22)
          Yt−1 − Y ∗
and hence α can also be interpreted as the ratio of the gaps remaining in periods t
and t − 1. From Equation (2.22), α tells us that the gap from the equilibrium which
remains in period t is α times the gap which remained in period t − 1. If α is a
fraction, so the equilibrium is stable, the gap remaining in period t is smaller than
that which remained in t − 1, while if α is greater than 1, so that the equilibrium
is unstable and Y is moving consistently away from its equilibrium value, the gap
remaining in period t is bigger than that which existed in period 1.
   Finally, we can show that:
                Yt−1 − Yt
    (1 − α) =                                                                  (2.23)
                Yt−1 − Y ∗
so that (1 − α) shows the proportion of the remaining t − 1 gap which had been
closed after period t. For example, for purposes of exposition, if we assume Y0
was originally greater than Y ∗ and also assume that α is a positive fraction, so that
Y ∗ is a stable equilibrium, then the value of Y will decrease over time towards Y ∗ ,
and Yt−1 will be greater than Yt .

Case where g is a function of t
We have referred above to the case where g is a function of t as making the
equilibrium value a function of time, Yt∗ . One simple example of this type of
problem arises in growth models, when g is an exponential function of time,
gt = Gδ t , giving as our difference equation:

    Yt = αYt−1 + Gδ t                                                          (2.24)

In this case, the process of solving the homogeneous part of the equation proceeds
exactly as before because, even though time appears in the Gδ t term, the homoge-
neous part of the equation involves only terms in Y . The difference comes when
we try to ﬁnd a particular solution to Equation (2.24).
14   First-order difference equations
   Again, we proceed by writing a trial solution expression which is of the same
mathematical form as g. In this case, we write this as Yt∗ = Bδ t , and we pro-
ceed by trying to ﬁnd an expressions for B which will make this expression ﬁt
Equation (2.24). Note that δ appears in both the g function and in our trial expres-
sion for the particular solution. This means that we are assuming that the factor
which determines the time path of g also determines that of Yt∗ . Replacing Y by
                                               ∗ = Bδ t−1 and replacing the Y ∗
Y ∗ in Equation (2.24), and then noting that Yt−1
terms by their trial counterparts, we have:

     Bδ t − αBδ t−1 = Gδ t                                                      (2.25)

which, after dividing through by δ t−1 and rearranging gives:

           Gδ
     B=                                                                         (2.26)
          δ−α
and the time-varying equilibrium Y at time t as:
                 
              Gδ
    Yt∗ =           δt                                                          (2.27)
             δ−α

Note that the initial equilibrium value of Y , Y0∗ = [Gδ/(δ − α)]. Obviously this
method will fail if δ = α, in which case we multiply our ﬁrst trial solution form
by t and try again.
  Assuming then that δ = α, the general solution to Equation (2.24) is:
                          
                      Gδ
     Yt = Aα t +             δt                                             (2.28)
                    δ−α

Again invoking the initial condition, Y = Y0 when t = 0, we have:
                      
                 Gδ
   Y0 = A +                                                                     (2.29)
                δ−α

Note that this gives A = (Y0 − Y0∗ ) so the general solution to Equation (2.24) is:
                                      
                                  Gδ
     Yt = (Y0 − Y0∗ )α t +                 δt                                   (2.30)
                                 δ−α

   The stability of the equilibrium is, as in the case where g was a constant, depen-
dent on the value of α: when α is a positive fraction, the equilibrium is stable and
the approach trajectory monotonic. As in the earlier case, Equation (2.30) says
that, in determining the time path of Y, the deviation of the actual value of Y from
its equilibrium value equals the initial disequilibrium, multiplied by α t . If α is a
positive fraction, then as t goes to inﬁnity, the effect of that initial disequilibrium
term vanishes and Y converges on its equilibrium value. The fact that the value of
the equilibrium is itself moving makes no difference to the dynamic adjustment
                                             First-order difference equations    15
story – all that happens is that instead of converging on an unchanging equilibrium
value, in this case Y converges on a moving target.
   We can also manipulate Equation (2.30) to obtain another perspective on the
dynamic process. First write Equation (2.30) in terms of the time-dependent
equilibrium, Yt∗ :

    Yt = (Y0 − Y0∗ )α t + Yt∗                                                (2.31)

Then subtracting Equation (2.31) at time t −1 from Equation (2.31) at time t gives:

    Yt = (Y0 − Y0∗ )α t−1 (α − 1) + Yt∗                                    (2.32)

which can also be written as:
                    ∗
    Yt = (Yt−1 − Yt−1 )(α − 1) + Yt∗                                       (2.33)

Equation (2.33) shows us that the change in the value of Y between periods t − 1
and t depends on the amount of the disequilibrium in period t − 1 and also on the
change in the location of the equilibrium between the two periods.

Phase diagrams

Diagrammatic representation of linear, FODE
When we were deriving the stability conditions for ﬁrst-order linear difference
equations, we illustrated our results with graphs which plotted the value of Yt on
the vertical axis and time on the horizontal. This type of diagram is very useful
in terms of showing the trajectory that Y will follow, especially for cases when
we have actual numerical values of coefﬁcients and explicit expressions for the
functions. Another useful graphical tool, at least in the case of FODE is a device
known as a phase diagram, which plots Yt against Yt−1 .6
   Consider the simple linear FODE:

    Yt = αYt−1 + g,      0<α<1                                               (2.34)

The equilibrium for this equation is Y ∗ = g/(1 − α), and because α is a positive
fraction, the equilibrium is stable. Our diagrammatic representation, then, should
show Y converging on Y ∗ as time passes.
   The phase diagram for Equation (2.34), shown in Figure 2.2(a), simply plots
Yt against Yt−1 , with the addition of one extra line. Equation (2.34) is plotted as
a straight line with vertical intercept g and slope α. In addition, we have drawn
a 45◦ line, deﬁned as a line along which Yt = Yt−1 or, more formally, locus of
points satisfying the expression Yt = Yt−1 .
   Equation (2.34) above deﬁnes the relation between Yt and Yt−1 for all values
of t. In terms of the phase diagram, this means that each observed (Yt , Yt−1 )
pair must lie on the graph of Equation (2.34). Points off the line represent-
ing Equation (2.34) are (Yt , Yt−1 ) pairs which by deﬁnition do not satisfy
16     First-order difference equations


(a)                                             (b)               Yt = Yt–1 – g
      Yt                                              Yt
                              45°                                          45°

                              Yt = Yt –1 + g




                                       Yt –1                                        Yt–1




(c) Yt                        45°
                                                (d) Yt                      45°




                              Yt = Yt –1 + g
                                                                        Yt = Yt–1 – g
                                       Yt –1                                         Yt–1




Figure 2.2 Phase diagrams for FODEs.



Equation (2.34), which means that the system cannot actually be at any of them.
The graph of Equation (2.34) basically narrows down the set of points which we
observe from all of the points in the diagram to just those satisfying Equation (2.34).
   The 45◦ line is on the diagram because it enables us to ﬁnd the equilibrium
point for the system. So long as the g term in Equation (2.34) is a constant, the
equilibrium value of Y will be a constant (since α = 1), which means that, once we
have reached the equilibrium value of Y, Yt = Yt−1 = Y ∗ for all future values of t.
This means that, for the case where the equilibrium is a constant, the equilibrium
value will lie somewhere on the 45◦ line.
   The equilibrium value of the system, being the particular solution to
Equation (2.34), must lie along the line showing which graphs Equation (2.34).
Being a constant, it must also lie along the 45◦ line. This means that the equili-
brium point for the system (2.34) must be a point of intersection between the line
that graphs Equation (2.34) and the 45◦ line. In other words, it is the solution to
the two-equation system:
                                               First-order difference equations      17



    Yt = αYt−1 + g                                                               (2.35)

    Yt = Yt−1                                                                    (2.36)

Solving this pair of equations formally will yield Y ∗ = g/(1 − α).
   The phase diagram does more, however, than simply show us the equilibrium
value. It also lets us plot the system’s approach to its equilibrium (assuming, of
course, that the equilibrium is stable). To see this, suppose that our initial value
Y0 = 0. Then in period 1, t = 1 and t − 1 = 0, so we can ﬁnd Y1 from
Equation (2.34), that is, we get Y1 = g. On the diagram, this lets us ﬁnd our ﬁrst
(Yt , Yt−1 ) pair, (Y1 , Y0 ) = (g, 0). This point is just the vertical intercept of the
graph of Equation (2.34). We shall refer to this graph in general terms as the graph
of the Yt (Yt−1 ) function, since it shows the value of Yt as a function of the value
of Yt−1 .
   To ﬁnd our next point, note that after one more period has passed, Y1 , which was
Yt , has become Yt−1 . We make this point to emphasize the fact that the subscript ‘t’
refers to the present time, whatever the value of t happens to be, and the subscript
t − 1 refers to one period ago, relative to t. Thus, once one more period has passed,
t = 2 and the value Y took on in period 1 is now the value of Yt−1 . In order to ﬁnd
the value of Y2 , we need to ﬁnd the point on the Yt−1 axis which equals the value
of Y1 , then, using that as Yt−1 we can read the value of Y2 as the vertical coordinate
of the point on the Yt (Yt−1 ) function which lies directly above Yt−1 = Y1 .
   There is, as it turns out, a simple way of doing this. What we want to ﬁnd is a
point on the horizontal axis whose value is equal to that of a point which we have
already found on the vertical axis. Since the horizontal axis is the Yt−1 axis and
the vertical axis is the Yt axis, we are looking for a point where Yt−1 = Yt , when
we already know the value of Yt .
   It is sometimes easier to see this if we forget, for the moment, that t refers
to time, which always moves from t − 1 to t, and simply think of t and t − 1
as subscripts identifying variables, in which case going from the value of Yt to
the value of Yt−1 presents no conceptual problems. Or simply note that since one
period has passed, what was Yt is now Yt−1 , so its value needs to be shown on the
horizontal, rather than the vertical axis. Regardless of how we think of the process,
though, we can ﬁnd Y2 given the value of Y1 by mapping over from the value of
Y1 on the vertical axis to the 45◦ line, then, using that point to identify the new
Yt−1 , go vertically up to the Yt (Yt−1 ) function to ﬁnd Y2 .
   On the phase diagram, to reduce clutter, this is typically shown as if the system
were bouncing between the Yt (Yt−1 ) function and the 45◦ line, but in fact the
system is always on the Yt (Yt−1 ) function – the mapping over to the 45◦ line is
just there to help us ﬁnd the next point on the Yt (Yt−1 ) function. In other words,
we do not actually move along the steps shown on the diagram, but pass, between
one period and the next, between the points where the corners of the steps touch
the Yt (Yt−1 ) function.
18   First-order difference equations
   Following this path along the Yt (Yt−1 ) function, we can see that the system is
converging on the point of intersection between that function and the 45◦ line,
which point we have already identiﬁed as the equilibrium of the system. We can
also see that if instead of taking an initial value of Y equal to 0 we had picked
some initial value above Y ∗ and followed the same procedure to ﬁnd our next
points – mapping horizontally across from the Yt (Yt−1 ) function to the 45◦ line –
that we would wind up moving down along the Yt (Yt−1 ) function towards the
equilibrium point. No matter where we picked our initial value of Y, over time
we would move towards the equilibrium value. This is consistent with our having
identiﬁed the intersection of the two lines on the diagram as a stable equilibrium
point.
   The phase diagram also illustrates that we cannot overshoot the equilibrium –
if we started at an initial value of Y below the equilibrium value and tried to
step to the right of Y ∗ , the mapping process we have just described would
move us back to the equilibrium. Since this would apply to any step we took
to the right of Y ∗ , regardless of how small a step it was, we conclude that we
cannot pass from points to the left of Y ∗ to points to the right of that value.
This means that we cannot overshoot the equilibrium, and since overshooting
is the essence of cyclical behaviour, as we shall show when we discuss second
order difference equations (SODE), it means that FODE cannot display cyclical
behaviour. (They can, of course, display alternations, but we shall return to this
point later.)
   One further point before we move on to another case; the diagram suggests that
each successive step which we take along the Yt (Yt−1 ) function will be smaller
than the previous step, and this is in fact true. Strictly speaking, we converge on
Y ∗ but never actually reach it in ﬁnite time, since in the expression:

     Yt = (Y0 − Y ∗ )λt + Y ∗                                                 (2.37)

for Yt to equal Y ∗ , we must have:

     (Y0 − Y ∗ )λt = 0                                                        (2.38)

  Since Y0 and Y ∗ are constants, and equal to each other only by accident (Y0 −Y ∗ )
will in general not equal zero, so for Equation (2.38) to be satisﬁed it must be the
case that:

     λt = 0                                                                   (2.39)

which, with λ a positive fraction but not equal to zero, requires t = ∞. So strictly
speaking it takes an inﬁnite amount of time for us to reach the equilibrium, but
we can come so close to it in ﬁnite time that for practical purposes we are at the
equilibrium point. We shall, therefore, continue to refer to the system as having
reached the equilibrium when in fact it is arbitrarily close to it and still moving
towards it, but closing a gap which is unobservably small by taking steps which
                                               First-order difference equations      19
are themselves unobservably small. We shall now consider the phase diagrams for
different values of α.

Positive adjustment coefﬁcient
Figure 2.2(a) shows the case of a stable equilibrium, because we assumed that
α was a positive fraction. In Figure 2.2(b) we show the case where α > 1, and
the equilibrium is unstable. We have also assumed, in Figure 2.2(b), that the
vertical intercept of the Yt (Yt−1 ) function is negative, so that, using the convention
of treating parameters like g as positive and making them negative by putting
negative signs in front of them, our equation is:

    Yt = αYt−1 − g,       α>1                                                    (2.40)

This assumption will give us a positive equilibrium value for Y . We ﬁnd the
equilibrium of the system, as before, at the intersection of the Yt (Yt−1 ) function
and the 45◦ line. Its value will be:
                      
                  g
    Y∗ = −                                                                    (2.41)
               1−α

which, because we have assumed that α > 1, will be positive. The general solution
to Equation (2.40) will be:
                               
                             g
    Yt = (Y0 − Y ∗ )α t −                                                  (2.42)
                            1−α

and because α is greater than 1, the equilibrium will be unstable.
   In terms of Figure 2.2(b), suppose that we pick an initial value of Y just below,
but not equal to, the equilibrium value of Y . Finding this Y0 value on the horizontal
axis, we map vertically up to the Yt (Yt−1 ) function to ﬁnd Y1 . Note that this time
our initial point on the Yt (Yt−1 ) function lies below the 45◦ line; in Figure 2.2(a)
the ﬁrst point that we found on the Yt (Yt−1 ) function, starting from an initial value
of Y below the equilibrium value, was above the 45◦ line. Next, as before, in order
to ﬁnd the next value of Yt−1 we map horizontally across to the 45◦ line. This
requires us to move to the left from our initial point on the Yt (Yt−1 ) function, since
if we were to move horizontally to the right from our initial point we would never
intersect the 45◦ line.
   This in fact gives us a general rule of thumb for analysing more complicated
phase diagrams. Our initial point must always be on the Yt (Yt−1 ) function directly
above our Y0 value, even if the 45◦ line lies below the Yt (Yt−1 ) function at that
point, and in mapping from the Yt (Yt−1 ) function to the 45◦ line we must always
be moving horizontally. Following these rules of thumb in Figure 2.2(b) results in
our moving steadily away from Y ∗ , in steps which get successively larger. This
applies whether our initial value is above or below Y ∗ , and reﬂects the fact that
the equilibrium is unstable.
20   First-order difference equations
Negative adjustment coefﬁcient
Next, consider the cases shown in Figure 2.2(c) and (d). Here, our difference
equation is:

     Yt = −αYt−1 + g                                                            (2.43)

where the negative sign in front of the αYt−1 term means that the root of the system
will be −α, which is negative. This in turn means that in these phase diagrams the
Yt (Yt−1 ) function will be negatively sloped. In Figure 2.2(c) we have assumed that
−α is a negative fraction, so the equilibrium will be stable, and in Figure 2.2(d)
−α is bigger than 1 in absolute value, so the equilibrium will be unstable.
   Picking, in Figure 2.2(c), an initial value of Y equal to zero, our ﬁrst point will
be at g, the vertical intercept of the Yt (Yt−1 ) function, which in Equation (2.43)
we have assumed is positive. Following the mapping rule set out above, we move
horizontally across to the 45◦ line, which in this case takes us to a point to the
right of the equilibrium, and then map vertically down to the Yt (Yt−1 ) function to
ﬁnd our next value of Y . Mapping horizontally across to the 45◦ line again and
then vertically up to the Yt (Yt−1 ) function gives us our third Y value, which is
again below the equilibrium value of Y . This illustrates the alternating behaviour
which we showed earlier came out of the Equation (2.37) when the root λ, was
negative. Again it is important to remember that despite the mapping procedure
we are using, the system actually always lies on the Yt (Yt−1 ) function, so that
when we are looking at actual data we observe only the successive points which
we have found on that function.
   In Figure 2.2(d) we have assumed that the root is negative and greater than 1 in
absolute value – this means that the equilibrium is unstable and that the system’s
alternations cause it to jump to points which are further and further away from
the equilibrium point. Finally, note that there exists a borderline case between
those shown in Figure 2.2(c) and (d): when the slope of the Yt (Yt−1 ) function is
exactly equal to −1, we still get alternating behaviour but now the successive jumps
are exactly equal in magnitude, so we neither converge on, nor diverge from, the
equilibrium. This is the negative root counterpart of a limit cycle, which is a concept
we shall encounter when we discuss higher order difference equations. While it
looks interesting, remember that negative roots are rare in economic models, and
the chances of a root being exactly equal to −1 are even smaller, so in practice it
is unlikely to be an important case. As we shall see in Chapter 7, though, the case
of a root equal to 1, a unit root, does turn out to be of considerable importance in
empirical applications of economic dynamics.

Examples of FODE models

The Keynesian multiplier
Probably the simplest of dynamic models which can be represented using FODE
is the Keynesian multiplier, or Keynesian Cross, model. While this model is most
                                            First-order difference equations   21
commonly written in static terms, the process of adjustment from old to new
macroeconomic equilibrium after a shock is typically described in dynamic terms.
  The basic closed economy Keynesian Cross model is as follows:

    Y =C+I +G                                                              (2.44)
    C = C0 + cY,      0<c<1                                                (2.45)

Here, Y is aggregate income, I is aggregate investment, G is government spend-
ing and C is aggregate consumption. Investment and government spending are
autonomous in this basic version of the model. In the consumption function,
Equation (2.45), C0 is autonomous consumption and c is the marginal propen-
sity to consume. Equation (2.44) is the national income accounting identity and
also the Keynesian equilibrium condition.
   The version of the model which we have written here is essentially static and
therefore has no time subscripts. Equation (2.44), the equilibrium condition, says
that the value of national income equals the value of aggregate expenditure, which
is the sum of consumption, investment and government expenditure.
   Substituting Equation (2.45) into (2.44) gives:

    Y = C0 + cY + I + G                                                    (2.46)

from which we have:
               
     ∗       1
    Y =           (C0 + I + G)                                             (2.47)
           1−c

where 1/(1 − c) is the simple Keynesian multiplier. This model tells us that a
change in an autonomous component (e.g. a change, G, in government spending)
translates into a change in equilibrium income Y ∗ , with the magnitude of the
change in equilibrium income dependent on the size of the multiplier: Y ∗ =
(1/(1 − c))G.
   While the static model implies that actual income jumps instantaneously to the
new equilibrium level (or, equivalently, that the macroeconomy is always in equi-
librium) the analysis usually told in introductory economics texts to explain the
adjustment process usually involves steps, with equilibrium income responding
immediately to a change in government spending and actual income adjust-
ing over several periods to the new equilibrium level. To represent this process
mathematically it is necessary to put some adjustment lags into the model.

Lagged consumption
The simplest approach to putting a dynamic element into the Keynesian model
has consumption adjusting to income with a one period lag, perhaps because
it generally takes consumers some time to adjust their consumption patterns
in response to changes in income.7 Adding the appropriate time subscripts
22   First-order difference equations
gives us:

     Yt = Ct + I + G                                                           (2.48)
     Ct = C0 + cYt−1                                                           (2.49)

where there is no time subscript on autonomous consumption, nor on I and G,
because they do not change with time in this model.
   Substituting Equation (2.49) into (2.48) as before, and rearranging the terms,
gives:

     Yt = cYt−1 + I + G + C0                                                   (2.50)

which is clearly a ﬁrst-order, linear difference equation with the sum of the
autonomous elements, (I + G + C0 ) as the ‘g’ term. Note that the g term is
‘constant’, in the sense that the values of its component elements, while they
might be endogenous to some other models, are exogenous to this one. The term
constant here does not mean never changing, but means rather that changes in the
value of the term are driven by factors strictly external to this model. Later we will
complicate the model by making investment endogenous.
  Treating g as constant, then, we ﬁnd the equilibrium solution to Equation (2.50)
by setting Yt = Yt−1 = Y ∗ , giving the equilibrium, or particular solution as:
                   
                 1
     Y∗ =             (I + G + C0 )                                            (2.51)
                1−c

which is exactly the same as the expression for equilibrium income in the static
model.
   Turning now to the dynamics of the model, the homogeneous part of
Equation (2.50) is Yt − cYt−1 = 0, and on the assumption that the solution to
the homogeneous part will be of the form Yt = Aλt this gives:

     Aλt−1 (λ − c) = 0                                                         (2.52)

  The characteristic equation of (2.50) is (λ − c) = 0, with characteristic root
λ = c. This gives, as the solution to the homogeneous form of Equation (2.50):

     Yth = Act                                                                 (2.53)

Note that we really did not have to go through the process of deriving the charac-
teristic equation: its form is obvious from Equation (2.50). This will generally be
the case with linear difference equations, as will become particularly clear when
we begin to deal with higher order difference equations.
                                               First-order difference equations     23
  Combining the two parts into the general solution gives:
    Yt = Act + Y ∗                                                              (2.54)
and invoking the usual initial condition for Y0 , gives A = Y0 − Y ∗ , which then
yields the dynamic form:
                                
                              1
     Yt = (Y0 − Y ∗ )ct +          (I + G + C0 )                           (2.55)
                            1−c
   We noted above that the equilibrium for this version of the dynamic problem is
the same as the equilibrium for the static problem. The stability of that equilibrium
depends on the value of c, the root of the equation. On the usual Keynesian
assumption, that c is a positive fraction, the equilibrium will be stable, and the
system will approach equilibrium at a rate which depends on the value of c: as we
noted earlier the root of a FODE shows the proportion of the initial disequilibrium
which remains to be closed after one period has passed.
   In the analysis of an equation like (2.55) we usually assume that the system
was initially in equilibrium, so that our initial value, Y0 , was actually the original
equilibrium value of income. The system is then shocked, perhaps by an increase
in government spending, which causes the equilibrium to move to a new value as
shown by Equation (2.51). The actual level of income then responds to the increase
in equilibrium, rising towards it as time passes. Because this is a FODE model,
it cannot display true cyclical behaviour, but shocks to G and I can still translate
into fairly elaborate time paths of income.

Lagged income
An alternative approach to making the Keynesian model dynamic would be to
make the adjustment of income itself explicitly dynamic. The Keynesian Cross
model is demand-driven, with supply responding to changes in demand – one way
of putting dynamics into the model is to make supply respond with a lag. In this
model, of course, aggregate supply is the same as aggregate income, so we shall
put the dynamics into the behaviour of Y .
   In this version of the model, we replace the national income identity (2.44), with
an expression for aggregate demand, Dt :
    Dt = Ct + I + G                                                             (2.56)
To keep the model very simple, we shall remove the dynamic element from
consumption, making current consumption depend on current income:
    Ct = C0 + cYt                                                               (2.57)
but we shall introduce dynamics via the response of income to changes in demand:
    Yt − Yt−1 = δ(Dt − Yt−1 ),       0<δ<1                                      (2.58)
where δ is a speed of adjustment term. This equation says that the change in
income between period t − 1 and period t is some fraction of the excess of demand
24     First-order difference equations
in period t over income in period t − 1. Note that we have written the dynamic
element (2.58), in difference form; we have done this because this is the way this
sort of adjustment process is typically represented.
   Substituting for Dt in Equation (2.58) and rearranging into the form of a FODE:
                                    
             1−δ                  δ
     Yt =             Yt−1 +             (I + G + C0 )                        (2.59)
             1 − δc             1 − δc
A little manipulation reveals that the equilibrium, or particular solution of the ﬁrst
order linear difference Equation (2.59) is:
                   
                1
     Y∗ =             (I + G + C0 )                                             (2.60)
             1−c
exactly as was the case with the previous two versions of this model. Changing the
adjustment dynamics of a model will in general not change its equilibrium, just
the way it approaches that equilibrium.
   The characteristic root of Equation (2.59) will obviously be:
                  
            1−δ
    λ=                                                                      (2.61)
            1 − δc
so while the equilibrium will be the same in the two models, the adjustment speeds
will differ unless it happens that (assuming c has the same value in both models)
δ = (1 − c)/(1 − c2 ).

Lagged consumption and income
There are, of course, other ways of making the Keynesian Cross model dynamic.
We could introduce marginal propensity to invest, and assume that investment
responds to income with a one period lag: It = I0 + θYt−1 . Alternatively, we
could combine the two models we have just been looking at, so that we have:

              Dt = Ct + I + G                                                  (2.62)
              Ct = C0 + cYt−1                                                  (2.63)
       Yt − Yt−1 = δ(Dt − Yt−1 ),     0<δ<1                                    (2.64)

     In this case, with suitable substitutions our system can be reduced to:

       Yt = (1 − δ(1 − c))Yt−1 + δ(C0 + I + G)                                 (2.65)

which yields as its characteristic equation:

       λ − (1 − δ(1 − c)) = 0                                                  (2.66)

so the root of the system is λ = (1−δ(1−c)) which will be positive since (1−c) is
the marginal propensity to save, which is, on the usual assumptions of the model,
a fraction, and δ is the income adjustment speed coefﬁcient, also a fraction.
                                             First-order difference equations    25
  The equilibrium for this system is:
                
     ∗        1
   Y =             (I + G + C0 )                                             (2.67)
            1−c
so adding the extra bit of dynamics once again does not affect the location of the
equilibrium, just the process by which the system converges on equilibrium.
  It is worth noting that, in all of the Keynesian Cross cases we have been
considering, we ended up with a difference equation of the form:

    Yt = αYt−1 + γ (I + G + C0 )                                             (2.68)

where the α and γ terms have taken on different forms in different versions of the
model. This raises a point which will prove to be important in empirical applica-
tions of economic dynamics – the fact that the behaviour over time of an economic
series, such as gross domestic product (GDP), can be represented as a difference
equation does not tell us which of the possible alternative dynamic models for
that variable is actually driving it. Determining that requires careful economic and
econometric analysis.

A simple Phillips stabilization model
Keynesian Cross models are, of course, associated with ﬁscal policy, and one
obvious extension of the basic Keynesian Cross model involves incorporating a
ﬁscal policy rule into the model. In this section we consider a version of a model
developed by Phillips (1954) incorporating a proportional policy rule.
  We begin with the model of Equations (2.48) and (2.49) above but now we
modify the Gt term:

     Yt = Ct + It + Gt                                                       (2.69)
    Ct = C0 + cYt−1                                                          (2.70)
               p
    Gt = G0 + Gt                                                             (2.71)
          p
where Gt is the proportional ﬁscal policy component of government spending and
G0 is autonomous spending – spending which is essentially outside discretionary
control, or at the very least spending which cannot be adjusted easily for ﬁscal
policy purposes.
  The reason this is referred to as a proportional policy model lies in the
                   p
speciﬁcation of Gt itself:
      p
    Gt = γ (Y F − Yt−1 ),     γ >0                                           (2.72)

where Y F is full employment income and γ is an adjustment speed coefﬁcient.
Equation (2.72) says that this period’s discretionary government spending is
adjusted, for ﬁscal policy purposes, to be proportional to the gap between full
employment income (or some target based on beliefs about where full employment
26   First-order difference equations
income is) and last period’s actual income. If the economy was at full employment
last period, discretionary spending will equal zero, and if the economy was in an
inﬂationary gap situation last period, with actual income above the full employ-
ment level, discretionary spending will be negative, which in a more detailed model
would probably mean a combination of spending cuts and tax increases.
   Combining these equations gives the difference equation for the model as:

     Yt = (c − γ )Yt−1 + (C0 + I + G0 + γ Y F )                               (2.73)

The homogeneous part of this equation is Yt − (c − γ )Yt−1 = 0, which gives the
characteristic equation:

     λ − (c − γ ) = 0                                                         (2.74)

and root λ = (c − γ ). Here λ will probably be less than 1 in absolute value,
but if γ is too large relative to the marginal propensity to consume, c, λ could be
negative and the system could display alternations. On usual values of c and γ ,
though, this is highly unlikely. It is much more likely that the system will converge
monotonically to equilibrium.
  Note that, writing the solution to the homogeneous part as:

     Yth = A(c − γ )t                                                         (2.75)

and comparing this with the solution to the homogeneous part of a model without
an explicit policy rule built in, Yth = Act , we note that the introduction of the
policy rule has reduced the magnitude of the root from c to (c − γ ).
   In this case, unlike others, the way we have introduced a new dynamic element
has altered the location of the equilibrium. In the present case the equilibrium of
the system is:
                        
                   1
     Y∗ =                  (C0 + I + G0 + γ Y F )                             (2.76)
              1−c+γ

so the introduction of the target aggregate income term, Y F , increases the value of
the equilibrium relative to the value it would have had there been no proportional
ﬁscal policy rule and had government spending been equal to G0 .
   Note also that the value of the Keynesian multiplier is reduced in this model
from 1/(1 − c) to 1/(1 − c + γ ), so that an exogenous increase in investment
has a smaller impact in a model in which the government follows a proportional
stabilization rule than it does in a model in which no such rule is followed. Of
course, this also means that an exogenous reduction in investment will have a
smaller downward effect on equilibrium income in the presence of an explicit
stabilization policy rule.8
   Note one more point about this model: the fact that we have introduced an
explicit full employment target in government spending has not reduced our
expression for equilibrium income to Y ∗ = Y F which would only occur if
                                             First-order difference equations    27
Y F = (C0 + I + G0 )/(1 − c); that is, if the equilibrium of the system would
have been at Y F anyway.
   We can also rewrite Equation (2.76) as:
                                         
                1−c                   γ
     Y∗ =                 YO +                YF                        (2.77)
             1−c+γ                1−c+γ
                  
                1
    Y =
      O
                     (C0 + I + G0 )                                     (2.78)
             1−c
where Y O is the value of the no-policy equilibrium.9 Since the terms multiplying
Y O and Y F on the right-hand side are fractions which sum to one, the equilibrium
in our policy model is a weighted average of the value that the equilibrium would
be if the government applied no stabilizing ﬁscal policy at all, Y O , and the full
employment level, Y F . This means that the introduction of the ﬁscal policy rule
does pull equilibrium above its no-action level, but is not sufﬁcient to pull it all
the way up to full employment.
   We will have to defer the question of whether Keynesian ﬁscal policy can ever
actually move the economy to full employment until we have discussed higher
order difference equations. Before leaving this very basic Phillips policy model,
though, note that in the version which we have been discussing, the current values
of both G and C depend on last period’s income.
   Suppose we modify the consumption function so that current consumption
depends on current income, writing Ct = C0 + cYt , but leave the ﬁscal policy
rule unchanged, dependent on last period’s income. The rationale would be that
consumers know what their current income is when they are making their spend-
ing decisions, but that it takes the government some time to calculate national
income, so it can only be known (actually, estimated, but we do not introduce that
complication here) after a lag.
   Our model now becomes:
     Yt = Ct + It + Gt                                                       (2.79)
    Ct = C0 + cYt                                                            (2.80)
               p
    Gt = G0 + Gt                                                             (2.81)
which gives a FODE of form:
    (1 − c)Yt = −γ Yt−1 + C0 + I + G0 + γ Y F                                (2.82)
from which we have, as a homogeneous part:
              
            γ
    Yt +         Yt−1 = 0                                                    (2.83)
           1−c
  The characteristic equation for this homogeneous difference equation is:
               
           γ
   λ+              =0                                                      (2.84)
          1−c
28   First-order difference equations
giving, as the root for the system λ = −γ /(1 − c) and, as its equilibrium:
                       
                  1
     Y∗ =                   (C0 + I + G0 + γ Y F )                            (2.85)
                1−c+γ

which is the same as the expression we had for equilibrium income in the previous
model, in Equation (2.76). The root of the system, however, is not only different
from the previous root, it is negative. We cannot even be as casually conﬁdent that,
on reasonable values of γ and c, the equilibrium will be stable; stability requires
γ < (1 − c), which would have to be checked empirically.
   By changing the lag structure on consumption, then, while we have not changed
the equilibrium value of the system, we have changed its dynamic behaviour from
monotonic to displaying alternations. The explanation for the difference is fairly
straightforward – in the ﬁrst Phillips model which we considered, introducing the
policy function did not add any new time structure to the problem, it just added
a couple of terms. The induced, or endogenous elements of current aggregate
expenditure, whether private consumption or government ﬁscal policy spending,
all depended on last period’s income.
   In the second version of the model there is a change in dynamic structure, in
that, while the induced part of this period’s government spending still depends on
last period’s income, the induced part of this period’s consumption expenditure
depends on this period’s income. The result is that, even in this simple model, the
dynamics becomes rather more complicated. Our usual caveat about being wary
of the validity of economic models with negative roots still applies, though, and
quite frankly, the really interesting macroeconomic dynamics are associated with
models which yield higher order difference equations, so at this point we shall turn
from elementary macroeconomics to elementary microeconomics and consider the
cobweb model of price behaviour.

The cobweb model
Having repeatedly warned against putting too much faith in models yielding neg-
ative roots, it seems appropriate that our ﬁrst microeconomic example should be
a model which really does, quite legitimately, yield negative roots.
   The cobweb model, or hog cycle model, as it is also known (in honour of the
commodity in whose market it was ﬁrst analysed) is a simple demand and supply
model with a one period response lag built in on the supply side.
   On the demand side we have:

      t = α0 − α1 Pt + α2 Yt
     QD                                                                       (2.86)

where QD t is quantity demanded in period t, Pt is price in period t and Yt is a
demand shift factor, typically income. We have written the demand function with
a negative sign in front of α1 , so α1 itself is positive.
                                              First-order difference equations   29
  On the supply side we have:
    QSt = β0 + β1 Pt−1 + β3 Zt                                               (2.87)
where QSt is quantity supplied in period t, Pt−1 is price in period t − 1, Zt is a
supply shift factor, and β1 is positive. Here quantity supplied today depends on
yesterday’s market price. While this can apply to any commodity with a signiﬁcant
lag between the beginning of the production process and the actual supplying of
output to the market, the most common examples are from agriculture, where
planting decisions are made on the basis of the price obtaining in the market at
the time planting needs to be undertaken, but harvest, and the actual supplying
of the output to market, occurs quite some time later. Note that we are assuming
that the entire quantity which is produced is supplied to the market; that is, that
there is no storage, and that none of the output is destroyed if the market price
turns out to be very low at the time when the output is actually brought to market.
   We complete the model with the standard equilibrium condition:

     t = Qt
    QD    S
                                                                             (2.88)
which means that, in each period, the current market price market adjusts to clear
the market. The fact that we are assuming that the market is in equilibrium in
each individual period does not mean that the equilibrium of the dynamic model
is guaranteed to be stable.
   Equation (2.88) is a short-run market clearing condition, giving us what is
sometimes referred to as a series of short-run equilibrium prices. The equilibrium
of the difference equation characterizing the system gives us what we refer to as
the long-run equilibrium price, and the key question so far as the dynamics of the
model are concerned is whether the short-run prices eventually converge to the
long-run equilibrium price.
   Substituting from Equations (2.86) and (2.87) into (2.88) gives:
    α0 − α1 Pt + α2 Yt = β0 + β1 Pt−1 + β3 Zt                                (2.89)
from which we derive a ﬁrst-order linear difference equation in price:
                                                
           α0 − β0        β1              β3          α2
    Pt =             −         Pt−1 −          Zt +        Yt                (2.90)
              α1          α1              α1          α1
The homogeneous part of Equation (2.90) can be written as:
          
          β1
    Pt +      Pt−1 = 0                                                       (2.91)
          α1
giving, as the characteristic equation for (2.90):
          
            β1
     λ+          =0                                                          (2.92)
            α1
with characteristic root λ = −(β1 /α1 ). Since both α1 and β1 are positive, the root
is negative.
30   First-order difference equations
  The equilibrium will be stable so long as −(β1 /α1 ), which is less than zero, is
greater than −1 (<1 in absolute value): a negative fraction. Thus, for stability we
need:

     1 > (β1 /α1 ) > 0                                                         (2.93)

which is satisﬁed when α1 > β1 which says that for the equilibrium to be stable,
the demand curve must be steeper than the supply curve. If we assume that all of
the variables in our model are in log form, stability requires that the demand curve
be more elastic than the supply curve.
  Turning to the particular solution to Equation (2.90), writing the difference
equation as:
                                                   
            β1              α0 − β0         β3            α2
     Pt +         Pt−1 =                −        Zt +          Yt             (2.94)
            α1                 α1           α1            α1
we see that all of the terms on the right-hand side are constants, in the sense that
their values are exogenously given, not determined within the model. This suggests
that the equilibrium price, P ∗ , will also be a constant. Setting Pt = Pt−1 = P ∗
and solving, we ﬁnd:
                                                    
              α0 − β0            β3                 α2
     P∗ =                −               Zt +               Yt               (2.95)
              α1 + β 1       α1 + β1             α1 + β1
   Since α0 + α2 Yt is the value of quantity demanded when Pt = 0, which is the
horizontal intercept of the demand curve in the usual demand and supply diagram,
and β0 +β3 Zt is the value of quantity supplied when Pt = 0, which is the horizontal
intercept of the supply curve, P ∗ will be positive. It is easily established that the
expression for P ∗ in Equation (2.95) is the same as the equilibrium price from
a static demand and supply model.
   We have established, then, that so long as α1 > β1 , the price which the cobweb
model eventually settles down to is the same as the static equilibrium price – that
is, that once again the value of the equilibrium is not affected by the introduction
of a dynamic element. The dynamic element does add something new to the model,
though. Beyond the possibility that the equilibrium might be unstable, and the
individual period market prices never converge on the long-run equilibrium value
is the fact that this is one of the few economic models in which the root of the
characteristic equation is negative. As we saw earlier, a negative root means that,
even if the equilibrium is stable, the price will be alternately above and below
its equilibrium value from period to period. If the long-run equilibrium is stable,
then when the short-run equilibrium prices eventually converge on the long-run
equilibrium price, price and quantity will settle down and stop jumping around.
   The examples we have considered here are probably the most commonly used
examples of FODE, primarily because they form the basis for a range of more
complicated models. Since the really interesting action begins when we get into
the analysis of theoretical models which involve higher order difference equations,
we now turn to such models.
3      Second-order difference equations




Introduction
We now turn to the analysis of linear, second-order difference equations (SODEs).
In economic applications, these second-order linear difference equation commonly
appear in the general form:

    Yt + β1 Yt−1 + β2 Yt−2 = g                                                 (3.1)

where the terms are basically as deﬁned in the chapter on ﬁrst-order equations.
   The solution procedure is also, in general terms, the same as for ﬁrst-order
equations. We begin by looking at the particular, or equilibrium solution to Equa-
tion (3.1). Again, we ﬁnd it by a process of trial and error, starting from the
assumption that the functional form of the equilibrium value of Y will be the same
as that of the right-hand-side term g, so, as before, if g is a constant we start by
trying a constant as the particular solution, Y ∗ .
   In the case of Equation (3.1), substituting Yt = Yt−1 = Yt−2 = Y ∗ and rear-
ranging terms gives:
                g
    Y∗ =                                                                       (3.2)
           1 + β1 + β2

As in the case of a ﬁrst-order equation, if (1 + β1 + β2 ) = 0, Equation (3.2) will
not work as a solution, and our next step is to see what happens if we try, as an
equilibrium form, a constant term G multiplied by time t:

    Yt∗ = Gt                                                                   (3.3)

Substituting into Equation (3.1) gives:

    Gt + β1 G(t − 1) + β2 G(t − 2) = g                                         (3.4)

from which, since (1 + β1 + β2 ) = 0, yields:
              −g
    G=                                                                         (3.5)
           β1 + 2β2
32   Second-order difference equations
This gives Yt∗ as:
               −gt
     Yt∗ =                                                                     (3.6)
             β1 + 2β2
   To check this procedure for ﬁnding the particular solution, use Equation (3.6) to
determine Y ∗ , with appropriate adjustments to the ‘t’ terms, then substitute them
into Equation (3.1) (for the case where g is a constant) to give:
                                                      
         −gt               −g(t − 1)            −g(t − 2)
                   + β1                + β2                  =g                (3.7)
       β1 + 2β2            β1 + 2β2             β1 + 2β2
Rearranging terms, and remembering that we are dealing with the case when
(1 + β1 + β2 ) = 0, shows that Equation (3.7) holds. In general, the procedure for
ﬁnding the particular, or equilibrium solution for a SODE is the same as that for
the ﬁrst, so we shall spend no more time on it.

Characteristic roots

Real roots
The procedure for ﬁnding the solution to the homogeneous part is also basically
the same. The homogeneous part of Equation (3.1) is:
     Yt + β1 Yt−1 + β2 Yt−2 = 0                                                (3.8)
Again, as in the ﬁrst-order case, we try a solution of the general form:
     Yth = Aλt                                                                 (3.9)
Substituting Equation (3.9) into (3.8), again adjusting the time elements as
necessary, gives us:
     Aλt + β1 Aλt−1 + β2 Aλt−2 = 0                                           (3.10)
from which we ﬁnd the characteristic equation:
     λ2 + β1 λ + β2 = 0                                                      (3.11)
This is a quadratic equation, which has two solutions, found from the general
expression:
                   
            −β1 ± (β12 − 4β2 )
    λ1,2 =                                                             (3.12)
                      2
which gives us two possible roots for our characteristic equation1 and two possible
solutions to the homogeneous form:
     Yth = A1 λt1
                                                                             (3.13)
     Yth = A2 λt2
                                           Second-order difference equations      33
where we have put subscripts on the ‘A’ terms to help distinguish the cases. From
the way these solutions were found, we know that either one of them will work as
a solution to our homogeneous equation. Fortunately, it turns out that according
to a result known as the superposition theorem, we can combine the two solutions
into one:

    Yth = A1 λt1 + A2 λt2                                                     (3.14)

   As in the case of ﬁrst-order equations, the solution to the homogeneous part of
the difference equation controls the dynamics of the system. In this case, there is
obviously going to be at least one twist to take account of – in expression (3.12),
the term (β12 − 4β2 ), which is referred to as the discriminant of the roots, could
perfectly well be negative, meaning that, when we take its square root, we will be
dealing with complex numbers. Since this term appears in the expression for both
roots, we know that if one of the roots is a complex number the other must also
be a complex number – its complex conjugate. The case where the roots of our
characteristic equation are complex numbers actually turns out to be very important
in economic applications. We will deal with this issue shortly – for the moment,
we shall assume that (β12 − 4β2 ) is positive and that both of our roots are real.
   Even when we restrict ourselves to the state where λ1 and λ2 are real, we still
have four cases to deal with. Either of the two roots could be positive or negative,
and either could be greater or less than 1 in absolute value. Note that we say
either – if one of the roots is less than 1 in absolute value, nothing requires that
the other root also be a fraction. In fact, in many economic applications, one root
is a fraction while the other is bigger than one. These cases are often referred to
as being inside and outside the unit circle, respectively – which is an alternative
terminology to saying that a root is smaller or larger than 1 in absolute value.2

Both roots are positive fractions
First, consider the case where both roots are positive and inside the unit circle –
that is, both are positive fractions. For the moment we have no information about
the A terms, not even whether they are positive or negative, so we shall begin by
assuming that both A1 and A2 are positive.
   Under that assumption, it is fairly easy to characterize the dynamics of the Yth
term driven by Equation (3.14). Both roots are positive fractions, so as t goes
to inﬁnity each of the two elements which constitute Equation (3.14) go to zero.
Which one gets there ﬁrst (or strictly speaking, gets so close to zero that it might
as well be zero, since neither term will actually reach zero until t actually reaches
inﬁnity) does not matter for present purposes, since in the long run, both are zero.
In this case, the equilibrium of the system will be stable, since Yth will converge
on zero regardless of where it happened to start from. We refer to this as the case
where both roots are stable – see example of this type of behaviour in Figure
3.1(a). Not surprisingly, it is indistinguishable from the graph we drew for the case
of a FODE with a stable root.
34   Second-order difference equations
Both roots are positive and greater than 1
The second case in which the dynamic behaviour of Yth is easy to establish is the
case where both roots are positive and outside the unit circle, that is, positive and
greater than 1 in absolute value. In this case, both parts of Equation (3.14) get
steadily bigger as time passes, converging on inﬁnity as t goes to inﬁnity, so Yth is
also driven to inﬁnity, or, putting it another way, Yth diverges. We refer to this as
the case where both roots are unstable – for an example of this sort of trajectory
see Figure 3.1(b).
   When both our roots are real and stable, we refer to the equilibrium as a stable
node, and when both roots are real and unstable, the equilibrium is called an
unstable node.


     (a) Yt                             (b) Yt




                                  t                                  t




     (c) Yt                             (d) Yt




                                  t                                  t




     (e) Yt




                                  t




     Figure 3.1 Dynamic behaviour of SODEs.
                                              Second-order difference equations        35
Both roots are negative
In this case, the equilibrium of the system will be stable if both roots are negative
fractions and the equilibrium will be unstable if both are negative and outside the
unit circle. As in the case of ﬁrst-order equations, negative roots yield alternat-
ing behaviour, with the components of Equation (3.14) jumping from above to
below and back above the equilibrium again, regardless of whether the roots are
stable or unstable. Examples of time paths for the stable and unstable cases are
illustrated in Figure 3.1(c) and (d). If we do happen to have two negative roots,
there would seem to be a lot of scope for irregularities in the time path of the
variable.


One stable and one unstable root
There is no reason, as it turns out, for both roots to be inside or both outside the
unit circle, despite the fact that we started with those cases. We could perfectly
well have one root inside and the other outside the unit circle – that is, we could
perfectly well ﬁnd that we had one stable and one unstable root, a case which
turns out to be very important in problems in which the dynamic behaviour of
some variable is a result of the intertemporal optimization decisions made by an
economic agent.
   Suppose that both roots are real and positive, and that λ1 is inside the unit circle
while λ2 is outside, so that λ1 is a stable root and λ2 is an unstable root. In this case,
regardless of the values of A1 and A2 , the ﬁrst element of Equation (3.14) will
behave like a stable FODE, converging on zero, and the second part will behave
like an unstable FODE, diverging, or heading off to inﬁnity.3
   The behaviour of Yth will be the sum of the behaviours of its two component
parts, and this means that ultimately the unstable part will dominate, since as time
passes it will be getting steadily bigger while the stable part is getting steadily
smaller, with the unstable part heading to inﬁnity as the stable part heads to zero.
Ultimately, in fact, the unstable part will be so much bigger than the stable part that
the system will appear virtually to be moving along a trajectory driven by a single,
unstable root of value λ2 .
   We say ‘ultimately’ because it is quite possible for the system initially to appear
to be following a stable path – that is, a path to a stable equilibrium. Suppose we
have the case which we have just been discussing, suppose that both A1 and A2
are positive, and suppose that A1 turns out to be very large and A2 to be very small
in absolute value. In that case, for values of t close to zero, the ﬁrst term could
easily dominate the second in the sum which yields the value of Yth .
   This situation could, depending on the relative magnitudes of the A terms,
continue for some time before the unstable term actually came to dominate. Even-
tually, however, the unstable term must dominate, so that even if Yth spends
some considerable time apparently on a convergent path, which in the case of
a homogeneous equation means heading towards zero, it must eventually turn
around and head away from zero.
36   Second-order difference equations
   If we plot the value of Yth against time, with time on the horizontal axis of our
graph, this case would be as in Figure 3.1(e), with the time path of Yth initially
heading towards zero, then turning around and heading away. During the conver-
gent stage of its time path the slope of the plot against time in Figure 3.1(e) is
negative, during the divergent stage the slope is positive, and at the turnaround
point the slope is zero, so we could use the derivative of Equation (3.14) with
respect to time to solve for the value of t at which the slope becomes zero. If we
do, we will ﬁnd that it depends in part on the relative magnitudes of the A terms.
   Clearly, there will exist a whole range of speciﬁc possible cases where one
root is stable and the other unstable, but their time path diagrams will for the
most part look like Figure 3.1(e). In some cases we will only observe divergent
behaviour, but that will be a matter of the relative magnitudes of the A terms. If
A2 is sufﬁciently large, the unstable term will dominate from the beginning.
   This type of time path, which arises when our SODE has one stable and one
unstable root, is known as saddlepoint behaviour and the associated equilibrium
is referred to as a saddlepoint.
   Clearly, when we ﬁnd that our equilibrium is a saddlepoint we should expect
ultimately to observe the actual value of Y diverging from its equilibrium value,
even if it seems initially to be converging on it. There is, however, one case in which
a system with a saddlepoint equilibrium will actually converge on that equilibrium
as time goes to inﬁnity – that is, one case in which the unstable root will not
eventually dominate. That is the case in which A2 , the term which determines
the weight of the unstable part of Equation (3.14) gets in the overall behaviour of
Yth , is equal to zero. In that case, Yth will behave as if it were the solution to the
homogeneous part of a FODE, driven by a single, stable root.
   When we discuss the determination of the values of A terms we will consider
how this case can arise. It actually arises quite regularly when the values of the
variables in the model are determined as the solution to an intertemporal optimiza-
tion problem. When there is no optimization involved, and therefore no deliberate
control of the variables, saddlepoints are much less likely to be observed, and
when they are, the system is much less likely to be on the convergent path.
   When we do have the case where A2 is zero, so the system behaves as if it
had only one root, and that root stable, we refer to the system as being on the
stable branch to the equilibrium. The opposite case, where A1 is zero and A2 non-
zero, so the system behaves as if it were a FODE with a single, unstable root, is
referred to as being on the unstable branch. These two cases are extremely unlikely
to occur by chance. In the vast majority of cases in which the problem being
studied does not involve intertemporal optimization, the time path our variable
actually follows will be a mixture – a weighted average – of the stable and unstable
branches.

Complex roots
At this point we can no longer avoid dealing with the case where the roots of
Equation (3.14) have imaginary parts – that is, are complex. This case arises when,
                                                   Second-order difference equations   37
in Equation (3.12), the discriminant (β12 − 4β2 ) is negative, so that in the process
of solving for the roots we have to take the square root of a negative number.
   Taking the square root of a negative number involves invoking ‘i’, deﬁned as
the square root of negative 1:
         √
    i=    −1                                                                       (3.15)

from which i 2 = −1. In the case of our expression (3.12), we can most easily see
how i enters the problem by rewriting the expressions for the two roots as:
                                                        
             −β1 ±         −1(4β2 − β12 )         −β1 ± i (4β2 − β12 )
    λ1,2 =                                    =                                    (3.16)
                               2                           2

where the term (4β2 − β12 ) is, by deﬁnition, positive in this example. In Equa-
tion (3.16) we are still taking the square root of a negative number, but now we
have written the expression whose square root is being taken as the product of a
negative term, −1, and a positive term, (4β2 − β12 ).
   The roots can also be written as:
                                
                             i (4β2 − β12 )
                 −β1
    λ1,2 =                 ±                                                       (3.17)
                  2                  2

which may be expressed as a complex conjugate pair4 of values:
                                              
    w ± iz        w = (−β1 /2)           z=    (4β2 − β12 )/2                      (3.18)

   Whenever we have an expression of the form w ± iz, we can deﬁne terms which
we denote by r and ω, where r, which is termed the modulus or absolute value of
the complex conjugate pair, is deﬁned as:
         
    r=    (w2 + z2 )                                                               (3.19)

and ω is deﬁned implicitly from the expressions:

    r · cos(ω) = w                                                                (3.20)
     r · sin(ω) = z                                                                (3.21)

Then any expression of the form w ± iz can also be written in the form
r(cos(ω)±i sin(ω)). So we now have rather more complicated looking expressions
for λ1 and λ2 .
38   Second-order difference equations
  At this point it is worth going back and remembering that we started from
expression (3.14), which, in view of the fact that λ1 and λ2 are a complex conjugate
pair, we can also write as:

     Yth = A1 (w + iz)t + A2 (w − iz)t                                           (3.22)

and we should also note that (w ± iz)t can be written:

     (w ± iz)t = r t (cos(ω) ± i · sin(ω))t                                      (3.23)

This last step is important because, by a mathematical result known as De Moivre’s
Theorem, an expression of the form (cos(ω) ± i · sin(ω))t can also be written as
(cos(tω) ± i · sin(tω)). Thus, our λ terms can also be written:

     λt1 = r t (cos(tω) + i · sin(tω))                                           (3.24)
     λt2 = r t (cos(tω) − i · sin(tω))                                           (3.25)

  Next, we substitute these expressions into Equation (3.22), giving:

     Yth = A1 r t (cos(tω) + i · sin(tω)) + A2 r t (cos(tω) − i · sin(tω))       (3.26)

While this does not look like much of an improvement over what we had before,
especially since it still involves i, the square root of −1, it is a step in the process
of eliminating i from the expression for the solution.
   Our next step is to group terms, giving:

     Yth = r t ((A1 + A2 ) cos(tω) + (A1 − A2 )i · sin(tω))                      (3.27)

Now, write A1 and A2 as an arbitrary complex conjugate pair ν ± iξ where ν and ξ
are real numbers. Then (A1 +A2 ) = 2ν and i(A1 −A2 ) = 2i 2 ξ = −2ξ . Denoting
(A1 + A2 ) by B1 and i(A1 − A2 ) by B2 , we now have:

     Yth = r t (B1 cos(tω) + B2 sin(tω))                                         (3.28)

and while all of that might seem a lot of work just to get an expression which
still involves sines and cosines, we have succeeded in eliminating the ‘i’ term –
everything in Equation (3.28) is real.
   The reason this expression is important is what it tells us about the behaviour
of a SODE with a complex conjugate pair of roots. Consider ﬁrst the expression
inside the brackets in Equation (3.28). Sines and cosines are cyclical variables, and
the fact that we are taking the sin and cos of a term, tω, which involves t means
that we are taking the sin and cos of an expression whose value changes as time
passes. In other words cos(tω) and sin(tω) are not constants – their values change
as the value of tω changes with t. This in turn imparts a cyclical element to the
behaviour of Yth : as time passes its value will follow a path which depends in part
on a pair of cyclical elements.
                                             Second-order difference equations       39
   We say ‘in part’ because we have not yet discussed the role of the r t term, where
r is the modulus of the roots. From the expression for r, and the convention that,
unless otherwise indicated when we take the square root of a number we take the
positive square root, we see that r will be a positive real number. The value of r t
will necessarily change over time, unless r = 0 or r = 1. Excluding those cases,
if r > 1, then as time passes, r t will get steadily bigger. On the other hand, if
r < 1, a positive fraction (since r is not negative), then as time passes, r t will
converge on zero.
   Putting all of this together, as time passes the element inside the brackets in
Equation (3.28) will follow a regular cyclical path of constant amplitude and fre-
quency, with each of its elements cycling around zero but not tending to converge
or diverge, and with speciﬁc values repeating at regular intervals forever. This
puts the cyclical element into Yth in Equation (3.28). Stability, in the sense of
convergence or divergence, comes from the r t term.
   If r < 1, then as time passes, r t will get steadily smaller, converging on zero,
so the constant cyclical element inside the square brackets will be multiplied by
a term which is getting steadily smaller, to the point that eventually the product
of the two, which is the value of Yth , will converge on zero. We refer to this as a
stable cycle, and its behaviour is as shown in Figure 3.2(a).
   On the other hand, if r > 1, the element multiplying the cyclical term will
be growing steadily as time passes, causing the product of the two elements in
Equation (3.28) to become bigger in absolute value. There will still be a regular
cyclical pattern, but as time passes its amplitude will grow, yielding a time path as
shown in Figure 3.2(b). We refer to this as an unstable cycle.
   The modulus of the roots, then, determines the stability or instability of the equi-
librium. The modulus, r, in the notation we have been using, (see Equation (3.19))
collapses to:
          
     r = β2                                                                      (3.29)
that is r, which determines the stability of the equilibrium in the case of cyclical
behaviour, is just equal to the square root of β2 in the characteristic equation
(λ2 + β1 λ + β2 ) = 0. It might be asked what happens if β2 is negative: the answer
is that in that case the discriminant (β12 −4β2 ) will be positive, and we will not have
complex roots. This, in fact, gives us an easy check on whether cyclical behaviour
is possible in any given model.
    Before moving on, some pieces of terminology: when our difference equation
has complex roots, we refer to the equilibrium of the system as a focus, either
stable or unstable depending on the value of the modulus. In between the case of
a stable focus and the case of an unstable focus is a case in which the equilibrium
is referred to as a centre. This is the case where the modulus of the complex roots
equals 1, meaning that the system cycles around its equilibrium point, neither
converging nor diverging as time passes as shown in Figure 3.2(c). Clearly the
coefﬁcients of the system would have to take on a very precise set of values for
the equilibrium to be a centre, and a small change in those coefﬁcients would be
all it took to change the equilibrium from a centre to a stable or unstable focus.
40   Second-order difference equations


     (a)    Yt




                                                        t




     (b)    Yt




                                                        t




     (c)    Yt




                                                        t




     Figure 3.2 Cases of complex roots.


Properties of the characteristic equation
There are actually a number of bits of information that can be derived directly
from the characteristic equation of a SODE, here written as:

     λ 2 + β 1 λ + β2 = 0                                                 (3.30)

Gandolfo (1997) demonstrates a number of useful results.

Sign test
Consider ﬁrst the case of a positive discriminant, so we know the roots are real.
Then given the characteristic equation, we can invoke Descartes’ Theorem, which
says that, for our characteristic equation, the number of positive roots cannot
exceed the number of changes in sign of the coefﬁcients of the equation while the
number of negative roots cannot exceed the number of continuations of sign.
                                             Second-order difference equations       41
   To look for changes or continuations in sign, we read signs of the coefﬁcient (the
β’s) in the characteristic equation from left to right, noting that since the coefﬁcient
on the ﬁrst term is always 1 the sign of the ﬁrst coefﬁcient is always positive. Thus,
when β1 and β2 are both positive, the sign pattern is (+ + +), which displays two
continuations and no changes in sign. This pattern means that the equation will
have two negative roots. To guarantee that there will not be alternations we need
two positive roots, which means, in a second-order equation, that we need to look
for two changes in sign, or a sign pattern of (+ − +).
   When the term β1 = 0, so our characteristic equation becomes (λ2 + β2 ) = 0,
the discriminant of the roots becomes −4β2 . For the roots√     to be real we
                                                                           √ require β2
to be negative, and the equation then factorizes into (λ + β2 )(λ − β2 ), giving
us the sign pattern (+ 0 −). In this case, as is clear from our discussion in this
paragraph, the roots are real and of opposite sign, but equal in absolute value.

Stability test
We can also derive some information about the stability of the equilibrium directly
from the characteristic equation. Gandolfo (1997) demonstrates that necessary and
sufﬁcient conditions for stability, for both the case of real roots and the case of
complex roots, are:

     1 + β 1 + β2 > 0                                                            (3.31)
           1 − β2 > 0                                                            (3.32)
     1 − β1 + β2 > 0                                                             (3.33)

In other words, if all three of these conditions are satisﬁed the roots of the charac-
teristic equation will be stable regardless of whether they are real or complex (that
is the sufﬁciency part) and if any of them are violated (necessity) the roots will not
be stable.
   To see where these conditions come from, consider the expressions for the roots
λ1 and λ2 :
                     
             −β1 ± (β12 − 4β2 )
     λ1,2 =                                                                     (3.34)
                        2
As we have written the roots, assuming for the moment that they are real, it can
be shown that λ1 > λ2 .
   In this case, when we are evaluating the stability of the system, we are testing
whether at least one of the roots is bigger than one in absolute value, which means
greater than 1 or less than (i.e. a bigger negative number than) −1. In practice,
we do not need to look for conditions that would place both roots outside the
unit circle: if the larger of the two roots is greater than 1, the system is unstable
regardless of the value of the smaller root, and if the smaller root is less than −1
(i.e. is a negative number greater than 1 in absolute value), the system is unstable
regardless of the value of the larger root.
42   Second-order difference equations
   Similarly, if the larger root is less than 1 the smaller root must also be less than
1, and if the smaller root is greater than −1 (so that if it is negative, it is a negative
fraction) the larger root must also be greater than −1. If we think of 1 and −1 as
being the upper and lower bounds of the unit circle, so long as the value of the
larger root is less then the upper bound and, at the same time, the value of the
smaller root is greater than the lower bound, the system must be stable.
   We can write the sufﬁciency condition which we have just derived as:
                     
             −β1 +       (β12 − 4β2 )
     λ1 =                               <1                                         (3.35)
                         2
                     
             −β1 −       (β12 − 4β2 )
     λ2 =                               > −1                                       (3.36)
                         2
Manipulating Equation (3.35) yields (1 + β1 + β2 ) > 0, which is just Equa-
tion (3.31) above. Similarly, we can derive Equation (3.33) from (3.36). Thus, if
the roots of the system are real Equation (3.31) and Equation (3.33) are satisﬁed,
both roots must lie inside the unit circle, while Equation (3.32) is the stability con-
dition for the case of complex roots. If all three of Equations (3.31), (3.32), (3.33)
are satisﬁed, then, our system must be stable regardless of whether the roots are
real or complex.
   We also note here that from Equations (3.35) and (3.36), the sum of the roots,
(λ1 + λ2 ) = −β1 while the product of the roots, λ1 λ2 = β2 . These relations can
clearly be helpful to us in determining the stability of the system: if, for example,
β2 > 1, then at least one of the roots must be greater than 1 since if both were
fractions their product would also be a fraction. Unfortunately, their product could
be less than 1 even if one of the roots was greater than 1. This relation is the basis
for condition (3.32), and explains why it applies to the case of real roots as well
as to the case of complex roots.
   If the roots are of opposite sign, β2 will be negative and 1 − β2 will be positive
regardless of the magnitude of the roots, but if both roots have the same sign, β2
will be positive and violation of Equation (3.32) means that at least one of them
must be greater than 1 in absolute value – that is, there must be an unstable root.
   Similarly the sum of the roots could be greater than 1 even if both roots were less
than 1, and, when one of the roots is negative, their sum could be less than 1 even if
both were greater than 1 in absolute value. If the sum is greater than 2, though, one
of them must be greater than 1. With difference equations it is easier to establish
sufﬁcient conditions for instability than it is to establish sufﬁcient conditions for
stability, at least for conditions which do not require actually calculating the values
of the roots.

Unit roots
We can extend these results to add one which will be of importance when we
discuss econometric applications of difference equations. Consider the case where
                                            Second-order difference equations      43
(β1 + β2 ) = −1, so the ﬁrst of Gandolfo’s conditions (3.31) is obviously violated.
Then if we calculate the roots of our characteristic equation, letting β2 = (−β1 −1)
we derive the roots of our characteristic equation as:

    λ1 = 1,      λ2 = −(1 + β1 )                                               (3.37)

In other words, we have established a condition under which a SODE will have a
root equal to 1; a unit root.

Repeated roots
Another special case arises when the discriminant (β12 − 4β2 ) = 0. In this case
our roots are:
                 −β1
    λ1 = λ2 =                                                                  (3.38)
                  2
that is, we have repeated roots. In this case, in order to ﬁnd the second solution to
our homogeneous equation, consider writing the homogenous equation as:

    tλt + β1 (t − 1)λt−1 + β2 (t − 2)λt−2 = 0                                  (3.39)

that is multiply each λ term by a value equal to the power on λ. Dividing Equa-
tion (3.39) through by λt−2 , and substituting what we know: λ = −β1 /2, and
β2 = β12 /4 into Equation (3.39) shows that (3.39) indeed holds. All of which
is to say that using an expression of the form xλx as we did in Equation (3.39)
also satisﬁes our original equation, which means that our solution form, which is
generally written as Yth = A1 λt1 + A2 λt2 can, in the case of a single repeated root,
be written:

    Yth = A1 λt + A2 tλt                                                       (3.40)

The reason this result is useful is because it will let us solve for expressions for
the unknown constants A1 and A2 even when we have a repeated root. So we now
turn to the question of solving for A1 and A2 .

Completing the solution
As in the case of FODE, we leave solving for A1 and A2 to the end of the exercise.
As in the ﬁrst-order case, we begin by combining the particular solution with the
solution to the homogeneous form, giving:

    Yt = A1 λt1 + A2 λt2 + Y ∗                                                 (3.41)

In the ﬁrst-order case we had a single unknown constant to solve for, so we needed
a single piece of outside information – a single initial condition. This time we have
two constants to solve for so we need two initial conditions. As in the ﬁrst-order
case there are many possible initial conditions, but, as in the ﬁrst-order case, the
44   Second-order difference equations
most common pieces of information are indeed initial – we usually assume that we
know the actual value of Yt at t = 0 and t = 1. Substituting into Equation (3.41),
we have:
     Y0 = A1 + A2 + Y ∗                                                        (3.42)
                              ∗
     Y1 = A1 λ1 + A2 λ2 + Y                                                    (3.43)
Since Y0 and Y1 are assumed to be known, and we have already solved for λ1 and
λ2 , and for Y ∗ (which again need not be a constant), the only unknowns in Equa-
tions (3.42) and (3.43) are the terms A1 and A2 . This means that, in Equations (3.42)
and (3.43), we have a pair of linear equations in two unknowns, A1 and A2 .
   Solving for A1 and A2 , we ﬁnd:
          λ2 (Y0 − Y ∗ ) − (Y1 − Y ∗ )
     A1 =                                                                      (3.44)
                  (λ2 − λ1 )
          −λ1 (Y0 − Y ∗ ) + (Y1 − Y ∗ )
     A2 =                                                                      (3.45)
                   (λ2 − λ1 )
This time we do not have the neat interpretation that one of the A terms is the
initial disequilibrium, although by deﬁnition (from Equation (3.42)), the two A
terms sum to the initial disequilibrium.
   Given expressions (3.44) and (3.45), we can now return to something we referred
to in our discussion of the saddlepoint case, the case where we had one stable and
one unstable root. In our discussion above, we assumed that λ1 was the stable root
and λ2 the unstable root (although that was just for convenience – it could perfectly
well be the other way around), and we said that the system would actually converge
to its equilibrium in the case where A2 was equal to zero. From Equation (3.45),
this will happen when:
            Y1 − Y ∗
     λ1 =                                                                      (3.46)
            Y0 − Y ∗
When Equation (3.46) is satisﬁed, then, our system is on the stable branch to the
equilibrium. In practical terms, this means that, when we look at its evolution over
time, the system will behave as if it were a ﬁrst-order system with a stable root.
From (3.44), if:
            Y1 − Y ∗
     λ2 =                                                                      (3.47)
            Y0 − Y ∗
then A1 = 0 and we will be on the unstable branch, which means that, obser-
vationally, the system will behave as if it were a ﬁrst-order system with a single,
unstable root.

g is a function of time
It should be clear by now that an economic system which can be represented by
a SODE is capable of displaying a range of interesting behaviour. Suppose, for
                                               Second-order difference equations   45
example, that in our original Equation (3.1), the ‘g’ term is an exponential function
of time:

    g = Gδ t                                                                   (3.48)

We handle this case exactly as we did its ﬁrst-order counterpart – try, as our Y ∗
function, an expression of the form:

    Y ∗ = Bδ t                                                                 (3.49)

then, after a bit of manipulation, we ﬁnd:

                  Gδ 2
    B=                                                                        (3.50)
            δ 2 + β1 δ + β2

where everything on the right-hand side of Equation (3.50) is a known value. This
gives:
                                 
                      Gδ 2
    Yt∗ =                             δt                                       (3.51)
                δ 2 + β1 δ + β2

so, as in the ﬁrst-order case, the equilibrium value of Y moves as time passes,
following an exponential time path of its own. The solution equation is now:
                                                   
                                        Gδ 2
    Yt = A1 λt1 + A2 λt2 +                              δt                    (3.52)
                                  δ 2 + β1 δ + β2

   Now suppose that the roots of our second-order equation are a complex conjugate
pair, with a modulus which makes the system stable. In that case, our system will
follow a cyclical path, converging on its equilibrium value, and that equilibrium
value will itself be moving along an exponential path. The time path of Y can get
interesting, and we are only up to second-order equations.
   Not surprisingly, higher order systems can have even more interesting dynamics.
Unfortunately, we cannot draw phase diagrams for difference equations of order
greater than 1, or at least not easily, so it is very seldom done. If we want to look
at time paths, we generally have to simulate the system. But, before turning to
higher order system, we consider some examples of economic models which yield
SODE.

Examples of SODE models

The multiplier-accelerator model
If the Keynesian Cross multiplier model is one of the most basic of all FODE
models in economics, its extension to the multiplier-accelerator model is one of
46   Second-order difference equations
the most basic of all SODE models. In this model, we add to the simpler model an
investment equation, giving:

     Yt = Ct + It + G                                                        (3.53)
     Ct = C0 + cYt ,    0<c<1                                                (3.54)
     It = I0 + v(Ct−1 − Ct−2 ),     v>0                                      (3.55)

   Equation (3.55) says that investment has two components – the ﬁrst an
autonomous element, which in the multiplier model was the whole of the invest-
ment term, and the second, a term which depends, with a lag, on the change
in consumption spending. In this model the response of investment spending to
consumer spending is generally explained as meaning that investment spending
responds to expectations of proﬁt, that proﬁts increase with increased consumer
spending, and that expectations about future proﬁts are formed myopically – if
consumer spending was up this period it is expected that next period will also
be good. The lag in Equation (3.55), which says that investment spending today
depends on yesterday’s increase in consumer spending, reﬂects lags in converting
investment plans into investment spending.
   To derive a difference equation in Y from this model,5 note that Equation (3.54)
says that consumption in any period, t, t − 1, t − 2 etc., depends on income in that
period according to a Keynesian consumption function. This lets us replace Ct−1
and Ct−2 with expressions in Yt−1 and Yt−2 , giving:

     It = I0 + vc(Yt−1 − Yt−2 )                                              (3.56)

   Then, substituting Equations (3.56) and (3.54) into (3.53) and rearranging terms
gives as the difference equation for the model:

     Yt (1 − c) − vcYt−1 + vcYt−2 = C0 + I0 + G                              (3.57)

Because the right-hand side of Equation (3.57) is composed of constants, and
variables which are exogenous to the model, the equilibrium value of income will
itself be a constant:

            C0 + I0 + G
     Y∗ =                                                                    (3.58)
               1−c

so, if the value of I0 in this model is the same as the value of investment in
the multiplier model, (and the C and G terms also have the same values as in
the simpler model) the value of equilibrium income in the multiplier-accelerator
model will be the same as the value of equilibrium income in the multiplier
model.
                                            Second-order difference equations       47
  Turning to the dynamics of the system, write the homogeneous part of
Equation (3.57) as:
                              
             vc               vc
   Yt −             Yt−1 +         Yt−2 = 0                     (3.59)
           1−c               1−c

whose characteristic equation is:
                             
            vc              vc
   λ −
     2
                    λ+            =0                                            (3.60)
           1−c            1−c

The roots of this expression are:
                             
            (vc/(1 − c)) ± (vc/(1 − c))2 − 4(vc/(1 − c))
    λ1,2 =                                                                      (3.61)
                                  2
   At ﬁrst glance, expression (3.61) is not terribly informative. We can, however,
apply some of the results we cited earlier. First, the pattern of the signs of the
elements of Equation (3.60) is (+ − +) which, from Descartes’ rule of signs, tells
us that, if our roots are real, both are positive. We actually have an alternative
approach to establishing this result: since the product of the roots, vc/(1 − c), is
positive, the roots must have the same sign, either both positive or both negative.
Also the sum of the roots, vc/(1 − vc), is positive. Since the roots, if real, must
have the same sign, and they must sum to a positive value, both roots must be
positive.
   Applying conditions (3.31), (3.32), (3.33) to this problem, we see that Equa-
tions (3.31) and (3.33) are satisﬁed (assuming (1 − c) is a positive fraction). To
satisfy condition (3.32) we require:

          (1 − c)
    v<                                                                          (3.62)
             c
This clearly puts a tight limit on the values of v which are consistent with stability:
if we take the common textbook value of c = 0.8, then stability requires that v be
less than 0.25.
   Furthermore, for the system’s time path to be monotonic, we require the
discriminant to be positive, which in turn requires that:

          4(1 − c)
    v>                                                                          (3.63)
              c
To get a sense of what this implies, if we again set c = 0.8, monotonic behaviour
requires that v be greater than 1.
   Clearly Equations (3.62) and (3.63) cannot both be satisﬁed at the same time.
If Equation (3.62) is satisﬁed, so that we have a stable equilibrium, then by
Equation (3.63) the time path of Y must be cyclical. This particular version of the
multiplier-accelerator model, then, imposes cyclical behaviour on the economy.
48   Second-order difference equations
   We say this version of the model because there are other versions of the same
basic model. We have made investment depend on lagged changes of consumption
and have made the level of current consumption a function of current income. One
alternative version would put a lag into the consumption function as well, but that
would yield a third-order difference equation, and we are not yet ready to deal with
examples of that type of model. Another alternative version would put a one period
lag into the consumption function and replace the investment function which we
have used with:

     It = I0 + v(Yt−1 − Yt−2 ),    v>0                                        (3.64)

   In this version, investment depends directly on lagged changes in income, and
in this case, even if we use, as our consumption function, Ct = C0 + cYt−1 , we
still wind up with a SODE:

     Yt − (c + v)Yt−1 + vYt = C0 + I0 + G                                     (3.65)

We leave the analysis of this system as an exercise, noting only that in this example
it is possible to have a time path which is both monotonic and stable.


Phillips stabilization policy model
For our second economic example of a SODE model, we again extend a model
we considered in Chapter 2 on ﬁrst-order models. In that chapter we introduced
Phillips proportional stabilization model; here we add an extra element to the ﬁscal
policy rule.
  The basic model is as before:

      Yt = Ct + I + Gt                                                        (3.66)
     Ct = C0 + cYt−1 ,       1>c>0                                            (3.67)
                    p
     Gt = G0 + Gt + Gdt                                                       (3.68)
      p
     Gt = γ (Y F − Yt−1 ),     γ >0                                           (3.69)
     Gdt = −δ(Yt−1 − Yt−2 ),      δ>0                                         (3.70)

  Here investment is once again exogenous and we have added an extra govern-
ment spending term Gdt , which depends on the change in Y between periods t − 2
and t − 1. According to this term, if Y growth was positive an increase in that
change results in a reduction in government spending. This policy term, known
as a derivative policy term, is designed to prevent the economy from growing
too quickly and, in a more complete macroeconomic model, letting inﬂationary
pressures build up too quickly.6
                                              Second-order difference equations      49
  Substituting Equations (3.67)–(3.70) into (3.66) and rearranging gives:
    Yt − (c − γ − δ)Yt−1 − δYt−2 = C0 + I + G0 + γ Y F                           (3.71)
which turns out to have the same expression for Y ∗ as in the simpler, proportional
stabilization model:
              C0 + I + G0 + γ Y F
    Y∗ =                                                                         (3.72)
                   1−c+γ
   Equation (3.72) tells us that, as in the simpler model, the introduction of the
policy element does not automatically guarantee that the equilibrium will be at
full employment. In fact, unlike the γ term, the δ term does not even enter the
expression for the equilibrium. This is no surprise, since the δ term, the derivative
stabilization coefﬁcient, relates to the speed at which the system is moving, not to
where it is heading.
   The characteristic equation for (3.71) is:
    λ2 − (c − γ − δ)λ − δ = 0                                                    (3.73)
with roots:
                               
               (c − γ − δ) ±       (c − γ − δ)2 + 4δ
    λ1,2 =                                                                       (3.74)
                                   2
Stability requires:
    1 − (c − γ − δ) − δ > 0                                                      (3.75)
                      1+δ >0                                                     (3.76)
    1 + (c − γ − δ) − δ > 0                                                      (3.77)
   Looking at these conditions, the ﬁrst is clearly satisﬁed under the usual assump-
tions about the magnitude of the marginal propensity to consume, and the second
is satisﬁed since δ is positive. The third, however, depends on the relative mag-
nitudes of the coefﬁcients, and the best we can do is identify relative magnitudes
which would guarantee stability.
   Looking at Equation (3.74) we see that the discriminant of the roots is positive,
so the roots are real and there will be no oscillations, but looking at Equation (3.73),
we see that the sign pattern is either (+−−) or (++−); in either case, there is one
change and one continuation which, by Descartes’ rule, means that we have one
positive and one negative root. The presence of a negative root means that, while
the system will not display oscillations, it will have an element of alternation to it.7
   There are many macro models which can be reduced to second or higher
order difference equations, and which have at least the potential to yield cycli-
cal behaviour. Perhaps the broadest class of such models is the class of inventory
adjustment models, beginning with Metzler (1941). We will return to macro models
when we consider higher order systems: for our next example we turn back to
microeconomics.
50   Second-order difference equations
A cobweb model with ﬁrm entry
In this example we again return to a model which we saw in Chapter 2 on ﬁrst-order
systems: the cobweb model. This time, we add to the basic model an expression
for ﬁrm entry. Doing this forces us to do some rather messy manipulation of the
model, but we will be able, in Chapter 4, to use this example as the basis of
a comparison between two approaches to dealing with models involving several
difference equations.
   The equations of our cobweb model are:

      t = β0 − β1 Pt + β2 Yt
     QD                                                                                       (3.78)
     QSt = α0 + α1 Pt−1 + α2 Nt                                                               (3.79)

      t = Qt
     QD    S
                                                                                              (3.80)
      Nt = Nt−1 + γ (Pt−1 − P ),               c
                                                      γ >0                                    (3.81)

where Q is quantity, P is price, Y is consumer income and N is the number
of ﬁrms in the market.8 Equation (3.81) says that the number of ﬁrms in the
market in period t is equal to the number that were there in period t − 1 plus an
adjustment term which depends on the difference between the price level in t − 1
and a critical value, P c . When price in t − 1 was above the critical value, new
ﬁrms enter and Nt > Nt−1 , when price in t − 1 was below the critical value,
existing ﬁrms leave and Nt < Nt−1 , and when price in t − 1 just equalled the
critical value there was no tendency for ﬁrms to enter or leave the industry, so
the number of ﬁrms remained unchanged between the two periods: Nt = Nt−1 .
In the case of a perfectly competitive market, we can think of the critical price
level as being equal to the minimum point on the ﬁrms’ (common) average cost
curve. The term γ is an adjustment speed coefﬁcient: the larger γ , the more ﬁrms
enter or leave in response to a deviation of last period’s price from the critical
level.
   Substituting Equations (3.78) and (3.79) into (3.80) gives us:

     β0 − β1 Pt + β2 Yt = α0 + α1 Pt−1 + α2 Nt                                                (3.82)

as in the simple cobweb. The problem is that we now have a difference equation
for N, so in Equations (3.81) and (3.82) we have a system of two FODEs in two
variables, N and P . Fortunately it turns out that there is a way of collapsing these
two equations into a single difference equation.
   First, note that because we are assuming that the market is always in short-
run equilibrium, Equation (3.82) must always hold. That being the case, we can
rearrange Equation (3.82) to obtain an expression for Nt :
                                                                              
                β0 − α0               β1                  α1                    β2
     Nt =                     −                Pt −                Pt−1 +                Yt   (3.83)
                   α2                 α2                  α2                    α2
                                              Second-order difference equations         51
Lagging (3.83) by one period, then gives us an expression for Nt−1 . Substituting
these expressions into (3.81) and rearranging terms gives us a SODE:
                                     
            β 1 − α 1 − γ α2            α1
    Pt −                       Pt−1 −         Pt−2
                   β1                   β1
                                        
            β2           β2             γ α2
        =         Yt −         Yt−1 +          Pc                          (3.84)
            β1           β1              β1
Note that on the right-hand side of Equation (3.84) we have terms in Yt and Yt−1 .
This does not mean that we have a difference equation in Y . To have a difference
equation in Y , we would have to have an equation reﬂecting the mechanism linking
current to past values of Y . The presence of Yt and Yt−1 reﬂects what is known as
a lagged adjustment effect, something which we will be dealing with in Chapter 7.
For the moment, we ﬁnesse the issue by assuming that consumer income is con-
stant over time, so that Yt = Yt−1 = Y0 . Conveniently, when we substitute this
into Equation (3.84), the right-hand side Y terms disappear and we are left with:
                                                        
             β 1 − α 1 − γ α2            α1             γ α2
     Pt −                       Pt−1 −        Pt−2 =           Pc            (3.85)
                    β1                   β1              β1
   Equation (3.85) is a SODE in P . Since we found Equation (3.85) by substituting
the demand–supply equality condition directly into the ﬁrm entry equation, it
combines the information from all of the equations in the system; the presence
of the γ term indicates this. It is a bit unfortunate that we have lost sight of the
N term, and in Chapter 4 we shall deal with this issue. For the moment, we have
derived a SODE in price, which we can now analyse.
   Since P c is assumed to be constant (there is no technological change occurring,
which might shift the ﬁrms’ average cost curve), we assume the equilibrium price,
P ∗ , is also constant. Making the usual substitutions in Equation (3.85) we ﬁnd that:
     P∗ = Pc                                                                        (3.86)
which says that the long-run equilibrium price for the model is the critical price,
the price at which the number of ﬁrms remains unchanging over time. This is,
of course, consistent with the deﬁnition of long-run market equilibrium in intro-
ductory microeconomic theory, and also bears out our claim that the information
contained in Equation (3.81) was not lost to the system in the course of our manip-
ulations. It tells us that if the current price is not equal to P c the system cannot be in
equilibrium, and given that P c only appears in the ﬁrm entry equation, that must be
because when the current price is not equal to P c , new ﬁrms will enter or old ones
will leave, shifting the supply curve and causing the equilibrium price to change.
   Turning to the dynamics of the system, the characteristic equation is:
                                       
              β 1 − α 1 − γ α2            α1
     λ2 −                          λ−           =0                                  (3.87)
                      β1                  β1
The sign pattern of Equation (3.87) depends on the sign of (β1 − α1 − γ α2 )/β1 ,
and is either (+, −, −) or (+, +, −). In either case we have one change of sign
52   Second-order difference equations
and one continuation, so we have one positive and one negative root. We can also
tell this from the fact that −(α1 /β1 ), which is the product of the roots, is negative.
If the roots were complex, the ﬁnal term on the right-hand side of Equation (3.87)
would have to be positive, so the fact that it is negative means that the roots are
real. Clearly for it to be negative the roots must be of opposite sign. The fact that
one of the roots is negative means that the system will display alternations – this
is clearly a consequence of the presence of the cobweb elements. Adding the ﬁrm
entry equation has not changed that.
   Checking the stability conditions, we need for stability:
                               
             β1 − α 1 − γ α 2       α1
      1−                       −          >0                                     (3.88)
                   β1               β1
                                   
                                    α1
                              1+          >0                                     (3.89)
                                    β1
                               
             β1 − α1 − γ α2         α1
      1+                       −          >0                                     (3.90)
                   β1               β1

Expression (3.88) condenses to γ α2 /β1 > 0 which is clearly satisﬁed. Condi-
tion (3.89) is also satisﬁed by construction. This leaves us with Equation (3.90)
which can be collapsed to β1 > α1 + γ α2 /2 where β1 is the (absolute value of
the) slope of the demand curve, α1 is the slope of the supply curve, γ is the ﬁrm
entry speed parameter, and α2 tells us how much the market supply curve shifts in
response to the entry of new ﬁrms.
   In the original cobweb model, stability required that the demand curve be steeper
than (or, if the variables are in logs, more elastic than) the supply curve. In the
present case that is not enough: the demand curve must be even steeper (or more
price elastic) to compensate for the shift of the supply curve due to ﬁrm entry.
   Basically, an increase in P in period t − 1 has two effects in period t: it causes
existing ﬁrms to increase their output by an amount which is determined by the
slope of the supply curve, the α1 term, and it also causes ﬁrms to enter. Thus, an
increase in P in t − 1 has a double effect on supply in period t, both effects tending
to increase the quantity of output offered for sale on the market. Hence, the more
stringent conditions placed on the slope of the demand curve.
   Without actually evaluating the roots of Equation (3.87), then, we can say that
the roots of the system will be real (so there will not be oscillations in price); that
the system will have one positive and one negative root (so there will be alternations
in price) and that the stability of the system depends on the slope of the demand
curve relative to the two effects reﬂecting the response of supply in period t to
changes in price in period t − 1.
   In developing the cobweb model with ﬁrm entry we had to do a fair bit of
manipulation, and to collapse several equations into one. Quite a few higher order
models can be derived from this kind of manipulation, but it also turns out that
we can extract a lot of information out of systems of equations without actually
having to collapse them. We shall consider models of this type in the next chapter.
4      Higher-order and systems of
       difference equations




Higher-order difference equations
It should be clear by now that we can keep adding lags of the Y variable, thereby
raising the order of our difference equation. A third-order difference equation, for
example, would have the general form:

    Yt + β1 Yt−1 + β2 Yt−2 + β3 Yt−3 = g                                       (4.1)

with characteristic equation:

    λ3 + β1 λ2 + β2 λ + β3 = 0                                                 (4.2)

The equilibrium value would be:

    Y ∗ = g/(1 + β1 + β2 + β3 )                                                (4.3)

and the general solution is of form:

    Yt = A1 λt1 + A2 λt2 + A3 λt3 + Y ∗                                        (4.4)

where we would need three initial conditions to solve for the A terms.
   Since Equation (4.2) has three roots, we now have the possibility of a wide range
of time paths – we could now, for example, have one real and two complex roots.1
Assuming the system was stable, Y would still converge on its equilibrium value
over time, but the cyclical element could manifest as cycles around the convergent
path generated by the monotonic (stable) root. Empirically, we could wind up
with what looked like a very irregular, but still stable, cycle. We could also ﬁnd
ourselves dealing with more complicated saddlepoint behaviour, should we have
two stable and one unstable root, for example, or two unstable and one stable.
   In the ﬁrst case, if λ1 and λ2 were stable and λ3 unstable, the system would
converge on the equilibrium if A3 were zero, so that the system behaved as if
it were a stable second-order system. In this case the stable branch would be a
plane in two dimensions. If λ1 and λ2 were unstable and λ3 stable, we would only
converge if both A1 and A2 were zero, so that stable branch would now be a line,
54   Higher-order difference equations
but a line in three-dimensional space rather than (as in the second-order saddle
point case) a line in two-dimensional space.
   While higher order difference equations open a greater range of possible
dynamic behaviour, the price of that greater ﬂexibility is reduced analytical
tractability. Unlike the second-order case there is no simple formula for the roots of
Equation (4.4) (there is a formula, but it is not particularly revealing and involves
generating several intermediate expressions).
   In general terms, the best we can say is:

             λ1 + λ2 + λ3 = −β1                                                 (4.5)
     λ1 λ2 + λ1 λ3 + λ2 λ3 = β2                                                 (4.6)
                      λ1 λ2 λ3 = −β3                                            (4.7)

which do not, in general, turn out to be terribly helpful unless we have actual,
numerical values for the β terms. Expression (4.7) is a special case of the general
result that, when a characteristic equation is written so that the coefﬁcient on the
highest power term is one, the product of the roots is equal to (−1)n times the
constant term – hence in our second-order case the constant term was the product
of the roots and here it is −1 times the product of the roots.
   We can also write stability conditions in terms of the β coefﬁcients: the necessary
and sufﬁcient stability conditions for Equation (4.1) are:

         1 + β1 + β2 + β3 > 0                                                   (4.8)
         1 − β1 + β2 − β3 > 0                                                   (4.9)
     1 − β2 + β1 β3 − β32 > 0                                                  (4.10)

A sufﬁcient stability condition for the general case of a third-order difference
equation is:
     
          |βi | < 1                                                            (4.11)

while a necessary stability condition is:
         
     −       βi < 1                                                            (4.12)

Conditions (4.11) and (4.12) also apply to higher order difference equations. They
are, however, in general only useful when we can place numerical values on the
β terms.
   Third and higher order difference equations are more commonly seen in econo-
metric applications than in exercises in pure theoretical modelling, since in
econometric applications we have estimates of the numerical values, and mod-
ern econometric software can estimate the values of, and perform hypothesis tests
on the roots of a higher order difference equation.
                                           Higher-order difference equations      55
Economic example
The simplest example of a model yielding a third-order difference equation is a
variant on the multiplier-accelerator model, set out as follows:

     Yt = Ct + It + G                                                         (4.13)
    Ct = C0 + cYt−1      0<c<1                                                (4.14)
     It = I0 + v(Ct−1 − Ct−2 )     v>0                                        (4.15)

Here Equation (4.15) is the same investment function as we used in the second-
order case, but we have returned to the consumption function which we used in
a ﬁrst-order example, with current consumption depending on lagged income.
Substituting Equation (4.14) into (4.15) gives:

    It = I0 + vc(Yt−2 − Yt−3 )                                                (4.16)

and substituting Equations (4.14) and (4.16) into (4.13) and arranging gives:

    Yt − cYt−1 − vcYt−2 + vcYt−3 = C0 + I0 + G                                (4.17)

Note that, from Equation (4.17) the equilibrium value of Y is:

           (C0 + I0 + Gt )
    Y∗ =                                                                      (4.18)
               (1 − c)

so, once again, the introduction of a dynamic adjustment element – a lag – does
not change the location of the equilibrium, although it can affect the trajectory the
system follows as it approaches (in the stable case) that equilibrium.
  The characteristic equation for (4.17) is:

    λ3 − cλ2 − vcλ + vc = 0                                                   (4.19)

While the necessary stability condition (4.12) holds, the sufﬁcient condition (4.11)
does not necessarily hold, but depends on the relative magnitudes of c and v, so
all we can say is that stability is not excluded (as it would be if the necessary
condition failed to hold). Conditions (4.8)–(4.10) provide no immediate answers –
while (4.8) holds, the other two hold only if certain conditions on the relative
values of c and v are satisﬁed. This comes as no particular surprise, since v and c
are Keynesian marginal propensity to spend terms, and if the marginal propensity
to spend becomes too large, the system will be unstable.
   The constant term, vc, which is equal to −1 times the product of the roots, is
positive, meaning that the product of the roots is negative, so we have at least one
negative root. Since the sign pattern in Equation (4.19) is (+ − −+), the rule of
signs also tells us that, if the roots are real, we have at most two positive (two
changes of sign) and at most one negative (one continuation of sign) root. The
other two roots, then, are either both positive,2 or a complex conjugate pair.
56   Higher-order difference equations
   This, then, is basically as far as we can go at the theoretical level. Given our
earlier multiplier-accelerator examples, it is not surprising that we cannot preclude
instability, nor is it particularly surprising that Y could follow an interesting time
path.3 The most we can say, though, is that to go any further we need values for
the parameters – that is, we need to proceed to empirical implementation of the
model.

Systems of difference equations
Rather than proceed further with higher order difference equations, since to do so
would only be to add more indeterminacies, in this section we turn to systems of
equations – that is, to cases in which we have several difference equations.
   We have already dealt with examples of systems – such as in the cobweb example
with ﬁrm entry, where we started with FODE in P and N, and reduced that system
of two FODEs to a single SODE in P . We did that by judicious substitution of
equations into each other.
   In general, we can use substitution to reduce systems of several difference
equations into a single equation, where that single equation will be of higher order
than the component equations we started out with. In the cobweb example of a
SODE, then, we reduced a system of two FODEs to a single second-order equation;
this turns out to be a general result. We can, in general, reduce any system of two
interrelated FODEs to a single second-order equation, and we can reduce a system
of three interrelated FODEs to a single third-order equation.
   To see this, consider the following system of two ﬁrst-order equations:

     Yt = α0 + α1 Yt−1 + α2 Zt−1                                               (4.20)
     Zt = β0 + β1 Yt−1 + β2 Zt−1                                               (4.21)

At risk of belabouring the point, note that Equation (4.20) is a FODE in Y – the
presence of the Zt−1 term does not alter that. In terms of the behaviour of Y as
determined by this equation, Z is exogenous to the equation – part of the gt term.
Similarly, Equation (4.21) is a FODE in Z – it does not matter how many lagged
Y terms might appear in Equation (4.21): the order of the equation is determined
by the number of differences of the dependent variable.
   This system, however, will ultimately reduce to a single SODE because of the
feedback elements across the equations. A change in the value of Y in this period,
period t, will, through Equation (4.21) lead to a change in the value of Z in one
period’s time, and that change in Z will affect Y a period later. Thus, a change in
Y in period t will cause Z to change in t + 1, and that will feed back into a change
in Y in t + 2.
   To see how this works, we make the same kind of substitutions as we did in
the cobweb example in Chapter 3 on SODEs. First, note that Equations (4.20)
and (4.21) must always hold, which means that we can rearrange them without
changing their nature. Thus, from Equation (4.20) obtain an expression for Zt−1
and then for Zt (by moving all variables forward by one period) and substitute
                                           Higher-order difference equations     57
these into Equation (4.21) to get:
                                                                  
       Yt+1   α0     α1 Yt                         Yt   α0   α1 Yt−1
            −     −          = β0 + β1 Yt−1 + β2      −    −           (4.22)
        α2    α2      α2                           α2   α2     α2

  Now lag Equation (4.22), simply to re-express things from the perspective of
period t rather than t + 1, and collect terms to get the SODE:

    Yt − (α1 + β2 )Yt−1 + (α1 β2 − β1 α2 )Yt−2 = (α0 + α2 β0 − α0 β2 )       (4.23)

The characteristic equation is:

    λ2 − (α1 + β2 )λ + (α1 β2 − β1 α2 ) = 0                                  (4.24)

from which we will ﬁnd the appropriate terms to substitute into:

    Yt = A1 λt1 + A2 λt2 + Y ∗                                               (4.25)

   Thus, our system of two FODEs in Y and Z can be collapsed into a single SODE
in Y . Note that since we never violated the equalities in the original system, this
is a perfectly valid reduction of the system, and tells us that the time path of Y
will in fact be determined by the two roots of Equation (4.24), even though (as
we emphasized above) the difference equation with Y on the left-hand side in our
original system was a FODE.
   The key to this result is the presence of the spillover terms α2 and β1 . In the
absence of α2 , changes in Z would not affect Y , even after a lag, and Y would be
driven by a FODE with a single root. In the absence of β1 , while changes in Z
would continue to affect Y , changes in Y would not affect Z.
   We have chosen to demonstrate the substitutions by reducing the system to a
SODE in Y . Since that was an arbitrary choice (based ultimately on the fact that we
happen to have written the Y equation ﬁrst), we could equally well have reduced it
to a SODE in Z, with the interesting result that, had we done so, the characteristic
equation for that SODE would have been identical to Equation (4.24). In the
equation for Z, then:

    Zt = B1 λt1 + B2 λt2 + Z ∗                                               (4.26)

while Z ∗ would differ from Y ∗ (since we would not expect the two variables to
have the same equilibrium values) and while A1 and A2 would not be the same as
B1 and B2 (since the A terms will depend on (Y0 − Y ∗ ) and (Y1 − Y ∗ ) while the B
terms will depend on (Z0 − Z ∗ ) and (Z1 − Z ∗ )), the roots, λ1 and λ2 will be the
same in Equation (4.25) as in Equation (4.26).
   This means that, while there will be differences in the details of the time paths
(based on the relative values of the A and B terms), the same underlying dynamic
forces drive both Y and Z. If one is stable, the other is stable, if one has complex
roots the other obeys the same complex roots. They are, in short, part of a genuine
58   Higher-order difference equations
system, in the sense that there is a feedback mechanism linking the two variables
together.
   This result carries over to higher order equations – a system of three, interrelated
FODEs can be collapsed into a single third-order difference equation. Which of
the variables that third-order equation happens to be a difference equation in is to
a degree arbitrary since, while their equilibria will differ, the dynamics of all three
of the variables will be driven by the same three roots.
   Our discussion has involved reducing systems of lower order difference equa-
tions to single, higher order difference equations. Of course, we can also do the
reverse – for example, expand a single SODE into a pair of interrelated FODE.
But this is a bit less straightforward and depends on the context of the problem.

Matrix techniques
Returning to Equations (4.20) and (4.21), we note that they can be written as a
matrix system in the general form:
                                 
         Yt     α    α2        Yt−1    α
             = 1                     + 0                                        (4.27)
         Zt     β1   β2        Zt−1    β0

For convenience of notation, we shall write Equation (4.27) as:

     Xt = AXt−1 + A0                                                            (4.28)

Now, assuming, as we have been, that α0 and β0 are constants, so that at equili-
brium, Yt = Yt−1 = Y ∗ and Zt = Zt−1 = Z ∗ , it is easy to see that in equilibrium,
Equation (4.28) becomes:

     X∗ = AX∗ + A0                                                              (4.29)

where X∗ is the vector whose elements are Y ∗ and Z ∗ . Equation (4.29) can be
rewritten as:

     (I − A)X ∗ = A0                                                            (4.30)

where I is the identity matrix conformable with A and X, and Equation (4.30) can
be solved as:

     X∗ = (I − A)−1 A0                                                          (4.31)

   Applying this set of operations to Equation (4.27) will yield the same expres-
sions for Y ∗ and Z ∗ as would be found from Equations (4.20) and (4.21) directly.
Obviously, we can only do this if the matrix (I − A)−1 exists, which requires that
the determinant of (I − A) be non-zero.
                                            Higher-order difference equations       59
Eigenvalues and eigenvectors
The fact that we can write our system of difference equations in matrix form
means that we can make use of some other standard results from matrix algebra in
analysing dynamic systems. The most important of these results from our point of
view are those pertaining to the characteristic roots and vectors (eigenvalues and
eigenvectors) of a matrix.
   Deﬁne λ as a characteristic root, or eigenvalue, of A and deﬁne w as the char-
acteristic vector, or eigenvector, associated with the root λ. Any (n × n) square
matrix has associated with it n characteristic roots, λ1 , . . . , λn , not necessarily
distinct.4 Each characteristic root has associated with it a characteristic vector
wi , i = 1, . . . , n. When the characteristic roots of the matrix are distinct, their
associated characteristic vectors are linearly independent – while the roots of a
matrix are not necessarily distinct, in most economic applications they turn out
to be distinct, so it is simplest to assume that they are distinct and only to make
explicit mention of the cases in which they are not distinct (i.e. in which two or
more roots take on the same value).
   Each of the pairs of characteristic roots and vectors satisfy the expression:

    Aw = λw                                                                     (4.32)

which says that, if we post-multiply the square matrix A by the characteristic
vector w, the result will be a vector equal to the characteristic vector multiplied
by the corresponding (scalar) root λ. To solve Equation (4.32), we rewrite it as:

    (A − λI )w = 0                                                              (4.33)

where I is the appropriate conformable identity matrix.
  One possible solution to Equation (4.33) is the trivial solution w = 0, but that
solution is not very informative. We are really interested in non-trivial solutions –
solutions in which the elements of w are not all equal to zero. For there to exist a
non-trivial solution to Equation (4.33) it must be the case that the matrix (A − λI )
cannot be inverted – that is, the value of λ must be chosen such that the matrix
(A − λI ) cannot be inverted. From matrix algebra, that will be the case if the
determinant equals zero: |A − λI | = 0.
  Given our deﬁnition of A from Equation (4.27), the condition that the
determinant |A − λI | = 0 is:

    |A − λI | = (α1 − λ)(β2 − λ) − β1 α2 = 0                                    (4.34)

The two values of λ which solve this expression are the characteristic roots (or
eigenvalues, or roots) of the matrix A. Given the values of the roots, we can
substitute them into Equation (4.33) and solve for w (after normalization of the
w vector). There will be one characteristic vector associated with each root. Note
too that when we multiply expression (4.34) out, the result is identical to the
characteristic equation we found in Equation (4.24). That means that the roots of
Equation (4.34) are identical to the roots of Equation (4.24), which means that we
60   Higher-order difference equations
could have found the roots and the equilibrium of the system without doing all of
that direct substitution.
   However, ﬁnding the A1 , A2 , B1 and B2 terms for the ﬁnal expressions for Yt
and Zt still require that we establish speciﬁc initial conditions for each of Y and
Z, but if all we are interested in is whether the system is stable, and whether its
trajectory is monotonic or non-monotonic, we can ﬁnd everything we need from
the matrix version of the system.
   Comparing Equation (4.34) (or more conveniently Equation (4.24)) to the matrix
expression (4.27), we note that Equation (4.34) could also be written:
     λ2 − Tr(A)λ + Det(A) = 0                                                   (4.35)
where Tr(A) is the trace of the coefﬁcient matrix A in Equation (4.27) and Det(A)
is the determinant of that matrix. Recall the results from standard matrix theory
which tell us that the trace of a (2 × 2) matrix is equal to the sum of its roots while
the determinant of the matrix equals the product of its roots.
   Return now to a system of two homogeneous FODEs which we shall write
as Xt = AXt−1 , and let us explore further how we may use the information
contained in eigenvalues and eigenvectors. Recall Equation (4.32): Aw = λw,
where, as before, λ is a characteristic root of A and w is the characteristic vector
(eigenvector) associated with that root. Then, for a (2 × 2) system (for expository
purposes we assume the roots are real and distinct) we have two roots, λ1 λ2 and
their associated characteristic vectors:
                                 
             w11                w12
     w1 =          , w2 =                                                        (4.36)
             w21                w22
Note that in the wij notation in the vectors, the second subscript, j , tells us which
characteristic vector we are dealing with, so the vectors themselves are labelled
wj , j = 1, 2.
   Eigenvectors are unique only up to multiplicative scaling, which means that if
w is an eigenvector of a matrix, so is ξ w, where ξ is an arbitrary constant. This
means that when we solve for the ﬁrst eigenvector (for example), we will not ﬁnd
exact values of the wij terms, but rather will ﬁnd an expression which tells us about
the magnitude of w11 relative to w21 . To ﬁnish the solution we need to normalize
the eigenvectors.
   There are several common normalizations. Eigenvectors are frequently normal-
ized by requiring their elements to sum to 1, or (in the case where the Euclidian
norm is used) by requiring the sum of the squares of their elements to equal 1. For
our purposes it is often the case that the most useful approach is to normalize one
of the elements of an eigenvector to equal 1.
   Now let W be the matrix whose columns are the characteristic vectors w1 and w2 :
                      
            w11 w12
     W =                                                                         (4.37)
            w21 w22
(Note again that the second subscript on each of the elements of W tells us which
characteristic vector that particular wij term comes from.) Let be the diagonal
                                           Higher-order difference equations     61
matrix whose elements are the characteristic roots of A:
                       
         λ         0
       = 1                                                                   (4.38)
         0         λ2

Expression (4.32): Aw = λw above shows the relation between one characteristic
root and its corresponding characteristic vector; combining all of the roots and
vectors into one expression gives us:

    AW = W                                                                   (4.39)

where, for matrix conformity, we post-multiply by the matrix . (When we
are dealing with a scalar root λ, order of multiplication does not matter.) From
Equation (4.39), if W can be inverted, we can write:

    A = W W −1                                                               (4.40)

W can be inverted so long as its determinant is non-zero, which in turn requires
that the rows and columns of the matrix be linearly independent. In difference
equation modelling, the most likely violation of this requirement is the case where
two of the columns of W are identical, which implies in turn that two of the roots
are identical. For us to be able to write Equation (4.40), then, it must be the case
that the roots of A are distinct, and while there are simple economic models which
yield identical roots, this situation is not too likely to arise in practice.
   Now, returning to our matrix system of homogeneous, FODEs, we can write:

    Xt = AXt−1 = W W −1 Xt−1                                                 (4.41)

because we are dealing with homogeneous difference equations (for simplicity
of exposition, not because it is crucial for our result) we can do the same type
of substitution as we did in our discussion of a single, homogeneous FODE, and
write:

    Xt = A2 Xt−2 = [W W −1 ][W W −1 ]Xt−2 = W              2
                                                               W −1 Xt−2     (4.42)

and, by continued substitution obtain:

    Xt = W     t
                   W −1 X0                                                   (4.43)

where X0 is a (2 × 1) vector whose elements are Y0 and Z0 . Now, note that since
X0 is a (2 × 1) vector and W −1 is a (2 × 2) matrix, the term W −1 X0 is a (2 × 1)
62   Higher-order difference equations
vector, which we shall write as:
                         
                         c1
     W −1 X0 = C =                                                             (4.44)
                         c2

Note that the elements of the C vector are constants, which lets us write
Equation (4.43) as Xt = W t C, which set out in full is:
                           t          
         Yt     w11    w12     λ1   0       c1
             =                                                                 (4.45)
         Zt    w21     w22     0    λt2     c2

and which can then be written in the general form for the solutions to a pair of
homogeneous SODEs:

     Yt = c1 w11 λt1 + c2 w12 λt2                                              (4.46)
     Zt = c1 w21 λt1 + c2 w22 λt2                                              (4.47)

Our Ai and Bi terms, then, are actually functions of the initial values of the
variables (which we already knew) and the elements of the characteristic vectors
of the matrix of coefﬁcients of the system. Note that the ci elements each show
up in more than one equation, whereas the wij elements each show up in only one
equation. This helps clarify a result which we asserted earlier.
   Suppose that the equilibrium of our system (which, in the case of a homogeneous
system will be at the origin) is a saddlepoint, meaning that we have one stable and
one unstable root. Let λ1 be the stable root and λ2 the unstable root. We said earlier
that there exists a stable branch, by which we mean a trajectory which converges
on the origin, and that our system will follow that branch if the weight on the
unstable root in the solution is zero. Since we want both variables to converge on
the origin, this requires that the weight on the unstable root equal zero in both
Equations (4.46) and (4.47).
   We can guarantee that result if c2 , the element which is common to both of the
relevant terms, is equal to zero. Recall that C = W −1 X0 and note that:
                                                     
                          1               w22    −w12
     W −1 =                                                                    (4.48)
                  w11 w22 − w21 w12       −w21    w11

Now let  = (w11 w22 − w21 w12 ), the determinant of the matrix formed from the
characteristic vectors. From Equation (4.48) we can see that:

     c1 = (w22 Y0 − w12 Z0 )/                                                 (4.49)
     c2 = (w11 Z0 − w21 Y0 )/                                                 (4.50)

which show that the ci terms are combinations of the initial values of Y and
Z, using weights based on elements of the characteristic vectors of the system.
                                            Higher-order difference equations      63
From Equation (4.50), c2 will equal zero if:

     Y0   w11
        =                                                                      (4.51)
     Z0   w21

where w11 and w21 are the elements of the ﬁrst characteristic vector of the matrix
of coefﬁcients. Thus, if we are to converge to the saddlepoint equilibrium, our
initial pair of values must lie on the vector generated by the characteristic vector
of the stable root of the system.
    While we do not make much use of characteristic vectors in economic analysis,
it is worth making a note of the fact that they play a major role in determining the
weights the individual roots get in the expressions that determine the time paths
of the variables in the system.
    The fact that we can write a system of difference equations in matrix form and
that the roots of the matrix of coefﬁcients of the system are the same as the roots
we would ﬁnd if we were to make the substitutions necessary to reduce our system
of equations to a single, higher order equation does not, unfortunately, take us
as far as we might have hoped. In particular, it does not give us simple rules for
establishing whether the equilibrium of our dynamic system is stable.
    Consider again matrix A shown in Equation (4.27). We know that the trace of
A is the sum of the roots of the system and that the determinant of A is the product
of the roots:

          α 1 + β 2 = λ1 + λ 2                                                 (4.52)
    α1 β2 − β1 α2 = λ1 λ2                                                      (4.53)

but these relations are not sufﬁcient in themselves to tell us whether the roots are
inside the unit circle. Consider the determinant, for example. If it is negative, we
know that we have one negative and one positive root, but if it is positive we could
have two positive roots, two negative roots or a complex conjugate pair of roots.
If in addition to having a positive determinant we happen to have a negative trace,
we know that we have a pair of negative roots, but a positive trace along with a
positive determinant would be consistent either with a pair of positive real roots
or with the roots being a complex conjugate pair. Since we have no other way
of determining whether we have a complex conjugate pair than to calculate the
discriminant, we are not really a long way ahead: we can get the same information
from Descartes’ rule of signs.
   The magnitudes of the trace and determinant are not as informative as we would
like, either. Suppose we have a positive trace and a positive determinant. The rule
of signs tells us that we have two positive roots. If the determinant is bigger than 1
we know that we have at least one unstable root, but if it is less than 1 we could
either have two stable roots or one stable and one unstable root with the stable root
being small enough to make the product of the two less than 1.
   Even in the case where the determinant is greater than 1, we can not distinguish
between the case where the equilibrium is a saddlepoint and the case where it is
64   Higher-order difference equations
monotonically unstable – that is, between the case of one stable and one unstable
root and the case of two unstable roots.
    If the trace is bigger than 2 we know that we must have at least one root bigger
than 1, and possibly 2, but if it is bigger than 1 and less than 2 we might have
two roots which are stable but just less than 1 each. If the trace is positive and
less than 1 and if the determinant is positive so that in the case of real roots we
know that the roots must be positive, we know that we have two stable roots,
and if the determinant is less than 1 so that its square root is also less than 1, we
know that even in the case of complex roots we have roots of modulus less than 1,
but by the time we have gone through all of this we might as well have written
out the expression for the characteristic equation of the system and checked the
stability conditions which we discussed in Chapter 3, ‘Second-order difference
equations’. (Obviously, given their form, those conditions are derived from the
relation between the roots of a matrix and its trace and determinant.)
    Thus, while we get some information on stability from the matrix expression,
it is certainly less than we would like, and it is frequently easiest to write out the
expressions for the roots of the model we are analysing and establish conditions
under which that particular model will have a stable equilibrium.


Examples of systems of difference equations

Cobweb model with ﬁrm entry
For our ﬁrst example, we return to the case of the cobweb model with ﬁrm entry,
which we discussed as an example of a SODE. In our earlier discussion we had
to substitute and rearrange equations to get a second-order equation. The matrix
approach, should, of course, lead to the same conclusions as the earlier approach.
   Once again, the basic cobweb model is:

      t = β0 − β1 Pt + β2 Yt
     QD                                                                        (4.54)
     QSt = α0 + α1 Pt−1 + α2 Nt                                                (4.55)

      t = Qt
     QD    S
                                                                               (4.56)

and the ﬁrm entry rule is:

     Nt = Nt−1 + γ (Pt−1 − P c ),     γ >0                                     (4.57)

where the notation is familiar from our earlier discussion of this model. Making the
same substitutions in Equations (4.54)–(4.56) as we did in our earlier discussions
gives:

            (β0 − α0 ) β2   α1     α2
     Pt =             + Yt − Pt−1 − Nt                                         (4.58)
                β1     β1   β1     β1
                                           Higher-order difference equations     65
which we now put, together with Equation (4.57) in matrix form as:
                                                                  
        α2    α1                         (β0 − α0 ) β2
                       −                                 +    Y
                                                             β1 
      1       Pt               0 Pt−1                            t
         β1         =     β1               +      β1                       (4.59)
     0 1      N t        γ     1   N t−1
                                                     −γ P c

Multiplying through by the inverse of the matrix on the left-hand side of Equa-
tion (4.59) (which takes the place of doing many of the substitutions we did when
we dealt with this model earlier) gives:
                                                                             
                −(α1 + γ α2 )   −α2           (β0 − α0 ) β2        α2
                                                           +    Y   +    γ P c
                                   β1  Pt−1                                   
      Pt                                                           t
               =     β1               N      +     β1      β1       β1       
      Nt                                  t−1
                        γ          1                        −γ P c
                                                                             (4.60)

   The trace and the determinant of the matrix of coefﬁcients in Equation (4.60)
are respectively:

      Tr(A) = (β1 − α1 − γ α2 )/β1                                           (4.61)
    Det(A) = −α1 /β1                                                         (4.62)

giving, as the characteristic equation for the problem:

    λ2 − ((β1 − α1 − γ α2 )/β1 )λ − (α1 /β1 ) = 0                            (4.63)

which is the same expression as we found for this characteristic equation in our
earlier discussion of this example, which is, of course, the desired result.
   The determinant of the matrix of coefﬁcients is negative, meaning that, as usual
in a cobweb model, we have one negative and one positive root (and meaning that
complex roots are excluded). The trace may be positive or negative depending on
the sign of (β1 − α1 − γ α2). To test stability we need to evaluate the same three
conditions as we looked at in our earlier discussion.
   So far as the equilibrium values of P and N are concerned, if we assume, as
before, that Y does not change over time, so that all of the elements in the ﬁnal
term on the right-hand side of Equation (4.60) are constant, we can assume that
the equilibrium values of P and N are also constants. Setting Pt = Pt−1 = P ∗
and Nt = Nt−1 = N ∗ in Equation (4.60), we can bring all of the P and N terms
over to the left-hand side of the expression, giving:
                                                                   
       (β1 + α1 ) α2                (β0 − α0 ) β2          α2
                             ∗                  +     Y   +    γ P c
                    β1                                              
                            P                            t
          β1            N∗ =           β1        β1       β1             (4.64)
           −γ        0                           −γ P  c


from which we can solve for P ∗ and N ∗ . P ∗ will, as before, equal P c , which was
the price level which determined whether ﬁrms were entering or leaving the market.
66   Higher-order difference equations
N ∗ , which we did not solve for before, will be a messy expression involving all of
the terms on the right-hand side of Equation (4.64).
   We cannot really claim that the matrix approach to this model is simpler or more
transparent than the substitution approach, although it is, arguably, easier to keep
track of what is going on in the matrix approach. The reason we did the cobweb
example both ways was to support our claim that either approach will give the
same result.
   The cobweb is not, of course, the only form of market adjustment model. We
can also add ﬁrm entry to model the standard Walrasian price adjustment model.
Let our ﬁrm entry process be as in Equation (4.57) and let the demand and supply
functions be as in Equations (4.54) and (4.55), respectively. However, instead of
the QD t = Qt equation, the version of the Walrasian price adjustment model we
              S

shall use here assumes that the change in price between periods t − 1 and t is
proportional to the amount of excess demand in period t − 1:

     Pt − Pt−1 = δ(Dt−1 − St−1 ),      δ>0                                    (4.65)

where, as before, we can think of the variables as being in log form so that the
coefﬁcients are elasticities.
   This system is closed by the price adjustment Equation (4.65). From Equa-
tion (4.65) we see that when demand equals supply in period t − 1, the price does
not change between t − 1 and t, when demand exceeds supply in t − 1 the price
is higher in t than it was in t − 1, and when there is excess supply in period t − 1
the price falls between periods t − 1 and t.
   Also note that we have not written an equation for Q. In the cobweb model, since
the market cleared each period, Q was determined in each period at a short-run
demand and supply intersection point. In a Walrasian model such as the present
one, the most common assumption is what is known as a Min condition, which
says that in any period, given the price level for that period, the quantity actually
exchanged in the market is the lesser of quantity demanded and quantity supplied.
   Now, substituting lagged Equation (4.54) and lagged Equation (4.55) into (4.65)
and rearranging gives the FODE for P :

     Pt = Pt−1 − δ(α1 + β1 )Pt−1 + δ(β0 + β2 Yt−1 − α0 ) − δα2 Nt−1           (4.66)

Equations (4.66) and (4.57) constitute our system. In matrix form, we have:
                                                          
      Pt     1 − δ(α1 + β1 ) −δα2 Pt−1      δ(β0 + β2 Yt−1 − α0 )
          =                              +
      Nt           γ          1    Nt−1           −γ P c
                                                                              (4.67)

Note that in Equation (4.67) we have left the t − 1 subscript on Y : as usual, for
simplicity, we shall assume that Y is constant over time, but it is important to
remember that consumer income can in fact change, and that market dynamics
will determine how prices respond to such a change. As in the case of the cobweb
                                             Higher-order difference equations        67
model, the long-run equilibrium price for the system will be P c , and again we
leave the determination of the equilibrium value of N as an exercise.
   The trace of the matrix of coefﬁcients in Equation (4.67) is:
    Tr(A) = 2 − δ(α1 + β1 )                                                       (4.68)
which may be positive or negative, and the determinant is:
    Det(A) = 1 − δ(α1 + β1 ) + γ δα2                                              (4.69)
which can also take on either sign. It is easy enough to establish stability conditions
for this problem, so we leave that as an exercise.
   The discriminant of the matrix of coefﬁcients,  = Tr(A)2 − 4Det(A) is:
     = δ 2 (α1 + β1 )2 − 4γ δα2                                                  (4.70)
which can also be either positive or negative. If the discriminant is negative we
have complex roots and the trajectory followed over time by the market price,
whether converging on the equilibrium (as is the most likely case) or diverging
from it, will be cyclical. The discriminant will be negative if:
     δ(α1 + β1 )2
                  <γ                                                              (4.71)
         4β2
Here, γ determines the speed with which new ﬁrms enter the market in response to
an excess of P over P c , and the speed with which they leave the market if P is below
P c . In terms of the supply equation (4.55) above, N is a supply shift factor, with
ﬁrm entry shifting supply to the right (and driving the equilibrium price down) and
ﬁrm exit shifting the supply curve to the left and driving the equilibrium price up.
   The coefﬁcient δ determines how rapidly the actual market price responds to
changes in the equilibrium price, and that market price response feeds back into
the ﬁrm entry equation, since it is the current market price P , and not the equi-
librium price which enters that equation. The combination of the two speed of
adjustment terms, δ and γ , determines whether we observe cyclical behaviour in
the actual market price.
   The Walrasian model serves to emphasize the need to take account of dynamics
in empirical analysis of markets. It is quite likely that the majority of prices actually
observed in the market are disequilibrium prices, even if the equilibrium is stable
and the market price is converging on the equilibrium price.
   When ﬁrm entry is easy, so that γ is large, we have an additional dynamic (supply
shifting) element in play. If the roots of the matrix of coefﬁcients are complex,
as can easily happen when γ is large, we can observe periods in which both the
market price and the number of ﬁrms in the market are increasing, or in which
both are decreasing. Unless we estimate the demand and supply equations using an
approach which allows for the possibility that the observed price–quantity points
are Walrasian disequilibrium points, meaning that they are not at the intersection of
demand and supply curves, we might well reach some rather strange conclusions
about how markets work.
   We now turn to an example which we have not considered before.
68   Higher-order difference equations
Cournot duopoly model
In this section we consider one of the simplest of duopoly models. We assume that
there are two ﬁrms in the market, facing identical costs and producing an identical
product for which there is a single market demand function. Because consumers
cannot distinguish between the ﬁrms’ products, market price depends on the total
level of output. Letting Q1,t and Q2,t be the output levels of the two ﬁrms in period
t, and assuming that the current market price depends on the total current output
produced by the two ﬁrms, we can deﬁne the market inverse demand function as:

     Pt = α0 − α1 (Q1,t + Q2,t )                                                (4.72)

   Each ﬁrm’s goal is to maximize its proﬁts in each period (we will consider
intertemporal optimization problems later – for the moment we are dealing with
extremely myopic economic agents) and each ﬁrm faces the same, constant,
average cost c. Firm 1’s proﬁt in period t, then, is:

       1,t = (Pt − c)Q1,t                                                       (4.73)

with a similar expression for ﬁrm 2.
   Each ﬁrm’s objective, then, is to choose the current level of its output which will
maximize its proﬁt. There is, however, a complication. Each ﬁrm is assumed to
have to make its production decisions for period t in the interval between periods
t and t − 1, which is just another way of saying that they have to make their
production decisions for period t before they know what the price will be in period
t. Each ﬁrm knows the market demand function (4.72), but while each knows
(once it has done its planning) what its own output level will be, neither knows
with certainty how much output the other ﬁrm is going to put on the market in
period t. That means that neither ﬁrm knows with certainty what the price level
will be in period t, and that each must make its production planning decisions on
the basis of an expected price, P e .
   In arriving at their expectation of what the price will be in period t, each ﬁrm has
to make an assumption about what level of output the other will decide to produce.
In the most basic of Cournot models, both ﬁrms are, as we noted above, extremely
myopic. Each, therefore, looks at the level of output the other ﬁrm produced in
period t − 1 and assumes that it will continue to produce that level of output. Thus,
ﬁrm 1 assumes that, in period t, ﬁrm 2 will continue to produce output level Q2,t−1
even though ﬁrm 1 is itself planning to change its output level.
   Given this assumption about its competitor’s production plans, ﬁrm 1 also forms
                                                                            e
an expectation about the market price in period t, which we denote P1,t       :

      e
     P1,t = α0 − α1 (Q1,t + Q2,t−1 )                                            (4.74)

In expression (4.74), ﬁrm 1 takes Q2,t−1 as given, and calculates the effect of his
own output level, Q1,t on the market price level. It chooses Q1,t to maximize its
                                               Higher-order difference equations     69
                                       e
expected proﬁts, which we denote       1,t and which are given by:

        1,t = (P1,t − c)Q1,t
        e       e
                                                                                 (4.75)

substituting for Pte in Equation (4.75), and rearranging gives ﬁrm 1 proﬁt as:

        1,t = (α0 − c)Q1,t − α1 Q1,t − α1 Q2,t−1 Q1,t
        e                        2
                                                                                 (4.76)

The ﬁrst-order condition derived from maximizing Equation (4.76) with respect
to Q1,t is:

    (α0 − c) − 2α1 Q1,t − α1 Q2,t−1 = 0                                          (4.77)

from which we ﬁnd ﬁrm 1’s decision rule for its output:

               (α0 − c) Q2,t−1
    Q1,t =             −                                                         (4.78)
                 2α1      2

Assuming that ﬁrm 2 makes the same, myopic assumption about its competitor’s
output level, we also have:

               (α0 − c) Q1,t−1
    Q2,t =             −                                                         (4.79)
                 2α1      2
   We now have two equations in output, each of which involves a lagged output
level, but neither of which is a difference equation in the sense in which we have
deﬁned that term since the lagged output in each is the other ﬁrm’s output, not
its own.
   Nevertheless, it is easy to see that, if we lag Equation (4.79) one period, giving us
an equation for Q2,t−1 as a function of Q1,t−2 and substitute that lagged equation
into Equation (4.78) we will have a difference equation in Q1,t even though only
Q1,t−2 and not Q1,t−1 will appear in it (or, equivalently, even though the coefﬁcient
on Q1,t−1 in this SODE turns out to equal zero). Rather than do that, though, we
shall set the system up in matrix form, as:
                                                  (α − c) 
                                                0
      Q1,t    0           −1/2      Q1,t−1               
           =                               +  (α 2α−1 c)                       (4.80)
      Q2,t   −1/2          0        Q2,t−1       0
                                                 2α1
   In expression (4.80), the trace of the matrix of coefﬁcients is zero and the
determinant is −1/4. Since the trace is the sum of the roots, a zero trace means
either that both are zero (in which case their product, the determinant, would also
have to be zero) or that they are of equal magnitude and opposite in sign. Since
the determinant is the product of those roots, they must be equal to 1/2 and −1/2.
The equilibrium, therefore, is stable, but the presence of a negative root means
that the path the system follows towards it displays alternations.
70   Higher-order difference equations
 Turning to the equilibrium of the system, setting Q1,t = Q1,t−1 = Q∗1 and
Q2,t = Q2,t−1 = Q∗2 we ﬁnd that:

             (α0 − c)               (α0 − c)
     Q∗1 =            ,     Q∗2 =                                               (4.81)
               3α1                    3α1

so that in equilibrium the two ﬁrms produce the same level of output. Since they
both face the same price and they both have the same cost function this is hardly
surprising. Note that in equilibrium, total industry output is 2(α0 − c)/3α1 ; if the
industry were a monopoly, proﬁt maximizing output would be (α0 − c)/2α1 . This
means that under duopoly the total industry output is higher, and the price of that
output therefore lower, than would be the case under monopoly.
   Given that we have said several times that negative roots are unusual in economic
models, it would seem appropriate to discuss why we have just found another one.
There are two basic parts to the explanation. The ﬁrst is that this model is, to a
degree, a cobweb model, in the sense that production decisions have to be made in
advance of pricing information becoming available, with the actual market price
in any period being found at the intersection of the market demand curve and a
vertical short-run supply curve. By itself, this would seem to weaken our caution
against negative roots, since many production plans have to be put into motion on
the basis of price expectations, before actual prices are known.
   The second, and more important part of the answer is that we have assumed that
there is no cost to adjusting the level of output beyond the marginal production cost
of the new output, and that marginal cost is constant. It is more likely that there
are additional costs which depend on the amount of the change in output from
one period to the next – installation costs from adding new capital, for example,
or perhaps ﬁnancing costs associated with expanding productive capacity. It also
seems unlikely that marginal production costs would be strictly constant – marginal
costs are more likely to be increasing, at least to some degree, but we will not add
this complication here.
   As a simple illustration of the implications of some of these effects, then, we next
add a nonlinear adjustment cost element to the two ﬁrms’ cost functions, where
we deﬁne adjustment costs to be costs arising from the fact of changing output
from one period to the next. If output remains constant over time, no adjustment
costs are incurred. Representing this by a quadratic cost term gives us, in place of
Equation (4.73):

       1,t = P1,t Q1,t − cQ1,t − v(Q1,t − Q1,t−1 ) ,
       e      e                                   2
                                                           v>0                  (4.82)

with a similar equation for ﬁrm 2. As before, neither ﬁrm knows what the actual
market price will be in period t, so both have to work on the basis of their expec-
tations about price, and as before both are extremely myopic and assume that
their competitor will leave its output level unchanged from the period before
even as they themselves change their own output, in other words, as described
in Equation (4.74).
                                              Higher-order difference equations     71
    Substituting Equation (4.74) into (4.82) gives:

           1,t = [α0 − α1 (Q1,t + Q2,t−1 )]Q1,t − cQ1,t − v(Q1,t − Q1,t−1 )
           e                                                               2
                                                                                (4.83)

differentiating Equation (4.83) with respect to Q1,t and setting the result equal to
zero gives the ﬁrst-order condition for the problem:

      (α0 − c) − α1 (2Q1,t + Q2,t−1 ) − 2v(Q1,t − Q1,t−1 ) = 0                  (4.84)

from which we can ﬁnd Q1,t , shown in Equation (4.85). Similarly, we can
determine Q2,t also shown in matrix form (4.85):
                                                                   
                  v                   α1                    (α0 − c)
                                −                     
    Q1,t      (α1 + v)             2(α1 + v)  Q1,t−1     2(α1 + v) 
            =     α1                  v       Q        +
                                                           (α − c) 
                                                                               (4.85)
 Q2,t         −                                    2,t−1         0
                2(α1 + v)         (α1 + v)                    2(α1 + v)

Note that when v = 0, the matrix of coefﬁcients in Equation (4.85) is the same as
that in Equation (4.80), as we should expect.
  The characteristic equation associated with system (4.85) is:

                 2v       (4v 2 − α12 )
      λ2 −             λ+               =0                                      (4.86)
              (α1 + v)    4(α1 + v)2

The discriminant of Equation (4.86) can be shown to equal [α12 /(α1 + v)2 ], which
is positive, so the roots of Equation (4.86) will be real. The determinant of the
matrix of coefﬁcients can be written as:

      Det(A) = (2v − α1 )(2v + α1 )/4(α1 + v)2                                  (4.87)

so the sign of the determinant depends on whether (2v −α1 ) is positive or negative.
So long as v is larger than α1 /2, the two roots of Equation (4.86) will have the
same sign. The trace of the matrix of coefﬁcients in Equation (4.85) is positive, so
in the case where the determinant is positive, the roots will be positive. This is also
clear from the rule of signs, since if the determinant of the matrix of coefﬁcients
is positive, the sign pattern of Equation (4.86) will be (+ − +), indicating the
presence of two positive roots.
   The roots of this example are easily calculated:

               (2v + α1 )             (2v − α1 )
      λ1 =                ,    λ2 =                                             (4.88)
               2(α1 + v)              2(α1 + v)

since both are positive, so long as v is larger than α1 /2, we can check sta-
bility by checking whether the larger of the two, λ1 , is less than 1: that is
whether (2v + α1 ) < (2α1 + 2v), or α1 > 0 which holds by assumption from
72   Higher-order difference equations
Equation (4.74). Thus, so long as v is sufﬁciently large, the system will approach
its equilibrium monotonically.
   Turning to the equilibrium, if we solve the system (4.85) for the equilibrium
values of Q1 and Q2 we ﬁnd that they are the same as in the case where v equals
zero, so the introduction of the quadratic adjustment cost term does not alter the
location of the equilibrium, just the path the system follows to it.
   The introduction of the adjustment cost term changed the adjustment path by
raising the cost of cobweb-type adjustment. In a cobweb model, the short-run
supply curve jumps immediately to the new short-run proﬁt maximizing position,
even if the jump in output is a large one. By making large jumps particularly costly,
the quadratic cost of adjustment term discourages them. If the cost of adjustment
term, v, is smaller than its critical value, large jumps in output can still be proﬁtable.
   There are other, obvious extensions of the duopoly model which could be intro-
duced. One particularly interesting result is found if we return to the case where
v = 0 and introduce a third ﬁrm, operating on exactly the same rules as the two
ﬁrms in the cases which we have been considering. In that case it can be shown
that one of the roots of the system will equal −1.
   The fact that this root is negative means that the three-ﬁrm model without
adjustment costs will display alternations. This is not surprising, since we found
alternations in the dynamics of the two-ﬁrm model with v = 0. What is more
interesting is the fact that the root equals −1. In that case an expression like
Aλt = A(−1t ), meaning that it alternates permanently between A and −A,
introducing a dynamic element which neither diverges from nor converges on the
equilibrium of the system. In the three-ﬁrm case with no adjustment costs, then,
even given that the other two roots are stable, the system will never settle down.
   Obviously we would expect that, after this had been going on for a few decades,
one of the ﬁrms might ﬁgure out the pattern of the other ﬁrms’ production decisions
and build that into its own decision process. The myopic model applies only so long
as ﬁrms are in fact myopic – only so long as they do not learn from experience.
If we build a learning process in, the dynamics of the market will change, in a
manner which depends on the precise learning process which we assume. Still, in
the early stages of the development of a new market, when ﬁrms are still to a large
degree guessing about what their rivals will do, we can expect to observe some
interesting output dynamics.


A demography model
Our next example is not strictly speaking an economic example, although the
dynamics generated can have signiﬁcant economic implications. Consider a pop-
ulation which has arbitrarily been grouped into ﬁve age groups, P1 through P5 .
For simplicity in the theoretical model we assume that these age groups each span
the same number of years, perhaps 15, and typically we deﬁne a time period, the
interval between t and t + 1, which spans the same number of years as an age
group. Assuming away immigration, populations evolve through time on the basis
of birth rates and death or survival rates.
                                               Higher-order difference equations        73
   Let πij be the probability of an individual who is of age group i in period t − 1
surviving to age j in period t. Since we are assuming that a time period covers
the same number of years as an age group, the π are written πi,i+1 . The survival
probabilities obviously reﬂect the probabilities of not surviving – of dying before
reaching the next age group. In detailed demographic exercises the age groups
would span one year and we would calculate one year survival probabilities.
   We enter births into the system by assigning each age group between P2 and P4
a birth rate, bi , i = 2, . . . , 4. Whether there is a birth rate attached to P1 and to P5
depends on the width of the age groups we are using. Setting b1 = 0 means that
we are assuming that the ﬁrst age group is too young to have children. Thus, for
example, with 15-year age groups there would be a (generally very small) birth
rate attached to P1 , while with 10-year age groups there generally would not.
   These assumptions let us write a matrix expression for population growth:
                                                         
       P1,t           0      b2      b3   b4 0         P1,t−1
     P2,t  π12             0       0    0 0              
                                               P2,t−1 
     P3,t  =  0 π23 0                   0 0 P3,t−1 
                                                                                   (4.89)
                                                           
     P4,t   0              0 π34 0 0 P4,t−1 
       P5,t           0       0       0 π45 0          P5,t−1

  The matrix of coefﬁcients in Equation (4.89) is referred to as a population
projection matrix. From Equation (4.89) we see that the number of people in the
ﬁrst age group in period t is calculated as:

     P1,t = b2 P2,t−1 + b3 P3,t−1 + b4 P4,t−1                                       (4.90)

while the number in age group 2 in period t is:

     P2,t = π12 P1,t−1                                                              (4.91)

Immigration can be added in to Equation (4.89) as a vector whose elements reﬂect
the number of people in each age group who immigrated during one period.
   Since the ﬁfth age group, P5 , contributes to population only by surviving, it is
not uncommon to work with a reduced size population projection matrix, covering
only the age groups up to the end of the reproductive years. In our case this would
mean working with a 4 × 4 projection matrix:
                                             
       P1,t        0    b2     b3 b4       P1,t−1
     P2,t  π12        0     0     0          
                                     P2,t−1 
     P3,t  =  0 π23 0             0  P3,t−1 
                                                                              (4.92)
       P4,t        0     0 π34 0           P4,t−1

  Expression (4.92) is just a matrix form of a difference equation system, and
a much simpler one than many we derive from economic models. One thing is
immediately obvious: the trace of the projection matrix is zero, which means that
the sum of the roots is zero. In system (4.89) above the trace and determinant
of the projection matrix – the matrix of coefﬁcients of the difference equation
74   Higher-order difference equations
system – were both zero, meaning that at least one root of system (4.89) was zero
(since the determinant is the product of the roots). That zero root reﬂects the limited
contribution of age group P5 to the population dynamics.
   System (4.92), being a fourth-order system of difference equations, has four
roots. Without going into the proof,5 we note a few interesting features of
population projection matrices as difference equation systems.
   A population system virtually always has a single positive real root, larger in
absolute value than the others. If the population being analysed is growing, the
dominant root will be larger than 1. The other roots will virtually always be complex
of modulus less than 1, although there may be small, stable negative roots.
   Thus, when we write the solution form derived for P1 from (4.92) as:

     P1t = A11 λt1 + A12 λt2 + A13 λt3 + A14 λt4                                (4.93)

the ﬁrst root, λ1 , will be positive and larger than 1, the next two will probably be a
complex conjugate pair of modulus less than 1 then the fourth root will (because it
is a single root and therefore cannot be part of a complex conjugate pair) probably
be negative and small in absolute value. In the long run, the dynamics of the
population will be dominated by the ﬁrst root. That root, being larger than 1, is
what we have been referring to as an unstable root, but in the case of a population
model there is nothing unexpected or undesirable about having an unstable root; if
the largest root was less than 1 in absolute value the population would eventually
vanish.6 The presence of complex roots means that populations can exhibit cyclical
behaviour, but the fact that those roots will be of modulus less than 1 means that
in the long run the cycles will vanish.
   In fact, if a population’s birth and death (and therefore survival) rates have
remained unchanged for a sufﬁciently long period, its population dynamics will
be completely dominated by the ﬁrst root. This dominance extends beyond the
growth rate – if we calculate the eigenvector associated with the ﬁrst root and
normalize it so that it sums to 1, we will ﬁnd that each element in the normalized
eigenvector will be a positive fraction and that the eigenvector will represent the
long-run age distribution of the population.
   With λ1 being greater than 1 the population will continue to grow over time,
but if its birth and death rates have not changed over time the roots of the system
will not have changed over time, and if those roots have remained unchanged for a
period sufﬁciently long to allow the ﬁrst root to come to dominate the dynamics of
the population, then even though the population will be growing, its age distribution
will remain stable and unchanging over time. In a population which is closed to
immigration, a changing age distribution is a reﬂection of changes in birth and
death rates which must have occurred in the relatively recent past.7
   If birth and/or death rates have changed in the relatively recent past, as, for
example, in the case of a sudden baby boom, the other roots in Equation (4.93)
have a role to play. The complex roots will cause P1 to follow a cyclical path,
and since all of the age groups will obey equations analogous to Equation (4.93),
with different Aij weights but the same roots, all of the age groups will follow
                                            Higher-order difference equations       75
cyclical paths. Depending on the modulus of the roots, those cycles can take
a very long period to work themselves out. Populations do not settle into stable
age distributions in the short run.
   Population cycles can have signiﬁcant economic effects. Different age groups
have different preferences in consumption, based in part on factors like family
formation. As the cycles resulting from a sudden baby boom work their way
through the system, different sectors of the economy will advance or contract.
   That there will be effects on the education and health sectors is quite clear. There
will also be labour market effects: since different age groups of labour are less than
perfect substitutes, we can conceive of them facing age-speciﬁc labour demand
and supply curves. As the cyclical effects of a baby boom move through the labour
force, the age-speciﬁc labour supply curves will shift in or out, depending on
whether a cyclical bulge is moving in or out of that group.
   If all age groups of labour were perfect substitutes there would have been a single
outward shift of the labour supply curve as the baby boom group ﬁrst entered the
labour force and the equilibrium wage would have fallen (and, in a system with
downward-sticky wages, unemployment would have risen) but the effect would
have been spread out across the whole labour force. Because different age groups
are in fact less than perfect substitutes, in reality the effect will fall most heavily
on the age group whose numbers have just surged.
   This effect will also come through in neoclassical growth models. When we
set up the basic growth model later, we shall represent the population by a single
variable growing at an exogenous rate. This is legitimate if the population age
distribution is stable – in that case, even though different age groups of labour are
less than perfect substitutes in production, because the proportion each age group
accounts for in the total population will not change over time, we can model the
population (and the labour force) as if it was a single entity.
   When there are demographic cycles working their way through the labour force,
we should really divide the overall labour force into age groups, each with its own
labour productivity coefﬁcient. Even if the total number of people in the labour
force remains unchanged over time, the overall productivity of labour can change
signiﬁcantly as different age groups expand and then contract.
   These demographic effects will not vanish once the baby boom8 group leaves the
working age years. If we think, for a moment, about the actual post-war baby boom,
that cohort was large in absolute numbers, and even though its own reproductive
behaviour seems to have been marked by a drop in age-speciﬁc birth rates (our π
coefﬁcients), the baby boom group itself will still produce a lot of children, and
eventually grandchildren, in absolute terms. In calendar terms, a long time has to
pass before the complex roots in Equation (4.93) and its counterparts for other age
groups cease to play a signiﬁcant part in determining the dynamics of a population.
   As a concluding note, both here and in later discussion of the neoclassical growth
model, we have treated demographic factors as exogenous. In fact, of course,
reproductive behaviour (i.e. birth rates) and survival probabilities are sensitive
to economic conditions. A full dynamic economic-demographic model should
incorporate those effects, but that would move us well beyond our present scope.9
5      Intertemporal optimization




Introduction
It is important to remember that the systematic dynamic behaviour we observe in
economic variables has to come from somewhere. The most important source of
consistent relations between the past and future values of economic variables is
intertemporal optimization on the part of economic agents.
    Intertemporal optimization simply means recognizing that actions which are
taken today have consequences for the future, and incorporating that recognition
into decisions about what actions should be taken today. To take a simple example,
the decision about how much of our current income to consume today and how
much to save has implications not just for current consumption but also for future
consumption. When we are deciding how much to consume today we have to take
account of how that decision will affect our consumption tomorrow; or at least,
we will take that into account if we are behaving in an intertemporally optimal
manner.
    To set things out a bit more formally, consider the two-period consumption–
savings model found in most intermediate microeconomics texts. The individual
has to decide on how much to consume in each of two periods, 1 and 2, where
we label consumption in the two periods c1 and c2 . He receives incomes y1 and
y2 in the two periods, and knows that the prices of consumption goods will be p1
and p2 . The interest rate he earns on savings or pays on borrowing is r, and his
subjective discount factor is β < 1, where β is 1/(1 + δ), and δ is his subjective
discount rate. His problem is to allocate consumption across the two periods in
order to maximize the present (subjective) value of lifetime income, subject to
the two-period budget constraint, which says that the present value (at the market
interest rate) of his two-period consumption expenditure must equal the present
value of his two-period income stream. We write his problem as:
                                                                       
                                                y2                p2 c2
      Max: Ł = U (c1 ) + βU (c2 ) + λ y1 +           − p1 c1 −               (5.1)
      c1 , c2                                (1 + r)            (1 + r)
The ﬁrst-order conditions for this problem give:
      U  (c1 ) = λp1
                       p2                                                    (5.2)
    βU  (c2 ) = λ
                     (1 + r)
                                                    Intertemporal optimization     77
from which we have:

                  βU  (c2 )(1 + r)p1
    U  (c1 ) =                                                                  (5.3)
                           p2

   Equation (5.3), which is an example of a relation known as an Euler equation,
links consumption in period 2 with consumption in period 1, where the fact that the
intertemporal relation is derived from the ﬁrst-order conditions of an optimization
problem means that the relation between the two periods’ consumption levels is
optimal.
   We can interpret the ﬁrst-order condition as a marginal beneﬁt that equals
marginal cost condition. In any intertemporal consumption problem like this one,
the decision to increase consumption today by one unit results in a reduction in
consumption in the future by an amount which depends on the relative prices of
consumption in the present and the future and the rate of interest we could have
earned had we saved the cost of that extra unit of consumption for one period. The
β term on the right-hand side is there to discount future utility into present utility
terms, so that we are comparing like with like.
   The ﬁrst-order condition tells us that if we increase consumption by one unit
today, we receive a beneﬁt equal to the marginal utility derived from consuming
that unit. The cost of that beneﬁt is the marginal utility we could have derived
from the consumption we could have done had we saved the cost of that unit of
consumption for one period at interest rate r.1 At the optimum, marginal beneﬁt
equals marginal cost and we cannot increase the present value of our lifetime utility
by saving (and shifting consumption into the future) or borrowing (and shifting
consumption towards the present).
   To take the example further, if we assume that utility in each period takes the
log form:

    U (c) = ln(c)                                                                (5.4)

and substitute the appropriate marginal utilities into Equation (5.3):

                          
               βp1 (1 + r)
    c2 =                     c1                                                  (5.5)
                   p2

which is really just a homogeneous FODE in c. If we replace the sub-
scripts 1 and 2 by t and (t + 1) respectively, we have familiar dynamic
notation – the 1, 2 notation is used in most intermediate micro texts to empha-
size the similarity between this problem and the single-period problem of
allocating one period’s income over a number of consumption goods in that
period.
   Note that the relation between consumption in the two periods depends on prices
in the two periods, and on the relation between the market and subjective discount
78   Intertemporal optimization
rates. To see this, replace β by 1/(1 + δ) to give:
                       
             p1 (1 + r)
     c2 =                 c1                                                      (5.6)
             p2 (1 + δ)

If, for simplicity, we assume that p2 = p1 , then c2 = [(1 + r)/(1 + δ)]c1 which
says that whether consumption is greater or less in the second period than the
ﬁrst will depend on whether r, the market interest rate, is greater or less than δ,
the subjective discount rate. If r is greater than δ, the interest the individual will
earn on an extra dollar saved will more than compensate for the subjective cost
of having to wait to consume that dollar, so he will, by saving, shift consumption
from the present into the future. If r is less than δ, he will tend to shift consumption
from the future into the present.
   If r = δ we have c2 = c1 , and he will, by judicious saving or borrowing, allocate
his two periods incomes so that consumption is equal in each period. Finally, if we
write p2 = (1 + g)p1 , where g is the inﬂation rate, we can write Equation (5.5) as:
                      
             β(1 + r)
      c2 =               c1                                                        (5.7)
              (1 + g)

which tells us that the way an individual allocates his income over time depends
on his subjective discount rate, the market (nominal) interest rate and the inﬂation
rate or, if we combine (1 + r)/(1 + g) into a single term, on the subjective discount
rate and the real interest rate. If r = δ in this case, then whether c2 is greater or
less than c1 will depend on the inﬂation rate. If the individual knows (or, more
realistically, expects) that prices are going to be higher in the second period than in
the ﬁrst, he will shift consumption into the present and c1 will be greater than c2 .
   Note that, while we have used the ﬁrst-order conditions for the problem to
derive a difference equation in consumption, consumption in each to the two
periods actually depends on the exogenous variables in the problem: prices, the
interest rate, the subjective discount rate and income in each of the periods. If,
for example, inﬂation is zero and the interest and subjective discount rates are
equal, the condition that consumption is equal in the two periods also means that
consumption will equal half of the present value of lifetime wealth in each period.
Changes in any of those variables will lead to changes in both c1 and c2 , although
the two periods’ consumption levels will change in such a manner as to ensure that
the ﬁrst-order conditions continue to hold with the new values of the exogenous
variables.

Dynamic programming
While the basic approach of the previous section applies to problems involving
more than two periods, and many intertemporal optimization problems do
involve more than two periods, writing a multi-period problem out in full as in
Equation (5.1) above can quickly become cumbersome. The alternative approach
most commonly used in discrete time problems is called Dynamic Programming,
                                                    Intertemporal optimization      79
a term which apparently was adopted because, at the time Richard Bellman devel-
oped the approach, linear programming was very popular in static analysis and the
term dynamic sounded – dynamic.
   In a sense, dynamic programming still divides the time horizon for the problem
into two periods, the present and the future. The basic idea is that we make decisions
about what to do now taking account of the fact that those decisions will have future
repercussions, in a very speciﬁc manner.
   We noted above that the ﬁrst-order conditions for the intertemporal consumption
problem amounted to weighing up the subjective beneﬁt we derived from spending
an extra dollar on consumption today against the utility we were foregoing by not
saving that dollar for future consumption. The forgone marginal utility of the future
consumption is the opportunity cost of increased consumption today.
   The same principle applies to multi-period consumption–saving problems, but
now when we spend an extra dollar today we are giving up a whole range of
options. We might have saved it one period and spent it, plus interest, tomorrow,
we might have saved it T periods into the future and used it, plus accumulated
interest, for retirement consumption, or we might have spent part of it tomorrow
and saved the rest for our retirement.
   The opportunity cost of the extra spending today is the alternative use of that
dollar which would have yielded the greatest increase in the present value of our
lifetime utility. This is just an intertemporal version of the deﬁnition of opportunity
cost – the opportunity cost of any action is the value (often subjective) of next best
alternative use to which we could have put the resources used up in the action we
are considering.
   In a static consumption problem the opportunity cost of spending an amount
of money in buying a unit of one commodity (and deriving the marginal utility
associated with consuming one more unit of that commodity) is the largest extra
utility we would have derived from spending that money on some other commodity.
In a dynamic problem the opportunity cost of spending today is the largest extra
lifetime utility we could have derived from saving the money and spending it at
some point in the future.
   In a dynamic programming problem, then, we are going to wind up with
a marginal beneﬁt equals marginal cost type of ﬁrst-order condition in which
the marginal beneﬁt is the extra beneﬁt we get from taking a certain action today
and the marginal cost is the greatest possible future beneﬁt we forego as a result
of having taken that action today.
   In the dynamic programming approach we select, optimally, the value of a partic-
ular choice variable today recognizing that things we do today have consequences
for the future, and assuming that we will make all future choices optimally. This
last assumption can jar a bit – it is easy enough to grasp the idea of making a
choice today on the assumption that all relevant past decisions which we have
made were made optimally. Here we are assuming that all future decisions will
be made optimally, recognizing that the set of possible future choices open to
us will be affected by what we do today. In other words, in an intertemporal
consumption problem, we need to recognize that if we increase consumption
80   Intertemporal optimization
today, it also means that the amount we could consume in the future has been
reduced.
    To formalize the discussion, let x be our choice variable (also known as a control
variable, since it is under our direct control) and let xt be the value we choose for
it in period t. Let s be what is termed a state variable, meaning a variable which
is of interest in our problem but whose value is not under our direct control. It is,
however, under our indirect inﬂuence in the sense that the behaviour of the state
variable over time is determined by an equation of motion, a difference equation
(usually ﬁrst order) which we write in general form as: st = Q(st−1 , xt−1 ). It
is the equation of motion for the state variable which ties the present and future
together.2
    In our consumption example above, consumption in each period was the con-
trol variable. As the state variable for an intertemporal consumption problem we
usually select the consumer’s stock of assets, at , where we deﬁne the two periods
assets as:

     a1 = y1
                                                                                (5.8)
     a2 = y2 + (y1 − p1 c1 )(1 + r)

which can be rewritten as an equation of motion:

     a2 = y2 + (a1 − p1 c1 )(1 + r)                                             (5.9)

or rewritten in a more general, difference equation form as:

     at+1 = yt+1 + (at − pt ct )(1 + r)                                        (5.10)

Clearly Equation (5.10) would also be the equation of motion for assets in a problem
with more than two periods.
   The objective of a dynamic programming problem is to ﬁnd a policy rule of
the form xt = ht (st ) which tells us the optimal value of the control variable in
period t, conditional on the value of the state variable in t, and taking into account
the effect (through the equation of motion for the state variable) that our choice of
x in period t will have for our options in the future.

Finite horizon problems
To get some idea of how dynamic programming works, consider a simpliﬁed
version of the two-period consumption problem we considered earlier. We shall
assume that y2 = 0, so that the consumer is living off his ﬁrst period assets y1 ,
which for consistency with the equation of motion for a2 , we shall label a1 . Assume
that we have already found h2 (a2 /p2 ), the policy rule which gives us the optimal
level of c2 for any given value of a2 , where we have divided a2 by p2 because
consumption in period 2 will depend on the real (in period 2 terms) value of assets
in that period.3
                                                       Intertemporal optimization   81
  The dynamic programming approach to analysing this problem involves:
                               
                                    a2
   Max: Ł = U (c1 ) + βU h2
      c1                            p2                                (5.11)
     s.t.: a2 = (a1 − p1 c1 )(1 + r)

Clearly, a2 is a function of c1 , so, when we differentiate Equation (5.11) with
respect to c1 in order to ﬁnd the ﬁrst-order condition we should differentiate a2
with respect to c1 . Doing this, we ﬁnd, as our ﬁrst-order condition:
                                             
                               a2    p1 (1 + r)
    U  (c1 ) = βU  (c2 )h2                                              (5.12)
                               p2        p2

since ∂a2 /∂c1 = −p1 (1+r). Now recall Equation (5.3), one of the versions of the
Euler equation for the consumption problem: clearly Equations (5.12) and (5.3)
will be the same expression if h2 (a2 /p2 ) = 1. In fact, that will prove to be the
case, but we shall set demonstrating it aside for the moment.
   The intertemporal consumption problem is not, of course, limited to two periods.
Consider a simple extension to three periods: we can deﬁne c3 and a3 as above,
and, also as above, deﬁne h3 (a3 /p3 ) as the policy function which gives us the
utility maximizing value of c3 for any value of period 3 assets. Period 3 assets
are determined by the same equation of motion as deﬁnes period 2 assets, namely
Equation (5.10), and we can write the consumer’s problem as:
                                                  
                                    a2                     a3
      Max: Ł = U (c1 ) + βU h2              + β 2 U h3                        (5.13)
        c1                          p2                     p3

In Equation (5.13), the term h3 (a3 /p3 ) is the optimal level of consumption in
period 3 as a function of a3 , but the value of a3 depends on a2 and c2 . The term
h2 (a2 /p2 ) is the solution value of c2 , which is also a function of a2 . We could
chain back a period further by noting that a2 depends on a1 and c1 , but for the
moment it suits our purpose to stop with a2 . That is because it lets us deﬁne the
whole of the expression βU (h2 (a2 /p2 )) + β 2 U (h3 (a3 /p3 )) as being a function
of a2 .
   Expression (5.13) is in utility terms, discounted back so that the utility is
measured in period 1 present value terms. However, we can also write it as:

    Max: Ł = U (c1 ) + βJ2 (a2 )
      c1
                                                                               (5.14)
     J2 (a2 ) = U (h2 (a2 /p2 )) + βU (h3 (a3 /p3 ))

where the subscript on J indicates the number of periods included in its
construction and where the term is now in period 2 present value terms.
   J2 (a2 ) is an intertemporal maximum value function. This means that it shows
the maximum present value of intertemporal utility, in period 2 terms, which the
consumer can derive from asset level a2 , assuming he distributes his spending
82   Intertemporal optimization
across periods in a manner which satisﬁes the ﬁrst-order conditions for utility
maximization subject to an intertemporal budget constraint. If we then pre-multiply
J2 (a2 ) by β, we have converted that utility level from period 2 terms to period 1
terms.
   Our problem now becomes Equation (5.13) where, as always, the maximization
is done subject to the intertemporal budget constraint as represented by the equation
of motion (5.10). Looking at Equation (5.13), however, we can see that since a2
and c1 both depend on a1 (and parameters like the prices and the interest rate), then
if we solve for the policy rule h1 (a1 /p1 ), the maximized value of Equation (5.13)
is in fact a function of a1 , letting us write:

     J3 (a1 ) = Max: (U (c1 ) + βJ2 (a2 ))                                     (5.15)
                 c1


   Note the subscript 3 on the left-hand side J term in Equation (5.15): as in the
case of the subscript on J2 , this indicates the number of periods’ utilities involved
in the construction of the J term, or, alternatively, the number of periods remaining
in the intertemporal optimization problem starting from the period in which we
are doing the optimization. For consistency, we could write the term u(h3 (a3 /p3 ))
as J1 (a3 ).
   In terms of our intertemporal consumption problem, J3 (a1 ) indicates the present
value of the maximum lifetime (using the term lifetime to indicate the length
of the planning horizon) utility the consumer can derive if he starts with asset
level a1 and allocates his spending across the three periods according to the
ﬁrst-order conditions (which are, after all, necessary conditions for utility maxi-
mization). Equation (5.15) is Bellman’s fundamental equation of optimality for our
problem.
   The fundamental equation of optimality is written in more general form
as:

     JT −t (at ) = Max: (U (ct ) + βJT −t−1 (at+1 ))                           (5.16)
                      ct


where the subscripts on a and c indicate the period in which the decision is being
made, counting from the beginning of the planning horizon, and the subscripts
on the J terms indicate the number of periods which will be affected by that
decision, or equivalently the number of periods left until the end of the planning
horizon, where T represents the end of the horizon. We place a subscript on the J
terms because the functional form of J can change from period to period. Whatever
the time period, though, J is, by deﬁnition, a maximum value function, so the J
inside the ‘Max’ operator on the right-hand side is unaffected by that operator
because it is already maximized.
   Similarly, when we ﬁnd the optimal policy ht (st ) we have to place a time
subscript on h because the form of that function – of the policy rule which tells us
what that period’s choice of x should be given the value of the state variable at the
beginning of that period – could change from period to period.
                                                                Intertemporal optimization   83
   We could write Equation (5.16) in more general terms yet, with at appearing
in the U (·) term: but what is ultimately important is the additive nature of the
objective function U (ct ). We are trying to maximize the intertemporally additive
series:

    U (c1 ) + βU (c2 ) + β 2 U (c3 ) + β 3 U (c4 ) + · · · + β T −1 U (cT )

subject to the equation of motion for a and any other constraints imposed on
the problem. While we could, as we noted above, include the contemporane-
ous a term as an argument in each of the U elements, all of the arguments in
the U function must have the same time subscript. This means that our utility
function cannot take the form U (c1 , c2 ), for example, meaning that the utility
we get from consumption today cannot depend on past or future consumption
levels.
   This additive structure means that the fundamental equation of optimality
embodies Bellman’s principle of optimality, which basically says that if we stop
part-way through and consider the remainder of our plan, that remainder will still
be optimal, given the level of the state variable at that point in the process. More
formally, the principle of optimality says that if a policy is optimal, then whatever
the initial value of the state variable, the rest of the plan will be optimal given
that initial state. This principle, which says that whatever segment of an intertem-
poral plan we look at will be optimal given the level of the state variable at the
beginning of the segment, only holds when we have the type of recursive intertem-
poral structure we set out above. It means that an optimal intertemporal plan is
what is referred to as time consistent, which simply means that if we do stop the
plan part way through and do a new optimization problem for the remainder of
the planning horizon, then, given the value of the state variable at the point at
which we do this, our new plan for the remainder of the horizon will be identical
to our original plan – we would not regret our original plan and we would not
change it.
   In order to be able to use Bellman’s equation in an optimization problem, we
need to derive a couple of results. The ﬁrst is simply the ﬁrst-order condition for
the maximization problem in Equation (5.16). Since c is our choice variable, the
ﬁrst-order condition is with respect to c in period t, giving:
                                                      
                                        ∂Q(at , ct )
    U  (ct ) + βJT −t−1 (at+1 )                          =0                           (5.17)
                                          ∂ct

where at+1 = Q(at , ct ) is the equation of motion for a, so the ﬁnal element of
the left-hand side of Equation (5.17) tells us how at+1 changes in response to
a change in ct .
   The second result which we need is what is sometimes known as the Benveniste–
Scheinkman condition, or the envelope condition. To ﬁnd it, we ﬁrst substitute
ht (at ) in for ct , indicating that we are working with an optimized function, and
84   Intertemporal optimization
then differentiate Equation (5.16) with respect to at , giving:
                                                                        
     ∂JT −t (at )                    ∂JT −t−1 (at+1 )    ∂Q(at , ht (at ))
                  = U (ht (at )) + β
        ∂at                               ∂at+1               ∂ht
                                                                        
                        ∂ht (at )      ∂JT −t−1 (at+1 )    ∂Q(at , ht (at ))
                   ×               + β
                         ∂at                ∂at+1                ∂at
                                                                                 (5.18)

where we have made use of the Q function after substituting ht (at ) into it. Now
if we compare the ﬁrst term on the right-hand side of Equation (5.18), with
Equation (5.17) (noting again that we have replaced ct by ht (at )), we see that
this whole, rather messy looking term is in fact equal to zero, leaving us, from
Equation (5.18), with:
                                                         
     ∂JT −t (at )     ∂JT −t−1 (at+1 )    ∂Q(at , ht (at ))
                  = β                                                            (5.19)
        ∂at               ∂at+1               ∂at

In other words, even though, at the optimum, the value of c depends on the value
of a, when we differentiate with respect to a on both sides of the optimized
fundamental equation of optimality, we need only look at the partial derivatives of
J with respect to a.
   To get an idea of how dynamic programming works, consider an even simpler
version of the intertemporal consumption problem; a special case known as the
cake eating problem.

Cake eating problem
In the cake eating problem the consumer begins the planning horizon with a given
stock of an asset, called cake, on which he must live for the remainder of the plan-
ning horizon. The cake, which is the state variable for the problem, and which we
label ‘s’, has no natural tendency to grow, meaning that there is no interest rate term
in this problem, and the price of a unit of consumption is 1 in each period, so there
are no prices. Letting ‘c’ be consumption, the equation of motion for the cake is:

     st+1 = st − ct                                                              (5.20)

which simply says that the amount of cake available at the beginning of the next
period will be the amount the consumer did not eat in the present period. In this
example we shall assume that T = 5, so the cake has to be consumed over ﬁve
periods. The consumer discounts the future according to the discount factor β.
  We could write out the consumer’s problem in full, beginning with the objective
function:

     U (c1 ) + βU (c2 ) + β 2 U (c3 ) + β 3 U (c4 ) + β 4 U (c5 )                (5.21)
                                                  Intertemporal optimization     85
plus the equations of motion:

    s2 = s1 − c1
    s3 = s2 − c2
                                                                             (5.22)
    s4 = s3 − c3
    s5 = s4 − c4

and the intertemporal budget constraint:

    c1 + c2 + c3 + c4 + c5 ≤ s1                                              (5.23)

which simply says that total lifetime consumption must be less than or equal to
the initial stock of cake.
   Rather than set up the Lagrangian for that problem, though, we shall use the
dynamic programming, recursive approach to ﬁnding the optimal time path of
consumption.
   In a ﬁnite horizon (a qualiﬁcation which will become important later) dynamic
programming problem, we begin by solving the ﬁnal period’s problem, which in
this case means that we must ﬁnd a rule which tells us how much the consumer
will consume in period 5 given whatever amount of cake happens to be available
to him at the end of the fourth period (the beginning of the ﬁfth period). The stock
available to him is s5 , so we are looking for a policy rule c5 = h5 (s5 ) which
maximizes U (c5 ) subject to c5 ≤ s5 .
   In solving this problem we are going to make use of what are known as terminal
conditions, a special case of what are known as terminal transversality conditions.
A terminal condition is a piece of extra information which tells us where the
system is going to end up – it is the counterpart of the initial conditions of which
we made use in our discussion of difference equations. Sometimes the terminal
condition for a problem is given, as in the case where we are told that there must
be a certain amount of cake left over, perhaps for the next generation, at the end
of period 5. Other times it can be deduced from basic economic principles, which
is the approach we shall follow in our problem.
   As we wrote the intertemporal objective function in Equation (5.21), our planner
derives no utility from anything that happens after the end of period 5. Sometimes
an expression like (5.21) will have, as its ﬁnal term, an expression like B(s6 ),
which is called a bequest, or scrap value function. A scrap value function tells us
how much beneﬁt the planner derives from units of the state variable which are
left over at the end of the planning horizon.4 In a consumption problem like ours,
B(s6 ) often reﬂects the utility the planner derives from knowing that he will be
leaving a bequest to his children, who are the next generation of planners.
   In Equation (5.21), there is no scrap value function, meaning that the planner
derives no utility from any cake left uneaten at the end of the ﬁve-period planning
horizon. We make the standard assumption that marginal utility is always positive,
which means that he will never decide to stop consuming because he is satiated.
86   Intertemporal optimization
Given these assumptions, we can write his ﬁfth-period problem in one-period
Lagrangian form as:
     Max: U (c5 ) + λ(s5 − c5 )                                                 (5.24)
       c5

which has ﬁrst-order condition:
     U  (c5 ) − λ = 0                                                          (5.25)
which, given the assumption that marginal utility is always positive, tells us that
the Lagrange multiplier λ is also positive, which in turn tells us that the constraint
in Equation (5.24) is binding. The fact that the constraint is binding tells us that
c5 = s5 which means that our policy rule for the ﬁfth period is:
     c5 = h5 (s5 ) = s5                                                         (5.26)
In other words, the optimal policy rule for consumption in the ﬁnal period of the
planning period is to eat all of the remaining cake, whatever quantity that may be.
   This policy rule, then, tells us that the maximized value of utility, which, con-
sistent with our earlier notation we will write as J1 (s5 ), is equal to U (s5 ). This,
then, is the value function for the ﬁfth and ﬁnal period of our ﬁve-period problem.
The next step in the recursive, dynamic programming approach is to ﬁnd J2 (s4 ).
   We know that we can write the fundamental equation of optimality – the Bellman
equation – for the fourth (and next-to-last) period as:
     J2 (s4 ) = Max: U (c4 ) + βJ1 (s5 )                                        (5.27)
                     c4

we also know, from the general equation of motion for cake, that s5 = s4 − c4
which means that ∂s5 /∂c4 = −1 which gives the ﬁrst-order condition for
Equation (5.27) as:
                     ∂J1 (s5 )
     U  (c4 ) = β                                                              (5.28)
                       ∂s5
   To ﬁnd ∂J1 (s5 )/∂s5 , note that we have already established that c5 = s5 and that
J1 (s5 ) = U (s5 ), from which we can see that ∂J1 (s5 )/∂s5 = U  (c5 ). Substituting
this into Equation (5.28) gives:
     U  (c4 ) = βU  (c5 )                                                     (5.29)
which is just an Euler equation.
  Our next step is to set up the problem for t = 3:
     J3 (s3 ) = Max: U (c3 ) + βJ2 (s4 )                                        (5.30)
                     c3

The ﬁrst-order condition for the choice of c3 is:
                             
                    ∂J2 (s4 )
    U  (c3 ) = β                                                               (5.31)
                      ∂s4
since, from the equation of motion for cake, ∂s4 /∂c3 = −1. Our problem now
is to ﬁnd an expression for ∂J2 (s4 )/∂s4 . We know that, by judicious substitution,
                                                           Intertemporal optimization   87
we can rewrite J2 (s4 ) = U (h4 (s4 )) + βJ1 (s4 − h4 (s4 )), but this turns out not
to be terribly helpful. It is at this point, though, that we can make use of the
Benveniste–Scheinkman condition. That condition tells us that [∂J2 (s4 )/∂s4 ] =
β[∂J1 (s5 )/∂s5 ] and we know that, since J1 (s5 ) = U (c5 ), remembering that
s5 = c5 and [∂J1 (s5 )/∂s5 = U  (c5 )], this gives [∂J2 (s4 )/∂s4 ] = βU  (c5 ) and,
from Equation (5.31):

    U  (c3 ) = β(βU  (c5 )) = β 2 U  (c5 )                                      (5.32)

  We can keep working backwards this way, with our next step being to evaluate:

    J4 (s2 ) = Max: U (c2 ) + βJ3 (s3 )                                            (5.33)
                  c2

from which, by using the ﬁrst-order condition and the Benveniste–Scheinkman
condition we ﬁnd U  (c2 ) = βU  (c3 ) = β 3 U  (c5 ) and, continuing back, we ﬁnd
U  (c1 ) = βU  (c2 ) = β 4 U  (c5 ) so we wind up with:

    U  (c1 ) = βU  (c2 ) = β 2 U  (c3 ) = β 3 U  (c4 ) = β 4 U  (c5 )         (5.34)

   Recall that, since β is a discount factor, it is less than 1. The utility function U ,
unlike the policy function ht , has the same functional form in each period, so
differences in the level of utility, and of marginal utility, from one period to the
next must be due to differences in consumption levels. Equivalently, if consumption
is the same in each period, the levels of utility and marginal utility will also be the
same across periods.
   From Equation (5.34), we see that marginal utility must be increasing over
time, since U  (c1 ) = βU  (c2 ) means that marginal utility in period 1 must be
some fraction β of marginal utility in period 2 and so on up. That in turn means
that consumption must be decreasing over time.
   If we were to assume that β = 1, so that the consumer did not discount future
utility relative to present utility, Equation (5.34) would tell us that the level of
his marginal utility of consumption had to be constant over time, meaning that he
consumed the same amount of cake in each period. Since he begins the problem
with a ﬁxed amount of cake, s1 , and the cake does not grow, he would, in the
case where β = 1, consume one-ﬁfth of his initial stock of cake in each period,
regardless of the precise functional form of his utility function U (c). When β is
less than 1, we know that consumption decreases over time, but his actual time
path of consumption depends on the form of U (c).
   To see this in more detail, assume that U (c) = ln(c), which means that U  (c) =
1/c. Then, from Equation (5.34), we have:
    c2 = βc1
    c3 = βc2 = β 2 c1
                                                                                   (5.35)
    c4 = βc3 = β 3 c1
    c5 = βc4 = β 4 c1
88   Intertemporal optimization
We know that optimality involves consuming the whole of the cake by the end of
the ﬁfth period, so that (c1 + c2 + c3 + c4 + c5 ) = s1 , which, after substitution
from Equation (5.35) gives:
                     s1
     c1 =
          (1 + β + β 2 + β 3 + β 4 )
                                                                                 (5.36)
                    βs1
     c2 =
          (1 + β + β 2 + β 3 + β 4 )

and we can ﬁnd similar expressions for c3 , c4 and c5 .
   Expressions like (5.36), though, while telling us how to ﬁnd consumption levels
in successive periods, are not the policy functions we are looking for. To ﬁnd
h(s) we need to make use of the equations of motion for s. For example, using
s2 = s1 − c1 in Equation (5.36) gives us:

                     βs2
     c2 =                          = h2 (s2 )                                    (5.37)
            (β + β 2 + β 3 + β 4 )

   If we continue this way and ﬁnd the other h(s) functions, we will ﬁnd that they
are all different. To take a simple example, if we assume β = 1, so that the planner
consumes one-ﬁfth of the original stock of cake in each period, we will ﬁnd that
c1 = s1 /5, c2 = s2 /4, c3 = s3 /3 and so on. This result, that the h(s) functions
differ across periods, generalizes to the case where assets do grow and where the
consumer has outside income.5
   We can also use the results we have derived to this point to ﬁnd the J (s) functions.
In our present example, we ﬁnd that:

     J1 (s5 ) = ln(s5 )
                                      
                        1             β                                          (5.38)
     J2 (s4 ) = ln          + β ln         + (1 + β) ln(s4 )
                     1+β             1+β

Neither of these are particularly intuitive, nor are the other J (s) functions which
we could proceed to ﬁnd. In fact, there is only a limited number of cases in which
the J (s) function can be solved for. We also note that the J (s) functions differ
across periods, a result which also applies to the other J (s) functions which we
have not derived here.
   We can check these functional forms by testing that the Benveniste–Scheinkman
condition holds, remembering that it only holds when the c values have been chosen
optimally, which means that there must be a precise relationship between s4 and
s5 if the condition is to hold. By applying the Benveniste–Scheinkman condition
to Equation (5.38) above, we can ﬁnd an expression for s5 as a function of s4 .
We can also derive a relation between s4 and s5 from our solved c functions and
the equation of motion for the cake. If the expressions we have derived for the
J functions in Equation (5.38) are correct, these two approaches to ﬁnding s5 as
a function of s4 should give us the same expression.
                                                      Intertemporal optimization   89
   To this point, our discussion has dealt with ﬁnite time problems. In the next
section we shall consider the additional complications which arise when we turn
to inﬁnite horizon discrete time optimization problems.


Inﬁnite horizon problems
The biggest difference between ﬁnite and inﬁnite horizon problems is that, in an
inﬁnite horizon problem there is no last period. This may sound trivially obvious,
but it turns out to be very important. The approach that we adopted in solving
our ﬁnite horizon cake eating problem was the standard dynamic programming
approach of starting in the ﬁnal period, where we invoked a terminal condition
to allow us to solve that period’s problem as a one-period problem, then solving
backwards, period by period, to the beginning of the planning horizon. If there is
no last period, we cannot do this.
   Fortunately, it is still possible to solve inﬁnite horizon problems by dynamic
programming. To see how, consider the Bellman equation:

    JT −t (st ) = Max: (U (ct ) + βJT −t−1 (st+1 ))                           (5.39)
                     ct


where the time subscripts on the control variable c and the state variable s referred
to the date as measured from the beginning of the problem, sometimes known as
elapsed time, and the subscripts on the J terms referred to the number of periods
left to go in the problem. In an inﬁnite horizon problem, both T − t and T − t − 1
will equal inﬁnity, meaning that, while the subscripts on c and s still make sense,
the ones on the J terms really do not. No matter where we happen to be in the
programme, the future looks as long as it ever did.
   Since the subscripts on the J terms do not make much sense in this context, we
can drop them, and rewrite Equation (5.39) as:

    J (st ) = Max: (U (ct ) + βJ (st+1 ))                                     (5.40)
                ct


writing the Bellman equation this way gives us an idea of how the next step will
work. In the ﬁnite time problem, the form of the J function changed as time
passed and as we approach the end of the planning horizon. In an inﬁnite horizon
problem, no matter how much time has elapsed we are never any closer to the end
of the horizon than we were before. This means that the reason for the J function
to change over time has vanished. Dropping the T subscripts from the J term in
Equation (5.40) indicates that, in an inﬁnite horizon problem, while the value of
the J function will change as s changes, the functional form of the J function
does not change. Similarly, if we consider the policy rule – the h(s) function –
in this light, we can see that while the value of the function (and therefore of the
optimal c) will change as s changes over time, the functional form of h(s) will not
change.
90   Intertemporal optimization
Cake eating problem
To see what this means for the process of solving an inﬁnite horizon optimization
problem, consider a variant on the cake eating problem, in which the cake is
allowed to grow over time.
   Speciﬁcally, consider the problem of maximizing utility from consumption,
U (c), over an inﬁnite horizon, where future consumption is discounted according
to the discount factor β and consumption is done out of accumulated assets, a.
Our asset this time is a ﬁnancial one which earns interest at the unchanging one-
period rate r. The consumer has no income other than interest on his assets, so the
equation of motion for a is:

     at+1 = (at − ct )(1 + r)                                                (5.41)

   Conceptually, Equation (5.41) says that the individual starts period t with a
stock of assets equal to at . He spends, or commits to spending (perhaps by placing
the appropriate amount in a non-interest-bearing account) an amount ct in period
t, leaving him to save (at − ct ) out of the wealth he possessed at the beginning
of period t. He earns interest at rate r on his savings through period t, giving him
period t + 1 wealth as speciﬁed by Equation (5.41).
   The Bellman equation for our problem is:

     J (at ) = Max: (U (ct ) + βJ (at+1 ))                                   (5.42)
                 ct

The ﬁrst-order condition for the maximization problem in Equation (5.42), making
use of the equation of motion for a when we differentiate through with respect to
ct , is:

     U  (ct ) = β(1 + r)J  (at+1 )                                         (5.43)

Since this condition has to hold for all values of t, we can also write:

     U  (ct−1 ) = β(1 + r)J  (at )                                         (5.44)

where, because the functional form of J does not change over time, neither does
the functional form of J  .
  Next, we write the Benveniste–Scheinkman condition for the inﬁnite horizon
problem as:

     J  (at ) = β(1 + r)J  (at+1 )                                         (5.45)

Combining Equations (5.43), (5.44) and (5.45) gives the Euler equation for
consumption for this problem:

                       U  (ct )
     U  (ct+1 ) =                                                           (5.46)
                      β(1 + r)
which is just a nonlinear FODE in c.
                                                    Intertemporal optimization     91
  Sometimes analysis of these problems stops at this point; other times authors
will assume a functional form for U (c), which is what we do here. As in our ﬁnite
horizon examples, we assume that U (c) = ln(c). Then, from Equation (5.46),
we have:

    ct+1 = β(1 + r)ct                                                          (5.47)

   When the objective of the analysis is to go beyond the difference equation
which is the Euler equation for consumption for this problem and ﬁnd the policy
rule c = h(a), the most common next step is to assume a functional form for
h(a) and try substituting it in the problem. In practice, there exists only a limited
number of forms of utility function (and therefore J (s) functions) for which this
approach will work, which is why the papers using this approach all seem to draw
on basically the same small set of utility functions.
   In our case, assume:

    ct = Xat                                                                   (5.48)

where X is an unknown constant whose value is to be determined. We assume
X is a constant because the h(a) function is unchanging over time. Next, take
the equation of motion for assets, at+1 = (at − ct )(1 + r), and substitute
Equation (5.48) for the a terms, with the appropriate time subscripts, giving,
after some cancellation:

    ct+1 = (1 − X)(1 + r)ct                                                    (5.49)

Combining Equation (5.49) with (5.47) above gives us a pair of equations relating
ct+1 and ct , both of which must be satisﬁed. The test of our assumed functional
form in Equation (5.48) is whether we can ﬁnd an expression for X which satis-
ﬁes this requirement. Equating Equations (5.47) and (5.49) gives β(1 + r)ct =
(1 − X)(1 + r)ct which holds only if X = (1 − β), making our policy rule:

    ct = (1 − β)at                                                             (5.50)

  Expression (5.50) satisﬁes our presumption that consumption in any period
would be a constant fraction (since β is less than 1) of assets in that period.
Substituting Equation (5.50) into the equation of motion for a gives:

    at+1 = β(1 + r)at                                                          (5.51)

Note that according to Equation (5.47), the Euler equation for this problem, ct+1 =
β(1 + r)ct , which, combined with Equation (5.51) tells us that (ct+1 /at+1 ) =
(ct /at ) which says that the ratio of (optimal) current consumption to current assets
remains unchanged over time. While this is a fairly simple example, it does demon-
strate that the lack of a ﬁnal period is not a fatal problem for dynamic programming
in inﬁnite horizon problems.
92   Intertemporal optimization
Uncertainty
Before we proceed to the next section, it is worth noting that the additive structure
of the Bellman equation in dynamic programming is well suited to the study of
problems involving an uncertain future. We have been assuming that there was no
uncertainty in period t about what the world would look like in period t + 1. In
practice, of course, the future state of the world is uncertain, a fact which should
be, and is, allowed for in intertemporal optimization problems. Much of ﬁnance
theory, for example, can be characterized as trying to use asset allocation to solve
intertemporal consumption problems when the return on each asset is uncertain.
We know the expected return on an asset, but the actual return will be a random
drawing from a probability distribution.
   We will leave dealing with problems of intertemporal optimization under uncer-
tainty until later in this chapter, but here, as a simple example, consider the case
in which there are two possible states of the future world, w1 and w2 respectively,
with state w1 eventuating with probability π and state w2 eventuating with prob-
ability (1 − π). We assume that the actual future value of the J function depends
on which of these two possible states of the world actually materializes, so that
we have J (st+1 ; wi ), i = 1, 2, where st+1 is driven by an equation of motion but
the value of wi which arises is beyond the planner’s control.
   In this case, the maximum value function becomes an expected maximum value
function, and the Bellman equation can be written as:

     J (st ) = Max: E(U (xt ) + βJ (st+1 )) = Max: U (xt ) + EβJ (st+1 )
           = Max: U (xt ) + πβJ (st+1 ; w1 ) + (1 − π)βJ (st+1 ; w2 )          (5.52)

   Consider the case where π is the probability of surviving the one period from
t to t + 1 and let J (st+1 ) be the maximum value function from the next period’s
intertemporal optimization problem, conditional on survival. Then (1 − π) is the
probability of dying before the beginning of period t + 1, and the conventional
assumption is that in that case J (st+1 ) = 0.6 In that case, Equation (5.52) becomes:

     J (st ) = max(U (xt ) + πβJ (st+1 ))                                      (5.53)

   Written in this form, we see that the survival probability, π, enters the problem
in the same way as does the discount factor, β. A lower probability of surviving
into the next period has the same effect on the individual’s optimal consumption
plan as does an increase in the rate at which we discount the future. Since β is
1/(1 + δ), where δ is the subjective discount rate, an increase in δ translates into
a reduction in β. If we assume that π can be written as 1/(1 + η) where η reﬂects
the appropriate mortality rate, we can write πβ as:
                                                 
                1         1                  1
     πβ =                       =                                              (5.54)
              1+δ       1+η           1 + δ + η + δη
  If δ and η are both sufﬁciently small, this will be approximately equal to 1/(1 +
δ + η) and we can treat observed discounting of the future as consisting of two
                                                     Intertemporal optimization      93
elements which enter in an identical fashion. One element reﬂects pure myopia
and the other reﬂects expectation of mortality. Some authors have suggested that
awareness of the probability of death is a more realistic explanation for the human
propensity to discount the future than is simple myopia.
   If this is an appropriate way to introduce uncertainty about length of life, it
means that the results we have derived to this point do not have to be changed in
any fundamental manner to accommodate uncertain life expectancies. All we have
to do is increase the discount rate δ – reduce the discount factor β – and proceed
as before. We will ﬁnd that individuals with a lower probability of survival will
discount the future more heavily and allocate their assets accordingly, tending to
shift more consumption towards the present.
   This conclusion has implications beyond the simple problems we have been
dealing with here. Investment problems, whether investment in physical capital or
investment in human capital, are simple extensions of the consumption–savings
problems we have been discussing. Anything which reduces the individual’s
propensity to save (i.e. increases his propensity to shift consumption towards
the present, away from the future) will also reduce his propensity to invest in
physical or human capital. When we are studying the behaviour of individuals
who live under circumstances beyond their control which reduce their probability
of survival, we should (and in fact do) ﬁnd that they will tend to save and invest
less than do otherwise identical individuals who have a higher exogenous value of
π. If higher community income translates into higher values of π, we should ﬁnd
a greater propensity to save and invest in richer communities than in poorer, which
could tend to act against convergence between richer and poorer countries. On the
other hand, if increases in π do indeed translate into a greater incentive to save
and to invest in both physical and human capital, public health measures which
reduce mortality rates might well prove to be important components of successful
economic development policies; perhaps, in the case of countries with very low
values of π, more important than policies focussing on investment in physical
capital.
   One ﬁnal note – in practice, even within a single country, π is not constant.
It changes as individuals age, and also changes over time as life expectancy in
general, increases. Setting aside the general increase in life expectancy, the fact that
π changes with age means that for the individual it changes over time, even if there
is no general upward drift in life expectancy. This means, in general, that, as indivi-
duals age, they may well tend to discount the future more heavily. This in turn is a
reason why empirical exercises starting from individual intertemporal optimizing
behaviour but working with aggregate data might do well to take account of the
age distribution of the population whose behaviour they are studying.

Lagrange Multiplier approach
While dynamic programming is the most common approach to solving discrete
time intertemporal optimization problems, Chow (1997) has proposed an alter-
native, Lagrange Multiplier approach. Most authors have avoided the Lagrange
94   Intertemporal optimization
Multiplier approach, on the assumption that it required keeping track of too many
summation signs to make it tractable, but Chow argues that the difﬁculties are
overestimated and the beneﬁts of this approach underestimated.
    Following Chow’s notation (but working in a world with no uncertainty), let
r(xt , ut ) be the expression for the objective function for the problem at time t,
where xt is the value of the state variable for the system, x, at time t and ut the
value of the control variable, u, at time t. Labelling u a control variable means that
it is a choice variable, that its value is chosen by the planner (sometimes subject
to constraints). Labelling x a state variable means that its value describes the state
of the system at any point in time. The value of x is not at the planner’s discretion,
but is determined by the equation of motion for x, which we shall write as:

     xt+1 = f (xt , ut ),     t = 0, . . . , T                                 (5.55)

   Here, Equation (5.55) tells us that, given the value of x in period t, and given
the function f (x, u) which describes how x evolves over time, when the planner
has chosen the value of the control variable u in period t the value of x in t + 1
is also determined. In an intertemporal optimization problem, especially when x
enters the objective function, r(x, u), this means that in choosing the value of the
control variable u in period t the planner has to take account not only of how that
choice affects the value of the objective function at t but also of how it will affect
the value of the objective function in t + 1.
   In most intertemporal optimization problems, future values of the objective
function are discounted, so that we are working in present value terms: let β =
1/(1 + δ) be the subjective discount factor, where δ is the planner’s subjective
discount rate. The Lagrangian for this intertemporal optimization problem is:

          
          T
     Ł=         β t r(xt , ut ) − β t+1 λt+1 (xt+1 − f (xt , ut ))             (5.56)
          t=0

where the summation is over the planning horizon, usually written 0 to T , where
T could be ∞. Our problem is to choose ut and xt , t = 0, . . . , T , to maximize
Equation (5.56).
   Note that in Equation (5.56) we have applied a discount factor to the Lagrange
Multiplier λt+1 . This is a convenience which puts all parts of the problem explicitly
on present value terms, and means that the multiplier λt+1 itself is in current value
terms. Note also that the subscript on the multiplier, and the exponent on the
discount factor applied to the multiplier, agree with the time subscript on the ﬁrst
x term in the multiplier part of the expression.
   Next, ﬁnd the ﬁrst-order conditions for maximizing Equation (5.56) with respect
to both u and x. We can treat x as a control variable because the equation of motion,
which we have built into the Lagrangian, turns out always to be satisﬁed and so
actually constrains the possible values x can take on. This is, in general, how
a Lagrangian expression works, even in the static case – it converts a problem
of optimization subject to constraint into an equivalent unconstrained problem.
                                                     Intertemporal optimization      95
To see this, try substituting in the intertemporal optimization problem for all of
the values of x, using Equation (5.55) above (with appropriate time subscripts),
to eliminate all of the x terms. The resultant expression will be extremely messy,
and the ﬁrst-order conditions for that problem will be identical (apart from a bit
of equating and substituting) to those which we are about to derive.
   The ﬁrst-order conditions for Equation (5.56), t = 0, . . . , T are:

     ∂Ł       ∂r(xt , ut )               ∂f (xt , ut )
         = βt              + β t+1 λt+1                =0
     ∂ut         ∂ut                         ∂ut
                                                                                 (5.57)
     ∂Ł       ∂r(xt , ut )                        ∂f (xt , ut )
         = βt              − β t λt + β t+1 λt+1                =0
     ∂xt         ∂xt                                   ∂xt

There are a couple of things which should be noted about the ﬁrst-order conditions.
First, they hold for all values of t, so we do not really have two equations, we have as
many equations as there are discrete time periods in our problem. Second, we will
be able to cancel out quite a few β terms. And third, it is important to note the role
of xt as an overlap term. If we were to write Equation (5.56) out in full, expanding
according to the summation operator, we would ﬁnd that xt appears twice in the
constraint part, once as we have shown above and once as the ‘leading’ part in the
period t − 1 version of Equation (5.56). This means that, when we differentiate
with respect to xt we will wind up with two elements, one from −β t λt xt and one
from β t+1 λt+1 f (xt , ut ).

Finite horizon
To see how the Lagrange Multiplier approach works in an economic problem,
consider the cake eating problem again. Our objective is to maximize utility over
a horizon running from t = 1 to T where ct stands for consumption in period t,
the control variable, and utility in period t is given by ln(ct ). The amount of cake
left in period t + 1, st+1 , is the state variable, and is determined by the equation
of motion:

    st+1 = st − ct                                                               (5.58)

Equation (5.58) says that the amount of cake left in t + 1 equals the difference
between the amount of cake available at the beginning of period t and the amount
that was consumed in t. Cake does not grow. For simplicity, we assume that β = 1,
that is, that the individual does not discount the future. The Lagrangian expression
for this problem is:

          
          T
    Ł=          ln(ct ) − λt+1 (st+1 − st + ct )                                 (5.59)
          t=1

where we shall assume that the sum runs from t = 1 to T (i.e. there is no period
t = 0 here).7
96     Intertemporal optimization
     The ﬁrst-order conditions for problem (5.59) t = 1, . . . , T are:

       ∂Ł    1
           =    − λt+1 = 0
       ∂ct   ct
                                                                              (5.60)
       ∂Ł
           = −λt + λt+1 = 0
       ∂st
where st is the overlap term. From the ﬁrst-order conditions we note that λt = λt+1
which tells us that the value of the Lagrange Multiplier remains unchanged over
time. We also note that the inverse of consumption in one period (which, given the
natural log form we have chosen for the utility function is the marginal utility of
consumption) is equal to the value of the multiplier in the next period. Since these
conditions hold for all t, it is also the case that (1/ct−1 = λt ) so, combining the
ﬁrst-order conditions, we ﬁnd (1/ct−1 = 1/ct ) from which it is obvious that, for
all t, ct−1 = ct which tells us that, given the absence of discounting, optimality
requires the amount of cake consumed to be the same in each period.
   Since this is a ﬁnite horizon problem (T is ﬁnite, because we are not trying to
make the cake last forever) with no bequest element in the intertemporal utility
function, there is no gain to be had from any cake left over after period T . This
tells us that consumption in T , cT , should equal the stock of cake remaining at the
beginning of T , sT , so that sT +1 = 0. But given that ct is constant over time, if
cT = sT , then so does cT −1 , and so also does cT −2 and every earlier value of c.
Total consumption, then, is T sT . Since we want to consume the whole of the cake,
and since we started out with a quantity of cake equal to s1 , by deﬁnition, all of
this tells us that T sT = T cT = s1 from which cT = s1 /T and, since c is constant
over time, this gives us:
              s1
       ct =      ,   t = 1, . . . , T                                         (5.61)
              T
   If T = 5, we consume in each period a quantity of cake equal to one-ﬁfth of the
initial stock of cake, just as we concluded in the dynamic programming version
of the cake eating problem.8 This example certainly seems to provide support for
Chow’s argument that the Lagrange Multiplier method is actually much simpler
to use than many people assume.
   We should note, at this point, that the Lagrange Multiplier method only gave us
the ﬁrst-order conditions – the condition that said that the level of consumption
had to be the same in each period. The ﬁnal stage in the analysis, in which we
determined what that level would be, required us to invoke an extra piece of
information, a transversality condition. In this case, that information told us that
there was no point in leaving any cake uneaten at the end of the planning horizon.
Implicitly, we also assumed that we did not want to have consumed the whole of
the cake before the end of the planning horizon. Cake was all we had to eat.
   These two conditions, one made explicitly and the other implicitly (although in
general it should be made explicit) tied down the solution to the problem. There
are, after all, an inﬁnite number of paths satisfying the condition that ct−1 = ct ,
                                                        Intertemporal optimization   97
but only one which also satisﬁes the condition that the stock of cake be completely
exhausted precisely at the end of the planning horizon (and that path will vary
depending on the size of the cake we start with and the number of periods in the
planning horizon). In this, the Lagrange Multiplier approach is no different from
the dynamic programming approach.

Inﬁnite horizon
Next, let us consider an application of the Lagrange Multiplier approach to an
extension of the cake eating problem. Again we have an intertemporal utility
maximization problem, and again we shall assume that the utility function in
period t is a natural log function, ln(ct ). In this problem, however, the planner is
assumed to have inherited a stock of wealth, w0 , at the beginning of the planning
horizon. His accumulated wealth earns interest at a constant rate r, and we shall
deﬁne R = (1 + r) as the interest factor. The equation of motion for his wealth is:

    wt+1 = R(wt − ct ),              t = 0, . . . , T                           (5.62)

so that, in period t + 1, his wealth consists of that portion of his period t wealth
which he did not consume in t, plus interest earned on that wealth. We shall, in
what follows, assume, at least initially, that T = ∞, so we have an inﬁnite horizon
problem, and we shall assume that he has a subjective discount factor β. The
Lagrangian for this problem is:

          ∞
          
    Ł=          β t ln(ct ) − β t+1 λt+1 (wt+1 − R(wt − ct ))                   (5.63)
          t=0


The ﬁrst-order conditions for the problem are:
                          
     ∂Ł               1
         = βt                  − β t+1 λt+1 R = 0
     ∂ct              ct
                                                                                (5.64)
     ∂Ł
         = −β t λt + β t+1 λt+1 R = 0
     ∂wt

These conditions can be simpliﬁed as (1/ct ) = βλt+1 R and λt = βλt+1 R, and
since the conditions must hold for all t, we also have ct = βRct−1 , a ﬁrst-order
difference equation in c. Whether the coefﬁcient on ct−1 is greater or smaller
than 1 depends on the relative sizes of the market interest rate, r, and the subjective
discount rate, δ, since βR = (1 + r)/(1 + δ). If the planner’s subjective discount
rate is greater than the market rate, δ > r and βR < 1 so ct < ct−1 , telling us
that consumption declines over time. This is a standard result – if an individual
discounts the future at a rate in excess of the market interest rate, they will tend to
shift consumption away from the future, into the present.
98   Intertemporal optimization
   Note that combining the ﬁrst-order equations with the equation of motion for w
gives us a system of two ﬁrst-order, linear difference equations in c and w:

     ct = βRct−1
                                                                              (5.65)
     wt = R(wt−1 − ct−1 )

Before we analyse this system, note that while Equation (5.65) characterizes the
behaviour of c and w over time, it is not necessarily in the form that most interests
us for empirical purposes. In particular, Equation (5.65) tells us how consumption
changes over time, but it may well be that what we are really interested in is
an expression relating consumption in period t to wealth in period t – a type of
consumption function (although based on wealth rather than current income).
   The solution form that is usually given in the literature for that relation is:

     ct = (1 − β)wt                                                           (5.66)

which says that consumption in period t is a fraction (1 − β) of wealth (since
β = 1/(1 + δ), we could also write this as (δ/(1 + δ))wt ). Note that the absence
of a time subscript on β means that this relation is assumed to hold unchanged in
each period, so that consumption in any period is a constant fraction (1 − β) of
wealth in that period. Which simply says that the ratio of consumption to wealth
is constant over time, even though the levels of c and w may be changing.
   To see whether the form (5.66) ﬁts with our results, assume ct = γ wt where
γ is some unknown constant. Next, substitute for the w terms in Equation (5.65),
giving (ct /γ ) = R(ct−1 /γ − ct−1 ) from which we have:

     ct = R(1 − γ )ct−1                                                       (5.67)

Expression (5.67) is consistent with (5.65) if (1−γ ) = β (from which γ = (1−β)),
so Equation (5.66) is consistent with Equation (5.65).
   Before considering this point further, we shall return to a point we made earlier,
that Equation (5.65) is a system of two, linear difference equations. In matrix
notation, it gives:
                                 
      ct     βR       0        ct−1
          =                                                                   (5.68)
      wt    −R        R        wt−1

Note that the difference equations in this system are homogeneous. The roots of
the matrix of coefﬁcients in Equation (5.68) are R and βR. R is greater than 1,
and we shall assume, for the sake of the illustration, that βR is less than 1, which
means that the planner’s subjective discount rate, δ, is greater than the interest
rate, r. This means that the equilibrium of the system (which, since both equations
are homogeneous, is at the origin) is a saddlepoint.
   As our next step, consider the characteristic vectors associated with each of
the roots. Taking the larger root, R, ﬁrst, solving for its characteristic vector
                                                    Intertemporal optimization      99
(or eigenvector) requires solving:
                          
       (β − 1)R 0 w11            0
                             =                                                  (5.69)
          −R       0 w21         0

from which we see that w11 must be zero for the equation to be satisﬁed. The
second term, w21 , can take on any value, so we normalize it to equal 1, giving
(w11 , w21 ) = (0, 1) . Solving for the eigenvector associated with the second root,
βR, which we shall write as (w12 , w22 ) , we ﬁnd, on normalizing w22 to equal 1,
that (w12 , w22 ) = ((1 − β), 1) .
   Recalling that Xt = AXt−1 can, when the eigenvectors of A are distinct, be
written as Xt = W t W −1 X0 where W is the matrix composed of the eigenvectors
of A, and X0 is the vector of initial values of, in this case, c and w, we have:
                                                        
                                                1
                                                     1
              0 (1 − β)                     β − 1       
     W =                     ,     W −1 =  
                                                         
                                                                              (5.70)
              1     1                          −1
                                                       0
                                              β −1
from all of which we ﬁnd (with λ1 = R1 and λ2 = βR):
                                                
                                         1
                       λt 0               1  
      ct      0 (1 − β)       1      β − 1       c0
           =                                                                  (5.71)
     wt       1      1                 −1        w0
                             0 λt2             0
                                       β −1
that is:

     ct = 0λt1 + c0 λt2                                                         (5.72)
                                        
                      c0              c0
     wt = w0 −              λ1 +
                             t
                                             λt2                                (5.73)
                  (1 − β)          (1 − β)
   From Equations (5.72) and (5.73) we see that consumption is driven solely by the
stable root of the system; hence the FODE in Equation (5.65). Recalling the point
we noted above, that the solution to this problem is often given in the literature as
ct = (1 − β)wt we see that, if we assume, as we should, this form applies to c0 and
w0 , the weight on the λ1 term in Equation (5.73) also goes to zero, and wt will also
be driven only by the stable root of the system. Further, assuming c0 = (1 − β)w0 ,
the ratio ct /wt which we derive from Equations (5.72) and (5.73) is (1 − β) for
all t, giving ct = (1 − β)wt , as it should.
   This manipulation, then, gives us an idea of why ct = (1 − β)wt works as
a solution to the present problem, and while it will in general be faster to experiment
with likely solution forms than to go through the whole of this derivation, having
a bit more of an understanding of what is going on is generally useful.
   These results also let us return to our discussion of transversality conditions.
Because both of the difference equations in our system are homogeneous, the
100    Intertemporal optimization
equilibrium for the system is at the origin. Technically, while, under the assump-
tions we made above, our system does tend to converge to the equilibrium, it takes
an inﬁnite amount of time to do so. This suggests that the solution ct = (1 − β)wt
might only work in the inﬁnite horizon case.
   To consider this point, look at the case where T is ﬁnite. Assuming that there is
no bequest motive, and therefore no reason to leave any wealth behind after T is
reached, Equation (5.65) suggests that we should have wT +1 = R(wT − cT ) = 0
from which we have:

      cT = wT                                                                  (5.74)

which is not consistent with ct = (1 − β)wt unless β = 0, which is not the case
if we are assuming β to be constant, as we are. It is, however, consistent with
Equation (5.65) ct = βRct−1 since this requires only that cT −1 = wT /βR, and
so on back.9 In other words, as we asserted earlier, the solution to the Lagrange
Multiplier version of the optimization problem yields necessary conditions, which
will always be satisﬁed along a solution path. The transversality condition, which
depends on the planning horizon assumed, determines which candidate path will
actually be followed.
   While dynamic economic models can, as we have seen, display a wide range
of dynamic behaviour, dynamic models derived from intertemporal optimization
problems virtually always display saddlepoint dynamics. In fact, if an intertempo-
ral optimization model does not display saddlepoint dynamics, you have probably
made a mistake in calculations.
   Saddlepoint dynamics in a 2 × 2 system, as we have seen, means that the
system has one stable and one unstable root. We saw in the example preced-
ing that saddlepoint dynamics does not have to mean explosive behaviour – if
the weight on the unstable root is zero, only the stable root will operate and
the system will converge on its long-run equilibrium point. This case is referred
to as being on the stable branch; in general being on the stable branch will be
the optimal trajectory for an inﬁnite horizon problem. When the optimization
problem has a ﬁnite horizon following the stable branch to the long-run equilib-
rium will, in general, not be optimal, and we will need some other transversality
condition to pin down the trajectory the system will actually follow. In this
case, both the stable and the unstable roots will be operative, in the sense that
neither will have a zero weight. The system will still display saddlepoint dynam-
ics: this type of behaviour is associated with optimization, not with a particular
horizon.
   While this could, in principle, involve negative roots, alternations, like cycles,
are generally not associated with optimization. Basically, (thinking in inﬁnite
horizon terms) why spend time cycling or jumping around the long-run equilibrium
of the system when you could head there directly? By far the most likely outcome
of an intertemporal optimization problem involves having two positive roots, one
greater than 1 and the other less than 1. There is actually a pair of conditions which
can be used to test for this case (or at least to establish conditions under which it
                                                  Intertemporal optimization      101
will hold). We will have saddlepoint dynamics with positive roots if:

    1 − Tr(A) + Det(A) < 0
                                                                               (5.75)
    1 + Tr(A) + Det(A) > 0


Examples

Model of investment in health
We shall now consider an intertemporal optimization problem – a simple version
the Grossman (1972) model of investment in health capital. In this model, the indi-
vidual derives utility from consumption goods, C, and from his state of health, H .
His utility function is written in general form as U (Ct , Ht ). He can buy consump-
tion goods out of his current income, Y , but he cannot buy health directly. Instead,
he buys goods which affect his health. We denote these goods by It and assume
that he derives no direct utility from them.10 His health in period t is determined
by the equation of motion:

    Ht = Ht−1 (1 − φ) + It−1                                                   (5.76)

In Equation (5.76), φ represents the natural rate at which health declines per period
if we take no measures to preserve it. For simplicity we assume φ to be constant.
In practical applications it probably should be a function of age.
   For convenience we assume that the individual spends the whole of his income,
Y , in each period, giving:

    Yt = Ct + pIt ,     ∀t                                                     (5.77)

Here the price of health investment goods is denoted by p and we have normalized
the price of consumption goods to 1. We shall assume that his income is the
same in each period, so that Yt = Y, ∀t. Rearranging Equation (5.77), then,
gives Ct = Y − pIt which we shall substitute into the utility function, giving us
U (Y − pIt , Ht ) and letting us treat It as the choice, or control, variable for the
problem.
   The fact that the individual’s current state of health is determined by the
difference equation (5.76) is the reason we refer to the individual as investing in
health capital. Decisions which the planner makes about health-related behaviour
today have implications for his health over many future periods. Since he derives
no direct utility from I -type goods, but sacriﬁces utility from C-type goods when
he decides to invest in his health, he has to decide the extent to which he is willing
to sacriﬁce current utility in exchange for the utility he will derive in the future
as a result of being in better health. The need to sacriﬁce today in order to beneﬁt
tomorrow is the mark of an investment decision.
102    Intertemporal optimization
  The Lagrangian for this problem is:

           
           T
      Ł=         β t U (Y − pIt , Ht ) − β t+1 λt+1 (Ht+1 − Ht (1 − φ) − It )   (5.78)
           t=1

and the ﬁrst-order conditions are:
                    −pβ t UCt + β t+1 λt+1 = 0
                                                                                (5.79)
      β t UHt − β t λt + β t+1 λt+1 (1 − φ) = 0

where UCt is the marginal utility of consumption of C-type goods, evaluated
at period t values, and UHt is the marginal utility of health capital, also evaluated
at period t values. Combining the two equations yields:

      pUCt−1 = βUHt + pUCt (1 − φ)β                                             (5.80)

   Equations (5.80) and (5.76) constitute a system of two FODE in I and H .
Equation (5.80) is actually the implicit form of a nonlinear difference equation;
to proceed further with this example we need to make some more simplifying
assumptions. We shall assume that the marginal utilities are linear in H and C
(we shall again use the budget constraint to substitute C out) and, particularly
unrealistically, we shall assume that UCH , the cross-partial of the utility function
in C and H , is zero. Thus we have:

      UCt = fC + fCC Ct ,           fC > 0,     fCC < 0
      UHt = fH + fH H Ht ,         fH > 0,     fH H < 0                         (5.81)

  To ﬁnd the period t − 1 marginal utilities we replace Ct and Ht by Ct−1 and
Ht−1 . Making the substitutions in equation (5.80) gives, as our pair of difference
equations:

      β1 + βp(1 − φ)2 = p3
                                                                                (5.82)
      Ht = Ht−1 (1 − φ) + It−1

where 1 = (fH + fH H Ht ), 2 = fC + fCC (Y − pIt ) and 3 = fC + fCC (Y −
pIt−1 ). The system (5.82) is actually in the form:

      BXt = AXt−1 + Z                                                           (5.83)

Isolating the Xt vector on the left-hand side requires that we ﬁnd Xt =
B −1 AXt−1 + B −1 Z. The matrix of coefﬁcients, B −1 A, which is key to analysing
the dynamic behaviour of the system, is, in this case:
               2                          
                p fCC + βfH H       fH H
                                          
     B −1 A =  βp 2 (1 − φ)fCC p 2 fCC                                   (5.84)
                        1         (1 − φ)
                                                  Intertemporal optimization     103
   The trace and determinant of this matrix are both positive, so we have two
positive roots. Checking the saddlepoint condition, we ﬁnd that (1 − Trace +
Determinant) < 0 and that (1 + Trace + Determinant) > 0, so one of our roots is
greater than 1 and the other positive but less than 1, meaning that the equilibrium
is a saddlepoint.
   Finally, we have written the model as a pair of FODEs in I and H . In practice,
while we may be able to observe I , we cannot observe H , at least not in cardinal
units. If we want to do an empirical study of health investment behaviour at the
individual level, we obviously need to be working with variables which we can
measure. The best approach, therefore, might be to take advantage of the fact that
a system of two FODEs can be collapsed into a single second-order equation. In
the present case we would obviously want to work with the observable variable I ,
so we should be looking at estimating a SODE in I , with individual-level data.

Stochastic optimization
In this section we develop as an example of a stochastic optimization problem the
model of Samuelson (1969). Consider the case of an investor facing a choice of
two assets, a safe asset which pays a risk-free interest rate of r per period, and a
risky asset which pays a stochastic return of zt per period, with E(zt − r) > 0.
The risky asset’s rate of return is characterized by a probability density function
which we shall write as f (z). The lack of a time subscript on r means that we are
assuming the riskless interest rate to be constant over time.
   The individual’s problem is to choose a consumption–savings plan to maximize
the expected present value of his lifetime utility:

         ∞
         
    E0         β t U (ct )                                                     (5.85)
         t=0


where the summation is over all values of t, and for simplicity we shall deal with
the inﬁnite horizon case. The subscript on the expectation operator indicates that he
is making his lifetime consumption–savings plan at the beginning of the planning
horizon at time t = 0.
   His wealth, W , evolves according to a difference equation which in turn depends
on st , the proportion of his portfolio which he invests in the risky asset in each
period. The proportion he invests in the riskless asset is, of course, (1 − st ) and
0 ≤ st ≤ 1. For simplicity we shall assume an interior solution, meaning that s is
a positive fraction. Given these assumptions, his wealth evolves according to:

    Wt+1 = (1 + r)(1 − st )(Wt − ct ) + (1 + zt )st (Wt − ct )                 (5.86)

which we shall rearrange to give:

    Wt+1 = [1 + r + st (zt − r)] (Wt − ct )                                    (5.87)
104    Intertemporal optimization
  The Lagrangian for our problem, then, is:
               ∞
                                                                                    
      Ł = E0          β t U (ct ) − β t+1 λt+1 Wt+1 − (1 + r + st (zt − r))(Wt − ct )
                t=0
                                                                                 (5.88)

Our choice variables are ct , Wt and st , and the ﬁrst-order conditions are
respectively:

      Uc (ct ) = βEt λt+1 (1 + r + st (zt − r))
          λt = βEt λt+1 (1 + r + st (zt − r))                                    (5.89)
           0 = Et λt+1 ((zt − r)(Wt − ct ))

Note that in each of these conditions we have written the expectations operator, E,
with a ‘t’ subscript. This is because at time t, all past values of all of the variables
in the system are known, and we form expectations only about the unknown future
values of the variables. Even ct can be treated as known, since in period t it is
a choice variable, meaning that we will wind up picking a single, non-stochastic,
value of c. We treat zt as stochastic since its actual value is not known until after
consumption and savings decisions have been made for period t. Think of the
return on an asset in period t as not being paid until the end of the period, but of
the consumption and portfolio decisions for period t as having to be made at the
beginning of the period.
   From the ﬁrst and second equations in (5.89), we have λt = Uc (ct ) and since
the choice of time subscript is arbitrary, we also have λt+1 = Uc (ct+1 ) which
gives Equation (5.89) as:

      Uc (ct ) = βEt Uc (ct+1 )(1 + r + st (zt − r))                             (5.90)

which tells us about the optimal relation between the marginal utility of consump-
tion over time, and therefore about the time pattern of consumption itself. Note,
however, that since ct+1 and zt are, from the perspective of period t, stochastic
variables, the right-hand side of Equation (5.90) is the expectation of the product
of two random variables, which means that we cannot simply divide through by
(1 + r + st (zt − r)).11
   Our next step is to see if we can ﬁnd a relation of the form ct = g(Wt ) to
characterize the relation between wealth and consumption in period t. We have
found such expressions in non-stochastic problems, but there was always a nagging
sense that they might have been artefacts. After all, in a strictly non-stochastic
problem, time paths of c and W are determined at the beginning of the planning
horizon and do not change so long as the conditions of the problem do not change.
This creates the impression that any observed relation of the form ct = g(Wt )
simply reﬂects the evolution of the two variables, rather than representing a causal
relation between them. If the conditions of the non-stochastic problem do happen
                                                    Intertemporal optimization      105
to change, we have to solve the new problem treating the point at which the change
occurred as the starting point for that new problem, but then things roll on smoothly
again.
   In a stochastic problem, W does change relative to its expected value as
realizations of the random variable z arrive, and we are clearly interested in how
c changes in response to random changes in W . If c does respond in a systematic
manner to random changes in W , we have a genuine, causal relation between c
and W which would be worth investigating econometrically.
   In order to advance with this question, we need to assume a form for the
utility function. As before, we assume that U (c) = ln(c), which gives, from
Equation (5.90):
                      
      1             1
         = βEt            (1 + r + st (zt − r))                                (5.91)
      ct          ct+1
   Next, for no better reason than that it works in the non-stochastic counterpart
of our problem, let us try, as a g-function, ct = γ Wt . Since we are looking
for a consumption–wealth relation which holds for all t in an inﬁnite horizon
problem, this implies that ct+1 = γ Wt+1 . Substituting into Equation (5.91) gives
the unpromising looking:
                           
       1                1
           = βEt              (1 + r + st (zt − r))                         (5.92)
     γ Wt           γ Wt+1
   Next, return to Equation (5.87), the equation of motion for W . Substituting for
ct on the right-hand side of Equation (5.87) gives Wt+1 = (1 + r + st (zt − r))Wt
(1 − γ ). Then, note that at the beginning of period t, Wt is known, meaning that we
can take it inside the expectations operator without seriously affecting anything,
all of which is to say that:
                 γ Wt (1 + r + st (zt − r))
    1 = βEt                                                                       (5.93)
              γ Wt (1 + r + st (zt − r))(1 − γ )
We can simplify Equation (5.93) by doing some cancellation on the right-hand side,
and with only non-stochastic terms on the right-hand side, we obtain γ = 1 − β,
giving, as the relation we were looking for:

    ct = (1 − β)Wt                                                                (5.94)

Note that Equation (5.94) says that c does indeed respond to the changes in W
which result from the stochastic nature of z.
   While we have found an expression for current consumption as a function of
current wealth, we have not actually solved what may be the most interesting part
of the problem, the choice of st . The reason for this is that we cannot solve for it, at
least not without detailed information on the probability distribution of z. We can,
however, get an idea of what is involved by returning to the third of the ﬁrst-order
condition in (5.89).
106   Intertemporal optimization
  Maintaining the assumption that the utility function has the natural log form
(with the type of risk aversion behaviour that this implies) and substituting
Equation (5.94) in for ct , we can write the third of the conditions in (5.89) as:
                            
              (zt − r)
    Et                          =0                                             (5.95)
         1 + r + st (zt − r)
where, since β is non-stochastic, we have taken (1 − β) outside the expectations
operator. We cannot actually go any further in solving for
                                                         s. To see why, recall that,
for a function g(x) of a random variable x, Eg(x) = g(x)f (x)dx where f (x)
is the probability density function for x. Applying this to Equation (5.95) gives:12
                          
               (z − r)
                              f (z) dz = 0                                    (5.96)
          1 + r + s(z − r)
Note that the integration is over the range of possible values of z, not over t. Note
too that because the probability distribution of z does not change over time, we
were able to drop the t subscript from z, which means that the same value of s will
solve equation (5.96) in each period.
   The optimal proportion of W to allocate to the risky asset in each period will be
the value of s which guarantees that Equation (5.96) holds, but without knowing
the exact functional form of f (z) we cannot say anything about what this value
will actually be. The convention is simply to say that this expression can be solved
for s, and far be it from us to break with convention.
   As a simple extension of the basic portfolio choice model, consider the case
where, in addition to the riskless asset, we have two risky assets, with stochastic
rates of return z1t and z2t , respectively. This means that we have two optimal
portfolio share values to solve for, s1t and s2t . We shall assume that both s values
are positive fractions, and that their sum is less than 1 (we could add these to the
problem as constraints – for simplicity we are assuming an interior solution).
   The basic analysis of the problem is as before, so we do not work it through.
The difference arises in the equations which must be solved for s1t and s2t : in this
case we have two integral equations:
                                               
                        (z1t − r)
     Et                                            =0
          1 + r + s1t (z1t − r) + s2t (z2t − r)
                                                                             (5.97)
                        (z2t − r)
     Et                                            =0
          1 + r + s1t (z1t − r) + s2t (z2t − r)
   These are integral equations because they involve the expectations operator, Et .
They must be solved simultaneously for the optimal values of s1t and s2t . The
integrals involve the density functions of the risky assets, and (as is clear from the
fact that both assets appear in both equations) this clearly means looking at their
joint density. Thus, in determining their optimal shares we must take account not
only of the variances of the returns on the individual assets but also of the covariance
between their returns. This is, of course, a standard result from portfolio theory.
6       Nonlinear difference equations




Introduction
The models we have been discussing to this point have basically been lin-
ear, and the analysis has been in terms of linear difference equations. Even
in Chapter 5, ‘Intertemporal optimization’, when we ran into expressions like
U  (ct+1 ) = U  (ct )/β(1 + r), which is a nonlinear ﬁrst-order difference equation
(FODE) in c, we assumed a form for the utility function which made things neatly
linear: if U (c) = ln(c), we had ct+1 = β(1 + r)ct , a linear, homogeneous, FODE.
   In practice, a great many economic models yield nonlinear dynamic relations.
Probably the most familiar of such models are various models of economic growth,
but consumption models of the sort we referred to above also yield nonlinear
relations, especially when the utility function is not a member of a fairly restrictive
class of functions.
   In the broadest terms, the introduction of nonlinearity does not change the
essence of a difference equation: we are still looking at an equation which describes
the evolution of a variable over time. We just happen to be writing something like
xt+1 = f (xt ) instead of something like xt+1 = a + bxt . The nonlinear form
includes the linear form as a special case, and permits a much broader range
of types of trajectories to develop. We can best see this by considering what
nonlinearity of the f (x) function means for the phase diagram for a FODE.


Phase diagrams
Consider the case where xt+1 = f (xt ) with f  (x) > 0 and f  (x) < 0. Let
f (0) = 0. Note that under these assumptions, while the slope of the f (x) function
ﬂattens as x increases, it never becomes negative.
   If we plot this curve on a graph which has xt+1 on the vertical axis and xt on the
horizontal, we get something which looks like Figure 6.1(a). We have also plotted a
45◦ line on Figure 6.1(a). As in the case of the phase diagram for a linear FODE, the
intersection of the two curves marks an equilibrium point, a point where xt+1 = xt .
   Since both the f (x) function and the 45◦ line go through zero, xt+1 = xt = 0 is
an equilibrium of the system. If we were dealing with a linear FODE, this would
be the only equilibrium of the system.
108    Nonlinear difference equations


      (a) xt+1
                                                     45°

                                                      f(xt )

                                x*




                                                                        xt
          0      x0                             x0

      (b) xt+1                              f(xt )
                                                     45°

                                     x **




                           x*




                                                                        xt
          0   x0                     x0

      (c) xt+1
                                                     45°




                                                               f(xt )




                                                                        xt
          0           x0

      Figure 6.1 Phase diagrams for nonlinear difference equations.


   In Figure 6.1(a), though, there is a second point at which the f (x) curve cuts
the 45◦ line, at the x value we have labelled x ∗ , and since this is also a point at
which xt+1 = xt , it is also an equilibrium point. A nonlinear difference equation
can, then, have multiple equilibria, one for each time the f (x) function crosses
the 45◦ line.
                                               Nonlinear difference equations      109
   In Figure 6.1(a), as we have drawn it, the second, upper, equilibrium point
occurs at a point where the f (x) line crosses the 45◦ line from above, with a slope
which is positive and less than 1. In contrast, at the ﬁrst, lower, equilibrium point,
the one at the origin, the f (x) curve has a positive slope greater than 1.
   We know from our discussion of linear FODEs that, when the equilibrium of
a linear equation is associated with a positive slope, x will approach it or diverge
from it monotonically. That that result carries over to the nonlinear case is easily
seen. We can also see by analogy with the linear case that when the slope of the
f (x) function at the equilibrium is less than 1 the equilibrium is stable and when
the slope is greater than 1 the equilibrium is unstable. In terms of Figure 6.1(a)
this means that the lower equilibrium, at x = 0, is unstable and that the upper one,
at x = x ∗ , is stable.
   Translating this into the behaviour of x, we can see that, if x0 , the initial value
of x, is at either of the equilibria, the value of x will not change over time. If x0 is
either just above or just below 0, the system will diverge from zero, while if x0
is just above or just below x ∗ , the system will converge on x ∗ .
   In fact, as we have drawn Figure 6.1(a), if the initial value is anywhere above 0
the system will converge on x ∗ , either from above or from below, while if the initial
value is anywhere below 0 (assuming negative values to be admissible, which they
often are not in economic applications) the system will diverge from 0 below.
   Strictly speaking, the stability of the equilibrium at x ∗ should be characterized
as local stability, because the system will converge to x ∗ only if its initial value
happens to fall in a local area around the equilibrium – in this case that local area
happens to be all values strictly greater than zero. If the f (x) function was linear,
with a slope that was positive and less than 1 where it cuts the 45◦ line at x ∗ , the
system would converge on x ∗ regardless of where its initial value happened to lie.
In that case we would refer to x ∗ as being a globally stable equilibrium. Clearly
whenever we have multiple equilibria, stability is going to be local rather than
global.
   In Figure 6.1(b) we have changed the form of f (x) so that, after cutting the 45◦
line at x ∗ , as in Figure 6.1(a), it then curves back up and cuts again at x ∗∗ . Now
x ∗∗ is also an equilibrium, and, from the fact that the slope of f (x) is greater than
1 at that point, we can see that it is an unstable equilibrium.
   If the system’s initial value is above this new equilibrium, x will head off to
inﬁnity (assuming, of course, that there are no other equilibria above this one).
The equilibrium at x ∗ is still locally stable, but now the neighbourhood within
which the initial value of x must lie for the system to converge to x ∗ has shrunk:
the system will converge to x ∗ if its initial value lies in the open interval between
0 and x ∗∗ (i.e. from anywhere just slightly above 0 to anywhere just slightly below
x ∗∗ but not including either of those endpoint values – if it starts at 0 or at x ∗∗ it
will stay there).
   Convergence to an equilibrium like x ∗ does not have to be monotonic. In
Figure 6.1(c) we have changed the f (x) function so that its slope at x ∗ (which
is still an equilibrium point) is negative but less than 1 in absolute value (i.e.
a negative fraction). In this case the equilibrium is still stable, but the path along
which the system converges to it displays alternations. In fact, as we have drawn
110   Nonlinear difference equations
Figure 6.1(c), if the initial value of x is just above the lower equilibrium, the
time path of x will initially be monotonic, with alternations only appearing as x
approaches x ∗ .
    Nonlinearity, then, can result in interesting mixtures of time-series properties in
time series data sets. They can get even more interesting than we have suggested:
suppose we draw a phase diagram with two equilibria, one at zero and one at
x ∗ , as in Figure 6.1(a), but show the f (x) curve cutting the 45◦ line at x ∗ with a
slope which is negative and greater than 1 in absolute value so that both equilibria
are unstable and the system displays alternations close to the upper equilibrium?
Experimenting with the trajectories yielded by a diagram like that suggests that
what we will see is pretty chaotic behaviour, but we will discuss chaos in a later
section.
    In our discussion to this point we have judged the stability of an equilibrium
point by looking at how the f (x) curve cuts it in a phase diagram. Since just
looking at a diagram is never sufﬁcient to prove anything, we need something a bit
more formal. The obvious problem with testing stability by calculating the slope
of the f (x) curve is that the value of the slope changes as we move along the
curve, which means that any statements we make about the slope only apply to
the portion of the curve close to the point at which we calculate the slope.
    This was implicit in our discussion of the diagrams where we talked about the
slope of f (x) close to the lower equilibrium as indicating that that equilibrium
was unstable, and talked about the slope of f (x) close to the upper equilibrium
as indicating that that equilibrium was stable, but we drew no direct implications
about stability from the slope of f (x) at points between the two equilibria. But,
given that we have drawn the f (x) function as continuous and differentiable (i.e.
with no corners), if its slope is greater than 1 at the lower equilibrium and less than
1 at the upper, there must be a point in between at which it is equal to 1, a fact
which has not entered into our discussion of the stability of either equilibrium
point.


Linearizing nonlinear difference equations
When we are investigating formally the stability of the equilibrium derived from
a nonlinear difference equation, the best we can do is investigate stability in a
relatively small area around the equilibrium. We do this by linearizing the nonlinear
function at the equilibrium and testing the slope of that linear approximation. In
essence, this is just a formalization of what we were doing when we looked at the
slope of the f (x) function on the phase diagram – we judged the stability of the
equilibrium by the slope of f (x) in the region of the equilibrium.
   We linearize f (x) by ﬁnding a ﬁrst-order Taylor series expansion of this function
with the equilibrium as the point of expansion. In general terms, a ﬁrst-order Taylor
series expansion produces a linear approximation to a nonlinear function. That
approximation is only good for a limited range around what is known as the point
of expansion, and the greater the degree of curvature of the original function the
smaller that range will be.
                                                Nonlinear difference equations     111
   Approximations do not have to stop with a ﬁrst-order expansion – we can take the
expansion to as high an order as we like, and the greater the curvature of the function
the higher the order of expansion needed to approximate it closely. Those higher
order terms, though, introduce nonlinear elements into the expansion, and, since
the purpose of taking the approximation is to eliminate nonlinearities, we stop
with a ﬁrst order, or linear approximation.
   To take a ﬁrst-order Taylor series approximation to a general function f (x), we
ﬁrst select the value of x which determines the point around which we are going
to construct a linear approximation to the nonlinear function. For consistency with
our other notation we shall denote this value of x by x ∗ , which means that the
value of the function f (x) at the point of approximation is f (x ∗ ). Then we can
write, as the approximation to the function f (x) at some arbitrary point x:

    f (x) ≈ f (x ∗ ) + fx (x ∗ )(x − x ∗ )                                        (6.1)

Note that the derivative on the right-hand side is also evaluated at x ∗ . The closer
x is to x ∗ , the closer the value of the approximation (the expression on the right-
hand side of Equation (6.1)) to the true value of the function (the expression on
the left-hand side of Equation (6.1)).

Nonlinear FODE
To apply this to a nonlinear FODE, recall that xt+1 = f (xt ) and that we have been
using x ∗ to denote an equilibrium of the system. Approximating the function close
to the equilibrium gives:

    xt+1 = f (xt ) = f (x ∗ ) + fx (x ∗ )(xt − x ∗ )                              (6.2)

   Next, note that since x ∗ is an equilibrium point (whether stable or unstable),
f (x ∗ ) = x ∗ . This lets us write Equation (6.2) as:

    xt+1 = x ∗ + fx (x ∗ )(xt − x ∗ )                                             (6.3)

  Now, deﬁne a new variable x d which is deﬁned as the deviation of the current
value of x from its equilibrium value. Thus, xtd = xt − x ∗ and xt+1
                                                                 d
                                                                     = xt+1 − x ∗
and we can rewrite Equation (6.3) as:
     d
    xt+1 = fx (x ∗ )xtd                                                           (6.4)

In interpreting Equation (6.4), remember that the ﬁrst derivative, fx (x ∗ ), is evalu-
ated at a single point (here the equilibrium point), which means that it is a constant.
Given this Equation (6.4) becomes a ﬁrst-order homogeneous difference equa-
tion in x d , with constant coefﬁcients, which means that it is a linear ﬁrst-order
homogeneous difference equation.
   The fact that Equation (6.4) is a homogeneous difference equation means that its
equilibrium is at x d = 0, but since x d is the deviation of the original, untransformed
x from its equilibrium, when x d = 0, it must be the case that x = x ∗ . So if
112     Nonlinear difference equations
Equation (6.4) is stable in the sense that x d converges on its equilibrium, it must
also be the case that x converges on its equilibrium.
   The equilibrium of Equation (6.4) will be stable under the same conditions as
the equilibrium of any other linear difference equation; when the slope term is less
than 1 in absolute value. The trick here is that the slope must be evaluated at x ∗ .
   We can extend this process to the case of a system of two nonlinear FODEs.
Let:
      yt+1 = f (yt , xt )
                                                                                              (6.5)
      xt+1 = g(yt , xt )

where f (·) and g(·) are nonlinear functions. Let the equilibrium point whose
stability properties we are trying to establish (and again it may be one of several
equilibria) be denoted (x ∗ , y ∗ ) and let y d and x d once again represent variables
deﬁned as deviations of the original x and y variables from their equilibrium values.
The expressions for ﬁrst-order (i.e. linear) approximations to Equations (6.5) are:

      yt+1 = f (yt , xt ) ≈ f (y ∗ , x ∗ ) + fx (y ∗ , x ∗ )(xt − x ∗ ) + fy (y ∗ , x ∗ )(yt − y ∗ )
      xt+1 = g(yt , xt ) ≈ g(y ∗ , x ∗ ) + gx (y ∗ , x ∗ )(xt − x ∗ ) + gy (y ∗ , x ∗ )(yt − y ∗ )
                                                                                            (6.6)

Now since f (y ∗ , x ∗ ) = y ∗ and g(y ∗ , x ∗ ) = x ∗ , Equation (6.6) can be written in
deviation form as:
       d
      yt+1 ≈ fx (y ∗ , x ∗ )xtd + fy (y ∗ , x ∗ )ytd
                                                                                              (6.7)
       d
      xt+1 ≈ gx (y ∗ , x ∗ )xtd + gy (y ∗ , x ∗ )ytd

   The system (6.7) contains two homogeneous linear FODEs with a coefﬁcient
matrix whose elements are the ﬁrst partial derivatives of the f and g functions, all
evaluated at the equilibrium point. Within the local region around the equilibrium,
we can work with system (6.7), instead of the original nonlinear system, so long
as the expansion yields a good approximation. In particular, we can solve for the
roots of system (6.7) and evaluate the stability of the equilibrium point (x ∗ , y ∗ ).
   Clearly, in a system with multiple equilibria, it is not sufﬁcient for us to evaluate
system (6.7) at only one of the equilibria. Even if we establish that the equilibrium
point under consideration is stable, the roots of Equation (6.7) do not tell us
whether it is locally or globally stable nor, if it is locally stable, how large or
small its relevant locality is. All of which means that a thorough evaluation of a
system like (6.5) requires that we identify all of its equilibria and then evaluate
the stability properties of each of those equilibria. George and Oxley (1999) are
justiﬁably critical of researchers who, in effect, linearize around their preferred
equilibrium and treat local stability properties as if they are global ones.
   Even doing all of that leaves us with an incomplete picture of the dynamics
of the system represented by Equation (6.5). We have already seen that, with a
single nonlinear FODE, the time path of the variable it represents can involve a mix
                                                Nonlinear difference equations       113
of trajectories – monotonic and alternating. Furthermore, as with linear systems,
when we start dealing with cases with more than one variable and more than one
root we can very quickly get into interesting dynamics. Adding nonlinearities just
increases the range of types of transitional dynamics which we might encounter.
This would not matter so much if we were sure our system was always close to
equilibrium, perhaps because of extremely fast speeds of adjustment, but if we
believe that most observations are disequilibrium rather than equilibrium points,
it can become very important for empirical purposes.
   To see how linearization works in a simple ﬁrst-order example, suppose our
nonlinear difference equation is:

     xt = Axt−1 (1 − xt−1 ),     A>1                                                (6.8)

This quadratic expression shows up a lot in expositions on nonlinearity in eco-
nomics, since it is one of the simplest forms of nonlinear difference equation and
yet, with suitable choice of value for the scaling term A, is capable of generating
quite complex time paths.
   Since Equation (6.8) is a ﬁrst-order nonlinear difference equation we can draw
a phase diagram for it, as shown in Figure 6.2. The diagram shows that the f (xt−1 )
function described by Equation (6.8) has horizontal intercepts at xt−1 = 0 and at
xt−1 = 1, and that the function has an inverted-U shape in between its horizontal
intercepts, reaching a maximum at xt−1 = 1/2, at which point xt = A/4. The
equilibria for this difference equation are found at the points of intersection between
the f (xt−1 ) function itself and the 45◦ line: in the case of Equation (6.8) the
equilibria are at x = 0 and x = 1 − 1/A.
   From Figure 6.2 it is clear that the lower equilibrium is unstable, but whether
the upper one is stable or not depends on the value of A. If A = 2 the equilibrium
value of x coincides with the value at which f (xt−1 ) reaches its maximum, see
Figure 6.2(a).
   If A > 2, the value of xt − 1 which maximizes f (xt − 1 ) is to the left of the
equilibrium value of x, see Figure 6.2(b). While if A < 2, the equilibrium value
of x, 1 − 1/A, is less than 1/2 and the f (xt − 1 ) function cuts the 45◦ line to the left
of its maximum, see Figure 6.2(c).
   In Figure 6.2(c), at the equilibrium, the slope of f (xt−1 ) is positive and
less than 1, and hence the upper equilibrium is stable and the approach to it is
monotonic. In contrast, in Figure 6.2(b), the slope of the f (xt−1 ) function is neg-
ative at the upper equilibrium, which means that the approach to equilibrium will
display alternations. Whether the alternations will be stable or not will depend on
the precise value of the slope at the equilibrium.
   Differentiating Equation (6.8) gives us the general expression for the slope:
      ∂xt
           = A(1 − 2xt−1 )                                                          (6.9)
     ∂xt−1
Evaluating this at the lower equilibrium, x = 0, gives ∂xt /∂xt−1 = A
and we have already assumed that A > 1. At the upper equilibrium, since
114      Nonlinear difference equations


(a) xt                                            (b) xt
                                 45°                                         45°




A /4




                                          xt –1                                      xt –1
   0             1/2             1                   0           1/2 1–1/A   1
                1–1/A

                        (c) xt
                                                           45°




                                                                   xt –1
                           0         1–1/A 1/2             1

Figure 6.2 Linearizing nonlinear difference equations.


xt = xt−1 = (1 − 1/A), the expression for the slope of f (xt−1 ) becomes:
        ∂xt
             = A(1 − 2(1 − 1/A)) = A(2/A − 1) = 2 − A                              (6.10)
       ∂xt−1
which is positive (or negative) as A is less than (greater than) 2. If Equation (6.10)
is negative, the upper equilibrium will still be stable so long as Equation (6.10) lies
between −1 and 0. This requires A to lie between 2 and 3. If A is bigger than 3,
the upper equilibrium is unstable. Note, incidentally, that the value of A does not
affect the value of xt−1 at which Equation (6.9) is equal to zero – the maximum
of this particular f (xt−1 ) function will always be at xt−1 = 1/2, although the
value of xt at that point, A/4, does depend on the value of A. Since this particular
f (xt−1 ) function will always cut the horizontal axis at 0 and 1, and will always
reach its peak at xt−1 = 1/2, the role of A is clearly to stretch (or compress) the
function vertically.
   If A is greater than 3, we are in the interesting situation of having two adjacent
unstable equilibria. Normally, in economic analysis, we assume that equilibria
will alternate, stable and then unstable, but nonlinearity requires us to reconsider
                                                Nonlinear difference equations       115
that assumption. When a model has adjacent unstable equilibria, and the initial
value of x lies between them, the best we can hope for is that the system will be
Lyapunov stable – meaning that it stays within a well-deﬁned region, but never
converges to a single point. Since, in this case, the upper equilibrium is associated
with a negative slope of f (xt−1 ), the system will clearly display alternations. For
some values of A it will settle down into a regular, repeating pattern of alternations
around the upper equilibrium point, while for other values of A the system never
settles down in the sense of repeating one, possibly complicated, trajectory over
and over. In this last case the trajectory is alternating but aperiodic, and it is in this
case that the behaviour of the system is referred to as chaotic. We will return to
the question of chaos below. Before doing that, though, we consider an economic
model which involves a nonlinear difference equation.

A basic neoclassical growth model
The economic example which we consider here is the basic neoclassical growth
model. This model contains difference equations for two variables, but by a trick
common to growth models we are able to reduce it to a single difference equation
model.
  We begin with an aggregate production function:
    Yt = F (Kt , Lt )                                                              (6.11)
where Y is aggregate output, K is aggregate capital and L is aggregate labour. The
time subscripts on each variable indicate that there are no lags in the production
process. Recall that we referred to this case in our discussion of population dynam-
ics. We are treating population as a single, homogeneous unit, at least as far as the
production function is concerned. We can get away with this, even when different
age groups of labour actually have different marginal productivities, so long as
the age distribution of our population is unchanging over time. In a more detailed
model we would enter the different age groups of labour as separate inputs in the
production function, and add the population dynamics matrix to our system.
   For simplicity here, then, labour (which is here assumed to be identical to
population; that is, the labour force participation rate is 100 per cent) is assumed
to grow at an exogenous proportional rate η, according to the difference equation:
     Lt = (1 + η)Lt−1                                                              (6.12)
We note that Equation (6.12) can be rewritten as (Lt − Lt−1 )/Lt−1 = η, hence
our referring to η as a proportional growth rate.
   Capital grows as a result of net investment, which is deﬁned as gross investment
minus an allowance for depreciation, and gross investment is equal to savings – this
is a neoclassical model, so all savings are invested in productive physical capital:
     Kt = sF (Kt−1 , Lt−1 ) + (1 − δ)Kt−1                                          (6.13)
Here δ is the depreciation rate and s is the (exogenous) savings rate.1 Note that
there is a one period lag between when saving is done and when capital appears.
116     Nonlinear difference equations
This equation tells us that this period’s capital is equal to the undepreciated part
remaining from last period’s, plus any savings/investment done out of last period’s
income (output), which has turned into new capital equipment in this period.
   At this point, we introduce a simplifying assumption. Speciﬁcally, we assume
that the aggregate production function, F (Kt , Lt ), displays constant returns to
scale. The good thing about a constant returns to scale production function is that
(it can be shown that) we can write:
                                        
                                 Kt
      F (Kt , Lt ) = Lt F           ,1                                        (6.14)
                                 Lt

where Kt /Lt is the current capital–labour ratio, and F (Kt /Lt , 1) is the amount
of output a single worker could produce if he had available to him an amount of
capital equal to the current aggregate capital–labour ratio. Under constant returns
to scale, aggregate output is just that single worker’s output level, multiplied by
the total labour force. We usually write Equation (6.14) as:

      F (Kt , Lt ) = Lt f (kt )                                               (6.15)

where kt is the current capital–labour ratio and f (kt ) is just a more convenient
piece of notation for F (Kt /Lt , 1), the amount of output a single worker could
produce. Rearranging Equation (6.15) gives:

                  F (Kt , Lt )
      f (kt ) =                                                               (6.16)
                      Lt

which says that if we calculate current per worker output by taking total output and
dividing it by the total labour force (i.e. calculate the average product of labour),
the value we get will be identical to the output level a single worker could produce
under the conditions described above. We usually denote this output per worker
as yt . This scalability property of a constant returns to scale production function2
means that we can analyse the model in per capita terms, which turns out to be
a way of getting around the problem of having too many difference equations.
   Consider our expression for the current period’s aggregate capital stock, as set
out in Equation (6.13). Dividing through on both sides of Equation (6.13) by Lt
gives:

      Kt    F (Kt−1 , Lt−1 ) (1 − δ)Kt−1
         =s                 +                                                 (6.17)
      Lt          Lt              Lt

which really does not look terribly helpful, since, while the left-hand side is the
current capital–labour ratio, kt , the time subscripts on the right-hand side do not
match up neatly. However, if we multiply and divide all terms on the right-hand
side by Lt−1 , which amounts to multiplying by 1 and which therefore makes no
                                                              Nonlinear difference equations      117
difference to the expression, we have:
                                                                                     
     Kt            sF (Kt−1 , Lt−1 )        Lt−1                  (1 − δ)Kt−1        Lt−1
        =                                                 +                                     (6.18)
     Lt                 Lt−1                 Lt                       Lt−1            Lt

Here, the term F (Kt−1 , Lt−1 )/Lt−1 is obviously output per worker in period
t − 1, and the term Kt−1 /Lt−1 is the capital–labour ratio in period t − 1. The term
(Lt−1 /Lt ) is easily shown, from Equation (6.13) above, to be 1/(1 + η) so, using
the notation we developed above, we can rewrite Equation (6.18) as:
                                   
           sf (kt−1 )           1−δ
    kt =              +               kt−1                                                      (6.19)
            (1 + η)             1+η

which, since η and δ are exogenous, is a nonlinear FODE in k.
    Because we have not speciﬁed a precise functional form for f (kt ), we are limited
to qualitative, phase diagram analysis of Equation (6.19), but phase diagrams
can be very revealing things. In this case, we note, without proving, that the
per capita production function sf (kt ) has all of the usual marginal productivity
properties, even though it shows output per worker as a function of capital per
worker. Most importantly, the marginal product of k is positive and diminishing:3
f  (k) > 0, f  (k) < 0.
    Using these assumptions, we can draw the phase diagram for Equation (6.19)
with kt on the vertical and kt−1 on the horizontal, see Figure 6.3. The curved line
is the kt (kt−1 ) function.
    Note that it starts from the origin, on the (fairly standard) argument that when
kt−1 equals zero, f (kt−1 ) equals zero.4 The slope of the kt (kt−1 ) function is found



     kt


                                            45°


                                k*           kt (kt –1)




                                                                   kt –1
     0    k0

    Figure 6.3 Phase diagram for a neoclassical growth model.
118     Nonlinear difference equations
by differentiating Equation (6.19) with respect to kt−1 :
                                         
      ∂kt          s                  1−δ
            =            f (kt−1 ) +                                             (6.20)
     ∂kt−1       1+η                   1+η
with second derivative:
                     
     ∂ 2 kt       s
            =           f  (kt−1 ) < 0                                         (6.21)
        2
     ∂kt−1      1+η

   From Equations (6.20) and (6.21) the kt (kt−1 ) function is initially positively
sloped with slope decreasing, and reaching zero where, from Equation (6.20):
                      −(1 − δ)
      f  (kt−1 ) =            <0                                                (6.22)
                         s
it is certainly possible for the marginal product of capital per worker to become
negative – there might be so much capital around that workers start tripping over
it – but at the macro level this is probably not too serious a possibility. In the phase
diagram for this problem, we draw the kt (kt−1 ) function with a slope which, while
diminishing, is always positive.
    From Equation (6.19), we see that the equilibrium value of k, k ∗ , for which
we cannot actually ﬁnd an expression without having a precise mathematical
expression for f (k), must satisfy the condition:

      f (k ∗ )   (η + δ)
          ∗
               =                                                                 (6.23)
        k           s
where it can be shown that f (k)/k = F (K, L)/K, the average product of capital.
In equilibrium, then, the capital–labour ratio must be such that the average product
of capital equals (η + δ)/s, where δ represents the amount that has to be set aside
per unit of capital to replace worn out capital, and η represents the amount of
capital which has to be put aside just to ensure that, in the current period, each
newly arrived worker is equipped with the same amount of capital as that available
to existing workers.5
   One of the simplest, and most commonly used, functional forms for the
production function f (k) is:

      f (k) = k β ,    0<β<1                                                     (6.24)

If we substitute Equation (6.24) into our model, we ﬁnd, for the equilibrium
level of k:
                 1/(1−β)
      ∗        s
     k =
              η+δ
Substituting this expression into Equation (6.20), we ﬁnd that the slope of the
kt (kt−1 ) function is indeed positive and less than 1, so the upper equilibrium point
                                               Nonlinear difference equations     119
is stable. Evaluating the slope at the lower equilibrium conﬁrms that k = 0 is an
unstable equilibrium.
   Note that the equilibrium for this problem is in terms of k, the capital–labour
ratio. Our population and labour force do not stop growing when we reach equi-
librium, nor does the total capital stock. Since population is growing at a rate η
per period, our net (i.e. after subtracting some capital to replace depreciated stock)
capital must grow at the same rate, otherwise k will not remain constant. Thus, in
this model, equilibrium is deﬁned in terms of capital per worker and therefore in
terms of output per worker; and if we deﬁne consumption per capita as (1−s)f (k),
in terms of per capita consumption.
   It is the per capita values which remain constant once we reach equilibrium.
The aggregate variables continue to increase, but at a constant proportional rate so
their size relative to that of the population remains unchanged. Because population
continues to grow, all of our other key aggregate variables must grow at the same
rate in order that their per capita values can remain unchanged. This type of growth,
however, does not raise consumption per capita and therefore does not raise the
standard of living. An underdeveloped country which had reached equilibrium at
a low, perhaps subsistence, value k ∗ might then grow very rapidly in aggregate
terms because its population was growing very rapidly while the standard of living
of its population does not improve at all.6

Chaos in economics
We referred earlier in this chapter to the case of a nonlinear difference equation with
two equilibria, both of which were unstable. For example, consider a nonlinear
difference equation of the form:
    xt = Axt−1 (1 − xt−1 ),     2<A≤4                                           (6.25)
where the lower bound on A is necessary to ensure that the system displays oscilla-
tions at the upper equilibrium and the upper bound is simply a matter of custom in
expositions using this form. The phase diagram would look like those in Figure 6.2
where the xt (xt−1 ) function is an inverted-U, cutting the horizontal axis at xt−1 = 0
and again at xt−1 = 1. Looking at the points of intersection between this function
and the 45◦ line, we see that it has two equilibria, the lower equilibrium at zero and
the upper one at some positive value x ∗ . Also, as we noted earlier, the maximum
of Equation (6.25) is found at xt−1 = 1/2, and that at that value of xt−1 , xt = A/4.
By restricting A not to be greater than 4, we keep both xt−1 and xt from going
outside the range [0, 1].
   When our system yields this type of phase diagram, there are thresholds in its
behaviour such that small changes in the value of A can result in dramatic changes
in the type of trajectory x follows. For values of A between 2 and 3, we have
straightforward convergent alternations, but as A rises above 3, the trajectories
become increasingly complicated. For some values of A between 3 and 4, xt
settles into periodic alternations – a limit cycle, in which it takes on the same
series of values over and over.
120   Nonlinear difference equations
   At A = 3.2, for example, if allowed to run long enough, the system will settle
into what is known as a period 2 cycle, jumping back and forth between (approx-
imately) 0.513045 and 0.799455. In this case we have the alternations version of
a limit cycle. Limit cycles proper require the system to be capable of producing
oscillations, which means we have to be dealing with a higher order nonlinear
system before they can appear. The alternations version gives us the essence of
limit cycles, though.
   If we start the system just above the lower equilibrium, it will diverge from
that equilibrium, rising towards the upper one but, because that equilibrium is
also unstable, never actually reaching it. Instead, it will settle into the pattern
of repeated alternations between the two values we gave above. Similarly, if we
start the system from some point near, but not equal to, the upper equilibrium, its
trajectory will take it out, away from the upper equilibrium, and again it will settle
into repeated alternations between 0.513045 and 0.799455. In the long run, then,
the cycle itself is a stable attractor for the system.
   There can also be unstable limit cycles, which have the same basic properties
as unstable equilibria. If we start at a value in the limit cycle we will stay in that
same cyclical path forever, neither converging nor diverging, but if we start on
either side of it we will diverge from it. Here the interesting case arises when we
start from a value just inside the trajectory of the limit cycle – in this case there
will generally be an equilibrium which is a stable focus, towards which we will
converge as time passes. In this case, the limit cycle deﬁnes the locality within
which that focus is a locally stable equilibrium.
   If we increase A slightly, to 3.4, the pattern changes, alternating between
0.451963 and 0.842154, but if we take A up to 3.5 the system settles into a period
4 cycle, going from 0.38282 to 0.826941 to 0.500884 to 0.874997. At A equal
to 3.84 we are back to a period 3 cycle, with x (eventually) settling into jumping
between 0.149407, 0.488004 and 0.959447.
   The transition between periodicity of alternations is not smooth, though, and
this is where chaos enters the picture. When we set A equal to 3.58, the system
alternates around the upper equilibrium (which in this case is at xt = 0.72067)
but never repeats itself and never settles into a pattern which repeats over and over
again – it becomes aperiodic, or chaotic.
   Chaos is of interest to economists as more than a mathematical curiosity. Most
importantly, it is extremely difﬁcult to distinguish a chaotic series from a random
series. To the naked eye, and to most standard statistical tests for randomness,
a chaotic series has the same properties as a sequence of random numbers. In fact,
the sequences of numbers produced by the random number generators used in
calculators and computer programs typically actually produce chaotic series, not
random series.
   While chaotic and random series are practically indistinguishable, especially
in small samples, they are actually fundamentally different. A random series can
never be forecast exactly. If we know the probability density function of the random
variable we can assign probabilities to ranges of values within which the next
observed value might fall, but we can never predict the next value with certainty.
                                              Nonlinear difference equations      121
In contrast, if we know the function generating a chaotic series, and if we know
the current value of the series exactly, we can predict the next value in the series
with absolute certainty.
   The information requirements for predicting a chaotic series are enormous – we
have to know the exact values of the parameters of the difference equation which
is generating the series, and we have to know what its current value is exactly. One
of the deﬁning features of a chaotic series is extreme sensitivity to initial values.
   Suppose we take a chaos function, pick an initial value of x, and let the function
run. We will wind up with a long series of numbers, showing the values x takes
on in each period. Suppose we then go back and run the same function, with
exactly the same parameters, but with a very slightly different initial value. The
two series will track reasonably well for a little while, but before long the new
series will diverge dramatically from the old one. If a difference equation exhibits
chaotic behaviour, small changes to the initial value will, in the long run, produce
dramatically different histories.
   The fact that chaotic behaviour can be practically indistinguishable from random
behaviour at ﬁrst appeared to be no more than a mathematical curiosity. After a
while, though, examples of apparently chaotic behaviour began to appear in other
ﬁelds, including physics and medicine. This prompted a number of economists
to begin to wonder if the irregularities which were observed in most economic
time series, and which were generally assumed to be the product of introducing
random shocks to systems of well-behaved difference equations, might actually be
chaotic behaviour.7 Day (1982, 1983), for example, showed that familiar models
in economic dynamics could be modiﬁed to produce chaotic behaviour.
   One of the cases he considered was the neoclassical model of economic
growth, which we considered above. Day proposed modifying the produc-
tion function (written in per worker terms) from the standard Cobb–Douglas
form f (k) = Bk β to:
    f (k) = Bk β (m − k)γ ,     m > k, γ > 0                                   (6.26)
where the new term is a congestion effect, modifying the Cobb–Douglas production
function to admit a case which we excluded in our earlier discussion – the case
where the marginal productivity of k becomes negative. Day notes (Day 1982: 409)
that so long as γ is small, the congestion term would not have much effect until k
gets close to m, but when k is close to m, congestion can have a powerful effect
on output. Day establishes that there are parameter values which, when inserted in
Equation (6.26), will yield chaotic patterns in k and therefore in output per capital.
   Day’s early work prompted others to look for ways to persuade familiar models
to produce chaotic behaviour. As Frank and Stengos (1988) note, in many cases
this amounted to no more than taking a model which included a difference equation
and replacing the most common functional form for that difference equation with
some variant on Equation (6.25). In other cases, though, researchers were more
careful about how they introduced chaotic dynamics.
   Day and Pavlov (2002) took one of the earliest of the modern Keynesian busi-
ness cycle models, a cobweb model developed in Goodwin (1967), a standard
122   Nonlinear difference equations
Keynesian macro model in which dynamics entered through the lagged response of
investment spending to the interest rate and showed how, with reasonable assump-
tions about the nonlinear equation driving investment,8 goods and money market
interactions could induce a range of dynamic behaviour in aggregate income.
   Day’s demonstrations that simple economic models could display chaos did not,
of course, prove that the irregular time series observed in so many economic series
were actually chaotic. After all, the thing which made chaos so intriguing was the
fact that chaotic behaviour was so difﬁcult to distinguish from random behaviour,
so the fact that a model could be modiﬁed to produce deterministic patterns which
looked random did not prove that actual, random-looking economic time series
were in fact chaotic.
   Furthermore, while most of the theoretical literature restricted itself to simple
FODEs using simple nonlinear functional forms, the equations driving actual eco-
nomic variables are not restricted to easily manipulable forms. This raised obvious
problems for econometric investigations of chaos, since it meant that there did not
exist a single, well-deﬁned chaos equation which could be tested empirically.
Instead, chaos had to be sought in the time series behaviour of economic variables.
   The econometric techniques used are well beyond the scope of this book, so we
simply refer the reader to such references as Frank and Stengos (op. cit.), Hsieh
(1991), Liu et al. (1992) and Abhyankar et al. (1997). Cunningham (1993) does
an interesting job of bringing together two hot topics in econometric dynamics,
chaos and unit root dynamics, in the process raising doubts about the techniques
used to test for each.
   While some of the econometric literature has dealt with empirical testing for
chaos in business cycles, most of it has focussed on looking for evidence of chaos
in ﬁnancial markets. Outside the economics literature, authors seem to take the
presence of chaos for granted, inspired in part by metaphors about sensitivity to
initial conditions – a butterﬂy ﬂapping its wings in China will produce a tornado
in Kansas. A good part of the interest in ﬁnancial market chaos among non-
economists is undoubtedly due to the term itself – simply looking at the recent
behaviour of ﬁnancial markets makes it obvious to many people that those markets
are chaotic. It is much easier to wrap one’s mind around a term like ‘chaotic’ than
around ‘stochastic’. For most people, indeed, chaotic and random mean basically
the same thing. The fact that they have very different mathematical meanings and
tell very different stories about what drives markets is generally not understood.
   Some observers of ﬁnancial markets do, of course, understand the subtleties,
and indeed for some the fundamental difference between chaotic and random
behaviour is a powerful attractor. After all, if ﬁnancial markets are chaotic rather
than random they are, at least in principle, perfectly predictable. Frank and Stengos
(1988) give a simple example of a simulated price series, generated by a known
chaos function, which passed all of the standard tests for efﬁcient markets, and
note that ‘You can make a lot of money in an “efﬁcient market” like this one’.
(p. 104). Undoubtedly for some people the hope of predictability and of beating
the market is a large part of the lure of chaos.
                                             Nonlinear difference equations      123
   At one time economic chaos, particularly as applied to ﬁnancial markets, looked
like an immensely promising research programme. In 1988, Frank and Stengos
argued that, while empirical work to that point had not produced much evidence of
chaos, the prospect was good in the case of markets for which large, high-quality
data sets were becoming available. They noted ﬁnancial markets and foreign
exchange markets in particular, but held out less hope for the discovery of chaos
in aggregate time series data (even assuming it was in fact present). Writing just
a few years later, Granger (1991) concluded that there was no evidence of chaos in
economic data. An admittedly cursory review of the literature to date suggests that
Granger’s conclusion still holds, although there are dissenters. George and Oxley
(1999) ﬁnd evidence of chaos in the S&P 500.
   This does not mean that chaos has been a blind alley as an economic research
programme. Improvements in testing procedures may well yield evidence of chaos,
although it has to be recognized that, if an economic variable which is driven by a
chaos function is also subject to random shocks, the deterministic chaotic compo-
nent of its observed time series is likely to be swamped by the stochastic element.
Given the sensitivity of chaos functions to initial conditions, the stochastic compo-
nent would have to be extracted very thoroughly before the deterministic element
could come through.
   On a more positive note, the chaos research programme drew attention to the
importance of nonlinearities in structural economic relations. Linearity in eco-
nomic structure has always been regarded as a ﬁrst-order approximation to the
real world, but the limitations of that approximation have tended to be overlooked.
In the empirical literature on economic chaos it is very common for authors to
conclude that their investigation has not produced evidence of chaos, but has pro-
duced evidence of structural nonlinearity.9 In the long run, focussing attention on
nonchaotic nonlinearities and on approaches to modelling them, may prove to be
the most important contribution of the chaos research programme.
7      Empirical analysis of
       economic dynamics




Introduction
The purpose of this chapter is to introduce readers to some empirical applications
of dynamic economic models. The literature is vast, and we make no effort to be
exhaustive or representative, aiming simply to give the ﬂavour of the area. Nor
do we attempt to deal with the econometrics of dynamic modelling in any detail.
Readers interested in the detail of econometric issues are referred to books such
as Hendry (1995) and Enders (1995) and the references therein.
   Our neglect of econometric detail does not mean that it is unimportant; rather
that it is impossible to do the issues justice in a single chapter. The econometric
issues and problems which arise when dynamic models are being used are crucial
to correct interpretation of the results and neglect of them may lead to incorrect
conclusions.

Basic empirical dynamic models
Probably the most familiar, and historically the most often used dynamic model
in economics is the partial adjustment (PA) model. This model assumes that there
is an underlying long-run relation towards which the system is tending, but that
because of adjustment costs and lagged responses it cannot jump immediately to
the long-run relation, but must adjust towards it over time. Hence, the aim of much
empirical analysis of economic dynamics is to identify the underlying long-run
relationship using actual observations which reﬂect short-run adjustments.
   The terminology ‘long run’ and ‘short run’ merit a bit of clariﬁcation at this
point. The term ‘long run’ derives from the mathematics of difference equations.
Consider the difference equation:

    yt = α0 + α1 yt−1 + α2 xt ,    α1 < 1                                       (7.1)

where xt is an exogenous variable, meaning that its behaviour is not affected by
that of y, although the fact that it has a ‘t’ subscript means that it can change over
time. This equation has, as the solution to its homogeneous form:

    yt = Aα1t                                                                   (7.2)
                                   Empirical analysis of economic dynamics        125
and as its equilibrium solution:
               α0        α2
    yt∗ =            +          xt                                               (7.3)
            (1 − α1 ) (1 − α1 )
where the t subscript indicates that we may have a moving equilibrium, if the value
of xt changes over time. Combining these into the general solution gives:
                     α0        α2
    yt = Aα1t +            +          xt                                         (7.4)
                  (1 − α1 ) (1 − α1 )
where A = y0 − y0∗ as usual.
    In Equation (7.4), if xt remains unchanged over time, as t goes to inﬁnity (i.e. in
the long run) the value of y will converge to an unchanging equilibrium solution,
(7.3).1 This is the reason the equilibrium solution (7.3) is often referred to, in
empirical work, as the long-run solution. The actual time path of yt will follow
an adjustment path towards this long-run solution.
    If xt changes over time, the actual time path of yt will consist in part of adjust-
ment dynamics and in part of responses to changes in x – hence the actual time
path of y will involve an adjustment towards a moving target. And, in this case,
while y is being pulled by the equilibrium, or long-run relation in Equation (7.3),
it is quite possible that y will never actually reach a particular equilibrium value
deﬁned by the relation (7.3).2
    Thus, one aim of applied dynamic modelling is to separate out the inﬂuences of
changes in the equilibrium solution from those of the adjustment dynamics. This
involves identifying Equation (7.3) – the fundamental relation between y and x –
while paying due attention to the dynamic adjustment process.
    Whatever the philosophical or mathematical interpretation of ‘long run’ and
‘short run’, there is an additional consideration which arises in empirical analysis.
Whether the data contains long- and short-run elements depends on the calendar
period of the data we are working with relative to the speed of adjustment of
the underlying economic processes. Suppose we are looking at a relation like
(7.1), and a single change in the value of x occurs. If the adjustment process
is fast enough, yt could be arbitrarily close to its new equilibrium value within
a year.3 If we are working with annual data, we would probably not be able to
observe much of a long-run–short-run distinction in the data. In quarterly data,
and more so in monthly data, however, the adjustment dynamics might be quite
noticeable.4 In general, econometric modelling should include some testing for
dynamic structure, even if ultimately it proves that the behaviour being analysed
can be modelled perfectly satisfactorily as a static process.

The partial adjustment model
As noted above, historically the most frequently used dynamic model is probably
the PA model. The basic structure of the model is as follows. Deﬁne:

    yt∗ = α0 + α1 xt + α2 zt                                                     (7.5)
126    Empirical analysis of economic dynamics
as the underlying behavioural relation between the dependent variable, y and the
explanatory variables, x and z. It might be, for example, that Equation (7.5) is the
demand function for a commodity, where y is consumer demand for the product,
x is the product’s price and z is consumer income. This expression gives us the
desired, or optimal, level of y.5
   When price, x, changes, quantity demanded changes in the opposite direction.
Consumers will react to price changes immediately, but it may be that they are
constrained in how strong their immediate response can be. Basic microeconomic
theory says that price elasticity of demand is greater in the long run than in the
short run, because in the long run consumers have more time to adjust the way
they allocate their budgets across the various commodities they buy – more time
for complementarity and substitutability among products to come into play.
   To allow for this, let yt be the actual value of the dependent variable, as opposed
to the optimal level yt∗ . The PA model assumes:

      yt − yt−1 = δ(yt∗ − yt−1 ),   0≤δ≤1                                       (7.6)

where δ is the adjustment coefﬁcient. Equation (7.6) says that the actual change
in y from period t − 1 to period t is a fraction, δ of the gap between period t − 1’s
actual level and period t’s desired level.
   Equation (7.6) could also be written as:

      yt = δyt∗ + (1 − δ)yt−1                                                   (7.7)

Equation (7.6) says that the actual value of y in period t is found by starting from
the actual value of y in t − 1 and adding to it a fraction, δ, of the gap between yt−1
and yt∗ . Equation (7.7) restates this by deﬁning yt as a weighted average of yt−1 ,
with weight (1 − δ), and yt∗ , which has weight δ. Either way, we are saying that
y moves part of the way from where it was in the last period to where it would
optimally be this period.
   If δ = 1, the yt−1 term on the right-hand side of Equation (7.7) vanishes and
we have yt = yt∗ . In this case there is no dynamic adjustment process, so the model
is essentially a static one. This introduces another slight oddity in the language
of empirical dynamics: a static model is actually one whose dynamic adjustment
occurs instantaneously – essentially, ‘static’ means ‘inﬁnitely fast’.
   If δ = 0, the yt∗ term disappears from the right-hand side of Equation (7.7),
leaving yt = yt−1 . In this case there is no adjustment at all; a change in y ∗ has no
effect on the actual value of y. Clearly in this case the long-run Equation (7.5) has
no impact on y at all, and we have probably got the wrong model.
   If 0 < δ < 1, yt adjusts part of the way from where it was, yt−1 , to where
it would like to be, yt∗ in a single period. This is the case which gives the PA
model its name. The closer δ is to 1, the larger the proportion of the gap between
the previous actual and current optimal values which is closed in a single period,
so the faster the adjustment process, while the closer δ is to 0, the slower the
adjustment process.
                                   Empirical analysis of economic dynamics        127
  Clearly it is desirable to be able to put values on both δ and the coefﬁcients of
Equation (7.5). One problem with doing this is that while theory can deﬁne the yt∗
equation – as in the case of the demand function – we cannot in general observe yt∗ .
  To get around this problem, and implement the model econometrically,
substitute for yt∗ from Equation (7.5) in (7.7) giving:

    yt = δα0 + δα1 xt + δα2 zt + (1 − δ)yt−1                                    (7.8)

The coefﬁcient on yt−1 is (1 − δ) while the coefﬁcients on the intercept and the x
and z variables are products of δ and the respective α coefﬁcients. Equation (7.8)
is the version of the PA model which is actually estimated.6 The unobservable yt∗
has been substituted out of Equation (7.7) using (7.5), leaving us with no variables
which are not in principle observable.
   If Equation (7.8) is estimated using standard linear regression techniques giving:

    yt = β0 + β1 xt + β3 zt + β3 yt−1                                           (7.9)

we will not have separate estimates of the δ and α components, but these can be
derived since β3 = (1 − δ), β0 = δα0 , β1 = δα1 and β2 = δα2 . Also because
the estimated α values are nonlinear combinations of the estimated β coefﬁcients,
standard errors for the α values can be generated and hypothesis tests performed.
   When the β3 coefﬁcient is signiﬁcantly different from zero, we have partial
adjustment to the optimal value of y (optimal conditional on the values of x and z).
If β3 , the coefﬁcient on yt−1 is not signiﬁcantly different from zero, it must be
the case that δ is not signiﬁcantly different from 1 and we have a static (or instan-
taneously adjusting) relation. And in the special case when we cannot reject the
hypothesis that δ is equal to 1, we can take the estimated coefﬁcient values in
Equation (7.9) as estimates of the parameters of the optimal relation (7.5) since in
this case β0 = α0 , β1 = α1 and β2 = α2 .
   In Equation (7.9), the estimated coefﬁcient β1 represents the effect of xt on yt
with yt−1 held constant. This means that β1 shows the immediate response of y to
changes in x. A similar interpretation can be given to β2 , the coefﬁcient on zt . By
deﬁnition, yt−1 cannot change until one period after the change in x and/or z, by
which time the present has become the past. The β coefﬁcients in Equation (7.9)
are interpreted as short-run coefﬁcients, giving the initial, immediate response of
y to changes in the explanatory variables.
   Equation (7.9) is a FODE in y. Its particular, or equilibrium, solution is:

               β0        β1             β2
    yt∗ =            +          xt +           zt                              (7.10)
            (1 − β3 ) (1 − β3 )      (1 − β3 )

which, given the interpretation which Equation (7.8) lets us put on the β coefﬁ-
cients, is the same as the optimal relation set out in Equation (7.5). The coefﬁcients
in Equation (7.10) are referred to as the long-run coefﬁcients of the relation between
y and the explanatory variables.
128    Empirical analysis of economic dynamics
   Returning now to Equation (7.9) and looking at it as a FODE in y, we see that
the solution to its homogeneous part is:
      yt = Aβ3t                                                                   (7.11)
which, given the deﬁnition of β3 , can be written as:
      yt = A(1 − δ)t                                                              (7.12)
This gives the general solution to the difference equation as:
      yt = A(1 − δ)t + yt∗                                                        (7.13)
   When δ = 1, yt = yt∗ and we have instantaneous adjustment, while when
δ = 0, the A term, the initial disequilibrium term, never vanishes while the yt∗ , is
undeﬁned. Thus, the properties of the PA model are derived from the properties of
the estimated difference equation which it generates.
   Although this easy interpretation of the PA model in terms of the dynamic forms
we have been considering elsewhere in this book is certainly appealing, the PA
model has one major drawback.
   To ﬁnd the long-run coefﬁcients, we divide each of the short run, β coefﬁcients,
by (1 − β3 ). If β1 and β2 are the short-run effects on y of x and z respectively, and
(β1 /(1 − β3 )) and (β2 /(1 − β3 )) are the long-run effects, then the relation between
the short-run effects of the two variables can be written as β1 /β2 while the relation
between their long-run effects can be written as (β1 /(1 − β3 ))/(β2 /(1 − β3 )) =
β1 /β2 , so if the effect of x on y is twice as strong as that of z on y in the short run
(β1 /β2 = 2), then the long-run effect of x must also be twice as great as that of z.
   Clearly this is a very restrictive condition to impose on a model. Empirically it
is quite plausible that different explanatory variables could take different lengths
of time to have their effect on the dependent variable. For institutional reasons, one
might have a strong immediate effect but a relatively weak long-run effect while
another could have a weak short-run effect (because it takes a while for its effect
to manifest itself) but a much stronger long-run effect.
   The PA model, while appealing in its simplicity and in its obvious relationship
to the theoretical models we have been considering, and despite its widespread
use, is really too restrictive for empirical work. Fortunately the problems with the
PA model can be corrected quite easily, by going to the Error Correction Model
(ECM). This is the form which we will consider next.

The error correction model
The ECM is rapidly becoming the standard applied model in dynamic economet-
rics. It is best known in the context of unit root models, which we shall consider
later, but it is applicable more generally. The ECM is basically a reparametrization
of the general dynamic form (GDF):
      yt = β0 + β1 xt + β2 zt + β3 yt−1 + β4 xt−1 + β5 zt−1                       (7.14)
where z and x are exogenous variables.
                                    Empirical analysis of economic dynamics      129
   This is a ﬁrst-order difference equation (FODE) in three variables, although the
only feedback is from x and z to y, with no feedback between x and z and no
feedback from y to either x or z. Because of this lack of feedback effects, the
dynamics of the equation are derived from the y-terms alone, meaning that this
equation has only one root. The lags on the x and z terms are there to allow greater
ﬂexibility than the PA model permits. The PA model can be seen to be nested
in the GDF model in the sense that setting both β4 and β5 equal to zero reduces
Equation (7.14) to the short-run version of the PA model (7.9).
   The dynamic analysis of the GDF model can also be seen as an extension of
that of the PA model. As in the PA model, the coefﬁcients on xt and zt , β1 and β2
respectively, represent the short-run effects of those variables on y, since, when we
look at one of those coefﬁcients we are looking at the partial derivative of y with
respect to the variable in question with all other variables, including the lagged
value of that variable, held constant.
   Again we deﬁne the long run as a period in which the exogenous variables have
settled down to unchanging values and the dependent variable has a chance to
converge on its new equilibrium without further changes in explanatory variables.
Thus, the long run is deﬁned as having xt = xt−1 , zt = zt−1 and yt = yt−1 . The
long-run effect of an exogenous variable in the GDF equation is deﬁned as the
effect of that variable calculated with these conditions imposed.
   For x, the long-run coefﬁcient is deﬁned as (β1 + β4 )/(1 − β3 ), while for z
the long-run coefﬁcient is deﬁned as (β2 + β5 )/(1 − β3 ). If we set β4 = β5 = 0,
we have the same relation between long- and short-run coefﬁcients as in the PA
model. Allowing β4 and β5 to differ from zero gives us greater ﬂexibility. In the
GDF the ratio of short-run effects is β1 /β2 while the ratio of long-run effects is:

                                               
        (β1 + β4 )         (β2 + β5 )     (β1 + β4 )      β1
                                       =               =                     (7.15)
         (1 − β3 )          (1 − β3 )     (β2 + β5 )      β2


so the identity between the relative long- and short-run effects in the PA model is
not present in the GDF model.
   Since the general dynamic form in Equation (7.14) is a FODE in y, it can be
solved like any other FODE. Its homogeneous form has solution: yt = Aβ3t while
to ﬁnd its particular, or equilibrium solution, we must incorporate the assumption
that xt = xt−1 and zt = zt−1 . Based on this assumption, the long run or equilibrium
solution to Equation (7.14) is:


               β0       (β1 + β4 )      (β2 + β5 )
    yt∗ =             +            xt +            zt                         (7.16)
            (1 − β3 )    (1 − β3 )       (1 − β3 )


These two terms can then be combined into the general solution to Equation (7.14)
and, assuming that β3 is a fraction, the equilibrium will be stable.
130    Empirical analysis of economic dynamics
   Equation (7.16) can be utilized to reparametrize the GDF into what is known as
the ECM:

      yt = β1 xt + β2 zt
             + (β3 − 1) (yt−1 − δ0 − δ1 xt−1 − δ2 zt−1 )                       (7.17)

where δ0 = β0 /(1 − β3 ); δ1 = (β1 + β4 )/(1 − β3 ); and δ2 = (β2 + β5 )/(1 − β3 ). It
is simply a rearrangement of the GDF Equation (7.14), so none of the interpretation
of coefﬁcients and combinations of coefﬁcients is changed, but the ECM form is
in many cases easier to interpret.
   We can see the rationale for the rearrangement once we recognize δ1 and δ2 as
the long-run coefﬁcients for x and z, respectively. Short-run effects of x and z are
now captured in the coefﬁcients on the x and z terms, while long-run effects
are captured in the coefﬁcients on xt−1 and zt−1 .
   Note too that deﬁning the ‘long-run’ value of y at t − 1 as:
       ∗
      yt−1 = δ0 + δ1 xt−1 + δ2 zt−1                                            (7.18)

allows us to rewrite Equation (7.17) as:
                                          ∗
      yt = β1 xt + β2 zt + δ3 (yt−1 − yt−1 )                                (7.19)

where δ3 = (β3 − 1). Equation (7.19) shows why this version of the GDF is
called an error correction form. Changes in y in any period are shown to depend
on changes in the values of the exogenous variables in the current period and on
the previous period’s disequilibrium (yt−1 − yt−1∗ ). This lagged disequilibrium

is the ‘error’ which is being corrected this period. Since the coefﬁcients of the
underlying economic relations are assumed to be constant over time, the form of
the equilibrium solution does not change over time.
   Equation (7.17) could be estimated as:

      yt = γ0 + γ1 xt + γ2 zt + γ3 yt−1 + γ4 xt−1 + γ5 zt−1                 (7.20)

but comparison of Equations (7.20) and (7.17) shows that there is no particular
difﬁculty translating the coefﬁcients of Equation (7.20) into those of (7.17). In
particular, γ3 = (β3 − 1) = δ3 , so γ3 in this form is the same as the coefﬁcient on
the ‘error’ to be corrected in Equation (7.19).
    Thus, when we estimate an equation of the form (7.20) we have an equation from
which we can derive both long- and short-run effects of the exogenous variables.
If the model being estimated is correctly speciﬁed, γ3 , the coefﬁcient on the ‘error’
to be corrected, should be negative, indicating that when yt−1 is above its long-run
value (determined conditional on the value of the explanatory variables in period
t − 1), so that (yt−1 − yt−1  ∗ ) is positive, the effect on y should be negative,
                                                                t
indicating that y is falling towards equilibrium; while if y was below its equilibrium
value last period, making the error component negative, it should be rising towards
it in the present period, making yt positive. The γ3 term is equal to (β3 − 1),
                                   Empirical analysis of economic dynamics        131
where β3 is the coefﬁcient on the lagged dependent variable in the original general
dynamic form, so γ3 being statistically signiﬁcantly negative is also the stability
condition for that equation.
  Although it is seldom done in a single equation context, we can work with higher
order equations in ECM form. Consider the equation:

    yt = α0 + α1 yt−1 + α2 yt−2 + α3 yt−3 + β0 xt + β1 xt−1 + β2 xt−2 + β3 xt−3
                                                                               (7.21)

The error correction form of this equation is:

    yt = α0 + (α1 − 1)yt−1 + (α2 + α1 − 1)yt−2
             + (α3 + α2 + α1 − 1)yt−3 + β0 xt + (β1 + β0 )xt−1
             + (β2 + β1 + β0 )xt−2 + (β3 + β2 + β1 + β0 )xt−3                 (7.22)

In this equation, we can still ﬁnd the long-run effect of x on y by dividing the coef-
ﬁcient on the xt−3 term by minus the coefﬁcient on the yt−3 term, and a negative
coefﬁcient on yt−3 is still one part of the stability conditions, but there are other
conditions which also have to be satisﬁed for stability (see discussion on higher
order difference equations) so we can no longer treat a negative coefﬁcient on the
largest lagged level of y as sufﬁcient for stability – all of the stability conditions
should be checked, either in terms of the coefﬁcients of the estimated equations,
or by direct calculation of the roots themselves. Since the stability conditions can
be checked in terms of the estimated coefﬁcients, they can be tested for statistical
signiﬁcance as part of the estimation procedure in most econometrics packages,
so that is probably the preferred approach.

Time series analysis

Unit roots
The ECM is encountered most often in econometric studies involving unit root,
non-stationary variables, in which the objective of the research is to establish
whether what is known as a cointegrating vector exists. It is sometimes thought
that the ECM form can only be used in this context, but as we saw in the previous
section the ECM is simply a reparametrization of the GDF, and establishing the
interpretation of the form does not require us to make any assumptions about the
roots of the variables involved.
   For example, Anderson and Blundell (1982, 1983) used a system ECM form in
estimating singular systems of equations. Their purpose was to distinguish between
the long- and short-run properties of demand systems, testing the hypothesis that
the homogeneity and symmetry properties which consumer theory predicts for
demand systems hold only in the long run and not the short run. Their results
indicated that dynamic modelling of demand systems was preferable to static
132        Empirical analysis of economic dynamics
models. Anderson and Blundell started from the argument that adjustment costs
and lags made it inappropriate to model consumer behaviour in a strictly static
form, rather than taking as their starting point the time series properties of their
individual data series, as is done in the recent unit root literature.7
   A cointegrating vector is essentially the long-run or equilibrium vector of the
previous section, but the term cointegrating vector applies only when the individ-
ual variables involved display unit root properties. We will discuss the nature of
cointegrating vectors below. First, we brieﬂy consider what is meant by a unit root
process.
   A variable yt has a unit root when its difference equation representation has
a root λ = 1. For a FODE this means that:

      yt = yt−1 + εt                                                             (7.23)

where we have departed from our usual notation, which would have used gt in
place of εt , for the sake of conformity with the econometrics literature. For the
moment, εt is simply the term that makes Equation (7.23) a non-homogeneous
difference equation.
   In Equation (7.23) the coefﬁcient on yt−1 is equal to 1, making the solution to
the homogeneous form:

      Aλt−1 (λ − 1) = 0                                                          (7.24)

giving λ = 1 as noted above. We cannot solve for the particular solution in the
normal way, because 1/(1 − α) in this case = 1/0. We can see the implications of
this in Figure 7.1, where we have drawn the phase diagram for Equation (7.23).
   The yt (yt−1 ) function is a straight line, with vertical intercept εt (which for the
moment we will treat as a constant) and slope 1, so that it is parallel to the 45◦
line. Since the yt (yt−1 ) function never crosses the 45◦ line, there is no equilibrium



           yt                   yt = yt –1 + t


                                      45°




      t



       0        y0    y1                          yt –1

      Figure 7.1 Phase diagram for a unit root process.
                                    Empirical analysis of economic dynamics          133
to be found in the diagram. If we do the usual exercise of picking an initial value
of yt−1 , in this case 0, then ﬁnding the corresponding yt , in this case εt , and then
reﬂecting off the 45◦ line to ﬁnd successive values of yt−1 and yt , we see that yt
simply keeps growing over time.
   We can see this, in fact, if we rewrite Equation (7.23) as:

    yt = yt − yt−1 = εt                                                           (7.25)

which shows that y will grow by an amount equal to εt from one period to the
next. If y is in log form this is a rate of growth, if y is in levels it is the one period
amount of growth.
   As in the case of any difference equation, the non-homogeneity term, εt , plays
the role of determining where the yt (yt−1 ) function lies on the phase diagram. An
increase in εt shifts the whole function up by the amount of the increase. When
the difference equation is stable, this shifts the equilibrium up, and the system
converges on the new equilibrium. In the case of a unit root, the value of yt shifts
up by the amount of the increase in εt , and thereafter y continues to grow, starting
from that higher level, without ever converging on an equilibrium.
   In econometric applications, εt is not a constant, but rather a random variable,
generally normally distributed, with mean zero, constant variance and no auto-
correlation. Rather than changing occasionally, εt changes every period, by an
unpredictable amount. From Equation (7.23), each change in εt has a permanent
effect on the value of y.
   We can see more clearly what this means if we consider a difference equation
of the form:

     yt = α1 yt−1 + εt ,    0 < α1 < 1                                             (7.26)

where the assumption about α1 means that the difference equation is stable – its
root, λ = α1 , lies within the unit circle.
  From Equation (7.25) we see that:

     yt−1 = α1 yt−2 + εt−1                                                         (7.27)

and so on back. Substituting Equation (7.27) into (7.26) gives:

     yt = α12 yt−2 + α1 εt−1 + εt
        = α13 yt−3 + α12 εt−2 + α1 εt−1 + εt                                       (7.28)

and so on as far back as we choose to go. After each of these substitutions we will
wind up with a single y-term, α1n yt−n , and a series of ε terms, each weighted by
powers of α1 (the εt term is weighted by α10 ).
   So long as α1 is a positive fraction, successive powers of α1 get successively
smaller. This means that eventually we will reach a lag n where α1n is effectively
equal to zero and the impact of all previous lag terms can be disregarded. While past
ε terms show up in the expression for yt , they do so with geometrically diminishing
134    Empirical analysis of economic dynamics
weights, meaning that as time passes the impact of any given random shock to y
fades away.
   When α = 1, however, the effect of a past shock never fades away. Instead, all
past shocks accumulate into the present and future values of y. This makes yt an
extreme case of what is known as a long memory variable – when α1 = 1, yt never
forgets a past shock. The cumulation of later shocks will eventually overwhelm the
impact of a past shock, no matter how large that past shock may be, but its effect
never vanishes. It is because of this permanent accumulation of past events into
the value of y now that yt is known as an integrated variable – we are effectively
integrating over its past behaviour to determine its current value.
   Unit roots may also arise in the case of variables characterized by higher order
difference equations:
      yt + α1 yt−1 + α2 yt−2 = 0                                                (7.29)
In this case y has a unit root if α1 + α2 = −1. The second root in this case will be
−(1 + α1 ). Recall from our discussion of theoretical difference equation models
that for stability in a single-order difference equation (SODE) we required three
conditions to be satisﬁed, one of which was α1 + α2 > 1. Clearly a unit root model
is not stable in the sense in which we have been using the term. It is not explosive,
however, since in this case Aλt = A does not explode. A unit root is a borderline
unstable case.
   When the difference equation for a unit root process contains a non-zero
intercept, as in:
      yt = α0 + yt−1 + εt                                                       (7.30)
we ﬁnd that:
      yt = α0 + εt                                                             (7.31)
The phase diagram for Equation (7.30) would have a yt (yt−1 ) function with vertical
intercept α0 and slope 1, while the εt term would cause the yt (yt−1 ) function in any
period to be distributed randomly around yt = α0 + yt−1 . From Equation (7.31)
we see that the one period growth of y will equal α0 plus a random term. Because
that random term has mean zero, over the long run yt = α0 , although in any
single period, growth in y will be expected to deviate from α0 . The α0 term is
known as the drift in yt .
   A variable which follows a difference equation like (7.23) or (7.30) (or a
higher order counterpart of Equation (7.30) so long as none of the other roots
are explosive) is said to have a stochastic trend, also referred to as being difference
stationary. This is in contrast to a variable with a deterministic trend, which is
referred to as trend stationary.

Difference and trend stationarity
Interest in unit root processes in applied economic dynamics really derives from
the work of Nelson and Plosser (1982). Until that time it was customary to model
                                   Empirical analysis of economic dynamics        135
trended variables as:

    yt = α0 + α1 t + εt                                                         (7.32)

where t stands for time, and is a deterministic trend, which means that y
is trend stationary. Nelson and Plosser presented evidence that most trended
macroeconomic variables are better characterized by Equation (7.30) than by
Equation (7.32).8
   The difference between Equation (7.30) and (7.32) is signiﬁcant for two reasons,
one theoretical and one econometric.
   On the theoretical side, Equations (7.30) and (7.32) imply very different forms
of behaviour for key macroeconomic variables. Suppose, for example, that yt is
real gross domestic product (GDP). According to Equation (7.32) the expected
value of real GDP in period t + 1, when the expectation is being formed in
period t, is:

    Et yt+1 = α0 + α1 (t + 1)                                                   (7.33)

Since Equation (7.33) does not contain yt explicitly, the expectation we form in
period t about yt+1 is completely independent of the actual value of yt . Even if
period t is a period of deep recession, the recession will be regarded as resulting
from an unusually bad value of ε, and the expectation (since there is assumed to
be no autocorrelation in ε) is that in period t + 1 GDP will be back on the trend
line characterized by yt = α0 + α1 t.
   Even if we modify Equation (7.32) to give:

    yt = α0 + α1 t + α2 yt−1 + εt ,     0 < α2 < 1                              (7.34)

so that there may be a lag in returning to the trend line, the behaviour of y is still
governed by a stable difference equation with a moving equilibrium. The solution
to the non-stochastic version of Equation (7.34) is:
                  α0 (1 − α2 ) − α1 α2      α1
    yt = Aα2t +                        +           t                            (7.35)
                       (1 − α2 )2        (1 − α2 )
so that regardless of what shocks may strike yt , in the long run they will wash out
and yt will follow a trend line with a constant slope.
   On the other hand, if GDP obeys Equation (7.30), there is no tendency to return
to any particular level after a shock. If we take the expectation of yt+1 based on
the form of the equation in (7.30), we have:

    Et yt+1 = α0 + yt                                                           (7.36)

In other words, instead of returning to a value on a deterministic trend line, y starts
growing at rate α0 from its current position, generating a stochastic trend.
   This has signiﬁcant economic implications. If GDP is trend stationary, then after
it goes into a recession, it will tend to rise towards the trend line and also move
136    Empirical analysis of economic dynamics
along the trend line simply because of the passage of time. Departures from the
trend line, on either side, are therefore transitory.
   If GDP is difference stationary, it will grow from wherever it happens to be
today. If the economy is in a recession today, GDP will be expected to grow by α0
between this period and the next, but it will not be expected to put on a spurt of
growth to pull it back up to some trend line. In practical terms this means that if
real GDP is trend stationary, any output lost in a recession will be recovered in the
following recovery, while if real GDP is difference stationary, the output that was
lost during a recession is lost forever. A difference stationary world would require
very different macroeconomic policies than would a trend stationary world.

Implications for empirical analysis
The econometric problems associated with unit root variables simply add another
layer of difﬁculty to empirical dynamics. Unit root variables display what is known
as non-stationarity. A variable yt is stationary if:

              E(yt ) = constant for all t
            Var(yt ) = constant for all t                                          (7.37)
      Cov(yt , yt+j ) = constant for all t

For a unit root variable, the variance of yt increases as t increases, so the stationarity
conditions are violated.9
   Enders (1995) states that if a variable yt is driven by a linear stochastic differ-
ence equation (i.e. a difference equation with a random εt term in it), the stability
condition for the difference equation is a necessary condition for the time series
of values of y generated by that difference equation to be stationary. Thus, differ-
ence equations with unit roots or unstable roots are associated with non-stationary
variables.
   The problem with non-stationary variables is that the underlying distribution
theory used in econometric testing assumes the variables are stationary. This means
that the t-tables found in virtually all econometrics texts cannot be counted on to
give accurate critical values for hypothesis testing in the case of non-stationary
values.
   This problem extends right down to the problem of determining whether a vari-
able has a unit root. We noted above that stability was necessary for stationarity.
This means that, in the case of the Equation (7.30) where the root λ = α1 , y will
be a stationary variable if α1 is signiﬁcantly less than 1 in absolute value.10
   Unfortunately we cannot simply estimate Equation (7.30) and compare the cal-
culated t-statistic from our regression output with the critical values in the standard
t-tables, since the calculated statistic, which is (as usual) the ratio of the estimated
value of α1 divided by its estimated standard error, no longer has the symmetric,
bell-shaped distribution of the tabulated t-distribution when yt has a unit root.
   Fortunately, the distribution of unit root test statistics has been generated
by simulation methods, the most complete set to date being those generated by
                                    Empirical analysis of economic dynamics         137
MacKinnon (1995). While these tabulated values must be treated with some cau-
tion, since they are based on computer simulations and are therefore sensitive to
the particular assumptions underlying the simulations which generated them, they
are important additions to the tools of dynamic econometrics.

ARIMA models
Unit root processes and the non-stationarity they introduce are not new to econo-
metrics. Box and Jenkins (1976) ARIMA analysis11 recognizes non-stationarity
and attempts to correct for it. The particular non-stationarity introduced by unit
root variables is in one sense easily corrected by differencing the variables.
   Recall from Equation (7.30) how a unit root variable yt could be rewritten in its
ﬁrst difference form, Equation (7.31) where εt has all of the usual, desirable (from
the econometric point of view) properties. The dependent variable yt is clearly
a stationary variable.
   Because a unit root variable can be transformed into a stationary variable by
differencing it once, it is known as an I (1) variable. By extension, if we tested
the dynamic properties of yt and found that it was unit root, so that 2 yt , rather
than yt , was stationary, then yt would be an I (2) variable, the ‘2’ referring to the
fact that we have to difference yt twice to transform it into a stationary variable.
   The counterpart Equation to (7.31) for an I (2) variable is found as:

    2 yt = yt = (yt − yt−1 )
           = yt − yt−1 = (yt − yt−1 ) − (yt−1 − yt−2 )
           = yt − 2yt−1 + yt−2                                                    (7.38)

which is a SODE with characteristic equation:

    λ2 − 2λ + 1 = 0                                                               (7.39)

whose two roots are both equal to 1.
   We should note here that an I (1) variable is not restricted to having only one
root, nor is an I (2) variable restricted to having exactly 2 roots. An I (1) variable
has exactly one unit root, and as many stable roots as it likes, and similarly an I (2)
can have many stable roots in addition to its two unit roots.
   We should note too that unit root behaviour is not the only form of non-
stationarity which economic variables can display, but it is in many ways the
easiest to deal with. Variables with unstable roots are non-stationary, but their par-
ticular non-stationarity cannot be removed by differencing. As it happens, though,
macroeconomic variables are virtually never dynamically unstable, while there is
a great deal of evidence in favour of unit root behaviour. At the micro level, there
are cases where an unstable root can manifest itself, but there is very little literature
on econometric issues arising from this case.
   In Box–Jenkins analysis, the I (1) nature of most macroeconomic variables
is corrected for by ﬁrst differencing and working with the I (0), or stationary,
138    Empirical analysis of economic dynamics
counterparts. Thus, instead of dealing with an equation in their levels form, such as:

      yt = α0 + α1 yt−1 + εt                                                      (7.40)

or, when explanatory variables are present:

      yt = β0 + β1 xt + β2 zt + β3 yt−1 + β4 xt−1 + β5 zt−1 + εt                  (7.41)

ARIMA analysis tends to ﬁrst difference all of the variables and regress ﬁrst
difference on ﬁrst difference with no levels of variables present:

      yt = β0 + β1 xt + β2 zt + εt                                             (7.42)

Equation (7.42) can be seen to be a restricted version of the ECM equation (7.17).
The particular restrictions which reduce Equation (7.17) to (7.42) involve setting
the coefﬁcients on the lagged levels to zero: in the notation of (7.17) this involves:

      β1 + β4 = 0                                                                 (7.43)
      β2 + β5 = 0                                                                 (7.44)
       β3 − 1 = 0                                                                 (7.45)

all of these are linear, easily testable restrictions, so, degrees of freedom permitting,
the ECM form should always be estimated and restrictions (7.45) tested before the
ARIMA form is used, particularly because, by imposing restrictions (7.45), we
are eliminating the part of the ECM form which gives us information about the
long-run relation underlying the variables. ARIMA can only tell us about short-run
relations, while the ECM form can tell us about both long- and short-run relations.
   While the realization that many macroeconomic variables seem to display
unit root behaviour has caused problems for econometric analysis of economic
dynamics, it has also brought some beneﬁts to the analysis of economic systems.
   We have already seen that when variables are related in a system of equations,
they all have the same roots. This means that variables with different roots to
their characteristic equations cannot be part of the same system of variables. Even
in the case of Equation (7.14) where there is no feedback from y to x and z,
the general principle is that if variables are to be causally related, their under-
lying dynamic behaviour should be marked by the same order of integration. In
particular, I (1) variables should be related to, and driven by, other I (1) variables.
It is not reasonable for an I (1) variable to be driven by an I (0) variable.
    This means that the ﬁrst step in applied economic dynamics should be, and
increasingly is, to test the order of integration of the variables which are hypoth-
esized to be related.12 If the variables prove all to be I (0), we can proceed with
standard econometric analysis, if some are I (1) and some I (0), this should be
taken as evidence against our theory, and if they are all I (1) we should augment
standard econometric procedures with cointegration analysis.
                                   Empirical analysis of economic dynamics        139
Cointegration analysis
Cointegration analysis essentially adds testing of dynamic properties to the stan-
dard toolkit of econometric evaluation. Consider a two-equation system in yt
and xt :

    yt = α1 yt−1 + α2 xt + α3 xt−1 + εt
                                                                               (7.46)
    xt = γ1 xt−1 + νt

where the random terms εt and νt are assumed to have all the econometrically
desirable properties. This two-equation system has one endogenous variable, yt
(expressed in a general dynamic form) and a variable, xt which is exogenous
because there is no feedback from y to x.13 For simplicity, we have assumed that
there are no intercept terms.
   If we set the equations up in system form we will ﬁnd that yt has two roots, α1
and γ1 . It may appear that there is a contradiction between our assumption that
there is no feedback from y to x and the result that the characteristic equation for
the system (7.46) has two roots, one from each variable, since we have shown
elsewhere that all of the equations in the system are driven by linear combinations
of the same roots.
   Recall, however, that while the roots driving y and x are the same, they enter the
solution equations for the homogeneous parts of y and x with different weights:

    yt = A11 λt1 + A12 λt2
                                                                               (7.47)
    xt = A21 λt1 + A22 λt2

where the Aij terms are the undetermined constants, which cannot be solved until
we have added the initial conditions to the problem, and that in our example
λ1 = α1 and λ2 = γ1 . It can be shown, however that in the present case, A21 = 0
so that while x is technically driven by the same roots as is y, the root derived from
the y equation has a weight of zero in the equation explaining the dynamics of x.

Stationary variables
Assuming for the moment that both roots are inside the unit circle (i.e. strictly
stable: we will introduce unit root complications later), we can then derive par-
ticular solutions for yt and xt in the usual way. We can set yt = yt−1 = yt∗ and
xt = xt−1 = xt∗ , and derive:

    (1 − α1 )yt∗ − (α2 + α3 )xt∗ = εt
                                                                               (7.48)
                     (1 − γ1 )xt∗ = νt

Normally, we would use Equations (7.48) to solve for y ∗ and x ∗ in terms of the
right-hand side terms. We have stopped at an intermediate step, however, for
purposes of relating the theoretical solution structure to the forms used in dynamic
econometrics.
140    Empirical analysis of economic dynamics
  By rewriting Equations (7.48) we derive:
      yt∗ = δ1 xt∗ + ηt                                                         (7.49)
where ηt = εt /(1−α1 ) is a random disturbance term with all of the econometrically
desirable properties. If we drop the ‘*’ superscript, we have an econometrically
estimable long-run equation relating y and x, using the actual observed values of
y and x. This is what we refer to as the ‘long-run’ relation between y and x.
   While we could proceed to estimate Equation (7.49) directly, if y and x are both
stationary variables this would not be appropriate. This is because actual, observed
values of y and x include dynamic effects; hence running Equation (7.49) without
the lagged terms may result in a signiﬁcant omitted variable bias problem.

Non-stationary variables
In the case of unit root variables, the situation is slightly different. To make a unit
root system, assume that γ1 in Equation (7.46) is equal to 1, while the other root of
the system, α1 is a positive fraction. The ﬁrst thing to note about this assumption
is that we can no longer proceed from Equations (7.48) to ﬁnding a particular
solution for the system in terms of the right-hand side terms of those equations.
If we set Equation (7.48) up in matrix form, Az = g, where A is the matrix of
coefﬁcients on y and x, and z is the column vector whose elements are y and x,
then with γ1 = 1, A is not invertible.
   Note, however, that in deriving Equation (7.48), we did not need to use the
assumption that both roots were stable, so even with γ1 set as the unit root of the
system, we can still ﬁnd Equation (7.49). Since both y and x are I (1) variables in
this case, both are integrated, and we refer to Equation (7.49) as the cointegrating
equation for y and x.
   In deriving Equation (7.49), we assumed that y and x are causally related.
This, of course, is the kind of theoretical hypothesis that must be tested in applied
economic dynamics. At this point, the non-stationary nature of y and x intro-
duces another problem. When two (or more) economic variables display unit root
behaviour with drift, as appears to be the case for most macroeconomic variables,
they are prone to generating spurious regression results. Even if x and y are com-
pletely unrelated variables, if both are I (1) with drift, a regression of y on x will
tend to yield an R 2 value of at least 0.4, and the calculated t-statistics will be
extremely large, even, again, in the case of unrelated variables.
   To test whether Equation (7.49) represents a spurious or a cointegrated rela-
tionship, the econometric techniques of cointegration are applied. One method
exploits the fact that if two I (1) variables, y and x, are cointegrated – that is, if
a stable long-run relation like Equation (7.49) exists between them – then when
y is regressed on x the regression residual should be I (0). The Engle–Granger
(1987) approach to testing for the existence of a cointegrating relation involves
estimating Equation (7.49) by ordinary least squares and using critical values such
as those developed by MacKinnon to test the hypothesis that the regression resid-
ual displays unit root behaviour. If y and x are cointegrated, the residuals should
                                    Empirical analysis of economic dynamics          141
be I (0), if y and x are not cointegrated, the residuals will be I (1). Thus, even if
the R 2 value from regressing Equation (7.49) is high, if we cannot reject the null
hypothesis that the residuals are I (1), the regression is spurious.
   Engle and Granger also show that if a set of economic variables are cointe-
grated, there exists an error correction representation of the relation between them.
Hendry (1995) advocates always using the ECM form for the sake of the greater
efﬁciency of estimation resulting from allowing for both the long- and short-run
relation between y and x in the same estimating equation. Note that the t-statistics
generated as part of the OLS estimation of Equation (7.49) in the Engle–Granger
approach cannot be compared with the critical values found in tables of Student’s t
values, since the calculated t’s will not have the Student’s t distribution. Other esti-
mation techniques must be used if we want to do hypothesis tests on the individual
coefﬁcients.14
   In a case like Equation (7.49), when we have only two variables, y and x, there
can be at most one cointegrating relation between them. When we have several
variables, however, {y1t , y2t , y3t , y4t }, there can be several cointegrating relations
among them – the maximum potential number of cointegrating relations is equal to
the number of y variables less 1, in fact. We consider this case in the next section.

Cointegration in the case of several variables
When we have several variables, y1t , y2t , y3t , y4t , it is customary to begin by
stacking the variables in matrix form, so that yt = (y1t y2t y3t y4t ) . Then, assuming
for the moment that there is only one lag, so we are dealing with FODEs in each
of the variables, and letting εt be a (4 × 1) vector of disturbance terms with all of
the usual econometrically desirable properties, we have:
    yt = A1 yt−1 + εt                                                              (7.50)
where A1 is the coefﬁcient matrix on the lagged dependent variables (for simplicity
we have assumed that there are no intercept terms). It is not necessary for our theo-
retical model to start with Equation (7.50). We can start with a structural form like:
    B0 yt = B1 yt−1 + νt                                                           (7.51)
and derive Equation (7.50) as a dynamic reduced form: A1 =                B0−1 B1 . Both
Equations (7.51) and (7.50) are familiar forms in time series analysis (Enders
1995): both are cases of Vector Autoregressions: VARs. Equation (7.51) is
known as a structural-form VAR, while Equation (7.50) describes a standard
reduced-form VAR.
   Equation (7.50) is nothing more than the matrix representation of a system
of FODEs with a random disturbance vector added. If all of the roots of A1 are
stable, there is no particular problem with econometric analysis of Equation (7.50).
If some of the roots of A1 are equal to 1, however, we run into generalized versions
of the same sort of problems that arise in the single equation case.
   One possible approach to determining whether the system (7.50) has unit roots
would be to estimate the coefﬁcients in the matrix A1 , calculate the roots using
142    Empirical analysis of economic dynamics
those estimated coefﬁcients, and use the technique of Theil and Boot (1962) or
Oberhofer and Kmenta (1973) to estimate the standard errors of the roots.15
   Rather than estimating and testing the roots of A1 directly, most researchers,
if they decide to use a systems approach rather than a single equation approach,
now use Johansen’s (1988, 1991) approach to estimation and testing. Rather than
estimating standard errors for the estimated coefﬁcients, Johansen’s approach tests
the number of roots of A1 which are signiﬁcantly less than unity.
   In Johansen’s approach, having ﬁrst established that all of our yit variables are
I (1), we rewrite system (7.50) as:
      yt =   yt−1 + εt                                                         (7.52)
where = (A1 − I ). Normally, for two square, conformable matrices A and B,
the roots of A + B are not equal to the roots of A plus the roots of B. In this
case, however, it can be shown that each root of (I − A1 ) is equal to 1 minus the
corresponding root of A1 . Thus, each unit root of A1 will be associated with a zero
root of (I − A1 ), while each stable root of A1 will be associated with a positive,
fractional root of (I − A1 ). If A1 has complex roots it is the modulus of those roots
which matters, while negative roots in A1 , though rare in economics, lead to roots
of (I − A1 ) which are greater than 1. It also happens that the eigenvectors of the
matrix (I − A1 ) are the same as the eigenvectors of A1 .
   Johansen’s maximum likelihood technique involves calculating the roots of
(I − A1 ) and testing the null that they are signiﬁcantly different from zero. His test
statistics are based on log transformations of the roots of (I − A1 ), so an unstable
root in A1 , which would yield a negative root in (I − A1 ), would cause the method
to fail, but as we have noted before, macroeconomic systems are generally not
unstable, regardless of how unexpected their behaviour may occasionally be.
   Johansen’s technique estimates the number of unit roots in A1 , yielding at the
same time the number of stable roots. Because all of the y variables are driven by
the same roots, the unit roots introduce what are known as common trends in the
behaviour of the y variables while the stable roots yield cointegrating vectors.
   To see where this terminology derives from, consider the two variable case:
                               
       y1t       α11 α12 y1t−1
             =                                                                  (7.53)
       y2t       α21 α22 y2t−1
which is just yt = A1 yt−1 , a non-stochastic version of Equation (7.50). We saw
this case in our discussion of systems of difference equations. Letting c1 and c2 be
the characteristic vectors of (7.53), corresponding to roots λ1 and λ2 respectively,
we can deﬁne a matrix:
                              
                       c    c
     C = [c1 c2 ] = 11 12                                                     (7.54)
                      c21 c22
in which each column of C is the corresponding characteristic vector c1 or c2 .
Further, let be the matrix:
                 
             λ1 0
       =                                                                (7.55)
             0 λ2
                                     Empirical analysis of economic dynamics     143
Given these deﬁnitions, A1 can be written A1 = C C −1 and At1 = C t C −1 so
we have yt = C C −1 yt−1 = C t C −1 y0 where y0 is the vector of known initial
values of y1 and y2 . Written out in full:
                                      
      y1t      c11 c12 λt1 0 c11 c12 y10
           =                                                           (7.56)
      y2t      c21 c22      0 λt2 c21 c22 y20

where the cij terms are the elements of C −1 . It is customary to perform the
multiplication C −1 y0 and deﬁne:

    z1 = c11 y10 + c12 y20
                                                                               (7.57)
    z2 = c21 y10 + c22 y20

Substituting the z terms into Equation (7.56) we wind up with a pair of equations:

    y1t = z1 c11 λt1 + z2 c12 λt2
                                                                               (7.58)
    y2t = z1 c21 λt1 + z2 c22 λt2

  Now suppose we want to plot y1t against y2t . As time passes, the two variables
must obey time paths deﬁned by Equations (7.58). Differentiating Equation (7.58)
with respect to t (and assuming for convenience that the λi have positive, real
values) we have:

     ∂y1t
          = z1 c11 λt1 ln(λ1 ) + z2 c12 λt2 ln(λ2 )
      ∂t
                                                                               (7.59)
     ∂y2t
          = z1 c21 λt1 ln(λ1 ) + z2 c22 λt2 ln(λ2 )
      ∂t
and dividing we have:

     ∂y1t   z1 c11 λt1 ln(λ1 ) + z2 c12 λt2 ln(λ2 )
          =                                                                    (7.60)
     ∂y2t   z1 c21 λt1 ln(λ1 ) + z2 c22 λt2 ln(λ2 )

  In most cases, this is not particularly revealing. Suppose, however, that λ1 = 1
and that λ2 is a positive fraction. Then ln(λ1 ) = ln(1) = 0 and we have:

     ∂y1t   c12
          =                                                                    (7.61)
     ∂y2t   c22

where c12 and c22 are the elements of the characteristic vector associated with λ2 ,
the stable root of the system.
   Now return to Equation (7.50). Normally we would proceed to write (I −
A1 )yt∗ = εt and invert (I − A1 ) to ﬁnd the particular solution for the y vector. If
all of the roots of A1 are stable, we can still do this, giving:

    yt∗ = (I − A1 )−1 εt                                                       (7.62)
144    Empirical analysis of economic dynamics
In this case, since there is no unit root present (by assumption), all of the y variables
are stationary. Conversely, if (I −A1 ) can be inverted, all of the y variables must be
stationary. In that case, none are integrated of order greater than 0, so the question
of cointegrating relations does not arise.
   Cointegration comes into play when some of the roots of A1 are unitary, meaning
that some of the roots of (I − A1 ) are zero, meaning in turn that (I − A1 ) is not
invertible. At this point, we invoke a bit of matrix algebra. The rank of a matrix is
equal to the number of non-zero characteristic roots of that matrix. If (I − A1 ) has
zero roots, it is of less than full rank, meaning that at least one row of (I − A1 )
can be found as a linear combination of the others. The rank of (I − A1 ), meaning
the number of linearly independent rows of (I − A1 ) and therefore the number of
linearly independent combinations of the y’s generated by the system, equals the
number of stable roots of A1 .
   Consider now the ﬁrst difference form of Equation (7.50):
      yt = (A1 − I )yt−1 + εt                                                    (7.63)
Since all of the y variables are I (1) (otherwise we would not be looking at any
of this material), all of the elements on the left-hand side of Equation (7.63) are
I (0), that is, stationary. By deﬁnition, εt is stationary. Thus, (A1 − I )yt−1 must
be a set of stationary combinations of the y’s, and a stationary combination of the
y’s is what we have termed a cointegrating vector.
   If (A1 − I ) is of full rank, it implies that all of the y variables can, individu-
ally, be written as linear combinations of the εt variables and, since each of the
elements in the εt vector is I (0) and since no linear combination of I (0) variables
can ever be I (1), each of the elements of the yt vector must be I (0). So for us to
have a non-zero number of cointegrating vectors, (A1 − I ) must be of less than
full rank, meaning that there must be fewer cointegrating vectors than there are
elements in the vector yt .
   In the simple case of two y variables, then, there can be at most one cointegrating
relation. When y contains three variables there can be at most two cointegrat-
ing relations among them. Note that when A1 has a unit root, |A1 − λI | =
|A1 − I | = 0.
   The matrix [A1 − I ] is (n × n) where n is the number of elements in the yt
vector. Any (n × n) matrix of rank 0 < r < n can be written as the product of
an (n × r) matrix and an (r × n) matrix, which in the cointegration literature are
usually identiﬁed as α and β  , respectively. (Note that this means that β is actually
(n × r).) The matrix β is made up of the eigenvectors associated with the non-zero
roots of (A1 − I ).
   In the Johansen procedure, then, r is the number of cointegrating combinations
of the y variables. We can rewrite Equation (7.63), using this notation, as:
      yt = αβ  yt−1 + εt                                                        (7.64)
Assume for the moment that yt is a (2×1) vector. Then we can write Equation (7.64)
as:
                                    
      y1t      α1           y1t−1        ε
            =        β1 β2              + 1t                                (7.65)
     y2t       α2               y2t−1      ε2t
                                   Empirical analysis of economic dynamics         145
In expression (7.65), β1 and β2 are deﬁned so that β1 y1t + β2 y2t is a cointegrating
vector. In more familiar notation, we would write the cointegrating relationship
between y1t and y2t as:

    y1t = (−β2 /β1 )y2t + νt                                                     (7.66)

with the coefﬁcient on y1t normalized to equal 1. The term νt is the deviation
between the actual value of y1t and the value predicted by the cointegrating vector
(−β2 /β1 )y2t . In other words, it is the error correction associated with the nor-
malized cointegrating vector. Thus, in Equation (7.65), the error correction term
associated with the cointegrating vector is without normalization. Writing this as
ECMt−1 we can rewrite Equation (7.65) as:
                     
      y1t    α        ε
            = 1 ECMt−1 + 1t                                                      (7.67)
      y2t    α2         ε2t

Written this way, Equation (7.67) shows that the α vector shows the extent to
which the ECM term enters the determination of each element of the yt vector.
   Now we return to the system of Equation (7.46) where, in what follows, we
shall set γ1 = 1. We have two possible approaches to estimating this system,
single equation and system. Within the single equation approach, we also have
two possibilities. One is to adopt the single equation ECM structure and estimate:

    yt = α2 xt + (α1 − 1)yt−1 + (α3 + α2 )xt−1 + εt                            (7.68)

   Within this approach, two alternative methods have been widely adopted in the
literature. One is to adopt Hendry’s approach and estimate Equation (7.68) directly
by OLS. We then test for the existence of a cointegrating relation between y and
x by testing whether the coefﬁcient on yt−1 is signiﬁcantly different from zero on
the basis of Hendry’s critical values. If it is, we have a cointegrating relation, if it
is not, we have a spurious relation.
   The other is to adopt the Engle–Granger two-step approach: in this method we
ﬁrst estimate the candidate cointegrating relation:

    yt = κ1 xt + νt                                                              (7.69)

and test the regression residuals, which are the estimates of the νt values, for
unit root properties. If νt is stationary, we have a cointegrating relation and νt
represents the error to be corrected – the difference (yt − yt∗ ). If Equation (7.69)
is a cointegrating relation, we then enter vt−1 in Equation (7.68) and estimate:

    yt = α2 xt + (α1 − 1)vt−1 + ε1t                                            (7.70)

Since all of the terms in Equation (7.70) are I (0), we can use the Student’s t distri-
bution as the basis for hypothesis testing both about the signiﬁcance of (α1 − 1),
which should be negative and signiﬁcant, and about α2 .
146   Empirical analysis of economic dynamics
  The alternative to the single equation approach is the system approach. In this
approach we begin with the matrix system:
                                    
      1 −α2 yt            α1 α3 yt−1          ε
                      =                    + 1t                           (7.71)
     0     1     xt        0 γ1 xt−1          ε2t

From this we get the dynamic reduced form:
                                 
     yt      α1 α3 + α2 γ1 yt−1         v
          =                          + 1t                                      (7.72)
     xt       0       γ1       xt−1     v2t

which is the form from which the Johansen procedure begins. From here on we
shall set γ1 = 1, since this gives us the unit root which justiﬁes what we are doing.
   Converting Equation (7.72) to ﬁrst difference form, with the unit root assumption
imposed, by subtracting the identity matrix from the matrix of coefﬁcients on the
lagged variables on the right-hand side gives:
                                          
       yt       α − 1 α3 + α2 yt−1                v
             = 1                               + 1t                            (7.73)
       xt          0          0        xt−1       v2t

where the (A1 − I ) matrix, which contains a row of zeroes, is clearly of less than
full rank. Johansen’s procedure would indicate the presence of one cointegrating
vector, associated with the stable root, and one common trend, associated with the
unit root.
   There are a number of ways we can rewrite Equation (7.73). One would give us
                                           
       yt       α1 − 1       α3 + α2 yt−1          v
             =             1                     + 1t                        (7.74)
       xt          0          α1 − 1      xt−1     v 2t

which would, when written out, give us a version of the error correction term from
the single equation form. We might also, though, rewrite Equation (7.73) as:
                                        
       yt      1                     yt−1       v
            =      [α1 − 1 α3 + α2 ]         + 1t                            (7.75)
      xt       0                     xt−1       v2t

Here the product of the (1 × 2) vector (α1 − 1, α3 + α2 ) and the (2 × 1) vector
(yt−1 , xt−1 ) is (α1 − 1)yt−1 + (α3 + α2 )xt−1 which is just another version of the
error correction term from the single equation form without the coefﬁcient on the
y term having been normalized to 1.
   The absence of the normalization in Equation (7.75) brings out one point about
the Johansen procedure – because the precise expressions for the eigenvectors from
which they are derived depend on an arbitrary normalization, the cointegrating
vectors Johansen’s procedure yields are unique only up to a scalar multiple, so
we must use judgement and theory in deciding which variable should be given
a coefﬁcient of 1, since setting its coefﬁcient to 1 makes that variable the dependent
variable, in the usual notation, and means that we are interpreting that cointegrating
vector as explaining that variable.
                                  Empirical analysis of economic dynamics        147
   In the present example we have assumed that y is the dependent variable and
x the explanatory variable, but in cases where we have several y variables the
assignment may not be so clear. In the empirical Johansen literature, in cases
where the tests indicate the presence of several cointegrating vectors, we often
ﬁnd authors basically guessing about the structural interpretation of cointegrating
vectors, and so guessing about the normalization to apply.
   In Equation (7.75), the (2 × 1) column vector (1 0) on the right-hand side
indicates that the ECM term enters the yt equation with a weight of 1 and the
xt equation with a weight of zero, meaning that adjustments of y towards its
equilibrium value have no impact on x. This is a consequence, and also a test, of
the assumption that x is an exogenous variable.
   Note that there is a difference between the yt equation coming out of
Equation (7.75) and that coming out of Equation (7.68) in that the xt term
does not appear to be present in Equation (7.75). In fact it is present, in v1t , the
disturbance term of the yt equation. The v1t term is equal to (ε1t + α2 ε2t ), while
the α2 xt term in Equation (7.68), making use of the fact that xt = ε2t , is the
second part of the v1t term. Thus, we have not lost any terms, we have simply
arranged them differently.
   Johansen’s systems approach can also be used when there are several y variables
and several lags. In the case of two lags, we have:

    yt = A1 yt−1 + A2 yt−2 + εt                                               (7.76)

where yt is a vector of variables, εt is a vector of disturbance terms and A1 and A2
are coefﬁcient matrices. This system has already been translated from structural
form to dynamic reduced form. In ﬁrst difference form Equation (7.76) becomes
yt = (A1 − I )yt−1 + (A2 + A1 − I )yt−2 + εt which in the econometrics
literature is typically written:

    yt = (A1 − I )yt−1 − (I − A1 − A2 )yt−2 + εt                            (7.77)

   Assuming that equilibrium involves yt = yt−1 = yt−2 , the matrix (I − A1 − A2 )
gives the long-run relations among the variables. Each cointegrating relation
among the y’s, and there may be several, so long as the number of cointegrat-
ing relations is less than the number of elements in the yt vector, yields an ECM
term in Equation (7.77). Note that some of the elements in the yt vector may be
exogenous, since this simply involves the coefﬁcients governing feedback from
the endogenous variables to those exogenous variables being equal to zero. Thus,
we have not excluded the possibility of there being exogenous variables in this
system, we have simply not given them separate notation. Any element in yt
which is not affected by any of the ECM terms is exogenous as far as the system is
concerned, and we can save on computation costs by taking advantage of that fact.
   Johansen’s procedure, applied to Equation (7.77), calculates the roots of (I −
A1 − A2 ). In the case of a single lag, the roots of (I − A1 ) are simply equal to
1 minus the roots of A1 . In the present case, this does not hold – the roots of
(I − A1 − A2 ) cannot be found by subtracting the roots of A1 and A2 from 1. The
148    Empirical analysis of economic dynamics
matrix (I −A1 −A2 ) will have as many roots as there are elements in the vector yt ,
while the dynamic system (7.76) will have that number of roots multiplied by the
number of lags. Thus, if there are four elements in yt , (I − A1 − A2 ) will have
4 roots while the system (7.76) will have eight. The characteristic Equation for
(7.76) can be written in matrix form as:
                      
     2                
    λ I − λA1 − A2  = 0                                                   (7.78)

  There is, however, one point of contact between the roots of (I − A1 − A2 ) and
those of the system (7.76). For any unit root in Equation (7.76), the characteristic
Equation (7.78) becomes:

      |I − A1 − A2 | = 0                                                      (7.79)

so unit roots of system (7.76) will correspond to zero roots of (I − A1 − A2 ).
The non-zero roots of (I − A1 − A2 ) do not have immediate counterparts in the
system, but still determine the number of cointegrating vectors. While the link
between the Johansen cointegration methodology and the structure of the theoret-
ical dynamic model is not as close in the case of several variables and several lags,
it is necessarily still present.
    The cointegration methodology makes use of the time series properties of the
variables in a system to isolate, econometrically, the long-run relation among
them, and uses that information to increase the efﬁciency with which all of the
coefﬁcients, long and short run, are estimated. While the cointegration – Error
Correction Mechanism approach is sometimes derived directly from theoretical
modelling, assuming the decision makers are minimizing a quadratic loss function,
it is often adopted without direct theoretical justiﬁcation, as a general form of
dynamic relation. It is not the only form of adjustment mechanism, however, and
there may be occasions on which theory suggests a particular dynamic process –
the Walrasian adjustment mechanism in a competitive market model, for example.
If that is the case, econometric testing of the dynamic adjustment process should
be regarded as part of the process of evaluating the theoretical model itself.

Examples of empirical analysis
The literature on applications of dynamic econometric models is far too large to
survey here. Single equation applications are particularly numerous, with the older
literature generally using PA models and the more recent literature using the ECM
form. In general it is preferable to work with the ECM form and test the reduction
to the PA form. Further, while the ECM form can be derived as part of the solution
to certain explicit optimization models, it is also a reasonable general form to
adopt when dynamic behaviour is being added ad hoc to a static theoretical model.
In that case, in particular, it makes sense to include several lags and reduce the
dynamics to the smallest lag structure consistent with the statistical properties of
the data. For references on applying ECM forms, the reader is referred to Hendry
                                   Empirical analysis of economic dynamics         149
(1995) and to just about any recent issue of journals dealing with applied economic
analysis.
   There is also a massive literature on multi-equation models, although unlike
the single equation literature, which has continued relatively uninterrupted since
its initial stages, the systems literature has had a more cyclical history. In its
latest incarnation it involves applications of the Johansen approach to cointegra-
tion analysis, working from dynamic reduced form equations, and attempting to put
economic interpretations on the estimated cointegrating relations. This approach
is summarized by Hendry and Doornik (1994). The earlier strand of systems mod-
elling was associated with work such as that by Theil and Boot (1962) analysing
macroeconometric models.16


Large scale macro modelling
Theil and Boot (1962) begin with Klein’s Model I of the US economy, a six-
equation Keynesian structural macro model. In Klein’s (1950) model, dynamics
entered the structural equations directly, with investment, for example, assumed to
depend on lagged proﬁts and the lagged capital stock, rather than through a speciﬁc
adjustment process like the PA model.
   Theil and Boot convert Klein’s structural model to a dynamic reduced form in
lagged dependent variables and current and lagged values of the exogenous vari-
ables. They then analyse the time path of the endogenous variables in response to
speciﬁc shocks to speciﬁc exogenous variables, using simulation analysis in a man-
ner similar to that used by Taylor(1993). In addition to analytical simulations, Theil
and Boot calculate the characteristic roots of the six-equation system and, in a step
which is not often followed in more recent work, estimate the standard error for
the largest root. Because of reductions the model turns out to have three roots, one
positive real root and a pair of complex conjugate roots, the latter meaning that the
system displays oscillations. Because the modulus of the complex roots is larger
than the real root, the complex roots are the dominant roots. On calculating the
standard error of the largest root, Theil and Boot ﬁnd that the root, with modulus
0.838 and estimated (asymptotic) standard error 0.22, is not signiﬁcantly different
from unity (based on what we would now term conventional t-values).17 Theil and
Boot conclude that the model characterizes the US economy as being close to insta-
bility, and as, in fact, leaving the question of the stability of the system still open.
This interpretation of their result indicates the impact of the unit root-cointegration
literature on econometric dynamics since Theil and Boot wrote. What Theil and
Boot regard as a worrisome feature of Klein’s Model I, current researchers would
take for granted and, indeed, would be surprised if it were not to appear.
   Authors like Klein and Theil and Boot put more emphasis on structural mod-
elling as the ﬁrst stage of empirical dynamic macroeconomic modelling than
would many current researchers, perhaps because of the inﬂuence of Sims’ (1980)
criticisms of macroeconometric modelling. The more recent Johansen approach
to cointegration systems estimation has a lot in common with Sims’ proposal that
macroeconomists should work with unrestricted reduced form systems, treating all
150    Empirical analysis of economic dynamics
variables as endogenous. This should not, however, be taken to mean that modern
macroeconomic dynamics is simply VAR modelling devoid of theoretical structure
(see Hendry 1995). Systems macroeconometrics fell somewhat out of favour in
the 1970s, partly because estimation of even moderate scale dynamic macro sys-
tems (as opposed to Klein-type models, which came to be regarded as small macro
models) quickly became computationally very expensive, and partly because of
the failure of existing macro models to explain the behaviour of inﬂation and
unemployment during the 1970s. It should not, however, be thought that dynamic
macro modelling disappeared until the appearance of the Johansen cointegration
methodology – see Fair (1994), for example.

Microeconomic examples
There are numerous empirical papers dealing with economic dynamics in micro-
economic markets. To conclude this book, we consider a pair of papers summa-
rizing research projects in which we gained ﬁrst-hand experience with the tricks
of econometric dynamics.

The market for physician services
Ferguson and Crawford (1989) set up a disequilibrium model of the market for
physicians’ services, which they estimate on Canadian data from the period before
the introduction of national health insurance. Their basic model is of a competitive
market with Walrasian adjustment to disequilibrium.
   In the ﬁrst stage of their paper, Ferguson and Crawford speciﬁed demand and
supply functions for physicians services as:
       Dt = α1 Pt + α2 Xt + u1t     α1 < 0                                   (7.80)
        St = β1 Pt + β2 Zt + u2t    β1 > 0                                   (7.81)
       Qt = Min(Dt , St )                                                    (7.82)
      Pt = δ(Dt − St ),     δ>0                                             (7.83)
where X and Z are demand and supply-side vectors of exogenous variables and u1
and u2 are random disturbance terms. Equation (7.82) is the Min condition, that
speciﬁes the actual quantity traded as the lesser of supply and demand. The econo-
metrics of models of this type, termed the quantitative method of disequilibrium
analysis, is discussed by Maddala (1983).
  To implement the model, note that:
      Qt = Dt − (Dt − St )                                                   (7.84)
in the case of excess demand (when Qt = St ) and, for the case of excess supply:
      Qt = St + (Dt − St )                                                   (7.85)
From Equation (7.83), (Dt −St ) = Pt /δ, which can be generalized to (Dt −St ) =
Pt+ /δd where Pt+ = Pt when P is rising, that is, for the case of excess
                                  Empirical analysis of economic dynamics        151
demand, and zero otherwise, and for the case of excess supply, to (Dt − St ) =
Pt− /δs where Pt− = Pt when P is falling and zero otherwise. Thus, the sign
of Pt identiﬁes the nature of the disequilibrium; positive for excess demand,
negative for excess supply and zero for equilibrium.
  The use of different adjustment coefﬁcients, δd and δs , allows for a different
speed of adjustment in response to excess demand than excess supply. This is, of
course, a testable hypothesis. Thus, we have:

    Qt = Dt − Pt+ /δd
                                                                              (7.86)
    Qt = St + Pt− /δs

for the excess demand and excess supply cases, respectively. In equilibrium,
Pt = 0 and Qt = Dt = St . From Equation (7.86) it is possible to estimate
the coefﬁcients of the demand and supply functions: in the case of excess demand,
Pt− = 0 and Equation (7.86) becomes Qt = St while in the case of excess
supply, Pt+ = 0 and Qt = Dt .
   In the standard Walrasian model, δ is non-negative, but has no upper bound. It
can be transformed, however, into a coefﬁcient which is bounded between 0 and
1 if we deﬁne:

    µ = 1/(1 + δ(β1 − α1 ))                                                   (7.87)

With Equation (7.87) and the expression for the equilibrium value of price, Pt∗ ,
which can be found by equating the demand and supply functions, we can rewrite
Equation (7.83) as:

    Pt = µPt−1 + (1 − µ)Pt∗                                                   (7.88)

where δd or δs can be used in Equation (7.87) as appropriate. The term µ is bounded
between 0 and 1; if µ = 0 there is instantaneous adjustment to equilibrium, while
if µ = 1 there is no adjustment. The form of Equation (7.88) is the same as that of
Equation (7.7) in the PA model, but is derived from a speciﬁc dynamic adjustment
mechanism.
   Ferguson and Crawford estimated the disequilibrium model on pooled data from
eight Canadian provinces for the period 1963–68, using iterative three stage least
squares, and found that the speed of adjustment of price to excess demand differed
from the speed of price response to excess supply. Speciﬁcally they found that µd
was not signiﬁcantly different from zero, indicating very rapid upward adjustment
of the price of physicians’ services in the face of excess demand, while µs was not
signiﬁcantly different from 1.0, indicating extremely slow downward adjustment
of price in response to excess supply (the point estimate was actually 1.24, which
technically yields an unstable difference equation for price, but the estimated value
was not signiﬁcantly different from 1 or from values slightly below 1). According
to these results, Canadian physicians were faster to raise fees than to lower them.
152    Empirical analysis of economic dynamics
Adjustments in interest rates
Lim (2001) applies a number of the techniques we have discussed in this volume.
Her objective is to study the dynamic behaviour of the interest rates paid and
charged by Australian banks. Her focus is on three rates: a representative rate
charged by banks on their loans (rL ), a representative rate paid on deposits (rD )
and a broader money market rate (rB ). Her basic model is a Cournot multi-product
oligopoly model, which is simply an extension to a market with several ﬁrms of
the Cournot single product duopoly model which we considered earlier.
    The loan and deposit rates are assumed to be endogenously determined and,
like prices in our Cournot duopoly example, to depend on total market quantities.
The aggregate demand curve for loans, L(rL ), is a decreasing function of the
loan interest rate and the aggregate supply of funds brought to banks for deposits,
D(rD ), is an increasing function of the deposit interest rate, and as in the case of
our Cournot example, Lim works with the inverse functions, rL (L) and rD (D). The
money market rate is assumed to be exogenous, a hypothesis which is supported
in the later econometric results. Banks are assumed to be proﬁt maximizers, facing
operating cost curves which have constant marginal costs of loans and deposits.
    Since in this model banks are assumed to be Cournot oligopolists, each bank is
assumed to select its proﬁt-maximizing level of loans and deposits on the assump-
tion that the other banks in the market hold their levels of loans and deposits
constant. As in our duopoly example, this assumption can be used to ﬁnd the
long-run equilibrium position for the system. In our duopoly example we found
the long-run equilibrium in terms of output quantities, but since market price was
determined by aggregate market output, we could also ﬁnd a long-run equilibrium
price. Since Lim’s interest is the behaviour of interest rates, which are the prices
in her model, she solves for equilibrium expressions for the loan and deposit rates
(rL∗ and rD∗ , respectively). She shows that, in the long run, bank loan and deposit
rates are determined by the number of banks in the market (N), the marginal
costs of administering loans and deposits (γL and γD ), the money market rate
and the functional forms of the loan demand and deposit supply curves. In other
words, economic theory provided the two fundamental equations (i.e. the long-run
cointegrating relationships) sought in the empirical analysis:

      rL∗ = γ11 + β11 rB                                                      (7.89)
      rD∗ = γ21 + β21 rB                                                      (7.90)

where γ11 = γL − rL (L∗ )(L∗ /N), γ21 = −γD − rD (D ∗ )(D ∗ /N). In the simplest
case, both slope coefﬁcients are expected to be unity, (β11 = β21 = 1) while the
intercept terms γ11 and γ21 may be treated as constant deposit and loan interme-
diation margins. These long-run equations yield an explicit, testable prediction:
in the long run, and increase in the money market rate should be passed through
one-for-one to both the bank loan and deposit rates.
   In the empirical analysis, the interest rates were ﬁrst shown to have unit
root behaviour, which means that the cointegration approach is the appropriate
                                  Empirical analysis of economic dynamics       153
framework for empirical investigation. Since it is possible that there are several
cointegrating relations among the interest rates, Johansen’s approach was applied.
The data shows the presence of two cointegrating relations, one which can be
normalized to express the loan rate as a function of the money market rate and
the other which can be normalized to express the deposit rate as a function of the
money market rate; both as suggested by Equations (7.89) and (7.90).
   The paper is particularly concerned with whether loan and deposit rates adjust
differently, depending on whether the change in the money market rate was
positive or negative. Hence, Lim uses an extension of the basic Johansen coin-
tegration and error correction framework which allows for the possibility of
asymmetries in both long- and short-run behaviour of the system. In particu-
lar, she allows for the possibility that banks respond differently to increases in
the money market rate than they do to decreases, and further that the response
of deposit rates to changes in the money market rate is different from the
response of loan rates. In essence she allows the error correction terms and
other parameters in the model to change with the stance of monetary policy.
A generalized version of the model estimated is set out below, where the super-
script ‘s’ indicates that the parameters are affected by the stance of monetary
policy:

 rL,t = α11
          s
             [rL,t−1 − γ11
                        s
                           − β11
                              s
                                 rB,t−1 ] + α12
                                             s
                                                [rD,t−1 − γ21
                                                           s
                                                              + β21
                                                                 s
                                                                    rB,t−1 ] + εt
 rD,t = α21
          s
             [rL,t−1 − γ11
                        s
                           − β11
                              s
                                 rB,t−1 ] + α22
                                             s
                                                [rD,t−1 − γ21
                                                           s
                                                              + β21
                                                                 s
                                                                    rB,t−1 ] + εt

   The model is applied to quarterly Australian data. The results show that in the
long run, an increase in the money market rate has the same effect on both the
loan and deposit rates, as theory predicts, although the magnitude is slightly less
than predicted. The Cournot model predicts that, in the long run, a 1 percentage
point increase in the money market rate will lead to increases of 1 percentage point
in both the loan and deposit rates, whereas the estimated cointegrating relations
indicate that in the long run a 1 percentage point increase in the money market
rate increases both the loan and deposit rates by just over 0.8 percentage points.
The results show no asymmetry in the long-run responses, meaning that in the
long run whether the change in the money market rate is an increase or a decrease
has no effect on how much of that change is passed through to loan and deposit
rates.
   The adjustment path to the long run, however, differs depending on whether
the monetary policy change is an increase or a decrease. The results suggest that
banks adjust their loan and deposit rates, in response to a change in the money
market rate, at a faster rate during periods of monetary easings (negative changes)
than during periods of monetary tightenings (increases in interest rates).

Conclusion
In this chapter we have made no claims to comprehensiveness. Our objective was
simply to give some idea of the relation between the tools of theoretical dynamic
154   Empirical analysis of economic dynamics
modelling and those of econometric dynamics. These two topics are often treated as
completely separate, to the point of using different, and apparently contradictory
language to refer to the same thing. For example, the theoretical literature will
refer to stable roots as lying inside the unit circle (as we have above, meaning
lying strictly between −1 and +1) whereas the econometric literature will often
say that stability requires the roots to lie outside the unit circle. The explanation
is that because of the mathematical notation used (in particular the use of the lag
operator) the roots which econometricians calculate are the inverse of the roots
calculated by theorists. Same thing, different perspective.
   Whichever approach is used, the key point is that neglect of dynamic relations
can lead to very misleading conclusions about economic relationships. Even if
it turns out that there is no signiﬁcant dynamic structure present, the possibility
should always be considered and tested.
Notes




1 Introduction
 1 The presence of the t term in the g(xt , t) function does not make the difference equation
   non-autonomous: that would only happen if the mathematical form of the f (·) function
   itself depended critically on the value of t.



2 First-order difference equations
 1 Obviously, if Y0 equals 0, the right-hand side of Equation (2.4), and therefore Yt , will
   always equal zero regardless of how big t gets.
 2 We shall consider one model which does yield a negative root.
 3 Strictly speaking we should refer to an equilibrium as globally stable if the actual value
   of Y converges on the equilibrium value regardless of what that actual value might be.
   We refer to an equilibrium as locally stable if Y converges on its equilibrium value
   only if the initial value of Y lies within some local neighbourhood around Y e . The
   distinction between local and global stability will become important when we get to
   more complicated forms of difference equation.
 4 If the equilibrium is unstable, of course, it will never actually be reached, but that does
   not change the nature of the equilibrium point itself.
 5 The obvious question here is, why do we try this? The answer is: because it generally
   works.
 6 Phase diagrams can also be drawn for higher order difference equations, but at higher
   orders we lose the diagrammatic simplicity of two axes.
 7 Empirically, whether this argument makes sense depends on the length of the time
   period involved. With monthly or quarterly data the story is quite plausible. With annual
   data, it is rather less so. In theoretical dynamics we can simply refer to a ‘period’, without
   specifying a calendar interval.
 8 Drawing the phase diagram for the two models, one with and one without the pro-
   portional ﬁscal policy rule, is a useful exercise in sorting out the importance of the
   differences between two very similar models, in terms of effects on both the slope and
   the intercept of the Yt (Yt−1 ) function.
 9 And note the assumption that this really is a no-policy equilibrium – this is, the equilib-
   rium the system would reach if all government spending were non-discretionary and did
   not respond in any way to deﬂationary or inﬂationary gaps, so the Phillips policy rule
   is, in this example, best seen as introducing an extra element of government spending
   which otherwise would not have been present. Note also that we have not discussed
   how this spending is to be ﬁnanced.
156    Notes
3 Second-order difference equations
 1 In general the number of roots equals the degree of the difference equation – one root
   for a FODE, two for a SODE and so on up. They will not always have distinct values,
   however.
 2 There is a drawback to it. As we shall see when we deal with empirical applications
   of difference equation models, econometricians use the terms in precisely the opposite
   sense to that in which theorists use them. An econometrician refers to a root as being
   outside the unit circle, while a theorist would refer to it as being inside the unit circle.
   In both cases, they mean what we shall characterize in a moment as a stable root. The
   difference in terminology comes out of a difference in the way the expressions for the
   roots are found, which we shall discuss in detail in Chapter 7.
 3 Plus or minus, depending on whether A2 is positive or negative. Our neglect of the A
   terms to this point does not mean that they are unimportant to the ultimate behaviour of
   the system, it just means that they are not crucial for the general behaviour which we
   are discussing here. We shall see an illustration of the type of role they play in just a
   moment.
 4 Note that complex numbers always come in conjugate pairs, so if one root is complex
   we must have a second complex root.
 5 We do this primarily for comparability with the earlier multiplier model – we could
   easily derive a difference equation in consumption.
 6 It may seem more natural to think in terms of percentage changes in Y rather than
   changes in the level of Y – if so, think of all of the Y , C, I and G terms in the model as
   being logs.
 7 Gandolfo (1997) notes that in the case of sign pattern (+ − −), the positive root will
   be larger in absolute value than the negative root, with the reverse being true when the
   sign pattern is (+ + −).
 8 If entering the number of ﬁrms linearly seems implausible, we can think of all of these
   terms as being log transformations of the original variables.


4 Higher-order and systems of difference equations
 1 In fact, since complex roots come in conjugate pairs, if we have a pair of complex roots
   the third root must be real. Similarly, if we have two real roots the third must also be real.
 2 This is because if only one of the other two were negative the product of the roots would
   be positive, and we know that it must be negative, and while three negative roots would
   also give a positive product, that would violate the rule of signs.
 3 Note that our discussion assumes that the gt term in this example is a constant. If
   there is an exogenous (to this model) growth element present, those interesting intrinsic
   dynamics could be chasing a moving equilibrium, which could make the time path more
   interesting still.
 4 When the matrix A is square and all of its elements are real, any complex roots of A
   must occur in conjugate pairs. This is the basis for our earlier assertion that (in economic
   models, at least) complex roots come in conjugate pairs.
 5 A good source on the dynamics of population growth is Keyﬁtz (1968).
 6 A number of developed countries are actually in that state now – if it were not for
   immigration their populations would be tending to decline.
 7 Again note that we can add immigration into our model, we do not do so solely to keep
   the exposition simple.
 8 Just to complicate matters, in practice the post-war baby boom observed in most English
   speaking countries was followed what is sometimes known as the baby bust, a dramatic
   drop in births. The baby bust can be modelled as a further change in birth rates, following
   the change which produced the baby boom, and both the baby boom and the baby bust
   have sent their own (cyclical) shock waves through the population.
                                                                                Notes    157
 9 The best known early presentation of such a model was, of course, the Rev. Thomas
   Robert Malthus’s Essay on the Principle of Population. On early models of economic
   growth in general, see Eltis (2000) and for general economic-demographic modelling,
   see Denton and Spencer (1975).


5 Intertemporal optimization
 1 Alternatively, we could think in terms of spending an extra dollar on consumption today
   and giving up the marginal utility we could have derived from saving that dollar until
   tomorrow, at market interest rate r, and increasing our future consumption by the future
   purchasing power of that dollar plus accumulated interest.
 2 There may be other constraints on our choice of x; we set those aside so as not to
   complicate the problem too much at this point.
 3 This is just a reminder that utility depends on real consumption, not on nominal con-
   sumption expenditure. Effectively, in this problem, the policy rule is a consumption
   function at the level of the individual consumer, where consumption is a function of
   accumulated assets rather than current income alone.
 4 The term ‘scrap value’ comes from the fact that much of the early work on intertempo-
   ral optimization problems dealt with investment decisions, where a piece of capital
   equipment would be used in production for a number of years, then sold for its
   scrap value, that value depending on how hard it had been run in the previous
   periods.
 5 One empirical implication of this result is that the relation between aggregate consump-
   tion and aggregate assets (or their per capita counterparts) will depend on how many
   individuals in the population are in each period of the planning horizon. Basically, this
   means that the form of the aggregate consumption function will depend on the age
   distribution of the population. This suggests that, if we are estimating aggregate con-
   sumption relations derived, at least in principle, from the optimization procedure we
   have discussed here, we should include demographic explanatory variables among our
   explanatory variables.
 6 Whether zero is an appropriate valuation to put on death we leave to philosophers and
   health economists.
 7 This assumption is strictly a matter of convenience, as we shall see later. The choice of
   whether the ﬁrst period should be labelled period 0 or period 1 really depends on the
   conditions of the problem. Labelling it period 0 means that the discount term (when
   there is one) for the ﬁrst period is β 0 =1, which is consistent with the convention that
   the ﬁrst period is not discounted, although if planning is done at the beginning of the
   period and consumption not done until the end, discounting that ﬁrst period might seem
   natural. One of the catches of discrete time modelling is the need to decide when, during
   a period, things happen. They can be assumed to happen at the beginning, or at the end,
   or it can be determined that, for a particular problem, it does not really matter when they
   happen. What is important from the analytical point of view is to decide at the beginning
   of the analysis which possibility applies, and to remain consistent in that assumption
   throughout the analysis.
 8 That is why we started at t = 1 instead of t = 0: starting at t = 1 means that T tells us
   the total number of periods over which the cake had to last. If we had started at t = 0,
   we would have had T + 1 periods. It was an assumption made strictly for purposes of
   avoiding what might have been a bit of notational inconvenience.
 9 Note that if βR = 1, meaning that δ = r, we are back in the cake eating problem,
   consuming a constant amount per period.
10 This is, of course, a simplifying assumption. Some goods which are good for you yield
   utility, as do some goods which are harmful to your health. Both types could be added
   into the model.
158   Notes
11 We could use Equation (5.89) to simplify Equation (5.90) and eliminate some of the
   stochastic elements from the right-hand side, but we shall leave this aside for the
   moment.
12 See Samuelson (1969) for the development of a similar expression.


6 Nonlinear difference equations
 1 In optimal growth models, savings becomes endogenous.
 2 Basically, what we are doing is noting that if we draw the isoquant diagram for our
   production function in capital–labour space, and expand output along a ray from the
   origin, meaning that we expand the levels of output, labour and capital without changing
   the ratio of capital to labour, each successive isoquant is just a radial expansion of the
   previous one, with constant returns meaning that, along that ray from the origin, the
   isoquant for two units of output is twice as far from the origin as the isoquant for one
   unit of output and so on.
 3 This does not violate the constant returns assumption, since k is capital per worker and
   the marginal productivity of k shows what happens to output per worker when capital
   per worker is increased. This is equivalent to asking, when looking at F (K, L), about
   the effects of increasing K while holding L constant or, since L is growing at a constant
   proportional rate η, about the effects of increasing K faster than L. When we talk about
   marginal productivity of k in f (k), we are just converting those effects to per-worker
   terms.
 4 This is the assumption that all inputs are essential, so that regardless of how much labour
   might be present, if the workers have no capital to work with, output will be zero. This
   property is present, for example, in the constant returns Cobb–Douglas production
   function Y = ALα K 1−α .
 5 Another way of looking at this expression would be to write it as sf (k e )/k e = (η + δ)
   which has a clear interpretation in terms of gross and net investment, the sorting out of
   which we leave as an exercise.
 6 Which obviously raises the question of whether an economy is really large, in any
   meaningful sense, if it has a large gross domestic product (GDP) because it has a very
   large population along with a very low per capita income.
 7 For references, see Frank and Stengos (1988).
 8 That is, the investment function took the general nonlinear form It+1 = I (rt ).
 9 For a discussion of some cases of empirical research in which nonlinearity proved
   important, see Zellner (2002).


7 Empirical analysis of economic dynamics
 1 Paradoxically, if xt is unchanging over time, we will never be able to estimate the value
   α2 econometrically, even though it is pulling the value of y, since we will not have
   sufﬁcient information on how changes in x cause y to change. All we will observe is yt
   following a FODE, and while we might be able to identify the point y ∗ towards which
   that difference equation is tending we will not be able to isolate the various factors
   involved in determining the location of the equilibrium.
 2 Which is why data on economic variables are often viewed as observations from dis-
   equilibrium, not equilibrium states, or in other words reﬂecting short-run adjustment,
   rather than long-run behaviour.
 3 Recall that technically we never actually reach the new equilibrium in ﬁnite time, but
   we can get so close to it that the gap is effectively zero.
 4 Even in annual data, some dynamic effect may be noticeable, since shocks generally
   are not so obliging as to occur precisely at the beginning of the calendar year. A shock
                                                                                 Notes     159
   occurring part way through the year and observable in the data on the exogenous vari-
   ables in the year in which it occurs, will have part of its effect on the dependent variable
   in the year of the shock and part in the next year.
 5 While we have not formally derived the optimal equation, it can be done for certain
   types of optimization problems – see Pagan (1985), Nickell (1985) and Domowitz and
   Hakkio (1990).
 6 A random disturbance term εt is typically simply added to this point. There are econo-
   metric modelling considerations associated with the way εt is deﬁned, but we will not
   be considering those here.
 7 In contrast, Ng (1995) also investigated demand systems, starting explicitly from time
   series considerations but reaching the same general conclusion as Anderson and Blun-
   dell, to the effect that one reason that theoretical restrictions are often rejected when
   consumer demand systems are investigated is the neglect of the long-run/short-run
   distinction.
 8 The question of the correct representation is by no means closed – see Perron (1989).
 9 Note that this is the unconditional variance of yt . The conditional variance of yt given
   the value of yt−1 is equal to var(εt ) which is constant by assumption. When we speak of
   the unconditional variance of yt we are essentially standing at period 0 and looking into
   the future with no notion of what particular values will eventuate – the farther ahead we
   look, the wider the range of values which yt could take on with any given probability,
   depending on the set of values it could take on between period 0 and period t. When
   we look at period t from one period before, knowing the value of yt−1 , the variance
   of yt will always equal var(εt ). The non-stationarity arises from the fact that yt will
   incorporate, with no attenuation, the values which all of the random shocks between
   period 0 and period t could possibly take on.
10 In practice, since economic variables seldom display alternations, α1 will be positive,
   so we need only test whether it is signiﬁcantly less than 1 in magnitude.
11 The ‘I’ in ARIMA stands for Integrated, the AR stands for Autoregressive and the MA
   stands for Moving Average. If the variables are not Integrated, and therefore do not have
   to be differenced to achieve stationarity, we have ARMA analysis. See Enders (1995)
   for details.
12 Order of integration is not a universal constant. Dixit and Pindyck ( 1994), show that
   whether the constant dollar prices of oil and copper are I (1) or I (0) depends critically on
   the sample period being used. Nevertheless, the principle still holds – for two variables
   to be related, they should display similar dynamic behaviour over the data period being
   investigated.
13 Strictly speaking we should model the exogenous factors driving x and set up a block
   recursive system, but all modelling exercises must stop somewhere.
14 For a discussion of regression-based estimation techniques see Lim and Martin (1995).
15 This approach never really found wide acceptance, however, probably because of the
   heavy computing required. Further, the use of macroeconometric models fell into some
   disfavour in the 1970s due to their apparent inability to explain or predict the behaviour
   of economies during that period. By the time the cost of computing power had fallen
   enough to make these techniques widely accessible, they had fallen out of the main-
   stream. Even the applications of system ECM forms by Anderson and Blundell in the
   early 1980s, to which we have already referred, were regarded as computationally very
   expensive, and these did not involve testing for unit roots. The expansion in computing
   capacity and falling cost of computing power in recent years has made dynamic systems
   modelling much more widespread.
16 See also, Adelman and Adelman (1959).
17 For recent work on related issues, see Bierens (2001).
Bibliography




Abhyanker, A., Copeland, L.S. and Wong, W. (1997), ‘Uncovering Nonlinear Structure
  in Real-time Stock Market Indexes: The S&P 500, the DAX, the NIkkei 225 and the
  FTSE-100’, Journal of Business and Economic Statistics, 15(1), January, 1–14.
Adelman, Irma and Adelman, Frank L. (1959), ‘The Dynamic Properties of the Klein–
  Goldberger Model’, Econometrica, 27, 597–625.
Anderson, G.J. and Blundell, R.W. (1982), ‘Estimation and Hypothesis Testing in Dynamic
  Singular Equation Systems’, Econometrica, 50(6), 1559–1571.
Anderson, G.J. and Blundell, R.W. (1983), ‘Testing Restrictions in a Flexible Dynamic
  Demand System: An Application to Consumer’s Expenditure in Canada’, Review of
  Economic Studies, L(3), No. 162, 397–410.
Azariadis, Costas (1993), Intertemporal Macroeconomics, Blackwell, Oxford.
Baumol, W.J. (1958), ‘Topology of Second Order Linear Difference Equations with
  Constant Coefﬁcients’, Econometrica, 26, 258–285.
Baumol, W.J. and Benhabib, J. (1989), ‘Chaos, Signiﬁcance, Mechanism and Economic
  Applications’, Journal of Economic Perspectives, 3, 77–105.
Beavis, Brian and Dobbs, Ian M. (1990), Optimization and Stability Theory for Economic
  Analysis, Cambridge University Press, Cambridge.
Bellman, R. (1957), Dynamic Programming, Princeton University Press, Princeton,
  New Jersey.
Bierens, Herman J. (2001), ‘Complex Unit Roots and Business Cycles: Are they Real?’,
  Econometric Theory, 17, 962–983.
Box, George and Jenkins, Gwilym (1976), Time Series Analysis, Forecasting and Control,
  Holden Day, San Francisco, California.
Burmeister, Edwin and Dobell, Rodney A. (1970), Mathematical Theories of Economic
  Growth, Macmillan, New York.
Chan, K.C., Karolyi, G.A., Longstaff, F.A. and Sanders, A.B. (1992), ‘An Empirical Com-
  parison of Alternative Models of the Short Term Interest Rate’, Journal of Finance, 47,
  1209–1227.
Chaudhuri, A. (1996), ‘Comparative Statics for Dynamic Models: Empirical Implications
  of the Frisch Decomposition’, International Economic Review, 37(1), 103–114.
Chiang, A.C. (1992), Elements of Dynamic Optimization, McGraw Hill, Toronto.
Chow, G.C. (1997), Dynamic Economics: Optimization by the Lagrange Method, Oxford
  University Press, UK.
Cropper, M.L. (1977), ‘Health, Investment in Health, and Occupational Choice’, Journal
  of Political Economy, 85(6), 1273–1294.
                                                                  Bibliography     161
Cunningham, Steven R. (1993), ‘Unit Root Testing: A Critique from Chaos Theory’, Review
  of Financial Economics, III(1), 1–18.
Day, Richard H. (1982), ‘Irregular Growth Cycles’, American Economic Review, 72(3),
  406–414.
Day, Richard H. (1983), ‘The Emergence of Chaos from Classical Economic Growth’,
  Quarterly Journal of Economics, 98(2), 201–213.
Day, Richard H. (1994), Complex Economic Dynamics, MIT Press, Cambridge,
  Massachusetts.
Day, Richard H. and Ping Chen (1993), Nonlinear Dynamics and Evolutionary Economics,
  Oxford University Press, Oxford.
Day, Richard H. and Pavlov, Oleg (2002), ‘Richard Goodwin’s Keynesian Cobweb: Theme
  and Variations’, Journal of Macroeconomics, 24(1), 1–15.
Denton, Frank T. and Spencer, Byron G. (1975), Population and the Economy, Lexington
  Books, Lexington, Massachusetts.
Dixit, Avinash K. (1990), Optimization in Economic Theory, Oxford University Press,
  Oxford.
Dixit, Avinash K. and Pindyck, Robert S. (1994), Investment Under Uncertainty, Princeton
  University Press, Princeton, New Jersey.
Domowitz, I. and Hakkio, C.S. (1990), ‘Interpreting an Error Correction Model: Partial
  Adjustment, Forward-Looking Behaviour and Dynamic International Money Demand’,
  Journal of Applied Econometrics, 5(1), 29–46.
Eltis, Walter (2000), The Classical Theory of Economic Growth, 2nd edition, Palgrave,
  New York.
Enders, Walter (1995), Applied Econometric Time Series, John Wiley and Sons, New York.
Engle, Robert F. and Granger, Clive W.J. (1987), ‘Cointegration and Error-Correction:
  Representation, Estimation, and Testing’, Econometrica, 55, 251–276.
Fair, R. (1994), Testing Macroeconometric Models, Harvard University Press, Harvard.
Ferguson, Brian S. and Crawford, Allan (1989), ‘Supplier-Induced Demand: A Disequili-
  brium Test’, Applied Economics, 21, 597–609.
Frank, Murray and Stengos, Thanasis (1988), ‘Chaotic Dynamics in Economic Time Series’,
  Journal of Economic Surveys, 2(2), 103–133.
Gandolfo, G. (1980), Economic Dynamics: Methods and Models, North Holland,
  Amsterdam.
Gandolfo, Giancarlo (1997), Economic Dynamics, Springer-Verlag, Berlin.
Gaskins, Darius W. Jr (1971), ‘Dynamic Limit Pricing: Optimal Pricing Under Threat of
  Entry’, Journal of Economic Theory, 3(3), 306–322.
George, D.A.R. and Oxley, L.T. (1985), ‘Structural Stability and Model Design’, Economic
  Modelling, 2(4), 307–316.
George, D.A.R. and Oxley, L.T. (1999), ‘Robustness and Local Linearisation in Economic
  Models’, Journal of Economic Surveys, 13(5), 529–550.
Goodwin, R.M. (1967), ‘A Growth Cycle’, in Feinstein, C.H. (ed.), Socialism, Capitalism
  and Economic Growth, 1969, Cambridge University Press, Cambridge.
Granger, C.W.J. (1991), ‘Developments in the Nonlinear Analysis of Economic Series’,
  Scandinavian Journal of Economics, 93(2), 263–276.
Granger, C.W.J. (1993), ‘Strategies for Modelling Nonlinear Time-Series Relationships’,
  The Economic Record, 69(206), 233–238.
Grossman, M. (1972), ‘On the Concept of Health Capital and the Demand for Health’,
  Journal of Political Economy, 80(2), 223–255.
162    Bibliography
Hall, Robert E. (1978), ‘Stochastic Implications of the Life Cycle-Permanent Income
   Hypothesis: Theory and Evidence’, Journal of Political Economy, 96, 971–987.
Hendry, David F. (1995), Dynamic Econometrics, Oxford University Press, Oxford.
Hendry, David F. and Doornik, Jurgen A. (1994), ‘Modelling Dynamic Econometric
   Systems’, Scottish Journal of Political Economy, 41(1), 1–33.
Hsieh, David A. (1991), ‘Chaos and Nonlinear Dynamics: Application to Financial
   Markets’, Journal of Finance, 46(5), 1839–1877.
Intriligator, Michael D. (1971), Mathematical Optimization and Economic Theory,
   Prentice-Hall, Englewood Cliffs, New Jersey.
Johansen, Soren (1988), ‘Statistical Analysis of Cointegrated Vectors’, Journal of Economic
   Dynamics and Control, 12, 231–254.
Johansen, Soren (1991), ‘Estimation and Hypothesis Testing of Cointegrating Vectors in
   Gaussian Vector Autoregressive Models’, Econometrica, 59, 1551–1580.
Keyﬁtz, Nathan (1968), Introduction to the Mathematics of Population, Addison-Wesley,
   revised 1977, Reading, Massachusetts.
Klein, L.R. (1950), Economic Fluctuations in the United States, 1921–41 Wiley, New York.
Leonard, D. and Long, N.V. (1992), Optimal Control Theory and Static Optimization in
   Economics, Cambridge University Press, Cambridge.
Lim, G.C. (2001), ‘Bank Interest Rate Adjustments: Are They Asymmetric?’, Economic
   Record, 77, 135–147.
Lim, G.C. and Martin, V. (1995), ‘Regression-based Cointegration Estimators with
   Applications’, Journal of Economic Studies, 22(1), 3–22.
Liu, T., Granger, C.W.J. and Heller, W.P. (1992), ‘Using the Correlation Exponent to
   Decide Whether an Economic Series is Chaotic’, Journal of Applied Econometrics, 7,
   Supplement: Special Issue on Non-Linear Dynamics and Econometrics, S25–S39.
Mackinnon, James G. (1995), ‘Numerical Distribution Functions for Unit Root and Coin-
   tegration Tests’, Queen’s University Institute for Economic Research, Discussion Paper
   918, January 1995, Queen’s University, Kingston, Ontario, Canada.
Maddala, G.S. (1983), Limited-dependent and Qualitative Variables in Econometrics,
   Cambridge University Press, Cambridge.
Malthus, Rev. Thomas Robert (1803), Essay on the Principle of Population, Penguin, 1970,
   Harmondsworth.
Metzler, Loyd M. (1941), ‘The Nature and Stability of Inventory Cycles’, Review of
   Economics and Statistics, XXIII, 113–129.
Miller, Ronald E. (1979), Dynamic Optimization and Economic Applications, McGraw-
   Hill, New York.
Nelson, Charles and Plosser, Charles (1982), ‘Trends and Random Walks in Macroeconomic
   Time Series’, Journal of Monetary Economics, 10, 130–162.
Ng, Serena (1995), ‘Testing for Homogeneity in Demand Systems when the Regressors are
   Nonstationary’, Journal of Applied Econometrics, 10(2), 147–163.
Nickell, Stephen (1985), ‘Error Correction, Partial Adjustment and all that: An Expository
   Note’, Oxford Bulletin of Economics and Statistics, 47(2), 119–129.
Oberhofer, W. and Kmenta, J. (1973), ‘Estimation of Standard Errors of the Characteristic
   Roots of a Dynamic Econometric Model’, Econometrica, 41(1), 171–177.
Pagan, Adrian (1985), ‘Time Series Behaviour and Dynamic Speciﬁcation’, Oxford Bulletin
   of Economics and Statistics, 47(3), 199–211.
Perron, P. (1989), ‘The Great Crash, the Oil Price Shock and the Unit Root Hypothesis’,
   Econometrica, 57, 1361–1401.
Pesaran, Hashem M. (1987), The Limits to Rational Expectations, Blackwell, Oxford.
                                                                  Bibliography     163
Phillips, A.W. (1954), ‘Stabilisation Policy in a Closed Economy’, Economic Journal, 64,
   290–323.
Pitchford, J.D. and Turnovsky, S.J. (eds), (1977), Applications of Control Theory to
   Economic Analysis, North Holland, Amsterdam.
Samuelson, Paul A. (1969), ‘Lifetime Portfolio Selection by Dynamic Stochastic Program-
   ming’, Review of Economics and Statistics, 51, 239–246.
Sargent, T.J. (1987), Dynamic Macroeconomic Theory, Harvard University Press,
   Cambridge, Massachusetts.
Sheffrin, Steven M. (1983), Rational Expectations, Cambridge Surveys of Economic
   Literature, Cambridge University Press, Cambridge, UK.
Sims, C. (1980), ‘Macroeconomics and Reality’, Econometrica, 48, 1–49.
Stokey, Nancy L. and Lucas, Robert E. Jr (1989), Recursive Methods in Economic
   Dynamics, Harvard University Press, Cambridge, MA.
Takayama, A. (1985), Mathematical Economics, Cambridge University Press, Cambridge,
   UK.
Takayama, A. (1993), Analytical Methods in Economics, University of Michigan Press,
   Ann Arbor.
Taylor, John B. (1993), Macroeconomic Policy in a World Economy: From Econometric
   Design to Practical Operation, W.W. Norton, New York.
Theil, H. and Boot, J.C.G. (1962), ‘The Final Form of Econometric Equations Systems’,
   Review of the International Statistical Institute, 30, 136–152.
Turnovsky, Stephen J. (1995), Methods of Macroeconomic Dynamics, MIT Press,
   Cambridge, Massachusetts.
Zellner, A. (2002), ‘My Experiences with Nonlinear Dynamic Models in Economics’,
   Studies in Nonlinear Dynamics and Econometrics, 6(2), Article 1, http://www.
   bepress.com/snde/vol6/iss2/art/.
Index




Abhyanker, A. 122                            cointegration analysis 139, 144
Adelman, F. 159                              comparative statics 2
Adelman, I. 159                              control variable 80, 94
adjustment coefﬁcient 12, 50                 Cournot duopoly model 68, 152;
adjustment dynamics 3                          oligopoly model 72, 152
alternations: aperiodic 115, 120; stable     Crawford, A. 150
   120                                       Cunningham, S. 122
Anderson, G. 131, 132, 159
ARIMA 137, 138, 159
                                             Day, R. 121
                                             demographic model 72
baby boom 74, 156                            DeMoivre’s theorem 38
backwards substitution 6,7                   Denton, F. 157
Bellman, R. 79                               Descarte’s theorem 40; rule of signs 41,
Bellman equation 89, 92                         47, 63
Benevneste–Scheinkman condition 83, 87,      difference equation 1; autonomous 2;
  88, 90                                        constant coefﬁcients 5; ﬁrst order
Bierens, H. 159                                 (FODE) 1; ﬁrst order linear 5; higher
Blundell, R. 131, 132, 159                      order (HODE) 53; homogeneous 5, 7;
Boot, J.C.G. 142, 149                           non-autonomous 2, 155;
Box, G. 137                                     non-homogeneous 5; non-linear 4, 107;
Box–Jenkins Analysis 137                        second order (SODE) 1, 18, 31; systems
business cycle 9                                56; third order 53
                                             difference stationary 134, 136
                                             discriminant 33, 43, 81
cake-eating problem 84, 95, 97; inﬁnite      Dixit, A. 159
  horizon version 90                         Domowitz, I. 159
chaos 3, 110, 115, 119                       Doornik, J. 149
chaotic behaviour 3                          drift 134, 140
characteristic equation 7, 32, 49, 53, 55,   dynamic adjustment process 4
  71                                         dynamic optimization 4
characteristic root 6, 8; complex 33;        dynamic programming 78
  complex conjugate 37, 55, 156;             dynamic structure 6
  dominant 74; repeated roots 43
characteristic vector 98, 99
Chow, G.C. 93, 94, 96                        economic-demographic models 75
cobweb model 28, 50, 70; with ﬁrm entry      eigenvector 99
  50                                         elapsed time 5
cointegrating vector 132                     Enders, W. 124, 136, 159
166   Index
Engle, R. 140, 141                        Keynesian multiplier 20
Engle–Granger approach 140, 145           Klein, L. 149
envelope condition 83                     Klein’s Model I 149
equilibrium 1, 10; centre 39; focus 39;   Kmenta, J. 142
  moving 45; node 34; saddlepoint 36,
  53, 62, 63, 98, 100, 103; stable 10;
  unstable 10                             lagged adjustment coefﬁcient 51
                                          lagged responses 3
Error Correction Model (ECM) 128, 138,
                                          Lagrange Multiplier Approach 93, 95, 100
  147
                                          Lim, G.C. 152, 153, 159
Euler equations 77, 86, 90, 91
                                          limit cycle 20, 119
exogenous variables 10
                                          linear reparametrization 5
                                          Liu, T. 122
Fair, R. 150                              long memory variable 134
feedback mechanism 56, 58                 long run 124; relation 125; solution 125
Ferguson, B.S. 150
Frank, M. 121, 158
                                          MacKinnon, J. 137, 140
fundamental equation of optimality 82
                                          Maddala, G.S. 150
                                          Malthus, Rev. T.R. 157
Gandolfo, G. 41, 43, 156                  market disequilibrium 3
General Dynamic Form (GDF) 128            market for physicians’ services 150
George, D.A.R. 123                        Martin, V. 159
Goodman, R. 121                           matrix: characteristic roots 59, 60;
Granger, C. 123, 140, 141                   characteristic vectors 59, 60;
Grossman, M. 101                            determinant 58, 59, 81; eigenvalues 59,
                                            60; eigenvectors 59, 60; rank 144; trace
                                            60, 81
Hakkio, C.S. 159                          matrix techniques 58
Hendry, D. 124, 145, 148                  min condition 66, 150
hog cycle 28                              mortality and discounting 92
Hsieh, D. 122                             multiple equilibria 108
                                          multiplier-accelerator model 45, 55
immediate response 127
inﬁnite horizon problems 89, 97           Nelson, C. 134, 135
initial conditions 7, 43, 61, 62          neoclassical growth model 75, 115; with
initial disequilibrium 12, 14               congestion 121
integrated variable 134; I(0) 137; I(1)   Ng, S. 159
   137, 140; I(2) 137                     Nickell, S. 159
intertemporal consumption problem 92      nonstationary variables 140
intertemporal maximum value function 81
inventory adjustment model 49
investment in health capital 101          Oberhofer, W. 142
IS–LM model 3                             opportunity cost 79
                                          optimization: ﬁrst order conditions 77;
                                            intertemporal 76
Jenkins, G. 137                           overlap term 95, 96
Johansen, S. 142                          Oxley, L.T. 123
Johansen’s maximum likelihood technique
  142, 144, 145, 146, 153
                                          Pagan, A. 159
                                          partial adjustment model 124
Keyﬁtz, N. 156                            Pavlov, O. 121
Keynesian cross macro model 3, 20, 45;    periodic cycle 120
  dynamic version 21; static version 21   Perron, P. 159
                                                                             Index 167
phase diagram 15, 155                         stationary variable 136, 139
Phillips, A.W. 25                             Stengos, T. 121, 158
Phillips stabilization model 25, 48;          stochastic optimization 103
   derivative 48; proportional 48, 25         superposition theorem 33
Pindyck, R. 159                               system: homogeneous 61
planning horizon 82
Plosser, C. 134, 135
point of expansion 110                        Taylor, J. 149
policy rule (function) 80, 83, 89, 91         Taylor series expansion 110
population: growth matrix 73; long run        terminal conditions 85
   age distribution 74; stable age            Theil, H. 142
   distribution 75                            time paths: alternations 8, 20, 35; cyclical
portfolio problem 103, 104, 106                  3, 18, 38, 39, 45, 47; monotonic 3
                                              time series analysis 131
                                              transversality conditions 85, 96
random walk 4
                                              trend: deterministic 2, 134, 145; stochastic
risky asset 103, 106
                                                 134, 135
                                              trend stationary 134, 136
safe asset 103                                two-period consumption model 76
Samuelson, P. 103, 158
scrap value 85, 157
short run 124                                 uncertainty 92
sign pattern 49, 51, 55, 156                  undetermined constants 7
Sims, C. 149                                  unit circle 33, 156
solution: equilibrium 31; function 6;         unit root 8, 42, 131, 134
   general 12; particular 11, 13, 31; trial   unit root econometrics 8
   14                                         unstable branch 36, 44
speed of adjustment 23
speed of (ﬁrm) entry 52
Spencer, B. 157                               vector autoregression (VAR) 141
spurious regression 140
stability: global 109, 155; local 109, 155;   Walrasian price adjustment model 3, 66,
   Lyapunov 115                                67, 150, 151
stability conditions 54
stable branch 36, 44, 53
state variable 80, 94                         Zellner, A. 158



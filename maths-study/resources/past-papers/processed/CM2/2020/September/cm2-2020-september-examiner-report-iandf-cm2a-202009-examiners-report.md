---
normalized_id: cm2-2020-september-examiner-report-iandf-cm2a-202009-examiners-report
exam_code: CM2
year: 2020
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep20/IandF_CM2A_202009_Examiners_Report.docx
conversion_method: pandoc
qa_status: pending
---
# cm2-2020-september-examiner-report-iandf-cm2a-202009-examiners-report

**INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINERS’ REPORTS**

September 2020

**Subject CM2A – Financial Mathematics and**

**Loss Reserving**

**Introduction**

The Examiners’ Report is written by the Chief Examiner with the aim of
helping candidates, both those who are sitting the examination for the
first time and using past papers as a revision aid and also those who
have previously failed the subject.

The Examiners are charged by Council with examining the published
syllabus. The Examiners have access to the Core Reading, which is
designed to interpret the syllabus, and will generally base questions
around it but are not required to examine the content of Core Reading
specifically or exclusively.

For numerical questions the Examiners’ preferred approach to the
solution is reproduced in this report; other valid approaches are given
appropriate credit. For essay-style questions, particularly the
open-ended questions in the later subjects, the report may contain more
points than the Examiners will expect from a solution that scores full
marks.

The report is written based on the legislative and regulatory context
pertaining to the date that the examination was set. Candidates should
take into account the possibility that circumstances may have changed if
using these reports for revision.

> Mike Hammer
>
> Chair of the Board of Examiners
>
> December 2020

© Institute and Faculty of Actuaries

1.  **General comments on the *aims of this subject and how it is
    marked***

<!-- -->

1.  The aim of Subject CM2 is to develop the necessary skills to
    construct asset liability models, value financial derivatives and
    calculate reserves for insurance or guarantees. These skills are
    also required to communicate with other financial professionals and
    to critically evaluate modern financial theories.

2.  The marking approach for CM2 is flexible in the sense that different
    answers to those shown in the solution can earn marks if they are
    relevant and appropriate. Marks for the methodology are also awarded
    including marks for using the right method even if an error in an
    earlier part of the question prevents the final answer from being
    correct. The marking focusses on rewarding candidates’ understanding
    of the concepts, including their ability to articulate algebra and
    arguments clearly.

<!-- -->

2.  **Comments on *candidates’ performance in this diet of the
    examination.***

<!-- -->

1.  Candidates who scored strongly were those who were able to set out
    their thinking or algebra clearly and explain every step. A key
    weakness for some candidates was statistical knowledge – CM2 assumes
    knowledge from CS1 and CS2 so it is advisable to sit those exams
    before attempting CM2.

2.  This was the first exam diet for CM2 where the A paper was sat
    online and answered in Word. Most candidates handled this well and
    produced answers that were easy to follow. The marking process
    allowed for the fact that typing out algebra can be tricky but a
    minority of candidates failed to provide enough steps in their
    working for full marks in some of the mathematical questions.

3.  There was evidence in some questions that candidates might have
    found it harder to rearrange and solve equations in Word compared to
    using pen and paper. Unfortunately this is hard to avoid, and I
    would suggest that candidates practice this skill for future exam
    diets.

<!-- -->

3.  **Pass Mark**

> The Pass Mark for this exam was 60.

1,450 candidates presented themselves and 703 passed.

**Q1**

\(i\)

\(a\) U’(w) \> 0 \[½\]

\(b\) U’’(w) \< 0 \[½\]

\(c\) A’(w) \> 0 where A(w) = -U’’(w) / U’(w) \[1\]

\(d\) R’(w) \< 0 where R(w) = -wU’’(w) / U’(w) \[1\]

**\[Total 3\]\**

\(ii\)

U’(w) = 1 + 2dw \[½\]

U’’(w) = 2d \[0.5\] \[½\]

Hence A(w) = -2d / (1 + 2dw) \[1\]

**\[Total 2\]\**

\(iii\)

A’(w) = 4d<sup>2</sup> / (1 + 2dw)<sup>2</sup> \> 0 hence increasing
\[1\]

**\[Total 1\]\**

\(iv\)

Current utility = 250 - 0.001 x 250<sup>2</sup> = 187.5 \[1\]

Expected utility = P(X=0) x U(250 + 2p) + P(X=1) x U(250 + 2p - 100) +
P(X=2) x U(250 +

2p – 2 x 100) \[½\]

= 0.9<sup>2</sup> x (250 + 2p - 0.001 x (250 + 2p)<sup>2</sup>) + 2 x
0.9 x 0.1 x (150 + 2p - 0.001 x (150 + 2p)<sup>2</sup>)+

0.1<sup>2</sup> x (50 + 2p - 0.001 x (50 + 2p)<sup>2</sup>) \[½\]

= 0.81 x (187.5 + p - 0.004p<sup>2</sup>) + 0.18 x (127.5 + 1.4p -
0.004p<sup>2</sup>) + 0.01 x (47.5 + 1.8p –

0.004p<sup>2</sup>) \[½\]

= (175.3 + 1.08p - 0.004p<sup>2</sup>) \[½\]

So equating the two sides:

187.5 = 175.3 + 1.08p - 0.004p<sup>2</sup> \[½\]

So 0 = -12.2 + 1.08p - 0.004p<sup>2</sup> \[½\]

We can reject the root at £258.19 as clearly too large. \[½\]

So p = £11.81 \[½\]

**\[Total 5\]\**

\(v\)

The premium of £11.81 is higher than the expected claim of 0.1 x £100 =
£10 \[1\]

Initially this does not appear attractive to customers \[1\]

However, customers buy insurance to reduce risk and increase certainty
of cost \[1\]

So this might still be attractive \[1\]

If we knew the customer’s utility function and initial wealth we could
determine whether this

is attractive \[1\]\
**\[Marks available 5, maximum 3\]**

**\[Total marks available 16, maximum 14\]**

*Most candidates scored well in parts (i) to (iii).*

*Few candidates managed to score full marks on part (iv), with most
failing to construct the required equations to solve. Candidates should
note here that the expected utility is not the same as the utility of
the expected wealth.*

**Q2**

\(i\)

The properties of the lognormal distribution give us the variance of
<img src="media/image1.wmf" style="width:0.19792in;height:0.25in" />:

Var<img src="media/image2.wmf" style="width:0.33333in;height:0.25in" />=
E\[S<sub>t</sub>\]<sup>2</sup> . {exp(0.25<sup>2</sup>*t*)–1} \[½\]

where E\[S<sub>t</sub>\] = exp(0.06875*t*+0.25<sup>2</sup>*t*/2) \[½\]

So
*E*<img src="media/image3.wmf" style="width:0.33333in;height:0.25in" />=
1.49182 \[½\]

And
Var<img src="media/image4.wmf" style="width:0.33333in;height:0.25in" />=
0.63211 \[½\]

Relative to his target, we wish to know:

Var(100,000
<img src="media/image5.wmf" style="width:0.20833in;height:0.25in" /> –
150,000) = Var (100,000
<img src="media/image6.wmf" style="width:0.29167in;height:0.25in" />
\[½\]

= 100,0002 × Var
(<img src="media/image6.wmf" style="width:0.29167in;height:0.25in" />
\[½\]

So SD = (6.3211 x 10<sup>9</sup>)<sup>0.5</sup> = €79,505 \[1\]

**\[Total 4\]\**

\(ii\)

Whether put options can be bought on these shares. \[½\]

Whether a put option can be bought on these shares with the right term…
\[½\]

… or whether a dynamic hedging strategy will be needed. \[½\]

Whether the put option is believed to be reasonably priced. \[½\]

The executive’s utility function. \[½\]

Whether the executive has expertise in the use of derivatives. \[½\]

Any tax or regulatory concerns about using derivatives \[½\]

Dealing costs or access to the market \[½\]

Restrictions on CEOs trading company shares \[½\]

The hedge would reduce the upside potential of the benefits \[½\]

Reputational damage caused by the CEO effectively betting against their
own company \[½\]

**\[Marks available 5½, maximum 2\]**

**\[Total marks available 9½, maximum 6\]**

*This question was generally answered well. Some candidates listed
modelling assumptions from the bookwork in part (ii) instead of thinking
about practical issues in the context of the question and did not score
marks for this.*

**Q3**

\(i\)

d1 = -0.3260 \[1\]

d2 = -0.4992 \[1\]

N(d1) = 0.3722 \[½\]

N(d2) = 0.3088 \[½\]

Value = 1.3998 = \$1.40 \[1\]

**\[Total 4\]**

\(ii\)

Theta = d/dt of the option price \[½\]

So Theta determines how the value of the option changes with the passage
of time \[½\]

As we move closer to the expiry date it becomes more certain whether or
not the option will

be exercised \[1\]

So the value of the optionality reduces \[1\]\
**\[Marks available 3, maximum 2\]**

\(iii\)

Delta = d/dS<sup>­­</sup><sub>t</sub> of the option price \[½\]

So Delta determines how the value of the option changes when the
underlying share price

changes \[½\]

Therefore increases in the share price lead to increases in the option
value under all

circumstances \[1\]

We can also see that the payoff function of the call options is an
increasing function of S(t) \[1\]\
**\[Marks available 3, maximum 2\]**

\(iv\)

Dividend income is not passed onto the holder of an option. \[1\]

By buying the option instead of the underlying share the investor
therefore foregoes this

income. \[1\]

The dividend also removes value from the company which therefore removes
value from the

shareholder \[½\]\
**\[Marks available 2½, maximum 2\]**

\(v\)

By put-call parity:

p<sub>t</sub> = c<sub>t</sub> + Ke<sup>-r(T-t)</sup> – S<sub>t</sub>
\[½\]

= 1.40 + 40exp(-0.025 \* 3) – 34.55 \[½\]

= \$3.96 \[1\]

> **\[Total 2\]**
>
> **\[Total marks available 14 ½, maximum 12\]**

*This question was answered well by most candidates, with a good
understanding of the Greeks shown. A few candidates defined the Greeks
but did not give enough explanation for full marks in parts (ii), (iii)
and (iv).*

**Q4**

\(i\)

Probability still solvent = 0.95<sup>3</sup> = 0.8574 \[1\]

**\[Total 1\]**

\(ii\)

The bank uses a discount rate of 10% pa, i.e. 1.1<sup>-3</sup> over the
period \[½\]

If the interest rate is i then we need

£10,000 x 0.8574 x (1+i)<sup>3</sup> x 1.1<sup>-3</sup> = £10,000 \[1\]

Hence i = 15.79% pa \[½\]

**\[Total 2\]**

\(iii\)

The expected value to the bank is:

P(Default in year 1) x £8,000 x 1.1<sup>-1</sup> + P(Default in year 2)
x £6,000 x 1.1<sup>-2</sup> +

P(Default in year 3) x £4,000 x 1.1<sup>-3</sup> + P(No default) x
£10,000 x (1+i)<sup>3</sup> x 1.1<sup>-3</sup> \[½\]

= 0.05 x 8,000 x 1.1<sup>-1</sup> + 0.95 x 0.05 x 6,000 x
1.1<sup>-2</sup> + 0.95<sup>2</sup> x 0.05 x 4,000 x 1.1<sup>-3</sup> +
0.95<sup>3</sup> x

10,000 x (1+i)<sup>3</sup> x 1.1<sup>-3</sup> \[1\]

= 734.79 + 6,441.59 x (1+i)<sup>3</sup> \[1\]

Setting this equal to £10,000 gives

i = 12.88% pa \[½\]

**\[Total 3\]**

\(iv\)

This is an example of a two-state credit risk model… \[½\]

…because there are two possible states for the loan. \[½\]

The model has a constant transition intensity… \[½\]

…which is a subset of the Jarrow-Lando-Turnbull model. \[½\]\
**\[Marks available 2, maximum 1\]**

**\[Total marks available 8, maximum 7\]**

*This question was not answered well on the whole, with a lot of
candidates unable to construct the equation to be solved in (iii). Where
possible, errors in earlier question parts were followed through to
later parts and not penalised again.*

**Q5**

Incremental claim amounts: \[1\]

<table style="width:58%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">Accident year</th>
<th colspan="3" style="text-align: center;">Development year</th>
</tr>
<tr>
<th style="text-align: center;">0</th>
<th style="text-align: center;">1</th>
<th style="text-align: center;">2</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">2017</td>
<td style="text-align: center;">2,440</td>
<td style="text-align: center;">854</td>
<td style="text-align: center;">494</td>
</tr>
<tr>
<td style="text-align: center;">2018</td>
<td style="text-align: center;">2,065</td>
<td style="text-align: center;">784</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">2019</td>
<td style="text-align: center;">2,158</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Incremental claims in mid-2019 prices: \[1\]

<table style="width:58%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">Accident year</th>
<th colspan="3" style="text-align: center;">Development year</th>
</tr>
<tr>
<th style="text-align: center;">0</th>
<th style="text-align: center;">1</th>
<th style="text-align: center;">2</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">2017</td>
<td style="text-align: center;">2,659.60</td>
<td style="text-align: center;">886.53</td>
<td style="text-align: center;">494.00</td>
</tr>
<tr>
<td style="text-align: center;">2018</td>
<td style="text-align: center;">2,143.67</td>
<td style="text-align: center;">784.00</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">2019</td>
<td style="text-align: center;">2,158.00</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Cumulative claims in mid-2019 prices: \[1\]

<table style="width:58%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;"><blockquote>
<p>Accident year</p>
</blockquote></th>
<th colspan="3" style="text-align: center;"><blockquote>
<p>Development year</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>2017</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2,659.60</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3,546.13</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4,040.13</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2018</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2,143.67</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2,927.67</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2019</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2,158.00</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

DF(0,1) = (3546.13 + 2927.67) / (2659.6 + 2143.67) = 1.3478 \[1\]

DF(1,2) = 4040.13 / 3546.13 = 1.1393 \[1\]

Completed cumulative claims in mid-2019 prices: \[1\]

<table style="width:58%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 15%" />
<col style="width: 14%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;"><blockquote>
<p>Accident year</p>
</blockquote></th>
<th colspan="3" style="text-align: center;"><blockquote>
<p>Development year</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>2017</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2018</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>3,335.51</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2019</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>2,908.53</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3,313.71</p>
</blockquote></td>
</tr>
</tbody>
</table>

Incremental future claims in mid-2019 prices: \[1\]

<table style="width:58%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;"><blockquote>
<p>Accident year</p>
</blockquote></th>
<th colspan="3" style="text-align: center;"><blockquote>
<p>Development year</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>2017</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2018</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>407.84</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2019</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>750.53</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>405.18</p>
</blockquote></td>
</tr>
</tbody>
</table>

Outstanding claims adjusted for inflation =\
(407.84 + 750.53) \* 116 / 109 + 405.18 \* 123 / 109 = 1689.99 \[2\]

**\[Total 9\]**

*This question was answered well by many candidates, with either a
correct final answer or only minor errors. The most common mistakes were
not calculating incremental claims before adjusting for inflation or
applying the wrong inflation adjustments.*

**Q6**

\(i\)

The value of 1,000 put options is \$1.963 \* 1000 = \$1,963. \[1\]

**\[Total 1\]\**

\(ii\)

The delta of the share is 1 and the delta of the put option is -0.446
\[½\]

So the bank should sell 0.446 \* 1000 = 446 shares. \[½\]

Doing this will generate 446 \* \$17 = £7,582. \[1\]

Combined with the \$1,963 means the bank has \$9,545 in cash. \[1\]

**\[Total 3\]**

\(iii\)

New option price = 1.963 – (19 – 17) \* 0.446 = \$1.071 \[1\]

**\[Total 1\]\**

\(iv\)

d1 = 0.3889 \[1\]

d2 = 0.1768 \[1\]

N(d1) = 0.6513 \[½\]

N(d2) = 0.5702 \[½\]

Option price = \$1.067 \[1\]

**\[Total 4\]\**

\(v\)

The option price does not change linearly with share price \[1\]

i.e. delta is not constant… \[½\]

…because it varies as the share price changes… \[½\]

…and how delta varies with share prices is shown by gamma. \[½\]

The figure in (iv) is also one day later which will affect the option
price \[½\]

The change in share price is quite large so using delta alone might not
be accurate \[½\]

**\[Marks available 3½, maximum 2\]**

\(vi\)

Vega = d/dσ of the share price. \[½\]

The value of a portfolio with a low value of vega will be relatively
insensitive to changes in

volatility. \[½\]

Put another way: it is less important to have an accurate estimate of σ
if vega is low. \[½\]

Since vega is not directly observable… \[½\]

…a low value of vega is important as a risk management tool. \[½\]

Furthermore, it is recognised that vega can vary over time. \[½\]

Since many derivative pricing models assume that volatility is constant
through time the

resulting approximation will be better if vega is small. \[½\]\
**\[Marks available 3½, maximum 2\]**

**\[Total marks available 16, maximum 13\]**

*This question was answered well by most candidates. The most common
areas to miss out on marks were parts (v) and (vi) where candidates did
not give enough detail bearing in mind the number of marks on offer.*

**Q7**

\(i\)

A portfolio strategy $`\left( a_{t},b_{t} \right)`$ is described as
*self-financing* if the value of the portfolio $`V_{t} =`$

$`a_{t}S_{t} + b_{t}C_{t}`$ is such that its instantaneous change is
$`{dV}_{t} = a_{t}{dS}_{t} + b_{t}{dC}_{t}`$. \[1\]

That is, at *t + dt* there is no inflow or outflow of money necessary to
make the value of the

portfolio back up to *V(t + dt)*. \[½\]\
**\[Marks available 1½, maximum 1\]**

\(ii\)

*at*$`S_{t} + b_{t}C_{t}`$ = *D<sub>t </sub>*\[1\]*<sub>\
</sub>at*$`{dS}_{t} + b_{t}{dC}_{t}`$ = d*D<sub>t</sub>* \[1\]

**\[Total 2\]\**

\(iii\)

Step 1 – calculate the risk neutral probabilities

| Time period | q |
|----|----|
| \[0,1\] | q<sub>1</sub> = (e<sup>0.05</sup> – 0.8) / (1.5 – 0.8) = 0.359 |
| \[1,2\] | q<sub>2</sub> = (e<sup>0.05</sup> – 0.7) / (1.4 – 0.7) = 0.502 |

> \[½\] for each value of q
>
> Step 2 – calculate the share price and option value at each time
> period

<table style="width:92%;">
<colgroup>
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 14%" />
<col style="width: 17%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;">Time 0</th>
<th colspan="2" style="text-align: center;">Time 1</th>
<th colspan="2" style="text-align: center;">Time 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>Share price</td>
<td>Option value</td>
<td>Share price</td>
<td>Option value</td>
<td>Share price</td>
<td>Option value</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>S<sub>0</sub>u<sub>1</sub>u<sub>2</sub> = 42</td>
<td>22</td>
</tr>
<tr>
<td></td>
<td></td>
<td>S<sub>0</sub>u<sub>1</sub> = 30</td>
<td>10.975</td>
<td></td>
<td></td>
</tr>
<tr>
<td>S(0) = 20</td>
<td>4.446</td>
<td></td>
<td></td>
<td><p>S<sub>0</sub>u<sub>1</sub>d<sub>2</sub> = 21</p>
<p>S<sub>0</sub>d<sub>1</sub>u<sub>2</sub> = 22.4</p></td>
<td><p>1</p>
<p>2.4</p></td>
</tr>
<tr>
<td></td>
<td></td>
<td>S<sub>0</sub>d<sub>1</sub> = 16</td>
<td>1.146</td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>S<sub>0</sub>d<sub>1</sub>d<sub>2</sub> = 11.2</td>
<td>0</td>
</tr>
</tbody>
</table>

> Final option value = £4.45
>
> \[1\] for all share prices in tree\
> \[1\] for options payoffs at expiry
>
> \[1\] for intermediate option values in tree
>
> \[1\] for correct final option value

**\[Total 5\]**

\(iv\)

Units of stock = (10.975 – 1.146) / (20 (u<sub>1</sub> – d<sub>1</sub>))
= 0.702 \[1\]

Units of cash = e<sup>-0.05</sup> ((1.146u<sub>1</sub> -
10.975d<sub>1</sub>) / (u<sub>1</sub> – d<sub>1</sub>) = -9.596 \[1\]

**\[Total 2\]**

\(v\)

Share price 16:

Value = 0.702 \* 16 - 9.596 \* e<sup>0.05</sup> = 1.144 \[1\]

Share price 30:

Value = 0.702 \* 30 - 9.596 \* e<sup>0.05</sup> = 10.972 \[1\]

**\[Total 2\]**

\(vi\)

A Binomial tree assumes that the stock price can only move to one of two
values in a single

time step. \[½\]

We can therefore only check the option value at these points. \[½\]

The Binomial tree also only allows us to model discrete step changes in
stock prices when

real stocks will move continuously. \[½\]

So there will be intermediate points in time when we cannot use the
Binomial tree to

calculate an option price. \[½\]

This will limit the usefulness of a replicating strategy derived using a
Binomial tree. \[½\]

Although we could introduce more time steps, which would help. \[½\]

**\[Total 3\]**

**\[Total marks available 15½, maximum 15\]**

*This question was generally answered well up to, and including, part
(iii). The most common error in part (iii) was treating the binomial
tree as recombining.*

*Part (iv) and (v) caused more difficulty, with only the stronger
candidates producing a correct replicating portfolio then proving that
it works.*

**Q8**

\(i\)

\(a\)

U(t) = U + ct – S(t) \[½\]

where c is the rate of premium income and S(t) is the aggregate claims
process for the risk. \[½\]

\(b\)

Premium income is assumed to be continuous \[1\]

Premium income is assumed to be constant \[1\]

There is no allowance for expenses \[1\]

Claims are assumed to be settled as soon as they occur \[1\]

There is no allowance for interest earned on the insurer’ \[1\]

\[Max 2 for part (b)\]

**\[Marks available 6, maximum 3\]**

\(ii\)

Ruin is defined as when an insurer’s assets fall to (or below) zero.
\[1\]

This will be the smallest value of t ≥ 0 when the surplus process U(t) ≤
0. \[½\]

The probability of ruin in finite time is P(U(t) ≤ 0) for some 0 ≤ t ≤T.
\[1\]

The probability of ruin in infinite time is P(U(t) ≤ 0) for some 0 ≤ t.
\[½\]

The probability of ruin never decreases as time increases (P(U(s)\<0) ≤
P(U(t)\<0) for s \< t)… \[½\]

…so the probability of ruin in infinite time will always be greater than
or equal to the

probability in finite time. \[½\]

Also, the limit of the probability of ruin in finite time, as time tends
to infinity is the

probability of ruin in infinite time. \[1\]\
**\[Marks available 5, maximum 3\]**

\(iii\)

The number of monthly claims N follows a binomial distribution: N ~
B(500, 0.01), so

E(N) = 500 x 0.01 = 5 \[½\]

Var(N) = 500 x 0.01 x 0.99 = 4.95 \[½\]

The individual claim amounts X are distributed uniformly between 0 and
1,000, so

E(X) = 0.5 x (0 + 1,000) = 500 \[½\]

Var(X) = (1/12) x (1,000 – 0)<sup>2</sup> = 83,333 \[½\]

The monthly aggregate claim amount S then has

E(S) = E(N)E(X) = 5 x 500 = 2,500 \[1\]

Var(S) = E(N)Var(X) + Var(N)E(X)<sup>2</sup> = 1,654,167 \[½\]

SD(S) = 1,286 \[½\]

**\[Total 4\]**

\(iv\)

At time 1 the insurer’s assets will be £2,000 + 500 x 10 = £7,000. \[1\]

The probability that the claims total more than £7,000 is

P(S \> 7,000) = P(Z \> (7,000 – 2,500) / 1,286) \[1\]

= P(Z \> 3.499) = 0.000234 \[1\]

**\[Total 3\]\**

\(v\)

As in (ii), the probability of ruin never decreases as time increases
\[½\]

…so the probability of ruin in infinite time will always be greater than
or equal to the

probability in finite time. \[½\]

And in this case it increases with time if we write more policies. \[1\]

Or if we update the surplus each year then…

The monthly premium income is £5,000 \[½\]

and the monthly expected claims are £2,500 \[½\]

So the insurer should expect its assets to increase over time \[½\]

And the probability of ruin will decrease with time. \[½\]

Or arguably, the question says we have written a series of one-year
insurance policies and

doesn’t say we will write any more, so the probability of ruin could be
constant after time

t=1. \[2\]\
**\[Marks available 6, maximum 2\]**

**\[Total marks available 24, maximum 15\]**

*This question was answered well, with part (iii) being the area that
caused most difficulty. However, errors here were carried forward so it
was still possible to score marks in parts (iv) and (v).*

**Q9**

\(i\)

Le Let S<sub>n</sub> be the accumulated value of \$1 at time t = 0.

E\[S<sub>n</sub>\] = (1 + j)<sup>n</sup> \[1\]

Var\[S<sub>n</sub>\] = (1 + 2j + j<sup>2</sup> +
s<sup>2</sup>)<sup>n</sup> – (1 + j)<sup>2n</sup> \[1\]

**\[Total 2\]\**

\(ii\)

For \$1:

E = 1.04<sup>10</sup> = 1.4802 \[½\]

V = (1 + 0.08 + 0.04<sup>2</sup> + 0.2<sup>2</sup>)<sup>10</sup> –
1.04<sup>20</sup> = 0.9594 \[½\]

So for \$5,000:

E = \$7,401 \[½\]

SD = \$4,897 \[½\]

**\[Total 2\]**

\(iii\)

We need P(Value \> 8,200) = P(Z \> (8,200 – 7,401) / 4,897 \[1\]

= P(Z \> 0.1632) = 0.4352 \[1\]

**\[Total 2\]\**

\(iv\)

Downside semi-variance = \$4,897<sup>2</sup> / 2 =
\$<sup>2</sup>11,990,305 \[1\]

**\[Total 1\]**

\(v\)

The price of the kitchen increases at the same rate as the expected
value of the investment \[½\]

So there will always be an expected shortfall \[1\]

But the variance of the investment also increases with time \[½\]

So the probability of the investment being worth enough for the kitchen
will increase with

time \[1\]

However, the probability increases very slowly so we could consider it
to be broadly

constant. \[1\]\
**\[Marks available 4, maximum 2\]**

*This question was answered well on the whole.*

**\[Total marks available 11, maximum 9\]**

**END OF EXAMINERS’ REPORT**



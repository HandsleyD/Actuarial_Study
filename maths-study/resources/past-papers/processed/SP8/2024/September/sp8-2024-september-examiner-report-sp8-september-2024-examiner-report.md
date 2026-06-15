---
normalized_id: sp8-2024-september-examiner-report-sp8-september-2024-examiner-report
exam_code: SP8
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/SP8/Sep24/SP8_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp8-2024-september-examiner-report-sp8-september-2024-examiner-report

EXAMINERS’ REPORT
SP8 - General Insurance Pricing
Specialist Principles




                          September 2024
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Introduction


The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates,
both those who are sitting the examination for the first time and using past papers as a
revision aid and also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The
Examiners have access to the Core Reading, which is designed to interpret the syllabus, and
will generally base questions around it but are not required to examine the content of Core
Reading specifically or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in
this report; other valid approaches are given appropriate credit. For essay-style questions,
particularly the open-ended questions in the later subjects, the report may contain more points
than the Examiners will expect from a solution that scores full marks.

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge
and understanding of the topics and therefore candidates should not be overly dependent on
open book materials. In our experience, candidates that spend too long researching answers
in their materials will not be successful either because of time management issues or because
they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be
exercised in doing so because each exam question is unique. As with all professional
examinations, it is insufficient to repeat points of principle, formula or other text book
works. The examinations are designed to test “higher order” thinking including candidates’
ability to apply their knowledge to the facts presented in detail, synthesise and analyse their
findings, and present conclusions or advice. Successful candidates concentrate on answering
the questions asked rather than repeating their knowledge without application.

Candidates should note that from the April 2025 exam session, all examinations will
continue to be delivered virtually and will have online proctoring. Exams will be closed
book and closed web. The ability to refer to past examiner reports and past papers
during the exam is not permitted. Candidates attempting to do so will be in breach of
the Assessment Regulations and subject to inappropriate conduct
investigations. Further details of the new exams can be found on the IFOA website.


The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Sarah Hutchinson
Chair of the Board of Examiners
December 2024




SP8 S2024                                                               © Institute and Faculty of Actuaries
        SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


A.     General comments on the aims of this subject and how it is marked

Subject SP8 deals with applications of general insurance pricing techniques across many
different types of products. Candidates should expect the examiners to draw these
applications from all parts of the syllabus in order to test as wide as possible a range of skills
and, in particular, to achieve a fair balance between personal and commercial lines.

Examiners will sometimes require the use of standard general insurance actuarial and
statistical techniques that are covered in earlier subjects. Candidates should ensure that they
are familiar with these when preparing for the SP8 examination.

As well as pricing techniques, SP8 also covers the workings and use of reinsurance products,
so candidates must also expect the examiners to set questions on these aspects.

In questions with an element of calculation, different numerical answers may be obtained
from those shown in these solutions depending on whether figures obtained from tables or
from calculators are used in the calculations. Candidates are not penalised for this. However,
candidates may not be awarded marks where excessive rounding has been used or where
insufficient working is shown. Where questions require looking up values in tables,
candidates are expected to interpolate between two values if reasonable to do so, even when
this is not stated in the question.

Where examples are given in the solution to illustrate the points made, marks were awarded
to candidates who gave these examples or an equally valid alternative.

Candidates who give well-reasoned points, not in the marking schedule, are awarded marks
for doing so.

B.     Comments on candidate performance in this diet of the examination

This paper was generally well attempted, except Q7 where most candidates couldn’t identify
that they needed to calculate unconditional probabilities before going into the Bühlmann-
Straub calculations. The pass mark of 57% adequately reflects the level for a minimally
competent candidate in this sitting.

Well prepared students were able to apply the course material to the situation that was asked.
Weaker candidates failed to answer the questions precisely or generate a variety of relevant
points for each question.

Q4(ii), Q4(iii), Q5(ii) and Q8(ii) required the candidate to look through the charts and tables
provided and make relevant comments. A high scoring answer required good understanding
of each topic and the various implications.

Time management appeared adequate for most, though a few candidates missed Q1(ii), Q3,
Q7, Q8(ii), and Q9(iii).

C.     Pass Mark

The Pass Mark for this exam was 57
439 presented themselves and 199 passed.


SP8 S2024                                                                © Institute and Faculty of Actuaries
          SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Solutions for Subject SP8 - September 2024

Q1
(i)
The individual risk model only allows for one claim from each risk                       [½]
which only applies for a handful of classes that allow only one claim                    [½]
e.g. personal accident insurance                                                         [½]
Doesn’t model reality for a vast majority of general insurance products                  [½]
The collective risk model is more useful within general insurance                        [½]
as it allows for multiple claims from each risk                                          [½]
most general insurance policies do not have a restriction on the number of claims
that could be made in a policy year                                                       [1]
e.g. a motor insurance policy may have multiple claims from a policy                     [½]
The claim amounts 𝑋𝑖 𝑠 are independent and identically distributed                       [½]
and 𝑋𝑖 𝑠 and N are independent of each other.                                            [½]
These are desirable properties that are in line with the behaviour of general
insurance products.                                                                      [½]
The individual risk model is based on a fixed number of risks / the number of risks
is specified                                                                             [½]
whereas the collective risk model uses a frequency parameter that may or may-not
be dependent on the number of risks                                                      [½]
and therefore, accounts for uncertainty in the number of claims                          [½]
which provides additional flexibility                                                    [½]
The collective risk model allows using a Poisson distribution to model the
frequency                                                                                [½]
which simplifies the model                                                               [½]
because the mean and variance of N are identical.                                        [½]
as it allows for multiple claims from each risk                                          [½]
                                                             [Marks available 9½, maximum 4]

(ii)
The MGF of a normal random variable X with mean μ and variance σ2 is
MX(t) = E[etX] = etμ + 0.5σ^2t^2                                                                           [½]

The MGF of a Poisson random variable N with mean λ and variance λ,
MN(s) = E[esN] = eλ(e^s - 1)                                                                               [½]

MS(t) = MN (log MX(t))
MS(t) = MN (tμ + 0.5σ2t2)                                                                                  [½]
MS(t) = eλ(e^(tμ + 0.5σ^2t^2) - 1)                                                                         [½]
                                                                        [Marks available 2, maximum 2]
                                                                                              [Total 6]


Commentary:
(i)      Well prepared candidates identified that this was an extension of the content from the


SP8 S2024                                                                  © Institute and Faculty of Actuaries
        SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


       core reading and scored well. Less prepared candidates confused collective risk
       model with a burning cost approach, hence lost a lot of marks.
(ii)   Generally answered well, with many fully correct answers. The most common errors
       included incorrect MGFs, combining the MGFs incorrectly, or algebraic slips. A
       handful of candidates didn’t write anything.


Q2
(i)
The pricing process is similar to other parametric products                                             [½]
Historical claims are unlikely to be very useful                                                        [½]
since payouts are fixed based on the amount of rainfall                                                 [½]
and historical data might have different payout structures                                              [½]
and the business mix by location would have been changing.                                              [½]

Instead, the pricing actuary is likely to try to model rainfall data                                    [½]
particularly, the total rainfall during the rainy season                                                [½]
and it’s variability using a particular distribution                                                    [½]
to calculate the probability of rainfall lower than 40mm                                                [½]
and less than 35mm, 30mm, etc.                                                                          [½]
and hence the expected payout.                                                                          [½]

The historical data will have to be downloaded from local weather agencies                              [½]
for at least 10 years, but longer if possible                                                           [½]
and adjusted for outliers / extreme deviations that skew the analysis                                   [½]
The data may not be available for the exact region that is being modelled                               [½]
it may be incomplete / have errors                                                                      [½]
or may not be available for the exact trigger values being modelled.                                    [½]

Another way could be to use the hazard data                                                             [½]
from a pre-existing catastrophe model.                                                                  [½]
though catastrophe models are usually designed to cover floods and excess
rainfall, so it may not be very useful.                                                                 [½]

The pricing may need to consider weather trends                                                         [½]
like the impact of climate change                                                                       [½]
and weather patterns like El Nino and La Nina                                                            [1]
and expert opinion from climate scientists, weather reports, etc.                                       [½]

The insurer is unlikely to use multiple rating factors to differentiate price                           [½]
with location being the most important factor.                                                          [½]

The premium is likely to be paid on a periodic basis e.g. monthly, quarterly                            [½]
which introduces the risk of mid-term cancellation / lapses / defaults                                  [½]
especially since farmers may stop premiums after payouts are triggered / rainfall
is already greater than 40mm                                                                             [1]

Expenses should be kept as low as possible, to keep premiums affordable                                 [½]
there may be subsidies that may need to be factored into the pricing                                    [½]
Claims handling expenses may be lower since claim events are well-defined                               [½]


SP8 S2024                                                                © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


because the insurer does not have to assess the actual damages                           [½]
and there is less opportunity for conflict                                               [½]
Distribution costs may have to be carefully managed                                      [½]
and such products could be sold via partners rather than brokers                         [½]
product may be packaged alongside other essentials to ensure reach                       [½]
e.g. the farmer’s loan or the insurance for livestock                                    [½]
The policy term could be shorter than 1-year / only covering the rainy season            [½]
or the duration could be annual even though risk is within rainy season                  [½]
more emphasis likely to be placed on seasonality than a traditional insurance
product.                                                                                 [½]
and expense loadings will have to be adjusted if the duration is less than a full
year.                                                                                    [½]
Allow for the possibility of accumulations.                                              [½]
especially since the product is aimed at a particular region                             [½]
This could lead to a higher capital loading being required                               [½]
Reinsurance costs could be higher                                                        [½]
due to the additional volatility / lower diversification                                 [½]
or the lack of availability for this special product                                     [½]
Similarly, guidance from reinsurers may not be available                                 [½]
Possibly lower investment returns                                                        [½]
because premiums are received periodically                                               [½]
and claims are settled faster / reserves are smaller.                                    [½]
Profit loading (if any) could be lesser than traditional products                        [½]
                                                            [Marks available 27½, maximum 8]

(ii)
Advantages:
No moral hazard                                                                                        [½]
farmers cannot influence a weather-based index                                                         [½]
No anti-selection                                                                                      [½]
as the risk is based on the rainfall level                                                             [½]
No need for loss adjusters                                                                             [½]
payment is sent as soon as the index trigger is exceeded, regardless of loss                           [½]
hence lower disputes                                                                                   [½]
and lower likelihood of fraudulent claims                                                              [½]
and lower expenses.                                                                                    [½]
Easier to structure                                                                                    [½]
as policy conditions are likely to be simple / less need for exclusions, etc.                          [½]
and possibly easier for the farmers to understand                                                      [½]
Low reserve requirement                                                                                [½]
as there are little reporting and settlement delays                                                    [½]
Similarly lower capital requirement since risk is concentrated in a short period                       [½]
possibly increased diversification with other products                                                 [½]
Positive reputational benefits                                                                         [½]
providing innovative products to low-income population at affordable prices (S
in ESG)                                                                                                [½]
and may be able to get subsidies from the government                                                   [½]
Cross selling opportunities into this new demographic                                                  [½]
Affordable and periodic payments may be attractive to farmers                                          [½]
especially if other insurers are not offering such a product                                           [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


hence less competition                                                                                 [½]
and possibly higher profitability                                                                      [½]
Doesn’t need any data relating to historical claims / just external weather data                       [½]
hence easier for a new entrant to price / low barriers to entry.                                       [½]
There may be regulatory benefits / lower regulatory burden                                             [½]
and tax reliefs                                                                                        [½]

Disadvantages:
Reputation risk if low-income farmers don’t get paid when they suffer losses            [½]
due to not triggering the index                                                         [½]
Possibly difficult to sell the product                                                  [½]
education of such a policy will be difficult                                            [½]
product covers lack of rainfall, whereas flood may pose a greater threat                [½]
and which part of the crop phase does the lack of rainfall occur                        [½]
Significant uncertainty over pricing due to being a non-traditional product             [½]
possible lack of expertise to price parametric products                                 [½]
and possibly inaccurate / unrepresentative rainfall data                                [½]
climate change may result in greater payouts than expected                              [½]
Hard to make premiums both affordable to farmers and profitable for insurer              [1]
and if profitable, competition can rise quickly due to low barriers of entry            [½]
Reinsurance may be difficult to obtain for this niche product                           [½]
or too expensive                                                                        [½]
Distribution costs could be higher as a proportion of premium                           [½]
due to the periodic premium collection and remote locations of farmers                  [½]
Capital requirements may be higher due to all-or-nothing nature of claims               [½]
and higher accumulations                                                                [½]
Regulation may be more stringent, as the product is not based on indemnity              [½]
and to protect farmers e.g. maximum premium                                             [½]
[Other valid points ½ mark each]
                                                           [Marks available 24½, maximum 8]

(iii)
Two distinct approaches for this question
                        [marks given for either approach but not for both]
Approach 1: Use historical loss data and adjust for changes in exposure and
T&Cs.
Obtain historical loss data                                                                            [½]
with the amounts claimed / losses                                                                      [½]
Choose a suitable period for calculation                                                               [½]
5-10 years of data is more recent                                                                      [½]
but more years of data will give stable results                                                        [½]
Adjust claims based on latest exposure & terms & conditions                                            [½]
and ideally the expected exposure for the following year (budget)                                      [½]
to account for the mix more accurately.                                                                [½]
Remove outliers / adjust return period for extreme events                                              [½]
or allow a loading for events that may not have happened in the past                                   [½]
Develop claims to ultimate / allow for IBNR, IBNER                                                     [½]
adjust for inflation                                                                                   [½]
Allow for any trends / other adjustments                                                               [½]
e.g. economic, legislative, climate change, etc.                                                       [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Risk premium per acre can be calculated as the sum of total claims divided by
the total exposed to risk                                                             [½]
                                                          [Marks available 7½, maximum 4]

Approach 2: Use historical rainfall data, apply to latest exposure and latest
T&Cs
Obtain historical rainfall data                                                           [½]
showing the total rainfall during the rainy season in that region                         [½]
calculate how many times it has fallen below 40mm                                         [½]
and by how much (5mm intervals)                                                           [½]
Calculate as-if (simulated) payouts based on latest exposure but historical
rainfall data                                                                             [½]
and ideally the expected exposure for the following year (budget)                         [½]
to account for the mix more accurately.                                                   [½]
Remove outliers / adjust return period for extreme events                                 [½]
or allow a loading for events that may not have happened in the past                      [½]
Choose a suitable period for calculation                                                  [½]
5-10 years of data is more recent                                                         [½]
but more years of data will give stable results                                           [½]
Allow for any trends / other adjustments                                                  [½]
e.g. climate change                                                                       [½]
Risk premium per acre can be calculated as the sum of expected claims divided
by the total exposed to risk                                                              [½]
                                                             [Marks available 7½, maximum 4]
                                                                                   [Total 20]


Commentary:
(i) Candidates generally wrote a good variety of points relating to climate data. However,
not many provided enough points to score fully here. Several candidates made points here
that scored in part (ii), such as moral hazard or anti-selection.

(ii) Answers were well-structured, with a wide range of points for both advantages and
disadvantages. Many responses provided an appropriate level of detail for an "outline"
question.

(iii) Candidates generally performed well and chose one of two valid approaches: historical
loss data adjusted for exposure changes or historical rainfall data applied to current
exposure. Some candidates included irrelevant details like expense or profit loadings even
though the question asked about risk premium.


Q3
An interaction term is used where the pattern in the response variable is modelled
better by including extra parameters for each combination of two or more factors                       [½]
adds predictive value                                                                                  [½]
over and above the separate single factors                                                             [½]
allows the model to capture non-additive / non-constant effects                                         [1]
can help identify new patterns and dependencies in the data which may be missed
without interactions                                                                                    [1]

SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


The sum product of the individual effects from each variable is not the actual
combined effect because of interaction                                                                 [½]
Hence, pricing will tailor premiums more precisely to individual travellers                            [½]
else there is a risk of anti-selection                                                                 [½]
if competitors are pricing more accurately                                                             [½]
The interaction term allows the user to assess how the impact of age on the
premium changes as trip duration varies                                                                 [1]

e.g., a young person on a long trip (e.g. gap year, travelling the world) may be
proportionally riskier than an older person on a long cruise
                                                        [½ mark for each example, maximum 1]
                                                                [Marks available 7, maximum 5]
                                                                                      [Total 5]

Commentary:
Candidates generally scored well, as expected for a bookwork question. Candidates who
were less familiar with the material struggled to address the specific relationship between
age and trip duration.


Q4
(i)
One-way distribution of exposure across levels of each factor                                          [½]
will indicate whether each level of the factor contains enough information to be
included in models                                                                                     [½]
We will get an initial idea of the spread of the data across different levels                          [½]
identify levels containing exceptionally low or high exposure                                          [½]
so that they can be grouped / ungrouped accordingly                                                    [½]
Find factors with missing / null / unknown values                                                      [½]
If missing data is rectified early, we will avoid issues with model convergence in
the future                                                                                             [½]

One-way statistics can be calculated for claim counts, severity, loss ratio and pure
premium, etc.                                                                            [½]
which will give a preliminary indication of the effect of each factor.                   [½]
helps to identify outliers                                                               [½]
and it’s predictive power / importance to the GLM.                                       [½]
and how it aligns to our expectations / previous analysis                                [½]
One-way analysis using policy years can provide indication of general trends             [½]
Factors with lower predictive power can be removed from the analysis                     [½]
which leads to a smaller dataset                                                         [½]
and simplification of the model                                                          [½]
and help prevent overfitting                                                             [½]
improving overall efficiency.                                                            [½]
Able to provide and communicate initial findings to stakeholders                         [½]
                                                             [Marks available 9½, maximum 3]

(ii)
There is slight increasing trend in the average claim amount across sum insured                        [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


bands
There is a huge concentration of exposure between sum insured - £0 to £10,000             [½]
which is likely where the average claims severity is most credible                        [½]
and the exposure greater than GBP 14k is very low                                         [½]
There is significant volatility in the output                                             [½]
particularly in the higher exposure brackets                                              [½]
likely due to low amount of data                                                          [½]
e.g. the 13000-14000 sum insured band has a very low average claim amount                 [½]
and 14000-15000 has a very high average claim amount                                      [½]
[Other valid examples ½ mark each]
A wider band from 13,000-15000 could smooth the results                                   [½]
make the upward trend more visible                                                        [½]
Not a suitable rating factor since there is huge concentration in one group               [½]
                                                               [Marks available 6, maximum 3]

(iii)
Group higher sum insured bands to reduce volatility in the average claims
severity                                                                                    [½]
Split the £0 to £10,000 exposures into smaller sum insured bands as it is too
concentrated which will not be predictive                                                   [½]
Upon splitting the first sum insured band, if there is still concentration in a
particular sum insured value, this rating factor should be removed completely                [1]
Check for errors in the data source                                                         [½]
and whether nil claims are excluded while calculating average claim amounts                 [½]
or remove certain years from the data to stabilise the results                              [½]
Investigate the higher and lower average claim amounts between sum insured -
£13,000 to £15,000                                                                          [½]
Possibly sum insured be replaced by vehicle value or make/model/age of a car                [½]
Consider using any market data to supplement the insurer’s current data                     [½]
e.g. using Glasses value which is up to date market value for vehicles                      [½]
or any other suitable example                                                               [½]
                                                                 [Marks available 6, maximum3]
                                                                                       [Total 9]

Commentary:
(i)    Candidates generally scored well here with a good range of relevant benefits. Some
responses included points that were too generic, like ‘improve pricing’.
(ii)   Generally well answered. Stronger candidates interpreted the chart correctly and
commented on various aspects.
(iii)  Performance varied. Most candidates identified breaking up the first segment and
combining smaller exposure groupings. Only stronger candidates made further suggestions.


Q5
(i)
Need to consider the type / source of inflation to use                                                 [½]
hull damage is driven by cost of steel / labour / spare parts                                          [½]
cargo is likely to be linked to the shipment value or sum insured                                      [½]
third party liability may be dependent on court awards inflation                                       [½]
possibly changes in discount rate used in bodily injury claims, e.g. Ogden in the                      [½]

SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


UK
Marine losses are likely to be global in nature                                            [½]
hence need to decide which country / region of inflation is applicable                     [½]
and if the same inflation assumption will apply to small and large losses                  [½]
The actuary will also have to consider what inflation parameters are available             [½]
and what has been used in any previous analysis, for consistency.                          [½]
or parameters that are commonly used by the industry / competitors                         [½]
and the cost of obtaining such parameters.                                                 [½]
if the correct type of inflation is not available, CPI may be used                         [½]
Projected period will depend on when the new premiums will be implemented.                 [½]
and how long do we expect the delays to be (reporting, settlement)                         [½]
To project future inflation, many different methods can be used                            [½]
e.g., linear prediction model, average of past period, etc.                                [½]
or consider getting a professional opinion from an economist/expert/ underwriter/
loss adjuster.                                                                             [½]
adjust for trends e.g. increasing severity due to environmental laws                       [½]
Losses below any deductible could inflate to exceed the threshold                          [½]
hence historical threshold should be deflated to accurately assess excess claims           [½]
or inflation should be applied on ground up claims                                         [½]
but information for these losses may not be available.                                     [½]
If rates are expressed per SI, then SIs need to be inflated too.                           [½]
                                                               [Marks available 12, maximum 5]
(ii)
Method 1
The historical inflation has been volatile                                                 [½]
there has been an alternate increase/decrease pattern                                      [½]
The average of past 4 quarters will smooth the results                                     [½]
However, there is an overall increasing trend which is ignored                             [½]

Method 2
This method is likely to lead to the most volatile results                                             [½]
and also doesn’t account for the increasing trend.                                                     [½]
The latest quarter is significantly higher and might be an outlier                                     [½]
However, might reflect the recent inflationary environment                                             [½]
Easiest method to implement and explain                                                                [½]

Method 3
The linear trending accounts for the increasing trend over the quarters                                [½]
however, assumes inflation will increase at the same rate in the future.                               [½]
Hence Method 3 is the highest of the three methods.                                                    [½]
and higher than any of the past quarters.                                                              [½]
6 quarters of data might be too short to understand the trend.                                         [½]
Hardest to implement and explain                                                                       [½]

Inflation may be driven by macro-economic conditions which may be turning
towards a period of higher / lower inflation.                                                          [½]
we must take market conditions into account while selecting an appropriate
method.                                                                                                [½]
and compare the results against a benchmark to assess further                                          [½]
Since we are considering 6 quarters of data, there may be some seasonality                             [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


                                                                  [Marks available 9½, maximum 3]
(iii)
Inflation may not impact the loss distribution uniformly.                                              [½]
Large claims are also more likely to have large-scale hull damage                                      [½]
which is impacted by steel prices / labour                                                             [½]
or third-party liability components                                                                    [½]
which has a higher proportion of loss of income compensation                                           [½]
The inflation applying to such claims may be higher                                                    [½]
as compared to small claims which may be driven by labour and parts costs
inflation.                                                                                             [½]
Large liability claims may have elements of pollution/ environmental liability                         [½]
which are still developing rapidly in today’s environment                                              [½]
Larger claims may be more likely to go into courts                                                      [1]
hence possible court awards driven inflation                                                           [½]
and inflation of legal costs.                                                                          [½]
Larger claims may take longer to settle                                                                [½]
hence more exposed to inflation over a longer period of time.                                          [½]
Legal reform can affect different parts of the loss distribution in different ways                     [½]
e.g., a reform that reduces the overall ground-up loss cost may have a much
greater impact on smaller claims than larger ones.                                                     [½]

Larger claims may be due to larger (or newer or more sophisticated) vessels                             [1]
for which the parts and labour costs may be increasing faster than smaller vessels.                    [½]

$50,000 is an arbitrary amount                                                                         [½]
further analysis may be required to assess if the threshold is appropriate                             [½]
the threshold itself should be deflated when we look through older claims                              [½]
calculate trends from the data to assess the suggestion                                                [½]
and refer to external databases / judgement from marine underwriters, etc.                             [½]

It may be more appropriate to apply different parameters based on the claim type           [½]
e.g. different parameters for hull claims vs liability claims                              [½]
Some large claims may be assessed based on its own circumstances and choose
an appropriate inflation rate for each one                                                 [½]
                                                              [Marks available 14, maximum 6]
                                                                                    [Total 14]


Commentary:
(i)     Generally well attempted, with many candidates recognising the different loss types
and what drives inflation e.g. hull damage is linked to steel / labour costs. Some answers
incorrectly included frequency analysis or historic claims analysis, which were not relevant
here.
(ii)    Most candidates explained points for and against each method systematically and
scored well. Higher scoring answers addressed points like ease of calculation, which method
is most conservative and the limitations of each method.
(iii) A challenging part, with varied performance. Better answers commented on different
claim types, settlement delays, and the $50,000 threshold




SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Q6
(i)
Claims frequency may have increased due to fraudulent claims                              [½]
which the software is not able to detect vs human claim handlers                          [½]
Or the machine may be better at identifying fraudulent claims                             [½]
so the total frequency may have decreased.                                                [½]
Claim frequency may also increase due to more customers claiming for smaller
claims, closer to the excess                                                              [½]
because of the ease of settling the claim                                                 [½]
The severity of claims paid through the system may have increased                         [½]
because customers may be able to inflate small claims easily.                             [½]
However, the claims team might have more capacity to analyse the claims that
aren’t automatically paid by the system                                                   [½]
hence reducing the payout on more complex claims.                                         [½]
The expense loading would need to incorporate lower administrative costs / claims
handling expenses                                                                         [½]
potential decrease in the salaries and cost of the claims team.                           [½]
The expense loadings would need to incorporate the increased cost of the system           [½]
both upfront and recurring expenses                                                       [½]
The new features may have increased the volume of business                                [½]
which could reduce the expense loading further                                            [½]
because fixed expenses can be distributed over a larger portfolio                         [½]
The customers may be more likely to renew / less likely to lapse or cancel                [½]
hence increasing customer lifetime value                                                  [½]
and reducing acquisition costs.                                                           [½]
The mix of business may change                                                            [½]
since these new features may excite a different group of customers                        [½]
or discourage the less-technology friendly customers.                                     [½]
There may be a reduction in investment returns due to claims being paid quicker /
lower settlement delay                                                                    [½]
with lower reserves to earn returns                                                       [½]
Could also be a corresponding reduction in capital required                               [½]
leading to better investment returns on free reserves                                     [½]
Alternatively, there could be an increase in capital required                             [½]
due to increased uncertainty associated with AI                                           [½]
and additional risks like cyber hacking, software errors, etc.                            [½]
Possible change in reinsurance requirements                                               [½]
and this cost will need to be incorporated in the pricing.                                [½]
                                                              [Marks available 16, maximum 6]
(ii)
Own pricing could have become more sophisticated                                          [½]
due to better data collection                                                             [½]
and the use of telematics                                                                 [½]
and better systems / software                                                             [½]
that allow hyper-personalization of pricing / customized pricing / dynamic pricing        [½]
and prices to be rolled out more quickly.                                                 [½]
The use of Machine Learning / AI driven analytics could help find new patterns in
the data.                                                                                 [½]
and identify errors in the source data.                                                   [½]
help with better risk segmentation                                                        [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Software could even be used to enter data instead of relying on humans, which
improves accuracy.                                                                           [½]
e.g., the customers could take a picture of their car, and the system could record the
model, colour, license plate, etc.                                                           [½]
The vehicles have become more sophisticated                                                  [½]
evolution of ADAS (Advanced driver assistance systems) to prevent accidents                  [½]
and introduction of anti-theft features                                                      [½]
which reduces frequency                                                                      [½]
but could increase the severity / cost of repair.                                            [½]
Electric vehicles have become increasingly popular.                                          [½]
which have very different risks                                                              [½]
e.g., lithium batteries are prone to fire                                                    [½]
Autonomously driven vehicles may also be insured more often                                  [½]
potential of emerging risks.                                                                 [½]
e.g. cyber risks / hacked cars / software errors                                             [½]
Thus, the pricing may have to factor the type of vehicle / feature being used                [½]
Policing technology improvements e.g. more accurate speed cameras, ANPR, etc                 [½]
Blockchain technology could have reduced fraud                                               [½]
Distribution channels could have changed                                                     [½]
moving more towards automated or online channels                                             [½]
which might have reduced distribution costs significantly.                                   [½]
and reduce errors in collecting data from customers.                                         [½]
identified low risk customers can be targeted through online marketing                       [½]
The mix of risks still buying insurance from old channels may be different.                  [½]
Aggregator websites have made pricing more competitive                                       [½]
hence customers are more price sensitive / less loyal / lower stickiness                     [½]
and insurers may have to use factors other than price to differentiate themselves
from competitors.                                                                            [½]
                                                               [Marks available 17, maximum 7]
                                                                                      [Total 13]

Commentary:
(i)    Fairly well answered. Most candidates commented on claims, expenses, and capital
impacts. Better answers considered aspects like sales volumes, renewals, capital and
investment returns.
(ii)   Candidates generally wrote a variety of points, with stronger responses discussing
telematics, online channels, and emerging risks.


Q7
Data split by percentage (using the expected claims)
2.5 x (% of social users that are urban) + 1.1 x (1 - % of social users that are urban)
=2                                                                                                     [½]
% of social users that are urban = (2 - 1.1) / (2.5 - 1.1) = 0.64286                                   [½]

Therefore % of social users that are rural = 1- 0.64286 = 0.35714                                      [½]

% of business users that are urban = (3.8 - 2.3) / (4 - 2.3) = 0.88235                                 [½]



SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Therefore % of business users that are rural = 1- 0.88235                                              [½]

Calculation of unconditional probabilities
2/3 social drivers and 1/3 business drivers                                                            [½]
                                                                                                       [½]
[1 mark for four unconditional probabilities]
Unconditional probability of being social urban
= 0.64286 x 2/3
= 0.42857

Unconditional probability of being social rural
= 0.35714 x 2/3 = 0.2381

Unconditional probability of being business urban
= 0.88235 x 1/3 = 0.29412

Unconditional probability of being business rural
= 0.11765 x 1/3 = 0.03922

Bühlmann-Straub calculation
µ = (0.42857 x 2.5) + (0.2381 x 1.1) + (0.29412 x 4) + (0.03922 x 2.3)                                 [½]
= 2.6                                                                                                  [½]

𝜙 = (0.42857 x 1.1) + (0.2381 x 0.7) + (0.29412 x 1.2) + (0.03922 x 0.5)                               [½]
= 1.01064                                                                                              [½]
                      2
𝜆 = (0.42857 x 2.5 ) + (0.2381 x 1.12 ) + (0.29412 x 42 ) + (0.03922 x 2.32 ) − 2.62                   [½]
= 1.12                                                                                                 [½]

Bühlmann-Straub credibility factor is
        𝑛
𝑍𝐵 =         𝜙
       𝑛 +
             𝜆

n=1
                                                                                                       [½]
𝜙 1.01064
  =
𝜆   1.12                                                                                               [½]
             1
𝑍𝐵 =        1.01064                                                                                     [½
       1+
              1.12
                                                                                                       [½]
𝑍𝐵 = 0.52566                                                                                           [½]
                                                                     [Marks available 9, maximum 9]
                                                                                           [Total 9]

Commentary:
This question was poorly attempted. Most candidates didn’t derive unconditional
probabilities and only partially attempted the Bühlmann-Straub calculation. However,
candidates who worked out credibility factor elements were credited, even if proportions
were incorrect. A high percentage of candidates skipped this question completely.


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report



Q8
(i)
Approach                                                                                   [½]
The approach is sensible because climate change is likely to increase the frequency
of catastrophe losses                                                                      [½]
It is straightforward to implement / simple approach                                       [½]
assuming the software is in place that allows them to do this                              [½]
also easy to explain                                                                       [½]
Consider whether it’s appropriate to increase the frequency uniformly                      [½]
or whether it should vary by region / country                                              [½]
or whether the adjustment should be higher for more extreme events                         [½]
as extreme events are more likely to be impacted by climate change                         [½]
20% seems to be an arbitrary number                                                        [½]
need to investigate how this was derived                                                   [½]
Perform sensitivity testing on the results                                                 [½]
and incorporate judgement from experts on the more appropriate increase                    [½]
Need to also define how many years of climate change are considered here                   [½]
and how much of the climate change impact / trend is already incorporated in the
existing model                                                                             [½]
and whether the adjustment needs to change again in the following pricing exercise.        [½]
100,000 simulations is usually reasonable                                                  [½]
consider increasing this if the model can do so                                            [½]
to reduce simulation error                                                                 [½]
Or reducing the number of simulations if there are system limitations                      [½]
or the time taken to run outweighs the benefits of a stable result                         [½]
Climate change is likely to impact hazard (severity) as well                               [½]
both in terms of magnitude and the nature of the events                                    [½]
e.g. warmer climate could cause cyclone tracks to change                                   [½]
e.g. higher humidity in warm air could cause stronger cyclones                             [½]
Many possible events are unlikely to be in the historic data / ENID                        [½]
Also, changes in frequency and severity are not likely to be independent                   [½]
There is also a likelihood of multiple hazards co-occurring                                [½]
which is unlikely to be considered with this approach                                      [½]
an increase in cross peril correlation will likely lead to an increase in tail risk        [½]
May need to make changes to the vulnerability module as well                               [½]
as the vulnerability of particular asset types may have changed in response to the
modified hazard                                                                            [½]
The model may capture only the physical risk element, not any systemic risks               [½]
e.g., supply chain disruption, demand surge, infrastructure failure                        [½]
                                                              [Marks available 16½, maximum 6]

(ii)
Comments:
AAL has increased in line with the change in frequency                                                 [½]
however, the 20.8% increase is slightly different from the 20%                                         [½]
probably due to simulation error                                                                       [½]

AEPs have also increased                                                                               [½]
however, the AEP increases are not uniform                                                             [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report



The largest effect is seen at 50% probability, where the expected losses have
increased by 26.4%                                                                                     [½]
this is more than the 20% increase in frequency                                                        [½]

Losses at the 99.8% probability have only increased by 8.1%                                            [½]
which is less than the 20% increase in frequency                                                       [½]
and significantly lower than the effect at 50% probability                                             [½]

The dataset is likely to contain very few losses at the tail of the distribution                       [½]
so simply multiplying the frequency by 20% is unlikely to have much impact on this
portion of the curve                                                                                   [½]

[Other reasonable observation - e.g. at 80%, it’s in line with the 20% increase]         [½]
If we had plotted the OEP from the model, it may have shown a more consistent
increase                                                                                 [½]
because severity hasn’t been changed                                                     [½]
We may expect climate change to have a higher impact on extreme losses                   [½]
and not find the adjusted model to be reasonable.                                        [½]
                                                            [Marks available 8½, maximum 4]
                                                                                  [Total 10]

Commentary:
(i)     Most candidates identified the reasonableness of the approach and that is generally
easy to understand and explain. Stronger candidates linked this to the hazard and
vulnerability modules and generated a wide variety of points.
(ii)    Wide range of answers. Better answers commented on multiple aspects of the table.


Q9
(i)
Total Sum Insured                                                                                      [½]
Estimated Maximum Loss                                                                                 [½]
Industry / Trade / Occupancy Type                                                                      [½]
Age of Building                                                                                        [½]
Number of Floors                                                                                       [½]
Size / Floor area                                                                                      [½]
Construction Type                                                                                      [½]
General condition / wear and tear of building / maintenance                                            [½]
Fire Protection Equipment                                                                              [½]
Excess / Limit / Deductible                                                                            [½]
Location of the building                                                                               [½]
Hazardous Material                                                                                     [½]
Previous claim history                                                                                 [½]


SP8 S2024                                                               © Institute and Faculty of Actuaries
       SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


Policy Coverage (Fire, Lightning, Catastrophes, Business Interruption, etc.)                              [½]
Policy Dates / Policy Duration                                                                            [½]
                                                                    [Marks available 7½, maximum 4]


(ii)
Approach 1: Using proportion of each loss

                                       [1]           [½]            [½]             [½]             [½]

                   Total Sum
   Loss Size        Insured            Y       LEVy(25%)      LEVy(50%)        LEVy(75%)       LEVy(90%)

    100,000         2,000,000         5.0%          5.0%          5.0%             5.0%            5.0%

  25,000,000       37,500,000         66.7%         25.0%        50.0%            66.7%           66.7%

    300,000        24,000,000         1.3%          1.3%          1.3%             1.3%            1.3%

   4,500,000       22,500,000         20.0%         20.0%        20.0%            20.0%           20.0%

  64,000,000      192,000,000         33.3%         25.0%        33.3%            33.3%           33.3%

   1,000,000        1,200,000         83.3%         25.0%        50.0%            75.0%           83.3%

   8,000,000      240,000,000         3.3%          3.3%          3.3%             3.3%            3.3%

  12,000,000       24,000,000         50.0%         25.0%        50.0%            50.0%           50.0%

       Average [1 mark]               32.9%         16.2%        26.6%            31.8%           32.9%



       Y              G(y)

     25%             49.3%

     50%             81.0%

     75%             96.8%

     90%             100.0%



                                                                                          [1 mark for table]


Approach 2: Using loss amounts or weighted average


                                [1]           [½]             [½]                [½]              [½]




SP8 S2024                                                                 © Institute and Faculty of Actuaries
         SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


                  Total Sum                 Accumulated     Accumulated       Accumulated        Accumulated
   Loss Size                         Y
                   Insured                   Loss (25%)      Loss (50%)        Loss (75%)         Loss (90%)

    100,000       2,000,000        5.00%      100,000          100,000           100,000            100,000

   25,000,000     37,500,000       66.67%    9,375,000       18,750,000         25,000,000         25,000,000

    300,000       24,000,000       1.25%      300,000          300,000           300,000            300,000

   4,500,000      22,500,000       20.00%    4,500,000        4,500,000         4,500,000          4,500,000

   64,000,000    192,000,000       33.33%    48,000,000      64,000,000         64,000,000         64,000,000

   1,000,000      1,200,000        83.33%     300,000          600,000           900,000           1,000,000

   8,000,000     240,000,000       3.33%     8,000,000        8,000,000         8,000,000          8,000,000

   12,000,000     24,000,000       50.00%    6,000,000       12,000,000         12,000,000         12,000,000

        Totals [1 mark]                      76,575,000      108,250,000       114,800,000        114,900,000




        Y                  G(y)

        25%               66.6%

        50%               94.2%

        75%               99.9%

        90%               100.0%

                                                                                             [1 mark for table]

Assumptions                                                                                               max
                                                                                                             1
                                                                                                          mark
The claims are closed / fully developed / projected to ultimate                                                [½]
Loss and sum insured data is based on the same time period / consistent inflation,
exchange rates, etc.                                                                                           [½]
Losses are consistent in terms of excess / limit / deductibles                                                 [½]
ideally losses are from ground-up so that the curve is not impacted by pre-applied
policy conditions.                                                                                             [½]
Loss data is consistent with the previous exposure curve (e.g. either indemnity only,
or a similar level of claims handling expenses.)                                                               [½]
                                                                          [Marks available 6, maximum 6]


(iii)
The empirical curve is only based on 8 losses                                                                  [½]


SP8 S2024                                                                   © Institute and Faculty of Actuaries
        SP8 ‑ General Insurance Pricing ‑ Specialist Principles - September 2024 - Examiners’ report


hence may not be reliable                                                                               [½]
But we don’t know anything about the original exposure curve as well                                    [½]
The empirical curve doesn’t estimate any losses beyond 90% of the TSI                                    [1]
premium would be the same for a limit being 90% vs 100% of the sum insured                              [½]
which is not intuitive to customers                                                                     [½]
Both curves don’t have granular details for other values of Y                                           [½]
in particular, the excess point might be less than 25% of exposure                                       [1]
Parts of the calculated curve is either lighter / heavier than the existing curve                       [½]
calculated curve has lesser proportion of losses below 25% of sum insured                               [½]
more between 25% to 75% of the sum insured                                                              [½]
and again less for losses greater than 75% of the sum insured.                                          [½]
Both curves are based on total sum insured                                                              [½]
while PML / EML / MFL is likely to be more useful for commercial property                               [½]
Do either curves account for claims expenses                                                            [½]
or inflation?                                                                                           [½]
The empirical curve may better account for this mix of business, T&Cs                                   [½]
[Other valid point ½ mark each ]
                                                                    [Marks available 8½, maximum 4]
                                                                                                [Total 14]

Commentary:
(i) Generally answered very well, with most candidates scoring full marks.
(ii) Most candidates used the second approach (weighted averages). Some candidates lost
marks because they didn’t use consistent Y(%) values or missed assumptions.
(iii) A lot of candidates performed poorly on this part. Most candidates identified credibility
issues with limited data. However, only stronger candidates commented on specific
differences between the curves, in particular, what is the impact of using the new curve in the
pricing model.

                                                                                       [Paper Total 100]



                         END OF EXAMINERS’ REPORT




SP8 S2024                                                                © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



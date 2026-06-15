---
normalized_id: cp2-2025-april-question-paper-cp2-p2-april2025-summary-document
exam_code: CP2
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr25/CP2-P2_April2025_Summary Document.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2025-april-question-paper-cp2-p2-april2025-summary-document

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

**9 April 2025**

**Subject CP2 - Modelling Practice**

**Core Practices**

**Paper Two**

**SUMMARY**

## 

**Profit Analysis of a Cinema Annual Pass Model**

**Overview**

Our client, a cinema, is considering offering a new ticket pricing
option i.e. an annual pass option for cinemagoers and would like to
understand the financial impact of introducing it.

The cinema classifies movies into three categories, Regular (10 releases
per a year), Major (three releases per year) and Epic (one release per
year). These movies draw in different numbers of cinemagoers each year.

Revenue currently comes from two sources - ticket sales and snack sales.
Under the newly proposed annual pass option, annual passholders would be
able to see as many movies as they want in a year, for a fixed annual
cost paid upfront (i.e. an annual fee). It is believed the annual pass
option would increase annual passholders’ spending on snacks.

In this report, we present the profit analysis for the following
scenarios:

- Original scenario: cinemagoers pay a fixed price per ticket and a
  portion of them purchase snacks from the cinema.

- Annual pass scenario: Cinemagoers who see at least 5 movies a year
  will all purchase the annual pass while the remaining cinemagoers will
  continue buying tickets on individual movies basis. Cinemagoers’ snack
  spending habit is expected to change with the discount offered to
  annual passholders.

- Additional scenario: Cinemagoers who see at least 4 movies a year will
  all purchase an annual pass, and their spending habit changes are as
  per the annual pass scenario. We want to find the revised ticket price
  and annual pass fee that would give the same profit as the annual pass
  scenario.

**\
Data**

The client has shared with us the following in a spreadsheet:

- the movie schedule of a typical year and the seating capacity of each
  of the 4 screens.

- the projected screen utilisation rate by Regular, Major and Epic
  releases based on how long they have been in the cinema for.

- a commission arrangement with the movie distributors.

- the number of unique cinemagoers and their snack spending habit, split
  by the number of movies they have seen over the year.

Additionally, we are also given the following information by the cinema:

- There are six showings per day per screen.

- Each ticket costs \$13 and average snack spend is \$22 per cinemagoer.
  The corresponding snack cost is \$2 per average snack spend.

- Each 16-hour long working day the cinema is staffed by two teams of
  16, each working 8 hours with an average hourly pay of \$25.

- The cinema incurs a fixed monthly overhead of \$300,000.

Further, the market research conducted by the client indicates:

- Cinemagoers who see at least five movies a year would purchase an
  annual pass

- The recommended annual pass fee is \$74

- Cinemagoers tend to spend 20% more on snacks when they become annual
  passholders. As a result of their loyalty, the cinema offers these
  annual passholders a 10% discount on snacks.

**Data checks**

Data has been checked for reasonableness at a high level. Data analysis
shows that:

- At the individual movie level, the Epic release has the most
  screenings, followed by Major releases, followed by Regular releases –
  this makes sense economically. Each movie runs for 2-4 months during
  the year – this also seems reasonable.

- Both the projected screen utilisation rate and the commission
  arrangement with movie distributors depend on the classification of
  movies and how long the movie has been on the cinema for. The Epic
  release again has the highest screen utilisation, followed by Major
  releases and then Regular releases – this again makes intuitive sense.

- Commission arrangement follows a very similar pattern as the
  utilisation rate.

- The distribution of unique cinemagoers by the number of movies seen in
  a year is positively skewed (chart furnished under Results). This
  makes sense as intuitively we would expect most cinemagoers only go to
  the cinema a few times a year whereas there are some small number of
  movie fans who would watch almost all movies in the year.

- The number of movies seen is consistent with some independent
  calculation. This shows the datasets provided are internally
  consistent.

The above observations all make sense intuitively and there is nothing
unusual that would invalidate the data.

**Assumptions**

- ***The data provided by the client is correct.***

- ***There are 30 days in a month regardless of the calendar month.***

- ***The number of cinemagoers in any particular month can be
  non-integer.***

- ***The introduction of the annual pass model would not change
  cinemagoers’ behaviour as far as watching movies is concerned.***

- The introduction of the annual pass will not affect the commission
  arrangement with distributors.

- Cinemagoers are price insensitive in the additional scenario and there
  is no change to their spending behaviour.

- The 10% discount on snack would not encourage annual passholders to
  buy even more snacks.

- There is only one ticket price which makes no distinction between
  adult/child or peak/off-peak.

- The projected screening utilisation rate is fixed and will hold true
  regardless of the seating capacity of the screens.

**Methodology**

<u>Original scenario</u>

We work out the projected screen utilisation rate using the movie
schedule provided by the client and how long the movie has been shown in
the cinema. For example, if it is a Major release that has been in the
cinema for two months, the expected ticket sales would be 80% regardless
of the screen capacity. This usage figure is then multiplied by the
screen capacity and by 6 (the number of screenings per day) and by 30
(number of days in a month) to get the projected attendance for each
month, split by screen.

We then work out the projected attendance split by the number of movies
seen in a year by multiplying the projected attendance calculated above
by the proportion of cinemagoers split by the number of movies seen in a
year. A check is done to ensure that the total number of movies seen
split by screen and that split by the number of movies seen are
consistent.

Income from the expected ticket sales is calculated by multiplying the
expected attendance with the ticket price. Income from snack sales is
the product of the projected number of cinemagoers split by the number
of movies seen, proportion buying snacks and the average snack spend.
The cost of snacks is the same, except the average snack spend is
replaced by the average snack cost.

The cinema has a commission arrangement with movie distributors for the
rights to show their movies. This agreement takes a percentage of the
expected ticket sales and depends on (1) the type of the movie (whether
it is classified as Regular, Major or Epic) and (2) how long the movie
has been in the cinema for. For example, if it’s a Regular that is in
its first month of showing in the cinema, the client must cede 45% of
the ticket revenue to the movie distributors as part of this
arrangement. i.e. this commission % is then multiplied by the ticket
price and the projected attendance (split by screen) calculated above,
to get the commission amounts (\$) for each screen.

The cinema needs two teams of 16 staff, with each team working an 8-hour
shift for 30 days at an average hourly rate of \$25. Taking the product
of these gives us the monthly staff expenses. Additionally, there are
fixed monthly overheads of \$300,000.

The monthly profit is then calculated as the revenue from ticket and
snack sales less the profit ceded as part of the commission arrangement,
staff expenses, overheads and cost of snack sales.

This calculation is then repeated for every month of the year to get the
annual profit.

<u>Annual pass scenario</u>

The cinema expects cinemagoers who watch at least five movies a year
(“passholders”) to purchase an annual pass with no exception. For
cinemagoers who watch fewer than five movies a year, there are no
changes to the projected ticket sales.

For passholders, annual pass revenue is calculated to be the number of
unique annual passholders (i.e. projected attendance split by movies
seen as calculated above divided by the number of movies seen) times the
proposed annual pass fee.

The snack purchase behaviour would also change as market research
indicates annual passholders are likely to spend 20% more on snacks.
Additionally, the cinema gives these annual passholders a 10% discount
on snacks for their loyalty. So the projected revenue from snack sales
for annual passholders would change by a factor of (1+20%)\*(1-10%)
while the snack spend for other cinemagoers will stay the same as
before.

The revised net profit for the annual pass scenario is calculated as
before.

<u>Additional scenario</u>

We are asked to perform additional analysis whereby we would assume
cinemagoers who watch at least 4 movies a year will all purchase an
annual pass. The cinema would like us to find out the revised ticket
price and annual pass fee that will give the same profit as the annual
pass scenario above, with a constraint that the annual pass fee to
ticket price ratio be 4.8.

The parameter for the threshold number of films for the annual pass is
updated from 5 to 4 and a new ticket price and annual pass fee, based on
this ticket price (i.e. 4.8x ticket price), are introduced for this
scenario, replacing the equivalent from the original annual pass
scenario. The following calculations were updated with the new
parameters:

- Projected ticket sales

- Annual pass income

- Commission amounts

Goal seek is used, to target the required profit level (i.e. profit
equal to original annual pass scenario) by changing the ticket price.

**Results**

We produced various charts to provide some visualisation of the
financial impact as a result of the proposed changes.

The total and average annual projected ticket sales on the original
scenario, split by Epic, Mega and Regular movie types are shown in the
chart below.

The average is calculated by dividing the total revenue by the number of
movies shown in a year. There is only one Epic release per year but
there are three Major releases and ten Regular releases.

As expected, based on classification, The Epic release brings in the
highest average ticket sale which is almost 1.5 times the Major release
sales and more than 5 times the Regular release sales. Average Major
release ticket sales itself bring in about 3.5 times that of an average
Regular release.

Not surprisingly, Major releases bring in the most total sales over the
year followed by Regular releases. Whilst the average Regular release
sales is less than that of a Major release, the sheer number of Regular
releases shown (10) in a year means Regular releases bring in more total
sales than the Epic release.

As expected, the Epic release is expected to bring in the most people
and is shown the longest in the cinema (for 4 consecutive months).

The below chart shows the number of unique cinemagoers and the
proportion buying snacks, split by the number of movies seen over the
year.

The distribution of the number of unique cinemagoers is positively
skewed which is perhaps not surprising as one would expect the majority
would only go to the cinema a few times a year, perhaps to see the Epic
release or the Major or Regular releases of their interest. Similarly,
it is not surprising to see there are a small number of die-hard
cinemagoers who like to see every movie there is.

The proportion buying snacks seems to increase with the number of movies
seen. This could be down to the fact that people who go to the cinema a
lot prefer to enjoy the full cinema experience which includes eating
snacks while watching movies. It is worth noting that individual
spending habit may vary significantly.

The above two points are only conjectures at this stage as we do not
have more granular details to perform further analysis.

The chart below shows the revenue breakdown:

As can be seen in the chart, in the original scenario, ticket sales
account for around 60% of the total revenue. This makes sense given the
ticket price is \$13 and the average snack spend is \$22 but only 35%
(works out to be the weighted average of the proportion buying snacks)
of the cinemagoers are expected to buy snacks. This gives an expected
revenue from snack of \$22 x 35% = 7.7. The overall revenue by each
visit is therefore the sum of \$13 and \$7.7 which is 20.7. Ticket sales
as a percentage of total revenue can then be estimated as 13/20.7 which
is around 60% as seen in the chart. There is no annual pass revenue in
the original scenario, as expected.

In the annual pass scenario, individual tickets sale has come down given
the cinema expect cinemagoers who see at least five movies a year to
purchase the annual pass.

While cinemagoers who see more than five movies a year would end up
better off with an annual pass (and thereby reducing ticket revenue when
compared to the original scenario), those who end up seeing five movies
would be worse off with an annual pass. This is because at the annual
pass fee is \$74 which is more than 5 times the single ticket price.

This increase in revenue via the annual pass option (for those who see
five movies a year) more than offsets the loss in the ticket sale
revenue for those cinemagoers who see more than six movies a year. i.e.
in general, we would expect some cross subsidy, i.e. cinemagoers who
purchase the annual pass but don’t see enough movies would subsidise
those who do.

Separately market research suggests annual passholders would tend to
spend 20% more on snacks. So even with the 10% loyalty discount offered
by the cinema, these annual passholders would still have spent more
compared to the original scenario, hence there is an increase in the
snack sales under the annual pass scenario.

The updated ticket price is \$13.20 and the annual pass fee is \$63.37
in the additional scenario. While the ticket price has increased
marginally from the original price of \$13, ticket revenue has dropped
as a proportion of total revenue given cinemagoers who see at least 4
movies a year are assumed to purchase the annual pass so there are fewer
cinemagoers who would buy individual tickets. As expected, annual pass
revenue makes up a higher proportion of the total revenue given the
annual pass threshold is lower.

Similarly, we would expect the proportion of snack spend to increase as
well given more passholders are now spending more on snacks.

The chart below shows the profit breakdown by total revenue, commission,
expenses & overheads and overall profit across the original, annual pass
and additional scenario.

We can see that the commission is the same between the original and
annual pass scenarios given the arrangement is based on the projected
ticket sales. So the annual pass model would not have an impact on it.
Given revenue has increased in the annual pass scenario (as seen in the
chart prior), we would expect profit to go up as a result in the annual
pass scenario. The highest total revenue is in the additional scenario,
followed by annual pass scenario, and then the original scenario.

The profit in the additional scenario is the same as that in the annual
pass scenario (and higher than the original scenario) given we targeted
the ticket price and annual pass fee to give the same profit. Commission
increases slightly in the additional scenario given individual ticket
prices have increased.

Expenses and overheads are the same across all three scenarios given
there are no changes in the number of staff required and overheads are
fixed.

Cost of snack sales has increased slightly as it is function of snack
revenue.

**Conclusions**

In general, the cinema might prefer to move to an annual pass-based
model as they are swapping less predictable cashflows (individual ticket
sales) with more predictable cashflows (annual pass plan).

The above analyses are based on some strong assumptions which may not be
borne out in practice. Appropriate caveats should be included when
relating these results back to the client - particularly the assumption
that cinemagoers will without exception purchase an annual pass is
unlikely to be borne out in practice. It is worth revisiting the above
conclusions when we have more granular data or when the assumptions
change.

**Next steps**

- Validate that the data provided by the client, especially on the
  projected screen utilisation rate which is independent of the screen
  capacity.

- Obtain more granular data for the number of unique cinemagoers and
  their spending habit

- Validate the movie schedule and check if more Major and Epic releases
  could be shown to maximise profits.

- Commission independent market research to validate the data for e.g.
  the movie threshold for annual passholders and their spending habits

- Revisit the annual pass take up rate assumption. Currently it is
  assumed cinemagoers who see more than a certain number of movies a
  year will all purchase an annual pass – this might not be a realistic
  assumption

- Model the actual number of days the cinema is open for business
  instead of assuming there are 30 days in every month of the year.

- Consider a dynamic pricing structure based on ticket demand and movie
  popularity

- Model cross subsidy in the annual pass. Some passholders may end up
  seeing fewer than the worth of the annual pass whilst others may take
  advantage of the pass and see as many movies as possible

- Obtain more information on the cancellation policy for the annual
  pass.

- Investigate the correlation between going to cinema more often and
  buying more snacks

- Model price sensitive demand behaviour – currently the model assumes
  cinemagoers are price insensitive.

- Consider a more granular pricing structure, e.g. adult/child,
  peak/off-peak.

- Check competitors’ offering in other cities as a validation of the
  cinema’s strategy.

- Consider offering multiple level of annual pass to encourage more
  passholders.

- Consider the possibility of showing more screenings per day to
  increase revenue.

- Negotiate with movie distributors to obtain more favourable terms to
  increase profits.

- Perform sensitivity analysis on the movie schedule to determine the
  optimal schedule.

- Increase profit further by reducing the number of staff needed, if
  possible.

- Consider the possibility of distributors asking for their commission
  on the annual pass income as well.

- Perform sensitivity analysis on the annual pass threshold to assess
  the impact on profit.

- Consider the impact of an unforeseen scenario like a pandemic, where
  the cinema will have to shut down operations.

- Update the model for actual experience with respect to passholders as
  time progresses.

- Allow for taxation in the profit calculation.

- Obtain a peer review of the model.



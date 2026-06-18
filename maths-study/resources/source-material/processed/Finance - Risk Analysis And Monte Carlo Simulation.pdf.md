---
normalized_id: shared-pdf-reference-finance-risk-analysis-and-monte-carlo-simulation
exam_code: SHARED
material_scope: finance - risk analysis and monte carlo simulation.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Finance - Risk Analysis And Monte Carlo Simulation.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-finance-risk-analysis-and-monte-carlo-simulation

Risk Analysis and Monte Carlo Simulation
                                                   by Lawrence Goldman, Decisioneering, Inc.


So you're new to the idea of risk analysis, and you've got a lot of questions. What is risk? What
do we mean by a "model?" What exactly is Monte Carlo simulation? Is anyone in your industry
using this technique? This article is a simple overview to help you to understand what risk
analysis is and why Monte Carlo simulation has become an increasingly popular and necessary
technique for business analysis and forecasting.

What is Risk?
Uncertainty about a situation can often indicate risk, which is the possibility of loss, damage, or
any other undesirable event. Most people desire low risk, which would translate to a high
probability of success, profit, or some form of gain.

For example, if sales for next month are above a certain amount (a desirable event), then orders
will reduce the inventory, and there will be a delay in shipping orders (an undesirable event). If a
shipping delay means losing orders, then that possibility presents a risk.

Thus, there are two points to keep in mind when analyzing risk:
        1. Where is the risk?
        2. How significant is the risk?

Almost any change, good or bad, poses some risk. Your own analysis will usually reveal
numerous potential risk areas: overtime costs, inventory shortages, future sales, geological survey
results, personnel fluctuations, unpredictable demand, changing labor costs, government
approvals, potential mergers, pending legislation.

What is a model?
Once you have identified the risks, a model can help you to quantify them. Quantifying risk
means putting a price on risk, to help you decide whether a risk is worth taking. For example, if
there is a 25% chance of running over schedule, costing you a $100 out of your own pocket, that
might be a risk you are willing to take. But if you have a 5% of running over schedule, knowing
that there is a $10,000 penalty, you might be less willing to take that risk.

One very popular modeling tool is a spreadsheet such as Microsoft’s Excel. If you only use
spreadsheets to hold data--sales data, inventory data, account data, etc., then you don't have a
model. Even if you have formulas that total or subtotal the data, you might not have a model.

A model is a spreadsheet that has taken the leap from being a data organizer to an analysis tool.
A model represents a process with combinations of data, formulas, and functions. As you add
cells that help you better understand and analyze your data, your data spreadsheet becomes a
spreadsheet model.

SPREADSHEET RISK ANALYSIS
Identifying risks in your spreadsheet
So now you realize that you either have a model or need to create one. You might notice that your
model has some values in it that you are unsure of. Perhaps you don’t have the actual data yet
(this month’s sales figures) or the value varies unpredictably (individual item cost).

For each component, or variable, of the model (e.g., costs, rates, demands), you can ask yourself,
"How sure am I of this value? Will it vary? Is this a best estimate or a known fact?" Since you
constructed the model, you will probably be quick to identify which variables are uncertain. This




Copyright © 2000, Decisioneering, Inc. All rights reserved.
lack of knowledge about particular values, or the knowledge that some values may always vary,
helps you to identify your risks.

The traditional modeling landscape
Traditionally, spreadsheet analysis tried to capture this uncertainty in one of three ways: Point
estimates, Range estimates, and What-if scenarios.

Point estimates are when you use what you think are the most likely values (technically referred to
as the mode) for the uncertain variables. These estimates are the easiest, but can return very
misleading results. For example, try crossing a river with an average depth of three feet. Or, if it
takes you an average of 25 minutes to get to the airport, leave 25 minutes before your flight takes
off. You will miss your plane 50% of the time.

Range estimates typically calculate three scenarios: the best case, the worst case, and the most
likely case. These types of estimates can show you the range of outcomes, but not the probability
of any of these outcomes.

What-if scenarios are usually based on the range estimates and calculate as many scenarios as
you can think of. What is the worst case? What if sales are best case but expenses are the
worst case? What if sales are average, but expenses are the best case? What if sales are
average, expenses are average, but sales for the next month are flat? As you can see, this form
of analysis is extremely time consuming, and results in lots of data, but still doesn’t give you the
probability of achieving different outcomes.

The problem with spreadsheets
A good spreadsheet model can be helpful in identifying your risks since cells with formulas and
cell references identify causal relationships among variables. One of the drawbacks of
conventional spreadsheets, however, is that you can only enter one value in a cell at a time. A
spreadsheet will not allow you to enter a range of values or multiple values for a cell. Therefore,
to perform range or what-if estimates, your only alternatives are to manually play with the model or
create multiple versions of the model.

What you are looking for then is a better way of representing the range of uncertain values, your
obvious risks, and a quicker method of generating multiple model outcomes that you can analyze.
This is where Monte Carlo simulation comes in handy.

WHAT IS MONTE CARLO SIMULATION?
What do we mean by "simulation?"
When we use the word simulation, we refer to any analytical method meant to imitate a real-life
system, especially when other analyses are too mathematically complex or too difficult to
reproduce. Monte Carlo simulation is a form of simulation that randomly generates values for
uncertain variables over and over to simulate a model.

Without the aid of simulation, a spreadsheet model will only reveal a single outcome, generally the
most likely or average scenario. Spreadsheet risk analysis uses both a model and simulation to
automatically analyze the effect of varying inputs on outputs of the modeled system. Because
spreadsheets themselves cannot run simulations, you will need a spreadsheet add-in to provide
this functionality. One available simulation add-in for Excel is Crystal Ball 2000, which will be used
in this example.

How did Monte Carlo simulation get its name?
Monte Carlo simulation was named for Monte Carlo, Monaco, where the primary attractions are
casinos containing games of chance. Games of chance such as roulette wheels, dice, and slot
machines, exhibit random behavior.




Copyright © 2000, Decisioneering, Inc. All rights reserved.
The random behavior in games of chance is similar to how Monte Carlo simulation selects
variable values at random to simulate a model. When you roll a die, you know that a 1, 2, 3, 4, 5,
or 6 will come up, but you don't know which for any particular roll. It's the same with the variables
that have a known range of values but an uncertain value for any particular time or event (e.g.
interest rates, staffing needs, stock prices, inventory, phone calls per minute).

Modifying the uncertain variables in your spreadsheet?
For each uncertain variable, Crystal Ball lets you define the possible values with a probability
distribution. A distribution is an equation that describes shape and range that represent the
natural uncertainty around the input value. The type of distribution you select is based on the
conditions surrounding that variable. Distribution types include:




For example, in the dice example above, you are equally likely to roll a 1, 2, 3, 4, 5, or 6, so you
would select a uniform distribution, which is an equation that states that each outcome is equally
likely. Products like Crystal Ball 2000 can automatically create distributions for you so that you do
not need to know the formal equation.

What happens during a simulation?
When you run a simulation, the software repeatedly samples values from the distributions and
thus calculates multiple scenarios. During a single simulation, or trial, Crystal Ball randomly
selects a value from each of the distributions and enters it into the proper spreadsheet cell. Excel
then recalculates the spreadsheet, which displays a new scenario. Depending upon the
complexity of your model, a program like Crystal Ball can run hundreds or even thousands of trails
in minutes.

Analyzing Simulation Results
For every model, you have a set of important outputs, such as totals, net profits, or gross
expenses, which you want to analyze. Crystal Ball lets you define those cells as forecasts, and
the program saves the simulated values of each forecast cell for later analysis. For example, if
you simulate a model for 1000 trials, and you have Net Profit selected as a forecast, you will have
1000 Net Profits to analyze at the end of the simulation.

During the simulation, you can watch a histogram of the results develop for each forecast. While
the simulation runs, you can see how the forecasts stabilize toward a smooth frequency
distribution. After hundreds or thousands of trials, you can view the statistics of the results (such
as the mean forecast value) and the certainty of any outcome.




Copyright © 2000, Decisioneering, Inc. All rights reserved.
Certainty is the percent chance that a particular forecast value would fall within a specified range.
The example above is a forecast for Total expected return. You can find the certainty of breaking
even (results better than $0) by entering the $0 amount as the lower limit. Of the 5000 trials that
were run, 4408 (or 88.16%) of those had a positive total expected return, so your certainty of
breaking even is 88.16%.

The Benefits of Monte Carlo Simulation
As you can see from the above example, simulation can result in a far more rigorous analysis in
far less time. Not only does simulation allow you to determine the certainty of a specific outcome,
it can help you to understand the range of possible outcomes. After analyzing your results, you
can begin to challenge and refine your basic model assumptions, resulting in more accurate risk
forecasts. Simply put, with a richer understanding of your inherent risks, you have a higher
probability of achieving success.


Lawrence Goldman currently directs Web site development and Internet marketing strategies at
Decisioneering, Inc., a software company in Denver, CO that produces Crystal Ball® Monte
Carlo risk analysis software. During his tenure at the company, he has held positions as a
Program Manager and as a trainer in Monte Carlo modeling and simulation. Mr. Goldman holds
an MS in Geology from the University of Cincinnati and a BA from Cornell University.




Copyright © 2000, Decisioneering, Inc. All rights reserved.



---
normalized_id: cm2-2023-september-examiner-report-iandf-cm2a-202309-examiner-report
exam_code: CM2
year: 2023
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep23/IandF_CM2A_202309_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2023-september-examiner-report-iandf-cm2a-202309-examiner-report

EXAMINERS’ REPORT
CM2 - Financial Engineering and Loss
Reserving
Core Principles
Paper A




                            September 2023
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   Introduction

   The Examiners’ Report is written by the Chief Examiner with the aim of helping
   candidates, both those who are sitting the examination for the first time and using past
   papers as a revision aid and also those who have previously failed the subject.

   The Examiners are charged by Council with examining the published syllabus. The
   Examiners have access to the Core Reading, which is designed to interpret the syllabus,
   and will generally base questions around it but are not required to examine the content of
   Core Reading specifically or exclusively.

   For numerical questions the Examiners’ preferred approach to the solution is reproduced
   in this report; other valid approaches are given appropriate credit. For essay-style
   questions, particularly the open-ended questions in the later subjects, the report may
   contain more points than the Examiners will expect from a solution that scores full marks.

   For some candidates, this may be their first attempt at answering an examination using
   open books and online. The Examiners expect all candidates to have a good level of
   knowledge and understanding of the topics and therefore candidates should not be overly
   dependent on open book materials. In our experience, candidates that spend too long
   researching answers in their materials will not be successful either because of time
   management issues or because they do not properly answer the questions.

   Many candidates rely on past exam papers and examiner reports. Great caution must be
   exercised in doing so because each exam question is unique. As with all professional
   examinations, it is insufficient to repeat points of principle, formula or other text book
   works. The examinations are designed to test “higher order” thinking including
   candidates’ ability to apply their knowledge to the facts presented in detail, synthesise and
   analyse their findings, and present conclusions or advice. Successful candidates
   concentrate on answering the questions asked rather than repeating their knowledge
   without application.

   The report is written based on the legislative and regulatory context pertaining to the date
   that the examination was set. Candidates should take into account the possibility that
   circumstances may have changed if using these reports for revision.



   Sarah Hutchinson
   Chair of the Board of Examiners
   November 2023




CM2A S2023                                                        © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   A. General comments on the aims of this subject and how it is marked.

   The aim of Subject CM2 is to develop the necessary skills to construct asset liability
   models, value financial derivatives and calculate reserves for insurance or guarantees.
   These skills are also required to communicate with other financial professionals and to
   critically evaluate modern financial theories.

   The marking approach for CM2 is flexible in the sense that different answers to those
   shown in the solution can earn marks if they are relevant and appropriate. Marks for the
   methodology are also awarded, including marks for using the right method even if an
   error in an earlier part of the question prevents the final answer from being correct. The
   marking focusses on rewarding candidates’ understanding of the concepts, including their
   ability to articulate algebra and arguments clearly.


   B. Comments on candidate performance in this diet of the examination.

   Most questions focussed on applied calculations and analysis of the results. Some of the
   questions required candidates to apply concepts presented in the Core Reading, to
   scenarios they might not have seen before and some candidates scored highly here.

   .Candidates should note that rearranging and solving algebra on screen can sometimes be
   hard if you are used to using pen and paper, so this is a worthwhile skill to practise before
   the exams. It’s also worth saying that using the equation editor in Word to set out
   formulae is not necessary, your workings just need to be clear enough for the examiner to
   follow them.

   Question 7 and Question 9 proved to be the most challenging questions on the paper.
   Question 7 required candidates to work with Standard Brownian Motion, and in many
   answers the algebra was not explained clearly enough to score strongly. Question 9
   required candidates to price an unusual option from first principles, and while few
   candidates scored full marks, many started down the right route and earned some credit
   for this.

   C. Pass Mark

   The Pass Mark for this exam was 57
   1261 presented themselves and 531 passed.




CM2A S2023                                                        © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   Solutions for CM2A - September 2023


   Q1
   (i)(a)
   Against, because market prices should immediately incorporate all available
   information.                                                                                  [1]

   (b)
   For, because active managers using the same information as other market participants
   should achieve the same returns.                                                     [1]

   (c)
   Against, because if the cashflow model incorporates all market information then it
   should match prices and therefore have the same volatility (e.g. as explained by
   Shiller).                                                                                     [1]

   (d)
   Against, because analysts using the same information should reach the same target
   price.                                                                                        [1]
   (Could also be for since it depends on the models each analyst uses.)

   (ii)
   Example answer:
   The CEO of a company buys stock in their own company as they know a merger is
   going to be announced publicly soon.                                                  [½]
   The stock rises significantly in value following the announcement, whilst the overall
   market performance is moderate.                                                       [½]
   (Any example showing semi-strong or strong form EMH is acceptable.)

   (iii)
   Example answer:
   Semi-strong form EMH means that the market price of an investment incorporates
   all publicly available information                                                  [½]
   but it does not incorporate information only available to insiders.                 [½]
   Those with inside information can exploit this to produce excess performance.        [½]
   In the example given the CEO uses their insider knowledge of the upcoming merger
   to buy stock before the public announcement and resulting rise in stock price.       [½]
   (Any other valid points can score marks depending on the example given in (ii))
                                                                                   [Total 7]

     This question was answered well by most candidates.

     In part (i) only well prepared c stated the result and explained why.

     In part (iii), only well prepared candidates that gave enough explanation were
     awarded full marks.




CM2A S2023                                                        © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report




   Q2

   CDFs:
                F(-2%)           F(-1%)            F(0%)            F(1%)             F(2%)
    Asset A     10%              40%               60%              90%               100%
    Asset B     30%              40%               60%              70%               100%
    Asset C     25%              50%               50%              75%               100%
    Asset D     40%              50%               60%              80%               100%
                                                                                                  [2]
   Integrated CDFs:
               ICDF(-2%)         ICDF(-1%)         ICDF(0%)         ICDF(1%)          ICDF(2%)
     Asset A 10%                 50%               110%             200%              300%
     Asset B 30%                 70%               130%             200%              300%
     Asset C 25%                 75%               125%             200%              300%
     Asset D 40%                 90%               150%             230%              330%
                                                                                                  [2]

   A exhibits first order stochastic dominance over B if CDF(A) <= CDF(B) for all
   outcomes and CDF(A) < CDF(B) for some outcome.

   A exhibits second order stochastic dominance over B if ∫ CDF(A) <= ∫ CDF(B) for all
   outcomes and ∫ CDF(A) < ∫ CDF(B) for some outcome.

   (a)
   Asset B displays first order stochastic dominance over asset D                                [1]
   Asset C displays first order stochastic dominance over asset D                                [1]

   (b)
   Asset A displays second order stochastic dominance over assets B, C and D                    [1]
   Asset B displays second order stochastic dominance over asset D                              [1]
   Asset C displays second order stochastic dominance over asset D                              [1]
                                                                                           [Total 9]


    This question was generally answered well. Most candidates were able to perform the
    correct calculations, though not all candidates identified all of the dominance pairs.




   Q3
   (i)
   S 5 is lognormal with parameters 0.09*5=0.45 and 0.04*5=0.2                                   [½]
   P(S 5 <X) = 20%                                                                               [½]
   P(Z<(lnX - 0.45)/sqrt(0.2)) = 20%                                                             [½]
   (lnX - 0.45)/sqrt(0.2) = -0.8416                                                              [½]
   X = 1.0764                                                                                    [½]
   150000/1.0764 = 139353                                                                        [½]



CM2A S2023                                                        © Institute and Faculty of Actuaries
          CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   The investor needs to invest $139,353 in the portfolio to give an 80% probability
   of having at least enough to repay the loan.                                                    [1]

   (ii)(a)
   P(S5<X) = 5%                                                                                    [½]
   P(Z<(lnX - 0.45)/sqrt(0.2)) = 5%                                                                [½]
   (lnX - 0.45)/sqrt(0.2) = -1.6449                                                                [½]
   X = 0.751547                                                                                    [½]
   150000-100000X = 74845                                                                          [½]
   The 95% VaR is $74,845                                                                          [½]

   (b)
   E(S5) = exp(0.45 + 0.2/2) = 1.733253                                                            [1]
   The expected value of the portfolio is 100000*1.733253 = $173,325                               [½]
   Therefore there is an expected surplus of 173325-150000 = $23,325                               [½]

   (iii)
   If the investor had $139,353 then they would have at least an 80% chance of
   repaying the loan.                                                                    [½]
   However they only have $100,000, so they have a less than 80% chance.                 [½]
   The investor has an expected surplus of $23,325, so they do expect to be able to
   repay the loan.                                                                       [½]
   However there is a chance of a big shortfall.                                         [½]
   The VaR shows that there is a 5% chance of a shortfall of at least $74,845.           [½]
   The investor might want to choose less risky investments to increase the chance of
   being able to repay the loan.                                                         [½]
                                                            [Marks available 3, maximum 2]
                                                                                   [Total 11]


     Most candidates understood what was needed here, though mistakes in the
     calculations using the Normal distribution were fairly common.

     In part (iii) most candidates scored marks, but note that we needed conclusions and
     suggested actions so simply stating what parts (i) and (ii) showed did not score marks.



   Q4
   (i)
   E(X) = np = 0.01n                                                                               [½]
   sd(X) = sqrt(npq) = sqrt(0.0099n)                                                               [½]
   E(LP)=25000E(X)/n=250                                                                           [½]
   sd(LP)=25000sd(X)/n=25000*sqrt(0.0099n)/n                                                       [½]
   E(LP) does not depend on n, therefore is equal to $250 for all scenarios                        [½]
   sd(LP) is equal to $2,487 for n=1                                                               [½]
   $556 for n=20                                                                                   [½]
   and $176 for n=200                                                                              [½]

   (ii)

CM2A S2023                                                          © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   The results from part (i) demonstrate the benefits of pooling resources.             [1]
   Pooling resources reduces the variability of losses due to adverse outcomes.         [½]
   As shown in part (i) increasing the number of policies does not affect the expected
   loss per policy                                                                      [½]
   But it does reduce the standard deviation of the loss per policy.                    [½]
   Lower variability is desirable for insurance companies.                              [½]
                                                              [Marks available 3, maximum 2]

   (iii)
   The premium is 260/250-1 = 4% greater than the expected loss per policyholder.         [½]
   A policyholder may be willing to pay more than the expected loss if they are risk
   averse.                                                                                [½]
   A policyholder may be willing to pay more than the expected loss if they cannot
   withstand the value of a loss (i.e. $25,000).                                          [½]
   If the above apply then they may be likely to buy the policy.                          [½]
   If the insurer is risk averse they will want the insurance premium to be greater than
   the expected loss.                                                                     [½]
   The insurer will also need a margin over the expected loss to cover costs,
   e.g. overheads, labour costs, advertising costs.                                       [½]
   They may need to charge more than the expected loss for regulatory reasons or to
   cover capital requirements.                                                            [½]
   If the 4% margin is sufficient to cover the above then they may be willing to offer
   the policy.                                                                            [½]
   The insurance contract will only be feasible if the minimum premium that the insurer
   is prepared to charge is less than the maximum the potential policyholder is prepared
   to pay.                                                                                [½]
   The insurer might be more likely to offer the product if they can issue a large number
   of policies as this will reduce the variance of outcomes for them.                     [½]
   The premium is about 10% of the payout, so customers are likely to be happy paying
   premiums for 10 years before feeling like they’ve overpaid.                            [½]
                                                             [Marks available 5½, maximum 3]

   (iv)
   Adverse selection: (maximum 1½ marks)
   Individuals who think or know they are more likely to experience a loss than the
   assumed 1% are more likely to take out the insurance.                                         [½]
   This risk is reduced if this type of insurance is compulsory in Country Z.                    [½]
   The payout is a fixed amount of $25,000. Owners of low value cars might take out
   the insurance looking for the payout.                                                         [½]
   The insurance company can reduce this risk by underwriting                                    [½]
   and by putting policyholders in homogeneous pools                                             [½]
   and by monitoring their experience and adjusting assumptions if required.                     [½]

   Moral hazard: (maximum 1½ marks)
   Policyholders may be less careful because they have insurance, making damage to
   their car more likely.                                                                        [½]
   Policyholders might be especially careless if their car is worth much less than the
   $25,000 insurance payout.                                                                     [½]
   The insurance company can reduce this risk by monitoring their experience and
   adjusting assumptions if required                                                             [½]


CM2A S2023                                                        © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   or introducing exceptions in the policies.                                        [½]
   Moral hazard makes insurance more expensive and could push the price of insurance
   above the maximum premium that a person is prepared to pay.                       [½]
                                                       [Marks available 5½, maximum 3]
                                                                               [Total 12]

     Most candidates scored well in parts (i) and (ii) of this question, calculating the
     correct results and explaining how this is a key concept in insurance.

     Parts (iii) and (iv) were not always answered so well, and (iv) needed more than just
     an explanation of what adverse selection and moral hazard are to score full marks.




   Q5
   (i)
   Similarities:
   They are both short rate models.                                                              [½]
   They are both one-factor models.                                                              [½]
   They both have mean-reversion.                                                                [½]

   Differences:
   Vasicek permits non-positive interest rates, whereas CIR does not.                 [½]
   The distribution of Vasicek is Normal, with CIR it is a non-central chi-squared
   distribution.                                                                      [½]
                                                           [Marks available 2½, maximum 2]

   (ii)
   The data the analyst has suggests that the short rate of this nation is in fact negative. [½]
   As this is not a one-off in the data and there are no errors.                             [½]
   However, CIR does not permit negative short rates.                                        [½]
   Because when the short rate of a CIR model hits 0, it immediately rebounds.               [½]
   Due to the square root term.                                                              [½]
   This means it will not be possible to accurately calibrate CIR to the curve.              [½]
                                                                [Marks available 3, maximum 2]

   (iii)
   One option could be to use CIR to instead model 𝑟𝑟𝑡𝑡′ = 𝑟𝑟𝑡𝑡 + 𝛼𝛼 where α is some
   positive value.                                                                           [1]
                                          ′
   Then the restrictions of CIR become 𝑟𝑟𝑡𝑡 ≥ 0 or 𝑟𝑟𝑡𝑡 ≥ −𝛼𝛼 so that negative short rates
   are now permitted.                                                                        [1]
   A suitable choice of α would make sure that all negative rates seen in the data are
   possible values for 𝑟𝑟𝑡𝑡 ,                                                                [1]
   (Credit given for reasonable answers that address a key issue found in part (ii), provided
   they are clearly argued)
                                                                [Marks available 3, maximum 2]
                                                                                        [Total 6]



CM2A S2023                                                        © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report




    Most candidates scored well in this question.

    Part (i) needed a comparison of the two models, so candidates who simply described
    the characteristics of each model did not score marks for this.

    Part (iii) was the trickiest part, and needed suggestions for how the Cox-Ingersoll-
    Ross model could be adapted rather than suggestions to use a different model.



   Q6
   (i)
   The market price of risk is a measure of the return in excess of the risk-free rate that
   investors demand to bear one unit of risk.                                               [1]

   (ii)
   Market return in a recession = (25 x -1% + 50 x -2% + 50 x 6%) / 125 = 1.4%                   [½]
   Market return normally = (25 x 4% + 50 x 6% + 50 x 2%) / 125 = 4.0%                           [½]
   Market return in a bubble = (25 x 8% + 50 x 12% + 50 x 5%) / 125 = 8.4%                       [½]
   E M = 1.4% x 0.1 + 4.0% x 0.6 + 8.4% x 0.3                                                    [½]
   = 5.06%                                                                                       [½]
   σ M 2 = 0.0142 x 0.1 + 0.042 x 0.6 + 0.0842 x 0.3 - 0.05062
        [½]
   = 0.000536                                                                                    [½]
   σ M = 0.0005360.5 = 2.32%                                                                     [½]
   Market price of risk = (5.06% - 2%) / 2.32% = 1.319 per unit of risk                          [1]

   (iii)
   The capital market line can be used to determine portfolios that sit on the efficient
   frontier                                                                                   [½]
   (E P - r) / σ P = (E M - r) / σ M                                                          [½]
   (6% - 2%) / 3.15% = 1.269 per unit of risk                                                 [½]
   This is lower than the market price of risk calculated in part (ii).                       [½]
   Therefore, portfolio (A) is not the most efficient portfolio for the stated µ A and σ A.   [1]
   (Or, for full marks, candidate can demonstrate a portfolio with higher expected return for
   the same risk or lower risk for the same expected return.)
                                                                                         [Total 9]




CM2A S2023                                                        © Institute and Faculty of Actuaries
            CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report




   This question caused more difficulty than expected, though many candidates still scored
   well.

   Part (i) needed an explanation of the market price of risk, so stating the formula (either
   in algebra or in words) did not score marks.

   Part (ii) was straightforward, and the most common slip-up was incorrectly calculating
   the volatility of the market portfolio.

   Part (iii) was only answered correctly by the strongest candidates, and the key here was
   to identify that portfolio A does not sit on the efficient frontier.



   Q7
   (i)
   𝑑𝑑𝐴𝐴𝑡𝑡
       = 𝑊𝑊𝑡𝑡 , so
    𝑑𝑑𝑑𝑑
   We can write this as 𝑑𝑑𝐴𝐴𝑡𝑡 = 𝑊𝑊𝑡𝑡 𝑑𝑑𝑑𝑑 + 0𝑑𝑑𝑊𝑊𝑡𝑡                                                 [½]
   This process has a non-zero drift                                                                 [½]
   So it cannot be a martingale                                                                      [1]

   (ii)
   Using the results from part (i) we can write:
   𝑑𝑑𝐴𝐴𝑡𝑡 = 𝑊𝑊𝑡𝑡 𝑑𝑑𝑑𝑑 = 𝑑𝑑(𝑡𝑡𝑊𝑊𝑡𝑡 ) − 𝑡𝑡𝑡𝑡𝑊𝑊𝑡𝑡                                                       [1]

   Or equivalently, using the hint:
                    𝑡𝑡
   𝐴𝐴𝑡𝑡 = 𝑡𝑡𝑊𝑊𝑡𝑡 − ∫0 𝑠𝑠𝑠𝑠𝑊𝑊𝑠𝑠                                                                       [1]
             𝑡𝑡
   𝐴𝐴𝑡𝑡 =   ∫0 (𝑡𝑡 − 𝑠𝑠)𝑑𝑑𝑊𝑊𝑠𝑠                                                                       [1]

   The integrand (𝑡𝑡 − 𝑠𝑠) is deterministic, so 𝐴𝐴𝑡𝑡 ’s distribution has the following properties:
   𝐴𝐴𝑡𝑡 is Normally distributed                                                                 [1]
   The expectation of 𝐴𝐴𝑡𝑡 is 0                                                                 [1]
                             𝑡𝑡        2
   The variance of 𝐴𝐴𝑡𝑡 is ∫0 (𝑡𝑡 − 𝑠𝑠) 𝑑𝑑𝑑𝑑                                                    [1]
                                                          𝑡𝑡 3
   Evaluating the integral, we find that 𝐴𝐴𝑡𝑡 ~ 𝑁𝑁 �0, 3 �
                                                                                               [Total 8]

      This question was one of the harder ones in the paper.

      In part (i) most candidates understood what was needed, but not all were able to
      demonstrate clearly why At is not a martingale.

      In part (ii) many candidates scored some marks, but there were often unexplained
      leaps in the algebra that meant it could only earn partial marks.



CM2A S2023                                                            © Institute and Faculty of Actuaries
          CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report




   Q8
   (i)
   The key assumption is that the number of claims follows a Poisson process (with
   parameter 𝜆𝜆)                                                                                   [1]

   (ii)
   𝜆𝜆 is the parameter of the Poisson process in part (i)                                           [½]
   𝑐𝑐 is the insurer’s premium income (per unit time)                                               [½]
   𝜃𝜃 is the premium loading factor                                                                 [½]
   𝑚𝑚1 is the mean (first moment) of the claim amount                                               [½]

   (iii)
   The moment generating function of this claim is (either from Tables or by definition):
   𝑀𝑀𝑋𝑋 (𝑡𝑡) = 𝐸𝐸(𝑒𝑒 𝑡𝑡𝑡𝑡 ) = 1 − 𝑝𝑝 + 𝑝𝑝𝑒𝑒 𝑡𝑡                                            [½]
   and 𝑚𝑚1 = 𝑝𝑝                                                                           [½]

   So then the equation becomes:
   𝜆𝜆(1 − 𝑝𝑝 + 𝑝𝑝𝑒𝑒 𝑟𝑟 ) − 𝜆𝜆 − (1 + 𝜃𝜃)𝜆𝜆𝜆𝜆𝜆𝜆 = 0                                                 [½]
   (𝑒𝑒 𝑟𝑟 − 1) = (1 + 𝜃𝜃)𝑟𝑟                                                                        [½]

   Using the information in the question:
               𝑟𝑟 2
   �1 + 𝑟𝑟 +          − 1� ≈ (1 + 𝜃𝜃)𝑟𝑟                                                            [½]
               2
   𝑟𝑟 2
      = 𝑟𝑟𝑟𝑟                                                                                      [½]
   2
   and given 𝑟𝑟 > 0, we may divide by 𝑟𝑟                                                          [½]
   to get 𝑟𝑟 ≈ 2𝜃𝜃                                                                                [½]
                                                                                             [Total 7]

       Parts (i) and (ii) of this question were answered well by most candidates.

       Part (iii) caused more difficulty, and some candidates had algebra that appeared to
       reach the right conclusion but without clear steps along the way. The examiners are
       often lenient with marking algebra given that it has to be typed in Word, but
       candidates need to show clear reasoning to evidence understanding.




   Q9
   (i)
   The price can be considered as a long call spread with a lower and upper strike of 10%
   and 50% respectively.
   Lower strike call option
   d 1 = (log(1/1.1) + (0.02 + 0.5 x 0.12) x 10)/(0.1 x 100.5) = 0.489                   [½]
                        0.5
   d 2 = 0.489 - 1 x 10 = 0.173                                                          [½]
   N(d 1 ) = 0.6876                                                                      [½]
   N(d 2 ) = 0.5678                                                                      [½]
   => c 10% = 1 x N(0.489) - 1.1 x e -0.2 x N(0.173)

CM2A S2023                                                          © Institute and Faculty of Actuaries
          CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   => c 10% = 1 x 0.6876 - 1.1 x e -0.2 x 0.5687 = 0.176                                            [1]
   Higher strike call option
   d 1 = -0.4916                                                                                   [½]
   d 2 = -0.8079                                                                                   [½]
   N(-0.4916) = 0.3115                                                                             [½]
   N(-0.8079) = 0.2096                                                                             [½]
   => c 50% = 0.054                                                                                 [1]
   Price = 0.176 - 0.054 + 0.1 x e -0.02 x 10 = 0.204 per unit                                      [1]

   (ii)
   Black Scholes assumes that the value of σ does not change with the strike.                [1]
   This is not consistent with the σ levels seen in practice, which typically varies by
   strike.                                                                                   [1]
   The model also assumes that σ is constant over time.                                      [1]
                                                               [Marks available 3, maximum 2]
                                                                                        [Total 9]


     This was a challenging question and few candidates scored highly. Most identified
     that the option in the question needed to be priced as two separate options with strike
     prices of 110 and 150, but these both needed to be call options and they needed to be
     combined with a final adjustment to produce the required payoff profile.

     Part (ii) was often answered better, but many candidates strayed into a general
     discussion of the Black-Scholes model when we needed points related specifically to
     σ.



   Q10
   (i)
   The fair price for the new derivative security at time 0 is given by
   𝑉𝑉0 = 𝑒𝑒 −𝑟𝑟 𝐸𝐸𝑄𝑄 [𝐷𝐷|𝐹𝐹0 ] = 𝑒𝑒 −𝑟𝑟 𝐸𝐸𝑄𝑄 [𝑆𝑆1 2 |𝐹𝐹0 ]                                          [1]

   From Black-Scholes theory, we know under Q:
                                     𝜎𝜎2
   ln(𝑆𝑆𝑡𝑡 ) ~𝑁𝑁 �ln(𝑆𝑆0 ) + �𝑟𝑟 − 2 � 𝑡𝑡 , 𝜎𝜎 2 𝑡𝑡�                                                [1]
                                           𝜎𝜎2
   ⇒ ln(𝑆𝑆1 ) ~𝑁𝑁 �ln(𝑆𝑆0 ) + �𝑟𝑟 − 2 � , 𝜎𝜎 2 �                                                    [½]

   From the Tables (moments of lognormal):
                                                 𝜎𝜎2   (2𝜎𝜎)2
   𝑉𝑉0 = 𝑒𝑒 −𝑟𝑟 �exp �2 �ln(𝑆𝑆0 ) + �𝑟𝑟 − 2 �� +                ��                                  [½]
                                                         2
                  𝑟𝑟+𝜎𝜎2
   = (𝑆𝑆0 )2 𝑒𝑒                                                                                     [1]
                     2
   = (9)2 𝑒𝑒 0.12+0.2 = $95.05                                                                      [1]

  (ii)
  Delta for the new derivative is given by:
       𝜕𝜕𝑉𝑉    𝜕𝜕                    2
  ∆= 𝜕𝜕𝑆𝑆𝑡𝑡 = 𝜕𝜕𝑆𝑆 �(𝑆𝑆𝑡𝑡 )2 𝑒𝑒 𝑟𝑟+𝜎𝜎 �                                                             [1]
          𝑡𝑡            𝑡𝑡
               𝑟𝑟+𝜎𝜎2
  = 2𝑆𝑆𝑡𝑡 𝑒𝑒                                                                                       [½]

CM2A S2023                                                           © Institute and Faculty of Actuaries
         CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


  When t=0
                        2
  ∆= 2 × 9 × 𝑒𝑒 0.12+0.2 = 21.123                                                                 [1]

  The delta of the stock is one so 21.123 units of stock are needed to hedge.              [1]
  The cost of this is 21.123 x 9 = $190.11, so a short holding in cash equal to $95.05 is
  needed to make the total cost equal to the cost of the derivative, which is also $95.05. [½]
                                                                                      [Total 9]


    This question required an option to be priced from first principles, and only the
    strongest candidates produced correct answers. Partial marks were awarded for
    starting down the right route with risk-neutral pricing .


   Q11
   (i)
   𝑈𝑈(𝑡𝑡) = 𝑈𝑈 + 𝑐𝑐𝑐𝑐 − 𝑆𝑆(𝑡𝑡)                                                                    [½]

   Where:
   U is the initial surplus.
   c is the rate of premium income per unit time
   S(t) is the aggregate claims process in the time interval [0,t]                               [½]

   (ii)
   Let N(t) represent the number of claims to time t and T(n) represent the time until
   claims n:
   P(T(1)>t) = P(N(t)=0) = exp(-λt)                                                               [1]
   P(T(1)>1) = P(N(1)=0) = exp(-2.5) = 8.2%                                                       [1]

   (iii)(a)
   E[S(t)] = 10E[N(t)] = 10 x 2.5 x t = 25t                                                       [1]
   E[U(t)] = E[U+ct-S(t)] = U + ct - E[S(t)]                                                      [1]
   E[U(1)] = E[U+c-S(1)] = U + c - E[S(1)] = 50 + 29 - 25 x 1 = 54                                [1]

   (b)
   E[U(12)] = E[U+12 x c-S(12)]=U+ 12 x c -E[S(12)] = 50 + 12 x 29 - 25 x 12 = 98                 [1]

   (iv)
   P(U(12)<0)=P(U+12 x c-S(12)<0)
   = P(50 +12 x 29 < S(12))                                                                       [1]
   = P(398 < S(12)) = P(39.8 < N(12))                                                             [1]
   = 1 - P(N(12) < 39.8)
   = 4.6%                                                                                         [1]

   (v)(a)
   Increasing the mortality rate will increase the Poisson parameter λ.                           [1]
   This increases the expected number of claims and hence the probability that the
   insurer's income will be insufficient to cover the claims over the year will increase.
   This increases the probability of ruin in the next year.                                       [1]


CM2A S2023                                                         © Institute and Faculty of Actuaries
        CM2A - Financial Engineering and Loss Reserving - September 2023 - Examiners’ Report


   (b)
   Increasing the mortality rate will increase the ultimate probability of ruin, because the
   policy has finite length and U = U(12).                                                   [1]
                                                                                      [Total 13]

   The last question on the paper was answered well by most candidates. There were plenty
   of correct answers, and the most common mistake was treating premiums as being per
   pet rather than per policy.

   Part (iii) also needed to include reasons for the impact on the probability of ruin and
   some candidates did not write enough here for the number of marks on offer.

   The model solution assumes a constant number of pets covered by the policy. The
   question could also be read as if the number of pets decreases over time and any
   candidates who assumed this were given appropriate credit.



                                                                                 [Paper Total 100]

                      END OF EXAMINERS’ REPORT




CM2A S2023                                                        © Institute and Faculty of Actuaries
Beijing
14F China World Office 1 · 1 Jianwai Avenue · Beijing · China 100004
Tel: +86 (10) 6535 0248

Edinburgh
Level 2 · Exchange Crescent · 7 Conference Square · Edinburgh · EH3 8RA
Tel: +44 (0) 131 240 1300

Hong Kong
1803 Tower One · Lippo Centre · 89 Queensway · Hong Kong
Tel: +852 2147 9418

London (registered office)
7th Floor · Holborn Gate · 326-330 High Holborn · London · WC1V 7PP
Tel: +44 (0) 20 7632 2100

Oxford
1st Floor · Belsyre Court · 57 Woodstock Road · Oxford · OX2 6HJ
Tel: +44 (0) 1865 268 200

Singapore
5 Shenton Way · UIC Building · #10-01 · Singapore 068808
Tel: +65 8778 1784




www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


---
normalized_id: cm2-2023-april-examiner-report-iandf-cm2a-202304-examiner-report
exam_code: CM2
year: 2023
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Apr23/IandF_CM2A_202304_Examiner report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2023-april-examiner-report-iandf-cm2a-202304-examiner-report

EXAMINERS’ REPORT
CM2 - Financial Engineering and Loss
Reserving
Core Principles
Paper A




                                 April 2023
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


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
    July 2023




CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    A. General comments on the aims of this subject and how it is marked

    The aim of Subject CM2 is to develop the necessary skills to construct asset liability
    models, value financial derivatives and calculate reserves for insurance or guarantees.
    These skills are also required to communicate with other financial professionals and to
    critically evaluate modern financial theories.

    The marking approach for CM2 is flexible in the sense that different answers to those
    shown in the solution can earn marks if they are relevant and appropriate. Marks for the
    methodology are also awarded including marks for using the right method even if an error
    in an earlier part of the question prevents the final answer from being correct. The
    marking focusses on rewarding candidates’ understanding of the concepts, including their
    ability to articulate algebra and arguments clearly.



    B. Comments on candidate performance in this diet of the examination.

    This exam was sat online and most questions focussed on applied calculations and
    analysis of the results. Some of the questions required candidates to apply concepts from
    the Core Reading to scenarios they might not have seen before and the stronger
    candidates scored highly here. Average marks were roughly in line with the historic
    norm for the subject but the pass mark was set slightly lower than normal.

    As in previous sessions, there was evidence that some candidates found algebra tricky
    when answering questions in Word. Candidates should note that rearranging and solving
    algebra on screen can sometimes be hard if you are used to using pen and paper, so this is
    a worthwhile skill to practice before the exams. It’s also worth saying that using the
    equation editor in Word to set out formulae is not necessary, your workings just need to
    be clear enough for the examiner to follow them.

    Question 4 and Question 5 proved to be the most challenging questions on the paper.
    Question 4 required candidates to derive and work with a lognormal distribution, and
    algebraic slip-ups were common here. Question 5 required candidates to apply the
    Cameron-Martin-Girsanov theorem, which is not often examined, though most candidates
    who started down the right route managed to complete the question well.




    C. Pass Mark

    The Pass Mark for this exam was 57
    1297 presented themselves and 558 passed.




CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    Solutions for Subject CM2A – April 2023

    Q1
    (i)
    U’(w) = 1/w                                                                                        [½]
    U’’(w) = -1/w^2                                                                                    [½]
    R(w) = w*-U’’(w)/U’(w) = 1                                                                         [½]
    R’(w) = 0                                                                                          [½]
    Therefore this utility function exhibits constant relative risk aversion                           [½]
    so it is iso-elastic                                                                               [½]

    (ii)
    Expected loss = 5% * 200,000 + 0.1% * 1,490,000                                                    [½]
    = $11,490                                                                                          [½]

    (iii)
    The maximum premium, P, is given by the following equation:
    E(U(w-X)) = U(w-P)                                                                                 [1]
    Where w is current wealth and X is the loss
    94.9%*U(1,500,000) + 5%*U(1,300,000) + 0.1%*U(10,000) = U(w-P)                                     [1]
    14.20881 = ln(1,500,000-P)                                                                         [½]
    P = $18,138                                                                                        [½]

    (iv)
    The premium is higher than the expected loss                                          [½]
    Which implies that the singer is risk averse                                          [½]
    Also implied by the singer’s iso-elastic utility function                             [½]
    Initially it appears the singer would be better off not purchasing the insurance      [½]
    However, people buy insurance to reduce risk and increase certainty                   [½]
    And buying the insurance at any premium lower than this would give a higher
    expected utility                                                                      [½]
    So they might prefer to buy the insurance                                             [½]
                                                              [Marks available 3½, maximum 3]

    (v)
    Insurers manage their exposure by pooling risks                                                    [1]
    This is a low likelihood but high severity risk                                                    [½]
    And it might be difficult for an insurer to pool with other risks due to the unusual
    risk being covered                                                                                 [½]
    So they might not be keen to take on such a risk                                                   [½]
    Insurers also need to be able to estimate the probability of a risk event                          [1]
    In particular, the insurer’s view on the likelihood of each risk might differ from the
    singer’s view                                                                                      [1]
    which would mean that the insurance price differs from the value the singer places
    on the insurance                                                                                   [½]
    There is also potential for adverse selection                                                      [1]
    if the singer wants the insurance because they believe they are particularly likely
    to damage their vocal cords                                                                        [1]
    which will make them a higher risk for the insurer                                                 [½]
    and moral hazard                                                                                   [1]


CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    If the singer might take less care of their health                                           [1]
    because they have insurance                                                                  [½]
    Reinsurers might not want to accept this risk                                                [1]
    This risk might be hard to estimate based on past data                                       [1]
    The market for this risk might be very small                                                 [1]
                                                                   [Marks available 13, maximum 5]
                                                                                          [Total 15]

     This question was answered well apart from part (iii), where many candidates
     were unable to find the certainty equivalent required.

     There were lots of possible ideas in part (v) for why an insurer might not be willing
     to cover this sort of risk and most candidates managed to suggest some good
     points.


    Q2
    (i)
    To estimate the return on an asset/portfolio                                         [½]
    because a stochastic model gives the distribution of the return or because the
    return profile might not use a tractable distribution.                               [½]
    To estimate the volatility/risk on an asset/portfolio                                [½]
    because we need to know the range of possible outcomes                               [½]
    To estimate VaR/shortfall probability on an asset/portfolio                          [½]
    because we need to know the range of possible outcomes and the return profile
    might not use a tractable distribution                                               [½]
    To evaluate guarantees on products                                                   [½]
    because we will need to know how likely a guarantee is to bite and the value in
    each case                                                                            [½]
    To price options                                                                     [½]
    because the distribution of the underlying assets might be complex or the options
    might be path-dependent                                                              [½]
    To calculate capital requirements                                                    [½]
    because the underlying movements might be complex and the values in the tails
    might be important                                                                   [½]
                                                              [Marks available 6, maximum 3]

    (ii)
    Path 1:
    A Wiener process has independent, normally distributed increments                                  [½]
    It is not simple to judge this from the chart                                                      [½]
    Path 1 appears to be a Wiener process                                                              [½]

    Path 2:
    For a Wiener process W0 = 0                                                                        [½]
    Therefore Path 2 is not a Wiener process                                                           [½]

    Path 3:
    A Wiener process has continuous sample paths                                                       [½]
    Path 3 appears to have a discontinuity at time 100                                                 [½]

CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    Therefore Path 3 is unlikely to be a Wiener process                                                [½]

    (iii)
    a. σ controls the volatility of the process                                                        [½]
          So an increase in σ will result in an increase of the overall volatility                     [½]
          The maximum and minimum points on the chart would likely be higher                           [½]
    b. θ represents the mean level of the short rate                                                   [½]
          An increase will result in an increase in the average level of the path
          (or shift the path upwards)                                                                [½]
    c. κ determines the speed of reversion                                                           [½]
          A reduction means a lower speed of reversion                                               [½]
          So the path is likely to drift more before reverting to θ                                  [½]
                                                                                              [Total 10]

     This question was generally answered well, though part (ii) caused some
     difficulties. The key here was to identify that path 2 does not start at zero and path
     3 has a large jump at time 100.


    Q3
    (i)
    Similarities:
    Both models produce outputs given a specified set of inputs                         [½]
    e.g. data and assumptions                                                           [½]
    Both models will make assumptions about the future behaviour of financial variables [½]
    e.g. asset returns, inflation etc                                                   [½]

    Differences:
    A deterministic model is based on one set of parameters                                 [½]
    and it can in practice be very hard to pick the ‘correct’ set                           [½]
    In stochastic models, no single value is used                                           [½]
    and variations are allowed for by the application of probability theory                 [½]
    So a stochastic model produces a different output every time it is run                  [½]
    which will allow us to see the distribution of the results                              [½]
                                                                 [Marks available 5, maximum 3]

    (ii)
    The company might prefer a stochastic model because:
    For a deterministic model, deciding which set of input variables to use may be
    a challenge                                                                         [½]
    And it will be hard for the company to show it has picked the ‘right’ investment
    assumptions                                                                          [1]
    A stochastic model avoids this issue by assuming a range of possible outcomes could
    apply                                                                               [½]
    This is particularly useful for the insurer because they hold long-term contracts   [½]
    which are likely to be uncertain in the nature/term/currency                        [½]
    and the variation built into a stochastic model is much more likely to capture this
    properly                                                                            [½]



CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    Running the stochastic model lots of times will produce a range of results with
    associated probabilities                                                           [½]
    which gives us more information than a single figure from a deterministic model    [½]
                                                           [Marks available 4½, maximum 3]

    (iii)
    There are many reasons that could reasonably be argued. Some are:
    The company is assuming that investment returns are independent year-on-year.
    In practice this is not appropriate                                                  [½]
    As the returns in the past year sometimes inform the returns in the current year     [½]
    i.e. the two are correlated                                                          [½]
    The company is assuming that returns are Normally distributed each year
    The Normal distribution assigns a non-zero probability to returns smaller than -100% [½]
    And in general it is not appropriate to assume a greater loss value than the initial
    investment outlay is possible                                                        [½]
                                                             [Marks available 2½, maximum 2]

    (iv)
    The company could correct for lack of dependence by assuming the returns of each year
    are a function of the previous year’s returns                                           [1]
    Or it could consider changing its approach to a different type of model                 [1]
    The company could change to a distribution that does not permit returns below
    -100%                                                                                  [½]
    e.g. Like the LogNormal distribution                                                   [½]
                                                               [Marks available 3, maximum 2]
                                                                                    [Total 10]

      Part (i) of this question asked for similarities and differences between
      deterministic and stochastic models. Most candidates identified the key features
      of each model but to score full marks candidates needed to provide a clear
      comparison of the two modelling approaches.

      The later parts were answered well, with many candidates scoring highly in parts
      (iii) and (iv).



    Q4
    (i)
    log(𝑆𝑆5 ) ~ 𝑁𝑁(log(100) + 5𝜇𝜇, 5𝜎𝜎 2 )                                                              [1]

    (ii)
    𝑃𝑃(log(𝑆𝑆5 ) ≤ log(75)) = 0.01,                                                                    [½]
    𝑃𝑃(log(𝑆𝑆5 ) ≥ log(140) = 0.01                                                                     [½]
    log(𝑆𝑆5 ) is Normally distributed, so by symmetry
                        log(75)+log(140)
    log(100) + 5𝜇𝜇 =                                                                                    [1]
                                2
    𝜇𝜇 = 0.004879 (4𝑠𝑠𝑠𝑠)                                                                              [½]
    Then by definition of the Normal distribution:
    log(75) = log(100) + 5𝜇𝜇 + √5𝜎𝜎(−2.32635)                                                           [1]


CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


           log(100)−log(75)+5𝜇𝜇
    𝜎𝜎 =                                                                                                  [1]
               √5∗2.32635
    𝜎𝜎 = 0.06000 (4𝑠𝑠𝑠𝑠)                                                                                 [½]

    (iii)
    𝑃𝑃(𝑆𝑆10 ≥ 100) = 𝑃𝑃(log(𝑆𝑆10 ) ≥ log(100))                                                           [½]
    = 𝑃𝑃(𝑁𝑁(log(100) + 10𝜇𝜇, 10𝜎𝜎 2 ) ≥ log (100))                                                       [½]
                        10𝜇𝜇
    = 𝑃𝑃 �𝑁𝑁(0, 1) ≥ −       �                                                                           [½]
                            √10𝜎𝜎
    Using 𝜇𝜇 and 𝜎𝜎 from part (iii):
    = 𝑃𝑃(𝑍𝑍 ≥ −0.25718)                                                                                  [½]
    = Φ(0.25718) = 0.6015                                                                                 [1]

    (iv)
    The biologist has extended the model beyond the original time frame they were
    using it                                                                                 [½]
    This could be a dangerous if the assumptions used to build them only apply over the
    next 5 years and not over the full 10                                                    [½]
    The biologist may also have only built this model a one-off exercise and not
    intended to share its output or probabilities it produces with third parties such as the
    university                                                                                [1]
    The model may have other limitations e.g. in how the biologist set 𝜇𝜇 and 𝜎𝜎              [1]
    The biologist should be careful to disclose these issues to the university                [1]
                                                                [Marks available 4, maximum 2]

     This unexpectedly proved to be one of the hardest questions on the paper, with
     many candidates failing to identify the correct distribution in part (i). Credit was
     given in parts (ii) and (iii) for using whichever distribution was proposed in part
     (i), but candidates often still did not solve the algebra correctly.

     Part (iv) tended to be answered better, with many candidates suggesting some
     good reasons why extending the model for a longer time period might not be a
     good idea.



    Q5
    (i)
    The risk neutral and real world probability measures are connected by the market
    price of risk, which equals c.
    The stock price and derivative price are given by:
    𝑆𝑆𝑡𝑡 = 𝑆𝑆0 exp (0.2𝐵𝐵𝑡𝑡 + 0.2𝑡𝑡)
    𝐷𝐷𝑡𝑡 = 2exp (0.6𝐵𝐵𝑡𝑡 + 0.39𝑡𝑡)
    If we convert these using the CMG theorem to a standard Brownian motion under
    the risk-neutral measure and assume that 𝐵𝐵�𝑡𝑡 = 𝐵𝐵𝑡𝑡 + 𝑐𝑐𝑐𝑐, they become:       [1]
    𝑆𝑆𝑡𝑡 = 𝑆𝑆0 exp�0.2�𝐵𝐵�𝑡𝑡 − 𝑐𝑐𝑐𝑐� + 0.2𝑡𝑡� = 𝑆𝑆0 exp (0.2(1 − 𝑐𝑐)𝑡𝑡 + 0.2𝐵𝐵�𝑡𝑡 )  [1]
    𝐷𝐷𝑡𝑡 = 2 exp�0.6�𝐵𝐵�𝑡𝑡 − 𝑐𝑐𝑐𝑐� + 0.39𝑡𝑡� = 2exp ((0.39 − 0.6𝑐𝑐)𝑡𝑡 + 0.6𝐵𝐵�𝑡𝑡 )   [1]
    These processes are both geometric Brownian motions and the corresponding SDEs are:
                                 0.2 2
    𝑑𝑑𝑑𝑑𝑡𝑡 = 𝑆𝑆𝑡𝑡 ��0.2(1 − 𝑐𝑐) + 2 � 𝑑𝑑𝑑𝑑 + 0.2𝑑𝑑𝐵𝐵�𝑡𝑡 � = 𝑆𝑆𝑡𝑡 ��(0.22 − 0.2𝑐𝑐)�𝑑𝑑𝑑𝑑 + 0.2𝑑𝑑𝐵𝐵�𝑡𝑡 �    [1]


CM2A A2023                                                                © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report



                                  0.6  2
    𝑑𝑑𝑑𝑑𝑡𝑡 = 𝐷𝐷𝑡𝑡 ��0.39 − 0.6𝑐𝑐 + 2 � 𝑑𝑑𝑑𝑑 + 0.6𝑑𝑑𝐵𝐵�𝑡𝑡 � = 𝐷𝐷𝑡𝑡 �(0.57 − 0.6𝑐𝑐)𝑑𝑑𝑑𝑑 + 0.6𝑑𝑑𝐵𝐵�𝑡𝑡 �    [1]
    Under the risk-neutral measure both assets have the same rate of drift (equal to the
    risk free rate).                                                                                    [½]
    This means:
    0.22 − 0.2c = 0.57 − 0.6c                                                                           [½]
    ⇒ 0.4c = 0.35 ⇒ c = 0.875                                                                           [1]

    (ii)
    𝑟𝑟 = 0.22 − 0.2𝑐𝑐 = 0.22 − 0.2𝑥𝑥0.875 = 0.045                                                     [1]
                                                                                                 [Total 8]

     This question required candidates to apply the Cameron-Martin-Girsanov theorem
     in part (i), and those who identified this often went on to score full marks. The
     Examiners were fairly lenient with algebra here since this can be tricky to type out
     in Word.



    Q6
    (i)
    Investment A:
    E(A) = 1/3 x 3 + 1/3 x 2.6 + 1/3 x 1 = $2.2                                                         [1]
    Var (A) = 1/3 x (9 + 6.76 + 1) – 2.22 = $20.747                                                     [1]

    Investment B:
    E(B) = $2.2                                                                                        [½]
    Var(B) = $24                                                                                       [½]

    (ii)
    They would choose Investment A                                                        [½]
    An insurer with a quadratic utility function will maximise their expected utility
    based on the first two moments of the distribution of return…                         [½]
    alternatively, they will select the investment that has a higher return per unit
    variance…                                                                             [½]
    or the lowest variance per unit of return                                             [½]
    The expected returns from the two investments are identical                           [½]
    However, Investment A has a lower variance of return than Investment B                [½]
                                                               [Marks available 3, maximum 2]

    (iii)
    (a)
    P(XA < 0.5) = 0                                                                                    [½]
    P(XB < 0.5) = P(Z < (0.3 – 2) / 2) = P(Z < -0.85) = 0.19766                                         [1]

    (b)
    P(XA < 2) = 1/3                                                                                    [½]
    P(XB < 2) = P(Z < (1.8 – 2)/2) = P(Z< -0.1) = 0.46017                                               [1]



CM2A A2023                                                               © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    (iv)
    Investment A gives the same mean, a lower variance and lower shortfall
    probabilities at the two levels measured in part (iv)                               [½]
    But Investment B can deliver a return above 3 in some scenarios                     [½]
    So Investment A is not better in all scenarios                                      [½]
    For example Investment A does not show absolute or first order stochastic
    dominance over Investment B                                                         [½]
    So neither investment is more attractive in every circumstance                      [½]
                                                           [Marks available 2½, maximum 2]
                                                                                  [Total 10]

      Many candidates scored well on the mathematical parts of this question, but
      average marks tended to be lower in the ‘wordy’ parts, especially part (iv).

      In part (iv) the key point was that the risk measures in the question all suggest
      that Investment A is better, but these risk measures do not tell the whole story and
      in some circumstances Investment B might be better.



    Q7
    (i)
                   ∞
    The mean 𝜇𝜇 = ∫1 𝑠𝑠𝑠𝑠(𝑠𝑠)𝑑𝑑𝑑𝑑                                                                     [½]
        ∞
    = ∫1 4𝑠𝑠 −4 𝑑𝑑𝑑𝑑                                                                                  [½]
        4
    = − 3 𝑠𝑠 −3                                                                                       [½]
      4
    =3                                                                                                [½]
                          𝜇𝜇
    Semi variance = ∫1 (𝜇𝜇 − 𝑠𝑠)2 𝑓𝑓(𝑠𝑠)𝑑𝑑𝑑𝑑                                                          [½]
          4          2
             4
    = 4 ∫13 �3 − 𝑠𝑠� 𝑠𝑠 −5 𝑑𝑑𝑑𝑑                                                                       [½]
          4
            16         8
    = 4 ∫13 9 𝑠𝑠 −5 − 3 𝑠𝑠 −4 + 𝑠𝑠 −3 𝑑𝑑𝑑𝑑                                                            [½]
                                           4
             4             8       1       3
    = 4 �− 9 𝑠𝑠 −4 + 9 𝑠𝑠 −3 − 2 𝑠𝑠 −2 �                                                              [½]
                                           1
                 9     3       9       4       8   1
    = 4 ��− 64 + 8 − 32� − �− 9 + 9 − 2��                                                             [½]
        5
    = 144 = 0.0347222                                                                                 [½]

    (ii) (a)
    𝑃𝑃(𝑋𝑋 < 𝑡𝑡) = 0.05                                                                                [½]
    ⇒ 1 − 𝑃𝑃(𝑋𝑋 ≥ 𝑡𝑡) = 0.05                                                                          [½]
                 ∞
    ⇒ 1 − 4 ∫𝑡𝑡 𝑠𝑠 −5 𝑑𝑑𝑑𝑑 = 0.05                                                                     [½]
    ⇒ 1 + [𝑠𝑠 −4 ]∞
                  𝑡𝑡 = 0.05                                                                           [½]
               −4
    ⇒ 1 − 𝑡𝑡         = 0.05                                                                           [½]
    ⇒ 𝑡𝑡 = 1.0129                                                                                     [½]

    (b)
       1 − 𝑡𝑡 −4 = 0.1                                                                                [½]

CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    ⇒ 𝑡𝑡 = 1.0267                                                                                     [½]

    (iii)
    The 10% VaR is higher than the 5% VaR                                                            [½]
    which we would expect                                                                            [½]
    It is more than double the 5% VaR                                                                [½]
    because of the curved shape of the PDF                                                           [½]
    Even the 5% VaR is still higher than 1                                                           [½]
    so this asset has a very small chance of losing the investor money                               [½]
                                                                                              [Total 12]

     In this question many candidates were not able to identify the correct integrals to
     work with in parts (i) and (ii), and those that did often slipped up when solving
     them. However, most candidates showed that they understood the risk measures
     and scored some marks for this.



    Q8
    (i)
    Cumulative claim amounts:
               0       1                2             3
     2018      362     634              1140          1490
     2019      444     560              725
     2020      487     682
     2021      518
                                                                                                       [1]
    Development Factors:
    DF(0,1) = (634 + 560 + 682) / (362 + 444+ 487) = 1.4509                                            [1]
    DF(1,2) = (1140 + 725) / (634 + 560) = 1.5620                                                      [½]
    DF(2,3) = 1490 / 1140 = 1.3070                                                                     [½]

    Completed Cumulative Claims:
            0       1         2                   3
    2018
    2019                                          947.6
    2020                      1065.3              1392.3
    2021            751.6     1173.9              1534.3
                                                                                                       [1]
    Outstanding Claims = (1534.3 – 518) + (1392.3 – 682) + (947.6 – 725)                               [1]
    = 1949.2                                                                                           [1]

    (ii)
    The basic chain ladder method might not be suitable                                                [½]
    Claims in year 0 appear to be increasing quite fast                                                [½]
    This could mean that the insurer’s business is growing                                             [½]
    Or it could be a sign of high inflation which might invalidate the basic chain ladder
    method                                                                                             [½]
    Claim development for policies issued in 2018 appears quite different to later years               [½]


CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report


    with claims roughly doubling in year 1 then doubling again in year 2                [½]
    This could mean the development factors are not appropriate unless this pattern of
    claims is expected to be repeated                                                   [½]
    If the claim pattern from 2018 is normal, then there are a lot of claims from later
    years yet to develop                                                                [½]
    and they might not all be developed by year 3                                       [½]
                                                            [Marks available 4½, maximum 4]

    (iii)
    The insurer could use the inflation-adjusted chain ladder method…                      [½]
    because this would correct for possible high inflation over the last few years         [½]
    The insurer could use the Bornhuetter-Ferguson method                                  [½]
    because this would allow a consistent assumption about how total claims relate to
    premiums                                                                               [½]
    The insurer could use the Average Cost Per Claim method…                               [½]
    which would allow it to split out patterns in claim numbers and claim amounts          [½]
    The insurer could remove 2018 from the calculation if experience in that year was
    abnormal                                                                               [½]
    or perhaps adjust to correct it                                                        [½]
                                                              [Marks available 4, maximum 2]
                                                                                    [Total 12]

     Part (i) of this question was answered well by most candidates, though some did
     not correctly calculate the final figure for outstanding claims which meant they
     missed out on scoring full marks.

     Parts (ii) and (iii) were not answered so well. The key here was to identify that the
     claims show a strange pattern and the development factors do not decrease by year
     as they usually would, which means this reserving method might not be
     appropriate.



    Q9
    (i)
    Cov(1,M) = 6/20*var(1) + 4/20*cov(1,2) + 10/20*cov(1,3) = 0.00052                                  [½]
    Cov(2,M) = 6/20*cov(1,2) + 4/20*var(2) + 10/20*cov(2,3) = 0.00178                                  [½]
    Cov(3,M) = 6/20*cov(1,3) + 4/20*cov(2,3) + 10/20*var(3) = 0.00277                                  [½]
    Var(M) = (6/20)^2*var(1) + (4/20)^2*var(2) + (10/20)^2*var(3) +
    2*(6/20)*(4/20)*0.0006 + 2*(6/20)*(10/20)*0.0005 + 2*(4/20)*(10/20)*0.0026=
    0.001897                                                                                           [½]
    Beta(1) = cov(1,M)/var(M) = 0.274                                                                  [½]
    Beta(2) = cov(2,M)/var(M) = 0.938                                                                  [½]
    Beta(3) = cov(3,M)/var(M) = 1.460                                                                  [½]
    Beta(M) = 0.3*Beta(1) + 0.2*Beta(2) + 0.5*Beta(3) = 1                                              [½]

    (ii)
    E(P) = 0.3*5% + 0.7*8.5% = 7.45%                                                                   [1]
    Var(P) = 0.3^2*var(1) + 0.7^2*var(3) + 2*0.3*0.7*cov(1,3) = 0.002313                               [½]
    Sd(P) = 4.8%                                                                                       [½]


CM2A A2023                                                              © Institute and Faculty of Actuaries
CM2A - Financial Engineering and Loss Reserving - Core Principles - April 2023 - Examiners’ Report




    (iii)
    Using the statement that P is on the efficient frontier:
    E(P) – r = (E(M) – r)*sd(P)/sd(M)
    E(M) = 7.15%                                                                                       [½]
    Sd(M) = sqrt(var(M)) = 4.3555%                                                                     [½]
    7.45% - r = (7.15% - r) * 1.104216
    r = 4.27%                                                                                          [1]
    Market price of risk = (E(M) – r)/sd(M)                                                            [½]
    = 0.661                                                                                            [½]

    Or solving using figures for asset 1 gives r = 4.72%, MPR = 0.5579
    Or solving using figures for asset 2 gives r = 4.72%, MPR = 0.5579
    Or solving using figures for asset 3 gives r = 4.22%, MPR = 0.6727

    (iv)
    The past is not necessarily a guide to the future                                  [½]
    The data may be incomplete/inaccurate                                              [½]
    There may not be sufficient historical data…                                       [½]
    resulting in substantial statistical error                                         [½]
    The ‘true’ parameters of the model may change over time                            [½]
    The assumptions underlying the asset pricing model may not be accurate             [½]
    [e.g. any of the CAPM assumptions]                                                 [½]
    Any other sensible suggestions                                                     [½]
                                                          [Marks available 4, maximum 3]
                                                                                [Total 12]

      Part (i) of this question asked candidates to show that the market beta is 1 ‘using
      the figures provided’. Many candidates earned some credit for an algebraic
      proof, but a mathematical proof using the figures in the question was required to
      score highly.

      For part (iii) the figures in the question unintentionally produce slightly different
      answers depending on which portfolio or asset is used, so the Examiners gave
      credit for any valid derivation.

                                                                                     [Paper Total 100]

                         END OF EXAMINERS’ REPORT




CM2A A2023                                                              © Institute and Faculty of Actuaries
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



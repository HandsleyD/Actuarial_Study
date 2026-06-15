---
normalized_id: cs1-2022-april-question-paper-cs1a-april22-exam-clean-proof
exam_code: CS1
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr22/CS1A_April22_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2022-april-question-paper-cs1a-april22-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 21 April 2022 (am)


                   Subject CS1 – Actuarial Statistics
                           Core Principles
                                      Paper A
                      Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A A2022                                               © Institute and Faculty of Actuaries
1    The number of emails, X, to be replied to in a day by an employee of the customer
     service centre of an insurance company is modelled as a Poisson random variable
     with mean 25. The time (in minutes), Y, that the employee takes to reply to x emails is
     modelled as a random variable with conditional mean and variance given by:

                       E Y|X = x) = 3x + 11,     Var Y|X = x) = x + 9.

     Calculate the unconditional variance of the time, Y, that the employee takes to reply to
     emails in a day.                                                                     [3]


2    The number of claims arriving at an insurance company is assumed to follow a
     Poisson process N(t) t ≥ 0 with rate 𝑚 2 per year.

     (i)     State the distribution of the random variable N(1).                               [1]

     (ii)    Calculate the probability of more than two claims arriving in year 2 given that
             five claims arrived in year 1.                                               [2]

     (iii)   Calculate the probability of more than two claims arriving in year 2 given that
             no claims arrived in year 1.                                                 [1]

     (iv)    Compare the results in parts (ii) and (iii).                                      [1]

     (v)     Identify the distribution of the time of the nth claim, justifying your answer.
                                                                                               [2]

     (vi)    Calculate a random value from the exponential distribution with
             parameter m = 2 using a realised value of 0.201 from a U(0,1) distribution
             and the inverse transform method.                                           [2]
                                                                                   [Total 9]




CS1A A2022–2
3    Let X and Y be two continuous random variables jointly distributed with probability
     density function:

                                          6e–(2x + 3y) ,       x, y ≥ 0,
                         fXY x, y =
                                          0,                   otherwise.

     (i)     Identify which one of the following options gives the correct expression for
             the marginal density function fX (x):

                             2x
             A      fX x = 2e ,                     x≥0
                           0                    otherwise.
                             –2x
             B      fX x = e ,                      x≥0
                           0                    otherwise.
                           2e–x ,                   x≥0
             C      fX x =
                           0                    otherwise.
                             –2x
             D      fX x = 2e ,                     x≥0
                           0                    otherwise.
                                                                                            [1]

     (ii)    Identify which one of the following options gives the correct expression for
             the marginal density function fY y :

                                 3e3y ,               y≥0
             A          fY y =
                                 0,               otherwise.
                                 e3y ,                y≥0
             B          fY y =
                                 0,               otherwise.
                                 3e–3y ,              y≥0
             C          fY y =
                                 0,               otherwise.
                                 e–3y ,               y≥0
             D          fY y =
                                 0,               otherwise.
                                                                                            [1]

     (iii)   Comment on whether X and 𝑌 are independent, by using your results in parts
             (i) and (ii).                                                            [1]

     (iv)    Calculate the conditional expectation E Y|X > 2 .                              [2]

     (v)     Identify which one of the following options gives the correct expression for
              P X>Y :
                    1
             A
                    5
                    3
             B
                    5
                    1
             C
                    3
                    1
             D
                    2
                                                                                         [2]
                                                                                   [Total 7]


CS1A A2022–3
4    (i)    Describe what is meant by each of the following:

            (a)     A random sample

            (b)     A statistic.
                                                                                           [3]

     A new political party is interested in the level of support it would have among the
     voters in a particular country. The random variable X is defined as:

                           1,      if the voter would support the party,
                     X=
                           0,                  otherwise.

     A random sample of 50 voters are presented with a simple summary of the party’s
     policies and asked if they would support this new party. The random sample is
     represented by X1 , X2 , …, X50 .

     (ii)   (a)     Identify a suitable population together with a possible parameter of
                    interest.

            (b)     Determine, using your answer to part (ii)(a), the sampling distribution
                    of the statistic:
                                               50

                                          Y=         Xi
                                               i=1
                                                                                         [4]
                                                                                   [Total 7]




CS1A A2022–4
5    Let X1 , X2 , …, Xn be independent identically distributed random variables following a
     Poisson(m) distribution. Suppose that, rather than observing the random variables
     precisely, only the events Xi = 0 or Xi > 0 are observed for i = 1, 2, …, n.

     Let Y be a random variable with:

                                              0,         Xi = 0
                                       Yi =
                                              1,         Xi > 0

     for i = 1, 2, …, n.

     (i)     Explain why the distribution of Yi is a Bernoulli (p) distribution with
             parameter p = 1 – e – m .                                                      [1]

     (ii)    Identify which one of the following expressions gives the correct likelihood
                                                                      1
             function based on observations y1 , …, yn in terms of y = ∑ni = 1 yi and the
                                                                        n
             unknown parameter m.

             A        L m = (1 + e – m )ny (em )n – ny
             B        L m = (1 – em )ny (e – m )n – ny
             C        L m = (1 – e – m )ny (e – m )n – ny
             D        L m = (1 – e – m )ny (e – m )n + ny
                                                                                            [2]

     (iii)   Derive an expression for the Maximum Likelihood Estimate (MLE) m of m in
                          1
             terms of y = ∑ni = 1 yi .                                             [4]
                            n

     (iv)    State the condition that m and L(m) must satisfy for m to maximise the
             likelihood function.                                                        [1]
                                                                                   [Total 8]




CS1A A2022–5
6          The size of claims on a certain type of motor insurance policy are modelled as a
           random variable X with Probability Density Function (PDF)

                                                  βα
                                  f x; α, β = α α + 1 ,      x ≥ β, α, β > 0.
                                               x

           (i)       Identify which one of the following expressions gives the correct log
                     likelihood function in terms of a random sample (x1 , x2 , …, xn ) and the
                     unknown parameters α and β:

                     A       l α, β = n log α + nα log β + α + 1 ∑ni= 1 log xi
                     B       l α, β = log α + nα log β – α + 1 ∑ni= 1 log xi
                     C       l α, β = n log α + n log β – α + 1 ∑ni= 1 log xi
                     D       l α, β = n log α + nα log β – α + 1 ∑ni= 1 log xi
                                                                                                        [2]

           (ii)      Derive the MLE α of parameter α as a function of parameter β, for a random
                     sample (x1 , x2 , …, xn ).                                                [2]

           (iii)     Comment on the behaviour of the PDF of X when β increases.                         [1]

           (iv)      Determine the MLE β of parameter β based on your comment in part (iii). [2]

           The values (in $) of a sample of 10 claims are given in the table below:

      x1             x2      x3         x4        x5       x6       x7           x8     x9        x10
    10,000         12,000   8,000     16,000    20,000    19,000 17,000     22,000    18,000 5,000

           (v)       Calculate the mean and standard deviation of the natural logarithm of the
                     sample.                                                                            [2]

           (vi)      Calculate the MLEs α and β based on the sample.                                [2]
                                                                                             [Total 11]




CS1A A2022–6
7    The probability density function of a gamma distribution is parameterised as follows:
                                  2   2
                          μ (μ / σ ) μ2
                            2          2 – 1 –xμ / σ2
                    f x = σ    2    x σ     e         , x ≥ 0, μ, σ > 0.
                              μ
                           Γ 2
                              σ

     This density can be expressed in the form of the exponential family, as follows:

                      1                             μ2               1
                   θ=– ,       b θ = – log – θ , ϕ = 2 ,     α ϕ =     ,
                      μ                             σ                ϕ

                        c x, ϕ = ϕ – 1 log x – log Γ ϕ + ϕ log ϕ,

     where the exponential family notation is the same as that in the Actuarial Formulae
     and Tables book.

     (i)     Justify that µ and σ2 are the mean and the variance of the distribution,
             respectively, using the properties of the exponential family.                  [3]

     An actuary is modelling the relationship between claim size and the time spent
     processing the claim, called operational time (opt). A statistician suggests using a
     model with the claim size being the response variable following the gamma
     distribution given above.

     (ii)    Comment on why a gamma distribution may be more suitable than the Normal
             distribution for the claim sizes.                                     [2]

     The actuary decided to fit a generalised linear model (GLM) with a gamma family
     and obtained the following estimates:

                 Parameters:
                                          Estimate       Standard error
                 Intercept                7.51621           0.03310
                 opt                      0.06084           0.00296

     (iii)   Explain, using the model output shown above, whether the variable ‘opt’ is
             significant or not.                                                        [2]

     Another statistician has suggested that an alternative model needs to take into account
     a legal representation variable, which shows whether or not an insured person has
     legal representation.

     (iv)    Explain the difference between the variables ‘opt’ and ‘legal representation’ in
             a statistical sense in the context of a GLM.                                 [2]

     The actuary now has to choose between the following two models for the claim size:

     Model 1: Only opt is used as a covariate.
     Model 2: Both opt and legal representation are used as covariates.



CS1A A2022–7
     An analysis of variance (ANOVA) was carried out to assess the significance of the
     two covariates: opt and legal representation (denoted by lr). The results obtained are
     given below, where claim size is denoted by cs:

     Model 1: cs = 7.52 + 0.06 × opt
     Model 2: cs = 3.6 + 0.04 × opt + 2.32 × lr

                   Resid. df      Resid. dev        Df      Deviance       Pr(>Chi)
    Model 1           45           39.987
    Model 2           44           15.869           1        24.118        0.000286

     (v)      Determine which model provides the better fit to the data.                  [2]
                                                                                   [Total 11]




CS1A A2022–8
8    The time, T, until the next lorry arrives at a customs checkpoint at the border of a
     country is modelled with an exponential distribution, that is, T ∼ Exp λ , where λ is
     an unknown parameter. Time is measured in minutes.

     (i)     Identify which one of the following expressions gives the correct likelihood
             function L(λ) for the parameter λ, based on a sample of observed times until
             the next lorry arrives, ti , i = 1, …, n:

             A       L λ|T = λn exp (–λ∑ti )
             B       L λ|T = λn – 1 exp (–λ∑ti )
             C       L λ|T = λn + 1 exp (–λ∑ti )
             D       L λ|T = λ exp –λ∑ti
                                                                                            [1]

     An analyst uses Bayesian inference to obtain an estimate for λ. They choose a gamma
     distribution with parameters α and β as the prior distribution for λ.

     (ii)    Verify that the posterior distribution of the parameter λ is a gamma
             distribution with parameters α + n and β + ∑ti .                               [4]

     Assume that a total of 20 lorries have arrived at the checkpoint.

     (iii)   Determine the Bayesian estimator for λ, in terms of the parameters α and β,
             under quadratic loss based on this sample.                                  [2]

     (iv)    Explain how to determine the Bayesian estimator for λ under all-or-nothing
             loss based on this sample.                                                 [3]

     (v)     Identify which one of the following options gives the correct Bayesian
             estimator for λ under all-or-nothing loss based on the sample given:
                           α
             A      λ=
                         β + 60
                         α + 19
             B      λ=
                         β + 60
                         α + 18
             C      λ=
                         β + 60
                         α + 20
             D      λ=
                         β + 60
                                                                                            [2]

     (vi)    Comment on the difference between the two estimators in parts (iii) and (v).
                                                                                         [1]
                                                                                 [Total 13]




CS1A A2022–9
9    Consider the linear regression model in which the response variable Yi is linked to the
     explanatory variable Xi by the following equation:

                                Yi = α + βXi + ei ,   i = 1, …, n,

     where ei are the error terms and data xi , yi , i = 1, …, n, are available.

     (i)     Comment on whether or not the linear regression model as presented above
             can be used to make inferences on parameters α and β.                    [3]

                                                                                S2xy
     The coefficient of determination for this model is given by R2 =                    .
                                                                               Sxx Syy


     (ii)    Verify that R2 gives the proportion of the total variability of Y ‘explained’ by
             the linear regression model.                                                   [3]

     Consider the multiple linear regression model where the response variable Yi is
     related to explanatory variables X1 , X2 , …, Xk by:

                  Yi = α + β1 X1i + β2 X2i + … + βk Xki + ei ,    i = 1, …, n,

     where ei are the error terms and relevant data are available.

     (iii)   Suggest three ways for assessing the fit of the multiple linear regression model
             to a set of data.                                                            [3]

     A forward selection process is used for selecting explanatory variables in the multiple
     linear regression model.

     (iv)    Explain whether the coefficient of determination, R2 , can be used as a criterion
             for selecting variables when applying this process.                            [3]

     A multiple linear regression model with four explanatory variables (X1 , X2 , X3 , X4 ) is
     fitted to a set of data, and a forward selection process is used for selecting the optimal
     set of explanatory variables.

     Some output of this process is shown in the following table:

                Model                             R2             Adjusted R2
                X1                              0.7322             0.7167
                X1 X4                           0.8018             0.7712
                X1 X4      X3                   0.8253             0.7805
                X1 X4      X3      X2           0.8259             0.7684

     (v)     Determine the optimal set of explanatory variables using this output.                  [2]
                                                                                             [Total 14]




CS1A A2022–10
10   A random sample of the records of a certain hospital yielded the following
     information on the length of hospital stay in days (li ) and the annual family income
     (ai , rounded to the nearest £500) of 15 discharged patients. An analyst believes that
     the relationship between these two variables is linear. The graph below depicts the
     scatter plot of the annual family income against the length of stay and the simple
     linear regression line fitted by the analyst.




     Summary statistics for these data are given below:

      ∑ai = 82,500, ∑a2i = 523,750,000, ∑ai li = 510,500, ∑li = 107, ∑l2i = 871.

     (i)     Comment on the relationship between the two variables.                           [2]

     (ii)    Determine the equation of the simple regression line.                            [3]

     (iii)   Perform an ANOVA test to determine whether the slope of the regression line
             is significantly different from zero.                                    [4]

     (iv)    Calculate Pearson’s correlation coefficient between the annual family income
             and the length of hospital stay.                                           [1]

     (v)     Perform a statistical test to determine whether Pearson’s correlation
             coefficient for the corresponding population is significantly different
             from −0.8.                                                                       [5]




CS1A A2022–11
     (vi)   Identify which one of the following options gives an approximate 95%
            confidence interval for Pearson’s correlation coefficient for the corresponding
            population:

            A      (–2.027, –0.896)
            B      (–0.966, –0.714)
            C      (–0.989, –0.683)
            D      (–0.908, –0.794)
                                                                                        [2]
                                                                                 [Total 17]


                                END OF PAPER




CS1A A2022–12



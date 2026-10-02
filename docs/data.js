// Subject-level metadata: every IFoA exam on the tracker, plus the two
// Foundations courses. Sourced from the public IFoA syllabus / subject names.
//
// This is all the home page, route map, planner and Exam Hub need about a
// subject, so it loads up front. Each subject's modules, flashcards,
// practice questions and drills live in docs/content/<CODE>.js and load on
// demand; docs/catalog.js (generated) carries their titles and counts.
// See docs/content/README.md.
const SUBJECTS = {
  CB1: { name: "Business Finance", blurb: "Core financial concepts for business: financial statements, investment appraisal, cost of capital, and how businesses are financed and valued." },
  CB2: { name: "Business Economics", blurb: "Micro- and macroeconomic principles applied to business and financial decision-making — markets, firms, government policy and the wider economy." },
  CB3: { name: "Business Management", blurb: "Business strategy, professional ethics and teamwork, assessed via an online case-study exercise rather than a written exam — tracked here so it counts toward Associate, even though it has no flashcard content." },
  CM1: { name: "Actuarial Mathematics", blurb: "The mathematics of compound interest, cashflows and life contingencies that underpin actuarial valuations." },
  CM2: { name: "Financial Engineering and Loss Reserving", blurb: "Stochastic models of asset prices and derivatives, plus general insurance reserving techniques." },
  CP1: { name: "Actuarial Practice", blurb: "Applies core actuarial techniques to real-world modelling, pricing and reserving problems across practice areas." },
  CP2: { name: "Modelling Practice", blurb: "Hands-on data analysis and modelling using a spreadsheet/programming environment for actuarial problems." },
  CP3: { name: "Communications Practice", blurb: "Communicating actuarial analysis clearly to technical and non-technical audiences." },
  CS1: { name: "Actuarial Statistics", blurb: "Statistical theory, regression and time series methods used in actuarial modelling." },
  CS2: { name: "Risk Modelling and Survival Analysis", blurb: "Stochastic processes, survival models and machine-learning methods for risk analysis." },
  SA1: { name: "Health and Care", blurb: "Specialist application of actuarial techniques to health and care insurance products." },
  SA2: { name: "Life Insurance", blurb: "Specialist application of actuarial techniques to life insurance business." },
  SA3: { name: "General Insurance", blurb: "Specialist application of actuarial techniques to general (non-life) insurance business." },
  SA4: { name: "Pensions and Other Benefits", blurb: "Specialist application of actuarial techniques to pension schemes and other employee benefits." },
  SA7: { name: "Investment and Finance", blurb: "Specialist application of actuarial techniques to investment strategy and financial markets." },
  SP1: { name: "Health and Care Principles", blurb: "Principles of pricing, reserving and risk management for health and care insurance." },
  SP2: { name: "Life Insurance Principles", blurb: "Principles of pricing, reserving and risk management for life insurance business." },
  SP4: { name: "Pensions and Other Benefits Principles", blurb: "Principles of designing, funding and managing pension and other benefit arrangements." },
  SP5: { name: "Investment and Finance Principles", blurb: "Principles of investment management, asset allocation and financial markets." },
  SP6: { name: "Financial Derivatives Principles", blurb: "Principles of pricing and risk-managing financial derivatives." },
  SP7: { name: "General Insurance – Reserving and Capital Modelling Principles", blurb: "Principles of reserving and capital modelling for general insurance business." },
  SP8: { name: "General Insurance Pricing Principles", blurb: "Principles of pricing general insurance products." },
  SP9: { name: "Enterprise Risk Management Principles", blurb: "Principles of identifying, modelling and managing risk across an entire enterprise." },
  // Foundations: the maths and statistics the Core Principles exams assume,
  // taught from zero. They study like any other subject (modules, flashcards,
  // drills, spaced repetition) but are not IFoA exams: they are left out of
  // EXAMS in app.js, so they never appear in the exam planner, the route map,
  // results or the qualification count.
  FM: { name: "Foundation Mathematics", blurb: "From arithmetic to calculus, series, differential equations and matrices: every piece of maths CM1, CM2, CS1 and CS2 assume you already know, taught from scratch.", foundation: true },
  FS: { name: "Foundation Statistics", blurb: "From counting and basic probability to distributions, expectation, estimation, hypothesis tests and regression: the statistics CS1 and CS2 build on, taught from scratch.", foundation: true },
};

const FOUNDATIONS = ["FM", "FS"];

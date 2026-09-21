// Drill bank: objectively-graded practice items (multiple choice, select-all,
// cloze) that sit alongside the flashcards rather than inside them.
//
// Rendered by renderDrillView() in app.js, at #/<CODE>/drill (whole subject)
// or #/<CODE>/drill/<moduleId> (one module). Results are stored per item id
// by Store.setDrill(), in the table supabase/migrations/003_drills.sql adds.
//
// Why a separate file and not extra entries in data.js:
//   Flashcard progress is keyed on (exam_code, module_id, card_idx) where
//   card_idx is the ARRAY INDEX in data.js. Inserting anything into a
//   module's `cards` array silently reassigns every later card's identity and
//   corrupts existing mastery stars and review schedules. Drills therefore
//   live here with stable string ids, and are stored against those ids.
//
// Drills are their own track: a drill result never touches flashcard_mastery
// and never counts toward the star total or the Associate/Fellow rank, which
// are earned by self-graded flashcard review. Drill accuracy is reported
// separately. The two use the same scheduler (srs.js) but not the same score.
//
// Item shape (all types):
//   id       stable, never reused, never renumbered — the storage key
//   type     "mcq" | "multi" | "cloze"
//   module   the data.js module this drills, for grouping and deep links
//   explain  why the right answer is right — same reveal-then-explain
//            contract as a flashcard, and required on every item
//
//   mcq      q, options[], correct (index into options), why{} keyed by the
//            index of each wrong option — explaining why a distractor is
//            wrong is the whole value of the format, so it isn't optional
//   multi    q, options[], correct[] (indices), explain
//   cloze    text with {{0}}, {{1}} placeholders; blanks[] giving each
//            blank's answer plus the tokens offered for it. Tokens are
//            picked from a tray rather than typed, so grading is exact and
//            the format works on a phone without a keyboard.
//
// Every distractor below is a real confusion, most of them lifted from the
// "explain" notes on the source flashcards, not filler.
const DRILLS = {
  CB2: [
    /* ---------- m01 Economic concepts and systems ---------- */
    {
      id: "cb2-m01-d01", type: "mcq", module: "m01",
      q: "A firm stores stock in a warehouse it already owns outright, paying no rent. What is the opportunity cost of using the warehouse this way?",
      options: [
        "Zero, because no cash payment is made for it",
        "The rent the firm could have earned by letting the warehouse out",
        "The price the firm originally paid to buy the warehouse",
        "The warehouse's current resale value on the open market",
      ],
      correct: 1,
      explain: "Opportunity cost is the value of the next-best alternative given up, whether or not money changes hands. The next-best use of a warehouse you own is to let it to someone else, so the rent foregone is the cost of using it yourself. Naming the specific alternative &mdash; not just saying &lsquo;the cost of storage&rsquo; &mdash; is what earns the mark.",
      why: {
        0: "This is the single most common error on this idea: treating cash paid and cost as the same thing. A resource has a cost whenever it could have been used for something else, and self-owned resources are exactly where that bites.",
        2: "The purchase price is a sunk cost &mdash; already spent, unrecoverable, and unaffected by what the firm does next. Opportunity cost is always about the alternative available <em>now</em>.",
        3: "Resale value is the cost of a different decision: selling the warehouse outright. The question is about the cost of <em>using</em> it for storage, whose alternative is letting it.",
      },
    },
    {
      id: "cb2-m01-d02", type: "mcq", module: "m01",
      q: "Which of the following is a <em>normative</em> statement?",
      options: [
        "Unemployment fell to 4.1% in the year to June",
        "The government ought to care more about unemployment than about inflation",
        "Raising the minimum wage reduces employment among workers under 21",
        "Inflation and unemployment move in opposite directions in the short run",
      ],
      correct: 1,
      explain: "A normative statement is a value judgement about what <em>should</em> happen; a positive statement is a factual claim about how the economy works, which could in principle be tested against evidence. The test is not whether a statement is true, or even whether economists agree on it &mdash; only whether evidence could settle it.",
      why: {
        0: "Positive, and easy to see: it's a measurement, and you could check it.",
        2: "Positive, though contested. A disputed claim is still positive as long as evidence could in principle settle it &mdash; and this one is actively researched. Mistaking &lsquo;controversial&rsquo; for &lsquo;normative&rsquo; is a common slip.",
        3: "Positive: it's an empirical claim about a relationship (the short-run Phillips curve), testable against data.",
      },
    },
    {
      id: "cb2-m01-d03", type: "mcq", module: "m01",
      q: "In the classical list of factors of production, which factor earns <em>profit</em> as its reward?",
      options: ["Land", "Labour", "Capital", "Enterprise"],
      correct: 3,
      explain: "The four factors each have their own return: land earns rent, labour earns wages, capital earns interest, and enterprise &mdash; the willingness to bear risk and organise the other three &mdash; earns profit. Enterprise is the one candidates most often leave off the list entirely.",
      why: {
        0: "Land earns rent, the payment for the use of a natural resource.",
        1: "Labour earns wages, the payment for human effort and time.",
        2: "Capital earns interest, the return for supplying productive assets or the funds to buy them. Confusing capital's return with profit is the usual version of this mistake.",
      },
    },
    {
      id: "cb2-m01-d04", type: "mcq", module: "m01",
      q: "A demand curve is drawn under the assumption of <em>ceteris paribus</em>. What does that assumption actually do?",
      options: [
        "It guarantees the relationship will hold in real-world data",
        "It isolates the effect of price by holding every other determinant constant",
        "It ensures the market is in equilibrium at the price shown",
        "It restricts the analysis to the short run",
      ],
      correct: 1,
      explain: "Holding everything else fixed is what lets a model attribute a change to one cause. It's also the model's main limitation, and saying so explicitly earns credit &mdash; real data almost never holds other things equal, which is why observing price and quantity rising together doesn't refute the law of demand.",
      why: {
        0: "It does close to the opposite: it's precisely the reason model predictions and raw data can diverge, because in the real world other things do move.",
        2: "Equilibrium is a separate idea. A demand curve is drawn ceteris paribus at every price, including prices the market is nowhere near.",
        3: "Ceteris paribus says nothing about time horizons. Short- and long-run curves are both drawn under it.",
      },
    },
    {
      id: "cb2-m01-d05", type: "multi", module: "m01",
      q: "Which of the following count as factors of production? Select all that apply.",
      options: [
        "Land, including natural resources",
        "Labour supplied by the firm's employees",
        "Enterprise: bearing risk and organising the other inputs",
        "Cash held in the firm's bank account",
      ],
      correct: [0, 1, 2],
      explain: "The factors are land, labour, capital and enterprise &mdash; all of them real, productive resources. Money is not one: it's a claim on resources, a means of acquiring them, not something that itself produces output. &lsquo;Capital&rsquo; in economics means productive assets like machinery and buildings, not a bank balance, and that ambiguity is where the confusion comes from.",
    },
    {
      id: "cb2-m01-d06", type: "cloze", module: "m01",
      text: "Scarcity forces choice, and the value of the next-best alternative given up is the {{0}} cost of a decision. Because no cash need change hands, a firm occupying premises it owns still bears one &mdash; the {{1}} it could have earned by letting them out.",
      blanks: [
        { answer: "opportunity", options: ["opportunity", "marginal", "sunk", "average"] },
        { answer: "rent", options: ["rent", "interest", "profit", "wage"] },
      ],
      explain: "Both halves matter. The first is the definition; the second is the application examiners actually set, because it's where the &lsquo;no cash paid, therefore no cost&rsquo; instinct goes wrong. Rent is specifically the return to land and buildings, which is why it's the right word for the foregone alternative here.",
    },

    /* ---------- m02 Supply and demand (1) ---------- */
    {
      id: "cb2-m02-d01", type: "mcq", module: "m02",
      q: "Consumer incomes rise. For a normal good, how is this shown on a supply-and-demand diagram?",
      options: [
        "As an upward movement along the existing demand curve",
        "As a rightward shift of the whole demand curve",
        "As a downward movement along the existing demand curve",
        "As a rightward shift of the supply curve",
      ],
      correct: 1,
      explain: "Only a change in the good's <em>own price</em> moves you along a demand curve. Everything else &mdash; income, tastes, the price of substitutes and complements, population &mdash; shifts the whole curve. Income has risen, the good is normal, so more is demanded at every price: the curve moves right.",
      why: {
        0: "Describing an income change as a movement along the curve is the error markers specifically penalise here. Movements along come from own-price changes and nothing else.",
        2: "Same mistake as the first option, and pointing the wrong way as well: a rise in income raises demand for a normal good.",
        3: "Income is a demand-side determinant. Supply shifts when producers' conditions change &mdash; input costs, technology, the number of firms.",
      },
    },
    {
      id: "cb2-m02-d02", type: "mcq", module: "m02",
      q: "Which of the following causes a movement <em>along</em> a good's demand curve, rather than a shift of it?",
      options: [
        "A fall in the price of the good itself",
        "A rise in average consumer incomes",
        "An increase in the price of a close substitute",
        "A successful advertising campaign for the good",
      ],
      correct: 0,
      explain: "This is the distinction almost every supply-and-demand scenario question is really testing. Get the mechanism right first &mdash; own price means a movement, anything else means a shift &mdash; and only then work out the direction.",
      why: {
        1: "Income is a separate determinant, so it shifts the curve: right for a normal good, left for an inferior one.",
        2: "The price of a <em>different</em> good is not this good's own price, so it shifts this curve &mdash; right, as buyers switch away from the dearer substitute.",
        3: "Advertising works by changing tastes, which is a shift factor. The good's own price hasn't moved.",
      },
    },
    {
      id: "cb2-m02-d03", type: "mcq", module: "m02",
      q: "A regulator holds a good's price below its market equilibrium. What follows?",
      options: [
        "Excess supply, putting downward pressure on price",
        "Excess demand, putting upward pressure on price",
        "The market is in equilibrium at the controlled price",
        "Excess demand, putting downward pressure on price",
      ],
      correct: 1,
      explain: "Below equilibrium, buyers want more than sellers will offer. The shortage is what generates upward pressure: some buyers bid up to secure the good, which simultaneously chokes off demand and draws out more supply until the gap closes.",
      why: {
        0: "Excess supply is the mirror case, and it arises at prices <em>above</em> equilibrium. Check which side of equilibrium the price sits before naming the imbalance.",
        2: "A price can be held anywhere; that doesn't make it an equilibrium. Equilibrium is specifically where quantity demanded equals quantity supplied.",
        3: "Right diagnosis, wrong direction. A shortage means buyers compete for scarce units, which pushes price up, not down.",
      },
    },
    {
      id: "cb2-m02-d04", type: "mcq", module: "m02",
      q: "Supply increases while demand is unchanged. What happens to equilibrium price and quantity?",
      options: [
        "Price falls and quantity rises",
        "Price rises and quantity falls",
        "Both price and quantity rise",
        "Both price and quantity fall",
      ],
      correct: 0,
      explain: "A reliable check without memorising a table: a <em>demand</em> shift moves price and quantity the same way, a <em>supply</em> shift moves them opposite ways. Here supply has shifted right, so it slides down the demand curve to a lower price and a higher quantity.",
      why: {
        1: "That's a <em>decrease</em> in supply &mdash; a leftward shift, as would follow a rise in input costs.",
        2: "Both rising is the signature of an increase in demand, not of a supply shift.",
        3: "Both falling is the signature of a decrease in demand.",
      },
    },
    {
      id: "cb2-m02-d05", type: "multi", module: "m02",
      q: "Which of the following shift the <em>demand</em> curve for coffee? Select all that apply.",
      options: [
        "A rise in the price of tea, a substitute",
        "A fall in average consumer incomes",
        "A successful advertising campaign for coffee",
        "A poor harvest that raises the world price of coffee beans",
      ],
      correct: [0, 1, 2],
      explain: "Substitutes' prices, income and tastes are all demand-side determinants, so each moves the whole demand curve. A bad harvest raises producers' costs, which is a <em>supply</em>-side shift &mdash; it changes the market price and so produces a movement along demand, not a shift of it. Sorting shifters onto the correct curve is half the marks in these questions.",
    },
    {
      id: "cb2-m02-d06", type: "cloze", module: "m02",
      text: "A rise in input costs shifts the supply curve to the {{0}}. At the price that prevailed before the shift, there is now excess {{1}}, so price is bid upward until a new equilibrium is reached.",
      blanks: [
        { answer: "left", options: ["left", "right", "vertical", "horizontal"] },
        { answer: "demand", options: ["demand", "supply", "capacity", "profit"] },
      ],
      explain: "Higher costs squeeze the margin at every output, so firms need a higher price to supply the same amount &mdash; equivalently, they supply less at the old price. That leaves buyers wanting more than is on offer at that old price, which is excess demand, and the shortage is what drives price up to clear the market.",
    },

    /* ---------- m03 Supply and demand (2): elasticity ---------- */
    {
      id: "cb2-m03-d01", type: "mcq", module: "m03",
      q: "A firm raises its price by 10% and finds that quantity sold falls by 4%. What happens to its total revenue?",
      options: [
        "It rises, because demand is price-inelastic over this range",
        "It falls, because demand is price-elastic over this range",
        "It is unchanged, because price elasticity of demand equals 1",
        "It falls, because the quantity sold has fallen",
      ],
      correct: 0,
      explain: "|PED| = 4 &divide; 10 = 0.4, comfortably below 1, so demand is inelastic: quantity responds proportionally <em>less</em> than price. The price rise therefore outweighs the volume loss and revenue rises. Linking the elasticity number to the revenue direction is usually worth a mark in its own right.",
      why: {
        1: "Elastic would need |PED| above 1, i.e. quantity falling by <em>more</em> than 10%. Here it fell by only 4%.",
        2: "Unit elasticity means |PED| = 1 exactly, which would need a 10% fall in quantity to match the 10% price rise.",
        3: "The direction of the quantity change alone never settles the revenue question &mdash; a price rise always reduces quantity. What matters is whether the proportional fall in quantity is bigger or smaller than the proportional rise in price.",
      },
    },
    {
      id: "cb2-m03-d02", type: "mcq", module: "m03",
      q: "Which of the following would make demand for a good <em>more</em> price-elastic?",
      options: [
        "The good is a necessity with no close substitutes",
        "Close substitutes are readily available from rival suppliers",
        "The good accounts for a very small share of consumer spending",
        "Consumers must buy immediately and cannot postpone the purchase",
      ],
      correct: 1,
      explain: "Every determinant of elasticity reduces to one question: how easily can the buyer avoid paying the higher price? Switching to a substitute is the most direct escape route, so plentiful substitutes mean elastic demand.",
      why: {
        0: "Both halves push the other way. Necessities and goods without substitutes leave the buyer no way out, so demand is inelastic.",
        2: "If an item barely registers in the household budget, a price rise is hardly worth reacting to &mdash; that makes demand <em>less</em> elastic, not more.",
        3: "Time to adjust is one of the standard determinants, and removing it makes demand less elastic. Given longer, buyers find alternatives.",
      },
    },
    {
      id: "cb2-m03-d03", type: "mcq", module: "m03",
      q: "A good is measured to have an income elasticity of demand of &minus;0.4. What does this tell you?",
      options: [
        "It is an inferior good, whose demand responds weakly to income",
        "It is a normal good, and specifically a luxury",
        "It is a normal good, and specifically a necessity",
        "It is a Giffen good, with an upward-sloping demand curve",
      ],
      correct: 0,
      explain: "Two separate readings come out of one number. The <em>sign</em> classifies the good: negative means demand falls as income rises, which is the definition of an inferior good. The <em>magnitude</em>, well below 1, says the response is weak. Examiners often hand you a value and ask you to do exactly this.",
      why: {
        1: "A luxury has income elasticity above 1 &mdash; strongly positive. This value is negative.",
        2: "A necessity has income elasticity between 0 and 1: positive but weak. The magnitude fits, but the sign does not.",
        3: "A Giffen good is a much stronger and rarer claim, and one about the <em>price</em>&ndash;quantity relationship. Income elasticity says nothing about the slope of the demand curve &mdash; you would need the price elasticity to make any claim about that.",
      },
    },
    {
      id: "cb2-m03-d04", type: "mcq", module: "m03",
      q: "Why is supply usually more price-elastic in the long run than in the short run?",
      options: [
        "Because consumers have more time to find substitutes",
        "Because firms have time to adjust capacity, inputs and production methods",
        "Because fixed costs fall as time passes",
        "Because demand also becomes more elastic over the same period",
      ],
      correct: 1,
      explain: "In the short run at least one input is fixed, so output can only be stretched so far however attractive the price. Given time, firms can build capacity, retool or enter the industry altogether, so quantity supplied responds far more to a given price change.",
      why: {
        0: "That's the time argument on the <em>demand</em> side. Both sides get more elastic with time, but for different reasons, and the question asks about supply.",
        2: "Fixed costs don't melt away; what changes is that in the long run all inputs become variable. That's a statement about flexibility, not about costs falling.",
        3: "Demand elasticity is a separate matter and doesn't cause supply to be elastic.",
      },
    },
    {
      id: "cb2-m03-d05", type: "multi", module: "m03",
      q: "Which of the following would you expect to have relatively <em>inelastic</em> demand? Select all that apply.",
      options: [
        "Insulin, for a patient who depends on it",
        "Petrol, over the week following a price rise",
        "Salt, which takes a negligible share of household spending",
        "One particular brand of crisps, among dozens on the shelf",
      ],
      correct: [0, 1, 2],
      explain: "The first three each block one of the usual escape routes: no substitute and absolute necessity, no time to adjust, and too small a share of spending to bother reacting to. A single brand among many is the opposite case on every count &mdash; substitutes are immediate and switching costs nothing, so its demand is highly elastic even though demand for crisps <em>as a category</em> is not.",
    },
    {
      id: "cb2-m03-d06", type: "cloze", module: "m03",
      text: "Price elasticity of demand is the percentage change in {{0}} divided by the percentage change in {{1}}. When the magnitude of the result exceeds 1, demand is described as {{2}}, and a price rise then reduces total revenue.",
      blanks: [
        { answer: "quantity demanded", options: ["quantity demanded", "quantity supplied", "total revenue", "consumer income"] },
        { answer: "price", options: ["price", "output", "income", "marginal cost"] },
        { answer: "elastic", options: ["elastic", "inelastic", "unit elastic", "perfectly inelastic"] },
      ],
      explain: "The general pattern is worth internalising: any &lsquo;elasticity of X with respect to Y&rsquo; is %&Delta;X &divide; %&Delta;Y, whatever X and Y happen to be &mdash; which is why income and cross-price elasticity use the same structure. The revenue consequence in the last clause is the part questions most often go on to ask about.",
    },

    /* ---------- m04 Background to demand ---------- */
    {
      id: "cb2-m04-d01", type: "mcq", module: "m04",
      q: "What does the slope of an indifference curve measure?",
      options: [
        "The marginal rate of substitution between the two goods",
        "The ratio of the two goods' prices",
        "The marginal utility of income",
        "The consumer's real income",
      ],
      correct: 0,
      explain: "The slope says how much of one good the consumer would give up for one more unit of the other while staying equally satisfied. Because it's a subjective willingness to trade, it comes purely from preferences &mdash; prices never enter it.",
      why: {
        1: "That's the slope of the <em>budget line</em>, which is what prices determine. The two slopes are distinct objects, and the consumer's optimum is exactly where they coincide &mdash; which is why mixing them up is so easy and so costly.",
        2: "Marginal utility of income is about how much extra satisfaction an extra pound brings. It isn't read off an indifference curve at all.",
        3: "Real income determines the <em>position</em> of the budget line, not the slope of an indifference curve.",
      },
    },
    {
      id: "cb2-m04-d02", type: "mcq", module: "m04",
      q: "On an indifference-curve diagram, the consumer's optimal bundle is found where:",
      options: [
        "two indifference curves cross",
        "the budget line is tangent to the highest attainable indifference curve",
        "the budget line cuts an indifference curve at two points",
        "marginal utility from every good has fallen to zero",
      ],
      correct: 1,
      explain: "At the tangency the rate at which the consumer is <em>willing</em> to trade the goods equals the rate at which the market <em>lets</em> them. Anywhere else, the two rates differ and the consumer could rearrange spending to reach a higher curve without spending more.",
      why: {
        0: "Indifference curves never cross &mdash; that would mean ranking the same pair of bundles two contradictory ways.",
        2: "Cutting a curve twice means the consumer can afford bundles on a <em>higher</em> curve in between, so it can't be the optimum.",
        3: "Zero marginal utility would mean extra units add nothing. The optimum involves equalising marginal utility per pound across goods, which doesn't require it to be zero anywhere.",
      },
    },
    {
      id: "cb2-m04-d03", type: "mcq", module: "m04",
      q: "A consumer's money income rises while both goods' prices stay the same. What happens to the budget line?",
      options: [
        "It shifts outward, parallel to the original line",
        "It pivots outward around one axis, becoming flatter",
        "It becomes steeper, pivoting around the other axis",
        "It is unaffected, because relative prices have not changed",
      ],
      correct: 0,
      explain: "The slope of the budget line is set by the <em>ratio</em> of the two prices. Income changes how much can be bought in total without touching that ratio, so the line moves out bodily and stays parallel.",
      why: {
        1: "Pivoting is what a change in one good's price does: it alters the price ratio, so the slope changes.",
        2: "Same objection &mdash; a change in slope requires relative prices to move, and here they haven't.",
        3: "Relative prices are indeed unchanged, but the affordable <em>set</em> has grown. The line moves; only its slope stays put.",
      },
    },
    {
      id: "cb2-m04-d04", type: "mcq", module: "m04",
      q: "Diminishing marginal utility means that, as a consumer consumes more of a good:",
      options: [
        "total utility from the good falls",
        "each additional unit adds less satisfaction than the one before",
        "total utility stays constant however much is consumed",
        "marginal utility immediately becomes negative",
      ],
      correct: 1,
      explain: "It's a statement about the <em>increments</em>, not the total. Total utility usually keeps rising while marginal utility falls &mdash; each extra slice of cake is still enjoyable, just less so than the last. That's also why demand curves slope downward: later units are worth less, so buyers will only take them at a lower price.",
      why: {
        0: "Confusing total with marginal is the standard error here. Total utility continues to rise as long as marginal utility remains positive; it only falls once marginal utility turns negative.",
        2: "Constant total utility would mean extra units add nothing at all, i.e. marginal utility of zero throughout &mdash; a much stronger claim.",
        3: "Marginal utility can eventually go negative (one cake too many), but &lsquo;diminishing&rsquo; only says it's falling, not that it has already passed zero.",
      },
    },
    {
      id: "cb2-m04-d05", type: "multi", module: "m04",
      q: "Which of the following are departures from the standard rational-choice model that behavioural economics highlights? Select all that apply.",
      options: [
        "Anchoring on an initial price when judging whether a later price is good value",
        "Herd behaviour: copying what others are doing rather than evaluating independently",
        "Overweighting recent or vivid information when assessing risk",
        "Choosing the affordable bundle that reaches the highest indifference curve",
      ],
      correct: [0, 1, 2],
      explain: "The first three are heuristics and biases &mdash; mental shortcuts that are quick but produce systematic, predictable errors. The fourth is not a departure at all: it <em>is</em> the standard model, the textbook description of a fully rational consumer optimising under a budget constraint.",
    },
    {
      id: "cb2-m04-d06", type: "cloze", module: "m04",
      text: "Two indifference curves for the same consumer can never {{0}}, because that would imply the consumer ranks the same pair of bundles {{1}}.",
      blanks: [
        { answer: "intersect", options: ["intersect", "slope downward", "be convex", "lie parallel"] },
        { answer: "inconsistently", options: ["inconsistently", "identically", "transitively", "rationally"] },
      ],
      explain: "At a crossing point the bundle would sit on two curves at once, implying it is both equally good as, and strictly better than, some third bundle. That contradicts the assumption of consistent, transitive preferences the whole model is built on &mdash; which is why non-crossing isn't an extra rule but a direct consequence of rationality.",
    },

    /* ---------- m05 Background to supply ---------- */
    {
      id: "cb2-m05-d01", type: "mcq", module: "m05",
      q: "In the short run, a firm should shut down production when price falls below:",
      options: [
        "average variable cost",
        "average total cost",
        "marginal cost",
        "average fixed cost",
      ],
      correct: 0,
      explain: "Fixed costs are owed whether or not the firm produces, so they're irrelevant to the decision. What matters is whether revenue covers the costs production actually adds. Above average variable cost, every unit sold makes some contribution toward the fixed costs; below it, producing makes the loss worse than closing.",
      why: {
        1: "Below average total cost the firm is making a loss &mdash; but while price still exceeds average variable cost, carrying on loses <em>less</em> than shutting down, because it still contributes something to fixed costs. This is the classic trap in the question.",
        2: "Marginal cost determines how much to produce once the firm has decided to produce at all. It's the wrong comparison for the shut-down decision itself.",
        3: "Average fixed cost is precisely what the decision should ignore, because it is unavoidable in the short run.",
      },
    },
    {
      id: "cb2-m05-d02", type: "mcq", module: "m05",
      q: "The law of diminishing marginal returns applies:",
      options: [
        "only in the long run, once every input can be varied",
        "in the short run, when more of a variable input is added to a fixed input",
        "whenever a firm's average cost is rising for any reason",
        "only to firms already enjoying economies of scale",
      ],
      correct: 1,
      explain: "Diminishing returns needs something to be fixed &mdash; extra workers crowding a factory of a given size &mdash; so it is inherently a short-run idea. Adding more of the variable input eventually raises output by smaller and smaller amounts.",
      why: {
        0: "With all inputs variable you're in the long run, where the corresponding idea is <em>diseconomies of scale</em>. The two are routinely confused; the giveaway is whether anything is being held fixed.",
        2: "Average cost can rise for several reasons. Diminishing returns is one specific short-run mechanism, not a label for rising costs generally.",
        3: "Economies of scale are a long-run phenomenon and unrelated to whether diminishing returns applies.",
      },
    },
    {
      id: "cb2-m05-d03", type: "mcq", module: "m05",
      q: "A very large firm expands further and finds its long-run average cost rising. This is best described as:",
      options: [
        "diseconomies of scale",
        "the law of diminishing marginal returns",
        "reaching the short-run shut-down point",
        "marginal cost pricing",
      ],
      correct: 0,
      explain: "In the long run every input can be scaled up, so nothing is fixed and diminishing returns cannot be the cause. Rising average cost at large scale instead comes from the organisation itself: communication, coordination and management get harder as the firm grows.",
      why: {
        1: "Diminishing returns requires a fixed input, which makes it short-run. The question specifies a firm expanding its whole scale of operation. This pairing is the mirror image of the previous question, and worth being able to separate in both directions.",
        2: "The shut-down point is about whether to produce at all when price is low, not about costs rising with scale.",
        3: "Marginal cost pricing is a pricing rule, not an explanation of a cost curve's shape.",
      },
    },
    {
      id: "cb2-m05-d04", type: "mcq", module: "m05",
      q: "Which of the following is a <em>fixed</em> cost in the short run?",
      options: [
        "Annual rent on the firm's premises",
        "Raw materials consumed in production",
        "Hourly wages paid to temporary production staff",
        "Electricity used to run the machines while producing",
      ],
      correct: 0,
      explain: "A fixed cost doesn't vary with the level of output over the short run: the rent is the same whether the factory runs flat out or stands idle. The others all scale with how much is produced, which is what makes them variable.",
      why: {
        1: "Materials are consumed in proportion to output &mdash; the textbook variable cost.",
        2: "Hours can be adjusted up and down with production, so the wage bill for temporary staff varies with output.",
        3: "Running machines longer to produce more uses more electricity, so it varies with output.",
      },
    },
    {
      id: "cb2-m05-d05", type: "multi", module: "m05",
      q: "Which of the following help explain <em>economies</em> of scale? Select all that apply.",
      options: [
        "Bulk-buying discounts negotiated on inputs",
        "Specialisation and division of labour as the workforce grows",
        "Spreading fixed costs across a larger volume of output",
        "Communication and coordination becoming harder as the firm grows",
      ],
      correct: [0, 1, 2],
      explain: "The first three all push average cost <em>down</em> as scale rises: better input prices, more productive workers, and fixed overheads shared over more units. The last is the standard cause of <em>dis</em>economies of scale, which is what eventually turns the long-run average cost curve back upward.",
    },
    {
      id: "cb2-m05-d06", type: "cloze", module: "m05",
      text: "{{0}} cost is the extra cost of producing one more unit of output, whereas {{1}} cost is total cost divided by the number of units produced. A profit-maximising firm chooses the output at which marginal cost equals marginal {{2}}.",
      blanks: [
        { answer: "Marginal", options: ["Marginal", "Average", "Fixed", "Total"] },
        { answer: "average", options: ["average", "variable", "sunk", "opportunity"] },
        { answer: "revenue", options: ["revenue", "utility", "product", "profit"] },
      ],
      explain: "The profit-maximising rule in the last clause holds for every firm in every market structure &mdash; what differs between perfect competition and monopoly is only what marginal revenue looks like. A common slip is to write &lsquo;marginal profit&rsquo;: profit is maximised where <em>marginal profit is zero</em>, which is the same condition stated less usefully.",
    },

    /* ---------- m06 Perfect competition and monopoly ---------- */
    {
      id: "cb2-m06-d01", type: "mcq", module: "m06",
      q: "A firm in perfect competition faces a perfectly horizontal demand curve. What does that imply about its marginal revenue?",
      options: [
        "Marginal revenue equals price at every level of output",
        "Marginal revenue lies below price and falls twice as steeply as demand",
        "Marginal revenue is zero at every level of output",
        "Marginal revenue rises as output rises",
      ],
      correct: 0,
      explain: "If the firm can sell any quantity it likes at the going price, each extra unit adds exactly that price to revenue &mdash; so MR = AR = P, and the MR curve sits on top of the demand curve. This is why the profit-maximising condition MR = MC collapses to P = MC in perfect competition, which is also the condition for allocative efficiency.",
      why: {
        1: "That describes the <em>monopolist's</em> MR curve, which lies below its downward-sloping demand curve. It's the single most common mix-up in this module &mdash; check which market structure the question is describing before reaching for the MR curve.",
        2: "MR is zero at the output where total revenue is maximised on a downward-sloping demand curve &mdash; again a monopoly result, and not one that applies at every output even there.",
        3: "Rising MR would mean each extra unit sold earns more than the last, which no standard demand curve produces.",
      },
    },
    {
      id: "cb2-m06-d02", type: "mcq", module: "m06",
      q: "A monopolist maximises profit by producing at the output where:",
      options: [
        "price equals marginal cost",
        "marginal revenue equals marginal cost",
        "average cost is at its minimum",
        "marginal revenue equals price",
      ],
      correct: 1,
      explain: "MR = MC is the profit-maximising rule for <em>any</em> firm. What makes monopoly different is the second step: price is then read off the demand curve <em>above</em> that output, so price exceeds marginal cost and the outcome is allocatively inefficient.",
      why: {
        0: "P = MC is the condition for <em>allocative efficiency</em>, which a monopolist specifically fails. It happens to coincide with profit maximisation under perfect competition, which is why the two get conflated.",
        2: "Producing at minimum average cost is <em>productive efficiency</em>. A monopolist has no competitive pressure forcing it there, and in any case producing efficiently isn't the same as maximising profit.",
        3: "MR = P only holds for a price-taker facing a flat demand curve. A monopolist's MR is strictly below its price at every positive output.",
      },
    },
    {
      id: "cb2-m06-d03", type: "mcq", module: "m06",
      q: "A firm is producing at the lowest point of its long-run average cost curve. Which form of efficiency has it achieved?",
      options: ["Allocative efficiency", "Productive efficiency", "Social efficiency", "Dynamic efficiency"],
      correct: 1,
      explain: "Productive efficiency is about cost: getting the maximum output from the inputs used, which happens at minimum average cost. Perfect competition forces firms there in the long run because any firm producing at higher cost is undercut and driven out.",
      why: {
        0: "Allocative efficiency is about <em>what</em> gets produced, not how cheaply &mdash; it's the condition P = MC, where the value consumers place on the last unit equals what it cost to make.",
        2: "Social efficiency is the wider condition marginal social benefit = marginal social cost, which brings in externalities. A firm can be productively efficient while still polluting heavily.",
        3: "Dynamic efficiency is about innovation and cost reduction <em>over time</em> &mdash; the argument sometimes made in monopoly's defence, since supernormal profit can fund R&amp;D.",
      },
    },
    {
      id: "cb2-m06-d04", type: "mcq", module: "m06",
      q: "A water network is described as a natural monopoly. Which feature best explains that description?",
      options: [
        "A government licence gives the incumbent exclusive rights to operate",
        "Fixed costs are so high that one firm can serve the whole market more cheaply than two",
        "The incumbent priced below cost until its rivals left the market",
        "Consumers regard every supplier's product as identical",
      ],
      correct: 1,
      explain: "The word doing the work is <em>natural</em>: the monopoly arises from the cost structure itself, not from anyone's conduct or from the law. Duplicating a pipe network would double the fixed cost to serve the same customers, so one supplier really is cheaper.",
      why: {
        0: "A licence is a <em>legal</em> barrier to entry. It might well also be present here, but it's not what makes the monopoly natural &mdash; a natural monopoly would persist even if entry were legally free.",
        2: "That's predatory pricing: a deliberate strategy to deter entry, not a feature of the cost curves.",
        3: "Homogeneity is a feature of perfect competition, and it says nothing about the number of firms a market can support at low cost.",
      },
    },
    {
      id: "cb2-m06-d05", type: "mcq", module: "m06",
      q: "An incumbent is the only firm in its market, yet prices close to average cost and earns little supernormal profit. Which explanation is most consistent with the theory of contestable markets?",
      options: [
        "The firm faces a horizontal demand curve",
        "Entry and exit are cheap, so the threat of new entrants disciplines the incumbent's pricing",
        "The firm is legally prevented from raising its price",
        "The firm is productively efficient, so its costs are already minimised",
      ],
      correct: 1,
      explain: "Contestability shifts the focus from how many firms are <em>in</em> a market to how easily others could enter it. With no sunk costs, a price rise would invite hit-and-run entry, so the incumbent prices as if rivals were already there. The lesson for exam answers: don't infer market power from concentration alone.",
      why: {
        0: "A single firm supplying the whole market faces the market demand curve, which slopes downward. A horizontal firm-level demand curve is the perfect-competition case.",
        2: "That's price regulation &mdash; an external constraint. Contestability produces competitive pricing without a regulator having to impose it, which is precisely why the idea is interesting.",
        3: "Productive efficiency concerns the level of costs; it puts no ceiling on the margin a firm can add on top of them.",
      },
    },
    {
      id: "cb2-m06-d06", type: "multi", module: "m06",
      q: "Which of the following are barriers to entry? Select all that apply.",
      options: [
        "High start-up capital costs",
        "A patent held by the incumbent",
        "Substantial economies of scale available to the incumbent",
        "A product that consumers regard as homogeneous",
      ],
      correct: [0, 1, 2],
      explain: "Barriers to entry are anything making it hard or costly for a new firm to start competing &mdash; they can be structural (start-up costs, scale economies) or legal (patents, licences). Product homogeneity is the odd one out: it's a defining feature of perfect competition, a market structure characterised by the <em>absence</em> of entry barriers.",
    },
    {
      id: "cb2-m06-d07", type: "cloze", module: "m06",
      text: "In perfect competition, free entry competes supernormal profit away until price equals {{0}}. At that point firms earn only {{1}} profit, and each is producing at the lowest point of its average cost curve.",
      blanks: [
        { answer: "average cost", options: ["average cost", "marginal revenue", "average revenue plus a margin", "total cost"] },
        { answer: "normal", options: ["normal", "supernormal", "zero total", "monopoly"] },
      ],
      explain: "Long-run equilibrium under perfect competition drives price down to minimum average cost. &lsquo;Normal profit&rsquo; is the return just sufficient to keep the firm in the industry &mdash; it's counted as a cost, which is why a firm earning normal profit is neither expanding nor exiting. Writing &lsquo;zero profit&rsquo; instead of &lsquo;normal profit&rsquo; is a reliable way to lose a mark.",
    },

    /* ---------- m07 Monopolistic competition and oligopoly ---------- */
    {
      id: "cb2-m07-d01", type: "mcq", module: "m07",
      q: "What is the kinked demand curve model used to explain?",
      options: [
        "Why prices in an oligopoly tend to be sticky",
        "Why a monopolist restricts output below the competitive level",
        "Why firms in perfect competition are price-takers",
        "Why cartel agreements are illegal in most jurisdictions",
      ],
      correct: 0,
      explain: "The model assumes rivals match a price cut (so cutting wins little extra volume) but ignore a price rise (so raising price loses a lot of volume). Both moves look unattractive, which leaves the firm sitting at its current price even when costs shift &mdash; the stickiness the model sets out to explain.",
      why: {
        1: "Monopoly output restriction follows from a downward-sloping demand curve and MR = MC; no kink is needed, and there are no rivals whose reactions could create one.",
        2: "Price-taking comes from each firm being tiny relative to the market, which gives it a flat demand curve rather than a kinked one.",
        3: "The model is a piece of positive analysis about pricing behaviour. Whether collusion is lawful is a separate question of competition policy.",
      },
    },
    {
      id: "cb2-m07-d02", type: "mcq", module: "m07",
      q: "Why are collusive agreements between oligopolists typically unstable?",
      options: [
        "Each member can gain by secretly undercutting the agreed price",
        "Members usually have identical costs, so none of them can profit",
        "Consumers refuse to buy at the agreed price",
        "Competition law makes it impossible for firms to attempt collusion",
      ],
      correct: 0,
      explain: "This is the prisoner's dilemma applied to pricing. The firms are jointly better off holding the agreed high price, but each individually does better by shading its price and taking share &mdash; and since every member reasons that way, the agreement tends to unravel from the inside.",
      why: {
        1: "Identical costs make collusion <em>easier</em> to agree, not impossible to profit from. The joint profit from restricting output is what makes the agreement attractive in the first place.",
        2: "Consumers may dislike the price, but in a concentrated market they often have nowhere else to go. Instability comes from the members, not the buyers.",
        3: "Collusion is illegal in most jurisdictions, but firms plainly still attempt it &mdash; that's why competition authorities exist. Illegality is a separate reason cartels collapse, not the internal incentive the question is after.",
      },
    },
    {
      id: "cb2-m07-d03", type: "mcq", module: "m07",
      q: "In long-run equilibrium, a firm in monopolistic competition earns:",
      options: [
        "normal profit, because free entry competes any supernormal profit away",
        "supernormal profit, protected by its product differentiation",
        "a loss, because it operates with excess capacity",
        "normal profit, because it produces at minimum average cost",
      ],
      correct: 0,
      explain: "Differentiation gives the firm a downward-sloping demand curve and some short-run pricing power, but it doesn't keep rivals out. Entry continues until the demand curve has shifted in far enough to be tangent to average cost, at which point only normal profit remains.",
      why: {
        1: "Differentiation is not a barrier to entry: a new firm can launch its own differentiated version. That's exactly what distinguishes monopolistic competition from monopoly.",
        2: "The firm does end up with excess capacity &mdash; producing below the output that minimises average cost &mdash; but at the tangency it still covers its costs. Excess capacity and losses are not the same thing.",
        3: "Right answer, wrong reason, which makes this the most tempting option. The firm does <em>not</em> reach minimum average cost: tangency to a downward-sloping demand curve happens on the falling part of the average cost curve. That gap is the excess-capacity result.",
      },
    },
    {
      id: "cb2-m07-d04", type: "mcq", module: "m07",
      q: "What does it mean to say that firms in an oligopoly are <em>interdependent</em>?",
      options: [
        "Each firm's best decision depends on how it expects rivals to react",
        "They are legally required to charge one another the same price",
        "They share common ownership or directors",
        "Each of them faces a perfectly elastic demand curve",
      ],
      correct: 0,
      explain: "With only a few large players, one firm's price or output move visibly changes the others' payoffs, so nobody can choose in isolation. That's why oligopoly is analysed with game theory, where the right move depends on what you expect everyone else to do.",
      why: {
        1: "No such requirement exists &mdash; coordinating prices is generally what competition law prohibits.",
        2: "Shared ownership would make them one firm. Interdependence is about strategic reactions between genuinely separate competitors.",
        3: "A perfectly elastic (flat) demand curve is the price-taker's, which is perfect competition. If each oligopolist faced one, rivals' reactions would be irrelevant &mdash; the opposite of interdependence.",
      },
    },
    {
      id: "cb2-m07-d05", type: "multi", module: "m07",
      q: "Which of the following are characteristics of monopolistic competition? Select all that apply.",
      options: [
        "A large number of relatively small firms",
        "Products that are differentiated rather than identical",
        "Freedom of entry to and exit from the market",
        "Substantial barriers protecting incumbents from entry",
      ],
      correct: [0, 1, 2],
      explain: "Monopolistic competition borrows from both neighbours: many firms and free entry, as in perfect competition, but differentiated products, which give each firm a little pricing power. Substantial entry barriers are what define monopoly and sustain supernormal profit &mdash; their absence here is exactly why long-run profit gets competed back to normal.",
    },
    {
      id: "cb2-m07-d06", type: "cloze", module: "m07",
      text: "Under the kinked demand curve model, rivals are assumed to {{0}} a price cut but to {{1}} a price rise. Neither move is attractive, so prices in the market tend to be {{2}}.",
      blanks: [
        { answer: "match", options: ["match", "welcome", "subsidise", "undercut"] },
        { answer: "ignore", options: ["ignore", "copy", "follow", "reward"] },
        { answer: "sticky", options: ["sticky", "volatile", "continuously rising", "driven to zero"] },
      ],
      explain: "Work through both halves. Cutting price wins little, because rivals cut too and the firm keeps roughly its old share at a lower margin. Raising price loses a lot, because rivals stay put and customers defect. The demand curve is therefore far more elastic above the current price than below it, which is the kink.",
    },

    /* ---------- m08 Pricing strategies ---------- */
    {
      id: "cb2-m08-d01", type: "mcq", module: "m08",
      q: "A cinema charges under-16s a lower price than adults for exactly the same screening. This is an example of:",
      options: [
        "third-degree price discrimination",
        "first-degree price discrimination",
        "second-degree price discrimination",
        "predatory pricing",
      ],
      correct: 0,
      explain: "Third-degree discrimination means charging different prices to different <em>identifiable groups</em> &mdash; here by age, verified at the door. It needs the groups to be separable and to differ in price elasticity, both of which hold: age is checkable, a ticket can't be resold on, and younger customers are more price-sensitive.",
      why: {
        1: "First-degree means charging every individual customer the most they personally would pay. A single published under-16 price treats a whole group alike, not each person individually.",
        2: "Second-degree means prices varying with quantity or version bought &mdash; bulk discounts, or a premium tier &mdash; and the customer self-selects. Here the cinema sorts customers by who they are, not by what they choose.",
        3: "Predatory pricing means pricing below cost to force rivals out of the market. A youth discount is about extracting more revenue from a wider audience, not about attacking a competitor.",
      },
    },
    {
      id: "cb2-m08-d02", type: "mcq", module: "m08",
      q: "For price discrimination between two customer groups to be profitable, the firm needs:",
      options: [
        "separable groups that differ in their price elasticity of demand",
        "two groups with identical price elasticities of demand",
        "a homogeneous product sold in a perfectly competitive market",
        "to set price equal to marginal cost in each of the two markets",
      ],
      correct: 0,
      explain: "Two conditions, and full marks usually need both. Separability, so the groups can be told apart and the cheaper units can't be resold to the dearer group. Different elasticities, so there is something to gain: the firm charges more where demand is less responsive and less where it is more responsive.",
      why: {
        1: "Identical elasticities mean the same price is optimal in both markets, so there's no gain from separating them at all.",
        2: "Perfect competition leaves the firm as a price-taker with no power to set different prices. Discrimination needs some market power.",
        3: "Pricing at marginal cost everywhere is the competitive, allocatively efficient outcome &mdash; the opposite of what a discriminating firm does.",
      },
    },
    {
      id: "cb2-m08-d03", type: "mcq", module: "m08",
      q: "A firm launches a new gadget at a deliberately high price aimed at eager early adopters, then reduces it in stages over the following year. This strategy is:",
      options: ["price skimming", "penetration pricing", "cost-plus pricing", "peak-load pricing"],
      correct: 0,
      explain: "Skimming works down the demand curve over time: capture the buyers with the highest willingness to pay first, then cut price to reach successively more price-sensitive segments. It suits products where early adopters are impatient and the firm has some protection from immediate imitation.",
      why: {
        1: "Penetration pricing is the mirror strategy &mdash; a low launch price to build share fast, possibly raising it later. The price path runs the other way.",
        2: "Cost-plus sets price as average cost plus a margin. It's driven by the firm's costs, which here aren't falling in the pattern the price is.",
        3: "Peak-load pricing varies price by <em>time of use</em> to manage capacity at busy periods, not by stage of the product's life.",
      },
    },
    {
      id: "cb2-m08-d04", type: "mcq", module: "m08",
      q: "What is the principal limitation of pure cost-plus pricing?",
      options: [
        "It ignores demand conditions and what rivals are charging",
        "It cannot recover the firm's fixed costs",
        "It is prohibited under competition law in most markets",
        "It requires the firm to know each customer's willingness to pay",
      ],
      correct: 0,
      explain: "Cost-plus looks only inward. Because the margin is applied mechanically to cost, the resulting price can sit well above what the market will bear (losing volume) or well below what customers would happily pay (leaving money on the table). Its virtue is simplicity, which is why it survives despite this.",
      why: {
        1: "It can recover fixed costs perfectly well &mdash; the &lsquo;cost&rsquo; in cost-plus is normally <em>average</em> cost, which already includes a share of fixed costs.",
        2: "There is nothing unlawful about it. Predatory pricing and collusion attract legal attention; adding a margin to your own costs does not.",
        3: "That's the demanding requirement of <em>first-degree price discrimination</em>. Cost-plus needs no knowledge of customers at all &mdash; which is precisely the criticism.",
      },
    },
    {
      id: "cb2-m08-d05", type: "multi", module: "m08",
      q: "Which of the following are forms of price discrimination? Select all that apply.",
      options: [
        "Charging students less than other adults for the same service",
        "Negotiating a bespoke price with each individual buyer, as high as each will accept",
        "Offering a lower price per unit on larger pack sizes",
        "Pricing an item at &pound;9.99 rather than &pound;10.00",
      ],
      correct: [0, 1, 2],
      explain: "One example of each degree: third (identifiable groups), first (each individual's maximum), and second (price varying with quantity, customer self-selecting). The odd one out is psychological pricing &mdash; every customer still pays the same &pound;9.99, so no discrimination is taking place; it's a presentation trick, not a segmentation strategy.",
    },
    {
      id: "cb2-m08-d06", type: "cloze", module: "m08",
      text: "Setting a deliberately low launch price to win market share quickly is called {{0}} pricing. Setting a deliberately high launch price to capture buyers with the greatest willingness to pay is called price {{1}}. Both are decisions about where on the demand curve to start, rather than about {{2}}.",
      blanks: [
        { answer: "penetration", options: ["penetration", "predatory", "psychological", "cost-plus"] },
        { answer: "skimming", options: ["skimming", "bundling", "peak-load", "limit"] },
        { answer: "cost", options: ["cost", "quality", "branding", "capacity"] },
      ],
      explain: "The contrast in the last clause is the point worth carrying into an exam answer: both strategies are demand-led, chosen by reading what different buyers will pay and when. That is what separates them from cost-plus, which starts from the firm's own cost base and never looks at the demand curve at all.",
    },

    /* ---------- m09 Market failure and government intervention ---------- */
    {
      id: "cb2-m09-d01", type: "mcq", module: "m09",
      q: "A factory's emissions impose health costs on nearby residents, who are neither consulted nor compensated. With no government intervention, the market will:",
      options: [
        "over-produce, because marginal social cost exceeds marginal private cost",
        "under-produce, because marginal social benefit exceeds marginal private benefit",
        "produce exactly the socially efficient quantity",
        "under-produce, because the good is non-excludable",
      ],
      correct: 0,
      explain: "The firm prices on the costs it actually bears, so the external cost never reaches the price. Social cost sits above private cost, the socially efficient output is below the market output, and the gap is the welfare loss a Pigouvian tax is designed to close.",
      why: {
        1: "That's the <em>positive</em> externality case &mdash; education or vaccination, where the third-party effect is a benefit and the market does too little. Check the sign of the externality before choosing a direction.",
        2: "The market only lands on the social optimum when private and social costs coincide, which is exactly what an uncompensated external cost rules out.",
        3: "Non-excludability describes a <em>public good</em>. Pollution from a factory is an externality attached to an ordinary private good, which is a different failure with a different remedy.",
      },
    },
    {
      id: "cb2-m09-d02", type: "mcq", module: "m09",
      q: "Street lighting is under-provided by private firms mainly because it is:",
      options: [
        "a merit good, whose benefits consumers systematically undervalue",
        "non-excludable, so those who do not pay cannot be stopped from benefiting",
        "subject to a negative externality imposed on passers-by",
        "a natural monopoly best supplied by a single firm",
      ],
      correct: 1,
      explain: "Non-excludability destroys the business model: a firm cannot switch the light off for non-payers, so nobody has an incentive to pay and no private supplier can cover its costs. Non-rivalry compounds it &mdash; one person's use doesn't diminish anyone else's &mdash; but free-riding is the reason provision fails.",
      why: {
        0: "Merit goods (education, healthcare) <em>are</em> under-consumed because people undervalue them, but they can be sold and withheld. The failure here isn't misjudged demand, it's that payment can't be enforced at all.",
        2: "Street lighting generates positive spillovers if anything. A negative externality would mean over-, not under-, provision.",
        3: "Natural monopoly explains why one firm might supply a market, not why no firm wants to supply it.",
      },
    },
    {
      id: "cb2-m09-d03", type: "mcq", module: "m09",
      q: "A good is consumed in greater quantities than the social optimum because consumers underestimate the harm it does to them. This describes:",
      options: ["a merit good", "a demerit good", "a public good", "an inferior good"],
      correct: 1,
      explain: "Merit and demerit goods are both information failures: consumers misjudge the value. The direction is the distinguishing feature &mdash; merit goods are under-consumed because the benefits are undervalued, demerit goods over-consumed because the costs are undervalued.",
      why: {
        0: "A merit good runs the other way: under-consumed, because its benefits are undervalued. Education is the standard example.",
        2: "A public good is defined by non-excludability and non-rivalry, not by consumers misjudging it.",
        3: "An inferior good is one whose demand <em>falls as income rises</em> &mdash; a demand-side classification from the supply and demand modules, with nothing to say about social optimality.",
      },
    },
    {
      id: "cb2-m09-d04", type: "mcq", module: "m09",
      q: "Under the Coase theorem, private parties can resolve an externality efficiently without government intervention, provided that:",
      options: [
        "the government first sets a tax equal to the external cost",
        "property rights are clearly defined and transaction costs are low",
        "the good in question is non-rival and non-excludable",
        "the parties involved have identical preferences",
      ],
      correct: 1,
      explain: "Coase's insight is that an externality is really a missing market. Define who owns the right &mdash; to pollute, or to clean air &mdash; and let the parties trade it, and they will bargain to the efficient outcome regardless of who was given the right initially. The practical limitation is the second condition: with many affected parties, transaction costs are rarely low, which is why governments still intervene.",
      why: {
        0: "A Pigouvian tax is the <em>alternative</em> to Coasean bargaining. The whole point of the theorem is reaching efficiency without it.",
        2: "Those are the properties of a public good, and they make bargaining <em>harder</em>, not possible &mdash; you can't trade a right you cannot exclude anyone from.",
        3: "Identical preferences aren't required and would remove the gains from trade that make bargaining work.",
      },
    },
    {
      id: "cb2-m09-d05", type: "mcq", module: "m09",
      q: "Which of the following best describes regulatory capture?",
      options: [
        "A regulator lacking the information needed to set a tax at the right level",
        "A regulator coming to act in the interests of the industry it oversees rather than the public",
        "A government setting a quota tighter than the socially optimal level",
        "Firms relocating overseas to escape domestic regulation",
      ],
      correct: 1,
      explain: "Capture is a failure of <em>incentives and independence</em>, not of competence: the regulator's staff, information and career prospects often come from the industry, so its perspective drifts. It's one of the standard arguments that intervention can leave the outcome no better than the market failure it was meant to fix.",
      why: {
        0: "That's imperfect information &mdash; also a form of government failure, and a tempting answer, but it describes a regulator trying and failing to get it right, not one whose objective has shifted.",
        2: "A mis-set quota is a calibration error, again distinct from whose interests the regulator is serving.",
        3: "Regulatory arbitrage is a firm's response to regulation, not a description of the regulator.",
      },
    },
    {
      id: "cb2-m09-d06", type: "multi", module: "m09",
      q: "A government wants to reduce the output of an industry generating a negative externality. Which of the following would move output toward the social optimum? Select all that apply.",
      options: [
        "A tax on each unit of the activity",
        "A cap-and-trade emissions permit scheme",
        "A quota limiting the industry's output",
        "A per-unit subsidy paid to producers",
      ],
      correct: [0, 1, 2],
      explain: "Taxes and tradable permits work through price, quotas through quantity, but all three raise the private cost of the activity or cap it directly. A subsidy does the opposite &mdash; it lowers private cost and <em>increases</em> output, which is the correct tool for a <em>positive</em> externality. Matching the instrument to the sign of the externality is the thing examiners check.",
    },
    {
      id: "cb2-m09-d07", type: "cloze", module: "m09",
      text: "A subsidy paid on a good with positive externalities works by lowering the {{0}} price faced by consumers, which {{1}} the quantity traded and moves it toward the social optimum.",
      blanks: [
        { answer: "effective", options: ["effective", "world", "shadow", "nominal wholesale"] },
        { answer: "increases", options: ["increases", "reduces", "leaves unchanged", "destabilises"] },
      ],
      explain: "Positive externality means the market under-produces, so the corrective instrument must push quantity <em>up</em>. A subsidy does that by driving a wedge the other way from a tax: buyers pay less than producers receive. Getting the direction wrong &mdash; proposing a tax to fix under-provision &mdash; is a common and expensive slip.",
    },
    /* ---------- m10 The macroeconomic environment ---------- */
    {
      id: "cb2-m10-d01", type: "mcq", module: "m10",
      q: "In the expenditure approach, aggregate demand is made up of:",
      options: [
        "C + I + G + (X &minus; M)",
        "C + I + G + X + M",
        "C + S + T",
        "C + I + G &minus; T",
      ],
      correct: 0,
      explain: "Consumption, investment, government spending and net exports. Imports are subtracted because they are spending on goods produced <em>abroad</em> &mdash; they have already been counted inside C, I and G, so without the deduction domestic output would be overstated.",
      why: {
        1: "Adding imports rather than subtracting them double-counts foreign output as though it were domestic. This is the most common slip in writing the identity out.",
        2: "Consumption plus saving plus taxes is how households <em>dispose</em> of income, not how spending on output is composed. Saving and taxation are withdrawals from the circular flow.",
        3: "Subtracting taxes confuses a withdrawal with net exports. Government spending appears as G in its own right; taxes belong to the income side of the circular flow.",
      },
    },
    {
      id: "cb2-m10-d02", type: "mcq", module: "m10",
      q: "A sharp rise in world oil prices feeds through to the general price level. The inflation this produces is best described as:",
      options: [
        "cost-push inflation",
        "demand-pull inflation",
        "stagflation",
        "a rise in potential output",
      ],
      correct: 0,
      explain: "The impulse comes from the supply side: an input has become dearer, so producing any given output costs more and firms pass it on. On an AS&ndash;AD diagram, short-run aggregate supply shifts left, raising the price level while reducing output &mdash; which is the signature of a cost-push shock.",
      why: {
        1: "Demand-pull inflation arises when aggregate demand outruns the economy's capacity. That would raise output and prices together, whereas a cost shock raises prices while output falls.",
        2: "Stagflation names the whole macroeconomic <em>situation</em> &mdash; high inflation alongside stagnant output and high unemployment. An oil shock is a classic cause of it, but the question asks what type of inflation this is, and cost-push is the mechanism producing the stagflation.",
        3: "A supply shock does the opposite: it makes the economy's productive capacity more expensive to use, if anything reducing potential output rather than raising it.",
      },
    },
    {
      id: "cb2-m10-d03", type: "mcq", module: "m10",
      q: "Why is long-run aggregate supply usually drawn as a vertical line?",
      options: [
        "Because output depends on real resources and technology, not on the price level",
        "Because nominal wages and prices are fixed and cannot adjust in the long run",
        "Because aggregate demand is itself vertical once the long run is reached",
        "Because the general price level stops changing once the long run is reached",
      ],
      correct: 0,
      explain: "In the long run, what an economy can produce depends on its labour, capital, skills and technology &mdash; real things. Doubling every price and wage leaves all of those untouched, so output is unchanged. The practical consequence is that demand-side policy shifts the price level rather than long-run output.",
      why: {
        1: "It is the reverse: wages and prices are assumed <em>sticky in the short run</em> and fully flexible in the long run. That flexibility is what makes the long-run curve vertical.",
        2: "Aggregate demand slopes downward at every horizon, and it certainly still shifts in the long run. The point of a vertical supply curve is that when demand moves, the price level changes and output does not.",
        3: "The price level is the variable on the vertical axis and is free to take any value. A vertical supply curve says output is the same <em>whatever</em> the price level, which is a different claim.",
      },
    },
    {
      id: "cb2-m10-d04", type: "mcq", module: "m10",
      q: "Why is GDP considered an imperfect measure of a country's economic welfare?",
      options: [
        "It omits unpaid work, says nothing about distribution, and ignores environmental damage",
        "It is measured at current prices and so always overstates real growth",
        "It counts only government spending and excludes private activity",
        "It cannot be compared between one period and another",
      ],
      correct: 0,
      explain: "GDP measures the value of recorded output, which is not the same as wellbeing. Housework and caring go uncounted, the same GDP can be shared very evenly or very unevenly, and activity that degrades the environment adds to GDP while reducing welfare. Knowing these limits is what separates a good answer from reciting the definition.",
      why: {
        1: "That describes the nominal-versus-real distinction, which is a measurement issue with a standard fix: deflate by a price index. It's a real limitation of <em>nominal</em> GDP, not the welfare critique.",
        2: "Government spending is only one component; GDP also captures consumption, investment and net exports.",
        3: "Comparing periods is one of the things GDP does best, once adjusted for inflation.",
      },
    },
    {
      id: "cb2-m10-d05", type: "multi", module: "m10",
      q: "Which of the following are components of aggregate demand? Select all that apply.",
      options: [
        "Household consumption",
        "Investment by firms",
        "Government spending on goods and services",
        "Household saving",
      ],
      correct: [0, 1, 2],
      explain: "Aggregate demand is C + I + G + (X &minus; M): four categories of <em>spending</em> on domestic output. Saving is the opposite &mdash; income received but not spent, a withdrawal from the circular flow rather than an injection into it. Injections are investment, government spending and exports; withdrawals are saving, taxation and imports.",
    },
    {
      id: "cb2-m10-d06", type: "cloze", module: "m10",
      text: "The output gap is the difference between {{0}} output and {{1}} output. When it is positive, the economy is running beyond its sustainable capacity and {{2}} pressure tends to build.",
      blanks: [
        { answer: "actual", options: ["actual", "planned", "forecast", "budgeted"] },
        { answer: "potential", options: ["potential", "imported", "disposable", "marginal"] },
        { answer: "inflationary", options: ["inflationary", "deflationary", "downward wage", "exchange rate"] },
      ],
      explain: "Potential output is the most an economy can sustain with its resources fully and efficiently employed, <em>without</em> inflation accelerating. Producing beyond it means bidding for labour and materials that aren't there, which shows up as rising prices &mdash; which is why central banks watch the output gap when setting interest rates.",
    },

    /* ---------- m11 Macroeconomic objectives ---------- */
    {
      id: "cb2-m11-d01", type: "mcq", module: "m11",
      q: "A steelworker loses their job as the industry permanently contracts, and lacks the skills the growing local sectors are hiring for. This is an example of:",
      options: [
        "structural unemployment",
        "frictional unemployment",
        "cyclical unemployment",
        "seasonal unemployment",
      ],
      correct: 0,
      explain: "Structural unemployment comes from a lasting mismatch between the skills or location of workers and the jobs that exist. Two markers point to it here: the contraction is permanent rather than part of a downturn, and the barrier to re-employment is a skills gap. Retraining, not demand stimulus, is the remedy.",
      why: {
        1: "Frictional unemployment is short-term and transitional &mdash; someone between two jobs they are perfectly qualified for. There's no skills mismatch involved, and it resolves itself quickly.",
        2: "Cyclical unemployment is caused by a fall in aggregate demand during a downturn, and reverses when the cycle turns. This industry's decline is described as permanent.",
        3: "Seasonal unemployment follows a predictable annual pattern, like agricultural or tourism work. Nothing here recurs with the calendar.",
      },
    },
    {
      id: "cb2-m11-d02", type: "mcq", module: "m11",
      q: "An economy is said to be at <em>full employment</em> when:",
      options: [
        "only frictional and structural unemployment remain, with no cyclical unemployment",
        "measured unemployment has fallen to zero",
        "the number of job vacancies exactly equals the number of jobseekers",
        "every worker is employed full-time rather than part-time",
      ],
      correct: 0,
      explain: "Full employment does not mean nobody is unemployed. Some people are always between jobs or retraining, and that residue is the <em>natural rate</em> of unemployment. What full employment means is that the cyclical component &mdash; the part caused by deficient demand &mdash; has gone.",
      why: {
        1: "Zero unemployment is neither achievable nor desirable: it would mean nobody was ever moving between jobs, which is how a labour market reallocates workers to where they are most productive.",
        2: "Vacancies matching jobseekers sounds like balance, but mismatched skills or locations mean both can be high at once &mdash; which is exactly what structural unemployment looks like.",
        3: "Part-time work is still employment. Underemployment is a separate concern about the <em>quality</em> of jobs, not about whether the economy is at full employment.",
      },
    },
    {
      id: "cb2-m11-d03", type: "mcq", module: "m11",
      q: "Nominal GDP rose by 5% over a year in which the general price level rose by 3%. Real GDP grew by approximately:",
      options: ["2%", "5%", "8%", "1.7%"],
      correct: 0,
      explain: "Real growth strips out the part of the increase that is only higher prices: roughly 5% &minus; 3% = 2%. (The exact figure is 1.05/1.03 &minus; 1 = 1.94%, and the subtraction is the standard approximation for small rates.) Only the real figure tells you whether more was actually produced.",
      why: {
        1: "5% is the nominal figure, taken without adjusting for inflation at all. Reporting it as growth in output is the error the real/nominal distinction exists to prevent.",
        2: "8% adds inflation to nominal growth instead of removing it, which inflates the answer twice over.",
        3: "1.7% comes from dividing 5 by 3. The adjustment works on the rates themselves, not on their ratio.",
      },
    },
    {
      id: "cb2-m11-d04", type: "mcq", module: "m11",
      q: "Why can the classic macroeconomic policy objectives come into conflict with one another?",
      options: [
        "Boosting demand to reduce unemployment can simultaneously push inflation up",
        "They are expressed in different units, so they cannot be compared",
        "The balance of payments is unaffected by anything a domestic government does",
        "Each objective is the responsibility of a different government department",
      ],
      correct: 0,
      explain: "This is the central policy trade-off in the macro half of the course. Expansionary policy raises demand, which cuts cyclical unemployment but also raises the price level, especially as the economy nears capacity. Faster growth also tends to suck in imports, worsening the current account &mdash; so three of the four objectives pull against each other.",
      why: {
        1: "Different units are a presentational matter, not a conflict. The conflict is real and causal: acting on one objective moves another in the wrong direction.",
        2: "Domestic policy affects it directly &mdash; stronger demand raises imports, and interest rate changes move the exchange rate and capital flows.",
        3: "In practice the Treasury and central bank between them own all four. Even under one roof the economic trade-off would remain.",
      },
    },
    {
      id: "cb2-m11-d05", type: "multi", module: "m11",
      q: "Which of the following are among the four classic macroeconomic policy objectives? Select all that apply.",
      options: [
        "Sustained economic growth",
        "Low unemployment",
        "Low and stable inflation",
        "A balanced government budget",
      ],
      correct: [0, 1, 2],
      explain: "The fourth objective is a <em>sustainable balance of payments</em>, not a balanced budget &mdash; the two get confused because both involve the word balance, but one is about transactions with the rest of the world and the other about the government's own finances. A balanced budget is at most a means to an end, and deliberately running a deficit in a downturn is orthodox policy.",
    },
    {
      id: "cb2-m11-d06", type: "cloze", module: "m11",
      text: "The {{0}} count measures unemployment by the number of people receiving unemployment-related benefits, while the {{1}} measure counts those who are out of work, available and actively seeking it. The second is usually the {{2}} of the two.",
      blanks: [
        { answer: "claimant", options: ["claimant", "vacancy", "payroll", "census"] },
        { answer: "ILO", options: ["ILO", "OECD", "IMF", "HMRC"] },
        { answer: "higher", options: ["higher", "lower", "more stable", "less reliable"] },
      ],
      explain: "The survey-based ILO measure is normally the larger because plenty of people are genuinely seeking work without being eligible for, or choosing to claim, benefits. Even so, both understate joblessness: neither captures discouraged workers who have given up searching, nor those underemployed in part-time work who want more hours.",
    },

    /* ---------- m12 International trade ---------- */
    {
      id: "cb2-m12-d01", type: "mcq", module: "m12",
      q: "Country A can produce both wheat and cloth using fewer resources than Country B. Can the two countries still gain from trading with each other?",
      options: [
        "Yes, provided their opportunity costs of producing the two goods differ",
        "No, because A holds an absolute advantage in both goods",
        "Yes, but only if B subsidises its own exports to compete",
        "No, unless A imposes a tariff to level the playing field",
      ],
      correct: 0,
      explain: "This is the whole force of Ricardo's argument, and the reason comparative advantage rather than absolute advantage is the basis for trade. Even a country that is worse at everything is <em>relatively</em> less bad at something, and specialising there raises total output. All that's needed is for the opportunity-cost ratios to differ.",
      why: {
        1: "Absolute advantage in both goods is exactly the case the theory is built to address. It's the most common wrong answer precisely because it sounds like common sense.",
        2: "Subsidies distort the pattern of trade; they aren't a precondition for gains. The gains come from the difference in opportunity costs, which exists already.",
        3: "A tariff reduces trade and the gains from it. Protection is a response to trade, never a requirement for it.",
      },
    },
    {
      id: "cb2-m12-d02", type: "mcq", module: "m12",
      q: "A government restricts imports of a good by capping the physical quantity that may enter the country each year. This instrument is a:",
      options: ["quota", "tariff", "subsidy", "customs union"],
      correct: 0,
      explain: "A quota works directly on quantity; a tariff works on price and lets quantity adjust. One practical difference matters for exam answers: a tariff raises revenue for the government, whereas a quota tends to hand the resulting scarcity margin to whoever holds the import licences.",
      why: {
        1: "A tariff is a <em>tax</em> on imports. It raises their price and so reduces the quantity bought, but it sets no ceiling on volume.",
        2: "A subsidy is a payment supporting domestic producers. It can displace imports indirectly, but it restricts nothing at the border.",
        3: "A customs union is a trade bloc whose members drop internal barriers and adopt a common external tariff &mdash; an arrangement between countries, not a policy instrument.",
      },
    },
    {
      id: "cb2-m12-d03", type: "mcq", module: "m12",
      q: "What distinguishes a customs union from a free trade area?",
      options: [
        "A customs union also applies a common external tariff to non-members",
        "A customs union removes tariffs only on agricultural goods",
        "A free trade area requires its members to share a single currency",
        "A free trade area guarantees free movement of labour between members",
      ],
      correct: 0,
      explain: "Both remove barriers between members; only a customs union presents a single tariff wall to the outside world. That common external tariff removes the need to police which country an import originally entered through, which is otherwise a real administrative problem in a free trade area.",
      why: {
        1: "Neither arrangement is defined by the goods it covers. Coverage varies by treaty and is not the distinction.",
        2: "A shared currency is monetary union, a much deeper form of integration than either of these.",
        3: "Free movement of labour belongs to a common market or single market. A free trade area concerns goods, not people.",
      },
    },
    {
      id: "cb2-m12-d04", type: "mcq", module: "m12",
      q: "The <em>infant industry</em> argument justifies trade protection on the grounds that:",
      options: [
        "a new domestic industry needs temporary shelter until it can compete internationally",
        "tariffs are a convenient source of revenue for the government",
        "domestic consumers ought always to pay less than foreign consumers",
        "the industry concerned will never be able to compete unaided",
      ],
      correct: 0,
      explain: "The case rests on economies of scale and learning: a young industry has high initial costs that would fall with experience and volume, but it may be wiped out before it gets there. The word doing the work is <em>temporary</em> &mdash; the protection is meant to be withdrawn, and the practical objection is that it rarely is.",
      why: {
        1: "Revenue is a genuine argument for tariffs, and historically an important one, but it's a separate argument entirely &mdash; it has nothing to do with the industry being new.",
        2: "That isn't an economic argument at all, and protection generally makes domestic consumers pay <em>more</em>, not less.",
        3: "Permanent uncompetitiveness destroys the case rather than supporting it. If the industry will never stand on its own, protection is an indefinite subsidy from consumers.",
      },
    },
    {
      id: "cb2-m12-d05", type: "multi", module: "m12",
      q: "Which of the following are costs of protectionism <em>to the country imposing it</em>? Select all that apply.",
      options: [
        "Higher prices paid by domestic consumers",
        "Reduced choice of goods available domestically",
        "The risk of retaliatory barriers from trading partners",
        "Increased competitive pressure on domestic producers",
      ],
      correct: [0, 1, 2],
      explain: "Note the framing: these are costs borne by the protecting country itself, which is the part candidates often miss when they treat protection as costless at home. The odd one out runs backwards &mdash; protection <em>shelters</em> domestic producers from competition. That's its purpose, and also, in the long run, one of its costs, since sheltered firms have less incentive to become efficient.",
    },
    {
      id: "cb2-m12-d06", type: "cloze", module: "m12",
      text: "The gains from trade come from specialising according to {{0}} advantage, which is a matter of relative {{1}} cost rather than of using fewer resources in absolute terms. A country can therefore gain even when its trading partner is {{2}} at producing everything.",
      blanks: [
        { answer: "comparative", options: ["comparative", "absolute", "competitive", "technological"] },
        { answer: "opportunity", options: ["opportunity", "marginal", "average", "fixed"] },
        { answer: "better", options: ["better", "worse", "slower", "larger"] },
      ],
      explain: "The last clause is the counter-intuitive part and the one worth being able to state confidently: being outproduced in every good does not rule you out of trade. What matters is which good you give up <em>least</em> of something else to make, and every country has one of those.",
    },

    /* ---------- m13 Balance of payments and exchange rates ---------- */
    {
      id: "cb2-m13-d01", type: "mcq", module: "m13",
      q: "A country raises its interest rates relative to those of its trading partners. Its currency will tend to:",
      options: [
        "appreciate, as capital flows in seeking the higher return",
        "depreciate, because domestic borrowing has become more expensive",
        "be unaffected, since interest rates influence only domestic markets",
        "depreciate, because its exports have become dearer",
      ],
      correct: 0,
      explain: "Higher relative rates make domestic deposits and bonds more attractive, so foreign investors buy the currency in order to hold them. That demand pushes the exchange rate up. It's also why exchange rates react so sharply to central bank announcements.",
      why: {
        1: "Dearer domestic borrowing is a real effect, but it works through domestic demand. The exchange rate responds to the international capital flows, which pull the other way and dominate.",
        2: "In an open economy with mobile capital, the interest rate is one of the strongest influences on the exchange rate.",
        3: "This reverses the causation. Appreciation is what makes exports dearer to foreign buyers, not the other way round.",
      },
    },
    {
      id: "cb2-m13-d02", type: "mcq", module: "m13",
      q: "Following a depreciation of the domestic currency, exports:",
      options: [
        "become cheaper in foreign currency, so export volumes tend to rise",
        "become dearer in foreign currency, so export volumes tend to fall",
        "are unaffected, because they are invoiced in the domestic currency",
        "rise in price for domestic consumers but are otherwise unchanged",
      ],
      correct: 0,
      explain: "A weaker currency means each unit of foreign money buys more of it, so a price unchanged at home translates into a lower price abroad. Exports become more competitive and imports dearer, which is why depreciation is a standard route to correcting a trade deficit &mdash; though volumes may respond slowly at first.",
      why: {
        1: "That is what an <em>appreciation</em> does. Getting the direction right is most of the marks: a weaker currency makes your goods look cheaper to foreigners.",
        2: "The invoicing currency doesn't matter. Whatever the contract is written in, the foreign buyer must convert, and the conversion rate has moved in their favour.",
        3: "Depreciation raises the domestic price of <em>imports</em>, not of the country's own exports.",
      },
    },
    {
      id: "cb2-m13-d03", type: "mcq", module: "m13",
      q: "Which of the following is an advantage of a floating exchange rate?",
      options: [
        "It adjusts automatically in a direction that helps correct balance-of-payments imbalances",
        "It removes exchange rate uncertainty for firms trading internationally",
        "It guarantees a stable domestic price level",
        "It requires the central bank to hold large foreign currency reserves",
      ],
      correct: 0,
      explain: "A deficit means more of the currency is being sold than bought, so it falls; the fall makes exports cheaper and imports dearer, which narrows the deficit. The adjustment happens on its own, with no policy decision and no reserves spent &mdash; which is the main practical case for floating.",
      why: {
        1: "This is the advantage of a <em>fixed</em> rate, and the principal cost of floating: volatility makes pricing and planning harder for exporters and importers.",
        2: "Floating can do the opposite. A depreciation raises import prices and feeds into domestic inflation.",
        3: "Large reserves are what a <em>fixed</em> regime needs, to defend the peg by intervening. A pure float needs none, which is another advantage of it.",
      },
    },
    {
      id: "cb2-m13-d04", type: "mcq", module: "m13",
      q: "Which of the following transactions is recorded in the <em>current</em> account of the balance of payments?",
      options: [
        "Payment received for goods exported to another country",
        "A domestic firm's purchase of a factory abroad",
        "A domestic bank's loan to an overseas borrower",
        "A pension fund's purchase of foreign government bonds",
      ],
      correct: 0,
      explain: "The current account covers trade in goods and services, income from abroad, and transfers &mdash; broadly, transactions in things produced or earned. The other three are purchases of <em>assets</em> and belong to the capital and financial account. Sorting a transaction into the right account is a standard exam task.",
      why: {
        1: "Buying a factory abroad is foreign direct investment, an asset purchase, so it sits in the financial account.",
        2: "A cross-border loan creates a financial claim, not a traded good or service.",
        3: "Bonds are financial assets. Note the distinction: buying the bond is a financial-account entry, but the <em>interest</em> it later pays is investment income and does appear in the current account.",
      },
    },
    {
      id: "cb2-m13-d05", type: "multi", module: "m13",
      q: "Which of the following would tend to cause the domestic currency to <em>appreciate</em>? Select all that apply.",
      options: [
        "A rise in foreign demand for the country's exports",
        "A rise in domestic interest rates relative to those abroad",
        "Speculators coming to expect the currency to rise",
        "A widening deficit on the current account",
      ],
      correct: [0, 1, 2],
      explain: "The first three all raise demand for the currency: foreigners must buy it to pay for exports, to hold higher-yielding assets, or to profit from an expected rise. Speculation is self-fulfilling in the short run for exactly that reason. A widening current account deficit works the other way &mdash; more of the currency is sold to pay for imports than is bought, so it tends to depreciate.",
    },
    {
      id: "cb2-m13-d06", type: "cloze", module: "m13",
      text: "A {{0}} exchange rate is determined by market supply and demand, whereas a {{1}} one is held at a target through central bank intervention. Under the second regime, a deliberate official reduction in the currency's value is called a {{2}}.",
      blanks: [
        { answer: "floating", options: ["floating", "managed", "crawling", "dirty"] },
        { answer: "fixed", options: ["fixed", "flexible", "market-determined", "free"] },
        { answer: "devaluation", options: ["devaluation", "depreciation", "revaluation", "appreciation"] },
      ],
      explain: "The final blank is a distinction worth being precise about. <em>Devaluation</em> is a policy act: an authority moves the peg. <em>Depreciation</em> is a market outcome under floating, with nobody deciding it. Using the two interchangeably is a reliable way to signal that the regimes haven't been properly distinguished.",
    },
    /* ---------- m14 The financial system ---------- */
    {
      id: "cb2-m14-d01", type: "mcq", module: "m14",
      q: "A bank funds a book of 25-year mortgages largely with instant-access customer deposits. This practice is known as:",
      options: ["maturity transformation", "securitisation", "syndicated lending", "deposit insurance"],
      correct: 0,
      explain: "Borrowing short and lending long is how banks earn a margin, since long-term rates normally exceed short-term ones. It's also the structural reason banks are fragile: the depositors can all ask for their money at once, and the mortgages cannot be called in to meet them.",
      why: {
        1: "Securitisation is pooling loans and selling them on as tradeable securities. It moves assets <em>off</em> the balance sheet rather than describing how what remains is funded.",
        2: "A syndicated loan is one large loan shared between several lenders to spread credit risk. It concerns who bears the risk, not the mismatch of maturities.",
        3: "Deposit insurance is a public guarantee designed to contain the consequences of this mismatch. It's the remedy, not the practice.",
      },
    },
    {
      id: "cb2-m14-d02", type: "mcq", module: "m14",
      q: "A bank cannot meet depositors' withdrawal requests because its assets are long-term loans that cannot be sold quickly at a fair price. Its difficulty is primarily:",
      options: ["liquidity risk", "credit risk", "market risk", "operational risk"],
      correct: 0,
      explain: "Liquidity risk is about <em>timing</em>: the assets may be perfectly sound and worth more than the liabilities, yet still be impossible to turn into cash fast enough. A bank can be solvent and illiquid at the same time, and be brought down by the second while the first is still true.",
      why: {
        1: "Credit risk is the risk that borrowers default. The question specifies nothing about the loans going bad &mdash; the problem is that repayment is years away.",
        2: "Market risk is the risk of losses from movements in prices, rates or exchange rates. Relevant if the bank were forced into a fire sale, but not the underlying difficulty described.",
        3: "Operational risk covers failures of systems, processes or people &mdash; fraud, outages, errors. Nothing here has gone wrong operationally.",
      },
    },
    {
      id: "cb2-m14-d03", type: "mcq", module: "m14",
      q: "Why are insurance companies generally regarded as less prone to systemic risk than banks?",
      options: [
        "They are funded mainly by premiums rather than short-term deposits and wholesale borrowing",
        "They do not hold risky assets in their investment portfolios",
        "They have no financial connections to other institutions",
        "They operate outside the scope of financial regulation",
      ],
      correct: 0,
      explain: "Premium income arrives steadily and claims fall due unpredictably but not all at once, so there is no equivalent of a depositor run. Banks depend on funding that can be withdrawn on demand, and that is what allows a loss of confidence to become a failure within days.",
      why: {
        1: "Insurers hold very large investment portfolios including equities, corporate bonds and property. Their assets carry plenty of risk &mdash; it's the liability side that differs.",
        2: "They are certainly interconnected, through reinsurance, derivatives and shared investment exposures. Less systemically fragile does not mean isolated.",
        3: "Insurers are heavily regulated, with their own solvency regime. The contrast with banks is about funding structure, not about being unsupervised.",
      },
    },
    {
      id: "cb2-m14-d04", type: "mcq", module: "m14",
      q: "What is the principal purpose of a deposit insurance scheme?",
      options: [
        "To remove depositors' incentive to withdraw in panic, so runs do not become self-fulfilling",
        "To compensate a failed bank's shareholders for their losses",
        "To guarantee that banks remain profitable through a downturn",
        "To remove the need for capital adequacy requirements",
      ],
      correct: 0,
      explain: "A bank run is a coordination problem: withdrawing is rational for you only because you fear others will withdraw first. Guaranteeing deposits up to a limit breaks that logic &mdash; if your money is safe either way, there is no reason to join the queue, so the queue never forms. The guarantee works largely by never needing to be used.",
      why: {
        1: "Shareholders are deliberately left unprotected: they take the upside and must take the loss, or the incentive to monitor risk disappears entirely.",
        2: "Nothing guarantees a bank's profits. The scheme protects depositors when a bank fails, it does not prevent failure.",
        3: "The two work together. Deposit insurance itself creates moral hazard &mdash; insured depositors stop caring how risky the bank is &mdash; which is one reason capital requirements are needed alongside it.",
      },
    },
    {
      id: "cb2-m14-d05", type: "multi", module: "m14",
      q: "Which of the following expose a commercial bank to <em>credit</em> risk? Select all that apply.",
      options: [
        "Loans advanced to household and corporate borrowers",
        "Corporate bonds held in the bank's investment portfolio",
        "Credit derivatives on which the bank has sold protection",
        "Reserves held on deposit at the central bank",
      ],
      correct: [0, 1, 2],
      explain: "Credit risk is the risk that a counterparty fails to pay, so it attaches to anything that amounts to a claim on someone who might default &mdash; whether that claim is a loan, a bond, or a derivative promising to make someone whole if a third party defaults. Central bank reserves are the standard exception: they are a claim on the issuer of the currency itself, and so are treated as the risk-free asset in the system.",
    },
    {
      id: "cb2-m14-d06", type: "cloze", module: "m14",
      text: "{{0}} adequacy rules require a bank to hold enough capital against its risk-weighted assets to absorb {{1}}. A bank run is especially dangerous because the fear of failure can itself {{2}} the failure.",
      blanks: [
        { answer: "Capital", options: ["Capital", "Maturity", "Disclosure", "Conduct"] },
        { answer: "losses", options: ["losses", "deposits", "taxes", "dividends"] },
        { answer: "cause", options: ["cause", "prevent", "postpone", "insure"] },
      ],
      explain: "The last blank is the self-fulfilling part worth being able to state: a run is not merely a symptom of a failing bank but a mechanism that can destroy a healthy one, because no bank holds enough cash to repay every depositor at once. That is exactly the vulnerability maturity transformation creates and deposit insurance is designed to neutralise.",
    },

    /* ---------- m15 The money market and monetary policy ---------- */
    {
      id: "cb2-m15-d01", type: "mcq", module: "m15",
      q: "Market interest rates rise. What happens to the price of existing fixed-coupon bonds?",
      options: [
        "They fall, because their fixed coupons now look poor against newly issued bonds",
        "They rise, because bonds are interest-bearing assets",
        "They are unaffected, because the coupon is contractually fixed",
        "They fall, because the issuer's creditworthiness has deteriorated",
      ],
      correct: 0,
      explain: "A bond's coupon is fixed in cash terms, so the only way its return can adjust to a new market rate is through its price. When rates rise, the price must fall far enough that the fixed payments deliver the new, higher yield to whoever buys it.",
      why: {
        1: "Being interest-bearing is what causes the fall, not a rise: the interest is fixed while the market's required return has moved up.",
        2: "The fixed coupon is precisely the reason the price must move. If the coupon could float up with rates, the price could stay put.",
        3: "Right direction, wrong reason &mdash; which makes this the most tempting distractor. Credit deterioration would also push the price down, but nothing here suggests the issuer has changed; the move is purely about the general level of rates.",
      },
    },
    {
      id: "cb2-m15-d02", type: "mcq", module: "m15",
      q: "Quantitative easing involves a central bank:",
      options: [
        "creating money to buy financial assets, aiming to push longer-term yields down",
        "raising its policy rate in order to slow inflation",
        "printing banknotes and distributing them directly to households",
        "selling government bonds in order to reduce the money supply",
      ],
      correct: 0,
      explain: "QE is used when the policy rate is already near zero and cannot usefully be cut further. By buying bonds in size the central bank bids their prices up and their yields down, which works along the whole maturity curve rather than only at the short end where the policy rate bites.",
      why: {
        1: "That is conventional monetary tightening &mdash; the opposite stance, using the ordinary tool.",
        2: "Handing money straight to households is sometimes discussed as &lsquo;helicopter money&rsquo;, and it is a different policy. QE buys assets from financial institutions; no new banknotes are involved.",
        3: "Selling bonds to withdraw money is quantitative <em>tightening</em>, the unwinding of QE.",
      },
    },
    {
      id: "cb2-m15-d03", type: "mcq", module: "m15",
      q: "Why are central banks commonly given independence from government?",
      options: [
        "So interest rate decisions rest on economic conditions rather than short-term political pressure",
        "So that government does not have to fund their operating costs",
        "Because they are responsible for setting fiscal as well as monetary policy",
        "So that they can guarantee a permanently fixed exchange rate",
      ],
      correct: 0,
      explain: "Governments face elections and therefore a standing temptation to keep rates low for longer than conditions warrant. If the public expects that, inflation expectations drift up and become harder to anchor. Independence is a commitment device: it makes the inflation target credible by removing the decision from the people with the incentive to break it.",
      why: {
        1: "Independent central banks are still publicly constituted and generally fund themselves from their own operations. Money is not the issue.",
        2: "Fiscal policy &mdash; tax and spending &mdash; remains firmly with government. The separation of the two is part of the point.",
        3: "Independence says nothing about the exchange rate regime, and committing to a fixed rate would in fact surrender monetary independence rather than express it.",
      },
    },
    {
      id: "cb2-m15-d04", type: "mcq", module: "m15",
      q: "An inverted yield curve is watched as a possible recession signal because it suggests investors expect:",
      options: [
        "lower interest rates ahead, as the economy weakens",
        "higher inflation over the longer term horizon",
        "the government to default on its outstanding debt",
        "a sharp increase in government bond issuance",
      ],
      correct: 0,
      explain: "Long rates embody expectations of future short rates. When long yields fall below short ones, the market is collectively betting that the central bank will be cutting &mdash; and the usual reason a central bank cuts is a weakening economy. The curve is a summary of expectations, not a cause of anything.",
      why: {
        1: "Expected inflation pushes long yields <em>up</em>, which steepens the curve rather than inverting it.",
        2: "Default fear would raise yields on the risky debt, most sharply at longer maturities, again steepening rather than inverting.",
        3: "More issuance means more supply, which tends to raise yields on the maturities being issued.",
      },
    },
    {
      id: "cb2-m15-d05", type: "multi", module: "m15",
      q: "Which of the following are functions of money? Select all that apply.",
      options: [
        "A medium of exchange",
        "A unit of account",
        "A store of value",
        "A factor of production",
      ],
      correct: [0, 1, 2],
      explain: "The three standard functions: money lets goods be traded without barter, provides a common yardstick for comparing prices, and carries purchasing power forward in time. It is <em>not</em> a factor of production &mdash; those are land, labour, capital and enterprise, all real resources. Money is a claim that lets you acquire them, which is why inflation attacks the third function hardest without touching the first two.",
    },
    {
      id: "cb2-m15-d06", type: "cloze", module: "m15",
      text: "The {{0}} base is central bank money: cash in circulation plus commercial banks' reserves. Bank lending then expands the wider money supply by a factor called the money {{1}}. Separately, a rise in the policy rate relative to other countries tends to make the currency {{2}}.",
      blanks: [
        { answer: "monetary", options: ["monetary", "narrow", "broad", "fiscal"] },
        { answer: "multiplier", options: ["multiplier", "accelerator", "velocity", "aggregate"] },
        { answer: "appreciate", options: ["appreciate", "depreciate", "devalue", "float"] },
      ],
      explain: "Two distinct channels run from one policy lever, which is why rate decisions matter so much. Domestically, the rate works through borrowing costs, lending and the money supply. Internationally, it works through capital flows and the exchange rate &mdash; and the exchange rate then feeds back into import prices and inflation.",
    },

    /* ---------- m16 Main strands of economic thinking ---------- */
    {
      id: "cb2-m16-d01", type: "mcq", module: "m16",
      q: "Monetarists identify which of the following as the fundamental driver of inflation?",
      options: [
        "Growth in the money supply",
        "Wage demands pressed by trade unions",
        "The size of the government's budget deficit",
        "Rising prices of imported goods",
      ],
      correct: 0,
      explain: "The Monetarist claim, in Friedman's phrasing, is that inflation is always and everywhere a monetary phenomenon: the price level ultimately tracks the money supply relative to real output. The policy conclusion follows directly &mdash; control money growth and inflation looks after itself.",
      why: {
        1: "Wage-push is a cost-push story. A Monetarist would reply that unions can change relative prices but cannot produce sustained general inflation unless the money supply accommodates them.",
        2: "Deficits matter on this view only if they are financed by creating money. A deficit funded by genuine borrowing is not, in itself, inflationary.",
        3: "Imported inflation is another cost-push channel, and a real one, but the same objection applies: without monetary accommodation it shifts relative prices rather than producing an ongoing rise in the general level.",
      },
    },
    {
      id: "cb2-m16-d02", type: "mcq", module: "m16",
      q: "What is the central Keynesian challenge to the Classical view of the macroeconomy?",
      options: [
        "Prices and wages can be sticky, so markets may fail to clear and demand deficiency can persist",
        "Growth in the money supply is the main cause of inflation",
        "Markets clear instantaneously, so unemployment is always voluntary",
        "Government intervention is harmful in all circumstances",
      ],
      correct: 0,
      explain: "The Classical model assumes flexible prices and wages, which means any excess supply of labour is competed away and the economy returns to full employment by itself. Keynes argued that wages in particular resist falling, so an economy can settle at an equilibrium with persistent involuntary unemployment &mdash; which is what creates the case for demand management.",
      why: {
        1: "That is the Monetarist position. It shares the Classical trust in markets self-correcting, so it sits on the other side of this argument.",
        2: "Instantaneous clearing is the Classical view itself, which is what Keynes was disputing.",
        3: "Blanket hostility to intervention is closer to the Austrian or laissez-faire position. Keynes argued for intervention, not against it.",
      },
    },
    {
      id: "cb2-m16-d03", type: "mcq", module: "m16",
      q: "Why did the Great Depression present such a problem for Classical economic thinking?",
      options: [
        "Unemployment stayed very high for years instead of self-correcting as the theory predicted",
        "Inflation accelerated faster than the money supply was growing",
        "International trade expanded rapidly throughout the period",
        "Interest rates were never permitted to fall at any point",
      ],
      correct: 0,
      explain: "Classical theory said falling wages would restore full employment fairly quickly. Instead mass unemployment persisted through the 1930s across many economies. That gap between prediction and observation is what opened the door to Keynes's alternative and, with it, to active demand management.",
      why: {
        1: "The period was marked by <em>deflation</em>, not accelerating inflation &mdash; falling prices were part of what made the depression so severe.",
        2: "Trade collapsed, worsened by tariff retaliation. It did not expand.",
        3: "Rates did fall substantially. That they fell and yet activity did not recover is itself part of the puzzle Keynes set out to explain.",
      },
    },
    {
      id: "cb2-m16-d04", type: "mcq", module: "m16",
      q: "Analysing equilibrium in one market while holding conditions in all other markets constant is known as:",
      options: [
        "partial equilibrium analysis",
        "general equilibrium analysis",
        "macroeconomic analysis",
        "comparative advantage analysis",
      ],
      correct: 0,
      explain: "Almost all the supply-and-demand work earlier in this course is partial equilibrium: one market, everything else held still. It is tractable and usually a good approximation, but it misses feedback &mdash; a tax on petrol changes the market for cars, which changes the market for steel, and those effects never appear on the single diagram.",
      why: {
        1: "General equilibrium is the opposite approach: every market adjusting simultaneously and consistently, so the feedback loops are captured.",
        2: "Macroeconomics works with economy-wide aggregates. That's a different distinction &mdash; plenty of microeconomics is partial equilibrium too.",
        3: "Comparative advantage is a trade concept about relative opportunity costs, not a method of analysis.",
      },
    },
    {
      id: "cb2-m16-d05", type: "multi", module: "m16",
      q: "Which of the following schools broadly trust markets to self-correct and are wary of government intervention? Select all that apply.",
      options: ["Classical", "Monetarist", "Austrian", "Post-Keynesian"],
      correct: [0, 1, 2],
      explain: "The first three differ considerably in method &mdash; the Austrians are sceptical of mathematical modelling in a way Monetarists are not &mdash; but they share a prior that markets coordinate well and intervention tends to make things worse. Post-Keynesians take the opposite view most strongly of all, doubting that markets self-correct even in the long run and emphasising fundamental uncertainty.",
    },
    {
      id: "cb2-m16-d06", type: "cloze", module: "m16",
      text: "{{0}} is the policy stance of minimal government intervention in the economy. {{1}} equilibrium analysis examines a single market in isolation, whereas {{2}} equilibrium analysis considers every market adjusting together.",
      blanks: [
        { answer: "Laissez-faire", options: ["Laissez-faire", "Keynesianism", "Corporatism", "Protectionism"] },
        { answer: "Partial", options: ["Partial", "Single", "Micro", "Isolated"] },
        { answer: "general", options: ["general", "aggregate", "universal", "total"] },
      ],
      explain: "Knowing which lens an argument is using matters for judging it. A partial-equilibrium result can be perfectly correct about its own market and still mislead about the economy, because it has assumed away every knock-on effect &mdash; which is exactly the kind of limitation a &lsquo;discuss&rsquo; question rewards you for spotting.",
    },

    /* ---------- m17 Classical and Keynesian theory ---------- */
    {
      id: "cb2-m17-d01", type: "mcq", module: "m17",
      q: "In a closed economy with no government, the marginal propensity to consume is 0.8. What is the simple multiplier?",
      options: ["5", "1.25", "4", "0.8"],
      correct: 0,
      explain: "The multiplier is 1 &divide; (1 &minus; MPC) = 1 &divide; 0.2 = 5, so an extra &pound;1 of autonomous spending eventually raises national income by &pound;5. The intuition is the chain of rounds: 80p of the first pound is spent again, 64p of that, and so on, and the geometric series sums to five times the original.",
      why: {
        1: "1.25 is 1 &divide; MPC. The denominator must be the <em>marginal propensity to save</em>, 1 &minus; MPC, because saving is what leaks out of each round.",
        2: "4 is MPC &divide; (1 &minus; MPC), which counts only the induced spending and drops the original injection from the total.",
        3: "0.8 is the MPC itself, the fraction of each extra pound that is spent, not the cumulative effect on income.",
      },
    },
    {
      id: "cb2-m17-d02", type: "mcq", module: "m17",
      q: "The paradox of thrift describes how:",
      options: [
        "a general attempt to save more during a downturn can cut income and so reduce total saving",
        "additional saving always translates into an equal amount of investment",
        "a higher propensity to save increases the size of the multiplier",
        "thrift is invariably beneficial both to the individual and to the economy",
      ],
      correct: 0,
      explain: "It's a fallacy of composition: sensible for one household, self-defeating for all of them together. Saving more means spending less, spending is someone else's income, and the resulting fall in income can leave aggregate saving no higher &mdash; possibly lower &mdash; than before.",
      why: {
        1: "That saving automatically becomes investment is the Classical assumption Keynes was arguing against. If it held, the paradox could not arise.",
        2: "It runs the other way. A higher propensity to save means a lower propensity to consume, so more leaks out of each round and the multiplier <em>shrinks</em>.",
        3: "This is the intuition the paradox overturns. Thrift remains prudent for an individual; the point is that what is true of one is not true of all at once.",
      },
    },
    {
      id: "cb2-m17-d03", type: "mcq", module: "m17",
      q: "In the simple Keynesian model, planned aggregate expenditure currently exceeds actual output. What happens next?",
      options: [
        "Firms run down inventories and raise production, so output and income rise",
        "Firms accumulate unsold inventories and cut production",
        "Prices fall until expenditure and output are brought back into line",
        "Nothing happens, because the economy is already in equilibrium",
      ],
      correct: 0,
      explain: "Adjustment in this model happens through <em>quantities</em>, not prices. Demand above output first shows up as stock running down faster than expected; firms respond by producing more, which raises incomes, which supports further spending, until planned expenditure and output are equal again.",
      why: {
        1: "That's the opposite case &mdash; what happens when output exceeds planned expenditure and goods go unsold.",
        2: "Price adjustment is the Classical mechanism. The simple Keynesian model assumes prices are sticky, which is exactly why output does the adjusting.",
        3: "Equilibrium is defined as planned expenditure equalling output. The question states they are unequal, so by definition the economy is not there yet.",
      },
    },
    {
      id: "cb2-m17-d04", type: "mcq", module: "m17",
      q: "Which of the following counts as <em>autonomous</em> expenditure in the simple Keynesian model?",
      options: [
        "Government spending set independently of the current level of income",
        "Household consumption that rises as income rises",
        "Spending on imports, which grows as national income grows",
        "Income tax revenue, which rises with national income",
      ],
      correct: 0,
      explain: "Autonomous means &lsquo;not determined by current income&rsquo;. Such spending is the starting injection the multiplier acts on, which is precisely why fiscal stimulus is modelled this way: the government chooses the amount, rather than the amount being dictated by where the economy already is.",
      why: {
        1: "Consumption that varies with income is <em>induced</em> expenditure &mdash; the part governed by the marginal propensity to consume, and the engine of the later multiplier rounds rather than the initial injection.",
        2: "Imports rising with income are an induced leakage, which shrinks the multiplier.",
        3: "Income tax rising with income is likewise induced, and also a leakage rather than expenditure on domestic output.",
      },
    },
    {
      id: "cb2-m17-d05", type: "multi", module: "m17",
      q: "Which of the following would <em>increase</em> the size of the multiplier? Select all that apply.",
      options: [
        "A higher marginal propensity to consume",
        "A lower marginal propensity to save",
        "A lower propensity to import",
        "A higher rate of income tax",
      ],
      correct: [0, 1, 2],
      explain: "The multiplier is governed by how much of each extra pound of income is spent again on domestic output, so anything that reduces the leakages enlarges it. Saving, importing and taxation are the three leakages; the first two options are the same change described from either side, and lower imports keep more of each round circulating at home. A higher tax rate does the reverse &mdash; it increases a leakage and so damps the multiplier.",
    },
    {
      id: "cb2-m17-d06", type: "cloze", module: "m17",
      text: "In a closed economy with no government, the simple multiplier is 1 &divide; (1 &minus; {{0}}). A larger value of that term makes the multiplier {{1}}, because each successive round of spending leaks {{2}} into saving.",
      blanks: [
        { answer: "MPC", options: ["MPC", "MPS", "MPI", "MRS"] },
        { answer: "larger", options: ["larger", "smaller", "negative", "unchanged"] },
        { answer: "less", options: ["less", "more", "none", "all"] },
      ],
      explain: "Reading the formula rather than memorising it: the denominator is the marginal propensity to <em>save</em>, which is what drains out of the circular flow each round. The smaller that leak, the more rounds of spending survive, and the bigger the eventual effect on income &mdash; which is the whole basis of the Keynesian case for fiscal stimulus in a downturn.",
    },
    /* ---------- m18 Relationship between the goods and money markets ---------- */
    {
      id: "cb2-m18-d01", type: "mcq", module: "m18",
      q: "The IS curve shows the combinations of interest rate and income at which:",
      options: [
        "the goods market is in equilibrium",
        "the money market is in equilibrium",
        "the balance of payments is in equilibrium",
        "the government's budget is balanced",
      ],
      correct: 0,
      explain: "IS traces where planned spending equals output. It slopes downward because a lower interest rate encourages investment, which raises planned spending and so the income level at which the goods market clears. The whole point of pairing it with LM is that neither market can be settled without the other.",
      why: {
        1: "That is the LM curve. A useful mnemonic: LM is about Liquidity and Money, IS about Investment and Saving.",
        2: "External balance belongs to the open-economy extension of this framework, not to either of the two core curves.",
        3: "The budget balance is one input to fiscal policy, which <em>shifts</em> IS. It is not what the curve traces.",
      },
    },
    {
      id: "cb2-m18-d02", type: "mcq", module: "m18",
      q: "The government increases its spending. In the IS&ndash;LM model, the immediate effect is that:",
      options: [
        "the IS curve shifts right, raising both equilibrium income and the interest rate",
        "the LM curve shifts right, raising income and lowering the interest rate",
        "the IS curve shifts left, reducing equilibrium income",
        "neither curve moves, because spending is financed by borrowing",
      ],
      correct: 0,
      explain: "Higher government spending raises planned expenditure at every interest rate, so IS moves right. Income rises, but higher income raises money demand, and with the money supply fixed that pushes the interest rate up too. That rate rise is the seed of crowding out.",
      why: {
        1: "A rightward LM shift is what a <em>monetary</em> expansion does. Note the diagnostic difference: fiscal expansion raises the interest rate, monetary expansion lowers it.",
        2: "A leftward IS shift would be fiscal contraction &mdash; spending cuts or tax rises.",
        3: "How the spending is financed affects how much crowding out follows, but the spending itself still raises planned expenditure, so IS moves.",
      },
    },
    {
      id: "cb2-m18-d03", type: "mcq", module: "m18",
      q: "In macroeconomics, <em>crowding out</em> refers to:",
      options: [
        "government borrowing pushing interest rates up and so reducing private investment",
        "imports displacing goods that would otherwise be produced domestically",
        "a dominant firm pricing so as to drive its rivals from the market",
        "higher taxes reducing household consumption",
      ],
      correct: 0,
      explain: "The mechanism runs through the interest rate. A fiscal expansion raises income, income raises money demand, money demand raises the interest rate, and the higher rate deters private investment &mdash; which offsets part of the original stimulus. How much is offset depends on the slope of LM.",
      why: {
        1: "That is import substitution running in reverse, a trade issue with no interest rate in it.",
        2: "That's predatory pricing, from the market structure part of the course. The word &lsquo;crowding&rsquo; invites the confusion, but this is a microeconomic conduct issue.",
        3: "Higher taxes do reduce consumption, but directly, through disposable income. Crowding out specifically means the indirect effect working via interest rates on <em>investment</em>.",
      },
    },
    {
      id: "cb2-m18-d04", type: "mcq", module: "m18",
      q: "An economy is in a <em>liquidity trap</em>. This means that:",
      options: [
        "rates are so low that further money supply increases neither reduce them nor stimulate demand",
        "interest rates rise sharply whenever the central bank increases the money supply",
        "commercial banks become unwilling to accept any further customer deposits",
        "money demand is completely insensitive to changes in the interest rate",
      ],
      correct: 0,
      explain: "With rates near zero, money and bonds become near-perfect substitutes, so extra money created by the central bank is simply held rather than spent or lent. The LM curve is effectively horizontal there, which means monetary policy loses traction &mdash; and, by the same token, fiscal policy becomes unusually powerful, since there is no rate rise to crowd out investment.",
      why: {
        1: "That inverts the relationship. More money normally pushes rates down; in a trap it just fails to push them any lower.",
        2: "Nothing in the concept concerns banks refusing deposits. The trap is about the public's willingness to hold money at near-zero rates.",
        3: "This is precisely backwards, and the most instructive wrong answer. A liquidity trap is where money demand is perfectly <em>elastic</em> with respect to the interest rate &mdash; infinitely sensitive, not insensitive. Complete insensitivity gives a vertical LM curve, the opposite case.",
      },
    },
    {
      id: "cb2-m18-d05", type: "multi", module: "m18",
      q: "Which of the following shift the <em>LM</em> curve? Select all that apply.",
      options: [
        "An increase in the nominal money supply",
        "A rise in the general price level",
        "A fall in money demand at every level of income",
        "An increase in government spending on infrastructure",
      ],
      correct: [0, 1, 2],
      explain: "LM is about money-market equilibrium, so it moves when either the real money supply or money demand changes. A higher price level shifts it <em>left</em> by cutting the real money supply, even though the nominal supply is untouched &mdash; which is exactly how the AS&ndash;AD model's downward-sloping demand curve is derived from IS&ndash;LM. Government spending affects planned expenditure and so shifts IS instead.",
    },
    {
      id: "cb2-m18-d06", type: "cloze", module: "m18",
      text: "A fiscal expansion is <em>less</em> effective when the LM curve is {{0}}, because the resulting rise in interest rates {{1}} out more private investment. Separately, a higher price level reduces the {{2}} money supply and shifts LM to the left.",
      blanks: [
        { answer: "steep", options: ["steep", "flat", "horizontal", "backward-bending"] },
        { answer: "crowds", options: ["crowds", "levels", "smooths", "rations"] },
        { answer: "real", options: ["real", "nominal", "narrow", "base"] },
      ],
      explain: "The slope of LM decides how much of a fiscal stimulus survives. Steep LM means money demand barely responds to interest rates, so clearing the money market after an income rise takes a large rate increase &mdash; and a large rate increase crowds out heavily. At the other extreme, a horizontal LM (the liquidity trap) means no rate rise at all and no crowding out, which is why fiscal policy is the recommended tool there.",
    },

    /* ---------- m19 Monetarist and new classical schools, and Keynesian responses ---------- */
    {
      id: "cb2-m19-d01", type: "mcq", module: "m19",
      q: "The long-run Phillips curve is conventionally drawn as:",
      options: [
        "vertical at the natural rate of unemployment",
        "downward-sloping, showing a permanent inflation&ndash;unemployment trade-off",
        "horizontal at the central bank's inflation target",
        "upward-sloping, with higher inflation raising unemployment",
      ],
      correct: 0,
      explain: "Once expectations have fully adjusted, any rate of inflation is compatible with the natural rate of unemployment, so there is no long-run trade-off to exploit. The short-run curve does slope downward, but only because expectations lag reality &mdash; and it shifts up as they catch up.",
      why: {
        1: "That's the <em>short-run</em> curve, and the belief that it held permanently is exactly what the 1970s discredited.",
        2: "A horizontal curve would mean inflation stuck at one value regardless of unemployment, which is neither the theory nor what is observed.",
        3: "An upward slope would imply inflation and unemployment rise together permanently. Stagflation looked like this for a period, but it is explained by the short-run curve <em>shifting</em>, not by a stable upward-sloping relationship.",
      },
    },
    {
      id: "cb2-m19-d02", type: "mcq", module: "m19",
      q: "Why did the stagflation of the 1970s pose a problem for the simple Phillips curve?",
      options: [
        "High inflation and high unemployment occurred together, contradicting a stable inverse trade-off",
        "Inflation and unemployment both fell steadily throughout the decade",
        "Unemployment was eliminated entirely while inflation stayed low",
        "The money supply stopped growing altogether",
      ],
      correct: 0,
      explain: "The simple curve promised that buying lower unemployment cost you higher inflation, and vice versa. The 1970s delivered both at once. The resolution &mdash; supply shocks shifting the short-run curve, plus expectations adjusting upward &mdash; is what established the expectations-augmented version and the vertical long-run curve.",
      why: {
        1: "Both falling together would be a happy outcome and no challenge to the theory at all.",
        2: "Unemployment rose sharply in this period; it certainly wasn't eliminated.",
        3: "Money supply growth was rapid, not absent, which is central to the Monetarist reading of the decade.",
      },
    },
    {
      id: "cb2-m19-d03", type: "mcq", module: "m19",
      q: "Expectations formed by extrapolating from past experience and adjusting gradually as new data arrives are described as:",
      options: [
        "adaptive expectations",
        "rational expectations",
        "the accelerationist hypothesis",
        "the natural rate hypothesis",
      ],
      correct: 0,
      explain: "Adaptive expectations look backwards, so they are systematically wrong whenever conditions change &mdash; people keep expecting last year's inflation. That lag is what gives the short-run Phillips curve its downward slope, because policy can briefly surprise people.",
      why: {
        1: "Rational expectations use <em>all</em> available information, including knowledge of how policy works, rather than only the past. That's the New Classical alternative, and it removes the systematic error.",
        2: "The accelerationist hypothesis is a claim about what happens when unemployment is held below its natural rate. It relies on a theory of expectations but is not itself one.",
        3: "The natural rate hypothesis concerns the level of unemployment consistent with stable inflation, again a separate proposition.",
      },
    },
    {
      id: "cb2-m19-d04", type: "mcq", module: "m19",
      q: "On the New Classical view, why might an <em>anticipated</em> monetary expansion have little effect on real output?",
      options: [
        "People foresee its effects and adjust prices and wages in advance, so only surprises move real variables",
        "The central bank has no reliable means of changing the money supply in the first place",
        "Prices and wages are sticky in the short run and cannot adjust to the change",
        "Central banks invariably announce their policy changes too late for anyone to react",
      ],
      correct: 0,
      explain: "If agents know an expansion is coming and understand it will raise prices, they build that into wage bargains and price-setting immediately. Nominal variables move, real ones don't. The striking policy implication is that only <em>surprises</em> have real effects &mdash; which makes systematic demand management pointless.",
      why: {
        1: "Central banks plainly can change the money supply. The argument is about how the private sector responds, not about whether the policy is feasible.",
        2: "Sticky prices are the <em>Keynesian counter-argument</em> to this position: if prices can't adjust instantly, even anticipated policy has real short-run effects. Picking this reverses the two schools.",
        3: "Timing of announcements isn't the issue. The result holds precisely when policy is announced clearly and in good time.",
      },
    },
    {
      id: "cb2-m19-d05", type: "multi", module: "m19",
      q: "Which of the following are Monetarist or New Classical propositions? Select all that apply.",
      options: [
        "Sustained inflation is ultimately driven by money supply growth",
        "The long-run Phillips curve is vertical at the natural rate",
        "Holding unemployment below the natural rate produces accelerating inflation",
        "Sticky wages mean demand deficiency can cause lasting unemployment",
      ],
      correct: [0, 1, 2],
      explain: "The first three hang together as a single position: output is set by real factors in the long run, so demand management can affect prices but not lasting employment. The fourth is the Keynesian claim they reject &mdash; and it's the one that justifies active intervention, which is precisely what the others argue against.",
    },
    {
      id: "cb2-m19-d06", type: "cloze", module: "m19",
      text: "The {{0}} rate of unemployment is the rate consistent with stable inflation. The {{1}} hypothesis holds that trying to keep unemployment below it produces ever-{{2}} inflation rather than a lasting trade-off.",
      blanks: [
        { answer: "natural", options: ["natural", "frictional", "structural", "cyclical"] },
        { answer: "accelerationist", options: ["accelerationist", "rational expectations", "liquidity preference", "purchasing power parity"] },
        { answer: "rising", options: ["rising", "falling", "stable", "negative"] },
      ],
      explain: "The mechanism is expectations chasing reality. Pushing unemployment below the natural rate needs inflation above what people expect; once they revise their expectations upward, the same unemployment rate needs still higher inflation, and so on without limit. That is why the long-run curve is vertical, and why central banks target inflation rather than unemployment.",
    },

    /* ---------- m20 Supply-side policy ---------- */
    {
      id: "cb2-m20-d01", type: "mcq", module: "m20",
      q: "The aim of supply-side policy is to:",
      options: [
        "raise the economy's productive capacity, shifting long-run aggregate supply to the right",
        "manage the level of aggregate demand over the short run",
        "hold the exchange rate stable against major trading partners",
        "bring the government's budget into balance",
      ],
      correct: 0,
      explain: "Supply-side policy targets what the economy <em>can</em> produce rather than how much is currently being spent. Because the long-run aggregate supply curve is vertical, shifting it right is the only way to raise output sustainably &mdash; demand policy can fill an output gap but cannot enlarge capacity.",
      why: {
        1: "Short-run demand management is precisely the alternative approach, carried out through fiscal and monetary policy.",
        2: "Exchange rate stability is an objective of exchange rate policy, a separate topic.",
        3: "A balanced budget is a fiscal objective. Some supply-side measures cut tax revenue and make it harder, not easier, to achieve.",
      },
    },
    {
      id: "cb2-m20-d02", type: "mcq", module: "m20",
      q: "Why do supply-side policies generally take effect over a longer horizon than demand-side ones?",
      options: [
        "They change the underlying stock of capital, skills and technology, which takes years to build",
        "They require parliamentary approval, which monetary policy does not",
        "They can only take effect once inflation has been brought down",
        "They are required by law to be phased in gradually",
      ],
      correct: 0,
      explain: "Educating a workforce, building infrastructure or reshaping an industry are slow processes by nature. Demand-side policy moves existing spending around and can register within quarters; supply-side policy grows the economy's capacity, and a school leaver trained this year is productive for decades but contributes nothing this quarter.",
      why: {
        1: "Some supply-side measures do need legislation, but so does discretionary fiscal policy. The lag being described here is economic, not procedural.",
        2: "There's no such precondition. Supply-side reform can proceed at any rate of inflation, and by raising capacity it tends to reduce inflationary pressure.",
        3: "No general legal requirement of this kind exists. Governments often would prefer faster results and cannot get them.",
      },
    },
    {
      id: "cb2-m20-d03", type: "mcq", module: "m20",
      q: "Which of the following is an <em>interventionist</em> supply-side policy, as opposed to a market-based one?",
      options: [
        "Direct government investment in infrastructure and education",
        "Reducing the rate of corporation tax",
        "Deregulating product markets to lower compliance costs",
        "Privatising a state-owned enterprise",
      ],
      correct: 0,
      explain: "Supply-side policy divides into two strands. Market-based measures step back and let incentives work &mdash; lower taxes, less regulation, more private ownership. Interventionist measures have the state supply something directly, typically where private returns understate social returns, as with education and infrastructure.",
      why: {
        1: "Tax cuts are the textbook market-based measure: they sharpen private incentives rather than having the state provide anything.",
        2: "Deregulation is market-based by definition &mdash; it removes government from the process.",
        3: "Privatisation moves activity from state to private hands, which is the market-based direction of travel.",
      },
    },
    {
      id: "cb2-m20-d04", type: "mcq", module: "m20",
      q: "Which of the following is a recognised criticism of supply-side policies?",
      options: [
        "The benefits can take years to appear, and some measures may widen inequality",
        "They have no effect on the economy's potential output",
        "They invariably cause inflation in the short run",
        "They cannot be pursued at the same time as monetary policy",
      ],
      correct: 0,
      explain: "Two objections that carry weight in a &lsquo;discuss&rsquo; answer. The timing problem is political as much as economic: costs land now and benefits after the next election. The distributional objection is that cutting benefits or weakening employment protection raises measured flexibility while shifting risk onto the least secure workers.",
      why: {
        1: "Raising potential output is the whole purpose, and the evidence for education and infrastructure is reasonably good. Whether it works quickly enough is the real argument.",
        2: "Supply-side policy tends to be <em>dis</em>inflationary, since greater capacity relieves pressure on prices.",
        3: "The two are complements, not alternatives. A standard policy mix uses monetary policy for the cycle and supply-side reform for capacity.",
      },
    },
    {
      id: "cb2-m20-d05", type: "multi", module: "m20",
      q: "Which of the following are supply-side policies? Select all that apply.",
      options: [
        "Government investment in education and vocational training",
        "Relaxing restrictive labour-market regulation",
        "Improving healthcare provision to reduce workplace absence",
        "Cutting the policy interest rate to encourage household spending",
      ],
      correct: [0, 1, 2],
      explain: "The first three all work on capacity: more skills, a more flexible labour market, and a healthier and therefore more productive workforce. Cutting interest rates is demand-side &mdash; it shifts aggregate demand rather than aggregate supply, and adds nothing to what the economy is capable of producing.",
    },
    {
      id: "cb2-m20-d06", type: "cloze", module: "m20",
      text: "{{0}} capital is the stock of skills, knowledge and experience embodied in a workforce. Policies that build it shift {{1}}-run aggregate supply to the right, raising the economy's {{2}} output.",
      blanks: [
        { answer: "Human", options: ["Human", "Physical", "Financial", "Working"] },
        { answer: "long", options: ["long", "short", "medium", "very short"] },
        { answer: "potential", options: ["potential", "nominal", "actual", "disposable"] },
      ],
      explain: "The last blank is the one to be precise about. <em>Potential</em> output is the sustainable ceiling; <em>actual</em> output is where the economy happens to be sitting. Demand policy moves actual output toward the ceiling, but only supply-side measures raise the ceiling itself &mdash; which is why the two are complements rather than substitutes.",
    },

    /* ---------- m21 Demand-side policy ---------- */
    {
      id: "cb2-m21-d01", type: "mcq", module: "m21",
      q: "Which of the following is an <em>automatic stabiliser</em>?",
      options: [
        "Unemployment benefit payments, which rise as unemployment rises",
        "A one-off increase in infrastructure spending announced at the Budget",
        "A change in Bank Rate decided by the Monetary Policy Committee",
        "A temporary VAT cut legislated in response to a recession",
      ],
      correct: 0,
      explain: "An automatic stabiliser is built into the system and responds to the cycle without anyone deciding anything. Benefits rise and progressive tax receipts fall in a downturn, cushioning demand immediately &mdash; which sidesteps the recognition and legislative lags that blunt discretionary policy.",
      why: {
        1: "Announced at a Budget, so it required a deliberate decision: discretionary fiscal policy.",
        2: "A deliberate decision, and monetary rather than fiscal. Automatic stabilisers need no committee to act.",
        3: "&lsquo;Legislated in response to&rsquo; is the giveaway &mdash; the response had to be chosen and passed, which is what makes it discretionary.",
      },
    },
    {
      id: "cb2-m21-d02", type: "mcq", module: "m21",
      q: "Why is monetary policy often preferred to fiscal policy for short-run demand management?",
      options: [
        "It can be implemented and reversed quickly, without needing legislation",
        "It has no effect on the rate of inflation",
        "It raises revenue for the government directly",
        "It is free of the time lags that affect fiscal policy",
      ],
      correct: 0,
      explain: "A rate-setting committee can move monthly and change direction at the next meeting. Fiscal measures need a Budget, legislation and implementation, by which time the cycle may have turned. Reversibility matters as much as speed &mdash; raising rates back is far easier than unwinding a spending programme.",
      why: {
        1: "Influencing inflation is monetary policy's primary purpose, which is the reverse of this claim.",
        2: "Raising revenue is what taxation does, and taxation is fiscal.",
        3: "Monetary policy has substantial lags of its own &mdash; the transmission to spending and inflation is usually reckoned in quarters or years. Its advantage is the shorter <em>decision</em> lag, not the absence of lags altogether.",
      },
    },
    {
      id: "cb2-m21-d03", type: "mcq", module: "m21",
      q: "Why do time lags reduce the effectiveness of discretionary fiscal policy?",
      options: [
        "By the time a problem is recognised, legislated for and felt, conditions may already have changed",
        "Because government spending has no multiplier effect on national income",
        "Because tax rates cannot be altered once they are set",
        "Because the central bank has the power to block fiscal measures",
      ],
      correct: 0,
      explain: "Three lags stack up: recognising the downturn from data that arrives late, legislating a response, and waiting for the spending to reach the economy. A stimulus that lands during the recovery adds demand when it is least needed &mdash; it can amplify the cycle rather than smooth it.",
      why: {
        1: "The multiplier is real and is precisely why fiscal policy is potent when it arrives on time. Timing is the problem, not potency.",
        2: "Tax rates are changed regularly, usually at each Budget.",
        3: "An independent central bank sets monetary policy; it has no veto over the government's tax and spending decisions.",
      },
    },
    {
      id: "cb2-m21-d04", type: "mcq", module: "m21",
      q: "Why might a government adopt a fiscal rule limiting how much it may borrow?",
      options: [
        "To keep debt sustainable and retain credibility with financial markets",
        "To increase the size of the fiscal multiplier acting on its spending",
        "To remove the need to levy taxes on households and firms",
        "To guarantee that full employment is reached and maintained",
      ],
      correct: 0,
      explain: "A rule is a commitment device against the standing temptation to borrow more than is prudent. Credibility is worth real money: investors who trust the path demand a lower yield on government debt, which lowers borrowing costs across the economy. The cost is flexibility, which is why most rules carve out recessions.",
      why: {
        1: "If anything a borrowing constraint reduces the scope for the stimulus the multiplier acts on. The multiplier's size depends on leakages, not on fiscal rules.",
        2: "Governments must still raise revenue. A rule limits the gap between spending and revenue; it doesn't remove the need for revenue.",
        3: "No fiscal rule can guarantee full employment, and a binding rule may actually prevent the stimulus that would help achieve it.",
      },
    },
    {
      id: "cb2-m21-d05", type: "multi", module: "m21",
      q: "Which of the following are <em>expansionary fiscal</em> measures? Select all that apply.",
      options: [
        "Increasing government spending on public services",
        "Cutting rates of income tax",
        "Reducing the standard rate of VAT",
        "Raising the central bank's policy interest rate",
      ],
      correct: [0, 1, 2],
      explain: "Expansionary fiscal policy means spending more or taxing less, both of which add to aggregate demand. The odd one out fails on both counts: raising the policy rate is <em>monetary</em> rather than fiscal, and it is contractionary rather than expansionary. Sorting measures by instrument and by direction is a standard exam task.",
    },
    {
      id: "cb2-m21-d06", type: "cloze", module: "m21",
      text: "Fiscal policy operates through government {{0}} and taxation, while monetary policy works mainly through the {{1}} rate. Mechanisms such as unemployment benefits, which respond to the cycle without any new legislation, are called automatic {{2}}.",
      blanks: [
        { answer: "spending", options: ["spending", "ownership", "regulation", "borrowing limits"] },
        { answer: "interest", options: ["interest", "exchange", "tax", "savings"] },
        { answer: "stabilisers", options: ["stabilisers", "multipliers", "accelerators", "dampeners"] },
      ],
      explain: "Keeping the two instruments separate matters because they are controlled by different bodies with different speeds and different lags &mdash; the Treasury sets the first, an independent central bank the second. Automatic stabilisers are the part of fiscal policy that escapes the decision lag entirely, which is what makes them disproportionately useful early in a downturn.",
    },
    /* ---------- m22 Exchange rate policy ---------- */
    {
      id: "cb2-m22-d01", type: "mcq", module: "m22",
      q: "The <em>impossible trinity</em> holds that a country cannot simultaneously maintain all three of:",
      options: [
        "a fixed exchange rate, free movement of capital, and an independent monetary policy",
        "low inflation, low unemployment, and sustained economic growth",
        "free trade, a balanced budget, and a stable currency",
        "a current account surplus, a fiscal surplus, and rising real wages",
      ],
      correct: 0,
      explain: "Any two are achievable; the third must be surrendered. Defending a peg while capital moves freely forces the interest rate to whatever the peg requires, so monetary independence goes. Keep monetary independence and free capital, and the currency must float. Keep the peg and monetary independence, and capital controls are needed.",
      why: {
        1: "These are three of the four classic macroeconomic objectives. They certainly conflict at times, but that's a policy trade-off rather than the logical impossibility the trilemma states.",
        2: "A plausible-sounding trio, but not the trilemma. Free trade sits in a different part of the syllabus and isn't in tension with the other two in this way.",
        3: "No standard result rules out this combination; countries have achieved all three at once.",
      },
    },
    {
      id: "cb2-m22-d02", type: "mcq", module: "m22",
      q: "A central bank buys its own currency on the foreign exchange market, then offsets the effect on the domestic money supply through separate open-market operations. This is called:",
      options: [
        "sterilised intervention",
        "a managed float",
        "competitive devaluation",
        "a currency peg",
      ],
      correct: 0,
      explain: "Unsterilised intervention changes the money supply as a side-effect, which drags the domestic interest rate along with it. Sterilising neutralises that, letting the bank push on the exchange rate while leaving domestic monetary conditions where it wants them &mdash; a partial escape from the trilemma, though usually only a temporary one.",
      why: {
        1: "A managed float describes the <em>regime</em>: mostly market-determined, with occasional intervention. It says nothing about whether any intervention is sterilised.",
        2: "Competitive devaluation is deliberately weakening a currency to gain export advantage, which is about motive rather than technique.",
        3: "A peg is a commitment to hold the rate at a target. Sterilisation is one of the operational tools that might be used while defending it.",
      },
    },
    {
      id: "cb2-m22-d03", type: "mcq", module: "m22",
      q: "What is the principal risk of using interest rates primarily to manage the exchange rate?",
      options: [
        "The rate needed for the currency may be the wrong one for domestic inflation and growth",
        "Interest rates have no effect on capital flows",
        "It requires the government to impose capital controls",
        "It automatically triggers retaliation from trading partners",
      ],
      correct: 0,
      explain: "There is only one policy rate and two jobs for it. Defending a weak currency may demand high rates just as a domestic recession calls for cuts &mdash; the trilemma in practical form. The ERM crises of the early 1990s are the standard illustration.",
      why: {
        1: "They affect capital flows strongly, which is exactly why the tool works on the exchange rate at all.",
        2: "Capital controls are an alternative route to the same end, not a consequence of using interest rates.",
        3: "Retaliation is a risk associated with competitive devaluation. Setting a domestic interest rate does not usually provoke it.",
      },
    },
    {
      id: "cb2-m22-d04", type: "mcq", module: "m22",
      q: "Why might a government prefer a <em>weaker</em> domestic currency?",
      options: [
        "To make exports more competitive abroad and imports dearer at home",
        "To reduce the domestic cost of imported goods and help contain inflation",
        "To raise the purchasing power of consumers buying from overseas",
        "To attract larger inflows of foreign portfolio capital",
      ],
      correct: 0,
      explain: "A weaker currency shifts demand toward domestic producers on both sides: exports look cheaper to foreigners, imports look dearer at home. The trade-off is inflation, since imported goods and inputs all cost more &mdash; which is why the choice between a strong and a weak currency is a genuine policy dilemma rather than an obvious call.",
      why: {
        1: "That's a reason to want a <em>stronger</em> currency. It's the exact counterweight to the correct answer, which is why governments cannot simply choose one direction and be done with it.",
        2: "Also a benefit of a stronger currency: more foreign goods per unit of domestic money.",
        3: "Capital inflows are attracted by higher returns, and a currency expected to weaken deters rather than attracts them.",
      },
    },
    {
      id: "cb2-m22-d05", type: "multi", module: "m22",
      q: "Which of the following can a central bank use to influence its exchange rate? Select all that apply.",
      options: [
        "Buying or selling its own currency on the foreign exchange market",
        "Raising or lowering the domestic policy interest rate",
        "Imposing controls on cross-border capital flows",
        "Increasing tariffs on imported manufactured goods",
      ],
      correct: [0, 1, 2],
      explain: "Direct intervention works on the currency's supply and demand; interest rates work through the return on holding it; capital controls work by restricting the speculative flows that move it. Tariffs are trade policy &mdash; they alter the price of imported goods, and may indirectly affect currency demand, but they are not an exchange rate instrument and are not the central bank's to set.",
    },
    {
      id: "cb2-m22-d06", type: "cloze", module: "m22",
      text: "Under a {{0}} float, the exchange rate is largely market-determined but the central bank intervenes occasionally to smooth volatility. Joining a monetary union removes exchange rate policy entirely, because members share a single currency and a single {{1}} bank &mdash; so no member can {{2}} its way to competitiveness.",
      blanks: [
        { answer: "managed", options: ["managed", "sterilised", "pegged", "competitive"] },
        { answer: "central", options: ["central", "commercial", "investment", "clearing"] },
        { answer: "devalue", options: ["devalue", "legislate", "tax", "borrow"] },
      ],
      explain: "The last clause is the standard cost-of-membership argument. Outside a union, a country whose costs have drifted out of line can restore competitiveness relatively quickly by letting its currency fall. Inside one, the same adjustment has to come through wages and prices directly &mdash; slower, and far more painful in employment terms.",
    },

    /* ---------- m23 Global harmonisation and monetary union ---------- */
    {
      id: "cb2-m23-d01", type: "mcq", module: "m23",
      q: "Why can a &lsquo;one-size-fits-all&rsquo; monetary policy be a problem within a monetary union?",
      options: [
        "Members may be at different points in the cycle, so one interest rate suits some and not others",
        "Each member continues to set its own interest rate independently",
        "A single currency makes cross-border trade more expensive",
        "Convergence criteria prevent members from trading with one another",
      ],
      correct: 0,
      explain: "A single rate must serve every member. If one economy is overheating while another is in recession, the rate that cools the first will deepen the second's downturn. With no national exchange rate or interest rate left as a shock absorber, adjustment falls on wages, prices and migration.",
      why: {
        1: "Surrendering the national interest rate is exactly what joining involves &mdash; if members kept their own rates, there would be no problem to describe.",
        2: "A single currency makes cross-border trade <em>cheaper</em>, by removing conversion costs and exchange rate risk. That is one of the main benefits.",
        3: "Convergence criteria are entry conditions on inflation, deficits, debt and rates. They constrain macroeconomic policy, not trade.",
      },
    },
    {
      id: "cb2-m23-d02", type: "mcq", module: "m23",
      q: "Which of the following best describes <em>foreign direct investment</em>?",
      options: [
        "A firm investing in productive assets, such as a factory or subsidiary, in another country",
        "A pension fund buying shares in a foreign company on a stock exchange",
        "A bank lending short-term to an overseas borrower",
        "A government buying foreign currency to add to its reserves",
      ],
      correct: 0,
      explain: "The word doing the work is <em>direct</em>: FDI involves lasting control of real productive capacity abroad, not merely a financial claim. That distinction matters because FDI is stickier than portfolio flows and brings technology, management practice and jobs with it &mdash; which is why host governments compete for it.",
      why: {
        1: "Buying shares without control is <em>portfolio</em> investment. It can be sold in an afternoon, which is precisely what makes it a less stable source of capital for a host country.",
        2: "Cross-border lending is a financial flow, creating a claim rather than ownership of productive assets.",
        3: "Reserve accumulation is a central bank operation, part of exchange rate management rather than investment abroad.",
      },
    },
    {
      id: "cb2-m23-d03", type: "mcq", module: "m23",
      q: "Which of the following is a recognised criticism of globalisation?",
      options: [
        "It can widen inequality within countries and increase exposure to global shocks",
        "It reduces the range of goods available to consumers",
        "It prevents firms from accessing cheaper inputs from abroad",
        "It eliminates competition between domestic and foreign producers",
      ],
      correct: 0,
      explain: "The gains from globalisation are real but unevenly distributed: consumers and export sectors do well, while workers in import-competing industries can face lasting job losses. Integration also transmits shocks &mdash; a disruption in one country now propagates through supply chains to firms that never traded with it directly.",
      why: {
        1: "Wider consumer choice is one of globalisation's clearest benefits, not a criticism of it.",
        2: "Access to cheaper and more varied inputs is likewise a benefit, and a major reason firms support open trade.",
        3: "Globalisation intensifies competition between domestic and foreign producers. That competition is uncomfortable for some firms, but it is the opposite of elimination.",
      },
    },
    {
      id: "cb2-m23-d04", type: "mcq", module: "m23",
      q: "In the context of global economic policy, <em>harmonisation</em> means:",
      options: [
        "aligning regulations and standards across countries to reduce cross-border frictions",
        "countries agreeing to adopt a single shared currency",
        "eliminating all differences in wage levels between countries",
        "coordinating interest rate decisions between central banks",
      ],
      correct: 0,
      explain: "Divergent national standards act as a non-tariff barrier: a product certified in one country may need re-testing and redesign for another. Aligning the rules cuts that cost. The trade-off is sovereignty &mdash; harmonising means accepting rules a country did not set alone, which is the usual objection to it.",
      why: {
        1: "That is monetary union, a much deeper and narrower form of integration.",
        2: "Wage differences reflect productivity, living costs and labour supply. No harmonisation agenda targets them, and trade theory says such differences are part of what generates gains from trade.",
        3: "Central banks do talk to each other, but harmonisation in this sense is about regulations and standards, not the setting of interest rates.",
      },
    },
    {
      id: "cb2-m23-d05", type: "multi", module: "m23",
      q: "Which of the following are benefits a monetary union is intended to bring its members? Select all that apply.",
      options: [
        "Elimination of exchange rate risk on trade between members",
        "Lower transaction costs from no longer converting currencies",
        "Deeper economic integration and more transparent price comparison",
        "Greater freedom for each member to devalue in response to a downturn",
      ],
      correct: [0, 1, 2],
      explain: "The first three are the standard case for joining, and they all flow from the same source: one currency means no conversion and no currency risk between members. The fourth is the principal <em>cost</em>, not a benefit &mdash; devaluation is precisely the tool a member gives up, which is why an asymmetric shock is so much harder to absorb inside a union.",
    },
    {
      id: "cb2-m23-d06", type: "cloze", module: "m23",
      text: "{{0}} means relocating part of a business's operations to another country, often to reduce costs. Convergence {{1}} on inflation, debt and deficits are typically imposed before a country may join a monetary union, and deeper integration of this kind means ceding some national {{2}}.",
      blanks: [
        { answer: "Offshoring", options: ["Offshoring", "Harmonisation", "Securitisation", "Privatisation"] },
        { answer: "criteria", options: ["criteria", "tariffs", "subsidies", "quotas"] },
        { answer: "sovereignty", options: ["sovereignty", "revenue", "currency reserves", "trade volume"] },
      ],
      explain: "Convergence criteria exist because a union is only workable if members' economies behave similarly enough for one monetary policy to fit. The sovereignty point is what makes membership politically contentious rather than merely technical: the powers surrendered &mdash; the exchange rate, the interest rate, and limits on borrowing &mdash; are exactly the ones governments reach for in a crisis.",
    },

    /* ---------- m24 Summary of debates on theory and policy ---------- */
    {
      id: "cb2-m24-d01", type: "mcq", module: "m24",
      q: "In the context of the 2008 financial crisis, <em>moral hazard</em> refers to:",
      options: [
        "banks taking greater risks because they expected not to bear the full consequences of failure",
        "borrowers concealing their true income when applying for a mortgage",
        "rating agencies being paid by the issuers whose securities they rated",
        "regulators lacking the information needed to supervise complex institutions",
      ],
      correct: 0,
      explain: "Moral hazard is about incentives <em>after</em> protection exists: an institution believed too big to fail can keep the gains from risk-taking while expecting the state to absorb the losses. That asymmetry encourages exactly the behaviour the protection was meant to guard against, which is why post-crisis reform focused on resolution regimes and making shareholders bear losses.",
      why: {
        1: "Concealing income is <em>adverse selection</em> (or plain fraud) &mdash; hidden information before a contract, rather than changed behaviour after it. The two market failures are routinely confused, and the timing is the test.",
        2: "The issuer-pays model is a conflict of interest, and a genuine contributor to the crisis, but it describes misaligned incentives in a third party rather than a protected institution taking more risk.",
        3: "That is imperfect information on the regulator's side &mdash; a form of government failure, not moral hazard.",
      },
    },
    {
      id: "cb2-m24-d02", type: "mcq", module: "m24",
      q: "What is the core argument <em>for</em> fiscal stimulus after a financial crisis?",
      options: [
        "Cutting spending in a downturn deepens it, while spending supports demand and speeds recovery",
        "Higher government spending directly reduces the outstanding stock of national debt",
        "Stimulus guarantees that inflation will remain close to the central bank's target",
        "Government spending has no effect either way on private sector investment",
      ],
      correct: 0,
      explain: "The case rests on the multiplier and on the paradox of thrift. In a slump the private sector is all trying to save at once, so someone has to spend; and because output lost to a deep recession is never recovered, allowing one is expensive in its own right. Advocates add that debt is manageable once growth returns.",
      why: {
        1: "Stimulus raises borrowing and so raises debt in the short run. The argument is that faster growth makes the debt <em>ratio</em> manageable later, which is a subtler claim than debt falling directly.",
        2: "Nothing guarantees that. If anything, opponents' central worry is that stimulus is inflationary.",
        3: "Crowding out says the opposite, and it's one of the main arguments <em>against</em> stimulus. Supporters respond that it is weak when rates are near zero and resources are idle &mdash; not that the effect doesn't exist.",
      },
    },
    {
      id: "cb2-m24-d03", type: "mcq", module: "m24",
      q: "What is the core argument <em>for</em> austerity after a crisis?",
      options: [
        "Reducing deficits restores investor confidence and puts the public finances on a sustainable footing",
        "Cutting government spending directly raises aggregate demand",
        "Lower public spending automatically reduces unemployment in the short run",
        "Higher debt levels have no effect on a government's borrowing costs",
      ],
      correct: 0,
      explain: "The concern is sustainability and credibility: markets that doubt a government's solvency demand higher yields, which raises borrowing costs across the economy and can become self-fulfilling. The Eurozone sovereign debt crisis is the case usually cited in support, and rising unemployment during consolidation the case usually cited against.",
      why: {
        1: "Spending cuts reduce aggregate demand &mdash; that's the acknowledged cost of austerity, and precisely what its critics emphasise.",
        2: "In the short run consolidation tends to raise unemployment. Any employment benefit is claimed for the long run, via confidence and investment.",
        3: "Debt levels affect borrowing costs directly, which is the entire foundation of the austerity case. This option would undercut the argument it is meant to support.",
      },
    },
    {
      id: "cb2-m24-d04", type: "mcq", module: "m24",
      q: "The shift toward <em>macroprudential</em> regulation after 2008 means supervisors now:",
      options: [
        "monitor risk across the financial system as a whole, not just within individual firms",
        "regulate only the very largest banks, exempting smaller institutions entirely",
        "set the policy interest rate jointly with the fiscal authorities",
        "guarantee the continued solvency of every institution they regulate",
      ],
      correct: 0,
      explain: "The lesson of 2008 was that a system can be unstable even when each institution looks sound on its own, because they hold correlated exposures and are connected to one another. Macroprudential tools &mdash; countercyclical capital buffers, limits on loan-to-value ratios, extra requirements for systemically important firms &mdash; target that system-wide build-up.",
      why: {
        1: "Systemic importance does attract extra requirements, but smaller institutions remain regulated. Exempting them would create a gap of exactly the kind macroprudential thinking warns about.",
        2: "Interest rates remain monetary policy. Macroprudential tools were developed partly so financial stability could be pursued <em>without</em> having to use the policy rate for it.",
        3: "No regime guarantees solvency, and guaranteeing it would create severe moral hazard. The aim is to make failure less likely and less contagious.",
      },
    },
    {
      id: "cb2-m24-d05", type: "multi", module: "m24",
      q: "Which of the following were common government or central bank responses to the 2008 crisis? Select all that apply.",
      options: [
        "Recapitalising or taking stakes in distressed banks",
        "Cutting policy interest rates aggressively toward zero",
        "Launching large-scale asset purchases under quantitative easing",
        "Raising capital requirements immediately, in the depths of the crisis",
      ],
      correct: [0, 1, 2],
      explain: "The first three were the emergency toolkit: stabilise the banks, cut rates to the floor, and when the floor was reached, buy assets instead. Tighter capital requirements did follow, but deliberately <em>afterwards</em> and phased in over years &mdash; forcing banks to raise capital mid-crisis would have made them shrink lending further and deepened the credit crunch.",
    },
    {
      id: "cb2-m24-d06", type: "cloze", module: "m24",
      text: "{{0}} risk is the danger that one institution's failure cascades through the financial system. Banks thought &lsquo;too big to fail&rsquo; may take excessive risks, a problem of moral {{1}}. Comparing schools of thought on the crisis suggests that no {{2}} theory fully explains a real-world event.",
      blanks: [
        { answer: "Systemic", options: ["Systemic", "Liquidity", "Operational", "Currency"] },
        { answer: "hazard", options: ["hazard", "selection", "suasion", "persuasion"] },
        { answer: "single", options: ["single", "modern", "mathematical", "monetary"] },
      ],
      explain: "The last blank is the honest conclusion the module builds to, and it's worth carrying into any &lsquo;discuss&rsquo; answer on the crisis. Monetarists point to credit and money growth, Keynesians to demand collapse and the case for stimulus, market-failure economists to regulation and moral hazard &mdash; and each identifies something real. Good judgement draws on several frameworks rather than defending one.",
    },
    /* ---------- hotspot questions (see docs/diagrams.js) ----------
       Deliberately grouped by diagram rather than by module: the economics
       of this format is reuse, and seeing how many questions one picture
       carries is the argument for drawing the next one. */

    /* supply-demand — m02 */
    {
      id: "cb2-h-sd-01", type: "hotspot", module: "m02", diagram: "supply-demand",
      q: "Click the curve that would shift if average consumer incomes rose.",
      answer: "demand-curve",
      explain: "Income is a demand-side determinant, so it moves the whole demand curve &mdash; right for a normal good. Nothing about producers' costs or technology has changed, so supply stays exactly where it is.",
      why: {
        "supply-curve": "Supply shifts when producers' conditions change: input costs, technology, taxes on production, the number of firms. A change in buyers' incomes is not one of those.",
        "equilibrium": "The equilibrium point will certainly move as a result, but it isn't a curve and it isn't what shifts &mdash; it's where the two curves happen to cross once one of them has moved.",
      },
    },
    {
      id: "cb2-h-sd-02", type: "hotspot", module: "m02", diagram: "supply-demand",
      q: "Click the area representing <em>consumer</em> surplus at the equilibrium price.",
      answer: "consumer-surplus",
      explain: "Consumer surplus is the gap between what buyers were willing to pay &mdash; the height of the demand curve &mdash; and what they actually paid, added up across every unit bought. That makes it the triangle above the price line and below demand.",
      why: {
        "producer-surplus": "That's the mirror image: the gap between the price sellers received and the minimum they would have accepted, which is the height of the supply curve. It sits <em>below</em> the price line.",
        "demand-curve": "The curve is the boundary of the area, not the surplus itself. Surplus is a quantity of value, so it has to be an area.",
        "supply-curve": "Same objection, and on the wrong side of the price line for consumers.",
      },
    },
    {
      id: "cb2-h-sd-03", type: "hotspot", module: "m02", diagram: "supply-demand",
      q: "Click the point at which there is no pressure for the price to change.",
      answer: "equilibrium",
      explain: "Where the curves cross, the quantity buyers want equals the quantity sellers offer, so no one is left unsatisfied and nobody needs to bid the price up or shade it down. Every other price generates a surplus or a shortage that pushes it back toward this point.",
      why: {
        "demand-curve": "Every point on the demand curve is a price&ndash;quantity pair buyers would accept, but at most of them sellers would not supply that quantity, so pressure on price remains.",
        "supply-curve": "Likewise: sellers would happily trade anywhere along it, but only one of those points is also acceptable to buyers.",
      },
    },

    /* demand-shift — m02 */
    {
      id: "cb2-h-ds-01", type: "hotspot", module: "m02", diagram: "demand-shift",
      q: "Demand has increased. Click the <em>new</em> equilibrium point.",
      answer: "new-equilibrium",
      explain: "The new equilibrium is where the shifted demand curve D&#8322; meets the unchanged supply curve &mdash; up and to the right of the old one. Both price and quantity have risen, which is the signature of a demand shift: they always move in the same direction.",
      why: {
        "original-equilibrium": "That's where the market was before demand moved. Read the new equilibrium off the <em>new</em> curve.",
        "new-demand": "D&#8322; is the shifted curve itself. The equilibrium is the single point where it crosses supply, not the whole line.",
        "supply-curve": "Supply hasn't moved, but the equilibrium is still only one point on it &mdash; the one that also lies on D&#8322;.",
      },
    },
    {
      id: "cb2-h-ds-02", type: "hotspot", module: "m02", diagram: "demand-shift",
      q: "Click the curve that has <em>not</em> moved in this diagram.",
      answer: "supply-curve",
      explain: "Only demand has shifted. Supply is unchanged, and what happens along it is a <em>movement</em>, not a shift: the higher price draws out a larger quantity supplied, sliding up the same curve to the new equilibrium.",
      why: {
        "original-demand": "D&#8321; is where demand started. It has been replaced by D&#8322;, which is precisely the shift the diagram is showing.",
        "new-demand": "D&#8322; is the shifted curve &mdash; the thing that moved.",
      },
    },

    /* monopoly — m06 */
    {
      id: "cb2-h-mon-01", type: "hotspot", module: "m06", diagram: "monopoly",
      q: "Click the curve the monopolist sets equal to marginal cost when choosing its output.",
      answer: "mr-curve",
      explain: "Profit is maximised where marginal revenue equals marginal cost. For a monopolist MR lies strictly below AR, because selling an extra unit means cutting the price on every unit &mdash; which is why the MR line here is twice as steep as the demand curve it starts alongside.",
      why: {
        "ar-curve": "AR is the demand curve, and it does the <em>second</em> job: once output is fixed by MR = MC, the price is read off AR above that output. Using AR to choose output gives the competitive answer, not the monopoly one.",
        "mc-curve": "Marginal cost is the other half of the condition, so this is half right &mdash; but the question asks which curve is set equal to it.",
        "ac-curve": "Average cost determines whether the firm makes a profit at the chosen output. It plays no part in choosing that output.",
      },
    },
    {
      id: "cb2-h-mon-02", type: "hotspot", module: "m06", diagram: "monopoly",
      q: "Click the point on the price axis showing the price this monopolist charges.",
      answer: "monopoly-price",
      explain: "Two steps, and the order matters. First find the output where MR = MC. Then go <em>up</em> to the demand curve at that output and across to the price axis &mdash; because the demand curve is what tells you the most buyers will pay for that quantity.",
      why: {
        "profit-max-output": "That's the quantity, on the horizontal axis. It's the first step of the answer, not the price.",
        "ar-curve": "The price is read <em>off</em> AR at the chosen output, but the question asks for the point on the price axis rather than the curve.",
        "mc-curve": "Price equals marginal cost only under perfect competition. A monopolist's price sits well above MC, and that gap is the source of the allocative inefficiency.",
      },
    },
    {
      id: "cb2-h-mon-03", type: "hotspot", module: "m06", diagram: "monopoly",
      q: "Click the output the monopolist actually produces.",
      answer: "profit-max-output",
      explain: "Drop a line from where MR crosses MC down to the quantity axis. Note how far to the left it sits compared with where MC crosses the demand curve &mdash; that restriction of output below the competitive level is exactly what the deadweight loss of monopoly measures.",
      why: {
        "monopoly-price": "That's the price, on the vertical axis. Quantities are read along the horizontal one.",
        "mr-curve": "MR is one of the curves used to find the output, but the output itself is a single value on the quantity axis.",
      },
    },
    {
      id: "cb2-h-mon-04", type: "hotspot", module: "m06", diagram: "monopoly",
      q: "Click the curve that determines whether this monopolist earns supernormal profit or makes a loss at its chosen output.",
      answer: "ac-curve",
      explain: "Profit per unit is price minus <em>average</em> cost, so comparing AC with the price at the chosen output is what settles whether there is a profit at all. Here AC lies below the price, so the firm earns supernormal profit &mdash; and barriers to entry are what let it keep doing so in the long run.",
      why: {
        "mc-curve": "Marginal cost governs how much to produce, not whether producing that amount is profitable. A firm can be at MR = MC and still be making a loss.",
        "ar-curve": "AR gives the price, which is one side of the comparison &mdash; but you need a cost curve for the other side, and it has to be the average one.",
        "mr-curve": "MR helps choose the output and says nothing about costs.",
      },
    },

    /* perfect-competition-firm — m06 */
    {
      id: "cb2-h-pc-01", type: "hotspot", module: "m06", diagram: "perfect-competition-firm",
      q: "Click the firm's demand curve.",
      answer: "demand-curve",
      explain: "A price-taker's demand curve is horizontal at the market price: the firm is so small that it can sell as much as it likes without moving the price, and would sell nothing at all if it charged a penny more. Because price is constant, AR and MR lie on the same line.",
      why: {
        "mc-curve": "Marginal cost is a cost curve. It does become the firm's <em>supply</em> curve above the shut-down point, but it is not its demand curve.",
        "ac-curve": "Average cost is also a cost curve, and it has nothing to do with what buyers will pay.",
        "min-ac-point": "That point lies on the demand curve here, but it's a single point rather than the curve itself.",
      },
    },
    {
      id: "cb2-h-pc-02", type: "hotspot", module: "m06", diagram: "perfect-competition-firm",
      q: "Click the point showing that this firm is <em>productively efficient</em>.",
      answer: "min-ac-point",
      explain: "Productive efficiency means producing at the lowest possible average cost. In long-run equilibrium under perfect competition the flat demand line is tangent to the bottom of the AC curve, so the firm is forced there &mdash; any firm producing at higher cost would be undercut and driven out.",
      why: {
        "profit-max-output": "That's the same output read off the quantity axis. The efficiency claim is about the <em>cost</em> reached at that output, so the point on the curve is what shows it.",
        "ac-curve": "The whole curve shows costs at every output. Productive efficiency happens at one specific point on it, the minimum.",
        "demand-curve": "The demand line shows the price. That it just touches the bottom of AC is what makes this long-run equilibrium, but the efficiency point is where they touch.",
      },
    },
    {
      id: "cb2-h-pc-03", type: "hotspot", module: "m06", diagram: "perfect-competition-firm",
      q: "Click the curve that, above the shut-down point, is this firm's short-run supply curve.",
      answer: "mc-curve",
      explain: "A price-taker produces where price equals marginal cost, so for any price you care to name, the MC curve tells you the quantity supplied &mdash; which is exactly what a supply curve does. Below average variable cost the firm shuts down instead, which is why only the portion above that point counts.",
      why: {
        "ac-curve": "Average cost determines profitability and the shut-down decision's cousin, but it doesn't tell you how much the firm produces at a given price.",
        "demand-curve": "That's the price the firm faces, not its supply response.",
        "min-ac-point": "A single point, and in any case on the average rather than the marginal curve.",
      },
    },

    /* negative-externality — m09 */
    {
      id: "cb2-h-ext-01", type: "hotspot", module: "m09", diagram: "negative-externality",
      q: "Click the curve that includes the cost borne by third parties as well as by the producer.",
      answer: "msc-curve",
      explain: "Marginal social cost is private cost plus external cost, so MSC lies above MPC by exactly the size of the externality. The whole problem is that the firm decides using the lower curve while society bears the higher one.",
      why: {
        "mpc-curve": "Marginal private cost is what the firm itself pays, and it's precisely the curve that <em>omits</em> the harm to third parties.",
        "demand-curve": "That's marginal private benefit &mdash; the buyers' side. In this diagram there is no benefit externality, so it doubles as marginal social benefit.",
      },
    },
    {
      id: "cb2-h-ext-02", type: "hotspot", module: "m09", diagram: "negative-externality",
      q: "Click the quantity a free market with no intervention will produce.",
      answer: "market-output",
      explain: "Firms weigh their own costs against what buyers will pay, so the market settles where demand crosses <em>private</em> cost &mdash; the further-right of the two marked quantities. That it exceeds the social optimum is the definition of over-production, and the gap is what a Pigouvian tax is meant to close.",
      why: {
        "social-optimum": "That's where demand crosses <em>social</em> cost &mdash; the quantity we'd want. Nothing makes an unregulated market produce it, because the firm never sees the external cost.",
        "deadweight-loss": "That's the welfare cost of the gap between the two quantities, not a quantity itself.",
      },
    },
    {
      id: "cb2-h-ext-03", type: "hotspot", module: "m09", diagram: "negative-externality",
      q: "Click the area representing the deadweight loss caused by the externality.",
      answer: "deadweight-loss",
      explain: "Between the social optimum and the market output, every unit costs society more than buyers value it &mdash; the MSC curve lies above the demand curve over that range. Summing that shortfall gives the triangle, which is the welfare a correcting tax would recover.",
      why: {
        "msc-curve": "The curve is one boundary of the triangle. A welfare loss is an amount, so it must be an area.",
        "demand-curve": "Also a boundary of the triangle, for the same reason.",
        "market-output": "That's where the triangle ends on the quantity axis, not the loss itself.",
      },
    },

    /* as-ad — m10 */
    {
      id: "cb2-h-asad-01", type: "hotspot", module: "m10", diagram: "as-ad",
      q: "Click the curve showing the output the economy can sustain once wages and prices have fully adjusted.",
      answer: "lras-curve",
      explain: "Long-run aggregate supply is vertical because capacity depends on real things &mdash; labour, capital, skills, technology &mdash; and none of them changes when every price and wage moves together. Its position is potential output, and only supply-side policy can shift it.",
      why: {
        "sras-curve": "Short-run aggregate supply slopes upward precisely because some prices and wages are <em>sticky</em>. The question specifies that they have fully adjusted.",
        "ad-curve": "Aggregate demand is the spending side: C + I + G + (X &minus; M) at each price level, not what the economy is capable of producing.",
      },
    },
    {
      id: "cb2-h-asad-02", type: "hotspot", module: "m10", diagram: "as-ad",
      q: "This economy has a negative output gap. Click the point showing where it is currently operating.",
      answer: "equilibrium",
      explain: "Current output is where AD meets SRAS. Because it sits to the <em>left</em> of LRAS, the economy is producing below potential &mdash; a negative output gap, with spare capacity and unemployment above the natural rate, which is the standard case for demand-side stimulus.",
      why: {
        "potential-output": "That's where the economy <em>could</em> be, marked by LRAS. The gap is the distance between the two, so picking potential output confuses the target with the position.",
        "lras-curve": "LRAS marks potential output, not where the economy currently sits.",
        "ad-curve": "Current output is a single point where two curves meet, not a whole curve.",
      },
    },
    {
      id: "cb2-h-asad-03", type: "hotspot", module: "m10", diagram: "as-ad",
      q: "Click the curve that a cut in interest rates would shift.",
      answer: "ad-curve",
      explain: "Lower rates make borrowing cheaper, which raises investment and consumption, so planned spending rises at every price level and AD moves right. That closes a negative output gap &mdash; but because LRAS is unmoved, pushing beyond potential would buy inflation rather than lasting output.",
      why: {
        "sras-curve": "SRAS shifts when production <em>costs</em> change &mdash; an oil price shock, a wage settlement. Interest rates work through demand.",
        "lras-curve": "LRAS moves only when the economy's real capacity changes, which is the business of supply-side policy over years, not of a rate decision.",
      },
    },

    /* phillips — m19 */
    {
      id: "cb2-h-pc2-01", type: "hotspot", module: "m19", diagram: "phillips",
      q: "Click the curve implying that there is <em>no</em> permanent trade-off between inflation and unemployment.",
      answer: "lrpc-curve",
      explain: "Being vertical, the long-run curve says unemployment settles at the natural rate whatever the inflation rate &mdash; so buying lower unemployment with higher inflation works only until expectations catch up. This is why central banks target inflation rather than trying to exploit a trade-off.",
      why: {
        "srpc-curve": "The short-run curve does slope downward and does offer a trade-off, but only a temporary one that exists because expectations lag reality. It shifts upward as they adjust.",
        "natural-rate": "That's the unemployment rate the vertical curve sits at, not the curve making the claim.",
      },
    },
    {
      id: "cb2-h-pc2-02", type: "hotspot", module: "m19", diagram: "phillips",
      q: "Click the rate of unemployment consistent with stable inflation.",
      answer: "natural-rate",
      explain: "The natural rate is where the long-run curve meets the unemployment axis: the rate left once cyclical unemployment has gone, made up of frictional and structural unemployment. Holding unemployment below it is what the accelerationist hypothesis says produces ever-rising inflation.",
      why: {
        "lrpc-curve": "The vertical curve sits <em>at</em> the natural rate, so this is close &mdash; but the question asks for a rate of unemployment, which is a value on the horizontal axis.",
        "srpc-curve": "The short-run curve crosses many unemployment rates, only one of which is the natural rate.",
      },
    },
  ],
};

if (typeof module !== "undefined" && module.exports) module.exports = DRILLS;

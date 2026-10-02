// CB1 Business Finance: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CB1", {
  modules: [
      {
          "id": "m01",
          "title": "Key principles of finance",
          "description": "What finance is for: the link between real resources, finance and an organisation's objectives, the stakeholders (owners, lenders, managers), the role of capital markets, shareholder wealth maximisation, its practical problems (agency, social responsibility, divergent objectives) and what determines a company's value.",
          "cards": [
              {
                  "q": "What is the relationship between finance and real resources?",
                  "a": "Finance is the means of acquiring real resources (land, labour, capital, technology) that an organisation uses to pursue its objectives; funds raised are only worth what the real investments they buy can earn.",
                  "explain": "Money is not productive by itself — it is the claim on resources that matters."
              },
              {
                  "q": "What is the usual primary financial objective of a company?",
                  "a": "To maximise shareholder wealth, i.e. the market value of the ordinary shares, through share price growth and dividends.",
                  "explain": "Other objectives (profit, growth, market share) are usually means to this end."
              },
              {
                  "q": "Why is profit maximisation an inadequate objective?",
                  "a": "It ignores timing (a profit today is worth more than one later), risk, the scale of capital employed, and which profit measure is meant, and it can be manipulated by accounting choices.",
                  "explain": "Shareholder wealth deals with all of these because market value reflects timing and risk."
              },
              {
                  "q": "What does the capital market do for companies and investors?",
                  "a": "It brings together those with surplus funds and those needing funds, sets a price (the cost of capital) reflecting risk, provides liquidity for securities and reveals information through prices.",
                  "explain": "The primary market raises new funds; the secondary market trades existing securities."
              },
              {
                  "q": "What is the agency problem?",
                  "a": "Managers (agents) may pursue their own interests rather than those of shareholders (principals), because ownership and control are separated and information is asymmetric.",
                  "explain": "Examples: empire building, excessive perks, avoiding risk to protect jobs."
              },
              {
                  "q": "Name three ways of reducing agency problems.",
                  "a": "Linking managers' pay to shareholder returns (share options, bonuses), monitoring by non-executive directors and auditors, and the discipline of the market for corporate control (takeover threat) and of lenders' covenants.",
                  "explain": "Each has costs and can create new distortions, e.g. short-termism."
              },
              {
                  "q": "What conflicts can arise between shareholders and lenders?",
                  "a": "Shareholders may favour riskier projects (they gain the upside, lenders bear the downside) or higher dividends that reduce assets available to repay debt; lenders respond with covenants and security.",
                  "explain": "This is why debt terms often restrict dividends and further borrowing."
              },
              {
                  "q": "What is social responsibility in a corporate context, and why might it conflict with shareholder wealth?",
                  "a": "Considering the interests of employees, customers, communities and the environment. It may impose costs that reduce short-term returns, though good conduct can protect reputation and long-term value.",
                  "explain": "Increasingly seen as part of managing long-term value."
              },
              {
                  "q": "Who are a company's main stakeholders?",
                  "a": "Shareholders, lenders, employees, managers, customers, suppliers, government and the wider community.",
                  "explain": "Their objectives may diverge, so management must balance them."
              },
              {
                  "q": "What determines a company's value?",
                  "a": "The size, timing and risk of its expected future cash flows: value is the present value of those flows at a rate reflecting their risk.",
                  "explain": "Managers influence value by choosing investments, financing and dividend policy and by managing risk."
              },
              {
                  "q": "What actions can managers take to increase shareholder value?",
                  "a": "Invest in projects with positive net present value, cut costs, improve working capital, adopt an appropriate capital structure, grow sales profitably and communicate credibly with the market.",
                  "explain": "Value is created only when returns exceed the cost of the capital used."
              },
              {
                  "q": "What is the difference between the primary and secondary market?",
                  "a": "In the primary market new securities are issued and the company receives the proceeds; in the secondary market existing securities are traded between investors and the company receives nothing.",
                  "explain": "A liquid secondary market makes investors willing to buy in the primary market."
              },
              {
                  "q": "Why does risk matter in finance?",
                  "a": "Investors demand higher expected returns for bearing more risk, so the cost of finance and the required return on projects rise with risk.",
                  "explain": "Risk-return trade-off underlies all later cost-of-capital work."
              },
              {
                  "q": "What is meant by 'divergent objectives' within an organisation?",
                  "a": "Different departments or individuals pursue different goals (e.g. sales maximise revenue, production minimise cost), which may not add up to shareholder value maximisation.",
                  "explain": "Good governance and incentive design try to align them."
              },
              {
                  "q": "How does the time value of money underpin corporate finance?",
                  "a": "A pound received sooner can be invested to earn a return, so cash flows at different times must be compared by discounting to a common date.",
                  "explain": "It is the basis of NPV, cost of capital and share valuation."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Key principles of corporate governance and ethics",
          "description": "Corporate governance: regulation of financial reporting, the role of the board and non-executive directors, codes such as the UK Corporate Governance Code, the auditor, shareholder rights, and the ethical responsibilities of owners and managers.",
          "cards": [
              {
                  "q": "What is corporate governance?",
                  "a": "The system by which companies are directed and controlled, defining the rights and responsibilities of the board, managers, shareholders and other stakeholders.",
                  "explain": "It aims to protect shareholders and ensure accountability."
              },
              {
                  "q": "What is the role of the board of directors?",
                  "a": "To set strategy, appoint and oversee management, ensure effective risk management and internal control, and be accountable to shareholders.",
                  "explain": "Directors owe fiduciary duties to the company."
              },
              {
                  "q": "Why are non-executive directors important?",
                  "a": "They bring independent judgement, challenge executive decisions, sit on audit, remuneration and nomination committees and help protect minority shareholders.",
                  "explain": "Independence is key to effective challenge."
              },
              {
                  "q": "Why separate the roles of chair and chief executive?",
                  "a": "It avoids too much power in one person and allows the board to supervise management independently.",
                  "explain": "A common recommendation in governance codes."
              },
              {
                  "q": "What does the UK Corporate Governance Code use as its approach?",
                  "a": "'Comply or explain': companies either follow the Code's provisions or explain why they depart from them.",
                  "explain": "A flexible, principles-based approach."
              },
              {
                  "q": "What is the role of the external auditor?",
                  "a": "To give an independent opinion on whether the financial statements give a true and fair view, providing assurance to shareholders and other users.",
                  "explain": "Auditor independence is safeguarded by rules on non-audit fees and rotation."
              },
              {
                  "q": "What is the purpose of an audit committee?",
                  "a": "To oversee financial reporting, internal control and the relationship with the external auditors, on behalf of the board.",
                  "explain": "Made up mainly of independent non-executive directors."
              },
              {
                  "q": "Why regulate financial reporting of companies?",
                  "a": "Investors and lenders rely on reported information; regulation ensures it is prepared consistently, is reliable and is published, reducing fraud and information asymmetry.",
                  "explain": "Company law and accounting standards set the rules."
              },
              {
                  "q": "What is a remuneration committee's role?",
                  "a": "Setting executive pay policy, aiming to attract and retain talent while aligning rewards with long-term performance and avoiding excessive risk-taking.",
                  "explain": "Shareholders often have an advisory or binding vote on pay."
              },
              {
                  "q": "What are the ethical responsibilities of managers and owners?",
                  "a": "Honesty and integrity in reporting, fair dealing with stakeholders, complying with the spirit as well as the letter of the law, avoiding conflicts of interest and considering wider social and environmental impact.",
                  "explain": "Ethics goes beyond legal compliance."
              },
              {
                  "q": "What is whistleblowing?",
                  "a": "Raising concerns about wrongdoing within an organisation, supported by policies that protect those who report in good faith.",
                  "explain": "An important internal control."
              },
              {
                  "q": "What is insider dealing?",
                  "a": "Trading securities using non-public price-sensitive information, which is illegal because it undermines fairness in markets.",
                  "explain": "Regulated by law and the market regulator."
              },
              {
                  "q": "How does good governance help a company?",
                  "a": "Reduces the risk of fraud and mismanagement, improves investor confidence and can lower the cost of capital.",
                  "explain": "Poor governance often precedes corporate failures."
              },
              {
                  "q": "What are shareholders' typical rights?",
                  "a": "To vote on major decisions and directors' appointment, receive dividends when declared, receive reports and accounts and share in assets on winding up after creditors.",
                  "explain": "Rights vary with the class of share."
              },
              {
                  "q": "Why can institutional shareholders influence governance?",
                  "a": "They hold large stakes, can engage with boards and vote, and increasingly follow stewardship codes.",
                  "explain": "Stewardship complements board oversight."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Business ownership",
          "description": "Forms of business ownership: sole traders, partnerships, limited companies (private and public), social enterprises, the meaning and advantages of limited liability, and how ownership form affects control, finance and risk.",
          "cards": [
              {
                  "q": "What are the characteristics of a sole trader?",
                  "a": "One owner, unlimited personal liability, simple to set up, owner keeps all profit and bears all losses, limited ability to raise capital.",
                  "explain": "No legal separation between owner and business."
              },
              {
                  "q": "What is a partnership?",
                  "a": "A business owned by two or more people who share profits and (in a general partnership) have joint and several unlimited liability.",
                  "explain": "Finance is limited to partners' resources and borrowing."
              },
              {
                  "q": "What is a limited company?",
                  "a": "A separate legal entity owned by shareholders whose liability is limited to the amount they have invested or agreed to invest.",
                  "explain": "The company can own property, sue and be sued."
              },
              {
                  "q": "What are the advantages of limited liability?",
                  "a": "Shareholders' personal assets are protected, which encourages investment and risk-taking, makes shares easily transferable and helps raise capital.",
                  "explain": "The cost is extra regulation and disclosure."
              },
              {
                  "q": "What is the difference between a private and a public company?",
                  "a": "A public company may offer shares to the public and (if listed) trade them on a stock exchange, but faces stricter regulation and disclosure; a private company cannot offer shares to the public.",
                  "explain": "Public companies must have a minimum share capital in many jurisdictions."
              },
              {
                  "q": "What is a social enterprise?",
                  "a": "A business with primarily social or environmental objectives, reinvesting most profits into its mission rather than distributing them to owners.",
                  "explain": "Includes community interest companies and some co-operatives."
              },
              {
                  "q": "What are the disadvantages of forming a limited company relative to trading as a sole trader?",
                  "a": "More administration, legal formalities, disclosure of accounts and compliance costs, and less privacy; also lenders often demand personal guarantees from small company owners.",
                  "explain": "Trade-off between protection and simplicity."
              },
              {
                  "q": "What is a limited liability partnership?",
                  "a": "A structure giving partners limited liability while being taxed like a partnership.",
                  "explain": "Popular with professional firms."
              },
              {
                  "q": "What does 'separate legal personality' mean?",
                  "a": "The company exists independently of its owners, so it owns assets and owes debts in its own name.",
                  "explain": "Foundation of limited liability."
              },
              {
                  "q": "How does ownership form affect access to finance?",
                  "a": "Sole traders and partnerships rely on owners' funds and bank loans, while companies can issue shares and debt and, if public, access capital markets.",
                  "explain": "Growth usually needs a company structure."
              },
              {
                  "q": "What is a co-operative?",
                  "a": "A business owned and controlled by its members, who may be customers, employees or producers, with profits shared according to use.",
                  "explain": "Democratic control."
              },
              {
                  "q": "What is a holding company?",
                  "a": "A company that owns shares in other companies (subsidiaries) and controls them.",
                  "explain": "Links to group accounts."
              },
              {
                  "q": "How does the transfer of ownership differ between a sole trader and a company?",
                  "a": "A sole trader sells the business assets; a company's ownership changes by transferring shares without affecting the company itself.",
                  "explain": "Continuity is a benefit of incorporation."
              },
              {
                  "q": "Why might a family business remain private?",
                  "a": "To keep control, avoid disclosure and regulation and to plan for long-term rather than market-driven goals.",
                  "explain": "Private companies can still raise finance from banks and investors."
              },
              {
                  "q": "What is unlimited liability and who bears it?",
                  "a": "Owners are personally liable for all the business's debts, to the extent of their whole personal wealth; it applies to sole traders and general partners.",
                  "explain": "Key risk for unincorporated businesses."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Taxation",
          "description": "Principles of personal and corporate taxation: income tax and capital gains tax, corporation tax, the classical, imputation and partial imputation systems, tax on dividends, double taxation relief and offshore investment funds, and how tax influences financing and behaviour.",
          "cards": [
              {
                  "q": "What is the difference between direct and indirect tax?",
                  "a": "Direct taxes are levied on income or wealth (income tax, corporation tax, capital gains tax); indirect taxes are levied on spending (VAT, duties).",
                  "explain": "Company finance is mainly affected by direct taxes."
              },
              {
                  "q": "How are capital gains taxed for individuals?",
                  "a": "The gain (sale proceeds less cost, with allowances) is taxed at the individual's capital gains rates, often with an annual exempt amount.",
                  "explain": "Deferral until sale is a tax advantage of holding growth assets."
              },
              {
                  "q": "What is the classical system of company taxation?",
                  "a": "Profits are taxed in the company and dividends are taxed again in the shareholder's hands with no credit for corporation tax, giving double taxation of distributed profits.",
                  "explain": "Creates a tax bias towards retention and debt."
              },
              {
                  "q": "What is the imputation system?",
                  "a": "The shareholder receives a tax credit for corporation tax already paid on the profits out of which the dividend is paid, so profits are effectively taxed once at the shareholder's rate.",
                  "explain": "Removes the double taxation of dividends."
              },
              {
                  "q": "What is the partial imputation system?",
                  "a": "The shareholder receives a credit for part of the corporation tax paid, so double taxation is reduced but not eliminated.",
                  "explain": "A compromise between classical and full imputation."
              },
              {
                  "q": "Why is debt interest often tax-advantaged?",
                  "a": "Interest is usually deductible from taxable profit whereas dividends are not, so debt is cheaper after tax, subject to limits on deductibility.",
                  "explain": "The 'tax shield' on debt is a key capital structure factor."
              },
              {
                  "q": "What is a tax shield?",
                  "a": "The reduction in tax caused by deducting a cost from taxable profit; for interest it equals interest × corporation tax rate.",
                  "explain": "Interest of £10m at 25% saves £2.5m of tax."
              },
              {
                  "q": "What is double taxation relief?",
                  "a": "Relief (by credit, exemption or deduction) preventing the same income being taxed in two countries, often set out in double tax treaties.",
                  "explain": "Important for multinational groups."
              },
              {
                  "q": "What is a withholding tax?",
                  "a": "Tax deducted at source on payments such as dividends, interest or royalties paid to non-residents.",
                  "explain": "Rates are often reduced by treaty."
              },
              {
                  "q": "How might offshore investment funds be taxed?",
                  "a": "Some regimes tax the gains as income on disposal or apply special rules unless the fund meets reporting requirements, to prevent deferral of tax through offshore vehicles.",
                  "explain": "Rules aim to stop tax avoidance."
              },
              {
                  "q": "How does taxation influence dividend policy?",
                  "a": "If dividends are taxed more heavily than capital gains, shareholders prefer retention or buybacks; tax-exempt investors prefer dividends.",
                  "explain": "Clientele effect."
              },
              {
                  "q": "What is capital allowances?",
                  "a": "Tax relief for spending on fixed assets, given in place of accounting depreciation, which is not tax deductible.",
                  "explain": "Affects cash flows in project appraisal."
              },
              {
                  "q": "How do tax rules affect project appraisal?",
                  "a": "Cash flows should be measured after tax, including tax on profits and the timing of capital allowances.",
                  "explain": "Tax timing matters for NPV."
              },
              {
                  "q": "Why might company tax systems affect where multinationals locate profits?",
                  "a": "Lower tax jurisdictions attract profit shifting via transfer pricing and intra-group financing, prompting anti-avoidance rules.",
                  "explain": "Base erosion issues."
              },
              {
                  "q": "What is corporation tax?",
                  "a": "Tax on company profits, charged at a set rate on taxable profit after allowable deductions.",
                  "explain": "Paid after year end in many regimes."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Long-term finance",
          "description": "Long-term sources of company finance: ordinary and preference shares, authorised and issued share capital, loan stocks and debentures, Eurobonds, convertibles, contingent convertibles, floating rate notes, subordinated debt, asset-backed securities and company options, and their characteristics.",
          "cards": [
              {
                  "q": "What is authorised versus issued share capital?",
                  "a": "Authorised (where used) is the maximum share capital a company may issue under its constitution; issued is the amount actually issued to shareholders.",
                  "explain": "Called-up and paid-up capital refine this further."
              },
              {
                  "q": "What are ordinary shares?",
                  "a": "Equity shares carrying voting rights and a residual claim on profits and assets after all other claims, with returns via dividends and capital gain.",
                  "explain": "Highest risk, highest expected return."
              },
              {
                  "q": "What are preference shares?",
                  "a": "Shares with a fixed dividend paid before ordinary dividends, usually no vote and priority over ordinary shares on winding up.",
                  "explain": "Cumulative preference shares carry forward unpaid dividends."
              },
              {
                  "q": "What is a debenture?",
                  "a": "A loan secured on the company's assets by a fixed or floating charge, paying fixed interest and repayable on a set date.",
                  "explain": "Secured lenders rank ahead of unsecured creditors."
              },
              {
                  "q": "What is unsecured loan stock?",
                  "a": "Debt not secured on specific assets, so holders rank as unsecured creditors and demand higher interest than for debentures.",
                  "explain": "Riskier than debentures."
              },
              {
                  "q": "What is a Eurobond?",
                  "a": "A bond issued in a currency other than that of the country where it is issued, usually sold to international investors and traded outside national regulation.",
                  "explain": "Flexible and often bearer form."
              },
              {
                  "q": "What is a convertible loan stock?",
                  "a": "Debt that the holder may convert into ordinary shares on set terms, giving lower coupon in exchange for upside.",
                  "explain": "Combines a bond with a call option on shares."
              },
              {
                  "q": "What is a contingent convertible (CoCo)?",
                  "a": "Debt that converts to equity or is written down automatically if a trigger event (e.g. capital ratio falling below a level) occurs.",
                  "explain": "Issued mainly by banks to build loss-absorbing capital."
              },
              {
                  "q": "What is a floating rate note?",
                  "a": "A bond whose coupon is reset periodically by reference to a market rate (e.g. an overnight or interbank rate plus a margin).",
                  "explain": "Protects investors against rising rates."
              },
              {
                  "q": "What is subordinated debt?",
                  "a": "Debt ranking behind senior creditors on liquidation but ahead of shareholders, so it pays higher interest.",
                  "explain": "Counts as regulatory capital for banks and insurers."
              },
              {
                  "q": "What are asset-backed securities?",
                  "a": "Securities whose payments come from a pool of assets such as mortgages or loans, often split into tranches by seniority.",
                  "explain": "Securitisation transfers risk to investors."
              },
              {
                  "q": "What are warrants and company-issued options?",
                  "a": "Options allowing the holder to buy new shares at a set price, often attached to bonds as a sweetener or used for employees.",
                  "explain": "Exercise raises new equity."
              },
              {
                  "q": "Why might a company issue preference shares rather than debt?",
                  "a": "Preference dividends are not a legal obligation like interest, so non-payment does not trigger default, though they are not tax-deductible.",
                  "explain": "Flexibility versus higher cost."
              },
              {
                  "q": "What are the advantages of debt finance for a company?",
                  "a": "Cheaper than equity, interest is tax-deductible, no dilution of control; the disadvantages are fixed obligations and financial risk.",
                  "explain": "Balance of risk and cost."
              },
              {
                  "q": "What is a floating charge?",
                  "a": "Security over a class of changing assets (such as stock) that crystallises into a fixed charge on default.",
                  "explain": "Allows the company to trade assets freely."
              },
              {
                  "q": "What is a bond's coupon and redemption?",
                  "a": "The coupon is the periodic interest; redemption is the repayment of principal at maturity (par or a premium).",
                  "explain": "Determines the bond's cash flows."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Issue of shares",
          "description": "How companies issue and trade shares: reasons for and against a stock exchange quotation, methods of obtaining a listing (offer for sale, tender, subscription, placing, introduction), rights issues, the role of underwriting, and how shares are traded.",
          "cards": [
              {
                  "q": "Why might a company seek a stock exchange quotation?",
                  "a": "To raise capital more easily, gain liquidity for shareholders, enhance status and visibility, allow founders to realise value, use shares as acquisition currency and make employee share schemes attractive.",
                  "explain": "Listing widens the pool of investors."
              },
              {
                  "q": "What are the disadvantages of listing?",
                  "a": "Costs of listing and ongoing compliance, greater disclosure and scrutiny, short-term pressures from the market, loss of control and takeover vulnerability.",
                  "explain": "Some companies choose to delist."
              },
              {
                  "q": "What is an offer for sale?",
                  "a": "An issuing house buys the shares from the company and offers them to the public at a fixed price.",
                  "explain": "Company gets certainty of proceeds."
              },
              {
                  "q": "What is an offer for sale by tender?",
                  "a": "Investors bid for shares at prices at or above a minimum, and the issue price is set at the level at which the issue clears.",
                  "explain": "Price discovery."
              },
              {
                  "q": "What is an offer for subscription?",
                  "a": "The company offers new shares directly to the public, usually underwritten in case of undersubscription.",
                  "explain": "Used by companies without an issuing house."
              },
              {
                  "q": "What is a placing?",
                  "a": "Shares are sold to selected institutional investors through the company's advisers, without a public offer.",
                  "explain": "Cheaper and faster for smaller issues."
              },
              {
                  "q": "What is an introduction?",
                  "a": "A listing of shares already widely held, with no new shares issued, used when a company is already established.",
                  "explain": "Provides a market rather than capital."
              },
              {
                  "q": "What is a rights issue?",
                  "a": "An offer of new shares to existing shareholders in proportion to their holdings, usually at a discount to the market price.",
                  "explain": "Preserves existing shareholders' control if they take up rights."
              },
              {
                  "q": "What is the theoretical ex-rights price (TERP)?",
                  "a": "The expected share price after the rights issue: (value of old shares + funds raised) / total shares after the issue.",
                  "explain": "Weighted average of old price and issue price."
              },
              {
                  "q": "Worked example: 4 shares at 500p, rights issue 1 for 4 at 400p. TERP?",
                  "a": "TERP = (4 × 500 + 1 × 400) / 5 = 480p; the right on one new share is worth 480 − 400 = 80p.",
                  "explain": "Arithmetic check: 2,400/5 = 480."
              },
              {
                  "q": "What is the role of underwriting in a share issue?",
                  "a": "Underwriters (for a fee) agree to buy any shares the public does not take up, guaranteeing the company its funds.",
                  "explain": "Sub-underwriters share the risk."
              },
              {
                  "q": "Why are rights issues usually at a discount?",
                  "a": "To make the offer attractive so that shareholders take it up and to reduce the risk of undersubscription if the share price falls.",
                  "explain": "The discount does not by itself change shareholder wealth."
              },
              {
                  "q": "What is a bonus (scrip) issue?",
                  "a": "Free new shares issued to existing shareholders by capitalising reserves; it does not raise cash.",
                  "explain": "Reduces the share price but not total value."
              },
              {
                  "q": "How are shares traded on a stock exchange?",
                  "a": "Through brokers and market-makers or electronic order books, with settlement through a central system.",
                  "explain": "Liquidity is provided by trading."
              },
              {
                  "q": "What is a stock split?",
                  "a": "Dividing existing shares into more shares of lower nominal value to reduce the share price and improve marketability.",
                  "explain": "No effect on total value."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Short- and medium-term finance",
          "description": "Short- and medium-term company finance: credit sales, leasing, bank loans, overdrafts, trade credit, factoring and invoice discounting, bills of exchange and commercial paper, and how to choose between them.",
          "cards": [
              {
                  "q": "What are the main sources of medium-term finance?",
                  "a": "Bank term loans, leasing and hire purchase, and credit sale agreements.",
                  "explain": "Matching the term of finance to the life of the asset."
              },
              {
                  "q": "What is leasing?",
                  "a": "The lessee pays rentals to use an asset owned by the lessor; an operating lease is short and cancellable while a finance lease covers most of the asset's life.",
                  "explain": "Finance leases are like borrowing to buy."
              },
              {
                  "q": "What are the advantages of leasing?",
                  "a": "No large initial outlay, possible tax benefits, flexibility and transfer of obsolescence risk under operating leases.",
                  "explain": "But total cost may exceed buying."
              },
              {
                  "q": "What is a bank overdraft?",
                  "a": "Flexible short-term borrowing up to an agreed limit, repayable on demand, with interest charged only on the amount used.",
                  "explain": "Suited to fluctuating working capital needs."
              },
              {
                  "q": "What is trade credit?",
                  "a": "Delayed payment agreed with suppliers, effectively free short-term finance, though early settlement discounts may be lost.",
                  "explain": "Cost can be high if a discount is foregone."
              },
              {
                  "q": "How is the cost of foregoing a discount calculated?",
                  "a": "For terms '2/10 net 30', cost ≈ (2/98) × (365/20) = 37% a year.",
                  "explain": "Arithmetic check: 0.02041 × 18.25 = 0.372."
              },
              {
                  "q": "What is factoring?",
                  "a": "Selling trade receivables to a factor, which advances cash (often about 80%), manages the ledger and may take over credit risk.",
                  "explain": "Improves cash flow."
              },
              {
                  "q": "What is invoice discounting?",
                  "a": "Borrowing against the security of receivables, without the factor administering the ledger or the customer being informed.",
                  "explain": "Confidential."
              },
              {
                  "q": "What is a bill of exchange?",
                  "a": "A written order to pay a specified sum at a future date, which can be discounted for cash before maturity.",
                  "explain": "Used in international trade."
              },
              {
                  "q": "What is commercial paper?",
                  "a": "Short-term unsecured promissory notes issued by large creditworthy companies to investors at a discount.",
                  "explain": "Cheaper than bank loans for strong issuers."
              },
              {
                  "q": "What are the disadvantages of short-term borrowing to fund long-term assets?",
                  "a": "Refinancing risk and interest rate risk, since the loan must be renewed at possibly worse terms.",
                  "explain": "Match maturities."
              },
              {
                  "q": "What is hire purchase?",
                  "a": "The buyer pays instalments and takes ownership after the final payment, receiving capital allowances meanwhile.",
                  "explain": "Similar to a loan secured on the asset."
              },
              {
                  "q": "How does a credit sale differ from leasing?",
                  "a": "A credit sale transfers ownership immediately with payment by instalments, whereas leasing keeps ownership with the lessor.",
                  "explain": "Different tax and balance sheet effects."
              },
              {
                  "q": "What factors influence the choice of short-term finance?",
                  "a": "Cost, flexibility, security required, availability, the purpose and length of need and effect on relationships.",
                  "explain": "Choose the cheapest suitable source."
              },
              {
                  "q": "What is working capital?",
                  "a": "Current assets less current liabilities: the funds tied up in stock, receivables and cash net of short-term creditors.",
                  "explain": "Efficient management improves liquidity."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Alternative sources of finance",
          "description": "Finance outside the traditional banking system: shadow banking, direct project financing, peer-to-peer lending, crowdfunding, micro-finance, venture capital and business angels, and their benefits, risks and regulation.",
          "cards": [
              {
                  "q": "What is shadow banking?",
                  "a": "Credit intermediation by non-bank institutions (money market funds, hedge funds, finance companies) outside normal banking regulation.",
                  "explain": "Can grow fast and create systemic risk."
              },
              {
                  "q": "Why is shadow banking a concern for regulators?",
                  "a": "It lacks deposit insurance and bank-style capital and liquidity rules, and is vulnerable to runs, yet is interconnected with the banking system.",
                  "explain": "Contributed to the 2008 crisis."
              },
              {
                  "q": "What is project finance?",
                  "a": "Funding a specific project (e.g. infrastructure) mainly from its future cash flows, usually through a separate project company with limited recourse to sponsors.",
                  "explain": "Risk allocation is crucial."
              },
              {
                  "q": "What is peer-to-peer lending?",
                  "a": "Online platforms matching lenders with borrowers directly, cutting out banks.",
                  "explain": "Lower costs but credit and platform risk."
              },
              {
                  "q": "What is crowdfunding?",
                  "a": "Raising small amounts from many people via online platforms, in the form of donations, rewards, loans or equity.",
                  "explain": "Useful for start-ups."
              },
              {
                  "q": "What is micro-finance?",
                  "a": "Small loans and other financial services for people excluded from conventional banking, often in developing economies.",
                  "explain": "Group lending mitigates credit risk."
              },
              {
                  "q": "What is venture capital?",
                  "a": "Equity investment in young, high-growth companies by specialist funds, which take stakes and often board seats and exit by sale or listing.",
                  "explain": "High risk, high potential return."
              },
              {
                  "q": "What are business angels?",
                  "a": "Wealthy individuals who invest their own money in early-stage businesses, often adding expertise.",
                  "explain": "Earlier and smaller than venture capital."
              },
              {
                  "q": "What are the risks to investors in alternative finance?",
                  "a": "Higher default rates, lack of liquidity, less regulatory protection and platform failure.",
                  "explain": "Diversification is important."
              },
              {
                  "q": "Why might a company use alternative finance?",
                  "a": "Banks may not lend to it, or terms may be more flexible or cheaper, or it may need speed or specialised support.",
                  "explain": "Complements bank finance."
              },
              {
                  "q": "What are the risks to the financial system from alternative finance growth?",
                  "a": "Reduced oversight, opaque exposures, liquidity mismatches and contagion into regulated institutions.",
                  "explain": "Regulators monitor it."
              },
              {
                  "q": "What is a limited recourse loan?",
                  "a": "Lenders can claim only against the project's assets and cash flows, not the sponsors' other assets.",
                  "explain": "Typical in project finance."
              },
              {
                  "q": "What is invoice trading?",
                  "a": "Selling individual invoices on an online marketplace to investors for immediate cash.",
                  "explain": "Fintech variant of factoring."
              },
              {
                  "q": "What is equity crowdfunding?",
                  "a": "Investors receive shares in return for funding via a platform, usually small stakes.",
                  "explain": "Regulated more heavily than reward crowdfunding."
              },
              {
                  "q": "What is mezzanine finance?",
                  "a": "Hybrid debt with equity features, ranking below senior debt, often used in buyouts.",
                  "explain": "Higher return for higher risk."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Introduction to accounts",
          "description": "Why companies produce annual reports and accounts, who uses them, key accounting concepts (going concern, accruals, prudence, consistency, materiality, historic cost, true and fair view), sustainability and alternative reporting, and the purpose of the main statements.",
          "cards": [
              {
                  "q": "Why must companies produce annual reports and accounts?",
                  "a": "To show shareholders how their money has been used (stewardship), give lenders and other users information for decisions, satisfy legal requirements and support tax assessment.",
                  "explain": "Users include investors, lenders, employees, customers and regulators."
              },
              {
                  "q": "What is the going concern concept?",
                  "a": "Accounts are prepared on the assumption that the business will continue in operation for the foreseeable future, so assets are not valued as if being sold in liquidation.",
                  "explain": "If not a going concern, a break-up basis is used."
              },
              {
                  "q": "What is the accruals concept?",
                  "a": "Income and expenses are recognised when earned or incurred, not when cash is received or paid.",
                  "explain": "Matching revenues with the costs of earning them."
              },
              {
                  "q": "What is the prudence concept?",
                  "a": "Not overstating assets or income and not understating liabilities or expenses; recognise losses early but gains only when realised.",
                  "explain": "Balanced today with neutrality."
              },
              {
                  "q": "What is the consistency concept?",
                  "a": "Similar items are treated in the same way within a period and from one period to the next, so results are comparable.",
                  "explain": "Changes must be disclosed."
              },
              {
                  "q": "What is materiality?",
                  "a": "Information is material if omitting or misstating it could influence users' decisions; immaterial items need not be separately disclosed.",
                  "explain": "Depends on size and nature."
              },
              {
                  "q": "What does 'true and fair view' mean?",
                  "a": "The accounts present the company's position and performance fairly, in accordance with accounting standards and law, free from material misstatement.",
                  "explain": "Auditors give an opinion on this."
              },
              {
                  "q": "What is the historic cost convention?",
                  "a": "Assets are recorded at their original purchase cost, giving objective, verifiable figures but ignoring price changes.",
                  "explain": "Some assets are revalued to fair value."
              },
              {
                  "q": "What are the main statements in an annual report?",
                  "a": "The statement of financial position (balance sheet), statement of profit or loss (and other comprehensive income), cash flow statement, statement of changes in equity and notes.",
                  "explain": "Plus directors' and auditor's reports."
              },
              {
                  "q": "Why is sustainability reporting valuable?",
                  "a": "It informs users about environmental, social and governance risks and impacts that can affect long-term value, and encourages better management of them.",
                  "explain": "Syllabus 4.1.2."
              },
              {
                  "q": "What are alternatives to traditional financial reporting?",
                  "a": "Integrated reporting, sustainability reports, key performance indicators and narrative reporting, aiming to show non-financial value drivers.",
                  "explain": "Complement rather than replace accounts."
              },
              {
                  "q": "What is the business entity concept?",
                  "a": "The business is treated as separate from its owners, so personal transactions are excluded from its accounts.",
                  "explain": "Basic accounting assumption."
              },
              {
                  "q": "What is the money measurement concept?",
                  "a": "Only items measurable in monetary terms are recorded, so things like staff quality do not appear as assets.",
                  "explain": "A limitation of accounts."
              },
              {
                  "q": "What is the difference between financial and management accounting?",
                  "a": "Financial accounts are prepared for external users under legal and accounting rules; management accounts are for internal decisions and follow no fixed format.",
                  "explain": "Different purposes."
              },
              {
                  "q": "What is the double-entry principle?",
                  "a": "Every transaction has two equal effects (a debit and a credit), so the accounting equation Assets = Liabilities + Equity always holds.",
                  "explain": "Basis of the bookkeeping system."
              }
          ]
      },
      {
          "id": "m10",
          "title": "The main accounts",
          "description": "The purpose and content of the statement of financial position, statement of comprehensive income and cash flow statement: assets, liabilities and equity, reserves and retained earnings, depreciation, and the notes to the accounts.",
          "cards": [
              {
                  "q": "What does the statement of financial position show?",
                  "a": "The company's assets, liabilities and equity at a point in time.",
                  "explain": "Assets = Liabilities + Equity."
              },
              {
                  "q": "What are non-current and current assets?",
                  "a": "Non-current assets are held for long-term use (property, plant, intangibles); current assets are expected to be converted to cash within a year (inventory, receivables, cash).",
                  "explain": "Order of liquidity."
              },
              {
                  "q": "What are current liabilities?",
                  "a": "Obligations due within one year, such as trade payables, short-term borrowings and tax due.",
                  "explain": "Compare with current assets to assess liquidity."
              },
              {
                  "q": "What is share capital?",
                  "a": "The nominal value of shares issued; any amount paid above nominal is share premium.",
                  "explain": "Part of equity."
              },
              {
                  "q": "What are reserves and retained earnings?",
                  "a": "Retained earnings are cumulative profits not distributed as dividends; other reserves include share premium and revaluation reserves.",
                  "explain": "Reserves are not cash."
              },
              {
                  "q": "What does the statement of profit or loss show?",
                  "a": "Revenue less costs to give profit for a period: gross profit, operating profit, profit before tax and profit after tax.",
                  "explain": "Performance over time."
              },
              {
                  "q": "What is depreciation?",
                  "a": "The allocation of the cost of a non-current asset over its useful life, charged as an expense; it is a non-cash item.",
                  "explain": "Matches cost to the periods benefiting."
              },
              {
                  "q": "Worked example: asset cost £50,000, residual £5,000, life 5 years. Straight-line depreciation?",
                  "a": "(50,000 − 5,000) / 5 = £9,000 a year.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What is the reducing balance method?",
                  "a": "Depreciation is a fixed percentage of the carrying amount each year, giving higher charges early.",
                  "explain": "Suits assets losing value quickly."
              },
              {
                  "q": "What is other comprehensive income?",
                  "a": "Gains and losses recognised directly in equity rather than profit or loss, such as revaluation gains and some pension remeasurements.",
                  "explain": "Total comprehensive income = profit + OCI."
              },
              {
                  "q": "What is the purpose of the cash flow statement?",
                  "a": "To show cash generated and used in operating, investing and financing activities, explaining the change in cash.",
                  "explain": "Profit is not cash."
              },
              {
                  "q": "Why can a profitable company run out of cash?",
                  "a": "Profit includes non-cash items and credit sales, while cash is tied up in inventory, receivables and investment, and debts fall due.",
                  "explain": "Overtrading."
              },
              {
                  "q": "What are the notes to the accounts for?",
                  "a": "To give detail behind figures, accounting policies, contingent liabilities, related-party transactions and other disclosures.",
                  "explain": "Essential for interpretation."
              },
              {
                  "q": "What is a contingent liability?",
                  "a": "A possible obligation depending on a future event, disclosed but not recognised unless probable and measurable.",
                  "explain": "E.g. pending litigation."
              },
              {
                  "q": "What is goodwill?",
                  "a": "The excess of the price paid for a business over the fair value of its net identifiable assets, an intangible asset tested annually for impairment.",
                  "explain": "Arises on acquisitions."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Constructing accounts",
          "description": "Constructing a simple statement of financial position and statement of profit or loss from trial balance information: adjustments for accruals, prepayments, depreciation, bad debts and inventory, and preparing a basic cash flow statement.",
          "cards": [
              {
                  "q": "What is a trial balance?",
                  "a": "A list of all ledger balances showing that total debits equal total credits, the starting point for preparing accounts.",
                  "explain": "Errors can still exist."
              },
              {
                  "q": "How is gross profit calculated?",
                  "a": "Revenue less cost of sales, where cost of sales = opening inventory + purchases − closing inventory.",
                  "explain": "Manufacturer includes production costs."
              },
              {
                  "q": "What is an accrual?",
                  "a": "An expense incurred but not yet paid at the year end, recorded as a liability and an expense.",
                  "explain": "Matches cost to the period."
              },
              {
                  "q": "What is a prepayment?",
                  "a": "Expense paid in advance for a future period, recorded as a current asset and excluded from the current expense.",
                  "explain": "Reverse of an accrual."
              },
              {
                  "q": "How are bad debts treated?",
                  "a": "Irrecoverable receivables are written off as an expense; an allowance may be made for expected credit losses.",
                  "explain": "Reduces receivables and profit."
              },
              {
                  "q": "How is closing inventory valued?",
                  "a": "At the lower of cost and net realisable value.",
                  "explain": "Prudence."
              },
              {
                  "q": "How is operating profit converted to operating cash flow (indirect method)?",
                  "a": "Add back non-cash items (depreciation), adjust for changes in inventory, receivables and payables.",
                  "explain": "Reconciles profit to cash."
              },
              {
                  "q": "Worked example: operating profit £200k, depreciation £50k, inventory up £30k, receivables up £20k, payables up £10k. Operating cash flow?",
                  "a": "200 + 50 − 30 − 20 + 10 = £210k.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "Where do dividends paid appear in the cash flow statement?",
                  "a": "Under financing activities (or operating, depending on policy), reducing cash.",
                  "explain": "As do share issues and loan repayments."
              },
              {
                  "q": "What does investing cash flow include?",
                  "a": "Purchase and sale of non-current assets and investments, and interest and dividends received.",
                  "explain": "Usually negative for growing firms."
              },
              {
                  "q": "What is the accounting equation?",
                  "a": "Assets = Liabilities + Equity.",
                  "explain": "Check the statement of financial position balances."
              },
              {
                  "q": "What is a suspense account?",
                  "a": "A temporary account holding amounts whose correct classification is not yet known, or to balance a trial balance temporarily.",
                  "explain": "Must be cleared."
              },
              {
                  "q": "How is a disposal of a non-current asset accounted for?",
                  "a": "Compare proceeds with carrying amount; the difference is a profit or loss on disposal in profit or loss.",
                  "explain": "Remove cost and accumulated depreciation."
              },
              {
                  "q": "What is an impairment?",
                  "a": "A write-down of an asset whose carrying amount exceeds its recoverable amount.",
                  "explain": "Charged to profit or loss."
              },
              {
                  "q": "How is tax accounted for in the accounts?",
                  "a": "Tax expense is charged to profit and a tax liability shown until paid, with deferred tax for timing differences.",
                  "explain": "Company tax."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Accounts for groups, insurance companies and banks",
          "description": "Group accounts (subsidiaries, associates, consolidation, non-controlling interest), and the structure and content of insurance and banking company accounts, including their special features.",
          "cards": [
              {
                  "q": "What is a subsidiary?",
                  "a": "A company controlled by another (the parent), usually through owning more than half of the voting rights; it is fully consolidated.",
                  "explain": "Control is the test."
              },
              {
                  "q": "What is an associate?",
                  "a": "A company over which the investor has significant influence (typically 20–50% of votes) but not control, accounted for by the equity method.",
                  "explain": "Share of profit is recorded."
              },
              {
                  "q": "What is the purpose of consolidated accounts?",
                  "a": "To present the group as a single economic entity, showing the combined assets, liabilities, income and expenses of parent and subsidiaries.",
                  "explain": "Avoids hiding losses in subsidiaries."
              },
              {
                  "q": "What is non-controlling interest?",
                  "a": "The share of a subsidiary's net assets and profit not owned by the parent, shown separately within equity.",
                  "explain": "Arises when the parent owns less than 100%."
              },
              {
                  "q": "What adjustments are made on consolidation?",
                  "a": "Eliminate intra-group balances and transactions, eliminate the parent's investment against subsidiary equity, and account for goodwill and non-controlling interest.",
                  "explain": "Avoids double counting."
              },
              {
                  "q": "What is the equity method?",
                  "a": "The investment in an associate starts at cost and is adjusted for the investor's share of the associate's profit and dividends.",
                  "explain": "One-line consolidation."
              },
              {
                  "q": "How do insurance company accounts differ from other companies'?",
                  "a": "They show premiums, claims incurred, technical provisions (reserves for claims and future benefits), investment income and often separate long-term and general business.",
                  "explain": "Long-term liabilities dominate."
              },
              {
                  "q": "What are technical provisions in insurer accounts?",
                  "a": "Liabilities for insurance obligations: unearned premium, outstanding and incurred-but-not-reported claims, and life reserves.",
                  "explain": "Estimated by actuaries."
              },
              {
                  "q": "What is unique about banks' balance sheets?",
                  "a": "Most assets are loans and securities, and most liabilities are customer deposits and borrowings, with high leverage and regulatory capital requirements.",
                  "explain": "Liquidity and capital ratios matter."
              },
              {
                  "q": "What are loan impairments in bank accounts?",
                  "a": "Provisions for expected credit losses on loans, reducing profit and the carrying value of loans.",
                  "explain": "A key judgement area."
              },
              {
                  "q": "What is net interest income?",
                  "a": "Interest earned on loans less interest paid on deposits and borrowings; the core bank profit measure.",
                  "explain": "Interest margin."
              },
              {
                  "q": "Why is insurer profit harder to interpret than a manufacturer's?",
                  "a": "Claims reserves rely on estimates and long-term contracts, so reported profit depends on assumptions.",
                  "explain": "Actuarial judgement."
              },
              {
                  "q": "What is a joint venture?",
                  "a": "An arrangement where parties jointly control an entity and share its net assets, usually accounted for by the equity method.",
                  "explain": "Shared control."
              },
              {
                  "q": "Why might a company own an associate rather than a subsidiary?",
                  "a": "To gain influence over a supplier, technology or market with a smaller investment and less risk.",
                  "explain": "Strategic stake."
              },
              {
                  "q": "What is a minority interest's significance for gearing?",
                  "a": "Non-controlling interest is part of group equity, so it should be considered when computing group ratios.",
                  "explain": "Interpretation."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Interpreting accounts (1)",
          "description": "Ratio analysis, part 1: profitability (gross, operating and net margins, return on capital employed, return on equity), asset turnover and efficiency, and liquidity (current and quick ratios, working capital cycle), and their limitations.",
          "cards": [
              {
                  "q": "How is return on capital employed (ROCE) calculated?",
                  "a": "Operating profit (PBIT) divided by capital employed (equity plus long-term debt), expressed as a percentage.",
                  "explain": "Overall performance."
              },
              {
                  "q": "How is gross profit margin calculated?",
                  "a": "Gross profit / revenue × 100.",
                  "explain": "Reflects pricing and cost of sales."
              },
              {
                  "q": "How is net profit margin calculated?",
                  "a": "Profit after tax (or before tax) / revenue × 100.",
                  "explain": "Overall margin."
              },
              {
                  "q": "What is asset turnover?",
                  "a": "Revenue / capital employed (or total assets).",
                  "explain": "ROCE = margin × asset turnover."
              },
              {
                  "q": "Worked example: PBIT £120m, capital employed £800m, revenue £1,200m. ROCE, margin, turnover?",
                  "a": "ROCE = 15%; operating margin = 10%; asset turnover = 1.5; 10% × 1.5 = 15%.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What is return on equity?",
                  "a": "Profit after tax attributable to shareholders / shareholders' equity.",
                  "explain": "Boosted by gearing."
              },
              {
                  "q": "What is the current ratio?",
                  "a": "Current assets / current liabilities.",
                  "explain": "Rule of thumb around 1.5, but varies by industry."
              },
              {
                  "q": "What is the quick (acid test) ratio?",
                  "a": "(Current assets − inventory) / current liabilities.",
                  "explain": "Excludes inventory."
              },
              {
                  "q": "How is the inventory turnover period calculated?",
                  "a": "(Inventory / cost of sales) × 365 days.",
                  "explain": "Efficiency."
              },
              {
                  "q": "How is the receivables collection period calculated?",
                  "a": "(Trade receivables / credit sales) × 365 days.",
                  "explain": "Credit control."
              },
              {
                  "q": "How is the payables period calculated?",
                  "a": "(Trade payables / cost of sales or purchases) × 365 days.",
                  "explain": "Use of supplier credit."
              },
              {
                  "q": "What is the cash conversion cycle?",
                  "a": "Inventory days + receivable days − payable days.",
                  "explain": "Length of the working capital cycle."
              },
              {
                  "q": "What are the limitations of ratio analysis?",
                  "a": "Historic data, differing accounting policies, seasonal effects, lack of comparators, and ratios don't explain causes.",
                  "explain": "Compare trends and peers."
              },
              {
                  "q": "Why is a very high current ratio not always good?",
                  "a": "It may indicate excess inventory, idle cash or slow collection of receivables.",
                  "explain": "Efficiency matters."
              },
              {
                  "q": "How does a fall in gross margin usually arise?",
                  "a": "Lower selling prices, higher cost of sales, changes in sales mix or inventory errors.",
                  "explain": "Investigate causes."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Interpreting accounts (2)",
          "description": "Ratio analysis, part 2: gearing, interest cover, asset cover, priority percentages, the impact of interest rate movements on a highly geared company, investor ratios (EPS, P/E, dividend yield and cover), and cash flow interpretation.",
          "cards": [
              {
                  "q": "How is gearing measured?",
                  "a": "Debt / (debt + equity), or debt / equity; the higher the ratio, the greater the financial risk.",
                  "explain": "Definitions vary — state which you use."
              },
              {
                  "q": "How is interest cover calculated?",
                  "a": "Profit before interest and tax / interest expense.",
                  "explain": "Ability to service debt."
              },
              {
                  "q": "Worked example: PBIT £500m, interest £125m. Interest cover?",
                  "a": "500 / 125 = 4.0 times.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What is asset cover for loan capital?",
                  "a": "Net tangible assets available to the lenders / loan capital.",
                  "explain": "Security."
              },
              {
                  "q": "What are priority percentages?",
                  "a": "Each layer of finance's claim as a percentage of total profit or cash flow available, showing how much profit must be earned to pay each tier before the next.",
                  "explain": "Shows exposure of ordinary shareholders."
              },
              {
                  "q": "How do rising interest rates affect a highly geared company?",
                  "a": "Interest costs rise, cutting profit and cover and possibly forcing asset sales or breaching covenants; equity returns become more volatile.",
                  "explain": "Gearing magnifies movements."
              },
              {
                  "q": "What is earnings per share (EPS)?",
                  "a": "Profit attributable to ordinary shareholders / weighted average number of ordinary shares.",
                  "explain": "Headline investor measure."
              },
              {
                  "q": "What is the price/earnings (P/E) ratio?",
                  "a": "Share price / EPS.",
                  "explain": "How many years of earnings the market pays."
              },
              {
                  "q": "What is dividend yield?",
                  "a": "Dividend per share / share price.",
                  "explain": "Income return."
              },
              {
                  "q": "What is dividend cover?",
                  "a": "Profit after tax available for ordinary shareholders / ordinary dividends (or EPS / DPS).",
                  "explain": "Safety of dividends."
              },
              {
                  "q": "Worked example: EPS 50p, DPS 20p. Dividend cover?",
                  "a": "50 / 20 = 2.5 times.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What does a high P/E suggest?",
                  "a": "The market expects high growth or low risk, or the shares may be overvalued.",
                  "explain": "Compare within sector."
              },
              {
                  "q": "How can operating cash flow help interpret profit quality?",
                  "a": "Consistently low cash relative to profit suggests aggressive revenue recognition or working capital problems.",
                  "explain": "Cash flow statement."
              },
              {
                  "q": "What is financial risk versus business risk?",
                  "a": "Business risk comes from operations and is unaffected by financing; financial risk arises from debt obligations.",
                  "explain": "Gearing affects financial risk."
              },
              {
                  "q": "Why compare ratios with industry averages?",
                  "a": "Different industries have different norms, so a ratio is meaningful only against peers and trends.",
                  "explain": "Context."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Derivatives",
          "description": "Use of derivatives by a non-financial company: forwards and financial futures, options, interest rate and currency swaps; hedging versus speculation, basic pricing ideas, and the risks of derivative use.",
          "cards": [
              {
                  "q": "What is a derivative?",
                  "a": "A contract whose value depends on an underlying asset, rate or index, such as a share, currency or interest rate.",
                  "explain": "Forwards, futures, options and swaps."
              },
              {
                  "q": "Why might a non-financial company use derivatives?",
                  "a": "To hedge exposures to interest rates, exchange rates and commodity prices, stabilising cash flows and costs.",
                  "explain": "Not to speculate."
              },
              {
                  "q": "What is a forward contract?",
                  "a": "An agreement to buy or sell an asset at a fixed price on a future date, tailored and traded over the counter.",
                  "explain": "Counterparty risk."
              },
              {
                  "q": "How does a futures contract differ from a forward?",
                  "a": "Standardised, exchange-traded, marked to market daily with margin and cleared through a clearing house.",
                  "explain": "Less counterparty risk."
              },
              {
                  "q": "What is a call option?",
                  "a": "The right, but not the obligation, to buy an asset at a set price on or before a set date.",
                  "explain": "Buyer pays a premium."
              },
              {
                  "q": "What is a put option?",
                  "a": "The right, but not the obligation, to sell an asset at a set price.",
                  "explain": "Protects against price falls."
              },
              {
                  "q": "What is an interest rate swap?",
                  "a": "An agreement to exchange fixed-rate for floating-rate interest payments on a notional amount.",
                  "explain": "Converts the type of borrowing."
              },
              {
                  "q": "What is a currency swap?",
                  "a": "An exchange of principal and interest in one currency for principal and interest in another.",
                  "explain": "Hedges foreign currency borrowing."
              },
              {
                  "q": "Worked example: forward price of an asset at £100 with rate 5% for one year (no income)?",
                  "a": "£100 × 1.05 = £105.",
                  "explain": "Arithmetic check: cost-of-carry."
              },
              {
                  "q": "How can a company hedge a future foreign currency receipt?",
                  "a": "Sell the currency forward, buy a put option on it, or borrow in that currency and convert now.",
                  "explain": "Options keep upside."
              },
              {
                  "q": "What is the difference between hedging and speculating?",
                  "a": "Hedging reduces an existing risk; speculating takes on new risk in the hope of profit.",
                  "explain": "Controls needed to prevent speculation."
              },
              {
                  "q": "What are the risks of using derivatives?",
                  "a": "Counterparty, basis and liquidity risks, leverage, complexity and control failures.",
                  "explain": "Governance."
              },
              {
                  "q": "What is put-call parity?",
                  "a": "Call − Put = Share price − PV of exercise price (for a European option on a non-dividend share).",
                  "explain": "No-arbitrage relationship."
              },
              {
                  "q": "What is an option's intrinsic value?",
                  "a": "The amount by which it is in the money: max(S − K, 0) for a call.",
                  "explain": "Plus time value."
              },
              {
                  "q": "What is basis risk?",
                  "a": "The hedge does not perfectly track the exposure, leaving a residual risk.",
                  "explain": "Imperfect hedge."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Growth and restructuring of companies",
          "description": "Why companies grow, internal versus external growth, constraints on growth, mergers and takeovers, the relationship between growth and profitability, and why companies divest subsidiaries or business units.",
          "cards": [
              {
                  "q": "Why do companies want to grow larger?",
                  "a": "To gain economies of scale, market power, diversification, managerial ambitions, defend against takeover and increase returns to shareholders.",
                  "explain": "Growth should add value."
              },
              {
                  "q": "What is internal (organic) growth?",
                  "a": "Growth through investing in the company's own operations, products and markets, financed by retained profit or new capital.",
                  "explain": "Slower, lower risk."
              },
              {
                  "q": "What is external growth?",
                  "a": "Growth through acquisitions or mergers with other companies.",
                  "explain": "Faster but riskier."
              },
              {
                  "q": "What are the main types of merger?",
                  "a": "Horizontal (same industry), vertical (supply chain) and conglomerate (unrelated businesses).",
                  "explain": "Different rationales."
              },
              {
                  "q": "What are the reasons for takeovers?",
                  "a": "Synergies, market share, acquiring assets or skills, eliminating competitors and buying undervalued companies.",
                  "explain": "Value creation should exceed the premium."
              },
              {
                  "q": "What are constraints on a company's growth?",
                  "a": "Availability of finance, management capacity, market size and competition, regulation and competition law, and risk appetite.",
                  "explain": "Syllabus 2.5.2."
              },
              {
                  "q": "What is synergy?",
                  "a": "The combined value exceeds the sum of the separate values (e.g. cost savings or revenue gains).",
                  "explain": "Often overestimated."
              },
              {
                  "q": "Why do many takeovers fail to create value for the acquirer?",
                  "a": "The premium paid may transfer synergies to target shareholders, integration is difficult and cultures clash.",
                  "explain": "Winner's curse."
              },
              {
                  "q": "Why might a company divest a subsidiary or business unit?",
                  "a": "To raise cash, refocus on core business, remove poor performers, meet regulators' conditions or defend against takeover.",
                  "explain": "Syllabus 2.5.3."
              },
              {
                  "q": "What is a demerger (spin-off)?",
                  "a": "A company separates part of its business into a new independent company whose shares are distributed to existing shareholders.",
                  "explain": "Unlocks value."
              },
              {
                  "q": "What is a management buyout?",
                  "a": "The existing management acquires the business, often with private equity and debt.",
                  "explain": "Highly geared."
              },
              {
                  "q": "How are takeovers financed?",
                  "a": "By cash (from resources or borrowing), by shares, or a mix.",
                  "explain": "Effects on gearing and control."
              },
              {
                  "q": "What is a hostile takeover?",
                  "a": "A bid made directly to shareholders without the agreement of the target's board.",
                  "explain": "Defences include poison pills."
              },
              {
                  "q": "What is the relationship between growth and profitability?",
                  "a": "Growth increases profit only if new investment earns more than its cost of capital; growth financed by lower-return projects destroys value.",
                  "explain": "Growth is not an end in itself."
              },
              {
                  "q": "How can a company measure the success of an acquisition?",
                  "a": "Compare post-acquisition returns and cash flows with the price paid and cost of capital.",
                  "explain": "Post-audit."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Weighted average cost of capital",
          "description": "The cost of each source of finance (equity via dividend growth model and CAPM, preference shares, debt before and after tax), market-value weights, calculation of the weighted average cost of capital, and its uses and limitations.",
          "cards": [
              {
                  "q": "What is the cost of capital?",
                  "a": "The return required by providers of finance, and therefore the minimum return a project must earn to create value.",
                  "explain": "Also the discount rate."
              },
              {
                  "q": "How is the cost of equity estimated using the dividend growth model?",
                  "a": "$k_e = \\frac{D_1}{P_0} + g$.",
                  "explain": "Requires expected dividend and growth."
              },
              {
                  "q": "Worked example: D1 = 5p, P0 = 83.33p, g = 4%. Cost of equity?",
                  "a": "5/83.33 + 4% = 6% + 4% = 10%.",
                  "explain": "Arithmetic check: 5/83.33 = 0.06."
              },
              {
                  "q": "What is the CAPM cost of equity?",
                  "a": "$k_e = r_f + \\beta (r_m - r_f)$.",
                  "explain": "Risk-free rate plus beta times market risk premium."
              },
              {
                  "q": "Worked example: rf 3%, beta 1.2, market premium 5%. Cost of equity?",
                  "a": "3% + 1.2 × 5% = 9%.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "How is the after-tax cost of debt calculated?",
                  "a": "$k_d(1 - t)$ where $k_d$ is the pre-tax yield to redemption.",
                  "explain": "Interest is tax-deductible."
              },
              {
                  "q": "How is the cost of irredeemable preference shares calculated?",
                  "a": "Preference dividend / market price.",
                  "explain": "No tax relief."
              },
              {
                  "q": "Why use market values for weights?",
                  "a": "They reflect the current cost of raising each type of capital and the actual proportions investors provide.",
                  "explain": "Not book values."
              },
              {
                  "q": "Worked example: E £60m at 12%, D £40m at 5% pre-tax, tax 25%. WACC?",
                  "a": "0.6 × 12% + 0.4 × 5% × 0.75 = 7.2% + 1.5% = 8.7%.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What does beta measure?",
                  "a": "Sensitivity of a share's returns to market returns, i.e. systematic risk.",
                  "explain": "Beta 1.2 means 20% more volatile than market."
              },
              {
                  "q": "What is the difference between equity beta and asset beta?",
                  "a": "Equity beta includes financial risk from gearing; asset beta reflects business risk only and can be re-geared for a different capital structure.",
                  "explain": "Used for project-specific rates."
              },
              {
                  "q": "What are the limitations of using WACC as a discount rate?",
                  "a": "It assumes the project has the same business risk and gearing as the company and that capital structure is constant.",
                  "explain": "Syllabus 3.1.7."
              },
              {
                  "q": "Why is debt cheaper than equity?",
                  "a": "Lenders have prior claims and lower risk, and interest is tax-deductible.",
                  "explain": "But more debt raises equity's cost."
              },
              {
                  "q": "What is the cost of retained earnings?",
                  "a": "The same as the cost of equity, since retained profits belong to shareholders who could otherwise have received them.",
                  "explain": "No free source of capital."
              },
              {
                  "q": "What are the limitations of the dividend growth model?",
                  "a": "Constant growth assumption, sensitivity to g and problems for non-dividend payers.",
                  "explain": "Use with CAPM."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Capital structure and dividend policy",
          "description": "How financing mix affects value: Modigliani-Miller propositions with and without tax, the trade-off theory, pecking order, financial distress, dividend policy (dividend irrelevance, signalling, clientele) and alternatives such as share buybacks.",
          "cards": [
              {
                  "q": "What is Modigliani-Miller proposition I (no tax)?",
                  "a": "In perfect markets a firm's value is independent of its capital structure.",
                  "explain": "Gearing only redistributes risk."
              },
              {
                  "q": "What is MM proposition II (no tax)?",
                  "a": "$k_e = k_0 + (k_0 - k_d)\\frac{D}{E}$ — the cost of equity rises linearly with gearing.",
                  "explain": "WACC stays constant."
              },
              {
                  "q": "How do MM propositions change with corporate tax?",
                  "a": "The value of a geared firm equals unlevered value plus the present value of the tax shield, so value rises with debt and WACC falls.",
                  "explain": "Implies 100% debt without distress costs."
              },
              {
                  "q": "What is the trade-off theory of capital structure?",
                  "a": "Firms balance the tax advantage of debt against costs of financial distress, giving an optimal level of gearing.",
                  "explain": "Reality between extremes."
              },
              {
                  "q": "What are costs of financial distress?",
                  "a": "Direct bankruptcy costs and indirect costs such as lost customers, suppliers' tightened credit and forced asset sales.",
                  "explain": "Rise with gearing."
              },
              {
                  "q": "What is the pecking order theory?",
                  "a": "Companies prefer internal funds, then debt, then new equity, because of information asymmetry and issue costs.",
                  "explain": "Explains observed behaviour."
              },
              {
                  "q": "Worked example: tax shield on debt of £100m at 5% with 25% tax?",
                  "a": "Interest £5m × 25% = £1.25m a year; if perpetual, value = 100 × 25% = £25m.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What factors determine dividend policy?",
                  "a": "Profitability and cash flow, investment opportunities, shareholders' preferences and tax, legal restrictions, stability and signalling, and access to capital.",
                  "explain": "Syllabus 2.4.3."
              },
              {
                  "q": "What is the dividend irrelevance argument?",
                  "a": "In perfect markets, value depends on investment decisions, not on how earnings are split between dividends and retention.",
                  "explain": "MM dividend theory."
              },
              {
                  "q": "What is the signalling effect of dividends?",
                  "a": "Dividend changes convey management's view of future prospects, so increases raise prices and cuts lower them.",
                  "explain": "Information content."
              },
              {
                  "q": "What is the clientele effect?",
                  "a": "Shareholders choose companies whose dividend policy suits their tax and income preferences.",
                  "explain": "Explains stable policies."
              },
              {
                  "q": "What is a share buyback?",
                  "a": "The company repurchases its own shares, returning cash to shareholders and reducing shares in issue.",
                  "explain": "Tax-efficient, flexible."
              },
              {
                  "q": "What is a scrip dividend?",
                  "a": "Shareholders receive new shares instead of cash, conserving company cash.",
                  "explain": "Alternative distribution."
              },
              {
                  "q": "What is the effect of gearing on earnings per share?",
                  "a": "Gearing magnifies changes in EPS, raising it if returns exceed the cost of debt and lowering it otherwise.",
                  "explain": "Financial risk."
              },
              {
                  "q": "What is the residual dividend policy?",
                  "a": "Pay dividends only from profit left after funding all positive-NPV investments.",
                  "explain": "Variable dividends."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Capital project appraisal (1)",
          "description": "Appraising capital projects part 1: relevant cash flows (incremental, after tax, excluding sunk costs), payback and discounted payback, accounting rate of return, net present value and the profitability index.",
          "cards": [
              {
                  "q": "What cash flows are relevant to a project?",
                  "a": "Incremental future cash flows caused by the decision: initial outlay, operating inflows and outflows, working capital, tax effects and disposal value; ignore sunk costs and allocated overheads.",
                  "explain": "Cash, not accounting profit."
              },
              {
                  "q": "What is a sunk cost?",
                  "a": "A cost already incurred that cannot be recovered whatever is decided, and so is irrelevant.",
                  "explain": "E.g. market research already paid for."
              },
              {
                  "q": "What is an opportunity cost?",
                  "a": "The benefit forgone by using a resource for the project instead of its best alternative.",
                  "explain": "Relevant cash flow."
              },
              {
                  "q": "How is payback period calculated?",
                  "a": "The time taken for cumulative cash inflows to recover the initial outlay.",
                  "explain": "Ignores time value."
              },
              {
                  "q": "Worked example: outlay £1,000; inflows £400, £500, £600. Payback?",
                  "a": "Cumulative 900 after 2 years; remaining 100/600 = 0.17, so 2.17 years.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What are the disadvantages of payback?",
                  "a": "Ignores cash flows after payback and the time value of money.",
                  "explain": "Simple but crude."
              },
              {
                  "q": "What is discounted payback?",
                  "a": "Payback measured on discounted cash flows.",
                  "explain": "Accounts for time value."
              },
              {
                  "q": "What is the accounting rate of return (ARR)?",
                  "a": "Average annual accounting profit / average (or initial) investment.",
                  "explain": "Uses profit, not cash."
              },
              {
                  "q": "How is NPV calculated?",
                  "a": "Sum of discounted future cash flows minus the initial outlay, discounted at the cost of capital.",
                  "explain": "Accept if NPV > 0."
              },
              {
                  "q": "Worked example: outlay £1,000; inflows £400, £500, £600; discount 10%. NPV?",
                  "a": "363.64 + 413.22 + 450.79 − 1,000 = £227.65.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "Why is NPV the theoretically best criterion?",
                  "a": "It measures the increase in shareholder wealth, accounts for timing and risk and is additive across projects.",
                  "explain": "Consistent with value maximisation."
              },
              {
                  "q": "What is the profitability index?",
                  "a": "PV of future cash flows / initial outlay.",
                  "explain": "Useful under capital rationing."
              },
              {
                  "q": "What is capital rationing?",
                  "a": "A limit on funds available, so projects must be ranked, usually by profitability index for divisible projects.",
                  "explain": "Hard or soft."
              },
              {
                  "q": "How are capital allowances used in appraisal?",
                  "a": "They reduce tax payable, so tax savings on allowances are included as cash inflows in the year they arise.",
                  "explain": "After-tax cash flows."
              },
              {
                  "q": "How is inflation treated in appraisal?",
                  "a": "Either use nominal cash flows with a nominal discount rate, or real cash flows with a real rate; do not mix them.",
                  "explain": "Consistency."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Capital project appraisal (2)",
          "description": "Appraising capital projects part 2: internal rate of return and its problems, comparing mutually exclusive projects, risk in appraisal (sensitivity, scenario analysis, simulation, certainty equivalents, risk-adjusted rates), determining the required return, and gearing and risk allowances.",
          "cards": [
              {
                  "q": "What is the internal rate of return (IRR)?",
                  "a": "The discount rate at which a project's NPV equals zero.",
                  "explain": "Accept if IRR > cost of capital."
              },
              {
                  "q": "Worked example: outlay £1,000, one inflow £1,100 after a year. IRR?",
                  "a": "1,100/1,000 − 1 = 10%.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What are the problems with IRR?",
                  "a": "May give conflicting rankings for mutually exclusive projects, multiple IRRs with unconventional cash flows and assumes reinvestment at the IRR.",
                  "explain": "NPV is preferred."
              },
              {
                  "q": "What is the modified IRR?",
                  "a": "IRR calculated assuming reinvestment of intermediate cash flows at the cost of capital.",
                  "explain": "Fixes reinvestment assumption."
              },
              {
                  "q": "What is sensitivity analysis?",
                  "a": "Changing one variable at a time to see how much NPV changes, identifying critical assumptions.",
                  "explain": "Simple but ignores correlation."
              },
              {
                  "q": "What is scenario analysis?",
                  "a": "Evaluating a project under coherent sets of assumptions (best, base, worst case).",
                  "explain": "Captures combined effects."
              },
              {
                  "q": "What is simulation in project appraisal?",
                  "a": "Using random draws from probability distributions for key variables to produce a distribution of NPV.",
                  "explain": "Monte Carlo."
              },
              {
                  "q": "What is the certainty equivalent method?",
                  "a": "Expected cash flows are converted to a certain amount the investor would accept instead, then discounted at the risk-free rate.",
                  "explain": "Risk allowed in cash flows."
              },
              {
                  "q": "What is a risk-adjusted discount rate?",
                  "a": "A rate above the base cost of capital reflecting higher project risk (or beta).",
                  "explain": "Risk allowed in the rate."
              },
              {
                  "q": "How is expected NPV computed with probabilities?",
                  "a": "Weight each scenario's NPV by its probability and sum.",
                  "explain": "Also compute standard deviation."
              },
              {
                  "q": "How do you find a project-specific discount rate?",
                  "a": "Use a proxy company's asset beta, re-gear to the project's financing and apply CAPM.",
                  "explain": "Syllabus 3.1.6."
              },
              {
                  "q": "What is the effect of gearing on the required return?",
                  "a": "Higher gearing increases equity risk and required return, while cheaper debt lowers WACC; the net effect depends on the theory used.",
                  "explain": "Allowance for leverage."
              },
              {
                  "q": "Why identify different types of project risk?",
                  "a": "Risks (market, technical, regulatory, political, operational) differ in likelihood and timing, so mitigation and monitoring differ.",
                  "explain": "Syllabus 3.1.8."
              },
              {
                  "q": "What is a post-audit of a project?",
                  "a": "Comparing actual results with the appraisal to learn and improve future forecasts.",
                  "explain": "Control."
              },
              {
                  "q": "How can real options add value to a project?",
                  "a": "Options to expand, delay or abandon give flexibility valued in addition to static NPV.",
                  "explain": "Ignored by simple NPV."
              }
          ]
      }
  ],
  questions: [
    {
      id: "cb1-q1",
      title: "The finance function, the balance sheet, and the income statement",
      modules: "Modules 1, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the 'agency problem', and give one mechanism companies commonly use to reduce it.",
          answer:
            "The agency problem is the risk that managers (agents) pursue their own interests rather than those of shareholders (principals), since ownership and control are separated in most companies of any size. A common mitigation mechanism is linking management remuneration to share price/performance (e.g. share options), aligning managers' incentives more closely with shareholders'.",
          note: "Candidates should name a genuine, specific mechanism (not just 'better oversight' vaguely) &mdash; remuneration linked to performance is the most commonly cited example.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain the fundamental accounting equation underlying the balance sheet, and state which of the three main financial statements shows a company's performance over a period rather than its position at a point in time.",
          answer:
            "The accounting equation is Assets = Liabilities + Equity. The income statement (profit and loss account) shows performance over a period; the balance sheet, by contrast, is a snapshot of financial position at a single point in time. (The cash flow statement also covers a period, reconciling cash movement.)",
          note: "A complete answer states the equation precisely and correctly distinguishes 'position' (a snapshot) from 'performance' (over a period) &mdash; a very commonly tested distinction.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 4,
          question: "Explain why a company's reported profit after tax is not the same thing as the cash it actually generated over the same period, giving one specific example of a cost that illustrates this.",
          answer:
            "The income statement uses accruals accounting, recognising revenue and costs when they're earned/incurred rather than when cash actually changes hands, so profit can differ substantially from actual cash movement. Depreciation is a clear example: it's charged as an expense reducing reported profit each period, but involves no actual cash outflow in that period &mdash; the cash was paid when the asset was originally purchased.",
          note: "The depreciation example should be explained precisely: the cash outflow happened at <em>purchase</em>, not when the expense is later charged in the income statement.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "A company reports strong profit after tax but its finance director is concerned about the business's cash position. Comment on why this combination is possible, and name the financial statement that would reveal the concern directly.",
          answer:
            "Because profit and cash can diverge substantially (per part (iii)), a company can be profitable on an accounting basis while still facing a cash shortfall, e.g. due to growing receivables or inventory tying up cash faster than profitable trading generates it. The cash flow statement would reveal this directly, since it reports actual cash inflows and outflows rather than accruals-based profit.",
          note: "This tests whether candidates can apply the profit-versus-cash distinction to a realistic scenario, not just recite the definition.",
        },
      ],
    },
    {
      id: "cb1-q2",
      title: "Liquidity and cash flow analysis",
      modules: "Modules 10, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company has current assets of &pound;450,000 (of which &pound;150,000 is inventory) and current liabilities of &pound;300,000. Calculate the current ratio and the quick (acid-test) ratio.",
          answer:
            "Current ratio $= 450{,}000 / 300{,}000 = 1.50$. Quick ratio $= (450{,}000 - 150{,}000) / 300{,}000 = 300{,}000/300{,}000 = 1.00$.",
          note: "The quick ratio excludes inventory from the numerator before dividing &mdash; a common error is to forget this exclusion and simply recompute the current ratio again.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 3,
          question: "Comment on what the gap between the current ratio and quick ratio calculated in part (i) suggests about this company's liquidity, and one industry-related caveat that should accompany any conclusion.",
          answer:
            "The meaningful gap between the two ratios (1.50 versus 1.00) indicates the company holds a significant amount of inventory relative to its current liabilities, so its ability to meet short-term obligations depends materially on being able to sell that inventory reasonably quickly. However, whether this is a genuine concern depends on the industry &mdash; a company with fast-moving, easily-liquidated stock may be entirely comfortable with this gap, while one with slow-moving stock may not be.",
          note: "A strong answer explicitly avoids declaring the ratios 'good' or 'bad' in isolation, instead flagging the industry-dependence caveat.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain how an increase in trade receivables during the period would affect operating cash flow relative to reported profit, and why.",
          answer:
            "An increase in trade receivables reduces operating cash flow relative to profit, since the corresponding revenue has already been recognised in profit but the cash hasn't yet actually been collected from customers &mdash; the sale is 'on the books' as profit before the cash physically arrives.",
          note: "Candidates should be clear on the <em>direction</em> of the adjustment (receivables UP means cash flow <em>lower</em> relative to profit), a common point of confusion.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why a rapidly growing, profitable company might still experience a cash flow crisis (overtrading).",
          answer:
            "Growth often requires increasing investment in working capital (more inventory, more receivables as sales grow) and non-current assets, which can consume cash faster than profitable trading generates it &mdash; a profitable company can still run out of cash purely from this timing mismatch.",
          note: "This is a well-known, important real-world phenomenon worth being able to explain confidently and concisely.",
        },
      ],
    },
    {
      id: "cb1-q3",
      title: "Efficiency and gearing ratios",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question: "A company's cost of sales for the year was &pound;2,400,000, and its average inventory held during the year was &pound;300,000. Calculate inventory days.",
          answer: "Inventory days $= (300{,}000 / 2{,}400{,}000) \\times 365 = 45.63$ days.",
          note: "The formula uses <em>cost of sales</em> (not revenue) in the denominator &mdash; using revenue instead is a common error for this specific ratio.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The same company has &pound;4,000,000 of debt and &pound;6,000,000 of equity (at market value). Calculate its gearing ratio, expressed as debt divided by (debt plus equity).",
          answer: "Gearing $= 4{,}000{,}000 / (4{,}000{,}000 + 6{,}000{,}000) = 4{,}000{,}000/10{,}000{,}000 = 40.0\\%$.",
          note: "Candidates should state clearly which gearing formula variant they're using (D/(D+E) versus D/E), since exam questions may specify either.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why a company with a gearing ratio of 40% is generally considered riskier for shareholders than an otherwise identical company with a gearing ratio of 10%.",
          answer:
            "Interest on debt must be paid regardless of how the business performs, so higher gearing means a greater proportion of profit is committed to fixed interest payments, amplifying the volatility of what's left over for shareholders &mdash; a magnifying effect known as financial risk. The 40%-geared company has substantially more of this fixed commitment relative to its capital base than the 10%-geared company.",
          note: "A strong answer explains the <em>mechanism</em> (fixed interest amplifying profit volatility for shareholders), not just asserts that higher gearing is 'riskier'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why assessing this company's 40% gearing ratio in isolation, without further context, could be misleading.",
          answer:
            "The appropriate gearing level varies significantly by industry &mdash; a capital-intensive industry with stable, predictable cashflows (e.g. utilities) can typically sustain much higher gearing safely than an industry with volatile earnings, so 40% could be entirely prudent for one company and excessive for another depending on the nature and stability of its business.",
          note: "This connects directly to the same industry-comparison caution that applies to liquidity ratios &mdash; a recurring theme worth applying consistently across ratio types.",
        },
      ],
    },
    {
      id: "cb1-q4",
      title: "Working capital management",
      modules: "Module 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question: "A company has inventory days of 45, receivables days of 60, and payables days of 40. Calculate its working capital cycle (cash conversion cycle).",
          answer: "Working capital cycle $= 45 + 60 - 40 = 65$ days.",
          note: "Payables days is <em>subtracted</em> (not added) &mdash; forgetting the subtraction is the most common error in this calculation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what the 65-day cycle calculated in part (i) means in practical terms, and why a shorter cycle is generally preferable.",
          answer:
            "It means, on average, 65 days pass between the company paying cash out for its inputs and receiving cash in from customers for the resulting sales. A shorter cycle is generally preferable because it means less cash is tied up in the business for a shorter period, freeing up capital that could otherwise be used productively elsewhere (reflecting the opportunity cost of capital tied up in working capital).",
          note: "A complete answer explains both <em>what</em> the figure represents and <em>why</em> shorter is better (the opportunity cost argument), not just one or the other.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss two distinct techniques the company could use to reduce its working capital cycle.",
          answer:
            "Reducing inventory days: implementing just-in-time ordering or better demand forecasting to hold less stock. Reducing receivables days: offering an early payment discount or tightening credit control to collect from customers faster. (Increasing payables days, within agreed supplier terms, would also reduce the cycle, though this must be balanced against supplier relationship risk.)",
          note: "Any two distinct techniques targeting different components of the cycle (inventory, receivables, or payables) should be credited if clearly explained.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why aggressively extending payables days beyond agreed supplier terms, purely to shorten the working capital cycle, could be a poor strategy despite the mechanical improvement it would show.",
          answer:
            "Deliberately delaying payment beyond agreed terms can damage supplier relationships, risk losing favourable credit terms or discounts, and harm the company's reputation and ability to negotiate good terms in future &mdash; the short-term working capital improvement could be outweighed by these longer-term costs.",
          note: "This tests whether candidates recognise the difference between efficiently using <em>agreed</em> credit terms and damagingly abusing supplier goodwill.",
        },
      ],
    },
    {
      id: "cb1-q5",
      title: "Choosing between sources of equity and debt finance",
      modules: "Modules 5, 6, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "A company is planning a rights issue. Explain what a rights issue is, and why it's typically priced at a discount to the current market share price.",
          answer:
            "A rights issue is an offer of new shares to existing shareholders, in proportion to their current shareholding, typically at a discount to the current market price. The discount makes the offer attractive enough to encourage existing shareholders to take up their entitlement (providing new capital), while the proportional nature of the issue protects them from being diluted if they do so.",
          note: "Candidates should explain <em>why</em> the proportional structure specifically protects against dilution, not just describe the discount in isolation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what a 'loan covenant' is, and give one example of a financial ratio a lender might require the company to maintain.",
          answer:
            "A loan covenant is a condition attached to a loan agreement, restricting the borrower's actions or requiring certain financial ratios to be maintained, protecting the lender's position. A lender might commonly require a minimum interest cover ratio or a maximum gearing ratio to be maintained throughout the life of the loan.",
          note: "Any genuine, specific ratio example (interest cover or gearing) tied clearly to lender protection should be credited.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why equity investors generally require a higher expected return than debt investors in the same company.",
          answer:
            "Equity holders bear more risk than debt holders &mdash; they're paid only after debt obligations are met (a residual claim), have no guaranteed return, and no fixed repayment date, whereas debt holders have a priority, contractual claim to interest and principal. Investors require greater compensation for bearing this additional risk, which is precisely why equity is generally a more expensive source of finance than debt.",
          note: "A strong answer explicitly connects the <em>risk</em> difference (priority of claim, certainty of payment) to the <em>return</em> difference, rather than simply asserting equity is 'riskier'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "The company is deciding between financing a new project with equity or debt. Comment on one advantage and one disadvantage of using debt rather than equity for this purpose.",
          answer:
            "Advantage: debt is typically cheaper than equity, and interest payments are usually tax-deductible, further reducing the effective cost. Disadvantage: interest and principal repayments are contractual obligations that must be met regardless of the company's profitability, increasing financial risk and potentially leading to default if the project's cashflow is insufficient.",
          note: "A complete answer presents both sides of the trade-off, since a one-sided answer (advantage or disadvantage alone) would be incomplete for a 'comment' question of this weight.",
        },
      ],
    },
    {
      id: "cb1-q6",
      title: "Estimating the cost of equity",
      modules: "Module 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company's current dividend ($D_0$) is &pound;0.25 per share, expected to grow at a constant rate of 5% per year indefinitely. Its current share price is &pound;4.00. Using the dividend growth model, calculate the company's cost of equity.",
          answer:
            "$k_e = \\dfrac{D_0(1+g)}{P_0} + g = \\dfrac{0.25(1.05)}{4.00} + 0.05 = \\dfrac{0.2625}{4.00} + 0.05 = 0.065625 + 0.05 = 11.56\\%$.",
          note: "The numerator must use $D_0(1+g)$ (the <em>next</em> dividend expected), not $D_0$ itself &mdash; using $D_0$ directly is the most common error in this formula.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The company's beta is 1.2, the risk-free rate is 3%, and the expected return on the market is 8%. Calculate the cost of equity using CAPM.",
          answer: "$k_e = r_f + \\beta(r_m - r_f) = 0.03 + 1.2(0.08 - 0.03) = 0.03 + 1.2(0.05) = 0.03 + 0.06 = 9.00\\%$.",
          note: "A straightforward CAPM substitution &mdash; candidates should compute the risk premium $(r_m - r_f)$ first, then multiply by beta, before adding the risk-free rate.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the two cost of equity estimates from parts (i) and (ii) differ, and which (if either) should be considered 'correct'.",
          answer:
            "The dividend growth model and CAPM rely on different underlying assumptions and data (historical/assumed dividend growth versus market risk and beta), so they will rarely agree exactly in practice &mdash; neither is definitively 'correct'; both are estimates subject to genuine uncertainty, and judgement is needed in choosing between or reconciling them, rather than treating either figure as a precise, guaranteed answer.",
          note: "A strong answer resists declaring one method definitively superior, instead acknowledging both are estimates built on different, imperfect assumptions.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain one circumstance in which CAPM would be the only viable method of the two for estimating a company's cost of equity.",
          answer:
            "If the company pays no dividend at all (e.g. a young, high-growth company retaining all profit for reinvestment), the dividend growth model cannot be applied at all, since it relies entirely on a dividend stream &mdash; CAPM, which doesn't depend on dividends, remains applicable in this situation.",
          note: "This is an important, commonly tested limitation of the dividend growth model worth remembering precisely.",
        },
      ],
    },
    {
      id: "cb1-q7",
      title: "Weighted average cost of capital",
      modules: "Module 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A company is financed by &pound;60m of equity (market value) with a cost of equity of 12%, and &pound;40m of debt (market value) with a pre-tax cost of debt of 6%. The corporation tax rate is 25%. Calculate the company's WACC.",
          answer:
            "$WACC = \\dfrac{E}{E+D}k_e + \\dfrac{D}{E+D}k_d(1-t) = \\dfrac{60}{100}(0.12) + \\dfrac{40}{100}(0.06)(1-0.25) = 0.072 + 0.018 = 9.00\\%$.",
          note: "The cost of debt must be adjusted by $(1-t)$ to reflect the tax deductibility of interest &mdash; forgetting this adjustment (using the pre-tax cost of debt directly) is the most common error in this calculation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why market values (rather than balance sheet book values) of equity and debt are used to calculate WACC.",
          answer:
            "Market values reflect what investors would actually require today for the risk they're bearing, whereas book values are historical accounting figures that may bear little relation to current economic value &mdash; WACC is fundamentally a forward-looking, market-based figure representing the company's true current cost of capital, not a backward-looking accounting one.",
          note: "Candidates should connect this to the broader principle (also seen in business valuation) that market values are preferred wherever available, for objectivity and relevance.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain why WACC is typically used as the discount rate for appraising a new investment project of average risk for this company.",
          answer:
            "WACC represents the minimum return required by the company's providers of finance overall, so a project earning at least the WACC is expected to satisfy those providers and create value for shareholders &mdash; making it the natural hurdle rate for a project whose risk matches the company's average existing risk.",
          note: "The word 'average risk' is important &mdash; a project materially riskier or safer than the company's typical activities would need a risk-adjusted rate instead.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the tax-deductibility of interest creates an incentive for a company to increase its gearing, and one factor that limits how far this incentive can reasonably be pursued.",
          answer:
            "Since interest is tax-deductible, increasing the proportion of (relatively cheap) debt finance reduces WACC further via a larger tax shield, all else equal. However, very high gearing introduces significant costs of financial distress (increased risk of default, higher borrowing costs, potential bankruptcy costs), which eventually outweigh the tax benefit of additional debt.",
          note: "This is Modigliani-Miller's tax-adjusted theory in brief &mdash; candidates should name financial distress costs specifically as the limiting factor.",
        },
      ],
    },
    {
      id: "cb1-q8",
      title: "Payback period and accounting rate of return",
      modules: "Module 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A project requires an initial investment of &pound;80,000 and is expected to generate cash inflows of &pound;25,000, &pound;30,000, &pound;35,000 and &pound;20,000 in years 1 to 4 respectively. Calculate the project's payback period.",
          answer:
            "Cumulative cashflows: Year 1 &pound;25,000; Year 2 &pound;55,000; Year 3 &pound;90,000. Payback occurs during year 3: remaining amount needed after year 2 $= 80{,}000 - 55{,}000 = \\pounds25{,}000$; fraction of year 3 $= 25{,}000/35{,}000 = 0.71$. Payback period $= 2 + 0.71 = 2.71$ years.",
          note: "Candidates should identify the correct year in which cumulative cashflow first exceeds the initial investment, then calculate the <em>fraction</em> of that year needed, not round to a whole number of years.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "The project's asset is depreciated on a straight-line basis to zero residual value over its 4-year life. Using the average investment basis, calculate the project's accounting rate of return (ARR).",
          answer:
            "Annual depreciation $= 80{,}000/4 = \\pounds20{,}000$. Accounting profit each year (cash inflow minus depreciation): Year 1 $= \\pounds5{,}000$; Year 2 $=\\pounds10{,}000$; Year 3 $=\\pounds15{,}000$; Year 4 $=\\pounds0$. Average annual profit $= (5{,}000+10{,}000+15{,}000+0)/4 = \\pounds7{,}500$. Average investment $= (80{,}000+0)/2 = \\pounds40{,}000$. $ARR = 7{,}500/40{,}000 = 18.75\\%$.",
          note: "Candidates must first convert cash inflows into accounting <em>profit</em> by deducting depreciation, before calculating the average &mdash; using the cash inflows directly (without deducting depreciation) is a common error.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 1,
          question: "State the ARR that would result if the <em>initial</em> investment (rather than average investment) were used as the denominator instead.",
          answer: "$ARR = 7{,}500/80{,}000 = 9.38\\%$.",
          note: "Roughly half the average-investment-basis figure, illustrating why the choice of denominator must always be stated explicitly alongside any ARR result.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 1,
          question: "Discuss the single most significant theoretical limitation shared by both payback period and ARR.",
          answer:
            "Both methods ignore the time value of money entirely, treating cashflows or profits from different years as equally valuable without any discounting &mdash; a flaw directly corrected by NPV and IRR, which explicitly discount future cashflows.",
          note: "This is the central theme distinguishing this module's techniques from the NPV/IRR methods covered next.",
        },
      ],
    },
    {
      id: "cb1-q9",
      title: "Net present value",
      modules: "Module 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "Using the same project as the previous question (initial investment &pound;80,000; cash inflows &pound;25,000, &pound;30,000, &pound;35,000, &pound;20,000 in years 1-4), calculate the project's NPV using a discount rate of 8%.",
          answer:
            "Discount factors: year 1 $=0.9259$; year 2 $=0.8573$; year 3 $=0.7938$; year 4 $=0.7350$. Present values: $25{,}000(0.9259)=\\pounds23{,}148$; $30{,}000(0.8573)=\\pounds25{,}720$; $35{,}000(0.7938)=\\pounds27{,}784$; $20{,}000(0.7350)=\\pounds14{,}701$. Sum of present values $= \\pounds91{,}353$. $NPV = 91{,}353 - 80{,}000 = \\pounds11{,}353$.",
          note: "Candidates should keep the time-0 initial investment <em>undiscounted</em>, deducting it directly from the sum of the discounted inflows.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "Comment on whether the company should accept this project, based on the NPV calculated in part (i).",
          answer:
            "Since the NPV is positive (&pound;11,353), the project should be accepted &mdash; it's expected to increase shareholder wealth by generating a return greater than the 8% required by the discount rate used.",
          note: "A simple, direct application of the NPV decision rule following correctly from part (i)'s calculation.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain why NPV is generally considered theoretically superior to both payback period and ARR (from the previous question) as an investment appraisal technique.",
          answer:
            "NPV explicitly accounts for the time value of money (unlike both alternatives) and is based on cashflow rather than accounting profit (unlike ARR), and it directly measures the project's expected contribution to shareholder wealth, which is the company's stated financial objective.",
          note: "This directly contrasts NPV's two corrected flaws against the two methods evaluated in the previous question.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain what a 'sunk cost' is, and why it should never be included in an NPV calculation.",
          answer:
            "A sunk cost is a cost that has already been incurred and cannot be recovered regardless of the current decision. It should be excluded from NPV because it doesn't change based on whether the project proceeds or not, so it's entirely irrelevant to the decision at hand &mdash; only cashflows that change as a result of the decision belong in the calculation.",
          note: "This is one of the most commonly tested sources of error in NPV questions &mdash; a strong answer states the general principle (only relevant, incremental cashflows) alongside the specific sunk-cost definition.",
        },
      ],
    },
    {
      id: "cb1-q10",
      title: "Internal rate of return",
      modules: "Module 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "Using the same project (initial investment &pound;80,000; cash inflows &pound;25,000, &pound;30,000, &pound;35,000, &pound;20,000 in years 1-4), NPV at 13% is &pound;2,141 and NPV at 14% is &pound;479. Using linear interpolation, estimate the project's IRR.",
          answer:
            "$IRR \\approx 13\\% + \\dfrac{2{,}141}{2{,}141 - 479} \\times (14\\%-13\\%) = 13\\% + \\dfrac{2{,}141}{1{,}662} \\times 1\\% = 13\\% + 1.29\\% = 14.29\\%$. (The precise IRR, found by iteration, is approximately 14.30%, confirming the interpolation is a close approximation.)",
          note: "The interpolation formula adds the <em>lower</em> rate's proportional share of the gap between the two NPVs &mdash; candidates should double-check the sign and direction of the calculation, since NPV is falling as the rate rises here.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "The company's WACC is 8%. Comment on whether this project should be accepted, based on the IRR calculated in part (i).",
          answer:
            "Since the IRR (approximately 14.3%) exceeds the company's WACC (8%), the project should be accepted under the IRR decision rule &mdash; consistent with the positive NPV found in the previous question at the 8% discount rate.",
          note: "Worth noting the IRR and NPV decision rules agree here, as they always will for a single, independent, conventional project.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why NPV and IRR can give conflicting rankings when choosing between two mutually exclusive projects, and which method's recommendation should generally be followed if they disagree.",
          answer:
            "The two methods can rank projects differently when the projects have different cashflow patterns or scales, because IRR measures a <em>rate</em> of return while NPV measures an absolute <em>value</em> created &mdash; a smaller project can have a higher IRR but a lower NPV than a larger one. NPV should generally be followed, since it directly measures the absolute increase in shareholder wealth, the company's actual financial objective.",
          note: "This is one of the most important theoretical points in investment appraisal &mdash; candidates should state clearly that NPV wins when the two methods conflict for mutually exclusive projects.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain the 'multiple IRR' problem, and identify the type of project cashflow pattern that can cause it.",
          answer:
            "A project with unconventional cashflows (e.g. an initial outflow, followed by inflows, followed by a further large outflow, such as a decommissioning cost) can have more than one discount rate at which NPV equals zero, making IRR ambiguous or meaningless as a single figure. This typically arises when a project's cashflow signs change more than once over its life.",
          note: "Candidates should name a concrete example of the sign-changing pattern (e.g. a decommissioning cost) that causes this problem.",
        },
      ],
    },
    {
      id: "cb1-q11",
      title: "Inflation and taxation in investment appraisal",
      modules: "Modules 4, 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question: "The money (nominal) discount rate is 9% and expected inflation is 4% per annum. Using the Fisher equation, calculate the equivalent real discount rate.",
          answer:
            "$(1+\\text{real rate}) = \\dfrac{1+\\text{money rate}}{1+\\text{inflation rate}} = \\dfrac{1.09}{1.04} = 1.0481$. Real rate $= 4.81\\%$.",
          note: "Candidates should use the exact multiplicative Fisher relationship (dividing, not subtracting) &mdash; the simple approximation (money rate minus inflation) would give 5%, noticeably different from the exact 4.81%.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why cashflows expressed in real terms must be discounted using a real discount rate, rather than the money discount rate, and vice versa.",
          answer:
            "Mixing a real cashflow with a money discount rate (or vice versa) would inconsistently double-count or omit the effect of inflation, distorting the resulting NPV &mdash; the cashflows and discount rate must be consistently on the same (either both real or both money) basis for the calculation to be valid.",
          note: "This consistency principle is one of the most frequently tested points in this topic &mdash; worth stating explicitly and precisely.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain what 'capital allowances' are, and why they are relevant when appraising an investment involving a new asset purchase.",
          answer:
            "Capital allowances are tax relief given on the cost of qualifying capital expenditure (broadly analogous to depreciation, but calculated under tax rules rather than accounting rules). They reduce the company's taxable profit and hence its tax payable, meaning they should be incorporated into the post-tax cashflows used in an NPV calculation involving a new asset purchase.",
          note: "Candidates should recognise capital allowances as the <em>tax</em> equivalent of accounting depreciation, both reducing the cash tax actually paid.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the timing of a tax cashflow (e.g. tax paid one year after the profit is earned) can materially affect a project's calculated NPV.",
          answer:
            "Since NPV explicitly accounts for the time value of money, a tax payment delayed by a year is worth less in present value terms than an equivalent payment made immediately, so the exact timing assumption used for tax cashflows can materially affect the calculated NPV &mdash; a correctly-sized cashflow placed in the wrong year will still produce an incorrect NPV.",
          note: "This reinforces that NPV is sensitive to <em>when</em> a cashflow occurs, not just its amount.",
        },
      ],
    },
    {
      id: "cb1-q12",
      title: "Business valuation, dividend policy, and mergers and acquisitions",
      modules: "Modules 16, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company's current dividend is &pound;0.30 per share, expected to grow at 4% per year indefinitely, and its cost of equity is 10%. Using the dividend growth model, calculate the theoretical value of one share. Separately, a comparable listed company trades on a P/E ratio of 15, and the target company's EPS is &pound;0.40 &mdash; calculate the implied share value using this earnings-based approach.",
          answer:
            "Dividend growth model: $P_0 = \\dfrac{D_0(1+g)}{k_e-g} = \\dfrac{0.30(1.04)}{0.10-0.04} = \\dfrac{0.312}{0.06} = \\pounds5.20$. P/E-based value: $15 \\times \\pounds0.40 = \\pounds6.00$ per share.",
          note: "Two different valuation methods applied to the same company can (and often do) give different results &mdash; both figures should be calculated and left as they are, not artificially reconciled.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why the two valuations calculated in part (i) differ, and why a valuer might reasonably calculate both rather than relying on a single method.",
          answer:
            "Each method relies on different underlying assumptions and data (an assumed constant dividend growth rate versus a market-based comparable earnings multiple), so they will rarely agree exactly. Using multiple methods together gives a more robust, cross-checked view of the business's likely value range than relying on any single method's output in isolation.",
          note: "This echoes the same 'use multiple methods to triangulate' principle seen elsewhere in this course (e.g. checking a model's output via independent recalculation).",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain the 'signalling effect' of a dividend cut, and why a company might be reluctant to cut its dividend even if retaining the cash would be financially sound.",
          answer:
            "Because managers typically have better information about a company's prospects than outside shareholders, a dividend cut is often interpreted by the market as a negative signal about management's genuine view of future prospects, causing the share price to fall &mdash; regardless of whether the underlying financial logic for the cut (e.g. funding a good investment opportunity) is actually sound. This negative market reaction is exactly why companies are often very reluctant to cut dividends.",
          note: "A strong answer distinguishes the genuine financial logic (which might favour retention) from the market's <em>signalling</em> interpretation (which can react negatively regardless).",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Discuss two distinct reasons why mergers and acquisitions often fail to create the value originally anticipated.",
          answer:
            "Overpaying: an excessive takeover premium, or overestimating achievable synergies, means the price paid exceeds the genuine value created by the combination. Poor integration and agency motives: difficulty integrating the two companies' operations and cultures, or management being driven by empire-building motives (a form of the agency problem) rather than genuine shareholder value creation, can both prevent anticipated benefits from actually being realised.",
          note: "Any two distinct reasons (overpaying/overestimating synergies, poor integration, empire-building/agency motives) should be credited if clearly explained.",
        },
      ],
    },
  ],
});

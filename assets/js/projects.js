window.portfolioGroups = [
  {
    id: "corporate-finance",
    title: "Corporate Finance and Financial Analysis",
    description: "Financial statements, integrated forecasts, budgets and capital-allocation decisions."
  },
  {
    id: "equity-research",
    title: "Equity Research, Valuation and Public Markets",
    description: "DCF, trading comps, segment valuation, option pricing and public-market analysis."
  },
  {
    id: "investment-banking",
    title: "Investment Banking and M&A",
    description: "Merger modelling, transaction valuation and deal screening."
  },
  {
    id: "private-markets",
    title: "Private Equity, Venture Capital and Private Markets",
    description: "LBO returns, fund cash flows, waterfalls, venture financing and ownership."
  },
  {
    id: "credit-treasury",
    title: "Credit Analysis and Treasury",
    description: "Leverage, coverage, liquidity, refinancing and distribution capacity."
  },
  {
    id: "real-estate",
    title: "Real Estate and Private Equity Real Estate",
    description: "Property cash flows, debt sizing, downside cases and equity returns."
  },
  {
    id: "portfolio-risk",
    title: "Portfolio Management, Risk and Sustainable Investing",
    description: "Allocation, drawdown, factor, climate and asset-liability analysis."
  }
];

window.portfolioProjects = [
  {
    id: "financial-statement-analysis",
    group: "corporate-finance",
    title: "NEXT and JD Sports Financial Statement Analysis",
    eyebrow: "Financial statement analysis",
    company: "NEXT plc and JD Sports Fashion plc",
    decision: "Which retailer showed stronger profitability, capital efficiency and balance-sheet resilience through 2025?",
    short: "A retailer comparison covering margins, DuPont returns, liquidity, solvency and earnings quality.",
    featured: true,
    verdict: "NEXT led on profitability and return on equity",
    verdictTone: "positive",
    conclusion: [
      "NEXT recorded a 12.03% net margin and 41.96% return on equity in 2025, compared with 4.28% and 16.54% for JD Sports. JD Sports had slightly higher asset turnover, but NEXT converted sales into profit more effectively.",
      "NEXT also reduced debt to assets from 48.10% in 2023 to 33.22% in 2025. This is a historical academic group project. The portfolio presents selected analysis and does not claim sole authorship."
    ],
    metrics: [
      ["NEXT net margin", "12.03%", "2025"],
      ["NEXT return on equity", "41.96%", "2025"],
      ["JD Sports net margin", "4.28%", "2025"],
      ["NEXT debt to equity", "0.92x", "2025"]
    ],
    architecture: ["Income statement review", "Balance-sheet review", "Cash-flow review", "DuPont analysis", "Liquidity ratios", "Profitability ratios", "Solvency ratios", "Source and QA notes"],
    tested: ["Margin conversion", "Asset turnover and leverage", "Liquidity trend", "Debt and interest coverage"],
    risks: ["The original work was completed as an academic group project.", "Company reporting periods and adjusted metrics are not fully aligned.", "Licensed data extracts remain private and are not redistributed.", "The model contains a conditional QA status, so conclusions are presented as historical analysis rather than current advice."],
    sources: [
      ["NEXT reports and presentations", "https://www.nextplc.co.uk/investors/reports-and-presentations/2025-26"],
      ["JD Sports annual reports", "https://www.jdplc.com/investor-relations/reports-and-presentations/annual-reports/"]
    ],
    images: [
      ["assets/models/financial-statement-analysis-summary.png", "2025 ratio comparison and NEXT solvency trend"],
      ["assets/models/financial-statement-analysis-02.png", "DuPont analysis for NEXT and JD Sports"],
      ["assets/models/financial-statement-analysis-03.png", "Liquidity ratio schedule"]
    ]
  },
  {
    id: "three-statement",
    group: "corporate-finance",
    title: "Microsoft Three-Statement Model",
    eyebrow: "Integrated financial modelling",
    company: "Microsoft",
    decision: "How do segment growth, margins, working capital and capital expenditure flow through the three statements?",
    short: "An integrated Microsoft forecast linking segment drivers, statements, debt, cash and free cash flow.",
    featured: true,
    verdict: "Cash generation rises, with capital expenditure as the key watch item",
    verdictTone: "neutral",
    conclusion: [
      "The base case grows revenue from $281.7bn in FY2025A to $426.4bn in FY2030E. EBITDA margin stays near 58%, while free cash flow reaches $157.3bn by FY2030E.",
      "The main forecast question is whether cloud growth can support continued infrastructure spending. A review should focus on Intelligent Cloud growth, capital expenditure intensity and cash conversion."
    ],
    metrics: [
      ["FY2030E revenue", "$426.4bn", "From $281.7bn in FY2025A"],
      ["FY2030E EBITDA", "$246.5bn", "57.8% margin"],
      ["FY2030E free cash flow", "$157.3bn", "Model output"],
      ["Forecast period", "5 years", "FY2026E to FY2030E"]
    ],
    architecture: ["Segment revenue drivers", "Cost and margin drivers", "Income statement", "Working-capital schedule", "Capital expenditure and depreciation", "Debt schedule", "Balance sheet", "Cash-flow statement and checks"],
    tested: ["Cloud growth", "Gross margin", "Capital expenditure intensity", "Statement and cash-flow tie-outs"],
    risks: ["Long-range demand for cloud services and data-centre capacity is uncertain.", "Capital expenditure may remain elevated for longer than modelled.", "Forecast assumptions are not company guidance.", "The public-data model simplifies some below-the-line and capital-allocation items."],
    sources: [
      ["Microsoft FY2025 annual report", "https://www.microsoft.com/investor/reports/ar25/"],
      ["Microsoft FY2024 annual report", "https://www.microsoft.com/investor/reports/ar24/"]
    ],
    images: [
      ["assets/models/three-statement-01.png", "Three-statement dashboard"],
      ["assets/models/three-statement-02.png", "Forecast output"],
      ["assets/models/three-statement-03.png", "Model checks"]
    ]
  },
  {
    id: "budgeting-fpa",
    group: "corporate-finance",
    title: "Walmart Budget, Variance and Cash Forecast",
    eyebrow: "Budgeting and FP&A",
    company: "Walmart benchmark case",
    decision: "Does the annual plan fund operations and maintain liquidity after working-capital movements and capital expenditure?",
    short: "A monthly budget with actual-versus-plan tracking, variance commentary and a rolling cash forecast.",
    featured: false,
    verdict: "The plan remains funded and ending cash rises",
    verdictTone: "positive",
    conclusion: [
      "The annual budget produces $702.8bn of revenue, $28.1bn of EBITDA and $9.8bn of free cash flow. Ending cash reaches $19.7bn in the model.",
      "First-half actual revenue is close to budget, while EBITDA is broadly flat to plan. The key controls are revenue delivery, working capital and monthly capital expenditure."
    ],
    metrics: [
      ["Budget revenue", "$702.8bn", "Annual plan"],
      ["Budget EBITDA", "$28.1bn", "Annual plan"],
      ["Free cash flow", "$9.8bn", "Annual plan"],
      ["Ending cash", "$19.7bn", "January close"]
    ],
    architecture: ["Annual operating budget", "Monthly revenue and margin drivers", "Budget versus actual", "Variance analysis", "Working-capital assumptions", "Capital expenditure", "Cash-flow forecast", "Checks and source notes"],
    tested: ["Monthly revenue variance", "EBITDA variance", "Working-capital swings", "Ending liquidity"],
    risks: ["The budget is an illustrative corporate-planning case.", "Actual results cover only the first part of the plan year.", "Working-capital assumptions can move monthly cash materially.", "The model is not company guidance."],
    sources: [
      ["Walmart FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/104169/000010416925000021/wmt-20250131.htm"],
      ["Walmart SEC filings", "https://stock.walmart.com/financial-information/sec-filings"],
      ["Walmart annual reports", "https://stock.walmart.com/financials/annual-reports-and-proxies/default.aspx"]
    ],
    images: [
      ["assets/models/budgeting-fpa-01.png", "Budget and ending-cash dashboard"],
      ["assets/models/budgeting-fpa-02.png", "Budget versus actual results"],
      ["assets/models/budgeting-fpa-04.png", "Cash-flow forecast, first half"],
      ["assets/models/budgeting-fpa-05.png", "Cash-flow forecast, second half"]
    ]
  },
  {
    id: "siemens-corporate-finance",
    group: "corporate-finance",
    title: "Siemens Corporate Finance and Capital Allocation",
    eyebrow: "Corporate finance",
    company: "Siemens",
    decision: "Can Siemens fund strategic investment and shareholder returns while protecting cash generation?",
    short: "A scenario-led review of free cash flow, distributions, retained cash and strategic investment capacity.",
    featured: false,
    verdict: "Base-case cash flow supports investment with payout discipline",
    verdictTone: "positive",
    conclusion: [
      "The base case estimates FY2026E revenue of €84.4bn and free cash flow of €11.1bn. A 40% distribution rate leaves €6.7bn of retained free cash flow and €3.3bn of strategic investment capacity.",
      "The severe downside reduces free cash flow to €6.2bn. Payout and acquisition decisions should therefore be tied to scenario cash flow, not the prior year's record result."
    ],
    metrics: [
      ["FY2026E revenue", "€84.4bn", "Base case"],
      ["FY2026E free cash flow", "€11.1bn", "Base case"],
      ["Retained free cash flow", "€6.7bn", "After 40% distributions"],
      ["Strategic capacity", "€3.3bn", "Base case"]
    ],
    architecture: ["FY2025 reported base", "FY2026 outlook", "Operating scenarios", "Free-cash-flow conversion", "Distribution policy", "Retained cash", "Strategic investment capacity", "Sensitivity and checks"],
    tested: ["Revenue growth", "Industrial Business margin", "Cash conversion", "Distribution rate"],
    risks: ["The original workbook was prepared as academic group work.", "The portfolio does not present the project as sole-authored work.", "Acquisition integration and working-capital pressure can reduce cash conversion.", "Scenario outputs are analyst estimates, not company guidance."],
    sources: [
      ["Siemens FY2025 results", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q4-fy-2025"],
      ["Siemens Q1 FY2026 results", "https://press.siemens.com/global/en/pressrelease/strong-start-fiscal-2026"]
    ],
    images: [
      ["assets/models/siemens-corporate-finance-02.png", "Capital-allocation scenarios"],
      ["assets/models/siemens-corporate-finance-03.png", "Operating scenarios and decision output"],
      ["assets/models/siemens-corporate-finance-04.png", "Margin and revenue sensitivity"]
    ]
  },
  {
    id: "dcf-valuation",
    group: "equity-research",
    title: "Apple DCF Valuation",
    eyebrow: "Equity valuation",
    company: "Apple",
    decision: "What share value is supported by the model's cash-flow forecast and terminal assumptions?",
    short: "An unlevered DCF with a five-year forecast, WACC, two terminal methods, an equity bridge and sensitivities.",
    featured: true,
    verdict: "The base DCF does not support the model market price",
    verdictTone: "caution",
    conclusion: [
      "At an 8.9% WACC and 2.5% terminal growth rate, the blended DCF produces $155.55 per share. The market price used in the model is $283.78, leaving a 45.2% gap.",
      "The sensitivity tables show what must change to close that gap. The result is most exposed to WACC, terminal growth, exit multiple and long-run operating margins."
    ],
    metrics: [
      ["Implied share price", "$155.55", "Blended terminal methods"],
      ["Model market price", "$283.78", "Valuation-date input"],
      ["WACC", "8.9%", "Base case"],
      ["Terminal growth", "2.5%", "Base case"]
    ],
    architecture: ["Historical financials", "Five-year operating forecast", "Unlevered free cash flow", "Cost of capital", "WACC", "Gordon growth and exit multiple", "Enterprise-to-equity bridge", "Scenario, sensitivity and checks"],
    tested: ["WACC and terminal growth", "WACC and exit multiple", "Revenue growth and EBITDA margin", "Terminal-method dispersion"],
    risks: ["Small changes in terminal assumptions move value materially.", "Forecasts are analyst estimates.", "The model does not assign a separate value to future strategic options.", "The DCF should be read with trading comps and business-quality analysis."],
    sources: [
      ["Apple FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm"],
      ["FRED 10-year Treasury", "https://fred.stlouisfed.org/series/DGS10"],
      ["Damodaran data", "https://pages.stern.nyu.edu/~adamodar/"],
      ["Apple investor relations", "https://investor.apple.com/"]
    ],
    images: [
      ["assets/models/dcf-valuation-01.png", "DCF summary and equity-value bridge"],
      ["assets/models/dcf-valuation-02.png", "DCF sensitivity tables at readable scale"],
      ["assets/models/dcf-valuation-new-02.png", "Forecast free-cash-flow chart"]
    ]
  },
  {
    id: "comparable-companies",
    group: "equity-research",
    title: "Microsoft Comparable Companies",
    eyebrow: "Trading comparables",
    company: "Microsoft peer valuation",
    decision: "What valuation range is supported by selected software, cloud and large-cap technology peers?",
    short: "Peer screening, market data, trading multiples, outlier review and valuation across five methods.",
    featured: false,
    verdict: "Use EV / EBITDA as the primary anchor",
    verdictTone: "neutral",
    conclusion: [
      "The peer median is 16.2x EV / EBITDA, which implies $361.26 per share. The other methods range from $265.03 on EV / Revenue to $471.40 on EV / EBIT.",
      "EV / EBITDA is the cleanest primary reference for this peer set. Revenue, P / E and P / B remain cross-checks because the companies have different margins, capital structures and accounting profiles."
    ],
    metrics: [
      ["Peer EV / EBITDA", "16.2x", "Median"],
      ["Implied share price", "$361.26", "EV / EBITDA method"],
      ["Peer EV / revenue", "6.8x", "Median"],
      ["Peer set", "9", "Excluding target"]
    ],
    architecture: ["Peer-universe rationale", "Market data", "Financial metrics", "Enterprise value", "Trading multiples", "Peer screening", "Valuation summary", "Sensitivity and checks"],
    tested: ["Median and quartiles", "Outlier treatment", "Metric selection", "Selected-multiple sensitivity"],
    risks: ["The peer set spans different growth and margin profiles.", "Market multiples reflect sentiment as well as fundamentals.", "Annual and trailing periods require consistent updates.", "No multiple removes the need for business-quality judgment."],
    sources: [
      ["Microsoft FY2025 annual report", "https://www.microsoft.com/investor/reports/ar25/"],
      ["Apple FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm"],
      ["Alphabet investor relations", "https://abc.xyz/investor/"],
      ["Amazon annual reports", "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx"]
    ],
    images: [
      ["assets/models/comparable-companies-01.png", "Comparable-company dashboard"],
      ["assets/models/comparable-companies-02.png", "Valuation summary"],
      ["assets/models/comparable-companies-03.png", "Trading multiples"]
    ]
  },
  {
    id: "precedent-transactions",
    group: "investment-banking",
    title: "Software Precedent Transactions",
    eyebrow: "Transaction valuation",
    company: "Software and infrastructure M&A",
    decision: "How should completed control transactions inform the value of a profitable software target?",
    short: "A screened set of strategic and sponsor deals with control premiums, transaction multiples and implied value.",
    featured: false,
    verdict: "EV / EBITDA is the primary control-value reference",
    verdictTone: "neutral",
    conclusion: [
      "The selected precedent multiple is 16.65x EV / EBITDA, which implies $27.68 per share for the illustrative target. Completed deals show a 35.0% median control premium.",
      "EV / Revenue is retained as a cross-check. Terminated deals, negative-EBITDA observations and extreme multiples are excluded from the selected statistics."
    ],
    metrics: [
      ["Completed deals", "9", "Strategic and sponsor"],
      ["Median premium", "35.0%", "Completed deals"],
      ["Selected EV / EBITDA", "16.65x", "Primary method"],
      ["Implied share price", "$27.68", "EV / EBITDA method"]
    ],
    architecture: ["Transaction universe", "Deal data", "Target financials", "Transaction multiples", "Deal screening", "Control premiums", "Implied valuation", "Sensitivity and sources"],
    tested: ["Strategic and sponsor deals", "Deal status", "EV / Revenue cross-check", "Target-metric sensitivity"],
    risks: ["Target financials are illustrative.", "Public deal announcements do not disclose consistent trailing metrics.", "Deal synergies and market conditions reduce comparability.", "Precedents are backward-looking and should not be used alone."],
    sources: [
      ["Synopsys acquisition of Ansys", "https://news.synopsys.com/2025-07-17-Synopsys-Completes-Acquisition-of-Ansys"],
      ["IBM acquisition of HashiCorp", "https://newsroom.ibm.com/2024-04-24-IBM-to-Acquire-HashiCorp,-Inc-Creating-a-Comprehensive-End-to-End-Hybrid-Cloud-Platform"],
      ["Cisco acquisition of Splunk", "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2023/m09/cisco-to-acquire-splunk.html"],
      ["Thoma Bravo acquisition of Anaplan", "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-anaplan"]
    ],
    images: [
      ["assets/models/precedent-transactions-01.png", "Precedent valuation summary"],
      ["assets/models/precedent-transactions-02.png", "Control-premium analysis"],
      ["assets/models/precedent-transactions-03.png", "Valuation sensitivities"]
    ]
  },
  {
    id: "sum-of-the-parts",
    group: "equity-research",
    title: "Alphabet Sum-of-the-Parts",
    eyebrow: "Segment valuation",
    company: "Alphabet",
    decision: "What value is supported when Services, Cloud and Other Bets are valued separately?",
    short: "Segment valuation using separate metrics, corporate-cost adjustments, net cash and a per-share bridge.",
    featured: false,
    verdict: "The base SOTP is below the model market price",
    verdictTone: "caution",
    conclusion: [
      "The model produces $264.66 per share versus a $337.39 market price, a 21.6% gap. Google Services contributes 77.9% of gross segment value and Cloud contributes 20.7%.",
      "The result is driven by segment multiples, computing-infrastructure investment, shared costs and the value assigned to Other Bets. Those inputs should be reviewed separately rather than hidden in one consolidated multiple."
    ],
    metrics: [
      ["SOTP value per share", "$264.66", "Base case"],
      ["Model market price", "$337.39", "Comparison input"],
      ["Services value mix", "77.9%", "Gross segment value"],
      ["Cloud value mix", "20.7%", "Gross segment value"]
    ],
    architecture: ["Segment definitions", "Segment financials", "Metric selection", "Segment enterprise values", "Corporate adjustments", "Net cash", "Equity-value bridge", "Scenario and sensitivity"],
    tested: ["Services multiple", "Cloud valuation", "Other Bets value", "Corporate-cost adjustment"],
    risks: ["Segment multiples are judgmental.", "Shared costs and computing-infrastructure investment complicate segment economics.", "Other Bets cannot be valued reliably from revenue alone.", "The SOTP should be cross-checked with comps and DCF."],
    sources: [
      ["Alphabet 2025 Form 10-K", "https://s206.q4cdn.com/479360582/files/doc_financials/2025/q4/GOOG-10-K-2025.pdf"],
      ["Alphabet Q4 2025 results", "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm"],
      ["Alphabet investor relations", "https://abc.xyz/investor/"]
    ],
    images: [
      ["assets/models/sum-of-the-parts-01.png", "SOTP dashboard"],
      ["assets/models/sum-of-the-parts-02.png", "Segment valuation"],
      ["assets/models/sum-of-the-parts-03.png", "SOTP sensitivities"]
    ]
  },
  {
    id: "option-pricing",
    group: "equity-research",
    title: "Apple Option Pricing and Greeks",
    eyebrow: "Derivatives valuation",
    company: "Apple option case",
    decision: "What are the Black-Scholes values and risk exposures for the selected Apple call and put assumptions?",
    short: "A Black-Scholes model with put-call parity, Greeks, payoff profiles and stock-price and volatility sensitivities.",
    featured: false,
    verdict: "The model prices the options consistently and passes parity checks",
    verdictTone: "neutral",
    conclusion: [
      "At a $283.78 spot price, $285 strike and 27.7% volatility, the model values the call at $23.2 and the put at $19.5. Put-call parity reconciles within rounding.",
      "Call delta is 0.56. The sensitivity tables show that stock price and volatility dominate the option value over the selected six-month term."
    ],
    metrics: [
      ["Call value", "$23.2", "Black-Scholes"],
      ["Put value", "$19.5", "Black-Scholes"],
      ["Call delta", "0.56", "Base case"],
      ["Implied volatility", "40.0%", "Solver table output"]
    ],
    architecture: ["Market inputs", "Black-Scholes calculation", "Put-call parity", "Call and put values", "Greeks", "Payoff profiles", "Implied-volatility table", "Sensitivity and checks"],
    tested: ["Stock price", "Volatility", "Time decay", "Put-call parity"],
    risks: ["The option inputs are a dated market snapshot.", "Black-Scholes assumes continuous trading and lognormal returns.", "The model does not capture volatility skew or discrete jump risk.", "The output is a valuation exercise, not a trading recommendation."],
    sources: [
      ["Apple market data", "https://finance.yahoo.com/quote/AAPL/"],
      ["Federal Reserve H.15 rates", "https://www.federalreserve.gov/releases/h15/"],
      ["Nasdaq Apple option chain", "https://www.nasdaq.com/market-activity/stocks/aapl/option-chain"]
    ],
    images: [
      ["assets/models/option-pricing-01.png", "Option valuation dashboard"],
      ["assets/models/option-pricing-02.png", "Black-Scholes calculation"],
      ["assets/models/option-pricing-03.png", "Option Greeks"],
      ["assets/models/option-pricing-05.png", "Call and put sensitivity tables"]
    ]
  },
  {
    id: "ma-merger",
    group: "investment-banking",
    title: "Cisco and Splunk Merger Analysis",
    eyebrow: "M&A",
    company: "Cisco acquisition of Splunk",
    decision: "How do purchase accounting, financing and synergy delivery affect Cisco's pro forma EPS?",
    short: "A merger model covering purchase price, financing, goodwill, synergies and pro forma earnings.",
    featured: true,
    verdict: "Accretion depends on synergy delivery",
    verdictTone: "positive",
    conclusion: [
      "The model is 1.7% accretive in FY2026E, rising to 4.8% in FY2027E and 7.0% in FY2028E as synergies phase in. Pro forma debt / EBITDA rises from 1.67x to 2.17x.",
      "The main deal variables are synergy timing, financing cost and intangible-asset amortisation. The accretion result weakens if those inputs move against the case."
    ],
    metrics: [
      ["Purchase equity value", "$28.0bn", "$157 per target share"],
      ["FY2026 accretion", "1.7%", "First full forecast year"],
      ["FY2028 accretion", "7.0%", "Synergies mature"],
      ["Pro forma leverage", "2.17x", "$14.5bn new debt"]
    ],
    architecture: ["Standalone financials", "Purchase price", "Sources and uses", "Financing mix", "Goodwill and intangibles", "Synergy build", "Pro forma income statement", "Accretion and sensitivity"],
    tested: ["Synergy realisation", "Debt financing", "Interest rate", "Intangible amortisation"],
    risks: ["Synergy timing and financing mix are analyst assumptions.", "Purchase accounting is simplified.", "Integration costs and dis-synergies are not fully captured."],
    sources: [
      ["Cisco acquisition completion", "https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Splunk/default.aspx"],
      ["Splunk FY2024 results", "https://www.splunk.com/en_us/newsroom/press-releases/2024/splunk-announces-fiscal-fourth-quarter-and-full-year-2024-financial-results.html"],
      ["Cisco FY2025 results", "https://investor.cisco.com/news/news-details/2025/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2025-EARNINGS/default.aspx"]
    ],
    images: [
      ["assets/models/ma-merger-01.png", "Transaction dashboard"],
      ["assets/models/ma-merger-02.png", "Accretion and dilution"],
      ["assets/models/ma-merger-03.png", "Deal sensitivities"]
    ]
  },
  {
    id: "leveraged-buyout",
    group: "private-markets",
    title: "Academy Sports LBO",
    eyebrow: "Leveraged buyout",
    company: "Academy Sports and Outdoors",
    decision: "Does a take-private at 8.5x entry EBITDA produce an acceptable sponsor return?",
    short: "A public-data LBO with sources and uses, two debt tranches, cash sweep, checks and sponsor returns.",
    featured: true,
    verdict: "Pass at the modelled entry price",
    verdictTone: "caution",
    conclusion: [
      "With 5.5x initial debt / EBITDA and an 8.0x exit multiple, the base case produces an 8.6% sponsor IRR and 1.51x MOIC. Total debt falls from $3.68bn in 2025E to $2.59bn in 2029E.",
      "Debt paydown is not enough to reach a normal buyout return. The case needs a lower entry price, stronger EBITDA growth or a specific operating plan."
    ],
    metrics: [
      ["Sponsor IRR", "8.6%", "Five-year hold"],
      ["Sponsor MOIC", "1.51x", "Base case"],
      ["Initial leverage", "5.5x", "Debt / EBITDA"],
      ["2029E debt", "$2.59bn", "Down from $3.68bn"]
    ],
    architecture: ["Entry valuation", "Sources and uses", "Operating forecast", "Debt tranches", "Amortisation and cash sweep", "Covenant checks", "Exit valuation", "IRR, MOIC and sensitivities"],
    tested: ["Entry and exit multiple", "Exit multiple and EBITDA growth", "Leverage", "Revenue growth and EBITDA margin"],
    risks: ["Store, inventory and lease detail are simplified.", "Debt terms do not reproduce a negotiated credit agreement.", "Returns remain exposed to multiple compression.", "Public data cannot replace a quality-of-earnings review."],
    sources: [
      ["Academy FY2024 results", "https://investors.academy.com/news-releases/news-release-details/academy-sports-outdoors-reports-fourth-quarter-and-fiscal-2024"],
      ["Academy investor relations", "https://investors.academy.com/"]
    ],
    images: [
      ["assets/models/leveraged-buyout-01.png", "LBO summary, sponsor returns and debt paydown"],
      ["assets/models/leveraged-buyout-02.png", "Four sponsor IRR sensitivity tables"],
      ["assets/models/leveraged-buyout-new-02.png", "Debt paydown chart"]
    ]
  },
  {
    id: "private-equity-fund",
    group: "private-markets",
    title: "Private Equity Fund Cash Flow and Waterfall",
    eyebrow: "Private equity fund modelling",
    company: "Illustrative $750m fund",
    decision: "Do the call, distribution, fee and carry assumptions produce an acceptable outcome for limited partners?",
    short: "A fund model covering commitments, investments, exits, management fees, carried interest and LP cash flows.",
    featured: false,
    verdict: "Base-case LP returns are modest",
    verdictTone: "caution",
    conclusion: [
      "The base case calls $641.4m and distributes $1,031.5m to limited partners. Net IRR is 9.6%, with 1.61x TVPI and 1.61x DPI.",
      "The downside produces a 0.1% net IRR and 1.20x TVPI. Exit multiple and timing drive most of the return range."
    ],
    metrics: [
      ["Fund size", "$750m", "Committed capital"],
      ["Net IRR", "9.6%", "Base case"],
      ["TVPI", "1.61x", "Base case"],
      ["LP distributions", "$1,031.5m", "Model total"]
    ],
    architecture: ["Commitment schedule", "Investment pace", "Exit proceeds", "Management fees", "Capital calls", "Distribution waterfall", "LP cash flows", "IRR and TVPI sensitivity"],
    tested: ["Exit timing", "Exit multiple", "Fee drag", "Downside and upside cases"],
    risks: ["The fund and portfolio companies are illustrative.", "Exit proceeds are assumption-driven.", "Tax and legal terms are simplified.", "Past fund structures do not guarantee future outcomes."],
    sources: [
      ["ILPA Principles 3.0", "https://ilpa.org/wp-content/uploads/2019/06/ILPA-Principles-3.0_2019.pdf"],
      ["ILPA private equity glossary", "https://ilpa.org/resources-tools/private-equity-101/private-equity-glossary/"],
      ["Distribution waterfall reference", "https://www.duanemorris.com/site/static/private_equity_fund_distribution_waterfalls.pdf"]
    ],
    images: [
      ["assets/models/private-equity-fund-01.png", "Fund dashboard and LP cash flows"],
      ["assets/models/private-equity-fund-03.png", "Net IRR and TVPI sensitivities"],
      ["assets/models/private-equity-fund-04.png", "LP cash flows, investment period"],
      ["assets/models/private-equity-fund-05.png", "LP cash flows, harvest period"]
    ]
  },
  {
    id: "startup-venture-capital",
    group: "private-markets",
    title: "SaaS Startup Funding and Cap Table",
    eyebrow: "Startup and venture capital",
    company: "Illustrative SaaS company",
    decision: "How much external capital is required, and how do funding rounds affect ownership and investor returns?",
    short: "A venture model covering ARR growth, burn, funding rounds, dilution, cap-table ownership and exit returns.",
    featured: false,
    verdict: "The growth case needs substantial additional financing",
    verdictTone: "caution",
    conclusion: [
      "The model reaches $1.70bn of ARR and a 76% gross margin by 2031, but ending cash falls to negative $765m. The funding plan does not cover the growth case.",
      "Founder ownership declines to 29.3% at exit. Investor return outputs are very high because the model combines early entry prices with a $14.6bn exit value, so the valuation and financing assumptions need strict review."
    ],
    metrics: [
      ["Ending ARR", "$1.70bn", "2031"],
      ["Additional financing", "$765m", "Model shortfall"],
      ["Founder ownership", "29.3%", "At exit"],
      ["Exit equity value", "$14.6bn", "Assumption-driven"]
    ],
    architecture: ["Customer and ARR build", "Gross margin", "Operating burn", "Funding rounds", "Pre-money and post-money value", "Cap table", "Cash runway", "Investor MOIC and IRR"],
    tested: ["Revenue growth", "Burn and runway", "Funding size", "Exit valuation"],
    risks: ["The company is illustrative and uses public SaaS benchmarks.", "Funding rounds are analyst assumptions.", "The base case shows a cash shortfall rather than a fully funded plan.", "Exit-based investor returns are highly sensitive to timing and valuation."],
    sources: [
      ["Datadog S-1", "https://www.sec.gov/Archives/edgar/data/1561550/000119312519227783/d745413ds1.htm"],
      ["Datadog FY2019 results", "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-full-year-2019-results/"],
      ["Bessemer Cloud 100 benchmarks", "https://www.bvp.com/atlas/the-cloud-100-benchmarks-report"]
    ],
    images: [
      ["assets/models/startup-venture-capital-01.png", "Growth, burn, ownership and financing dashboard"],
      ["assets/models/startup-venture-capital-02.png", "Funding-round assumptions"],
      ["assets/models/startup-venture-capital-03.png", "Cap-table dilution by round"]
    ]
  },
  {
    id: "european-defence-ma",
    group: "investment-banking",
    title: "European Defence M&A Screening",
    eyebrow: "M&A screening",
    company: "Thales, Rheinmetall and RENK",
    decision: "Do the modelled Rheinmetall or RENK acquisition cases create value for Thales?",
    short: "A two-target screen using DCF, public comps, precedents, synergies, financing, leverage and accretion.",
    featured: false,
    verdict: "Reject Rheinmetall terms and reprice RENK",
    verdictTone: "caution",
    conclusion: [
      "The Rheinmetall case requires a 96.8% premium to blended DCF, produces 95.8% year-one dilution and raises pro forma net debt / EBITDA to 8.4x. The model says not to pursue the case terms.",
      "The RENK case is less leveraged at 1.6x net debt / EBITDA, but still produces 13.8% year-one dilution and negative ROIC less WACC. The terms need to be repriced or restructured."
    ],
    metrics: [
      ["Rheinmetall premium", "96.8%", "To blended DCF"],
      ["Rheinmetall leverage", "8.4x", "Pro forma net debt / EBITDA"],
      ["RENK dilution", "13.8%", "Year one"],
      ["RENK leverage", "1.6x", "Pro forma net debt / EBITDA"]
    ],
    architecture: ["Company forecasts", "DCF", "Public comparables", "Precedent transactions", "Offer premium", "Synergy valuation", "Sources and uses", "Accretion, leverage and decision screen"],
    tested: ["Offer price", "Synergy realisation", "Financing mix", "ROIC and accretion"],
    risks: ["Offer prices, betas and synergies are case assumptions.", "Company guidance and market inputs require updating.", "Regulatory and national-security review is outside the model."],
    sources: [
      ["Rheinmetall FY2025 results", "https://www.rheinmetall.com/en/media/news-watch/news/2026/03/2026-03-11-rheinmetall-presents-annual-report-for-2025"],
      ["Thales FY2025 results", "https://www.thalesgroup.com/en/news-centre/press-releases/thales-reports-its-2025-full-year-results"],
      ["RENK FY2025 results", "https://ir.renk.com/news-releases/news-release-details/fiscal-year-2025-renk-group-ag-achieves-annual-targets-new"],
      ["BAE Systems financial information", "https://www.baesystems.com/en/investors/financial-information"]
    ],
    images: [
      ["assets/models/european-defence-ma-summary.png", "Rheinmetall and RENK transaction comparison"],
      ["assets/models/european-defence-ma-03.png", "Defence public-company inputs"]
    ]
  },
  {
    id: "credit-analysis",
    group: "credit-treasury",
    title: "Verizon Credit Underwriting",
    eyebrow: "Corporate credit",
    company: "Verizon Communications",
    decision: "Does recurring cash generation provide enough capacity to reduce leverage and preserve coverage?",
    short: "Borrower-level credit work covering cash flow, leverage, coverage, covenants, debt capacity and downside.",
    featured: true,
    verdict: "Base-case credit remains defensible",
    verdictTone: "positive",
    conclusion: [
      "Net leverage falls from 2.91x in 2025 to 2.62x in 2026E and 1.70x by 2030E. Interest coverage remains above 7.5x, and 2026E DSCR is 1.88x.",
      "Recurring wireless cash flow supports the case. The main constraints are high absolute debt, capital intensity and shareholder distributions competing with debt reduction."
    ],
    metrics: [
      ["2026E net leverage", "2.62x", "Down from 2.91x"],
      ["2026E coverage", "7.78x", "EBITDA / cash interest"],
      ["2026E DSCR", "1.88x", "Base case"],
      ["2030E net leverage", "1.70x", "Model path"]
    ],
    architecture: ["Borrower overview", "Historical financials", "Five-year forecast", "Debt roll-forward", "Leverage and coverage", "Covenant headroom", "Debt capacity", "Downside and credit view"],
    tested: ["Debt reduction", "Interest coverage", "Covenant headroom", "Free cash flow after capital expenditure"],
    risks: ["Forecasts and covenant thresholds are analyst assumptions.", "The model does not reproduce every legal definition in the debt documents.", "Capital intensity can reduce discretionary cash flow.", "The internal view is not an agency rating."],
    sources: [
      ["Verizon FY2025 earnings release", "https://www.verizon.com/about/news/verizon-delivers-2025-financial-guidance-highest-quarterly-net-adds"],
      ["Verizon 2025 Form 10-K", "https://www.verizon.com/about/sites/default/files/2025-Annual-Report-on-Form-10k.pdf"],
      ["SEC filing", "https://www.sec.gov/Archives/edgar/data/732712/000073271226000007/vz-20251231.htm"]
    ],
    images: [
      ["assets/models/credit-analysis-01.png", "Credit dashboard"],
      ["assets/models/credit-analysis-02.png", "Risk summary"],
      ["assets/models/credit-analysis-03.png", "Credit sensitivities"]
    ]
  },
  {
    id: "rolls-royce-credit-treasury",
    group: "credit-treasury",
    title: "Rolls-Royce Credit and Treasury Review",
    eyebrow: "Credit and treasury",
    company: "Rolls-Royce Holdings",
    decision: "Are liquidity and leverage strong enough to support the current refinancing and distribution plans?",
    short: "A credit and treasury review covering ratings, cash quality, debt, liquidity, maturities and payout guardrails.",
    featured: true,
    verdict: "Capital allocation is the main risk",
    verdictTone: "caution",
    conclusion: [
      "FY2025 free cash flow is £3.27bn and net cash is £1.90bn. Pro forma gross liquidity is £8.57bn, while cash-floor-adjusted sources / uses is 1.40x, below the model's 1.50x guardrail.",
      "The base 2026 case keeps adjusted debt / EBITDA at 0.83x. In the downside, distributions reach 220% of free cash flow. The treasury action is to cap distributions at 50% of prior-year free cash flow and protect liquidity for the 2027 to 2028 maturities."
    ],
    metrics: [
      ["FY2025 free cash flow", "£3.27bn", "Reported measure"],
      ["FY2025 net cash", "£1.90bn", "Year end"],
      ["Gross liquidity", "£8.57bn", "Pro forma"],
      ["Cash-floor coverage", "1.40x", "Below 1.50x guardrail"]
    ],
    architecture: ["Historical and segment analysis", "Debt schedule", "Liquidity bridge", "2026 scenarios", "FX and hedge review", "Treasury actions", "Peer and rating framework", "Checks and sources"],
    tested: ["Cash quality", "Debt and liquidity", "Distributions and maturities", "Downside leverage"],
    risks: ["The FFO proxy and internal rating view are not agency calculations.", "Free cash flow can benefit from working-capital and service-contract timing.", "Distribution policy is an analyst recommendation, not management policy.", "The source set must be refreshed after new company results."],
    sources: [
      ["Rolls-Royce 2025 annual report", "https://www.rolls-royce.com/~/media/Files/R/Rolls-Royce/documents/annual-report/2026/rolls-royce-holdings-plc-annual-report-2025-accessible.pdf"],
      ["Rolls-Royce 2025 results", "https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results/rr-holdings-plc-2025-full-year-results.aspx"],
      ["Rolls-Royce debt securities", "https://www.rolls-royce.com/investors/debt-securities.aspx"],
      ["Rolls-Royce April 2026 update", "https://www.rolls-royce.com/media/press-releases/2026/30-04-2026-rr-holdings-plc-agm-statement-and-trading-update.aspx"]
    ],
    images: [
      ["assets/models/rolls-royce-credit-treasury-summary.png", "Credit metrics and historical cash trend"],
      ["assets/models/rolls-royce-credit-treasury-scenarios.png", "2026 credit scenarios and treasury action"],
      ["assets/models/rolls-royce-credit-treasury-03.png", "Free-cash-flow and net-cash recovery"],
      ["assets/models/rolls-royce-credit-treasury-04.png", "Credit thesis and monitoring points"]
    ]
  },
  {
    id: "real-estate-underwriting",
    group: "real-estate",
    title: "Logistics Acquisition Underwriting",
    eyebrow: "Real estate private equity",
    company: "Dallas-Fort Worth logistics asset",
    decision: "Can a $31.7m acquisition support the proposed debt and equity return requirements?",
    short: "Property underwriting from rent roll and NOI to debt service, exit value and equity returns.",
    featured: true,
    verdict: "Proceed to diligence, not commitment",
    verdictTone: "positive",
    conclusion: [
      "The base case produces a 12.9% levered IRR and 2.19x equity multiple, with minimum DSCR of 1.58x. That supports further work but leaves limited room for loose assumptions.",
      "The next step is to verify market rent, lease expiries, tenant credit and near-term capital needs against property-level diligence."
    ],
    metrics: [
      ["Levered IRR", "12.9%", "Seven-year hold"],
      ["Equity multiple", "2.19x", "$12.7m initial equity"],
      ["Minimum DSCR", "1.58x", "Model period"],
      ["Exit value", "$41.9m", "$168 per square foot"]
    ],
    architecture: ["Acquisition assumptions", "Tenant rent roll", "Revenue and expenses", "NOI and leasing costs", "Debt amortisation", "Levered cash flow", "Exit analysis", "Sensitivity and checks"],
    tested: ["Exit cap rate and rent growth", "Loan-to-cost", "Debt service coverage", "Rollover and capital reserves"],
    risks: ["The asset is representative rather than a marketed property.", "Executed lease abstracts and broker comps are required.", "Exit value is sensitive to cap-rate expansion.", "Environmental, title and physical diligence are outside the case."],
    sources: [
      ["Prologis FY2025 results", "https://www.prologis.com/insights-news/press-releases/prologis-reports-fourth-quarter-and-full-year-2025-results"],
      ["Prologis Q2 2025 deployment data", "https://www.prologis.com/insights-news/press-releases/prologis-reports-second-quarter-2025-results"],
      ["Prologis 2025 Form 10-K", "https://ir.prologis.com/financials/sec-filings/content/0001193125-26-051453/pld-20251231.htm"]
    ],
    images: [
      ["assets/models/real-estate-underwriting-01.png", "Underwriting summary"],
      ["assets/models/real-estate-underwriting-02.png", "Equity return build"],
      ["assets/models/real-estate-underwriting-03.png", "Return sensitivities"]
    ]
  },
  {
    id: "portfolio-management",
    group: "portfolio-risk",
    title: "Multi-Asset Portfolio and Risk",
    eyebrow: "Portfolio management",
    company: "Six-ETF policy portfolio",
    decision: "What contributes to return, volatility and downside, and does the portfolio beat its benchmark after tracking risk?",
    short: "Monthly performance, drawdown, beta, tracking error, correlations, risk contribution and allocation scenarios.",
    featured: false,
    verdict: "Diversified in sample, but not benchmark-beating",
    verdictTone: "neutral",
    conclusion: [
      "The portfolio records 12.8% annualised return, 7.3% volatility, a 1.21 Sharpe ratio and 0.50 beta to SPY. Maximum drawdown in the sample is 4.4%.",
      "The information ratio is negative 1.42. The allocation reduced market exposure but did not earn enough excess return relative to its tracking error."
    ],
    metrics: [
      ["Annualised return", "12.8%", "Historical sample"],
      ["Annualised volatility", "7.3%", "Monthly returns"],
      ["Sharpe ratio", "1.21", "Risk-free adjusted"],
      ["Beta to SPY", "0.50", "Information ratio negative 1.42"]
    ],
    architecture: ["ETF universe", "Policy weights", "Price history", "Return calculations", "Performance metrics", "Drawdown and risk", "Scenarios and Monte Carlo", "Allocation screen and checks"],
    tested: ["Equity sell-off", "Rate shock", "Inflation surprise", "Growth rally and dollar weakness"],
    risks: ["The workbook uses a static public-data sample.", "Results require refreshing before investment use.", "Monte Carlo output is a distribution exercise, not a forecast.", "A short sample can understate drawdown and regime risk."],
    sources: [
      ["Yahoo Finance", "https://finance.yahoo.com/"],
      ["Stooq historical prices", "https://stooq.com/q/d/?s=spy.us"],
      ["State Street SPY", "https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-sp-500-etf-trust-spy"],
      ["Vanguard VNQ", "https://investor.vanguard.com/investment-products/etfs/profile/vnq"]
    ],
    images: [
      ["assets/models/portfolio-management-01.png", "Portfolio dashboard"],
      ["assets/models/portfolio-management-02.png", "Risk metrics"],
      ["assets/models/portfolio-management-03.png", "Allocation screen"]
    ]
  },
  {
    id: "sustainable-finance",
    group: "portfolio-risk",
    title: "Sustainable Portfolio and ALM Review",
    eyebrow: "Sustainable finance and investment management",
    company: "Illustrative €1.0bn pension portfolio",
    decision: "Can the portfolio improve risk-adjusted return and funded-ratio resilience while meeting its climate objectives?",
    short: "An allocation review combining capital market assumptions, portfolio risk, scenarios, climate metrics and ALM surplus analysis.",
    featured: false,
    verdict: "Risk improves, but climate metrics get worse",
    verdictTone: "caution",
    conclusion: [
      "The recommended allocation raises expected return from 5.54% to 5.65% and reduces volatility from 7.48% to 7.18%. Modelled 95% VaR falls from 6.77% to 6.16%.",
      "The trade-off is clear: weighted average carbon intensity rises from 94.0 to 103.1, financed emissions increase and implied temperature rises from 1.95°C to 2.20°C. The allocation needs a separate climate constraint or a different asset mix."
    ],
    metrics: [
      ["Expected return", "5.65%", "Recommended portfolio"],
      ["Volatility", "7.18%", "Recommended portfolio"],
      ["VaR 95%", "6.16%", "Recommended portfolio loss"],
      ["WACI", "103.1", "Recommended portfolio"]
    ],
    architecture: ["Euro capital market assumptions", "Correlation and covariance", "Current and recommended portfolios", "Scenario analysis", "Funded-ratio sensitivity", "Climate metrics", "Efficient frontier", "Factor and index comparison"],
    tested: ["Rate-cut scenario", "Stagflation", "Climate stress", "Asset-liability surplus risk"],
    risks: ["Climate figures use proxies and illustrative asset-sleeve assumptions.", "The recommended allocation improves financial risk metrics but worsens the selected climate indicators.", "The case is not a fiduciary recommendation or a replacement for manager-level climate data."],
    sources: [
      ["J.P. Morgan long-term capital market assumptions", "https://am.jpmorgan.com/us/en/asset-management/adv/insights/portfolio-insights/ltcma/"],
      ["NGFS climate scenarios", "https://www.ngfs.net/ngfs-scenarios-portal"],
      ["MSCI SRI methodology", "https://www.msci.com/index/methodology/latest/SRI"],
      ["EU emissions trading system", "https://climate.ec.europa.eu/eu-action/carbon-markets/eu-emissions-trading-system-eu-ets_en"]
    ],
    images: [
      ["assets/models/sustainable-finance-01.png", "Allocation and portfolio-risk comparison"],
      ["assets/models/sustainable-finance-02.png", "Scenario, climate and funded-ratio stress tests"]
    ]
  }
];

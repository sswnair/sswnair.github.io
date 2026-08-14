window.portfolioGroups = [
  {
    id: "corporate-finance",
    title: "Corporate Finance and Financial Analysis",
    description: "Financial statements, integrated forecasts, budgets and capital-allocation decisions."
  },
  {
    id: "equity-research",
    title: "Equity Research, Valuation and Public Markets",
    description: "DCF, trading comps, option pricing and public-market analysis."
  },
  {
    id: "investment-banking",
    title: "Investment Banking and M&A",
    description: "Merger modeling, transaction valuation and deal screening."
  },
  {
    id: "private-markets",
    title: "Private Equity, Venture Capital and Private Markets",
    description: "Listed private equity research, LBO returns, fund cash flows, venture financing and ownership."
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

const addedRealEstateProjects = [
  {
    id: "multifamily-acquisition-the-louisa",
    group: "real-estate",
    title: "The Louisa Multifamily Acquisition and Hold Underwriting",
    eyebrow: "Multifamily acquisition",
    company: "The Louisa, Portland, Oregon",
    decision: "Does the operating recovery support the 2024 acquisition basis and modeled exit?",
    short: "A 242-unit acquisition and hold model linking operations, interest-only debt, exit value and downside returns.",
    featured: true,
    verdict: "Operating recovery does not restore the modeled equity basis",
    verdictTone: "caution",
    conclusion: [
      "Occupancy improved from 93.0% at acquisition to 95.4% in Q1 2026, and annualized Q1 NOI supports 1.42x DSCR.",
      "The base exit produces a 0.82x equity multiple and negative 4.0% XIRR. The model is therefore a downside hold and recovery case, not a successful acquisition recommendation."
    ],
    metrics: [
      ["Total basis", "$86.28m", "2024 acquisition basis"],
      ["Q1 2026 NOI DSCR", "1.42x", "Annualized quarter"],
      ["Equity multiple", "0.82x", "Modeled exit"],
      ["Levered XIRR", "(4.0%)", "Modeled exit"]
    ],
    architecture: ["Acquisition capitalization", "Rent roll and occupancy", "Historical operations", "Operating forecast", "Interest-only debt", "Exit valuation", "Levered cash flow", "Sensitivity and reconciliations"],
    tested: ["Occupancy recovery", "NOI and debt service", "Exit cap rate", "Equity recovery"],
    risks: ["Q1 2026 revenue and expenses are annualized from one quarter.", "Residential and retail income are split using the acquisition rent mix.", "Growth, exit cap rate, selling costs and capital spending are planning assumptions.", "The model combines the 2024 acquisition basis with later operating results."],
    sources: [
      ["SEC final prospectus", "https://www.sec.gov/Archives/edgar/data/2038433/000153949724002197/0001539497-24-002197-index.htm"],
      ["SEC March 2026 asset report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426006674/0001888524-26-006674-index.htm"],
      ["SEC Q1 2026 asset and loan report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426012409/0001888524-26-012409-index.htm"],
      ["Guardian project page", "https://www.gres.com/projects/the-louisa/"]
    ],
    images: [
      ["assets/models/multifamily-acquisition-summary.png", "Investment summary and projected return"],
      ["assets/models/multifamily-acquisition-returns.png", "Valuation and equity return build"],
      ["assets/models/multifamily-acquisition-sensitivity.png", "Exit cap rate and NOI sensitivity"]
    ]
  },
  {
    id: "multifamily-refinance-west-palm-gardens",
    group: "real-estate",
    title: "West Palm Gardens Debt Refinance and Lender Reporting",
    eyebrow: "Real estate debt",
    company: "Five-property West Palm Beach portfolio",
    decision: "Does the $50.0m loan remain within the model's leverage, coverage and debt-yield screens?",
    short: "A lender-facing model for 437 units covering NOI, DSCR, debt yield, cash monitoring and refinance capacity.",
    featured: true,
    verdict: "The loan remains within the modeled credit screens",
    verdictTone: "positive",
    conclusion: [
      "FY2025 NOI supports 1.66x NOI DSCR, 1.62x NCF DSCR and 10.9% NOI debt yield.",
      "The 65% LTV screen is binding and implies $54.73m of capacity, or $4.73m of headroom, using the 2024 appraisal. This is a planning screen, not a lender commitment."
    ],
    metrics: [
      ["Loan balance", "$50.0m", "Interest-only loan"],
      ["NOI DSCR", "1.66x", "FY2025"],
      ["NOI debt yield", "10.9%", "FY2025"],
      ["Appraisal-based LTV", "59.4%", "2024 appraisal"]
    ],
    architecture: ["Collateral overview", "Unit mix", "Historical operations", "NOI underwriting", "Debt sizing", "Debt schedule", "Credit metrics", "Lender package and reconciliations"],
    tested: ["LTV sizing", "NOI and NCF DSCR", "Debt yield", "Refinance headroom"],
    risks: ["LTV and loan capacity use a 2024 appraisal, not a June 2026 valuation.", "Lender thresholds are planning screens, not contractual terms.", "The model does not establish current refinancing pricing or fees.", "No binding loan commitment is implied."],
    sources: [
      ["SEC final prospectus", "https://www.sec.gov/Archives/edgar/data/2038433/000153949724002197/0001539497-24-002197-index.htm"],
      ["SEC FY2025 asset report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426008598/0001888524-26-008598-index.htm"],
      ["SEC June 2026 loan-status report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426012409/0001888524-26-012409-index.htm"]
    ],
    images: [
      ["assets/models/multifamily-refinance-lender-package.png", "Lender package and collateral summary"],
      ["assets/models/multifamily-refinance-credit-metrics.png", "Coverage, leverage and debt yield"],
      ["assets/models/multifamily-refinance-debt-sizing.png", "Debt sizing and modeled headroom"]
    ]
  },
  {
    id: "multifamily-portfolio-nj-asden",
    group: "real-estate",
    title: "NJ Asden Multifamily Portfolio Asset Management and Hold/Sell",
    eyebrow: "Portfolio asset management",
    company: "Six-property New Jersey portfolio",
    decision: "Do modeled hold cash flows and refinance capacity justify retaining the 1,011-unit portfolio?",
    short: "A portfolio model linking property operations, reserves, debt, valuation, refinance capacity and hold/sell economics.",
    featured: true,
    verdict: "The portfolio-level screen favors a sale review",
    verdictTone: "caution",
    conclusion: [
      "Latest T12 NOI is $7.76m and NCF DSCR is 1.33x. Modeled 2029 refinance capacity is $89.03m against a $90.0m loan.",
      "At a 10% discount rate and 6.25% exit cap, present value of hold cash flows is $7.80m below modeled net sale equity. The result supports a portfolio-level sale review, not an asset-level directive."
    ],
    metrics: [
      ["Latest T12 NOI", "$7.76m", "Twelve months to September 2025"],
      ["NCF DSCR", "1.33x", "Latest T12"],
      ["Refinance capacity", "$89.03m", "Modeled for 2029"],
      ["Hold less sell", "($7.80m)", "Portfolio-level screen"]
    ],
    architecture: ["Portfolio overview", "Asset summary", "Operating performance", "NOI forecast", "Capital plan", "Debt tracker", "Valuation and refinance", "Hold/sell screen"],
    tested: ["NOI growth", "Debt coverage", "Refinance capacity", "Hold versus sale value"],
    risks: ["Asset-level NOI and debt are allocated using proxy shares.", "The $143.4m appraisal is from 2025.", "Individual asset screens are analytical only because partial releases are not permitted.", "Waterfall assumptions are illustrative and are not presented as actual sponsor terms."],
    sources: [
      ["SEC refinancing disclosure", "https://www.sec.gov/Archives/edgar/data/2057363/000153949725001207/0001539497-25-001207-index.htm"],
      ["SEC April 2026 servicing report", "https://www.sec.gov/Archives/edgar/data/2057363/000162829726000353/0001628297-26-000353-index.htm"]
    ],
    images: [
      ["assets/models/multifamily-portfolio-dashboard.png", "Portfolio operating, leverage and value dashboard"],
      ["assets/models/multifamily-portfolio-refinance.png", "Refinance capacity and sale proceeds"],
      ["assets/models/multifamily-portfolio-sensitivity.png", "Hold value sensitivity"]
    ]
  },
  {
    id: "multifamily-value-add-west-palm-gardens",
    group: "real-estate",
    title: "West Palm Gardens Value-Add Renovation and Capital Plan",
    eyebrow: "Value-add real estate",
    company: "Five-property West Palm Beach portfolio",
    decision: "Does the remaining renovation plan generate enough NOI uplift to justify the scheduled capital?",
    short: "A phased renovation model covering unit counts, capital spending, NOI uplift, debt sizing and projected returns.",
    featured: true,
    verdict: "Positive modeled yield, subject to a current scope refresh",
    verdictTone: "neutral",
    conclusion: [
      "The illustrative plan schedules $5.19m of remaining capital and $542,000 of annual NOI uplift, producing a 10.4% untrended yield on cost.",
      "The 252-unit remaining balance is dated August 2024. Renovation progress, achievable rents and construction costs must be refreshed before treating the return as decision-ready."
    ],
    metrics: [
      ["Scheduled capital", "$5.19m", "Illustrative remaining plan"],
      ["Annual NOI uplift", "$542k", "Modeled"],
      ["Yield on cost", "10.4%", "Untrended"],
      ["Levered XIRR", "11.5%", "From 2024 refinance basis"]
    ],
    architecture: ["Business plan", "Unit mix", "Renovation schedule", "Capital budget", "NOI forecast", "Debt sizing", "Valuation and returns", "Sensitivity and reconciliations"],
    tested: ["Renovation pace", "Rent uplift", "Capital cost", "Exit valuation"],
    risks: ["The remaining-unit count is from August 2024.", "Rent uplift uses observed in-place differences, not a fresh market-rent study.", "Future cost, pace, occupancy and exit assumptions are planning inputs.", "The model does not separately include unit downtime, turnover costs, leasing costs or taxes."],
    sources: [
      ["SEC final prospectus", "https://www.sec.gov/Archives/edgar/data/2038433/000153949724002197/0001539497-24-002197-index.htm"],
      ["SEC FY2025 asset report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426008598/0001888524-26-008598-index.htm"],
      ["SEC June 2026 loan-status report", "https://www.sec.gov/Archives/edgar/data/2038433/000188852426012409/0001888524-26-012409-index.htm"]
    ],
    images: [
      ["assets/models/multifamily-value-add-summary.png", "Remaining capital, NOI uplift and projected return"],
      ["assets/models/multifamily-value-add-returns.png", "Renovation return schedule"],
      ["assets/models/multifamily-value-add-sensitivity.png", "Renovation yield sensitivity"]
    ]
  }
];

const projectContext = {
  "financial-statement-analysis": ["Academic group project", "Historical analysis through 2025"],
  "three-statement": ["Self-directed public-data case study", "Forecast through FY2030E"],
  "budgeting-fpa": ["Illustrative case using public Walmart anchors", "Annual plan with first-half variance review"],
  "siemens-corporate-finance": ["Academic group project", "Prepared July 2026"],
  "dcf-valuation": ["Self-directed public-data case study", "Market-price input: June 26, 2026"],
  "comparable-companies": ["Self-directed public-data case study", "Target market data: July 27, 2026; peer observation dates are not recorded"],
  "precedent-transactions": ["Illustrative target using public transaction data", "Transaction set through 2025"],
  "option-pricing": ["Self-directed public-data case study", "Model date: July 28, 2026; spot price: July 27 close"],
  "ma-merger": ["Retrospective self-directed case study", "Completed transaction with forecast years FY2026E to FY2028E"],
  "leveraged-buyout": ["Self-directed public-data case study", "Historical case using 2025E to 2029E assumptions"],
  "private-equity-fund": ["Illustrative case", "Modeled fund life and cash-flow schedule"],
  "startup-venture-capital": ["Illustrative case using public SaaS benchmarks", "Forecast through 2031"],
  "listed-private-equity-dissertation": ["MSc Finance dissertation", "Submitted July 2026"],
  "european-defence-ma": ["Academic transaction case study", "Case assumptions based on FY2025 reporting"],
  "credit-analysis": ["Self-directed public-data case study", "Forecast from 2025A through 2030E"],
  "rolls-royce-credit-treasury": ["Self-directed public-data case study", "FY2025 base with 2026 scenarios"],
  "portfolio-management": ["Self-directed public-data case study", "Monthly data from January 2021 through June 2026"],
  "sustainable-finance": ["Illustrative case using public capital-market assumptions", "Long-term allocation and ALM scenario case"],
  "multifamily-acquisition-the-louisa": ["Self-directed public-source case study", "Prepared through Q1 2026"],
  "multifamily-refinance-west-palm-gardens": ["Self-directed public-source case study", "Prepared through June 2026"],
  "multifamily-portfolio-nj-asden": ["Self-directed public-source case study", "Prepared through April 2026"],
  "multifamily-value-add-west-palm-gardens": ["Self-directed public-source case study", "Prepared through June 2026; renovation count dated August 2024"]
};

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
      "NEXT recorded a 12.03% net margin and 41.96% return on equity in 2025, compared with 4.28% and 14.53% for JD Sports. NEXT also had slightly higher 2025 asset turnover at 1.26x versus 1.15x.",
      "NEXT also reduced debt to assets from 48.10% in 2023 to 33.22% in 2025. This is a historical academic group project. The portfolio presents selected analysis and does not claim sole authorship."
    ],
    metrics: [
      ["NEXT net margin", "12.03%", "2025"],
      ["NEXT return on equity", "41.96%", "2025"],
      ["JD Sports net margin", "4.28%", "2025"],
      ["NEXT debt to equity", "0.92x", "2025"]
    ],
    architecture: ["Income statement review", "Balance-sheet review", "Cash-flow review", "DuPont analysis", "Liquidity ratios", "Profitability ratios", "Solvency ratios", "Source reconciliation notes"],
    tested: ["Margin conversion", "Asset turnover and leverage", "Liquidity trend", "Debt and interest coverage"],
    risks: ["The original work was completed as an academic group project.", "Company reporting periods and adjusted metrics are not fully aligned.", "Licensed data extracts remain private and are not redistributed.", "The model contains a conditional QA status, so conclusions are presented as historical analysis rather than current advice."],
    sources: [
      ["NEXT reports and presentations", "https://www.nextplc.co.uk/investors/reports-and-presentations/2025-26"],
      ["JD Sports reports and presentations", "https://www.jdplc.com/investors/reports-presentations/"]
    ],
    images: [
      ["assets/models/verified-fsa-2025-comparison.svg", "Verified 2025 ratio comparison for NEXT and JD Sports"],
      ["assets/models/verified-fsa-solvency.svg", "Verified NEXT solvency trend"],
      ["assets/models/verified-fsa-liquidity.svg", "Verified 2025 liquidity comparison"]
    ]
  },
  {
    id: "three-statement",
    group: "corporate-finance",
    title: "Microsoft Three-Statement Model",
    eyebrow: "Integrated financial modeling",
    company: "Microsoft",
    decision: "How do segment growth, margins, working capital and capital expenditure flow through the three statements?",
    short: "An integrated Microsoft forecast linking segment drivers, statements, debt, cash and free cash flow.",
    featured: true,
    verdict: "Cash generation rises, with capital expenditure as the key watch item",
    verdictTone: "neutral",
    conclusion: [
      "The base case grows revenue from $281.7bn in FY2025A to $428.4bn in FY2030E. EBITDA margin reaches 57.8%, while free cash flow reaches $158.0bn by FY2030E.",
      "The main forecast question is whether cloud growth can support continued infrastructure spending. A review should focus on Intelligent Cloud growth, capital expenditure intensity and cash conversion."
    ],
    metrics: [
      ["FY2030E revenue", "$428.4bn", "From $281.7bn in FY2025A"],
      ["FY2030E EBITDA", "$247.6bn", "57.8% margin"],
      ["FY2030E free cash flow", "$158.0bn", "Model output"],
      ["Forecast period", "5 years", "FY2026E to FY2030E"]
    ],
    architecture: ["Segment revenue drivers", "Cost and margin drivers", "Income statement", "Working-capital schedule", "Capital expenditure and depreciation", "Debt schedule", "Balance sheet", "Cash-flow statement and checks"],
    tested: ["Cloud growth", "Gross margin", "Capital expenditure intensity", "Statement and cash-flow tie-outs"],
    risks: ["Long-range demand for cloud services and data-center capacity is uncertain.", "Capital expenditure may remain elevated for longer than modeled.", "Forecast assumptions are not company guidance.", "The public-data model simplifies some below-the-line and capital-allocation items."],
    sources: [
      ["Microsoft FY2025 annual report", "https://www.microsoft.com/investor/reports/ar25/"],
      ["Microsoft FY2024 annual report", "https://www.microsoft.com/investor/reports/ar24/"]
    ],
    images: [
      ["assets/models/verified-three-statement-dashboard.png", "Three-statement dashboard"],
      ["assets/models/verified-three-statement-forecast.png", "Forecast output"],
      ["assets/models/verified-three-statement-controls.png", "Model checks"]
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
      "The illustrative annual budget produces $734.7bn of revenue, $35.4bn of EBITDA and $3.7bn of free cash flow. Modeled ending cash is $13.6bn.",
      "The workbook compares the first six months with the plan. Revenue delivery, working capital and monthly capital expenditure remain the main controls; none of these estimates is Walmart guidance."
    ],
    metrics: [
      ["Budget revenue", "$734.7bn", "Illustrative annual plan"],
      ["Budget EBITDA", "$35.4bn", "Illustrative annual plan"],
      ["Free cash flow", "$3.7bn", "Illustrative annual plan"],
      ["Ending cash", "$13.6bn", "Modeled close"]
    ],
    architecture: ["Annual operating budget", "Monthly revenue and margin drivers", "Budget versus actual", "Variance analysis", "Working-capital assumptions", "Capital expenditure", "Cash-flow forecast", "Checks and source notes"],
    tested: ["Monthly revenue variance", "EBITDA variance", "Working-capital swings", "Ending liquidity"],
    risks: ["The budget is an illustrative corporate-planning case.", "Actual results cover only the first part of the plan year.", "Working-capital assumptions can move monthly cash materially.", "The model is not company guidance."],
    sources: [
      ["Walmart FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/104169/000010416925000021/wmt-20250131.htm"],
      ["Walmart SEC filings", "https://stock.walmart.com/sec-filings/all-sec-filings"],
      ["Walmart annual reports", "https://stock.walmart.com/financial-information/annual-reports"]
    ],
    images: [
      ["assets/models/verified-budgeting-dashboard.png", "Verified budget and ending-cash dashboard"],
      ["assets/models/verified-budgeting-variance.png", "Budget versus actual results"],
      ["assets/models/verified-budgeting-cash-flow.png", "Rolling cash-flow forecast"]
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
      "The base case estimates FY2026E revenue of €84.4bn and free cash flow of €10.8bn. Distribution and strategic investment capacity are scenario outputs, not company guidance.",
      "The severe downside reduces free cash flow to €6.0bn. Payout and acquisition decisions should therefore be tied to scenario cash flow, not the prior year's record result."
    ],
    metrics: [
      ["FY2026E revenue", "€84.4bn", "Base case"],
      ["FY2026E free cash flow", "€10.8bn", "Base case"],
      ["Revenue growth", "6.0%", "Base-case assumption"],
      ["Guidance range", "6% to 8%", "Company outlook used"]
    ],
    architecture: ["FY2025 reported base", "FY2026 outlook", "Operating scenarios", "Free-cash-flow conversion", "Distribution policy", "Retained cash", "Strategic investment capacity", "Sensitivity and checks"],
    tested: ["Revenue growth", "Industrial Business margin", "Cash conversion", "Distribution rate"],
    risks: ["The original workbook was prepared as academic group work.", "The portfolio does not present the project as sole-authored work.", "Acquisition integration and working-capital pressure can reduce cash conversion.", "Scenario outputs are analyst estimates, not company guidance."],
    sources: [
      ["Siemens FY2025 results", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q4-fy-2025"],
      ["Siemens Q2 FY2026 results", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q2-fy-2026"]
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
      ["Model market price", "$283.78", "June 26, 2026 input"],
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
      ["Apple stock price history", "https://investor.apple.com/stock-price/"]
    ],
    images: [
      ["assets/models/verified-dcf-dashboard.png", "Verified DCF summary and equity-value bridge"],
      ["assets/models/verified-dcf-sensitivity.png", "DCF sensitivity tables"],
      ["assets/models/verified-dcf-free-cash-flow.png", "Forecast free-cash-flow build"]
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
      "The peer median is 16.2x EV / EBITDA, which implies $360.24 per share. The other methods range from $263.79 on EV / Revenue to $470.61 on EV / EBIT.",
      "EV / EBITDA is the selected primary reference for this model. Revenue, P / E and P / B remain cross-checks because the companies have different margins, capital structures and accounting profiles."
    ],
    metrics: [
      ["Peer EV / EBITDA", "16.2x", "Median"],
      ["Implied share price", "$360.24", "EV / EBITDA method"],
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
      ["assets/models/verified-comps-dashboard.png", "Comparable-company dashboard"],
      ["assets/models/verified-comps-valuation.png", "Valuation summary"],
      ["assets/models/verified-comps-multiples.png", "Trading multiples"]
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
      "Four profitable completed deals remain in the selected transaction-multiple set. Their median EV / EBITDA is 25.90x, which implies $43.54 per share for the illustrative target.",
      "Nine completed deals inform the separate control-premium analysis, where the median is 33.0%. Terminated deals, loss-making observations and outliers are excluded from the selected multiple statistics."
    ],
    metrics: [
      ["Selected deals", "4", "Profitable completed deals"],
      ["Median premium", "33.0%", "Nine completed deals"],
      ["Selected EV / EBITDA", "25.90x", "Primary method"],
      ["Implied share price", "$43.54", "EV / EBITDA method"]
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
      ["assets/models/verified-precedent-valuation.png", "Precedent valuation summary"],
      ["assets/models/verified-precedent-premium.png", "Control-premium analysis"],
      ["assets/models/verified-precedent-sensitivity.png", "Valuation sensitivities"]
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
      "At a $336.91 spot price, $335 strike and 27.68% volatility, the model values the call at $26.47 and the put at $19.82. Put-call parity reconciles within rounding.",
      "Call delta is 0.58. The pricing volatility is also the closest solver-table value for the reference call premium over the selected term to December 18, 2026."
    ],
    metrics: [
      ["Call value", "$26.47", "Black-Scholes"],
      ["Put value", "$19.82", "Black-Scholes"],
      ["Call delta", "0.58", "Base case"],
      ["Implied volatility", "27.68%", "Solver table output"]
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
      ["assets/models/verified-option-dashboard.png", "Option valuation dashboard"],
      ["assets/models/verified-option-black-scholes.png", "Black-Scholes calculation and parity check"],
      ["assets/models/verified-option-volatility.png", "Implied-volatility calibration"]
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
    verdict: "Modeled dilution narrows, but persists through FY2028",
    verdictTone: "caution",
    conclusion: [
      "The retrospective model produces 7.2% dilution in FY2026E, 3.6% in FY2027E and 0.9% in FY2028E as assumed synergies phase in.",
      "The main deal variables are synergy timing, financing cost and intangible-asset amortization. Under these assumptions, the earnings gap narrows but does not turn accretive within the forecast period."
    ],
    metrics: [
      ["Purchase equity value", "$27.09bn", "Modeled transaction"],
      ["FY2026 dilution", "7.2%", "First full forecast year"],
      ["FY2028 dilution", "0.9%", "Gap narrows"],
      ["New debt", "$12.97bn", "Modeled financing"]
    ],
    architecture: ["Standalone financials", "Purchase price", "Sources and uses", "Financing mix", "Goodwill and intangibles", "Synergy build", "Pro forma income statement", "Accretion and sensitivity"],
    tested: ["Synergy realization", "Debt financing", "Interest rate", "Intangible amortization"],
    risks: ["Synergy timing and financing mix are analyst assumptions.", "Purchase accounting is simplified.", "Integration costs and dis-synergies are not fully captured."],
    sources: [
      ["Cisco acquisition completion", "https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Splunk/default.aspx"],
      ["Splunk FY2024 results", "https://www.splunk.com/en_us/newsroom/press-releases/2024/splunk-announces-fiscal-fourth-quarter-and-full-year-2024-financial-results.html"],
      ["Cisco FY2025 results", "https://investor.cisco.com/news/news-details/2025/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2025-EARNINGS/default.aspx"]
    ],
    images: [
      ["assets/models/verified-ma-dashboard.png", "Transaction dashboard"],
      ["assets/models/verified-ma-accretion.png", "Accretion and dilution"],
      ["assets/models/verified-ma-sensitivity.png", "Deal sensitivities"]
    ]
  },
  {
    id: "listed-private-equity-dissertation",
    group: "private-markets",
    title: "Private Market Liquidity in Public View",
    eyebrow: "MSc Finance dissertation",
    company: "Trinity College Dublin",
    decision: "Are UK interest-rate changes associated with wider listed private equity discounts, and do public prices lead later NAV marks?",
    short: "Interest-rate shocks and NAV discounts in listed private equity vehicles, tested across a hand-built 25-fund panel.",
    outputsTitle: "Selected research outputs",
    outputsIntro: "The dissertation, regression workbook and licensed data remain private. These derived visuals show the sample and results cited in this case.",
    accessTitle: "Dissertation access",
    accessNote: "The dissertation, regression workbook, analysis script and source dataset are maintained privately. A live walkthrough can be provided during an interview.",
    featured: true,
    verdict: "Discounts carry information about later NAV marks",
    verdictTone: "neutral",
    conclusion: [
      "In a fund fixed-effects panel, a one percentage point rise in the 10-year gilt yield is associated with a price-to-NAV discount 6.1 percentage points wider. The estimate is significant under Driscoll-Kraay inference (p = 0.033) and marginal under fund-and-quarter clustering (p = 0.076), so it is treated as associational rather than causal.",
      "The central result is that current discounts forecast next-quarter NAV returns. The deepest-discount quintile averages −1.0%, versus +4.2% for the narrowest, a 5.2 percentage point endpoint spread. The predicted market-frictions amplification is not supported."
    ],
    metrics: [
      ["Vehicles", "25", "London-listed private equity vehicles"],
      ["Fund-quarters", "970", "2015Q2 to 2025Q4"],
      ["NAV-return spread", "5.2 pp", "Deepest to narrowest discount quintile"],
      ["Rate association", "−6.1 pp", "Per 1 pp rise in the 10-year gilt yield"]
    ],
    architecture: ["Daily market-data cleaning", "Currency conversion and NAV normalization", "Fund-quarter panel construction", "Fund fixed effects", "Robust inference ladder", "Rate-channel decomposition", "Market-frictions tests", "Price-leads-NAV predictive test"],
    tested: ["10-year gilt and discount association", "Tightening regime and short-rate proxies", "Policy-path and term-premium channels", "Size, liquidity, stress and NAV age", "Current discount and next-quarter NAV return"],
    risks: ["The design estimates associations rather than a causal effect.", "The panel is unbalanced and contains 25 London-listed vehicles, so inference is sensitive to the treatment of common quarterly shocks.", "NAV dates may differ from publication dates, and NAV age captures only mechanical staleness.", "Liquidity and dividend yield may be endogenous; the credit-spread control is a euro high-yield proxy; and the OIS series starts later than the main panel.", "Listed private equity does not map directly onto unlisted private equity.", "Morningstar and Refinitiv extracts are licensed and are not redistributed."],
    sources: [
      ["Trinity MSc Finance", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-finance/"],
      ["Bank of England database", "https://www.bankofengland.co.uk/boeapps/database/"],
      ["UK DMO gilt market data", "https://www.dmo.gov.uk/data/gilt-market/"],
      ["FTSE UK Index Series", "https://www.lseg.com/en/ftse-russell/indices/uk"],
      ["FTSE Implied Volatility Index Series", "https://www.lseg.com/en/ftse-russell/indices/implied-vol"],
      ["ICE fixed-income indices", "https://www.ice.com/fixed-income-data-services/index-solutions/fixed-income-indices"],
      ["ECB reference exchange rates", "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"],
      ["Morningstar UK investment trusts", "https://www.morningstar.co.uk/uk/investmenttrusts/default.aspx"]
    ],
    images: [
      ["assets/models/dissertation-panel-overview.png", "Dissertation sample and quarterly panel overview"],
      ["assets/models/dissertation-inference.png", "Baseline association under alternative inference methods"],
      ["assets/models/dissertation-price-discovery.png", "Discount quintiles and next-quarter NAV returns"]
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
    verdict: "Do not pursue at the modeled entry price",
    verdictTone: "caution",
    conclusion: [
      "With 5.5x initial debt / EBITDA and an 8.0x exit multiple, the base case produces a 12.4% sponsor IRR and 1.79x MOIC. The forecast is a historical case built from 2025E inputs.",
      "Debt paydown is not enough to reach a normal buyout return. The case needs a lower entry price, stronger EBITDA growth or a specific operating plan."
    ],
    metrics: [
      ["Sponsor IRR", "12.4%", "Modeled hold"],
      ["Sponsor MOIC", "1.79x", "Base case"],
      ["Initial leverage", "5.5x", "Debt / EBITDA"],
      ["Exit multiple", "8.0x", "Base case"]
    ],
    architecture: ["Entry valuation", "Sources and uses", "Operating forecast", "Debt tranches", "Amortization and cash sweep", "Covenant checks", "Exit valuation", "IRR, MOIC and sensitivities"],
    tested: ["Entry and exit multiple", "Exit multiple and EBITDA growth", "Leverage", "Revenue growth and EBITDA margin"],
    risks: ["Store, inventory and lease detail are simplified.", "Debt terms do not reproduce a negotiated credit agreement.", "Returns remain exposed to multiple compression.", "Public data cannot replace a quality-of-earnings review."],
    sources: [
      ["Academy FY2024 results", "https://investors.academy.com/news-releases/news-release-details/academy-sports-outdoors-reports-fourth-quarter-and-fiscal-2024"],
      ["Academy investor relations", "https://investors.academy.com/"]
    ],
    images: [
      ["assets/models/verified-lbo-dashboard.png", "LBO summary, sponsor returns and debt paydown"],
      ["assets/models/verified-lbo-returns.png", "Sponsor returns and debt paydown"],
      ["assets/models/verified-lbo-sensitivity.png", "Sponsor IRR sensitivity tables"]
    ]
  },
  {
    id: "private-equity-fund",
    group: "private-markets",
    title: "Private Equity Fund Cash Flow and Waterfall",
    eyebrow: "Private equity fund modeling",
    company: "Illustrative $750m fund",
    decision: "Do the call, distribution, fee and carry assumptions produce an acceptable outcome for limited partners?",
    short: "A fund model covering commitments, investments, exits, management fees, carried interest and LP cash flows.",
    featured: false,
    verdict: "Base-case LP returns are modest",
    verdictTone: "caution",
    conclusion: [
      "The illustrative fund produces a 1.96x gross MOIC and 13.3% gross IRR. After modeled fees and carry, net IRR is 9.6%.",
      "The workbook's downside and upside scenario outputs are not populated, so the portfolio does not publish scenario returns. Exit multiple and timing remain the central variables for a completed sensitivity analysis."
    ],
    metrics: [
      ["Fund size", "$750m", "Committed capital"],
      ["Net IRR", "9.6%", "Base case"],
      ["Gross MOIC", "1.96x", "Base case"],
      ["Gross IRR", "13.3%", "Base case"]
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
      ["assets/models/verified-pe-fund-dashboard.png", "Fund dashboard and LP cash flows"],
      ["assets/models/verified-pe-fund-metrics.png", "Net IRR and TVPI sensitivities"],
      ["assets/models/verified-pe-fund-sensitivity.png", "LP cash flow sensitivities"]
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
      "The model reaches $1.70bn of ARR by 2031. It requires $38.6m of additional financing in 2026, followed by assumed later rounds to keep cash positive.",
      "Founder ownership declines to 21.7% at exit. Investor returns are exceptionally high under the assumed entry prices and exit value, so this case is presented as funding and dilution mechanics, not as an investment recommendation."
    ],
    metrics: [
      ["Ending ARR", "$1.70bn", "2031"],
      ["2026 financing need", "$38.6m", "Before assumed round"],
      ["Founder ownership", "21.7%", "At exit"],
      ["Gross margin", "82.0%", "2031 assumption"]
    ],
    architecture: ["Customer and ARR build", "Gross margin", "Operating burn", "Funding rounds", "Pre-money and post-money value", "Cap table", "Cash runway", "Investor MOIC and IRR"],
    tested: ["Revenue growth", "Burn and runway", "Funding size", "Exit valuation"],
    risks: ["The company is illustrative and uses public SaaS benchmarks.", "Funding rounds are analyst assumptions.", "The cash runway remains positive only because the modeled rounds occur as scheduled.", "Exit-based investor returns are highly sensitive to timing and valuation."],
    sources: [
      ["Datadog S-1", "https://www.sec.gov/Archives/edgar/data/1561550/000119312519227783/d745413ds1.htm"],
      ["Datadog FY2019 results", "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-full-year-2019-results/"],
      ["Bessemer Cloud 100 benchmarks", "https://www.bvp.com/atlas/the-cloud-100-benchmarks-report"]
    ],
    images: [
      ["assets/models/verified-startup-dashboard.png", "Growth, burn, ownership and financing dashboard"],
      ["assets/models/verified-startup-runway.png", "Cash runway and funding plan"],
      ["assets/models/verified-startup-cap-table.png", "Cap-table dilution by round"]
    ]
  },
  {
    id: "european-defence-ma",
    group: "investment-banking",
    title: "European Defense M&A Screening",
    eyebrow: "M&A screening",
    company: "Thales, Rheinmetall and RENK",
    decision: "Do the modeled Rheinmetall or RENK acquisition cases create value for Thales?",
    short: "A two-target screen using DCF, public comps, precedents, synergies, financing, leverage and accretion.",
    featured: false,
    verdict: "Reject Rheinmetall terms and reprice RENK",
    verdictTone: "caution",
    conclusion: [
      "The Rheinmetall case requires an 88.3% premium to blended DCF, produces 81.9% year-one dilution and raises pro forma net debt / EBITDA to 8.0x. The model says not to pursue the case terms.",
      "The RENK case is less leveraged at 1.6x net debt / EBITDA, but still produces 7.7% year-one dilution and ROIC below WACC. The terms need to be repriced or restructured."
    ],
    metrics: [
      ["Rheinmetall premium", "88.3%", "To blended DCF"],
      ["Rheinmetall leverage", "8.0x", "Pro forma net debt / EBITDA"],
      ["RENK dilution", "7.7%", "Year one"],
      ["RENK leverage", "1.6x", "Pro forma net debt / EBITDA"]
    ],
    architecture: ["Company forecasts", "DCF", "Public comparables", "Precedent transactions", "Offer premium", "Synergy valuation", "Sources and uses", "Accretion, leverage and decision screen"],
    tested: ["Offer price", "Synergy realization", "Financing mix", "ROIC and accretion"],
    risks: ["Offer prices, betas and synergies are case assumptions.", "Company guidance and market inputs require updating.", "Regulatory and national-security review is outside the model."],
    sources: [
      ["Rheinmetall FY2025 results", "https://www.rheinmetall.com/en/media/news-watch/news/2026/03/2026-03-11-rheinmetall-presents-annual-report-for-2025"],
      ["Thales FY2025 results", "https://www.thalesgroup.com/en/news-centre/press-releases/thales-reports-its-2025-full-year-results"],
      ["RENK FY2025 results", "https://ir.renk.com/news-releases/news-release-details/fiscal-year-2025-renk-group-ag-achieves-annual-targets-new"],
      ["BAE Systems financial information", "https://www.baesystems.com/en/investors/financial-information"]
    ],
    images: [
      ["assets/models/european-defence-ma-summary.png", "Rheinmetall and RENK transaction comparison"],
      ["assets/models/european-defence-ma-03.png", "Defense public-company inputs"]
    ]
  },
  {
    id: "credit-analysis",
    group: "credit-treasury",
    title: "Verizon Credit Analysis",
    eyebrow: "Corporate credit",
    company: "Verizon Communications",
    decision: "Does recurring cash generation provide enough capacity to reduce leverage and preserve coverage?",
    short: "A public-data credit case covering cash flow, leverage, coverage, covenants, debt capacity and downside.",
    featured: true,
    verdict: "Base-case credit remains defensible",
    verdictTone: "positive",
    conclusion: [
      "Net leverage falls from 2.91x in 2025 to 2.62x in 2026E and 1.70x by 2030E. The model produces 7.63x interest coverage and 2.97x DSCR for 2026E.",
      "Recurring wireless cash flow supports the case. The main constraints are high absolute debt, capital intensity and shareholder distributions competing with debt reduction."
    ],
    metrics: [
      ["2026E net leverage", "2.62x", "Down from 2.91x"],
      ["2026E coverage", "7.63x", "EBITDA / cash interest"],
      ["2026E DSCR", "2.97x", "Base case"],
      ["2030E net leverage", "1.70x", "Model path"]
    ],
    architecture: ["Borrower overview", "Historical financials", "Five-year forecast", "Debt roll-forward", "Leverage and coverage", "Covenant headroom", "Debt capacity", "Downside and credit view"],
    tested: ["Debt reduction", "Interest coverage", "Covenant headroom", "Free cash flow after capital expenditure"],
    risks: ["Forecasts and covenant thresholds are analyst assumptions.", "The model does not reproduce every legal definition in the debt documents.", "Capital intensity can reduce discretionary cash flow.", "The model credit view is not an agency rating."],
    sources: [
      ["Verizon FY2025 earnings release", "https://www.verizon.com/about/news/verizon-delivers-2025-financial-guidance-highest-quarterly-net-adds"],
      ["Verizon 2025 Form 10-K", "https://www.verizon.com/about/sites/default/files/2025-Annual-Report-on-Form-10k.pdf"],
      ["SEC filing", "https://www.sec.gov/Archives/edgar/data/732712/000073271226000007/vz-20251231.htm"]
    ],
    images: [
      ["assets/models/verified-credit-dashboard.png", "Credit dashboard"],
      ["assets/models/verified-credit-risk.png", "Credit risk summary"],
      ["assets/models/verified-credit-sensitivity.png", "Credit sensitivities"]
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
      "FY2025 free cash flow is £3.27bn and net cash is £1.90bn. Pro forma gross liquidity is £8.56bn, while cash-floor-adjusted sources / uses is 1.39x, below the model's 1.50x guardrail.",
      "The base 2026 case keeps adjusted debt / EBITDA at 0.83x. In the downside, distributions reach 220% of free cash flow. The case recommendation is to cap distributions at 50% of prior-year free cash flow and protect liquidity for the 2027 to 2028 maturities."
    ],
    metrics: [
      ["FY2025 free cash flow", "£3.27bn", "Reported measure"],
      ["FY2025 net cash", "£1.90bn", "Year end"],
      ["Gross liquidity", "£8.56bn", "Pro forma"],
      ["Cash-floor coverage", "1.39x", "Below 1.50x guardrail"]
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
      "The portfolio records 12.8% annualized return, 7.3% volatility, a 1.21 Sharpe ratio and 0.50 beta to SPY. Maximum drawdown in the sample is 4.4%.",
      "The information ratio is negative 1.42. The allocation reduced market exposure but did not earn enough excess return relative to its tracking error."
    ],
    metrics: [
      ["Annualized return", "12.8%", "Historical sample"],
      ["Annualized volatility", "7.3%", "Monthly returns"],
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
      ["assets/models/verified-portfolio-dashboard.png", "Portfolio dashboard"],
      ["assets/models/verified-portfolio-risk.png", "Risk metrics"],
      ["assets/models/verified-portfolio-contribution.png", "Allocation and contribution screen"]
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
    verdict: "Financial risk improves modestly in the modeled allocation",
    verdictTone: "neutral",
    conclusion: [
      "The modeled allocation raises expected return from 5.54% to 5.65% and reduces volatility from 7.48% to 7.18%. Modeled 95% VaR falls from 6.77% to 6.16%.",
      "Climate sleeve inputs are directional proxies with incomplete coverage, so they are not used as a headline conclusion. A real mandate would require security-level climate data and an explicit constraint."
    ],
    metrics: [
      ["Expected return", "5.65%", "Modeled allocation"],
      ["Volatility", "7.18%", "Modeled allocation"],
      ["VaR 95%", "6.16%", "Modeled allocation loss"],
      ["Surplus volatility", "7.86%", "Modeled allocation"]
    ],
    architecture: ["Euro capital market assumptions", "Correlation and covariance", "Current and recommended portfolios", "Scenario analysis", "Funded-ratio sensitivity", "Climate metrics", "Efficient frontier", "Factor and index comparison"],
    tested: ["Rate-cut scenario", "Stagflation", "Climate stress", "Asset-liability surplus risk"],
    risks: ["Climate figures use proxies and illustrative asset-sleeve assumptions.", "The workbook does not provide complete security-level climate coverage.", "The case is not a fiduciary recommendation or a replacement for manager-level climate data."],
    sources: [
      ["J.P. Morgan long-term capital market assumptions", "https://am.jpmorgan.com/us/en/asset-management/adv/insights/portfolio-insights/ltcma/"],
      ["NGFS climate scenarios", "https://www.ngfs.net/ngfs-scenarios-portal"],
      ["MSCI SRI methodology", "https://www.msci.com/index/methodology/latest/SRI"],
      ["EU emissions trading system", "https://climate.ec.europa.eu/eu-action/carbon-markets/eu-emissions-trading-system-eu-ets_en"]
    ],
    images: [
      ["assets/models/verified-sustainable-portfolios.png", "Allocation and portfolio-risk comparison"],
      ["assets/models/verified-sustainable-scenarios.png", "Scenario analysis"],
      ["assets/models/verified-sustainable-alm.png", "Asset-liability surplus analysis"]
    ]
  }
];

window.portfolioProjects.push(...addedRealEstateProjects);

window.portfolioProjects.forEach((project) => {
  const [basis, asOf] = projectContext[project.id] || ["Portfolio case study", "Model date disclosed in the workbook"];
  project.basis = basis;
  project.asOf = asOf;
});

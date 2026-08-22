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
    description: "Merger modelling, transaction valuation and deal screening."
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
    decision: "Does the operating recovery support the 2024 acquisition basis and modelled exit?",
    short: "A 242-unit acquisition and hold model linking operations, interest-only debt, exit value and downside returns.",
    featured: true,
    verdict: "Operating recovery does not restore the modelled equity basis",
    verdictTone: "caution",
    conclusion: [
      "Occupancy improved from 93.0% at acquisition to 95.4% in Q1 2026, and annualised Q1 NOI supports 1.42x DSCR.",
      "The base exit produces a 0.82x equity multiple and negative 4.0% XIRR. The model is therefore a downside hold and recovery case, not a successful acquisition recommendation."
    ],
    metrics: [
      ["Total basis", "$86.28m", "2024 acquisition basis"],
      ["Q1 2026 NOI DSCR", "1.42x", "Annualised quarter"],
      ["Equity multiple", "0.82x", "Modelled exit"],
      ["Levered XIRR", "(4.0%)", "Modelled exit"]
    ],
    architecture: ["Acquisition capitalization", "Rent roll and occupancy", "Historical operations", "Operating forecast", "Interest-only debt", "Exit valuation", "Levered cash flow", "Sensitivity and reconciliations"],
    tested: ["Occupancy recovery", "NOI and debt service", "Exit cap rate", "Equity recovery"],
    risks: ["Q1 2026 revenue and expenses are annualised from one quarter.", "Residential and retail income are split using the acquisition rent mix.", "Growth, exit cap rate, selling costs and capital spending are planning assumptions.", "The model combines the 2024 acquisition basis with later operating results."],
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
    verdict: "The loan remains within the modelled credit screens",
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
      ["assets/models/multifamily-refinance-debt-sizing.png", "Debt sizing and modelled headroom"]
    ]
  },
  {
    id: "multifamily-portfolio-nj-asden",
    group: "real-estate",
    title: "NJ Asden Multifamily Portfolio Asset Management and Hold/Sell",
    eyebrow: "Portfolio asset management",
    company: "Six-property New Jersey portfolio",
    decision: "Do modelled hold cash flows and refinance capacity justify retaining the 1,011-unit portfolio?",
    short: "A portfolio model linking property operations, reserves, debt, valuation, refinance capacity and hold/sell economics.",
    featured: false,
    verdict: "The portfolio-level screen favours a sale review",
    verdictTone: "caution",
    conclusion: [
      "Latest T12 NOI is $7.76m and NCF DSCR is 1.33x. Modelled 2029 refinance capacity is $89.03m against a $90.0m loan.",
      "At a 10% discount rate and 6.25% exit cap, present value of hold cash flows is $7.80m below modelled net sale equity. The result supports a portfolio-level sale review, not an asset-level directive."
    ],
    metrics: [
      ["Latest T12 NOI", "$7.76m", "Twelve months to September 2025"],
      ["NCF DSCR", "1.33x", "Latest T12"],
      ["Refinance capacity", "$89.03m", "Modelled for 2029"],
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
      ["assets/models/multifamily-portfolio-hold-sell.png", "Derived hold-versus-sell comparison supporting the published conclusion"],
      ["assets/models/multifamily-portfolio-dashboard.png", "Portfolio operating, leverage and value dashboard"],
      ["assets/models/multifamily-portfolio-refinance.png", "Refinance capacity and sale proceeds"]
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
    verdict: "Positive modelled yield, subject to a current scope refresh",
    verdictTone: "neutral",
    conclusion: [
      "The illustrative plan schedules $5.19m of remaining capital and $542,000 of annual NOI uplift, producing a 10.4% untrended yield on cost.",
      "The 252-unit remaining balance is dated August 2024. Renovation progress, achievable rents and construction costs must be refreshed before treating the return as decision-ready."
    ],
    metrics: [
      ["Scheduled capital", "$5.19m", "Illustrative remaining plan"],
      ["Annual NOI uplift", "$542k", "Modelled"],
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
  "three-statement": ["Self-directed public-data case study", "Analysis frozen at FY2025 source data; FY2026 to FY2030 remain forecast"],
  "budgeting-fpa": ["Illustrative case using public Walmart anchors", "FY2027 scenario budget; no actual results loaded"],
  "siemens-corporate-finance": ["Academic group project", "Analysis frozen as of 20 July 2026; Q3 results released 6 August are excluded"],
  "dcf-valuation": ["Self-directed public-data case study", "Valuation snapshot: 27 July 2026"],
  "comparable-companies": ["Self-directed public-data case study", "Target market data: 27 July 2026; peer observation dates are not recorded"],
  "precedent-transactions": ["Illustrative target using public transaction data", "Transaction set through 2025"],
  "option-pricing": ["Self-directed public-data case study", "Model snapshot: 28 July 2026; time of day not archived"],
  "ma-merger": ["Retrospective self-directed case study", "Analysis frozen at FY2025 source data; FY2026 to FY2028 remain forecast"],
  "leveraged-buyout": ["Hypothetical public-data underwriting", "Illustrative case using 2025E to 2029E assumptions"],
  "private-equity-fund": ["Illustrative case", "Modelled fund life and cash-flow schedule"],
  "startup-venture-capital": ["Illustrative case using public SaaS benchmarks", "Forecast through 2031"],
  "listed-private-equity-dissertation": ["MSc Finance dissertation", "Submitted July 2026"],
  "european-defence-ma": ["Illustrative academic transaction case", "Analysis frozen as of 20 July 2026"],
  "credit-analysis": ["Self-directed public-data case study", "Analysis frozen at FY2025 source data; 2026 to 2030 remain forecast"],
  "rolls-royce-credit-treasury": ["Self-directed public-data case study", "Analysis frozen on 20 July 2026; FY2025 base with 2026 scenarios"],
  "portfolio-management": ["Illustrative portfolio-mechanics case", "Synthetic monthly index from January 2021 through June 2026; not ETF price history"],
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
    featured: false,
    contribution: [
      "Completed the ESG analysis, financial statement analysis and valuation sections.",
      "Helped prepare the presentation and contributed to the final report. No independently rebuilt portion is claimed."
    ],
    verdict: "NEXT led on profitability and return on equity",
    verdictTone: "positive",
    conclusion: [
      "NEXT recorded a 12.03% net margin and 41.96% return on equity in 2025, compared with 4.28% and 14.53% for JD Sports. NEXT also had slightly higher 2025 asset turnover at 1.26x versus 1.15x.",
      "NEXT's current and quick ratios were 1.69x and 0.98x, compared with 1.29x and 0.36x for JD Sports. JD Sports had the higher cash ratio at 0.51x versus 0.13x. This is a historical academic group project and no sole authorship is claimed."
    ],
    metrics: [
      ["NEXT net margin", "12.03%", "2025"],
      ["NEXT return on equity", "41.96%", "2025"],
      ["JD Sports net margin", "4.28%", "2025"],
      ["NEXT current ratio", "1.69x", "2025"]
    ],
    architecture: ["Income statement review", "Balance-sheet review", "Cash-flow review", "DuPont analysis", "Liquidity ratios", "Profitability ratios", "Solvency ratios", "Source reconciliation notes"],
    tested: ["Margin conversion", "Asset turnover and leverage", "Liquidity trend", "Debt and interest coverage"],
    risks: ["The original work was completed as an academic group project.", "Company reporting periods and adjusted metrics are not fully aligned.", "Licensed data extracts remain private and are not redistributed.", "The annual-report references do not yet include complete page-level source mapping."],
    sources: [
      ["NEXT reports and presentations", "https://www.nextplc.co.uk/investors/reports-and-presentations/2025-26"],
      ["JD Sports reports and presentations", "https://www.jdplc.com/investors/reports-presentations/"]
    ],
    images: [
      ["assets/models/next-jd-conclusion.png", "Scope, conclusion, cutoff and personal contribution"],
      ["assets/models/next-jd-dupont.png", "2023 to 2025 DuPont comparison"],
      ["assets/models/next-jd-liquidity.png", "Liquidity ratios and formula definitions"]
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
    featured: false,
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
    risks: ["Long-range demand for cloud services and data-centre capacity is uncertain.", "Capital expenditure may remain elevated for longer than modelled.", "Other long-term liabilities remain a residual forecast category in this simplified model.", "Dividends and repurchases are not modelled, so ending cash accumulates under the supplied forecast structure.", "Microsoft reported FY2026 actual results on 29 July 2026, after this FY2025-based model was frozen. The forecast is retained as a historical modelling exercise and is not presented as current consensus or company guidance."],
    sources: [
      ["Microsoft FY2025 annual report", "https://www.microsoft.com/investor/reports/ar25/"],
      ["Microsoft FY2024 annual report", "https://www.microsoft.com/investor/reports/ar24/"],
      ["Microsoft FY2026 results, subsequent event", "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast"]
    ],
    images: [
      ["assets/models/microsoft-three-statement-dashboard.png", "Three-statement dashboard with reconciled KPI changes"],
      ["assets/models/microsoft-three-statement-forecast.png", "Forecast output and statement drivers"],
      ["assets/models/microsoft-three-statement-sensitivity.png", "2030 free-cash-flow sensitivity framework"]
    ]
  },
  {
    id: "budgeting-fpa",
    group: "corporate-finance",
    title: "Walmart Budget, Scenario and Cash Forecast",
    eyebrow: "Budgeting and FP&A",
    company: "Walmart benchmark case",
    decision: "Does the FY2027 scenario budget maintain liquidity after working-capital movements and capital expenditure?",
    short: "An illustrative monthly budget with operating drivers, scenarios and a rolling cash forecast. No actual results are loaded.",
    featured: false,
    verdict: "The base budget stays liquid despite negative free cash flow",
    verdictTone: "neutral",
    conclusion: [
      "The illustrative FY2027 budget produces $734.7bn of revenue and $29.4bn of EBITDA. Free cash flow is negative $3.9bn, but modelled ending cash remains positive at $6.0bn.",
      "No actual results are loaded, so the workbook now presents budget-versus-scenario analysis only. Revenue delivery, working capital and capital expenditure remain the main controls; none of these estimates is Walmart guidance."
    ],
    metrics: [
      ["Budget revenue", "$734.7bn", "Illustrative annual plan"],
      ["Budget EBITDA", "$29.4bn", "Illustrative annual plan"],
      ["Free cash flow", "($3.9bn)", "Illustrative annual plan"],
      ["Ending cash", "$6.0bn", "Modelled close"]
    ],
    architecture: ["Annual operating budget", "Monthly revenue and margin drivers", "Budget-versus-scenario comparison", "Scenario analysis", "Working-capital assumptions", "Capital expenditure", "Cash-flow forecast", "Checks and source notes"],
    tested: ["Downside and upside revenue", "EBITDA margin", "Working-capital swings", "Ending liquidity"],
    risks: ["The budget is an illustrative corporate-planning case.", "No actual results are loaded, so no actual-versus-plan conclusion is made.", "Working-capital assumptions can move monthly cash materially.", "The model is not company guidance."],
    sources: [
      ["Walmart FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/104169/000010416925000021/wmt-20250131.htm"],
      ["Walmart SEC filings", "https://stock.walmart.com/sec-filings/all-sec-filings"],
      ["Walmart annual reports", "https://stock.walmart.com/financial-information/annual-reports"]
    ],
    images: [
      ["assets/models/walmart-fpa-dashboard.png", "FY2027 budget and ending-cash dashboard"],
      ["assets/models/walmart-fpa-scenario-comparison.png", "Budget-versus-scenario comparison; no actuals loaded"],
      ["assets/models/walmart-fpa-scenarios.png", "Downside, base and upside budget cases"]
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
    contribution: ["Completed dividend policy, share buyback, and relevant financial modelling; helped prepare presentation and final report; no independently rebuilt portion claimed."],
    conclusion: [
      "The base case estimates FY2026E revenue of €84.4bn and free cash flow of €10.8bn. Distribution and strategic investment capacity are scenario outputs, not company guidance.",
      "The severe downside reduces free cash flow to €6.0bn. Payout and acquisition decisions should therefore be tied to scenario cash flow, not the prior year's record result."
    ],
    metrics: [
      ["FY2026E revenue", "€84.4bn", "Base case"],
      ["FY2026E free cash flow", "€10.8bn", "Base case"],
      ["Revenue growth", "7.0%", "Base-case assumption"],
      ["Guidance range", "6% to 8%", "Company outlook used"]
    ],
    architecture: ["FY2025 reported base", "FY2026 outlook", "Operating scenarios", "Free-cash-flow conversion", "Distribution policy", "Retained cash", "Strategic investment capacity", "Sensitivity and checks"],
    tested: ["Revenue growth", "Industrial Business margin", "Cash conversion", "Distribution rate"],
    risks: ["Academic group project; selected personal contributions are disclosed separately. Not investment advice.", "Acquisition integration and working-capital pressure can reduce cash conversion.", "The model is a focused corporate-finance framework, not a full three-statement forecast.", "Siemens reported Q3 FY2026 results on 6 August 2026, after the 20 July 2026 cutoff. Scenario outputs are retained as academic estimates, not current company guidance."],
    sources: [
      ["Siemens FY2025 results", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q4-fy-2025"],
      ["Siemens Q2 FY2026 results", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q2-fy-2026"],
      ["Siemens Q3 FY2026 results, subsequent event", "https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q3-fy-2026"]
    ],
    images: [
      ["assets/models/siemens-executive-summary.png", "Executive summary, base case and downside"],
      ["assets/models/siemens-operating-scenarios.png", "FY2026 operating scenarios and decision output"],
      ["assets/models/siemens-capital-allocation.png", "Capital-allocation scenarios, guardrails and actions"]
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
    featured: false,
    verdict: "The base DCF does not support the model market price",
    verdictTone: "caution",
    conclusion: [
      "At an 8.9% WACC and 2.5% terminal growth rate, the repaired blended DCF produces $127.64 per share. The $336.91 market price used in the model leaves a 62.1% gap.",
      "The sensitivity tables show what must change to close that gap. The result is most exposed to WACC, terminal growth, exit multiple and long-run operating margins."
    ],
    metrics: [
      ["Implied share price", "$127.64", "Blended terminal methods"],
      ["Model market price", "$336.91", "27 July 2026 close"],
      ["WACC", "8.9%", "Base case"],
      ["Terminal growth", "2.5%", "Base case"]
    ],
    architecture: ["Historical financials", "Five-year operating forecast", "Unlevered free cash flow", "Cost of capital", "WACC", "Gordon growth and exit multiple", "Enterprise-to-equity bridge", "Scenario, sensitivity and checks"],
    tested: ["WACC and terminal growth", "WACC and exit multiple", "Revenue growth and EBITDA margin", "Terminal-method dispersion"],
    risks: ["Small changes in terminal assumptions move value materially.", "The risk-free rate, beta and pre-tax cost-of-debt proxy lack exact observation dates; the debt proxy also lacks a quoted bond basket.", "The Damodaran equity-risk-premium vintage was not recorded, so the 8.9% WACC cannot be reproduced to a complete market-data snapshot.", "This is a dated forecast snapshot, not a current recommendation. It should be read with trading comparables and business-quality analysis."],
    sources: [
      ["Apple FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm"],
      ["FRED 10-year Treasury", "https://fred.stlouisfed.org/series/DGS10"],
      ["Damodaran data", "https://pages.stern.nyu.edu/~adamodar/"],
      ["Apple stock price history", "https://investor.apple.com/stock-price/"]
    ],
    images: [
      ["assets/models/apple-dcf-dashboard.png", "DCF summary and repaired enterprise-to-equity bridge"],
      ["assets/models/apple-dcf-wacc.png", "Capital structure and WACC calculation"],
      ["assets/models/apple-dcf-sensitivity.png", "Per-share sensitivity to terminal assumptions"]
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
    risks: ["The peer set spans different growth and margin profiles.", "The supplied workbook does not record synchronized peer market observation dates, so the multiples cannot be reproduced as a single dated snapshot.", "Annual and trailing periods require consistent updates.", "No multiple removes the need for business-quality judgment."],
    sources: [
      ["Microsoft FY2025 annual report", "https://www.microsoft.com/investor/reports/ar25/"],
      ["Apple FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm"],
      ["Alphabet investor relations", "https://abc.xyz/investor/"],
      ["Amazon annual reports", "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx"],
      ["Meta financials", "https://investor.fb.com/financials/"],
      ["Oracle financials", "https://investor.oracle.com/financials/default.aspx"],
      ["Salesforce annual reports", "https://investor.salesforce.com/financials/annual-reports/default.aspx"],
      ["Adobe financial documents", "https://www.adobe.com/investor-relations/financial-documents.html"],
      ["ServiceNow SEC filings", "https://www.sec.gov/edgar/browse/?CIK=1373715&owner=exclude"],
      ["Intuit annual reports", "https://investors.intuit.com/sec-filings/annual-reports"]
    ],
    images: [
      ["assets/models/microsoft-comps-dashboard.png", "Comparable-company dashboard and method selection"],
      ["assets/models/microsoft-comps-valuation.png", "Valuation range and source-date limitation"],
      ["assets/models/microsoft-comps-sensitivity.png", "Selected-multiple sensitivity tables"]
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
    risks: ["Target financials are illustrative.", "Synchronized operating-metric periods and unaffected-price observation dates were not retained for every deal, so the 33.0% median premium is not independently reproducible or externally verified from the retained evidence.", "Deal synergies and market conditions reduce comparability.", "Precedents are backward-looking and should not be used alone."],
    sources: [
      ["Synopsys acquisition of Ansys", "https://news.synopsys.com/2025-07-17-Synopsys-Completes-Acquisition-of-Ansys"],
      ["IBM acquisition of HashiCorp", "https://newsroom.ibm.com/2024-04-24-IBM-to-Acquire-HashiCorp,-Inc-Creating-a-Comprehensive-End-to-End-Hybrid-Cloud-Platform"],
      ["Cisco acquisition of Splunk", "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2023/m09/cisco-to-acquire-splunk.html"],
      ["Broadcom acquisition of VMware", "https://investors.broadcom.com/news-releases/news-release-details/broadcom-completes-acquisition-vmware"],
      ["Thoma Bravo acquisition of Anaplan", "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-anaplan"],
      ["Vista and Evergreen acquisition of Citrix", "https://www.vistaequitypartners.com/news/citrix-to-be-acquired-by-affiliates-of-vista-equity-partners-and-evergreen-coast-capital-for-16-5-billion/"],
      ["Oracle acquisition of Cerner", "https://www.oracle.com/news/announcement/oracle-completes-acquisition-of-cerner-2022-06-07/"],
      ["Salesforce acquisition of Slack", "https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/"],
      ["Adobe and Figma termination", "https://news.adobe.com/news/news-details/2023/adobe-and-figma-mutually-agree-to-terminate-merger-agreement"],
      ["Silver Lake and CPP Investments acquisition of Qualtrics", "https://www.qualtrics.com/news/silver-lake-and-cpp-investments-complete-acquisition-of-qualtrics/"]
    ],
    images: [
      ["assets/models/software-precedents-valuation.png", "Valuation summary and source-coverage limitation"],
      ["assets/models/software-precedents-multiples.png", "Transaction multiples and selection status"],
      ["assets/models/software-precedents-premium.png", "Nine-deal control-premium analysis"]
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
    verdict: "Internally consistent, but not market-calibrated",
    verdictTone: "neutral",
    conclusion: [
      "At the model's 28 July 2026 snapshot, a $336.91 spot price, $335 strike, 18 December 2026 expiry and 27.68% selected volatility produce Black-Scholes values of $26.47 for the call and $19.82 for the put. The illustrative contract uses 100 shares per contract, and put-call parity reconciles within rounding.",
      "Call delta is 0.58. No observed option quote, quote timestamp or bid-ask convention was retained, so the volatility and values are theoretical model outputs, not a market calibration or evidence of historical mispricing."
    ],
    metrics: [
      ["Call value", "$26.47", "Black-Scholes"],
      ["Put value", "$19.82", "Black-Scholes"],
      ["Call delta", "0.58", "Base case"],
      ["Selected volatility", "27.68%", "Analyst reference input"]
    ],
    architecture: ["Market inputs", "Black-Scholes calculation", "Put-call parity", "Call and put values", "Greeks", "Payoff profiles", "Selected-volatility sensitivity", "Sensitivity and checks"],
    tested: ["Stock price", "Selected volatility", "Time decay", "Put-call parity"],
    risks: ["No observed quote, captured premium, exchange snapshot, quote timestamp or bid-ask convention was retained; no market calibration is claimed.", "Black-Scholes assumes continuous trading and lognormal returns.", "The model does not capture volatility skew or discrete jump risk.", "The output is a theoretical valuation exercise, not a trading recommendation."],
    sources: [
      ["Apple market data", "https://finance.yahoo.com/quote/AAPL/"],
      ["Federal Reserve H.15 rates", "https://www.federalreserve.gov/releases/h15/"],
      ["Nasdaq Apple option chain", "https://www.nasdaq.com/market-activity/stocks/aapl/option-chain"]
    ],
    images: [
      ["assets/models/apple-option-dashboard.png", "Theoretical valuation dashboard and quote limitation"],
      ["assets/models/apple-option-sensitivity.png", "Call and put sensitivity to spot price and volatility"],
      ["assets/models/apple-option-volatility-sensitivity.png", "Selected-volatility sensitivity; not market-IV calibration"]
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
    featured: false,
    verdict: "Modelled dilution narrows, but persists through FY2028",
    verdictTone: "caution",
    conclusion: [
      "The retrospective model produces 7.2% dilution in FY2026E, 3.6% in FY2027E and 0.9% in FY2028E as assumed synergies phase in.",
      "The main deal variables are synergy timing, financing cost and intangible-asset amortization. Under these assumptions, the earnings gap narrows but does not turn accretive within the forecast period."
    ],
    metrics: [
      ["Purchase equity value", "$27.09bn", "Modelled transaction"],
      ["FY2026 dilution", "7.2%", "First full forecast year"],
      ["FY2028 dilution", "0.9%", "Gap narrows"],
      ["New debt", "$12.97bn", "Modelled financing"]
    ],
    architecture: ["Standalone financials", "Purchase price", "Sources and uses", "Financing mix", "Goodwill and intangibles", "Synergy build", "Pro forma income statement", "Accretion and sensitivity"],
    tested: ["Synergy realization", "Debt financing", "Interest rate", "Intangible amortization"],
    risks: ["Synergy timing and financing mix are analyst assumptions.", "The Downside and Upside cases are analyst overlays, not observed deal terms.", "Purchase accounting is simplified, and integration costs and dis-synergies are not fully captured.", "Cisco reported FY2026 actual results on 12 August 2026, after this FY2025-based retrospective model was frozen. FY2026E is preserved as a historical forecast, not a current estimate."],
    sources: [
      ["Cisco acquisition completion", "https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Splunk/default.aspx"],
      ["Splunk FY2024 results", "https://www.splunk.com/en_us/newsroom/press-releases/2024/splunk-announces-fiscal-fourth-quarter-and-full-year-2024-financial-results.html"],
      ["Cisco FY2025 results", "https://investor.cisco.com/news/news-details/2025/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2025-EARNINGS/default.aspx"],
      ["Cisco FY2026 results, subsequent event", "https://investor.cisco.com/news/news-details/2026/CISCO-REPORTS-FOURTH-QUARTER-AND-FISCAL-YEAR-2026-EARNINGS/default.aspx"]
    ],
    images: [
      ["assets/models/cisco-splunk-dashboard.png", "Transaction dashboard and reconciled funding mix"],
      ["assets/models/cisco-splunk-scenarios.png", "Base, downside and upside dilution cases"],
      ["assets/models/cisco-splunk-sensitivity.png", "Populated deal sensitivities"]
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
    questionLabel: "Research question",
    viewLabel: "Finding",
    conclusionTitle: "Research finding",
    structureKicker: "Research design",
    structureTitle: "Method and evidence",
    architectureTitle: "Method",
    testedTitle: "Hypotheses tested",
    outputsTitle: "Selected research outputs",
    outputsIntro: "The dissertation, regression workbook and licensed data remain private. These derived visuals show the sample and results cited in this case.",
    accessTitle: "Dissertation access",
    accessNote: "The dissertation, regression workbook, analysis script and source dataset are maintained privately. A live walkthrough can be provided during an interview.",
    contribution: ["Sole-authored MSc Finance dissertation, including panel construction, econometric analysis, robustness testing and interpretation."],
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
    architecture: ["Daily market-data cleaning", "Currency conversion and NAV normalisation", "Fund-quarter panel construction", "Fund fixed effects", "Alternative inference methods", "Rate-channel decomposition", "Market-frictions tests", "Price-leads-NAV predictive test"],
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
      ["Morningstar UK investment trusts", "https://www.morningstar.co.uk/uk/investmenttrusts/default.aspx"],
      ["LSEG Workspace (Refinitiv)", "https://www.lseg.com/en/data-analytics/products/workspace"]
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
    decision: "What sponsor return does a take-private at 8.5x entry EBITDA produce under the modelled assumptions?",
    short: "A public-data LBO with sources and uses, two debt tranches, cash sweep, checks and sponsor returns.",
    featured: true,
    verdict: "The base case produces a 12.4% sponsor IRR",
    verdictTone: "neutral",
    conclusion: [
      "With 5.5x initial debt / EBITDA and an 8.0x exit multiple, the illustrative base case produces a 12.4% sponsor IRR and 1.79x MOIC from 2025E to 2029E assumptions.",
      "The workbook does not specify a sponsor hurdle, so the result is not framed as a pursue or do-not-pursue decision. A lower entry price, stronger EBITDA growth or a specific operating plan would improve returns."
    ],
    metrics: [
      ["Sponsor IRR", "12.4%", "Modelled hold"],
      ["Sponsor MOIC", "1.79x", "Base case"],
      ["Initial leverage", "5.5x", "Debt / EBITDA"],
      ["Exit multiple", "8.0x", "Base case"]
    ],
    architecture: ["Entry valuation", "Sources and uses", "Operating forecast", "Debt tranches", "Amortization and cash sweep", "Covenant checks", "Exit valuation", "IRR, MOIC and sensitivities"],
    tested: ["Entry and exit multiple", "Exit multiple and EBITDA growth", "Leverage", "Revenue growth and EBITDA margin"],
    risks: ["Store, inventory and lease detail are simplified.", "Debt terms do not reproduce a negotiated credit agreement.", "The downside and upside cases hold exit net debt at the core-model value to isolate operating and multiple sensitivity.", "Returns remain exposed to multiple compression, and public data cannot replace a quality-of-earnings review."],
    sources: [
      ["Academy FY2024 results", "https://investors.academy.com/news-releases/news-release-details/academy-sports-outdoors-reports-fourth-quarter-and-fiscal-2024"],
      ["Academy investor relations", "https://investors.academy.com/"]
    ],
    images: [
      ["assets/models/academy-lbo-dashboard.png", "LBO summary, sponsor returns and debt paydown"],
      ["assets/models/academy-lbo-scenarios.png", "Downside, base and upside sponsor returns"],
      ["assets/models/academy-lbo-sensitivity.png", "Repaired sponsor IRR sensitivity tables"]
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
    featured: true,
    verdict: "Base-case LP returns are modest",
    verdictTone: "caution",
    conclusion: [
      "The illustrative fund produces a 1.96x gross MOIC and 13.3% gross IRR. After $93.9m of management fees and $0.0m of modelled carried interest under the supplied waterfall, net IRR is 9.6%.",
      "The repaired scenario table produces 5.4% net IRR in the downside, 9.6% in the detailed base case and 21.5% in the upside. Exit multiple and timing remain the central variables."
    ],
    metrics: [
      ["Fund size", "$750m", "Committed capital"],
      ["Net IRR", "9.6%", "Base case"],
      ["Gross MOIC", "1.96x", "Base case"],
      ["Gross IRR", "13.3%", "Base case"]
    ],
    architecture: ["Commitment schedule", "Investment pace", "Exit proceeds", "Management fees", "Capital calls", "Distribution waterfall", "LP cash flows", "IRR and TVPI sensitivity"],
    tested: ["Exit timing", "Exit multiple", "Fee drag", "Downside and upside cases"],
    risks: ["The fund and portfolio companies are illustrative, and the downside and upside cases use blended liquidation assumptions rather than forecasts.", "The whole-fund European waterfall is simplified and does not model recycling, clawback, escrow, tax allocations or fund-specific LPA provisions.", "Carried interest is $0.0m under the supplied assumptions because the simplified waterfall does not clear its preferred-return threshold; this is a model result, not a missing formula.", "Exit proceeds remain assumption-driven, and past fund structures do not guarantee future outcomes."],
    sources: [
      ["ILPA Principles 3.0", "https://ilpa.org/wp-content/uploads/2019/06/ILPA-Principles-3.0_2019.pdf"],
      ["ILPA private equity glossary", "https://ilpa.org/resources-tools/private-equity-101/private-equity-glossary/"],
      ["Distribution waterfall reference", "https://www.duanemorris.com/site/static/private_equity_fund_distribution_waterfalls.pdf"]
    ],
    images: [
      ["assets/models/pe-fund-metrics.png", "Fund metrics, fees and investor returns"],
      ["assets/models/pe-fund-scenarios.png", "Populated downside, base and upside cases"],
      ["assets/models/pe-fund-sensitivity.png", "Net IRR and TVPI sensitivities"]
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
      ["2026 cash-gap equity", "$38.6m", "Formula-sized financing round"],
      ["Founder ownership", "21.7%", "At exit"],
      ["Gross margin", "82.0%", "2031 assumption"]
    ],
    architecture: ["Customer and ARR build", "Gross margin", "Operating burn", "Funding rounds", "Pre-money and post-money value", "Cap table", "Cash runway", "Investor MOIC and IRR"],
    tested: ["Revenue growth", "Burn and runway", "Funding size", "Exit valuation"],
    risks: ["The company, funding schedule, valuation inputs and cash-gap round are illustrative analyst assumptions.", "Preferred-share rights are simplified; no company-specific term sheet is represented.", "The cash runway remains positive only because the modelled rounds occur as scheduled.", "Exit-based investor returns are highly sensitive to timing and valuation."],
    sources: [
      ["Datadog S-1", "https://www.sec.gov/Archives/edgar/data/1561550/000119312519227783/d745413ds1.htm"],
      ["Datadog FY2019 results", "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-full-year-2019-results/"],
      ["Bessemer Cloud 100 benchmarks", "https://www.bvp.com/atlas/the-cloud-100-benchmarks-report"]
    ],
    images: [
      ["assets/models/saas-startup-dashboard.png", "Growth, burn, ownership and financing dashboard"],
      ["assets/models/saas-startup-cash-runway.png", "Cash runway, funding need and N/M convention"],
      ["assets/models/saas-startup-cap-table.png", "Formula-driven cap-table dilution by round"]
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
    risks: ["Offer prices, betas, capital structures, consensus estimates, synergies and transaction terms are explicit analyst assumptions, not announced offers.", "Company guidance and market inputs require updating from the 20 July 2026 cutoff.", "Regulatory and national-security review is outside the model."],
    sources: [
      ["Rheinmetall FY2025 results", "https://www.rheinmetall.com/en/media/news-watch/news/2026/03/2026-03-11-rheinmetall-presents-annual-report-for-2025"],
      ["Thales FY2025 results", "https://www.thalesgroup.com/en/news-centre/press-releases/thales-reports-its-2025-full-year-results"],
      ["RENK FY2025 results", "https://ir.renk.com/news-releases/news-release-details/fiscal-year-2025-renk-group-ag-achieves-annual-targets-new"],
      ["BAE Systems financial information", "https://www.baesystems.com/en/investors/financial-information"]
    ],
    images: [
      ["assets/models/european-defence-summary.png", "Reconciled Rheinmetall and RENK transaction comparison"],
      ["assets/models/european-defence-rhm-transaction.png", "Rheinmetall sources, uses, leverage and accretion"],
      ["assets/models/european-defence-renk-transaction.png", "RENK sources, uses, leverage and accretion"]
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
      "Net leverage falls from 2.91x in 2025 to 2.73x in 2026E and 2.22x by 2030E. The model produces 7.63x interest coverage and 2.97x DSCR for 2026E.",
      "Recurring wireless cash flow supports the case. The main constraints are high absolute debt, capital intensity and shareholder distributions competing with debt reduction."
    ],
    metrics: [
      ["2026E net leverage", "2.73x", "Down from 2.91x"],
      ["2026E coverage", "7.63x", "EBITDA / cash interest"],
      ["2026E DSCR", "2.97x", "Base case"],
      ["2030E net leverage", "2.22x", "Model path"]
    ],
    architecture: ["Borrower overview", "Historical financials", "Five-year forecast", "Debt roll-forward", "Leverage and coverage", "Covenant headroom", "Debt capacity", "Downside and credit view"],
    tested: ["Debt reduction", "Interest coverage", "Covenant headroom", "Free cash flow after capital expenditure"],
    risks: ["Forecasts and covenant thresholds are analyst assumptions.", "The model does not reproduce every legal definition in the debt documents.", "Capital intensity can reduce discretionary cash flow.", "Verizon reported Q2 2026 results on 24 July 2026, after this FY2025-based model was frozen. The forecast is retained as a historical credit exercise and is not an agency rating."],
    sources: [
      ["Verizon FY2025 earnings release", "https://www.verizon.com/about/news/verizon-delivers-2025-financial-guidance-highest-quarterly-net-adds"],
      ["Verizon 2025 Form 10-K", "https://www.verizon.com/about/sites/default/files/2025-Annual-Report-on-Form-10k.pdf"],
      ["SEC filing", "https://www.sec.gov/Archives/edgar/data/732712/000073271226000007/vz-20251231.htm"],
      ["Verizon Q2 2026 results, subsequent event", "https://www.verizon.com/about/news/verizon-delivers-record-2q26-results"]
    ],
    images: [
      ["assets/models/verizon-credit-dashboard.png", "Credit dashboard and historical-cutoff disclosure"],
      ["assets/models/verizon-credit-risk.png", "Credit risks, mitigants and monitoring points"],
      ["assets/models/verizon-credit-sensitivity.png", "Net-leverage and interest-coverage sensitivities"]
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
    featured: false,
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
    risks: ["The FFO proxy and internal rating view are not agency calculations.", "Free cash flow can benefit from working-capital and service-contract timing.", "Distribution policy is an analyst recommendation, not management policy.", "Rolls-Royce reported H1 2026 results on 30 July 2026, after this analysis was frozen. The 2026 scenarios are retained as a dated analytical exercise."],
    sources: [
      ["Rolls-Royce 2025 annual report", "https://www.rolls-royce.com/~/media/Files/R/Rolls-Royce/documents/annual-report/2026/rolls-royce-holdings-plc-annual-report-2025-accessible.pdf"],
      ["Rolls-Royce 2025 results", "https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results/rr-holdings-plc-2025-full-year-results.aspx"],
      ["Rolls-Royce debt securities", "https://www.rolls-royce.com/investors/debt-securities.aspx"],
      ["Rolls-Royce April 2026 update", "https://www.rolls-royce.com/media/press-releases/2026/30-04-2026-rr-holdings-plc-agm-statement-and-trading-update.aspx"],
      ["Rolls-Royce H1 2026 results, subsequent event", "https://www.rolls-royce.com/media/press-releases/2026/30-07-2026-rr-holdings-plc-2026-half-year-results.aspx"]
    ],
    images: [
      ["assets/models/rolls-royce-dashboard.png", "Credit and treasury dashboard"],
      ["assets/models/rolls-royce-liquidity.png", "Liquidity bridge, sources and uses, and guardrails"],
      ["assets/models/rolls-royce-rating-framework.png", "Rating framework and internal credit view"]
    ]
  },
  {
    id: "portfolio-management",
    group: "portfolio-risk",
    title: "Multi-Asset Portfolio and Risk",
    eyebrow: "Portfolio management",
    company: "Six-ETF policy portfolio",
    decision: "What contributes to return, volatility and downside, and does the portfolio beat its benchmark after tracking risk?",
    short: "An illustrative monthly index demonstrating performance, drawdown, beta, tracking error, correlations and risk contribution.",
    featured: false,
    verdict: "Diversified in sample, but not benchmark-beating",
    verdictTone: "neutral",
    conclusion: [
      "The illustrative index records 12.8% annualised return, 7.3% volatility, a 1.22 Sharpe ratio and 0.50 beta to the modelled SPY benchmark. Peak-to-trough drawdown is 4.4% for the portfolio and 13.2% for the modelled QQQ series.",
      "The information ratio is negative 1.42. These outputs demonstrate portfolio mechanics only: the supplied prices are synthetic index levels and must not be read as historical ETF performance."
    ],
    metrics: [
      ["Annualised return", "12.8%", "Illustrative index"],
      ["Annualised volatility", "7.3%", "Illustrative monthly returns"],
      ["Sharpe ratio", "1.22", "Risk-free adjusted"],
      ["Beta to SPY", "0.50", "Information ratio negative 1.42"]
    ],
    architecture: ["ETF universe", "Policy weights", "Price history", "Return calculations", "Performance metrics", "Drawdown and risk", "Scenarios and Monte Carlo", "Allocation screen and checks"],
    tested: ["Equity sell-off", "Rate shock", "Inflation surprise", "Growth rally and dollar weakness"],
    risks: ["The supplied price levels are illustrative rather than sourced ETF quotations.", "Replace the series with dated, sourced prices before presenting the output as historical performance.", "Monte Carlo output is a distribution exercise, not a forecast.", "The synthetic sample can understate drawdown and regime risk."],
    sources: [
      ["Replacement-data reference: Yahoo Finance", "https://finance.yahoo.com/"],
      ["Replacement-data reference: Stooq", "https://stooq.com/q/d/?s=spy.us"],
      ["Instrument reference: State Street SPY", "https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-sp-500-etf-trust-spy"],
      ["Instrument reference: Vanguard VNQ", "https://investor.vanguard.com/investment-products/etfs/profile/vnq"]
    ],
    images: [
      ["assets/models/multi-asset-portfolio-dashboard.png", "Illustrative portfolio dashboard and drawdown series"],
      ["assets/models/multi-asset-portfolio-risk.png", "Asset risk, return and peak-to-trough drawdown"],
      ["assets/models/multi-asset-portfolio-summary.png", "Performance summary and data limitation"]
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
    verdict: "Financial risk improves modestly in the modelled allocation",
    verdictTone: "neutral",
    conclusion: [
      "The modelled allocation raises expected return from 5.54% to 5.65% and reduces volatility from 7.48% to 7.18%. Modelled 95% VaR falls from 6.77% to 6.16%.",
      "The return-seeking WACI proxy rises from 111.25 to 129.85 tCO2e per €m sales, so the workbook does not demonstrate that the modelled allocation meets its climate objective. EU Taxonomy alignment is not measured, and a real mandate would require security-level data and an explicit constraint."
    ],
    metrics: [
      ["Expected return", "5.65%", "Modelled allocation"],
      ["Volatility", "7.18%", "Modelled allocation"],
      ["VaR 95%", "6.16%", "Modelled allocation loss"],
      ["Surplus volatility", "7.86%", "Modelled allocation"]
    ],
    architecture: ["Euro capital market assumptions", "Correlation and covariance", "Current and recommended portfolios", "Scenario analysis", "Funded-ratio sensitivity", "Climate metrics", "Efficient frontier", "Factor and index comparison"],
    tested: ["Rate-cut scenario", "Stagflation", "Climate stress", "Asset-liability surplus risk"],
    risks: ["Climate figures use mixed methods and reporting vintages, with coverage shown alongside each proxy roll-up.", "EU Taxonomy inputs were not supplied, so alignment is not measured and should not be read as 0%.", "Capital-market assumptions, correlations and scenario shocks are inputs rather than forecasts.", "The case is not a fiduciary recommendation or a replacement for manager-level climate data."],
    sources: [
      ["J.P. Morgan long-term capital market assumptions", "https://am.jpmorgan.com/us/en/asset-management/adv/insights/portfolio-insights/ltcma/"],
      ["NGFS climate scenarios", "https://www.ngfs.net/ngfs-scenarios-portal"],
      ["MSCI SRI methodology", "https://www.msci.com/index/methodology/latest/SRI"],
      ["EU emissions trading system", "https://climate.ec.europa.eu/eu-action/carbon-markets/eu-emissions-trading-system-eu-ets_en"]
    ],
    images: [
      ["assets/models/sustainable-portfolios.png", "Allocation, risk and contribution comparison"],
      ["assets/models/sustainable-scenarios.png", "One-year scenarios and funded-ratio sensitivities"],
      ["assets/models/sustainable-alm.png", "Repaired and ordered funded-ratio percentiles"]
    ]
  }
];

window.portfolioProjects.push(...addedRealEstateProjects);

window.portfolioProjects.forEach((project) => {
  const [basis, asOf] = projectContext[project.id] || ["Portfolio case study", "Model date disclosed in the workbook"];
  project.basis = basis;
  project.asOf = asOf;
});

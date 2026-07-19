window.portfolioProjects = [
  {
    id: "real-estate-underwriting",
    title: "Logistics Acquisition Underwriting",
    eyebrow: "Real estate private equity",
    company: "Dallas–Fort Worth logistics asset",
    decision: "Can a $31.7m all-in acquisition support the proposed debt and equity return requirements?",
    short: "Rent-roll-led underwriting for a 250,000 sf logistics property, from NOI build to debt service, exit value and equity returns.",
    featured: true,
    verdict: "Proceed to diligence, not yet to commitment",
    verdictTone: "positive",
    conclusion: [
      "The base case produces a 12.9% levered IRR and 2.19x equity multiple while maintaining minimum DSCR of 1.58x. That is enough to justify further work, but the return is not so wide that the underwriting can absorb loose assumptions.",
      "The investment case rests on rent growth, rollover economics and the exit cap rate. I would advance the opportunity only after validating market rent, lease expiry exposure, tenant credit and near-term capital requirements against property-level diligence."
    ],
    metrics: [
      ["Levered IRR", "12.9%", "Seven-year hold"],
      ["Equity multiple", "2.19x", "$12.7m initial equity"],
      ["Minimum DSCR", "1.58x", "Coverage remains above 1.5x"],
      ["Exit value", "$41.9m", "$168 per sf"]
    ],
    architecture: ["Property and acquisition assumptions", "Tenant rent roll", "Revenue and operating expense forecast", "NOI and leasing-cost build", "Debt amortisation and service", "Levered and unlevered cash flow", "Scenario and sensitivity analysis", "Model checks and source notes"],
    tested: ["Exit cap rate against rent growth", "Loan-to-cost against exit cap rate", "Debt service coverage through the hold", "Rollover, leasing costs and capital reserves"],
    risks: ["The asset is representative rather than a marketed property.", "Broker rent comparables and executed lease abstracts are required before investment use.", "Exit value is sensitive to cap-rate expansion and the timing of NOI.", "Environmental, title, tax and physical diligence are outside the public-data case."],
    sources: [
      ["Prologis FY2025 results", "https://www.prologis.com/insights-news/press-releases/prologis-reports-fourth-quarter-and-full-year-2025-results"],
      ["Prologis Q2 2025 deployment data", "https://www.prologis.com/insights-news/press-releases/prologis-reports-second-quarter-2025-results"],
      ["Prologis 2025 Form 10-K", "https://ir.prologis.com/financials/sec-filings/content/0001193125-26-051453/pld-20251231.htm"]
    ],
    images: [
      ["assets/models/real-estate-underwriting-01.png", "Executive underwriting summary"],
      ["assets/models/real-estate-underwriting-02.png", "Equity return build"],
      ["assets/models/real-estate-underwriting-03.png", "Return sensitivities"]
    ]
  },
  {
    id: "credit-analysis",
    title: "Verizon Credit Underwriting",
    eyebrow: "Corporate credit",
    company: "Verizon Communications",
    decision: "Does recurring cash generation provide enough capacity to de-lever while preserving coverage and liquidity?",
    short: "Borrower-level credit work covering cash flow, leverage, coverage, covenant headroom, debt capacity and downside resilience.",
    featured: true,
    verdict: "Credit remains defensible in the base case",
    verdictTone: "positive",
    conclusion: [
      "The base case shows net leverage falling from 2.91x in 2025 to 2.62x in 2026E and 1.70x by 2030E. Interest coverage remains above 7.5x, 2026E DSCR is 1.88x and the covenant test remains compliant.",
      "I would describe the borrower as having investment-grade credit characteristics, supported by recurring wireless cash flow. The main reservation is not near-term coverage but the combination of high absolute debt, capital intensity and distributions competing with de-leveraging."
    ],
    metrics: [
      ["2026E net leverage", "2.62x", "Down from 2.91x"],
      ["2026E coverage", "7.78x", "EBITDA / cash interest"],
      ["2026E DSCR", "1.88x", "Base case"],
      ["2030E net leverage", "1.70x", "De-leveraging path"]
    ],
    architecture: ["Borrower overview", "Historical financials", "Five-year integrated forecast", "Debt roll-forward", "Leverage and coverage ratios", "Covenant headroom", "Debt capacity", "Downside case and internal credit view"],
    tested: ["Base and downside de-leveraging", "Interest and debt-service coverage", "Covenant headroom through 2030", "Free cash flow after capital expenditure"],
    risks: ["Forecasts and covenant thresholds are analyst assumptions.", "The model does not reproduce every legal definition in individual debt documents.", "Capital intensity and spectrum requirements can reduce discretionary cash flow.", "The internal view is not an agency rating or investment recommendation."],
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
    id: "project-finance",
    title: "100 MW Solar Project Finance",
    eyebrow: "Infrastructure & project finance",
    company: "Lone Star Solar PV, Texas",
    decision: "Can contracted project cash flow support an 18-year senior debt structure and an acceptable equity return?",
    short: "A 20-year solar cash-flow model integrating construction cost, PPA revenue, CFADS, debt service, coverage and equity distributions.",
    featured: true,
    verdict: "Financeable on the benchmark case",
    verdictTone: "positive",
    conclusion: [
      "A $110.1m project funded with 65% debt produces a 15.2% equity IRR, minimum DSCR of 1.83x and minimum LLCR of 2.25x. Debt is repaid before maturity, leaving a meaningful cushion above the 1.30x minimum DSCR assumption.",
      "The benchmark case supports financeability. The next stage would be to replace national benchmarks with site-specific irradiation, PPA, EPC, interconnection, curtailment, tax-credit and lender terms before relying on the result."
    ],
    metrics: [
      ["Total project cost", "$110.1m", "100 MWac"],
      ["Equity IRR", "15.2%", "Twenty-year operating life"],
      ["Minimum DSCR", "1.83x", "1.30x model threshold"],
      ["Minimum LLCR", "2.25x", "Debt repaid by maturity"]
    ],
    architecture: ["Construction schedule", "Generation and PPA revenue", "Operating costs and capex", "CFADS waterfall", "Senior debt amortisation", "DSCR, LLCR and PLCR", "Equity distributions and returns", "Coverage and return sensitivities"],
    tested: ["PPA price against capacity factor", "Debt percentage against interest rate", "Coverage through the full debt tenor", "Degradation and decommissioning costs"],
    risks: ["No site-specific irradiation or curtailment study is included.", "Tax equity and detailed investment-tax-credit mechanics are not modelled.", "The EPC and operating assumptions use public benchmarks rather than bids.", "Interconnection, permitting and merchant-tail risk require separate diligence."],
    sources: [
      ["EIA capacity-factor data", "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_6_07_b"],
      ["NREL technology data", "https://data.openei.org/search?q=overnight+capital+cost"],
      ["DOE solar cost benchmarks", "https://www.energy.gov/cmei/systems/solar-photovoltaic-system-cost-benchmarks"],
      ["Lazard 2025 LCOE+", "https://www.lazard.com/news-announcements/lazard-releases-2025-levelized-cost-of-energyplus-report-pr/"]
    ],
    images: [
      ["assets/models/project-finance-01.png", "Project finance dashboard"],
      ["assets/models/project-finance-02.png", "Coverage profile"],
      ["assets/models/project-finance-03.png", "Financing sensitivities"]
    ]
  },
  {
    id: "ma-merger",
    title: "Cisco / Splunk Merger Analysis",
    eyebrow: "M&A",
    company: "Cisco acquisition of Splunk",
    decision: "How do purchase accounting, financing and synergy delivery affect Cisco's pro forma EPS?",
    short: "A full accretion/dilution case spanning purchase price, sources and uses, financing, goodwill, synergies and pro forma earnings.",
    featured: true,
    verdict: "Accretive, with execution doing the work",
    verdictTone: "positive",
    conclusion: [
      "The model is 1.7% accretive in FY2026E, rising to 4.8% in FY2027E and 7.0% in FY2028E as cost and revenue synergies phase in. Pro forma debt / EBITDA increases from 1.67x to 2.17x.",
      "The EPS result is favourable, but it is not automatic. The case depends on synergy timing, financing cost and the amortisation burden created by the purchase-price allocation. Those are the variables I would put at the centre of an integration review."
    ],
    metrics: [
      ["Purchase equity value", "$28.0bn", "$157 per target share"],
      ["FY2026 accretion", "1.7%", "First full forecast year"],
      ["FY2028 accretion", "7.0%", "Synergies mature"],
      ["Pro forma leverage", "2.17x", "$14.5bn new debt"]
    ],
    architecture: ["Standalone acquirer and target financials", "Purchase price and sources & uses", "Financing mix and foregone cash interest", "Goodwill and intangible assets", "Synergy build", "Pro forma income statement", "EPS accretion/dilution", "Scenario and sensitivity analysis"],
    tested: ["Synergy realisation by year", "Debt financing and interest rate", "Intangible-asset amortisation", "Accretion under alternative operating cases"],
    risks: ["Synergy timing and financing mix are analyst assumptions.", "Purchase accounting is simplified relative to a final allocation.", "Integration cost and dis-synergy risk are not fully captured.", "The model is not a fairness opinion."],
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
    title: "Academy Sports LBO",
    eyebrow: "Private equity",
    company: "Academy Sports and Outdoors",
    decision: "Does a take-private at 8.5x entry EBITDA generate a sponsor return that compensates for operating and exit risk?",
    short: "Public-data buyout analysis with sources and uses, two debt tranches, cash sweep, covenant checks and sponsor returns.",
    featured: true,
    verdict: "Pass at the base-case price",
    verdictTone: "caution",
    conclusion: [
      "With 5.5x initial debt / EBITDA and half a turn of exit multiple compression, the base case generates an 8.6% sponsor IRR and 1.51x MOIC. Debt paydown is real, but it is not enough to produce a normal buyout return.",
      "I would not recommend the transaction at the modelled entry price. A credible investment case requires a lower entry multiple, stronger EBITDA growth or a differentiated operating plan; relying on a higher exit multiple would weaken the underwriting."
    ],
    metrics: [
      ["Sponsor IRR", "8.6%", "Below a typical buyout hurdle"],
      ["Sponsor MOIC", "1.51x", "Five-year hold"],
      ["Initial leverage", "5.5x", "TLB plus senior notes"],
      ["2029E debt", "$2.59bn", "Down from $3.68bn in 2025E"]
    ],
    architecture: ["Entry valuation and transaction assumptions", "Sources and uses", "Five-year operating forecast", "Term loan and notes schedules", "Mandatory amortisation and cash sweep", "Covenant checks", "Exit valuation", "IRR, MOIC and four sensitivity grids"],
    tested: ["Entry against exit multiple", "Exit multiple against EBITDA growth", "Leverage against exit multiple", "Revenue growth against margin delivery"],
    risks: ["Store-level, inventory and lease detail are simplified.", "Debt tranches do not reproduce a negotiated credit agreement.", "Returns remain exposed to multiple compression.", "Public data cannot replace a quality-of-earnings review."],
    sources: [
      ["Academy FY2024 results", "https://investors.academy.com/news-releases/news-release-details/academy-sports-outdoors-reports-fourth-quarter-and-fiscal-2024"],
      ["Academy investor relations", "https://investors.academy.com/"]
    ],
    images: [
      ["assets/models/leveraged-buyout-01.png", "LBO dashboard"],
      ["assets/models/leveraged-buyout-02.png", "Sponsor return cross-check"],
      ["assets/models/leveraged-buyout-03.png", "Sponsor return sensitivities"]
    ]
  },
  {
    id: "dcf-valuation",
    title: "Apple DCF Valuation",
    eyebrow: "Equity valuation",
    company: "Apple",
    decision: "What does a cash-flow-based valuation imply when long-term expectations are separated from the market price?",
    short: "Unlevered DCF with operating forecast, WACC build, two terminal-value methods, equity bridge and scenario analysis.",
    featured: true,
    verdict: "The base DCF does not support the modelled market price",
    verdictTone: "caution",
    conclusion: [
      "At an 8.9% WACC and 2.5% terminal growth rate, the blended DCF produces an implied value of $155.55 per share versus the $283.78 market price used in the model. The gap is approximately 45%.",
      "That is a valuation tension, not a short thesis by itself. It says the market price requires stronger growth, margin durability, capital efficiency or a lower discount rate than the conservative base case. The sensitivity tables are therefore more decision-useful than the single point estimate."
    ],
    metrics: [
      ["Implied share price", "$155.55", "Blended terminal methods"],
      ["Model market price", "$283.78", "Valuation-date input"],
      ["WACC", "8.9%", "Market-value capital structure"],
      ["Terminal growth", "2.5%", "Base case"]
    ],
    architecture: ["Historical financials", "Five-year revenue and margin forecast", "Unlevered free cash flow", "CAPM and cost of debt", "WACC calculation", "Gordon growth and exit multiple", "Enterprise-to-equity bridge", "Scenario, sensitivity and model checks"],
    tested: ["WACC against terminal growth", "WACC against exit EBITDA multiple", "Downside, base and upside operating cases", "Terminal-value-method dispersion"],
    risks: ["Small changes in WACC or terminal assumptions materially affect value.", "Forecasts are analyst estimates, not company guidance.", "A DCF can understate option value and strategic flexibility.", "The model should be read with trading comps and business-quality analysis."],
    sources: [
      ["Apple FY2025 Form 10-K", "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm"],
      ["FRED 10-year Treasury", "https://fred.stlouisfed.org/series/DGS10"],
      ["Damodaran data", "https://pages.stern.nyu.edu/~adamodar/"],
      ["Apple investor relations", "https://investor.apple.com/"]
    ],
    images: [
      ["assets/models/dcf-valuation-01.png", "DCF dashboard"],
      ["assets/models/dcf-valuation-02.png", "Enterprise value build"],
      ["assets/models/dcf-valuation-03.png", "DCF sensitivities"]
    ]
  },
  {
    id: "three-statement",
    title: "Microsoft Three-Statement Model",
    eyebrow: "Financial modelling",
    company: "Microsoft",
    decision: "How do segment growth, margins, working capital and capex move together across the three statements?",
    short: "An integrated operating model linking segment drivers to income statement, balance sheet, cash flow, debt and free cash flow.",
    featured: false,
    verdict: "Growth remains cash-generative, with capex the key watch item",
    verdictTone: "neutral",
    conclusion: [
      "The base case grows revenue from $281.7bn in FY2025A to $426.4bn in FY2030E, while EBITDA margin remains broadly stable near 58%. Free cash flow rises from $71.6bn to $157.3bn as the model moves beyond the heaviest capex years.",
      "The main analytical issue is the balance between cloud-led growth and infrastructure investment. I would focus a forecast review on Intelligent Cloud growth, capex intensity and the conversion of reported earnings into cash."
    ],
    metrics: [
      ["FY2030E revenue", "$426.4bn", "From $281.7bn in FY2025A"],
      ["FY2030E EBITDA", "$246.5bn", "57.8% margin"],
      ["FY2030E FCF", "$157.3bn", "Modelled free cash flow"],
      ["Forecast period", "5 years", "FY2026E–FY2030E"]
    ],
    architecture: ["Segment revenue drivers", "Cost and margin drivers", "Income statement", "Working-capital schedule", "Capex and depreciation", "Debt schedule", "Balance sheet", "Cash flow statement and checks"],
    tested: ["Productivity and Cloud growth scenarios", "Gross-margin durability", "Capex intensity", "Balance-sheet and cash-flow tie-outs"],
    risks: ["Long-range cloud and AI demand remain uncertain.", "Capex may stay elevated for longer than the base case.", "Forecast assumptions are not company guidance.", "A public-data model simplifies some below-the-line and capital-allocation items."],
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
    id: "comparable-companies",
    title: "Microsoft Comparable Companies",
    eyebrow: "Public-markets valuation",
    company: "Microsoft peer valuation",
    decision: "What valuation range is supported by a screened set of software, cloud and mega-cap technology peers?",
    short: "Peer screening, market and financial data, trading multiples, outlier review and valuation triangulation across five methods.",
    featured: false,
    verdict: "Use EV / EBITDA as the anchor, not the average of every method",
    verdictTone: "neutral",
    conclusion: [
      "The peer median is 16.2x EV / EBITDA, which implies $361.26 per share in the model. Other methods produce a wide range—from $265.03 on EV / Revenue to $471.40 on EV / EBIT.",
      "The dispersion is the conclusion. EV / EBITDA is the cleanest primary anchor because it limits capital-structure and tax distortion; revenue, P/E and P/B are supporting references rather than equally weighted answers."
    ],
    metrics: [
      ["Peer EV / EBITDA", "16.2x", "Median"],
      ["EV / EBITDA value", "$361.26", "Implied share price"],
      ["Peer EV / revenue", "6.8x", "Median"],
      ["Peer set", "9", "Included companies excluding target"]
    ],
    architecture: ["Peer-universe rationale", "Market data", "Financial metrics", "Enterprise value", "Trading multiples", "Peer screening and outliers", "Valuation summary", "Multiple sensitivity and checks"],
    tested: ["Median and quartile statistics", "Outlier identification", "Metric selection across different business models", "Sensitivity to selected multiple"],
    risks: ["The peer set spans different margin and growth profiles.", "Market multiples reflect sentiment as well as fundamentals.", "Annual and TTM periods require consistent updating.", "No single multiple removes the need for business-quality judgment."],
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
    title: "Software Precedent Transactions",
    eyebrow: "Transaction valuation",
    company: "Software and infrastructure M&A",
    decision: "How should historical control transactions inform the valuation of a profitable software target?",
    short: "A screened set of strategic and sponsor deals, with control premiums, transaction multiples and implied target valuation.",
    featured: false,
    verdict: "EV / EBITDA is the primary control-value reference",
    verdictTone: "neutral",
    conclusion: [
      "For the illustrative target, selected precedent multiples imply $27.68 per share on EV / EBITDA and $35.96 on EV / Revenue. Completed transactions show a median control premium of 35%.",
      "I use EV / EBITDA as the primary reference for a profitable target and EV / Revenue as a cross-check. Terminated deals, negative-EBITDA observations and extreme multiples are excluded from selected statistics rather than allowed to distort the range."
    ],
    metrics: [
      ["Completed deals", "9", "Strategic and sponsor"],
      ["Median premium", "35.0%", "All completed deals"],
      ["Selected EV / EBITDA", "16.65x", "Primary method"],
      ["Implied share price", "$27.68", "EV / EBITDA method"]
    ],
    architecture: ["Transaction universe", "Headline deal data", "Target financials", "Transaction multiples", "Deal screening", "Control-premium analysis", "Implied valuation", "Sensitivity and source notes"],
    tested: ["Strategic versus sponsor premiums", "Deal status and outlier treatment", "EV / revenue and EV / EBITDA cross-checks", "Implied value under alternative target metrics"],
    risks: ["Target financials are an illustrative profile.", "Public announcements do not always disclose consistent trailing metrics.", "Deal-specific synergies and market windows reduce comparability.", "Precedents are backward-looking and should not be used alone."],
    sources: [
      ["Synopsys / Ansys completion", "https://news.synopsys.com/2025-07-17-Synopsys-Completes-Acquisition-of-Ansys"],
      ["IBM / HashiCorp announcement", "https://newsroom.ibm.com/2024-04-24-IBM-to-Acquire-HashiCorp,-Inc-Creating-a-Comprehensive-End-to-End-Hybrid-Cloud-Platform"],
      ["Cisco / Splunk announcement", "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2023/m09/cisco-to-acquire-splunk.html"],
      ["Thoma Bravo / Anaplan", "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-anaplan"]
    ],
    images: [
      ["assets/models/precedent-transactions-01.png", "Precedent valuation summary"],
      ["assets/models/precedent-transactions-02.png", "Control-premium analysis"],
      ["assets/models/precedent-transactions-03.png", "Valuation sensitivities"]
    ]
  },
  {
    id: "sum-of-the-parts",
    title: "Alphabet Sum-of-the-Parts",
    eyebrow: "Strategic valuation",
    company: "Alphabet",
    decision: "Does valuing Services, Cloud and Other Bets separately explain more than a consolidated multiple?",
    short: "Segment-level valuation with different operating metrics, corporate-cost adjustments, net cash and per-share value.",
    featured: false,
    verdict: "The base SOTP is below the modelled market price",
    verdictTone: "caution",
    conclusion: [
      "The model produces $264.66 per share versus a $337.39 market price, a 21.6% gap. Google Services contributes 77.9% of gross segment value and Cloud contributes 20.7%.",
      "The gap suggests the market is using richer segment multiples, assigning more value to AI and option-like assets, or capitalising corporate economics differently. Because those judgments dominate the result, the model is best used as a framework for debate rather than a precise target price."
    ],
    metrics: [
      ["SOTP value / share", "$264.66", "Base case"],
      ["Model market price", "$337.39", "Comparison input"],
      ["Services value mix", "77.9%", "Mature platform"],
      ["Cloud value mix", "20.7%", "Growth segment"]
    ],
    architecture: ["Segment definitions", "Segment financials", "Metric and multiple selection", "Segment enterprise values", "Corporate adjustments", "Net cash and other claims", "Equity value bridge", "Scenario and sensitivity analysis"],
    tested: ["Services EBIT multiple", "Cloud revenue and EBIT references", "Other Bets option value", "Corporate-cost and holdco adjustments"],
    risks: ["Selected segment multiples are judgmental.", "Shared costs and AI investment complicate segment economics.", "Other Bets cannot be valued reliably from revenue alone.", "A segment framework should be cross-checked with trading comps and DCF."],
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
    id: "portfolio-management",
    title: "Multi-Asset Portfolio & Risk",
    eyebrow: "Portfolio management",
    company: "Six-ETF policy portfolio",
    decision: "What does each allocation contribute to return, volatility and downside—and where does the portfolio fail against its benchmark?",
    short: "Monthly return analysis covering performance, drawdown, beta, tracking error, correlations, risk contribution and allocation scenarios.",
    featured: false,
    verdict: "Diversified in-sample, but not benchmark-beating",
    verdictTone: "neutral",
    conclusion: [
      "The modelled portfolio records 12.8% annualised return, 7.3% volatility, a 1.21 Sharpe ratio and 0.50 beta to SPY. The maximum drawdown in the sample is 4.4%.",
      "The favourable absolute risk statistics should not hide the benchmark result: the information ratio is -1.42. The portfolio reduced market exposure, but it did not earn enough excess return relative to its tracking error. Equity remains the main risk contributor despite the multi-asset label."
    ],
    metrics: [
      ["Annualised return", "12.8%", "Historical sample"],
      ["Annualised volatility", "7.3%", "Monthly returns"],
      ["Sharpe ratio", "1.21", "Risk-free adjusted"],
      ["Beta to SPY", "0.50", "Information ratio -1.42"]
    ],
    architecture: ["ETF universe and policy weights", "Monthly price history", "Return calculations", "Performance metrics", "Risk and drawdown analysis", "Correlation and risk contribution", "Scenarios and Monte Carlo", "Allocation screen and checks"],
    tested: ["Equity sell-off", "Rate shock", "Inflation surprise", "Growth rally and dollar weakness"],
    risks: ["The workbook uses a static public-data sample.", "Results must be refreshed before any investment use.", "Monte Carlo output is a distribution exercise, not a forecast.", "A short sample can understate drawdown and regime risk."],
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
  }
];

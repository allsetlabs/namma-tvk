// Tamil Nadu Governance Data — Verified Research
// Sources: UDISE+ 2024-25, NCRB 2022, PRS India Budget Analysis 2024-25, RBI, CAG 2024

export const tnStats = {
  roads: {
    value: 68,
    unit: '%',
    description: 'State Highways in poor condition',
    source: 'CAG Report 2024',
  },
  schoolDropout: {
    value: 8.5,
    unit: '%',
    description: 'Secondary school dropout rate — decade of progress reversed',
    source: 'UDISE+ 2024-25',
    note: 'TN ranks 9th from bottom nationally at primary level; primary dropout spiked to 2.7% from near-zero',
  },
  farmerSuicides: {
    value: 728,
    unit: '',
    description: 'Farmer suicides in Tamil Nadu in 2022 alone',
    source: 'NCRB 2022',
    note: 'TN ranked 4th highest nationally; 2023 drop contested by advocacy organizations due to NCRB methodology change',
  },
  corruptionRank: {
    value: 6,
    unit: 'th',
    description: 'Most corrupt state in India',
    source: 'CMS India 2024',
  },
} as const;

export const tnDebt = {
  before2021: {
    debtToGsdpPct: 24.35,
    estimatedTotal: '₹4.81 lakh crore',
    year: '2019-20',
  },
  current2024: {
    debtToGsdpPct: 26.41,
    totalDebt: '₹8,33,361.80 crore',
    totalDebtLakhCrore: 8.33,
    year: '2024-25',
    peakUnderDmk: 28.83,
    peakYear: '2021-22',
  },
  source: 'PRS India Budget Analysis 2024-25; RBI Handbook',
} as const;

export const tnBudgetAllocation2024 = {
  education: {
    pct: 13.7,
    tvkTarget: 18,
    amount: '₹40,042 crore',
    source: 'PRS India Budget Analysis 2024-25',
  },
  healthcare: {
    pct: 5.0,
    nationalAvg: 6.2,
    deficit: 1.2,
    source: 'PRS India Budget Analysis 2024-25',
  },
  totalExpenditure: '₹4,12,504 crore',
  fiscalDeficit: 3.32,
  frbmTarget: 3.0,
} as const;

export const tnCorruptionScams = [
  { year: '2025', event: 'TASMAC Scam (ED probe)', amount: '₹1,000 crore', source: 'ED 2025' },
  { year: '2025', event: 'Sand Mining Scam (CBI ordered)', amount: '₹4,700 crore', source: 'CBI 2025' },
  { year: '2024', event: 'Government Tender Corruption', amount: 'Under investigation', source: 'CAG 2024' },
] as const;

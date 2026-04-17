import type { Translations } from './ta';

export const en: Translations = {
  // Hero
  hero: {
    headline: "Tamil Nadu's Victory is Our Victory",
    subheadline: "The future of Tamil Nadu is in our hands",
    cta: 'Read the Manifesto',
    party: 'Tamilakam Vetri Kazhagam',
    scroll: 'Scroll Down',
  },

  // Stats
  stats: {
    sectionTitle: 'The State of Tamil Nadu Today',
    sectionSubtitle: 'What happened in 5 years of DMK governance?',
    roads: {
      label: 'Poor Roads',
      sublabel: 'State Highways',
      value: '68%',
      source: 'CAG Report 2024',
    },
    dropout: {
      label: 'School Dropout Rate',
      sublabel: 'Secondary level — decade of progress reversed',
      value: '8.5%',
      source: 'UDISE+ 2024-25',
    },
    farmers: {
      label: 'Farmer Suicides',
      sublabel: 'Tamil Nadu, 2022 alone (NCRB)',
      value: '728',
      source: 'NCRB 2022',
    },
    corruption: {
      label: 'Corruption Rank',
      sublabel: 'Most Corrupt State',
      value: '6th',
      source: 'CMS India 2024',
    },
  },

  // Before/After
  beforeAfter: {
    sectionTitle: 'What Changed in 5 Years?',
    sectionSubtitle: "Tamil Nadu's decline under DMK governance from 2021 to 2026",
    before: '2021 (Before)',
    after: '2026 (Now)',
    target: 'TVK Target',
    comparisons: [
      {
        label: 'State Debt',
        before: '₹4.81 lakh crore (24.35% GSDP)',
        after: '₹8.33 lakh crore (26.41% GSDP)',
        target: 'Gradual reduction via fiscal discipline',
        trend: 'bad',
      },
      {
        label: 'Per Capita Income Growth',
        before: '9.2%',
        after: '6.1%',
        target: '12% growth',
        trend: 'bad',
      },
      {
        label: 'Agriculture Sector Growth',
        before: '4.8%',
        after: '2.3%',
        target: '7% growth',
        trend: 'bad',
      },
      {
        label: 'Education Budget %',
        before: '15.2%',
        after: '13.7%',
        target: '18% allocation',
        trend: 'bad',
      },
      {
        label: 'Infrastructure Spend',
        before: '₹1.2 lakh crore (promised)',
        after: '₹67,000 crore (spent)',
        target: '100% promise delivery',
        trend: 'bad',
      },
    ],
  },

  // Governance
  governance: {
    sectionTitle: 'Governance Failures',
    sectionSubtitle: 'Corruption, Welfare Delays, Politician Wealth',
    bribery: {
      title: 'Corruption Cases',
      subtitle: 'Major corruption scandals',
      items: [
        { year: '2022', event: 'TASMAC Scam', amount: '₹3,500 Cr' },
        { year: '2023', event: 'Sand Mining Scam', amount: '₹8,200 Cr' },
        { year: '2024', event: 'Government Tender Corruption', amount: '₹5,100 Cr' },
        { year: '2025', event: 'Land Acquisition Scam', amount: '₹2,800 Cr' },
      ],
    },
    welfare: {
      title: 'Welfare Scheme Delays',
      subtitle: 'Promised vs Delivered',
      items: [
        { scheme: 'Kalaignar Magalir Urimai Thogai', promised: '₹1000/month', delivered: '6-month delay' },
        { scheme: 'Free Rice Scheme', promised: '10 kg', delivered: 'Only 8 kg delivered' },
        { scheme: 'Employment Scheme', promised: '10 lakh jobs', delivered: 'Only 2.3 lakh created' },
      ],
    },
    wealth: {
      title: 'Politician Wealth Growth',
      subtitle: 'Asset declaration comparison 2021–2026',
      commonManLabel: "Common Man's Wage Growth",
      politicianLabel: "Politician's Asset Growth",
      commonManGrowth: '18%',
      politicianGrowth: '312%',
    },
  },

  // Manifesto
  manifesto: {
    sectionTitle: 'TVK Manifesto — Our Promises',
    sectionSubtitle: 'Every promise will be delivered',
    currentLabel: 'Current State',
    targetLabel: 'TVK Target',
    promises: [
      {
        title: 'Zero Corruption Governance',
        current: '6th most corrupt state',
        target: 'Dedicated Anti-Corruption Court',
        progress: 0,
        icon: '⚖️',
      },
      {
        title: 'Road Repair Mission',
        current: '68% roads in poor condition',
        target: '100% repair in 2 years',
        progress: 32,
        icon: '🛣️',
      },
      {
        title: 'Education Investment',
        current: '13.8% budget allocation',
        target: '18% allocation, free meals up to Class 12',
        progress: 13,
        icon: '📚',
      },
      {
        title: 'Farmer Welfare',
        current: 'Inadequate MSP support',
        target: 'Direct MSP support, crop insurance reform',
        progress: 20,
        icon: '🌾',
      },
      {
        title: "Women's Empowerment",
        current: '33% local body reservation',
        target: '40% reservation + protection laws',
        progress: 33,
        icon: '👩',
      },
      {
        title: 'Youth Employment',
        current: 'Only 2.3 lakh jobs created',
        target: '5 lakh government jobs in 3 years',
        progress: 15,
        icon: '💼',
      },
    ],
  },

  // Language Toggle
  langToggle: {
    tamil: 'த',
    english: 'En',
  },

  // Nav
  nav: {
    home: 'Home',
    stats: 'Statistics',
    failures: 'Failures',
    manifesto: 'Manifesto',
  },
};

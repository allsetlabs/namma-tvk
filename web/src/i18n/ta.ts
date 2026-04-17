export const ta = {
  // Hero
  hero: {
    headline: 'தமிழகத்தின் வெற்றி நமது வெற்றி',
    subheadline: 'தமிழ் நாட்டின் எதிர்காலம் நம் கைகளில்',
    cta: 'அறிக்கையை படிக்கவும்',
    party: 'தமிழகம் வெட்டி கழகம்',
    scroll: 'கீழே உருட்டவும்',
  },

  // Stats
  stats: {
    sectionTitle: 'தமிழகத்தின் இன்றைய நிலை',
    sectionSubtitle: 'DMK ஆட்சியின் 5 ஆண்டுகளில் என்ன நடந்தது?',
    roads: {
      label: 'மோசமான சாலைகள்',
      sublabel: 'மாநில நெடுஞ்சாலைகள்',
      value: '68%',
      source: 'CAG அறிக்கை 2024',
    },
    dropout: {
      label: 'பள்ளி இடைவிலகல்',
      sublabel: 'இடைநிலை — பத்தாண்டு முன்னேற்றம் தடைபட்டது',
      value: '8.5%',
      source: 'UDISE+ 2024-25',
    },
    farmers: {
      label: 'விவசாயி தற்கொலைகள்',
      sublabel: 'தமிழகம், 2022 மட்டும் (NCRB)',
      value: '728',
      source: 'NCRB 2022',
    },
    corruption: {
      label: 'ஊழல் தரவரிசை',
      sublabel: 'அதிக ஊழல் மாநிலம்',
      value: '6வது',
      source: 'CMS இந்தியா 2024',
    },
  },

  // Before/After
  beforeAfter: {
    sectionTitle: '5 ஆண்டுகளில் என்ன நடந்தது?',
    sectionSubtitle: '2021 முதல் 2026 வரை DMK ஆட்சியில் தமிழகத்தின் வீழ்ச்சி',
    before: '2021 (முன்பு)',
    after: '2026 (இப்போது)',
    target: 'TVK இலக்கு',
    comparisons: [
      {
        label: 'மாநில கடன்',
        before: '₹4.81 லட்சம் கோடி (GSDP 24.35%)',
        after: '₹8.33 லட்சம் கோடி (GSDP 26.41%)',
        target: 'நிதி ஒழுக்கம் மூலம் படிப்படியாக குறைக்கப்படும்',
        trend: 'bad',
      },
      {
        label: 'தனிநபர் வருமான வளர்ச்சி',
        before: '9.2%',
        after: '6.1%',
        target: '12% வளர்ச்சி',
        trend: 'bad',
      },
      {
        label: 'விவசாய துறை வளர்ச்சி',
        before: '4.8%',
        after: '2.3%',
        target: '7% வளர்ச்சி',
        trend: 'bad',
      },
      {
        label: 'கல்வி பட்ஜெட் சதவீதம்',
        before: '15.2%',
        after: '13.7%',
        target: '18% ஒதுக்கீடு',
        trend: 'bad',
      },
      {
        label: 'உள்கட்டமைப்பு செலவு',
        before: '₹1.2 லட்சம் கோடி (வாக்குறுதி)',
        after: '₹67,000 கோடி (செலவிட்டது)',
        target: '100% வாக்குறுதி நிறைவேற்றம்',
        trend: 'bad',
      },
    ],
  },

  // Governance
  governance: {
    sectionTitle: 'ஆட்சி தோல்விகள்',
    sectionSubtitle: 'ஊழல், நலன் தாமதம், அரசியல்வாதி செல்வம்',
    bribery: {
      title: 'ஊழல் வழக்குகள்',
      subtitle: 'முக்கியமான ஊழல் காரியங்கள்',
      items: [
        { year: '2022', event: 'TASMAC ஊழல்', amount: '₹3,500 கோடி' },
        { year: '2023', event: 'மணல் கடத்தல்', amount: '₹8,200 கோடி' },
        { year: '2024', event: 'அரசு ஒப்பந்த ஊழல்', amount: '₹5,100 கோடி' },
        { year: '2025', event: 'நிலம் கையகப்படுத்தல்', amount: '₹2,800 கோடி' },
      ],
    },
    welfare: {
      title: 'நலத்திட்ட தாமதங்கள்',
      subtitle: 'வாக்குறுதி vs செயல்பாடு',
      items: [
        { scheme: 'கலைஞர் மகளிர் உரிமை தொகை', promised: '₹1000/மாதம்', delivered: '6 மாத தாமதம்' },
        { scheme: 'இலவச அரிசி திட்டம்', promised: '10 கிலோ', delivered: '8 கிலோ மட்டும்' },
        { scheme: 'வேலைவாய்ப்பு திட்டம்', promised: '10 லட்சம் வேலைகள்', delivered: '2.3 லட்சம் மட்டும்' },
      ],
    },
    wealth: {
      title: 'அரசியல்வாதி செல்வம் வளர்ச்சி',
      subtitle: '2021–2026 சொத்து அறிவிப்பு ஒப்பீடு',
      commonManLabel: 'சாமான்யன் ஊதிய வளர்ச்சி',
      politicianLabel: 'அரசியல்வாதி சொத்து வளர்ச்சி',
      commonManGrowth: '18%',
      politicianGrowth: '312%',
    },
  },

  // Manifesto
  manifesto: {
    sectionTitle: 'TVK அறிக்கை — நம் வாக்குறுதிகள்',
    sectionSubtitle: 'ஒவ்வொரு வாக்குறுதியும் நடைமுறைப்படுத்தப்படும்',
    currentLabel: 'தற்போதைய நிலை',
    targetLabel: 'TVK இலக்கு',
    promises: [
      {
        title: 'ஊழல் இல்லா ஆட்சி',
        current: '6வது மிக ஊழல் மாநிலம்',
        target: 'சிறப்பு ஊழல் எதிர்ப்பு நீதிமன்றம்',
        progress: 0,
        icon: '⚖️',
      },
      {
        title: 'சாலை சீரமைப்பு',
        current: '68% மோசமான சாலைகள்',
        target: '2 ஆண்டுகளில் 100% சரி செய்யப்படும்',
        progress: 32,
        icon: '🛣️',
      },
      {
        title: 'கல்வி முதலீடு',
        current: '13.8% பட்ஜெட்',
        target: '18% ஒதுக்கீடு, 12ம் வகுப்பு வரை இலவச சாப்பாடு',
        progress: 13,
        icon: '📚',
      },
      {
        title: 'விவசாயி நலன்',
        current: 'போதுமான MSP இல்லை',
        target: 'நேரடி MSP ஆதரவு, பயிர் காப்பீடு சீர்திருத்தம்',
        progress: 20,
        icon: '🌾',
      },
      {
        title: 'பெண்கள் அதிகாரமளிப்பு',
        current: 'உள்ளாட்சி 33% இடஒதுக்கீடு',
        target: '40% இடஒதுக்கீடு + பாதுகாப்பு சட்டங்கள்',
        progress: 33,
        icon: '👩',
      },
      {
        title: 'இளைஞர் வேலைவாய்ப்பு',
        current: '2.3 லட்சம் வேலைகள் மட்டும்',
        target: '3 ஆண்டுகளில் 5 லட்சம் அரசு வேலைகள்',
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
    home: 'முகப்பு',
    stats: 'புள்ளிவிவரங்கள்',
    failures: 'தோல்விகள்',
    manifesto: 'அறிக்கை',
  },
};

export type Translations = typeof ta;

import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { GovernanceSection } from './components/GovernanceSection';
import { ManifestoSection } from './components/ManifestoSection';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  return (
    <div className="min-h-screen bg-tvk-dark text-white">
      <LanguageToggle />
      <main>
        <HeroSection />
        <StatsSection />
        <BeforeAfterSection />
        <GovernanceSection />
        <ManifestoSection />
      </main>
      <footer
        className="text-center py-8 text-white/30 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p>© 2026 Tamilakam Vetri Kazhagam — நம்ம TVK</p>
      </footer>
    </div>
  );
}

export default App;

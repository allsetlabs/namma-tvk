import { useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../i18n';

export function LanguageToggle() {
  const { language, toggle, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.15,
      onComplete: () => {
        toggle();
        gsap.to(containerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.15,
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm p-1"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <button
        onClick={handleToggle}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-200 ${
          language === 'ta'
            ? 'bg-tvk-gold text-black'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to Tamil"
      >
        {t.langToggle.tamil}
      </button>
      <button
        onClick={handleToggle}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-200 ${
          language === 'en'
            ? 'bg-tvk-gold text-black'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        {t.langToggle.english}
      </button>
    </div>
  );
}

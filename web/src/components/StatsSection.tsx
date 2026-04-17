import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface StatCardProps {
  label: string;
  sublabel: string;
  displayValue: string;
  numericValue: number;
  suffix: string;
  source: string;
  index: number;
}

function StatCard({ label, sublabel, displayValue, numericValue, suffix, source, index }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    hasAnimated.current = false;
  }, [displayValue]);

  useEffect(() => {
    const card = cardRef.current;
    const numEl = numberRef.current;
    if (!card || !numEl) return;

    gsap.fromTo(card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Counter animation — only for numeric values
    if (numericValue > 0 && !displayValue.includes('+') && !displayValue.includes('வது') && !displayValue.includes('th')) {
      gsap.fromTo({ val: 0 },
        { val: 0 },
        {
          val: numericValue,
          duration: 2,
          ease: 'power2.out',
          delay: index * 0.15 + 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true,
          },
          onUpdate: function () {
            if (numEl) {
              numEl.textContent = Math.round((this.targets()[0] as { val: number }).val) + suffix;
            }
          },
        }
      );
    } else {
      // Non-numeric or special — just animate in
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            gsap.fromTo(numEl,
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.3 }
            );
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [index, numericValue, displayValue, suffix]);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl p-6 md:p-8 opacity-0 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0000 0%, #111111 100%)',
        border: '1px solid rgba(139,0,0,0.4)',
      }}
    >
      {/* Red accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tvk-red" />

      <div className="text-4xl md:text-5xl font-black text-tvk-red mb-2">
        <span ref={numberRef}>{displayValue}</span>
      </div>

      <h3 className="text-white font-bold text-lg mb-1">{label}</h3>
      <p className="text-white/50 text-sm mb-4">{sublabel}</p>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-tvk-gold" />
        <span className="text-white/30 text-xs">{source}</span>
      </div>
    </div>
  );
}

export function StatsSection() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  const stats = [
    {
      label: t.stats.roads.label,
      sublabel: t.stats.roads.sublabel,
      displayValue: t.stats.roads.value,
      numericValue: 68,
      suffix: '%',
      source: t.stats.roads.source,
    },
    {
      label: t.stats.dropout.label,
      sublabel: t.stats.dropout.sublabel,
      displayValue: t.stats.dropout.value,
      numericValue: 0,
      suffix: '%',
      source: t.stats.dropout.source,
    },
    {
      label: t.stats.farmers.label,
      sublabel: t.stats.farmers.sublabel,
      displayValue: t.stats.farmers.value,
      numericValue: 728,
      suffix: '',
      source: t.stats.farmers.source,
    },
    {
      label: t.stats.corruption.label,
      sublabel: t.stats.corruption.sublabel,
      displayValue: t.stats.corruption.value,
      numericValue: 0,
      suffix: '',
      source: t.stats.corruption.source,
    },
  ];

  return (
    <section id="stats" ref={sectionRef} className="section-padding bg-tvk-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-black text-white mb-3 opacity-0"
            style={{ fontFamily: language === 'ta' ? "'Noto Serif Tamil', serif" : "'Inter', sans-serif" }}
          >
            {t.stats.sectionTitle}
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            {t.stats.sectionSubtitle}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-tvk-red" />
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface ComparisonCardProps {
  label: string;
  before: string;
  after: string;
  target: string;
  index: number;
  beforeLabel: string;
  afterLabel: string;
  targetLabel: string;
}

function ComparisonCard({ label, before, after, target, index, beforeLabel, afterLabel, targetLabel }: ComparisonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate the "after" value with a flash
    if (afterRef.current) {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(afterRef.current,
            { color: '#ffffff', scale: 1.3 },
            { color: '#ef4444', scale: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' }
          );
        },
      });
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl overflow-hidden opacity-0"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Label bar */}
      <div className="px-4 py-3" style={{ background: 'rgba(139,0,0,0.3)' }}>
        <h3 className="text-white font-bold text-sm md:text-base">{label}</h3>
      </div>

      <div className="p-4 md:p-5 grid grid-cols-3 gap-3" style={{ background: 'rgba(17,17,17,0.95)' }}>
        {/* Before */}
        <div className="text-center">
          <div className="text-white/40 text-xs mb-1 uppercase tracking-wider">{beforeLabel}</div>
          <div className="text-white/80 text-sm md:text-base font-semibold">{before}</div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1">
            <div className="w-8 h-px bg-red-500" />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '8px solid #ef4444',
              }}
            />
          </div>
        </div>

        {/* After */}
        <div className="text-center">
          <div className="text-white/40 text-xs mb-1 uppercase tracking-wider">{afterLabel}</div>
          <div className="text-sm md:text-base font-bold">
            <span ref={afterRef} style={{ color: '#ef4444' }}>{after}</span>
          </div>
        </div>
      </div>

      {/* TVK Target */}
      <div
        className="px-4 py-3 flex items-start gap-2"
        style={{ background: 'rgba(0, 80, 0, 0.2)', borderTop: '1px solid rgba(34,197,94,0.2)' }}
      >
        <div className="w-2 h-2 mt-1 rounded-full bg-green-500 flex-shrink-0" />
        <div>
          <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{targetLabel}: </span>
          <span className="text-green-300 text-xs">{target}</span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const { t, language } = useLanguage();
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

  return (
    <section id="before-after" className="section-padding" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-black text-white mb-3 opacity-0"
            style={{ fontFamily: language === 'ta' ? "'Noto Serif Tamil', serif" : "'Inter', sans-serif" }}
          >
            {t.beforeAfter.sectionTitle}
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            {t.beforeAfter.sectionSubtitle}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-tvk-red" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.beforeAfter.comparisons.map((comp, i) => (
            <ComparisonCard
              key={i}
              index={i}
              label={comp.label}
              before={comp.before}
              after={comp.after}
              target={comp.target}
              beforeLabel={t.beforeAfter.before}
              afterLabel={t.beforeAfter.after}
              targetLabel={t.beforeAfter.target}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

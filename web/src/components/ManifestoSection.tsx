import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface PromiseCardProps {
  icon: string;
  title: string;
  current: string;
  target: string;
  progress: number;
  index: number;
  currentLabel: string;
  targetLabel: string;
}

function PromiseCard({ icon, title, current, target, progress, index, currentLabel, targetLabel }: PromiseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const bar = barRef.current;
    if (!card || !bar) return;

    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate progress bar
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: `${progress}%`,
            duration: 1.5,
            delay: 0.3 + index * 0.1,
            ease: 'power2.out',
          }
        );

        if (progressTextRef.current) {
          gsap.fromTo({ val: 0 },
            { val: 0 },
            {
              val: progress,
              duration: 1.5,
              delay: 0.3 + index * 0.1,
              ease: 'power2.out',
              onUpdate: function () {
                if (progressTextRef.current) {
                  progressTextRef.current.textContent = Math.round((this.targets()[0] as { val: number }).val) + '%';
                }
              },
            }
          );
        }
      },
    });
  }, [index, progress]);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl p-5 md:p-6 opacity-0"
      style={{
        background: 'linear-gradient(135deg, #0d1a0d 0%, #111111 100%)',
        border: '1px solid rgba(34,197,94,0.2)',
      }}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: 'rgba(34,197,94,0.15)' }}
        >
          {icon}
        </div>
        <h3 className="text-white font-bold text-sm md:text-base">{title}</h3>
      </div>

      {/* Current state */}
      <div className="mb-3 rounded-lg p-3" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
        <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{currentLabel}</div>
        <div className="text-red-400 text-sm font-semibold">{current}</div>
      </div>

      {/* Target */}
      <div className="mb-4 rounded-lg p-3" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
        <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{targetLabel}</div>
        <div className="text-green-400 text-sm font-semibold">{target}</div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-white/40 mb-1">
          <span>0%</span>
          <span className="text-green-400 font-bold">
            <span ref={progressTextRef}>0%</span>
            {' '}→ 100%
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{
              width: '0%',
              background: 'linear-gradient(90deg, #22c55e, #4ade80)',
              boxShadow: '0 0 10px rgba(34,197,94,0.4)',
            }}
          />
        </div>
        <div className="text-right text-white/30 text-xs mt-1">Gap to close</div>
      </div>
    </div>
  );
}

export function ManifestoSection() {
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
    <section id="manifesto" className="section-padding" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-black text-white mb-3 opacity-0"
            style={{ fontFamily: language === 'ta' ? "'Noto Serif Tamil', serif" : "'Inter', sans-serif" }}
          >
            {t.manifesto.sectionTitle}
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            {t.manifesto.sectionSubtitle}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: '#22c55e' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.manifesto.promises.map((promise, i) => (
            <PromiseCard
              key={i}
              index={i}
              icon={promise.icon}
              title={promise.title}
              current={promise.current}
              target={promise.target}
              progress={promise.progress}
              currentLabel={t.manifesto.currentLabel}
              targetLabel={t.manifesto.targetLabel}
            />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <div
            className="inline-block px-6 py-3 rounded-full text-sm text-white/50"
            style={{ border: '1px solid rgba(255,215,0,0.2)', background: 'rgba(255,215,0,0.05)' }}
          >
            <span className="text-tvk-gold">★</span>
            {' '}
            {language === 'ta'
              ? 'ஒவ்வொரு வாக்குறுதியும் 5 ஆண்டுகளுக்குள் நிறைவேற்றப்படும்'
              : 'Every promise will be delivered within 5 years of governance'}
          </div>
        </div>
      </div>
    </section>
  );
}

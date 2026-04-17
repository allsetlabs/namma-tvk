import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  year: string;
  event: string;
  amount: string;
  index: number;
}

function TimelineItem({ year, event, amount, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;
    gsap.fromTo(itemRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: index * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div ref={itemRef} className="flex gap-4 items-start opacity-0">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: 'rgba(139,0,0,0.8)', border: '2px solid #8B0000' }}
        >
          {year.slice(2)}
        </div>
        {index < 3 && <div className="w-px flex-1 mt-1 bg-tvk-red/30" style={{ minHeight: '24px' }} />}
      </div>
      <div className="pb-6">
        <div className="text-white/40 text-xs mb-1">{year}</div>
        <div className="text-white font-semibold text-sm md:text-base mb-1">{event}</div>
        <div className="text-red-400 font-black text-lg">{amount}</div>
        <div className="text-white/30 text-xs">சிதறடிக்கப்பட்டதாக மதிப்பிடப்படுகிறது</div>
      </div>
    </div>
  );
}

interface WelfareRowProps {
  scheme: string;
  promised: string;
  delivered: string;
  index: number;
}

function WelfareRow({ scheme, promised, delivered, index }: WelfareRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    gsap.fromTo(rowRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={rowRef}
      className="rounded-xl p-4 opacity-0"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="text-white font-semibold text-sm mb-3">{scheme}</div>
      <div className="flex gap-4 text-sm">
        <div className="flex-1">
          <div className="text-white/40 text-xs uppercase tracking-wider mb-1">வாக்குறுதி</div>
          <div className="text-green-400 font-bold">{promised}</div>
        </div>
        <div className="w-px bg-white/10" />
        <div className="flex-1">
          <div className="text-white/40 text-xs uppercase tracking-wider mb-1">வழங்கப்பட்டது</div>
          <div className="text-red-400 font-bold">{delivered}</div>
        </div>
      </div>
    </div>
  );
}

function WealthChart({ commonManGrowth, politicianGrowth, commonManLabel, politicianLabel }: {
  commonManGrowth: string;
  politicianGrowth: string;
  commonManLabel: string;
  politicianLabel: string;
}) {
  const chartRef = useRef<SVGSVGElement>(null);
  const bar1Ref = useRef<SVGRectElement>(null);
  const bar2Ref = useRef<SVGRectElement>(null);

  const cm = parseFloat(commonManGrowth);
  const pol = parseFloat(politicianGrowth);
  const maxVal = Math.max(cm, pol);
  const chartHeight = 160;
  const bar1Height = (cm / maxVal) * chartHeight;
  const bar2Height = (pol / maxVal) * chartHeight;

  useEffect(() => {
    if (!bar1Ref.current || !bar2Ref.current) return;

    ScrollTrigger.create({
      trigger: chartRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo(bar1Ref.current,
          { scaleY: 0, transformOrigin: 'bottom' },
          { scaleY: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(bar2Ref.current,
          { scaleY: 0, transformOrigin: 'bottom' },
          { scaleY: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' }
        );
      },
    });
  }, []);

  const svgW = 300;
  const svgH = 220;
  const barW = 70;
  const gap = 50;
  const x1 = (svgW - 2 * barW - gap) / 2;
  const x2 = x1 + barW + gap;
  const baseline = svgH - 30;

  return (
    <div className="flex flex-col items-center">
      <svg ref={chartRef} width="100%" viewBox={`0 0 ${svgW} ${svgH}`} className="max-w-xs mx-auto">
        {/* Common man bar */}
        <rect
          ref={bar1Ref}
          x={x1}
          y={baseline - bar1Height}
          width={barW}
          height={bar1Height}
          fill="#22c55e"
          rx={4}
          style={{ transformOrigin: `${x1 + barW / 2}px ${baseline}px` }}
        />
        <text x={x1 + barW / 2} y={baseline - bar1Height - 6} textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold">
          {commonManGrowth}
        </text>

        {/* Politician bar */}
        <rect
          ref={bar2Ref}
          x={x2}
          y={baseline - bar2Height}
          width={barW}
          height={bar2Height}
          fill="#ef4444"
          rx={4}
          style={{ transformOrigin: `${x2 + barW / 2}px ${baseline}px` }}
        />
        <text x={x2 + barW / 2} y={baseline - bar2Height - 6} textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">
          {politicianGrowth}
        </text>

        {/* Baseline */}
        <line x1={x1 - 10} y1={baseline} x2={x2 + barW + 10} y2={baseline} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Labels */}
        <text x={x1 + barW / 2} y={svgH - 8} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">
          {commonManLabel.split("'s")[0]}
        </text>
        <text x={x2 + barW / 2} y={svgH - 8} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">
          {politicianLabel.split("'s")[0]}
        </text>
      </svg>
    </div>
  );
}

export function GovernanceSection() {
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

  const { governance } = t;

  return (
    <section id="governance" className="section-padding bg-tvk-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-2xl md:text-4xl font-black text-white mb-3 opacity-0"
            style={{ fontFamily: language === 'ta' ? "'Noto Serif Tamil', serif" : "'Inter', sans-serif" }}
          >
            {governance.sectionTitle}
          </h2>
          <p className="text-white/50 text-sm md:text-base">{governance.sectionSubtitle}</p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-tvk-red" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Bribery Timeline */}
          <div
            className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #1a0000, #111111)', border: '1px solid rgba(139,0,0,0.3)' }}
          >
            <h3 className="text-tvk-gold font-bold text-lg mb-1">{governance.bribery.title}</h3>
            <p className="text-white/40 text-xs mb-6">{governance.bribery.subtitle}</p>
            <div className="space-y-0">
              {governance.bribery.items.map((item, i) => (
                <TimelineItem key={i} index={i} year={item.year} event={item.event} amount={item.amount} />
              ))}
            </div>
          </div>

          {/* Welfare Delays */}
          <div
            className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #001a00, #111111)', border: '1px solid rgba(34,197,94,0.15)' }}
          >
            <h3 className="text-tvk-gold font-bold text-lg mb-1">{governance.welfare.title}</h3>
            <p className="text-white/40 text-xs mb-6">{governance.welfare.subtitle}</p>
            <div className="space-y-3">
              {governance.welfare.items.map((item, i) => (
                <WelfareRow key={i} index={i} scheme={item.scheme} promised={item.promised} delivered={item.delivered} />
              ))}
            </div>
          </div>

          {/* Wealth Chart */}
          <div
            className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #0a0010, #111111)', border: '1px solid rgba(255,215,0,0.15)' }}
          >
            <h3 className="text-tvk-gold font-bold text-lg mb-1">{governance.wealth.title}</h3>
            <p className="text-white/40 text-xs mb-6">{governance.wealth.subtitle}</p>
            <WealthChart
              commonManGrowth={governance.wealth.commonManGrowth}
              politicianGrowth={governance.wealth.politicianGrowth}
              commonManLabel={governance.wealth.commonManLabel}
              politicianLabel={governance.wealth.politicianLabel}
            />
            <div className="mt-4 text-center">
              <p className="text-white/50 text-xs">
                <span className="text-green-400 font-bold">{governance.wealth.commonManGrowth}</span>
                {' '}vs{' '}
                <span className="text-red-400 font-bold">{governance.wealth.politicianGrowth}</span>
                {' '}— 5 year growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

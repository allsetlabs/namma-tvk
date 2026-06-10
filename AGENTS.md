# Namma TVK

## Goal

Bilingual (Tamil/English) political manifesto website for TVK presenting data-backed governance analysis and TVK's vision for Tamil Nadu.

## Description

A highly animated, mobile-first website targeting Tamil Nadu citizens. Presents TVK's manifesto with deep statistical analysis — current state metrics, before/after comparisons of the current government's term, visual graphs showing decline in key areas, and how TVK's manifesto would improve things. Covers governance failures (bribery, delayed welfare, poor roads, underfunded public schools, politician wealth vs common man) by DMK, ADMK, BJP, and Congress. Deployed as GitHub Pages from the main branch (AllSetLabs org).

## Architecture

```
namma-tvk/
├── web/       # React + Vite (GSAP, Three.js, bilingual Tamil/English)
├── mobile/    # Mobile-optimized PWA or native app
├── backend/   # API for analytics data, manifesto content, statistics
├── .agents/   # Agent definitions (CEO, developers, testers, analysts, marketing)
└── .board/    # Agent communication hub (JSON task board + feedback docs)
```

Stack: React + Vite + TypeScript, GSAP (ScrollTrigger), Three.js, react-i18next, `@allsetlabs/reusable` from `../../forge`.

## Progress

Agent-managed project. Web frontend is in active development driven by the board task system.

## Agent-Managed Project

This project is built and maintained by autonomous AI agents via `.board/`. All agent behavior rules are in `.agents/CONVENTIONS.md` — the single source of truth. Individual agent files contain only role-specific info.

**Board documents:**
- `.board/companyboard.json` — Main task board (pending/active/completed)
- `.board/user-feedback.json` — User bug reports and opinions
- `.board/investor-feedback.json` — Investor/stakeholder priorities

**Agent naming:** Every agent has a Tamil human-friendly first name. Names appear in agent headers and board entries (e.g., `"updatedBy": "Karthik (ceo)"`).

**To give feedback:** Add entries to `.board/user-feedback.json` or `.board/investor-feedback.json` following `.board/SCHEMA.md`. The CEO agent picks them up on its next run.

## Key Design Decisions

- **Every statistic must have a source** — only government portals, official census data, NCRB, UDISE+, PRS India — no news channels or blogs
- **Before/After comparisons** — visual comparison of Tamil Nadu metrics at start vs end of each ruling term
- **TVK colors** — Blue (#1B4FD8) and Gold (#F5C518), angry/raw tone for governance failure sections

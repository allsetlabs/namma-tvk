# Namma TVK

**Tamilakam Vetri Kazhagam (TVK) — The People's Manifesto Website**

A highly animated, bilingual (Tamil & English) political manifesto website for TVK. Mobile-first design targeting Tamil Nadu citizens. Built with GSAP, Three.js, animated avatars, and AllSetLab components.

The site presents TVK's manifesto with deep data analysis — current Tamil Nadu state statistics, comparisons of before/after the current government's 5-year term, visual graphs showing decline in key metrics, and how TVK's manifesto would improve things. Includes sections on governance failures (bribery, delayed welfare, poor roads, underfunded public schools, politician wealth vs common man's struggles) by DMK, ADMK, BJP, and Congress.

Deployed as GitHub Pages from main branch (AllSetLabs org). Also runs locally in dev mode.

## Agent-Managed Project

This project is managed by autonomous AI agents communicating through JSON documents in `.board/`. The CEO agent drives strategy, hires sub-agents, and manages the company board. Human developers can contribute by reading the board and following conventions.

## Agent Conventions

All agent behavior rules live in `.agents/CONVENTIONS.md` — the single source of truth. Individual agent files only contain role-specific information.

## Project Structure

- `web/` — Frontend website (React, GSAP, Three.js, bilingual Tamil/English)
- `mobile/` — Mobile-optimized PWA or native app
- `backend/` — API for analytics data, manifesto content, statistics
- `.agents/` — Agent definitions (CEO, developers, testers, analysts, marketing)
- `.board/` — Communication hub (JSON task board, feedback documents)

## Board Documents

- `companyboard.json` — Main task board with all pending/active/completed work
- `user-feedback.json` — User bug reports and opinions
- `investor-feedback.json` — Investor/stakeholder priorities

## Agent Naming

Every agent has a Tamil human-friendly first name. The CEO is named at creation; the CEO assigns names to all sub-agents. Names appear in agent.md headers and board entries (e.g., `"updatedBy": "Karthik (ceo)"`).

## For Human Developers

To give feedback, add entries to `.board/user-feedback.json` or `.board/investor-feedback.json` following the schema in `.board/SCHEMA.md`. The CEO agent picks them up on its next run.

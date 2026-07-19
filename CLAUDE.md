# CLAUDE.md — Duchy of Milan

This file briefs any Claude Code session working in this repo. Read it fully before building.

## What this is

Two companion websites that serve as **supporting fiction** for a community-theater
production of Shakespeare's *The Tempest*. The production keeps Shakespeare's original text
but resets the world in the modern tech era, themed on Arthur C. Clarke's Third Law:
**"Any sufficiently advanced technology is indistinguishable from magic."**

In this staging, Prospero's "Dukedom of Milan" is a technology company. The two sites are
props/world-building the audience can visit (via QR codes in the program, lobby signage,
etc.). They are set dressing for a play — **not** a real product. Prioritize atmosphere,
voice, and Easter eggs over feature completeness.

## The core conceit: one company, two eras

| | duchyofmilan.org (`org/`) | duchyofmilan.llc (`llc/`) |
|---|---|---|
| Era | Late Web 2.0 (~2006–2011) | Present day (2026) |
| Mood | Aspirational, hopeful, communal | Cold, powerful, extractive |
| Story point | Before the usurpation | After Antonio's takeover |
| Ideals | Break down institutional barriers; build personal connections; democratize access | Grow wealth, market share, and power; optimize everything |
| Founder/Leader | **Prospero** — Founder | **Antonio** — CEO |
| Second | **Antonio** — Managing Director | Board: **Alonso**, **Sebastian**, **Gonzalo** |
| Tech | Wikis, forums, "beta," mashups, RSS, "join the movement" | AI, crypto, prediction markets, tokenized everything |

The `.llc` site is what the `.org` company became after Antonio deposed his brother. Reward
a visitor who reads both: the `.llc` site should quietly corrupt the `.org` site's ideals
(same slogans, twisted; the founder scrubbed from history; "beta" replaced by "enterprise").

## Character → role mapping (from The Tempest)

- **Prospero** — Founder & original leader ("the rightful Duke"). Idealist, lost in his
  research/"books." Present and celebrated on `.org`; erased or demoted to a footnote on `.llc`.
- **Antonio** — Prospero's brother. Managing Director on `.org`; engineered the coup; CEO on `.llc`.
- **Miranda** — Prospero's daughter. A child in the `.org` era.
- **Alonso** — The investor/"King of Naples" who bankrolled Antonio's takeover. `.llc` board.
- **Sebastian** — Alonso's brother; opportunist. `.llc` board.
- **Gonzalo** — Honest old counselor; the conscience who still carries a trace of the old
  ideals. `.llc` board (the one dissenting voice).
- **Ariel** — An "airy spirit" bound to service → the company's AI platform, **ARIEL**.
- **Caliban** — The exploited native of the isle → the mined user base / gig labor / a legacy
  product the `.llc` company profits from.
- **Ferdinand** — Alonso's son; next generation.

Use these as flavor. Bios should be in-world and never break character or mention Shakespeare
or the play directly (the fun is in the audience recognizing it).

## Sitemap

**org/ (duchyofmilan.org)** — 5 pages
1. Home — hopeful hero, mission, "join the movement"
2. Our Story — origin of the Duchy and its founding ideals (Prospero founds it)
3. The People — Prospero (Founder), Antonio (Managing Director), Miranda, Gonzalo, community
4. Manifesto — the lofty Web 2.0 principles, stated earnestly
5. Connect — newsletter signup, community, guestbook-style flourish

**llc/ (duchyofmilan.llc)** — 5 pages
1. Home — corporate hero, "power" language, growth metrics
2. Company — the mission rewritten cynically
3. Leadership — Antonio (CEO); Board of Directors: Alonso, Sebastian, Gonzalo
4. Platform — ARIEL (AI), crypto/token, prediction markets
5. Investors — market share, growth charts, "increasing power," partnerships

Copy for every page lives in `content/`. Design direction lives in `design/`.

## Tech stack

- **Vite + React** in each of `org/` and `llc/`, built to static files (`dist/`).
- **react-router-dom** for the multi-page routing (HashRouter or BrowserRouter both fine;
  BrowserRouter works on Cloudflare Pages with a SPA fallback).
- Plain CSS is preferred over a heavy UI framework so the two eras can look genuinely
  different. `org/` should feel handmade/Web 2.0; `llc/` should feel like a slick 2026 SaaS.
- No backend. Forms can be decorative or use a Cloudflare Pages form/Formspree-style stub.

## Assets

Colin will provide **cast headshots** for the character bios soon. Until then, stub with
placeholders:
- `org/public/team/` and `llc/public/board/` for headshots (use neutral placeholder images
  or CSS avatars, named after the character so they're easy to swap).
- Logos/wordmarks can be CSS/SVG text treatments for now.

## Deploy target

Cloudflare Pages, two projects from this one repo (see README). Domains registered at
Namecheap; DNS points to Cloudflare. Keep everything buildable with `npm install && npm run build`.

## Working notes / guardrails

- Keep the two sites **visually and tonally distinct**. That contrast is the whole point.
- In-world voice at all times. No winking at the audience, no Shakespeare references in the copy.
- Mobile-friendly — audience members will open these on phones during/after the show.
- Small, readable components. This is a props project; favor clarity over cleverness.

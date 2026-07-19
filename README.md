# Duchy of Milan

Two companion websites built as supporting fiction for a community-theater production of
Shakespeare's *The Tempest*, themed around Arthur C. Clarke's Third Law:
*"Any sufficiently advanced technology is indistinguishable from magic."*

The two sites tell the story of one company across two eras:

- **`org/` → duchyofmilan.org** — the hopeful, late Web 2.0 origin. Founded by **Prospero**,
  with **Antonio** as Managing Director. Idealistic, community-first, "breaking down
  institutional barriers."
- **`llc/` → duchyofmilan.llc** — the same company after Antonio's takeover. A modern,
  cynical power-play built on lazy AI, crypto, prediction markets, and market share.
  **Antonio** is CEO; **Alonso**, **Sebastian**, and **Gonzalo** sit on the board.

## Structure

```
duchyofmilan/
├── CLAUDE.md          # Full creative + technical brief (read this first)
├── content/           # In-world copy for every page of both sites
├── design/            # Visual direction for each era
├── org/               # Vite + React app → duchyofmilan.org (Web 2.0)
└── llc/               # Vite + React app → duchyofmilan.llc (modern corporate)
```

## Develop

Each site is an independent Vite + React app.

```bash
cd org   # or: cd llc
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # outputs to dist/
```

Hosting is via **Cloudflare Pages** — two projects from this one repo:
- Project 1: root directory `org`, build `npm run build`, output `dist` → duchyofmilan.org
- Project 2: root directory `llc`, build `npm run build`, output `dist` → duchyofmilan.llc

Domains stay registered at Namecheap; DNS points to Cloudflare Pages.

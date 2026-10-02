# Cyber Police Unit — Website

Bilingual (Bengali / English) website for the Cyber Police Unit of Bangladesh Police, built with the Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to create a production build and `npm start` to serve it.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home: citizen services, mandate, key figures, latest release, structure, specialist roles |
| `/about` | Purpose, leadership, four-tier organogram, digital forensics lab, capacity building |
| `/report` | Complaint form (3 steps) and complaint tracking |
| `/awareness` | Message checker (incl. Bangladesh scam patterns), common local scams guide, first steps, quiz |
| `/legal` | Complaint process (GD / FIR → investigation → forensics → Cyber Tribunal), evidence checklist, citizen rights, key laws, FAQ |
| `/help` | Helplines (999, 109, PCSW, 333, BTRC), MFS helplines, "police will never" list, account-recovery links |
| `/news`, `/news/cyber-police-unit-launch` | Newsroom and the 1 October 2026 launch press release |
| `/careers` | Contractual specialist roles and benefits |

Shared content (unit facts, specialist roles, structure, navigation) lives in `app/components/content.ts`; Bangladesh reference content (helplines, scams, laws, process, FAQ) lives in `app/components/bd-context.ts` and must be verified with the relevant agencies before go-live.

## Prototype boundary

`IS_PROTOTYPE` in `app/components/content.ts` is currently `false`, so no demonstration notices are shown. The complaint form is still not connected to a backend: it only stores a category and a demo reference in browser local storage. Nothing is sent to any server. Set it to `false` only after the form is connected to a real intake backend. The message checker always runs locally, using heuristic checks.

The standalone Bengali HTML file is kept as a reference from the original prototype.

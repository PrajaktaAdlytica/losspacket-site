# LossPacket website

LossPacket is a research-stage concept for organizing commercial-property and business-interruption claim evidence under professional review. This repository contains the Next.js website, the synthetic product preview, the joined LP brand kit, and the research/IA handoff artifacts.

## Run locally

```bash
npm install --prefix website
npm run dev
```

The site is a static Next.js export. It intentionally does not provide live authentication, claim submission, insurer actions, payments, lead delivery, or production integrations.

## Contents

- `website/` — Next.js source and public assets
- `outputs/LossPacket-Brand-Kit/` — editable brand kit, tokens, logo/favicons, typography, component and motion guidance
- `outputs/LossPacket-Research-and-IA.html` — research and information architecture handoff
- `outputs/LossPacket-Brief-Coverage-Audit.html` — implementation coverage and known limitations
- `outputs/LossPacket-Website-Previews/` — QA captures

## Deployment

Import this repository into Vercel with the project root set to `website`, build command `npm run build`, and output directory `out`. See the delivery notes in `website/docs/QA.md` and the root handoff instructions for the current preview deployment.

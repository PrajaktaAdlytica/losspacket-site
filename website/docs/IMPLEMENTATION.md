# LossPacket website

Next.js 16.4, React 19.2 and Motion for React 14.2. Static export, native scroll, local fonts and original brand assets. The corrected bespoke Joined LP vector is used throughout.

## Run

From website/: `npm install`, `npm run dev -- --port 3017`.
`npm run check` checks TypeScript. `node --test tests/demo-state.test.mjs` checks review-state dependencies. `npm run build` generates out/ for static hosting. Deploy the same project on Vercel with the website/ root and Next.js build settings, or serve out/ with a static host that supports folder indexes and a 404 page.

## Coverage

33 IA routes, including five separate proposed offer pages, owner/professional/contributor solutions, workflow, workspace, controls, pricing, evaluation, resources, about, contact, guided walkthrough, pilot, research updates, access status, privacy, terms, deletion and 404. Each editorial route has its own hero recipe, material treatment and animated source diagram. The claim workbench is the separate demo/CL-14 route.

Motion includes native-scroll progress, bounded hero parallax, in-view chapter reveals, a drawn workflow rail, button shutter and arrow swap, evidence transitions, role tabs, accordions and menu transitions. MotionConfig respects the operating-system setting; the pause control switches to complete still SVGs. Motion preference persists through client navigation but resets on full reload. No scroll hijacking, WebGL or physics is required for this narrative.

## Synthetic case

Alder Oven CL-14, kitchen fire 12 February 2026. Ten records with canonical counts. R-09 $4,800 equipment + $1,200 labor = $6,000. P-08 payroll $4,800. REV-01 $28,000 minus REV-02 $4,000 = $24,000 illustrative revenue difference, explicitly not policy loss/payout. Missing payment proof and reopening support remain unresolved. ASM-02 automatic payroll exclusion is rejected. Insurer determination remains blank.

The reducer requires a rationale for edits, invalidates reviews after edits, guards current-version owner approval, retains history and supports reviewer return/revoke/reset. Reviewer acknowledgement is enforced in the UI. Synthetic HTML exports contain a persistent printed watermark. No insurer send, appeal filing, payment, bank/ERP write or real upload is implemented.

## Forms and privacy

All inquiry forms use native required/email validation and separate purpose-specific consent. They create local drafts only, with a JSON download. There is no live endpoint, account, password collection, credential or claim-material storage. Real submissions require verified operator identity/contact/deletion route, privacy processors/retention, approved handling and a configured endpoint. Do not collect real records until the brief's licensing/referral/consent/paid-pilot gates are met.

Social logo assets are available, but footer company profiles are omitted until actual LinkedIn/Crunchbase destinations are verified. No fabricated testimonials, certifications, payout promises, savings or live integrations.

## Analytics

lib/analytics.ts dispatches allowlisted browser CustomEvents only; it sends nothing and stores nothing. landing_view, offer_17_selected (with offer_id), demo_open, evidence_view, override_view and price_view have local preview triggers. buyer_qualified is reserved for qualified lead review. pilot_request, consent_submit and pilot_commitment_verified are expressly blocked in preview instrumentation. Future backend triggers must be tied to successful receipt, purpose-specific storage and a verified signed paid commitment, never clicks. No raw contact, claim or financial values are accepted by the event helper. UTM source/campaign accept limited non-sensitive ASCII tags.

## Sources

Approved internal IA and selected Paper & Ink visual govern the content/visuals; the later brand kit overrides the earlier IA's provisional palette/fonts/mark. Origin screenshots inform editorial pacing and selective italics, not copied identity or page layouts.

Motion integration and accessibility checked against official docs via Perplexity:
- https://motion.dev/docs/react-installation
- https://motion.dev/docs/react-use-reduced-motion
- https://motion.dev/docs/react-accessibility
Insurance context links to https://content.naic.org/insurance-topics/business-interruption-and-business-owner-policy.

## Status

Website and isolated synthetic demo implemented. Real product operations, live lead delivery, data infrastructure, legal clearance, verified social profiles and custom domain are not represented as complete. Robots are noindex/nofollow for concept review. Deployment uses an owner-private review Site; it is not a public validation launch. Move to the intended production domain and finalize metadataBase when that domain is verified.

## Audience scroll and pilot CTA revision

The shared audience section on home and Solutions follows native page scrolling through Business owners, Brokers & adjusters, and Evidence contributors; upward scrolling reverses the sequence. The frame stays below the header when it fits the viewport. Short viewports and reduced motion use manual accessible tabs. Forward/reverse scrolling was checked at 775×804; phone layout at 390×844 and manual paused tabs were checked. Pilot destination buttons now share explicit padding and spacing, including a fully padded footer outline button and responsive closing CTA group. Thirteen state and scroll-mapping tests pass.

## Reversible editorial reveal motion

Motion scroll values drive batched horizontal translate/opacity updates for previously static editorial groups, product scope, steps, resource cards, FAQs, inquiry copy/forms, access options and footer columns. Alternating sides and three stagger phases return the same visual state when scrolling reverses. Centre-stage content stays aligned and fully readable; focused controls remain fully visible. Reduced motion/pause restores inline values. No wheel interception or added Lenis/GSAP dependency. Existing pinned audience and demo interactions are excluded. Browser checks: desktop product forward/reverse, pause restores all affected styles, 390px resource cards without overflow, and 775px audience still pins at 97px and changes roles. 17 tests cover demo state, role mapping and reversible reveal geometry.

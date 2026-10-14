# Manual Vercel deployment

1. Sign in to [Vercel](https://vercel.com) and choose **Add New → Project**.
2. Import `PrajaktaAdlytica/SourcingRecord-site`.
3. In **Configure Project**, set **Root Directory** to `website`.
4. Keep the framework preset as **Next.js**.
5. Use these settings:
   - Build command: `npm run build`
   - Output directory: `out`
   - Install command: `npm install`
6. Click **Deploy**.
7. Open the generated deployment URL and check `/`, `/solutions/`, `/demo/CL-14/`, and `/sign-in/`.
8. In **Settings → Domains**, add your domain. At your registrar, add the DNS records Vercel displays, then wait for verification.

The site is a static export. No environment variables are required for the current preview. Live authentication, form delivery, analytics storage, claim handling, payment, and insurer/ERP integrations are intentionally not configured.

# Gulsheen Bhatia — portfolio

A responsive rebuild of Gulsheen Bhatia’s product-design portfolio. The original Framer site used fixed frames (1440px / 2500px), clipped heights, and cards whose titles overflowed their containers. This version keeps the content, photography, and blush-and-teal look while laying out fluidly from a phone to a wide desktop.

## What’s here

- Home with hero, project grid, skills, photography, and contact
- About, work index, case studies, photography gallery, and contact form
- Mobile navigation, wrapping type, and images that never force horizontal scroll

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal. Production build:

```bash
npm run build
npm start
```

The contact form validates on the server and shows a thank-you state. It does not send email until a mailbox is connected.

## Deploy on Vercel

This is a standard Next.js app. The lasting portfolio URL is a `*.vercel.app` address on your Vercel account.

1. Sign in at [vercel.com](https://vercel.com) (GitHub login is fine).
2. Import this repository, or from the project folder run:

```bash
npx vercel login
npx vercel --prod
```

3. Use the production URL Vercel prints (something like `https://gulsheen-bhatia.vercel.app`) as the portfolio link. You can attach a custom domain later in the Vercel project settings.

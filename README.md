# Gulsheen Bhatia — portfolio

A responsive rebuild of Gulsheen Bhatia’s product-design portfolio. The original Framer site used fixed frames (1440px / 2500px), clipped heights, and cards whose titles overflowed their containers. This version keeps the content, photography, and blush-and-teal look while laying out fluidly from a phone to a wide desktop.

Live site: https://gulsheenbhatia.surge.sh

## What’s here

- Home with hero, project grid, skills, photography, and contact
- About, work index, case studies, photography gallery, and contact form
- Mobile navigation, wrapping type, and images that never force horizontal scroll

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal.

This app is a static Next.js export (`output: "export"`). Production files land in `out/`:

```bash
npm run build
```

The contact form validates in the browser and shows a thank-you state. It does not send email until a mailbox is connected.

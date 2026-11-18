export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  coverAlt: string;
  href: string;
  role?: string;
  duration?: string;
  summary: string;
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  gallery?: { src: string; alt: string }[];
  galleryLayout?: "stack" | "grid";
};

export const site = {
  name: "Gulsheen Bhatia",
  shortName: "GKB",
  role: "Product Designer",
  location: "Greater Toronto Area",
  linkedin: "https://www.linkedin.com/in/gulsheen-kaur-bhatia-9682a0227",
  tagline: "Hi! I’m Gulsheen Bhatia",
};

export const projects: Project[] = [
  {
    slug: "ks-gift-assistant",
    title: "Tapestry: Kate Spade Gift Assistant",
    subtitle: "AI Chat Bot",
    cover: "/images/KEudC2r8tDqXwsfH4CJiGm16ZM.png",
    coverAlt: "Two phones showing the Kate Spade gift assistant conversation and product tiles",
    href: "/work/ks-gift-assistant",
    role: "UX Designer, Tapestry (Kate Spade)",
    duration: "6 months",
    summary:
      "Kate Spade needed a better way to help gift shoppers who know the person they are buying for, but not the product. The Gift Concierge is a conversational shopping assistant on KateSpade.com that asks about the occasion, the recipient, and their style, then recommends gifts and explains why. It launched on April 13, 2026.",
    sections: [
      {
        heading: "My contributions",
        body: [
          "I designed the Figma screens and conversation states, including how shoppers find the assistant, talk to it, and get to a bag.",
        ],
        bullets: [
          "Welcome screen with “Find the perfect gift” and starter prompts such as “A gift for grad,” “For my best friend,” “Treating myself,” and “For the bride.”",
          "Conversation and refinement: the assistant narrates its work, explains each recommendation, and offers tappable follow-ups like neutral tones or more options.",
          "Shoppable tiles with price and Add to Bag in the thread, plus a handoff to the product page so the chat never becomes a dead end.",
          "Switching intent mid-conversation without starting over.",
          "Entry points across the gifting journey: navigation, a floating prompt, a banner, an inline tile, and a product-page button.",
        ],
      },
      {
        heading: "Challenges",
        body: [],
        bullets: [
          "Uncertain intent: starter prompts, clarifying questions, and suggested replies turn a vague idea into a few taps.",
          "Waiting on an AI response: skeleton tiles and status copy that changes with each step make the wait feel purposeful.",
          "Being found: placements in the menu, gifting page, product grid, and product page each suit a different moment. The floating prompt can be dismissed so it never blocks products.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The Gift Concierge went live on KateSpade.com after roughly two and a half months of testing. It was the first retail deployment of Amazon’s Agentic Shopping Assistant on AWS, built on Amazon Bedrock AgentCore with Anthropic’s Claude Haiku 4.5.",
        ],
      },
    ],
  },
  {
    slug: "albertsons",
    title: "ALBERTSON AD Manager",
    subtitle: "Retail Media network",
    cover: "/images/EoWJTz8LBcEsMTnYNKUSHnk62Y.png",
    coverAlt: "Albertsons logo",
    href: "/work/albertsons",
    role: "Product Manager Intern, Publicis Sapient",
    duration: "10 weeks",
    summary:
      "Albertsons needed a platform to manage and deploy targeted advertisements across stores and regions. I collaborated with a multidisciplinary team to design the experience from welcome through analytics.",
    sections: [
      {
        heading: "What I designed",
        body: [
          "I created the Figma pages for the platform, covering the full ad operations loop.",
        ],
        bullets: [
          "Welcome page introducing the platform and key actions",
          "Ad management tools to upload, categorize, and run campaigns",
          "Store-specific deployment for regions and banners",
          "Analytics dashboard with performance graphs and metrics",
          "Profile settings and a campaign calendar",
          "Buttons, icons, and color schemes for a cohesive, accessible UI",
        ],
      },
      {
        heading: "Challenges and solutions",
        body: [],
        bullets: [
          "Scalability: adaptable features so deployments could span many locations.",
          "Accessibility: simpler flows for users with mixed technical expertise.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The product helped Albertsons streamline ad deployment, improve targeting, and read campaign performance in real time.",
        ],
      },
    ],
    gallery: [
      { src: "/images/LNOLInug8D0SNgcGm3SEDGdrWc.png", alt: "" },
      { src: "/images/MKyau8fFuG9oI7hPFxEvLCVAg.png", alt: "" },
      { src: "/images/JYf6SclNmyR9TUtdDaqI4pGIzQ.png", alt: "" },
      { src: "/images/laNVMgNi5iXVbnqtuaiKSJGGI.png", alt: "" },
      { src: "/images/BGg6mFVYgIsn8s8pwKXN6sNy0.png", alt: "" },
      { src: "/images/c8Ewz6BnjNitExCS5nYWTa2bwMs.png", alt: "" },
      { src: "/images/7jhNAVhMwlTGbCwkEcnFrVDRi8.png", alt: "" },
      { src: "/images/VUrL1bY3cqIB4iA9C0vDrmsnJU.png", alt: "" },
      { src: "/images/pyV24z46yUfxCZuQrpCLwZcKOw.png", alt: "" },
      { src: "/images/jNOSZwYhEcJvnzXM6cBXx198xH4.png", alt: "" },
      { src: "/images/eGjAXEPJYt39dQ54iaqN68lYo9s.png", alt: "" },
      { src: "/images/KvTzIcPp7WIqFHAgw1ZVP37f1s.png", alt: "" },
      { src: "/images/zChwn2GSMQW0t7JfzKBO44bNLjQ.png", alt: "" },
    ],
  },
  {
    slug: "accessible-hawk",
    title: "Accessible Hawk",
    subtitle: "Mobile App",
    cover: "/images/k8ngNZ9kXNvWQfr9W1xQjuJA.png",
    coverAlt: "Accessible Hawk Hub phones on a warm studio set",
    href: "/work/accessible-hawk",
    summary:
      "Accessible Hawk is a mobile app that supports students with accessibility resources and campus navigation. It brings maps, booking, events, and feedback into one inclusive experience for Laurier.",
    sections: [
      {
        heading: "Features",
        body: [],
        bullets: [
          "Welcome screen with logo and tagline",
          "Booking assistance with accessibility advisors",
          "Interactive campus map with accessible routes, entrances, parking, and elevators",
          "Filters for wheelchair access and other needs",
          "Bus schedules, events calendar, and search",
          "Profiles, information hub, and a feedback page for reporting issues",
        ],
      },
      {
        heading: "How we designed it",
        body: [
          "We designed each page in Figma, built the information architecture, and tested navigation against WCAG: high contrast, large text, and simple paths. Login and signup use large fields and clear actions.",
        ],
      },
    ],
    gallery: [
      { src: "/images/sJYb2Pm2ueiKBYT6SPuYsB4Y0.png", alt: "" },
      { src: "/images/URuFJCPUsnKjP1W57SXmuM98U.png", alt: "" },
      { src: "/images/P1qFXJhwBQb88CnIcX2SNANfMUU.png", alt: "" },
      { src: "/images/zNyzVQnOHfCl1Sx1FjPxo0X9Q.png", alt: "" },
      { src: "/images/RiVV6fpsVopaflt7gccAtSvCto.png", alt: "" },
      { src: "/images/h5xxYeNWXw5jVS0nmvjbbjr9YEE.png", alt: "" },
      { src: "/images/XCHuxFF4t6wM145rpDqGBFStR4.png", alt: "" },
      { src: "/images/dCxQBiXwdlVLBZOqpnafCHRL6Y.png", alt: "" },
    ],
  },
  {
    slug: "property-solutions",
    title: "Property Solutions",
    subtitle: "Property Management App",
    cover: "/images/MEgVm1HGIbNkkJg70PXBHzRp4.png",
    coverAlt: "House and key icon on a purple background",
    href: "/work/property-solutions",
    summary:
      "Property Solutions is a mobile app for booking and offering property services — lawn care, pest control, roofing, and more — so people can connect, communicate, and transact in one place.",
    sections: [
      {
        heading: "Product",
        body: [],
        bullets: [
          "Dynamic search filters by location, type, and more",
          "Inbox and notifications for requests and ongoing work",
          "Profiles with history, reviews, and skills",
          "Dual-purpose platform: book a service or offer your own",
        ],
      },
      {
        heading: "Process",
        body: [
          "I ran competitor analysis, sketched low-fidelity flows, and built a reusable component library so branding stayed consistent while we moved quickly.",
        ],
      },
      {
        heading: "Design highlights",
        body: [
          "Poppins for a clean, approachable typeface. Purple and turquoise for trust, with green, orange, and red status accents. Toggle switches, buttons, and cards share one visual language. The interface was designed to scale across phones and, later, web.",
        ],
      },
      {
        heading: "Role",
        body: [
          "I designed the full mobile interface in Figma, mapped onboarding through booking, and prototyped for testing.",
        ],
      },
    ],
  },
  {
    slug: "region-of-waterloo",
    title: "Region Of Waterloo- FORMS",
    subtitle: "Redesigning Forms",
    cover: "/images/0GxcGSaAlfda4NykWrXEuYDRHwQ.png",
    coverAlt: "Region of Waterloo crest",
    href: "/work/region-of-waterloo",
    summary:
      "For my UX Design capstone at Wilfrid Laurier University, I collaborated with the Region of Waterloo to redesign resident forms into a more intuitive, accessible, and unified system for their digital services portal.",
    sections: [
      {
        heading: "The question",
        body: [
          "How might we create a standardized, accessible, and intuitive online form experience for residents while ensuring ease of use, respect for diverse needs, and compliance with regional guidelines?",
        ],
      },
      {
        heading: "My contributions",
        body: [],
        bullets: [
          "User research: surveys, interviews, card sorting, and affinity diagramming",
          "Information architecture for progressive form layouts",
          "Prototype refinement in Figma for accessibility and mobile",
          "Usability and A/B testing against the original PDFs",
          "Client report that tied research to design decisions",
        ],
      },
      {
        heading: "Design process",
        body: [
          "We used Design Thinking and the Double Diamond, looping with users and stakeholders.",
        ],
        bullets: [
          "Empathize & define: cluttered layouts, mobile friction, inaccessible PDFs; personas and journey maps",
          "Ideate: sketches, storyboards, and wireframes with accessibility first",
          "Prototype: three fidelities, then high-fidelity responsive layouts, payment, uploads, login, and confirmation",
          "Test: A/B tests, timing, error rates, and satisfaction",
        ],
      },
      {
        heading: "Final deliverable",
        body: [
          "A scalable form template, progress bars and tooltips, WCAG 2.2 features (font resizing, high contrast, keyboard navigation), larger tap targets, and a clear confirmation with optional support.",
        ],
      },
    ],
    gallery: [
      { src: "/images/E71acb1CIgiw7xoyAHyjU99ZE.jpg", alt: "" },
      { src: "/images/BwwUofr7AFrAb5gZzUQ2AbxAPE.jpg", alt: "" },
      { src: "/images/t6XGRe1FwZ5dXwVeBbwHqoa5wxA.jpg", alt: "" },
      { src: "/images/7JOiTfnQNi6rKjjMvhmMwUrZtwk.jpg", alt: "" },
      { src: "/images/UGvo3yz8F36r8JElmpRcIIYTIZg.jpg", alt: "" },
      { src: "/images/j9SkOg3KEjXHsnT769KXC113eo.jpg", alt: "" },
      { src: "/images/EHUcOuGclakJOKLKiF8I5Z0m4.jpg", alt: "" },
      { src: "/images/ppK5BWn1OqBYW9O053c2Xlc5nM.png", alt: "" },
      { src: "/images/dOemonJ5PNgkSh7VBbR5Ni1vqs.jpg", alt: "" },
    ],
  },
  {
    slug: "graphic-design",
    title: "ADOBE Designs",
    subtitle: "Posters & Stickers",
    cover: "/images/tEjZDLkvHBjbwmy32rmgxb7SeI.png",
    coverAlt: "Adobe Creative Cloud logo on a rainbow gradient",
    href: "/work/graphic-design",
    summary:
      "GRAPHIC DESIGN : ADOBE ILLUSTRATOR",
    sections: [
      {
        heading: "",
        body: [
          "I worked on graphic design projects during university, creating visually engaging posters for events, campaigns, and assignments, showcasing my creativity and design skills.",
        ],
      },
    ],
    galleryLayout: "grid",
    gallery: [
      { src: "/images/adobe-poster-01.png", alt: "Santa’s Bingo Bash poster" },
      { src: "/images/adobe-poster-02.png", alt: "Christmas Karaoke poster" },
      { src: "/images/adobe-poster-03.png", alt: "Bobbi Brown Spazaram circular poster" },
      { src: "/images/adobe-poster-04.png", alt: "Bobbi Brown’s DJ Night poster" },
      { src: "/images/adobe-poster-05.png", alt: "Bobbi Brown DJ Night vinyl poster" },
      { src: "/images/adobe-poster-06.png", alt: "Bobbi Brown lights up Spazaram poster" },
    ],
  },
];

export const skills = [
  { name: "Figma", src: "/images/8uaiVznXcOuohanRWhRB7vgosM.png" },
  { name: "Adobe Creative Cloud", src: "/images/tEjZDLkvHBjbwmy32rmgxb7SeI.png" },
  { name: "Jira", src: "/images/h1IAfGsUtyTEdWm7n7R6LPh91g.png" },
  { name: "Microsoft", src: "/images/FGsxjoz9IZvoZkjC3pQpwwifo.png" },
];

export const photos = [
  { src: "/images/photo-01.jpg", alt: "Swallowtail butterfly on pine needles" },
  { src: "/images/photo-02.jpg", alt: "Mallard swimming in a pond" },
  { src: "/images/photo-03.jpg", alt: "Red berries on green leaves" },
  { src: "/images/photo-04.jpg", alt: "Field of yellow black-eyed Susans" },
  { src: "/images/photo-05.jpg", alt: "Fallen autumn leaves along a curb" },
  { src: "/images/photo-06.jpg", alt: "Railroad tracks through autumn trees" },
  { src: "/images/photo-07.jpg", alt: "River through a green valley" },
  { src: "/images/photo-08.jpg", alt: "Purple jellyfish in dark water" },
  { src: "/images/photo-09.jpg", alt: "Hillside town lit up at night" },
];

export const photographyPreview = [photos[0], photos[2], photos[3]];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  pageTitle: string;
  subtitle: string;
  cover: string;
  coverAlt: string;
  href: string;
  role?: string;
  duration?: string;
  team?: string;
  summary: string;
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  gallery?: GalleryImage[];
  galleryLayout?: "stack" | "grid";
  cardTitle?: string;
  cardBlurb?: string;
  tags: string[];
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
    pageTitle: "KATE SPADE GIFT ASSISTANT",
    subtitle: "AI Chat Bot",
    cardTitle: "Kate Spade Gift Assistant",
    cardBlurb: "AI gift concierge for Tapestry",
    tags: ["UX Design", "Conversational UI", "Retail"],
    cover: "/images/KEudC2r8tDqXwsfH4CJiGm16ZM.png",
    coverAlt: "Two phones showing the Kate Spade gift assistant",
    href: "/work/ks-gift-assistant",
    role: "UX Designer at Tapestry (Kate Spade)",
    duration: "6 months",
    team: "Team Project",
    summary:
      "Kate Spade, a Tapestry brand, needed a better way to help gift shoppers who know the person they are buying for but not the product. The Gift Concierge is a conversational shopping assistant on KateSpade.com that asks about the occasion, the recipient and their style, then recommends gifts and explains why. It launched on April 13, 2026. I worked with a multidisciplinary team to design how shoppers find the assistant, talk to it and get to a bag.",
    sections: [
      {
        heading: "My Contributions",
        body: [
          "Figma Design Creation: Designed all the Figma pages for the platform, including key features such as:",
        ],
        bullets: [
          "Welcome Screen: Opened the conversation with the heading “Find the perfect gift” and starter prompts such as “A gift for grad,” “For my best friend,” “Treating myself” and “For the bride,” so shoppers can begin with a person or an occasion instead of a product.",
          "Conversation and Refinement: Shaped the exchange so the assistant narrates its work (“Looking for the right fit,” “Getting closer to the perfect gift”), explains why it chose each piece, and offers tappable follow-ups like neutral tones, a soft colour or more options, with a feedback prompt under each answer.",
          "Product Recommendations: Designed results as shoppable tiles with price and Add to Bag in the thread, a “Show me more options” path, and a handoff to the product page so the chat never becomes a dead end.",
          "Switching Intent: Let shoppers change direction mid-conversation, for example from a gift for her sister to jewelry for herself, without starting over. The assistant asks what she is drawn to and delivers a new set of tiles.",
          "Entry Points: Mapped where the assistant appears across the gifting journey: an “AI Gift Assistant” item and a “Give the perfect gift” tile in the navigation menu, a floating prompt on the gifting page that collapses to a sparkle icon, a banner and an inline “Use AI to find a gift” tile in the product grid, and a button on product pages.",
        ],
      },
      {
        heading: "Challenges and Solutions",
        body: [],
        bullets: [
          "Uncertain intent: Gift shoppers often cannot name what they want. Starter prompts, clarifying questions and suggested replies turn a vague idea into a few taps.",
          "Waiting on an AI response: A blank screen reads as broken. Skeleton tiles and status copy that changes with each step make the wait feel purposeful.",
          "Being found: A strong assistant is useless if nobody opens it. Placements in the menu, gifting page, product grid and product page each suit a different moment, and the floating prompt can be dismissed so it never blocks products.",
        ],
      },
      {
        heading: "Tools and Technologies",
        body: [],
        bullets: [
          "Design Tools: Figma for the screens, flows and states.",
          "Platform: Built by Tapestry on Amazon Bedrock AgentCore, using Anthropic’s Claude Haiku 4.5 model.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The Gift Concierge went live on KateSpade.com on April 13, 2026, after roughly two and a half months of testing. It was the first retail deployment of Amazon’s Agentic Shopping Assistant on AWS.",
        ],
      },
    ],
    gallery: [
      { src: "/images/RrZVFLBZ1aOXKjPcsklsDLy7KZQ.png", alt: "Gift assistant conversation screens", width: 1692, height: 1016 },
      { src: "/images/eFbQHrCX0X2kJsbasrPyTn5LU.png", alt: "Gift assistant product tiles", width: 588, height: 1000 },
      { src: "/images/6xjCOKNoe0JBsk0xhsB191iy8.png", alt: "Gift assistant flow", width: 1650, height: 982 },
      { src: "/images/4MZjcKZH8XesGk6A5Xmy3VOpkU.png", alt: "Gift assistant entry points", width: 1580, height: 996 },
      { src: "/images/bSVqR3glBuaEfp1mKClcTN5lOk.jpeg", alt: "Gift assistant phone screen", width: 960, height: 856 },
      { src: "/images/yTPJk5PWmRWzTAfud93Sz0S4e4o.jpeg", alt: "Gift assistant phone screen", width: 960, height: 1648 },
      { src: "/images/1sQ8yBoG55SKXTHH3ZXHYzrHrI.jpeg", alt: "Gift assistant phone screen", width: 960, height: 1793 },
    ],
  },
  {
    slug: "albertsons",
    title: "ALBERTSON AD Manager",
    pageTitle: "ALBERTSONS",
    subtitle: "Retail Media network",
    cardTitle: "Albertsons Ad Manager",
    cardBlurb: "Retail media network",
    tags: ["Product", "Figma", "Retail media"],
    cover: "/images/EoWJTz8LBcEsMTnYNKUSHnk62Y.png",
    coverAlt: "Albertsons logo",
    href: "/work/albertsons",
    role: "Product Manager Intern at Publicis Sapient",
    duration: "10 Weeks",
    team: "Team Project",
    summary:
      "Albertsons, a leading grocery store chain, needed a platform to manage and deploy targeted advertisements efficiently across various stores and regions. As a Product Manager Intern at Publicis Sapient, I collaborated with a multidisciplinary team to design and develop this platform.",
    sections: [
      {
        heading: "My Contributions",
        body: [
          "Figma Design Creation: Designed all the Figma pages for the platform, including key features such as:",
        ],
        bullets: [
          "Welcome Page: Introduced users to the platform and highlighted key functionalities.",
          "User Interface Components: Crafted buttons, icons, and color schemes to ensure a cohesive and accessible design.",
          "Ad Management Tools: Enabled users to upload, categorize, and manage ad campaigns effectively.",
          "Store-Specific Features: Integrated functionalities for customizing ad deployments based on specific stores or regions.",
          "Analytics Dashboard: Provided insights into ad performance with detailed graphs and metrics.",
          "Other Features: Designed a profile page for user settings and a calendar for scheduling ad campaigns.",
        ],
      },
      {
        heading: "Challenges and Solutions",
        body: [],
        bullets: [
          "Scalability: Ensured the platform could handle ad deployments across numerous locations by designing adaptable and scalable features.",
          "User Accessibility: Incorporated intuitive UI/UX principles to simplify ad management for users with varying technical expertise.",
        ],
      },
      {
        heading: "Tools and Technologies",
        body: [],
        bullets: [
          "Design Tools: Figma for creating and refining the design components.",
          "Collaboration: Agile methodologies for iterative development with team members.",
        ],
      },
      {
        heading: "Outcome",
        body: ["The final product enabled Albertsons to:"],
        bullets: [
          "Streamline the process of ad deployment across different locations.",
          "Improve targeting accuracy and effectiveness of marketing campaigns.",
          "Access real-time analytics for data-driven decision-making.",
        ],
      },
    ],
    gallery: [
      { src: "/images/LNOLInug8D0SNgcGm3SEDGdrWc.png", alt: "", width: 982, height: 660 },
      { src: "/images/MKyau8fFuG9oI7hPFxEvLCVAg.png", alt: "", width: 1030, height: 1124 },
      { src: "/images/JYf6SclNmyR9TUtdDaqI4pGIzQ.png", alt: "", width: 1014, height: 742 },
      { src: "/images/laNVMgNi5iXVbnqtuaiKSJGGI.png", alt: "", width: 1094, height: 514 },
      { src: "/images/BGg6mFVYgIsn8s8pwKXN6sNy0.png", alt: "", width: 1512, height: 1068 },
      { src: "/images/c8Ewz6BnjNitExCS5nYWTa2bwMs.png", alt: "", width: 502, height: 426 },
      { src: "/images/7jhNAVhMwlTGbCwkEcnFrVDRi8.png", alt: "", width: 422, height: 356 },
      { src: "/images/VUrL1bY3cqIB4iA9C0vDrmsnJU.png", alt: "", width: 1016, height: 710 },
      { src: "/images/pyV24z46yUfxCZuQrpCLwZcKOw.png", alt: "", width: 788, height: 1076 },
      { src: "/images/jNOSZwYhEcJvnzXM6cBXx198xH4.png", alt: "", width: 792, height: 954 },
      { src: "/images/eGjAXEPJYt39dQ54iaqN68lYo9s.png", alt: "", width: 516, height: 882 },
      { src: "/images/KvTzIcPp7WIqFHAgw1ZVP37f1s.png", alt: "", width: 788, height: 698 },
      { src: "/images/zChwn2GSMQW0t7JfzKBO44bNLjQ.png", alt: "", width: 1092, height: 972 },
    ],
  },
  {
    slug: "accessible-hawk",
    title: "Accessible Hawk",
    pageTitle: "ACCESSIBLE HAWK",
    subtitle: "Mobile App",
    cardBlurb: "Campus accessibility mobile app",
    tags: ["Mobile", "Accessibility", "Figma"],
    cover: "/images/k8ngNZ9kXNvWQfr9W1xQjuJA.png",
    coverAlt: "Accessible Hawk Hub phones on a warm studio set",
    href: "/work/accessible-hawk",
    summary:
      "Accessible Hawk is a mobile application designed to support students by providing accessibility resources and campus navigation tools tailored for individuals with diverse needs. The app integrates essential services to enhance student experience and promote inclusivity on campus.",
    sections: [
      {
        heading: "Features",
        body: [],
        bullets: [
          "Welcome Page: A welcoming screen with the app’s logo and tagline, setting a professional and inclusive tone for the app.",
          "Booking Assistance: Feature to schedule appointments with accessibility advisors or request support services.",
          "A fully interactive campus map highlighting accessible routes, building entrances, parking spots, and elevators. Users can search for specific locations or filter the map based on accessibility needs (e.g., wheelchair access).",
          "Bus Schedules: Real-time updates on bus arrivals and departures, helping students plan their commute efficiently.",
          "Events Calendar: Displays upcoming campus events with filters for accessibility-friendly events.",
          "Search Page: A powerful search feature to quickly locate buildings, classrooms, or facilities on campus, with detailed accessibility information for each location.",
          "Personalized profiles for managing user preferences, accessibility settings, and saved locations or routes.",
          "Information Hub: Educational resources about accessibility and inclusivity on campus.",
          "Feedback Page: Allows students to report issues or provide feedback about accessibility challenges on campus.",
          "Home Page: Displays a curated list of accessibility tips, upcoming events, and links to essential resources.",
          "Dashboard: Central hub providing quick access to the app’s main features, such as maps, events, and support services.",
          "Login and Signup: Simple and accessible login and signup forms with large input fields and clear call-to-action buttons, ensuring ease of use for all users.",
          "Service Directory: A categorized list of accessibility services available on campus, including counseling, physical assistance, and learning support.",
        ],
      },
      {
        heading: "",
        body: [
          "We designed each page in Figma, ensuring a clean and intuitive user interface. Developed the information architecture, organizing features logically to enhance usability. Conducted user testing to validate navigation flows and accessibility compliance. Focused on creating accessible visual designs that adhere to WCAG standards, such as high contrast, large text sizes, and simple navigation.",
        ],
      },
    ],
    gallery: [
      { src: "/images/sJYb2Pm2ueiKBYT6SPuYsB4Y0.png", alt: "", width: 1342, height: 858 },
      { src: "/images/URuFJCPUsnKjP1W57SXmuM98U.png", alt: "", width: 1052, height: 554 },
      { src: "/images/P1qFXJhwBQb88CnIcX2SNANfMUU.png", alt: "", width: 436, height: 638 },
      { src: "/images/zNyzVQnOHfCl1Sx1FjPxo0X9Q.png", alt: "", width: 498, height: 1062 },
      { src: "/images/RiVV6fpsVopaflt7gccAtSvCto.png", alt: "", width: 520, height: 388 },
      { src: "/images/h5xxYeNWXw5jVS0nmvjbbjr9YEE.png", alt: "", width: 564, height: 466 },
      { src: "/images/XCHuxFF4t6wM145rpDqGBFStR4.png", alt: "", width: 818, height: 694 },
      { src: "/images/dCxQBiXwdlVLBZOqpnafCHRL6Y.png", alt: "", width: 556, height: 762 },
    ],
  },
  {
    slug: "property-solutions",
    title: "Property Solutions",
    pageTitle: "PROPERTY SOLUTIONS",
    subtitle: "Property Management App",
    cardBlurb: "Property management app",
    tags: ["Mobile", "UX Design", "Figma"],
    cover: "/images/MEgVm1HGIbNkkJg70PXBHzRp4.png",
    coverAlt: "House and key icon on a purple background",
    href: "/work/property-solutions",
    summary:
      "Property Solutions is a mobile app designed to streamline the process of booking and providing services for property management. Whether users need lawn care, pest control, or roofing services—or want to offer their own skills to others—Property Solutions makes it easy to connect, communicate, and transact.",
    sections: [
      {
        heading: "",
        body: [],
        bullets: [
          "Dynamic Search Filters: Allows users to quickly find specific services based on location, type, and other parameters.",
          "Inbox and Notifications: Keeps users updated on service requests, ongoing tasks, and communication with clients or providers.",
          "User Profiles: Comprehensive profiles showcase user history, reviews, and skills for trust-building.",
          "Dual-Purpose Platform: Users can both book services and offer their own, providing flexibility and value.",
        ],
      },
      {
        heading: "Process",
        body: [],
        bullets: [
          "Research: Conducted competitor analysis to identify user needs and gaps in existing service platforms.",
          "Wire-frames: Created low-fidelity wireframes to outline key user flows.",
          "Design System: Established a reusable component library for consistent branding and faster iteration.",
        ],
      },
      {
        heading: "Impact and Learnings",
        body: [
          "This project taught me the importance of balancing visual design with functionality, creating a user-centric experience, and collaborating effectively on a project from ideation to final design. The process honed my skills in Figma, interaction design, and building scalable design systems.",
        ],
      },
      {
        heading: "Design Highlights",
        body: [],
        bullets: [
          "Typography: Leveraged the Poppins typeface for a clean, modern, and approachable feel.",
          "Interactive Components: Designed toggle switches, buttons, and cards for a cohesive user experience.",
          "Color Palette: A calming combination of purple and turquoise represents trust and innovation, with green, orange, and red accents for status indicators.",
          "Responsive Design: Ensured scalability for various screen sizes and future web adaptation.",
          "Seamless Onboarding: A step-by-step sign-up process, including service preferences and profile setup, ensures users get started effortlessly.",
        ],
      },
      {
        heading: "Role and Responsibilities",
        body: [],
        bullets: [
          "UI/UX Design: Created the entire mobile app interface using Figma.",
          "User Flow Design: Designed intuitive user flows for onboarding, service search, booking, and profile management.",
          "Visual Design System: Developed a consistent visual language, including typography, color palette, and button components.",
          "Prototyping: Built interactive prototypes for user testing and feedback.",
        ],
      },
    ],
    gallery: [
      { src: "/images/QoEVApAk47ByQ9lPlpXb2SxOr0.png", alt: "", width: 998, height: 1386 },
      { src: "/images/CjjFLovZEuESnp1raFDaDj1XChg.png", alt: "", width: 644, height: 800 },
      { src: "/images/VyX2fEZ4ZVN4UPxrAzmlOjlqxCY.png", alt: "", width: 672, height: 1772 },
      { src: "/images/cnGi7XCxbWKcsTM1LubkUb6Y.png", alt: "", width: 666, height: 934 },
      { src: "/images/kYgFPT7KqNU6KFr7GWvEho2mJuk.png", alt: "", width: 736, height: 2016 },
      { src: "/images/dumv9VY71ONEPZQdQVxGkes8BM.png", alt: "", width: 676, height: 852 },
      { src: "/images/VvGf3nPuhLXi6yLS9IGf84L9wNc.png", alt: "", width: 1758, height: 1130 },
    ],
  },
  {
    slug: "region-of-waterloo",
    title: "Region Of Waterloo- FORMS",
    pageTitle: "REGION OF WATERLOO",
    subtitle: "Redesigning Forms",
    cardTitle: "Region of Waterloo Forms",
    cardBlurb: "Accessible digital forms",
    tags: ["UX Research", "Accessibility", "Figma"],
    cover: "/images/0GxcGSaAlfda4NykWrXEuYDRHwQ.png",
    coverAlt: "Region of Waterloo crest",
    href: "/work/region-of-waterloo",
    summary:
      "As part of my final capstone in the UX Design program at Wilfrid Laurier University, I collaborated with the Region of Waterloo to redesign their online resident forms. The goal was to create a more intuitive, accessible, and unified form system that could integrate with their upcoming digital services portal.",
    sections: [
      {
        heading: "",
        body: [
          "We approached this challenge by asking:",
          "How might we create a standardized, accessible, and intuitive online form experience for residents while ensuring ease of use, respect for diverse user needs, and compliance with regional guidelines?",
        ],
      },
      {
        heading: "My Contributions",
        body: [],
        bullets: [
          "Prototype Refinement: Finalized visual and functional tweaks in Figma, ensuring accessibility, alignment, and mobile responsiveness.",
          "Usability Testing: Ran A/B tests on our redesign vs. original forms, collecting feedback and timing user flows to guide final improvements.",
          "User Research: Led surveys, interviews, and card sorting; used affinity diagramming to define key user needs and pain points.",
          "Information Architecture: Helped structure progressive form layouts and simplify navigation based on competitive and IA analysis.",
          "Client Report: Co-wrote and edited the final deliverable, aligning research findings and design rationale into a cohesive story.",
          "Team Collaboration: Supported strong communication and co-creation through regular critiques and shared digital workspaces.",
        ],
      },
      {
        heading: "Design Process",
        body: [
          "We used Design Thinking and the Double Diamond framework, ensuring iterative feedback loops from users and stakeholders:",
        ],
        bullets: [
          "1. Empathize & Define — Identified major pain points: cluttered layouts, mobile friction, inaccessible PDFs. Built detailed personas and journey maps based on real user feedback.",
          "2. Ideate — Explored layout variations using sketches, storyboards, and wireframes. Prioritized accessibility and form clarity across devices.",
          "3. Prototype — Developed responsive prototypes across three fidelity levels. Iterated designs based on usability walkthroughs and think-aloud protocols.",
          "4. Test — Conducted A/B testing comparing the original forms to our redesign. Validated efficiency through timing, error rate reduction, and user satisfaction metrics.",
        ],
      },
      {
        heading: "Prototype Highlights",
        body: [],
        bullets: [
          "Mid-Fidelity: Introduced progressive flow, logical grouping, and simplified navigation. Focused on structure over visuals.",
          "High-Fidelity: Finalized with responsive layout, accessible input fields, and branding alignment. Included payment screens, file uploads, login states, and submission confirmation.",
        ],
      },
      {
        heading: "Challenges",
        body: [],
        bullets: [
          "Recruitment Constraints: We had to rely on personal networks due to outreach limitations.",
          "Balancing User Needs vs. Stakeholder Goals: Negotiating feasibility with user experience.",
          "Accessibility at Scale: Ensuring all features translated across devices and formats.",
        ],
      },
      {
        heading: "Final Deliverable",
        body: ["Our high-fidelity prototype included:"],
        bullets: [
          "A scalable form template for all departments",
          "Progress bars and tooltips for improved form clarity",
          "WCAG 2.2-compliant features: font resizing, high contrast, keyboard navigation",
          "Responsive mobile layout with larger tap targets and minimized scrolling",
          "A clear, accessible confirmation process with optional support channels",
        ],
      },
      {
        heading: "What I Learned",
        body: [
          "This project taught me how to lead through complexity while staying grounded in human-centered design. I refined my skills in:",
        ],
        bullets: [
          "Collaborative project management using tools like Figma, Google Docs, and Discord",
          "Applying UX principles like cognitive load theory, Gestalt laws, and Jakob’s Law in real-world settings",
          "Designing for accessibility not just as a checklist, but as a foundation of inclusive design",
          "Communicating with stakeholders and translating feedback into actionable design changes",
        ],
      },
      {
        heading: "Final Thoughts",
        body: [
          "We concluded the project by presenting our work during a Region-hosted showcase, highlighting our user research, design decisions, and potential for real-world implementation.",
          "This capstone was a transformative experience that helped me grow as both a UX practitioner and a collaborator. I’m proud of what our team accomplished and grateful to the Region of Waterloo for trusting us with such a meaningful challenge.",
        ],
      },
    ],
    gallery: [
      { src: "/images/E71acb1CIgiw7xoyAHyjU99ZE.jpg", alt: "", width: 1020, height: 717 },
      { src: "/images/BwwUofr7AFrAb5gZzUQ2AbxAPE.jpg", alt: "", width: 524, height: 421 },
      { src: "/images/t6XGRe1FwZ5dXwVeBbwHqoa5wxA.jpg", alt: "", width: 592, height: 381 },
      { src: "/images/7JOiTfnQNi6rKjjMvhmMwUrZtwk.jpg", alt: "", width: 532, height: 381 },
      { src: "/images/UGvo3yz8F36r8JElmpRcIIYTIZg.jpg", alt: "", width: 590, height: 421 },
      { src: "/images/j9SkOg3KEjXHsnT769KXC113eo.jpg", alt: "", width: 590, height: 421 },
      { src: "/images/EHUcOuGclakJOKLKiF8I5Z0m4.jpg", alt: "", width: 592, height: 421 },
      { src: "/images/ppK5BWn1OqBYW9O053c2Xlc5nM.png", alt: "", width: 1596, height: 1144 },
      { src: "/images/dOemonJ5PNgkSh7VBbR5Ni1vqs.jpg", alt: "", width: 592, height: 421 },
    ],
  },
  {
    slug: "graphic-design",
    title: "ADOBE Designs",
    pageTitle: "GRAPHIC DESIGN : ADOBE ILLUSTRATOR",
    subtitle: "Posters & Stickers",
    cardTitle: "Adobe Designs",
    cardBlurb: "Posters and stickers from school",
    tags: ["Illustrator", "Poster", "Graphic"],
    cover: "/images/Z6GBWEWcpgtbrLPZNJTKsSSU.jpg",
    coverAlt: "Blue and cream star graphic",
    href: "/work/graphic-design",
    summary:
      "I worked on graphic design projects during university, creating visually engaging posters for events, campaigns, and assignments, showcasing my creativity and design skills.",
    sections: [],
    galleryLayout: "grid",
    gallery: [
      { src: "/images/Fi6KO0lH1Q8Vn6ZeZM6rIAJ6bTQ.jpg", alt: "Santa’s Bingo Bash poster", width: 1314, height: 1746 },
      { src: "/images/P0AOyVkkUJEGyJXEDuW8RNle0.jpg", alt: "Christmas Karaoke poster", width: 1314, height: 1746 },
      { src: "/images/SThTfHFoGZx9PtQjCWNwZI.jpg", alt: "Bobbi Brown Spazaram poster", width: 648, height: 648 },
      { src: "/images/J1qIb95T95pt3lCqH9OdCqYwA.jpg", alt: "Bobbi Brown DJ Night poster", width: 648, height: 648 },
      { src: "/images/pK7YlKXteZs8t7bHJCZJ5Q9ACg.jpg", alt: "Bobbi Brown vinyl poster", width: 648, height: 648 },
      { src: "/images/xlXAqoohBWXCm83cuvJ86YXqfqQ.jpg", alt: "Spazaram poster", width: 648, height: 648 },
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
  { src: "/images/1NgJHzhVmlM2ZwqlWTrs3TUYSs.jpg", alt: "Swallowtail butterfly on pine needles", width: 3024, height: 4032 },
  { src: "/images/ExspkDHiOy6XnbnShbdiHa03Gg.jpg", alt: "Field of yellow black-eyed Susans", width: 4032, height: 3024 },
  { src: "/images/wyU9BwWoCVZn61WQ6i7sKPcO3m8.jpg", alt: "Mallard swimming in a pond", width: 3024, height: 4032 },
  { src: "/images/RanTg5coxtHxSQu9nfMX38d8is.jpg", alt: "Fallen autumn leaves along a curb", width: 3000, height: 4000 },
  { src: "/images/31Js0UzxEmcLYCaPd5rQH8u8L24.jpg", alt: "Red berries on green leaves", width: 3024, height: 4032 },
  { src: "/images/vIC6ZWIc2yxb3ahAI0Uo15vd1Y.jpg", alt: "Swallowtail butterfly", width: 3603, height: 2486 },
  { src: "/images/dVfWEA7Tf2tQ6LAT3aCyxR6HWeQ.jpg", alt: "Railroad tracks through autumn trees", width: 1168, height: 1462 },
  { src: "/images/4mZhcq8or9QZ9ShCqZoNHZDQZJU.jpg", alt: "River through a green valley", width: 4032, height: 3024 },
  { src: "/images/A9PMQeecOe08t6LxgndSahsxjE.jpg", alt: "Hillside town lit up at night", width: 3024, height: 4032 },
];

export const photographyPreview = [
  photos[0],
  photos[4],
  photos[1],
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CopyBlock = {
  heading?: string;
  paragraphs?: string[];
  items?: { title?: string; body: string }[];
};

export type CaseBlock =
  | ({ type: "prose" } & CopyBlock)
  | { type: "quote"; text: string }
  | { type: "image"; image: CaseImage; align?: "left" | "center" | "right" | "wide"; maxWidth?: number }
  | { type: "row"; images: CaseImage[] }
  | { type: "grid"; images: CaseImage[] }
  | { type: "split"; copySide: "left" | "right"; copy: CopyBlock; images: CaseImage[] }
  | {
      type: "trio";
      left: CopyBlock;
      center: CaseImage[];
      right: CopyBlock;
      rightImages?: CaseImage[];
    };

export type Project = {
  slug: string;
  title: string;
  pageTitle: string;
  subtitle: string;
  cover: string;
  coverAlt: string;
  href: string;
  summary: string;
  cardTitle?: string;
  cardBlurb?: string;
  tags: string[];
  blocks: CaseBlock[];
};

const img = (
  file: string,
  width: number,
  height: number,
  alt = "",
): CaseImage => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
});

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
    summary:
      "Kate Spade, a Tapestry brand, needed a better way to help gift shoppers who know the person they are buying for but not the product.",
    blocks: [
      {
        type: "prose",
        items: [
          { title: "Kate Spade AI Gift Concierge", body: "" },
          { title: "Role:", body: "UX Designer at Tapestry (Kate Spade)" },
          { title: "Duration:", body: "6 months" },
          { title: "Team Project", body: "" },
        ],
        paragraphs: [
          "Kate Spade, a Tapestry brand, needed a better way to help gift shoppers who know the person they are buying for but not the product. The Gift Concierge is a conversational shopping assistant on KateSpade.com that asks about the occasion, the recipient and their style, then recommends gifts and explains why. It launched on April 13, 2026. I worked with a multidisciplinary team to design how shoppers find the assistant, talk to it and get to a bag.",
        ],
      },
      {
        type: "prose",
        heading: "My Contributions",
        paragraphs: [
          "Figma Design Creation: Designed all the Figma pages for the platform, including key features such as:",
        ],
      },
      {
        type: "image",
        image: img("RrZVFLBZ1aOXKjPcsklsDLy7KZQ.png", 1692, 1016, "Gift assistant conversation screens"),
        align: "left",
        maxWidth: 560,
      },
      {
        type: "prose",
        heading: "Welcome Screen:",
        paragraphs: [
          "Opened the conversation with the heading “Find the perfect gift” and starter prompts such as “A gift for grad,” “For my best friend,” “Treating myself” and “For the bride,” so shoppers can begin with a person or an occasion instead of a product.",
        ],
      },
      {
        type: "image",
        image: img("eFbQHrCX0X2kJsbasrPyTn5LU.png", 588, 1000, "Find the perfect gift welcome screen"),
        align: "left",
        maxWidth: 280,
      },
      {
        type: "prose",
        heading: "Conversation and Refinement:",
        paragraphs: [
          "Shaped the exchange so the assistant narrates its work (“Looking for the right fit,” “Getting closer to the perfect gift”), explains why it chose each piece, and offers tappable follow-ups like neutral tones, a soft colour or more options, with a feedback prompt under each answer.",
        ],
      },
      {
        type: "image",
        image: img("6xjCOKNoe0JBsk0xhsB191iy8.png", 1650, 982, "Conversation and product recommendation screens"),
        align: "left",
        maxWidth: 640,
      },
      {
        type: "prose",
        heading: "Product Recommendations:",
        paragraphs: [
          "Designed results as shoppable tiles with price and Add to Bag in the thread, a “Show me more options” path, and a handoff to the product page so the chat never becomes a dead end.",
        ],
      },
      {
        type: "image",
        image: img("4MZjcKZH8XesGk6A5Xmy3VOpkU.png", 1580, 996, "Product recommendation tiles"),
        align: "wide",
      },
      {
        type: "prose",
        heading: "Switching Intent:",
        paragraphs: [
          "Let shoppers change direction mid-conversation, for example from a gift for her sister to jewelry for herself, without starting over. The assistant asks what she is drawn to and delivers a new set of tiles.",
        ],
      },
      {
        type: "row",
        images: [
          img("bSVqR3glBuaEfp1mKClcTN5lOk.jpeg", 960, 856, "Gift assistant screen"),
          img("yTPJk5PWmRWzTAfud93Sz0S4e4o.jpeg", 960, 1648, "Gift assistant screen"),
          img("1sQ8yBoG55SKXTHH3ZXHYzrHrI.jpeg", 960, 1793, "Gift assistant screen"),
        ],
      },
      {
        type: "prose",
        heading: "Entry Points:",
        paragraphs: [
          "Mapped where the assistant appears across the gifting journey: an “AI Gift Assistant” item and a “Give the perfect gift” tile in the navigation menu, a floating prompt on the gifting page that collapses to a sparkle icon, a banner and an inline “Use AI to find a gift” tile in the product grid, and a button on product pages.",
        ],
      },
      {
        type: "prose",
        heading: "Challenges and Solutions",
        items: [
          {
            title: "Uncertain intent:",
            body: "Gift shoppers often cannot name what they want. Starter prompts, clarifying questions and suggested replies turn a vague idea into a few taps.",
          },
          {
            title: "Waiting on an AI response:",
            body: "A blank screen reads as broken. Skeleton tiles and status copy that changes with each step make the wait feel purposeful.",
          },
          {
            title: "Being found:",
            body: "A strong assistant is useless if nobody opens it. Placements in the menu, gifting page, product grid and product page each suit a different moment, and the floating prompt can be dismissed so it never blocks products.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Tools and Technologies",
        items: [
          { title: "Design Tools:", body: "Figma for the screens, flows and states." },
          {
            title: "Platform:",
            body: "Built by Tapestry on Amazon Bedrock AgentCore, using Anthropic’s Claude Haiku 4.5 model.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Outcome",
        paragraphs: [
          "The Gift Concierge went live on KateSpade.com on April 13, 2026, after roughly two and a half months of testing. It was the first retail deployment of Amazon’s Agentic Shopping Assistant on AWS.",
        ],
      },
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
    summary:
      "Albertsons needed a platform to manage and deploy targeted advertisements across stores and regions.",
    blocks: [
      {
        type: "prose",
        items: [
          { title: "Albertsons Ad Deployment Platform", body: "" },
          { title: "Role:", body: "Product Manager Intern at Publicis Sapient" },
          { title: "Duration:", body: "10 Weeks" },
          { title: "Team Project", body: "" },
        ],
        paragraphs: [
          "Albertsons, a leading grocery store chain, needed a platform to manage and deploy targeted advertisements efficiently across various stores and regions. As a Product Manager Intern at Publicis Sapient, I collaborated with a multidisciplinary team to design and develop this platform.",
        ],
      },
      {
        type: "prose",
        heading: "My Contributions",
        paragraphs: [
          "Figma Design Creation: Designed all the Figma pages for the platform, including key features such as:",
        ],
      },
      {
        type: "image",
        image: img("LNOLInug8D0SNgcGm3SEDGdrWc.png", 982, 660, "Platform overview of screens and components"),
        align: "wide",
      },
      {
        type: "prose",
        heading: "Welcome Page:",
        paragraphs: ["Introduced users to the platform and highlighted key functionalities."],
      },
      {
        type: "row",
        images: [
          img("MKyau8fFuG9oI7hPFxEvLCVAg.png", 1030, 1124, "Welcome page"),
          img("JYf6SclNmyR9TUtdDaqI4pGIzQ.png", 1014, 742, "User login"),
        ],
      },
      {
        type: "prose",
        heading: "User Interface Components:",
        paragraphs: [
          "Crafted buttons, icons, and color schemes to ensure a cohesive and accessible design.",
        ],
      },
      {
        type: "row",
        images: [
          img("laNVMgNi5iXVbnqtuaiKSJGGI.png", 1094, 514, "Icons, buttons, and colour"),
          img("BGg6mFVYgIsn8s8pwKXN6sNy0.png", 1512, 1068, "Typography and headings"),
        ],
      },
      {
        type: "prose",
        heading: "Ad Management Tools:",
        paragraphs: [
          "Enabled users to upload, categorize, and manage ad campaigns effectively.",
        ],
      },
      {
        type: "row",
        images: [
          img("c8Ewz6BnjNitExCS5nYWTa2bwMs.png", 502, 426, "Create campaign"),
          img("7jhNAVhMwlTGbCwkEcnFrVDRi8.png", 422, 356, "Ad management"),
        ],
      },
      {
        type: "prose",
        heading: "Store-Specific Features:",
        paragraphs: [
          "Integrated functionalities for customizing ad deployments based on specific stores or regions.",
        ],
      },
      {
        type: "image",
        image: img("VUrL1bY3cqIB4iA9C0vDrmsnJU.png", 1016, 710, "Store-specific ad deployment"),
        align: "center",
        maxWidth: 560,
      },
      {
        type: "prose",
        heading: "Analytics Dashboard:",
        paragraphs: [
          "Provided insights into ad performance with detailed graphs and metrics.",
        ],
      },
      {
        type: "row",
        images: [
          img("pyV24z46yUfxCZuQrpCLwZcKOw.png", 788, 1076, "Analytics dashboard"),
          img("jNOSZwYhEcJvnzXM6cBXx198xH4.png", 792, 954, "Analytics charts"),
        ],
      },
      {
        type: "prose",
        heading: "Other Features:",
        paragraphs: [
          "Designed a profile page for user settings and a calendar for scheduling ad campaigns.",
        ],
      },
      {
        type: "image",
        image: img("eGjAXEPJYt39dQ54iaqN68lYo9s.png", 516, 882, "Profile and calendar"),
        align: "left",
        maxWidth: 420,
      },
      {
        type: "prose",
        heading: "Challenges and Solutions",
        items: [
          {
            title: "Scalability:",
            body: "Ensured the platform could handle ad deployments across numerous locations by designing adaptable and scalable features.",
          },
          {
            title: "User Accessibility:",
            body: "Incorporated intuitive UI/UX principles to simplify ad management for users with varying technical expertise.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Tools and Technologies",
        items: [
          { title: "Design Tools:", body: "Figma for creating and refining the design components." },
          { title: "Collaboration:", body: "Agile methodologies for iterative development with team members." },
        ],
      },
      {
        type: "prose",
        heading: "Outcome",
        paragraphs: ["The final product enabled Albertsons to:"],
        items: [
          { body: "Streamline the process of ad deployment across different locations." },
          { body: "Improve targeting accuracy and effectiveness of marketing campaigns." },
          { body: "Access real-time analytics for data-driven decision-making." },
        ],
      },
      {
        type: "row",
        images: [
          img("zChwn2GSMQW0t7JfzKBO44bNLjQ.png", 1092, 972, "Additional platform screen"),
          img("KvTzIcPp7WIqFHAgw1ZVP37f1s.png", 788, 698, "Additional platform screen"),
        ],
      },
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
    coverAlt: "Accessible Hawk Hub phones",
    href: "/work/accessible-hawk",
    summary:
      "Accessible Hawk is a mobile application designed to support students with accessibility resources and campus navigation tools.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Accessible Hawk is a mobile application designed to support students by providing accessibility resources and campus navigation tools tailored for individuals with diverse needs. The app integrates essential services to enhance student experience and promote inclusivity on campus.",
        ],
      },
      {
        type: "prose",
        heading: "Features",
        items: [
          {
            title: "Welcome Page:",
            body: "A welcoming screen with the app’s logo and tagline, setting a professional and inclusive tone for the app.",
          },
        ],
      },
      {
        type: "split",
        copySide: "right",
        copy: {
          heading: "Login and Signup:",
          paragraphs: [
            "Simple and accessible login and signup forms with large input fields and clear call-to-action buttons, ensuring ease of use for all users.",
          ],
        },
        images: [img("sJYb2Pm2ueiKBYT6SPuYsB4Y0.png", 1342, 858, "Welcome, sign up, and welcome screens")],
      },
      {
        type: "split",
        copySide: "left",
        copy: {
          items: [
            {
              title: "Home Page:",
              body: "Displays a curated list of accessibility tips, upcoming events, and links to essential resources.",
            },
            {
              title: "Dashboard:",
              body: "Central hub providing quick access to the app’s main features, such as maps, events, and support services.",
            },
          ],
        },
        images: [img("URuFJCPUsnKjP1W57SXmuM98U.png", 1052, 554, "Landing and home screens")],
      },
      {
        type: "split",
        copySide: "right",
        copy: {
          items: [
            {
              title: "Service Directory:",
              body: "A categorized list of accessibility services available on campus, including counseling, physical assistance, and learning support.",
            },
            {
              title: "Booking Assistance:",
              body: "Feature to schedule appointments with accessibility advisors or request support services.",
            },
          ],
        },
        images: [
          img("P1qFXJhwBQb88CnIcX2SNANfMUU.png", 436, 638, "Booking and confirm screens"),
          img("zNyzVQnOHfCl1Sx1FjPxo0X9Q.png", 498, 1062, "Appointment confirmed"),
        ],
      },
      {
        type: "split",
        copySide: "left",
        copy: {
          paragraphs: [
            "A fully interactive campus map highlighting accessible routes, building entrances, parking spots, and elevators.",
            "Users can search for specific locations or filter the map based on accessibility needs (e.g., wheelchair access).",
          ],
        },
        images: [img("RiVV6fpsVopaflt7gccAtSvCto.png", 520, 388, "Accessibility map screens")],
      },
      {
        type: "prose",
        items: [
          {
            title: "Bus Schedules:",
            body: "Real-time updates on bus arrivals and departures, helping students plan their commute efficiently.",
          },
          {
            title: "Events Calendar:",
            body: "Displays upcoming campus events with filters for accessibility-friendly events.",
          },
          {
            title: "Search Page:",
            body: "A powerful search feature to quickly locate buildings, classrooms, or facilities on campus, with detailed accessibility information for each location.",
          },
        ],
      },
      {
        type: "row",
        images: [
          img("XCHuxFF4t6wM145rpDqGBFStR4.png", 818, 694, "Bus, events, and search screens"),
          img("h5xxYeNWXw5jVS0nmvjbbjr9YEE.png", 564, 466, "Search and events screens"),
        ],
      },
      {
        type: "split",
        copySide: "left",
        copy: {
          items: [
            {
              title: "Personalized profiles",
              body: "for managing user preferences, accessibility settings, and saved locations or routes.",
            },
            {
              title: "Information Hub:",
              body: "Educational resources about accessibility and inclusivity on campus.",
            },
            {
              title: "Feedback Page:",
              body: "Allows students to report issues or provide feedback about accessibility challenges on campus.",
            },
          ],
        },
        images: [img("dCxQBiXwdlVLBZOqpnafCHRL6Y.png", 556, 762, "Profile, hub, and feedback screens")],
      },
      {
        type: "prose",
        paragraphs: [
          "We designed each page in Figma, ensuring a clean and intuitive user interface. Developed the information architecture, organizing features logically to enhance usability. Conducted user testing to validate navigation flows and accessibility compliance. Focused on creating accessible visual designs that adhere to WCAG standards, such as high contrast, large text sizes, and simple navigation.",
        ],
      },
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
      "Property Solutions is a mobile app for booking and providing property management services.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Property Solutions is a mobile app designed to streamline the process of booking and providing services for property management. Whether users need lawn care, pest control, or roofing services—or want to offer their own skills to others—Property Solutions makes it easy to connect, communicate, and transact.",
        ],
      },
      {
        type: "prose",
        heading: "Role and Responsibilities",
        items: [
          { title: "UI/UX Design:", body: "Created the entire mobile app interface using Figma." },
          {
            title: "User Flow Design:",
            body: "Designed intuitive user flows for onboarding, service search, booking, and profile management.",
          },
          {
            title: "Visual Design System:",
            body: "Developed a consistent visual language, including typography, color palette, and button components.",
          },
          { title: "Prototyping:", body: "Built interactive prototypes for user testing and feedback." },
        ],
      },
      {
        type: "split",
        copySide: "left",
        copy: {
          heading: "Seamless Onboarding:",
          paragraphs: [
            "A step-by-step sign-up process, including service preferences and profile setup, ensures users get started effortlessly.",
          ],
        },
        images: [
          img("QoEVApAk47ByQ9lPlpXb2SxOr0.png", 998, 1386, "Onboarding screens"),
          img("CjjFLovZEuESnp1raFDaDj1XChg.png", 644, 800, "Service preference screens"),
        ],
      },
      {
        type: "split",
        copySide: "right",
        copy: {
          items: [
            {
              title: "Dual-Purpose Platform:",
              body: "Users can both book services and offer their own, providing flexibility and value.",
            },
            {
              title: "Dynamic Search Filters:",
              body: "Allows users to quickly find specific services based on location, type, and other parameters.",
            },
          ],
        },
        images: [
          img("VyX2fEZ4ZVN4UPxrAzmlOjlqxCY.png", 672, 1772, "Service search"),
          img("cnGi7XCxbWKcsTM1LubkUb6Y.png", 666, 934, "Service provider and booking"),
        ],
      },
      {
        type: "trio",
        left: {
          heading: "Inbox and Notifications:",
          paragraphs: [
            "Keeps users updated on service requests, ongoing tasks, and communication with clients or providers.",
          ],
        },
        center: [img("kYgFPT7KqNU6KFr7GWvEho2mJuk.png", 736, 2016, "Inbox")],
        right: {
          heading: "User Profiles:",
          paragraphs: [
            "Comprehensive profiles showcase user history, reviews, and skills for trust-building.",
          ],
        },
        rightImages: [img("dumv9VY71ONEPZQdQVxGkes8BM.png", 676, 852, "Profile and settings")],
      },
      {
        type: "prose",
        heading: "Design Highlights",
        items: [
          {
            title: "Typography:",
            body: "Leveraged the Poppins typeface for a clean, modern, and approachable feel.",
          },
          {
            title: "Interactive Components:",
            body: "Designed toggle switches, buttons, and cards for a cohesive user experience.",
          },
          {
            title: "Color Palette:",
            body: "A calming combination of purple and turquoise represents trust and innovation, with green, orange, and red accents for status indicators.",
          },
          {
            title: "Responsive Design:",
            body: "Ensured scalability for various screen sizes and future web adaptation.",
          },
        ],
      },
      {
        type: "image",
        image: img("VvGf3nPuhLXi6yLS9IGf84L9wNc.png", 1758, 1130, "Design system and components"),
        align: "wide",
      },
      {
        type: "prose",
        heading: "Process",
        items: [
          {
            title: "Research:",
            body: "Conducted competitor analysis to identify user needs and gaps in existing service platforms.",
          },
          { title: "Wire-frames:", body: "Created low-fidelity wireframes to outline key user flows." },
          {
            title: "Design System:",
            body: "Established a reusable component library for consistent branding and faster iteration.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Impact and Learnings",
        paragraphs: [
          "This project taught me the importance of balancing visual design with functionality, creating a user-centric experience, and collaborating effectively on a project from ideation to final design. The process honed my skills in Figma, interaction design, and building scalable design systems.",
        ],
      },
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
      "Capstone redesign of the Region of Waterloo’s online resident forms for accessibility and ease of use.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "As part of my final capstone in the UX Design program at Wilfrid Laurier University, I collaborated with the Region of Waterloo to redesign their online resident forms. The goal was to create a more intuitive, accessible, and unified form system that could integrate with their upcoming digital services portal.",
          "We approached this challenge by asking:",
        ],
      },
      {
        type: "quote",
        text: "How might we create a standardized, accessible, and intuitive online form experience for residents while ensuring ease of use, respect for diverse user needs, and compliance with regional guidelines?",
      },
      {
        type: "prose",
        heading: "My Contributions",
        items: [
          {
            title: "Prototype Refinement:",
            body: "Finalized visual and functional tweaks in Figma, ensuring accessibility, alignment, and mobile responsiveness.",
          },
          {
            title: "Usability Testing:",
            body: "Ran A/B tests on our redesign vs. original forms, collecting feedback and timing user flows to guide final improvements.",
          },
          {
            title: "User Research:",
            body: "Led surveys, interviews, and card sorting; used affinity diagramming to define key user needs and pain points.",
          },
          {
            title: "Information Architecture:",
            body: "Helped structure progressive form layouts and simplify navigation based on competitive and IA analysis.",
          },
          {
            title: "Client Report:",
            body: "Co-wrote and edited the final deliverable, aligning research findings and design rationale into a cohesive story.",
          },
          {
            title: "Team Collaboration:",
            body: "Supported strong communication and co-creation through regular critiques and shared digital workspaces.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Design Process",
        paragraphs: [
          "We used Design Thinking and the Double Diamond framework, ensuring iterative feedback loops from users and stakeholders:",
        ],
        items: [
          {
            title: "1. Empathize & Define",
            body: "Identified major pain points: cluttered layouts, mobile friction, inaccessible PDFs. Built detailed personas and journey maps based on real user feedback.",
          },
          {
            title: "2. Ideate",
            body: "Explored layout variations using sketches, storyboards, and wireframes. Prioritized accessibility and form clarity across devices.",
          },
          {
            title: "3. Prototype",
            body: "Developed responsive prototypes across three fidelity levels. Iterated designs based on usability walkthroughs and think-aloud protocols.",
          },
          {
            title: "4. Test",
            body: "Conducted A/B testing comparing the original forms to our redesign. Validated efficiency through timing, error rate reduction, and user satisfaction metrics.",
          },
        ],
      },
      {
        type: "image",
        image: img("E71acb1CIgiw7xoyAHyjU99ZE.jpg", 1020, 717, "Persona research board"),
        align: "wide",
      },
      {
        type: "prose",
        heading: "Prototype Highlights",
        items: [
          {
            title: "Mid-Fidelity",
            body: "Introduced progressive flow, logical grouping, and simplified navigation. Focused on structure over visuals.",
          },
        ],
      },
      {
        type: "row",
        images: [
          img("BwwUofr7AFrAb5gZzUQ2AbxAPE.jpg", 524, 421, "Mid-fidelity welcome"),
          img("t6XGRe1FwZ5dXwVeBbwHqoa5wxA.jpg", 592, 381, "Mid-fidelity owner details"),
          img("7JOiTfnQNi6rKjjMvhmMwUrZtwk.jpg", 532, 381, "Mid-fidelity access details"),
        ],
      },
      {
        type: "prose",
        items: [
          {
            title: "High-Fidelity",
            body: "Finalized with responsive layout, accessible input fields, and branding alignment. Included payment screens, file uploads, login states, and submission confirmation.",
          },
        ],
      },
      {
        type: "row",
        images: [
          img("UGvo3yz8F36r8JElmpRcIIYTIZg.jpg", 590, 421, "High-fidelity welcome"),
          img("j9SkOg3KEjXHsnT769KXC113eo.jpg", 590, 421, "High-fidelity owner details"),
          img("EHUcOuGclakJOKLKiF8I5Z0m4.jpg", 592, 421, "High-fidelity location"),
        ],
      },
      {
        type: "row",
        images: [
          img("ppK5BWn1OqBYW9O053c2Xlc5nM.png", 1596, 1144, "High-fidelity access"),
          img("dOemonJ5PNgkSh7VBbR5Ni1vqs.jpg", 592, 421, "High-fidelity payment"),
        ],
      },
      {
        type: "prose",
        heading: "Challenges",
        items: [
          {
            title: "Recruitment Constraints:",
            body: "We had to rely on personal networks due to outreach limitations.",
          },
          {
            title: "Balancing User Needs vs. Stakeholder Goals:",
            body: "Negotiating feasibility with user experience.",
          },
          {
            title: "Accessibility at Scale:",
            body: "Ensuring all features translated across devices and formats.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Final Deliverable",
        paragraphs: ["Our high-fidelity prototype included:"],
        items: [
          { body: "A scalable form template for all departments" },
          { body: "Progress bars and tooltips for improved form clarity" },
          { body: "WCAG 2.2-compliant features: font resizing, high contrast, keyboard navigation" },
          { body: "Responsive mobile layout with larger tap targets and minimized scrolling" },
          { body: "A clear, accessible confirmation process with optional support channels" },
        ],
      },
      {
        type: "prose",
        heading: "What I Learned",
        paragraphs: [
          "This project taught me how to lead through complexity while staying grounded in human-centered design. I refined my skills in:",
        ],
        items: [
          { body: "Collaborative project management using tools like Figma, Google Docs, and Discord" },
          {
            body: "Applying UX principles like cognitive load theory, Gestalt laws, and Jakob’s Law in real-world settings",
          },
          {
            body: "Designing for accessibility not just as a checklist, but as a foundation of inclusive design",
          },
          { body: "Communicating with stakeholders and translating feedback into actionable design changes" },
        ],
      },
      {
        type: "prose",
        heading: "Final Thoughts",
        paragraphs: [
          "We concluded the project by presenting our work during a Region-hosted showcase, highlighting our user research, design decisions, and potential for real-world implementation.",
          "This capstone was a transformative experience that helped me grow as both a UX practitioner and a collaborator. I’m proud of what our team accomplished and grateful to the Region of Waterloo for trusting us with such a meaningful challenge.",
        ],
      },
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
      "Graphic design projects from university: posters for events, campaigns, and assignments.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "I worked on graphic design projects during university, creating visually engaging posters for events, campaigns, and assignments, showcasing my creativity and design skills.",
        ],
      },
      {
        type: "grid",
        images: [
          img("Fi6KO0lH1Q8Vn6ZeZM6rIAJ6bTQ.jpg", 1314, 1746, "Santa’s Bingo Bash poster"),
          img("P0AOyVkkUJEGyJXEDuW8RNle0.jpg", 1314, 1746, "Christmas Karaoke poster"),
          img("SThTfHFoGZx9PtQjCWNwZI.jpg", 648, 648, "Bobbi Brown Spazaram poster"),
          img("J1qIb95T95pt3lCqH9OdCqYwA.jpg", 648, 648, "Bobbi Brown DJ Night poster"),
          img("pK7YlKXteZs8t7bHJCZJ5Q9ACg.jpg", 648, 648, "Bobbi Brown vinyl poster"),
          img("xlXAqoohBWXCm83cuvJ86YXqfqQ.jpg", 648, 648, "Spazaram poster"),
        ],
      },
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
  { src: "/images/1NgJHzhVmlM2ZwqlWTrs3TUYSs.jpg", alt: "River through trees", width: 3024, height: 4032 },
  { src: "/images/ExspkDHiOy6XnbnShbdiHa03Gg.jpg", alt: "Field of yellow black-eyed Susans", width: 4032, height: 3024 },
  { src: "/images/wyU9BwWoCVZn61WQ6i7sKPcO3m8.jpg", alt: "Mallard swimming in a pond", width: 3024, height: 4032 },
  { src: "/images/RanTg5coxtHxSQu9nfMX38d8is.jpg", alt: "Fallen autumn leaves along a curb", width: 3000, height: 4000 },
  { src: "/images/31Js0UzxEmcLYCaPd5rQH8u8L24.jpg", alt: "Red berries on green leaves", width: 3024, height: 4032 },
  { src: "/images/vIC6ZWIc2yxb3ahAI0Uo15vd1Y.jpg", alt: "Swallowtail butterfly", width: 3603, height: 2486 },
  { src: "/images/dVfWEA7Tf2tQ6LAT3aCyxR6HWeQ.jpg", alt: "Railroad tracks through autumn trees", width: 1168, height: 1462 },
  { src: "/images/4mZhcq8or9QZ9ShCqZoNHZDQZJU.jpg", alt: "River through a green valley", width: 4032, height: 3024 },
  { src: "/images/A9PMQeecOe08t6LxgndSahsxjE.jpg", alt: "Hillside town lit up at night", width: 3024, height: 4032 },
];

export const photographyPreview = [photos[0], photos[4], photos[1]];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
}

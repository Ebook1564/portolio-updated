import { ContentBlock } from "../tips-and-tricks/data";

export type EngineeringTopic = "Networking" | "Rendering" | "Physics" | "AI" | "Audio" | "UI/UX" | "Gaming";

export interface GameDevLog {
    id: number;
    title: string;
    topic: EngineeringTopic;
    excerpt: string;
    date: string;         // New field
    readTime: string;     // New field
    author: string;       // New field
    imageGradient: string; // Aesthetic gradient for the card
    imageUrl: string;      // Thematic image for the card
    keyTopics: string[];

    // The "Hook" - What went wrong?
    challenge: {
        title: string;
        description: string;
        icon: "bug" | "cpu" | "network" | "render";
    };

    // The "Fix" - How we solved it
    solution: {
        title: string;
        description: string;
        codeSnippet?: string; // Optional one-liner
    };

    // Pro Tips
    keyTakeaway: string;

    // Full Story Content
    content: ContentBlock[];
}

export const devLogs: GameDevLog[] = [
    {
        id: 1,
  title: "Prince of Persia Remake: 3 Years of Work Erased Overnight",
  topic: "Gaming",
  excerpt: "Voice actress Eman Ayaz spent 3 years on Ubisoft's cancelled Sands of Time remake and learned about it via WhatsApp, not from the studio. A leaked internal demo fueled the fallout.",
  date: "Jan 28, 2026",
  readTime: "6 min read",
  author: "Prashant Saxena",
  imageGradient: "from-red-600 to-rose-700",
  imageUrl: "/images/news/prince-of-persia-cancelled.png",
  keyTopics: ["Ubisoft AnvilNext", "Motion Capture", "AAA Voice Acting"],
  
  challenge: {
    title: "Silent Cancellation",
    description: "Eman Ayaz delivered what she called her career-best performance over 3 years, only to discover the project's cancellation through family WhatsApp messages instead of an official channel.",
    icon: "bug"
  },
  
  solution: {
    title: "Leaked Internal Demo",
    description: "An hour-long private presentation showcasing dev commentary, gameplay, and cutscenes leaked online before Ubisoft issued copyright takedowns across platforms.",
    codeSnippet: "NDA → WhatsApp → Leak → Takedown"
  },
  
  keyTakeaway: "Contractors under NDA lose 3+ years of work with no public credit when projects cancel.",
  
  content: [
    { type: 'header', level: 2, text: "3 Years Disappears in Silence" },
    
    { type: 'paragraph', text: "Eman Ayaz believed she was Farah Farah, Prince of Persia's iconic companion, for what Ayaz has described the role as the most emotionally invested performance of her career. For nearly three years, she recorded dialogue, performed motion capture, and worked closely with the development team under strict non-disclosure agreements. When news of the cancellation emerged, it did not arrive via Ubisoft HR or production staff—but through informal messages passed between acquaintances, leaving her without closure or explanation." },
    { type: 'paragraph', text: "Prince of Persia: The Sands of Time originally released in 2003 and became one of Ubisoft’s best-known action-adventure games, making a modern remake a high-expectation project for longtime fans. Development for the sequel seemed to have been progressing sluggishly since the initial announcement in 2020, having been halted and restarted altogether in 2023. Ubisoft Montreal was asked to take charge over the project after it being withdrawn from Ubisoft Pune and Ubisoft Mumbai divisions. The calling off of the remake now puts a significant blow to the franchise's fall from grace, with mediocre releases spanning the last decade." },
    
    { type: 'alert', variant: 'warning', title: "NDA Blackout", text: "Bound by non-disclosure agreement, Ayaz cannot name the project directly. Her grief compounds knowing the performance may never see daylight." },
    
    { type: 'paragraph', text: "Bound by non-disclosure agreement, Ayaz cannot name the project directly but has uploaded a video mentioning how the journey has been for her, helping her, in her own words, let her go beyond her own limits. Her grief compounds knowing the performance may never see daylight. Unless a publisher reuses assets in another project, recordings often remain unreleased and inaccessible to the public because they are owned by the publisher and may be covered by NDAs and contracts" },
    
    { type: 'header', level: 2, text: "Leaked Internal Build" },
    
    { type: 'paragraph', text: "Before takedowns, a 60+ minute internal presentation circulated online. The leak that followed was unusually extensive. Rather than a short gameplay clip, the footage showed an internal review presentation: Developers discussed remake changes from the 2003 classic alongside raw gameplay footage and cutscenes—far more revealing than typical marketing demos." },
    
    { type: 'paragraph', text: "Ubisoft is actively trying to take down elements from said footage including concept art, screenshots as well as pre-alpha footage, ceasing further exposure of the now-deceased project." },
    { type: 'grid', items: [
      {
        title: "📹 Leaked Content",
        list: ["Hour-long dev presentation", "Raw gameplay footage", "Unfinished cutscenes", "Technical changes vs 2003"],
        variant: 'good'
      },
      {
        title: "⚖️ Ubisoft Response",
        list: ["Copyright takedowns issued", "Platforms scrubbed content", "Official silence maintained", "No contractor notification"],
        variant: 'bad'
      }
    ]},
    
    { type: 'header', level: 2, text: "Ubisoft's Cancellation Wave" },
    
    { type: "table", headers: ["Timeline", "Event", "Impact"], rows: [
      ["2003", "Original Sands of Time", "Ubisoft classic established"],
      ["2020", "Remake announced", "High fan expectations"],
      ["2021-2023", "Development hell", "Multiple delays reported"],
      ["2026", "Silent cancellation", "3 years erased, NDA enforced"]
    ]},
    
    { type: 'header', level: 3, text: "Contractor Devastation" },
    
    { type: 'paragraph', text: "Ayaz described this as her most devastating career moment. Contractors and performers bound by NDAs lose years of work without portfolio credits or public recognition when projects vanish." },
    
    { type: 'quote', text: "'I gave my best performance and it may never be seen.'", author: "Eman Ayaz" },
    
    { type: 'header', level: 2, text: "Industry Pattern Recognition" },
    
    { type: 'list', style: 'unordered', items: [
      "Ubisoft's broader cancellation trend (Ghost Recon, others)",
      "Organizational restructuring + layoffs",
      "Protracted development → sudden cuts",
      "NDA contractors left in information vacuum"
    ]},
    
    { type: 'alert', variant: 'tip', title: "Hidden Labor Cost", text: "Voice actors, motion capture artists, and contractors represent 20-30% of AAA dev budgets but vanish from credits when projects cancel." },
    
    { type: 'header', level: 2, text:"The Bigger Picture" },
    
    { type: 'paragraph', text: "This may just be one of the first of many dominoes to fall as Ubisoft has announced a company “reset” that includes closing two studios and cancelling six games, including the Sands of Time Remake alongside five other unnamed IPs. The news pushed the company's share price down 34% to its lowest level in 15 years. Separate reporting and commentary framed the move as a reorganisation into different creative groups aimed at focusing on fewer, established series . Rumors circulating via a Google News roundup also suggest Ubisoft may have ended or paused development on its Watch Dogs franchise, though these claims are presented as reports from outlets citing “insiders” rather than a formal company statement in the provided links" },
    { type: 'paragraph', text: "Sands of Time, alongside 5 other unnamed IPs remake joins Ghost Recon Frontline in Ubisoft's cancellation graveyard, amid restructuring, shifting live-service priorities, and rising development costs. The leaked demo, now memory-holed, served as unintended postmortem for a promising revival that never shipped. For contractors, the consequences are uniquely severe: cancelled projects cannot be discussed, credited, or even referenced in portfolios, creating unexplained gaps in professional histories." },
    
    { type: 'grid', items: [
      {
        title: "🎙️ Contractor Reality",
        list: ["3+ years uncredited work", "NDA prevents discussion", "No portfolio proof", "Career gap explanation"],
        variant: 'bad'
      },
      {
        title: "📈 Publisher Strategy",
        list: ["Quiet cancellations", "Copyright enforcement", "No public acknowledgment", "Resource reallocation"],
        variant: 'bad'
      }
    ]},  ]
},
    {
  id: 2,
  title: "Stop Killing Games: 1.3M Signatures Force EU Action",
  topic: "Gaming",
  excerpt: "What began as backlash over Ubisoft’s shutdown of The Crew has escalated into the largest gaming-related civic action in EU history. With 1.29 million verified signatures—far beyond the legal threshold—the Stop Killing Games initiative now forces European lawmakers to confront whether purchased games can legally be rendered unplayable.",
  date: "Jan 28, 2026",
  readTime: "7 min read",
  author: "Prashant Saxena",
  imageGradient: "from-emerald-600 to-teal-700",
  imageUrl: "/images/news/stop-killing-games.png",
  keyTopics: ["EU Legislation", "Consumer Rights", "Always-Online DRM"],
  
  challenge: {
    title: "Server Shutdown Blackout",
    description: "After nearly three years of sustained performance work, including motion capture and voice acting sessions, Eman Ayaz learned that Ubisoft had cancelled the Sands of Time remake not through official communication, but through secondhand WhatsApp messages circulating among friends and family.",
    icon: "network"
  },
  
  solution: {
    title: "1.29M Verified Signatures",
    description: "Campaign clears EU threshold (90% validation rate), forcing formal consideration by European Commission. Largest gaming civic action ever.",
    codeSnippet: "1.4M submitted → 1.29M verified → EU must respond"
  },
  
  keyTakeaway: "Gamers finally weaponized collective action against publisher server kills.",
  
  content: [
    { type: 'header', level: 2, text: "1.3 Million Gamers vs Publishers" },
    
    { type: 'paragraph', text: "After Ubisoft bricked The Crew via server shutdown, Ross Scottwho compiled a list of \"dead\" games that had been taken offline by their original publishers, subsequently laying way to the 'Stop Killing Games' campaign. The movement has mobilized an astounding and unprecedented figure of 1.4M signatures, approximately 1.3M of which have passed EU verification, thus requiring further formal legislation" },
    
    { type: 'alert', variant: 'tip', title: "Historic Threshold", text: "Largest EU Citizens' Initiative from gaming community. Compels European Commission to schedule hearings and review proposals." },
    
    { type: 'header', level: 2, text: "The Crew Flashpoint" },
    
    { type: 'paragraph',text: "When The Crew’s servers went offline in 2024, the game became completely unplayable—even in solo modes. Unlike previous shutdowns where games remained partially functional, this total loss made the issue immediately tangible to players, transforming abstract DRM debates into a visible consumer harm."},
    { type: 'paragraph', text: "The Stop Killing Games campaign represents an unprecedented moment in gaming history: a consumer-driven movement powerful enough to activate formal EU legislative processes. Sparked by Ubisoft’s shutdown of The Crew, the campaign argues that games sold at retail should not legally disappear when publishers discontinue servers." },
    { type: 'paragraph', text: "Under EU law, a successful European Citizens’ Initiative does not automatically create legislation, but it does compel the European Commission to respond publicly, host hearings, and issue a legal position. Few initiatives—especially in digital entertainment—ever reach this stage."},
    { type: 'paragraph', text: "Campaign organizers argue that publishers have exploited a legal gray area: games are marketed as products, but functionally treated as revocable services. The proposed remedy is narrow but impactful—mandating that games remain playable in some offline form after official support ends."},
    { type: 'paragraph', text: "For publishers, the implications are significant. Always-online architectures reduce piracy and enable monetization, but EU-mandated offline fallbacks would force architectural changes, long-term maintenance planning, and potentially retroactive patches for legacy titles."},
    { type: 'paragraph', text: "The coming months will involve legal impact assessments, industry lobbying, and parliamentary debate. Regardless of the final outcome, Stop Killing Games has already reshaped the conversation, establishing that players are not merely audiences, but organized stakeholders capable of influencing policy."},

    { type: 'grid', items: [
      {
        title: "💀 Killed Games",
        list: ["The Crew (Ubisoft)", "Anthem (EA)", "Knockout City (Velan)", "Babylon's Fall (Square Enix)"],
        variant: 'bad'
      },
      {
        title: "📊 Signature Stats",
        list: ["1.4M submitted", "1.29M verified (90%)", "300K above threshold", "23 EU countries"],
        variant: 'good'
      }
    ]},
    
    { type: 'header', level: 2, text: "EU Citizens' Initiative Mechanics" },
    
    { type: 'table', headers: ["Requirement", "Stop Killing Games", "Status"], rows: [
      ["Minimum Signatures", "967K", "✅ 1.29M (134%)"],
      ["Country Minimums", "23 EU states", "✅ All cleared"],
      ["Verification Period", "3 months", "✅ Completed"],
      ["Commission Response", "Formal consideration", "🚀 Next phase"]
    ]},
    
    { type: 'header', level: 3, text: "What Happens Next" },
    
    { type: 'list', style: 'ordered', items: [
      "European Commission receives validated petition",
      "Parliamentary hearings scheduled (Q2 2026)",
      "Legal analysis of 'right to play' purchased games",
      "Potential consumer rights directive proposal"
    ]},
    
    { type: 'header', level: 2, text: "Always-Online DRM Problem" },
    
    { type: 'paragraph', text: "Publishers render 20+ major titles unplayable yearly via server shutdowns. The SKG Campaign demands that the game remain in a functional and playable albeit permanently disconnected/offline state, taking into consideration the counter argument of the opposition of high server running costs for said video game titles. This may be achieved throough single-player modes remaining functional post-support, treating games as purchased goods not subscriptions." },
    
    { type: 'code', language: 'javascript', filename: 'server-death.js', code: `// Current Reality
const game = buyGame("The Crew");
await connectServers(); // Publisher kills these
if (!serversOnline) {
  game.status = "BRICKED"; // 100% legal today
  refund = "No";
}` },
    
    { type: 'header', level: 2, text: "Industry Implications" },
    
    { type: 'grid', items: [
      {
        title: "✅ Gamer Wins",
        list: ["Forces EU legislative debate", "Sets consumer rights precedent", "Pressure on always-online model", "Historical civic participation"],
        variant: 'good'
      },
      {
        title: "⚠️ Publisher Fears",
        list: ["Mandated offline modes", "Server cost liability", "DRM restrictions", "Retroactive patches required"],
        variant: 'bad'
      }
    ]},
    
    { type: 'header', level: 3, text: "Ubisoft Epicenter" },
    
    { type: 'list', style: 'unordered', items: [
      "The Crew shutdown has catalyzed 1.3M signatures, a number that grows by the minute",
      "Multiple Ubisoft titles have been affected historically because of the actions of the company and further backlash on said actions",
      "The French/EU jurisdiction adds further pressure with their solidified stance on the movement",
      "The unprecedented moment calls for a potential test case for new legislation"
    ]},
    
    { type: 'alert', variant: 'warning', title: "Publisher Counter", text: "Expect 'server costs too high' + 'anti-piracy' arguments. Live service model profitability hinges on artificial scarcity." },
    
    { type: 'quote', text: "Purchased games shouldn't become e-waste when corporations flip a switch.", author: "Ross Scott, Campaign Organizer" },
    
    { type: 'header', level: 2, text: "Technical Roadmap Ahead" },
    
    { type: 'paragraph', text: "The considerations of the European Union may very well trigger impact assessments, stakeholder hearings, and potential directive drafting. Success for the lobbying party would mean publishers are obligated to guarantee offline functionality for purchased titles, a seismic shift for live-service economics." },
    
    { type: 'alert', variant: 'tip', title: "Dev Action Items", text: "Single-player advocates: archive server emulators now. Live-service teams: budget offline modes from day one. EU devs: prepare testimony for Q2 hearings." }
  ]
}
        ];

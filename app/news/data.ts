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
    
    { type: 'paragraph', text: "Eman Ayaz believed she was Farah Farah, Prince of Persia's iconic companion, for what she called her career's best performance. After three years of motion capture and voice work, she learned via family WhatsApp messages that Ubisoft cancelled Prince of Persia: The Sands of Time remake." },
    
    { type: 'alert', variant: 'warning', title: "NDA Blackout", text: "Bound by non-disclosure agreement, Ayaz cannot name the project directly. Her grief compounds knowing the performance may never see daylight." },
    
    { type: 'paragraph', text: "Bound by non-disclosure agreement, Ayaz cannot name the project directly. Her grief compounds knowing the performance may never see daylight." },
    
    { type: 'header', level: 2, text: "Leaked Internal Build" },
    
    { type: 'paragraph', text: "Before takedowns, a 60+ minute internal presentation circulated online. Developers discussed remake changes from the 2003 classic alongside raw gameplay footage and cutscenes—far more revealing than typical marketing demos." },
    
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
    
    { type: 'paragraph', text: "Sands of Time remake joins Ghost Recon Frontline and 5 other unnamed IPs in Ubisoft's cancellation graveyard. The leaked demo, now memory-holed, served as unintended postmortem for a promising revival that never shipped." },
    
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
  id: 3,
  title: "Stop Killing Games: 1.3M Signatures Force EU Action",
  topic: "Gaming",
  excerpt: "European Citizens' Initiative clears 1.29M verified signatures—300K above threshold—forcing EU lawmakers to address games killed by server shutdowns like Ubisoft's The Crew.",
  date: "Jan 28, 2026",
  readTime: "7 min read",
  author: "Prashant Saxena",
  imageGradient: "from-emerald-600 to-teal-700",
  imageUrl: "/images/news/stop-killing-games.png",
  keyTopics: ["EU Legislation", "Consumer Rights", "Always-Online DRM"],
  
  challenge: {
    title: "Server Shutdown Blackout",
    description: "1.4M signatures submitted after Ubisoft's The Crew became unplayable post-server shutdown, sparking gamer backlash against always-online DRM that kills purchased games.",
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
    
    { type: 'paragraph', text: "After Ubisoft bricked The Crew via server shutdown, Ross Scott's 'Stop Killing Games' campaign mobilized 1.4M signatures. 1,294,188 passed EU verification—300K+ above requirement—forcing formal legislative consideration." },
    
    { type: 'alert', variant: 'tip', title: "Historic Threshold", text: "Largest EU Citizens' Initiative from gaming community. Compels European Commission to schedule hearings and review proposals." },
    
    { type: 'header', level: 2, text: "The Crew Flashpoint" },
    
    { type: 'paragraph', text: "Ubisoft's 2024 server shutdown rendered The Crew completely unplayable despite purchased licenses. No single-player/offline mode existed—game vanished entirely, galvanizing always-online DRM backlash." },
    
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
    
    { type: 'paragraph', text: "Publishers render 20+ major titles unplayable yearly via server shutdowns. Campaign demands offline/single-player modes remain functional post-support, treating games as purchased goods not subscriptions." },
    
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
      "The Crew shutdown catalyzed 1.3M signatures",
      "Multiple Ubisoft titles affected historically",
      "French/EU jurisdiction adds pressure",
      "Potential test case for new legislation"
    ]},
    
    { type: 'alert', variant: 'warning', title: "Publisher Counter", text: "Expect 'server costs too high' + 'anti-piracy' arguments. Live service model profitability hinges on artificial scarcity." },
    
    { type: 'quote', text: "Purchased games shouldn't become e-waste when corporations flip a switch.", author: "Ross Scott, Campaign Organizer" },
    
    { type: 'header', level: 2, text: "Technical Roadmap Ahead" },
    
    { type: 'paragraph', text: "EU consideration triggers impact assessments, stakeholder hearings, and potential directive drafting. Success means publishers must guarantee offline functionality for purchased titles—a seismic shift for live-service economics." },
    
    { type: 'alert', variant: 'tip', title: "Dev Action Items", text: "Single-player advocates: archive server emulators now. Live-service teams: budget offline modes from day one. EU devs: prepare testimony for Q2 hearings." }
  ]
}
        ];

import { Video, Code, Layout, DollarSign, Upload, PenTool } from "lucide-react"

export type ContentBlock =
    | { type: 'header'; level: 2 | 3; text: string }
    | { type: 'paragraph'; text: string }
    | { type: 'list'; style: 'unordered' | 'ordered'; items: string[] }
    | { type: 'code'; language: string; code: string; filename?: string }
    | { type: 'alert'; variant: 'tip' | 'warning' | 'info'; title: string; text: string }
    | { type: 'video'; url?: string; caption?: string }
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'quote'; text: string; author?: string }
    | { type: 'grid'; items: { title: string; list: string[]; variant: 'good' | 'bad' }[] }

export interface TutorialData {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    readTime: string;
    author: string;
    avatar: string;
    date: string;
    icon: any;
    color: string;
    heroImage: string; // Abstract gradient or URL
    stats: string;
    content: ContentBlock[];
}

export const tutorials: TutorialData[] = [
    {
        id: 1,
        title: "Building a Flappy Bird Clone in 10 Minutes",
        excerpt: "A rapid-fire crash course on game loops, gravity simulation, and collision detection using vanilla JavaScript.",
        category: "Game Dev 101",
        difficulty: "Beginner",
        readTime: "10 min",
        author: "Alex Rivers",
        avatar: "AR",
        date: "Jan 15, 2026",
        icon: Video,
        color: "blue",
        heroImage: "from-blue-500 to-indigo-500",
        stats: "15 Lessons",
        content: [
            { type: 'header', level: 2, text: "Setting Up the Canvas" },
            { type: 'paragraph', text: "First, we need a simple HTML5 Canvas element. This will be our rendering context." },
            { type: 'code', language: 'html', code: '<canvas id="game" width="320" height="480"></canvas>' },
            { type: 'header', level: 2, text: "The Game Loop" },
            { type: 'paragraph', text: "We use requestAnimationFrame to drive our game at 60fps." },
            {
                type: 'code', language: 'javascript', code: `function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop();` }
        ]
    },
    {
        id: 2,
        title: "Mastering CSS Grid for Game UI",
        excerpt: "Stop struggling with absolute positioning. Learn how to create responsive HUDs and inventory systems with CSS Grid.",
        category: "UI Design",
        difficulty: "Intermediate",
        readTime: "15 min",
        author: "Sarah Chen",
        avatar: "SC",
        date: "Jan 12, 2026",
        icon: Layout,
        color: "indigo",
        heroImage: "from-indigo-500 to-violet-500",
        stats: "Top Rated",
        content: [
            { type: 'header', level: 2, text: "Why Grid?" },
            { type: 'paragraph', text: "CSS Grid allows you to map out your UI in 2D space, perfect for inventory slots." }
        ]
    },
    {
        id: 3,
        title: "Monetization 101: Ads vs IAP",
        excerpt: "Data-driven insights on when to use Rewarded Video ads versus attempting In-App Purchases for casual web games.",
        category: "Business",
        difficulty: "Advanced",
        readTime: "8 min",
        author: "Mike Ross",
        avatar: "MR",
        date: "Jan 08, 2026",
        icon: DollarSign,
        color: "violet",
        heroImage: "from-violet-500 to-purple-500",
        stats: "Commercial",
        content: [
            { type: 'header', level: 2, text: "The Casual Economy" },
            { type: 'paragraph', text: "For hyper-casual games, retention is short. Monetize early with ads." }
        ]
    },
    {
        id: 4,
        title: "Publishing Your First Game to SnappGame",
        excerpt: "Walkthrough of the submission process, art requirements, and how to pass the quality assurance review on day one.",
        category: "Platform",
        difficulty: "Beginner",
        readTime: "5 min",
        author: "Team Snapp",
        avatar: "TS",
        date: "Jan 05, 2026",
        icon: Upload,
        color: "blue",
        heroImage: "from-blue-400 to-cyan-400",
        stats: "Platform Core",
        content: [
            { type: 'header', level: 2, text: "Checklist" },
            { type: 'list', style: 'unordered', items: ["Export to HTML5", "720p Screenshots", "Description"] }
        ]
    },
    {
        id: 5,
        title: "Advanced Sprite Animation Tools",
        excerpt: "Reviewing the top tools in 2026 for creating fluid 2D animations: Spine, DragonBones, and Aseprite.",
        category: "Art",
        difficulty: "Intermediate",
        readTime: "12 min",
        author: "Lisa Wong",
        avatar: "LW",
        date: "Jan 02, 2026",
        icon: PenTool,
        color: "indigo",
        heroImage: "from-indigo-400 to-blue-500",
        stats: "Technical Pick",
        content: [
            { type: 'header', level: 2, text: "Skeletal vs Frame-by-Frame" },
            { type: 'paragraph', text: "Spine uses bones. Aseprite is pixel art." }
        ]
    },
    {
        id: 6,
        title: "WebGPU: Is It Ready?",
        excerpt: "A look at the current state of WebGPU support across browsers and if you should switch from WebGL2 yet.",
        category: "Tech",
        difficulty: "Expert",
        readTime: "10 min",
        author: "Dev Team",
        avatar: "DT",
        date: "Dec 28, 2025",
        icon: Code,
        color: "cyan",
        heroImage: "from-cyan-500 to-blue-500",
        stats: "High Complexity",
        content: [
            { type: 'header', level: 2, text: "Performance Gains" },
            { type: 'paragraph', text: "Compute shaders allow physics on the GPU." }
        ]
    }
];

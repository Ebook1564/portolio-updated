import { Cpu, Sparkles, Layers, Zap, Code2, Gamepad2 } from "lucide-react"

// --- Type Definitions for Scalable Content ---
export type GuideContentBlock =
    | { type: 'header'; level: 2 | 3; text: string; id?: string }
    | { type: 'paragraph'; text: string }
    | { type: 'list'; style: 'unordered' | 'ordered'; items: string[] }
    | { type: 'code'; language: string; code: string; filename?: string }
    | { type: 'alert'; variant: 'tip' | 'warning' | 'info'; title: string; text: string }
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'quote'; text: string; author?: string }
    | { type: 'grid'; items: { title: string; list: string[]; variant: 'good' | 'bad' }[] } // For Do's and Don'ts

export interface GuideData {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;         // New field
    author: string;       // New field
    readTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    icon: any;
    stats: string;
    content: GuideContentBlock[];
}

export const gameDevGuides: GuideData[] = [
    {
        id: 1,
        title: "Optimizing 2D Physics for HTML5 Performance",
        excerpt: "Learn how to manage collision detection and rigid body dynamics efficiently in mobile browsers using Matter.js and custom solvers.",
        category: "Performance",
        date: "Dec 10, 2025",
        author: "Prashant Saxena",
        readTime: "12 min",
        difficulty: "Advanced",
        icon: Cpu,
        stats: "98% Efficiency",
        content: [
            { type: 'header', level: 2, text: "The Single-Threaded Bottleneck" },
            { type: 'paragraph', text: "JavaScript operates on a single thread. This means your game logic, rendering, networking, and physics simulation all fight for the same 16.6ms window (for 60fps). Physics engines like Matter.js or Box2D are CPU-intensive, often consuming 40-50% of your frame budget if left optimization-free." },
            { type: 'alert', variant: 'warning', title: "Key Takeaway", text: "If your physics step takes more than 8ms, you will drop frames on mobile devices." },

            { type: 'header', level: 3, text: "1. Broad-Phase vs. Narrow-Phase" },
            { type: 'paragraph', text: "The naive approach to collision detection involves checking every object against every other object (O(n²)). This is fatal for performance. Instead, we use Spatial Partitioning." },
            {
                type: 'table',
                headers: ["Algorithm", "Best Use Case", "Pros", "Cons"],
                rows: [
                    ["Quadtree", "Sparse Open Worlds", "Adapts to density", "Expensive to rebuild"],
                    ["Spatial Hash (Grid)", "Dense Arcade Games", "O(1) Access Time", "High memory usage"]
                ]
            },

            { type: 'header', level: 3, text: "2. Object Pooling for Rigid Bodies" },
            { type: 'paragraph', text: "Garbage collection (GC) pauses are the enemy of smooth gameplay. Creating and destroying physics bodies every frame (e.g., bullets, particles) generates massive garbage." },
            { type: 'alert', variant: 'tip', title: "Pro Tip", text: "Never use `new Vector2()` inside your update loop. Reuse a global temporary vector or pool your vectors to avoid GC spikes." },

            { type: 'header', level: 3, text: "3. Sub-stepping for Stability" },
            { type: 'paragraph', text: "Never rely on `requestAnimationFrame` delta time directly for physics integration. Fluctuating frame rates will cause your simulation to explode or fast-moving objects to tunnel through walls." },
            {
                type: 'code', language: 'javascript', filename: 'GameLoop.js', code: `// Robust Fixed Timestep Loop
const timeStep = 1 / 60;
let accumulator = 0;

function loop(deltaTime) {
    // Cap lag to avoid "spiral of death"
    if (deltaTime > 0.25) deltaTime = 0.25;
    
    accumulator += deltaTime;
    while (accumulator >= timeStep) {
        physicsWorld.step(timeStep); // Always step by fixed amount
        accumulator -= timeStep;
    }
    
    // Interpolate render state for buttery smooth visuals
    const alpha = accumulator / timeStep;
    render(alpha);
}`
            },

            { type: 'header', level: 3, text: "4. Constraint Relaxation" },
            { type: 'paragraph', text: "Physics engines solve constraints (joints, contacts) iteratively. Reducing the iteration count increases performance linearly but reduces stability (stacks of boxes might wobble). On mobile, you can often reduce `positionIterations` from 10 to 4 with acceptable visual results." }
        ]
    },
    {
        id: 2,
        title: "Advanced Shader Techniques in WebGL",
        excerpt: "A deep dive into GLSL shaders for creating realistic water, lighting effects, and particle systems that run smoothly on every device.",
        category: "Graphics",
        date: "Dec 05, 2025",
        author: "Aman Saxena",
        readTime: "15 min",
        difficulty: "Expert",
        icon: Sparkles,
        stats: "Expert Pick",
        content: [
            { type: 'header', level: 2, text: "The Power of the GPU" },
            { type: 'paragraph', text: "WebGL unlocks the parallel processing power of the GPU. Writing custom GLSL (OpenGL Shading Language) allows you to perform calculations for millions of pixels simultaneously." },

            { type: 'header', level: 3, text: "1. The Vertex Shader: Geometry Manipulation" },
            { type: 'paragraph', text: "The vertex shader runs once per vertex. It's perfect for low-cost animations like waving flags, water ripples, or tree wind effects." },
            {
                type: 'code', language: 'glsl', filename: 'waterVertex.glsl', code: `// Simple Water Wave Vertex Shader
uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Sine wave displacement based on X position and Time
    pos.y += sin(pos.x * 5.0 + uTime) * 0.5;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`
            },

            { type: 'header', level: 3, text: "2. The Fragment Shader: Pixel Artistry" },
            { type: 'paragraph', text: "The fragment shader determines the color of every pixel. Complex lighting, reflections, and procedural textures happen here." },

            { type: 'header', level: 3, text: "Raymarching & Signed Distance Fields (SDF)" }, // Note: Reduced level in content visually if needed, but keeping semantic structure
            { type: 'paragraph', text: "Raymarching allows you to render infinite 3D worlds on a single 2D quad without any polygon geometry. It works by 'marching' a ray from the camera until it hits an SDF surface." },

            { type: 'header', level: 3, text: "3. Optimizing High-Performance Shaders" },
            {
                type: 'grid', items: [
                    { variant: 'good', title: "DO", list: ["Use `lowp` and `mediump` tags", "Bake lighting into textures", "Use mathematical approximations (mix, step)"] },
                    { variant: 'bad', title: "AVOID", list: ["Complex if/else logic", "Dependent texture reads", "Discarding fragments (breaks Early-Z)"] }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Building Scalable Game States for Multiplayer",
        excerpt: "Architecture patterns for handling complex delta compression and client-side prediction in real-time competitive HTML5 games.",
        category: "Architecture",
        date: "Nov 28, 2025",
        author: "Prashant Saxena",
        readTime: "20 min",
        difficulty: "Expert",
        icon: Layers,
        stats: "High Complexity",
        content: [
            { type: 'header', level: 2, text: "The Latency Challenge" },
            { type: 'paragraph', text: "In a perfect world, all players would see the exact same game state instantly. In reality, light speed is limited, and networks are jittery. A robust multiplayer architecture essentially 'fakes' real-time." },

            { type: 'header', level: 3, text: "1. Client-Side Prediction (CSP)" },
            { type: 'paragraph', text: "When a player presses 'Right', they must move immediately on their screen. You cannot wait 100ms for the server to say 'OK'." },

            { type: 'quote', text: "The Reconciliation Loop: Client applies input -> Sends to Server -> Server responds with Truth -> Client re-simulates if mismatch." },

            {
                type: 'list', style: 'ordered', items: [
                    "Client applies input (Input 402) and moves player locally.",
                    "Client sends Input 402 to Server.",
                    "Server processes Input 402 and sends back 'True Position'.",
                    "Client receives Server Update. If mismatch, snap to True Position and re-simulate inputs 403-405."
                ]
            },

            { type: 'header', level: 3, text: "2. Delta Compression & Bit-Packing" },
            { type: 'paragraph', text: "JSON is expensive. '{\"x\": 120, \"y\": 40}' is ~20 bytes. A binary buffer of two floats is 8 bytes." },
            {
                type: 'code', language: 'typescript', filename: 'Schema.ts', code: `// Example Schema for Schema-Based Bitpacking (e.g. Colyseus)
import { Schema, type } from "@colyseus/schema";

class Player extends Schema {
    @type("float32") x: number = 0;
    @type("float32") y: number = 0;
    @type("uint8") ammo: number = 255;
    @type("string") name: string = "Guest";
}`
            },
            { type: 'paragraph', text: "This schema ensures that only the minimal changed bytes are sent over the wire, reducing bandwidth by up to 80% compared to raw JSON patches." }
        ]
    },
    {
        id: 4,
        title: "Asset Pipeline Optimization for Mobile Web",
        excerpt: "Everything you need to know about texture atlas generation, audio compression, and lazy loading strategies for ultra-fast load times.",
        category: "Optimization",
        date: "Nov 20, 2025",
        author: "Engineering Lead",
        readTime: "8 min",
        difficulty: "Intermediate",
        icon: Zap,
        stats: "Top Rated",
        content: [
            { type: 'header', level: 2, text: "The 3-Second Retention Rule" },
            { type: 'paragraph', text: "40% of users abandon a website that takes more than 3 seconds to load. For web games, this initial load time is critical." },

            { type: 'header', level: 3, text: "1. Texture Atlases" },
            { type: 'paragraph', text: "Every image requires a separate HTTP request and a GPU context switch. Pack all your small images into one giant 2048x2048 PNG. Render sprites by changing UVs." },

            { type: 'header', level: 3, text: "2. Basis Universal (.basis)" },
            { type: 'paragraph', text: "Traditional PNGs must be decompressed to raw RGBA in VRAM. Basis Universal format stays compressed in VRAM, using 6-8x less memory." },

            { type: 'header', level: 3, text: "3. Audio Strategy" },
            {
                type: 'table',
                headers: ["Audio Type", "Format", "Strategy"],
                rows: [
                    ["BGM (Music)", "AAC / MP3", "Stream (HTML5 Audio)"],
                    ["SFX (Short)", "WebM / WAV", "Preload (Web Audio API)"]
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Modular Game Engine Design Patterns",
        excerpt: "Exploring the Entity-Component-System (ECS) pattern for building flexible and maintainable game logic in modern JavaScript/TypeScript.",
        category: "Logic",
        date: "Nov 15, 2025",
        author: "Prashant Saxena",
        readTime: "10 min",
        difficulty: "Intermediate",
        icon: Code2,
        stats: "Essential",
        content: [
            { type: 'header', level: 2, text: "Inheritance Hell vs. Composition" },
            { type: 'paragraph', text: "In traditional OOP, you might have `class Orc extends Enemy`. But what about a `Turret` that is an enemy but can't move? The Diamond Problem arises." },

            { type: 'header', level: 3, text: "The ECS Paradigm" },
            { type: 'paragraph', text: "Entity Component System (ECS) decouples data from behavior entirely." },
            {
                type: 'list', style: 'unordered', items: [
                    "Entities: Just an ID (e.g. 420).",
                    "Components: Pure data containers (Velocity, Health).",
                    "Systems: Pure logic iterating over entities (MovementSystem)."
                ]
            },

            { type: 'header', level: 3, text: "Archetypes & Memory" },
            { type: 'paragraph', text: "Advanced ECS implementations store component data in flat Float32Arrays (Structure of Arrays). This is incredibly cache-friendly for CPU pre-fetching." }
        ]
    },
    {
        id: 6,
        title: "Designing Intuitive Mobile Touch Controls",
        excerpt: "Best practices for gesture recognition, virtual joysticks, and haptic feedback to ensure your game feels native on all devices.",
        category: "UI/UX",
        date: "Nov 05, 2025",
        author: "Aman Saxena",
        readTime: "7 min",
        difficulty: "Beginner",
        icon: Gamepad2,
        stats: "Highly Readable",
        content: [
            { type: 'header', level: 2, text: "The Touch Screen Dilemma" },
            { type: 'paragraph', text: "Touch screens lack buttons. Designing for touch requires a 'Mobile-First' mindset." },

            { type: 'header', level: 3, text: "1. The Floating Joystick" },
            { type: 'paragraph', text: "Players never tap exactly on a static joystick. Use a Floating Joystick that re-centers itself wherever the player touches." },

            { type: 'header', level: 3, text: "2. Gestures > Buttons" },
            {
                type: 'list', style: 'unordered', items: [
                    "Swipe Up: Jump",
                    "Double Tap: Dash",
                    "Two-Finger Tap: Pause"
                ]
            },

            { type: 'header', level: 3, text: "3. Juice it with Haptics" },
            {
                type: 'code', language: 'javascript', filename: 'Haptics.js', code: `// The "Impact" Function
function triggerHaptic(intensity) {
    if (!navigator.vibrate) return;
    
    switch(intensity) {
        case 'light': navigator.vibrate(5); break;
        case 'medium': navigator.vibrate(15); break;
        case 'heavy': navigator.vibrate([30, 50, 30]); break;
    }
}`
            }
        ]
    }
]

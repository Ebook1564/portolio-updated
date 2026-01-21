import { ContentBlock } from "../tips-and-tricks/data";

export type EngineeringTopic = "Networking" | "Rendering" | "Physics" | "AI" | "Audio" | "UI/UX";

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
    techStack: string[];

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
        title: "Snap Duel: Networking at 60fps",
        topic: "Networking",
        excerpt: "How we implemented rollback netcode to handle high-latency connections in a fast-paced fighter.",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        author: "Prashant Saxena",
        imageGradient: "from-blue-600 to-indigo-700",
        imageUrl: "/images/news/networking.png",
        techStack: ["Socket.io", "Node.js", "Geckos.io"],
        challenge: {
            title: "Input Latency",
            description: "Players perceived a 200ms delay between pressing a button and seeing an action, making the game unplayable.",
            icon: "network"
        },
        solution: {
            title: "Client-Side Prediction",
            description: "Decoupled local rendering from server state. The client immediately shows the move, then reconciles state.",
            codeSnippet: "socket.emit('input', input); applyInput(input);"
        },
        keyTakeaway: "Never wait for the server to confirm a player's own movement.",
        content: [
            { type: 'header', level: 2, text: "The Latency Problem" },
            { type: 'paragraph', text: "In a fighting game, 100ms is the difference between a block and a KO. When we first tested Snap Duel on 3G networks, the input delay felt 'muddy'. We were waiting for the server to authorize every move." },
            { type: 'header', level: 2, text: "Implementing Rollback" },
            { type: 'paragraph', text: "We switched to a deterministic simulation. The client predicts the game state 100% of the time. If the server disagrees (due to packet loss or cheat detection), the client 'rolls back' to the last known good state and replays the inputs." },
            {
                type: 'code', language: 'typescript', code: `function reconcile(serverState) {
  if (localHistory.has(serverState.tick)) {
    const historical = localHistory.get(serverState.tick);
    if (!statesMatch(historical, serverState)) {
       // Desync detected! Snap to server and replay
       applyState(serverState);
       replayInputsSince(serverState.tick);
    }
  }
}` }
        ]
    },
    {
        id: 2,
        title: "Neon Jump: 10,000 Particles",
        topic: "Rendering",
        excerpt: "Optimizing WebGL particle systems for mobile browsers without melting the GPU.",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        author: "Aman Saxena",
        imageGradient: "from-fuchsia-600 to-purple-800",
        imageUrl: "/images/news/rendering.png",
        techStack: ["Three.js", "GLSL"],
        challenge: {
            title: "Draw Call Bottleneck",
            description: "Creating a new mesh for every particle caused the frame rate to drop to 15fps on iPhone devices.",
            icon: "render"
        },
        solution: {
            title: "Instanced Mesh",
            description: "Switched to InstancedBufferGeometry, allowing us to draw 10k particles in a single draw call.",
            codeSnippet: "gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, 10000);"
        },
        keyTakeaway: "Grouping geometries is the #1 optimization for WebGL.",
        content: [
            { type: 'header', level: 2, text: "Why CPU Particles Fail" },
            { type: 'paragraph', text: "Updating 10,000 objects in JavaScript and sending them to the GPU every frame is too slow. The generic THREE.Sprite class creates overhead for every single particle." },
            { type: 'header', level: 2, text: "Moving to the GPU" },
            { type: 'paragraph', text: "We wrote a custom Vertex Shader that handles the movement logic. We only send the 'Time' uniform to the GPU, and the shader calculates the position of all 10,000 particles in parallel." }
        ]
    },
    {
        id: 3,
        title: "Space Quest: Infinite Worlds",
        topic: "AI",
        excerpt: "Generating procedurally infinite solar systems using deterministic random seeds.",
        date: "Jan 08, 2026",
        readTime: "10 min read",
        author: "Prashant Saxena",
        imageGradient: "from-emerald-500 to-teal-700",
        imageUrl: "/images/news/procedural.png",
        techStack: ["Simplex Noise", "Web Workers"],
        challenge: {
            title: "Main Thread Blocking",
            description: "Generating a new planet texture took 50ms, causing a noticeable stutter every time a player entered a new sector.",
            icon: "cpu"
        },
        solution: {
            title: "Offscreen Workers",
            description: "Moved generation logic to a Web Worker and transferred the resulting BitmapImage via transferable objects.",
            codeSnippet: "worker.postMessage({ seed: 12345 });"
        },
        keyTakeaway: "Keep your update loop under 16ms or die trying.",
        content: [
            { type: 'header', level: 2, text: "Procedural Generation Costs" },
            { type: 'paragraph', text: "Generating 4k textures with Perlin noise is computationally expensive. Doing this on the main thread freezes the interface." },
            { type: 'header', level: 2, text: "The Web Worker Solution" },
            { type: 'paragraph', text: "We offloaded the noise generation to a background thread. Once the pixel buffer is ready, we hand ownership of the ArrayBuffer back to the main thread, resulting in zero-copy transfer." }
        ]
    },
    {
        id: 4,
        title: "Arcade Blast: Bullet Hell Physics",
        topic: "Physics",
        excerpt: "Managing 500+ dynamic colliders in a browser-based bullet hell shooter.",
        date: "Jan 05, 2026",
        readTime: "7 min read",
        author: "Aman Saxena",
        imageGradient: "from-orange-500 to-red-600",
        imageUrl: "/images/news/physics.png",
        techStack: ["Matter.js", "Quadtree"],
        challenge: {
            title: "O(n^2) Complexity",
            description: "Checking every bullet against every enemy resulted in 250,000 checks per frame.",
            icon: "bug"
        },
        solution: {
            title: "Spatial Partitioning",
            description: "Implemented a Quadtree to only check collisions between objects in the same screen sector.",
            codeSnippet: "quadtree.insert(bullet);"
        },
        keyTakeaway: "Spatial Hashing beats brute force every time.",
        content: [
            { type: 'header', level: 2, text: "The N-Squared Problem" },
            { type: 'paragraph', text: "Naive collision detection checks every object against every other object. With 500 bullets and 50 enemies, that's 25,000 checks per frame." },
            { type: 'header', level: 2, text: "Quadtree Implementation" },
            { type: 'paragraph', text: "We divide the screen into 4 quadrants. If a quadrant has too many objects, it subdivides again. We only check collisions for objects that share the same leaf node." }
        ]
    }
];

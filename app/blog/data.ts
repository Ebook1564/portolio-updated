
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string; // Added content field
    date: string;
    category: string;
    readTime: string;
    author: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Dynamically Scaling Background Components in Unity 2D",
        excerpt: "Automatically scale UI, backgrounds, and sprites to match any orthographic camera viewport. Four modes (PreserveAspect, Fill, Stretch, Fit) handle all screen ratios perfectly for 2D games and prototypes.",
        content: `


Unity developers often need UI elements, backgrounds, or sprites to automatically scale with orthographic cameras across different screen sizes. This ScaleToCamera script solves that by dynamically adjusting any object's scale to match the camera's viewport using four flexible modes.

## Script Overview

Attach this script to any GameObject with a Renderer component (like a SpriteRenderer or UI Image) as a child. The [ExecuteAlways] attribute ensures scaling works in both Play Mode and the Editor for instant previewing. It targets orthographic cameras only, calculating the world-space dimensions from orthographicSize and aspect ratio, then applies appropriate scaling.

**Key requirements:**
- Orthographic camera assigned to the targetCamera field
- Renderer on a child object (script measures its bounds)
- Choose from PreserveAspect, Fill, Stretch, or Fit modes via the Inspector

\`\`\`
worldHeight = orthographicSize * 2
worldWidth = worldHeight * aspect
scaleX = worldWidth / objectWidth
scaleY = worldHeight / objectHeight
\`\`\`

**Each mode selects the final scale:**
- **PreserveAspect**: Min(scaleX, scaleY) → Uniform fit without overflow
- **Fill**: Max(scaleX, scaleY) → Fills viewport, may crop edges
- **Stretch**: (scaleX, scaleY) → Exact pixel-perfect fill, distorts if needed
- **Fit**: Min(scaleX, scaleY) → Safest, stays inside bounds with letterboxing

## Setup Steps

1. Create a GameObject (e.g., "Background") with a child SpriteRenderer or Quad
2. Add the ScaleToCamera script to the parent
3. Drag your orthographic Camera to the targetCamera field
4. Select a ScaleMode and hit Play—watch it resize live
5. Use [ExecuteAlways] to tweak in Scene view without entering Play Mode

Test by changing Game view aspect ratios (16:9 → 4:3).

**Usage Scenarios**

Perfect for 2D games, prototypes, and responsive UI:

- **Game Backgrounds**: PreserveAspect covers playfield without distortion across mobile/desktop
- **UI Panels/HUD**: Stretch for pixel-perfect buttons filling screen edges (hypercasual games)
- **Dynamic Sprites**: Fill for full-screen effects like pause menus/loading screens
- **Safe Layouts**: Fit prevents clipping on ultrawide monitors with automatic black bars
- **Prototyping**: Scale placeholder art to any camera size during development


    `,
        date: "March 15, 2024",
        category: "Gaming Trends",
        readTime: "5 min read",
        author: "Alex Rivera",
        image: "from-blue-500 to-indigo-600"
    },
    
];

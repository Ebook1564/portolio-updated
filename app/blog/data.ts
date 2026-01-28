
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
        title: "Building a Dynamically Scaling Vertical Parallax System in Unity",
        excerpt: "Adding depth to two dimensions never hurt anyone.",
        content: `



### 🧠 The Problem

I was working on a simple Vertical 2D Platformer for which I wanted the background to do more than just “scroll.” The goal was to create a **vertical parallax system** where:

* Multiple background layers move downward at **different speeds**
* Slower layers feel farther away, faster ones feel closer
* Certain background elements stay **locked together spatially** (e.g., clouds + haze, skyline layers, fog stacks)
* The entire background system **automatically scales to the camera**, regardless of resolution or aspect ratio

Most parallax tutorials handle horizontal scrolling and assume fixed screen sizes. This project needed a **vertical, resolution-agnostic solution** that could scale cleanly and still preserve depth.

To solve this, I split the system into **two focused scripts**:

1. \`VerticalParallax\` → controls motion and depth
2. \`ScaleToCamera\` → guarantees visual consistency across screen sizes

---

## 🎢 VerticalParallax.cs — Creating Depth Through Motion

This script is responsible for the **illusion of depth** by moving background layers vertically at different speeds.

### Core Idea

Parallax depth is created by tying **movement speed to perceived distance**:

* Foreground layers move faster
* Distant layers move slower
* Motion is continuous and frame-rate independent

Each background layer is defined using a small data container:

\`\`\`csharp
[System.Serializable]
public class ParallaxLayer
{
    public Transform layerTransform;
    public float speed;
}
\`\`\`

This makes the system:

* Inspector-friendly
* Easy to tweak without code changes
* Scalable to many layers

---

### 🔒 Locked Groups: Keeping Related Layers Together

A major issue I ran into early was that some background elements **should not drift apart**, even if they move at different speeds. Examples:

* Multiple cloud sprites forming a single cloud bank
* Fog layers that must keep a fixed vertical offset
* Stylized skyline silhouettes

To solve this, I introduced **Locked Groups**.

Each group:

* Has a *base layer* (index \`0\`)
* Stores the **initial Y-offsets** of all other layers relative to that base
* Moves together while preserving spacing

\`\`\`csharp
[System.Serializable]
public class LockedGroup
{
    public string groupName;
    public ParallaxLayer[] layers;
    public float[] initialYOffsets;
}
\`\`\`

#### Initialization (Start)

At runtime, the script captures the original vertical spacing between layers:

* The first layer becomes the reference point
* All other layers store their offset relative to it

This ensures the layout remains consistent even as the group moves.

---

### Runtime Behavior (Update Loop)

Every frame:

1. The **base layer** moves downward using its own speed
2. All other layers:

   * Apply their individual movement
   * Immediately snap back to their original offset from the base

This gives two key benefits:

* Visual cohesion (no drifting or separation)
* Independent speed control without breaking composition

Meanwhile, **non-grouped layers** are handled separately and move freely, allowing for simpler parallax elements where locking isn’t needed.

---

## 📐 ScaleToCamera.cs — Resolution-Independent Backgrounds

Parallax depth only works if the background **fills the screen correctly**. Different aspect ratios can easily break the illusion by exposing edges or stretching sprites.

That’s where \`ScaleToCamera\` comes in.

### Purpose

This script ensures each background layer:

* Scales dynamically to match the camera’s viewport
* Works consistently across resolutions
* Supports different scaling behaviors depending on art style

It runs in \`LateUpdate\` and uses \`[ExecuteAlways]\`, meaning:

* Scaling updates in both Play Mode and Edit Mode
* Visual layout can be previewed instantly in the editor

---

### How Scaling Works

1. **Calculate camera size in world units**

\`\`\`csharp
float worldHeight = targetCamera.orthographicSize * 2f;
float worldWidth = worldHeight * targetCamera.aspect;
\`\`\`

2. **Measure the object’s true size**
   The script temporarily resets scale to \`Vector3.one\` to get accurate renderer bounds.

3. **Compute scale factors**

\`\`\`csharp
scaleX = worldWidth / objSize.x;
scaleY = worldHeight / objSize.y;
\`\`\`

4. **Apply a scaling strategy**
   Using an enum makes the behavior explicit and tweakable:

* **PreserveAspect** → uniform scale, no distortion
* **Fill** → fills screen completely, may crop
* **Stretch** → exact fit, allows distortion
* **Fit** → guaranteed visibility, may letterbox

This flexibility lets each parallax layer behave differently if needed.

---

## 🤝 How the Two Scripts Work Together

The real power of the system comes from **separation of concerns**:

* \`VerticalParallax\`

  * Handles *movement*
  * Creates depth through speed variation
  * Maintains spatial relationships via locked groups

* \`ScaleToCamera\`

  * Handles *presentation*
  * Ensures every layer fills the camera consistently
  * Keeps visuals stable across resolutions

Because scaling and movement are independent:

* Parallax math stays clean
* Camera changes don’t break motion
* New layers can be added without recalculating positions

The result is a **vertically scrolling parallax background** that:

* Feels deep and layered
* Remains visually coherent
* Scales cleanly on any screen

---

## 🧩 Final Result

This system allowed me to:

* Rapidly prototype layered backgrounds
* Maintain artistic composition across layers
* Avoid resolution-specific hacks
* Achieve a strong sense of depth using simple, readable code

It’s modular, inspector-driven, and easy to extend — whether for looping backgrounds, biome transitions, or dynamic weather layers later in development.
`,
        date: "March 15, 2024",
        category: "Gaming Trends",
        readTime: "10 min read",
        author: "Alex Rivera",
        image: "from-blue-500 to-indigo-600"
    },
    
];

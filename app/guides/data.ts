import { Cpu, Sparkles, Layers, Zap, Code2, Gamepad2, Gauge } from "lucide-react"

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
    | { type: 'image'; src: string; alt: string; caption?: string; width?: 'full' | 'half' }

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
    // image: string;
}

export const gameDevGuides: GuideData[] = [
    {
        id: 1,
        title: "Mouse Without Borders: Software KVM for Windows Multi-PC Workflows",
        excerpt: 'Control up to 4 Windows PCs with one keyboard/mouse. Share files, clipboards, and cursor seamlessly without hardware KVMs',
        category: "Productivity",
        date: "Jan 24, 2026",
        author: "Prashant Saxena",
        readTime: "5 min",
        difficulty: "Beginner",
        icon: Gamepad2,
        stats: "Improve Workflow",
        //   image: "/images/mouse-without-borders-hero.jpg",
        content: [
            { type: 'header', level: 2, text: "Overview" },
            
            { type: 'paragraph', text: "Mouse Without Borders from Microsoft PowerToys provides a seamless software-based KVM alternative for managing multiple desktop setups, allowing you to control up to four Windows PCs with a single keyboard and mouse while sharing clipboards and files effortlessly. This tool eliminates the need for dedicated hardware by enabling intuitive cursor movement across screens, fostering maximum productivity and immersion in multi-machine workflows." },
            
            { type: 'quote', text: "The closest you'll get to telepathy between Windows machines.", author: "Tech reviewer" },
            { type: 'alert', variant: 'tip', title: "Key Requirement", text: "Since the utility acts as a network-based KVM as opposed to a traditional hardware one, the target machines are required to be on the same local network within the same subnet." },
            
            { type: 'header', level: 2, text: "Setting up Mouse Without Borders on your devices" },
            
            { type: 'list', style: 'ordered', items: [
                "Install PowerToys via [GitHub](https://github.com/microsoft/PowerToys/releases) or [Microsoft Store](https://www.microsoft.com/store/productId/9N8M4H02LCRM)",
                "On your Primary Machine, open PowerToys. In the utilities section, navigate to Mouse Without Borders and enable it. In the Activation section at the top, you'll see a Security Key followed by your machine's hostname. Take note of both of these values.",
                "On you Secondary device(s), navigate to Mouse without Borders and click inside Security Key textbox. This will expand the TextBox and allow you to input the Security Key from and the name of the Primary Machine.",
                "In the device layout section, you can drag the on-screen PC icons to match your physical monitor layout"
            ]},
            
            { type: 'alert', variant: 'warning', title: "Windows 10 Compatibility", text: "PowerToys v0.86 is the last supported version of PowerToys that ships with full functionality. You may find it [here](https://github.com/microsoft/PowerToys/releases/tag/v0.86.0)" },
            
            { type: 'header', level: 2, text: "Making the most of Mouse Without Borders" },
            { type: 'header', level: 3, text: "Immersive Service Mode" },
            
            { type: 'paragraph', text: "Running Mouse Without Borders as a system service allows it to interact with events that require elevated user privilleges, such as Lock Screens, UAC Prompts and elevated apps running across all machines. To enable this, run PowerToys as administrator and enable 'Use Service' to install Mouse Without Borders as a system service." },
            
            { type: 'grid', items: [
                {
                    title: "✅ Service Mode Benefits",
                    list: ["Controls lock screens", "Handles UAC prompts", "Manages elevated apps", "Zero interruptions"],
                    variant: 'good'
                },
                {
                    title: "⚠️ Security Caution",
                    list: ["Requires admin privileges", "Avoid shared networks", "Monitor firewall rules"],
                    variant: 'bad'
                }
            ]},
            
            { type: 'header', level: 3, text: "Master Hotkey Shortcuts" },
            { type: 'paragraph', text: "The following are default shortcuts utilized for various use cases by Mouse Without Borders. These can be easily modified as per the user's preferemce in the Mouse without Borders setting page." },
            
            { type: 'table', headers: ["Hotkey", "Action", "Use Case"], rows: [
                ["Ctrl+Alt+A", "Toggle Easy Mouse Mode", "Toggle as per your convenience whether the mouse can seamlessly fly in and out of display areas"],
                ["Ctrl+Alt+1-4", "Jump to specific PC", "Helpful for quickly navigating multiple machine setups without hassles."],
      ["Ctrl+Alt+L (double-tap)", "Lock all machines", "Quickly lock all machines at once"],
      ["Ctrl+Alt+R", "Quick reconnect", "Refresh connection to devices conveniently"],
      ["Ctrl+Alt+M", "Multi-machine input", "Broadcast mouse/keyboard input to multiple devices at once"]
    ]},
    
    { type: 'header', level: 3, text: "Optimization for varying Use Cases" },
    
    { type: 'list', style: 'unordered', items: [
      '"Wrap Mouse" creates continuous cursor loop (last PC → first PC), allowing you to swap between machines without lateral hierarchy',
      '"Hide Mouse at Edge" + "Block Input at Corners" toggles minimize chances of accidental cursor movement between devices on the borders',
      '"Move Mouse Relatively" handles DPI and resolution scaling differences between machines',
    ]},
    
    { type: 'header', level: 2, text: "Troubleshooting" },
    
    { type: 'grid', items: [
      {
        title: "🔧 Connection Fixes",
        list: ["Verify same subnet", "Add Firewall Rule for Mouse Without Borders", "Ping hostnames manually", "Refresh by hitting the Refresh button within Device Layout section", "Restart service"],
        variant: 'good'
      }
    ]} 
  ]
}
,
    {
       id: 2,
  title: "QTTabBar: Native Windows 10 File Explorer Tabs",
  excerpt: "Transform Windows File Explorer into a tabbed powerhouse with QTTabBar. Organize folders, drag-drop between tabs, and reclaim productivity lost to Alt+Tab folder switching.",
  category: "Productivity",
  date: "Jan 24, 2026",
  author: "Prashant Saxena",
  readTime: "4 min",
  difficulty: "Intermediate",
  icon: Layers,
  stats: "Added Convenience",
//   image: "/images/qttabbar-hero.jpg",
  content: [
    { type: 'header', level: 2, text: "Windows Explorer Tabs Done Right" },
    
    { type: 'paragraph', text: "QTTabBar transforms Windows 10 File Explorer into a modern tabbed interface, eliminating endless Alt+Tab folder switching. Native integration means tabs persist across Explorer restarts, support drag-drop between tabs, and maintain full Windows Search functionality." },
    
    { type: 'alert', variant: 'tip', title: "Perfect Windows 10 Companion", text: "Unlike browser-style tabs, QTTabBar tabs are persistent and survive Explorer crashes/restarts. Works flawlessly with OneDrive, network drives, and Windows Search." },
    
    { type: 'quote', text: "The tabbed interface Windows should have shipped with, for years now.", author: "Power user" },
    
    { type: 'header', level: 2, text: "Lightning-Fast Installation" },
    
    { type: 'list', style: 'ordered', items: [
      "Download QTTabBar from [official GitHub](https://github.com/indiff/qttabbar)",
      "Extract ZIP → Run QTTabBar.exe as Administrator (one-time setup)",
      "Accept UAC → Check 'Register QTTabBar shell extension' → Finish",
      "Restart Explorer.exe (Task Manager → End task → File → Run new task → explorer.exe)"
    ]},
    
    { type: 'alert', variant: 'warning', title: "Windows 10 Specific", text: "Windows 11 users should use QTTabBar v1043+ with compatibility mode. Native tabs exist but lack QTTabBar's advanced features like tab reordering and folder favorites." },
    
    { type: 'header', level: 2, text: "Power User Configuration" },
    { type: 'header', level: 3, text: "Essential First-Time Settings" },
    
    { type: 'list', style: 'unordered', items: [
      "Right-click Explorer toolbar → QTTabBar Settings → Enable 'Show tabs'",
      "Tabs → 'Always show tabs' + 'Close button on tabs'",
      "Address Bar → Enable 'Drop target address bar' for drag-drop URLs",
      "Explorer → 'Single click to open folders' + 'Tree view auto-expand'"
    ]},
    
    { type: 'header', level: 3, text: "Keyboard Shortcutss" },
    
    { type: 'table', headers: ["Hotkey", "Action", "Power Move"], rows: [
      ["Ctrl+T", "New Tab", "Instant folder access"],
      ["Ctrl+Shift+T", "Reopen Closed Tab", "Never lose your place"],
      ["Ctrl+Tab / Ctrl+Shift+Tab", "Next/Previous Tab", "Lightning navigation"],
      ["Ctrl+W / Ctrl+F4", "Close Tab", "Clean workspace"],
      ["Middle Click on Folder", "Open in New Tab", "One-handed workflow"],
      ["Ctrl+MouseWheel", "Tab Zoom", "Perfect folder overview"]
    ]},
    
    { type: 'header', level: 3, text: "Layout Features" },
    
    { type: 'grid', items: [
      {
        title: "✅ Tab Management",
        list: ["Reorder tabs by drag", "Pin frequently used folders", "Color-code tabs", "Group tabs by project"],
        variant: 'good'
      },
      {
        title: "⚡ Explorer Integration",
        list: ["Drag-drop between tabs", "Native search works", "OneDrive sync compatible", "Network drives supported"],
        variant: 'good'
      }
    ]},
    
    { type: 'header', level: 2, text: "Advanced Workflow Hacks" },
    
    // { type: 'list', style: 'unordered', items: [
    //   '"Tree View Tabs - See folder hierarchy without expanding (View → Tree)",
    //   '"Drop Zone Indicators - Visual feedback when dragging between tabs (Settings → Drop)"',
    //   '"Quick Access Tabs" - Pin Desktop, Documents, Downloads permanently (right-click tab → Pin)"',
    //   '"Duplicate Tab" (Ctrl+K) - Compare folders side-by-side instantly',
    //   '"Address Bar Dropdown" - Recent folders + typed paths in one click'
    // ]},
    
    { type: 'header', level: 2, text: "Troubleshooting Common Issues" },
    
    { type: 'grid', items: [
      {
        title: "🔧 Shell Extension Fixes",
        list: ["Run QTTabBar.exe as Admin → 'Repair Registration'", "Restart Explorer.exe after settings changes", "Disable antivirus real-time scanning during setup"],
        variant: 'good'
      },
      {
        title: "🐛 Tab Disappearing",
        list: ["Explorer → Folder Options → 'Restore previous folder windows'", "Re-run QTTabBar setup as Administrator", "Check 'Persistent tabs' in QTTabBar Settings"],
        variant: 'good'
      }
    ]},
    
    { type: 'alert', variant: 'tip', title: "Windows 10 Optimization", text: "Disable Windows animations (System → Advanced → Performance Settings → Adjust for best performance) for maximum QTTabBar responsiveness with large folder trees." },
    
    { type: 'header', level: 3, text: "Performance Tweaks" },
    
    { type: 'list', style: 'unordered', items: [
      "Settings → General → 'Limit tab history' to 50 (prevents memory bloat)",
      "Disable thumbnail previews for network drives (saves 200-500ms)",
      "Enable 'Reuse tabs for same folder' to prevent tab explosion"
    ]},

  ]
},
{
  id: 3,
  title: "Custom Intro Video for a Game in Unity: Complete Splash Screen Implementation",
  excerpt: "Replace Unity's default splash screen with your branded intro video. Full scene setup, VideoPlayer configuration, and automatic scene transitions using C# scripting.",
  category: "Unity",
  date: "Jan 28, 2026",
  author: "Prashant Saxena",
  readTime: "7 min",
  difficulty: "Intermediate",
  icon: Gauge,
  stats: "Zero Plugins",
  content: [
    { type: 'header', level: 2, text: "Professional Intro Video Scene" },
    
    { type: 'paragraph', text: "Replace Unity's default splash screen with your custom branded intro video. This tutorial creates a dedicated 'SplashVideo' scene that plays MP4/WebM videos full-screen and auto-transitions to your main menu using the VideoPlayer component and SceneManager." },
    
    { type: 'alert', variant: 'tip', title: "Video Format Priority", text: "MP4 (H.264) for Windows/Mac, WebM (VP8/VP9) for web builds. Max 1080p 30fps recommended for 60MB build size limit." },
    
    { type: 'header', level: 2, text: "Scene Setup (5 GameObjects)" },
    
    { type: 'list', style: 'ordered', items: [
      "Create new scene → File → New Scene → Save as 'SplashVideo' (first in Build Settings)",
      "Delete default Main Camera → Create → UI → Canvas (name: 'VideoCanvas')",
      "Canvas → Canvas Scaler → UI Scale Mode: 'Scale With Screen Size' → Reference Resolution: 1920x1080",
      "Right-click Canvas → UI → Raw Image (name: 'VideoDisplay') → Stretch to fill Canvas",
      "GameObject → Create Empty → Name 'VideoManager' → Add SplashVideo script"
    ]},
    
    { type: 'header', level: 3, text: "VideoPlayer Component Setup" },
    
    { type: 'grid', items: [
      {
        title: "✅ VideoDisplay (RawImage)",
        list: ["Drag Canvas → VideoDisplay", "Raw Image component appears", "Texture field = empty (script fills)", "Stretch: Full Rect Transform"],
        variant: 'good'
      },
      {
        title: "🎥 VideoPlayer Assignment",
        list: ["Select VideoManager", "VideoPlayer component auto-added", "Drag VideoDisplay to VideoPlayer.TargetTexture", "Video Clip: Drag your MP4/WebM"],
        variant: 'good'
      }
    ]},
    
    { type: 'code', language: 'csharp', filename: 'SplashVideo.cs', code: `using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Video;

public class SplashVideo : MonoBehaviour
{
    [Header("Video Settings")]
    public VideoPlayer videoPlayer;
    public string nextSceneName = "Menu";
    
    [Header("Skip Option")]
    public KeyCode skipKey = KeyCode.Space;
    
    void Start()
    {
        // Safety checks
        if (videoPlayer == null)
            videoPlayer = GetComponent<VideoPlayer>();
            
        if (videoPlayer.targetTexture == null)
        {
            Debug.LogError("VideoPlayer: Assign RawImage Target Texture!");
            return;
        }
        
        videoPlayer.loopPointReached += OnVideoEnd;
        videoPlayer.Play();
    }
    
    void Update()
    {
        // Allow manual skip
        if (Input.GetKeyDown(skipKey))
            OnVideoEnd(videoPlayer);
    }
    
    void OnVideoEnd(VideoPlayer vp)
    {
        SceneManager.LoadScene(nextSceneName);
    }
}` },
    
    { type: 'header', level: 3, text: "Inspector Configuration" },
    
    { type: 'table', headers: ["Field", "Setting", "Notes"], rows: [
      ["Video Player", "VideoDisplay RawImage", "Drag from Hierarchy"],
      ["Source", "Url (Video Clip)", "Drag MP4/WebM to field"],
      ["Play On Awake", "False", "Script controls playback"],
      ["Loop", "False", "Single playthrough"],
      ["Skip On Dropout", "True", "Fallback if video fails"],
      ["Next Scene Name", "\"Menu\"", "Exact Build Settings name"]
    ]},
    
    { type: 'header', level: 2, text: "Build Settings Order" },
    
    { type: 'paragraph', text: "File → Build Settings → Scenes In Build. Drag 'SplashVideo' to Index 0, 'Menu' to Index 1+. Unity executes scenes in this exact order on startup." },
    
    { type: 'list', style: 'unordered', items: [
      "Index 0: SplashVideo (auto-plays first)",
      "Index 1: Menu (SplashVideo transitions here)",
      "Index 2+: Gameplay scenes",
      "Player Settings → Splash Screen → Show Unity Splash: Optional"
    ]},
    
    { type: 'alert', variant: 'warning', title: "Scene Name Match", text: "nextSceneName = \"Menu\" must **exactly** match Build Settings scene name. Case-sensitive. No spaces or typos." },
    
    { type: 'header', level: 2, text: "Video Import Settings" },
    
    { type: 'list', style: 'ordered', items: [
      "Drag MP4/WebM to Project → Inspector → Platform: Standalone",
      "Transcode: Auto (H.264 baseline for Windows)",
      "Resolution: Max 1920x1080 (file size limit)",
      "Quality: 75% (balance size vs crispness)"
    ]},
    
    { type: 'header', level: 2, text:"Advanced Features" },
    
    { type: 'code', language: 'csharp', filename: 'SplashVideoAdvanced.cs', code: `// Add to existing script
[Header("Audio")]
public AudioSource audioSource;

void Start()
{
    // Audio sync
    if (audioSource)
        videoPlayer.audioOutputMode = VideoAudioOutputMode.AudioSource;
        videoPlayer.SetDirectAudioVolume(0, 1.0f);
        
    // Loading screen fallback
    AsyncOperation loadOp = SceneManager.LoadSceneAsync(nextSceneName);
    loadOp.allowSceneActivation = false;
}

// Smooth scene transition
void OnVideoEnd(VideoPlayer vp)
{
    loadOp.allowSceneActivation = true;
}` },
    
    { type: 'header', level: 2, text: "Testing & Troubleshooting" },
    
    { type: 'grid', items: [
      {
        title: "✅ Green Light Checklist",
        list: ["Video plays in Preview", "RawImage shows video", "Spacebar skips", "Menu scene loads"],
        variant: 'good'
      },
      {
        title: "🔧 Common Fixes",
        list: ["Black screen → Check TargetTexture", "No audio → Add AudioSource", "Wrong scene → Verify Build order", "Video skips → Check import settings"],
        variant: 'good'
      }
    ]},
    
    { type: 'header', level: 3, text: "Build Size Optimization" },
    
    { type: 'list', style: 'unordered', items: [
      "Compress video to 50MB max (Handbrake + H.264)",
      "Progressive download (no buffering)",
      "Exclude from Android APK if not needed",
      "WebGL: Use WebM VP9 for 40% size reduction"
    ]},
    
    
    { type: 'alert', variant: 'tip', title: "Pro Polish", text: "Add CanvasGroup → Fade Alpha 0→1 on Start(), 1→0 on skip. Sync with AudioSource reverb for cinematic feel." }
  ]
}

]
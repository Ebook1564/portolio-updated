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
        title: " Stylize your Unity working environment with Unity Editor Custom Themes Plugin" ,
        excerpt: "Improve monotonous visuals with a touch of colour",
        category: "Game Dev 101",
        difficulty: "Beginner",
        readTime: "2 min",
        author: "Alex Rivers",
        avatar: "AR",
        date: "Jan 15, 2026",
        icon: Video,
        color: "blue",
        heroImage: "from-blue-500 to-indigo-500",
        stats: "15 Lessons",
        content: [
            { type: 'header', level: 2, text: "Native Unity Editor Themes" },
    
    { type: 'paragraph', text: "Editor Themes Plugin brings professional dark/light theme support to Unity. Choose from 14 different pre-made themes, or make your own" },
    
    { type: 'alert', variant: 'tip', title: "Windows 10 Optimized", text: "Perfect companion for Windows 10 Unity workflows. Themes persist across Editor restarts and project switches. No Unity version conflicts." },
    
    { type: 'header', level: 2, text: "One-Click Asset Store Installation" },
    
    { type: 'list', style: 'ordered', items: [
      "Visit [Unity Asset Store](https://assetstore.unity.com/packages/tools/gui/editor-themes-plugin-free-211041) and click 'Add to My Assets'",
      "In your Unity Editor's menu bar, navigate to  Window → Package Manager → My Assets → Search 'Editor Themes' → Import",
      "Tools → Editor Themes → Theme Manager (Ctrl+Shift+T)",
      "Browse themes → Click Apply → Instant visual refresh"
    ]},
    
    
    { type: 'header', level: 2, text: "Pre-Built Theme Picks" },
    
    { type: 'grid', items: [
      {
        title: "🌙 Dark Themes",
        list: ["One Dark Pro", "Dracula Pro", "Nord Polar", "Material Dark", "Monokai Pro"],
        variant: 'good'
      },
      {
        title: "☀️ Light Themes",
        list: ["Solarized Light", "GitHub Light", "Visual Studio", "One Light"],
        variant: 'good'
      }
    ]},
        
    { type: 'header', level: 2, text: "Windows 10 Troubleshooting" },
    
    { type: 'grid', items: [
      {
        title: "🔧 Installation Fixes",
        list: ["Run Package Manager as Administrator", "Clear Unity Cache (Edit → Preferences → GI Cache)", "Restart Unity after import"],
        variant: 'good'
      },
      {
        title: "🎨 Theme Not Applying",
        list: ["Tools → Editor Themes → Refresh Cache", "Reimport package via Package Manager", "Check Unity version compatibility"],
        variant: 'good'
      }
    ]},
    
    { type: 'header', level: 3, text: "Personalized Tweaks" },
    
    { type: 'list', style: 'unordered', items: [
      '"Per-Project Themes" - The package needs to be imported on a per project basis, thus allowing the flexibility of having different themes for different projects.',
      '"Export Themes" - Premade Themes can be customized and custom ones can be created from scratch and shared for added personalization.'
    ]},
    
    
        ]
    },
    {
        id: 2,
        title: "Boot from Multiple OSes conveniently using Ventoy",
        excerpt: "Create a single USB drive that boots into installation media while also having access to recovery tools. No reformatting required. Drag and drop ISOs forever.",
        category: "Sysadmin Tools",
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
             { type: 'header', level: 2, text: "One USB, Infinite Operating Systems" },
    
    { type: 'paragraph', text: "Ventoy transforms any USB drive into a multiboot powerhouse. It allows you to utilize the same portable thumb drive for booting into a Windows/Linux Installation Medium or make use of recovery tools and utilities such as HirensLiveCD or MemTest86. This allows you to maximize your flash drives both in terms of storage as well as functionality." },
    
    { type: 'alert', variant: 'tip', title: "USB Capacity Matters", text: "16GB minimum, 128GB+ recommended. NTFS/exFAT formatting supports massive ISO collections." },
    
    { type: 'header', level: 2, text: "5-Minute USB Creation" },
    
    { type: 'list', style: 'ordered', items: [
      "Download [Ventoy](https://www.ventoy.net/en/index.html) → Extract ZIP → Run Ventoy2Disk.exe as Administrator",
      "Select target USB → Install (creates 2 partitions: tiny Ventoy + large data)",
      "Copy ISOs directly to larger partition (Windows/Linux/Recovery)",
      "Boot USB → Select any ISO → Install instantly"
    ]},
    
    { type: 'alert', variant: 'warning', title: "Backup First!", text: "Ventoy **erases entire USB**. Double-check drive selection—target is **not** your system drive." },
    
    { type: 'header', level: 2, text: "Supported OS and Features" },
    
    { type: 'paragraph', text: "Ventoy is extremely flexible in the kinds of operating systems and bootable images it supports, because it doesn’t care what OS you put on the USB drive (as long as it’s a bootable image). You simply format a USB once with Ventoy, copy your .ISO/.WIM/.IMG/.VHD(x) files onto it, and Ventoy will give you a boot menu for them." },
        
    { type: 'grid', items: [
        {
        title: "🪟 Windows ISOs",
        list: ["Most desktop versions: e.g., Windows 7, 8, 8.1, 10, 11", "Windows Server Editions", "WinPE/WinRE environments"],
        variant: 'good'
    },
    {
        title: "🐧 Linux Distros",
        list: ["Covers nearly all popular distros (Ubuntu, Fedora, Debian, Mint, Arch, Manjaro, Kali, CentOS, RHEL, openSUSE, etc.).", "Live USBs, installers, rescue systems like Parted Magic, SystemRescue, etc.",],
        variant: 'good'
    }
    ]},
    
    { type: 'header', level: 3, text: "Windows 10/11 Specifics" },
    
    { type: 'table', headers: ["ISO Type", "BIOS/UEFI", "Notes"], rows: [
      ["Windows 10", "Both", "All editions supported"],
      ["Windows 11", "UEFI", "Auto-bypasses TPM/Secure Boot"],
      ["WinPE 10/11", "Both", "Perfect for repairs"],
      ["Ubuntu 24.04", "Both", "Ventoy persistence support"]
    ]},
    
    { type: 'header', level: 2, text: "BIOS/UEFI Boot Setup" },
    
    { type: 'list', style: 'unordered', items: [
        "BIOS: F12/Esc → Boot Menu → Select Ventoy USB",
        "UEFI: Disable Secure Boot (optional for Windows 11), F12 → USB first",
        "GRUB Menu appears → Arrow keys → Enter on desired ISO",
        "ISO boots natively, no extraction needed"
    ]},
    
    { type: 'header', level: 3, text: "Folder Organization" },
        { type: 'paragraph', text: "Ventoy can scan recursively upto root + 1 folders i.e. only within folders immediately located in the root directory of the drive, for bootable images in supported formats, thus allowing you to create folder structures as per your convenience. Below is one such example: " },

    { type: 'code', language: 'bash', filename: 'USB-Structure.txt', code: `Ventoy-USB/
├── Windows/
│   ├── Win10.iso
│   ├── Win11.iso
├── Linux/
│   ├── Ubuntu-24.04.iso
│   └── Kali-Linux.iso
└── Tools/
    ├── Hirens-BootCD.iso
    └── MemTest86.iso` },
    
    { type: 'header', level: 2, text: "Windows Troubleshooting" },
    
    { type: 'grid', items: [
      {
        title: "🔧 Boot Failures",
        list: ["USB → BIOS first (not CSM/Legacy)", "Disable Secure Boot for Linux", "Recreate Ventoy (Ventoy2Disk.exe → Install)"],
        variant: 'good'
      },
      {
        title: "📁 ISO Not Listed",
        list: ["Only root + 1 subfolder deep", "ISO/WIM/IMG/EFI files only", ".iso extension required"],
        variant: 'good'
      }
    ]},
    { type: 'alert', variant: 'tip', title: "Pro Workflow", text: "Keep 128GB USB with 20+ ISOs organized by category. Windows 10 repair + Ubuntu live + Hirens = complete toolkit under 30GB." },
    
    { type: 'header', level: 3, text: "USB Maintenance" },
    
    { type: 'list', style: 'ordered', items: [
      "Add new ISOs → Eject → Reboot → Auto-detected",
      "Update Ventoy → Run Ventoy2Disk.exe → 'Update' (preserves data)",
      "Reformat USB → Backup ISOs → Fresh Ventoy install"
    ]},
    
    
      ]
},
    ];

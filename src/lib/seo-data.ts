export interface RatioDimension {
  name: string;
  width: number;
  height: number;
  use: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RatioData {
  label: string;
  w: number;
  h: number;
  title: string;
  description: string;
  explanation: string;
  useCases: string[];
  dimensions: RatioDimension[];
  faq: FaqItem[];
  relatedRatios: string[];
  relatedPlatforms: string[];
  cssValue: string;
}

export interface PlatformFormat {
  type: string;
  width: number;
  height: number;
  ratio: string;
  notes: string;
}

export interface PlatformData {
  name: string;
  title: string;
  description: string;
  intro: string;
  formats: PlatformFormat[];
  tips: string[];
  faq: FaqItem[];
  relatedRatios: string[];
}

export interface ArticleSection {
  heading: string;
  body: string;
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface ArticleData {
  title: string;
  description: string;
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
}

// ── Ratio Data ────────────────────────────────────────────────────────────────

export const RATIO_DATA: Record<string, RatioData> = {
  "16-9": {
    label: "16:9",
    w: 16,
    h: 9,
    title: "16:9 Aspect Ratio — Dimensions, Pixels & Free Calculator",
    description:
      "Everything about the 16:9 aspect ratio: common dimensions (720p, 1080p, 4K, 8K), use cases, and a free calculator. The standard for video, TV, and monitors.",
    explanation:
      "16:9 (sixteen-to-nine) is the universally adopted widescreen aspect ratio for HD video, streaming, and modern displays. For every 16 units of width, the height is 9 units — producing a wide, cinematic rectangle. It replaced the older 4:3 standard in the early 2000s and is now the default for virtually all video content, monitors, and television broadcasts worldwide.",
    useCases: [
      "YouTube videos and thumbnails",
      "Netflix, Disney+, and streaming platforms",
      "HD and 4K television",
      "PC monitors and laptop screens",
      "PowerPoint and Google Slides presentations",
      "Zoom and video conference backgrounds",
      "Video game cinematics",
    ],
    dimensions: [
      { name: "nHD", width: 640, height: 360, use: "Low-res web, mobile fallback" },
      { name: "HD (720p)", width: 1280, height: 720, use: "Web video, older devices, YouTube minimum" },
      { name: "Full HD (1080p)", width: 1920, height: 1080, use: "Standard streaming, YouTube, TV broadcast" },
      { name: "QHD (1440p)", width: 2560, height: 1440, use: "High-resolution monitors, gaming" },
      { name: "4K UHD", width: 3840, height: 2160, use: "Premium streaming, professional video, 4K TV" },
      { name: "8K UHD", width: 7680, height: 4320, use: "Future displays, archival, broadcast masters" },
    ],
    faq: [
      {
        q: "What is 16:9 in pixels?",
        a: "The most common 16:9 pixel dimensions are 1280×720 (720p HD), 1920×1080 (1080p FHD), 2560×1440 (1440p QHD), and 3840×2160 (4K UHD). Any width divisible to give a 16:9 ratio works — for example 640×360 or 800×450.",
      },
      {
        q: "Why is 16:9 the standard for video?",
        a: "16:9 was chosen as the international HDTV standard in the 1980s–90s because it is a mathematical compromise between the older 4:3 TV ratio and the wider 2.39:1 cinema ratio. It minimises letterboxing when displaying content from either source.",
      },
      {
        q: "Is 1920×1080 the same as 16:9?",
        a: "Yes. 1920 ÷ 16 = 120, and 1080 ÷ 9 = 120, so both dimensions share the same factor. 1920×1080 (Full HD / 1080p) is the most widely used 16:9 resolution.",
      },
      {
        q: "What is the 16:9 ratio for a 4K resolution?",
        a: "4K UHD (Ultra High Definition) at 16:9 is 3840×2160 pixels — exactly four times the area of 1920×1080. Cinema 4K (DCI 4K) is 4096×2160, which is a slightly different ratio (1.9:1).",
      },
    ],
    relatedRatios: ["4-3", "21-9", "9-16"],
    relatedPlatforms: ["youtube", "twitter", "linkedin", "facebook"],
    cssValue: "16 / 9",
  },

  "9-16": {
    label: "9:16",
    w: 9,
    h: 16,
    title: "9:16 Aspect Ratio — TikTok, Reels & Vertical Video Dimensions",
    description:
      "Complete guide to the 9:16 aspect ratio: pixel dimensions, use cases for TikTok, Instagram Reels, YouTube Shorts, and a free calculator.",
    explanation:
      "9:16 is the vertical (portrait) counterpart of 16:9 widescreen. It perfectly fills a smartphone screen held upright — making it the dominant format for short-form social video. TikTok, Instagram Reels, YouTube Shorts, and Snapchat all use 9:16 as their primary canvas.",
    useCases: [
      "TikTok videos",
      "Instagram Reels and Stories",
      "YouTube Shorts",
      "Snapchat videos",
      "Facebook Reels and Stories",
      "Pinterest video pins",
      "Mobile-first advertising",
    ],
    dimensions: [
      { name: "SD Mobile", width: 540, height: 960, use: "Low-resolution mobile, older devices" },
      { name: "HD Mobile", width: 720, height: 1280, use: "Standard mobile quality" },
      { name: "Full HD (1080p)", width: 1080, height: 1920, use: "TikTok, Instagram Reels, YouTube Shorts — recommended" },
      { name: "QHD Mobile", width: 1440, height: 2560, use: "High-end smartphone recording" },
    ],
    faq: [
      {
        q: "What resolution should I use for TikTok?",
        a: "TikTok recommends 1080×1920 pixels (9:16 ratio) for the best quality. This is Full HD vertical video. Using a lower resolution may result in compression artifacts after upload.",
      },
      {
        q: "Is 9:16 the same as portrait mode?",
        a: "Yes. 9:16 is the standard portrait (vertical) video ratio, equivalent to flipping a 16:9 widescreen frame on its side. It matches the natural orientation of a smartphone held in one hand.",
      },
      {
        q: "Can I post a 9:16 video on YouTube?",
        a: "Yes — YouTube Shorts is specifically designed for 9:16 vertical videos. Regular YouTube uploads also accept 9:16, but they will display with black bars (pillarboxing) on desktop when embedded in a 16:9 player.",
      },
    ],
    relatedRatios: ["16-9", "4-5", "1-1"],
    relatedPlatforms: ["instagram", "tiktok", "youtube"],
    cssValue: "9 / 16",
  },

  "4-3": {
    label: "4:3",
    w: 4,
    h: 3,
    title: "4:3 Aspect Ratio — Classic Screen Dimensions & Calculator",
    description:
      "The 4:3 aspect ratio explained: common pixel sizes, where it is still used today (tablets, presentations, film), and a free calculator.",
    explanation:
      "4:3 (four-to-three) was the standard for television and computer monitors from the 1930s through the early 2000s. It produces a nearly square rectangle that matches the proportions of 35mm film frames. While largely replaced by 16:9 for video, it remains relevant for iPad displays, PowerPoint presentations, and certain photography formats.",
    useCases: [
      "iPad and tablet displays",
      "Legacy television and CCTV",
      "PowerPoint / Keynote presentations (older format)",
      "Digital cameras and photography",
      "Printed brochures and A4-ratio documents",
      "Retro-style video and film effects",
    ],
    dimensions: [
      { name: "QVGA", width: 320, height: 240, use: "Legacy devices, embedded displays" },
      { name: "VGA", width: 640, height: 480, use: "Classic web, webcam standard" },
      { name: "SVGA", width: 800, height: 600, use: "Older monitors, projectors" },
      { name: "XGA", width: 1024, height: 768, use: "iPad (1st–4th gen), standard projectors" },
      { name: "SXGA", width: 1280, height: 960, use: "Digital cameras, photography" },
      { name: "UXGA", width: 1600, height: 1200, use: "Professional monitors, print-quality images" },
    ],
    faq: [
      {
        q: "What is the 4:3 ratio in pixels?",
        a: "Common 4:3 pixel dimensions include 640×480 (VGA), 800×600 (SVGA), 1024×768 (XGA), and 1280×960. Any resolution where width ÷ height = 1.333... follows the 4:3 ratio.",
      },
      {
        q: "Does anyone still use 4:3?",
        a: "Yes. The iPad uses a 4:3 display (2048×1536 on Retina models). Many PowerPoint templates, DSLR cameras, and legacy surveillance cameras also use 4:3. It is less common for video but still relevant for static images and presentations.",
      },
      {
        q: "What is the difference between 4:3 and 16:9?",
        a: "4:3 is more square (ratio of 1.33:1) while 16:9 is wider and more rectangular (ratio of 1.78:1). 16:9 is the modern TV and video standard; 4:3 is the legacy standard that preceded it. When viewing 4:3 content on a 16:9 screen, black bars (pillarboxing) appear on the sides.",
      },
    ],
    relatedRatios: ["16-9", "3-2", "5-4"],
    relatedPlatforms: ["youtube", "facebook"],
    cssValue: "4 / 3",
  },

  "1-1": {
    label: "1:1",
    w: 1,
    h: 1,
    title: "1:1 Aspect Ratio — Square Dimensions for Instagram & Beyond",
    description:
      "The 1:1 square aspect ratio: pixel sizes, best uses on Instagram and social media, and a free aspect ratio calculator.",
    explanation:
      "1:1 is a perfect square — the width and height are identical. Instagram popularised the square format for social media photography, and it remains a staple for profile pictures, album covers, and feed posts across every major platform.",
    useCases: [
      "Instagram feed posts (original format)",
      "Profile pictures on all platforms",
      "Album artwork and music covers",
      "App icons and favicons",
      "Product photography for e-commerce",
      "Facebook and LinkedIn post images",
    ],
    dimensions: [
      { name: "Small", width: 400, height: 400, use: "Profile thumbnails, app icons" },
      { name: "Standard", width: 1080, height: 1080, use: "Instagram feed post (recommended)" },
      { name: "High Res", width: 2048, height: 2048, use: "Print, professional photography" },
      { name: "4K Square", width: 4096, height: 4096, use: "Ultra high-resolution print, archival" },
    ],
    faq: [
      {
        q: "What is the best 1:1 resolution for Instagram?",
        a: "Instagram recommends 1080×1080 pixels for square feed posts. The minimum is 320×320, but 1080×1080 is the standard for sharp display on all devices.",
      },
      {
        q: "Is a 1:1 ratio the same as a square?",
        a: "Yes, exactly. A 1:1 aspect ratio means the width equals the height, producing a perfect square regardless of the actual pixel count.",
      },
      {
        q: "Why does Instagram use 1:1?",
        a: "Instagram was originally designed around mobile photography and chose the 1:1 square format to standardise the feed grid. While they later added portrait (4:5) and landscape (1.91:1) formats, the 1:1 square remains the classic Instagram format.",
      },
    ],
    relatedRatios: ["4-5", "4-3", "3-2"],
    relatedPlatforms: ["instagram", "facebook", "linkedin"],
    cssValue: "1 / 1",
  },

  "4-5": {
    label: "4:5",
    w: 4,
    h: 5,
    title: "4:5 Aspect Ratio — Instagram Portrait Dimensions & Calculator",
    description:
      "The 4:5 aspect ratio for Instagram portrait posts: best pixel sizes, why it gets more feed space, and a free calculator.",
    explanation:
      "4:5 is a portrait (taller than wide) ratio that takes up the maximum vertical space allowed by Instagram's feed — giving your image more screen real estate than a square or landscape post. At a ratio of 0.8:1, it is slightly wider than a 9:16 phone screen, making it ideal for portraits, product shots, and editorial photography.",
    useCases: [
      "Instagram feed posts (portrait — maximum height)",
      "Social media photography",
      "Portrait photography for print",
      "Pinterest pins (secondary format)",
      "Facebook portrait image posts",
    ],
    dimensions: [
      { name: "Minimum", width: 600, height: 750, use: "Minimum for acceptable Instagram quality" },
      { name: "Standard", width: 1080, height: 1350, use: "Instagram portrait post (recommended)" },
      { name: "High Res", width: 2160, height: 2700, use: "Print-quality portrait images" },
    ],
    faq: [
      {
        q: "Why use 4:5 instead of 9:16 for Instagram posts?",
        a: "Instagram crops 9:16 images for the feed to 4:5 (the maximum portrait ratio allowed for feed posts). If you use 4:5, you get the tallest feed image allowed without losing any content to cropping. 9:16 is for Stories and Reels only.",
      },
      {
        q: "What are the pixel dimensions for 4:5 Instagram?",
        a: "The recommended size is 1080×1350 pixels. This is the maximum portrait size Instagram allows for feed posts and displays sharply on all devices.",
      },
      {
        q: "Does 4:5 get more reach on Instagram?",
        a: "A 4:5 post takes up more vertical space in the feed than a 1:1 square or 1.91:1 landscape post, which can help capture more attention as users scroll. Many creators report higher engagement rates with portrait posts, though this is content-dependent.",
      },
    ],
    relatedRatios: ["1-1", "9-16", "3-2"],
    relatedPlatforms: ["instagram", "pinterest", "facebook"],
    cssValue: "4 / 5",
  },

  "3-2": {
    label: "3:2",
    w: 3,
    h: 2,
    title: "3:2 Aspect Ratio — Photography, DSLR & Print Dimensions",
    description:
      "The 3:2 aspect ratio for DSLR cameras and print: common dimensions, 35mm film origins, and a free aspect ratio calculator.",
    explanation:
      "3:2 originates from the 35mm film frame, which measures 36mm × 24mm — a 3:2 ratio. It remains the native ratio for most DSLR and mirrorless cameras, and maps directly to common print sizes such as 4×6 inches, 6×9 inches, and 12×18 inches.",
    useCases: [
      "DSLR and mirrorless camera sensors",
      "35mm film photography",
      "4×6 and 6×9 inch prints",
      "Photo book layouts",
      "Professional portrait photography",
    ],
    dimensions: [
      { name: "6MP", width: 3008, height: 2000, use: "Entry-level DSLR" },
      { name: "12MP", width: 4272, height: 2848, use: "Mid-range DSLR (e.g., Canon 60D)" },
      { name: "24MP", width: 6000, height: 4000, use: "Professional DSLR (e.g., Nikon D3200)" },
      { name: "36MP", width: 7360, height: 4912, use: "High-resolution DSLR (e.g., Nikon D800)" },
    ],
    faq: [
      {
        q: "What print sizes match a 3:2 ratio?",
        a: "Standard 3:2 print sizes include 4×6 inches, 6×9 inches, 8×12 inches, 12×18 inches, and 20×30 inches. These print sizes will display your full image without cropping.",
      },
      {
        q: "What is the 3:2 ratio in pixels?",
        a: "Any resolution where width ÷ height = 1.5 is a 3:2 ratio. Common examples: 3000×2000, 4500×3000, 6000×4000. Most DSLR cameras capture images natively at 3:2.",
      },
    ],
    relatedRatios: ["4-3", "16-9", "5-4"],
    relatedPlatforms: ["instagram", "facebook"],
    cssValue: "3 / 2",
  },

  "21-9": {
    label: "21:9",
    w: 21,
    h: 9,
    title: "21:9 Aspect Ratio — Ultrawide Monitor Dimensions & Calculator",
    description:
      "The 21:9 ultrawide aspect ratio: common resolutions (2560×1080, 3440×1440, 5120×2160), gaming and cinema uses, and a free calculator.",
    explanation:
      "21:9 (sometimes called ultrawide) provides a much wider field of view than standard 16:9 monitors. It is popular for gaming (eliminating the need for multiple monitors), cinematic video production, and productivity workflows. Many cinematic films shot in 2.35:1 or 2.39:1 appear close to 21:9 when displayed on an ultrawide screen.",
    useCases: [
      "Ultrawide gaming monitors",
      "Video editing and colour grading workstations",
      "Multi-application productivity",
      "Cinematic film viewing (minimal letterboxing)",
      "Flight simulators and racing games",
    ],
    dimensions: [
      { name: "FHD Ultrawide", width: 2560, height: 1080, use: "Entry ultrawide gaming, budget monitors" },
      { name: "QHD Ultrawide", width: 3440, height: 1440, use: "Standard premium ultrawide" },
      { name: "5K Ultrawide", width: 5120, height: 2160, use: "Pro workstation, LG 34WK95U" },
    ],
    faq: [
      {
        q: "Is 21:9 actually 21 to 9?",
        a: "Not exactly — the name '21:9' is a marketing label. Most ultrawide monitors have a ratio closer to 64:27 (2.370:1) or 43:18 (2.388:1). The actual ratio depends on the specific resolution (e.g., 3440×1440 = 43:18).",
      },
      {
        q: "Do all games support 21:9?",
        a: "Many modern games natively support 21:9 ultrawide. Some older titles or certain multiplayer games restrict the field of view to 16:9 to prevent competitive advantages. Check a game's settings or community sites for ultrawide support status.",
      },
    ],
    relatedRatios: ["16-9", "2-1"],
    relatedPlatforms: [],
    cssValue: "21 / 9",
  },

  "2-1": {
    label: "2:1",
    w: 2,
    h: 1,
    title: "2:1 Aspect Ratio — Panoramic & Banner Dimensions",
    description:
      "The 2:1 aspect ratio: uses for panoramic photography, web banners, and Twitter/X headers, with a free calculator.",
    explanation:
      "2:1 is a wide panoramic ratio where the width is exactly twice the height. It is used for scenic panoramic photography, web page hero banners, and certain social media headers. It sits between 16:9 widescreen and true cinematic ratios.",
    useCases: [
      "Panoramic landscape photography",
      "Website hero banners and headers",
      "360° photo cropping",
      "Email newsletter headers",
      "Digital signage",
    ],
    dimensions: [
      { name: "Web Banner", width: 1200, height: 600, use: "Standard web banner, OG image" },
      { name: "HD Banner", width: 2000, height: 1000, use: "High-resolution web hero image" },
      { name: "Panoramic", width: 4000, height: 2000, use: "Panoramic photography" },
    ],
    faq: [
      {
        q: "What is the difference between 2:1 and 16:9?",
        a: "A 2:1 ratio (2.0:1) is wider than 16:9 (1.78:1). A 2:1 image is more panoramic — for example, 2000×1000 pixels versus 1920×1080 at 16:9. 2:1 has more horizontal space relative to its height.",
      },
    ],
    relatedRatios: ["16-9", "21-9"],
    relatedPlatforms: ["twitter"],
    cssValue: "2 / 1",
  },

  "5-4": {
    label: "5:4",
    w: 5,
    h: 4,
    title: "5:4 Aspect Ratio — Print & Monitor Dimensions",
    description:
      "The 5:4 aspect ratio: 8×10 prints, medium-format cameras, and legacy 1280×1024 monitors. Free calculator included.",
    explanation:
      "5:4 is slightly taller than the standard 4:3 ratio. It matches the 8×10 inch print size used in portrait photography studios and corresponds to the 1280×1024 resolution common on older CRT and early LCD monitors.",
    useCases: [
      "8×10 inch portrait prints",
      "10×8 inch photo prints",
      "Legacy 1280×1024 monitor content",
      "Medium-format photography",
      "Studio portrait photography",
    ],
    dimensions: [
      { name: "SXGA", width: 1280, height: 1024, use: "Legacy monitors and projectors" },
      { name: "Print 8×10", width: 2400, height: 3000, use: "8×10 inch print at 300 DPI" },
      { name: "Print 16×20", width: 4800, height: 6000, use: "16×20 inch print at 300 DPI" },
    ],
    faq: [
      {
        q: "What pixels match the 5:4 ratio?",
        a: "Common 5:4 pixel sizes include 1280×1024, 2560×2048, and any dimension pair where width ÷ height = 1.25. An 8×10 print scanned at 300 DPI produces 2400×3000 pixels (in portrait orientation, 3:2.4 = 5:4).",
      },
    ],
    relatedRatios: ["4-3", "1-1", "3-2"],
    relatedPlatforms: [],
    cssValue: "5 / 4",
  },
};

// ── Platform Data ─────────────────────────────────────────────────────────────

export const PLATFORM_DATA: Record<string, PlatformData> = {
  instagram: {
    name: "Instagram",
    title: "Instagram Image Sizes & Aspect Ratios 2026 — Complete Guide",
    description:
      "All Instagram image and video dimensions for 2026: feed posts, Stories, Reels, profile pictures, and more. Exact pixel sizes and aspect ratios.",
    intro:
      "Instagram supports multiple aspect ratios depending on where your content appears. Getting the right dimensions ensures your images display crisply without unwanted cropping. Here are all the official recommended sizes for 2026.",
    formats: [
      { type: "Feed Post — Square", width: 1080, height: 1080, ratio: "1:1", notes: "Classic format; safe for all devices" },
      { type: "Feed Post — Portrait (max height)", width: 1080, height: 1350, ratio: "4:5", notes: "Takes up the most feed space; recommended for max visibility" },
      { type: "Feed Post — Landscape", width: 1080, height: 566, ratio: "1.91:1", notes: "Wide image; less feed space than portrait" },
      { type: "Story", width: 1080, height: 1920, ratio: "9:16", notes: "Full-screen vertical; 15-second max for photos" },
      { type: "Reel", width: 1080, height: 1920, ratio: "9:16", notes: "Video must be at least 3 seconds; max 90 seconds" },
      { type: "Profile Picture", width: 320, height: 320, ratio: "1:1", notes: "Displayed as a circle; keep key content centred" },
      { type: "Carousel Post", width: 1080, height: 1080, ratio: "1:1", notes: "Each card should be the same dimensions" },
    ],
    tips: [
      "Use 4:5 (1080×1350) for feed posts to maximise vertical space in the scroll",
      "Keep important content within the centre 80% of Stories to avoid UI overlaps",
      "Export at full 1080px width — Instagram will compress anything larger anyway",
      "Use PNG for graphics and illustrations; JPEG at 80–90% quality for photos",
      "Avoid small text near the edges — it may be cropped on older devices",
    ],
    faq: [
      {
        q: "What is the best Instagram post size in 2026?",
        a: "For maximum feed visibility, use 1080×1350 pixels (4:5 ratio — portrait). This is the tallest format Instagram allows for feed posts and takes up the most screen space as users scroll.",
      },
      {
        q: "Can I post a 16:9 video to Instagram?",
        a: "Yes, but Instagram will crop 16:9 videos to fit the feed (to 1:1 or 4:5). For Reels and Stories, 16:9 video will show black bars (letterboxing) at the top and bottom. Always shoot vertical (9:16) for Reels and Stories.",
      },
      {
        q: "What size should Instagram Story text be?",
        a: "Keep all text and key visuals within the safe zone: roughly 1080×1420 pixels centred within the 1080×1920 canvas. The top 250px and bottom 250px are typically covered by UI elements like the username and reply bar.",
      },
    ],
    relatedRatios: ["1-1", "4-5", "9-16"],
  },

  youtube: {
    name: "YouTube",
    title: "YouTube Video Dimensions & Aspect Ratios 2026 — Complete Guide",
    description:
      "All YouTube image and video dimensions for 2026: videos, Shorts, thumbnails, channel banners, and profile photos. Exact pixel sizes and ratios.",
    intro:
      "YouTube is primarily a 16:9 platform, but Shorts uses 9:16 vertical video. Getting dimensions right improves your thumbnail click-through rate and ensures your content looks sharp across all devices.",
    formats: [
      { type: "Video (Standard HD)", width: 1920, height: 1080, ratio: "16:9", notes: "Recommended for most uploads (1080p)" },
      { type: "Video (4K)", width: 3840, height: 2160, ratio: "16:9", notes: "Maximum quality; requires 4K recording" },
      { type: "Shorts", width: 1080, height: 1920, ratio: "9:16", notes: "Vertical video; max 60 seconds" },
      { type: "Thumbnail", width: 1280, height: 720, ratio: "16:9", notes: "Custom thumbnail; maximum file size 2MB" },
      { type: "Channel Banner (Desktop)", width: 2560, height: 1440, ratio: "16:9", notes: "Full banner; only the centre 1546×423px shows on all devices" },
      { type: "Profile Picture", width: 800, height: 800, ratio: "1:1", notes: "Displayed as a circle; minimum 98×98px" },
    ],
    tips: [
      "Design thumbnails at 1280×720 with bold text and high-contrast colours for better CTR",
      "Keep channel banner safe zone to 1546×423 pixels to ensure it shows on all devices",
      "Upload videos at the highest resolution you can — YouTube transcodes down, not up",
      "For Shorts, use 1080×1920 (9:16) and ensure no essential content is in the top or bottom 10%",
      "Thumbnail file must be under 2MB — use JPEG for photos, PNG for graphics",
    ],
    faq: [
      {
        q: "What resolution is best for YouTube videos?",
        a: "1920×1080 (1080p Full HD) is the standard and recommended resolution for YouTube uploads. It provides sharp video on most screens without requiring 4K recording equipment.",
      },
      {
        q: "What size should a YouTube thumbnail be?",
        a: "YouTube recommends 1280×720 pixels (16:9 ratio) for custom thumbnails. Maximum file size is 2MB. Use JPEG for photos or PNG for designed graphics.",
      },
      {
        q: "What is the YouTube Shorts resolution?",
        a: "YouTube Shorts uses a 9:16 vertical ratio, with the recommended resolution of 1080×1920 pixels. The maximum length for Shorts is 60 seconds.",
      },
    ],
    relatedRatios: ["16-9", "9-16", "1-1"],
  },

  tiktok: {
    name: "TikTok",
    title: "TikTok Video Dimensions & Aspect Ratios 2026 — Complete Guide",
    description:
      "TikTok video sizes and aspect ratios for 2026: the best resolution for TikTok videos, profile photos, and cover images.",
    intro:
      "TikTok is a mobile-first, vertical video platform. All content should be designed for 9:16 portrait orientation. Here are the specifications to ensure your content looks its best.",
    formats: [
      { type: "Video (Recommended)", width: 1080, height: 1920, ratio: "9:16", notes: "Full HD vertical — always use this" },
      { type: "Video (Minimum)", width: 720, height: 1280, ratio: "9:16", notes: "Minimum for acceptable quality" },
      { type: "Profile Picture", width: 200, height: 200, ratio: "1:1", notes: "Displayed as a circle" },
      { type: "Cover Image", width: 1080, height: 1920, ratio: "9:16", notes: "Auto-extracted from video; can be customised" },
    ],
    tips: [
      "Always record and upload at 1080×1920 (9:16) for the best display quality",
      "Keep key content in the centre of the frame — the bottom 20% is covered by captions and UI",
      "TikTok supports .mp4 and .mov formats; H.264 codec is recommended",
      "Use the TikTok text overlay tool sparingly — it sits on top of your content",
      "Bright lighting and high contrast visuals perform better on the algorithm",
    ],
    faq: [
      {
        q: "What is the best video resolution for TikTok?",
        a: "TikTok recommends 1080×1920 pixels (9:16 ratio, Full HD vertical). Using this resolution ensures your video displays without black bars or letterboxing on any device.",
      },
      {
        q: "Can I upload a horizontal (16:9) video to TikTok?",
        a: "Yes, TikTok accepts horizontal videos, but they will display with black bars above and below (letterboxed). For the best viewer experience and algorithm performance, always use vertical (9:16) video.",
      },
      {
        q: "What is TikTok's maximum video length?",
        a: "As of 2026, TikTok allows videos up to 10 minutes long for standard accounts. Shorter videos (15–60 seconds) typically perform better in the recommendation algorithm.",
      },
    ],
    relatedRatios: ["9-16", "1-1"],
  },

  twitter: {
    name: "X / Twitter",
    title: "X (Twitter) Image Sizes & Aspect Ratios 2026 — Complete Guide",
    description:
      "All X (Twitter) image dimensions for 2026: post images, header banners, profile photos, and video sizes. Exact pixel specs.",
    intro:
      "X (formerly Twitter) supports a range of image formats and sizes. Images in posts are auto-cropped in the timeline view but display in full when tapped. Here are all the recommended dimensions.",
    formats: [
      { type: "Post Image (Landscape)", width: 1600, height: 900, ratio: "16:9", notes: "Recommended for most post images" },
      { type: "Post Image (Square)", width: 1200, height: 1200, ratio: "1:1", notes: "Safe for all display contexts" },
      { type: "Post Image (Portrait)", width: 900, height: 1350, ratio: "2:3", notes: "Maximum portrait ratio supported" },
      { type: "Profile Picture", width: 400, height: 400, ratio: "1:1", notes: "Displayed as a circle; recommended 400×400 min" },
      { type: "Header / Banner", width: 1500, height: 500, ratio: "3:1", notes: "Top of profile page; avoid edges — cropped on mobile" },
      { type: "Video", width: 1920, height: 1080, ratio: "16:9", notes: "Max 2:20 duration; 512MB file size limit" },
    ],
    tips: [
      "Use 1600×900 for landscape post images — it displays without cropping in the timeline",
      "Keep the centre 60% of the header banner safe for all devices",
      "Profile pictures are displayed as circles — use a centred subject with no important content near the edges",
      "X compresses images — export at 100% quality JPEG to minimise visible compression",
      "For Twitter cards (link previews), use a 2:1 ratio (e.g., 1200×628) for large card format",
    ],
    faq: [
      {
        q: "What is the best image size for an X (Twitter) post?",
        a: "1600×900 pixels (16:9) is the recommended size for X post images. It displays without cropping in the timeline. Square (1200×1200) is also safe and looks good across all contexts.",
      },
      {
        q: "What size is the X (Twitter) header banner?",
        a: "The recommended X header size is 1500×500 pixels (3:1 ratio). Note that the banner is cropped differently on desktop vs. mobile — keep important content within the centre area.",
      },
    ],
    relatedRatios: ["16-9", "1-1", "2-1"],
  },

  linkedin: {
    name: "LinkedIn",
    title: "LinkedIn Image Sizes & Aspect Ratios 2026 — Complete Guide",
    description:
      "LinkedIn image dimensions for 2026: post images, company banners, profile photos, and cover images. Exact pixel sizes for professional content.",
    intro:
      "LinkedIn is a professional network where image quality matters for credibility. Here are the recommended image sizes to ensure your profile and posts look polished.",
    formats: [
      { type: "Post Image (Landscape)", width: 1200, height: 628, ratio: "1.91:1", notes: "Standard LinkedIn post image" },
      { type: "Post Image (Square)", width: 1080, height: 1080, ratio: "1:1", notes: "Square posts perform well on LinkedIn" },
      { type: "Profile Picture", width: 400, height: 400, ratio: "1:1", notes: "Minimum 200×200; use a professional headshot" },
      { type: "Personal Banner", width: 1584, height: 396, ratio: "4:1", notes: "Displayed behind profile picture" },
      { type: "Company Logo", width: 300, height: 300, ratio: "1:1", notes: "Square logo for company page" },
      { type: "Company Banner", width: 1128, height: 191, ratio: "5.9:1", notes: "Very wide banner; keep text centred" },
    ],
    tips: [
      "Use 1200×628 for link preview images (LinkedIn card format)",
      "Profile photo should show your face clearly — LinkedIn is a professional context",
      "Personal banner can showcase your work, skill set, or brand — use 1584×396",
      "Company posts with images get significantly more engagement than text-only posts",
      "Export profile photos as JPEG or PNG; max file size is 8MB",
    ],
    faq: [
      {
        q: "What is the best LinkedIn post image size?",
        a: "1200×628 pixels (1.91:1 ratio) is LinkedIn's recommended post image size. Square images (1080×1080) also work well and may display better in the mobile feed.",
      },
      {
        q: "What size is the LinkedIn profile banner?",
        a: "The LinkedIn personal banner (background photo) should be 1584×396 pixels (4:1 ratio). This is the size that displays behind your profile picture on desktop and mobile.",
      },
    ],
    relatedRatios: ["1-1", "16-9"],
  },

  facebook: {
    name: "Facebook",
    title: "Facebook Image Sizes & Aspect Ratios 2026 — Complete Guide",
    description:
      "Facebook image dimensions for 2026: post images, cover photos, Stories, profile pictures, and more. Exact pixel specs.",
    intro:
      "Facebook supports many image formats and the specifications vary by placement. Here are the recommended dimensions for 2026 to ensure your content looks its best.",
    formats: [
      { type: "Post Image", width: 1200, height: 630, ratio: "1.91:1", notes: "Standard feed image; also used for link previews" },
      { type: "Post Image (Square)", width: 1080, height: 1080, ratio: "1:1", notes: "Safe for both desktop and mobile feeds" },
      { type: "Story", width: 1080, height: 1920, ratio: "9:16", notes: "Full-screen vertical; 24-hour duration" },
      { type: "Profile Picture", width: 180, height: 180, ratio: "1:1", notes: "Displayed at 170×170 on desktop; circle crop" },
      { type: "Cover Photo", width: 820, height: 312, ratio: "2.63:1", notes: "Displayed at 820×312 on desktop, 640×360 on mobile" },
      { type: "Event Cover", width: 1920, height: 1080, ratio: "16:9", notes: "Event page header image" },
    ],
    tips: [
      "Design cover photos with key content in the centre — cropping differs on mobile vs desktop",
      "For link posts, use a 1200×630 image to trigger Facebook's large preview card",
      "Upload photos at the highest resolution possible — Facebook will compress them",
      "Profile pictures are displayed as circles — keep faces or logos centred",
      "Stories safe zone: keep content within 250px from top and bottom edges",
    ],
    faq: [
      {
        q: "What is the best Facebook post image size?",
        a: "1200×630 pixels (1.91:1 ratio) is the recommended Facebook post size. This also works for link preview images. Square (1080×1080) is a safe alternative that looks consistent across all placements.",
      },
      {
        q: "What is the Facebook cover photo size?",
        a: "The recommended Facebook cover photo size is 820×312 pixels for desktop. On mobile, it displays as 640×360. To avoid cropping, keep important content in the centre 640×312 area.",
      },
    ],
    relatedRatios: ["1-1", "16-9", "9-16"],
  },

  pinterest: {
    name: "Pinterest",
    title: "Pinterest Pin Sizes & Aspect Ratios 2026 — Complete Guide",
    description:
      "Pinterest image dimensions for 2026: standard pins, idea pins, square pins, and profile photos. Get the right aspect ratio for maximum reach.",
    intro:
      "Pinterest is a visual discovery platform where taller images (2:3 ratio) perform best — they take up more space in the feed. Here are the recommended dimensions for all Pinterest content types.",
    formats: [
      { type: "Standard Pin (Portrait)", width: 1000, height: 1500, ratio: "2:3", notes: "Recommended — best reach and engagement" },
      { type: "Square Pin", width: 1000, height: 1000, ratio: "1:1", notes: "Works well; less vertical space than portrait" },
      { type: "Tall Pin", width: 1000, height: 2100, ratio: "1:2.1", notes: "Maximum height; use carefully — may be cut off" },
      { type: "Idea Pin", width: 1080, height: 1920, ratio: "9:16", notes: "Multi-page story format; full-screen vertical" },
      { type: "Profile Picture", width: 165, height: 165, ratio: "1:1", notes: "Circle crop; keep subject centred" },
    ],
    tips: [
      "Use 1000×1500 (2:3) for standard pins — it is the sweet spot for feed visibility",
      "Avoid going taller than 1:2.1 ratio — Pinterest may cut off overly tall images",
      "Add a text overlay to the upper-middle of the pin — avoid the bottom 100px where the source domain is displayed",
      "Save pins in JPEG for photos (max 20MB) or PNG for graphics with transparency",
      "Idea Pins (9:16) work differently from standard pins — they are more like Stories",
    ],
    faq: [
      {
        q: "What is the best Pinterest pin size?",
        a: "The recommended Pinterest pin size is 1000×1500 pixels (2:3 ratio). This portrait format takes up more vertical space in the feed, increasing visibility and click-through rate.",
      },
      {
        q: "Can I use a square image on Pinterest?",
        a: "Yes, 1:1 square pins (e.g., 1000×1000) are supported. However, portrait (2:3) pins typically perform better as they occupy more screen real estate in the masonry-style feed.",
      },
      {
        q: "What is a Pinterest Idea Pin?",
        a: "Idea Pins (formerly Story Pins) are multi-page, full-screen vertical content (9:16, 1080×1920). They do not link to external websites and are designed for native content within Pinterest.",
      },
    ],
    relatedRatios: ["3-2", "1-1", "9-16"],
  },
};

// ── Article Data ──────────────────────────────────────────────────────────────

export const ARTICLE_DATA: Record<string, ArticleData> = {
  "what-is-aspect-ratio": {
    title: "What is Aspect Ratio? A Beginner's Guide",
    description:
      "A clear, beginner-friendly explanation of aspect ratio: what it means, how it is written, why it matters for screens and images, and how to use it.",
    intro:
      "Aspect ratio is one of those terms that sounds technical but is actually quite simple once you understand it. Whether you are resizing a photo for Instagram, setting up a YouTube video, or buying a new monitor, aspect ratio determines the shape of your image or screen. This guide explains everything you need to know.",
    sections: [
      {
        heading: "What Does Aspect Ratio Mean?",
        body: "Aspect ratio is the proportional relationship between the width and height of an image, screen, or video frame. It is written as two numbers separated by a colon — for example, 16:9 or 4:3. The first number is the width and the second is the height. A 16:9 ratio means that for every 16 units of width, the height is 9 units. The actual size does not matter — a 160×90 pixel image and a 3840×2160 pixel image are both 16:9 because they share the same proportions.",
      },
      {
        heading: "Why Does Aspect Ratio Matter?",
        body: "Aspect ratio matters whenever you are displaying, printing, or sharing visual content. If the ratio of your image does not match the ratio of the display or container, one of two things happens:",
        list: [
          "Letterboxing / Pillarboxing — Black bars appear to fill the empty space",
          "Cropping — The image is cut to fit, and some content is lost",
          "Stretching — The image is distorted to fill the frame (least desirable)",
        ],
      },
      {
        heading: "Common Aspect Ratios and Where They Are Used",
        body: "Different industries and platforms have standardised on different aspect ratios. Here are the most important ones to know:",
        table: {
          headers: ["Ratio", "Decimal", "Common Use"],
          rows: [
            ["16:9", "1.78:1", "YouTube, Netflix, TV, monitors, presentations"],
            ["9:16", "0.56:1", "TikTok, Instagram Reels, YouTube Shorts, Stories"],
            ["1:1", "1.00:1", "Instagram feed posts, profile pictures, album art"],
            ["4:5", "0.80:1", "Instagram portrait posts (maximum feed height)"],
            ["4:3", "1.33:1", "iPads, legacy TV, PowerPoint, DSLR cameras"],
            ["3:2", "1.50:1", "DSLR cameras, 4×6 prints, 35mm film"],
            ["2.39:1", "2.39:1", "Theatrical cinemascope films"],
          ],
        },
      },
      {
        heading: "How to Calculate an Aspect Ratio",
        body: "To find the aspect ratio of any image, divide both the width and height by their Greatest Common Divisor (GCD). For example, an image that is 1920×1080 pixels: both numbers are divisible by 120, giving 16:9. Our free calculator does this automatically — just enter your width and height.",
      },
      {
        heading: "Aspect Ratio vs. Resolution",
        body: "Aspect ratio and resolution are related but not the same thing. Resolution refers to the total number of pixels (e.g., 1920×1080). Aspect ratio refers to the shape (e.g., 16:9). Two images can share the same aspect ratio but have completely different resolutions — for example, 640×360 and 3840×2160 are both 16:9 but differ vastly in pixel count and quality.",
      },
    ],
    conclusion:
      "Understanding aspect ratio helps you produce images and videos that look exactly as intended on every screen and platform. Use our free aspect ratio calculator to instantly convert dimensions, identify ratios, and resize images while maintaining the correct proportions.",
  },

  "how-to-calculate-aspect-ratio": {
    title: "How to Calculate Aspect Ratio: The Complete Guide",
    description:
      "Learn how to calculate aspect ratio step by step: using the GCD method, the formula, and our free online calculator. Includes worked examples.",
    intro:
      "Knowing how to calculate an aspect ratio is a fundamental skill for anyone working with images, video, or design. This guide covers the maths behind it, the fastest manual methods, and how to use our free calculator for instant results.",
    sections: [
      {
        heading: "The Aspect Ratio Formula",
        body: "The aspect ratio of any rectangle is simply: Width ÷ Height. To express it as a clean W:H ratio (e.g., 16:9 rather than 1.778:1), you need to find the Greatest Common Divisor (GCD) of the width and height and divide both by it.",
      },
      {
        heading: "Step-by-Step: How to Find the Aspect Ratio",
        body: "Here is how to manually calculate the aspect ratio of any image:",
        list: [
          "Step 1: Write down the width and height in pixels (e.g., 1920 and 1080)",
          "Step 2: Find the Greatest Common Divisor (GCD) of both numbers. For 1920 and 1080, the GCD is 120.",
          "Step 3: Divide both numbers by the GCD. 1920 ÷ 120 = 16; 1080 ÷ 120 = 9.",
          "Step 4: Write the result as W:H — in this case, 16:9.",
        ],
      },
      {
        heading: "Worked Examples",
        body: "Here are some common dimensions and their aspect ratios:",
        table: {
          headers: ["Width", "Height", "GCD", "Aspect Ratio"],
          rows: [
            ["1920", "1080", "120", "16:9"],
            ["1080", "1350", "270", "4:5"],
            ["1280", "720", "80", "16:9"],
            ["3840", "2160", "240", "16:9"],
            ["1080", "1920", "120", "9:16"],
            ["1200", "630", "30", "40:21 ≈ 1.91:1"],
          ],
        },
      },
      {
        heading: "How to Calculate a Missing Dimension",
        body: "If you know the original dimensions and want to find a new size at the same ratio, use this formula: New Height = (Original Height ÷ Original Width) × New Width. For example, to find the height of a 16:9 image at 1280px wide: (1080 ÷ 1920) × 1280 = 720px. Our calculator does this automatically in both directions.",
      },
      {
        heading: "The Fastest Method: Use a Calculator",
        body: "Manually calculating aspect ratios is straightforward for round numbers, but quickly becomes tedious for irregular dimensions like 1847×923. Our free Aspect Ratio Calculator handles any width and height instantly — enter your values and get the simplified ratio, decimal, closest standard match, and CSS values in one click.",
      },
    ],
    conclusion:
      "Calculating aspect ratios is easy once you understand the GCD method. For everyday use, our free calculator will save you time and give you additional information like quality analysis, print sizes, and CSS export. Try it now at aspect-ratio-calculator.com.",
  },

  "aspect-ratio-social-media-guide-2026": {
    title: "Social Media Image Sizes & Aspect Ratios: 2026 Complete Guide",
    description:
      "Every social media image size and aspect ratio for 2026: Instagram, YouTube, TikTok, X, LinkedIn, Facebook, and Pinterest. Keep this guide bookmarked.",
    intro:
      "Social media platforms each have their own recommended image dimensions, and they change regularly. Using the wrong size means your images get cropped, blurry, or poorly displayed. This guide covers every major platform for 2026.",
    sections: [
      {
        heading: "Why Image Sizes Matter on Social Media",
        body: "Each platform has a different feed layout, display area, and compression algorithm. An image optimised for one platform may look blurry, cropped, or stretched on another. Uploading at the exact recommended dimensions ensures:",
        list: [
          "No unexpected cropping of key content",
          "Maximum sharpness — no upscaling by the platform",
          "Faster load times — correct sizing reduces file size",
          "Better performance in recommendation algorithms",
        ],
      },
      {
        heading: "Instagram Image Sizes 2026",
        body: "Instagram supports three feed ratios plus Stories and Reels. For feed posts, 4:5 portrait (1080×1350) gives you the most vertical space — ideal for maximising scroll visibility.",
        table: {
          headers: ["Format", "Dimensions", "Ratio"],
          rows: [
            ["Feed Post (Square)", "1080 × 1080", "1:1"],
            ["Feed Post (Portrait)", "1080 × 1350", "4:5"],
            ["Feed Post (Landscape)", "1080 × 566", "1.91:1"],
            ["Story / Reel", "1080 × 1920", "9:16"],
            ["Profile Picture", "320 × 320", "1:1"],
          ],
        },
      },
      {
        heading: "YouTube Dimensions 2026",
        body: "YouTube is a 16:9 platform. Design thumbnails at 1280×720 with bold, readable text — your thumbnail is often the deciding factor for whether someone clicks.",
        table: {
          headers: ["Format", "Dimensions", "Ratio"],
          rows: [
            ["Video (1080p)", "1920 × 1080", "16:9"],
            ["Shorts", "1080 × 1920", "9:16"],
            ["Thumbnail", "1280 × 720", "16:9"],
            ["Channel Banner", "2560 × 1440", "16:9"],
          ],
        },
      },
      {
        heading: "TikTok Video Sizes 2026",
        body: "TikTok is entirely vertical — always use 9:16 at 1080×1920 for the best quality. Keep key content in the centre of the frame and away from the bottom 20% where captions and UI elements appear.",
        table: {
          headers: ["Format", "Dimensions", "Ratio"],
          rows: [
            ["Video (Recommended)", "1080 × 1920", "9:16"],
            ["Profile Picture", "200 × 200", "1:1"],
          ],
        },
      },
      {
        heading: "Quick Reference: All Platforms",
        body: "Here is a quick-reference table for the most commonly used social media image sizes in 2026:",
        table: {
          headers: ["Platform", "Format", "Dimensions", "Ratio"],
          rows: [
            ["Instagram", "Feed Post (Portrait)", "1080 × 1350", "4:5"],
            ["Instagram", "Story / Reel", "1080 × 1920", "9:16"],
            ["YouTube", "Video", "1920 × 1080", "16:9"],
            ["YouTube", "Thumbnail", "1280 × 720", "16:9"],
            ["TikTok", "Video", "1080 × 1920", "9:16"],
            ["X / Twitter", "Post Image", "1600 × 900", "16:9"],
            ["LinkedIn", "Post Image", "1200 × 628", "1.91:1"],
            ["Facebook", "Post Image", "1200 × 630", "1.91:1"],
            ["Pinterest", "Standard Pin", "1000 × 1500", "2:3"],
          ],
        },
      },
    ],
    conclusion:
      "Bookmark this guide and use our free Aspect Ratio Calculator to verify or convert any dimensions in seconds. Enter your current image size and target platform dimensions to check quality, calculate CSS values, and share results instantly.",
  },

  "16-9-vs-4-3-aspect-ratio": {
    title: "16:9 vs 4:3 Aspect Ratio — Which Should You Use?",
    description:
      "A clear comparison of 16:9 and 4:3 aspect ratios: when to use each, the history behind them, key differences, and pixel size examples.",
    intro:
      "16:9 and 4:3 are the two most historically significant aspect ratios in video and photography. If you have ever seen black bars on your screen — either on the sides or top and bottom — you have already encountered the difference between them. Here is a complete comparison.",
    sections: [
      {
        heading: "The Key Difference",
        body: "16:9 is wider and more rectangular (ratio of 1.78:1), while 4:3 is more square (ratio of 1.33:1). A 16:9 image is about 33% wider than a 4:3 image of the same height. This difference may seem small but it is very noticeable on screen.",
      },
      {
        heading: "History: Where Did They Come From?",
        body: "4:3 was the original television standard, adopted in the 1930s because it closely matched the aspect ratio of 35mm motion picture film at the time. 16:9 was introduced in the late 1980s as a compromise widescreen standard that could display both 4:3 TV content (with small side bars) and 2.39:1 cinema content (with small top/bottom bars) with minimal black space. The ITU adopted 16:9 as the HDTV standard in 1987.",
      },
      {
        heading: "When to Use 16:9",
        body: "Use 16:9 when:",
        list: [
          "Creating video content for YouTube, Netflix, or television",
          "Making modern presentations (Google Slides, PowerPoint 2016 and later default to 16:9)",
          "Designing for widescreen monitors and laptops",
          "Recording video with a modern smartphone or camera",
          "Creating YouTube thumbnails",
        ],
      },
      {
        heading: "When to Use 4:3",
        body: "Use 4:3 when:",
        list: [
          "Designing for iPad displays (which use 4:3)",
          "Creating presentations for older projectors",
          "Matching legacy video content",
          "Printing to standard photographic proportions (some cameras)",
          "Working with CCTV or surveillance footage",
        ],
      },
      {
        heading: "Pixel Size Comparison",
        body: "Here are common resolutions for both ratios at equivalent megapixel counts:",
        table: {
          headers: ["Quality", "16:9 Size", "4:3 Size"],
          rows: [
            ["720p", "1280 × 720", "960 × 720"],
            ["1080p", "1920 × 1080", "1440 × 1080"],
            ["4K", "3840 × 2160", "2880 × 2160"],
          ],
        },
      },
    ],
    conclusion:
      "For most modern video and screen content, 16:9 is the right choice. For tablet-focused content or legacy compatibility, 4:3 may be more appropriate. When in doubt, use our free Aspect Ratio Calculator to convert between the two and preview the result instantly.",
  },

  "how-to-resize-image-without-losing-quality": {
    title: "How to Resize an Image Without Losing Quality",
    description:
      "Learn the techniques for resizing images without losing quality: downscaling vs upscaling, best file formats, DPI explained, and tool recommendations.",
    intro:
      "Resizing an image sounds simple, but done incorrectly it results in blurry, pixelated, or distorted photos. This guide explains when and how you can resize images without a visible quality loss.",
    sections: [
      {
        heading: "Downscaling vs. Upscaling",
        body: "There are two directions you can resize an image, and they have very different quality implications. Downscaling (making an image smaller) almost always preserves quality — you are simply discarding pixels. Upscaling (making an image larger) is where quality problems occur, because software must invent pixel data that does not exist in the original.",
      },
      {
        heading: "The Golden Rule: Always Start With the Highest Resolution",
        body: "Quality loss is mostly irreversible. If you start with a small image and need a large one, you will always see quality degradation. Best practice is to:",
        list: [
          "Always keep your original high-resolution file",
          "Export or save a separate copy at the target size",
          "Never re-save a compressed JPEG multiple times — each save degrades quality",
          "Export from the master file each time you need a new size",
        ],
      },
      {
        heading: "How Much Can You Upscale?",
        body: "As a general guideline: upscaling by up to 110–120% is generally imperceptible to most viewers. Upscaling by 150–200% produces noticeable softness. Upscaling beyond 200% typically produces obvious pixelation and blurring. AI-based upscaling tools (such as Topaz Gigapixel, Adobe Firefly, and similar) can sometimes produce acceptable results at 2–4× upscaling by intelligently generating detail.",
      },
      {
        heading: "Maintaining Aspect Ratio When Resizing",
        body: "One of the most common quality mistakes is accidentally changing the aspect ratio during resizing — stretching or squishing the image. Always resize proportionally by locking the aspect ratio in your editing tool. Our free calculator helps you find the correct target height for any new width (or vice versa), ensuring your resize maintains the original proportions.",
      },
      {
        heading: "Best File Formats for Quality",
        body: "The file format affects quality significantly after resizing:",
        list: [
          "PNG — Lossless compression; ideal for graphics, illustrations, and screenshots where sharpness matters",
          "JPEG — Lossy compression; ideal for photographs; set quality to 80–90% for the best size/quality balance",
          "WebP — Modern format that achieves better compression than JPEG at equivalent quality; supported by all modern browsers",
          "TIFF — Uncompressed or lossless; used in professional print and photography workflows",
        ],
      },
      {
        heading: "DPI and Print Quality",
        body: "DPI (dots per inch) is only relevant for print — it is ignored by screens. For print: use 300 DPI for sharp photo prints, 150 DPI for acceptable quality, and 72–96 DPI for screen-only use. To calculate the pixel dimensions needed for a print: multiply the print size in inches by the DPI. For an 8×10 inch print at 300 DPI: 2400×3000 pixels.",
      },
    ],
    conclusion:
      "The best way to resize without quality loss is to always downscale from a high-resolution original, maintain the aspect ratio, and export in the appropriate format. Use our Aspect Ratio Calculator to find the exact target dimensions that preserve your original proportions — no guesswork required.",
  },
};

// ── Sitemap Helpers ───────────────────────────────────────────────────────────

export const RATIO_SLUGS = Object.keys(RATIO_DATA);
export const PLATFORM_SLUGS = Object.keys(PLATFORM_DATA);
export const ARTICLE_SLUGS = Object.keys(ARTICLE_DATA);

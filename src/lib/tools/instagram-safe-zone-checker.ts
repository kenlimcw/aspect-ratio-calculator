import type { ToolData } from "@/lib/tools-data";

/* The reference cell. Its engine and data live in src/lib/safe-zones.ts because
 * two other cells import the same arithmetic; everything else here matches the
 * shape every later cell follows. */
export const tool: ToolData = {
  slug: "instagram-safe-zone-checker",
  lastmod: "2026-09-25",
  ns: "safeZoneTool",
  facts: 3,
  widget: "safe-zone-checker",
  category: "DesignApplication",
  related: [
    { href: "/ratio/9-16", labelKey: "related9x16" },
    { href: "/platform/instagram", labelKey: "relatedInstagram" },
    { href: "/blog/how-to-convert-16-9-to-9-16", labelKey: "relatedConvert" },
  ],
};

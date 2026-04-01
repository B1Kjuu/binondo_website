# Design System: Heritage Digital Concierge

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Archivist."** 

Binondo is a place of layers—centuries of history stacked upon modern commerce. This design system rejects the "flat web" in favor of an editorial, high-end experience that feels like a curated ledger or a premium concierge desk. We break the standard digital template by using **intentional asymmetry**, where images may bleed off-canvas or overlap parchment-toned containers, and **dynamic scale**, where massive serif headlines command the user’s focus against a backdrop of clean, functional utility.

This is not a generic portal; it is a tactile journey. We evoke the physical sensation of Manila’s Chinatown through warmth, depth, and sophisticated spatial relationships.

---

## 2. Colors: The Imperial Palette
Our palette is rooted in the "Deep Imperial Red" and "Brass" of Binondo's temples, softened by "Parchment" neutrals to ensure a modern, readable interface.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. Structural boundaries must be defined solely through background color shifts.
*   *Example:* A `surface-container-low` (#f6f3ec) section should sit directly on a `surface` (#fcf9f2) background. The change in tone provides the boundary, not a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical materials. 
*   **Base:** `background` (#fcf9f2) / `surface` (#fcf9f2)
*   **Level 1 (Subtle Inset):** `surface-container-low` (#f6f3ec)
*   **Level 2 (The Primary Card):** `surface-container` (#f0eee7)
*   **Level 3 (Interactive/Pop-out):** `surface-container-highest` (#e5e2db)

### The "Glass & Brass" Rule
To elevate the "Concierge" feel, use **Glassmorphism** for floating navigation bars or filter overlays. 
*   **Implementation:** Use `surface` (#fcf9f2) at 80% opacity with a `backdrop-filter: blur(12px)`. This allows the rich Imperial Reds of the content below to bleed through the "frosted" parchment, softening the interface.

### Signature Textures
Apply a subtle linear gradient to main CTAs (Primary):
*   **From:** `primary` (#610008) 
*   **To:** `primary_container` (#890613) 
This 15-degree tilt adds "visual soul" and a velvet-like depth that flat color cannot replicate.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance heritage with modern legibility.

*   **Headlines (Noto Serif):** Our "History" voice. Use `display-lg` for hero sections and `headline-lg` for heritage landmarks. The serif should feel authoritative and timeless.
*   **Body & UI (Manrope):** Our "Modern" voice. Manrope provides a clean, geometric contrast. Use `body-lg` for food descriptions to ensure high readability for tourists on the move.
*   **The Narrative Scale:** Always lead with a large Display header, but use `label-md` in `secondary` (#735c00) for "meta-data" like opening hours or street names to create a clear, tiered hierarchy.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than structural geometry.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f6f3ec) section. This creates a "natural lift" that feels like a thick piece of paper resting on a wooden table.
*   **Ambient Shadows:** If a shadow is required for a floating Action Button, use the "Binondo Glow":
    *   **Color:** `on-surface` (#1c1c18) at 6% opacity.
    *   **Blur:** 24px–32px.
    *   **Spread:** -4px (to keep it tight and sophisticated).
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., in high-glare outdoor mobile use), use `outline-variant` (#e3beb8) at **15% opacity**. A 100% opaque border is a failure of the system.

---

## 5. Components

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Execution:** Use `spacing-6` (2rem) of vertical white space to separate list items. For food menus, use a `surface-container-low` background for every second item to create a "zebra" effect without lines.
*   **Heritage Patterns:** Use a `0.1 opacity` cloud motif pattern as a background mask on the `primary_container` elements to add cultural texture.

### Buttons
*   **Primary:** Background: `primary` (#610008). Text: `on_primary` (#ffffff). Shape: `md` (0.375rem).
*   **Secondary (The Brass Button):** Background: `secondary` (#735c00). Text: `on_secondary` (#ffffff). Use for "Get Directions" or secondary heritage info.
*   **Tertiary:** No background. Text: `primary` (#610008) with a `label-md` weight.

### Heritage Chips
*   **Selection:** Use `secondary_container` (#fed65b) with `on_secondary_container` (#745c00) text. These should feel like small brass plaques.
*   **Shape:** `full` (pill-shaped) to contrast against the sharp editorial grid.

### Input Fields
*   **Style:** Minimalist. No bottom line or box. Use a `surface-container-highest` (#e5e2db) background with a `sm` (0.125rem) corner radius.
*   **Focus State:** Transition the background to `surface-container-low` and add a "Ghost Border" of `primary` at 20% opacity.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. If a photo of a Siopao is on the right, let the text on the left breathe with extra `spacing-8`.
*   **Do** use `secondary` (Gold/Brass) for iconography. It should feel like jewelry on the page.
*   **Do** ensure all "Modern Card" layouts have a `lg` (0.5rem) roundedness to keep the "Welcoming" feeling.

### Don't
*   **Don't** use pure black (#000000). Always use `on_surface` (#1c1c18) for text to maintain the warmth of the parchment theme.
*   **Don't** use 1px dividers. If you feel the need to separate content, increase the spacing scale to `spacing-10`.
*   **Don't** use "default" drop shadows. If it looks like a standard web shadow, it's too heavy.
---
name: Drift Design System
description: Production-ready design system for SaaS applications
colors:
  white: "oklch(1 0 0)"
  black: "oklch(0.145 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-foreground: "oklch(0.985 0 0)"
  secondary: "oklch(0.97 0 0)"
  secondary-foreground: "oklch(0.205 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  background-light: "oklch(1 0 0)"
  background-dark: "oklch(0.145 0 0)"
  foreground-light: "oklch(0.145 0 0)"
  foreground-dark: "oklch(0.985 0 0)"
  border-light: "oklch(0.922 0 0)"
  border-dark: "oklch(0.269 0 0)"
  input-light: "oklch(0.922 0 0)"
  input-dark: "oklch(0.269 0 0)"
  ring: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  success: "oklch(50.8% 0.118 165.612)"
  chart-1: "oklch(0.646 0.222 41.116)"
  chart-2: "oklch(0.6 0.118 184.704)"
  chart-3: "oklch(0.398 0.07 227.392)"
  chart-4: "oklch(0.828 0.189 84.429)"
  chart-5: "oklch(0.769 0.188 70.08)"
typography:
  display:
    fontFamily: "Geist Sans"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist Sans"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Geist Sans"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Geist Sans"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Sans"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
  button-primary-hover:
    backgroundColor: "oklch(0.205 0 0 / 0.8)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
    borderColor: "{colors.border-light}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.md}"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-light}"
    borderColor: "{colors.input-light}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
  card-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.foreground-light}"
    borderColor: "{colors.border-light}"
    rounded: "{rounded.lg}"
    padding: "16px"
---

# Design System: Drift

## Overview

**Creative North Star: "The Production Console"**

Drift's design system is built for professionals building SaaS applications. It embodies clarity through constraint: refined visual forms that disappear when you're working, reappearing only when they need to communicate. The system uses a neutral OKLCH-based palette with semantic color roles (primary, secondary, destructive, success) and typography with clear hierarchy. Every spacing, radius, and visual treatment is earned—nothing decorative, nothing accidental. Dark mode is first-class: colors are carefully calibrated for both light and dark contexts. The system prioritizes accessibility (focus rings with precise opacity, semantic HTML structure) and developer clarity (Tailwind utilities, Base UI primitives, no custom CSS needed).

**Key Characteristics:**

- **Neutral, purposeful.** Restraint shapes every decision; the interface recedes so the user's work stands forward.
- **OKLCH color space.** Perceptually uniform colors that adapt predictably to light and dark modes.
- **Flat, shadow-free.** Depth is conveyed through color, layering, and contrast—not box shadows or excessive elevation.
- **Accessible by default.** Focus rings, semantic states (aria-invalid, aria-expanded), and adequate contrast built in.
- **Composable primitives.** Base UI v2 components + Tailwind utilities = flexible, performant systems without custom CSS.

## Colors

A neutral foundation with semantic accents for actions and states. All colors use OKLCH color space for perceptual uniformity across light and dark modes.

### Neutral

- **White** (oklch 1): Primary background in light mode. Cards, popovers, elevated surfaces.
- **Black** (oklch 0.145): Primary text in light mode. Foreground content, dark text on white backgrounds.
- **Gray Mid** (oklch 0.556): Muted text; placeholder, disabled, secondary content. Less important than body text.
- **Gray Light** (oklch 0.922): Borders, input strokes, subtle dividers in light mode.
- **Gray Dark** (oklch 0.269): Borders, inputs in dark mode. Secondary surfaces.

### Primary

- **Primary Dark** (oklch 0.205): Call-to-action buttons, active navigation, highlighted text. The accent in light mode.
- **Primary Light** (oklch 0.985): Inverse foreground for primary buttons and accented areas. Used in dark mode.

**The Neutral North Rule.** The neutral palette is the visual foundation; primary color is sparse and intentional. Use primary to draw attention to one critical action per screen. Overuse diminishes impact.

### Secondary

- **Secondary Light** (oklch 0.97): Alternative background, muted accents, secondary button states.
- **Secondary Dark** (oklch 0.269): Dark-mode equivalents for secondary surfaces.

### Semantic

- **Destructive** (oklch 0.577 0.245 27): Errors, deletion confirmations, warnings. Red-tinted to signal caution.
- **Success** (oklch 50.8% 0.118 165): Confirmations, completion states, success messages. Green-tinted.

### Data Visualization

- **Chart 1–5**: Five distinct colors for charts, graphs, and multi-series data. Designed for contrast and accessibility.

## Typography

**Primary Font:** Geist Sans (default stack)
**Monospace Font:** Geist Mono (code, technical content)

**Character:** Geist is modern, geometric, and highly legible at small sizes. Its neutrality stays out of the way while its careful proportions make reading effortless. Pair it with single-digit letter-spacing adjustments on headlines for tightness without sacrificing readability.

### Hierarchy

- **Display** (font-weight 600, clamp 2rem – 3.5rem, line-height 1.1): Hero headlines, page titles. Rare. Use when the screen demands a focal point.
- **Headline** (font-weight 600, 1.875rem, line-height 1.2): Section titles, modal headers. Clear hierarchy; establishes area context.
- **Title** (font-weight 600, 1.125rem, line-height 1.4): Card titles, form labels, prominent metadata.
- **Body** (font-weight 400, 0.875rem, line-height 1.6): Default reading text. Max line length 65–75 characters for scanning comfort.
- **Label** (font-weight 500, 0.75rem, letter-spacing 0.02em): Form labels, metadata, breadcrumbs. Compact and clear.

**The Clarity Rule.** No font-weight outside the specified scale (400, 500, 600). Bold does not mean impact; hierarchy does. Let spacing and size carry weight.

## Layout

Drift uses a 16px base spacing unit (customizable per component). Layouts respect density: compact for data-heavy dashboards, generous for form-heavy flows.

**Spacing scale:** 4px (xs), 8px (sm), 16px (md), 24px (lg), 32px (xl). Container width respects viewport with responsive breakpoints.

**Responsive behavior:** Mobile-first. Base styles target mobile (375px minimum); breakpoints (sm: 640px, md: 768px) add layout changes. Buttons stay 44×44px minimum touch target. Form fields stack vertically on mobile, side-by-side on desktop only when space permits.

**Density:** Cards and form sections use 16px internal padding; tables use 12px row height with 8px column gap. Lists and navigation use 8px vertical spacing for compact scanning.

## Elevation & Depth

**Flat by default.** Drift uses no box shadows. Depth is conveyed through layering (z-index), color (tonal shifts), and contrast.

Borders mark container boundaries. Cards lift slightly via background color change (white on off-white, or increased tonal separation in dark mode). Interactive elements (buttons, inputs) signal state via color and opacity shifts—not shadows.

**Focus treatment:** Focus-visible elements show a 3px ring with 50% opacity. Ring color matches the primary accent or destructive role (for errors). This approach keeps the interface clean while meeting WCAG AAA accessibility.

## Shapes

**Corner radius:** Minimal, consistent. Base radius is 10px (0.625rem); scaled down to 6px (sm), 8px (md), or up to 14px (xl) for specific component needs.

Buttons and inputs use md radius (8px). Cards use lg radius (10px). Nested components (chips inside cards) may use sm (6px) for visual distinction.

**Borders:** Thin, 1px stroke. Border color is always the input/border token (light mode: oklch 0.922; dark mode: oklch 0.269).

**Form language:** Rectangular, soft corners. No hard edges, no rounded pills. Consistent, predictable geometry.

## Components

### Buttons

- **Shape:** Soft corners (8px border-radius).
- **Primary variant:** Dark background, white foreground. Hover reduces opacity to 80%. No lift or shadow. Used for primary CTAs.
- **Outline variant:** Transparent background, dark foreground, light border. Hover shifts background to muted. Used for secondary actions.
- **Ghost variant:** Transparent background and border. Hover adds muted background. Used for lower-priority actions or toolbars.
- **Destructive variant:** Red tinted, reduced opacity (10% background) to signal caution without aggression. Hover increases opacity to 20%.
- **Link variant:** Text-only, primary color, underline on hover. Minimal visual weight.
- **Sizes:** xs (6px height), sm (8px), default (9px), lg (10px), plus icon variants.
- **Focus:** 3px ring with 50% opacity, primary ring color.

### Inputs

- **Style:** 9px height, md radius (8px), border on all sides. Background transparent on light; slightly opaque on dark (input/30).
- **Focus:** Border shifts to ring color; 3px ring with 50% opacity.
- **Invalid state:** aria-invalid triggers red border and destructive ring color.
- **Placeholder:** Muted foreground color (0.556 lightness).
- **Disabled:** Opacity 50%, cursor not-allowed.

### Cards

- **Corner style:** lg radius (10px).
- **Background:** White on light mode; dark (oklch 0.145) in dark mode.
- **Border:** Subtle, light gray (oklch 0.922) on light; dark gray (oklch 0.269) on dark.
- **Internal padding:** 16px (md spacing).
- **Shadows:** None. Elevation via background color and border only.

### Navigation

- **Style:** Transparent background by default. Active state uses primary color (foreground text).
- **Hover:** Muted background.
- **Mobile:** Stacks vertically or into a sidebar; breadcrumbs for hierarchy.

### Chips / Badges

- **Style:** Small, compact. Secondary background, dark foreground. 6px radius (sm) for distinction from larger buttons.
- **Variants:** Solid (secondary background), ghost (border only), action (dismissible).

## Do's and Don'ts

### Do:

- **Do** use primary color for the single most important action per screen. Overuse dilutes signal.
- **Do** maintain minimum 44×44px touch targets on interactive elements.
- **Do** support dark mode. Test all components in both light and dark contexts.
- **Do** let spacing and hierarchy communicate importance—don't rely on weight or color alone.
- **Do** use semantic colors (destructive, success) for state and feedback. Never use red casually.
- **Do** keep text readable: 65–75 characters per line for body text.
- **Do** respect the focus ring treatment. Never remove it; it's accessibility, not decoration.
- **Do** use Tailwind utilities and Base UI components. No custom CSS for visual styling.

### Don't:

- **Don't** add box shadows. Elevation is color and layering.
- **Don't** invent new color roles. Stick to primary, secondary, destructive, success.
- **Don't** use primary color for secondary actions. One accent per screen.
- **Don't** customize border radius. Use the scale (sm, md, lg, xl).
- **Don't** override focus styles or remove outlines for aesthetics.
- **Don't** add decoration or gradients. Restraint is the design.
- **Don't** hard-code colors in components. Use CSS custom properties (--color-primary, etc.).
- **Don't** break the 16px spacing rhythm casually. One-off values weaken the system.


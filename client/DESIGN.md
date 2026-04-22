---
name: Jobify
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3b4b37'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#6b7c65'
  outline-variant: '#b9ccb2'
  surface-tint: '#006e16'
  primary: '#006e16'
  on-primary: '#ffffff'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#00e639'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#dedcdc'
  on-tertiary-container: '#606161'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  container-margin: 40px
  gutter: 24px
---

## Brand & Style

This design system is built on the principles of **Modern Brutalism**. It prioritizes raw functionality and structural integrity over decorative softening. The brand personality is confident, transparent, and unapologetically utilitarian, designed for users who value efficiency and clarity in their job search or recruitment workflow.

The aesthetic is defined by high-contrast interfaces, heavy structural lines, and a total rejection of skeuomorphism. By utilizing a "web-native" look—marked by sharp edges and visible grids—the design system evokes a sense of technical competence and urgency. It feels less like a corporate tool and more like a high-performance command center.

## Colors

The palette is anchored by a stark **Black and White** foundation to maximize readability and structural impact. 

- **Primary (Electric Neon):** A high-visibility neon green is used exclusively for interactive triggers, primary calls to action, and critical status indicators. It should be used sparingly to maintain its "pop" effect against the monochrome layout.
- **Secondary (Pure Black):** Used for all structural borders, primary headings, and iconography. 
- **Neutral Grays:** Reserved for secondary data, disabled states, and subtle background layering to prevent the UI from feeling overly vibrating while maintaining the high-contrast ethos.

## Typography

The typography strategy leverages a dual-font approach to reinforce the brutalist hierarchy. 

**Inter** is utilized for all core content and massive headlines. Headlines must be set with tight tracking and heavy weights (Extrabold/Black) to function as structural anchors on the page.

**Space Grotesk** (Monospace/Technical) is used for all metadata, labels, timestamps, and secondary data points. This creates a clear visual distinction between "Human Content" (Job Descriptions, Titles) and "System Data" (Application IDs, Dates, Salary Ranges). All caps should be used for labels to enhance the architectural feel.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy that mimics printed technical manuals. The layout is strictly governed by a 12-column grid with 24px gutters. 

Spacing is generous but rigid; there are no "soft" cushions. Padding within containers should be consistent (e.g., 32px on all sides) to create a "boxed-in" look. Elements should feel like they are locked into a series of interconnected compartments rather than floating freely. Use white space not just for breathing room, but as a deliberate structural gap between heavy black containers.

## Elevation & Depth

Depth is conveyed through **Hard Offsets** rather than soft shadows. 

In this design system, "Elevation" is represented by a 4px or 8px solid black shadow (a "block shadow") offset at 45 degrees. This creates a pseudo-3D effect that feels physical and heavy. 

There are no blurs. If an element needs to stand out (like a hover state or a modal), it simply shifts its position or increases the thickness of its black border. Stacked elements are separated by 3px solid black lines. Background layers use a light gray (#F5F5F5) to denote "sunken" areas, while active work surfaces remain pure white.

## Shapes

The shape language is strictly **Rectilinear**. All corners are 0px radius. This applies to buttons, input fields, cards, modals, and even selection indicators. 

The use of 90-degree angles reinforces the "raw" and "unrefined" aesthetic of Modern Brutalism. Any deviation from sharp corners—such as circular avatars—should be treated as an exception and contained within a square black-bordered box to maintain the system's geometric integrity.

## Components

### Buttons
Primary buttons feature a 2px black border, a white background, and a heavy 4px solid black block shadow. On hover, the button background shifts to the **Primary Pop** color, and the shadow "compresses" (the button moves 2px down and right).

### Input Fields
Inputs are white boxes with 2px black borders. Labels are set in uppercase **Space Grotesk**. On focus, the border thickness increases to 3px or the background shifts to a very pale version of the primary color.

### Cards
Cards are the primary container for job listings. They use a 2px black border. Headers within cards are separated by a horizontal 2px black rule. There is no padding between the card edge and the rule.

### Chips & Tags
Used for job categories or status. These are small, sharp-edged rectangles with a 1px black border. Use the **Primary Pop** color for high-priority status tags (e.g., "Urgent" or "Applied") and neutral grays for others.

### Job Progress Tracker
A vertical or horizontal "stepper" line. Instead of soft dots, use solid black squares. The active step is filled with the **Primary Pop** color, while incomplete steps remain white with a black outline.
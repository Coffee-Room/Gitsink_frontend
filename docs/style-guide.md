# 🎨 Gitsink Frontend – Usage & Style Guide

This guide outlines the design tokens, layout conventions, and reusable components to keep the Gitsink frontend consistent with [gitsink.tech](https://gitsink.tech).

## 1. Overview

Follow these guidelines when building or updating UI so new features match the existing look and feel.

## 2. Design Tokens

### 🎨 Colors
- **Primary:** `#1a73e8` (blue)
- **Secondary:** `#ffffff` (white)
- **Accent/Error:** `#ea4335` (red)
- **Text:** `#202124` (dark gray), `#5f6368` (mid gray)
- **Background:** `#f8f9fa` (light gray)

### 💜 Typography
- **Font Family:** `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif`
- **Headings**
  - **H1:** 2.5rem / 40px, bold
  - **H2:** 2rem / 32px, semibold
  - **H3:** 1.5rem / 24px, medium
- **Body Text**
  - **Default:** 1rem / 16px
  - **Small:** 0.875rem / 14px

### 📊 Spacing Scale
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px

### 🗝️ Border Radius
- **Default:** 4px
- **Buttons/forms:** 6px

## 3. Layout Structure

### ⚟ Page Grid
- **Max content width:** 1280px
- **Horizontal padding:** 16px (increase to 24px on large screens)
- Use CSS Grid or Flexbox for main layouts

### 🪄 Sections & Containers
- Use containers with `md` vertical margin between sections
- Center content within the max-width container

## 4. Components

### 🟦 Button
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary {
  background-color: #1a73e8;
  color: #ffffff;
}
.btn-secondary {
  background-color: transparent;
  color: #1a73e8;
  border: 2px solid #1a73e8;
}
```

### 🔲 Card / Feature Tile
- White background with small shadow
- Border-radius `6px`
- Padding `md`
- Use flex or grid inside
- Apply `md` gutter between cards

### 👤 Auth Button
- Round button with icon (e.g., GitHub)
- Size roughly 40px (`lg`)

### 🔗 Links
- Default color `#1a73e8`
- Underline on hover

### 💫 Forms
- Inputs: `sm` padding, 1px border, radius `4px`
- Focus outline with `#1a73e8`; remove default outline

## 5. States & Transitions
- Hover: subtle shadow elevation for interactive elements
- Transitions: `0.2s ease-in-out` for colors and shadows
- Disabled: greyed out with `cursor: not-allowed`

## 6. Icons & Imagery
- Use SVG icons (20–24px)
- Edge-to-edge hero images with overlay
- Feature screenshots: card widths, full width in detail views

## 7. Utility Classes (Tailwind-style)
- `.px-md`, `.py-sm` for padding
- `.text-lg`, `.text-body`, `.font-medium`
- `.bg-white`, `.bg-gray-light`, `.text-primary`
- `.shadow-sm`, `.rounded-md`, `.flex-center`, `.grid-gap-md`

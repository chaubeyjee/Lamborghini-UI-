<div align="center">

# 🏎️ LAMBORGHINI AVENTADOR — Scrollytelling Showcase

**An immersive, scroll-driven web experience showcasing the Lamborghini Aventador SVJ**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

*A luxury automotive experience built with cutting-edge web technologies. Scroll through 240 high-fidelity frames of the Aventador as synchronized HUD overlays reveal specs, design philosophy, and engineering details.*

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎞️ **Scroll-Synced Image Sequence** | 240-frame canvas animation controlled by scroll position |
| 🖥️ **HUD Overlay System** | Phased info panels (Hero → Design → Engine) with smooth fade transitions |
| 🔍 **High-DPI Rendering** | Retina-ready HTML5 Canvas with `devicePixelRatio` scaling |
| 🧭 **Glassmorphism Navbar** | Transparent → frosted-glass effect on scroll |
| 🏗️ **Feature Showcase** | Interactive image cards with hover zoom and reveal animations |
| 📊 **Specs Grid** | Animated technical specifications display |
| 🦶 **Premium Footer** | Multi-column footer with brand navigation |
| 📱 **Fully Responsive** | Optimized layout across all screen sizes |

---

## 🛠️ Tech Stack

```
Frontend Framework  →  Next.js 16 (App Router)
UI Library          →  React 19
Styling             →  Tailwind CSS v4 (@theme system)
Animations          →  Framer Motion 12
Language            →  TypeScript 5
Fonts               →  Orbitron (display) + Rajdhani (body)
```

---

## 📂 Project Structure

```
lamborghini/
├── app/
│   ├── globals.css          # Tailwind v4 @theme config & global styles
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page — scroll orchestrator
├── components/
│   ├── Navbar.tsx           # Fixed nav with glassmorphism effect
│   ├── ZondaScrollCanvas.tsx # HTML5 Canvas scroll-driven renderer
│   └── ZondaExperience.tsx  # HUD overlay with phased animations
├── data/
│   └── carData.ts           # Centralized car content & specs
├── public/
│   └── images/
│       ├── features/        # Feature showcase images
│       │   ├── cockpit.png
│       │   ├── engine.png
│       │   └── brakes.png
│       └── zonda-sequence/  # 240 scroll animation frames
│           ├── ezgif-frame-001.jpg
│           ├── ...
│           └── ezgif-frame-240.jpg
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/chaubeyjee/Lamborghini-UI-.git

# Navigate to the project
cd Lamborghini-UI-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| 🖤 Pagani Black | `#1A1A1A` | Primary background |
| 🟡 Pagani Gold | `#D4AF37` | Accents, highlights, HUD elements |
| 🌟 Bright Gold | `#FFD700` | Hover states, emphasis |
| ⬛ Carbon Gray | `#2A2A2A` | Cards, secondary surfaces |

### Typography

| Font | Weight | Role |
|---|---|---|
| **Orbitron** | 400–900 | Display headings, HUD text |
| **Rajdhani** | 300–700 | Body text, descriptions |

---

## 🏛️ Architecture

### Scroll-Driven Rendering Pipeline

```
User Scrolls
    ↓
useScroll() → scrollYProgress (0 → 1)
    ↓
┌─────────────────────────────┐
│  ZondaScrollCanvas          │
│  Maps progress → frame index│
│  Renders to HTML5 Canvas    │
│  (240 preloaded images)     │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│  ZondaExperience (HUD)      │
│  Phase 1: Hero    (0–25%)   │
│  Phase 2: Design  (33–66%)  │
│  Phase 3: Engine  (66–100%) │
└─────────────────────────────┘
```

### Page Sections Flow

```
[Navbar]                    ← Fixed, glassmorphism on scroll
[Scroll Sequence - 600vh]  ← Sticky canvas + HUD overlay
[Technical Specifications]  ← Animated specs grid
[Feature Showcase]          ← Interactive image cards
[Footer]                    ← Multi-column brand footer
```

---

## 📸 Sections Overview

### 🎬 Hero & Scroll Sequence
A full-viewport sticky canvas plays through 240 frames of the Aventador as the user scrolls. The car title, price, and a "scroll to explore" prompt fade in and out dynamically.

### 🎯 Design & Engine HUD
As the user scrolls deeper, phased overlays reveal aerodynamic design details and V12 engine specifications with smooth Framer Motion transitions.

### 📊 Technical Specifications
An interactive grid showcasing **750 CV**, **350 km/h** top speed, and **2.8s** 0-100 km/h — with hover effects that highlight each stat in gold.

### 🖼️ Engineering Masterpiece
Three feature cards with parallax hover-zoom effects showcasing the **Aeronautic Cockpit**, **V12 Engine**, and **Carbon Ceramic Brakes**.

### 🦶 Footer
A premium multi-column footer with model lineup, brand world links, and legal information.

---

## ⚡ Performance

- **Image Preloading** — All 240 frames loaded before playback begins
- **requestAnimationFrame** — Smooth 60fps canvas rendering
- **High-DPI Support** — Sharp rendering on Retina/HiDPI displays
- **CSS Hardware Acceleration** — GPU-powered transitions via `transform` and `opacity`
- **Loading State** — Animated "LOADING EXPERIENCE..." indicator during asset preload

---

## 📄 License

This project is for **educational and portfolio purposes only**.  
Lamborghini® and Aventador® are registered trademarks of Automobili Lamborghini S.p.A.

---

<div align="center">

**Built with ❤️ and a passion for speed**

*If you liked this project, consider giving it a ⭐*

</div>

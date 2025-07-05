# AI SaaS Landing Page Tutorial

<div align="center">
  <br />
  <a href="" target="_blank">
    <img src="./banner.png" alt="Project Banner">
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Zustand-000?style=for-the-badge" alt="Zustand" />
  </div>
  <h3 align="center">Build a Beautiful, Modern Landing Page for Your AI SaaS</h3>
  <div align="center">
    Follow along with our detailed tutorial on 
    <a href="https://youtu.be/qeCBBxZoqAM" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets](#code-snippets)
6. [Assets & More](#assets--more)

## 🚀 Introduction

In this video tutorial, you'll learn how to build a beautiful, modern landing page tailored for your AI SaaS company. This project uses React, Vite, Tailwind CSS, and Zustand to deliver a sleek, responsive website designed to showcase your product and convert visitors into customers.

Watch the full tutorial on [YouTube](https://youtu.be/qeCBBxZoqAM).

## ⚙️ Tech Stack

- **React** – For building the user interface
- **Vite** – For fast development and optimized builds
- **Tailwind CSS** – For rapid, responsive styling using a design token system
- **TypeScript** – For type safety and modern JavaScript features
- **Zustand** – For lightweight state management and theme persistence

## ⚡️ Features

- **Modern Landing Page Design:**  
  A sleek, responsive design that highlights your AI SaaS product’s unique value proposition.

- **Dark/Light Mode:**  
  Seamlessly toggle between dark and light themes with Zustand and Tailwind CSS design tokens.

- **Interactive Components:**  
  Build reusable sections such as Hero, Features, Pricing, and CTA using React components.

- **Animated Elements:**  
  Smooth hover animations and gradient effects for a dynamic user experience.

- **State Management:**  
  Global UI state management with Zustand ensures persistent theme settings across sessions.

## 👌 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone https://github.com/yourusername/ai-saas-landing-page.git
cd ai-saas-landing-page
```

### Installing Dependencies

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Your site will be running at [http://localhost:3000](http://localhost:3000).

## 💻 Code Snippets

### Theme Store (using Zustand and persist)

```tsx
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
        set({ theme: newTheme });
      },
      setTheme: (theme: "light" | "dark") => {
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }
        set({ theme });
      },
    }),
    {
      name: "app-theme",
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);

export default useThemeStore;
```

### Custom Button Component with Animation

```tsx
import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 text-white transform transition duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};
```

## 🎨 Assets & More

- **Images:**  
  Use high-quality images from [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/) to showcase your product.

- **SVG Icons:**  
  Import SVG icons using packages like [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) or directly reference them as React components.

- **Design Tokens:**  
  The design tokens for colors, shadows, and typography are defined in the global CSS file using the `@theme` directive, ensuring consistent dark/light mode styling.

---

Feel free to customize this README to suit your project's needs. Happy coding and enjoy building your modern AI SaaS




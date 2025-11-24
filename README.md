# Next.js 14 Mini-App  
A small modern web application built with **Next.js 14 (App Router)**, designed to demonstrate practical usage of:

- Reusable UI components  
- A working theme switcher (Dark/Light)  
- Server & client components  
- A Contact form with validation  
- Fetching external API data  
- Clean folder structure  
- Tailwind CSS v4  
- Next-Themes  
- React Hook Form  
- Zod validation  

This project was intentionally kept minimal, clean, and production-ready to act as both a learning tool and a foundation for future apps.

---

## ✨ Features

### **1) Dark/Light Theme Toggle**
Built using `next-themes` + Tailwind class-based dark mode.

### **2) Contact Form With Validation**
Using:
- `react-hook-form`
- `zod`  
- Client component + UI elements

### **3) Dashboard With Live API Fetching**
Server Component fetching JSONPlaceholder or any public API.

### **4) Reusable UI Components**
- Button  
- Input  
- Card  
Simple, lightweight, and extendable.

### **5) SEO Metadata**
Using Next.js App Router metadata system.

---

## 🚀 Why I Built This  
این پروژه برای تمرین معماری و ساخت اپلیکیشن‌های کوچک اما استاندارد با Next.js ساخته شده.  
من همیشه سعی می‌کنم **آپدیت، مشتاق یادگیری و دنبال تکنولوژی‌های جدید** بمونم—و واقعیت اینه که:

> در دنیای امروز، سرعت پیشرفت خیلی بالاست  
> و استفاده از ابزارهای هوشمند مثل **AI** نه‌تنها طبیعی شده  
> بلکه بخشی از جریان کار حرفه‌ای و توسعه‌ی نرم‌افزار محسوب میشه.

من هم مثل هر توسعه‌دهنده‌ی مدرن از AI کمک گرفتم:  
برای سرعت بیشتر، تست سریع‌تر و مرور بهترین الگوهای ممکن—ولی:

**طراحی، معماری، تصمیم‌گیری‌ها و ساخت واقعی پروژه توسط خودم انجام شده.**  
AI فقط یک دستیار هوشمند بوده، نه سازنده‌ی اصلی.

---

## 📦 Tech Stack

- **Next.js 14**
- **React 19**
- **TailwindCSS v4**
- **next-themes**
- **React Hook Form + Zod**
- **TypeScript**
- **Turbopack**
- **Vercel Deployment (optional)**

---

## 📁 Project Structure
app/
├─ layout.tsx
├─ page.tsx
├─ dashboard/
│ └─ page.tsx
components/
├─ ui/
│ ├─ button.tsx
│ ├─ input.tsx
│ └─ card.tsx
├─ theme-toggle.tsx
└─ theme-provider.tsx
styles/
└─ globals.css



---

## 🛠️ Running Locally

```bash
npm install
npm run dev

Then open:
http://localhost:3000

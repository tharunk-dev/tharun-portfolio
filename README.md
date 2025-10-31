
# Tharun Portfolio

A modern, professional developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features
- Dark, elegant theme with subtle gradients
- App Router pages: Home, About, Projects, Experience, Contact
- Animated sections with Framer Motion
- Responsive layout, accessible components
- Easy content editing in `data/site.ts`

## 🚀 Quick Start
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# visit http://localhost:3000
```

## 🔧 Customize
Edit your name, tagline, skills, links, projects, and experience in:
```
data/site.ts
```

- Replace placeholder LinkedIn with your real profile when ready:
```ts
export const SITE = {
  // ...
  linkedin: "https://www.linkedin.com/in/your-handle",
};
```
- Optional: point `resumeUrl` to a hosted PDF.

## 🧪 Build
```bash
npm run build && npm start
```

## ☁️ Deploy (Vercel)
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/import and select the repo.
3. Use the default **Next.js** settings and deploy.

## 📁 Structure
```
app/
  page.tsx            # Home
  about/              # About
  projects/           # Projects
  experience/         # Experience
  contact/            # Contact
components/           # UI
data/site.ts          # Your content (edit me)
public/               # Icons/images
```

## 📜 Notes
- Education shows **M.S. in Computer Science (Northern Arizona University)** with **no graduation year**, per your request.
- College can be removed entirely by clearing the `EDUCATION` array in `data/site.ts`.

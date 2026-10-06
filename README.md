<div align="center">

<img src="./banner.jpg" alt="SocialApp Banner" width="100%" />

<br/>
<br/>

# ✨ SocialApp

**A modern full-featured social media platform built with React 19 & cutting-edge web technologies**

<br/>

[![React](https://img.shields.io/badge/React-19-%2361DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232A)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-%23646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=20232A)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=20232A)](https://tailwindcss.com)
[![React Query](https://img.shields.io/badge/React_Query-5-%23FF4154?style=for-the-badge&logo=reactquery&logoColor=white&labelColor=20232A)](https://tanstack.com/query)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=20232A)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-purple?style=for-the-badge&labelColor=20232A)](./CONTRIBUTING.md)

<br/>

[🚀 Live Demo](#) &nbsp;•&nbsp; [📖 Documentation](#-project-structure) &nbsp;•&nbsp; [🐛 Report Bug](../../issues) &nbsp;•&nbsp; [💡 Request Feature](../../issues)

<br/>

</div>

---

## 🌟 What is SocialApp?

**SocialApp** is a beautifully crafted social media web application that delivers a seamless, modern experience for connecting with others. Built with the latest React 19, it features a real-time news feed, secure JWT authentication, user profiles, and a fully responsive design — all powered by a blazing-fast Vite toolchain.

> 🎯 *Built to showcase modern React best practices including protected routing, server state management with TanStack Query, form validation with Zod & React Hook Form, and smooth animations with Framer Motion.*

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication
- Secure JWT-based login & registration
- Protected & auth-guarded routes
- Persistent session with context
- Form validation with **Zod** schema

</td>
<td width="50%">

### 📰 News Feed
- Dynamic post feed
- Like, comment & share interactions
- Optimistic UI updates via React Query
- Offline detection & graceful fallback

</td>
</tr>
<tr>
<td width="50%">

### 👤 User Profiles
- Rich user profile pages
- View other users posts
- Avatar & bio management

</td>
<td width="50%">

### 🎨 UI / UX
- Dark mode support out of the box
- Glassmorphism design system
- Smooth Framer Motion animations
- Fully responsive on all screen sizes

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| ⚛️ **Framework** | React 19 + Vite 7 |
| 🎨 **Styling** | Tailwind CSS v4 + HeroUI + DaisyUI |
| 🗺️ **Routing** | React Router v7 |
| 🔄 **Server State** | TanStack Query (React Query v5) |
| 📋 **Forms** | React Hook Form + Zod validation |
| 🌐 **HTTP Client** | Axios |
| 🎬 **Animations** | Framer Motion |
| 🔔 **Notifications** | React Toastify |
| 📡 **Offline Detection** | React Detect Offline |
| 🔍 **Linting** | ESLint 9 |

---

## 🗂️ Project Structure

```
social-app/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   └── 📁 ProtectedRoutes/
│   │       ├── AppProtectedRoutes.jsx
│   │       └── AuthProtectedRoutes.jsx
│   ├── 📁 context/             # Global state management
│   │   ├── AuthContext.jsx
│   │   └── CounterContext.jsx
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 Layouts/             # Page layout wrappers
│   │   ├── MainLayout/
│   │   └── AuthLayout/
│   ├── 📁 lib/                 # Utilities & helpers
│   ├── 📁 pages/               # Route-level page components
│   │   ├── NewsFeed/
│   │   ├── UserProfile/
│   │   ├── PostDetails/
│   │   ├── NotFound/
│   │   └── auth/
│   │       ├── Login/
│   │       └── Register/
│   ├── 📁 services/            # API service layer
│   ├── 📁 types/               # Type definitions
│   ├── App.jsx
│   └── main.jsx
├── 📁 public/
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9+

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Ahmedaminn1/social-app.git
cd social-app/social-app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
# Create a .env.local file with your API URL
echo "VITE_API_BASE_URL=https://your-api-url.com" > .env.local

# 4️⃣ Start the development server
npm run dev
```

🎉 Open [http://localhost:5173](http://localhost:5173) to see the app!

### Available Scripts

```bash
npm run dev       # 🔥 Start dev server with HMR
npm run build     # 📦 Build for production
npm run preview   # 👁️  Preview production build
npm run lint      # 🔍 Run ESLint checks
```

---

## 🛣️ Routes

### 🔓 Public Routes
| Route | Description |
|-------|-------------|
| `/login` | User login page |
| `/register` | New user registration |

### 🔒 Protected Routes *(require authentication)*
| Route | Description |
|-------|-------------|
| `/home` | News feed |
| `/profile` | Your user profile |
| `/post-details/:id` | Individual post view |

---

## 🌐 Environment Variables

```env
VITE_API_BASE_URL=https://your-api-url.com
```

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions are **greatly appreciated**.

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m "✨ Add AmazingFeature"`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request** 🎉

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [HeroUI](https://www.heroui.com/) — gorgeous component library
- [TanStack Query](https://tanstack.com/query) — effortless server state
- [Framer Motion](https://www.framer.com/motion/) — silky smooth animations
- [React Router](https://reactrouter.com/) — seamless client-side navigation
- [Zod](https://zod.dev/) — bulletproof schema validation

---

<div align="center">

**⭐ If you found this project useful, please give it a star! It helps others discover it.**

<br/>

Made with ❤️ and lots of ☕

<br/>

[![GitHub stars](https://img.shields.io/github/stars/Ahmedaminn1/social-app?style=social)](../../stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Ahmedaminn1/social-app?style=social)](../../network/members)

</div>

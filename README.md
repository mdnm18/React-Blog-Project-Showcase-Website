# React Blog & Project Showcase - Md Nayaj Mondal

**Submission for GeekForGeeks SRMIST - Technical Domain Recruitment 2025**

This repository contains the source code for a fully-featured blog and project showcase application, built as a task for the GeekForGeeks SRMIST club's technical recruitment process for the 2025 batch.

## 🚀 Live Demo
**URL:** https://react-blog-project-showcase-website.vercel.app

## 📋 Project Overview

This is a complete, single-page application (SPA) built from the ground up using modern web technologies. It serves as a personal portfolio to display blog posts and technical projects in a clean, interactive, and aesthetically pleasing interface. The application is fully responsive and includes a number of advanced features to demonstrate a comprehensive understanding of front-end development.

## 📸 Screenshot

<img width="1498" height="902" alt="Screenshot 2025-08-31 at 4 17 26 PM" src="https://github.com/user-attachments/assets/d50d7fce-ff93-4bf5-9d66-a46a0b6b82b4" />

<img width="1489" height="891" alt="Screenshot 2025-08-31 at 4 18 15 PM" src="https://github.com/user-attachments/assets/947aa31b-2f1b-40b8-904f-e38920521f32" />


## ✅ Features Checklist

This project successfully implements all the requirements of the recruitment task.

### Must-Haves
- [x] **Homepage:** A dynamic homepage featuring a hero section and cards for all blogs/projects
- [x] **Details Page:** A full, detailed view for each blog and project, accessible via routing
- [x] **Navbar + Footer:** Consistent and responsive navigation and footer components across all pages
- [x] **Search & Filter Functionality:** Real-time searching and filtering of posts on the homepage

### ✨ Brownie Points
- [x] **Deployment:** Ready for seamless deployment on Vercel/Netlify
- [x] **Dark Mode Toggle:** A persistent light/dark mode theme toggle, implemented with React Context and Tailwind CSS
- [x] **Markdown Support:** Blog posts are rendered from Markdown, allowing for rich text formatting
- [x] **Component-Based Architecture:** The codebase is organized into reusable, modular components
- [x] **Responsive Design:** The layout is fully responsive and optimized for all screen sizes, from mobile to desktop
- [x] **Basic Routing:** react-router-dom is used to handle client-side page navigation

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **React.js** | A JavaScript library for building user interfaces |
| **Vite** | A modern, lightning-fast build tool for front-end development |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development |
| **React Router** | The standard library for routing in React applications |
| **React Markdown** | A component to safely render Markdown as React components |

## 🚀 Local Setup and Installation

To run this project on your local machine, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/mdnm18/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

## 🚀 Deployment

This project is configured for easy deployment on Vercel or Netlify:

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── context/            # React Context providers
├── data/               # Static data files
├── styles/             # CSS files
└── App.jsx             # Main application component
```

## 🌟 Key Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Toggle between themes with persistence
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Follows web accessibility guidelines

## 📞 Contact

Thank you for reviewing my submission!

**Md Nayaj Mondal**
- **GitHub:** [@mdnm18](https://github.com/mdnm18)
- **LinkedIn:** [Md Nayaj Mondal](https://linkedin.com/in/your-profile)

---

⭐ **If you found this project helpful, please give it a star!**



<br>
<hr>
<br>


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

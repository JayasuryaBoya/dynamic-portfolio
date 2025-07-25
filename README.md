# 💼 Dynamic Portfolio Website

A **dynamic full-stack portfolio website** built using **React.js**, **Express.js**, **MongoDB**, and **Redux**. This application allows only the **admin** to manage their portfolio content (projects, skills, resume) in real time.

## ✨ Features

- 🔐 **Admin Authentication** (secure login system)
- 🛠️ **Dynamic Skill & Project Management**
  - Add, update, or delete projects and skills from the admin dashboard
- 📄 **Resume Preview**
- ⚙️ **Redux** for state management
- 🌐 **RESTful API** built with Express.js
- 🔒 Protected routes for admin
- 📱 Fully responsive UI
- 📁 Clean folder structure (Frontend & Backend separated)

---

## 🛠️ Tech Stack

| Frontend      | Backend       | Database | Other Tools          |
|---------------|---------------|----------|-----------------------|
| React.js      | Node.js       | MongoDB  | Redux, React Router   |
| React-Redux   | Express.js    | Mongoose | Git & GitHub          |
| HTML/CSS      | JWT Auth      |          | Postman (for testing) |

---

## 📁 Folder Structure
frontend/
├── build/               # Build output (created by `npm run build`)
├── node_modules/        # Node packages
├── public/              # Static assets (index.html, favicon, etc.)
└── src/                 # Main source code
    ├── assets/          # Images, icons, avatar.png, etc.
    ├── Components/      # Reusable UI components
    ├── ErrorPage/       # Error handling pages (404, etc.)
    ├── Footer/          # Footer component
    ├── Home/            # Home page component
    ├── Layout/          # Overall layout/wrappers
    ├── reduxstore/      # Redux logic: slices, store.js
    ├── Resume/          # Resume page/component
    ├── App.css
    ├── App.js
    ├── App.test.js
    └── AxioWithToken.js # Axios instance with JWT auth header
    
backend/
├── APIles/                 # (probably meant to be 'APIs') – route handlers/controllers
├── Middleware/             # Auth middleware, error handlers, etc.
├── node_modules/           # Backend dependencies
├── .env                    # Environment variables (PORT, DB_URL, JWT_SECRET)
├── admin_request.http      # For testing HTTP requests (like Postman, but in-code)
├── package.json            # Declares dependencies/scripts
├── package-lock.json       # Dependency lock file
└── server.js               # Main entry point for Express backend



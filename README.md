# 🚀 PitchMate

PitchMate is a full-stack web platform that connects startup **Founders** with potential **Investors**, streamlining the fundraising and networking process. Founders can showcase their pitches, while investors can discover, filter, and connect with promising startups.

---

## 📚 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [API Overview](#-api-overview)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Demo

> ⚠️ Demo link will be added once deployed.

---

## ✨ Features

- 🔐 User authentication (Founder / Investor roles)
- 📄 Founder dashboard to submit startup pitches
- 🧭 Investor dashboard to browse & filter startups
- 💬 In-app contact request system
- 📊 Admin insights (future scope)

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- [React](https://reactjs.org/) (with Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query) (for data fetching)

### Backend (`server/`)
- [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11+)
- [MongoDB](https://www.mongodb.com/) with [Motor](https://motor.readthedocs.io/)
- [Pydantic](https://docs.pydantic.dev/) for schema validation
- [Uvicorn](https://www.uvicorn.org/) as ASGI server
- [python-dotenv](https://pypi.org/project/python-dotenv/) for environment configuration

---

## 🗂 Project Structure

PitchMate/
│
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── api/               # Axios setup
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # FastAPI backend
│   ├── app/
│   │   ├── api/               # Route handlers
│   │   ├── db/                # MongoDB connection
│   │   ├── models/            # Pydantic & DB models
│   │   ├── schemas/           # Request/response validation
│   │   ├── services/          # Business logic
│   │   ├── main.py            # FastAPI instance
│   │   └── config.py          # Settings loader
│   ├── .env
│   ├── requirements.txt
│   └── README.md
│
├── README.md
├── .gitignore
└── LICENSE

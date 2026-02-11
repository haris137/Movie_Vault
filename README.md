# 🎬 Movie Vault: AI-Powered Discovery Platform

**[ 🚀 View Live Demo ](https://movie-vault-cwft.vercel.app/)**

A modern, responsive movie discovery application that leverages **Google Gemini AI** for intelligent insights and features a personalized user experience. This project demonstrates advanced **React** state management and seamless integration of multiple high-level APIs.

---

## ✨ Key Features
- **AI Intelligence:** Integrated **Gemini API** to dynamically generate movie summaries, plot analysis, and contextual data.
- **Personalized Watchlist:** Users can create and manage a **Favorites List**; selection persists across browser sessions using **LocalStorage**.
- **Dynamic Discovery:** Real-time data fetching from the **TMDB API**, providing access to trending and top-rated global titles.
- **State Management:** Utilized **Context API** for efficient global state handling of user preferences and movie data.
- **Smooth Navigation:** Implemented a single-page application (SPA) experience using **React Router v6**.

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Hooks, Context API)
- **AI Engine:** Google Gemini AI API
- **Data Source:** TMDB (The Movie Database) API
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **HTTP Client:** Axios

---

## 🏗️ System Architecture
```text
[ React Frontend ] <---> [ Context API (State) ] <---> [ LocalStorage (Favs List) ]
                                 |
           ______________________|______________________
          |                      |                      |
    [ TMDB API ]          [ Gemini AI API ]        [ Live Deployment ]
   (Movie Data)          (AI Summaries)           (Global Access)

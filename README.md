# Blog App

A modern, full-stack blog platform designed to share valuable insights,articles,experiences related to technology,DSA etc,.Only the admin can publish blogs, making it a curated platform for trusted and high-quality content.

## ✨ Features

- 🔐 Google OAuth Authentication (Firebase)
- 📝 Create, edit, and delete blog posts
- 🧑‍💻 User profile and dashboard
- 🖼️ Upload featured images for each blog
- 📦 Responsive UI built with Tailwind CSS & Flowbite React
- 📂 Posts sorted by recency
- 🔍 Search functionality (optional)
- 🗃️ Secure backend with Express.js & MongoDB

## 🔧 Tech Stack

**Frontend**  
- React.js  
- React Router  
- Redux Toolkit  
- Tailwind CSS  
- Flowbite React  
- Firebase Auth (OAuth)

**Backend**  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- Bcrypt.js

📁 Folder Structure
Blog-App/
├── client/                  # Frontend - React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── firebase.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── App.jsx
│   └── package.json
├── api/                  # Backend - Express app
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── utils/           
│   └── package.json
└── README.md

🔐 Authentication

This app uses **Firebase Google OAuth** to authenticate users. On first login, users are automatically created in the database with a generated password and profile picture.

 🚀 Getting Started
**1. Clone the repository**
git clone https://github.com/your-username/js-blog.git
cd js-blog
# 2.Install dependencies 
**For client**
cd client
npm install

# For server
cd ../api
npm install
# 3. .env files
There should two .env files.One for client and another for server side
**for server-side**
api/.env

**for client side**
client/.env

**4. Configure Firebase**
In client/src/firebase.js, initialize your Firebase app:

// Replace with your own Firebase config
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

export const app = initializeApp(firebaseConfig);

5. Run the App


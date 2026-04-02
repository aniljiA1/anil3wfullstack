# 🚀 Mini Social App

A full-stack **Social Media Application** where users can register, login, create posts (text & image), like posts, and interact with others.

---

## 📌 Features

* 🔐 User Authentication (Register & Login with JWT)
* 📝 Create Posts (Text / Image / Both)
* ❤️ Like / Unlike Posts
* 📰 View Feed (All Posts)
* 🔒 Protected Routes (JWT आधारित security)
* 🧹 Clean UI with React

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router
* Fetch API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcryptjs

---

## 📂 Project Structure

```
mini-social-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/mini-social-app.git
cd mini-social-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```
npm run dev
```

---

## 🔑 API Endpoints

### Auth

* `POST /api/auth/register` → Register
* `POST /api/auth/login` → Login

### Posts

* `GET /api/posts` → Get all posts
* `POST /api/posts` → Create post (Protected)
* `PUT /api/posts/like/:id` → Like/Unlike post
* `POST /api/posts/comment/:id` → Comment on post

---

## 📸 Screenshots

*Add your screenshots here*

---

## 🚀 Future Improvements

* 💬 Comments UI
* 🖼 Image Upload (Cloudinary)
* 👤 User Profile Page
* 🌐 Deployment (Vercel + Render)
* 🔔 Notifications

---

## 🙌 Author

**Anil Kumar**

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repo!

---

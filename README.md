# 🍅 Tomato - Full Stack Food Delivery App

Tomato is a modern, responsive food delivery web application built with the **MERN stack**. It features a Zomato-inspired UI, real-time cart management, category-based filtering, and a custom-built skeleton loading system for a premium user experience.



## 🚀 Live Demo
**Frontend:** https://tomato-food-app-two.vercel.app/

**Backend:** https://tomato-backend-uo24.onrender.com

---

## ✨ Key Features

* **⚡ Real-Time Cart:** Global state management using React Context API for instant navbar updates and persistent storage.

* **🦴 Skeleton Loading:** Custom Material UI skeleton screens to improve perceived performance during data fetching.

* **🔍 Advanced Filtering:** Filter restaurants by rating, price, and category (Dining, Delivery, Nightlife).

* **📱 Mobile Responsive:** Fully optimized for all screen sizes using Tailwind CSS.

* **🛠 Efficient API:** Optimized MongoDB queries using Data Projection to ensure fast initial load times.

* **💓 Server Keep-Alive:** Integrated cron-job pings to prevent backend hibernation on free hosting tiers.


---

## 🛠 Tech Stack

**Frontend:**
* ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
* ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) (Skeletons)

* ![React Router DOM](https://img.shields.io/badge/react--router--dom-6.23.1-blue) (Navigation)

**Backend:**
* ![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)

* ![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)

* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

* Cors & Dotenv

---

## 📸 Screenshots

| Home Page | Restaurant List | Restaurant Card | Order |
|---|---|---|---|
| ![Home Page](<img width="1886" height="819" alt="Image" src="https://github.com/user-attachments/assets/338c0c50-1d65-47ae-9efb-4f0a61038a32" />) | ![List](<img width="1898" height="809" alt="Image" src="https://github.com/user-attachments/assets/fecb9e1b-8997-4399-96d1-87b11dbec06a" />) | ![Card](<img width="1894" height="804" alt="Image" src="https://github.com/user-attachments/assets/69526a17-a42f-4957-bf47-25bf49d2cac5" />) | ![Order] ()

---

## 🧠 Technical Challenges & Solutions

### 1. The "Cold Start" Problem (Server Hibernation)

**Challenge:** Since the backend is hosted on Render's free tier, the server would "sleep" after 15 minutes of inactivity. This caused a 30-second delay for the first user, often making the app look broken.

**Solution:** I implemented a custom `/ping` endpoint and configured an external **Cron-Job** to send a "heartbeat" request every 14 minutes. This keeps the instance warm and ensures near-instant response times for all users.



### 2. Perceived Performance & UX

**Challenge:** Even with a fast server, fetching data from a cloud database (MongoDB Atlas) takes time. A blank screen or a simple "Loading..." text felt unpolished.

**Solution:** I built a **Custom Skeleton Loading System** using Material UI. By mirroring the exact layout of the restaurant cards, I significantly improved the "perceived performance," making the app feel faster and more professional.

### 3. Global State Management (The Cart)

**Challenge:** The cart data needed to be accessible in the `NavBar` (for the item count), the `Order` page (for adding items), and the `Cart` page (for checkout). Passing props through multiple layers ("Prop Drilling") was becoming messy.

**Solution:** I utilized the **React Context API** to create a global `StoreContext`. This allows any component in the app to access or update the cart state without complex prop passing.



------------

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash

   git clone https://github.com/Uzrakhan/Tomato-food-app

2. **Setup Backend**

    cd backend

    npm install

    # Create a .env file and add your MONGODB_URI and PORT

    npm start

3. **Setup Frontend**

    cd frontend

    npm install

    # Create a .env file and add your VITE_API_URL

    npm run dev


-------------
📄 License
Distributed under the MIT License. See LICENSE for more information.
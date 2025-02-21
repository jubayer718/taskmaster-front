## 🚀 Task Management App  

A simple **Task Management Application** with **Drag & Drop** functionality, real-time synchronization using **WebSockets (Socket.IO)**, and **MongoDB database**. Users can **add, edit, delete, reorder** tasks across three categories: **To-Do, In Progress, and Done**.  

---

### 🔗 **Live Demo**  
👉 [Live Project](#) *(https://task-management-1c4f6.web.app/login)*  

---

### 📦 **Dependencies**  
#### **Backend (Express.js + MongoDB)**
- `express`
- `cors`
- `dotenv`
- `mongodb`
- `socket.io`

#### **Frontend (React + Vite)**
- `react`
- `@dnd-kit/core` *(Drag & Drop)*
- `socket.io-client`
- `tailwindcss` *(Styling)*

---

### 🛠 **Installation Steps**  

#### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

#### **2️⃣ Install Backend Dependencies**  
```bash
cd server
npm install
```

#### **3️⃣ Set Up Environment Variables**  
Create a **`.env`** file in the `server` directory and add:  
```env
PORT=3000
DB_USER=yourMongoDBUser
DB_PASS=yourMongoDBPassword
```

#### **4️⃣ Start Backend Server**  
```bash
npm start
```

#### **5️⃣ Install Frontend Dependencies**  
```bash
cd ../client
npm install
```

#### **6️⃣ Start Frontend (React + Vite)**  
```bash
npm run dev
```

---

### 🏗 **Technologies Used**  
- **Frontend:** React, Vite, TailwindCSS, DnD Kit  
- **Backend:** Node.js, Express.js, MongoDB, Socket.IO  
- **Database:** MongoDB  
- **Authentication:** Firebase Auth (Google Sign-In)  
- **Real-Time Sync:** WebSockets (Socket.IO)  

---

### 🎯 **Key Features**  
✅ **Google Authentication** (Firebase)  
✅ **Drag & Drop Task Management**  
✅ **Real-time Updates** with **Socket.IO**  
✅ **Persistent Storage** in **MongoDB**  
✅ **Fully Responsive UI**  

---

**💻 Contribute & Star ⭐ the Repo if you find it useful!**  
📌 _Developed by [Your Name](#)_
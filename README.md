# 🚀 Task Management API (MVC Architecture)

A scalable and well-structured **Task Management Backend API** built using the **MVC (Model-View-Controller)** pattern with Node.js, Express, and MongoDB.

---

## 📌 Overview

This project demonstrates how to design a clean backend using MVC architecture by separating concerns into models, controllers, and routes. It supports full CRUD operations for managing tasks.

---

## ✨ Features

* ✅ Create, Read, Update, Delete (CRUD) tasks
* ✅ RESTful API design
* ✅ MVC architecture (clean separation of concerns)
* ✅ MongoDB integration with Mongoose
* ✅ Error handling & validation
* ✅ Scalable project structure

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Architecture:** MVC

---

## 📂 Project Structure

project/
│
├── models/ # Database schemas
├── controllers/ # Business logic
├── routes/ # API routes
├── config/ # Database connection
├── app.js # Express app setup
└── server.js # Entry point

---

## 🔌 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-management-mvc-api.git
cd task-management-mvc-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Run the server

```bash
npm start
```

Server will run on:
👉 http://localhost:3347

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* cURL

---

## 💡 Key Learnings

* Implemented clean architecture using MVC
* Improved code readability and maintainability
* Structured backend for scalability
* Handled asynchronous operations using async/await

---

## 🚀 Future Improvements

* 🔐 Add authentication (JWT)
* 📦 Pagination & filtering
* 🌐 Deploy API (Render / Railway)
* 📊 Add logging & monitoring

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Joyal Quadras**

If you found this project useful, consider giving it a ⭐ on GitHub!

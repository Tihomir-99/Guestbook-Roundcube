# 📝 Guestbook Application – Roundcube Task

This is a simple full-stack guestbook application built with:

- **Frontend:** React
- **Backend:** Node.js (Express)
- **Database:** MySQL

Users can submit messages with their names and view the latest 10 messages using pagination.

> ⚠️ No styling is included, as per the task requirements.

---

## 📁 Project Structure

```
Guestbook-Roundcube/
├── backend/           # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── db.js
│   ├── .env
│   └── index.js
│
├── frontend/          # React frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── pages/
│   └── package.json
│
├── .gitignore
├── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Guestbook-Roundcube.git
cd Guestbook-Roundcube
```

---

## ⚙️ Backend Setup

### 1. Navigate to the backend folder

```bash
cd backend
```

### 2. Create a `.env` file with your MySQL credentials

```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=guestbook
PORT=3001
```

### 3. Install backend dependencies

```bash
npm install
```

### 4. Create MySQL database and table

Log into MySQL and run:

```sql
CREATE DATABASE guestbook;

USE guestbook;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Start the backend server

```bash
npm start
```

> Backend will run on: `http://localhost:3001/api/messages`

---

## 🌐 Frontend Setup

### 1. Navigate to the frontend folder

```bash
cd ../frontend
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend server

```bash
npm start
```

> Frontend will run on: `http://localhost:3000/`

---

## 📬 Features

- Submit messages with name & content.
- Backend validation (length limits and empty checks).
- Frontend disables submit button after sending.
- Status feedback (sending, success, failed).
- Pagination: shows only the latest 10 messages per page.

---

## ❗ Notes

- Frontend and backend must be running simultaneously.
- No styling has been applied (as specified in the task).

---

## ✅ Task Checklist

- [x] Backend: GET and POST endpoints.
- [x] Frontend form with name/message input and button.
- [x] Button disabled after submission.
- [x] Network error handling.
- [x] Request status display (sending, success, failed).
- [x] Pagination with latest 10 messages per page.

---

## 🧑‍💻 Author

Tihomir Stojković

---


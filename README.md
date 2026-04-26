# Expense Tracker

A secure full-stack personal finance management application built using the MERN stack.  
Track expenses, analyze spending habits, and manage your finances with an interactive dashboard.

## Features

### Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

### Expense Management
- Add Expense
- Edit Expense
- Delete Expense
- View All Expenses
- Expense Details Page

### Categories
- Food & Dining
- Transportation
- Utilities
- Entertainment
- Healthcare
- Shopping
- Education
- Other

### Filters
- Filter by Category
- Filter by Date Range
- Filter by Amount Range
- Search Expenses

### Analytics Dashboard
- Total Spending Overview
- Category-wise Pie Chart
- Monthly Trend Graph
- Recent Expenses
- Detailed Analytics Section

### Profile
- Update Profile
- Upload Avatar

### Responsive Design
- Desktop Friendly
- Mobile Friendly
- Progressive Web App (PWA) Ready

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Axios
- Recharts
- TanStack Router

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer

---

## Project Structure

```bash
expense-tracker/
│
├── client/
│   ├── src/
│   ├── public/
│   └── .env
│
├── server/
│   ├── src/
│   └── .env
│
└── README.md
```

---

## Environment Variables

### Client (.env)

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### Server (.env)

```env
PORT=8000
MONGODBURI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

---

## Installation

### Clone repository

```bash
git clone your_repo_url
cd expense-tracker
```

### Install frontend

```bash
cd client
npm install
```

### Install backend

```bash
cd ../server
npm install
```

---

## Run Project

### Start backend

```bash
cd server
npm run dev
```

### Start frontend

```bash
cd client
npm run dev
```

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:8000
```

---

## Deployment

### Frontend
Deploy on :contentReference[oaicite:0]{index=0}

### Backend
Deploy on :contentReference[oaicite:1]{index=1}

### Database
Use :contentReference[oaicite:2]{index=2} Atlas

---

## Future Improvements
- Recurring Expenses
- Budget Goals
- SMS Expense Parsing
- Receipt OCR Scanning
- AI Spending Insights
- Mobile App Version

---

## Author

Harshit Joshi

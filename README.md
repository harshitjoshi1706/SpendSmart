# SpendSmart Expense Tracker

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

```text
SpendSmart/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   └── src/
├── .github/workflows/ci.yml
├── docker-compose.yml
└── README.md
```

---

## Environment Variables

Copy the example files and replace placeholder values. Environment files are ignored by Git.

### Client (`client/.env`)

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### Server (`server/.env`)

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
git clone https://github.com/harshitjoshi1706/SpendSmart.git
cd SpendSmart
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

For deterministic CI-style installs, use `npm ci` instead.

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

## Quality Checks

All commands are one-shot and do not start watch processes.

```bash
cd client
npm run lint
npm run build

cd ../server
npm run lint
npm test
npm run build
```

Backend tests use Vitest and Supertest. They cover JWT creation and failure behavior as unit tests, plus health, validation, authentication, and not-found behavior through the Express middleware stack. They do not connect to MongoDB or use production data.

## Continuous Integration

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes and pull requests targeting `main`, and can also be started manually. It contains three jobs:

- Frontend: installs locked dependencies, lints, and creates the Vite production build.
- Backend: installs locked dependencies, lints, runs one-shot tests, and compiles TypeScript.
- Docker: after both code-check jobs pass, builds the frontend and backend images without publishing them.

The workflow has read-only repository permissions and does not deploy to Azure or any other platform.

## Docker Compose

The production-oriented images use multi-stage builds. The frontend compiles to static files served by unprivileged Nginx, which also proxies `/api` and `/uploads` to the backend. The backend image contains compiled JavaScript and production dependencies only and runs as a non-root user. Compose adds MongoDB with a persistent named volume and health check, plus a separate persistent volume for uploaded avatars.

Create a root Compose environment file and set a strong local secret:

```bash
cp .env.example .env
```

Replace the placeholder `JWT_SECRET`; do not commit `.env`. Then build and start the stack:

```bash
docker compose up --build
```

Open `http://localhost:3000`. The backend health endpoint is available at `http://localhost:8000/health`. To inspect status and logs:

```bash
docker compose ps
docker compose logs --no-color server
```

Stop the stack without deleting data:

```bash
docker compose down
```

MongoDB is intentionally not published to the host; only the backend can reach it over the Compose network. To use a different MongoDB deployment outside Compose, set `MONGODBURI` in `server/.env` when running the backend directly.

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

# Personal Finance Tracker

A simple, lightweight web app to track your personal income and expenses. No accounts, no cloud — all data is stored locally on your machine in a SQLite database.

---

## Features

- Add income and expense transactions
- Categorized transactions (fixed list)
- Real-time summary: total income, total expenses, and balance
- Delete any transaction
- Data persists in a local SQLite database (`finance.db`)

---

## Tech Stack

| Concern    | Choice                        |
|------------|-------------------------------|
| Frontend   | HTML, CSS, Vanilla JavaScript |
| Backend    | Node.js + Express             |
| Database   | SQLite (via better-sqlite3)   |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/aniraj2020/personal-finance.git
cd personal-finance

# Install dependencies
npm install

# Start the server
npm start
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## Project Structure

```
personal-finance/
├── server.js         # Express server + SQLite API
├── package.json
├── public/
│   └── index.html    # Frontend (HTML + CSS + JS)
└── finance.db        # SQLite database (auto-created on first run)
```

---

## API Endpoints

| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| GET    | `/api/transactions`       | Get all transactions   |
| POST   | `/api/transactions`       | Add a new transaction  |
| DELETE | `/api/transactions/:id`   | Delete a transaction   |

---

## Categories

**Income:** Salary, Freelance, Investment, Gift, Other Income

**Expense:** Food & Dining, Transport, Housing & Utilities, Entertainment, Health, Shopping, Other Expense

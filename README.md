# Personal Finance Tracker

A simple, lightweight web application to track income and expenses with persistent SQLite storage.

## Features

- ✅ Add income and expense transactions
- ✅ Categorize transactions (Food, Transport, Housing, Entertainment, Health, Shopping, Other)
- ✅ View transaction history with date and notes
- ✅ Real-time summary: total income, expenses, and balance
- ✅ Delete transactions
- ✅ Persistent SQLite database storage
- ✅ REST API backend (Express.js)
- ✅ Clean, responsive frontend

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: SQLite (better-sqlite3)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Storage**: Local SQLite database file (`finance.db`)

## Installation

### Prerequisites
- Node.js 16+ (check: `node --version`)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/aniraj2020/personal-finance.git
cd personal-finance
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

The app will create a `finance.db` file on first run to store all transactions.

## API Endpoints

### GET `/api/transactions`
Fetch all transactions.

**Response:**
```json
[
  {
    "id": "1710710400000",
    "type": "expense",
    "amount": 50.00,
    "category": "Food & Dining",
    "date": "2026-03-17",
    "note": "Lunch"
  }
]
```

### POST `/api/transactions`
Create a new transaction.

**Request Body:**
```json
{
  "id": "1710710400000",
  "type": "expense",
  "amount": 50.00,
  "category": "Food & Dining",
  "date": "2026-03-17",
  "note": "Lunch"
}
```

**Response:** `201 Created`
```json
{
  "id": "1710710400000"
}
```

### DELETE `/api/transactions/:id`
Delete a transaction by ID.

**Response:** `204 No Content`

## Testing Endpoints with curl

```bash
# Get all transactions
curl http://localhost:3000/api/transactions

# Add a new transaction
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "id": "1710710400000",
    "type": "expense",
    "amount": 50.00,
    "category": "Food & Dining",
    "date": "2026-03-17",
    "note": "Lunch"
  }'

# Delete a transaction
curl -X DELETE http://localhost:3000/api/transactions/1710710400000
```

## Database

All transactions are stored in `finance.db` (SQLite). To inspect the database:

1. Install [DB Browser for SQLite](https://sqlitebrowser.org/)
2. Open `finance.db` in the app
3. View the `transactions` table

## Project Structure

```
personal-finance/
├── server.js           # Express backend + API routes
├── package.json        # Dependencies
├── finance.db          # SQLite database (auto-created)
├── README.md           # This file
├── PRD.md              # Product requirements
└── public/
    └── index.html      # Frontend (HTML/CSS/JS)
```

## Categories

**Income:**
- Salary
- Freelance
- Investment
- Gift
- Other Income

**Expenses:**
- Food & Dining
- Transport
- Housing & Utilities
- Entertainment
- Health
- Shopping
- Other Expense

## Usage

1. **Add a Transaction:**
   - Select type (Income/Expense)
   - Enter amount
   - Choose category
   - Pick a date
   - Add optional note
   - Click "Add Transaction"

2. **View Summary:**
   - Total Income, Expenses, and Balance display at the top
   - Updates in real-time

3. **Delete a Transaction:**
   - Click the ✕ button on any transaction
   - Confirm deletion

## Future Improvements

- User authentication & multi-user support
- Budget planning and goals
- Charts and visualizations
- Monthly/yearly reports
- Recurring transactions
- CSV export
- Mobile app

## License

MIT

---

Built with ❤️ for simple personal finance tracking.

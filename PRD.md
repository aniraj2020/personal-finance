# Product Requirement Document
## Simple Personal Finance App

**Version:** 1.0
**Date:** 2026-03-17
**Status:** Draft

---

## 1. Overview

A lightweight, client-side web application that helps individuals track their income and expenses. No accounts, no backend — just a fast, simple tool that works in the browser.

---

## 2. Goals

- Allow users to log income and expense transactions
- Show a real-time balance and monthly summary
- Keep the experience simple enough to use in under 30 seconds

---

## 3. Non-Goals

- No user authentication or accounts
- No budgets or financial goals
- No recurring/scheduled transactions
- No charts or graphs
- No bank/API integrations
- No multi-currency support
- No mobile app

---

## 4. Users

Single user, personal use. No multi-user support.

---

## 5. Features

### 5.1 Add Transaction
- User can add a transaction via a form
- Required fields:
  - **Type**: Income or Expense
  - **Amount**: Positive number (e.g., 42.50)
  - **Category**: Selected from a fixed list (see 5.4)
  - **Date**: Defaults to today, editable
- Optional fields:
  - **Note**: Free-text description (max 100 characters)
- On submit, transaction is saved and the form resets

### 5.2 Transaction List
- Displays all transactions in reverse chronological order
- Each row shows: date, category, note (if any), amount (color-coded green for income, red for expense)
- User can delete any transaction (with a simple confirmation)

### 5.3 Summary Bar
- Always visible at the top
- Shows three values:
  - **Total Income** (all time)
  - **Total Expenses** (all time)
  - **Balance** (income minus expenses)

### 5.4 Categories (Fixed List)
| Income Categories | Expense Categories      |
|-------------------|-------------------------|
| Salary            | Food & Dining           |
| Freelance         | Transport               |
| Investment        | Housing & Utilities     |
| Gift              | Entertainment           |
| Other Income      | Health                  |
|                   | Shopping                |
|                   | Other Expense           |

### 5.5 Data Persistence
- All data stored in a local SQLite database (`finance.db`) on disk
- Node.js + Express backend serves the REST API
- Data persists across page refreshes and browser clears

---

## 6. UI Layout

```
┌─────────────────────────────────────────┐
│  Summary Bar: Income | Expenses | Balance│
├─────────────────────────────────────────┤
│  Add Transaction Form                   │
│  [Type] [Amount] [Category] [Date]      │
│  [Note (optional)]       [Add Button]   │
├─────────────────────────────────────────┤
│  Transaction List                       │
│  Date     Category    Note    Amount    │
│  ──────────────────────────────────     │
│  Mar 17   Food        Lunch   -$12.50   │
│  Mar 16   Salary              +$3000    │
│  ...                                    │
└─────────────────────────────────────────┘
```

---

## 7. Tech Stack

| Concern     | Choice                        |
|-------------|-------------------------------|
| Language    | HTML, CSS, vanilla JavaScript |
| Styling     | Plain CSS (no frameworks)     |
| Backend     | Node.js + Express             |
| Database    | SQLite (via better-sqlite3)   |

---

## 8. Constraints

- No build step required — run with `npm start`
- No external CDN libraries
- Must work in any modern browser (Chrome, Firefox, Safari)
- Requires Node.js installed locally

---

## 9. Out of Scope (Future Considerations)

These are explicitly excluded from v1 but could be added later:

- Monthly/weekly filter on transaction list
- Export to CSV
- Dark mode
- Pie chart of spending by category

const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database('finance.db');

// ── Schema ────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS transactions (
    id        TEXT PRIMARY KEY,
    type      TEXT NOT NULL,
    amount    REAL NOT NULL,
    category  TEXT NOT NULL,
    date      TEXT NOT NULL,
    note      TEXT DEFAULT ''
  )
`);

// ── Middleware ────────────────────────────────────────────
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API Routes ────────────────────────────────────────────

// GET all transactions
app.get('/api/transactions', (req, res) => {
  const rows = db.prepare('SELECT * FROM transactions ORDER BY date DESC, id DESC').all();
  res.json(rows);
});

// POST add transaction
app.post('/api/transactions', (req, res) => {
  const { id, type, amount, category, date, note } = req.body;

  if (!id || !type || !amount || !category || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.prepare(`
    INSERT INTO transactions (id, type, amount, category, date, note)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(id, type, amount, category, date, note || '');

  res.status(201).json({ id });
});

// DELETE transaction
app.delete('/api/transactions/:id', (req, res) => {
  db.prepare('DELETE FROM transactions WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

// ── Start ─────────────────────────────────────────────────
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Personal Finance running at http://localhost:${PORT}`);
});

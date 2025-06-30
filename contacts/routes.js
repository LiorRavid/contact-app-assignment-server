const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM contacts', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const c = req.body;

  db.run(
    `INSERT OR REPLACE INTO contacts (id, name, address, email, phone, cell, registrationDate, age, imageUrl, synced)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [c.id, c.name, c.address, c.email, c.phone, c.cell, c.registrationDate, c.age, c.imageUrl, c.synced],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: 'Contact saved',
        id: c.id,
        synced: c.synced
      });
    }
  );
});

router.delete('/:id', (req, res) => {
  db.run(`DELETE FROM contacts WHERE id = ?`, [req.params.id], err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Contact deleted', id: req.params.id });
  });
});

module.exports = router;
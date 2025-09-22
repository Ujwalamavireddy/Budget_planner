const express = require('express');
const Expense = require('../models/Expense');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

// list
router.get('/', async (req, res) => {
  const expenses = await Expense.findAll({ where: { userId: req.user.id }, order: [['date','DESC']] });
  res.json(expenses);
});

// create
router.post('/', async (req, res) => {
  const { title, amount, category, date, note } = req.body;
  const expense = await Expense.create({ title, amount, category, date, note, userId: req.user.id });
  res.json(expense);
});

// update
router.put('/:id', async (req, res) => {
  const e = await Expense.findByPk(req.params.id);
  if (!e || e.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  await e.update(req.body);
  res.json(e);
});

// delete
router.delete('/:id', async (req, res) => {
  const e = await Expense.findByPk(req.params.id);
  if (!e || e.userId !== req.user.id) return res.status(404).json({ message: 'Not found' });
  await e.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;

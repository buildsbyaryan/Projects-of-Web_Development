// routes/index.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch (err) {
        res.render('error', { error: err });
    }
});

// POST new todo
router.post('/add', async (req, res) => {
    const { task } = req.body;
    const newTodo = new Todo({ task });

    try {
        await newTodo.save();
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

// DELETE todo
router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

module.exports = router;

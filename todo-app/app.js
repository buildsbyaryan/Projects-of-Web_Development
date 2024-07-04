const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://127.0.0.1:27017/contactList', {
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});


const todoSchema = new mongoose.Schema({
    task: String
  });
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  // Middleware to serve static files
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Middleware to parse URL-encoded form data
  app.use(express.urlencoded({ extended: true }));
  
  // Set EJS as the templating engine
  app.set('view engine', 'ejs');
  
  // Route to render the todo list
  app.get('/', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('index', { todos });
    } catch (err) {
      console.error('Error fetching todos:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Route to handle adding a new todo
  app.post('/add', async (req, res) => {
    const newTodo = new Todo({
      task: req.body.task
    });
  
    try {
      await newTodo.save();
      res.redirect('/');
    } catch (err) {
      console.error('Error adding todo:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Route to handle deleting a todo
  app.post('/delete/:id', async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (err) {
      console.error('Error deleting todo:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
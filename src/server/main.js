import express from  'express'
import ViteExpress from 'vite-express'

const app = express()

const todos = [
  { name:'buy groceries', price: '3', quantity: '2', completed:false }
]

app.use(express.json())

app.get('/read', (req, res) => res.json(todos))

app.post('/add', (req,res) => {
  todos.push(req.body)
  res.json(todos)
})

app.post('/change', function(req,res) {
  const idx = todos.findIndex(v => v.name === req.body.name);
  todos[idx].price = req.body.price;
  todos[idx].quantity = req.body.quantity;
  todos[idx].tcost = req.body.quantity * req.body.price;
  todos[idx].completed = req.body.completed;
  
  res.sendStatus(200)
})

ViteExpress.listen(app, 3000)
const express = require('express');
const app = express();
const port = 5000;
const rootUrl = '/api';

function logRequest({ method, url }, res, next) {
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
  next();
}

app.use(express.json());
app.use(logRequest);

const inc = (init = 0) => () => ++init;
const generateId = inc();
const tasks = [
  { id: generateId(), title: 'Do homework', done: false },
  { id: generateId(), title: 'Clean room', done: false }
];

const createTask = data => {
  return {
    id: generateId(),
    title: data.title,
    done: false
  }
}

app.get(`${rootUrl}/tasks`, (req, res) => res.json(tasks));

app.post(`${rootUrl}/tasks`, (req, res) => {
  const task = createTask(req.body);
  tasks.push(task);
  res.json(task);
});

app.patch(`${rootUrl}/tasks/:id`, (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    Object.assign(task, req.body);
    res.json(task);
  } else {
    res.status(404).json({ error: `Task with id:${taskId} not found` });
  }
});

app.listen(port, () => {
  console.log(`Server work on localhost:${port}`);
});
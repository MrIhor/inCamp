const list = require('../List/ListTasks.json');

const taskInc = (init = 2) => () => ++init;
const generateTaskId = taskInc();

const getTask = id => {
    const listId = list.find(l => l.id === id);
    return listId.tasks;
}

const createTask = (listId, data) => {
    const task = {
        id: generateTaskId(),
        title: data.title, 
        done: false
    }

    const currentList = list.find(l => l.id === listId);
    currentList.tasks.push(task);
    return currentList.tasks;
}

const deleteTask = (listId, taskId) => {
    const currentList = list.find(l => l.id === listId);
    
    return currentList.tasks.splice(taskId - 1, 1);
}

const updateTask = (listId, taskId, data) => {
    const lists = list.find(l => l.id === listId).tasks; 
    const task = lists.find(t => t.id === taskId);

    if(task) {
        task.taskTitle = data.title;
        task.done = data.done;
        return task;
    }

    return task;
}

const updateFullTask = (listId, taskId, data) => {
    const lists = list.find(l => l.id === listId).tasks;
    const task = lists.find(t => t.id === taskId);
    
    if(task) {
        const updatedTask = {
            id: generateTaskId(),
            taskTitle: data.title,
            done: false
        }

        Object.assign(task, updatedTask);
        return task;
    }

    return task;
}

module.exports = {getTask, createTask, deleteTask, updateTask, updateFullTask};
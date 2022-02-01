const list = require('../List/ListTasks.json');

const taskInc = (init = 2) => () => ++init;
const generateTaskId = taskInc();

const getTask = id => {
    const listId = list[id - 1];
    return listId.tasks;
}

const createTask = (id, data) => {
    const task = {
        id: generateTaskId(),
        title: data.title, 
        done: false
    }

    const listId = list[id - 1];
    listId.tasks.push(task);
    return listId.tasks;
}

const deleteTask = (listId, taskId) => {
    const currentList = list[listId - 1];
    
    return currentList.tasks.splice(taskId - 1, 1);
}

const updateTask = (listId, taskId, data) => {
    const tasks = list[listId - 1].tasks;
    const task = tasks.find(t => t.id === (taskId - 1));

    if(task) {
        Object.assign(task, data);
        return tasks;
    }

    return tasks;
}



module.exports = {getTask, createTask, deleteTask, updateTask};
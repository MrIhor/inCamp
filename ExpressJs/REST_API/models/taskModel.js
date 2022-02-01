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



module.exports = {getTask, createTask, deleteTask};
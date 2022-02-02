const lists = require('../List/ListTasks.json');

const taskInc = (init = 2) => () => ++init;
const generateTaskId = taskInc();

function getId(array, currentId) {
    return array.find(element => element.id === currentId)
}

const getTask = id => {
    const listId = getId(lists, id);

    if(listId) {
        return listId.tasks;
    }

    return undefined;
}

const createTask = (listId, data) => {
    const currentList = getId(lists, listId);

    const task = {
        id: currentList.tasks.length + 1,
        title: data.title, 
        done: false
    }

    if (currentList) {
        currentList.tasks.push(task);
        return currentList.tasks;
    }
     
    return undefined;
}

const deleteTask = (listId, taskId) => {
    let currentList = getId(lists, listId);

    if (currentList) {
        const task = getId(currentList.tasks, taskId);

        if (task) {
            const deleteTask = currentList.tasks.filter(element => element.id !== taskId);
            return currentList.tasks = deleteTask;
        }
         
        return undefined;
    }
     
    return undefined;
}

const updateTask = (listId, taskId, data) => {
    const currentList = getId(lists, listId).tasks; 
    const task = getId(currentList, taskId);

    if(task) {
        task.taskTitle = data.title;
        task.done = data.done;
        return task;
    }

    return undefined;
}

const updateFullTask = (listId, taskId, data) => {
    const currentList = getId(lists, listId).tasks;
    const task = getId(currentList, taskId);
    
    if(task) {
        const updatedTask = {
            id: currentList.length,
            taskTitle: data.title,
            done: false
        }

        Object.assign(task, updatedTask);
        return task;
    }

    return undefined;
}

module.exports = {getTask, createTask, deleteTask, updateTask, updateFullTask};
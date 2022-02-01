const list = require('../List/ListTasks.json');

const inc = (init = 2) => () => ++init;
const generateId = inc();

const getAll = () => {
    return list;
}

const getTask = id => {
    const listId = list[id - 1]; 
    return listId.tasks;
}

const createList = (data) => {
    const newList = {
        listId: generateId(),
        listTitle: data.title, 
        tasks: []
    }

    list.push(newList);
    return list;
}

const createTask = (id, data) => {
    const task = {
        id: generateId(),
        title: data.title, 
        done: false
    }

    const listId = list[id - 1];
    listId.tasks.push(task);
    return listId.tasks;
}

const deleteList = (listId) => {
    return list.splice(listId - 1, 1); 
}

const deleteTask = (listId, taskId) => {
    const currentList = list[listId - 1];
    
    return currentList.tasks.splice(taskId - 1, 1);
}

module.exports = {getAll, getTask, createTask, createList, deleteList, deleteTask};

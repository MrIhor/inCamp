const list = require('../List/ListTasks.json');

const listInc = (init = 2) => () => ++init;
const generateListId = listInc();

const taskInc = (init = 2) => () => ++init;
const generateTaskId = taskInc();

const getAll = () => {
    return list;
}

const getTask = taskId => {
    const listId = list.find(l => l.id === taskId); 
    return listId.tasks;
}

const getList = listId => {
    const currentList = list.find(l => l.id === listId);
    return currentList;
}

const createList = (data) => {
    const newList = {
        id: generateListId(),
        listTitle: data.title, 
        tasks: []
    }

    list.push(newList);
    return list;
}  

const createTask = (listId, data) => {
    const currentList = list.find(l => l.id === listId);
    const task = {
        id: generateTaskId(),
        title: data.title, 
        done: false
    }
 
    currentList.tasks.push(task);
    return currentList.tasks;
}

const deleteList = (listId) => {
    return list.splice(listId - 1, 1); 
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

    return lists;
}

const updateList = (listId, data) => {
    const currentList = list.find(l => l.id === listId);

    if (currentList) {
        currentList.listTitle = data.title;
        return currentList;
    }

    return currentList;
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

const updateFullList = (listId, data) => {
    const currentList = list.find(l => l.id === listId);

    if (currentList) {
        const updatedList = {
            id: generateListId(),
            listTitle: data.title,
            tasks: []
        }

        Object.assign(currentList, updatedList);
        return currentList;
    }

    return currentList; 
}

module.exports = {getAll, getTask, getList, createTask, createList, deleteList, deleteTask, updateTask, updateList, updateFullTask, updateFullList};

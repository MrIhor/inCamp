const list = require('../List/ListTasks.json');

const listInc = (init = 2) => () => ++init;
const generateListId = listInc();

// const taskInc = (init = 2) => () => ++init;
// const generateTaskId = taskInc();

const getAll = () => {
    return list;
}

const getTask = id => {
    const listId = list[id - 1]; 
    return listId.tasks;
}

const createList = (data) => {
    const newList = {
        listId: generateListId(),
        listTitle: data.title, 
        tasks: []
    }

    list.push(newList);
    return list;
}  

const createTask = (id, data) => {
    const listId = list[id - 1];
    const taskId = listId.tasks.length;
    const task = {
        taskId: taskId + 1,
        title: data.title, 
        done: false
    }
 
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

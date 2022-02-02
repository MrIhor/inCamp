let list = require('../List/ListTasks.json');

function getId(array, currentId) {
    return array.find(element => element.id === currentId)
}

const getAll = () => {
    return list;
}

const getTask = taskId => {
    const currentListId = getId(list, taskId);
    
    if(currentTaskId) {
        return currentListId.tasks;
    }
    
    return undefined;
}

const getList = listId => {
    const currentList = getId(list, listId);

    if(currentList) {
        return currentList;
    }

    return undefined;
}

const createList = (data) => {
    const newList = {
        id: list.length + 1,
        listTitle: data.title, 
        tasks: []
    }

    list.push(newList);
    return list;
}  

const createTask = (listId, data) => {
    const currentList = getId(list, listId);
    const task = {
        id: currentList.tasks.length + 1,
        title: data.title, 
        done: false
    }

    if (currentList) {
        currentList.tasks.push(task);
        return task;
    }
 
    return undefined;
}

const deleteList = (listId) => {
    const currentList = getId(list, listId);

    if (currentList) {
        const deleteList = list.filter(l => l.id !== listId);
        return list = deleteList;
    }
     
    return undefined;
} 
  
const deleteTask = (listId, taskId) => {
    let currentList = getId(list, listId);

    if (currentList) {
        const task = currentList.tasks.find(t => t.id === taskId);

        if (task) {
            const deleteTask = currentList.tasks.filter(element => element.id !== taskId);
            return currentList.tasks = deleteTask;
        }
         
        return undefined; 
    }
     
    return undefined;
} 

const updateTask = (listId, taskId, data) => {
    const currentListTasks = getId(list, listId).tasks; 
    const task = getId(currentListTasks, taskId);

    if(task) {
        task.taskTitle = data.title;
        task.done = data.done;
        return task;
    }

    return undefined;
}

const updateList = (listId, data) => {
    const currentList = getId(list, listId);

    if (currentList) {
        currentList.listTitle = data.title;
        return currentList;
    }

    return undefined;
}

const updateFullTask = (listId, taskId, data) => {
    const currentListTasks = getId(list, listId).tasks; 
    const task = getId(currentListTasks, taskId);

    if(task) {
        const updatedTask = {
            id: currentListTasks.length + 1,
            taskTitle: data.title,
            done: false
        }

        Object.assign(task, updatedTask);
        return task;
    }

    return undefined;
}

const updateFullList = (listId, data) => {
    const currentList = getId(list, listId);

    if (currentList) {
        const updatedList = {
            id: list.length + 1,
            listTitle: data.title,
            tasks: []
        }

        Object.assign(currentList, updatedList);
        return currentList;
    }

    return undefined; 
}

module.exports = {getAll, getTask, getList, createTask, createList, deleteList, deleteTask, updateTask, updateList, updateFullTask, updateFullList};

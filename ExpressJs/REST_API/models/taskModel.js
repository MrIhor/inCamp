const list = require('../List/ListTasks.json');

const getTask = (id) => {
    const listId = list[id - 1];
    return listId.tasks;
}

module.exports = {getTask};
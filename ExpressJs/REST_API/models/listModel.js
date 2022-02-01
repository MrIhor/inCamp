const lists = require('../List/ListTasks.json');

// const inc = (init = 0) => () => ++init;
// const generateId = inc();

const getAll = () => {
    return lists;
}

module.exports = {getAll};

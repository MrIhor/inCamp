const pg = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'todolist_app',
        password: 'secret',
        database: 'todolist'
    }
});

module.exports = pg;
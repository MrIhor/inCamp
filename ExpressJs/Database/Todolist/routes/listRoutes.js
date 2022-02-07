const router = require('express').Router();
const controller = require('../controllers/ListController');

router.get('', controller.getAllLists);

router.get('/:id', controller.getList);

router.get('/:id/tasks', controller.getTasksInList);

router.post('', controller.createList);

router.patch('/:id', controller.editList);

router.put('/:id', controller.updateList);

router.delete('/:id', controller.deleteList);

module.exports = router;
const tasksEndpoint = 'http://localhost:8080/tasks';

const list = document.querySelector('ul');
const taskTemplate = document.querySelector('#template-task');
const switchButton = document.querySelector('.switch input');
const taskForm = document.forms['createTask'];
const inputTitle = taskForm.querySelector('input[name=title]');
const inputDescription = taskForm.querySelector('input[name=description]');
const inputDate = taskForm.querySelector('input[name=due_date]');
const addButton = taskForm.querySelector('button');
const errorBlock = document.querySelector('.connection-error');

(async function getTasksFromDB() {
  const getAllTasks = await fetch(tasksEndpoint);

  const tasks = await getAllTasks.json();
  tasks.map(renderTask).forEach(appendTask);
}()
  .catch(err => {
    list.classList.add('connection-error');
    errorBlock.classList.toggle('connection-error');
    console.log(err)
  })
);

function getFormatDate(taskDate) {
  if (taskDate) {
    const splitDate = taskDate.slice(0, 10).split('/');

    const formatDate = splitDate.map(number => {
      return number = number < 10 ? '0' + number : number;
    })

    return formatDate.join('/');
  } else {
    return '-';
  }
}

function isOverdue(taskDate) {
  if (taskDate !== null) {
    const currentDate = new Date().getDate();
    const due_date = new Date(taskDate).getDate();
    return currentDate > due_date;
  } else {
    return false;
  }
}

function renderTask({ id, title, due_date, description, done }) {
  const taskElement = taskTemplate.content.cloneNode(true).children[0];
  const checkButton = taskElement.querySelector('input[type=checkbox]')
  const label = taskElement.querySelector('label');
  const span = taskElement.querySelector('span');
  const paragraph = taskElement.querySelector('p');
  const date = due_date === null ? null : new Date(due_date).toLocaleDateString();

  checkButton.checked = done;
  label.textContent = title;
  span.textContent = getFormatDate(date) ? getFormatDate(date) : '-';
  paragraph.textContent = description ? description : '-';
  taskElement.setAttribute('id', id);

  if (done) {
    label.classList.add('complete');
  }

  if (isOverdue(date)) {
    span.classList.add('overdue');
  }

  return setListeners(taskElement);
}

function appendTask(taskElement) {
  list.prepend(taskElement);
}

function deleteTaskAPI(currentTaskId) {
  return fetch(tasksEndpoint + '/' + currentTaskId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function checkedTaskAPI(currentTaskId, editTask) {
  return fetch(tasksEndpoint + '/' + currentTaskId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editTask)
  });
}

function setListeners(taskElement) {
  const arrowButton = taskElement.querySelector('img');
  const checkbox = taskElement.querySelector('.taskCheckbox');
  const taskLabel = taskElement.querySelector('label');
  const descriptionBlock = taskElement.querySelector('.list-item-description');
  const deleteButton = taskElement.querySelector('.delete');

  const currentTaskId = parseInt(taskElement.id);

  arrowButton.addEventListener('click', event => {
    event.target.classList.toggle('reverse');
    descriptionBlock.classList.toggle('show');
  })

  checkbox.addEventListener('click', event => {
    const editTask = { done: event.target.checked };

    checkedTaskAPI(currentTaskId, editTask)
      .then(() => {
        if (event.target.checked) {
          taskLabel.classList.add('complete');
        } else {
          taskLabel.classList.remove('complete');
        }
      })
      .catch(err => {
        list.classList.add('connection-error');
        errorBlock.classList.toggle('connection-error');
        console.log(err)
      });

    if (switchButton.checked) {
      taskElement.classList.add('hide');
    }
  })

  deleteButton.addEventListener('click', () => {
    deleteTaskAPI(currentTaskId)
      .then(() => taskElement.remove())
      .catch(err => {
        list.classList.add('connection-error');
        errorBlock.classList.toggle('connection-error');
        console.log(err)
      });
  })

  switchButton.addEventListener('click', () => {
    if (checkbox.checked) {
      taskElement.classList.toggle('hide');
    }
  })

  return taskElement;
}

inputTitle.addEventListener('focus', event => {
  event.target.classList.remove('valid');
  inputTitle.placeholder = 'Title';
})

function createTaskAPI(formData) {
  return fetch(tasksEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
}

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  if (inputTitle.value === '') {
    inputTitle.classList.add('valid');
    inputTitle.placeholder = 'Title is required!';
  } else {
    inputTitle.classList.remove('valid');
    const getInputDate = inputDate.value ? new Date(inputDate.value) : null;
    const getInputDescription = inputDescription.value ? inputDescription.value : null;

    const formData = {
      title: inputTitle.value,
      due_date: getInputDate,
      done: false,
      description: getInputDescription
    }

    createTaskAPI(formData)
      .then(task => {
        appendTask(renderTask(task))
        taskForm.reset()
      })
      .catch(err => {
        list.classList.add('connection-error');
        errorBlock.classList.toggle('connection-error');
        console.log(err)
      });
  }
})

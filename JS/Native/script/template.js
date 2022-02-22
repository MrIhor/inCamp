let tasks = [
  {
    id: 1,
    title: "Do homework",
    date: new Date("02/18/2022"),
    done: false,
    description: ""
  },
  {
    id: 2,
    title: "Cook dinner",
    date: null,
    done: true,
    description: "Some description"
  },
  {
    id: 3,
    title: "Walk with dog",
    date: new Date("02/22/2022"),
    done: false,
    description: "Some description"
  },
  {
    id: 4,
    title: "Clean room",
    date: new Date("02/14/2022"),
    done: false,
    description: "Some description"
  },
  {
    id: 5,
    title: "Help father",
    date: new Date("02/22/2022"),
    done: true,
    description: "Some description"
  }
]

const list = document.querySelector('ul');
const taskTemplate = document.querySelector('#template-task');
const switchButton = document.querySelector('.switch input');
const taskForm = document.forms['createTask'];
const inputTitle = taskForm.querySelector('input[name=title]');
const inputDescription = taskForm.querySelector('input[name=description]');
const inputDate = taskForm.querySelector('input[name=due_date]');
const addButton = taskForm.querySelector('button');

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
    tasks.map(task => {
      if (task.id === currentTaskId) {
        task.done = event.target.checked;
      }
    })
    taskLabel.classList.toggle('complete')
    if (switchButton.checked) {
      taskElement.classList.add('hide');
    }
  })

  deleteButton.addEventListener('click', () => {
    const removeTask = tasks.filter(task => task.id !== currentTaskId);
    taskElement.remove();

    tasks = removeTask;
  })

  switchButton.addEventListener('click', () => {
    if (checkbox.checked) {
      taskElement.classList.toggle('hide');
    }
  })

  return taskElement;
}

function renderTask({ id, title, date, description, done }) {
  const taskElement = taskTemplate.content.cloneNode(true).children[0];
  const checkButton = taskElement.querySelector('input[type=checkbox]')
  const label = taskElement.querySelector('label');
  const span = taskElement.querySelector('span');
  const paragraph = taskElement.querySelector('p');
  const due_date = date === null ? null : new Date(date).toLocaleDateString();

  checkButton.checked = done;
  label.textContent = title;
  span.textContent = getFormatDate(due_date) ? getFormatDate(due_date) : '-';
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

inputTitle.addEventListener('focus', event => {
  event.target.classList.remove('valid');
  inputTitle.placeholder = 'Title';
})

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  if (inputTitle.value === '') {
    inputTitle.classList.add('valid');
    inputTitle.placeholder = 'Title is required!';
  } else {
    inputTitle.classList.remove('valid');
    const getInputData = inputDate.value !== '' ? new Date(inputDate.value) : null;

    const formData = {
      id: tasks.length + 1,
      title: inputTitle.value,
      date: getInputData ? getInputData : '-',
      done: false,
      description: inputDescription.value
    }

    tasks.push(formData);
    appendTask(renderTask(formData));
    taskForm.reset();
  }
})

tasks.map(renderTask).forEach(appendTask);

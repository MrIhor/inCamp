let tasks = [
  {
    id: 1,
    title: "Do homework",
    date: "02/18/2022",
    done: false,
    description: ""
  },
  {
    id: 2,
    title: "Cook dinner",
    date: "",
    done: true,
    description: "Some description"
  },
  {
    id: 3,
    title: "Walk with dog",
    date: "02/19/2022",
    done: false,
    description: "Some description"
  },
  {
    id: 4,
    title: "Clean room",
    date: "02/14/2022",
    done: false,
    description: "Some description"
  },
  {
    id: 5,
    title: "Help father",
    date: "02/20/2022",
    done: true,
    description: "Some description"
  }
]

const list = document.querySelector('ul');
const taskTemplate = document.querySelector('#template-task');
const switchButton = document.querySelector('.switch input');

function renderTask({ id, title, date, description, done }) {
  const taskElement = taskTemplate.content.cloneNode(true).children[0];
  const checkButton = taskElement.querySelector('input[type=checkbox]')
  const label = taskElement.querySelector('label');
  const span = taskElement.querySelector('span');
  const paragraph = taskElement.querySelector('p');
  const currentDate = new Date();
  const taskDate = new Date(date);
  const overdue = currentDate >= taskDate;

  checkButton.checked = done;
  label.textContent = title;
  span.textContent = date ? new Date(date).toLocaleDateString() : '-';
  paragraph.textContent = description ? description : '-';
  taskElement.setAttribute('id', id);

  if (done) {
    label.classList.add('complete');
  }

  if (overdue) {
    span.classList.add('overdue');
  }

  return taskElement
}

function appendTask(taskElement) {
  list.append(taskElement);
}

tasks.map(renderTask).forEach(appendTask);

const tasksList = list.querySelectorAll('li');

tasksList.forEach(listElement => {
  const arrowButton = listElement.querySelector('img');
  const checkbox = listElement.querySelector('.taskCheckbox');
  const taskLabel = listElement.querySelector('label');
  const descriptionBlock = listElement.querySelector('.list-item-description');
  const deleteButton = listElement.querySelector('.delete');

  const currentTaskId = parseInt(listElement.id);

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
  })

  deleteButton.addEventListener('click', () => {
    const removeTask = tasks.filter(task => task.id !== currentTaskId);
    listElement.remove();

    tasks = removeTask;
  })
})

switchButton.addEventListener('click', () => {
  console.log("first")
  // if (checkbox.checked) {
  //   listElement.classList.toggle('hide');
  // }
})
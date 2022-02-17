const tasks = [
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

const list = document.getElementById('list');
const switchButton = document.querySelector('.switch input');
let switchValue = switchButton.checked;

if (tasks.length <= 0) {
  list.innerHTML = "<label>You don't have tasks yet</label>"
}

function createTaskHtml({ title, date, description, done }) {
  const currentDate = new Date();
  const taskDate = new Date(date);
  const overdue = currentDate >= taskDate;

  const check = done ? 'checked' : '';
  const doneTask = done ? 'complete' : '';
  const hasDescription = description ? description : "-";
  const hasDate = date ? date : "-";
  const isOverdue = overdue ? 'overdue' : '';
  const task = `<li>
          <div class="list-item-title">
           <div><input type="checkbox" ${check}></div>
            <label class="${doneTask}">${title}</label>
            <span class="${isOverdue}">${hasDate}</span>
            <div><button class="delete"><span>Delete</span></button></div>
           <div><img src="img/arrow.png" alt="arrow"></div>
         </div>

          <div class="list-item-description">
           <p>${hasDescription}</p>
          </div>
      </li>`

  return task;
}

function createList() {
  const tasksList = [];

  tasks.forEach(task => {
    tasksList.push(createTaskHtml(task));
  })

  return tasksList;
}

function render() {
  list.innerHTML = createList().join('');
}

render();

switchButton.addEventListener('click', event => {
  switchValue = !event.target.checked;

  list.childNodes.forEach((task, index) => {
    if (tasks[index].done) {
      task.classList.toggle('hide');
    }
  })
})

const checkButtons = document.querySelectorAll('#list li .list-item-title input');
const taskLabels = document.querySelectorAll('#list li .list-item-title label');
const descriptionButton = document.querySelectorAll('#list li .list-item-title img');
const descriptionLabel = document.querySelectorAll('#list li .list-item-description');

descriptionButton.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.target.classList.toggle('reverse');
    descriptionLabel[index].classList.toggle('show');
  })
});

checkButtons.forEach((input, index) => {
  input.addEventListener('click', event => {
    tasks[index].done = event.target.checked;

    taskLabels[index].classList.toggle('complete');
    if (switchButton.checked) {
      list.childNodes[index].classList.toggle('hide');
    }
  })
});

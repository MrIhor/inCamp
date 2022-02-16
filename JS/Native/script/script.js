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
    date: "02/11/2022",
    done: false,
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
    done: false,
    description: "Some description"
  }
]

const list = document.getElementById('list');

if (tasks.length <= 0) {
  list.innerHTML = "<label>You don't have tasks yet</label>"
}

function renderList({ title, date, description, done }) {
  const currentDate = new Date();
  const taskDate = new Date(date);
  const overdue = currentDate >= taskDate;

  const check = done ? 'checked' : null;
  const doneTask = done ? 'complete' : 'uncomplete';
  const hasDescription = description ? description : "You don't have description for this task";
  const isOverdue = overdue ? 'overdue' : '';

  list.innerHTML += `<li>
          <div class="list-item-title">
           <div><input type="checkbox" ${check}></div>
            <label class="${doneTask}">${title}</label>
            <span class="${isOverdue}">${date}</span>
           <div><img src="img/arrow.png" alt="arrow"></div>
         </div>

          <div class="list-item-description">
           <p>${hasDescription}</p>
          </div>
</li>`
}

tasks.forEach(renderList);

const checkButton = document.querySelectorAll('#list li .list-item-title input');
const taskLabels = document.querySelectorAll('#list li .list-item-title label');
const descriptionButton = document.querySelectorAll('#list li .list-item-title img');
const descriptionLabel = document.querySelectorAll('#list li .list-item-description');

function checkHandler(input, index) {
  input.addEventListener('click', () => {
    tasks[index].done = !tasks[index].done;

    taskLabels[index].classList.toggle('complete');
    console.log(tasks[index])
  })
}

function showDescriprion(button, index) {
  button.addEventListener('click', () => {
    descriptionButton[index].classList.toggle('reverse');
    descriptionLabel[index].classList.toggle('show');
  })
}

checkButton.forEach(checkHandler);
descriptionButton.forEach(showDescriprion);
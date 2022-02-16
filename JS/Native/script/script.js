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
const filterCheckbox = document.querySelector('.switch input');


if (tasks.length <= 0) {
  list.innerHTML = "<label>You don't have tasks yet</label>"
}

function render({ title, date, description, done }) {
  const currentDate = new Date();
  const taskDate = new Date(date);
  const overdue = currentDate >= taskDate;

  const check = done ? 'checked' : '';
  const doneTask = done ? 'complete' : 'uncomplete';
  const hasDescription = description ? description : "-";
  const hasDate = date ? date : "-";
  const isOverdue = overdue ? 'overdue' : '';

  list.innerHTML += `<li>
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
}


// function renderUncomplete(taskList) {
//   return taskList.filter(({ done }) => done === false);
// }

// const filterTask = renderUncomplete(tasks);

tasks.forEach(render);


filterCheckbox.addEventListener('click', () => {
  console.log(filterCheckbox.checked);

  if (filterCheckbox.checked) {
    tasks.forEach(renderList)
    console.log(tasks)
  } else {
    filterTask.forEach(renderList)
    console.log(filterTask);
  }
})

const checkButton = document.querySelectorAll('#list li .list-item-title input');
const taskLabels = document.querySelectorAll('#list li .list-item-title label');
const descriptionButton = document.querySelectorAll('#list li .list-item-title img');
const descriptionLabel = document.querySelectorAll('#list li .list-item-description');

function checkHandler(input, index) {
  input.addEventListener('click', () => {
    tasks[index].done = !tasks[index].done;

    taskLabels[index].classList.toggle('complete');
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

import { useState } from 'react'
import styles from './App.module.css';
import TodoListSidebar from './components/ListComponents/TodoListSidebar/TodoListSidebar';
import TaskForm from './components/TaskComponents/TaskForm/TaskForm';
import Task from './components/TaskComponents/TaskItem/Task';

const todoLists = [
  {
    id: 1,
    title: 'List 1',
    tasks: [
      {
        id: 1,
        name: "Do homework",
        date: "02/18/2022",
        done: false,
        description: "-"
      },
      {
        id: 2,
        name: "Cook dinner",
        date: null,
        done: true,
        description: "Some description"
      },
      {
        id: 3,
        name: "Walk with dog",
        date: "02/22/2022",
        done: false,
        description: "Some description"
      },
    ]
  },
  {
    id: 2,
    title: 'List 2',
    tasks: [
      {
        id: 1,
        name: "Clean room",
        date: "02/14/2022",
        done: false,
        description: "Some description"
      },
      {
        id: 2,
        name: "Help father",
        date: "02/22/2022",
        done: true,
        description: "Some description"
      }
    ]
  },
  {
    id: 3,
    title: 'List 3',
    tasks: [
      {
        id: 1,
        name: "Walk with dog",
        date: "02/22/2022",
        done: false,
        description: "Some description"
      },
      {
        id: 2,
        name: "Clean room",
        date: "02/14/2022",
        done: false,
        description: "Some description"
      },
    ]
  }
]

let taskId = 4;

function App() {
  const [selectedList, setSelectedList] = useState({});

  const selectTodoList = (list) => {
    setSelectedList(list);
  }

  const addTask = (formData) => {
    const newTask = {
      id: taskId,
      name: formData.title,
      date: formData.due_date,
      done: false,
      description: formData.description
    }

    const listTasks = [...selectedList.tasks, newTask];

    setSelectedList({
      ...selectedList,
      tasks: listTasks
    });
    console.log('addTask');
    console.log(selectedList);
    taskId++;
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>TodoList</h1>
      </header>

      <main className={styles.main}>
        <TodoListSidebar
          todoLists={todoLists}
          selectedList={selectedList}
          onSelect={selectTodoList}
        />
        <div className={styles.content}>
          <h2>Tasks</h2>
          {
            selectedList.tasks === undefined ?
              <h3>Choose list</h3>
              :
              selectedList.tasks.map(taskElement => (
                <Task key={taskElement.id} task={taskElement} />
              ))
          }
          <TaskForm
            onSubmit={addTask}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_info}>
          <span>Created by Ihor Mol</span>
          <span>molchanigor54@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

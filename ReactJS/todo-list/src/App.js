import { useState } from 'react'
import styles from './App.module.css';
import TodoListSidebar from './components/ListComponents/TodoListSidebar/TodoListSidebar';
import TaskForm from './components/TaskComponents/TaskForm/TaskForm';
import Task from './components/TaskComponents/TaskItem/Task';

const todoLists = [
  {
    id: 1,
    title: 'List 1'
  },
  {
    id: 2,
    title: 'List 2'
  },
  {
    id: 3,
    title: 'List 3'
  }
]

const allTasks = [
  {
    id: 1,
    title: "Do homework",
    date: "02/18/2022",
    done: false,
    description: "-",
    list_id: 1
  },
  {
    id: 2,
    title: "Cook dinner",
    date: null,
    done: true,
    description: "Some description",
    list_id: 2
  },
  {
    id: 3,
    title: "Walk with dog",
    date: "02/22/2022",
    done: false,
    description: "Some description",
    list_id: 1
  },
  {
    id: 4,
    title: "Clean room",
    date: "02/14/2022",
    done: false,
    description: "Some description",
    list_id: 2
  },
  {
    id: 5,
    title: "Help father",
    date: "02/22/2022",
    done: true,
    description: "Some description",
    list_id: 3
  }
]

function App() {
  const [selectedList, setSelectedList] = useState([]);

  const selectTodoList = (tasks, listId) => {
    const filterList = tasks.filter(task => task.id === listId)

    setSelectedList(filterList);
    console.log('test');
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
            selectedList.map(taskElement => (
              <Task key={taskElement.id} task={taskElement} />
            ))
          }
          <TaskForm />
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

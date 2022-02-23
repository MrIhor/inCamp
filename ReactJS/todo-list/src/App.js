import styles from './App.module.css';
import TodoListSidebar from './components/ListComponents/TodoListSidebar/TodoListSidebar';
import ListTask from './components/TaskComponents/ListTask/ListTask';

const listTasks = [
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
    date: null,
    done: true,
    description: "Some description"
  },
  {
    id: 3,
    title: "Walk with dog",
    date: "02/22/2022",
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
    date: "02/22/2022",
    done: true,
    description: "Some description"
  }
]

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>TodoList</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <TodoListSidebar list={listTasks} />
        </div>
        <div className={styles.content}>
          <ListTask selectedList={tasks} />
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

import styles from './App.module.css';
import TodoListSidebar from './components/ListComponents/TodoListSidebar/TodoListSidebar';

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

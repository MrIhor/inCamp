import List from '../List/List';
import styles from './TodoListSidebar.module.css';

function TodoListSidebar({ list }) {
  return (
    <div className={styles.sidebar}>
      <h2>Lists</h2>
      <ul className={styles.list}>
        {
          list.map(list => (
            <List key={list.id} title={list.title} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoListSidebar;
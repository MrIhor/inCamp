import List from '../List/List';
import styles from './TodoListSidebar.module.css';

function TodoListSidebar({ todoLists, onSelect }) {

  return (
    <div className={styles.sidebar}>
      <h2>Lists</h2>
      <ul className={styles.list}>
        {
          todoLists.map(list => (
            <List
              key={list.id}
              list={list}
              getTasksList={onSelect}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoListSidebar;
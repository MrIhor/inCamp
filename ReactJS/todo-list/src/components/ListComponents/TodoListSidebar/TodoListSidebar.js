import List from '../List/List';
import styles from './TodoListSidebar.module.css';

function TodoListSidebar({ todoLists, selectedList }) {

  return (
    <div className={styles.sidebar}>
      <h2>Lists</h2>
      <ul className={styles.list}>
        {
          todoLists.map(list => (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              selectedList={selectedList}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoListSidebar;
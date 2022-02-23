import Task from '../TaskItem/Task';
import styles from './ListTask.module.css';

function ListTask({ selectedList }) {
  return (
    <div className={styles.task_container}>
      <h2>Tasks</h2>
      <ul className={styles.tasks}>
        {
          selectedList.map(listItem => (
            <Task key={listItem.id} task={listItem} />
          ))
        }
      </ul>
    </div>
  )
}

export default ListTask;
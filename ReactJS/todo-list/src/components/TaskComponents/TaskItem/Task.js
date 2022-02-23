import styles from './Task.module.css';
import image from '../../../../src/img/arrow.png'

function Task({ task }) {
  return (
    <li className={styles.task}>
      <div className={styles.task_item}>
        <div><input type="checkbox" className={styles.checkbox} /></div>
        <h3>{task.title}</h3>
        <span>{task.date}</span>
        <div><button className={styles.delete}><span>Delete</span></button></div>
        <div><img src={image} alt="arrow" /></div>
      </div>

      <div className={styles.description}>
        <p>{task.description}</p>
      </div>
    </li>
  )
}

export default Task;
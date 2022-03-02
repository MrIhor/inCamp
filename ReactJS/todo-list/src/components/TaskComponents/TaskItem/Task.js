import { useState } from 'react'
import styles from './Task.module.css';
import image from '../../../../src/img/arrow.png'

function Task({ task }) {
  const [stateDescription, setStateDescriprition] = useState(false);

  return (
    <li className={styles.task}>
      <div className={styles.task_item}>
        <div><input type="checkbox" className={styles.checkbox} /></div>
        <h3>{task.name}</h3>
        <span>{task.date}</span>
        <div><button className={styles.delete}><span>Delete</span></button></div>
        <div><img
          className={stateDescription ? styles.reverse_arrow : styles.arrow}
          src={image}
          alt="arrow"
          onClick={() => setStateDescriprition(!stateDescription)}
        />
        </div>
      </div>

      {
        stateDescription ?
          <div className={styles.description}>
            <p>{task.description}</p>
          </div>
          :
          null
      }
    </li>
  )
}

export default Task;
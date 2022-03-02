import styles from './List.module.css';

function List({ list, getTasksList }) {
  return (
    <li className={styles.list_item}>
      <h3 onClick={() => getTasksList(list.id)}>{list.title}</h3>
    </li>
  )
}

export default List
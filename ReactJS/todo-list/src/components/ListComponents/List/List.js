import styles from './List.module.css';

function List({ list, currentList, getTasksList }) {
  return (
    <li className={styles.list_item}>
      <h3 onClick={() => getTasksList(list)}>{list.title}</h3>
    </li>
  )
}

export default List
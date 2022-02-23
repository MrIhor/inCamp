import styles from './List.module.css';

function List({ title, getTasks, id, selectedList }) {
  return (
    <li className={styles.list_item}>
      <h3 onClick={() => getTasks(selectedList, id)}>{title}</h3>
    </li>
  )
}

export default List
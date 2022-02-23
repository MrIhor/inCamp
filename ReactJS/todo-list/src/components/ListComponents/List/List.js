import styles from './List.module.css';

function List({ title }) {
  return (
    <li className={styles.list_item}>
      <h3>{title}</h3>
    </li>
  )
}

export default List
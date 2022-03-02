import styles from './TaskForm.module.css';

function TaskForm({ onSubmit }) {
  return (
    <div className={styles.form_container}>
      <form name="createTask">
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" />
        <label>Description</label>
        <input type="text" name="description" placeholder="Description" />
        <label name="taskDate">Due date</label>
        <input type="date" name="due_date" />
        <div><button onSubmit={() => onSubmit} type="submit"><span>Add Task</span></button></div>
      </form>
    </div>
  )
}

export default TaskForm;
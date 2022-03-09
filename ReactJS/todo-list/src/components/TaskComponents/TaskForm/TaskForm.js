import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onSubmit }) {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setInputs(values => ({ ...values, [inputName]: inputValue }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    setInputs({});
  }

  return (
    <div className={styles.form_container}>
      <form name="createTask" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={inputs.title || ''}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={inputs.description || ''}
          onChange={handleChange}
        />
        <label name="taskDate">Due date</label>
        <input
          type="date"
          name="due_date"
          value={inputs.due_date || ''}
          onChange={handleChange}
        />
        <div><button onClick={() => onSubmit(inputs)} type="submit"><span>Add Task</span></button></div>
      </form>
    </div>
  )
}

export default TaskForm;
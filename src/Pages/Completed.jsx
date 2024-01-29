import styles from './Completed.module.css';

function Completed({todos}) {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className={styles.center}>
    <div className={styles.Completed}>
      <h2 className={styles.heading}>Completed Todos</h2>
      {completedTodos.map(todo => (
        <div key={todo.id} className={styles.todoItem}>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Completed;

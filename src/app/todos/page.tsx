import styles from '../../styles/Todos.module.css';

type todosProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: todosProps[] = await data.json();

  return todos;
}

export default async function Todos() {
  const todos: todosProps[] = await getTodos();

  return (
    <>
      <h1>Tarefas a fazer: </h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

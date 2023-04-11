import { todosProps } from '../page';

const getTodoById = async (todoId: string) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: todosProps = await data.json();

  return todo;
};

export default async function TodoId({
  params
}: {
  params: { todoId: string };
}) {
  const todo: todosProps = await getTodoById(params.todoId);
  return (
    <>
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>{`Texto: ${todo.title}`}</h3>
    </>
  );
}

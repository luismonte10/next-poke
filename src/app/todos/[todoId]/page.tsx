export default function TodoId({ params }: { params: { todoId: string } }) {
  return <h1>Exibindo o todo: {params.todoId}</h1>;
}

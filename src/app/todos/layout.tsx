export const metadata = {
  title: 'Tarefas',
  description: 'Página de Tarefas'
};

export default function TodosLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

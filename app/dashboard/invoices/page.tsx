import { fetchTodos } from '@/app/lib/data';

export default async function Page() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map(({ id, name }: { id: string; name: string }) => (
        <p key={id}>
          {id}&nbsp;
          {name}
        </p>
      ))}
    </>
  );
}

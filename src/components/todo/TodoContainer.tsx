// import { useGetTodoQuery } from "@/redux/api/api";
import { useGetTodoQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";
// import { useAppSelector } from "@/redux/hooks";

const TodoContainer = () => {
  //*from local state
  // const { todos } = useAppSelector((state) => state.todo);
  const [priority, setPriority] = useState("all");

  //*from server api
  const { data: todos, isLoading, isError } = useGetTodoQuery(priority);

  if (isLoading || isError) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primary-gradient rounded-lg p-2 m-2 mt-6">
      <div className="flex justify-between my-2">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="space-y-2">
        {todos.map((todo: TTodoCardProps) => (
          <TodoCard key={todo._id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;

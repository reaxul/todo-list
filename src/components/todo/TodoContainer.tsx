import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div className="bg-primary-gradient rounded-lg p-2 m-2 mt-6">
      <div className="flex justify-between my-2">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div className="bg-primary-gradient rounded-lg p-2 m-2 mt-6">
      <div className="flex justify-between my-2">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="space-y-2">
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;

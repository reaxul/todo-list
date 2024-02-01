import Container from "@/components/ui/Container";
import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="font-semibold text-2xl text-center">My Todo List</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
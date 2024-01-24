import Container from "@/components/ui/Container";
import TodoContainer from "@/components/ui/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="font-semibold text-2xl text-center">This is todo list</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
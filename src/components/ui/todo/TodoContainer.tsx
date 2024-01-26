import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div className="bg-purple-200 rounded-lg p-2">
            <div><button>Add Todo</button><button>Filter</button></div>
            <div className="space-y-2">

            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            </div>
        </div>
    );
};

export default TodoContainer;
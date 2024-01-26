
const TodoCard = () => {
    return (
        <div className="flex justify-between p-2 bg-white">
        <input title="state" type="checkbox" name="" id="" />
        <p>Todo Title</p>
        <p>time</p>
        <p>description</p>
        <div className="space-x-2"><button>edit</button><button>delete</button></div>
    </div>
    );
};

export default TodoCard;
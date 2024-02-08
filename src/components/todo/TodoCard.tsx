import { Button } from "../ui/button";
import { useDeleteTodoMutation, useToggleStateMutation } from "@/redux/api/api";

export type TTodoCardProps = {
  _id: string;
  task: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

const TodoCard = ({
  _id,
  task,
  priority,
  description,
  isCompleted,
}: TTodoCardProps) => {
  const [toggleState] = useToggleStateMutation();

  const handleState = () => {
    const data = {
      _id,
      updatedTask: {
        task,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };

    toggleState(data);
  };

  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <div className="flex flex-col p-2 bg-white rounded">
      <div className="flex justify-between items-center">
        <input
          checked={isCompleted}
          onChange={handleState}
          title="state"
          type="checkbox"
          className="mr-2 h-5 w-5 border-2 border-gray-300 rounded cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-indigo-500"
        />
        <p className="flex-grow font-semibold">
          {task}{" "}
          <small
            className={`${
              priority === "high"
                ? "text-red-500"
                : priority === "medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            ({priority})
          </small>
        </p>

        {isCompleted ? (
          <p className="font-semibold text-green-500">Completed</p>
        ) : (
          <p className="font-semibold text-red-500">Pending</p>
        )}
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 flex justify-end">
        <Button className="bg-[#7e53fe] mr-2">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </Button>
        <Button onClick={() => deleteTodo(_id)} className="bg-red-600">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;

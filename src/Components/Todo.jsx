/* eslint-disable react/prop-types */
import { PenLineIcon, Trash2Icon } from "lucide-react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-[#8758ff] text-white py-3 px-4 rounded-md mb-4">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)}>
          <PenLineIcon className="text-white cursor-pointer" />
        </button>
        <button onClick={() => deleteTodo(task.id)}>
          <Trash2Icon className="text-white cursor-pointer ml-3" />
        </button>
      </div>
    </div>
  );
};

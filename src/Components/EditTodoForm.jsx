/* eslint-disable react/prop-types */
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-[#8758ff] px-4 py-2 mt-4 mb-8 w-72 text-white placeholder-white/30"
        value={value}
        placeholder="Update todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bg-[#8758ff] text-white border-none py-2 px-4 cursor-pointer">
        Update
      </button>
    </form>
  );
};

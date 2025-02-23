/* eslint-disable react/prop-types */
import { useState } from "react";


export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  return (

    <form className="TodoForm" onSubmit={(e) => {
      e.preventDefault();
      addTodo(value);
      setValue("");
    }
  }> 
    <input  type="text"
          className="outline-none bg-transparent border border-[#8758ff] px-4 py-2 mt-4 mb-8 w-72 text-white placeholder-white/30"
          value={value}
          placeholder="Add a new todo" 
          onChange={(e) => setValue(e.target.value)}/>
    <button type="submit" className="bg-[#8758ff] text-white border-none py-2 px-4 cursor-pointer" > Add </button>;
    </form>
  )
}

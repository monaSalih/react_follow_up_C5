import React, { useState } from "react";

import { TodoForm } from "./TodoForm";
export const TodoWraper = () => {
    const [todos,setTodos]=useState([])

    const addtodo=(todo)=>{
        setTodos([...todos,{banana:todo}])
        console.log(todos,"todos result");
        
    }
  return (
    <div className="">
      <h1 className="text-center">To Do List</h1>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
           <TodoForm addtodo={addtodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

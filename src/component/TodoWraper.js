import React, { useState } from "react";
import {Todo} from "./Todo";
import { TodoForm } from "./TodoForm";
export const TodoWraper = () => {
    const [todos,setTodos]=useState([])

    const addtodo=(todo)=>{
        setTodos([...todos,todo])
        console.log(todos,"todos result");
        
    }
  return (
    <div className="">
      <h1 className="text-center">To Do List</h1>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">

           <TodoForm addtodo={addtodo} />


           {
            todos.map((todo,index)=>(
                <Todo todo={todo}/>  )
            )
           }

          </div>
        </div>
      </div>
    </div>
  );
};

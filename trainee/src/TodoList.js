import axios from "axios";
import React, { useState,useEffect } from "react";
import Axios from 'axios'
import Render from './Render'


const TodoList = () => {
const [todos, setTodos] = useState()

useEffect(() => {
const getTodos = async () => {
  const todosResp = await Axios.get('http://localhost:3001/todo')
      .then((x) => {
        setTodos(x.data)
      })
}

getTodos()

}, [])




  return ( 
    <>
    {
    todos && 
    <>
    <h2>Todo</h2>
    <Render done={false} todos = {todos.filter((todo) => todo.done === false)} />
    <h2>Done</h2>
    <Render done={true} todos = {todos.filter((todo) => todo.done === true)} />
    </>
    }

    </>

   );
}
 
export default TodoList;
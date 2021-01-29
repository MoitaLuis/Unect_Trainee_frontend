import React, { useState } from "react";
import Axios from 'axios'

export default function TodoForm(props) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
      const todoReq = await Axios.post('http://localhost:3001/todo', {content: text}, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
      })
      window.location.reload();
      setText('')
    }
    catch(e){
      console.log(e)
    }
  }
  return (
<div className="NewTodo">
  <h1>uTask</h1>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      <button id='butnSbm' type="submit" value="Submit" />
    </form>
</div>
  );
}
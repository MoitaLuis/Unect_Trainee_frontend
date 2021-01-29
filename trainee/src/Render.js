import Axios from 'axios'


const  Render = ({todos, done}) => {

  const handleClick = async (todo_id) => {
    const del = await Axios.delete('http://localhost:3001/todo/' + todo_id)
    .then(() => {
      window.location.reload();
    })
  }
  
  const handleClickDone = async (todo_id) => {
    const done = await Axios.put('http://localhost:3001/todo/' + todo_id, {done: true})
    .then(() => {
      window.location.reload();
    })
  }

  return ( 
<>{
    todos && todos.map((todo) => ([
      <p key={todo._id} >{todo.content}</p>,
      <div id="container">
        <button   id="del"  onClick={() => {handleClick(todo._id)}}/>
        {
          !done && 
          <> 
              <button   id="done"  onClick={() => {handleClickDone(todo._id)}}/>
          </>
        }
      
      </div>
    ]
    ))

    }    </>
   );
}
 
export default Render;
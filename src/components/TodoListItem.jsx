import { useState } from "react"
import DeleteIcon from "./Icon/DeletIcon"
import EditIcon from "./Icon/EditIcon"


function TodoListItem  ({todo ,deletetodo,togller,editToglerHandler})  {

  const [editMode,seteditMode] = useState(false);
  const editTodoHandler = (event) =>{
    if(event.key== "Enter") {
      
      console.log(event.target.value)
      editToglerHandler(todo,event.target.value);
      seteditMode(false);

    }
  }
  return (
     <li className="relative flex items-center justify-between px-2 py-6 border-b"> 

  
{
  editMode
  ?  <div className="w-full flex items-center"> 
  <input type="text" defaultValue={todo ?. title} onChange={()=>{}} onKeyDown={editTodoHandler}  className="px-24 py-8 border border-gray-200 mx-auto rounded" />
  <DeleteIcon className="ml-2" onClick={ () =>seteditMode(false) } />
  </div>

  : ( 
  <div>
    <div>
        <input type="checkbox" checked ={ todo ?.state } onChange={()=>togller(todo)}   className="" />
        <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo ?. state ? 'line-through' : ''}`}> {todo ?. title}</p>
    </div>
    <button type="button" className="absolute right-0 flex items-center space-x-1">
        <EditIcon onClick={()=>seteditMode(true)} />
        <DeleteIcon onClick={ () => deletetodo(todo)} />
  </button>
  </div>
  )
}
</li>
  )
}

export default TodoListItem
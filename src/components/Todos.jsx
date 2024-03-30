
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function Todos () {

    const [todos , usetodos] = useState ( [
        {
            id :uuidv4(),
            title : "Cambridge 13 Test 1 Academic" , 
            state : false
        },
        {
            id :uuidv4(),
            title : "Cambridge 13 Test 2 General" , 
            state : false
        },
        {
            id :uuidv4(),
            title : "Cambridge 13 Test 3 Academic" , 
            state : true
        },

    ]);


   /* const [newtodoTitle , setnewtodoTitle] = useState("");

    const inputNewtodoChangeHandler =(event)*/



    const  deletTodoHandler = (todo) =>{

        let newTodos = todos.filter((todoItem)=>{
            return todo.id != todoItem.id;
        })

        usetodos(newTodos);
    }

    const toogllerHandler = (todo) => {
       /* console.log('tooggler', todo);
        let changetogler = todo ;
        changetogler.state = ! todo.state;
        console.log(changetogler);*/
        let newtodos = todos.map((todoItem)=>{
            if(todo.id == todoItem.id)  {

                todo.state = ! todoItem.state ;

            }
                return todoItem
        })
        usetodos(newtodos);
    }

    const edittoDoHandler = (todo,newTitleValue) => {
      
         let newtodos = todos.map((todoItem)=>{
             if(todo.id == todoItem.id)  {
 
                 todoItem.title = newTitleValue ;
 
             }
                 return todoItem
         })
         usetodos(newtodos);
     }
    /*const changeNewItemHandler = (event) => {

     /*console.log();
    }*/

    const newItemAddHandler = (event) => {

      if (event.key == "Enter") {
      console.log("New letters have entered");

      usetodos([
        ...todos,
        {
            id : uuidv4(),
            title : event.target.value ,
            state : false ,

        }
      ])
      event.target.value = '';
      }
    }


return (
    <div className="flex items-center justify-center h-screen">
    <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
        </div>
        <div className="relative">
            <input type="text" placeholder="What needs to be done today?"
            onKeyDown={newItemAddHandler}
            className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
        </div>
       <TodoList toDo={todos} todoDelet={deletTodoHandler} togller = {toogllerHandler} editToglerHandler={edittoDoHandler} />
    </div>
</div>
)
}
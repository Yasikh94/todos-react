import TodoListItem from "./TodoListItem";
import Todos from "./Todos";

export default function TodoList ({toDo , todoDelet,togller,editToglerHandler}) {
    console.log(toDo);

return (

    <ul className="list-reset">
        
            {toDo.map((todos, index) => <TodoListItem key={index} todo={todos} deletetodo={todoDelet} togller={togller} editToglerHandler={editToglerHandler}/>)}
             <TodoListItem  />
</ul>
)


}
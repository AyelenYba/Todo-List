import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {

    return (
        <div >
            <ul className='todo-list'>
                {todos.map(todo => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} />
                ))}
            </ul>
        </div>
    )
}
 
//Al pasarle todo, que es un objeto, le paso todas las propiedades que tiene ese objeto.
export default TodoList;
import React from 'react';

const Todo = ({todo, setTodos, todos}) => {

//Recordar que todo es un objeto y tiene sus propiedades definidas (ver componente Form)
/* Tanto en deleteHandler como en completeHandler voy a actualizar el estado,  
en uno voy a ir a sacando objetos y en el  otro voy a devolver todo, pero cambiarle la clase al item li */
    const deleteHandler = () => {
        //Cada todo tiene su id
        setTodos(todos.filter(item => item.id !== todo.id));
        /*Voy a devolver los que no coincidan con el id clickeado, así el 
        clickeado (el que quiero eliminar) no aparece) */
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            };
            return item;
        }));
    };

    const completedTodo = todo.completed ? 'completed' : '';

    return (
        <div className='todo'>
            <div className='todo-text'>
                <li className={completedTodo}>
                    {todo.text}
                </li>   
            </div>        
            <div className='buttons'>
                <button className='complete-btn' onClick={completeHandler}><i className="fas fa-check-square"></i></button>
                <button className='trash-btn' onClick={deleteHandler}><i className="fas fa-trash"></i></button> 
            </div>   
        </div>

    )
}

export default Todo;

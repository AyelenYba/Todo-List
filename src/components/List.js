import React, {useState, useEffect} from 'react';
import Form from './Form';
import TodoList from './TodoList';


const List = ({title}) => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]); 

    useEffect(() => {
        
        const getTodos = () => {
            if (localStorage.getItem('todos') === null) {
                localStorage.setItem('todos', JSON.stringify([]));    
            } else {
                let savedTodos = JSON.parse(localStorage.getItem('todos'));
                setTodos(savedTodos);
            };
        };

        getTodos();
    }, []); //When the app starts

    useEffect(() => {
        //Save to Local everytime I create a new todo or delete it. 
        const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }; 
        saveTodos();
    }, [todos]); //Runs at initial render and after every rerender if data has changed.



    /*LocalStorage only allows to save a string, because of that I use JSON.stringify('miObject') to transform the
    object into a string. setItem is the function that allows to save the object in the local storage.*/



    return (
        <div className='list'>
            <h1>{title}</h1>
            <div className='form-todos-container'>
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos}/>                    
            </div>
        </div>

    )
}

export default List;
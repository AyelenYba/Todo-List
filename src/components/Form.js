import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => { //función recibe un evento desde el input, cuando cambien sus valores y actualiza el estado
        setInputText(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
        setInputText(''); //Para que se reinicie el valor a vacío cada vez que agrego un todo.
    };
/*Hago un update de todos, creando un objeto por cada todo que genero, 
y con "...todos" indico que si ya tengo otros todo en el array, los deje*/

    return (
        <form>
            <input placeholder='New task...' value={inputText} onChange={inputTextHandler} type='text'/>
            <button onClick={onSubmitHandler} type='submit'><i className="fas fa-plus"></i></button> 
        </form>
    )
}

export default Form;
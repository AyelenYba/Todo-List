import React from 'react';
import List from './components/List';
import './css/App.css';
import './css/List.css';

function App () {

    return (
        <div className='main-container'>
            <header>
                <h1>TO DO LIST</h1>
            </header>
            <div className='lists-container'>
                <List title='List' />
            </div>
        </div>
    )
}


export default App;
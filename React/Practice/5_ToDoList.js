import React, { useState } from 'react';

export function App(props) {

    const [todolist, setTodolist] = useState([]);
    const [text, setText] = useState('');

    const addinList = () => {
        if (text) {
            setTodolist([...todolist, { text, completed: false }]);
            setText('');
        }
    }

    const togletodo = (index) => {
        const newtodo = [...todolist];
        newtodo[index].completed = !newtodo[index].completed;
        setTodolist(newtodo);
    }

    const toggleRemove = (index) => {
        const newtodo = [...todolist];
        newtodo.splice(index, 1);
        setTodolist(newtodo);
    }

    return (
        <div className='App'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addinList}>Add In List</button>
            <ul>
                {todolist.map((list, index) =>
                    <li key={index}>
                        {list.text} ---  {list.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => togletodo(index)}>Toggle</button>
                        <button onClick={() => toggleRemove(index)}>Remove</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
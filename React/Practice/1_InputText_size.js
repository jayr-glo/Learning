import React, { useState } from 'react';

export function App(props) {

    const [text, setText] = useState('');

    function typetext() {
        console.log(text);
        console.log(text.length);
    }

    return (
        <div className='App'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={typetext}>Submit</button>
        </div>
    );
}

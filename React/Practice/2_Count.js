import React, { useState } from 'react';

export function App(props) {

    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

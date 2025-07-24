import React, { useState } from 'react';

export function App(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decryment = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='App'>
            <span>{count}</span>
            <button onClick={increment}>Increase</button>
            <button onClick={decryment}>Decrease</button>
        </div>
    );
}
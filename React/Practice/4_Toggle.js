import React, { useState } from 'react';

export function App(props) {

    const [on, setOn] = useState(false);

    return (
        <div className='App'>
            <button onClick={() => setOn(!on)}>{!on ? 'OFF' : 'ON'}</button>
        </div>
    );
}
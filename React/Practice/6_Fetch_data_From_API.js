import React, { useState, useEffect } from 'react';

export function App(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // https://jsonplaceholder.typicode.com/users

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })

    }, []);

    if (loading) return <p>Loading...</p>;


    return (
        <div className='App'>
            <ul>
                {data.map((list, index) =>
                    <li key={index}>
                        {list.name} ---  {list.email}
                    </li>
                )}
            </ul>
        </div>
    );
}
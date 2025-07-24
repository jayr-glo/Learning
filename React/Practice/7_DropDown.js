import React from 'react';

const DropdownMenu = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
            {isOpen &&
                <ul>
                    {props.items.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            }
        </div>
    );
}


export function App(props) {

    const items = ['Profile', 'Settings', 'Logout'];
    return <DropdownMenu items={items} />;
}



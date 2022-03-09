import React from 'react';

class List extends React.Component {
    render() {
        const { list , onAdd} = this.props;
        return (
            <ul>
                {list.map((items, index) => (
                <li key={index}> {items} </li>
            
                ))}
               <button onClick={onAdd}>+</button>
            </ul>
        );
    }
}

export default List;
import React from 'react';

const Choice = ({items}) => {
    let randIdx = Math.floor(Math.random() * items.length);
    return (
        <div>
            <p>{items[randIdx]}</p>
        </div>
    )
}

const Remove = ({items, item}) => {
    let itemIdx;
    for(let i = 0; i <= items.length; i++) {
        if (items[i] === item) {
            itemIdx = i;
        } else {
            itemIdx = -1;
        }
    }

    return (
        <div>
            <p>{itemIdx === -1 ? 'undefined' : items[itemIdx]}</p>
        </div>
    )
}



export { Choice, remove }
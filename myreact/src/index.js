import React from 'react';
import ReactDOM from 'react-dom';

let number = 5;

setInterval(() => {
    const element = <h1>Hello Google {(number += 1)}</h1>;
    ReactDOM.render(element, document.getElementById('root'));
}, 1000);

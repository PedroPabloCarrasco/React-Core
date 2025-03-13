import React from 'react';
import ReactDOM from 'react-dom';
const name = 'Mundo';
let App = <h1>Hola {name}</h1>


const user1 = {
    name: 'Juan',
    age: 25
};



App = <h1>Hola {user1.name} Años</h1>
ReactDOM.render(App, root);

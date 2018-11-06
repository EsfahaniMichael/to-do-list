import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import List from './list';

const App = () => (
    <div>
        <div className="container">
            <h1 className="center">To Do List</h1>
            <List/>
        </div>
    </div>
);

export default App;

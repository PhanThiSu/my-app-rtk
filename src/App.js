import React from 'react';
import Navigation from './components/Navigation';
import Todos from './components/Todos'
import './App.css';

const App = () => {
    return(
        <div className = 'App'>
            <Navigation />
            <Todos />
        </div>
    )
}

export default App;

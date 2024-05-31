
import './App.css'
import Tanaman from './card/tanaman';
import React from 'react';
import  MyNavbar  from './components/navbar.jsx';

function App() {
    return (
        <div className="App">
        <MyNavbar />
        <header className="App-header">
            <h1>React Vite 1</h1>
        </header>
        <Tanaman />
        </div>
    )
}

export default App

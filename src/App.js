import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';

function App() {
    return (
        <>
            <NoteState>
                <Router>
                    <h2>rrr</h2>
                    <Navbar />
                    <h1>rrr</h1>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </Router>
            </NoteState>

        </>
    );

}
export default App;

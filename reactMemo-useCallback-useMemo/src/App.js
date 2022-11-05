import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('APP RUNNING');

    const toggleParagraphHandler = () => {
        setShowParagraph((prevState) => !prevState);
    };

    /**
     Onclicking the button, we can see the DOM changes on <p>, when the state is true  and <div> changes when the state is false.
     *
     */

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {showParagraph && <p>This is new!</p>}
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;

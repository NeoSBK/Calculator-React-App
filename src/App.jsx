import React,{ useState } from 'react';
import Display from './components/Display.jsx';
import ButtonPanel from "./components/ButtonPanel.jsx";
import './App.css'

const App = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (label) => {
        if( label === 'C'){
            setInput('');
        }
        else if(label === '←'){
            setInput( prev => prev.slice(0, -1) );
        }
        else if(label === '='){
            try{
                const result = eval(input);
                setInput(result.toString());
            }
            catch(e){
                setInput('Error ; ' + e.message);
            }
        }
        else{
            setInput( prev => prev + label );
        }
    };

    return (
        <div className="calculator">
            <Display value={input || 0} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
};

export default App

import { useState } from 'react';
import './App.css';

function App() {
  const [display,setDisplay] = useState('0')
  const buttons = document.querySelectorAll("button")
  
  const handleNum = (event) =>{
    const number=event.target.textContent;
    if(display==="0"){
      setDisplay(number);
    }else{
      setDisplay(display+number);
    }
  }

  const handleClear=(event)=>{
    setDisplay('0');
  }

  const handleOperators = (event) =>{
    const operators= event.target.textContent;

    setDisplay(display + ' ' + operators + ' ');
  }

  const handleEqual = (event) =>{
     setDisplay(eval(display));
  }

  const handleDecimal = (event) =>{
    const array = display.split(' ');
    const end =array[array.length-1];

    if(!end.includes('.') && (typeof parseInt(end)==='number')){
      setDisplay(display+ ".");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => { 
      button.classList.add("button-push");
    });
  
    button.addEventListener("mouseup", () => { 
      button.classList.remove("button-push");
    });
   
    button.addEventListener("mouseleave", () => {
      button.classList.remove("button-push");
    });
  });

  return (
    <div className="App">
      <div className='calculator'> 
        <div id="display" className='row'>
          {display}
        </div>
        <button id="clear" className='row' onClick={handleClear}>AC</button>
        <button id="divide" onClick={handleOperators}>/</button>
        <button id="multiply" onClick={handleOperators}>*</button>

        <button id="seven" onClick={handleNum}>7</button>
        <button id="eight"  onClick={handleNum}>8</button>
        <button id="nine" onClick={handleNum}>9</button>
        <button id="subtract" onClick={handleOperators}>-</button>

        <button id="four" onClick={handleNum}>4</button>
        <button id="five" onClick={handleNum}>5</button>
        <button id="six" onClick={handleNum}>6</button>
        <button id="add" onClick={handleOperators}>+</button>

        <button id="one" onClick={handleNum}>1</button>
        <button id="two" onClick={handleNum}>2</button>
        <button id="three" onClick={handleNum}>3</button>
        <button id="equals" onClick={handleEqual}>=</button>

        <button id="decimal" onClick={handleDecimal}>.</button>
        <button id="zero" onClick={handleNum}>0</button> 
      </div>
    </div>
  );
}

export default App;

 import './App.css';
import CalcOperation from './Components/CalcOperation';
import  CalcResult from './Components/CalcResult'
import Buttons from './Components/Buttons';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');

// disply the value of the buttton clicked on the operation bar
  const handleClick = (e) => {
    let value = e.target.innerText;
    setOperation(operation + value)
  }

  // Solve the mathematical expression once the equal sign button is clicked
  const solve = () => {
    let outcome = evaluate(operation);
    return setResult(outcome);
  }

  // Function to Clear the screen 
  const clear = () => {
    setOperation('')
    setResult('0')
  }

  // delete
  // const del = () => {
  //   let delVal = operation.length-1
  //   setOperation(operation[])
  // }


  // Change X (multiplication sign) to * 
  const changeOperator = (e) => {
    switch (e.target.innerText) {
        case 'x':
            setOperation(operation+'*');
    }
}

  return (
    <div className="container">
        <div className="calc-body">
          <div className="calc-screen">
            <CalcOperation operation={operation}/>
            <CalcResult result={result}/>
          </div>
          <Buttons onClick={handleClick} solve={solve}  clear={clear}
          changeOperator={changeOperator}
          />
        </div>
    </div>
  );
}

export default App;

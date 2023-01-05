import React from 'react'

const Buttons = ({ onClick, solve, clear, del, changeOperator }) => {
    
    return (
        <div className="buttons">
            <div className="calc-button-row">
                <div className="button c" onClick={clear}>C</div>
                <div className="button l" onClick={onClick}>/</div>
                <div className="button l" onClick={changeOperator}>x</div>
                <div className="button" onClick={del}>del</div>

        </div>
        <div className="calc-button-row">
            <div className="button" onClick={onClick}>7</div>
            <div className="button" onClick={onClick}>8</div>
            <div className="button" onClick={onClick}>9</div>
            <div className="button l" onClick={onClick}>-</div>

        </div>
        <div className="calc-button-row">
            <div className="button" onClick={onClick}>4</div>
            <div className="button" onClick={onClick}>5</div>
            <div className="button" onClick={onClick}>6</div>
            <div className="button l" onClick={onClick}>+</div>

        </div>
        <div className="calc-button-row">
            <div className="button" onClick={onClick}>1</div>
            <div className="button" onClick={onClick}>2</div>
            <div className="button" onClick={onClick}>3</div>
        </div>
        <div className="calc-button-row">
            <div className="button l" onClick={onClick}>%</div>
            <div className="button" onClick={onClick}>0</div>
            <div className="button" onClick={onClick}>.</div>
            <div className="button l" onClick={solve}>=</div>
        </div>
        </div >
    )
}

export default Buttons


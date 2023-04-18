import React, { useState } from "react";
import './Calculator.css'
function Calculator() {
    const [value, setValue] = useState("");
    const [operator, setOperator] = useState("");
    const [previousValue, setPreviousValue] = useState("");

    const handleClick = (event) => {
        const inputValue = event.target.value;

        if (!isNaN(inputValue)) {
            setValue(value + inputValue);
        } else if (inputValue === ".") {
            if (value.indexOf(".") === -1) {
                setValue(value + ".");
            }
        } else if (inputValue === "AC") {
            setValue("");
            setOperator("");
            setPreviousValue("");
        } else if (inputValue === "C") {
            setValue("");
        } else if (inputValue === "+/-") {
            setValue(value * -1);
        } else if (inputValue === "%") {
            setValue(value / 100);
        } else if (inputValue === "+") {
            setOperator("+");
            setPreviousValue(value);
            setValue("");
        } else if (inputValue === "-") {
            setOperator("-");
            setPreviousValue(value);
            setValue("");
        } else if (inputValue === "*") {
            setOperator("*");
            setPreviousValue(value);
            setValue("");
        } else if (inputValue === "/") {
            setOperator("/");
            setPreviousValue(value);
            setValue("");
        } else if (inputValue === "=") {
            const currentResult = parseFloat(value);
            const previousResult = parseFloat(previousValue);

            switch (operator) {
                case "+":
                    setValue(previousResult + currentResult);
                    break;
                case "-":
                    setValue(previousResult - currentResult);
                    break;
                case "*":
                    setValue(previousResult * currentResult);
                    break;
                case "/":
                    setValue(previousResult / currentResult);
                    break;
                default:
                    setValue("");
            }
        }
    };

    return (
        <div className="calculator">
            <input className="input" type="text" value={value} disabled />
            <div className="button-row">
                <button value="AC" onClick={handleClick}>
                    AC
                </button>
                <button value="+/-" onClick={handleClick}>
                    +/-
                </button>
                <button value="/" onClick={handleClick}>
                    /
                </button>
            </div>
            <div className="button-row">
                <button value="7" onClick={handleClick}>
                    7
                </button>
                <button value="8" onClick={handleClick}>
                    8
                </button>
                <button value="9" onClick={handleClick}>
                    9
                </button>
                <button value="*" onClick={handleClick}>
                    *
                </button>
            </div>
            <div className="button-row">
                <button value="4" onClick={handleClick}>
                    4
                </button>
                <button value="5" onClick={handleClick}>
                    5
                </button>
                <button value="6" onClick={handleClick}>
                    6
                </button>
                <button value="-" onClick={handleClick}>
                    -
                </button>
            </div>
            <div className="button-row">
                <button value="1" onClick={handleClick}>
                    1
                </button>
                <button value="2" onClick={handleClick}>
                    2
                </button>
                <button value="3" onClick={handleClick}>
                    3</button>
                <button value="+" onClick={handleClick}>
                    +
                </button>
            </div>
            <div className="button-row">
                <button value="0" onClick={handleClick}>
                    0
                </button>
                <button value="." onClick={handleClick}>
                    .
                </button>
                <button value="C" onClick={handleClick}>
                    C
                </button>
                <button value="=" onClick={handleClick}>
                    =
                </button>
            </div>
        </div>
    );
}
export default Calculator;

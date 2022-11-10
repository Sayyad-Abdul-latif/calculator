import "./App.css";
import { useState } from "react";
export default function App() {
  const [exp, setexp] = useState("");
  const backspace = () => {
    try {
      setexp(exp.slice(0, -1));
    } catch (error) {
      setexp(" ");
    }
  };
  const calculate = () => {
    try {
      setexp(eval(exp));
    } catch (error) {
      setexp("");
    }
  };

  const checkenter = (e) => {
    if (e.keyCode === 13) {
      calculate();
    }
  };
  return (
    <div className="main">
      <h1>CALCULATOR</h1>
      <div className="cal-rows">
        <input
          onKeyDown={checkenter}
          type="text"
          value={exp}
          onChange={(e) => setexp(e.target.value)}
        ></input>
        <div className="row-1">
          <button
            value="1"
            onClick={(e) => {
              setexp(exp + e.target.value);
            }}
          >
            1
          </button>
          <button value="2" onClick={(e) => setexp(exp + e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setexp(exp + e.target.value)}>
            3
          </button>
          <button value="n" onClick={(e) => backspace()}>
            ce
          </button>
        </div>
        <div className="row-2">
          <button value="4" onClick={(e) => setexp(exp + e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => setexp(exp + e.target.value)}>
            5
          </button>
          <button value="6" onClick={(e) => setexp(exp + e.target.value)}>
            6
          </button>
          <button value="+" onClick={(e) => setexp(exp + e.target.value)}>
            +
          </button>
        </div>
        <div className="row-3">
          <button value="7" onClick={(e) => setexp(exp + e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => setexp(exp + e.target.value)}>
            8
          </button>
          <button value="9" onClick={(e) => setexp(exp + e.target.value)}>
            9
          </button>
          <button value="*" onClick={(e) => setexp(exp + e.target.value)}>
            X
          </button>
        </div>
        <div className="row-4">
          <button value="." onClick={(e) => setexp(exp + e.target.value)}>
            .
          </button>
          <button value="0" onClick={(e) => setexp(exp + e.target.value)}>
            0
          </button>
          <button value="=" onClick={() => calculate()}>
            =
          </button>
          <button value="/" onClick={(e) => setexp(exp + e.target.value)}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

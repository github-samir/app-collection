import React, { useState } from "react";
import "./calc.css";

function Calculator() {
  const [state, setState] = useState({ prev: "", cur: "", operator: "" });

  const updateNumber = (e) => {
    if (e.target.innerText === "." && state.cur.includes(".")) return;
    setState({ ...state, cur: state.cur + e.target.innerText });
  };

  const operation = (e) => {
    if (state.cur === "") return;
    if (state.prev !== "") {
      let res = calculate();
      setState({ prev: res, cur: "", operator: e.target.innerText });
    } else setState({ prev: state.cur, cur: "", operator: e.target.innerText });
  };

  const calculate = () => {
    let compute;
    switch (state.operator) {
      case "+":
        compute = parseFloat(state.prev) + parseFloat(state.cur);
        break;
      case "-":
        compute = parseFloat(state.prev) - parseFloat(state.cur);
        break;
      case "*":
        compute = parseFloat(state.prev) * parseFloat(state.cur);
        break;
      case "/":
        compute = parseFloat(state.prev) / parseFloat(state.cur);
        break;
      default:
        return;
    }

    return compute;
  };

  const showResult = () => {
    let res = calculate();
    if (isNaN(res)) {
      return;
    } else {
      setState({
        prev: "",
        cur: res,
        operator: "",
      });
    }
  };

  const del = () => {
    if (state.cur) {
      let text = state.cur.toString().slice(0, state.cur.length - 1);
      setState({ ...state, cur: text });
    }
  };
  const clear = () => {
    setState({ prev: "", cur: "", operator: "" });
  };

  return (
    <div className="center-div-container">
      <div className="num-list">
        {state.prev} {state.operator}
      </div>
      <div className="num">{state.cur ? state.cur : "0"}</div>
      <div className="num-div">
        <button className="clear" onClick={clear}>
          AC
        </button>
        <button className="del" onClick={del}>
          DEL
        </button>
        <button className="operator" onClick={operation}>
          /
        </button>
        <button className="num-data" onClick={updateNumber}>
          7
        </button>
        <button className="num-data" onClick={updateNumber}>
          8
        </button>
        <button className="num-data" onClick={updateNumber}>
          9
        </button>
        <button className="operator" onClick={operation}>
          *
        </button>
        <button className="num-data" onClick={updateNumber}>
          4
        </button>
        <button className="num-data" onClick={updateNumber}>
          5
        </button>
        <button className="num-data" onClick={updateNumber}>
          6
        </button>
        <button className="operator" onClick={operation}>
          +
        </button>
        <button className="num-data" onClick={updateNumber}>
          1
        </button>
        <button className="num-data" onClick={updateNumber}>
          2
        </button>
        <button className="num-data" onClick={updateNumber}>
          3
        </button>
        <button className="operator" onClick={operation}>
          -
        </button>
        <button className="num-data" onClick={updateNumber}>
          .
        </button>
        <button className="num-data" onClick={updateNumber}>
          0
        </button>
        <button className="equal" onClick={showResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;

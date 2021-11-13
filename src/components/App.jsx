import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inNum, deNum } from "../action/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(inNum())}>-</button>
      <button onClick={() => dispatch(deNum())}>+</button>
    </div>
  );
}

export default App;

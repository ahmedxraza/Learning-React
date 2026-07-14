import React, { useReducer } from "react";

const initialState = {
  temp: 72,
  mode: "OFF",
  isFanOn: false,
};

function reducer(state, action) {
  if (state.mode === "COOL" || state.mode === "HEAT") {
    if (action.type === "INCREMENT") {
      return { ...state, temp: state.temp + action.payload };
    } else if (action.type === "DECREMENT") {
      return { ...state, temp: state.temp - action.payload };
    } else if (action.type === "TOGGLE_FAN") {
      return { ...state, isFanOn: !state.isFanOn };
    }
    // return { ...state };
  }

  if (action.type === "SET_AS_COOL") {
    return { ...state, mode: "COOL" };
  }
  if (action.type === "SET_AS_HEAT") {
    return { ...state, mode: "HEAT" };
  }
  if (action.type === "TURN_OFF") {
    return { ...state, isFanOn: !state.isFanOn, mode: "OFF" };
  } else {
    return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>TEMP: {state.mode === "OFF" ? "" : state.temp}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 1 });
        }}
      >
        -
      </button>
      <p>CURRENT MODE: {state.mode}</p>
      <p>SET MODE</p>
      <button
        onClick={() => {
          dispatch({ type: "SET_AS_COOL" });
        }}
      >
        COOL
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SET_AS_HEAT" });
        }}
      >
        HEAT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "TURN_OFF" });
        }}
      >
        OFF
      </button>
      <br /> <br />
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_FAN" });
        }}
      >
        FAN: {state.isFanOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default App;

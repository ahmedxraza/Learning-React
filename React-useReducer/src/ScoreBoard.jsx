import React, { useReducer } from "react";

const initialState = {
  A_SCORE: 0,
  B_SCORE: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "A_PLUS":
      return { ...state, A_SCORE: state.A_SCORE + 1 };

    case "B_PLUS":
      return { ...state, B_SCORE: state.B_SCORE + 1 };

    case "A_MINUS":
      if (state.A_SCORE === 0) {
        return state;
      } else {
        return { ...state, A_SCORE: state.A_SCORE - 1 };
      }

    case "B_MINUS":
      if (state.B_SCORE === 0) {
        return state;
      } else {
        return { ...state, B_SCORE: state.B_SCORE - 1 };
      }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Score Board</h1> <hr /> <br />
      <p>TEAM A: {state.A_SCORE} </p> <br />
      <p>TEAM B: {state.B_SCORE} </p> <br />
      <button
        onClick={() => {
          dispatch({ type: "A_PLUS" });
        }}
      >
        A + 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "A_MINUS" });
        }}
      >
        A - 1
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "B_PLUS" });
        }}
      >
        B + 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "B_MINUS" });
        }}
      >
        B - 1
      </button>{" "}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default App;

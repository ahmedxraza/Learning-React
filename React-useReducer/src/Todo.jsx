import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item, index) => {
          return index !== action.payload;
        }),
      };

    case "TASK_COMPLETE/UNDO":
      return {
        ...state,
        todos: state.todos.map((i, index) => {
          if (index === action.payload) {
            return { ...i, completed: !i.completed };
          }
          return i;
        }),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text !== "") {
            dispatch({ type: "ADD_TODO", payload: text });
            setText("");
          }
        }}
      >
        ADD
      </button>

      {state.todos.map((i, index) => {
        // console.log(i.text);
        // console.log(i.completed);

        return (
          <div key={index}>
            <p>{i.text}</p>
            <button
              onClick={() => {
                dispatch({ type: "TASK_COMPLETE/UNDO", payload: index });
              }}
            >
              {i.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "DELETE_TODO", payload: index });
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

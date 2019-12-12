import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { initialState, reducer } from "./reducers/reducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <TodoList state={state} dispatch={dispatch}/>
        <Form state={state} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;

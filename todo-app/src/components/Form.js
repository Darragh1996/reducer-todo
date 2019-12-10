import React, { useReducer } from "react";
// import { initialState, reducer } from "../reducers/reducer";

export default function Form(props) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const onValueChange = e => {
    props.dispatch({
      type: "INPUT_CHANGE",
      payload: e.target.value
    });
  };
  const onFormSubmit = event => {
    console.log(props.state.todoList);
    event.preventDefault();
    props.dispatch({
      type: "SUBMIT",
      payload: {
        newId: props.state.todoList.length + 1,
        task: props.state.todoValue
      }
    });
    props.dispatch({ type: "RESET" });
  };

  const clearCompleted = (event) => {
    event.stopPropagation();
    props.dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Task:
        <input
          type="text"
          name="name"
          value={props.state.todoValue}
          onChange={onValueChange}
        />
      </label>
      <input type="submit" />
      <button onClick={(event) => clearCompleted(event)}>Clear completed</button>
    </form>

  );
}

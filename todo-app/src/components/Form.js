import React, { useReducer } from "react";
// import { initialState, reducer } from "../reducers/reducer";

export default function Form(props) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const onValueChange = e => {
    props.dispatch({
      type: 'INPUT_CHANGE',
      payload: e.target.value
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    props.dispatch({ type: 'SUBMIT' });
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
    </form>
  );
}

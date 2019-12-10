import React, { useReducer } from "react";
import { initialState, reducer, MARK_TODO } from "../reducers/reducer";

export default function TodoList(props) {
  

  const [state, dispatch] = useReducer(reducer, initialState);

  const markTodo = (id, completed) => event =>
    dispatch({
      type: MARK_TODO,
      payload: { id, completed }
    });

  return (
    <div className="component">
      {state.todoList.map(todo => (
        <div key={todo.id} style={{ color: !todo.completed ? "red" : "green" }}>
          {todo.name}
          <button onClick={markTodo(todo.id, true)}>Mark complete</button>
          <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
        </div>
      ))}
    </div>
  );
}

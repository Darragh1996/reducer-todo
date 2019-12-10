import React, { useReducer } from "react";
// import { initialState, reducer } from "../reducers/reducer";

export default function TodoList(props) {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  const markTodo = (id, completed) => event =>
    props.dispatch({
      type: "MARK_TODO",
      payload: { id, completed }
    });

  console.log(props.state.todoList);

  return (
    <div className="component">
      {props.state.todoList.map(todo => (
        <div
          key={todo.id}
          style={{
            color: !todo.completed ? "red" : "green",
            textDecorationLine: todo.completed ? "line-through" : ""
          }}
        >
          {todo.name}
          <button onClick={markTodo(todo.id, true)}>Mark complete</button>
          <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
        </div>
      ))}
    </div>
  );
}

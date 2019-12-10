const todoList = [
  { id: "1", name: "sweeping", completed: false },
  { id: "2", name: "mopping", completed: false },
  { id: "3", name: "washing dishes", completed: false }
];

export const initialState = {
  todoList,
  todoValue: ""
  // etc
};

// const MARK_TODO = 'MARK_TODO'; // we will use the same to "complete" and "uncomplete"
// // etc

export const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_TODO":
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: action.payload.completed };
          }
          return todo;
        })
      };
    case "INPUT_CHANGE":
      console.log(state.todoValue);
      return {
        ...state,
        todoValue: action.payload
      };
    case "SUBMIT":
      console.log("i was clicked");
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: 4, name: "anything", completed: false }
        ]
      };
    // other cases etc
    default:
      return state;
  }
};

const initialState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload]; // para agregar el nuevo todo
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar Leche",
  done: false,
};

const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);

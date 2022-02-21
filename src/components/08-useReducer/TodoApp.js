import React, { useReducer } from "react";

import "./style.css";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1>Todo App ( {todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center ">
                  {index + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr></hr>

          <form>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-1 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

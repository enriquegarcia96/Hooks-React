import React, { useEffect, useReducer } from "react";

import "./style.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  /**
   * Lo que sea que retorne el init es lo que hara el initialState
   */
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // si los todos cambian, significa que tiene que grabar en el localStorage

  //Borra una tarea
  const handleDelete = (todoId) => {
    // crear la accion
    const action = {
      type: "delete",
      payload: todoId,
    };

    // hacer distpatch
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ( {todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p
                  onClick={() => handleToggle(todo.id)}
                  className={`${todo.done && "complete"}`} // para poner la palabra tachada
                >
                  {index + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger"
                  type="button"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr></hr>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />

            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

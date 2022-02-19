import React, { useEffect, useState } from "react";

import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;


  // solo para cuando cambia el estado de un un state en la aplicacion

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState Cambio");
  }, [formState]);


  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          placeholder="tu nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          autoComplete="off"
          placeholder="email@gmail.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>


      { (name === '123') && <Message /> }



    </>
  );
};

export default SimpleForm;

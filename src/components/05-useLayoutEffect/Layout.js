import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { usefetch } from "../../hooks/usefetch";

import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = usefetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});

  const parafo = useRef();

  /**
   * para saber cuando cambia de tamaño el elemento
   */
  useLayoutEffect(() => {
    setBoxSize(parafo.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout effect</h1>
      <hr></hr>

      <blockquote className="blockquote text-right">
        <p ref={parafo} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        siguiente quote
      </button>
    </div>
  );
};

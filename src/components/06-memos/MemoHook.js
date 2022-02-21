import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "../02-useEffect/effect.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  


  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Memorize: <small>{counter}</small>
      </h3>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

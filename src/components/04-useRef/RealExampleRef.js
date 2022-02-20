import React, { useState } from "react";
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

import "../02-useEffect/effect.css";

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr></hr>

      { show &&
       <MultipleCustomHook />}

       <button className="btn btn-primary my-5" onClick={() => setShow(!show) } >
           show/hide
       </button>

      

    </div>
  );
};

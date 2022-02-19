import React from "react";
import {useCounter} from "../../hooks/useCounter";
import { usefetch } from "../../hooks/usefetch";

import "../02-useEffect/effect.css";

export const MultipleCustomHook = () => {

  const {counter, increment}  = useCounter(1)
  const { loading, data } = usefetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  console.log(data)
  const {author, quote} = !!data && data[0];
  

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment} >
        siguiente quote
      </button>
    </div>
  );
};

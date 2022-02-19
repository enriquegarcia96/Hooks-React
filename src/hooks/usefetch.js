import { useEffect, useState } from "react";

export const usefetch = (url) => {
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    setState({data: null, loading: false, error: null})

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return state;

};

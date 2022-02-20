import { useEffect, useRef, useState } from "react";

export const usefetch = (url) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMounted = useRef(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setState({ data: null, loading: false, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("set State no se llamo");
        }
      });
  }, [url]);

  return state;
};

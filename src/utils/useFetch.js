// import hooks for state and side effects
import { useState, useEffect } from "react";

// custom hook to fetch data from api
export default function useFetch(url) {
  // state to store fetched data
  const [data, setData] = useState([]);

  // state to store error message
  const [error, setError] = useState(null);

  // run effect when url changes
  useEffect(() => {
    // fetch data from given url
    fetch(url)
      // convert response to json
      .then(res => res.json())
      // set data to state
      .then(result => setData(result.products || result))
      // set error if fetch fails
      .catch(() => setError("Failed to fetch data"));
  }, [url]);

  // return data and error
  return { data, error };
}

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => {
        if (response.status === 200) return response.json();
        else {
          setError(`Error status: ${response.status}`);
          setLoading(false);
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(<p>Failed to fetch data</p>);
      });
  }, [url]);
  return [data, loading, error];
}
export default useFetch;

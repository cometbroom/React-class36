import { useEffect, useState } from "react";

function useMultiFetch(urls) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    //Nested all promise for response and data.
    Promise.all(urls.map((url) => fetch(url)))
      .then((allResponses) => {
        Promise.all(
          allResponses.map((response) => {
            return response.json();
          })
        ).then((allData) => {
          setData(allData);
        });
      })
      .catch((error) => {
        setError(<p>Failed to fetch data</p>);
      })
      .finally(() => setLoading(false));
  }, [urls]);
  return [data, loading, error];
}

export default useMultiFetch;

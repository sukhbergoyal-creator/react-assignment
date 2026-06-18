import { useEffect, useState } from "react";

function useFetch(fetchFn) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const result = await fetchFn();

        setData(result);
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
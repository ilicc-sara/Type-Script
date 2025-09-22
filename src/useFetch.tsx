import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let jsonData = await response.json();

      setData(jsonData);
    }

    fetchData();
  }, [url]);

  return data;
}

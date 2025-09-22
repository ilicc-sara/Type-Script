import { useState, useEffect } from "react";

export function useFetch<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);

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

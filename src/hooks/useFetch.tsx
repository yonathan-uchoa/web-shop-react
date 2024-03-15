import { useEffect, useRef, useState } from "react";

const isObjectEqual = (objA: string, objB: string) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url: string, options: any) => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [shouldLoad, setShouldLoad] = useState<any>(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        });
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
          setResult(false);
        }
        console.log("MY ERROR:", e.message);
      }
    };

    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

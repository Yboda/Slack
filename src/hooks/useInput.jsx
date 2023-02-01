import { useCallback, useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => setValue(initialValue), []);
  return [value, onChange, reset, setValue];
}

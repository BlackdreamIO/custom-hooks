import { useState } from "react";

const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);

  const toggle = () => setState((prevState) => !prevState);

  const customToggle = () => setState(value);

  return [state, toggle, customToggle];
};

export default useToggle;

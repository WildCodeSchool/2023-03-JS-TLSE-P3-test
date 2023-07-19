/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Counter({ setQuery }) {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button
        type="button"
        onClick={() => {
          setCount((oldCount) => oldCount + 1);
          setQuery("hello");
        }}
      >
        count is: {count}
      </button>
    </p>
  );
}

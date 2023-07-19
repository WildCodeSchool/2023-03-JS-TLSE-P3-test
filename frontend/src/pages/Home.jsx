import { useState, useEffect } from "react";
import axios from "axios";
import Counter from "../components/Counter";
import logo from "../assets/logo.svg";

export default function Home() {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/gifs?q=${query}`)
      .then((response) => {
        setData(response.data);
        console.info("data: ", response.data.data);
        console.info("query: ", query);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  console.info(data);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React !</p>

      <Counter setQuery={setQuery} />

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}

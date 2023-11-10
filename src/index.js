import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "../src/css/main.css";
import App from "./components/App";
import Preloader from "./components/Preloader";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <React.StrictMode>{isLoading ? <Preloader /> : <App />}</React.StrictMode>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));

reportWebVitals();

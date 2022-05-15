import React from "react";
import "./App.scss";
import { About, Footer } from "./components";

function App(props) {
  return (
    <div>
      <About />
      <Footer />
    </div>
  );
}

App.propTypes = {};

export default App;

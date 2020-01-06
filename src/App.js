import React from "react";
import Header from "./components/Header";
import Request from "./components/Request";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Request />
      </main>
    </div>
  );
}

export default App;

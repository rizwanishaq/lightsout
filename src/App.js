import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <h3>
        Source: Udemy course (
        <a href="https://www.udemy.com/course/modern-react-bootcamp">
          https://www.udemy.com/course/modern-react-bootcamp
        </a>
        )
        <hr />
        <h4>
          Changed everything from class component to functional components
        </h4>
      </h3>

      <div className="App">
        <Board />
      </div>
    </div>
  );
}

export default App;

import React from "react";

import ReactDOM from "react-dom";

const getbuttonText = () => "click on me!";

//create a component

const App = () => {
  return (
    <div>
      <label className="label" for="name">
        enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getbuttonText()}
      </button>
    </div>
  );
};

// displaying the comp

ReactDOM.render(<App />, document.querySelector("#root"));

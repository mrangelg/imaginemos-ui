import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));

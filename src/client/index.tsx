import * as React    from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

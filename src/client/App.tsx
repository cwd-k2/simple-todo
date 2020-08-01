import * as React    from "react";
import * as ReactDOM from "react-dom";

import Login from "./Login";

import "./App.scss";

interface AppProps {};

interface AppState {
  authorized: Boolean,
  loading: Boolean
};

class App extends React.Component<AppProps,AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { authorized: false, loading: true };
  }

  render() {
    if (this.state.loading)
      return <h2>Loading...</h2>
    else
      return this.state.authorized ? <h1>Hello</h1> : <Login />;
  }

  componentDidMount() {
    fetch("/auth/ping", {
      method: "POST"
    }).then((res) => {
      if(res.status === 200) this.setState({ authorized: true });
      this.setState({ loading: false });
    });
  }
}

export default App;

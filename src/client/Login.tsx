import * as React    from "react";
import * as ReactDOM from "react-dom";

interface LoginProps {};
interface LoginState {
  username: String,
  password: String;
};

class Login extends React.Component<LoginProps,LoginState> {

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  login() {
    console.log("login challenge");
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then((res) => {
      if (res.status === 200) location.reload();
    });
  }

  render() {
    return (
      <div>
        <h1>Login required</h1>
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({ username: e.target.value });
        }} />
        <input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({ password: e.target.value });
        }} />
        <input type="button" onClick={this.login.bind(this)} value="login" />
      </div>
    );
  }
}

export default Login;

import React from "react";
import Nav from "./Nav";
import { Redirect } from "react-router-dom";
import "./Login.css";
import $ from "jquery";

class Login extends React.Component {
  onSubmit = () => {
    return <Redirect to="/signup/" />;
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  logUserIn(event) {
    event.preventDefault();

    var userData = {
      email: $("#email").val(),
      password: $("#password").val()
    };

    this.setState({
      email: userData.email,
      password: userData.password
    });

    $.ajax({
      url: "http://localhost:8000/login",
      type: "POST",
      data: userData,
      datatype: "json",
      success: function() {
        console.log("login done");
      }
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="login-container">
          <div className="login-div">
            <div className="login-contant">
              <h1>Log in</h1>
              <form onSubmit={this.logUserIn.bind(this)}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                ></input>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
                <p>Forgot your password?</p>
                <input value="Log In" className="log-but" type="submit"></input>
                <div className="radio">
                  <input type="checkbox" checked></input>
                </div>
                <div>
                  <a href="/signup" onClick={this.onSubmit}>
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

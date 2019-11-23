import React from "react";
import Nav from "./Nav";
import "./Login.css";
import $ from "jquery";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signUserUp(event) {
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
      url: "http://localhost:8000/register",
      type: "POST",
      data: userData,
      datatype: "json",
      success: function() {
        console.log("signup done");
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
              <h1>Sign Up</h1>
              <form onSubmit={this.signUserUp.bind(this)}>
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

                <input value="Sign Up" class="log-but" type="submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

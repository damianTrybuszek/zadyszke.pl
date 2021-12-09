import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import LoginForm from "../components/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;

import { Component } from "react";
import NavbarTop from "../components/ui/NavbarTop";
import LoginForm from "../components/loginPageComponents/LoginForm";

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

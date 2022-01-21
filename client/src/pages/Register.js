import { Component } from "react";
import NavbarTop from "../components/ui/NavbarTop";
import RegisterForm from "../components/registerPageComponents/RegisterForm";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        
        <NavbarTop />
            <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;

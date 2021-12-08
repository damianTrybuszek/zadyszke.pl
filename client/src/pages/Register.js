import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import RegisterForm from "../components/RegisterForm";
import { Form, Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";




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

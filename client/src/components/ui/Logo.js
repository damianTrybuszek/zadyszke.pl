import { Component } from "react";
import logo from "../../graphics/logo.svg";

class Logo extends Component {
  render() {
    return (
      <img
        alt="Zadyszke.pl"
        src={logo}
        width="200"
        height="50"
        className="d-inline-block align-top"
      />
    );
  }
}

export default Logo;

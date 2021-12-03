import { Component } from "react";
import NavbarTop from "../components/NavbarTop";

class MainLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <h1>Main Page for logged in users</h1>
      </div>
    );
  }
}

export default MainLoggedInPage;

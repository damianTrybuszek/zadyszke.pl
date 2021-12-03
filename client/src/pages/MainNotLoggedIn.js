import { Component } from "react";
import NavbarTop from "../components/NavbarTop";

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <h1>Main page for users that are not logged in</h1>
      </div>
    );
  }
}

export default MainNotLoggedInPage;

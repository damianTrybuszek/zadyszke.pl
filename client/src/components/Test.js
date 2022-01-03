import { Component } from "react";

class WelcomeUser extends Component {
  constructor(props) {
    super(props);
    this.user = "";
    this.state = {
      numbersOfClicks: 0,
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.setState({ numbersOfClicks: this.state.numbersOfClicks + 1 });
  }

  render() {
    return (
      <div>
        <h3>Hello {this.props.user}</h3>
        <h4 onClick={this.clicked}>My state is: {this.state.numbersOfClicks}</h4>
      </div>
    );
  }
}
export default WelcomeUser;

import React from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
        <div className="App">
          <Navbar/>
        </div>
    )
  }

}

export default App;

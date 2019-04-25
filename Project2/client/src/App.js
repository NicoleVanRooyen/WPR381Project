import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: ""};
  }
  callAPI(){
    fetch('http://localhost:9000/testAPI')
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  }
  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a
            //className="App-link"
            //href="https://reactjs.org"
            //target="_blank"
            //rel="noopener noreferrer"
          >
            Weather Forecast
            <p>Enter a zipcode below to get the current weather for that area</p>
          </a>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          <p className = "Enter-details">
            <form>
              <input type="text" name="postalcode" placeholder="Enter Postal Code"></input>
              <input type="submit" value="ENTER" onClick="sendData()"></input>
            </form>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

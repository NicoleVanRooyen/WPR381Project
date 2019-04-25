import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Output extends React.Component {
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

  onSubmit = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a>
            Weather Output
          </a>
          <p className="App-intro">{this.state.apiResponse}</p>
          <p className = "Enter-details">
            <form>
            <input type="submit" onClick={this.onSubmit} value="BACK" ></input>
            </form>
          </p>
        </header>
      </div>
    );
  }
}
export default Output;
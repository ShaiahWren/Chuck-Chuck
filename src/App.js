import React, { Component } from 'react';
import Quotes from "./components/Quotes";
import './App.css';
import './images/chuckPhoto.jpg';

class App extends Component {
  state = {
    chuckData: Quotes,
  };

loadData = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random/");
  const data = await response.json();
  console.log("The data is: ", data)
  return data;
  
};

handleClick = async () => {
  const chuckData = await this.loadData();
  this.setState({
    chuckData: chuckData,
  });
}

async componentDidMount() {
  const chuckData = await this.loadData();

  this.setState({
    chuckData: chuckData,
  });
}

  
render() {
  const  chuckData = this.state.chuckData;
  return (
    <div className="App">
      <header className="App-header">
      <h1>Chuck Says</h1>
      </header>
      {this.state.chuckData ? (
        <Quotes allOfChuck={chuckData} />
      ) : (
        <p>No User Data Loaded!</p>
      )}
      <button onClick={this.handleClick}>Refresh Quote</button>

    </div>
  );
      
}
}

export default App;

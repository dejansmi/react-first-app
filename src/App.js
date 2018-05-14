import React, { Component } from 'react';
import logo from './logo.svg';
import NavLink from './NavLink.js';
import PripremaCarusel from './PripremaCarusel.js';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: 1000};

    // This binding is necessary to make `this` work in the callback
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <h1>Header 1</h1>
          <h2>Header 1.2</h2>
        </div>
        <input type="number" value={this.state.inputValue} onChange={this.updateInputValue}/>
        <div>{this.state.inputValue}</div>
        <PripremaCarusel period={this.state.inputValue} />

        <div class="container">
          <h2>Contextual Link Colors</h2>
          <p>Hover over the links.</p>
          <nav class="navbar bg-dark fixed-bottom col-6">
          <NavLink active to="/prva" >Prva</NavLink>
          <NavLink active to="/druga">Druga</NavLink>
          <NavLink active to="/treca" success>Treca</NavLink>
          <NavLink active to="/cetvrta">Cetvrta</NavLink>
          <span className="text-white">Postu kupovina srba</span>
          </nav>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
          <p>dfsd dfds df dsfd</p>
        </div>
      </div>


    );
  }
}

export default App;

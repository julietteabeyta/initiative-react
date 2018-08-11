import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class App extends Component {

  static propTypes = {
    history: PropTypes.object,
  }

  nav = e => {
    e.preventDefault();
    const route = e.target.id;
    this.props.history.push(`/${route}`);
  }

  render() {
    return (
      <div className="app-container">
        <button
          className="nav-buttons"
          id="charactersheet"
          onClick={this.nav}>
            Character Sheet
        </button>
        <button
          className="nav-buttons"
          id="diceroller"
          onClick={this.nav}>
            Dice
        </button>
        <button
          className="nav-buttons"
          id="settings"
          onClick={this.nav}>
            Settings
        </button>
      </div>
    );
  }
}

export default App;

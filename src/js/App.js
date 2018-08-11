import React, { Component } from 'react';
import NavButton from './NavButton';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <NavButton
          route="charactersheet"
          onClick={this.nav}
          name="Character Sheet" />
        <NavButton
          route="diceroller"
          onClick={this.nav}
          name="Dice Roller" />
        <NavButton
          route="settings"
          onClick={this.nav}
          name="Settings" />
      </div>
    );
  }
}

export default App;

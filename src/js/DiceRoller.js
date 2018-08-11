import React, {Component} from 'react';
import NavButton from './NavButton'

class DiceRoller extends Component {
  render() {
    return(
      <div>
        <NavButton name="Back" isBack/>
        <h1>Dice Roller</h1>
      </div>
    );
  }
}

export default DiceRoller;
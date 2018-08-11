import React, {Component} from 'react';
import NavButton from './NavButton'
import Die from './Die'
import '../styles/App.css';

class DiceRoller extends Component {
  render() {
    return(
      <div className="dice-roller">
        <NavButton name="Back" isBack/>
        <h1>Dice Roller</h1>
        <div className="dice-parent">
          <Die sides={20} />
          <Die sides={12} />
          <Die sides={10} />
          <Die sides={8} />
          <Die sides={6} />
          <Die sides={4} />
        </div>
      </div>
    );
  }
}

export default DiceRoller;
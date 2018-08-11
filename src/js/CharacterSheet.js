import React, { Component } from 'react';
import NavButton from './NavButton';
import '../styles/App.css';

class CharacterSheet extends Component {
  render(){
    return(
      <div className="character-sheet">
        <NavButton name="Back" isBack/>
        <h1>Character Sheet</h1>
      </div>
    );
  }
}

export default CharacterSheet;
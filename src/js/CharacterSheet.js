import React, { Component } from 'react';
import NavButton from './NavButton';

class CharacterSheet extends Component {
  render(){
    return(
      <div>
        <NavButton name="Back" isBack/>
        <h1>Character Sheet</h1>
      </div>
    );
  }
}

export default CharacterSheet;
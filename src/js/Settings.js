import React, { Component } from 'react';
import NavButton from './NavButton';

class Settings extends Component {
  render(){
    return(
      <div>
        <NavButton name="Back" isBack/>
        <h1>Settings</h1>
      </div>
    );
  }
}

export default Settings;
import React, { Component } from 'react';
import NavButton from './NavButton';
import '../styles/App.css';

class Settings extends Component {
  render(){
    return(
      <div className="settings">
        <NavButton name="Back" isBack/>
        <h1>Settings</h1>
      </div>
    );
  }
}

export default Settings;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class BackButton extends Component {


// static propTypes = {
//     history: PropTypes.object,
// }

// nav = e => {
//     e.preventDefault();
//     const route = e.target.id;
//     this.props.history.push(`/${route}`);
// }
  static contextTypes = {
      router: () => true,
  }
  
  render() {
  return (
      <button
          className="button"
          onClick={this.context.router.history.goBack}>
          Back
      </button>
  )
  }
}

export default BackButton;
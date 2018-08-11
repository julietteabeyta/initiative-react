import React, { Component } from 'react';
import '../styles/App.css';

class NavButton extends Component {

  static contextTypes = {
      router: () => true,
  }

  nav = e => {
    e.preventDefault();
    const routerHistory = this.context.router.history;
    if (this.props.isBack) {
      routerHistory.goBack()
    } else {
      const route = this.props.route;
      routerHistory.push(`/${route}`);
    }
  }

  render() {
    return (
      <button
        className="nav-buttons"
        onClick={this.nav}>
          {this.props.name}
      </button>
    )
  }
}

export default NavButton;
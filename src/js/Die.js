import React, {Component} from 'react';

class Die extends Component {
  state = {
    rollValue: this.props.sides,
    rolling: false
  }
  roll = e => {
      e.preventDefault();

      const sides = this.props.sides;
      this.setState({ rollValue: Math.ceil(Math.random() * sides), rolling: true });
  }

  render() {
    const sides = this.props.sides;
    const sidesString = `d${sides}`;
    const isD4 = sides === 4;
    return (
        <div class="die-parent">
          <div>{sides}</div>
          <div id={sidesString} className={this.state.rolling ? 'rolling die' : 'die'} data-d4={isD4 ? this.state.rollValue : null} onClick={this.roll}>
              <div className="readout">{this.state.rollValue}</div>
          </div>
        </div>
      );
  }
}

export default Die;
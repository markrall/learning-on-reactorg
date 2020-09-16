import React from 'react';

import Button from './Button'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleToggleEvent = this.handleToggleEvent.bind(this);
  }

  handleToggleEvent() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Button onClick={this.handleToggleEvent}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </Button>
    );
  }
}

export default Toggle;

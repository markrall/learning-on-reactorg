import React from 'react';

import styled from "styled-components";

const ClockStyles = styled.div`
  p {
    font-size: 3rem;
    font-weight: 100;
    text-align: center;
  }
`;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <ClockStyles>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </ClockStyles>
    );
  }
}

export default Clock;
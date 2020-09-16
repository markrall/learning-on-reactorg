import React from 'react';

import styled from "styled-components";

import TextInput from './TextInput';

const FieldsetStyles = styled.fieldset`
  border: none;
  margin-bottom: .5rem;
`;

const scaleNames = {
  c: 'Celcius',
  f: 'Farenheit'
};

function toCelcius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}

function toFarenheit(celcius) {
  return (celcius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
  if(props.celcius >= 100) 
    return <p>The water will boil</p>;
  return <p>The water will not boil</p>;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return ``;
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <FieldsetStyles>
        <legend>Enter the temperature in {scaleNames[scale]}</legend>
        <TextInput
          id={this.props.scale}
          type="number"
          value={temperature}
          onChange={this.handleChange}
          placeholder="Enter a temperature"
          required={true}
        />
      </FieldsetStyles>
    );
  }
}

class TempCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    this.state = {
      scale: "c",
      temperature: "",
    };
  }

  handleCelciusChange(temperature) {
    this.setState({
      scale: "c",
      temperature,
    });
  }

  handleFarenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature,
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const farenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleCelciusChange} />
        <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleFarenheitChange} />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}

export default TempCalculator;
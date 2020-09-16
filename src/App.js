import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Toggle from './components/Toggle';
import List from './components/List';
import Form from './components/Form';
import TempCalculator from './components/TempCalculator';

const GlobalStyle = createGlobalStyle`
  :root {
    --powder-blue: rgba(190, 233, 232, 1);
    --maximum-blue: rgba(98, 182, 203, 1);
    --indigo-dye: rgba(27, 73, 101, 1);
    --columbia-blue: rgba(202, 233, 255, 1);
    --carolina-blue: rgba(95, 168, 211, 1);
  }

  body {
    background: linear-gradient(145deg, var(--indigo-dye), var(--carolina-blue));
    color: var(--columbia-blue);
  }

  h1, h2, h3, h5{
    font-family: 'Montserrat', sans-serif;
  }

  h4, h6 {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 56.25rem;
  padding: 3rem;
`;

const Intro = styled.div`
  h1 { font-weight: 300; }
`;

const ComponentWrapper = styled.section`
  background-color: rgba(202, 233, 255, 0.15);
  border: 1px solid var(--columbia-blue);
  border-radius: 3px;
  margin-bottom: 1rem;
  padding: 1rem 3rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Intro>
            <h1>Hello World!</h1>
          </Intro>
          <ComponentWrapper>
            <h2>Clock</h2>
            <Clock />
          </ComponentWrapper>
          <ComponentWrapper>
            <h2>Toggle</h2>
            <Toggle />
          </ComponentWrapper>
          <ComponentWrapper>
            <h2>Login Control</h2>
            <LoginControl />
          </ComponentWrapper>
          <ComponentWrapper>
            <h2>Lists &amp; Keys</h2>
            <List data={[1, 2, 3, 4, 5]} />
          </ComponentWrapper>
          <ComponentWrapper>
            <h2>Forms</h2>
            <Form />
          </ComponentWrapper>
          <ComponentWrapper>
            <h2>Lifting Up State</h2>
            <TempCalculator />
          </ComponentWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

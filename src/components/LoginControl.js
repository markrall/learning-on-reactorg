import React from 'react';

import Button from './Button';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLoginClickEvent = this.handleLoginClickEvent.bind(this);
    this.handleLogoutClickEvent = this.handleLogoutClickEvent.bind(this);
  }

  handleLoginClickEvent() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClickEvent() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    button = isLoggedIn ? (
      <Button onClick={this.handleLogoutClickEvent}>Logout</Button>
    ) : (
      <Button onClick={this.handleLoginClickEvent}>Login</Button>
    );

    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>{button}</div>
      </>
    )
  }

}

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  let message = isLoggedIn ? 
    "Welcome back!" : "Sign up or login";

  return (
    <h3>{message}</h3>
  );
}

export default LoginControl;
import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false
    };
  }
  //like the try/catch block in JS
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something happened</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;

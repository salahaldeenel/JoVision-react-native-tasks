import React, { Component } from 'react';

import Task16 from './Tasks/Task16';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      content: false
    };
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
     <Task16></Task16>
    );
  }
}





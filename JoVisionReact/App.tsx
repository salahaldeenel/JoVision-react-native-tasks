import React, { Component } from 'react';
import Task17 from './Tasks/Task17';
import Task16 from './Tasks/Task16';
import Task18 from './Tasks/Task18';

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
     //<Task16></Task16>
    // <Task17></Task17>
    <Task18></Task18>
    );
  }
}





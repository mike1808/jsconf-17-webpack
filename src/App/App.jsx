import React, { Component } from 'react';
import Logo from '../Logo';
import FancyButton from '../FancyButton';
import withLoadable from '../withLoadable';

import styles from './App.css';

const Counter = withLoadable(() => import(/* webpackChunkName: "counter" */ '../Counter'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { shown: false };

    this.toggleShown = this.toggleShown.bind(this);
  }

  toggleShown() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`The current state of \`shown\` is ${this.state.shown}.`);
    }
    this.setState({ shown: !this.state.shown });
  }

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <FancyButton onClick={this.toggleShown}>Toggle Counter</FancyButton>
        {this.state.shown && <Counter />}
      </div>
    );
  }
}

export default App;

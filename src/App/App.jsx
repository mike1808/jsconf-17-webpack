import React, { Component } from 'react';
import Logo from '../Logo';
import FancyButton from '../FancyButton';
import Counter from '../Counter';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { shown: false };

    this.toggleShown = this.toggleShown.bind(this);
  }

  toggleShown() {
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

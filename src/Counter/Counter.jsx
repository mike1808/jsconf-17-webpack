import React, { Component } from 'react';
import FancyButton from '../FancyButton';
import withLoadable from '../withLoadable';
import styles from './Counter.css';


const CounterIcon = withLoadable(() => import(/* webpackChunkName: "counter-icon" */ '../CounterIcon'));

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    setInterval(() => {
      this.increment();
    }, 1000);
  }

  reset = () => {
    this.setState({ current: 0 });
  };

  increment() {
    this.setState({
      current: this.state.current + 1,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.counter}>
          <CounterIcon />
          &nbsp;
          {this.state.current}
        </div>
        <FancyButton className={styles.button} onClick={this.reset}>Reset</FancyButton>
      </div>
    );
  }
}

export default Counter;

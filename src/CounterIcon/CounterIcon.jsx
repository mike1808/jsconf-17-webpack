import 'font-awesome/css/font-awesome.css';

import React from 'react';
import reusableModule from '../reusableModule';

const CounterIcon = () => (
  <i className="fa fa-clock-o something" aria-hidden="true" onClick={() => reusableModule()} />
);

export default CounterIcon;

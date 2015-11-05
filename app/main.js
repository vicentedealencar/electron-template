import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CheckoutContainer from './containers/CheckoutContainer';
import { Provider } from 'react-redux';
import initializeCheckout from './stores/initializeCheckout';
import './updater';

const store = initializeCheckout();

const elements = [
  <Provider store={store} key="p">
    <CheckoutContainer />
  </Provider>
];

// if (__DEV__) {
//   const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
//   const SliderMonitor = require('redux-slider-monitor');

//   elements.push(
//     <DebugPanel top right bottom key="debugPanel">
//       <DevTools store={store} monitor={LogMonitor}/>
//     </DebugPanel>
//   );
//   elements.push(
//     <DebugPanel left right bottom>      // ctrl+h: toggle hiding the monitor
//       <DevTools store={store}           // ctrl+j: play/pause
//                 keyboardEnabled         // ctrl+[: step backward
//                 monitor={SliderMonitor} // ctrl+]: step forward
//       />
//     </DebugPanel>
//   );
// }

ReactDOM.render(<div>{elements}</div>, document.getElementById('app'));

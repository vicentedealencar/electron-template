import React, { Component } from 'react';
import CheckoutContainer from './containers/CheckoutContainer';
import { Provider } from 'react-redux';
import initializeCheckout from './stores/initializeCheckout';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

const store = initializeCheckout();

const elements = [
  <Provider store={store}>
    {() => <CheckoutContainer />}
  </Provider>
];

// if (__DEV__) {
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

React.render(<div>{elements}</div>, document.body);

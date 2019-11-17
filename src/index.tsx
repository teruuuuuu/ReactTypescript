
/* Tutorial */
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// // import { Provider } from 'react-redux';

// import '../css/global.css';

// import Game from './Tutorial/component/Game';


// ReactDOM.render(
//   <Game />,
//   document.getElementById('app')
// );

/* Redux */
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, Store, Action } from 'redux';
// import configureStore from './Redux/store';
// import '../css/global.css';

// import { App } from './Redux/component/App';
// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );


/* Hook */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/global.css';

import Game from './Hook/component/Game';

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);

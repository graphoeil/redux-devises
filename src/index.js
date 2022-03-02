// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from "./reducers";

// Store
/* thunk permet de dispatcher plusieurs actions 
pour un même  action creator */
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

// ReactDOM
ReactDOM.render(
	<React.StrictMode>
		<Provider store={ createStoreWithMiddleWare(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
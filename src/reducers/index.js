// Imports
import { combineReducers } from 'redux';
import ReducerCountries from './ReducerCountries';
import ReducerRateExchange from './ReducerRateExchange';

/* !!! Ici nous combinons chaque reducer dans RootReducer, 
qui est injecté dans store via le Provider (index.js) !!! */

// Root reducer
const RootReducer = combineReducers({

	/* (state = {}) => state
	It is a(n arrow) function that returns its input. 
	If the input is not defined it will become the 
	default value {}
	À utiliser si aucun reducer n'est défini. */
	// state:(state = {}) => state

	/* ReducerCountries est une fonction qui retourne
	son résultat dans la clé countriesReducer ! */
	countriesReducer:ReducerCountries,

	/* ReducerRateExchange */
	rateExchangeReducer:ReducerRateExchange
	
});

// Export
export default RootReducer;
// Imports
import { GET_EXCHANGE_RATE } from '../actions';

// Initial state
const initalState = {
	rateExchangeList:[]
};

// Fonction reducer
const ReducerRateExchange = (state = initalState, action) => {

	// Taux de change
	if (action.type === GET_EXCHANGE_RATE){
		// Nous empilons les résultats au fur et à mesure dans rateExchangeList
		return { ...state, rateExchangeList:[action.payload, ...state.rateExchangeList] };
	}

	// Default
	return state;

};

// Export
export default ReducerRateExchange;
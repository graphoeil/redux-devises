// Imports
import { GET_COUNTRIES } from '../actions';

// Initial state
const initalState = {
	countries:[]
};

// Fonction reducer
const ReducerCountries = (state = initalState, action) => {

	// Liste des pays
	if (action.type === GET_COUNTRIES){
		return { ...state, countries:getCountriesInfo(action.payload) };
	}

	// Default
	return state;

};

// Nettoyer les éléments de la liste des pays
const getCountriesInfo = (data) => {
	return data.filter((country) => {
		/* Nous éliminons les pays n'ayant pas 
		de country.currencies (falsey value) */
		return country.currencies && country.currencies[0].code !== 'USD';
	}).map((country) => {
		return {
			name:country.name,
			currencyCode:country.currencies[0].code,
			flag:country.flag,
			code:country.alpha3Code
		};
	});
};

// Export
export default ReducerCountries;
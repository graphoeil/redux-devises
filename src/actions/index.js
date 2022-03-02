// Imports
import axios from 'axios';

// Actions
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_EXCHANGE_RATE = 'GET_EXCHANGE_RATES';

// Variables
const API_KEY = process.env.REACT_APP_EXCHANGE_RATES_API_KEY;

// Actions creator
// Obtenir la liste des pays
export const fetchCountries = () => {
	/* Thunk middleware for Redux. It allows writing functions with logic inside 
	that can interact with a Redux store's dispatch and getState methods. */
	return function(dispatch){
		axios.get('https://restcountries.com/v2/all').then((response) => {
			/* Thunk permet de faire plusieurs dispatch */
			dispatch({ type:GET_COUNTRIES, payload:response.data });
		});
	};
};

// Récupérer les infos de la monnaie d'un pays
export const fetchRateExchange = (country) => {
	// Thunk
	return function(dispatch){
		axios.get(`http://api.exchangeratesapi.io/v1/${formatedDate(new Date())}?access_key=${API_KEY}
			& base = USD
			& symbols = ${country.currencyCode}`).then((response) => {
				// dispatch vers tous les reducers !!!
				/* Attention, ici country est un tableau à la case 0 => currencyCode !!!
				Nous récupérons le taux de change du pays dans response.data.rates qui contient
				tous les taux de change mondiaux. Nous passons également les données du pays
				dans le payload pour avoir le nom, drapeau ... pour l'affichage */
				dispatch({ type:GET_EXCHANGE_RATE, payload:{ rates:response.data.rates[country[0].currencyCode], ...country } });
			});
	};
};

// Helpers
// Formatage de la date YYYY-MM-DD
const formatedDate = (date) => {
	return date.toISOString().split('T')[0];
};
// Mois précédent
const getLastMonth = () => {
	let now = new Date();
	now.setMonth(now.getMonth() - 1);
	return formatedDate(now);
};
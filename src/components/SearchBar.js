// Imports
import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchRateExchange } from '../actions';

// Fonction
const SearchBar = ({ countries, fetchCountries, fetchRateExchange }) => {

	// callbackUseEffect
	const callbackUseEffect = useCallback(() => {
		fetchCountries();
	},[fetchCountries]);
	// Récupérer la liste des pays
	useEffect(() => {
		callbackUseEffect();
	},[callbackUseEffect]);

	// Sélection d'un pays
	const handleChangeCountry = (e) => {
		const country = countries.filter((c) => {
			return c.code === e.target.value;
		});
		fetchRateExchange(country);
	};

	// Return
	return(
		<form className="search-bar form-group">
			<select className="form-control" onChange={ (e) => { handleChangeCountry(e); } }>
				{
					countries.map((country) => {
						// Variables
						const { name, code } = country;
						// Return
						return <option key={ code } value={ code }>
							{ name }
						</option>
					})
				}
			</select>
		</form>
	);

};

// mapDispatchToProps
/* Nous envoyons nos actions creator directement */
const mapDispatchToProps = {
	fetchCountries, fetchRateExchange
};

// mapStateToProps
const mapStateToProps = (store) => {
	/* Nous récupérons le tableau countries depuis countriesReducer
	lui même contenu dans le store !!!! */
	return { countries:store.countriesReducer.countries };
};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
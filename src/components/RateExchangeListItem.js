// Imports
import React from 'react';
import { AreaChart } from 'react-chartkick';
import 'chartkick/chart.js';

// Fonction
const RateExchangeListItem = (props) => {

	// Variables
	const { rates } = props.rateExchange;
	const { name, flag, currencyCode } = props.rateExchange[0];

	// Formatage des données
	const data = () => {
		const today = new Date();
		const yesterday = new Date();
		yesterday.setDate(today.getDate() - 1);
		const todayFormated = today.toISOString().split('T')[0];
		const yesterDayFormated = yesterday.toISOString().split('T')[0];
		return {
			[yesterDayFormated]:rates,
			[todayFormated]:rates
		};
	};
	
	// Return
	return(
		<tr>
			<td>
				{ name }<br/>
				<img src={ flag } alt={ name } width="100" style={ { border:'1px solid black' } }/>
			</td>
			<td className="col-10">
				<AreaChart xtitle="Date" ytitle={ currencyCode } data={ data() }/>
			</td>
		</tr>
	);

};

// Export
export default RateExchangeListItem;
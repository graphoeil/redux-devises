// Imports
import React from 'react';
import { connect } from 'react-redux';
import RateExchangeListItem from './RateExchangeListItem';

// Fonction
const RateExchangeList = (props) => {

	// Variables
	const { rateExchangeList } = props;

	// Return
	return(
		<table className="table">
			<thead>
				<tr>
					<th>Pays</th>
					<th className="col-md-6">Valeur de la monnaie par rapport au $</th>
				</tr>
			</thead>
			<tbody>
				{
					rateExchangeList.map((rate, index) => {
						return <RateExchangeListItem key={ index } rateExchange={ rate }/>
					})
				}
			</tbody>
		</table>
	);

};

// Récupérer le state depuis le store
const mapStateToProps = (store) => {
	/* Nous récupérons la liste des rates depuis ReducerRateExchange */
	return { rateExchangeList:store.rateExchangeReducer.rateExchangeList };
};

// Export
export default connect(mapStateToProps)(RateExchangeList);
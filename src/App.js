// Imports
import React from 'react';
import SearchBar from "./components/SearchBar";
import RateExchangeList from './components/RateExchangeList';

// Fonction
function App(){

	// Return
	return(
		<React.Fragment>
			<SearchBar/>
			<RateExchangeList/>
		</React.Fragment>
	);

};

// Export
export default App;
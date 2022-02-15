import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');

	console.log(searchQuery);

	const onChangeSearch = (query) => {
		console.log(query);
		setSearchQuery(query);
	};

	return (
		<Searchbar
			placeholder='Search repositories'
			onChangeText={onChangeSearch}
			value={searchQuery}
		/>
	);
};

export default Search;

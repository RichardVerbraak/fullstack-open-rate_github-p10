import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = ({ refetch }) => {
	const [searchQuery, setSearchQuery] = useState('');

	console.log(searchQuery);

	const onChangeSearch = (query) => {
		setSearchQuery(query);
		refetch({ searchKeyword: query });
	};

	return (
		<Searchbar
			placeholder='Search repositories'
			onChangeText={onChangeSearch}
			value={searchQuery}
			iconColor='grey'
			inputStyle={{ padding: 15 }}
		/>
	);
};

export default Search;

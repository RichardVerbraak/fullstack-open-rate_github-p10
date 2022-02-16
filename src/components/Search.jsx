import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const Search = ({ refetch }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [value] = useDebounce(searchQuery, 500);

	const onChangeSearch = (query) => {
		setSearchQuery(query);
		refetch({ searchKeyword: value });
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

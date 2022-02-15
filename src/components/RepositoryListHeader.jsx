import { View } from 'react-native';
import React from 'react';
import Search from './Search';
import RepositorySortMenu from './RepositorySortMenu';

const RepositoryListHeader = ({ refetch }) => {
	return (
		<View>
			<Search />
			<RepositorySortMenu refetch={refetch} />
		</View>
	);
};

export default RepositoryListHeader;

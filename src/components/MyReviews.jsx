import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

import RepositoryReview from './RepositoryReview';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => {
	return <View style={styles.separator} />;
};

const MyReviews = () => {
	const { data, loading } = useQuery(GET_USER, {
		variables: {
			includeReviews: true,
		},
	});
	const navigate = useNavigate();

	const navigateToRepo = (url) => {
		navigate(`/${url}`);
	};

	const reviews = data && data.me.reviews.edges;
	const user = data && data.me;

	// Flex: 1 on the parent of the FlatList will fix the not scrolling to the bottom thing
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={reviews}
				renderItem={({ item: { node } }) => {
					return (
						<RepositoryReview
							review={node}
							user={user}
							navigate={navigateToRepo}
						/>
					);
				}}
				keyExtractor={(item, index) => {
					return index.toString();
				}}
				ItemSeparatorComponent={ItemSeparator}
			/>
		</View>
	);
};

export default MyReviews;

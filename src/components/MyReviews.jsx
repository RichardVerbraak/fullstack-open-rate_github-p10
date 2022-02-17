import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

import RepositoryReview from './RepositoryReview';

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

	const reviews = data && data.me.reviews.edges;

	return (
		<View>
			<FlatList
				data={reviews}
				renderItem={({ item: { node } }) => {
					return <RepositoryReview review={node} />;
				}}
				keyExtractor={({ node: { id } }) => id}
				ItemSeparatorComponent={ItemSeparator}
			/>
		</View>
	);
};

export default MyReviews;

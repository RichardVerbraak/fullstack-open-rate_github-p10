import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

import Constants from 'expo-constants';

// A 'shortcut' to using Relay style pagination which is a one size fits all type of deal without using the read and merge functions from the cache
// Source on https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination

// The read function will specify what happens when a field in the cache is being read
// Merge function runs when a field is being written to the cache and you can specify how to store it in the cache
// https://www.apollographql.com/docs/react/caching/cache-field-behavior/

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				repositories: relayStylePagination(),
			},
		},
		Repository: {
			fields: {
				reviews: relayStylePagination(),
			},
		},
	},
});

const httpLink = createHttpLink({
	uri: Constants.manifest.extra.uri,
});

const createApolloClient = (authStorage) => {
	const authLink = setContext(async (_, { headers }) => {
		try {
			// get the authentication token from storage if it exists
			const accessToken = await authStorage.getAccessToken();

			// return the headers to the context so httpLink can read them
			return {
				headers: {
					...headers,
					Authorization: accessToken ? `Bearer ${accessToken}` : '',
				},
			};
		} catch (error) {
			console.log(error);
			return {
				headers,
			};
		}
	});

	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache,
	});
};

export default createApolloClient;

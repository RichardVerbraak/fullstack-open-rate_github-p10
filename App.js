import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

import { Provider as PaperProvider } from 'react-native-paper';

import Constants from 'expo-constants';

import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
	console.log(Constants.manifest.extra.env);

	return (
		<NativeRouter>
			<ApolloProvider client={apolloClient}>
				<AuthStorageContext.Provider value={authStorage}>
					<PaperProvider>
						<Main />
					</PaperProvider>
				</AuthStorageContext.Provider>
			</ApolloProvider>
		</NativeRouter>
	);
};

export default App;

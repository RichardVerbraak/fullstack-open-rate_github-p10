import { useApolloClient } from '@apollo/client';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = ({ text }) => {
	const navigate = useNavigate();
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
		navigate('/');
	};

	return (
		<Pressable
			onPress={() => {
				signOut();
			}}
		>
			<Text style={text}>Sign Out</Text>
		</Pressable>
	);
};

export default SignOut;

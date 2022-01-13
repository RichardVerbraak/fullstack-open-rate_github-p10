import React from 'react';
import { Pressable, Text } from 'react-native';

const AppBarTab = ({ text }) => {
	return (
		<Pressable>
			<Text style={text}>Repositories</Text>
		</Pressable>
	);
};

export default AppBarTab;

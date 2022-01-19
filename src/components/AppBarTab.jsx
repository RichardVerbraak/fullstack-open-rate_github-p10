import React from 'react';
import { Pressable, Text } from 'react-native';

const AppBarTab = ({ text, title }) => {
	return (
		<Pressable>
			<Text style={text}>{title}</Text>
		</Pressable>
	);
};

export default AppBarTab;

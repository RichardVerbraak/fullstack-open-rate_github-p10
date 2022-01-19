import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ text, title, url }) => {
	return (
		<Link to={url}>
			<Text style={text}>{title}</Text>
		</Link>
	);
};

export default AppBarTab;
